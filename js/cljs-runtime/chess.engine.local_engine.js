goog.provide('chess.engine.local_engine');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__8786(s__8789){
return (new cljs.core.LazySeq(null,(function (){
var s__8789__$1 = s__8789;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8789__$1);
if(temp__5735__auto__){
var s__8789__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8789__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8789__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8792 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8791 = (0);
while(true){
if((i__8791 < size__4528__auto__)){
var vec__8793 = cljs.core._nth(c__4527__auto__,i__8791);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793,(1),null);
cljs.core.chunk_append(b__8792,(function (){var iter__4529__auto__ = ((function (i__8791,vec__8793,row,i,c__4527__auto__,size__4528__auto__,b__8792,s__8789__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8796(s__8797){
return (new cljs.core.LazySeq(null,((function (i__8791,vec__8793,row,i,c__4527__auto__,size__4528__auto__,b__8792,s__8789__$2,temp__5735__auto__){
return (function (){
var s__8797__$1 = s__8797;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8797__$1);
if(temp__5735__auto____$1){
var s__8797__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8797__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__8797__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__8799 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__8798 = (0);
while(true){
if((i__8798 < size__4528__auto____$1)){
var vec__8800 = cljs.core._nth(c__4527__auto____$1,i__8798);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8800,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8800,(1),null);
cljs.core.chunk_append(b__8799,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__9125 = (i__8798 + (1));
i__8798 = G__9125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8799),chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8796(cljs.core.chunk_rest(s__8797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8799),null);
}
} else {
var vec__8803 = cljs.core.first(s__8797__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8803,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8803,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8796(cljs.core.rest(s__8797__$2)));
}
} else {
return null;
}
break;
}
});})(i__8791,vec__8793,row,i,c__4527__auto__,size__4528__auto__,b__8792,s__8789__$2,temp__5735__auto__))
,null,null));
});})(i__8791,vec__8793,row,i,c__4527__auto__,size__4528__auto__,b__8792,s__8789__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__9126 = (i__8791 + (1));
i__8791 = G__9126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8792),chess$engine$local_engine$piece_seq_$_iter__8786(cljs.core.chunk_rest(s__8789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8792),null);
}
} else {
var vec__8806 = cljs.core.first(s__8789__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8806,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8806,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__8806,row,i,s__8789__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8809(s__8810){
return (new cljs.core.LazySeq(null,(function (){
var s__8810__$1 = s__8810;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8810__$1);
if(temp__5735__auto____$1){
var s__8810__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8810__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8810__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8812 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8811 = (0);
while(true){
if((i__8811 < size__4528__auto__)){
var vec__8814 = cljs.core._nth(c__4527__auto__,i__8811);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8814,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8814,(1),null);
cljs.core.chunk_append(b__8812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__9129 = (i__8811 + (1));
i__8811 = G__9129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8812),chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8809(cljs.core.chunk_rest(s__8810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8812),null);
}
} else {
var vec__8817 = cljs.core.first(s__8810__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8817,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8817,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8786_$_iter__8809(cljs.core.rest(s__8810__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__8806,row,i,s__8789__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__8786(cljs.core.rest(s__8789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], 0));
});
chess.engine.local_engine.find_piece = (function chess$engine$local_engine$find_piece(board,props){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8822){
var vec__8823 = p__8822;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8826){
var vec__8827 = p__8826;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8820_SHARP_,p2__8821_SHARP_){
var and__4115__auto__ = p1__8820_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__8821_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$find_piece_$_iter__8830(s__8831){
return (new cljs.core.LazySeq(null,(function (){
var s__8831__$1 = s__8831;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8831__$1);
if(temp__5735__auto__){
var s__8831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8831__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8831__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8833 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8832 = (0);
while(true){
if((i__8832 < size__4528__auto__)){
var vec__8835 = cljs.core._nth(c__4527__auto__,i__8832);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(1),null);
cljs.core.chunk_append(b__8833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__9144 = (i__8832 + (1));
i__8832 = G__9144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),chess$engine$local_engine$find_piece_$_iter__8830(cljs.core.chunk_rest(s__8831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),null);
}
} else {
var vec__8838 = cljs.core.first(s__8831__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__8830(cljs.core.rest(s__8831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(props);
})());
}),chess.engine.local_engine.piece_seq(board)));
});
chess.engine.local_engine.piece_at = (function chess$engine$local_engine$piece_at(board,i,j){

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,i),j);
});
chess.engine.local_engine.color_dir = (function chess$engine$local_engine$color_dir(sq){
var matchie8848 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie8848)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie8848)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__8908 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__8908.cljs$core$IFn$_invoke$arity$1 ? fexpr__8908.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__8908.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__8909 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__8909.cljs$core$IFn$_invoke$arity$1 ? fexpr__8909.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__8909.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__9145 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__9146 = (ci + di);
var G__9147 = (cj + dj);
sofar = G__9145;
ci = G__9146;
cj = G__9147;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__8925 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__8925.cljs$core$IFn$_invoke$arity$1 ? fexpr__8925.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__8925.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__8930 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__8933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8930,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,(1),null);
var rooks = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
if(cljs.core.truth_((function (){var or__4126__auto__ = (ki == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ki,kj));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8941){
var vec__8942 = p__8941;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8942,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8942,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8859_SHARP_,p2__8860_SHARP_){
var and__4115__auto__ = p1__8859_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__8860_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__8947(s__8948){
return (new cljs.core.LazySeq(null,(function (){
var s__8948__$1 = s__8948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8948__$1);
if(temp__5735__auto__){
var s__8948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8948__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8948__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8950 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8949 = (0);
while(true){
if((i__8949 < size__4528__auto__)){
var vec__8958 = cljs.core._nth(c__4527__auto__,i__8949);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8958,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8958,(1),null);
cljs.core.chunk_append(b__8950,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__9148 = (i__8949 + (1));
i__8949 = G__9148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8950),chess$engine$local_engine$getall_$_castle_moves_$_iter__8947(cljs.core.chunk_rest(s__8948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8950),null);
}
} else {
var vec__8965 = cljs.core.first(s__8948__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8965,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8965,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__8947(cljs.core.rest(s__8948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ki,ki,ki,ki,ki], null),(((rj < kj))?cljs.core.range.cljs$core$IFn$_invoke$arity$2((rj + (1)),kj):cljs.core.range.cljs$core$IFn$_invoke$arity$2((kj + (1)),rj))], 0)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8979){
var vec__8982 = p__8979;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8982,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8982,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie8987 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie8987)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie8987)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8993(s__8994){
return (new cljs.core.LazySeq(null,(function (){
var s__8994__$1 = s__8994;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8994__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__8994__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__8993_$_iter__8995(s__8996){
return (new cljs.core.LazySeq(null,((function (s__8994__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function (){
var s__8996__$1 = s__8996;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8996__$1);
if(temp__5735__auto____$1){
var s__8996__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8996__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8996__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8998 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8997 = (0);
while(true){
if((i__8997 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__8997);
cljs.core.chunk_append(b__8998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9149 = (i__8997 + (1));
i__8997 = G__9149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8998),chess$engine$local_engine$getall_$_piece_moves_$_iter__8993_$_iter__8995(cljs.core.chunk_rest(s__8996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8998),null);
}
} else {
var dj = cljs.core.first(s__8996__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__8993_$_iter__8995(cljs.core.rest(s__8996__$2)));
}
} else {
return null;
}
break;
}
});})(s__8994__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
,null,null));
});})(s__8994__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__8993(cljs.core.rest(s__8994__$1)));
} else {
var G__9150 = cljs.core.rest(s__8994__$1);
s__8994__$1 = G__9150;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
})(),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9015(s__9016){
return (new cljs.core.LazySeq(null,(function (){
var s__9016__$1 = s__9016;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9016__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9016__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9015_$_iter__9017(s__9018){
return (new cljs.core.LazySeq(null,((function (s__9016__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function (){
var s__9018__$1 = s__9018;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9018__$1);
if(temp__5735__auto____$1){
var s__9018__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9018__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9018__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9020 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9019 = (0);
while(true){
if((i__9019 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9019);
cljs.core.chunk_append(b__9020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9151 = (i__9019 + (1));
i__9019 = G__9151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9020),chess$engine$local_engine$getall_$_piece_moves_$_iter__9015_$_iter__9017(cljs.core.chunk_rest(s__9018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9020),null);
}
} else {
var dj = cljs.core.first(s__9018__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__9015_$_iter__9017(cljs.core.rest(s__9018__$2)));
}
} else {
return null;
}
break;
}
});})(s__9016__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
,null,null));
});})(s__9016__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9015(cljs.core.rest(s__9016__$1)));
} else {
var G__9152 = cljs.core.rest(s__9016__$1);
s__9016__$1 = G__9152;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie8987)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9036(s__9037){
return (new cljs.core.LazySeq(null,(function (){
var s__9037__$1 = s__9037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9037__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9037__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9036_$_iter__9038(s__9039){
return (new cljs.core.LazySeq(null,((function (s__9037__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function (){
var s__9039__$1 = s__9039;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9039__$1);
if(temp__5735__auto____$1){
var s__9039__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9039__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9039__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9041 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9040 = (0);
while(true){
if((i__9040 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9040);
cljs.core.chunk_append(b__9041,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__9153 = (i__9040 + (1));
i__9040 = G__9153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9041),chess$engine$local_engine$getall_$_piece_moves_$_iter__9036_$_iter__9038(cljs.core.chunk_rest(s__9039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9041),null);
}
} else {
var dj = cljs.core.first(s__9039__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__9036_$_iter__9038(cljs.core.rest(s__9039__$2)));
}
} else {
return null;
}
break;
}
});})(s__9037__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
,null,null));
});})(s__9037__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9036(cljs.core.rest(s__9037__$1)));
} else {
var G__9154 = cljs.core.rest(s__9037__$1);
s__9037__$1 = G__9154;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie8987)){
var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9042(s__9043){
return (new cljs.core.LazySeq(null,(function (){
var s__9043__$1 = s__9043;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9043__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9043__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9042_$_iter__9044(s__9045){
return (new cljs.core.LazySeq(null,((function (s__9043__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function (){
var s__9045__$1 = s__9045;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9045__$1);
if(temp__5735__auto____$1){
var s__9045__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9045__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9045__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9047 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9046 = (0);
while(true){
if((i__9046 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9046);
cljs.core.chunk_append(b__9047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9155 = (i__9046 + (1));
i__9046 = G__9155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9047),chess$engine$local_engine$getall_$_piece_moves_$_iter__9042_$_iter__9044(cljs.core.chunk_rest(s__9045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9047),null);
}
} else {
var dj = cljs.core.first(s__9045__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__9042_$_iter__9044(cljs.core.rest(s__9045__$2)));
}
} else {
return null;
}
break;
}
});})(s__9043__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
,null,null));
});})(s__9043__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9042(cljs.core.rest(s__9043__$1)));
} else {
var G__9156 = cljs.core.rest(s__9043__$1);
s__9043__$1 = G__9156;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie8987)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9048(s__9049){
return (new cljs.core.LazySeq(null,(function (){
var s__9049__$1 = s__9049;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9049__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9049__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9048_$_iter__9050(s__9051){
return (new cljs.core.LazySeq(null,((function (s__9049__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987){
return (function (){
var s__9051__$1 = s__9051;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9051__$1);
if(temp__5735__auto____$1){
var s__9051__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9051__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9051__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9053 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9052 = (0);
while(true){
if((i__9052 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9052);
cljs.core.chunk_append(b__9053,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__9157 = (i__9052 + (1));
i__9052 = G__9157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9053),chess$engine$local_engine$getall_$_piece_moves_$_iter__9048_$_iter__9050(cljs.core.chunk_rest(s__9051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9053),null);
}
} else {
var dj = cljs.core.first(s__9051__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__9048_$_iter__9050(cljs.core.rest(s__9051__$2)));
}
} else {
return null;
}
break;
}
});})(s__9049__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
,null,null));
});})(s__9049__$1,di,xs__6292__auto__,temp__5735__auto__,matchie8987))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9048(cljs.core.rest(s__9049__$1)));
} else {
var G__9158 = cljs.core.rest(s__9049__$1);
s__9049__$1 = G__9158;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie8987)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9054){
var vec__9055 = p__9054;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9055,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9055,(1),null);
return ((function (){var fexpr__9058 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__9058.cljs$core$IFn$_invoke$arity$1 ? fexpr__9058.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__9058.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9059){
var vec__9060 = p__9059;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9060,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9060,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__9064 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__9064.cljs$core$IFn$_invoke$arity$1 ? fexpr__9064.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__9064.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8875_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__8875_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9065){
var vec__9066 = p__9065;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9066,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9066,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9066,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__9069){
var vec__9070 = p__9069;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(3),null);
var iter__4529__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__9073(s__9074){
return (new cljs.core.LazySeq(null,(function (){
var s__9074__$1 = s__9074;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9074__$1);
if(temp__5735__auto__){
var s__9074__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9074__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9074__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9076 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9075 = (0);
while(true){
if((i__9075 < size__4528__auto__)){
var vec__9077 = cljs.core._nth(c__4527__auto__,i__9075);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(1),null);
cljs.core.chunk_append(b__9076,(function (){var iter__4529__auto__ = ((function (i__9075,vec__9077,row,i,c__4527__auto__,size__4528__auto__,b__9076,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9080(s__9081){
return (new cljs.core.LazySeq(null,((function (i__9075,vec__9077,row,i,c__4527__auto__,size__4528__auto__,b__9076,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2){
return (function (){
var s__9081__$1 = s__9081;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9081__$1);
if(temp__5735__auto____$1){
var s__9081__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9081__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__9081__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__9083 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__9082 = (0);
while(true){
if((i__9082 < size__4528__auto____$1)){
var vec__9084 = cljs.core._nth(c__4527__auto____$1,i__9082);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084,(1),null);
cljs.core.chunk_append(b__9083,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__9159 = (i__9082 + (1));
i__9082 = G__9159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9083),chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9080(cljs.core.chunk_rest(s__9081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9083),null);
}
} else {
var vec__9087 = cljs.core.first(s__9081__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9087,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9087,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9080(cljs.core.rest(s__9081__$2)));
}
} else {
return null;
}
break;
}
});})(i__9075,vec__9077,row,i,c__4527__auto__,size__4528__auto__,b__9076,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2))
,null,null));
});})(i__9075,vec__9077,row,i,c__4527__auto__,size__4528__auto__,b__9076,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__9160 = (i__9075 + (1));
i__9075 = G__9160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9076),chess$engine$local_engine$local_apply_move_$_iter__9073(cljs.core.chunk_rest(s__9074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9076),null);
}
} else {
var vec__9090 = cljs.core.first(s__9074__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9090,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9090,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__9090,row,i,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9093(s__9094){
return (new cljs.core.LazySeq(null,(function (){
var s__9094__$1 = s__9094;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9094__$1);
if(temp__5735__auto____$1){
var s__9094__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9094__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9094__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9096 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9095 = (0);
while(true){
if((i__9095 < size__4528__auto__)){
var vec__9097 = cljs.core._nth(c__4527__auto__,i__9095);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,(1),null);
cljs.core.chunk_append(b__9096,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__9161 = (i__9095 + (1));
i__9095 = G__9161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9096),chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9093(cljs.core.chunk_rest(s__9094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9096),null);
}
} else {
var vec__9100 = cljs.core.first(s__9094__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9100,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9100,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__9073_$_iter__9093(cljs.core.rest(s__9094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__9090,row,i,s__9074__$2,temp__5735__auto__,vec__9070,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__9073(cljs.core.rest(s__9074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
});
chess.engine.local_engine.piece_value = (function chess$engine$local_engine$piece_value(p){
var matchie9103 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie9103)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie9103)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie9103)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie9103)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie9103)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie9103)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9104){
var vec__9105 = p__9104;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9105,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9105,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9105,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9108){
var vec__9109 = p__9108;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9109,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9109,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9109,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__9112 = applied_board;
var G__9113 = chess.engine.core.other_color(color);
var G__9114 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__9112,G__9113,G__9114) : chess.engine.local_engine.local_best_move.call(null,G__9112,G__9113,G__9114));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine9116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine9116 = (function (meta9117){
this.meta9117 = meta9117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9118,meta9117__$1){
var self__ = this;
var _9118__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine9116(meta9117__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9118){
var self__ = this;
var _9118__$1 = this;
return self__.meta9117;
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__9119 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9119,(0),null);
return cljs.core.not(cljs.core.some((function (p1__9115_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__9115_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__9122 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9117","meta9117",-996165450,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine9116.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine9116.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine9116");

(chess.engine.local_engine.t_chess$engine$local_engine9116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.local-engine/t_chess$engine$local_engine9116");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine9116.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine9116 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine9116(meta9117){
return (new chess.engine.local_engine.t_chess$engine$local_engine9116(meta9117));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine9116(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
