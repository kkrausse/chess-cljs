
chess.core.init();;
SHADOW_ENV.setLoaded("chess.components.square.js");
SHADOW_ENV.setLoaded("chess.components.board.js");
SHADOW_ENV.setLoaded("chess.engine.worker_engine.js");
SHADOW_ENV.setLoaded("chess.engine.hook.js");
SHADOW_ENV.setLoaded("chess.core.js");
SHADOW_ENV.setLoaded("shadow.module.main.append.js");
shadow.cljs.bootstrap.env.set_loaded(["chess.components.board","chess.engine.worker-engine","shadow.module.main.append","chess.components.square","chess.engine.hook","chess.core"]);
