goog.provide('chess.engine.local_engine');
goog.require('cljs.core');
goog.require('html_cljs.hooks');
goog.require('html_cljs.html');
goog.require('chess.engine.core');
goog.require('chess.utils');
chess.engine.local_engine.piece_seq = (function chess$engine$local_engine$piece_seq(board){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function chess$engine$local_engine$piece_seq_$_iter__38036(s__38037){
return (new cljs.core.LazySeq(null,(function (){
var s__38037__$1 = s__38037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38037__$1);
if(temp__5735__auto__){
var s__38037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38037__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38037__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38039 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38038 = (0);
while(true){
if((i__38038 < size__4581__auto__)){
var vec__38040 = cljs.core._nth(c__4580__auto__,i__38038);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(1),null);
cljs.core.chunk_append(b__38039,(function (){var iter__4582__auto__ = ((function (i__38038,vec__38040,row,i,c__4580__auto__,size__4581__auto__,b__38039,s__38037__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38043(s__38044){
return (new cljs.core.LazySeq(null,((function (i__38038,vec__38040,row,i,c__4580__auto__,size__4581__auto__,b__38039,s__38037__$2,temp__5735__auto__){
return (function (){
var s__38044__$1 = s__38044;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38044__$1);
if(temp__5735__auto____$1){
var s__38044__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38044__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38044__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38046 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38045 = (0);
while(true){
if((i__38045 < size__4581__auto____$1)){
var vec__38047 = cljs.core._nth(c__4580__auto____$1,i__38045);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(1),null);
cljs.core.chunk_append(b__38046,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__38222 = (i__38045 + (1));
i__38045 = G__38222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38046),chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38043(cljs.core.chunk_rest(s__38044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38046),null);
}
} else {
var vec__38050 = cljs.core.first(s__38044__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38043(cljs.core.rest(s__38044__$2)));
}
} else {
return null;
}
break;
}
});})(i__38038,vec__38040,row,i,c__4580__auto__,size__4581__auto__,b__38039,s__38037__$2,temp__5735__auto__))
,null,null));
});})(i__38038,vec__38040,row,i,c__4580__auto__,size__4581__auto__,b__38039,s__38037__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__38224 = (i__38038 + (1));
i__38038 = G__38224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),chess$engine$local_engine$piece_seq_$_iter__38036(cljs.core.chunk_rest(s__38037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),null);
}
} else {
var vec__38053 = cljs.core.first(s__38037__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__38053,row,i,s__38037__$2,temp__5735__auto__){
return (function chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38056(s__38057){
return (new cljs.core.LazySeq(null,(function (){
var s__38057__$1 = s__38057;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38057__$1);
if(temp__5735__auto____$1){
var s__38057__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38058 = (0);
while(true){
if((i__38058 < size__4581__auto__)){
var vec__38060 = cljs.core._nth(c__4580__auto__,i__38058);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38060,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38060,(1),null);
cljs.core.chunk_append(b__38059,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null));

var G__38225 = (i__38058 + (1));
i__38058 = G__38225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38059),chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38056(cljs.core.chunk_rest(s__38057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38059),null);
}
} else {
var vec__38063 = cljs.core.first(s__38057__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38063,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38063,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,sq], null),chess$engine$local_engine$piece_seq_$_iter__38036_$_iter__38056(cljs.core.rest(s__38057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__38053,row,i,s__38037__$2,temp__5735__auto__))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$piece_seq_$_iter__38036(cljs.core.rest(s__38037__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38068){
var vec__38069 = p__38068;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38072){
var vec__38073 = p__38072;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38073,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38073,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38073,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38066_SHARP_,p2__38067_SHARP_){
var and__4174__auto__ = p1__38066_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__38067_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$find_piece_$_iter__38076(s__38077){
return (new cljs.core.LazySeq(null,(function (){
var s__38077__$1 = s__38077;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38077__$1);
if(temp__5735__auto__){
var s__38077__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38077__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38077__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38079 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38078 = (0);
while(true){
if((i__38078 < size__4581__auto__)){
var vec__38080 = cljs.core._nth(c__4580__auto__,i__38078);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(1),null);
cljs.core.chunk_append(b__38079,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))));

var G__38235 = (i__38078 + (1));
i__38078 = G__38235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38079),chess$engine$local_engine$find_piece_$_iter__38076(cljs.core.chunk_rest(s__38077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38079),null);
}
} else {
var vec__38083 = cljs.core.first(s__38077__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(k) : sq.call(null,k))),chess$engine$local_engine$find_piece_$_iter__38076(cljs.core.rest(s__38077__$2)));
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
var matchie38086 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"white","white",-483998618),matchie38086)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"black","black",1294279647),matchie38086)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__38092 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__38092.cljs$core$IFn$_invoke$arity$1 ? fexpr__38092.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__38092.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)){
return sofar;
} else {
if((!(((function (){var fexpr__38093 = chess.engine.local_engine.piece_at(board__$1,ci,cj);
return (fexpr__38093.cljs$core$IFn$_invoke$arity$1 ? fexpr__38093.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__38093.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
} else {
var G__38241 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ci,cj], null),sofar);
var G__38242 = (ci + di);
var G__38243 = (cj + dj);
sofar = G__38241;
ci = G__38242;
cj = G__38243;
continue;

}
}
}
break;
}
});

chess.engine.local_engine.can_place = (function chess$engine$local_engine$getall_$_can_place(board__$1,i,j,color__$1){
return (((!((((i >= (8))) || ((j >= (8))) || ((i < (0))) || ((j < (0))))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__38095 = chess.engine.local_engine.piece_at(board__$1,i,j);
return (fexpr__38095.cljs$core$IFn$_invoke$arity$1 ? fexpr__38095.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__38095.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
})(),color__$1)))));
});

chess.engine.local_engine.castle_moves = (function chess$engine$local_engine$getall_$_castle_moves(board__$1,color__$1){
var vec__38096 = chess.engine.local_engine.find_piece(board__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null));
var vec__38099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38096,(0),null);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38099,(0),null);
var kj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38099,(1),null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__38102){
var vec__38103 = p__38102;
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(0),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"moved","moved",486549219).cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.piece_at(board__$1,ri,rj)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38087_SHARP_,p2__38088_SHARP_){
var and__4174__auto__ = p1__38087_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return p2__38088_SHARP_;
} else {
return and__4174__auto__;
}
}),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_castle_moves_$_iter__38106(s__38107){
return (new cljs.core.LazySeq(null,(function (){
var s__38107__$1 = s__38107;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38107__$1);
if(temp__5735__auto__){
var s__38107__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38107__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38107__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38109 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38108 = (0);
while(true){
if((i__38108 < size__4581__auto__)){
var vec__38110 = cljs.core._nth(c__4580__auto__,i__38108);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(1),null);
cljs.core.chunk_append(b__38109,((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))));

var G__38275 = (i__38108 + (1));
i__38108 = G__38275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38109),chess$engine$local_engine$getall_$_castle_moves_$_iter__38106(cljs.core.chunk_rest(s__38107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38109),null);
}
} else {
var vec__38113 = cljs.core.first(s__38107__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(1),null);
return cljs.core.cons(((chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"white","white",-483998618))) && (chess.engine.local_engine.can_place(board__$1,i,j,new cljs.core.Keyword(null,"black","black",1294279647)))),chess$engine$local_engine$getall_$_castle_moves_$_iter__38106(cljs.core.rest(s__38107__$2)));
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
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38116){
var vec__38117 = p__38116;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38117,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38117,(1),null);
return chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),(function (){var matchie38120 = (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie38120)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(chess.engine.local_engine.on_line(board__$1,i,j,(1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(-1),(0),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.on_line(board__$1,i,j,(0),(1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess.engine.local_engine.on_line(board__$1,i,j,(0),(-1),(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie38120)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38121(s__38122){
return (new cljs.core.LazySeq(null,(function (){
var s__38122__$1 = s__38122;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38122__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38122__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38121_$_iter__38123(s__38124){
return (new cljs.core.LazySeq(null,((function (s__38122__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function (){
var s__38124__$1 = s__38124;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38124__$1);
if(temp__5735__auto____$1){
var s__38124__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38124__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38124__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38126 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38125 = (0);
while(true){
if((i__38125 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__38125);
cljs.core.chunk_append(b__38126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__38281 = (i__38125 + (1));
i__38125 = G__38281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38126),chess$engine$local_engine$getall_$_piece_moves_$_iter__38121_$_iter__38123(cljs.core.chunk_rest(s__38124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38126),null);
}
} else {
var dj = cljs.core.first(s__38124__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__38121_$_iter__38123(cljs.core.rest(s__38124__$2)));
}
} else {
return null;
}
break;
}
});})(s__38122__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
,null,null));
});})(s__38122__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__38121(cljs.core.rest(s__38122__$1)));
} else {
var G__38284 = cljs.core.rest(s__38122__$1);
s__38122__$1 = G__38284;
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
})(),(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38127(s__38128){
return (new cljs.core.LazySeq(null,(function (){
var s__38128__$1 = s__38128;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38128__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38128__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38127_$_iter__38129(s__38130){
return (new cljs.core.LazySeq(null,((function (s__38128__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function (){
var s__38130__$1 = s__38130;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38130__$1);
if(temp__5735__auto____$1){
var s__38130__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38130__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38130__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38132 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38131 = (0);
while(true){
if((i__38131 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__38131);
cljs.core.chunk_append(b__38132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__38285 = (i__38131 + (1));
i__38131 = G__38285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38132),chess$engine$local_engine$getall_$_piece_moves_$_iter__38127_$_iter__38129(cljs.core.chunk_rest(s__38130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38132),null);
}
} else {
var dj = cljs.core.first(s__38130__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__38127_$_iter__38129(cljs.core.rest(s__38130__$2)));
}
} else {
return null;
}
break;
}
});})(s__38128__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
,null,null));
});})(s__38128__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__38127(cljs.core.rest(s__38128__$1)));
} else {
var G__38286 = cljs.core.rest(s__38128__$1);
s__38128__$1 = G__38286;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie38120)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38133(s__38134){
return (new cljs.core.LazySeq(null,(function (){
var s__38134__$1 = s__38134;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38134__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38134__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38133_$_iter__38135(s__38136){
return (new cljs.core.LazySeq(null,((function (s__38134__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function (){
var s__38136__$1 = s__38136;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38136__$1);
if(temp__5735__auto____$1){
var s__38136__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38136__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38136__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38138 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38137 = (0);
while(true){
if((i__38137 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__38137);
cljs.core.chunk_append(b__38138,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__38289 = (i__38137 + (1));
i__38137 = G__38289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38138),chess$engine$local_engine$getall_$_piece_moves_$_iter__38133_$_iter__38135(cljs.core.chunk_rest(s__38136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38138),null);
}
} else {
var dj = cljs.core.first(s__38136__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__38133_$_iter__38135(cljs.core.rest(s__38136__$2)));
}
} else {
return null;
}
break;
}
});})(s__38134__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
,null,null));
});})(s__38134__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__38133(cljs.core.rest(s__38134__$1)));
} else {
var G__38290 = cljs.core.rest(s__38134__$1);
s__38134__$1 = G__38290;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie38120)){
var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38139(s__38140){
return (new cljs.core.LazySeq(null,(function (){
var s__38140__$1 = s__38140;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38140__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38140__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38139_$_iter__38141(s__38142){
return (new cljs.core.LazySeq(null,((function (s__38140__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function (){
var s__38142__$1 = s__38142;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38142__$1);
if(temp__5735__auto____$1){
var s__38142__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38142__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38142__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38144 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38143 = (0);
while(true){
if((i__38143 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__38143);
cljs.core.chunk_append(b__38144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null));

var G__38291 = (i__38143 + (1));
i__38143 = G__38291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38144),chess$engine$local_engine$getall_$_piece_moves_$_iter__38139_$_iter__38141(cljs.core.chunk_rest(s__38142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38144),null);
}
} else {
var dj = cljs.core.first(s__38142__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + di),(j + dj)], null),chess$engine$local_engine$getall_$_piece_moves_$_iter__38139_$_iter__38141(cljs.core.rest(s__38142__$2)));
}
} else {
return null;
}
break;
}
});})(s__38140__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
,null,null));
});})(s__38140__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__38139(cljs.core.rest(s__38140__$1)));
} else {
var G__38292 = cljs.core.rest(s__38140__$1);
s__38140__$1 = G__38292;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie38120)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38145(s__38146){
return (new cljs.core.LazySeq(null,(function (){
var s__38146__$1 = s__38146;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38146__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var di = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38146__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function chess$engine$local_engine$getall_$_piece_moves_$_iter__38145_$_iter__38147(s__38148){
return (new cljs.core.LazySeq(null,((function (s__38146__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120){
return (function (){
var s__38148__$1 = s__38148;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38148__$1);
if(temp__5735__auto____$1){
var s__38148__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38148__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38148__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38150 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38149 = (0);
while(true){
if((i__38149 < size__4581__auto__)){
var dj = cljs.core._nth(c__4580__auto__,i__38149);
cljs.core.chunk_append(b__38150,chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))));

var G__38293 = (i__38149 + (1));
i__38149 = G__38293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38150),chess$engine$local_engine$getall_$_piece_moves_$_iter__38145_$_iter__38147(cljs.core.chunk_rest(s__38148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38150),null);
}
} else {
var dj = cljs.core.first(s__38148__$2);
return cljs.core.cons(chess.engine.local_engine.on_line(board__$1,i,j,di,dj,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),chess$engine$local_engine$getall_$_piece_moves_$_iter__38145_$_iter__38147(cljs.core.rest(s__38148__$2)));
}
} else {
return null;
}
break;
}
});})(s__38146__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
,null,null));
});})(s__38146__$1,di,xs__6292__auto__,temp__5735__auto__,matchie38120))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,chess$engine$local_engine$getall_$_piece_moves_$_iter__38145(cljs.core.rest(s__38146__$1)));
} else {
var G__38294 = cljs.core.rest(s__38146__$1);
s__38146__$1 = G__38294;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie38120)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38151){
var vec__38152 = p__38151;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(1),null);
return ((function (){var fexpr__38155 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__38155.cljs$core$IFn$_invoke$arity$1 ? fexpr__38155.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : fexpr__38155.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)));
})() == null);
}),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + chess.engine.local_engine.color_dir(sq)),j], null),(cljs.core.truth_((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moved","moved",486549219)) : sq.call(null,new cljs.core.Keyword(null,"moved","moved",486549219))))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + ((2) * chess.engine.local_engine.color_dir(sq))),j], null)], null)))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38156){
var vec__38157 = p__38156;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(0),null);
var j__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(1),null);
return ((chess.engine.local_engine.can_place(board__$1,i__$1,j__$1,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__38161 = chess.engine.local_engine.piece_at(board__$1,i__$1,j__$1);
return (fexpr__38161.cljs$core$IFn$_invoke$arity$1 ? fexpr__38161.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : fexpr__38161.call(null,new cljs.core.Keyword(null,"color","color",1011675173)));
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

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(chess.engine.local_engine.castle_moves(board,color),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38089_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_moves,cljs.core.cons(board,p1__38089_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38162){
var vec__38163 = p__38162;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))));
}),chess.engine.local_engine.piece_seq(board))))], 0));
});
chess.engine.local_engine.local_apply_move = (function chess$engine$local_engine$local_apply_move(board,p__38166){
var vec__38167 = p__38166;
var from1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(1),null);
var from2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(2),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(3),null);
var iter__4582__auto__ = (function chess$engine$local_engine$local_apply_move_$_iter__38170(s__38171){
return (new cljs.core.LazySeq(null,(function (){
var s__38171__$1 = s__38171;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38171__$1);
if(temp__5735__auto__){
var s__38171__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38171__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38171__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38173 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38172 = (0);
while(true){
if((i__38172 < size__4581__auto__)){
var vec__38174 = cljs.core._nth(c__4580__auto__,i__38172);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38174,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38174,(1),null);
cljs.core.chunk_append(b__38173,(function (){var iter__4582__auto__ = ((function (i__38172,vec__38174,row,i,c__4580__auto__,size__4581__auto__,b__38173,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38177(s__38178){
return (new cljs.core.LazySeq(null,((function (i__38172,vec__38174,row,i,c__4580__auto__,size__4581__auto__,b__38173,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2){
return (function (){
var s__38178__$1 = s__38178;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38178__$1);
if(temp__5735__auto____$1){
var s__38178__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38178__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38178__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38180 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38179 = (0);
while(true){
if((i__38179 < size__4581__auto____$1)){
var vec__38181 = cljs.core._nth(c__4580__auto____$1,i__38179);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(1),null);
cljs.core.chunk_append(b__38180,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__38295 = (i__38179 + (1));
i__38179 = G__38295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38180),chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38177(cljs.core.chunk_rest(s__38178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38180),null);
}
} else {
var vec__38184 = cljs.core.first(s__38178__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38177(cljs.core.rest(s__38178__$2)));
}
} else {
return null;
}
break;
}
});})(i__38172,vec__38174,row,i,c__4580__auto__,size__4581__auto__,b__38173,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2))
,null,null));
});})(i__38172,vec__38174,row,i,c__4580__auto__,size__4581__auto__,b__38173,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})());

var G__38296 = (i__38172 + (1));
i__38172 = G__38296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38173),chess$engine$local_engine$local_apply_move_$_iter__38170(cljs.core.chunk_rest(s__38171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38173),null);
}
} else {
var vec__38187 = cljs.core.first(s__38171__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(1),null);
return cljs.core.cons((function (){var iter__4582__auto__ = ((function (vec__38187,row,i,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2){
return (function chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38190(s__38191){
return (new cljs.core.LazySeq(null,(function (){
var s__38191__$1 = s__38191;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38191__$1);
if(temp__5735__auto____$1){
var s__38191__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38191__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38191__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38193 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38192 = (0);
while(true){
if((i__38192 < size__4581__auto__)){
var vec__38194 = cljs.core._nth(c__4580__auto__,i__38192);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(1),null);
cljs.core.chunk_append(b__38193,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))));

var G__38297 = (i__38192 + (1));
i__38192 = G__38297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38193),chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38190(cljs.core.chunk_rest(s__38191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38193),null);
}
} else {
var vec__38197 = cljs.core.first(s__38191__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(1),null);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from1)),new cljs.core.Keyword(null,"moved","moved",486549219),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,from2)),new cljs.core.Keyword(null,"moved","moved",486549219),true):sq
))),chess$engine$local_engine$local_apply_move_$_iter__38170_$_iter__38190(cljs.core.rest(s__38191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__38187,row,i,s__38171__$2,temp__5735__auto__,vec__38167,from1,to1,from2,to2))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})(),chess$engine$local_engine$local_apply_move_$_iter__38170(cljs.core.rest(s__38171__$2)));
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
var matchie38200 = p;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rook","rook",-351034693),matchie38200)){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"knight","knight",-1883332680),matchie38200)){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bishop","bishop",230448704),matchie38200)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"king","king",-919970205),matchie38200)){
return (10000);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queen","queen",-209486329),matchie38200)){
return (9);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pawn","pawn",1463425662),matchie38200)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38201){
var vec__38202 = p__38201;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(2),null);
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,(sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?(1):(-1)) * chess.engine.local_engine.piece_value((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38205){
var vec__38206 = p__38205;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(1),null);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(2),null);
return (!(((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
}),chess.engine.local_engine.piece_seq(board))));
});

