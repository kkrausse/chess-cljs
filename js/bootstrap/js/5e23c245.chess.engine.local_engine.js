goog.provide('chess.engine.local_engine');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__7749(s__7750){
return (new cljs.core.LazySeq(null,(function (){
var s__7750__$1 = s__7750;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7750__$1);
if(temp__5735__auto__){
var s__7750__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7750__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7750__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7752 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7751 = (0);
while(true){
if((i__7751 < size__4581__auto__)){
var vec__7762 = cljs.core._nth(c__4580__auto__,i__7751);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
cljs.core.chunk_append(b__7752,(function (){var iter__4582__auto__ = ((function (i__7751,vec__7762,row,i,c__4580__auto__,size__4581__auto__,b__7752,s__7750__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7765(s__7766){
return (new cljs.core.LazySeq(null,((function (i__7751,vec__7762,row,i,c__4580__auto__,size__4581__auto__,b__7752,s__7750__$2,temp__5735__auto__){
return (function (){
var s__7766__$1 = s__7766;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7766__$1);
if(temp__5735__auto____$1){
var s__7766__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7766__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__7766__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__7768 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__7767 = (0);
while(true){
if((i__7767 < size__4581__auto____$1)){
var vec__7770 = cljs.core._nth(c__4580__auto____$1,i__7767);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7770,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7770,(1),null);
cljs.core.chunk_append(b__7768,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__8050 = (i__7767 + (1));
i__7767 = G__8050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7768),chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7765(cljs.core.chunk_rest(s__7766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7768),null);
}
} else {
var vec__7774 = cljs.core.first(s__7766__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7774,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7774,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7765(cljs.core.rest(s__7766__$2)));
}
} else {
return null;
}
break;
}
});})(i__7751,vec__7762,row,i,c__4580__auto__,size__4581__auto__,b__7752,s__7750__$2,temp__5735__auto__))
,null,null));
});})(i__7751,vec__7762,row,i,c__4580__auto__,size__4581__auto__,b__7752,s__7750__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__8051 = (i__7751 + (1));
i__7751 = G__8051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7752),chess$engine$local_engine$piece_seq_$_iter__7749(cljs.core.chunk_rest(s__7750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7752),null);
}
} else {
var vec__7778 = cljs.core.first(s__7750__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7778,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7778,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__7778,row,i,s__7750__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7781(s__7782){
return (new cljs.core.LazySeq(null,(function (){
var s__7782__$1 = s__7782;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7782__$1);
if(temp__5735__auto____$1){
var s__7782__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7782__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7782__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7784 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7783 = (0);
while(true){
if((i__7783 < size__4581__auto__)){
var vec__7785 = cljs.core._nth(c__4580__auto__,i__7783);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7785,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7785,(1),null);
cljs.core.chunk_append(b__7784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__8066 = (i__7783 + (1));
i__7783 = G__8066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7784),chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7781(cljs.core.chunk_rest(s__7782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7784),null);
}
} else {
var vec__7791 = cljs.core.first(s__7782__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__7749_$_iter__7781(cljs.core.rest(s__7782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__7778,row,i,s__7750__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__7749(cljs.core.rest(s__7750__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7796){
var vec__7797 = p__7796;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7800){
var vec__7803 = p__7800;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7803,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7803,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7803,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__7794_SHARP_,p2__7795_SHARP_){
var and__4174__auto__ = p1__7794_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__7795_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__7806(s__7807){
return (new cljs.core.LazySeq(null,(function (){
var s__7807__$1 = s__7807;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7807__$1);
if(temp__5735__auto__){
var s__7807__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7807__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7807__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7809 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7808 = (0);
while(true){
if((i__7808 < size__4581__auto__)){
var vec__7810 = cljs.core._nth(c__4580__auto__,i__7808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7810,(1),null);
cljs.core.chunk_append(b__7809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__8071 = (i__7808 + (1));
i__7808 = G__8071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7809),chess$engine$local_engine$find_piece_$_iter__7806(cljs.core.chunk_rest(s__7807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7809),null);
}
} else {
var vec__7813 = cljs.core.first(s__7807__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7813,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__7806(cljs.core.rest(s__7807__$2)));
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
var matchie7818 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie7818)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie7818)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7828 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__7828.cljs$core$IFn$_invoke$arity$1 ? fexpr__7828.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7828.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__7829 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__7829.cljs$core$IFn$_invoke$arity$1 ? fexpr__7829.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__7829.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__8077 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__8078 = (ci + di);
var G__8079 = (cj + dj);
sofar = G__8077;
ci = G__8078;
cj = G__8079;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7831 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__7831.cljs$core$IFn$_invoke$arity$1 ? fexpr__7831.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7831.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__7832 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__7835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7832,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7835,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7835,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__7838){
var vec__7839 = p__7838;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7839,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7839,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__7820_SHARP_,p2__7822_SHARP_){
var and__4174__auto__ = p1__7820_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__7822_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__7842(s__7843){
return (new cljs.core.LazySeq(null,(function (){
var s__7843__$1 = s__7843;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7843__$1);
if(temp__5735__auto__){
var s__7843__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7843__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7843__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7845 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7844 = (0);
while(true){
if((i__7844 < size__4581__auto__)){
var vec__7846 = cljs.core._nth(c__4580__auto__,i__7844);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7846,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7846,(1),null);
cljs.core.chunk_append(b__7845,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__8086 = (i__7844 + (1));
i__7844 = G__8086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7845),chess$engine$local_engine$getall_$_castle_moves_$_iter__7842(cljs.core.chunk_rest(s__7843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7845),null);
}
} else {
var vec__7852 = cljs.core.first(s__7843__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__7842(cljs.core.rest(s__7843__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7856){
var vec__7857 = p__7856;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7857,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7857,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie7860 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie7860)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie7860)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7861(s__7862){
return (new cljs.core.LazySeq(null,(function (){
var s__7862__$1 = s__7862;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7862__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7862__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7861_$_iter__7863(s__7864){
return (new cljs.core.LazySeq(null,((function (s__7862__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function (){
var s__7864__$1 = s__7864;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7864__$1);
if(temp__5735__auto____$1){
var s__7864__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7864__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7864__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7866 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7865 = (0);
while(true){
if((i__7865 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7865);
cljs.core.chunk_append(b__7866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8104 = (i__7865 + (1));
i__7865 = G__8104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7866),chess$engine$local_engine$getall_$_piece_moves_$_iter__7861_$_iter__7863(cljs.core.chunk_rest(s__7864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7866),null);
}
} else {
var dj = cljs.core.first(s__7864__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7861_$_iter__7863(cljs.core.rest(s__7864__$2)));
}
} else {
return null;
}
break;
}
});})(s__7862__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
,null,null));
});})(s__7862__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7861(cljs.core.rest(s__7862__$1)));
} else {
var G__8110 = cljs.core.rest(s__7862__$1);
s__7862__$1 = G__8110;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7868(s__7869){
return (new cljs.core.LazySeq(null,(function (){
var s__7869__$1 = s__7869;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7869__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7869__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7868_$_iter__7870(s__7871){
return (new cljs.core.LazySeq(null,((function (s__7869__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function (){
var s__7871__$1 = s__7871;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7871__$1);
if(temp__5735__auto____$1){
var s__7871__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7871__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7871__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7873 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7872 = (0);
while(true){
if((i__7872 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7872);
cljs.core.chunk_append(b__7873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8121 = (i__7872 + (1));
i__7872 = G__8121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7873),chess$engine$local_engine$getall_$_piece_moves_$_iter__7868_$_iter__7870(cljs.core.chunk_rest(s__7871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7873),null);
}
} else {
var dj = cljs.core.first(s__7871__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7868_$_iter__7870(cljs.core.rest(s__7871__$2)));
}
} else {
return null;
}
break;
}
});})(s__7869__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
,null,null));
});})(s__7869__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7868(cljs.core.rest(s__7869__$1)));
} else {
var G__8126 = cljs.core.rest(s__7869__$1);
s__7869__$1 = G__8126;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie7860)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7876(s__7877){
return (new cljs.core.LazySeq(null,(function (){
var s__7877__$1 = s__7877;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7877__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7877__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7876_$_iter__7878(s__7879){
return (new cljs.core.LazySeq(null,((function (s__7877__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function (){
var s__7879__$1 = s__7879;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7879__$1);
if(temp__5735__auto____$1){
var s__7879__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7879__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7879__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7881 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7880 = (0);
while(true){
if((i__7880 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7880);
cljs.core.chunk_append(b__7881,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8137 = (i__7880 + (1));
i__7880 = G__8137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7881),chess$engine$local_engine$getall_$_piece_moves_$_iter__7876_$_iter__7878(cljs.core.chunk_rest(s__7879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7881),null);
}
} else {
var dj = cljs.core.first(s__7879__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__7876_$_iter__7878(cljs.core.rest(s__7879__$2)));
}
} else {
return null;
}
break;
}
});})(s__7877__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
,null,null));
});})(s__7877__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7876(cljs.core.rest(s__7877__$1)));
} else {
var G__8154 = cljs.core.rest(s__7877__$1);
s__7877__$1 = G__8154;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie7860)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7890(s__7891){
return (new cljs.core.LazySeq(null,(function (){
var s__7891__$1 = s__7891;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7891__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7891__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7890_$_iter__7892(s__7893){
return (new cljs.core.LazySeq(null,((function (s__7891__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function (){
var s__7893__$1 = s__7893;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7893__$1);
if(temp__5735__auto____$1){
var s__7893__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7893__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7893__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7895 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7894 = (0);
while(true){
if((i__7894 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7894);
cljs.core.chunk_append(b__7895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__8166 = (i__7894 + (1));
i__7894 = G__8166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7895),chess$engine$local_engine$getall_$_piece_moves_$_iter__7890_$_iter__7892(cljs.core.chunk_rest(s__7893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7895),null);
}
} else {
var dj = cljs.core.first(s__7893__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__7890_$_iter__7892(cljs.core.rest(s__7893__$2)));
}
} else {
return null;
}
break;
}
});})(s__7891__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
,null,null));
});})(s__7891__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7890(cljs.core.rest(s__7891__$1)));
} else {
var G__8178 = cljs.core.rest(s__7891__$1);
s__7891__$1 = G__8178;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie7860)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7906(s__7907){
return (new cljs.core.LazySeq(null,(function (){
var s__7907__$1 = s__7907;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7907__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__7907__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__7906_$_iter__7908(s__7909){
return (new cljs.core.LazySeq(null,((function (s__7907__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860){
return (function (){
var s__7909__$1 = s__7909;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7909__$1);
if(temp__5735__auto____$1){
var s__7909__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7909__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7909__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7911 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7910 = (0);
while(true){
if((i__7910 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__7910);
cljs.core.chunk_append(b__7911,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__8183 = (i__7910 + (1));
i__7910 = G__8183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7911),chess$engine$local_engine$getall_$_piece_moves_$_iter__7906_$_iter__7908(cljs.core.chunk_rest(s__7909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7911),null);
}
} else {
var dj = cljs.core.first(s__7909__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__7906_$_iter__7908(cljs.core.rest(s__7909__$2)));
}
} else {
return null;
}
break;
}
});})(s__7907__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
,null,null));
});})(s__7907__$1,di,xs__6292__auto__,temp__5735__auto__,matchie7860))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__7906(cljs.core.rest(s__7907__$1)));
} else {
var G__8193 = cljs.core.rest(s__7907__$1);
s__7907__$1 = G__8193;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie7860)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7918){
var vec__7919 = p__7918;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7919,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7919,(1),null);
return ((function (){var fexpr__7922 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__7922.cljs$core$IFn$_invoke$arity$1 ? fexpr__7922.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__7922.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7923){
var vec__7924 = p__7923;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__7931 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__7931.cljs$core$IFn$_invoke$arity$1 ? fexpr__7931.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__7931.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7823_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__7823_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7932){
var vec__7933 = p__7932;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7933,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7933,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7933,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__7939){
var vec__7940 = p__7939;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7940,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7940,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7940,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7940,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__7943(s__7944){
return (new cljs.core.LazySeq(null,(function (){
var s__7944__$1 = s__7944;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7944__$1);
if(temp__5735__auto__){
var s__7944__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7944__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7944__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7946 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7945 = (0);
while(true){
if((i__7945 < size__4581__auto__)){
var vec__7950 = cljs.core._nth(c__4580__auto__,i__7945);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7950,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7950,(1),null);
cljs.core.chunk_append(b__7946,(function (){var iter__4582__auto__ = ((function (i__7945,vec__7950,row,i,c__4580__auto__,size__4581__auto__,b__7946,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7953(s__7954){
return (new cljs.core.LazySeq(null,((function (i__7945,vec__7950,row,i,c__4580__auto__,size__4581__auto__,b__7946,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2){
return (function (){
var s__7954__$1 = s__7954;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7954__$1);
if(temp__5735__auto____$1){
var s__7954__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7954__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__7954__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__7956 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__7955 = (0);
while(true){
if((i__7955 < size__4581__auto____$1)){
var vec__7960 = cljs.core._nth(c__4580__auto____$1,i__7955);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7960,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7960,(1),null);
cljs.core.chunk_append(b__7956,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8254 = (i__7955 + (1));
i__7955 = G__8254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7956),chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7953(cljs.core.chunk_rest(s__7954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7956),null);
}
} else {
var vec__7966 = cljs.core.first(s__7954__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7953(cljs.core.rest(s__7954__$2)));
}
} else {
return null;
}
break;
}
});})(i__7945,vec__7950,row,i,c__4580__auto__,size__4581__auto__,b__7946,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2))
,null,null));
});})(i__7945,vec__7950,row,i,c__4580__auto__,size__4581__auto__,b__7946,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__8262 = (i__7945 + (1));
i__7945 = G__8262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7946),chess$engine$local_engine$local_apply_move_$_iter__7943(cljs.core.chunk_rest(s__7944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7946),null);
}
} else {
var vec__7972 = cljs.core.first(s__7944__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7972,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7972,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__7972,row,i,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7975(s__7976){
return (new cljs.core.LazySeq(null,(function (){
var s__7976__$1 = s__7976;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7976__$1);
if(temp__5735__auto____$1){
var s__7976__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7976__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7976__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7978 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7977 = (0);
while(true){
if((i__7977 < size__4581__auto__)){
var vec__7983 = cljs.core._nth(c__4580__auto__,i__7977);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7983,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7983,(1),null);
cljs.core.chunk_append(b__7978,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__8280 = (i__7977 + (1));
i__7977 = G__8280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7978),chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7975(cljs.core.chunk_rest(s__7976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7978),null);
}
} else {
var vec__7992 = cljs.core.first(s__7976__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7992,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7992,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__7943_$_iter__7975(cljs.core.rest(s__7976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__7972,row,i,s__7944__$2,temp__5735__auto__,vec__7940,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__7943(cljs.core.rest(s__7944__$2)));
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
var matchie7996 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie7996)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie7996)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie7996)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie7996)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie7996)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie7996)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7999){
var vec__8000 = p__7999;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8000,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8000,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8000,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8003){
var vec__8004 = p__8003;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8004,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8004,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8004,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__8007 = applied_board;
var G__8008 = chess.engine.core.other_color(color);
var G__8009 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__8007,G__8008,G__8009) : chess.engine.local_engine.local_best_move.call(null,G__8007,G__8008,G__8009));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine8015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine8015 = (function (meta8016){
this.meta8016 = meta8016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8017,meta8016__$1){
var self__ = this;
var _8017__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine8015(meta8016__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8017){
var self__ = this;
var _8017__$1 = this;
return self__.meta8016;
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__8023 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8023,(0),null);
return cljs.core.not(cljs.core.some((function (p1__8013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__8013_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__8027 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8027,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8027,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8016","meta8016",-294243923,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine8015.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine8015.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine8015");

(chess.engine.local_engine.t_chess$engine$local_engine8015.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine8015");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine8015.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine8015 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine8015(meta8016){
return (new chess.engine.local_engine.t_chess$engine$local_engine8015(meta8016));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine8015(cljs.core.PersistentArrayMap.EMPTY));
})()
;
