goog.provide('chess.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.utils');

/**
 * interface for the chess ai. board is indexed like this:
 *   board[i][j] is like
 *  i = [8 7 6 ...], so reversed and indexed at zero,
 *  j = [a b c ...], so normal, but indexed at zero.
 *   so, if you're looking at the board and you are playing white, the top left is
 *   0,0 and moving one square closer to the white side is 1,0
 * @interface
 */
chess.local_engine.Engine = function(){};

/**
 * applies the move where move is of the form [[fromi fromj] [toi toj]...]
 *                        in the case of castling, theres more than one move, thus the '...'
 */
chess.local_engine.apply_move = (function chess$local_engine$apply_move(this$,board,move){
if((((!((this$ == null)))) && ((!((this$.chess$local_engine$Engine$apply_move$arity$3 == null)))))){
return this$.chess$local_engine$Engine$apply_move$arity$3(this$,board,move);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.local_engine.apply_move[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,move) : m__4488__auto__.call(null,this$,board,move));
} else {
var m__4485__auto__ = (chess.local_engine.apply_move["_"]);
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
chess.local_engine.possible_moves = (function chess$local_engine$possible_moves(this$,board,color){
if((((!((this$ == null)))) && ((!((this$.chess$local_engine$Engine$possible_moves$arity$3 == null)))))){
return this$.chess$local_engine$Engine$possible_moves$arity$3(this$,board,color);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.local_engine.possible_moves[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4488__auto__.call(null,this$,board,color));
} else {
var m__4485__auto__ = (chess.local_engine.possible_moves["_"]);
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
chess.local_engine.best_move = (function chess$local_engine$best_move(this$,board,color){
if((((!((this$ == null)))) && ((!((this$.chess$local_engine$Engine$best_move$arity$3 == null)))))){
return this$.chess$local_engine$Engine$best_move$arity$3(this$,board,color);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (chess.local_engine.best_move[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4488__auto__.call(null,this$,board,color));
} else {
var m__4485__auto__ = (chess.local_engine.best_move["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,board,color) : m__4485__auto__.call(null,this$,board,color));
} else {
throw cljs.core.missing_protocol("Engine.best-move",this$);
}
}
}
});

chess.local_engine.piece_seq = (function chess$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$local_engine$piece_seq_$_iter__29295(s__29296){
return (new cljs.core.LazySeq(null,(function (){
var s__29296__$1 = s__29296;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29296__$1);
if(temp__5735__auto__){
var s__29296__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29296__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29296__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29298 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29297 = (0);
while(true){
if((i__29297 < size__4581__auto__)){
var vec__29299 = cljs.core._nth(c__4580__auto__,i__29297);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29299,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29299,(1),null);
cljs.core.chunk_append(b__29298,(function (){var iter__4582__auto__ = ((function (i__29297,vec__29299,row,i,c__4580__auto__,size__4581__auto__,b__29298,s__29296__$2,temp__5735__auto__){
return (function chess$local_engine$piece_seq_$_iter__29295_$_iter__29302(s__29303){
return (new cljs.core.LazySeq(null,((function (i__29297,vec__29299,row,i,c__4580__auto__,size__4581__auto__,b__29298,s__29296__$2,temp__5735__auto__){
return (function (){
var s__29303__$1 = s__29303;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29303__$1);
if(temp__5735__auto____$1){
var s__29303__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29303__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__29303__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__29305 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__29304 = (0);
while(true){
if((i__29304 < size__4581__auto____$1)){
var vec__29306 = cljs.core._nth(c__4580__auto____$1,i__29304);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29306,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29306,(1),null);
cljs.core.chunk_append(b__29305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__29467 = (i__29304 + (1));
i__29304 = G__29467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29305),chess$local_engine$piece_seq_$_iter__29295_$_iter__29302(cljs.core.chunk_rest(s__29303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29305),null);
}
} else {
var vec__29309 = cljs.core.first(s__29303__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29309,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29309,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$local_engine$piece_seq_$_iter__29295_$_iter__29302(cljs.core.rest(s__29303__$2)));
}
} else {
return null;
}
break;
}
});})(i__29297,vec__29299,row,i,c__4580__auto__,size__4581__auto__,b__29298,s__29296__$2,temp__5735__auto__))
,null,null));
});})(i__29297,vec__29299,row,i,c__4580__auto__,size__4581__auto__,b__29298,s__29296__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__29468 = (i__29297 + (1));
i__29297 = G__29468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29298),chess$local_engine$piece_seq_$_iter__29295(cljs.core.chunk_rest(s__29296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29298),null);
}
} else {
var vec__29312 = cljs.core.first(s__29296__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__29312,row,i,s__29296__$2,temp__5735__auto__){
return (function chess$local_engine$piece_seq_$_iter__29295_$_iter__29315(s__29316){
return (new cljs.core.LazySeq(null,(function (){
var s__29316__$1 = s__29316;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29316__$1);
if(temp__5735__auto____$1){
var s__29316__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29316__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29316__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29318 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29317 = (0);
while(true){
if((i__29317 < size__4581__auto__)){
var vec__29319 = cljs.core._nth(c__4580__auto__,i__29317);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29319,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29319,(1),null);
cljs.core.chunk_append(b__29318,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__29473 = (i__29317 + (1));
i__29317 = G__29473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29318),chess$local_engine$piece_seq_$_iter__29295_$_iter__29315(cljs.core.chunk_rest(s__29316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29318),null);
}
} else {
var vec__29322 = cljs.core.first(s__29316__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29322,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29322,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$local_engine$piece_seq_$_iter__29295_$_iter__29315(cljs.core.rest(s__29316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__29312,row,i,s__29296__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$local_engine$piece_seq_$_iter__29295(cljs.core.rest(s__29296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], 0));
});
chess.local_engine.find_piece = (function chess$local_engine$find_piece(board,props){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29327){
var vec__29328 = p__29327;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29328,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29328,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29328,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29331){
var vec__29332 = p__29331;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29325_SHARP_,p2__29326_SHARP_){
var and__4174__auto__ = p1__29325_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__29326_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$local_engine$find_piece_$_iter__29335(s__29336){
return (new cljs.core.LazySeq(null,(function (){
var s__29336__$1 = s__29336;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29336__$1);
if(temp__5735__auto__){
var s__29336__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29336__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29336__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29338 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29337 = (0);
while(true){
if((i__29337 < size__4581__auto__)){
var vec__29339 = cljs.core._nth(c__4580__auto__,i__29337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(1),null);
cljs.core.chunk_append(b__29338,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__29478 = (i__29337 + (1));
i__29337 = G__29478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29338),chess$local_engine$find_piece_$_iter__29335(cljs.core.chunk_rest(s__29336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29338),null);
}
} else {
var vec__29342 = cljs.core.first(s__29336__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$local_engine$find_piece_$_iter__29335(cljs.core.rest(s__29336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(props);
})());
}),chess.local_engine.piece_seq(board)));
});
chess.local_engine.piece_at = (function chess$local_engine$piece_at(board,i,j){

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,i),j);
});
chess.local_engine.color_dir = (function chess$local_engine$color_dir(sq){
var matchie29345 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie29345)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie29345)){
return (1);
} else {
return null;
}
}
});
chess.local_engine.getall = (function chess$local_engine$getall(board,color){

chess.local_engine.on_line = (function chess$local_engine$getall_$_on_line(board__$1,i,j,di,dj,color__$1){
var sofar = cljs.core.PersistentVector.EMPTY;
var ci = (i + di);
var cj = (j + dj);
while(true){
if((((ci >= (8))) || ((cj >= (8))) || ((ci < (0))) || ((cj < (0))))){
return sofar;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__29351 = chess.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__29351.cljs$core$IFn$_invoke$arity$1 ? fexpr__29351.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__29351.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__29352 = chess.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__29352.cljs$core$IFn$_invoke$arity$1 ? fexpr__29352.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__29352.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__29484 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__29485 = (ci + di);
var G__29486 = (cj + dj);
sofar = G__29484;
ci = G__29485;
cj = G__29486;
continue;

}
}
}
break;
}
});

chess.local_engine.can_place = (function chess$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__29354 = chess.local_engine.piece_at(board__$1,i,j);
return (fexpr__29354.cljs$core$IFn$_invoke$arity$1 ? fexpr__29354.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__29354.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.local_engine.castle_moves = (function chess$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__29355 = chess.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__29358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29355,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29358,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29358,(1),null);
var rooks = chess.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.local_engine.piece_at(board__$1,ki,kj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__29361){
var vec__29362 = p__29361;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29346_SHARP_,p2__29347_SHARP_){
var and__4174__auto__ = p1__29346_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__29347_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$local_engine$getall_$_castle_moves_$_iter__29365(s__29366){
return (new cljs.core.LazySeq(null,(function (){
var s__29366__$1 = s__29366;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29366__$1);
if(temp__5735__auto__){
var s__29366__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29366__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29366__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29368 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29367 = (0);
while(true){
if((i__29367 < size__4581__auto__)){
var vec__29369 = cljs.core._nth(c__4580__auto__,i__29367);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(1),null);
cljs.core.chunk_append(b__29368,((chess.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__29492 = (i__29367 + (1));
i__29367 = G__29492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29368),chess$local_engine$getall_$_castle_moves_$_iter__29365(cljs.core.chunk_rest(s__29366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29368),null);
}
} else {
var vec__29372 = cljs.core.first(s__29366__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(1),null);
return cljs.core.cons(((chess.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$local_engine$getall_$_castle_moves_$_iter__29365(cljs.core.rest(s__29366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,ki,ki,ki,ki], null),(((rj < kj))?cljs.core.range.cljs$core$IFn$_invoke$arity$2((rj + (1)),kj):cljs.core.range.cljs$core$IFn$_invoke$arity$2((kj + (1)),rj))], 0)));
})()))){
if((rj < kj)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,kj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,(kj - (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,rj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,(kj - (1))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,kj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,(kj + (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,rj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,(kj + (1))], null)], null)], null);
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooks], 0));
}
});

chess.local_engine.piece_moves = (function chess$local_engine$getall_$_piece_moves(board__$1,i,j,sq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),p], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29375){
var vec__29376 = p__29375;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29376,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29376,(1),null);
return chess.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie29379 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie29379)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie29379)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$local_engine$getall_$_piece_moves_$_iter__29380(s__29381){
return (new cljs.core.LazySeq(null,(function (){
var s__29381__$1 = s__29381;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29381__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29381__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function chess$local_engine$getall_$_piece_moves_$_iter__29380_$_iter__29382(s__29383){
return (new cljs.core.LazySeq(null,((function (s__29381__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function (){
var s__29383__$1 = s__29383;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29383__$1);
if(temp__5735__auto____$1){
var s__29383__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29383__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29383__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29385 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29384 = (0);
while(true){
if((i__29384 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__29384);
cljs.core.chunk_append(b__29385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__29496 = (i__29384 + (1));
i__29384 = G__29496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29385),chess$local_engine$getall_$_piece_moves_$_iter__29380_$_iter__29382(cljs.core.chunk_rest(s__29383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29385),null);
}
} else {
var dj = cljs.core.first(s__29383__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$local_engine$getall_$_piece_moves_$_iter__29380_$_iter__29382(cljs.core.rest(s__29383__$2)));
}
} else {
return null;
}
break;
}
});})(s__29381__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
,null,null));
});})(s__29381__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$local_engine$getall_$_piece_moves_$_iter__29380(cljs.core.rest(s__29381__$1)));
} else {
var G__29498 = cljs.core.rest(s__29381__$1);
s__29381__$1 = G__29498;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
})(),(function (){var iter__4582__auto__ = (function chess$local_engine$getall_$_piece_moves_$_iter__29386(s__29387){
return (new cljs.core.LazySeq(null,(function (){
var s__29387__$1 = s__29387;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29387__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29387__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function chess$local_engine$getall_$_piece_moves_$_iter__29386_$_iter__29388(s__29389){
return (new cljs.core.LazySeq(null,((function (s__29387__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function (){
var s__29389__$1 = s__29389;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29389__$1);
if(temp__5735__auto____$1){
var s__29389__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29389__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29389__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29391 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29390 = (0);
while(true){
if((i__29390 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__29390);
cljs.core.chunk_append(b__29391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__29499 = (i__29390 + (1));
i__29390 = G__29499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29391),chess$local_engine$getall_$_piece_moves_$_iter__29386_$_iter__29388(cljs.core.chunk_rest(s__29389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29391),null);
}
} else {
var dj = cljs.core.first(s__29389__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$local_engine$getall_$_piece_moves_$_iter__29386_$_iter__29388(cljs.core.rest(s__29389__$2)));
}
} else {
return null;
}
break;
}
});})(s__29387__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
,null,null));
});})(s__29387__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$local_engine$getall_$_piece_moves_$_iter__29386(cljs.core.rest(s__29387__$1)));
} else {
var G__29500 = cljs.core.rest(s__29387__$1);
s__29387__$1 = G__29500;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie29379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$local_engine$getall_$_piece_moves_$_iter__29392(s__29393){
return (new cljs.core.LazySeq(null,(function (){
var s__29393__$1 = s__29393;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29393__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29393__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function chess$local_engine$getall_$_piece_moves_$_iter__29392_$_iter__29394(s__29395){
return (new cljs.core.LazySeq(null,((function (s__29393__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function (){
var s__29395__$1 = s__29395;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29395__$1);
if(temp__5735__auto____$1){
var s__29395__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29395__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29395__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29397 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29396 = (0);
while(true){
if((i__29396 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__29396);
cljs.core.chunk_append(b__29397,chess.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__29501 = (i__29396 + (1));
i__29396 = G__29501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29397),chess$local_engine$getall_$_piece_moves_$_iter__29392_$_iter__29394(cljs.core.chunk_rest(s__29395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29397),null);
}
} else {
var dj = cljs.core.first(s__29395__$2);
return cljs.core.cons(chess.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$local_engine$getall_$_piece_moves_$_iter__29392_$_iter__29394(cljs.core.rest(s__29395__$2)));
}
} else {
return null;
}
break;
}
});})(s__29393__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
,null,null));
});})(s__29393__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$local_engine$getall_$_piece_moves_$_iter__29392(cljs.core.rest(s__29393__$1)));
} else {
var G__29502 = cljs.core.rest(s__29393__$1);
s__29393__$1 = G__29502;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie29379)){
var iter__4582__auto__ = (function chess$local_engine$getall_$_piece_moves_$_iter__29398(s__29399){
return (new cljs.core.LazySeq(null,(function (){
var s__29399__$1 = s__29399;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29399__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29399__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function chess$local_engine$getall_$_piece_moves_$_iter__29398_$_iter__29400(s__29401){
return (new cljs.core.LazySeq(null,((function (s__29399__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function (){
var s__29401__$1 = s__29401;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29401__$1);
if(temp__5735__auto____$1){
var s__29401__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29401__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29401__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29403 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29402 = (0);
while(true){
if((i__29402 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__29402);
cljs.core.chunk_append(b__29403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__29503 = (i__29402 + (1));
i__29402 = G__29503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29403),chess$local_engine$getall_$_piece_moves_$_iter__29398_$_iter__29400(cljs.core.chunk_rest(s__29401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29403),null);
}
} else {
var dj = cljs.core.first(s__29401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$local_engine$getall_$_piece_moves_$_iter__29398_$_iter__29400(cljs.core.rest(s__29401__$2)));
}
} else {
return null;
}
break;
}
});})(s__29399__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
,null,null));
});})(s__29399__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$local_engine$getall_$_piece_moves_$_iter__29398(cljs.core.rest(s__29399__$1)));
} else {
var G__29504 = cljs.core.rest(s__29399__$1);
s__29399__$1 = G__29504;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie29379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$local_engine$getall_$_piece_moves_$_iter__29404(s__29405){
return (new cljs.core.LazySeq(null,(function (){
var s__29405__$1 = s__29405;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29405__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29405__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function chess$local_engine$getall_$_piece_moves_$_iter__29404_$_iter__29406(s__29407){
return (new cljs.core.LazySeq(null,((function (s__29405__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379){
return (function (){
var s__29407__$1 = s__29407;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29407__$1);
if(temp__5735__auto____$1){
var s__29407__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29407__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29407__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29409 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29408 = (0);
while(true){
if((i__29408 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__29408);
cljs.core.chunk_append(b__29409,chess.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__29505 = (i__29408 + (1));
i__29408 = G__29505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29409),chess$local_engine$getall_$_piece_moves_$_iter__29404_$_iter__29406(cljs.core.chunk_rest(s__29407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29409),null);
}
} else {
var dj = cljs.core.first(s__29407__$2);
return cljs.core.cons(chess.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$local_engine$getall_$_piece_moves_$_iter__29404_$_iter__29406(cljs.core.rest(s__29407__$2)));
}
} else {
return null;
}
break;
}
});})(s__29405__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
,null,null));
});})(s__29405__$1,di,xs__6292__auto__,temp__5735__auto__,matchie29379))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$local_engine$getall_$_piece_moves_$_iter__29404(cljs.core.rest(s__29405__$1)));
} else {
var G__29506 = cljs.core.rest(s__29405__$1);
s__29405__$1 = G__29506;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie29379)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29410){
var vec__29411 = p__29410;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
return ((function (){var fexpr__29414 = chess.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__29414.cljs$core$IFn$_invoke$arity$1 ? fexpr__29414.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__29414.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29415){
var vec__29416 = p__29415;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29416,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29416,(1),null);
if(chess.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))){
if((function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["testing-",i__$1,j__$1], 0));

return true;
})()
){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__29419 = chess.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__29419.cljs$core$IFn$_invoke$arity$1 ? fexpr__29419.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__29419.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),(function (){var G__29420 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
return (chess.local_engine.other_color.cljs$core$IFn$_invoke$arity$1 ? chess.local_engine.other_color.cljs$core$IFn$_invoke$arity$1(G__29420) : chess.local_engine.other_color.call(null,G__29420));
})());
} else {
return false;
}
} else {
return false;
}
}),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.local_engine.color_dir(sq)),(j - (1))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.local_engine.color_dir(sq)),(j + (1))], null),null,(1),null)),(2),null))));
} else {
return null;
}
}
}
}
}
}
})()));
});

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29348_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_moves,cljs.core.cons(board,p1__29348_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29421){
var vec__29422 = p__29421;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.local_engine.piece_seq(board))))], 0));
});
chess.local_engine.local_apply_move = (function chess$local_engine$local_apply_move(board,p__29425){
var vec__29426 = p__29425;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(3),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing move: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [from1,to1,from2,to2], null)], 0));

