(ns chess.engine.hook
  (:require-macros [html-cljs.hooks :refer [mkhook]])
  (:require [chess.engine.core :refer [init-board
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [chess.engine.local-engine :refer [local-engine]]
            [chess.engine.worker-engine :refer [worker-engine]]
            [html-cljs.html :as html]
            [html-cljs.hooks :refer [use-state use-effect]]
            [clojure.core.async :refer [go >! <! chan]]))

(def use-async-engine
  (mkhook [my-color status-chan] [[getcolor setcolor] (use-state my-color)
                                  [getboard setboard] (use-state init-board)
                                  [getmoves setmoves] (use-state [])
                                  set-effect (use-effect)]
          (set-effect (fn []
                        (go
                          (>! status-chan "loading bootstraped workers")
                          (let [init-moves (<! (possible-moves worker-engine
                                                                 (getboard)
                                                                 my-color))]
                            (>! status-chan "white's turn!")
                            (setmoves #(do init-moves))))
                        identity))
          [(getboard)
           (getmoves)
           (fn [move]
             (go (let [my-board (<! (apply-move worker-engine (getboard) move))]
                   (setcolor other-color)
                   (setboard #(do my-board)))
                   (setmoves #(do []))
                   (>! status-chan "loading move")
                   (let [opp-move (<! (best-move worker-engine
                                                 (getboard)
                                                 (other-color my-color)))
                         new-board (<! (apply-move worker-engine (getboard)
                                                   opp-move))]
                     (setboard #(do new-board)))
                   (let [new-moves (<! (possible-moves worker-engine
                                                      (getboard) my-color))]
                     (setmoves #(do new-moves)))
                   (>! status-chan "white's turn")
                   (setcolor #(do my-color))))]))
