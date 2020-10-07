goog.provide('chess.engine.core');
chess.engine.core.init_board = (function (){
chess.engine.core.main_row = (function chess$engine$core$main_row(color){
var iter__4529__auto__ = (function chess$engine$core$main_row_$_iter__10066(s__10067){
return (new cljs.core.LazySeq(null,(function (){
var s__10067__$1 = s__10067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10067__$1);
if(temp__5735__auto__){
var s__10067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10067__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10067__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10069 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10068 = (0);
while(true){
if((i__10068 < size__4528__auto__)){
var piece = cljs.core._nth(c__4527__auto__,i__10068);
cljs.core.chunk_append(b__10069,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__10136 = (i__10068 + (1));
i__10068 = G__10136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10069),chess$engine$core$main_row_$_iter__10066(cljs.core.chunk_rest(s__10067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10069),null);
}
} else {
var piece = cljs.core.first(s__10067__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$main_row_$_iter__10066(cljs.core.rest(s__10067__$2)));
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
var iter__4529__auto__ = (function chess$engine$core$pawn_row_$_iter__10073(s__10074){
return (new cljs.core.LazySeq(null,(function (){
var s__10074__$1 = s__10074;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10074__$1);
if(temp__5735__auto__){
var s__10074__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10074__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10074__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10076 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10075 = (0);
while(true){
if((i__10075 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__10075);
cljs.core.chunk_append(b__10076,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null));

var G__10138 = (i__10075 + (1));
i__10075 = G__10138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10076),chess$engine$core$pawn_row_$_iter__10073(cljs.core.chunk_rest(s__10074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10076),null);
}
} else {
var _ = cljs.core.first(s__10074__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"moved","moved",486549219),false], null),chess$engine$core$pawn_row_$_iter__10073(cljs.core.rest(s__10074__$2)));
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

chess.engine.core.empty_row = (function (){var iter__4529__auto__ = (function chess$engine$core$iter__10077(s__10078){
return (new cljs.core.LazySeq(null,(function (){
var s__10078__$1 = s__10078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10078__$1);
if(temp__5735__auto__){
var s__10078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10078__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10078__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10080 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10079 = (0);
while(true){
if((i__10079 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__10079);
cljs.core.chunk_append(b__10080,cljs.core.PersistentArrayMap.EMPTY);

var G__10139 = (i__10079 + (1));
i__10079 = G__10139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10080),chess$engine$core$iter__10077(cljs.core.chunk_rest(s__10078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10080),null);
}
} else {
var x = cljs.core.first(s__10078__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,chess$engine$core$iter__10077(cljs.core.rest(s__10078__$2)));
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

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chess.engine.core.main_row(new cljs.core.Keyword(null,"black","black",1294279647)),(new cljs.core.List(null,chess.engine.core.pawn_row(new cljs.core.Keyword(null,"black","black",1294279647)),null,(1),null)),(2),null)),(function (){var iter__4529__auto__ = (function chess$engine$core$iter__10081(s__10082){
return (new cljs.core.LazySeq(null,(function (){
var s__10082__$1 = s__10082;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10082__$1);
if(temp__5735__auto__){
var s__10082__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10082__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10082__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10084 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10083 = (0);
while(true){
if((i__10083 < size__4528__auto__)){
var _ = cljs.core._nth(c__4527__auto__,i__10083);
cljs.core.chunk_append(b__10084,chess.engine.core.empty_row);

var G__10144 = (i__10083 + (1));
i__10083 = G__10144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10084),chess$engine$core$iter__10081(cljs.core.chunk_rest(s__10082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10084),null);
}
} else {
var _ = cljs.core.first(s__10082__$2);
return cljs.core.cons(chess.engine.core.empty_row,chess$engine$core$iter__10081(cljs.core.rest(s__10082__$2)));
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
var matchie10095 = color;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie10095)){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie10095)){
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

var chess$engine$core$Engine$apply_move$dyn_10156 = (function (this$,board,move){
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
return chess$engine$core$Engine$apply_move$dyn_10156(this$,board,move);
}
});

var chess$engine$core$Engine$possible_moves$dyn_10161 = (function (this$,board,color){
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
return chess$engine$core$Engine$possible_moves$dyn_10161(this$,board,color);
}
});

var chess$engine$core$Engine$best_move$dyn_10169 = (function (this$,board,color){
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
return chess$engine$core$Engine$best_move$dyn_10169(this$,board,color);
}
});


//# sourceMappingURL=chess.engine.core.js.map
