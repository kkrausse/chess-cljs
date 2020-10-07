goog.provide('chess.components.board');

chess.components.board.find_move = (function chess$components$board$find_move(moves,move){
var vec__8702 = move;
var mfrom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8702,(0),null);
var mto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8702,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8705){
var vec__8706 = p__8705;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8706,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8706,(1),null);
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
var vec__8713 = chess.components.board.find_move(moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
var move_here = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8713,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sq,new cljs.core.Keyword(null,"tint","tint",-1286736913),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((j + cljs.core.mod(i,(2))),(2)),(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked the thing!",(move_here == null)], 0));

if((move_here == null)){
var G__8717 = (function (p1__8710_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8710_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__8717) : set_state.call(null,G__8717));
} else {
return (on_move.cljs$core$IFn$_invoke$arity$1 ? on_move.cljs$core$IFn$_invoke$arity$1(move_here) : on_move.call(null,move_here));
}
}),new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653),(!((move_here == null))),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)))),new cljs.core.Keyword(null,"piece","piece",1396691784),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))),(function (p1__8711_SHARP_){
return cljs.core.name(p1__8711_SHARP_);
})),new cljs.core.Keyword(null,"color","color",1011675173),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),(function (p1__8712_SHARP_){
return cljs.core.name(p1__8712_SHARP_);
}))], 0));
});
/**
 * {:board - a 2d array containing the board. Always white on bottom, not matter
 *          who the player is
 *  :player - 'white' or 'black' - will flip the board if black}
 */
