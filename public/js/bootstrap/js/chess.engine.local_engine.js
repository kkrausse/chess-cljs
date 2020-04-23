goog.provide('chess.engine.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.engine.core');
goog.require('chess.utils');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__8711(s__8712){
return (new cljs.core.LazySeq(null,(function (){
var s__8712__$1 = s__8712;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8712__$1);
if(temp__5735__auto__){
var s__8712__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8712__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8712__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8714 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8713 = (0);
while(true){
if((i__8713 < size__4581__auto__)){
var vec__8715 = cljs.core._nth(c__4580__auto__,i__8713);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(1),null);
cljs.core.chunk_append(b__8714,(function (){var iter__4582__auto__ = ((function (i__8713,vec__8715,row,i,c__4580__auto__,size__4581__auto__,b__8714,s__8712__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8718(s__8719){
return (new cljs.core.LazySeq(null,((function (i__8713,vec__8715,row,i,c__4580__auto__,size__4581__auto__,b__8714,s__8712__$2,temp__5735__auto__){
return (function (){
var s__8719__$1 = s__8719;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8719__$1);
if(temp__5735__auto____$1){
var s__8719__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8719__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__8719__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__8721 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__8720 = (0);
while(true){
if((i__8720 < size__4581__auto____$1)){
var vec__8722 = cljs.core._nth(c__4580__auto____$1,i__8720);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8722,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8722,(1),null);
cljs.core.chunk_append(b__8721,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__8911 = (i__8720 + (1));
i__8720 = G__8911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8721),chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8718(cljs.core.chunk_rest(s__8719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8721),null);
}
} else {
var vec__8725 = cljs.core.first(s__8719__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8725,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8725,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8718(cljs.core.rest(s__8719__$2)));
}
} else {
return null;
}
break;
}
});})(i__8713,vec__8715,row,i,c__4580__auto__,size__4581__auto__,b__8714,s__8712__$2,temp__5735__auto__))
,null,null));
});})(i__8713,vec__8715,row,i,c__4580__auto__,size__4581__auto__,b__8714,s__8712__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__8912 = (i__8713 + (1));
i__8713 = G__8912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8714),chess$engine$local_engine$piece_seq_$_iter__8711(cljs.core.chunk_rest(s__8712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8714),null);
}
} else {
var vec__8729 = cljs.core.first(s__8712__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__8729,row,i,s__8712__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8732(s__8733){
return (new cljs.core.LazySeq(null,(function (){
var s__8733__$1 = s__8733;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8733__$1);
if(temp__5735__auto____$1){
var s__8733__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8733__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8733__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8735 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8734 = (0);
while(true){
if((i__8734 < size__4581__auto__)){
var vec__8740 = cljs.core._nth(c__4580__auto__,i__8734);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8740,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8740,(1),null);
cljs.core.chunk_append(b__8735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__8913 = (i__8734 + (1));
i__8734 = G__8913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8735),chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8732(cljs.core.chunk_rest(s__8733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8735),null);
}
} else {
var vec__8743 = cljs.core.first(s__8733__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8711_$_iter__8732(cljs.core.rest(s__8733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__8729,row,i,s__8712__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__8711(cljs.core.rest(s__8712__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8750){
var vec__8751 = p__8750;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8751,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8751,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8751,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8754){
var vec__8755 = p__8754;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8755,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8755,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8755,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8746_SHARP_,p2__8747_SHARP_){
var and__4174__auto__ = p1__8746_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__8747_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__8758(s__8759){
return (new cljs.core.LazySeq(null,(function (){
var s__8759__$1 = s__8759;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8759__$1);
if(temp__5735__auto__){
var s__8759__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8759__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8759__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8761 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8760 = (0);
while(true){
if((i__8760 < size__4581__auto__)){
var vec__8768 = cljs.core._nth(c__4580__auto__,i__8760);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(1),null);
cljs.core.chunk_append(b__8761,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__8914 = (i__8760 + (1));
i__8760 = G__8914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8761),chess$engine$local_engine$find_piece_$_iter__8758(cljs.core.chunk_rest(s__8759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8761),null);
}
} else {
var vec__8771 = cljs.core.first(s__8759__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__8758(cljs.core.rest(s__8759__$2)));
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
var matchie8774 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie8774)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie8774)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__8781 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__8781.cljs$core$IFn$_invoke$arity$1 ? fexpr__8781.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__8781.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__8782 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__8782.cljs$core$IFn$_invoke$arity$1 ? fexpr__8782.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__8782.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__8915 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__8916 = (ci + di);
var G__8917 = (cj + dj);
sofar = G__8915;
ci = G__8916;
cj = G__8917;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__8784 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__8784.cljs$core$IFn$_invoke$arity$1 ? fexpr__8784.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__8784.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__8785 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__8788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8785,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8788,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8788,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8791){
var vec__8792 = p__8791;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8792,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8792,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8775_SHARP_,p2__8776_SHARP_){
var and__4174__auto__ = p1__8775_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__8776_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__8795(s__8796){
return (new cljs.core.LazySeq(null,(function (){
var s__8796__$1 = s__8796;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8796__$1);
if(temp__5735__auto__){
var s__8796__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8796__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8796__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8798 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8797 = (0);
while(true){
if((i__8797 < size__4581__auto__)){
var vec__8799 = cljs.core._nth(c__4580__auto__,i__8797);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8799,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8799,(1),null);
cljs.core.chunk_append(b__8798,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__8918 = (i__8797 + (1));
i__8797 = G__8918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8798),chess$engine$local_engine$getall_$_castle_moves_$_iter__8795(cljs.core.chunk_rest(s__8796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8798),null);
}
} else {
var vec__8802 = cljs.core.first(s__8796__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8802,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8802,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__8795(cljs.core.rest(s__8796__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8805){
var vec__8806 = p__8805;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8806,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8806,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie8809 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie8809)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie8809)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8810(s__8811){
return (new cljs.core.LazySeq(null,(function (){
var s__8811__$1 = s__8811;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8811__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__8811__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8810_$_iter__8812(s__8813){
return (new cljs.core.LazySeq(null,((function (s__8811__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function (){
var s__8813__$1 = s__8813;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8813__$1);
if(temp__5735__auto____$1){
var s__8813__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8813__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8813__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8815 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8814 = (0);
while(true){
if((i__8814 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__8814);
cljs.core.chunk_append(b__8815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8919 = (i__8814 + (1));
i__8814 = G__8919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8815),chess$engine$local_engine$getall_$_piece_moves_$_iter__8810_$_iter__8812(cljs.core.chunk_rest(s__8813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8815),null);
}
} else {
var dj = cljs.core.first(s__8813__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__8810_$_iter__8812(cljs.core.rest(s__8813__$2)));
}
} else {
return null;
}
break;
}
});})(s__8811__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
,null,null));
});})(s__8811__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8810(cljs.core.rest(s__8811__$1)));
} else {
var G__8920 = cljs.core.rest(s__8811__$1);
s__8811__$1 = G__8920;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8816(s__8817){
return (new cljs.core.LazySeq(null,(function (){
var s__8817__$1 = s__8817;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8817__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__8817__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8816_$_iter__8818(s__8819){
return (new cljs.core.LazySeq(null,((function (s__8817__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function (){
var s__8819__$1 = s__8819;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8819__$1);
if(temp__5735__auto____$1){
var s__8819__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8819__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8819__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8821 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8820 = (0);
while(true){
if((i__8820 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__8820);
cljs.core.chunk_append(b__8821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8921 = (i__8820 + (1));
i__8820 = G__8921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8821),chess$engine$local_engine$getall_$_piece_moves_$_iter__8816_$_iter__8818(cljs.core.chunk_rest(s__8819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8821),null);
}
} else {
var dj = cljs.core.first(s__8819__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__8816_$_iter__8818(cljs.core.rest(s__8819__$2)));
}
} else {
return null;
}
break;
}
});})(s__8817__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
,null,null));
});})(s__8817__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8816(cljs.core.rest(s__8817__$1)));
} else {
var G__8922 = cljs.core.rest(s__8817__$1);
s__8817__$1 = G__8922;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie8809)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8822(s__8823){
return (new cljs.core.LazySeq(null,(function (){
var s__8823__$1 = s__8823;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8823__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__8823__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8822_$_iter__8824(s__8825){
return (new cljs.core.LazySeq(null,((function (s__8823__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function (){
var s__8825__$1 = s__8825;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8825__$1);
if(temp__5735__auto____$1){
var s__8825__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8825__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8825__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8827 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8826 = (0);
while(true){
if((i__8826 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__8826);
cljs.core.chunk_append(b__8827,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8923 = (i__8826 + (1));
i__8826 = G__8923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8827),chess$engine$local_engine$getall_$_piece_moves_$_iter__8822_$_iter__8824(cljs.core.chunk_rest(s__8825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8827),null);
}
} else {
var dj = cljs.core.first(s__8825__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__8822_$_iter__8824(cljs.core.rest(s__8825__$2)));
}
} else {
return null;
}
break;
}
});})(s__8823__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
,null,null));
});})(s__8823__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8822(cljs.core.rest(s__8823__$1)));
} else {
var G__8924 = cljs.core.rest(s__8823__$1);
s__8823__$1 = G__8924;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie8809)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8828(s__8829){
return (new cljs.core.LazySeq(null,(function (){
var s__8829__$1 = s__8829;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8829__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__8829__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8828_$_iter__8830(s__8831){
return (new cljs.core.LazySeq(null,((function (s__8829__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function (){
var s__8831__$1 = s__8831;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8831__$1);
if(temp__5735__auto____$1){
var s__8831__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8831__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8831__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8833 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8832 = (0);
while(true){
if((i__8832 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__8832);
cljs.core.chunk_append(b__8833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8925 = (i__8832 + (1));
i__8832 = G__8925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),chess$engine$local_engine$getall_$_piece_moves_$_iter__8828_$_iter__8830(cljs.core.chunk_rest(s__8831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),null);
}
} else {
var dj = cljs.core.first(s__8831__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__8828_$_iter__8830(cljs.core.rest(s__8831__$2)));
}
} else {
return null;
}
break;
}
});})(s__8829__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
,null,null));
});})(s__8829__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8828(cljs.core.rest(s__8829__$1)));
} else {
var G__8926 = cljs.core.rest(s__8829__$1);
s__8829__$1 = G__8926;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie8809)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8834(s__8835){
return (new cljs.core.LazySeq(null,(function (){
var s__8835__$1 = s__8835;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8835__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__8835__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8834_$_iter__8836(s__8837){
return (new cljs.core.LazySeq(null,((function (s__8835__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809){
return (function (){
var s__8837__$1 = s__8837;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8837__$1);
if(temp__5735__auto____$1){
var s__8837__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8837__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8837__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8839 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8838 = (0);
while(true){
if((i__8838 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__8838);
cljs.core.chunk_append(b__8839,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8927 = (i__8838 + (1));
i__8838 = G__8927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8839),chess$engine$local_engine$getall_$_piece_moves_$_iter__8834_$_iter__8836(cljs.core.chunk_rest(s__8837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8839),null);
}
} else {
var dj = cljs.core.first(s__8837__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__8834_$_iter__8836(cljs.core.rest(s__8837__$2)));
}
} else {
return null;
}
break;
}
});})(s__8835__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
,null,null));
});})(s__8835__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8809))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8834(cljs.core.rest(s__8835__$1)));
} else {
var G__8928 = cljs.core.rest(s__8835__$1);
s__8835__$1 = G__8928;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie8809)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8840){
var vec__8841 = p__8840;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(1),null);
return ((function (){var fexpr__8844 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__8844.cljs$core$IFn$_invoke$arity$1 ? fexpr__8844.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__8844.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8845){
var vec__8846 = p__8845;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8846,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8846,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__8850 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__8850.cljs$core$IFn$_invoke$arity$1 ? fexpr__8850.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__8850.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8777_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__8777_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8851){
var vec__8852 = p__8851;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8852,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8852,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8852,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__8855){
var vec__8856 = p__8855;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__8859(s__8860){
return (new cljs.core.LazySeq(null,(function (){
var s__8860__$1 = s__8860;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8860__$1);
if(temp__5735__auto__){
var s__8860__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8860__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8860__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8862 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8861 = (0);
while(true){
if((i__8861 < size__4581__auto__)){
var vec__8863 = cljs.core._nth(c__4580__auto__,i__8861);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8863,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8863,(1),null);
cljs.core.chunk_append(b__8862,(function (){var iter__4582__auto__ = ((function (i__8861,vec__8863,row,i,c__4580__auto__,size__4581__auto__,b__8862,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8866(s__8867){
return (new cljs.core.LazySeq(null,((function (i__8861,vec__8863,row,i,c__4580__auto__,size__4581__auto__,b__8862,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2){
return (function (){
var s__8867__$1 = s__8867;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8867__$1);
if(temp__5735__auto____$1){
var s__8867__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8867__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__8867__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__8869 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__8868 = (0);
while(true){
if((i__8868 < size__4581__auto____$1)){
var vec__8870 = cljs.core._nth(c__4580__auto____$1,i__8868);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8870,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8870,(1),null);
cljs.core.chunk_append(b__8869,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8929 = (i__8868 + (1));
i__8868 = G__8929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8869),chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8866(cljs.core.chunk_rest(s__8867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8869),null);
}
} else {
var vec__8873 = cljs.core.first(s__8867__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8866(cljs.core.rest(s__8867__$2)));
}
} else {
return null;
}
break;
}
});})(i__8861,vec__8863,row,i,c__4580__auto__,size__4581__auto__,b__8862,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2))
,null,null));
});})(i__8861,vec__8863,row,i,c__4580__auto__,size__4581__auto__,b__8862,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__8930 = (i__8861 + (1));
i__8861 = G__8930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8862),chess$engine$local_engine$local_apply_move_$_iter__8859(cljs.core.chunk_rest(s__8860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8862),null);
}
} else {
var vec__8876 = cljs.core.first(s__8860__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__8876,row,i,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8879(s__8880){
return (new cljs.core.LazySeq(null,(function (){
var s__8880__$1 = s__8880;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8880__$1);
if(temp__5735__auto____$1){
var s__8880__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8880__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__8880__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__8882 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__8881 = (0);
while(true){
if((i__8881 < size__4581__auto__)){
var vec__8883 = cljs.core._nth(c__4580__auto__,i__8881);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8883,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8883,(1),null);
cljs.core.chunk_append(b__8882,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8931 = (i__8881 + (1));
i__8881 = G__8931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8882),chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8879(cljs.core.chunk_rest(s__8880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8882),null);
}
} else {
var vec__8886 = cljs.core.first(s__8880__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8886,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8886,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__8859_$_iter__8879(cljs.core.rest(s__8880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__8876,row,i,s__8860__$2,temp__5735__auto__,vec__8856,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__8859(cljs.core.rest(s__8860__$2)));
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
var matchie8889 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie8889)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie8889)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie8889)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie8889)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie8889)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie8889)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8890){
var vec__8891 = p__8890;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8894){
var vec__8895 = p__8894;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8895,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__8898 = applied_board;
var G__8899 = chess.engine.core.other_color(color);
var G__8900 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__8898,G__8899,G__8900) : chess.engine.local_engine.local_best_move.call(null,G__8898,G__8899,G__8900));
})()));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine8902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine8902 = (function (meta8903){
this.meta8903 = meta8903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8904,meta8903__$1){
var self__ = this;
var _8904__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine8902(meta8903__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8904){
var self__ = this;
var _8904__$1 = this;
return self__.meta8903;
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__8905 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8905,(0),null);
return cljs.core.not(cljs.core.some((function (p1__8901_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__8901_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__8908 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8903","meta8903",576681152,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine8902.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine8902.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine8902");

(chess.engine.local_engine.t_chess$engine$local_engine8902.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine8902");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine8902.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine8902 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine8902(meta8903){
return (new chess.engine.local_engine.t_chess$engine$local_engine8902(meta8903));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine8902(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
