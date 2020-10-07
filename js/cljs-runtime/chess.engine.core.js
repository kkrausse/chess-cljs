goog.provide('chess.engine.core');
chess.engine.core.init_board = (function (){
chess.engine.core.main_row = (function chess$engine$core$main_row(color){
var iter__4529__auto__ = (function chess$engine$core$main_row_$_iter__8669(s__8670){
return (new cljs.core.LazySeq(null,(function (){
var s__8670__$1 = s__8670;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8670__$1);
if(temp__5735__auto__){
var s__8670__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8670__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8670__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8678 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8677 = (0);
while(true){
if((i__8677 < size__4528__auto__)){
var piece = cljs.core._nth(c__4527__auto__,i__8677);
cljs.core.chunk_append(b__8678,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__8698 = (i__8677 + (1));
i__8677 = G__8698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8678),chess$engine$core$main_row_$_iter__8669(cljs.core.chunk_rest(s__8670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8678),null);
}
} else {
var piece = cljs.core.first(s__8670__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$main_row_$_iter__8669(cljs.core.rest(s__8670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"rook","rook",-351034693)], null));
});

chess.engine.core.pawn_row = (function chess$engine$core$pawn_row(color){
var iter__4529__auto__ = (function chess$engine$core$pawn_row_$_iter__8685(s__8686){
return (new cljs.core.LazySeq(null,(function (){
var s__8686__$1 = s__8686;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8686__$1);
if(temp__5735__auto__){
var s__8686__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8686__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8686__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8688 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8687 = (0);
while(true){
if((i__8687 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__8687);
cljs.core.chunk_append(b__8688,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__8699 = (i__8687 + (1));
i__8687 = G__8699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8688),chess$engine$core$pawn_row_$_iter__8685(cljs.core.chunk_rest(s__8686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8688),null);
}
} else {
var _ = cljs.core.first(s__8686__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$pawn_row_$_iter__8685(cljs.core.rest(s__8686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
});

chess.engine.core.empty_row = (function (){var iter__4529__auto__ = (function chess$engine$core$iter__8689(s__8690){
return (new cljs.core.LazySeq(null,(function (){
var s__8690__$1 = s__8690;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8690__$1);
if(temp__5735__auto__){
var s__8690__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8690__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8690__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8692 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8691 = (0);
while(true){
if((i__8691 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__8691);
cljs.core.chunk_append(b__8692,cljs.core.PersistentArrayMap.EMPTY);

var G__8700 = (i__8691 + (1));
i__8691 = G__8700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8692),chess$engine$core$iter__8689(cljs.core.chunk_rest(s__8690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8692),null);
}
} else {
var x = cljs.core.first(s__8690__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,chess$engine$core$iter__8689(cljs.core.rest(s__8690__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})();

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"black","black",1294279647)),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"black","black",1294279647)),null,(1),null)),(2),null)),(function (){var iter__4529__auto__ = (function chess$engine$core$iter__8693(s__8694){
return (new cljs.core.LazySeq(null,(function (){
var s__8694__$1 = s__8694;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8694__$1);
if(temp__5735__auto__){
var s__8694__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8694__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8694__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8696 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8695 = (0);
while(true){
if((i__8695 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__8695);
cljs.core.chunk_append(b__8696,chess.engine.core.empty_row);

var G__8701 = (i__8695 + (1));
i__8695 = G__8701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8696),chess$engine$core$iter__8693(cljs.core.chunk_rest(s__8694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8696),null);
}
} else {
var _ = cljs.core.first(s__8694__$2);
return cljs.core.cons(chess.engine.core.empty_row,chess$engine$core$iter__8693(cljs.core.rest(s__8694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"white","white",-483998618)),(new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"white","white",-483998618)),null,(1),null)),(2),null)));
})()
;
chess.engine.core.other_color = (function chess$engine$core$other_color(color){
var matchie8697 = color;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie8697)){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie8697)){
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

var chess$engine$core$Engine$apply_move$dyn_8709 = (function (this$,board,move){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (chess.engine.core.apply_move[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,move) : m__4429__auto__.call(null,this$,board,move));
} else {
var m__4426__auto__ = (chess.engine.core.apply_move["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,move) : m__4426__auto__.call(null,this$,board,move));
} else {
throw cljs.core.missing_protocol("Engine.apply-move",this$);
}
}
});
/**
 * applies the move where move is of the form [[fromi fromj] [toi toj]...]
 *                        in the case of castling, theres more than one move, thus the '...'
 */
chess.engine.core.apply_move = (function chess$engine$core$apply_move(this$,board,move){
if((((!((this$ == null)))) && ((!((this$.chess$engine$core$Engine$apply_move$arity$3 == null)))))){
return this$.chess$engine$core$Engine$apply_move$arity$3(this$,board,move);
} else {
return chess$engine$core$Engine$apply_move$dyn_8709(this$,board,move);
}
});

var chess$engine$core$Engine$possible_moves$dyn_8716 = (function (this$,board,color){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (chess.engine.core.possible_moves[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4429__auto__.call(null,this$,board,color));
} else {
var m__4426__auto__ = (chess.engine.core.possible_moves["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4426__auto__.call(null,this$,board,color));
} else {
throw cljs.core.missing_protocol("Engine.possible-moves",this$);
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
return chess$engine$core$Engine$possible_moves$dyn_8716(this$,board,color);
}
});

var chess$engine$core$Engine$best_move$dyn_8718 = (function (this$,board,color){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (chess.engine.core.best_move[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4429__auto__.call(null,this$,board,color));
} else {
var m__4426__auto__ = (chess.engine.core.best_move["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4426__auto__.call(null,this$,board,color));
} else {
throw cljs.core.missing_protocol("Engine.best-move",this$);
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
return chess$engine$core$Engine$best_move$dyn_8718(this$,board,color);
}
});


//# sourceMappingURL=chess.engine.core.js.map