chess.engine.local_engine.move_value = (function chess$engine$local_engine$move_value(board,move,depth){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(chess.engine.local_engine.piece_at,cljs.core.cons(board,cljs.core.first(move))));
var applied_board = chess.engine.local_engine.local_apply_move(board,move);
if((depth > (0))){
return ((-1) * cljs.core.second((function (){var G__38209 = applied_board;
var G__38210 = chess.engine.core.other_color(color);
var G__38211 = (depth - (1));
return (chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3 ? chess.engine.local_engine.local_best_move.cljs$core$IFn$_invoke$arity$3(G__38209,G__38210,G__38211) : chess.engine.local_engine.local_best_move.call(null,G__38209,G__38210,G__38211));
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
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.local_engine !== 'undefined') && (typeof chess.engine.local_engine.t_chess$engine$local_engine38213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.local_engine.t_chess$engine$local_engine38213 = (function (meta38214){
this.meta38214 = meta38214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38215,meta38214__$1){
var self__ = this;
var _38215__$1 = this;
return (new chess.engine.local_engine.t_chess$engine$local_engine38213(meta38214__$1));
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38215){
var self__ = this;
var _38215__$1 = this;
return self__.meta38214;
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (this$,board,move){
var self__ = this;
var this$__$1 = this;
return chess.engine.local_engine.local_apply_move(board,move);
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (this$,board,color){
var self__ = this;
var this$__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (move){
var new_board = this$__$1.chess$engine$core$Engine$apply_move$arity$3(null,board,move);
var vec__38216 = chess.engine.local_engine.find_piece(new_board,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
var king = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38216,(0),null);
return cljs.core.not(cljs.core.some((function (p1__38212_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(king,p1__38212_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.engine.local_engine.getall(new_board,chess.engine.core.other_color(color))], 0))));
}),chess.engine.local_engine.getall(board,color));
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var vec__38219 = chess.engine.local_engine.local_best_move(board,color,(2));
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value: ",value], 0));

return move;
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38214","meta38214",1383844239,null)], null);
}));

(chess.engine.local_engine.t_chess$engine$local_engine38213.cljs$lang$type = true);

(chess.engine.local_engine.t_chess$engine$local_engine38213.cljs$lang$ctorStr = "chess.engine.local-engine/t_chess$engine$local_engine38213");

(chess.engine.local_engine.t_chess$engine$local_engine38213.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.local-engine/t_chess$engine$local_engine38213");
}));

/**
 * Positional factory function for chess.engine.local-engine/t_chess$engine$local_engine38213.
 */
chess.engine.local_engine.__GT_t_chess$engine$local_engine38213 = (function chess$engine$local_engine$__GT_t_chess$engine$local_engine38213(meta38214){
return (new chess.engine.local_engine.t_chess$engine$local_engine38213(meta38214));
});

}

return (new chess.engine.local_engine.t_chess$engine$local_engine38213(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.local_engine.js.map
