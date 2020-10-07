goog.provide('chess.components.board');

chess.components.board.find_move = (function chess$components$board$find_move(moves,move){
var vec__8665 = move;
var mfrom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8665,(0),null);
var mto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8665,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8669){
var vec__8671 = p__8669;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8671,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8671,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,mfrom)){
if((mto == null)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,mto);
}
} else {
return false;
}
}),moves);
});
chess.components.board.uiify = (function chess$components$board$uiify(sq,i,j,state,set_state,moves,on_move){
var vec__8690 = chess.components.board.find_move(moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
var move_here = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8690,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sq,new cljs.core.Keyword(null,"tint","tint",-1286736913),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((j + cljs.core.mod(i,(2))),(2)),(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked the thing!",(move_here == null)], 0));

if((move_here == null)){
var G__8702 = (function (p1__8681_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8681_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__8702) : set_state.call(null,G__8702));
} else {
return (on_move.cljs$core$IFn$_invoke$arity$1 ? on_move.cljs$core$IFn$_invoke$arity$1(move_here) : on_move.call(null,move_here));
}
}),new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653),(!((move_here == null))),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)))),new cljs.core.Keyword(null,"piece","piece",1396691784),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))),(function (p1__8687_SHARP_){
return cljs.core.name(p1__8687_SHARP_);
})),new cljs.core.Keyword(null,"color","color",1011675173),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),(function (p1__8688_SHARP_){
return cljs.core.name(p1__8688_SHARP_);
}))], 0));
});
/**
 * {:board - a 2d array containing the board. Always white on bottom, not matter
 *          who the player is
 *  :player - 'white' or 'black' - will flip the board if black}
 */