console.log("doing move: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [from1,to1,from2,to2], null));

var iter__4582__auto__ = (function chess$local_engine$local_apply_move_$_iter__29429(s__29430){
return (new cljs.core.LazySeq(null,(function (){
var s__29430__$1 = s__29430;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29430__$1);
if(temp__5735__auto__){
var s__29430__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29430__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29430__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29432 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29431 = (0);
while(true){
if((i__29431 < size__4581__auto__)){
var vec__29433 = cljs.core._nth(c__4580__auto__,i__29431);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29433,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29433,(1),null);
cljs.core.chunk_append(b__29432,(function (){var iter__4582__auto__ = ((function (i__29431,vec__29433,row,i,c__4580__auto__,size__4581__auto__,b__29432,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2){
return (function chess$local_engine$local_apply_move_$_iter__29429_$_iter__29436(s__29437){
return (new cljs.core.LazySeq(null,((function (i__29431,vec__29433,row,i,c__4580__auto__,size__4581__auto__,b__29432,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2){
return (function (){
var s__29437__$1 = s__29437;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29437__$1);
if(temp__5735__auto____$1){
var s__29437__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29437__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__29437__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__29439 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__29438 = (0);
while(true){
if((i__29438 < size__4581__auto____$1)){
var vec__29440 = cljs.core._nth(c__4580__auto____$1,i__29438);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29440,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29440,(1),null);
cljs.core.chunk_append(b__29439,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__29507 = (i__29438 + (1));
i__29438 = G__29507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29439),chess$local_engine$local_apply_move_$_iter__29429_$_iter__29436(cljs.core.chunk_rest(s__29437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29439),null);
}
} else {
var vec__29443 = cljs.core.first(s__29437__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29443,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29443,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$local_engine$local_apply_move_$_iter__29429_$_iter__29436(cljs.core.rest(s__29437__$2)));
}
} else {
return null;
}
break;
}
});})(i__29431,vec__29433,row,i,c__4580__auto__,size__4581__auto__,b__29432,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2))
,null,null));
});})(i__29431,vec__29433,row,i,c__4580__auto__,size__4581__auto__,b__29432,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__29508 = (i__29431 + (1));
i__29431 = G__29508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29432),chess$local_engine$local_apply_move_$_iter__29429(cljs.core.chunk_rest(s__29430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29432),null);
}
} else {
var vec__29446 = cljs.core.first(s__29430__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__29446,row,i,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2){
return (function chess$local_engine$local_apply_move_$_iter__29429_$_iter__29449(s__29450){
return (new cljs.core.LazySeq(null,(function (){
var s__29450__$1 = s__29450;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29450__$1);
if(temp__5735__auto____$1){
var s__29450__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29450__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29450__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29452 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29451 = (0);
while(true){
if((i__29451 < size__4581__auto__)){
var vec__29453 = cljs.core._nth(c__4580__auto__,i__29451);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29453,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29453,(1),null);
cljs.core.chunk_append(b__29452,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__29509 = (i__29451 + (1));
i__29451 = G__29509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29452),chess$local_engine$local_apply_move_$_iter__29429_$_iter__29449(cljs.core.chunk_rest(s__29450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29452),null);
}
} else {
var vec__29456 = cljs.core.first(s__29450__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29456,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29456,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$local_engine$local_apply_move_$_iter__29429_$_iter__29449(cljs.core.rest(s__29450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__29446,row,i,s__29430__$2,temp__5735__auto__,vec__29426,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$local_engine$local_apply_move_$_iter__29429(cljs.core.rest(s__29430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
});
chess.local_engine.local_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.local_engine !== 'undefined') && (typeof chess.local_engine.t_chess$local_engine29460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {chess.local_engine.Engine}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chess.local_engine.t_chess$local_engine29460 = (function (meta29461){
this.meta29461 = meta29461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.local_engine.t_chess$local_engine29460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29462,meta29461__$1){
var self__ = this;
var _29462__$1 = this;
return (new chess.local_engine.t_chess$local_engine29460(meta29461__$1));
}));

(chess.local_engine.t_chess$local_engine29460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29462){
var self__ = this;
var _29462__$1 = this;
return self__.meta29461;
}));

(chess.local_engine.t_chess$local_engine29460.prototype.chess$local_engine$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.local_engine.t_chess$local_engine29460.prototype.chess$local_engine$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
return chess.local_engine.local_apply_move(board,move);
}));

(chess.local_engine.t_chess$local_engine29460.prototype.chess$local_engine$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$local_engine$Engine$apply_move$arity$3(null,board,move);
var king = chess.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
return cljs.core.not(cljs.core.some((function (p1__29459_SHARP_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["comparing ",king," and ",p1__29459_SHARP_], 0));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__29459_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.local_engine.getall(new_board,(chess.local_engine.other_color.cljs$core$IFn$_invoke$arity$1 ? chess.local_engine.other_color.cljs$core$IFn$_invoke$arity$1(color) : chess.local_engine.other_color.call(null,color)))], 0))));
}),chess.local_engine.getall(board,color));
}));

(chess.local_engine.t_chess$local_engine29460.prototype.chess$local_engine$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
return null;
}));

(chess.local_engine.t_chess$local_engine29460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29461","meta29461",-1016350262,null)], null);
}));

(chess.local_engine.t_chess$local_engine29460.cljs$lang$type = true);

(chess.local_engine.t_chess$local_engine29460.cljs$lang$ctorStr = "chess.local-engine/t_chess$local_engine29460");

(chess.local_engine.t_chess$local_engine29460.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.local-engine/t_chess$local_engine29460");
}));

/**
 * Positional factory function for chess.local-engine/t_chess$local_engine29460.
 */
chess.local_engine.__GT_t_chess$local_engine29460 = (function chess$local_engine$__GT_t_chess$local_engine29460(meta29461){
return (new chess.local_engine.t_chess$local_engine29460(meta29461));
});

}

return (new chess.local_engine.t_chess$local_engine29460(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.local-engine.js.map
