goog.provide('chess.components.board');
goog.require('cljs.core');
goog.require('chess.components.square');
goog.require('html_cljs.hooks');
goog.require('chess.utils');
goog.require('html_cljs.html');
chess.components.board.find_move = (function chess$components$board$find_move(moves,move){
var vec__7450 = move;
var mfrom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7450,(0),null);
var mto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7450,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7455){
var vec__7457 = p__7455;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7457,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7457,(1),null);
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
var vec__7488 = chess.components.board.find_move(moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
var move_here = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7488,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sq,new cljs.core.Keyword(null,"tint","tint",-1286736913),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((j + cljs.core.mod(i,(2))),(2)),(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((move_here == null)){
var G__7510 = (function (p1__7474_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7474_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__7510) : set_state.call(null,G__7510));
} else {
return (on_move.cljs$core$IFn$_invoke$arity$1 ? on_move.cljs$core$IFn$_invoke$arity$1(move_here) : on_move.call(null,move_here));
}
}),new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653),(!((move_here == null))),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)))),new cljs.core.Keyword(null,"piece","piece",1396691784),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))),(function (p1__7482_SHARP_){
return cljs.core.name(p1__7482_SHARP_);
})),new cljs.core.Keyword(null,"color","color",1011675173),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),(function (p1__7483_SHARP_){
return cljs.core.name(p1__7483_SHARP_);
}))], 0));
});
chess.components.board.board = (function chess$components$board$board(var_args){
var args__4795__auto__ = [];
var len__4789__auto___7657 = arguments.length;
var i__4790__auto___7658 = (0);
while(true){
if((i__4790__auto___7658 < len__4789__auto___7657)){
args__4795__auto__.push((arguments[i__4790__auto___7658]));

var G__7659 = (i__4790__auto___7658 + (1));
i__4790__auto___7658 = G__7659;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.components.board.board.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.components.board.board.cljs$core$IFn$_invoke$arity$variadic = (function (p__7536){
var map__7538 = p__7536;
var map__7538__$1 = (((((!((map__7538 == null))))?(((((map__7538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7538):map__7538);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));

var board_size = (0.9 * (function (){var x__4276__auto__ = window.innerWidth;
var y__4277__auto__ = window.innerHeight;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
return (function (vdom_state__6056__auto__){
var hook_instances__6057__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_cljs.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null))], null);
return (function (){
var vec__7555 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6058__6059__auto__){
return (p1__6058__6059__auto__.cljs$core$IFn$_invoke$arity$1 ? p1__6058__6059__auto__.cljs$core$IFn$_invoke$arity$1(vdom_state__6056__auto__) : p1__6058__6059__auto__.call(null,vdom_state__6056__auto__));
}),hook_instances__6057__auto__);
var vec__7558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7555,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7558,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7558,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"display","inline-block","margin","5px"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = (function chess$components$board$iter__7564(s__7565){
return (new cljs.core.LazySeq(null,(function (){
var s__7565__$1 = s__7565;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7565__$1);
if(temp__5735__auto__){
var s__7565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7565__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7565__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7567 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7566 = (0);
while(true){
if((i__7566 < size__4581__auto__)){
var vec__7574 = cljs.core._nth(c__4580__auto__,i__7566);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7574,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7574,(1),null);
cljs.core.chunk_append(b__7567,((function (i__7566,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move){
return (function (vdom_state__6056__auto____$1){
var hook_instances__6057__auto____$1 = cljs.core.PersistentVector.EMPTY;
return ((function (i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = ((function (i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move){
return (function chess$components$board$iter__7564_$_iter__7582(s__7583){
return (new cljs.core.LazySeq(null,((function (i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move){
return (function (){
var s__7583__$1 = s__7583;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7583__$1);
if(temp__5735__auto____$1){
var s__7583__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7583__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__7583__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__7585 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__7584 = (0);
while(true){
if((i__7584 < size__4581__auto____$1)){
var vec__7589 = cljs.core._nth(c__4580__auto____$1,i__7584);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589,(1),null);
cljs.core.chunk_append(b__7585,chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)));

var G__7693 = (i__7584 + (1));
i__7584 = G__7693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7585),chess$components$board$iter__7564_$_iter__7582(cljs.core.chunk_rest(s__7583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7585),null);
}
} else {
var vec__7596 = cljs.core.first(s__7583__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7596,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7596,(1),null);
return cljs.core.cons(chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)),chess$components$board$iter__7564_$_iter__7582(cljs.core.rest(s__7583__$2)));
}
} else {
return null;
}
break;
}
});})(i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move))
,null,null));
});})(i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], null)));
});
;})(i__7566,hook_instances__6057__auto____$1,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move))
});})(i__7566,vec__7574,row,i,c__4580__auto__,size__4581__auto__,b__7567,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move))
);

var G__7703 = (i__7566 + (1));
i__7566 = G__7703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7567),chess$components$board$iter__7564(cljs.core.chunk_rest(s__7565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7567),null);
}
} else {
var vec__7605 = cljs.core.first(s__7565__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7605,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7605,(1),null);
return cljs.core.cons(((function (vec__7605,row,i,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move){
return (function (vdom_state__6056__auto____$1){
var hook_instances__6057__auto____$1 = cljs.core.PersistentVector.EMPTY;
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = (function chess$components$board$iter__7564_$_iter__7609(s__7610){
return (new cljs.core.LazySeq(null,(function (){
var s__7610__$1 = s__7610;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7610__$1);
if(temp__5735__auto____$1){
var s__7610__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7610__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7610__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7612 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7611 = (0);
while(true){
if((i__7611 < size__4581__auto__)){
var vec__7617 = cljs.core._nth(c__4580__auto__,i__7611);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7617,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7617,(1),null);
cljs.core.chunk_append(b__7612,chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)));

var G__7718 = (i__7611 + (1));
i__7611 = G__7718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7612),chess$components$board$iter__7564_$_iter__7609(cljs.core.chunk_rest(s__7610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7612),null);
}
} else {
var vec__7626 = cljs.core.first(s__7610__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7626,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7626,(1),null);
return cljs.core.cons(chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)),chess$components$board$iter__7564_$_iter__7609(cljs.core.rest(s__7610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], null)));
});
});})(vec__7605,row,i,s__7565__$2,temp__5735__auto__,vec__7555,vec__7558,state,set_state,hook_instances__6057__auto__,board_size,map__7538,map__7538__$1,board,player,moves,on_move))
,chess$components$board$iter__7564(cljs.core.rest(s__7565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], null)));
});
});
}));

(chess.components.board.board.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.components.board.board.cljs$lang$applyTo = (function (seq7530){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7530));
}));


//# sourceMappingURL=chess.components.board.js.map
