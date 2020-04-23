goog.provide('chess.engine.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.engine.core');
goog.require('chess.utils');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__27387(s__27388){
return (new cljs.core.LazySeq(null,(function (){
var s__27388__$1 = s__27388;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27388__$1);
if(temp__5735__auto__){
var s__27388__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27388__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27388__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27390 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27389 = (0);
while(true){
if((i__27389 < size__4581__auto__)){
var vec__27391 = cljs.core._nth(c__4580__auto__,i__27389);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27391,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27391,(1),null);
cljs.core.chunk_append(b__27390,(function (){var iter__4582__auto__ = ((function (i__27389,vec__27391,row,i,c__4580__auto__,size__4581__auto__,b__27390,s__27388__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27401(s__27402){
return (new cljs.core.LazySeq(null,((function (i__27389,vec__27391,row,i,c__4580__auto__,size__4581__auto__,b__27390,s__27388__$2,temp__5735__auto__){
return (function (){
var s__27402__$1 = s__27402;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27402__$1);
if(temp__5735__auto____$1){
var s__27402__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27402__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__27402__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__27404 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__27403 = (0);
while(true){
if((i__27403 < size__4581__auto____$1)){
var vec__27415 = cljs.core._nth(c__4580__auto____$1,i__27403);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(1),null);
cljs.core.chunk_append(b__27404,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__27809 = (i__27403 + (1));
i__27403 = G__27809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27404),chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27401(cljs.core.chunk_rest(s__27402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27404),null);
}
} else {
var vec__27432 = cljs.core.first(s__27402__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27432,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27432,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27401(cljs.core.rest(s__27402__$2)));
}
} else {
return null;
}
break;
}
});})(i__27389,vec__27391,row,i,c__4580__auto__,size__4581__auto__,b__27390,s__27388__$2,temp__5735__auto__))
,null,null));
});})(i__27389,vec__27391,row,i,c__4580__auto__,size__4581__auto__,b__27390,s__27388__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__27811 = (i__27389 + (1));
i__27389 = G__27811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27390),chess$engine$local_engine$piece_seq_$_iter__27387(cljs.core.chunk_rest(s__27388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27390),null);
}
} else {
var vec__27440 = cljs.core.first(s__27388__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__27440,row,i,s__27388__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27446(s__27447){
return (new cljs.core.LazySeq(null,(function (){
var s__27447__$1 = s__27447;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27447__$1);
if(temp__5735__auto____$1){
var s__27447__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27447__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27447__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27449 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27448 = (0);
while(true){
if((i__27448 < size__4581__auto__)){
var vec__27457 = cljs.core._nth(c__4580__auto__,i__27448);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(1),null);
cljs.core.chunk_append(b__27449,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__27813 = (i__27448 + (1));
i__27448 = G__27813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27449),chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27446(cljs.core.chunk_rest(s__27447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27449),null);
}
} else {
var vec__27467 = cljs.core.first(s__27447__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__27387_$_iter__27446(cljs.core.rest(s__27447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27440,row,i,s__27388__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__27387(cljs.core.rest(s__27388__$2)));
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
chess.engine.local_engine.find_piece = (function chess$engine$local_engine$find_piece(board,props){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27486){
var vec__27487 = p__27486;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27487,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27487,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27487,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27493){
var vec__27494 = p__27493;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27481_SHARP_,p2__27482_SHARP_){
var and__4174__auto__ = p1__27481_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__27482_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__27502(s__27503){
return (new cljs.core.LazySeq(null,(function (){
var s__27503__$1 = s__27503;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27503__$1);
if(temp__5735__auto__){
var s__27503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27503__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27503__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27505 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27504 = (0);
while(true){
if((i__27504 < size__4581__auto__)){
var vec__27511 = cljs.core._nth(c__4580__auto__,i__27504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,(1),null);
cljs.core.chunk_append(b__27505,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__27823 = (i__27504 + (1));
i__27504 = G__27823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27505),chess$engine$local_engine$find_piece_$_iter__27502(cljs.core.chunk_rest(s__27503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27505),null);
}
} else {
var vec__27521 = cljs.core.first(s__27503__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27521,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__27502(cljs.core.rest(s__27503__$2)));
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
}),chess.engine.local_engine.piece_seq(board)));
});
chess.engine.local_engine.piece_at = (function chess$engine$local_engine$piece_at(board,i,j){

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,i),j);
});
chess.engine.local_engine.color_dir = (function chess$engine$local_engine$color_dir(sq){
var matchie27527 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie27527)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie27527)){
return (1);
} else {
return null;
}
}
});
chess.engine.local_engine.getall = (function chess$engine$local_engine$getall(board,color){

chess.engine.local_engine.on_line = (function chess$engine$local_engine$getall_$_on_line(board__$1,i,j,di,dj,color__$1){
var sofar = cljs.core.PersistentVector.EMPTY;
var ci = (i + di);
var cj = (j + dj);
while(true){
if((((ci >= (8))) || ((cj >= (8))) || ((ci < (0))) || ((cj < (0))))){
return sofar;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27549 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__27549.cljs$core$IFn$_invoke$arity$1 ? fexpr__27549.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27549.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__27551 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__27551.cljs$core$IFn$_invoke$arity$1 ? fexpr__27551.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__27551.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__27832 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__27833 = (ci + di);
var G__27834 = (cj + dj);
sofar = G__27832;
ci = G__27833;
cj = G__27834;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27557 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__27557.cljs$core$IFn$_invoke$arity$1 ? fexpr__27557.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27557.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__27558 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__27561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27561,(1),null);
var rooks = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
if(cljs.core.truth_((function (){var or__4185__auto__ = (ki == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ki,kj));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__27567){
var vec__27568 = p__27567;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27568,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27568,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27534_SHARP_,p2__27535_SHARP_){
var and__4174__auto__ = p1__27534_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__27535_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__27571(s__27572){
return (new cljs.core.LazySeq(null,(function (){
var s__27572__$1 = s__27572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27572__$1);
if(temp__5735__auto__){
var s__27572__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27572__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27572__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27574 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27573 = (0);
while(true){
if((i__27573 < size__4581__auto__)){
var vec__27582 = cljs.core._nth(c__4580__auto__,i__27573);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(1),null);
cljs.core.chunk_append(b__27574,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__27843 = (i__27573 + (1));
i__27573 = G__27843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27574),chess$engine$local_engine$getall_$_castle_moves_$_iter__27571(cljs.core.chunk_rest(s__27572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27574),null);
}
} else {
var vec__27593 = cljs.core.first(s__27572__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27593,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27593,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__27571(cljs.core.rest(s__27572__$2)));
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

chess.engine.local_engine.piece_moves = (function chess$engine$local_engine$getall_$_piece_moves(board__$1,i,j,sq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),p], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27602){
var vec__27603 = p__27602;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27603,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27603,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie27606 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie27606)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie27606)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27607(s__27608){
return (new cljs.core.LazySeq(null,(function (){
var s__27608__$1 = s__27608;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27608__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27608__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27607_$_iter__27609(s__27610){
return (new cljs.core.LazySeq(null,((function (s__27608__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function (){
var s__27610__$1 = s__27610;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27610__$1);
if(temp__5735__auto____$1){
var s__27610__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27610__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27610__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27612 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27611 = (0);
while(true){
if((i__27611 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27611);
cljs.core.chunk_append(b__27612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27937 = (i__27611 + (1));
i__27611 = G__27937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27612),chess$engine$local_engine$getall_$_piece_moves_$_iter__27607_$_iter__27609(cljs.core.chunk_rest(s__27610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27612),null);
}
} else {
var dj = cljs.core.first(s__27610__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27607_$_iter__27609(cljs.core.rest(s__27610__$2)));
}
} else {
return null;
}
break;
}
});})(s__27608__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
,null,null));
});})(s__27608__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27607(cljs.core.rest(s__27608__$1)));
} else {
var G__27942 = cljs.core.rest(s__27608__$1);
s__27608__$1 = G__27942;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27624(s__27625){
return (new cljs.core.LazySeq(null,(function (){
var s__27625__$1 = s__27625;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27625__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27625__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27624_$_iter__27626(s__27627){
return (new cljs.core.LazySeq(null,((function (s__27625__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function (){
var s__27627__$1 = s__27627;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27627__$1);
if(temp__5735__auto____$1){
var s__27627__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27627__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27627__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27629 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27628 = (0);
while(true){
if((i__27628 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27628);
cljs.core.chunk_append(b__27629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27953 = (i__27628 + (1));
i__27628 = G__27953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27629),chess$engine$local_engine$getall_$_piece_moves_$_iter__27624_$_iter__27626(cljs.core.chunk_rest(s__27627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27629),null);
}
} else {
var dj = cljs.core.first(s__27627__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27624_$_iter__27626(cljs.core.rest(s__27627__$2)));
}
} else {
return null;
}
break;
}
});})(s__27625__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
,null,null));
});})(s__27625__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27624(cljs.core.rest(s__27625__$1)));
} else {
var G__27959 = cljs.core.rest(s__27625__$1);
s__27625__$1 = G__27959;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie27606)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27636(s__27637){
return (new cljs.core.LazySeq(null,(function (){
var s__27637__$1 = s__27637;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27637__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27637__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27636_$_iter__27638(s__27639){
return (new cljs.core.LazySeq(null,((function (s__27637__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function (){
var s__27639__$1 = s__27639;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27639__$1);
if(temp__5735__auto____$1){
var s__27639__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27639__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27639__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27641 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27640 = (0);
while(true){
if((i__27640 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27640);
cljs.core.chunk_append(b__27641,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__27964 = (i__27640 + (1));
i__27640 = G__27964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27641),chess$engine$local_engine$getall_$_piece_moves_$_iter__27636_$_iter__27638(cljs.core.chunk_rest(s__27639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27641),null);
}
} else {
var dj = cljs.core.first(s__27639__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__27636_$_iter__27638(cljs.core.rest(s__27639__$2)));
}
} else {
return null;
}
break;
}
});})(s__27637__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
,null,null));
});})(s__27637__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27636(cljs.core.rest(s__27637__$1)));
} else {
var G__27974 = cljs.core.rest(s__27637__$1);
s__27637__$1 = G__27974;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie27606)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27648(s__27649){
return (new cljs.core.LazySeq(null,(function (){
var s__27649__$1 = s__27649;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27649__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27649__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27648_$_iter__27650(s__27651){
return (new cljs.core.LazySeq(null,((function (s__27649__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function (){
var s__27651__$1 = s__27651;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27651__$1);
if(temp__5735__auto____$1){
var s__27651__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27651__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27651__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27653 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27652 = (0);
while(true){
if((i__27652 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27652);
cljs.core.chunk_append(b__27653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27985 = (i__27652 + (1));
i__27652 = G__27985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27653),chess$engine$local_engine$getall_$_piece_moves_$_iter__27648_$_iter__27650(cljs.core.chunk_rest(s__27651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27653),null);
}
} else {
var dj = cljs.core.first(s__27651__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27648_$_iter__27650(cljs.core.rest(s__27651__$2)));
}
} else {
return null;
}
break;
}
});})(s__27649__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
,null,null));
});})(s__27649__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27648(cljs.core.rest(s__27649__$1)));
} else {
var G__27992 = cljs.core.rest(s__27649__$1);
s__27649__$1 = G__27992;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie27606)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27660(s__27661){
return (new cljs.core.LazySeq(null,(function (){
var s__27661__$1 = s__27661;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27661__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27661__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27660_$_iter__27662(s__27663){
return (new cljs.core.LazySeq(null,((function (s__27661__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606){
return (function (){
var s__27663__$1 = s__27663;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27663__$1);
if(temp__5735__auto____$1){
var s__27663__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27663__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27663__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27665 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27664 = (0);
while(true){
if((i__27664 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27664);
cljs.core.chunk_append(b__27665,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__27998 = (i__27664 + (1));
i__27664 = G__27998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27665),chess$engine$local_engine$getall_$_piece_moves_$_iter__27660_$_iter__27662(cljs.core.chunk_rest(s__27663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27665),null);
}
} else {
var dj = cljs.core.first(s__27663__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__27660_$_iter__27662(cljs.core.rest(s__27663__$2)));
}
} else {
return null;
}
break;
}
});})(s__27661__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
,null,null));
});})(s__27661__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27606))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27660(cljs.core.rest(s__27661__$1)));
} else {
var G__28004 = cljs.core.rest(s__27661__$1);
s__27661__$1 = G__28004;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie27606)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27672){
var vec__27673 = p__27672;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(1),null);
return ((function (){var fexpr__27676 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__27676.cljs$core$IFn$_invoke$arity$1 ? fexpr__27676.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__27676.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27677){
var vec__27678 = p__27677;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27678,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27678,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27687 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__27687.cljs$core$IFn$_invoke$arity$1 ? fexpr__27687.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27687.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),chess.engine.core.other_color((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))));
}),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),(j - (1))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),(j + (1))], null),null,(1),null)),(2),null))));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27543_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__27543_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27694){
var vec__27695 = p__27694;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__27702){
var vec__27703 = p__27702;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__27706(s__27707){
return (new cljs.core.LazySeq(null,(function (){
var s__27707__$1 = s__27707;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27707__$1);
if(temp__5735__auto__){
var s__27707__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27707__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27707__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27709 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27708 = (0);
while(true){
if((i__27708 < size__4581__auto__)){
var vec__27714 = cljs.core._nth(c__4580__auto__,i__27708);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(1),null);
cljs.core.chunk_append(b__27709,(function (){var iter__4582__auto__ = ((function (i__27708,vec__27714,row,i,c__4580__auto__,size__4581__auto__,b__27709,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27721(s__27722){
return (new cljs.core.LazySeq(null,((function (i__27708,vec__27714,row,i,c__4580__auto__,size__4581__auto__,b__27709,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2){
return (function (){
var s__27722__$1 = s__27722;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27722__$1);
if(temp__5735__auto____$1){
var s__27722__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27722__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__27722__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__27724 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__27723 = (0);
while(true){
if((i__27723 < size__4581__auto____$1)){
var vec__27728 = cljs.core._nth(c__4580__auto____$1,i__27723);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(1),null);
cljs.core.chunk_append(b__27724,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__28026 = (i__27723 + (1));
i__27723 = G__28026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27724),chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27721(cljs.core.chunk_rest(s__27722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27724),null);
}
} else {
var vec__27738 = cljs.core.first(s__27722__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27721(cljs.core.rest(s__27722__$2)));
}
} else {
return null;
}
break;
}
});})(i__27708,vec__27714,row,i,c__4580__auto__,size__4581__auto__,b__27709,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2))
,null,null));
});})(i__27708,vec__27714,row,i,c__4580__auto__,size__4581__auto__,b__27709,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__28033 = (i__27708 + (1));
i__27708 = G__28033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27709),chess$engine$local_engine$local_apply_move_$_iter__27706(cljs.core.chunk_rest(s__27707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27709),null);
}
} else {
var vec__27744 = cljs.core.first(s__27707__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__27744,row,i,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27747(s__27748){
return (new cljs.core.LazySeq(null,(function (){
var s__27748__$1 = s__27748;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27748__$1);
if(temp__5735__auto____$1){
var s__27748__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27748__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27748__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27750 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27749 = (0);
while(true){
if((i__27749 < size__4581__auto__)){
var vec__27758 = cljs.core._nth(c__4580__auto__,i__27749);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(1),null);
cljs.core.chunk_append(b__27750,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__28036 = (i__27749 + (1));
i__27749 = G__28036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27750),chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27747(cljs.core.chunk_rest(s__27748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27750),null);
}
} else {
var vec__27764 = cljs.core.first(s__27748__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__27706_$_iter__27747(cljs.core.rest(s__27748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27744,row,i,s__27707__$2,temp__5735__auto__,vec__27703,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__27706(cljs.core.rest(s__27707__$2)));
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
chess.engine.local_engine.piece_value = (function chess$engine$local_engine$piece_value(p){
var matchie27770 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie27770)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie27770)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie27770)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie27770)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie27770)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie27770)){
return (1);
} else {
return null;
}
}
}
}
}
}
});
chess.engine.local_engine.board_value = (function chess$engine$local_engine$board_value(board,color){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27772){
var vec__27773 = p__27772;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27773,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27773,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27773,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27776){
var vec__27777 = p__27776;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second(chess.engine.local_engine.local_best_move(applied_board,chess.engine.core.other_color(color),(depth - (1)))));
} else {
return chess.engine.local_engine.board_value(applied_board,color);
}
});
chess.engine.local_engine.local_best_move = (function chess$engine$local_engine$local_best_move(board,color,depth){

return chess.utils.maxf(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(2))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

return v;
} else {
return v;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move,chess.engine.local_engine.move_value(board,move,depth)], null);
}),chess.engine.local_engine.getall(board,color))));
});
chess.engine.local_engine.local_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine27789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine27789 = (function (meta27790){
this.meta27790 = meta27790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27791,meta27790__$1){
var self__ = this;
var _27791__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine27789(meta27790__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27791){
var self__ = this;
var _27791__$1 = this;
return self__.meta27790;
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__27797 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27797,(0),null);
return cljs.core.not(cljs.core.some((function (p1__27788_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__27788_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__27805 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27805,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27805,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27790","meta27790",53124351,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine27789.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine27789.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine27789");

(chess.engine.local_engine.t_chess$engine$local_engine27789.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine27789");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine27789.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine27789 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine27789(meta27790){
return (new chess.engine.local_engine.t_chess$engine$local_engine27789(meta27790));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine27789(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
