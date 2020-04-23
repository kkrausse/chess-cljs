(ns chess.engine.core
  (:require [html-cljs.hooks :as hooks]
            [chess.utils :refer [zip match plusminus]]))

(def init-board (do
  (defn main-row [color]
    (for [piece [:rook :knight :bishop :king :queen :bishop :knight :rook]]
      {:piece piece :color color :moved false}))

  (defn pawn-row [color]
    (for [_ (range 8)]
      {:piece :pawn :color color :moved false}))

  (def empty-row
    (for [x (range 8)]
      {}))

  (-> (list (main-row :black) (pawn-row :black))
      (concat (for [_ (range 4)] empty-row))
      (concat
        (list (pawn-row :white) (main-row :white))))))

(defn other-color [color]
  (match color
         :white :black
         :black :white))

(defprotocol Engine
  "interface for the chess ai. board is indexed like this:
  board[i][j] is like
    i = [8 7 6 ...], so reversed and indexed at zero,
    j = [a b c ...], so normal, but indexed at zero.
  so, if you're looking at the board and you are playing white, the top left is
  0,0 and moving one square closer to the white side is 1,0"
  (apply-move [this board move] "applies the move where move is of the form [[fromi fromj] [toi toj]...]
                          in the case of castling, theres more than one move, thus the '...'")

  (possible-moves [this board color] "returns a sequence of possible moves for
                                     the given color. If empty, that color just
                                     lost")
  (best-move [this board color] "the ai's decision of the best possible move. If
                                nil, then the other player won"))
