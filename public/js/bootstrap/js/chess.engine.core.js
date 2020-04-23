goog.provide('chess.engine.core');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('chess.utils');
chess.engine.core.init_board = (function (){
chess.engine.core.main_row = (function chess$engine$core$main_row(color){
var iter__4582__auto__ = (function chess$engine$core$main_row_$_iter__27301(s__27302){
return (new cljs.core.LazySeq(null,(function (){
var s__27302__$1 = s__27302;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27302__$1);
if(temp__5735__auto__){
var s__27302__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27302__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27302__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27307 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27306 = (0);
while(true){
if((i__27306 < size__4581__auto__)){
var piece = cljs.core._nth(c__4580__auto__,i__27306);
cljs.core.chunk_append(b__27307,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__27386 = (i__27306 + (1));
i__27306 = G__27386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27307),chess$engine$core$main_row_$_iter__27301(cljs.core.chunk_rest(s__27302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27307),null);
}
} else {
var piece = cljs.core.first(s__27302__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$main_row_$_iter__27301(cljs.core.rest(s__27302__$2)));
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
var iter__4582__auto__ = (function chess$engine$core$pawn_row_$_iter__27319(s__27320){
return (new cljs.core.LazySeq(null,(function (){
var s__27320__$1 = s__27320;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27320__$1);
if(temp__5735__auto__){
var s__27320__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27320__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27320__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27322 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27321 = (0);
while(true){
if((i__27321 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__27321);
cljs.core.chunk_append(b__27322,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__27394 = (i__27321 + (1));
i__27321 = G__27394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27322),chess$engine$core$pawn_row_$_iter__27319(cljs.core.chunk_rest(s__27320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27322),null);
}
} else {
var _ = cljs.core.first(s__27320__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$pawn_row_$_iter__27319(cljs.core.rest(s__27320__$2)));
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

chess.engine.core.empty_row = (function (){var iter__4582__auto__ = (function chess$engine$core$iter__27332(s__27333){
return (new cljs.core.LazySeq(null,(function (){
var s__27333__$1 = s__27333;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27333__$1);
if(temp__5735__auto__){
var s__27333__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27333__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27333__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27335 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27334 = (0);
while(true){
if((i__27334 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__27334);
cljs.core.chunk_append(b__27335,cljs.core.PersistentArrayMap.EMPTY);

var G__27414 = (i__27334 + (1));
i__27334 = G__27414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27335),chess$engine$core$iter__27332(cljs.core.chunk_rest(s__27333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27335),null);
}
} else {
var x = cljs.core.first(s__27333__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,chess$engine$core$iter__27332(cljs.core.rest(s__27333__$2)));
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

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"black","black",1294279647)),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"black","black",1294279647)),null,(1),null)),(2),null)),(function (){var iter__4582__auto__ = (function chess$engine$core$iter__27342(s__27343){
return (new cljs.core.LazySeq(null,(function (){
var s__27343__$1 = s__27343;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27343__$1);
if(temp__5735__auto__){
var s__27343__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27343__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27343__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27345 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27344 = (0);
while(true){
if((i__27344 < size__4581__auto__)){
var _ = cljs.core._nth(c__4580__auto__,i__27344);
cljs.core.chunk_append(b__27345,chess.engine.core.empty_row);

var G__27439 = (i__27344 + (1));
i__27344 = G__27439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27345),chess$engine$core$iter__27342(cljs.core.chunk_rest(s__27343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27345),null);
}
} else {
var _ = cljs.core.first(s__27343__$2);
return cljs.core.cons(chess.engine.core.empty_row,chess$engine$core$iter__27342(cljs.core.rest(s__27343__$2)));
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
var matchie27354 = color;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie27354)){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie27354)){
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
