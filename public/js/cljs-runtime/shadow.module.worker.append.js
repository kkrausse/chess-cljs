
chess.worker.init();;
SHADOW_ENV.setLoaded("chess.worker.js");
SHADOW_ENV.setLoaded("shadow.module.worker.append.js");
shadow.cljs.bootstrap.env.set_loaded(["shadow.module.worker.append","chess.worker"]);
