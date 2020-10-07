(ns chess.engine.worker-engine
  (:require [
             chess.engine.core :refer [Engine
                                       other-color
                                       apply-move
                                       possible-moves
                                       best-move]]
            [clojure.core.async :as async :refer [go go-loop >! <! chan close!]]
            [chess.engine.local-engine :refer [local-engine]]
            [cljs.reader :refer [read-string]]
            [clojure.walk :as walk]
            [chess.utils :refer [screen-print zip match plusminus maxf literalize]]))

(declare submit-command
         printl)

(defn load-worker [filename id]
  "loads the worker by filename. usage:
  (let [c (chan)]
    (>! (load-worker fname) {:rc c :form query})
    (prn 'got response: ' (<! c)))"
  (let [c (chan 1)
        reply-chan (chan 1)
        worker (js/Worker. filename)]
    (aset worker "onmessage" (fn [^js e] (->> e
                                                         (.-data)
                                                         (printl)
                                                         (>! reply-chan)
                                                         (go))))
    (go-loop [{:keys [rc form]} (<! c)]
             (if (not (nil? form))
               (do
                 (printl "worker " id " starting work")
                 (.postMessage worker (pr-str form))
                 (>! rc (read-string (<! reply-chan)))
                 (printl "worker " id " finished work")
                 (close! rc)
                 (recur (<! c)))))
    c))

; 'work' the form {:rc (response channel) :form (form to be executed)}
(defonce work-chan (chan 30))
(defonce worker-chan-chan (chan 30))
(defonce _ (do
             ; initially load 4 workers
             (doseq [i (range 4)]
               (go (>! worker-chan-chan (load-worker "js/worker.js" i))))

             ; do the recurrent loop to submit work
             (go-loop [{:keys [rc form]} (<! work-chan)
                       worker-chan (<! worker-chan-chan)]
                      (async/pipe (submit-command worker-chan form) rc)
                      (recur (<! work-chan) (<! worker-chan-chan)))))

(defn submit-command [worker-chan form]
  (go (let [rc (chan 1)]; need to have buffer because it will get locked.. I think
        (>! worker-chan
            {:rc rc :form form}); rc get's closed by the go loop in load-worker
        (let [resp (<! rc)]
          (>! worker-chan-chan worker-chan)
          resp))))

(defn printl [& x]
  (screen-print "printl: " x)
  (last x))

(defn dispatch [literal]
  (go (let [rc (chan 1)]
        (>! work-chan {:rc rc :form literal})
        (<! rc))))

(def worker-engine
    (reify Engine
      (apply-move [_ board move] (->> (literalize [board move]
                                                       (require '[chess.engine.core :refer [Engine apply-move possible-moves best-move]]
                                                                '[chess.engine.local-engine :refer [local-engine]])
                                                       (apply-move local-engine board move))
                                           (dispatch)
                                           (<!)
                                           (:value)
                                           (printl)
                                           (go)))

      (possible-moves [_ board color] (->> (literalize [board color]
                                                       (require '[chess.engine.core :refer [Engine apply-move possible-moves best-move]]
                                                                '[chess.engine.local-engine :refer [local-engine]])
                                                       (possible-moves local-engine board color))
                                           (dispatch)
                                           (<!)
                                           (:value)
                                           (printl)
                                           (go)))
      
      (best-move [_ board color]
        (->> (possible-moves local-engine board color)
             (map (fn [move] (->> (literalize [board move]
                                              (require '[chess.engine.local-engine :refer [move-value]])
                                              [move (move-value board move 2)])
                                  (dispatch)
                                  (<!)
                                  (:value)
                                  (printl)
                                  (go))))
             (async/merge)
             (async/reduce (fn [a b] (cons b a)) [])
             (<!)
             (maxf second)
             (printl "final result")
             (first)
             (go)))))
