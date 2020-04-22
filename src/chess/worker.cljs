(ns chess.worker
  (:require [chess.engine.core :refer [Engine
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [chess.engine.local-engine :refer [local-engine]]
            [chess.utils :refer [init-worker match]]))

(defn init []
  (init-worker
    (fn [msg]
      (let [r (match (:cmd msg)
             :apply-move (apply apply-move (cons local-engine (msg :args)))
             :best-move (apply best-move (cons local-engine (msg :args)))
             :possible-moves (apply possible-moves (cons local-engine (msg :args)))
             :else "no dice!")]
        r))))
