(ns chess.utils
  (:require-macros [chess.utils :refer [match plusminus]])
  (:require [clojure.core.async :refer [go go-loop >! <! chan close!]]
            [cljs.reader :refer [read-string]]))

(defn nilmap [x f]
  (if (not (nil? x)) (f x)))

(defn zip [& seqs]
  (apply map (cons vector seqs)))

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

(defn init-worker [handler]
  (js/self.addEventListener "message" (fn [^js e] (js/postMessage (prn-str (handler (read-string (.-data e))))))))

(defn load-worker [filename]
  "loads the worker by filename. usage:
  (let [c (chan)]
    (>! (load-worker fname) [query c])
    (prn 'got response: ' (<! c)))"
  (let [c (chan)
        reply-chan (chan)
        worker (js/Worker. filename)]
    (.addEventListener worker "message" (fn [^js e] (go (>! reply-chan (.-data e)))))
    (go-loop [[query resp] (<! c)]
             (if (not (nil? query))
               (do
                 (.postMessage worker (pr-str query))
                 (>! resp (read-string (<! reply-chan)))
                 (close! resp)
                 (recur (<! c)))))
    c))