chess.components.board.board = (function chess$components$board$board(clc__7133__auto__){
var hooked_use_state8713 = html_cljs.hooks.use_state(clc__7133__auto__);
return (function() { 
var G__8914__delegate = function (p__8721){
var map__8722 = p__8721;
var map__8722__$1 = (((((!((map__8722 == null))))?(((((map__8722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8722):map__8722);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8722__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8722__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8722__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8722__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));
var vec__8762 = hooked_use_state8713(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8762,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8762,(1),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),(function (){var board_size = (0.8 * (function (){var x__4217__auto__ = window.innerWidth;
var y__4218__auto__ = window.innerHeight;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
return new cljs.core.PersistentArrayMap(null, 4, ["width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"display","inline-block","margin","5px"], null);
})()], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8776){
var vec__8777 = p__8776;
var seq__8778 = cljs.core.seq(vec__8777);
var first__8779 = cljs.core.first(seq__8778);
var seq__8778__$1 = cljs.core.next(seq__8778);
var c__7153__auto__ = first__8779;
var _ = seq__8778__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),(function (){var iter__4529__auto__ = (function chess$components$board$board_$_iter__8785(s__8786){
return (new cljs.core.LazySeq(null,(function (){
var s__8786__$1 = s__8786;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8786__$1);
if(temp__5735__auto__){
var s__8786__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8786__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8786__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8788 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8787 = (0);
while(true){
if((i__8787 < size__4528__auto__)){
var vec__8794 = cljs.core._nth(c__4527__auto__,i__8787);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8794,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8794,(1),null);
cljs.core.chunk_append(b__8788,(new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)));

var G__8934 = (i__8787 + (1));
i__8787 = G__8934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8788),chess$components$board$board_$_iter__8785(cljs.core.chunk_rest(s__8786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8788),null);
}
} else {
var vec__8797 = cljs.core.first(s__8786__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8797,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8797,(1),null);
return cljs.core.cons((new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),chess$components$board$board_$_iter__8785(cljs.core.rest(s__8786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(function (){var iter__4529__auto__ = (function chess$components$board$board_$_iter__8800(s__8801){
return (new cljs.core.LazySeq(null,(function (){
var s__8801__$1 = s__8801;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8801__$1);
if(temp__5735__auto__){
var s__8801__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8801__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8801__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8803 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8802 = (0);
while(true){
if((i__8802 < size__4528__auto__)){
var vec__8804 = cljs.core._nth(c__4527__auto__,i__8802);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8804,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8804,(1),null);
cljs.core.chunk_append(b__8803,(new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)));

var G__8948 = (i__8802 + (1));
i__8802 = G__8948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8803),chess$components$board$board_$_iter__8800(cljs.core.chunk_rest(s__8801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8803),null);
}
} else {
var vec__8807 = cljs.core.first(s__8801__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8807,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8807,(1),null);
return cljs.core.cons((new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),chess$components$board$board_$_iter__8800(cljs.core.rest(s__8801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()))));
};
var G__8914 = function (var_args){
var p__8721 = null;
if (arguments.length > 0) {
var G__8960__i = 0, G__8960__a = new Array(arguments.length -  0);
while (G__8960__i < G__8960__a.length) {G__8960__a[G__8960__i] = arguments[G__8960__i + 0]; ++G__8960__i;}
  p__8721 = new cljs.core.IndexedSeq(G__8960__a,0,null);
} 
return G__8914__delegate.call(this,p__8721);};
G__8914.cljs$lang$maxFixedArity = 0;
G__8914.cljs$lang$applyTo = (function (arglist__8962){
var p__8721 = cljs.core.seq(arglist__8962);
return G__8914__delegate(p__8721);
});
G__8914.cljs$core$IFn$_invoke$arity$variadic = G__8914__delegate;
return G__8914;
})()
;
});
chess.components.board.board_row = (function chess$components$board$board_row(clc__7133__auto__){
return (function (row,i,state,set_state,moves,on_move){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8810){
var vec__8811 = p__8810;
var seq__8812 = cljs.core.seq(vec__8811);
var first__8813 = cljs.core.first(seq__8812);
var seq__8812__$1 = cljs.core.next(seq__8812);
var c__7153__auto__ = first__8813;
var _ = seq__8812__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),(function (){var iter__4529__auto__ = (function chess$components$board$board_row_$_iter__8814(s__8815){
return (new cljs.core.LazySeq(null,(function (){
var s__8815__$1 = s__8815;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8815__$1);
if(temp__5735__auto__){
var s__8815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8815__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8815__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8817 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8816 = (0);
while(true){
if((i__8816 < size__4528__auto__)){
var vec__8818 = cljs.core._nth(c__4527__auto__,i__8816);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8818,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8818,(1),null);
cljs.core.chunk_append(b__8817,cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))));

var G__8977 = (i__8816 + (1));
i__8816 = G__8977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8817),chess$components$board$board_row_$_iter__8814(cljs.core.chunk_rest(s__8815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8817),null);
}
} else {
var vec__8821 = cljs.core.first(s__8815__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8821,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8821,(1),null);
return cljs.core.cons(cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))),chess$components$board$board_row_$_iter__8814(cljs.core.rest(s__8815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(function (){var iter__4529__auto__ = (function chess$components$board$board_row_$_iter__8830(s__8831){
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
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8835,(1),null);
cljs.core.chunk_append(b__8833,cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))));

var G__8995 = (i__8832 + (1));
i__8832 = G__8995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),chess$components$board$board_row_$_iter__8830(cljs.core.chunk_rest(s__8831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8833),null);
}
} else {
var vec__8843 = cljs.core.first(s__8831__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8843,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8843,(1),null);
return cljs.core.cons(cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))),chess$components$board$board_row_$_iter__8830(cljs.core.rest(s__8831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()))));
});
});
/**
 * props are:
 *   :peice [none|rook|pawn|...]
 *   :tint [true|false]
 *   :color [white|black]
 */
chess.components.board.square = (function chess$components$board$square(clc__7133__auto__){
return (function() { 
var G__8999__delegate = function (p__8853){
var map__8855 = p__8853;
var map__8855__$1 = (((((!((map__8855 == null))))?(((((map__8855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8855):map__8855);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var can_move_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653));
var tint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"tint","tint",-1286736913));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["float","left","width","15%","background",(cljs.core.truth_(selected)?"#40aad4":(cljs.core.truth_(can_move_to)?"#4ae896":(cljs.core.truth_(tint)?"#d4cebc":"#fff"
))),"border",(cljs.core.truth_(can_move_to)?"1px dotted #40aad4":"1px solid #999")], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, ["click",(function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
})], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8864){
var vec__8866 = p__8864;
var seq__8867 = cljs.core.seq(vec__8866);
var first__8868 = cljs.core.first(seq__8867);
var seq__8867__$1 = cljs.core.next(seq__8867);
var c__7153__auto__ = first__8868;
var _ = seq__8867__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),(((!((piece == null))))?(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7133__auto____$1){
return (function (piece__$1,color__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["width","90%"], null),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.PersistentArrayMap(null, 1, ["src",["./pieces/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color__$1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece__$1),".svg"].join('')], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8876){
var vec__8878 = p__8876;
var seq__8879 = cljs.core.seq(vec__8878);
var first__8880 = cljs.core.first(seq__8879);
var seq__8879__$1 = cljs.core.next(seq__8879);
var c__7153__auto__ = first__8880;
var _ = seq__8879__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,piece,(new cljs.core.List(null,color,null,(1),null)),(2),null)),(3),null)),null,(1),null)):null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(((!((piece == null))))?(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7133__auto____$1){
return (function (piece__$1,color__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["width","90%"], null),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.PersistentArrayMap(null, 1, ["src",["./pieces/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color__$1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece__$1),".svg"].join('')], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8888){
var vec__8891 = p__8888;
var seq__8892 = cljs.core.seq(vec__8891);
var first__8893 = cljs.core.first(seq__8892);
var seq__8892__$1 = cljs.core.next(seq__8892);
var c__7153__auto__ = first__8893;
var _ = seq__8892__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,piece,(new cljs.core.List(null,color,null,(1),null)),(2),null)),(3),null)),null,(1),null)):null)))));
};
var G__8999 = function (var_args){
var p__8853 = null;
if (arguments.length > 0) {
var G__9018__i = 0, G__9018__a = new Array(arguments.length -  0);
while (G__9018__i < G__9018__a.length) {G__9018__a[G__9018__i] = arguments[G__9018__i + 0]; ++G__9018__i;}
  p__8853 = new cljs.core.IndexedSeq(G__9018__a,0,null);
} 
return G__8999__delegate.call(this,p__8853);};
G__8999.cljs$lang$maxFixedArity = 0;
G__8999.cljs$lang$applyTo = (function (arglist__9020){
var p__8853 = cljs.core.seq(arglist__9020);
return G__8999__delegate(p__8853);
});
G__8999.cljs$core$IFn$_invoke$arity$variadic = G__8999__delegate;
return G__8999;
})()
;
});

//# sourceMappingURL=chess.components.board.js.map
