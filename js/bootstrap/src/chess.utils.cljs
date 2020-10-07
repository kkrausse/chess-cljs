(ns chess.utils
  (:require-macros [chess.utils :refer [match plusminus literalize]]))

(defn nilmap [x f]
  (if (not (nil? x)) (f x)))

(defn zip [& seqs]
  (apply map (cons vector seqs)))

(defn asset-path [rec]
  (if (.includes js/self.location.href "localhost")
    rec
    (str "/chess-cljs" rec)))

(defn screen-print [& stuff]
  (.appendChild (aget (.getElementsByTagName js/document "BODY") 0)
                (let [el (.createElement js/document "p")]
                  (aset el "innerHTML" stuff)
                  el))
  (last stuff))

(defn maxf [f xs]
  (loop [[head & remaining] xs
         cur-max (f head)
         cur-max-x head]
    (let [cur-val (f head)
          [maxv maxx] (cond
                        (> cur-val cur-max) [cur-val head]
                        (= cur-val cur-max) (if (> (rand) 0.5)
                                              [cur-max cur-max-x]
                                              [cur-val head])
                        :else [cur-max cur-max-x])]
      (if (empty? remaining)
        maxx
        (recur remaining
               maxv
               maxx)))))
