
try { chess.worker.init(); } catch (e) { console.error("An error occurred when calling (chess.worker/init)"); throw(e); };
SHADOW_ENV.setLoaded("chess.worker.js");
SHADOW_ENV.setLoaded("shadow.module.worker.append.js");
shadow.cljs.bootstrap.env.set_loaded(["shadow.module.worker.append","chess.worker"]);
