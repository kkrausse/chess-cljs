goog.provide('chess.engine.core');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('chess.utils');
chess.engine.core.init_board = (function (){
chess.engine.core.main_row = (function chess$engine$core$main_row(color){
var iter__4582__auto__ = (function chess$engine$core$main_row_$_iter__27346(s__27347){
return (new cljs.core.LazySeq(null,(function (){
var s__27347__$1 = s__27347;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27347__$1);
if(temp__5735__auto__){
var s__27347__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27347__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27347__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27349 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27348 = (0);
while(true){
if((i__27348 < size__4581__auto__)){
var piece = cljs.core._nth(c__4580__auto__,i__27348);
cljs.core.chunk_append(b__27349,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__27413 = (i__27348 + (1));
i__27348 = G__27413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27349),chess$engine$core$main_row_$_iter__27346(cljs.core.chunk_rest(s__27347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27349),null);
}
} else {
var piece = cljs.core.first(s__27347__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$main_row_$_iter__27346(cljs.core.rest(s__27347__$2)));
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

chess.engine.core.pawn_row = (function chess$engine$core$pawn_row(color){
var iter__4582__auto__ = (function chess$engine$core$pawn_row_$_iter__27355(s__27356){
return (new cljs.core.LazySeq(null,(function (){
var s__27356__$1 = s__27356;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27356__$1);
if(temp__5735__auto__){
var s__27356__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27356__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27356__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27358 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27357 = (0);
while(true){
if((i__27357 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__27357);
cljs.core.chunk_append(b__27358,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__27435 = (i__27357 + (1));
i__27357 = G__27435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27358),chess$engine$core$pawn_row_$_iter__27355(cljs.core.chunk_rest(s__27356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27358),null);
}
} else {
var _ = cljs.core.first(s__27356__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$pawn_row_$_iter__27355(cljs.core.rest(s__27356__$2)));
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

chess.engine.core.empty_row = (function (){var iter__4582__auto__ = (function chess$engine$core$iter__27362(s__27363){
return (new cljs.core.LazySeq(null,(function (){
var s__27363__$1 = s__27363;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27363__$1);
if(temp__5735__auto__){
var s__27363__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27363__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27363__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27365 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27364 = (0);
while(true){
if((i__27364 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__27364);
cljs.core.chunk_append(b__27365,cljs.core.PersistentArrayMap.EMPTY);

var G__27456 = (i__27364 + (1));
i__27364 = G__27456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27365),chess$engine$core$iter__27362(cljs.core.chunk_rest(s__27363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27365),null);
}
} else {
var x = cljs.core.first(s__27363__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,chess$engine$core$iter__27362(cljs.core.rest(s__27363__$2)));
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

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"black","black",1294279647)),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"black","black",1294279647)),null,(1),null)),(2),null)),(function (){var iter__4582__auto__ = (function chess$engine$core$iter__27373(s__27374){
return (new cljs.core.LazySeq(null,(function (){
var s__27374__$1 = s__27374;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27374__$1);
if(temp__5735__auto__){
var s__27374__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27374__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27374__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27376 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27375 = (0);
while(true){
if((i__27375 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__27375);
cljs.core.chunk_append(b__27376,chess.engine.core.empty_row);

var G__27473 = (i__27375 + (1));
i__27375 = G__27473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27376),chess$engine$core$iter__27373(cljs.core.chunk_rest(s__27374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27376),null);
}
} else {
var _ = cljs.core.first(s__27374__$2);
return cljs.core.cons(chess.engine.core.empty_row,chess$engine$core$iter__27373(cljs.core.rest(s__27374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"white","white",-483998618)),(new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"white","white",-483998618)),null,(1),null)),(2),null)));
})()
;
chess.engine.core.other_color = (function chess$engine$core$other_color(color){
var matchie27381 = color;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie27381)){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie27381)){
return new cljs.core.Keyword(null,"white","white",-483998618);
} else {
return null;
}
}
});

/**
 * interface for the chess ai. board is indexed like this:
 *   board[i][j] is like
 *  i = [8 7 6 ...], so reversed and indexed at zero,
 *  j = [a b c ...], so normal, but indexed at zero.
 *   so, if you're looking at the board and you are playing white, the top left is
 *   0,0 and moving one square closer to the white side is 1,0
 * @interface
 */
chess.engine.core.Engine = function(){};

/**
 * applies the move where move is of the form [[fromi fromj] [toi toj]...]
 *                        in the case of castling, theres more than one move, thus the '...'
 */
chess.engine.core.apply_move = (function chess$engine$core$apply_move(this$,board,move){
if((((!((this$ == null)))) && ((!((this$.chess$engine$core$Engine$apply_move$arity$3 == null)))))){
return this$.chess$engine$core$Engine$apply_move$arity$3(this$,board,move);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.engine.core.apply_move[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,move) : m__4488__auto__.call(null,this$,board,move));
} else {
var m__4485__auto__ = (chess.engine.core.apply_move["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,move) : m__4485__auto__.call(null,this$,board,move));
} else {
throw cljs.core.missing_protocol("Engine.apply-move",this$);
}
}
}
});

/**
 * returns a sequence of possible moves for
 *                                   the given color. If empty, that color just
 *                                   lost
 */
chess.engine.core.possible_moves = (function chess$engine$core$possible_moves(this$,board,color){
if((((!((this$ == null)))) && ((!((this$.chess$engine$core$Engine$possible_moves$arity$3 == null)))))){
return this$.chess$engine$core$Engine$possible_moves$arity$3(this$,board,color);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.engine.core.possible_moves[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4488__auto__.call(null,this$,board,color));
} else {
var m__4485__auto__ = (chess.engine.core.possible_moves["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4485__auto__.call(null,this$,board,color));
} else {
throw cljs.core.missing_protocol("Engine.possible-moves",this$);
}
}
}
});

/**
 * the ai's decision of the best possible move. If
 *                              nil, then the other player won
 */
chess.engine.core.best_move = (function chess$engine$core$best_move(this$,board,color){
if((((!((this$ == null)))) && ((!((this$.chess$engine$core$Engine$best_move$arity$3 == null)))))){
return this$.chess$engine$core$Engine$best_move$arity$3(this$,board,color);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.engine.core.best_move[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4488__auto__.call(null,this$,board,color));
} else {
var m__4485__auto__ = (chess.engine.core.best_move["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4485__auto__.call(null,this$,board,color));
} else {
throw cljs.core.missing_protocol("Engine.best-move",this$);
}
}
}
});


//# sourceMappingURL=chess.engine.core.js.map
