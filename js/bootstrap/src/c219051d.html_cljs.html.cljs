(ns html-cljs.html
  "basically a mini react with a virtual dom and a diffing algorithm
  need to fix the child element problem and force id's on child elements
  because i'm just using an inefficient algorithm rn"
  (:require-macros [html-cljs.html :refer [component cmp]])
  (:require [clojure.string :as string]
            [clojure.walk]))

(declare render-to-state refresh steralized replace-el clear-children rerender-children)

(defn add-callbacks [el event-map]
  (doseq [[event-name f] event-map]
    (.addEventListener el event-name f)))

; the exact inverse of the above fn
(defn rm-callbacks [el event-map]
  (doseq [[event-name f] event-map]
    (.removeEventListener el event-name f)))

(defn set-style [el styles]
  (doseq [[k v] styles]
    (aset (.-style el) k v)))

; adds :el to the state atom and its children this
(defn domify [vdom-state-atm]
  "this creates an html element for the vdom state and its children.
  It is a call that we want to avoid if at all possible since its expensive to
  create all the dom elements

   required keys:
    :type

   optional keys:
    :on [event-name, callback] - callback will be passed the event
                                            and the element
    :style - pass dictionary and styles set as el.style[key] = value
    :content - a string to pass to the innerHTML
    :children - seq of children that will be recursively called"

  (let [state @vdom-state-atm
        node (dissoc (state :cached-render) :children)
        el (.createElement js/document (node :type))
        user-mods {:type identity
                   :identifier identity ;nothing. used purely to trick the rerender alg
                   :class #(set! (.-className el) %)
                   :elem-props #(doseq [[k v] %]
                                 (aset el k v))
                   :style #(doseq [[k v] %]
                             (aset (.-style el) k v))
                   :on #(add-callbacks el %)
                   :href #(set! (.-href el) %)
                   :content #(set! (.-innerHTML el) %)}]
    (doseq [[k v] node]
      ((user-mods k) v))
    (doseq [child (state :vdom-children)]
      (.appendChild el (domify child)))
    (swap! vdom-state-atm #(assoc % :el el))
    el))

; does the least amount of work possible to run a diff to see if we need to
; rerender something on this node (not children)
(defn ^:private create-vdom [node-func]
  (let [vdom-state (atom {})
        render (node-func vdom-state)]
    #_(prn "creating vdom el: " (render))
    (reset! vdom-state (render-to-state render))
    vdom-state))

; vdom-el is a function 2nd order function where you pass in the hooks and it
; returns a function that takes no arguments and returns the rundered object
(defn mount [html-el component]
  (clear-children html-el)
  (.appendChild
    html-el
    (domify (create-vdom component))))

(defn this-not-that [this-map that-map]
  (let [ti (if (nil? this-map) {} this-map)
        ta (if (nil? that-map) {} that-map)]
    (into {} (filter (fn [[k v]]
                       (not (= (hash (ta k)) (hash v))))
                     ti))))

; if the hashes differ in the callbacks, it updates them!
(defn refresh-events [el old-render new-render]
  (rm-callbacks el (this-not-that (old-render :on) (new-render :on)))
  (add-callbacks el (this-not-that (new-render :on) (old-render :on))))

(defn refresh-style [el old-render new-render]
  (set-style el (this-not-that (new-render :style) (old-render :on))))

; pass the mounted vdom state atom & will refresh in place
(defn refresh
  "old-vdom assumed to be domified. new-vdom assumed not to have been"
  ([vdom-atm old-vdom]
    (let [old-render (old-vdom :cached-render)
          new-vdom @vdom-atm
          new-render (new-vdom :cached-render)]
      #_(prn "comparing old: " (steralized old-render) " to new " (steralized new-render))
      ; compare and remount if necessary
      (if (= (steralized old-render) (steralized new-render))
        (do
          #_(prn "refreshing styles for " old-render)
          (refresh-events (old-vdom :el) old-render new-render)
          (refresh-style (old-vdom :el) old-render new-render)
          (doseq [[old-child new-child] (map vector (old-vdom :vdom-children) (new-vdom :vdom-children))]
            (swap! new-child #(merge @old-child %))
            (refresh new-child @old-child)))
        (replace-el (old-vdom :el) (domify vdom-atm)))))
  ([vdom-atm]
    (let [vstate @vdom-atm]
      (swap! vdom-atm #(merge % (render-to-state (% :render))))
      (refresh vdom-atm vstate))))

(defn render-to-state [render]
  (let [cached-render (render)]
    {:vdom-children (for [child (cached-render :children)]
                      (create-vdom child))
     :cached-render cached-render
     :render render}))

(defn steralized [vdom]
  "now we just set remove callbacks and styles since there is optimized updating
  for both of these"
  (clojure.walk/postwalk
           #(if (fn? %) "fn" %)
           (dissoc vdom :style :on)))

(defn replace-el [old-el new-el]
  (.replaceChild (.-parentNode old-el) new-el old-el))

(defn clear-children [el]
  (if (.-firstChild el)
    (do (.removeChild el (.-firstChild el))
        (clear-children el))
    el))
