(ns chess.utils
  (:require [clojure.walk :as walk]))

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

(defmacro literalize [symbols & body]
  (let [form (gensym 'form)]
  `(walk/postwalk
     (fn [~form] (cond ~@(mapcat (fn [s] [`(and (symbol? ~form) (= ~form (symbol '~s))) `(walk/postwalk #(if (seq? %) (cons 'list %) %) ~s)]) symbols) :else ~form))
     '(do ~@body))))

(defmacro plusminus [assignments expr]
  `(for [~@(maprhs (fn [lit] [lit (read-string (str "-" lit))]) assignments)]
     ~expr))
