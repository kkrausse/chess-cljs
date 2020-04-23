goog.provide('chess.engine.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.engine.core');
goog.require('chess.utils');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__7660(s__7661){
return (new cljs.core.LazySeq(null,(function (){
var s__7661__$1 = s__7661;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7661__$1);
if(temp__5735__auto__){
var s__7661__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7661__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7661__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7663 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7662 = (0);
while(true){
if((i__7662 < size__4581__auto__)){
var vec__7664 = cljs.core._nth(c__4580__auto__,i__7662);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664,(1),null);
cljs.core.chunk_append(b__7663,(function (){var iter__4582__auto__ = ((function (i__7662,vec__7664,row,i,c__4580__auto__,size__4581__auto__,b__7663,s__7661__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7667(s__7668){
return (new cljs.core.LazySeq(null,((function (i__7662,vec__7664,row,i,c__4580__auto__,size__4581__auto__,b__7663,s__7661__$2,temp__5735__auto__){
return (function (){
var s__7668__$1 = s__7668;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7668__$1);
if(temp__5735__auto____$1){
var s__7668__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7668__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__7668__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__7670 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__7669 = (0);
while(true){
if((i__7669 < size__4581__auto____$1)){
var vec__7671 = cljs.core._nth(c__4580__auto____$1,i__7669);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7671,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7671,(1),null);
cljs.core.chunk_append(b__7670,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__7885 = (i__7669 + (1));
i__7669 = G__7885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7670),chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7667(cljs.core.chunk_rest(s__7668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7670),null);
}
} else {
var vec__7674 = cljs.core.first(s__7668__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7667(cljs.core.rest(s__7668__$2)));
}
} else {
return null;
}
break;
}
});})(i__7662,vec__7664,row,i,c__4580__auto__,size__4581__auto__,b__7663,s__7661__$2,temp__5735__auto__))
,null,null));
});})(i__7662,vec__7664,row,i,c__4580__auto__,size__4581__auto__,b__7663,s__7661__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__7886 = (i__7662 + (1));
i__7662 = G__7886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7663),chess$engine$local_engine$piece_seq_$_iter__7660(cljs.core.chunk_rest(s__7661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7663),null);
}
} else {
var vec__7682 = cljs.core.first(s__7661__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7682,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7682,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__7682,row,i,s__7661__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7686(s__7687){
return (new cljs.core.LazySeq(null,(function (){
var s__7687__$1 = s__7687;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7687__$1);
if(temp__5735__auto____$1){
var s__7687__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7687__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7687__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7689 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7688 = (0);
while(true){
if((i__7688 < size__4581__auto__)){
var vec__7694 = cljs.core._nth(c__4580__auto__,i__7688);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7694,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7694,(1),null);
cljs.core.chunk_append(b__7689,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__7887 = (i__7688 + (1));
i__7688 = G__7887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7689),chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7686(cljs.core.chunk_rest(s__7687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7689),null);
}
} else {
var vec__7699 = cljs.core.first(s__7687__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7699,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7699,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__7660_$_iter__7686(cljs.core.rest(s__7687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__7682,row,i,s__7661__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__7660(cljs.core.rest(s__7661__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7710){
var vec__7711 = p__7710;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7711,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7711,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7711,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7714){
var vec__7715 = p__7714;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7715,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7715,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7715,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__7706_SHARP_,p2__7708_SHARP_){
var and__4174__auto__ = p1__7706_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__7708_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__7719(s__7720){
return (new cljs.core.LazySeq(null,(function (){
var s__7720__$1 = s__7720;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7720__$1);
if(temp__5735__auto__){
var s__7720__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7720__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7720__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7722 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7721 = (0);
while(true){
if((i__7721 < size__4581__auto__)){
var vec__7723 = cljs.core._nth(c__4580__auto__,i__7721);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7723,(1),null);
cljs.core.chunk_append(b__7722,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__7888 = (i__7721 + (1));
i__7721 = G__7888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7722),chess$engine$local_engine$find_piece_$_iter__7719(cljs.core.chunk_rest(s__7720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7722),null);
}
} else {
var vec__7726 = cljs.core.first(s__7720__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7726,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__7719(cljs.core.rest(s__7720__$2)));
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
var matchie7729 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie7729)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie7729)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7755 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__7755.cljs$core$IFn$_invoke$arity$1 ? fexpr__7755.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7755.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__7756 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__7756.cljs$core$IFn$_invoke$arity$1 ? fexpr__7756.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__7756.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__7898 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__7899 = (ci + di);
var G__7900 = (cj + dj);
sofar = G__7898;
ci = G__7899;
cj = G__7900;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7758 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__7758.cljs$core$IFn$_invoke$arity$1 ? fexpr__7758.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7758.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__7759 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__7762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7759,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__7765){
var vec__7766 = p__7765;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7766,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7766,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__7736_SHARP_,p2__7737_SHARP_){
var and__4174__auto__ = p1__7736_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__7737_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__7769(s__7770){
return (new cljs.core.LazySeq(null,(function (){
var s__7770__$1 = s__7770;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7770__$1);
if(temp__5735__auto__){
var s__7770__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7770__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7770__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7772 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7771 = (0);
while(true){
if((i__7771 < size__4581__auto__)){
var vec__7773 = cljs.core._nth(c__4580__auto__,i__7771);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(1),null);
cljs.core.chunk_append(b__7772,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__7908 = (i__7771 + (1));
i__7771 = G__7908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7772),chess$engine$local_engine$getall_$_castle_moves_$_iter__7769(cljs.core.chunk_rest(s__7770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7772),null);
}
} else {
var vec__7776 = cljs.core.first(s__7770__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7776,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7776,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__7769(cljs.core.rest(s__7770__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7779){
var vec__7780 = p__7779;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7780,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7780,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie7783 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie7783)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie7783)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7784(s__7785){
return (new cljs.core.LazySeq(null,(function (){
var s__7785__$1 = s__7785;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7785__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7785__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7784_$_iter__7786(s__7787){
return (new cljs.core.LazySeq(null,((function (s__7785__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function (){
var s__7787__$1 = s__7787;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7787__$1);
if(temp__5735__auto____$1){
var s__7787__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7787__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7787__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7789 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7788 = (0);
while(true){
if((i__7788 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7788);
cljs.core.chunk_append(b__7789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__7934 = (i__7788 + (1));
i__7788 = G__7934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7789),chess$engine$local_engine$getall_$_piece_moves_$_iter__7784_$_iter__7786(cljs.core.chunk_rest(s__7787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7789),null);
}
} else {
var dj = cljs.core.first(s__7787__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7784_$_iter__7786(cljs.core.rest(s__7787__$2)));
}
} else {
return null;
}
break;
}
});})(s__7785__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
,null,null));
});})(s__7785__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7784(cljs.core.rest(s__7785__$1)));
} else {
var G__7954 = cljs.core.rest(s__7785__$1);
s__7785__$1 = G__7954;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7790(s__7791){
return (new cljs.core.LazySeq(null,(function (){
var s__7791__$1 = s__7791;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7791__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7791__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7790_$_iter__7792(s__7793){
return (new cljs.core.LazySeq(null,((function (s__7791__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function (){
var s__7793__$1 = s__7793;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7793__$1);
if(temp__5735__auto____$1){
var s__7793__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7793__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7793__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7795 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7794 = (0);
while(true){
if((i__7794 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7794);
cljs.core.chunk_append(b__7795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8007 = (i__7794 + (1));
i__7794 = G__8007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7795),chess$engine$local_engine$getall_$_piece_moves_$_iter__7790_$_iter__7792(cljs.core.chunk_rest(s__7793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7795),null);
}
} else {
var dj = cljs.core.first(s__7793__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7790_$_iter__7792(cljs.core.rest(s__7793__$2)));
}
} else {
return null;
}
break;
}
});})(s__7791__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
,null,null));
});})(s__7791__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7790(cljs.core.rest(s__7791__$1)));
} else {
var G__8017 = cljs.core.rest(s__7791__$1);
s__7791__$1 = G__8017;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie7783)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7796(s__7797){
return (new cljs.core.LazySeq(null,(function (){
var s__7797__$1 = s__7797;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7797__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7797__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7796_$_iter__7798(s__7799){
return (new cljs.core.LazySeq(null,((function (s__7797__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function (){
var s__7799__$1 = s__7799;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7799__$1);
if(temp__5735__auto____$1){
var s__7799__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7799__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7799__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7801 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7800 = (0);
while(true){
if((i__7800 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7800);
cljs.core.chunk_append(b__7801,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8025 = (i__7800 + (1));
i__7800 = G__8025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7801),chess$engine$local_engine$getall_$_piece_moves_$_iter__7796_$_iter__7798(cljs.core.chunk_rest(s__7799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7801),null);
}
} else {
var dj = cljs.core.first(s__7799__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__7796_$_iter__7798(cljs.core.rest(s__7799__$2)));
}
} else {
return null;
}
break;
}
});})(s__7797__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
,null,null));
});})(s__7797__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7796(cljs.core.rest(s__7797__$1)));
} else {
var G__8029 = cljs.core.rest(s__7797__$1);
s__7797__$1 = G__8029;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie7783)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7802(s__7803){
return (new cljs.core.LazySeq(null,(function (){
var s__7803__$1 = s__7803;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7803__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7803__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7802_$_iter__7804(s__7805){
return (new cljs.core.LazySeq(null,((function (s__7803__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function (){
var s__7805__$1 = s__7805;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7805__$1);
if(temp__5735__auto____$1){
var s__7805__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7805__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7805__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7807 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7806 = (0);
while(true){
if((i__7806 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7806);
cljs.core.chunk_append(b__7807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8044 = (i__7806 + (1));
i__7806 = G__8044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7807),chess$engine$local_engine$getall_$_piece_moves_$_iter__7802_$_iter__7804(cljs.core.chunk_rest(s__7805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7807),null);
}
} else {
var dj = cljs.core.first(s__7805__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7802_$_iter__7804(cljs.core.rest(s__7805__$2)));
}
} else {
return null;
}
break;
}
});})(s__7803__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
,null,null));
});})(s__7803__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7802(cljs.core.rest(s__7803__$1)));
} else {
var G__8049 = cljs.core.rest(s__7803__$1);
s__7803__$1 = G__8049;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie7783)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7808(s__7809){
return (new cljs.core.LazySeq(null,(function (){
var s__7809__$1 = s__7809;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7809__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7809__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7808_$_iter__7810(s__7811){
return (new cljs.core.LazySeq(null,((function (s__7809__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783){
return (function (){
var s__7811__$1 = s__7811;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7811__$1);
if(temp__5735__auto____$1){
var s__7811__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7811__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7811__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7813 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7812 = (0);
while(true){
if((i__7812 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7812);
cljs.core.chunk_append(b__7813,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8054 = (i__7812 + (1));
i__7812 = G__8054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7813),chess$engine$local_engine$getall_$_piece_moves_$_iter__7808_$_iter__7810(cljs.core.chunk_rest(s__7811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7813),null);
}
} else {
var dj = cljs.core.first(s__7811__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__7808_$_iter__7810(cljs.core.rest(s__7811__$2)));
}
} else {
return null;
}
break;
}
});})(s__7809__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
,null,null));
});})(s__7809__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7783))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7808(cljs.core.rest(s__7809__$1)));
} else {
var G__8059 = cljs.core.rest(s__7809__$1);
s__7809__$1 = G__8059;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie7783)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7814){
var vec__7815 = p__7814;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7815,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7815,(1),null);
return ((function (){var fexpr__7818 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__7818.cljs$core$IFn$_invoke$arity$1 ? fexpr__7818.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__7818.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7819){
var vec__7820 = p__7819;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7820,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7820,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7824 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__7824.cljs$core$IFn$_invoke$arity$1 ? fexpr__7824.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7824.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7743_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__7743_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7825){
var vec__7826 = p__7825;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7826,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7826,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7826,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__7829){
var vec__7830 = p__7829;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7830,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7830,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7830,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7830,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__7833(s__7834){
return (new cljs.core.LazySeq(null,(function (){
var s__7834__$1 = s__7834;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7834__$1);
if(temp__5735__auto__){
var s__7834__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7834__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7834__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7836 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7835 = (0);
while(true){
if((i__7835 < size__4581__auto__)){
var vec__7837 = cljs.core._nth(c__4580__auto__,i__7835);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7837,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7837,(1),null);
cljs.core.chunk_append(b__7836,(function (){var iter__4582__auto__ = ((function (i__7835,vec__7837,row,i,c__4580__auto__,size__4581__auto__,b__7836,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7840(s__7841){
return (new cljs.core.LazySeq(null,((function (i__7835,vec__7837,row,i,c__4580__auto__,size__4581__auto__,b__7836,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2){
return (function (){
var s__7841__$1 = s__7841;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7841__$1);
if(temp__5735__auto____$1){
var s__7841__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7841__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__7841__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__7843 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__7842 = (0);
while(true){
if((i__7842 < size__4581__auto____$1)){
var vec__7844 = cljs.core._nth(c__4580__auto____$1,i__7842);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7844,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7844,(1),null);
cljs.core.chunk_append(b__7843,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8083 = (i__7842 + (1));
i__7842 = G__8083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7843),chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7840(cljs.core.chunk_rest(s__7841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7843),null);
}
} else {
var vec__7847 = cljs.core.first(s__7841__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7847,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7847,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7840(cljs.core.rest(s__7841__$2)));
}
} else {
return null;
}
break;
}
});})(i__7835,vec__7837,row,i,c__4580__auto__,size__4581__auto__,b__7836,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2))
,null,null));
});})(i__7835,vec__7837,row,i,c__4580__auto__,size__4581__auto__,b__7836,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__8088 = (i__7835 + (1));
i__7835 = G__8088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7836),chess$engine$local_engine$local_apply_move_$_iter__7833(cljs.core.chunk_rest(s__7834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7836),null);
}
} else {
var vec__7850 = cljs.core.first(s__7834__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7850,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7850,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__7850,row,i,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7853(s__7854){
return (new cljs.core.LazySeq(null,(function (){
var s__7854__$1 = s__7854;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7854__$1);
if(temp__5735__auto____$1){
var s__7854__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7854__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7854__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7856 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7855 = (0);
while(true){
if((i__7855 < size__4581__auto__)){
var vec__7857 = cljs.core._nth(c__4580__auto__,i__7855);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7857,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7857,(1),null);
cljs.core.chunk_append(b__7856,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8092 = (i__7855 + (1));
i__7855 = G__8092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7856),chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7853(cljs.core.chunk_rest(s__7854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7856),null);
}
} else {
var vec__7860 = cljs.core.first(s__7854__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7860,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7860,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__7833_$_iter__7853(cljs.core.rest(s__7854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__7850,row,i,s__7834__$2,temp__5735__auto__,vec__7830,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__7833(cljs.core.rest(s__7834__$2)));
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
var matchie7863 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie7863)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie7863)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie7863)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie7863)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie7863)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie7863)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7864){
var vec__7865 = p__7864;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7865,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7865,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7865,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7868){
var vec__7869 = p__7868;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7869,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7869,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7869,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__7872 = applied_board;
var G__7873 = chess.engine.core.other_color(color);
var G__7874 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__7872,G__7873,G__7874) : chess.engine.local_engine.local_best_move.call(null,G__7872,G__7873,G__7874));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine7876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine7876 = (function (meta7877){
this.meta7877 = meta7877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7878,meta7877__$1){
var self__ = this;
var _7878__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine7876(meta7877__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7878){
var self__ = this;
var _7878__$1 = this;
return self__.meta7877;
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__7879 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7879,(0),null);
return cljs.core.not(cljs.core.some((function (p1__7875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__7875_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__7882 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta7877","meta7877",1688396133,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine7876.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine7876.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine7876");

(chess.engine.local_engine.t_chess$engine$local_engine7876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine7876");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine7876.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine7876 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine7876(meta7877){
return (new chess.engine.local_engine.t_chess$engine$local_engine7876(meta7877));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine7876(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