chess.components.board.board = (function chess$components$board$board(clc__7188__auto__){
var hooked_use_state8719 = html_cljs.hooks.use_state(clc__7188__auto__);
return (function() { 
var G__8813__delegate = function (p__8720){
var map__8721 = p__8720;
var map__8721__$1 = (((((!((map__8721 == null))))?(((((map__8721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8721):map__8721);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8721__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8721__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8721__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8721__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));
var vec__8723 = hooked_use_state8719(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723,(1),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),(function (){var board_size = (0.8 * (function (){var x__4217__auto__ = window.innerWidth;
var y__4218__auto__ = window.innerHeight;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
return new cljs.core.PersistentArrayMap(null, 4, ["width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"display","inline-block","margin","5px"], null);
})()], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8726){
var vec__8727 = p__8726;
var seq__8728 = cljs.core.seq(vec__8727);
var first__8729 = cljs.core.first(seq__8728);
var seq__8728__$1 = cljs.core.next(seq__8728);
var c__7208__auto__ = first__8729;
var _ = seq__8728__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),(function (){var iter__4529__auto__ = (function chess$components$board$board_$_iter__8730(s__8731){
return (new cljs.core.LazySeq(null,(function (){
var s__8731__$1 = s__8731;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8731__$1);
if(temp__5735__auto__){
var s__8731__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8731__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8731__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8733 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8732 = (0);
while(true){
if((i__8732 < size__4528__auto__)){
var vec__8734 = cljs.core._nth(c__4527__auto__,i__8732);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734,(1),null);
cljs.core.chunk_append(b__8733,(new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)));

var G__8834 = (i__8732 + (1));
i__8732 = G__8834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8733),chess$components$board$board_$_iter__8730(cljs.core.chunk_rest(s__8731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8733),null);
}
} else {
var vec__8737 = cljs.core.first(s__8731__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737,(1),null);
return cljs.core.cons((new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),chess$components$board$board_$_iter__8730(cljs.core.rest(s__8731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(function (){var iter__4529__auto__ = (function chess$components$board$board_$_iter__8740(s__8741){
return (new cljs.core.LazySeq(null,(function (){
var s__8741__$1 = s__8741;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8741__$1);
if(temp__5735__auto__){
var s__8741__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8741__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8741__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8743 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8742 = (0);
while(true){
if((i__8742 < size__4528__auto__)){
var vec__8744 = cljs.core._nth(c__4527__auto__,i__8742);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8744,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8744,(1),null);
cljs.core.chunk_append(b__8743,(new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)));

var G__8847 = (i__8742 + (1));
i__8742 = G__8847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8743),chess$components$board$board_$_iter__8740(cljs.core.chunk_rest(s__8741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8743),null);
}
} else {
var vec__8747 = cljs.core.first(s__8741__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8747,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8747,(1),null);
return cljs.core.cons((new cljs.core.List(null,chess.components.board.board_row,(new cljs.core.List(null,row,(new cljs.core.List(null,i,(new cljs.core.List(null,state,(new cljs.core.List(null,set_state,(new cljs.core.List(null,moves,(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),chess$components$board$board_$_iter__8740(cljs.core.rest(s__8741__$2)));
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
var G__8813 = function (var_args){
var p__8720 = null;
if (arguments.length > 0) {
var G__8856__i = 0, G__8856__a = new Array(arguments.length -  0);
while (G__8856__i < G__8856__a.length) {G__8856__a[G__8856__i] = arguments[G__8856__i + 0]; ++G__8856__i;}
  p__8720 = new cljs.core.IndexedSeq(G__8856__a,0,null);
} 
return G__8813__delegate.call(this,p__8720);};
G__8813.cljs$lang$maxFixedArity = 0;
G__8813.cljs$lang$applyTo = (function (arglist__8858){
var p__8720 = cljs.core.seq(arglist__8858);
return G__8813__delegate(p__8720);
});
G__8813.cljs$core$IFn$_invoke$arity$variadic = G__8813__delegate;
return G__8813;
})()
;
});
chess.components.board.board_row = (function chess$components$board$board_row(clc__7188__auto__){
return (function (row,i,state,set_state,moves,on_move){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8750){
var vec__8751 = p__8750;
var seq__8752 = cljs.core.seq(vec__8751);
var first__8753 = cljs.core.first(seq__8752);
var seq__8752__$1 = cljs.core.next(seq__8752);
var c__7208__auto__ = first__8753;
var _ = seq__8752__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),(function (){var iter__4529__auto__ = (function chess$components$board$board_row_$_iter__8754(s__8755){
return (new cljs.core.LazySeq(null,(function (){
var s__8755__$1 = s__8755;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8755__$1);
if(temp__5735__auto__){
var s__8755__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8755__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8755__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8757 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8756 = (0);
while(true){
if((i__8756 < size__4528__auto__)){
var vec__8758 = cljs.core._nth(c__4527__auto__,i__8756);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758,(1),null);
cljs.core.chunk_append(b__8757,cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))));

var G__8893 = (i__8756 + (1));
i__8756 = G__8893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8757),chess$components$board$board_row_$_iter__8754(cljs.core.chunk_rest(s__8755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8757),null);
}
} else {
var vec__8761 = cljs.core.first(s__8755__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(1),null);
return cljs.core.cons(cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))),chess$components$board$board_row_$_iter__8754(cljs.core.rest(s__8755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(function (){var iter__4529__auto__ = (function chess$components$board$board_row_$_iter__8764(s__8765){
return (new cljs.core.LazySeq(null,(function (){
var s__8765__$1 = s__8765;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8765__$1);
if(temp__5735__auto__){
var s__8765__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8765__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8765__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8767 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8766 = (0);
while(true){
if((i__8766 < size__4528__auto__)){
var vec__8768 = cljs.core._nth(c__4527__auto__,i__8766);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8768,(1),null);
cljs.core.chunk_append(b__8767,cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))));

var G__8913 = (i__8766 + (1));
i__8766 = G__8913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8767),chess$components$board$board_row_$_iter__8764(cljs.core.chunk_rest(s__8765__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8767),null);
}
} else {
var vec__8771 = cljs.core.first(s__8765__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(1),null);
return cljs.core.cons(cljs.core.cons(chess.components.board.square,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chess.components.board.uiify(sq,i,j,(state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null)),set_state,moves,on_move)], 0))),chess$components$board$board_row_$_iter__8764(cljs.core.rest(s__8765__$2)));
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
chess.components.board.square = (function chess$components$board$square(clc__7188__auto__){
return (function() { 
var G__8922__delegate = function (p__8774){
var map__8775 = p__8774;
var map__8775__$1 = (((((!((map__8775 == null))))?(((((map__8775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8775):map__8775);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var can_move_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653));
var tint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"tint","tint",-1286736913));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["float","left","width","15%","background",(cljs.core.truth_(selected)?"#40aad4":(cljs.core.truth_(can_move_to)?"#4ae896":(cljs.core.truth_(tint)?"#d4cebc":"#fff"
))),"border",(cljs.core.truth_(can_move_to)?"1px dotted #40aad4":"1px solid #999")], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, ["click",(function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
})], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8777){
var vec__8778 = p__8777;
var seq__8779 = cljs.core.seq(vec__8778);
var first__8780 = cljs.core.first(seq__8779);
var seq__8779__$1 = cljs.core.next(seq__8779);
var c__7208__auto__ = first__8780;
var _ = seq__8779__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),(((!((piece == null))))?(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7188__auto____$1){
return (function (piece__$1,color__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["width","90%"], null),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.PersistentArrayMap(null, 1, ["src",chess.utils.asset_path(["/pieces/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color__$1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece__$1),".svg"].join(''))], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8781){
var vec__8782 = p__8781;
var seq__8783 = cljs.core.seq(vec__8782);
var first__8784 = cljs.core.first(seq__8783);
var seq__8783__$1 = cljs.core.next(seq__8783);
var c__7208__auto__ = first__8784;
var _ = seq__8783__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,piece,(new cljs.core.List(null,color,null,(1),null)),(2),null)),(3),null)),null,(1),null)):null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(((!((piece == null))))?(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7188__auto____$1){
return (function (piece__$1,color__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["width","90%"], null),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.PersistentArrayMap(null, 1, ["src",chess.utils.asset_path(["/pieces/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color__$1),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece__$1),".svg"].join(''))], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8785){
var vec__8787 = p__8785;
var seq__8788 = cljs.core.seq(vec__8787);
var first__8790 = cljs.core.first(seq__8788);
var seq__8788__$1 = cljs.core.next(seq__8788);
var c__7208__auto__ = first__8790;
var _ = seq__8788__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,piece,(new cljs.core.List(null,color,null,(1),null)),(2),null)),(3),null)),null,(1),null)):null)))));
};
var G__8922 = function (var_args){
var p__8774 = null;
if (arguments.length > 0) {
var G__8972__i = 0, G__8972__a = new Array(arguments.length -  0);
while (G__8972__i < G__8972__a.length) {G__8972__a[G__8972__i] = arguments[G__8972__i + 0]; ++G__8972__i;}
  p__8774 = new cljs.core.IndexedSeq(G__8972__a,0,null);
} 
return G__8922__delegate.call(this,p__8774);};
G__8922.cljs$lang$maxFixedArity = 0;
G__8922.cljs$lang$applyTo = (function (arglist__8973){
var p__8774 = cljs.core.seq(arglist__8973);
return G__8922__delegate(p__8774);
});
G__8922.cljs$core$IFn$_invoke$arity$variadic = G__8922__delegate;
return G__8922;
})()
;
});

//# sourceMappingURL=chess.components.board.js.map
