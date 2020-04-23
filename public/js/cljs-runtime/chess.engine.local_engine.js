goog.provide('chess.engine.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.engine.core');
goog.require('chess.utils');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__27409(s__27410){
return (new cljs.core.LazySeq(null,(function (){
var s__27410__$1 = s__27410;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27410__$1);
if(temp__5735__auto__){
var s__27410__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27410__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27410__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27412 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27411 = (0);
while(true){
if((i__27411 < size__4581__auto__)){
var vec__27421 = cljs.core._nth(c__4580__auto__,i__27411);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(1),null);
cljs.core.chunk_append(b__27412,(function (){var iter__4582__auto__ = ((function (i__27411,vec__27421,row,i,c__4580__auto__,size__4581__auto__,b__27412,s__27410__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27424(s__27425){
return (new cljs.core.LazySeq(null,((function (i__27411,vec__27421,row,i,c__4580__auto__,size__4581__auto__,b__27412,s__27410__$2,temp__5735__auto__){
return (function (){
var s__27425__$1 = s__27425;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27425__$1);
if(temp__5735__auto____$1){
var s__27425__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27425__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__27425__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__27427 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__27426 = (0);
while(true){
if((i__27426 < size__4581__auto____$1)){
var vec__27436 = cljs.core._nth(c__4580__auto____$1,i__27426);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27436,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27436,(1),null);
cljs.core.chunk_append(b__27427,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__27808 = (i__27426 + (1));
i__27426 = G__27808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27427),chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27424(cljs.core.chunk_rest(s__27425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27427),null);
}
} else {
var vec__27450 = cljs.core.first(s__27425__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27450,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27450,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27424(cljs.core.rest(s__27425__$2)));
}
} else {
return null;
}
break;
}
});})(i__27411,vec__27421,row,i,c__4580__auto__,size__4581__auto__,b__27412,s__27410__$2,temp__5735__auto__))
,null,null));
});})(i__27411,vec__27421,row,i,c__4580__auto__,size__4581__auto__,b__27412,s__27410__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__27810 = (i__27411 + (1));
i__27411 = G__27810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27412),chess$engine$local_engine$piece_seq_$_iter__27409(cljs.core.chunk_rest(s__27410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27412),null);
}
} else {
var vec__27460 = cljs.core.first(s__27410__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__27460,row,i,s__27410__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27463(s__27464){
return (new cljs.core.LazySeq(null,(function (){
var s__27464__$1 = s__27464;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27464__$1);
if(temp__5735__auto____$1){
var s__27464__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27464__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27464__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27466 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27465 = (0);
while(true){
if((i__27465 < size__4581__auto__)){
var vec__27478 = cljs.core._nth(c__4580__auto__,i__27465);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(1),null);
cljs.core.chunk_append(b__27466,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__27812 = (i__27465 + (1));
i__27465 = G__27812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27466),chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27463(cljs.core.chunk_rest(s__27464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27466),null);
}
} else {
var vec__27483 = cljs.core.first(s__27464__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27483,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27483,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__27409_$_iter__27463(cljs.core.rest(s__27464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27460,row,i,s__27410__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__27409(cljs.core.rest(s__27410__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27506){
var vec__27507 = p__27506;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27510){
var vec__27514 = p__27510;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27500_SHARP_,p2__27501_SHARP_){
var and__4174__auto__ = p1__27500_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__27501_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__27517(s__27518){
return (new cljs.core.LazySeq(null,(function (){
var s__27518__$1 = s__27518;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27518__$1);
if(temp__5735__auto__){
var s__27518__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27518__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27518__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27520 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27519 = (0);
while(true){
if((i__27519 < size__4581__auto__)){
var vec__27524 = cljs.core._nth(c__4580__auto__,i__27519);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,(1),null);
cljs.core.chunk_append(b__27520,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__27824 = (i__27519 + (1));
i__27519 = G__27824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27520),chess$engine$local_engine$find_piece_$_iter__27517(cljs.core.chunk_rest(s__27518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27520),null);
}
} else {
var vec__27528 = cljs.core.first(s__27518__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27528,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__27517(cljs.core.rest(s__27518__$2)));
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
var matchie27542 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie27542)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie27542)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27553 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__27553.cljs$core$IFn$_invoke$arity$1 ? fexpr__27553.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27553.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__27556 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__27556.cljs$core$IFn$_invoke$arity$1 ? fexpr__27556.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__27556.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__27829 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__27830 = (ci + di);
var G__27831 = (cj + dj);
sofar = G__27829;
ci = G__27830;
cj = G__27831;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27566 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__27566.cljs$core$IFn$_invoke$arity$1 ? fexpr__27566.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27566.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__27575 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__27578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27575,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27578,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27578,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__27585){
var vec__27586 = p__27585;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27544_SHARP_,p2__27545_SHARP_){
var and__4174__auto__ = p1__27544_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__27545_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__27589(s__27590){
return (new cljs.core.LazySeq(null,(function (){
var s__27590__$1 = s__27590;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27590__$1);
if(temp__5735__auto__){
var s__27590__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27590__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27590__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27592 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27591 = (0);
while(true){
if((i__27591 < size__4581__auto__)){
var vec__27596 = cljs.core._nth(c__4580__auto__,i__27591);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27596,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27596,(1),null);
cljs.core.chunk_append(b__27592,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__27842 = (i__27591 + (1));
i__27591 = G__27842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27592),chess$engine$local_engine$getall_$_castle_moves_$_iter__27589(cljs.core.chunk_rest(s__27590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27592),null);
}
} else {
var vec__27599 = cljs.core.first(s__27590__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27599,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27599,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__27589(cljs.core.rest(s__27590__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27613){
var vec__27614 = p__27613;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie27617 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie27617)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie27617)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27618(s__27619){
return (new cljs.core.LazySeq(null,(function (){
var s__27619__$1 = s__27619;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27619__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27619__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27618_$_iter__27620(s__27621){
return (new cljs.core.LazySeq(null,((function (s__27619__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function (){
var s__27621__$1 = s__27621;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27621__$1);
if(temp__5735__auto____$1){
var s__27621__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27621__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27621__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27623 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27622 = (0);
while(true){
if((i__27622 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27622);
cljs.core.chunk_append(b__27623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27926 = (i__27622 + (1));
i__27622 = G__27926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27623),chess$engine$local_engine$getall_$_piece_moves_$_iter__27618_$_iter__27620(cljs.core.chunk_rest(s__27621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27623),null);
}
} else {
var dj = cljs.core.first(s__27621__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27618_$_iter__27620(cljs.core.rest(s__27621__$2)));
}
} else {
return null;
}
break;
}
});})(s__27619__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
,null,null));
});})(s__27619__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27618(cljs.core.rest(s__27619__$1)));
} else {
var G__27941 = cljs.core.rest(s__27619__$1);
s__27619__$1 = G__27941;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27630(s__27631){
return (new cljs.core.LazySeq(null,(function (){
var s__27631__$1 = s__27631;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27631__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27631__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27630_$_iter__27632(s__27633){
return (new cljs.core.LazySeq(null,((function (s__27631__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function (){
var s__27633__$1 = s__27633;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27633__$1);
if(temp__5735__auto____$1){
var s__27633__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27633__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27633__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27635 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27634 = (0);
while(true){
if((i__27634 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27634);
cljs.core.chunk_append(b__27635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27950 = (i__27634 + (1));
i__27634 = G__27950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27635),chess$engine$local_engine$getall_$_piece_moves_$_iter__27630_$_iter__27632(cljs.core.chunk_rest(s__27633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27635),null);
}
} else {
var dj = cljs.core.first(s__27633__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27630_$_iter__27632(cljs.core.rest(s__27633__$2)));
}
} else {
return null;
}
break;
}
});})(s__27631__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
,null,null));
});})(s__27631__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27630(cljs.core.rest(s__27631__$1)));
} else {
var G__27955 = cljs.core.rest(s__27631__$1);
s__27631__$1 = G__27955;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie27617)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27642(s__27643){
return (new cljs.core.LazySeq(null,(function (){
var s__27643__$1 = s__27643;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27643__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27643__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27642_$_iter__27644(s__27645){
return (new cljs.core.LazySeq(null,((function (s__27643__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function (){
var s__27645__$1 = s__27645;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27645__$1);
if(temp__5735__auto____$1){
var s__27645__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27645__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27645__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27647 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27646 = (0);
while(true){
if((i__27646 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27646);
cljs.core.chunk_append(b__27647,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__27965 = (i__27646 + (1));
i__27646 = G__27965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27647),chess$engine$local_engine$getall_$_piece_moves_$_iter__27642_$_iter__27644(cljs.core.chunk_rest(s__27645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27647),null);
}
} else {
var dj = cljs.core.first(s__27645__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__27642_$_iter__27644(cljs.core.rest(s__27645__$2)));
}
} else {
return null;
}
break;
}
});})(s__27643__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
,null,null));
});})(s__27643__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27642(cljs.core.rest(s__27643__$1)));
} else {
var G__27975 = cljs.core.rest(s__27643__$1);
s__27643__$1 = G__27975;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie27617)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27654(s__27655){
return (new cljs.core.LazySeq(null,(function (){
var s__27655__$1 = s__27655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27655__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27655__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27654_$_iter__27656(s__27657){
return (new cljs.core.LazySeq(null,((function (s__27655__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function (){
var s__27657__$1 = s__27657;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27657__$1);
if(temp__5735__auto____$1){
var s__27657__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27657__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27657__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27659 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27658 = (0);
while(true){
if((i__27658 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27658);
cljs.core.chunk_append(b__27659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__27987 = (i__27658 + (1));
i__27658 = G__27987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27659),chess$engine$local_engine$getall_$_piece_moves_$_iter__27654_$_iter__27656(cljs.core.chunk_rest(s__27657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27659),null);
}
} else {
var dj = cljs.core.first(s__27657__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__27654_$_iter__27656(cljs.core.rest(s__27657__$2)));
}
} else {
return null;
}
break;
}
});})(s__27655__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
,null,null));
});})(s__27655__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27654(cljs.core.rest(s__27655__$1)));
} else {
var G__27991 = cljs.core.rest(s__27655__$1);
s__27655__$1 = G__27991;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie27617)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27666(s__27667){
return (new cljs.core.LazySeq(null,(function (){
var s__27667__$1 = s__27667;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27667__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__27667__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__27666_$_iter__27668(s__27669){
return (new cljs.core.LazySeq(null,((function (s__27667__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617){
return (function (){
var s__27669__$1 = s__27669;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27669__$1);
if(temp__5735__auto____$1){
var s__27669__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27669__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27669__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27671 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27670 = (0);
while(true){
if((i__27670 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__27670);
cljs.core.chunk_append(b__27671,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__27997 = (i__27670 + (1));
i__27670 = G__27997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27671),chess$engine$local_engine$getall_$_piece_moves_$_iter__27666_$_iter__27668(cljs.core.chunk_rest(s__27669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27671),null);
}
} else {
var dj = cljs.core.first(s__27669__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__27666_$_iter__27668(cljs.core.rest(s__27669__$2)));
}
} else {
return null;
}
break;
}
});})(s__27667__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
,null,null));
});})(s__27667__$1,di,xs__6292__auto__,temp__5735__auto__,matchie27617))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__27666(cljs.core.rest(s__27667__$1)));
} else {
var G__28002 = cljs.core.rest(s__27667__$1);
s__27667__$1 = G__28002;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie27617)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27681){
var vec__27682 = p__27681;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27682,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27682,(1),null);
return ((function (){var fexpr__27686 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__27686.cljs$core$IFn$_invoke$arity$1 ? fexpr__27686.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__27686.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27688){
var vec__27689 = p__27688;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27689,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27689,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27693 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__27693.cljs$core$IFn$_invoke$arity$1 ? fexpr__27693.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__27693.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27547_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__27547_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27698){
var vec__27699 = p__27698;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__27710){
var vec__27711 = p__27710;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__27717(s__27718){
return (new cljs.core.LazySeq(null,(function (){
var s__27718__$1 = s__27718;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27718__$1);
if(temp__5735__auto__){
var s__27718__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27718__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27718__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27720 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27719 = (0);
while(true){
if((i__27719 < size__4581__auto__)){
var vec__27725 = cljs.core._nth(c__4580__auto__,i__27719);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
cljs.core.chunk_append(b__27720,(function (){var iter__4582__auto__ = ((function (i__27719,vec__27725,row,i,c__4580__auto__,size__4581__auto__,b__27720,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27731(s__27732){
return (new cljs.core.LazySeq(null,((function (i__27719,vec__27725,row,i,c__4580__auto__,size__4581__auto__,b__27720,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2){
return (function (){
var s__27732__$1 = s__27732;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27732__$1);
if(temp__5735__auto____$1){
var s__27732__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27732__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__27732__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__27734 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__27733 = (0);
while(true){
if((i__27733 < size__4581__auto____$1)){
var vec__27735 = cljs.core._nth(c__4580__auto____$1,i__27733);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(1),null);
cljs.core.chunk_append(b__27734,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__28025 = (i__27733 + (1));
i__27733 = G__28025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27734),chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27731(cljs.core.chunk_rest(s__27732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27734),null);
}
} else {
var vec__27741 = cljs.core.first(s__27732__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27731(cljs.core.rest(s__27732__$2)));
}
} else {
return null;
}
break;
}
});})(i__27719,vec__27725,row,i,c__4580__auto__,size__4581__auto__,b__27720,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2))
,null,null));
});})(i__27719,vec__27725,row,i,c__4580__auto__,size__4581__auto__,b__27720,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__28031 = (i__27719 + (1));
i__27719 = G__28031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27720),chess$engine$local_engine$local_apply_move_$_iter__27717(cljs.core.chunk_rest(s__27718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27720),null);
}
} else {
var vec__27751 = cljs.core.first(s__27718__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__27751,row,i,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27754(s__27755){
return (new cljs.core.LazySeq(null,(function (){
var s__27755__$1 = s__27755;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27755__$1);
if(temp__5735__auto____$1){
var s__27755__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27755__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27755__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27757 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27756 = (0);
while(true){
if((i__27756 < size__4581__auto__)){
var vec__27761 = cljs.core._nth(c__4580__auto__,i__27756);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27761,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27761,(1),null);
cljs.core.chunk_append(b__27757,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__28035 = (i__27756 + (1));
i__27756 = G__28035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27757),chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27754(cljs.core.chunk_rest(s__27755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27757),null);
}
} else {
var vec__27767 = cljs.core.first(s__27755__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__27717_$_iter__27754(cljs.core.rest(s__27755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27751,row,i,s__27718__$2,temp__5735__auto__,vec__27711,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__27717(cljs.core.rest(s__27718__$2)));
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
var matchie27771 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie27771)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie27771)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie27771)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie27771)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie27771)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie27771)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27780){
var vec__27781 = p__27780;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27781,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27781,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27781,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27784){
var vec__27785 = p__27784;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27785,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27785,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27785,(2),null);
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine27793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine27793 = (function (meta27794){
this.meta27794 = meta27794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27795,meta27794__$1){
var self__ = this;
var _27795__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine27793(meta27794__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27795){
var self__ = this;
var _27795__$1 = this;
return self__.meta27794;
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__27796 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27796,(0),null);
return cljs.core.not(cljs.core.some((function (p1__27792_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__27792_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__27802 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27794","meta27794",-1424219801,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine27793.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine27793.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine27793");

(chess.engine.local_engine.t_chess$engine$local_engine27793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine27793");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine27793.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine27793 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine27793(meta27794){
return (new chess.engine.local_engine.t_chess$engine$local_engine27793(meta27794));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine27793(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
