(ns chess.engine.local-engine
  (:require [html-cljs.hooks :as hooks]
            [html-cljs.html :as html]
            [chess.engine.core :refer [Engine
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [chess.utils :refer [zip match plusminus maxf]]))


(defn piece-seq [board]
  (mapcat identity
          (for [[row i] (zip board (range 8))]
            (for [[sq j] (zip row (range 8))]
              [i j sq]))))

(defn find-piece [board props]
  (->> (piece-seq board)
       (filter (fn [[i j sq]]
                 (reduce #(and %1 %2)
                        (for [[k v] props]
                          (= v (sq k))))))
       (map (fn [[i j sq]] [i j]))))

(defn piece-at [board i j]
  "basic index of the board as described above"
  (nth (nth board i) j))

(defn color-dir [sq]
  (match (sq :color)
         :white -1
         :black 1))

(defn getall [board color]
  "gets all legal moves even if it endangers the king"

  (defn on-line [board i j di dj color]
    (loop [sofar []
           ci (+ i di)
           cj (+ j dj)]
      (cond
        ;off board
        (or (>= ci 8) (>= cj 8) (< ci 0) (< cj 0)) sofar
        ;my piece
        (= ((piece-at board ci cj) :color) color) sofar
        ;the other color
        (not (nil? ((piece-at board ci cj) :piece))) (cons [ci cj] sofar)
        ;empty space
        :else (recur (cons [ci cj] sofar) (+ ci di) (+ cj dj)))))

  (defn can-place [board i j color]
    (and
      (not (or (>= i 8) (>= j 8) (< i 0) (< j 0)))
      (not (= ((piece-at board i j) :color) color))))

  (defn castle-moves [board color]
    (let [[[ki kj]] (find-piece board {:piece :king :color color})
          rooks (find-piece board {:piece :rook :color color})]
      (if (or (nil? ki) (:moved (piece-at board ki kj)))
        []
        (mapcat (fn [[ri rj]]
                  (if (:moved (piece-at board ri rj))
                    []
                    (if (reduce #(and %1 %2)
                                (for [[i j] (zip [ki ki ki ki ki]
                                                 (if (< rj kj)
                                                   (range (inc rj) kj)
                                                   (range (inc kj) rj)))]
                                  (and (can-place board i j :white) (can-place board i j :black))))
                      (if (< rj kj)
                        [[[ki kj] [ki (- kj 2)] [ri rj] [ri (dec kj)]]]
                        [[[ki kj] [ki (+ kj 2)] [ri rj] [ri (inc kj)]]])
                      [])))
                rooks))))

  (defn piece-moves [board i j sq]
    (->> (match (sq :piece)
           :rook (concat
                   (on-line board i j 1 0 (sq :color))
                   (on-line board i j -1 0 (sq :color))
                   (on-line board i j 0 1 (sq :color))
                   (on-line board i j 0 -1 (sq :color)))

           :knight (concat
                     (plusminus [di 1 dj 2]
                                [(+ i di) (+ j dj)])
                     (plusminus [di 2 dj 1]
                                [(+ i di) (+ j dj)]))

           :bishop (apply concat
                          (plusminus [di 1 dj 1]
                                     (on-line board i j di dj (sq :color))))

           :king (for [di [-1 0 1] dj [-1 0 1]]
                   [(+ i di) (+ j dj)])

           :queen (apply concat
                         (for [di [-1 0 1] dj [-1 0 1]]
                         (on-line board i j di dj (sq :color))))

           :pawn (concat
                   (filter (fn [[i j]] (nil? ((piece-at board i j) :piece)))
                           (cons [(+ i (color-dir sq)) j]
                                 (if (sq :moved)
                                   []
                                   [[(+ i (* 2 (color-dir sq))) j]])))
                   (filter (fn [[i j]]
                             (and (can-place board i j (sq :color))
                                  (= ((piece-at board i j) :color) (other-color (sq :color)))))
                           (list [(+ i (color-dir sq)) (dec j)] [(+ i (color-dir sq)) (inc j)]))))

         (filter (fn [[i j]] (can-place board i j (sq :color))))
         (map (fn [p] [[i j] p]))))

  (->> (piece-seq board)
       (filter (fn [[i j sq]]
                 (= color (sq :color))))
       (map #(apply piece-moves (cons board %)))
       (cons (castle-moves board color))
       (mapcat identity)))

(defn local-apply-move [board [from1 to1 from2 to2]]
  (for [[row i] (zip board (range 8))]
        (for [[sq j] (zip row (range 8))]
          (cond
            (or (= from1 [i j]) (= from2 [i j])) {}
            (= to1 [i j]) (assoc (apply piece-at (cons board from1)) :moved true)
            (= to2 [i j]) (assoc (apply piece-at (cons board from2)) :moved true)
            :else sq))))

(defn piece-value [p]
  (match p
         :rook 6
         :knight 3
         :bishop 4
         :king 10000
         :queen 9
         :pawn 1))

(defn board-value [board color]
  (->> (piece-seq board)
       (filter (fn [[i j sq]] (not (nil? (sq :piece)))))
       (map (fn [[i j sq]]
              (* (if (= color (sq :color)) 1 -1)
                 (piece-value (sq :piece)))))
       (reduce +)))

(declare local-best-move
         local-engine)


(defn move-value [board move depth]
  ;(prn "calcing move: " move)
  (let [color (:color (apply piece-at (cons board (first move))))
        applied-board (local-apply-move board move)]
    (if (> depth 0)
      (* -1 (second (local-best-move applied-board (other-color color) (dec depth))))
      (do
        (board-value applied-board color)))))

(defn local-best-move [board color depth]
  "returns the best move and it's value [move value]"
  (->> (getall board color)
       (map (fn [move] [move (move-value board move depth)]))
       (map (fn [v]
              (if (= depth 2) (do (prn v) v) v)))
       (maxf second)))

(def local-engine

  (reify Engine

    (apply-move [this board move] (local-apply-move board move))

    (possible-moves [this board color]
      (->> (getall board color)
           ;filter out those moves where the king is in danger!
           ;(map #(do (prn "move: " %) %))
           (filter (fn [move]
                     (let [new-board (apply-move this board move)
                           [king] (find-piece new-board {:piece :king :color color})]
                       (not (some #(= king %) (mapcat identity (getall new-board (other-color color))))))))))

    (best-move [_ board color] (let [[move value] (local-best-move board color 2)]
                                 (prn "value: " value)
                                 move))))

