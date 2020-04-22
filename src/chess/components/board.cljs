(ns chess.components.board
  (:require
    [chess.components.square :refer [square]]
    [html-cljs.hooks :refer [use-state]]
    [chess.utils :refer [zip nilmap]]
    [html-cljs.html :as html :refer [cmp]]))

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
                       (if (nil? move-here)
                         (set-state #(assoc % :selected [i j]))
                         (on-move move-here)))
           :can-move-to (not (nil? move-here))
           :selected (= [i j] (state :selected))
           :piece (nilmap (sq :piece) #(name %))
           :color (nilmap (sq :color) #(name %)))))

(defn board [& {:keys [board player moves on-move]}]
  "{:board - a 2d array containing the board. Always white on bottom, not matter
            who the player is
    :player - 'white' or 'black' - will flip the board if black}"
  (let [board-size (* 0.9
                      (min (.-innerWidth js/window)
                           (.-innerHeight js/window)))]

    ;(prn "moves " moves)
  (cmp [[state set-state] (use-state {:selected nil})]
       {:type "div"
        :style {"width" (str board-size "px")
                "height" (str board-size "px")
                "display" "inline-block"
                "margin" "5px"}}
     (for [[row i] (zip board (range 8))]
       (cmp [] {:type "div"
                :style {"display" "flex" "height" "13%"}}
         (for [[sq j] (zip row (range 8))]
             (square (uiify sq i j state set-state moves on-move))))))))
