goog.provide('chess.engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.local_engine');
goog.require('chess.utils');
chess.engine.init_board = (function (){
chess.engine.main_row = (function chess$engine$main_row(color){
var iter__4582__auto__ = (function chess$engine$main_row_$_iter__29510(s__29511){
return (new cljs.core.LazySeq(null,(function (){
var s__29511__$1 = s__29511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29511__$1);
if(temp__5735__auto__){
var s__29511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29511__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29511__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29513 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29512 = (0);
while(true){
if((i__29512 < size__4581__auto__)){
var piece = cljs.core._nth(c__4580__auto__,i__29512);
cljs.core.chunk_append(b__29513,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__29532 = (i__29512 + (1));
i__29512 = G__29532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29513),chess$engine$main_row_$_iter__29510(cljs.core.chunk_rest(s__29511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29513),null);
}
} else {
var piece = cljs.core.first(s__29511__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$main_row_$_iter__29510(cljs.core.rest(s__29511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"rook","rook",-351034693)], null));
});

chess.engine.pawn_row = (function chess$engine$pawn_row(color){
var iter__4582__auto__ = (function chess$engine$pawn_row_$_iter__29514(s__29515){
return (new cljs.core.LazySeq(null,(function (){
var s__29515__$1 = s__29515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29515__$1);
if(temp__5735__auto__){
var s__29515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29515__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29515__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29517 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29516 = (0);
while(true){
if((i__29516 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__29516);
cljs.core.chunk_append(b__29517,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__29539 = (i__29516 + (1));
i__29516 = G__29539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29517),chess$engine$pawn_row_$_iter__29514(cljs.core.chunk_rest(s__29515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29517),null);
}
} else {
var _ = cljs.core.first(s__29515__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$pawn_row_$_iter__29514(cljs.core.rest(s__29515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
});

chess.engine.empty_row = (function (){var iter__4582__auto__ = (function chess$engine$iter__29518(s__29519){
return (new cljs.core.LazySeq(null,(function (){
var s__29519__$1 = s__29519;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29519__$1);
if(temp__5735__auto__){
var s__29519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29519__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29519__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29521 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29520 = (0);
while(true){
if((i__29520 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__29520);
cljs.core.chunk_append(b__29521,cljs.core.PersistentArrayMap.EMPTY);

var G__29540 = (i__29520 + (1));
i__29520 = G__29540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29521),chess$engine$iter__29518(cljs.core.chunk_rest(s__29519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29521),null);
}
} else {
var x = cljs.core.first(s__29519__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,chess$engine$iter__29518(cljs.core.rest(s__29519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})();

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chess.engine.main_row(new cljs.core.Keyword(null,"black","black",1294279647)),(new cljs.core.List(null,chess.engine.pawn_row(new cljs.core.Keyword(null,"black","black",1294279647)),null,(1),null)),(2),null)),(function (){var iter__4582__auto__ = (function chess$engine$iter__29522(s__29523){
return (new cljs.core.LazySeq(null,(function (){
var s__29523__$1 = s__29523;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29523__$1);
if(temp__5735__auto__){
var s__29523__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29523__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29523__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29525 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29524 = (0);
while(true){
if((i__29524 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__29524);
cljs.core.chunk_append(b__29525,chess.engine.empty_row);

var G__29541 = (i__29524 + (1));
i__29524 = G__29541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29525),chess$engine$iter__29522(cljs.core.chunk_rest(s__29523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29525),null);
}
} else {
var _ = cljs.core.first(s__29523__$2);
return cljs.core.cons(chess.engine.empty_row,chess$engine$iter__29522(cljs.core.rest(s__29523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),(new cljs.core.List(null,chess.engine.pawn_row(new cljs.core.Keyword(null,"white","white",-483998618)),(new cljs.core.List(null,chess.engine.main_row(new cljs.core.Keyword(null,"white","white",-483998618)),null,(1),null)),(2),null)));
})()
;
chess.engine.other_color = (function chess$engine$other_color(color){
var matchie29526 = color;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie29526)){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie29526)){
return new cljs.core.Keyword(null,"white","white",-483998618);
} else {
return null;
}
}
});
chess.engine.use_engine = (function chess$engine$use_engine(my_color){

var color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_color);
var board = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(chess.engine.init_board);
var moves = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((chess.engine.possible_moves.cljs$core$IFn$_invoke$arity$3 ? chess.engine.possible_moves.cljs$core$IFn$_invoke$arity$3(chess.local_engine.local_engine,chess.engine.init_board,my_color) : chess.engine.possible_moves.call(null,chess.local_engine.local_engine,chess.engine.init_board,my_color)));
return (function (vdom_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(board),cljs.core.deref(moves),(function (move){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing move: ",move], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(board,(function (p1__29527_SHARP_){
return (chess.engine.apply_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.apply_move.cljs$core$IFn$_invoke$arity$3(chess.local_engine.local_engine,p1__29527_SHARP_,move) : chess.engine.apply_move.call(null,chess.local_engine.local_engine,p1__29527_SHARP_,move));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(color,(function (p1__29528_SHARP_){
return chess.engine.other_color(p1__29528_SHARP_);
}));

cljs.core.reset_BANG_(moves,(function (){var G__29529 = chess.local_engine.local_engine;
var G__29530 = cljs.core.deref(board);
var G__29531 = cljs.core.deref(color);
return (chess.engine.possible_moves.cljs$core$IFn$_invoke$arity$3 ? chess.engine.possible_moves.cljs$core$IFn$_invoke$arity$3(G__29529,G__29530,G__29531) : chess.engine.possible_moves.call(null,G__29529,G__29530,G__29531));
})());

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
})], null);
});
});

//# sourceMappingURL=chess.engine.js.map
