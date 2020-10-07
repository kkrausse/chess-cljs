(ns chess.components.board
  (:require
    [html-cljs.hooks :refer [use-state]]
    [chess.utils :refer [zip nilmap]]
    [html-cljs.html :as html :refer [cmp]]))

(declare board-row
         square)

(defn find-move [moves move]
  (let [[mfrom mto] move]
    (filter (fn [[from to]]
              (and (= from mfrom)
                   (if (nil? mto)
                     true
                     (= to mto))))
            moves)))

(defn uiify [sq i j state set-state moves on-move]
  (let [[move-here] (find-move moves [(state :selected) [i j]])]
    (assoc sq
           :tint (= (mod (+ j (mod i 2)) 2) 0)
           :on-click (fn []
                       (print "clicked the thing!" (nil? move-here))
                       (if (nil? move-here)
                         (set-state #(assoc % :selected [i j]))
                         (on-move move-here)))
           :can-move-to (not (nil? move-here))
           :selected (= [i j] (state :selected))
           :piece (nilmap (sq :piece) #(name %))
           :color (nilmap (sq :color) #(name %)))))

(def board
    "{:board - a 2d array containing the board. Always white on bottom, not matter
            who the player is
    :player - 'white' or 'black' - will flip the board if black}"
  (cmp [& {:keys [board player moves on-move]}]
     [[state set-state] (use-state {:selected nil})]
     {:type "div"
      :style (let [board-size (* 0.8
                      (min (.-innerWidth js/window)
                           (.-innerHeight js/window)))]
               {"width" (str board-size "px")
                "height" (str board-size "px")
                "display" "inline-block"
                "margin" "5px"})}
     (for [[row i] (zip board (range 8))]
       (list board-row
             row i state set-state moves on-move))))

(def board-row
  (cmp [row i state set-state moves on-move]
       {:type "div"
        :style {"display" "flex" "height" "13%"}}
       (for [[sq j] (zip row (range 8))]
         (cons square (mapcat identity
                              (uiify sq i j (state)
                                     set-state moves on-move))))))

(def square
  "props are:
  :peice [none|rook|pawn|...]
  :tint [true|false]
  :color [white|black]"
  (cmp [& {:keys [piece selected can-move-to tint on-click color]}]
       {:type "div"
        :style {"float" "left"
                "width" "15%"
                "background" (cond
                               selected "#40aad4"
                               can-move-to "#4ae896"
                               tint "#d4cebc"
                               :else "#fff")
                "border" (if can-move-to
                           "1px dotted #40aad4"
                           "1px solid #999")}
        :on {"click" #(on-click)}}
       (when (some? piece)
         (list
           (list (cmp [piece color] {:type "img"
                          :style {"width" "90%"}
                          :elem-props {"src" (str "./pieces/" color
                                                    "_" piece ".svg")}})
                 piece color)))))
