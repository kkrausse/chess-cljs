(ns chess.worker
  (:require
    ;eval stuff
    [cljs.js :as cljs]
    [shadow.cljs.bootstrap.browser :as boot]
   ; engine stuff. no longer required, really 
   [chess.engine.core :refer [Engine
                              other-color
                              apply-move
                              possible-moves
                              best-move]]
   [chess.engine.local-engine :refer [local-engine]]
   [clojure.core.async :refer [go go-loop >! <! chan close!]]
   [chess.utils :refer [match asset-path]]
   [cljs.reader :refer [read-string]]))

;; Set up eval environment

(defonce c-state (cljs/empty-state))

(defonce inited (chan 1))

(defonce _
         (boot/init c-state
                    {:path (asset-path "/js/bootstrap")}
                    (fn []
                      (go (>! inited true) (close! inited)))))

(defn init-worker [handler]
  "handler is a function that returns something on a channel always"
  ;FIXME refactor this thing to thread it (i.e. (-> e ...)
  
  (aset js/self "onmessage" (fn [^js e] (go (js/postMessage (prn-str (<! (handler (read-string (.-data e))))))))))

(defn eval-form [source]
  (let [c (chan 1)]
    (cljs/eval
      c-state
      source
      {:eval cljs/js-eval
       :load (partial boot/load c-state)}
      #(go 
         (>! c %)
         (close! c)))
    c))

(defn pf [thing]
  (prn thing)
  thing)

(defn init []
  (init-worker
    (fn [msg]
      (go
        (<! inited)
        (<! (eval-form msg))))))
