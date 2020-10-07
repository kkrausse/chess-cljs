(ns chess.core
  (:require
    [chess.components.board :refer [board]]
    [html-cljs.html :as html :refer [cmp]]
    [html-cljs.hooks :refer [use-effect use-state use-interval mkhook]]
    [chess.utils :refer [zip nilmap]]
    [clojure.core.async :refer [go >! <! chan]]
    [chess.engine.hook :refer [use-async-engine]]))

(def use-chan
  (mkhook [channel] [[cur setcur] (use-state "no status")
                     seteffect (use-effect)]
          (seteffect (fn []
                       (print "mounting hook")
                       (go (loop [item (<! channel)]
                             (if-let [item item]
                               (do
                                 (println "putting " item)
                                  (setcur #(do item))
                                   (recur (<! channel)))
                               (setcur #(do nil)))))
                       identity))
          (cur)))

(defn abs [n] (max n (- n)))

(def dots (cmp [] [[t togglet] (use-interval 300)]
               {:type "span"
                :content (let [numdots (abs (- (mod t 6) 3))]
                           (apply str (map #(do ".") (range numdots))))}))

(def status-bar
  (cmp [status-chan] [status (use-chan status-chan)
                      seteffect (use-effect)]
       {:type "div"
        :style {"text-align" "left" "margin-left" "13%"}}
       (filter some?
               (list 
                 (list (cmp [status] {:type "span"
                                      :content status}) status)
                 (when (clojure.string/includes? status "loading")
                   (list dots))))))

(defn game []
  (let [status-chan (chan 2)]
    (cmp [] [[board-data moves on-move] (use-async-engine :white status-chan)]
         {:type "div"
          :style {"width" "100%" "height" "100%"}}
         (list
           (list status-bar status-chan)
           (list board
                 :board board-data
                 :player :white
                 :moves moves
                 :on-move on-move)))))

(defonce mounted (atom nil))

(defn mount-root [component]
  (swap! mounted
         (fn [old-vdom-node]
           (if (some? old-vdom-node)
             (html/destroy-node old-vdom-node))
           (html/mount
             (.getElementById js/document "app")
             component))))

(defn ^:export init []

  (mount-root (game))
  
  )
