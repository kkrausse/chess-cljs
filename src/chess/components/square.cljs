(ns chess.components.square
 (:require
    [html-cljs.html :as html :refer [cmp]]
    [chess.utils :refer [asset-path]]))
; this is loaded into board.cljs

(defn square [props]
  "props are:
    :peice [none|rook|pawn|...]
    :tint [true|false]
    :color [white|black]"

  (let [has-piece (not (nil? (props :piece)))
        style {"float" "left"
               "width" "15%"
               "background" (cond
                              (props :selected) "#40aad4"
                              (props :can-move-to) "#4ae896"
                              (props :tint) "#ada284"
                              :else "#fff")
               "border" (cond
                          (props :can-move-to) "1px dotted #40aad4"
                          :else "1px solid #999")}]

    (cmp [] {:type "div"
             :style style
             :on {"click" #((props :on-click))}}
         (if has-piece
           (cmp [] {:type "img"
                    :style {"width" "90%"}
                    :elem-props {"src" (asset-path (str "/pieces/" (props :color) "_" (props :piece) ".svg"))}})
           '()))))
