goog.provide('chess.core');
goog.require('cljs.core');
goog.require('chess.components.board');
goog.require('html_cljs.html');
goog.require('chess.utils');
goog.require('chess.engine.hook');
chess.core.root = document.getElementById("app");
chess.core.set_app = (function chess$core$set_app(){
return html_cljs.html.mount(chess.core.root,(function (vdom_state__25572__auto__){
var hook_instances__25573__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess.engine.hook.use_async_engine(new cljs.core.Keyword(null,"white","white",-483998618))], null);
return (function (){
var vec__27267 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25574__25575__auto__){
return (p1__25574__25575__auto__.cljs$core$IFn$_invoke$arity$1 ? p1__25574__25575__auto__.cljs$core$IFn$_invoke$arity$1(vdom_state__25572__auto__) : p1__25574__25575__auto__.call(null,vdom_state__25572__auto__));
}),hook_instances__25573__auto__);
var vec__27270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27267,(0),null);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(0),null);
var moves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(1),null);
var on_move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["width","100%","height","100%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess.components.board.board.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"board","board",-1907017633),board_data,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"moves","moves",927465255),moves,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),on_move], 0))], null)));
});
}));
});
chess.core.init = (function chess$core$init(){
return chess.core.set_app();
});
goog.exportSymbol('chess.core.init', chess.core.init);

//# sourceMappingURL=chess.core.js.map
