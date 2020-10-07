goog.provide('chess.engine.local_engine');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__10140(s__10141){
return (new cljs.core.LazySeq(null,(function (){
var s__10141__$1 = s__10141;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10141__$1);
if(temp__5735__auto__){
var s__10141__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10141__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10141__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10143 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10142 = (0);
while(true){
if((i__10142 < size__4528__auto__)){
var vec__10145 = cljs.core._nth(c__4527__auto__,i__10142);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(1),null);
cljs.core.chunk_append(b__10143,(function (){var iter__4529__auto__ = ((function (i__10142,vec__10145,row,i,c__4527__auto__,size__4528__auto__,b__10143,s__10141__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10148(s__10149){
return (new cljs.core.LazySeq(null,((function (i__10142,vec__10145,row,i,c__4527__auto__,size__4528__auto__,b__10143,s__10141__$2,temp__5735__auto__){
return (function (){
var s__10149__$1 = s__10149;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10149__$1);
if(temp__5735__auto____$1){
var s__10149__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10149__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__10149__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__10151 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__10150 = (0);
while(true){
if((i__10150 < size__4528__auto____$1)){
var vec__10158 = cljs.core._nth(c__4527__auto____$1,i__10150);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158,(1),null);
cljs.core.chunk_append(b__10151,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__10380 = (i__10150 + (1));
i__10150 = G__10380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10151),chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10148(cljs.core.chunk_rest(s__10149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10151),null);
}
} else {
var vec__10164 = cljs.core.first(s__10149__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10148(cljs.core.rest(s__10149__$2)));
}
} else {
return null;
}
break;
}
});})(i__10142,vec__10145,row,i,c__4527__auto__,size__4528__auto__,b__10143,s__10141__$2,temp__5735__auto__))
,null,null));
});})(i__10142,vec__10145,row,i,c__4527__auto__,size__4528__auto__,b__10143,s__10141__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__10381 = (i__10142 + (1));
i__10142 = G__10381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10143),chess$engine$local_engine$piece_seq_$_iter__10140(cljs.core.chunk_rest(s__10141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10143),null);
}
} else {
var vec__10170 = cljs.core.first(s__10141__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__10170,row,i,s__10141__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10173(s__10174){
return (new cljs.core.LazySeq(null,(function (){
var s__10174__$1 = s__10174;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10174__$1);
if(temp__5735__auto____$1){
var s__10174__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10174__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10174__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10176 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10175 = (0);
while(true){
if((i__10175 < size__4528__auto__)){
var vec__10177 = cljs.core._nth(c__4527__auto__,i__10175);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(1),null);
cljs.core.chunk_append(b__10176,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__10382 = (i__10175 + (1));
i__10175 = G__10382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10176),chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10173(cljs.core.chunk_rest(s__10174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10176),null);
}
} else {
var vec__10180 = cljs.core.first(s__10174__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10180,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10180,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__10140_$_iter__10173(cljs.core.rest(s__10174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__10170,row,i,s__10141__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__10140(cljs.core.rest(s__10141__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10187){
var vec__10188 = p__10187;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10188,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10188,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10188,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10191){
var vec__10194 = p__10191;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__10185_SHARP_,p2__10186_SHARP_){
var and__4115__auto__ = p1__10185_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__10186_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$find_piece_$_iter__10202(s__10203){
return (new cljs.core.LazySeq(null,(function (){
var s__10203__$1 = s__10203;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10203__$1);
if(temp__5735__auto__){
var s__10203__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10203__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10203__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10205 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10204 = (0);
while(true){
if((i__10204 < size__4528__auto__)){
var vec__10208 = cljs.core._nth(c__4527__auto__,i__10204);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10208,(1),null);
cljs.core.chunk_append(b__10205,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__10383 = (i__10204 + (1));
i__10204 = G__10383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10205),chess$engine$local_engine$find_piece_$_iter__10202(cljs.core.chunk_rest(s__10203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10205),null);
}
} else {
var vec__10211 = cljs.core.first(s__10203__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10211,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__10202(cljs.core.rest(s__10203__$2)));
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
var matchie10214 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie10214)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie10214)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10228 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__10228.cljs$core$IFn$_invoke$arity$1 ? fexpr__10228.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10228.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__10229 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__10229.cljs$core$IFn$_invoke$arity$1 ? fexpr__10229.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__10229.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__10384 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__10385 = (ci + di);
var G__10386 = (cj + dj);
sofar = G__10384;
ci = G__10385;
cj = G__10386;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10235 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__10235.cljs$core$IFn$_invoke$arity$1 ? fexpr__10235.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10235.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__10236 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__10239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10236,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__10246){
var vec__10247 = p__10246;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__10217_SHARP_,p2__10218_SHARP_){
var and__4115__auto__ = p1__10217_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__10218_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__10251(s__10252){
return (new cljs.core.LazySeq(null,(function (){
var s__10252__$1 = s__10252;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10252__$1);
if(temp__5735__auto__){
var s__10252__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10252__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10252__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10254 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10253 = (0);
while(true){
if((i__10253 < size__4528__auto__)){
var vec__10262 = cljs.core._nth(c__4527__auto__,i__10253);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10262,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10262,(1),null);
cljs.core.chunk_append(b__10254,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__10387 = (i__10253 + (1));
i__10253 = G__10387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10254),chess$engine$local_engine$getall_$_castle_moves_$_iter__10251(cljs.core.chunk_rest(s__10252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10254),null);
}
} else {
var vec__10265 = cljs.core.first(s__10252__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__10251(cljs.core.rest(s__10252__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10269){
var vec__10270 = p__10269;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie10274 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie10274)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie10274)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10275(s__10276){
return (new cljs.core.LazySeq(null,(function (){
var s__10276__$1 = s__10276;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10276__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10276__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10275_$_iter__10277(s__10278){
return (new cljs.core.LazySeq(null,((function (s__10276__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function (){
var s__10278__$1 = s__10278;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10278__$1);
if(temp__5735__auto____$1){
var s__10278__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10278__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10278__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10280 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10279 = (0);
while(true){
if((i__10279 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10279);
cljs.core.chunk_append(b__10280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10388 = (i__10279 + (1));
i__10279 = G__10388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10280),chess$engine$local_engine$getall_$_piece_moves_$_iter__10275_$_iter__10277(cljs.core.chunk_rest(s__10278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10280),null);
}
} else {
var dj = cljs.core.first(s__10278__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10275_$_iter__10277(cljs.core.rest(s__10278__$2)));
}
} else {
return null;
}
break;
}
});})(s__10276__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
,null,null));
});})(s__10276__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10275(cljs.core.rest(s__10276__$1)));
} else {
var G__10389 = cljs.core.rest(s__10276__$1);
s__10276__$1 = G__10389;
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
})(),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10281(s__10282){
return (new cljs.core.LazySeq(null,(function (){
var s__10282__$1 = s__10282;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10282__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10282__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10281_$_iter__10283(s__10284){
return (new cljs.core.LazySeq(null,((function (s__10282__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function (){
var s__10284__$1 = s__10284;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10284__$1);
if(temp__5735__auto____$1){
var s__10284__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10284__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10284__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10286 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10285 = (0);
while(true){
if((i__10285 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10285);
cljs.core.chunk_append(b__10286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10390 = (i__10285 + (1));
i__10285 = G__10390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10286),chess$engine$local_engine$getall_$_piece_moves_$_iter__10281_$_iter__10283(cljs.core.chunk_rest(s__10284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10286),null);
}
} else {
var dj = cljs.core.first(s__10284__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10281_$_iter__10283(cljs.core.rest(s__10284__$2)));
}
} else {
return null;
}
break;
}
});})(s__10282__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
,null,null));
});})(s__10282__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10281(cljs.core.rest(s__10282__$1)));
} else {
var G__10391 = cljs.core.rest(s__10282__$1);
s__10282__$1 = G__10391;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie10274)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10291(s__10292){
return (new cljs.core.LazySeq(null,(function (){
var s__10292__$1 = s__10292;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10292__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10292__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10291_$_iter__10293(s__10294){
return (new cljs.core.LazySeq(null,((function (s__10292__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function (){
var s__10294__$1 = s__10294;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10294__$1);
if(temp__5735__auto____$1){
var s__10294__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10294__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10294__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10296 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10295 = (0);
while(true){
if((i__10295 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10295);
cljs.core.chunk_append(b__10296,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__10392 = (i__10295 + (1));
i__10295 = G__10392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10296),chess$engine$local_engine$getall_$_piece_moves_$_iter__10291_$_iter__10293(cljs.core.chunk_rest(s__10294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10296),null);
}
} else {
var dj = cljs.core.first(s__10294__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__10291_$_iter__10293(cljs.core.rest(s__10294__$2)));
}
} else {
return null;
}
break;
}
});})(s__10292__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
,null,null));
});})(s__10292__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10291(cljs.core.rest(s__10292__$1)));
} else {
var G__10393 = cljs.core.rest(s__10292__$1);
s__10292__$1 = G__10393;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie10274)){
var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10297(s__10298){
return (new cljs.core.LazySeq(null,(function (){
var s__10298__$1 = s__10298;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10298__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10298__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10297_$_iter__10299(s__10300){
return (new cljs.core.LazySeq(null,((function (s__10298__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function (){
var s__10300__$1 = s__10300;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10300__$1);
if(temp__5735__auto____$1){
var s__10300__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10300__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10300__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10302 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10301 = (0);
while(true){
if((i__10301 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10301);
cljs.core.chunk_append(b__10302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__10394 = (i__10301 + (1));
i__10301 = G__10394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10302),chess$engine$local_engine$getall_$_piece_moves_$_iter__10297_$_iter__10299(cljs.core.chunk_rest(s__10300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10302),null);
}
} else {
var dj = cljs.core.first(s__10300__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__10297_$_iter__10299(cljs.core.rest(s__10300__$2)));
}
} else {
return null;
}
break;
}
});})(s__10298__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
,null,null));
});})(s__10298__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10297(cljs.core.rest(s__10298__$1)));
} else {
var G__10395 = cljs.core.rest(s__10298__$1);
s__10298__$1 = G__10395;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie10274)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10303(s__10304){
return (new cljs.core.LazySeq(null,(function (){
var s__10304__$1 = s__10304;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10304__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__10304__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__10303_$_iter__10305(s__10306){
return (new cljs.core.LazySeq(null,((function (s__10304__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274){
return (function (){
var s__10306__$1 = s__10306;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10306__$1);
if(temp__5735__auto____$1){
var s__10306__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10306__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10306__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10308 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10307 = (0);
while(true){
if((i__10307 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__10307);
cljs.core.chunk_append(b__10308,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__10396 = (i__10307 + (1));
i__10307 = G__10396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10308),chess$engine$local_engine$getall_$_piece_moves_$_iter__10303_$_iter__10305(cljs.core.chunk_rest(s__10306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10308),null);
}
} else {
var dj = cljs.core.first(s__10306__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__10303_$_iter__10305(cljs.core.rest(s__10306__$2)));
}
} else {
return null;
}
break;
}
});})(s__10304__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
,null,null));
});})(s__10304__$1,di,xs__6292__auto__,temp__5735__auto__,matchie10274))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__10303(cljs.core.rest(s__10304__$1)));
} else {
var G__10397 = cljs.core.rest(s__10304__$1);
s__10304__$1 = G__10397;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie10274)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10309){
var vec__10310 = p__10309;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(1),null);
return ((function (){var fexpr__10313 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__10313.cljs$core$IFn$_invoke$arity$1 ? fexpr__10313.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__10313.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10314){
var vec__10315 = p__10314;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10315,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10315,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__10319 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__10319.cljs$core$IFn$_invoke$arity$1 ? fexpr__10319.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__10319.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10225_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__10225_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10320){
var vec__10321 = p__10320;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10321,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10321,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10321,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__10324){
var vec__10325 = p__10324;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(3),null);
var iter__4529__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__10328(s__10329){
return (new cljs.core.LazySeq(null,(function (){
var s__10329__$1 = s__10329;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10329__$1);
if(temp__5735__auto__){
var s__10329__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10329__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10329__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10331 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10330 = (0);
while(true){
if((i__10330 < size__4528__auto__)){
var vec__10332 = cljs.core._nth(c__4527__auto__,i__10330);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,(1),null);
cljs.core.chunk_append(b__10331,(function (){var iter__4529__auto__ = ((function (i__10330,vec__10332,row,i,c__4527__auto__,size__4528__auto__,b__10331,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10335(s__10336){
return (new cljs.core.LazySeq(null,((function (i__10330,vec__10332,row,i,c__4527__auto__,size__4528__auto__,b__10331,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2){
return (function (){
var s__10336__$1 = s__10336;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10336__$1);
if(temp__5735__auto____$1){
var s__10336__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10336__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__10336__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__10338 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__10337 = (0);
while(true){
if((i__10337 < size__4528__auto____$1)){
var vec__10339 = cljs.core._nth(c__4527__auto____$1,i__10337);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(1),null);
cljs.core.chunk_append(b__10338,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__10398 = (i__10337 + (1));
i__10337 = G__10398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10335(cljs.core.chunk_rest(s__10336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),null);
}
} else {
var vec__10342 = cljs.core.first(s__10336__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10342,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10342,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10335(cljs.core.rest(s__10336__$2)));
}
} else {
return null;
}
break;
}
});})(i__10330,vec__10332,row,i,c__4527__auto__,size__4528__auto__,b__10331,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2))
,null,null));
});})(i__10330,vec__10332,row,i,c__4527__auto__,size__4528__auto__,b__10331,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__10399 = (i__10330 + (1));
i__10330 = G__10399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10331),chess$engine$local_engine$local_apply_move_$_iter__10328(cljs.core.chunk_rest(s__10329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10331),null);
}
} else {
var vec__10345 = cljs.core.first(s__10329__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__10345,row,i,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10348(s__10349){
return (new cljs.core.LazySeq(null,(function (){
var s__10349__$1 = s__10349;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__10349__$1);
if(temp__5735__auto____$1){
var s__10349__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10349__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10349__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10351 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10350 = (0);
while(true){
if((i__10350 < size__4528__auto__)){
var vec__10352 = cljs.core._nth(c__4527__auto__,i__10350);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(1),null);
cljs.core.chunk_append(b__10351,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__10400 = (i__10350 + (1));
i__10350 = G__10400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10351),chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10348(cljs.core.chunk_rest(s__10349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10351),null);
}
} else {
var vec__10355 = cljs.core.first(s__10349__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__10328_$_iter__10348(cljs.core.rest(s__10349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__10345,row,i,s__10329__$2,temp__5735__auto__,vec__10325,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__10328(cljs.core.rest(s__10329__$2)));
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
var matchie10358 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie10358)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie10358)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie10358)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie10358)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie10358)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie10358)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10359){
var vec__10360 = p__10359;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10363){
var vec__10364 = p__10363;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10364,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__10367 = applied_board;
var G__10368 = chess.engine.core.other_color(color);
var G__10369 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__10367,G__10368,G__10369) : chess.engine.local_engine.local_best_move.call(null,G__10367,G__10368,G__10369));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine10371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine10371 = (function (meta10372){
this.meta10372 = meta10372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10373,meta10372__$1){
var self__ = this;
var _10373__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine10371(meta10372__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10373){
var self__ = this;
var _10373__$1 = this;
return self__.meta10372;
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__10374 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10374,(0),null);
return cljs.core.not(cljs.core.some((function (p1__10370_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__10370_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__10377 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10377,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10377,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10372","meta10372",-2135496181,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine10371.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine10371.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine10371");

(chess.engine.local_engine.t_chess$engine$local_engine10371.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.local-engine/t_chess$engine$local_engine10371");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine10371.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine10371 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine10371(meta10372){
return (new chess.engine.local_engine.t_chess$engine$local_engine10371(meta10372));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine10371(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
