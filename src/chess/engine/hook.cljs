(ns chess.engine.hook
  (:require [chess.engine.core :refer [init-board
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [chess.engine.local-engine :refer [local-engine]]
            [chess.engine.worker-engine :refer [worker-engine]]
            [html-cljs.html :as html]
            [clojure.core.async :refer [go >! <! chan]]))

(defn use-engine [my-color]
  "all the pure logic and serves as the gateway to the UI
  returns: [board moves on-move]
    board - the current board
    moves - the player's available moves"
  (let [color (atom my-color)
        board (atom init-board)
        moves (atom (possible-moves local-engine init-board my-color))]
    (fn [vdom-state]
      [@board
       @moves
       (fn [move]
         (let [my-board (apply-move local-engine @board move)]
           (reset! color (other-color my-color))
           (reset! board my-board)
           (reset! moves [])
           (html/refresh vdom-state)
           ;do the ai stuff asynchronously
           (prn "")
           (js/setTimeout
             (fn []
               (reset! board (apply-move local-engine my-board
                                         (best-move local-engine my-board (other-color my-color))))
               (reset! moves (possible-moves local-engine @board my-color))
               (reset! color my-color)
               (html/refresh vdom-state))
             100)))])))

(defn use-async-engine [my-color]
  "same as above, but it will return everything on channels (which will
  already be closed so don't worry about that)"
  (let [color (atom my-color)
        board (atom init-board)
        moves (atom [])
        initial (atom true)]
    (fn [vdom-state]
      ;initially load moves
      (if @initial
        (go (let [init-moves (<! (possible-moves worker-engine init-board my-color))]
              (reset! moves init-moves)
              (reset! initial false)
              (html/refresh vdom-state))))
      [@board
       @moves
       (fn [move]
         (go
           (let [my-board (<! (apply-move worker-engine @board move))]
             (reset! color (other-color my-color))
             (reset! board my-board)
             (reset! moves [])
             (html/refresh vdom-state)
             (reset! board (<! (apply-move worker-engine my-board
                                       (<! (best-move worker-engine my-board (other-color my-color))))))
             (reset! moves (<! (possible-moves worker-engine @board my-color)))
             (reset! color my-color)
             (html/refresh vdom-state))))])))
