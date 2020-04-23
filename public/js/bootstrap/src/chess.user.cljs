(ns chess.user
  (:require
   [chess.engine.core :refer [Engine
                              other-color
                              apply-move
                              possible-moves
                              best-move]]
   [chess.engine.local-engine :refer [local-engine]]
    ))
