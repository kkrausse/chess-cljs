goog.provide('chess.engine.local_engine');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__10116(s__10117){
return (new cljs.core.LazySeq(null,(function (){
var s__10117__$1 = s__10117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10117__$1);
if(temp__5735__auto__){
var s__10117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10117__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10117__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10119 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10118 = (0);
while(true){
if((i__10118 < size__4528__auto__)){
var vec__10120 = cljs.core._nth(c__4527__auto__,i__10118);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,(1),null);
cljs.core.chunk_append(b__10119,(function (){var iter__4529__auto__ = ((function (i__10118,vec__10120,row,i,c__4527__auto__,size__4528__auto__,b__10119,s__10117__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10123(s__10124){
return (new cljs.core.LazySeq(null,((function (i__10118,vec__10120,row,i,c__4527__auto__,size__4528__auto__,b__10119,s__10117__$2,temp__5735__auto__){
return (function (){
var s__10124__$1 = s__10124;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10124__$1);
if(temp__5735__auto____$1){
var s__10124__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10124__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__10124__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__10126 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__10125 = (0);
while(true){
if((i__10125 < size__4528__auto____$1)){
var vec__10127 = cljs.core._nth(c__4527__auto____$1,i__10125);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10127,(1),null);
cljs.core.chunk_append(b__10126,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__10384 = (i__10125 + (1));
i__10125 = G__10384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10126),chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10123(cljs.core.chunk_rest(s__10124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10126),null);
}
} else {
var vec__10130 = cljs.core.first(s__10124__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10130,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10130,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10123(cljs.core.rest(s__10124__$2)));
}
} else {
return null;
}
break;
}
});})(i__10118,vec__10120,row,i,c__4527__auto__,size__4528__auto__,b__10119,s__10117__$2,temp__5735__auto__))
,null,null));
});})(i__10118,vec__10120,row,i,c__4527__auto__,size__4528__auto__,b__10119,s__10117__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__10385 = (i__10118 + (1));
i__10118 = G__10385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10119),chess$engine$local_engine$piece_seq_$_iter__10116(cljs.core.chunk_rest(s__10117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10119),null);
}
} else {
var vec__10136 = cljs.core.first(s__10117__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10136,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10136,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__10136,row,i,s__10117__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10139(s__10140){
return (new cljs.core.LazySeq(null,(function (){
var s__10140__$1 = s__10140;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10140__$1);
if(temp__5735__auto____$1){
var s__10140__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10140__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10140__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10142 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10141 = (0);
while(true){
if((i__10141 < size__4528__auto__)){
var vec__10143 = cljs.core._nth(c__4527__auto__,i__10141);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10143,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10143,(1),null);
cljs.core.chunk_append(b__10142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__10386 = (i__10141 + (1));
i__10141 = G__10386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10142),chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10139(cljs.core.chunk_rest(s__10140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10142),null);
}
} else {
var vec__10146 = cljs.core.first(s__10140__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10146,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10146,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__10116_$_iter__10139(cljs.core.rest(s__10140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__10136,row,i,s__10117__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__10116(cljs.core.rest(s__10117__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10151){
var vec__10152 = p__10151;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10156){
var vec__10157 = p__10156;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__10149_SHARP_,p2__10150_SHARP_){
var and__4115__auto__ = p1__10149_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__10150_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$find_piece_$_iter__10160(s__10161){
return (new cljs.core.LazySeq(null,(function (){
var s__10161__$1 = s__10161;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10161__$1);
if(temp__5735__auto__){
var s__10161__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10161__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10161__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10163 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10162 = (0);
while(true){
if((i__10162 < size__4528__auto__)){
var vec__10170 = cljs.core._nth(c__4527__auto__,i__10162);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(1),null);
cljs.core.chunk_append(b__10163,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__10387 = (i__10162 + (1));
i__10162 = G__10387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10163),chess$engine$local_engine$find_piece_$_iter__10160(cljs.core.chunk_rest(s__10161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10163),null);
}
} else {
var vec__10173 = cljs.core.first(s__10161__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__10160(cljs.core.rest(s__10161__$2)));
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
var matchie10176 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie10176)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie10176)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10191 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__10191.cljs$core$IFn$_invoke$arity$1 ? fexpr__10191.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10191.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__10192 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__10192.cljs$core$IFn$_invoke$arity$1 ? fexpr__10192.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__10192.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__10388 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__10389 = (ci + di);
var G__10390 = (cj + dj);
sofar = G__10388;
ci = G__10389;
cj = G__10390;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10201 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__10201.cljs$core$IFn$_invoke$arity$1 ? fexpr__10201.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10201.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__10202 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__10205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10202,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10205,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10205,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__10209){
var vec__10210 = p__10209;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__10177_SHARP_,p2__10178_SHARP_){
var and__4115__auto__ = p1__10177_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__10178_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__10213(s__10214){
return (new cljs.core.LazySeq(null,(function (){
var s__10214__$1 = s__10214;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10214__$1);
if(temp__5735__auto__){
var s__10214__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10214__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10214__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10216 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10215 = (0);
while(true){
if((i__10215 < size__4528__auto__)){
var vec__10218 = cljs.core._nth(c__4527__auto__,i__10215);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10218,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10218,(1),null);
cljs.core.chunk_append(b__10216,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__10391 = (i__10215 + (1));
i__10215 = G__10391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10216),chess$engine$local_engine$getall_$_castle_moves_$_iter__10213(cljs.core.chunk_rest(s__10214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10216),null);
}
} else {
var vec__10221 = cljs.core.first(s__10214__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10221,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10221,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__10213(cljs.core.rest(s__10214__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10224){
var vec__10225 = p__10224;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10225,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10225,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie10228 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie10228)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie10228)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10229(s__10230){
return (new cljs.core.LazySeq(null,(function (){
var s__10230__$1 = s__10230;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10230__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10230__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10229_$_iter__10231(s__10232){
return (new cljs.core.LazySeq(null,((function (s__10230__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function (){
var s__10232__$1 = s__10232;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10232__$1);
if(temp__5735__auto____$1){
var s__10232__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10232__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10232__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10234 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10233 = (0);
while(true){
if((i__10233 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10233);
cljs.core.chunk_append(b__10234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10392 = (i__10233 + (1));
i__10233 = G__10392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10234),chess$engine$local_engine$getall_$_piece_moves_$_iter__10229_$_iter__10231(cljs.core.chunk_rest(s__10232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10234),null);
}
} else {
var dj = cljs.core.first(s__10232__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10229_$_iter__10231(cljs.core.rest(s__10232__$2)));
}
} else {
return null;
}
break;
}
});})(s__10230__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
,null,null));
});})(s__10230__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10229(cljs.core.rest(s__10230__$1)));
} else {
var G__10393 = cljs.core.rest(s__10230__$1);
s__10230__$1 = G__10393;
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
})(),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10247(s__10248){
return (new cljs.core.LazySeq(null,(function (){
var s__10248__$1 = s__10248;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10248__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10248__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10247_$_iter__10249(s__10250){
return (new cljs.core.LazySeq(null,((function (s__10248__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function (){
var s__10250__$1 = s__10250;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10250__$1);
if(temp__5735__auto____$1){
var s__10250__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10250__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10250__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10252 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10251 = (0);
while(true){
if((i__10251 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10251);
cljs.core.chunk_append(b__10252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10394 = (i__10251 + (1));
i__10251 = G__10394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10252),chess$engine$local_engine$getall_$_piece_moves_$_iter__10247_$_iter__10249(cljs.core.chunk_rest(s__10250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10252),null);
}
} else {
var dj = cljs.core.first(s__10250__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10247_$_iter__10249(cljs.core.rest(s__10250__$2)));
}
} else {
return null;
}
break;
}
});})(s__10248__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
,null,null));
});})(s__10248__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10247(cljs.core.rest(s__10248__$1)));
} else {
var G__10395 = cljs.core.rest(s__10248__$1);
s__10248__$1 = G__10395;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie10228)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10262(s__10263){
return (new cljs.core.LazySeq(null,(function (){
var s__10263__$1 = s__10263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10263__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10263__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10262_$_iter__10264(s__10265){
return (new cljs.core.LazySeq(null,((function (s__10263__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function (){
var s__10265__$1 = s__10265;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10265__$1);
if(temp__5735__auto____$1){
var s__10265__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10265__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10265__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10267 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10266 = (0);
while(true){
if((i__10266 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10266);
cljs.core.chunk_append(b__10267,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__10396 = (i__10266 + (1));
i__10266 = G__10396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10267),chess$engine$local_engine$getall_$_piece_moves_$_iter__10262_$_iter__10264(cljs.core.chunk_rest(s__10265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10267),null);
}
} else {
var dj = cljs.core.first(s__10265__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__10262_$_iter__10264(cljs.core.rest(s__10265__$2)));
}
} else {
return null;
}
break;
}
});})(s__10263__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
,null,null));
});})(s__10263__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10262(cljs.core.rest(s__10263__$1)));
} else {
var G__10397 = cljs.core.rest(s__10263__$1);
s__10263__$1 = G__10397;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie10228)){
var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10282(s__10283){
return (new cljs.core.LazySeq(null,(function (){
var s__10283__$1 = s__10283;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10283__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10283__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10282_$_iter__10284(s__10285){
return (new cljs.core.LazySeq(null,((function (s__10283__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function (){
var s__10285__$1 = s__10285;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10285__$1);
if(temp__5735__auto____$1){
var s__10285__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10285__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10285__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10287 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10286 = (0);
while(true){
if((i__10286 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10286);
cljs.core.chunk_append(b__10287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10398 = (i__10286 + (1));
i__10286 = G__10398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10287),chess$engine$local_engine$getall_$_piece_moves_$_iter__10282_$_iter__10284(cljs.core.chunk_rest(s__10285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10287),null);
}
} else {
var dj = cljs.core.first(s__10285__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10282_$_iter__10284(cljs.core.rest(s__10285__$2)));
}
} else {
return null;
}
break;
}
});})(s__10283__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
,null,null));
});})(s__10283__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10282(cljs.core.rest(s__10283__$1)));
} else {
var G__10399 = cljs.core.rest(s__10283__$1);
s__10283__$1 = G__10399;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie10228)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10293(s__10294){
return (new cljs.core.LazySeq(null,(function (){
var s__10294__$1 = s__10294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10294__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10293_$_iter__10295(s__10296){
return (new cljs.core.LazySeq(null,((function (s__10294__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228){
return (function (){
var s__10296__$1 = s__10296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10296__$1);
if(temp__5735__auto____$1){
var s__10296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10296__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10296__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10298 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10297 = (0);
while(true){
if((i__10297 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10297);
cljs.core.chunk_append(b__10298,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__10400 = (i__10297 + (1));
i__10297 = G__10400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10298),chess$engine$local_engine$getall_$_piece_moves_$_iter__10293_$_iter__10295(cljs.core.chunk_rest(s__10296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10298),null);
}
} else {
var dj = cljs.core.first(s__10296__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__10293_$_iter__10295(cljs.core.rest(s__10296__$2)));
}
} else {
return null;
}
break;
}
});})(s__10294__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
,null,null));
});})(s__10294__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10228))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10293(cljs.core.rest(s__10294__$1)));
} else {
var G__10401 = cljs.core.rest(s__10294__$1);
s__10294__$1 = G__10401;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie10228)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10299){
var vec__10300 = p__10299;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10300,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10300,(1),null);
return ((function (){var fexpr__10303 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__10303.cljs$core$IFn$_invoke$arity$1 ? fexpr__10303.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__10303.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10304){
var vec__10305 = p__10304;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10305,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10305,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10310 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__10310.cljs$core$IFn$_invoke$arity$1 ? fexpr__10310.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10310.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10183_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__10183_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10315){
var vec__10316 = p__10315;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10316,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10316,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10316,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__10319){
var vec__10322 = p__10319;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10322,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10322,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10322,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10322,(3),null);
var iter__4529__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__10325(s__10326){
return (new cljs.core.LazySeq(null,(function (){
var s__10326__$1 = s__10326;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10326__$1);
if(temp__5735__auto__){
var s__10326__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10326__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10326__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10328 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10327 = (0);
while(true){
if((i__10327 < size__4528__auto__)){
var vec__10329 = cljs.core._nth(c__4527__auto__,i__10327);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(1),null);
cljs.core.chunk_append(b__10328,(function (){var iter__4529__auto__ = ((function (i__10327,vec__10329,row,i,c__4527__auto__,size__4528__auto__,b__10328,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10332(s__10333){
return (new cljs.core.LazySeq(null,((function (i__10327,vec__10329,row,i,c__4527__auto__,size__4528__auto__,b__10328,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2){
return (function (){
var s__10333__$1 = s__10333;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10333__$1);
if(temp__5735__auto____$1){
var s__10333__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10333__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__10333__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__10335 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__10334 = (0);
while(true){
if((i__10334 < size__4528__auto____$1)){
var vec__10341 = cljs.core._nth(c__4527__auto____$1,i__10334);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(1),null);
cljs.core.chunk_append(b__10335,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__10402 = (i__10334 + (1));
i__10334 = G__10402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10335),chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10332(cljs.core.chunk_rest(s__10333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10335),null);
}
} else {
var vec__10345 = cljs.core.first(s__10333__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10332(cljs.core.rest(s__10333__$2)));
}
} else {
return null;
}
break;
}
});})(i__10327,vec__10329,row,i,c__4527__auto__,size__4528__auto__,b__10328,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2))
,null,null));
});})(i__10327,vec__10329,row,i,c__4527__auto__,size__4528__auto__,b__10328,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__10403 = (i__10327 + (1));
i__10327 = G__10403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10328),chess$engine$local_engine$local_apply_move_$_iter__10325(cljs.core.chunk_rest(s__10326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10328),null);
}
} else {
var vec__10348 = cljs.core.first(s__10326__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10348,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10348,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__10348,row,i,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10351(s__10352){
return (new cljs.core.LazySeq(null,(function (){
var s__10352__$1 = s__10352;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10352__$1);
if(temp__5735__auto____$1){
var s__10352__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10352__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10352__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10354 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10353 = (0);
while(true){
if((i__10353 < size__4528__auto__)){
var vec__10355 = cljs.core._nth(c__4527__auto__,i__10353);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,(1),null);
cljs.core.chunk_append(b__10354,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__10404 = (i__10353 + (1));
i__10353 = G__10404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10354),chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10351(cljs.core.chunk_rest(s__10352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10354),null);
}
} else {
var vec__10359 = cljs.core.first(s__10352__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__10325_$_iter__10351(cljs.core.rest(s__10352__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__10348,row,i,s__10326__$2,temp__5735__auto__,vec__10322,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__10325(cljs.core.rest(s__10326__$2)));
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
var matchie10362 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie10362)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie10362)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie10362)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie10362)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie10362)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie10362)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10363){
var vec__10364 = p__10363;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10367){
var vec__10368 = p__10367;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10368,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10368,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10368,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__10371 = applied_board;
var G__10372 = chess.engine.core.other_color(color);
var G__10373 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__10371,G__10372,G__10373) : chess.engine.local_engine.local_best_move.call(null,G__10371,G__10372,G__10373));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine10375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine10375 = (function (meta10376){
this.meta10376 = meta10376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10377,meta10376__$1){
var self__ = this;
var _10377__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine10375(meta10376__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10377){
var self__ = this;
var _10377__$1 = this;
return self__.meta10376;
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__10378 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10378,(0),null);
return cljs.core.not(cljs.core.some((function (p1__10374_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__10374_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__10381 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10376","meta10376",-1443219918,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine10375.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine10375.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine10375");

(chess.engine.local_engine.t_chess$engine$local_engine10375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.local-engine/t_chess$engine$local_engine10375");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine10375.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine10375 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine10375(meta10376){
return (new chess.engine.local_engine.t_chess$engine$local_engine10375(meta10376));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine10375(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
