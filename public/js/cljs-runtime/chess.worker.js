goog.provide('chess.worker');
goog.require('cljs.core');
goog.require('chess.engine.core');
goog.require('chess.engine.local_engine');
goog.require('chess.utils');
chess.worker.init = (function chess$worker$init(){
return chess.utils.init_worker((function (msg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["got msg ",msg], 0));

var r = (function (){var matchie38223 = new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-move","apply-move",1831458643),matchie38223)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.core.apply_move,cljs.core.cons(chess.engine.local_engine.local_engine,(msg.cljs$core$IFn$_invoke$arity$1 ? msg.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576)) : msg.call(null,new cljs.core.Keyword(null,"args","args",1315556576)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"best-move","best-move",148157333),matchie38223)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.core.best_move,cljs.core.cons(chess.engine.local_engine.local_engine,(msg.cljs$core$IFn$_invoke$arity$1 ? msg.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576)) : msg.call(null,new cljs.core.Keyword(null,"args","args",1315556576)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"possible-moves","possible-moves",22788046),matchie38223)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.core.possible_moves,cljs.core.cons(chess.engine.local_engine.local_engine,(msg.cljs$core$IFn$_invoke$arity$1 ? msg.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576)) : msg.call(null,new cljs.core.Keyword(null,"args","args",1315556576)))));
} else {
return "no dice!";

}
}
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["got response ",r], 0));

return r;
}));
});

//# sourceMappingURL=chess.worker.js.map
