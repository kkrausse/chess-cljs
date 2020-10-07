goog.provide('chess.engine.local_engine');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__8930(s__8931){
return (new cljs.core.LazySeq(null,(function (){
var s__8931__$1 = s__8931;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8931__$1);
if(temp__5735__auto__){
var s__8931__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8931__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8931__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8933 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8932 = (0);
while(true){
if((i__8932 < size__4528__auto__)){
var vec__8935 = cljs.core._nth(c__4527__auto__,i__8932);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8935,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8935,(1),null);
cljs.core.chunk_append(b__8933,(function (){var iter__4529__auto__ = ((function (i__8932,vec__8935,row,i,c__4527__auto__,size__4528__auto__,b__8933,s__8931__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8938(s__8939){
return (new cljs.core.LazySeq(null,((function (i__8932,vec__8935,row,i,c__4527__auto__,size__4528__auto__,b__8933,s__8931__$2,temp__5735__auto__){
return (function (){
var s__8939__$1 = s__8939;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8939__$1);
if(temp__5735__auto____$1){
var s__8939__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8939__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__8939__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__8941 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__8940 = (0);
while(true){
if((i__8940 < size__4528__auto____$1)){
var vec__8942 = cljs.core._nth(c__4527__auto____$1,i__8940);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8942,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8942,(1),null);
cljs.core.chunk_append(b__8941,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__9161 = (i__8940 + (1));
i__8940 = G__9161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8941),chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8938(cljs.core.chunk_rest(s__8939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8941),null);
}
} else {
var vec__8945 = cljs.core.first(s__8939__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8945,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8945,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8938(cljs.core.rest(s__8939__$2)));
}
} else {
return null;
}
break;
}
});})(i__8932,vec__8935,row,i,c__4527__auto__,size__4528__auto__,b__8933,s__8931__$2,temp__5735__auto__))
,null,null));
});})(i__8932,vec__8935,row,i,c__4527__auto__,size__4528__auto__,b__8933,s__8931__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__9162 = (i__8932 + (1));
i__8932 = G__9162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8933),chess$engine$local_engine$piece_seq_$_iter__8930(cljs.core.chunk_rest(s__8931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8933),null);
}
} else {
var vec__8949 = cljs.core.first(s__8931__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8949,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8949,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__8949,row,i,s__8931__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8954(s__8955){
return (new cljs.core.LazySeq(null,(function (){
var s__8955__$1 = s__8955;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8955__$1);
if(temp__5735__auto____$1){
var s__8955__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8955__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8955__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8957 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8956 = (0);
while(true){
if((i__8956 < size__4528__auto__)){
var vec__8964 = cljs.core._nth(c__4527__auto__,i__8956);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,(1),null);
cljs.core.chunk_append(b__8957,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__9163 = (i__8956 + (1));
i__8956 = G__9163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8957),chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8954(cljs.core.chunk_rest(s__8955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8957),null);
}
} else {
var vec__8971 = cljs.core.first(s__8955__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8971,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8971,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__8930_$_iter__8954(cljs.core.rest(s__8955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__8949,row,i,s__8931__$2,temp__5735__auto__))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__8930(cljs.core.rest(s__8931__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8983){
var vec__8984 = p__8983;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8984,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8984,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8984,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8987){
var vec__8988 = p__8987;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8988,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8988,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8988,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8979_SHARP_,p2__8980_SHARP_){
var and__4115__auto__ = p1__8979_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__8980_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$find_piece_$_iter__8991(s__8992){
return (new cljs.core.LazySeq(null,(function (){
var s__8992__$1 = s__8992;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8992__$1);
if(temp__5735__auto__){
var s__8992__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8992__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8992__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8994 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8993 = (0);
while(true){
if((i__8993 < size__4528__auto__)){
var vec__8996 = cljs.core._nth(c__4527__auto__,i__8993);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8996,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8996,(1),null);
cljs.core.chunk_append(b__8994,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__9164 = (i__8993 + (1));
i__8993 = G__9164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8994),chess$engine$local_engine$find_piece_$_iter__8991(cljs.core.chunk_rest(s__8992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8994),null);
}
} else {
var vec__9000 = cljs.core.first(s__8992__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9000,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__8991(cljs.core.rest(s__8992__$2)));
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
var matchie9003 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie9003)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie9003)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__9031 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__9031.cljs$core$IFn$_invoke$arity$1 ? fexpr__9031.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__9031.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__9032 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__9032.cljs$core$IFn$_invoke$arity$1 ? fexpr__9032.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__9032.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__9174 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__9175 = (ci + di);
var G__9176 = (cj + dj);
sofar = G__9174;
ci = G__9175;
cj = G__9176;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__9034 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__9034.cljs$core$IFn$_invoke$arity$1 ? fexpr__9034.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__9034.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__9035 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__9038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9035,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__9041){
var vec__9042 = p__9041;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9042,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9042,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__9009_SHARP_,p2__9010_SHARP_){
var and__4115__auto__ = p1__9009_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__9010_SHARP_;
} else {
return and__4115__auto__;
}
}),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__9045(s__9046){
return (new cljs.core.LazySeq(null,(function (){
var s__9046__$1 = s__9046;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9046__$1);
if(temp__5735__auto__){
var s__9046__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9046__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9046__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9048 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9047 = (0);
while(true){
if((i__9047 < size__4528__auto__)){
var vec__9049 = cljs.core._nth(c__4527__auto__,i__9047);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9049,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9049,(1),null);
cljs.core.chunk_append(b__9048,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__9184 = (i__9047 + (1));
i__9047 = G__9184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9048),chess$engine$local_engine$getall_$_castle_moves_$_iter__9045(cljs.core.chunk_rest(s__9046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9048),null);
}
} else {
var vec__9052 = cljs.core.first(s__9046__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9052,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9052,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__9045(cljs.core.rest(s__9046__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9055){
var vec__9056 = p__9055;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie9059 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie9059)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie9059)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9060(s__9061){
return (new cljs.core.LazySeq(null,(function (){
var s__9061__$1 = s__9061;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9061__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9061__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9060_$_iter__9062(s__9063){
return (new cljs.core.LazySeq(null,((function (s__9061__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function (){
var s__9063__$1 = s__9063;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9063__$1);
if(temp__5735__auto____$1){
var s__9063__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9063__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9063__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9065 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9064 = (0);
while(true){
if((i__9064 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9064);
cljs.core.chunk_append(b__9065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9265 = (i__9064 + (1));
i__9064 = G__9265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9065),chess$engine$local_engine$getall_$_piece_moves_$_iter__9060_$_iter__9062(cljs.core.chunk_rest(s__9063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9065),null);
}
} else {
var dj = cljs.core.first(s__9063__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__9060_$_iter__9062(cljs.core.rest(s__9063__$2)));
}
} else {
return null;
}
break;
}
});})(s__9061__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
,null,null));
});})(s__9061__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9060(cljs.core.rest(s__9061__$1)));
} else {
var G__9286 = cljs.core.rest(s__9061__$1);
s__9061__$1 = G__9286;
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
})(),(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9066(s__9067){
return (new cljs.core.LazySeq(null,(function (){
var s__9067__$1 = s__9067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9067__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9067__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9066_$_iter__9068(s__9069){
return (new cljs.core.LazySeq(null,((function (s__9067__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function (){
var s__9069__$1 = s__9069;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9069__$1);
if(temp__5735__auto____$1){
var s__9069__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9069__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9069__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9071 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9070 = (0);
while(true){
if((i__9070 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9070);
cljs.core.chunk_append(b__9071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9295 = (i__9070 + (1));
i__9070 = G__9295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9071),chess$engine$local_engine$getall_$_piece_moves_$_iter__9066_$_iter__9068(cljs.core.chunk_rest(s__9069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9071),null);
}
} else {
var dj = cljs.core.first(s__9069__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__9066_$_iter__9068(cljs.core.rest(s__9069__$2)));
}
} else {
return null;
}
break;
}
});})(s__9067__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
,null,null));
});})(s__9067__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9066(cljs.core.rest(s__9067__$1)));
} else {
var G__9299 = cljs.core.rest(s__9067__$1);
s__9067__$1 = G__9299;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie9059)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9072(s__9073){
return (new cljs.core.LazySeq(null,(function (){
var s__9073__$1 = s__9073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9073__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9073__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9072_$_iter__9074(s__9075){
return (new cljs.core.LazySeq(null,((function (s__9073__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function (){
var s__9075__$1 = s__9075;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9075__$1);
if(temp__5735__auto____$1){
var s__9075__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9075__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9075__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9077 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9076 = (0);
while(true){
if((i__9076 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9076);
cljs.core.chunk_append(b__9077,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__9308 = (i__9076 + (1));
i__9076 = G__9308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9077),chess$engine$local_engine$getall_$_piece_moves_$_iter__9072_$_iter__9074(cljs.core.chunk_rest(s__9075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9077),null);
}
} else {
var dj = cljs.core.first(s__9075__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__9072_$_iter__9074(cljs.core.rest(s__9075__$2)));
}
} else {
return null;
}
break;
}
});})(s__9073__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
,null,null));
});})(s__9073__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9072(cljs.core.rest(s__9073__$1)));
} else {
var G__9310 = cljs.core.rest(s__9073__$1);
s__9073__$1 = G__9310;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie9059)){
var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9078(s__9079){
return (new cljs.core.LazySeq(null,(function (){
var s__9079__$1 = s__9079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9079__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9079__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9078_$_iter__9080(s__9081){
return (new cljs.core.LazySeq(null,((function (s__9079__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function (){
var s__9081__$1 = s__9081;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9081__$1);
if(temp__5735__auto____$1){
var s__9081__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9081__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9081__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9083 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9082 = (0);
while(true){
if((i__9082 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9082);
cljs.core.chunk_append(b__9083,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__9325 = (i__9082 + (1));
i__9082 = G__9325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9083),chess$engine$local_engine$getall_$_piece_moves_$_iter__9078_$_iter__9080(cljs.core.chunk_rest(s__9081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9083),null);
}
} else {
var dj = cljs.core.first(s__9081__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__9078_$_iter__9080(cljs.core.rest(s__9081__$2)));
}
} else {
return null;
}
break;
}
});})(s__9079__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
,null,null));
});})(s__9079__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9078(cljs.core.rest(s__9079__$1)));
} else {
var G__9333 = cljs.core.rest(s__9079__$1);
s__9079__$1 = G__9333;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie9059)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9084(s__9085){
return (new cljs.core.LazySeq(null,(function (){
var s__9085__$1 = s__9085;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9085__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__9085__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__9084_$_iter__9086(s__9087){
return (new cljs.core.LazySeq(null,((function (s__9085__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059){
return (function (){
var s__9087__$1 = s__9087;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9087__$1);
if(temp__5735__auto____$1){
var s__9087__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9087__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9087__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9089 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9088 = (0);
while(true){
if((i__9088 < size__4528__auto__)){
var dj = cljs.core._nth(c__4527__auto__,i__9088);
cljs.core.chunk_append(b__9089,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__9340 = (i__9088 + (1));
i__9088 = G__9340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9089),chess$engine$local_engine$getall_$_piece_moves_$_iter__9084_$_iter__9086(cljs.core.chunk_rest(s__9087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9089),null);
}
} else {
var dj = cljs.core.first(s__9087__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__9084_$_iter__9086(cljs.core.rest(s__9087__$2)));
}
} else {
return null;
}
break;
}
});})(s__9085__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
,null,null));
});})(s__9085__$1,di,xs__6292__auto__,temp__5735__auto__,matchie9059))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__9084(cljs.core.rest(s__9085__$1)));
} else {
var G__9344 = cljs.core.rest(s__9085__$1);
s__9085__$1 = G__9344;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie9059)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9090){
var vec__9091 = p__9090;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9091,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9091,(1),null);
return ((function (){var fexpr__9094 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__9094.cljs$core$IFn$_invoke$arity$1 ? fexpr__9094.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__9094.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9095){
var vec__9096 = p__9095;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9096,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9096,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__9100 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__9100.cljs$core$IFn$_invoke$arity$1 ? fexpr__9100.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__9100.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9016_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__9016_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9101){
var vec__9102 = p__9101;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9102,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9102,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9102,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__9105){
var vec__9106 = p__9105;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(3),null);
var iter__4529__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__9109(s__9110){
return (new cljs.core.LazySeq(null,(function (){
var s__9110__$1 = s__9110;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__9110__$1);
if(temp__5735__auto__){
var s__9110__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9110__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9110__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9112 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9111 = (0);
while(true){
if((i__9111 < size__4528__auto__)){
var vec__9113 = cljs.core._nth(c__4527__auto__,i__9111);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9113,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9113,(1),null);
cljs.core.chunk_append(b__9112,(function (){var iter__4529__auto__ = ((function (i__9111,vec__9113,row,i,c__4527__auto__,size__4528__auto__,b__9112,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9116(s__9117){
return (new cljs.core.LazySeq(null,((function (i__9111,vec__9113,row,i,c__4527__auto__,size__4528__auto__,b__9112,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2){
return (function (){
var s__9117__$1 = s__9117;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9117__$1);
if(temp__5735__auto____$1){
var s__9117__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9117__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__9117__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__9119 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__9118 = (0);
while(true){
if((i__9118 < size__4528__auto____$1)){
var vec__9120 = cljs.core._nth(c__4527__auto____$1,i__9118);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9120,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9120,(1),null);
cljs.core.chunk_append(b__9119,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__9373 = (i__9118 + (1));
i__9118 = G__9373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9119),chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9116(cljs.core.chunk_rest(s__9117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9119),null);
}
} else {
var vec__9123 = cljs.core.first(s__9117__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9116(cljs.core.rest(s__9117__$2)));
}
} else {
return null;
}
break;
}
});})(i__9111,vec__9113,row,i,c__4527__auto__,size__4528__auto__,b__9112,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2))
,null,null));
});})(i__9111,vec__9113,row,i,c__4527__auto__,size__4528__auto__,b__9112,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__9380 = (i__9111 + (1));
i__9111 = G__9380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9112),chess$engine$local_engine$local_apply_move_$_iter__9109(cljs.core.chunk_rest(s__9110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9112),null);
}
} else {
var vec__9126 = cljs.core.first(s__9110__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9126,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9126,(1),null);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (vec__9126,row,i,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9129(s__9130){
return (new cljs.core.LazySeq(null,(function (){
var s__9130__$1 = s__9130;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__9130__$1);
if(temp__5735__auto____$1){
var s__9130__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9130__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__9130__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__9132 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__9131 = (0);
while(true){
if((i__9131 < size__4528__auto__)){
var vec__9133 = cljs.core._nth(c__4527__auto__,i__9131);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9133,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9133,(1),null);
cljs.core.chunk_append(b__9132,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__9391 = (i__9131 + (1));
i__9131 = G__9391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9132),chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9129(cljs.core.chunk_rest(s__9130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9132),null);
}
} else {
var vec__9136 = cljs.core.first(s__9130__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9136,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9136,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__9109_$_iter__9129(cljs.core.rest(s__9130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__9126,row,i,s__9110__$2,temp__5735__auto__,vec__9106,from1,to1,from2,to2))
;
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__9109(cljs.core.rest(s__9110__$2)));
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
var matchie9139 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie9139)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie9139)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie9139)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie9139)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie9139)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie9139)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9140){
var vec__9141 = p__9140;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9141,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9141,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9141,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9144){
var vec__9145 = p__9144;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9145,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9145,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9145,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__9148 = applied_board;
var G__9149 = chess.engine.core.other_color(color);
var G__9150 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__9148,G__9149,G__9150) : chess.engine.local_engine.local_best_move.call(null,G__9148,G__9149,G__9150));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine9152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine9152 = (function (meta9153){
this.meta9153 = meta9153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9154,meta9153__$1){
var self__ = this;
var _9154__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine9152(meta9153__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9154){
var self__ = this;
var _9154__$1 = this;
return self__.meta9153;
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__9155 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155,(0),null);
return cljs.core.not(cljs.core.some((function (p1__9151_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__9151_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__9158 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9158,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9158,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9153","meta9153",-1097127648,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine9152.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine9152.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine9152");

(chess.engine.local_engine.t_chess$engine$local_engine9152.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.local-engine/t_chess$engine$local_engine9152");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine9152.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine9152 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine9152(meta9153){
return (new chess.engine.local_engine.t_chess$engine$local_engine9152(meta9153));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine9152(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
