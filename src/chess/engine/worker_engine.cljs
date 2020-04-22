(ns chess.engine.worker-engine
  (:require [chess.engine.core :refer [Engine
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [clojure.core.async :refer [go go-loop >! <! chan close!]]
            [chess.utils :refer [zip match plusminus maxf load-worker]]))

(defn submit-command [worker-chan cmd & args]
  (go (let [rc (chan 10)]; need to have buffer because it will get locked.. I think
        (>! worker-chan
            [{:cmd cmd
              :args args}
             rc])
        (<! rc))))

(defn printl [x]
  (prn "printl: " x)
  x)

(def worker-engine
  (let [c (load-worker "/chess-cljs/js/worker.js")]
    (prn "loaded worker, theoretically")
    (reify Engine
      (apply-move [_ board move] (go (let [r (<! (submit-command c :apply-move board move))]
                                       (prn "move response: " r)
                                       r)))

      (possible-moves [_ board color] (go (<! (submit-command c :possible-moves board color))))
      
      (best-move [_ board color] (go (printl (<! (submit-command c :best-move board color))))))))
