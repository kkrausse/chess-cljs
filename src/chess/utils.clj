(ns chess.utils)

(defmacro match [expr & bodies]
  (let [matchie (gensym "matchie")]
    `(let [~matchie ~expr]
       (cond
         ~@(loop [sofar []
                  [matcher result & remainder] bodies]
             (if (nil? matcher)
               sofar
               (if (= :else matcher)
                 (concat sofar [:else result])
                 (recur (concat sofar [`(= ~matcher ~matchie) result])
                        remainder))))))))

(defn maprhs [f s]
  (loop [sofar []
         [lhs rhs & remainder] s]
    (print lhs rhs)
    (if (nil? lhs)
      sofar
      (recur (concat sofar [lhs (f rhs)])
             remainder))))

#_(maprhs #(* 2 %) [:r 1 :l 2])
#_(macroexpand '(plusminus [x 1 y 2] (str (str x "_" y))))

(defmacro plusminus [assignments expr]
  `(for [~@(maprhs (fn [lit] [lit (read-string (str "-" lit))]) assignments)]
     ~expr))
