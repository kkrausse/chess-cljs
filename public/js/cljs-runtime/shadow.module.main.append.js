
shadow.cljs.devtools.client.env.module_loaded('main');

chess.core.init();;
SHADOW_ENV.setLoaded("chess.components.square.js");
SHADOW_ENV.setLoaded("chess.components.board.js");
SHADOW_ENV.setLoaded("chess.engine.worker_engine.js");
SHADOW_ENV.setLoaded("chess.engine.hook.js");
SHADOW_ENV.setLoaded("chess.core.js");
SHADOW_ENV.setLoaded("shadow.module.main.append.js");