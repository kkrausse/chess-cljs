(ns chess.core
  (:require
    [chess.components.board :refer [board]]
    [html-cljs.html :as html :refer [cmp]]
    [chess.utils :refer [zip nilmap]]
    [chess.engine.hook :refer [use-engine use-async-engine]]))

; this stuff will be moved out

(def root (.getElementById js/document "app"))

(defn set-app []
  (html/mount root (cmp [[board-data moves on-move] (use-async-engine :white)]
                        {:type "div"
                         :style {"width" "100%" "height" "100%"}}
                        (board :board board-data
                               :player :white
                               :moves moves
                               :on-move on-move))))

(defn ^:export init [] (set-app))
