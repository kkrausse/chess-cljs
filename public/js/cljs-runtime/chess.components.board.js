goog.provide('chess.components.board');
goog.require('cljs.core');
goog.require('chess.components.square');
goog.require('html_cljs.hooks');
goog.require('chess.utils');
goog.require('html_cljs.html');
chess.components.board.find_move = (function chess$components$board$find_move(moves,move){
var vec__27359 = move;
var mfrom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359,(0),null);
var mto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27366){
var vec__27367 = p__27366;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27367,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27367,(1),null);
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
var vec__27377 = chess.components.board.find_move(moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
var move_here = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27377,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sq,new cljs.core.Keyword(null,"tint","tint",-1286736913),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((j + cljs.core.mod(i,(2))),(2)),(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((move_here == null)){
var G__27380 = (function (p1__27370_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27370_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__27380) : set_state.call(null,G__27380));
} else {
return (on_move.cljs$core$IFn$_invoke$arity$1 ? on_move.cljs$core$IFn$_invoke$arity$1(move_here) : on_move.call(null,move_here));
}
}),new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653),(!((move_here == null))),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : state.call(null,new cljs.core.Keyword(null,"selected","selected",574897764)))),new cljs.core.Keyword(null,"piece","piece",1396691784),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : sq.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))),(function (p1__27371_SHARP_){
return cljs.core.name(p1__27371_SHARP_);
})),new cljs.core.Keyword(null,"color","color",1011675173),chess.utils.nilmap((sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : sq.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),(function (p1__27372_SHARP_){
return cljs.core.name(p1__27372_SHARP_);
}))], 0));
});
chess.components.board.board = (function chess$components$board$board(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27531 = arguments.length;
var i__4790__auto___27532 = (0);
while(true){
if((i__4790__auto___27532 < len__4789__auto___27531)){
args__4795__auto__.push((arguments[i__4790__auto___27532]));

var G__27533 = (i__4790__auto___27532 + (1));
i__4790__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.components.board.board.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.components.board.board.cljs$core$IFn$_invoke$arity$variadic = (function (p__27383){
var map__27384 = p__27383;
var map__27384__$1 = (((((!((map__27384 == null))))?(((((map__27384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27384):map__27384);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));

var board_size = (0.9 * (function (){var x__4276__auto__ = window.innerWidth;
var y__4277__auto__ = window.innerHeight;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
return (function (vdom_state__25572__auto__){
var hook_instances__25573__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_cljs.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null))], null);
return (function (){
var vec__27395 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25574__25575__auto__){
return (p1__25574__25575__auto__.cljs$core$IFn$_invoke$arity$1 ? p1__25574__25575__auto__.cljs$core$IFn$_invoke$arity$1(vdom_state__25572__auto__) : p1__25574__25575__auto__.call(null,vdom_state__25572__auto__));
}),hook_instances__25573__auto__);
var vec__27398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27395,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27398,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27398,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),"px"].join(''),"display","inline-block","margin","5px"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = (function chess$components$board$iter__27405(s__27406){
return (new cljs.core.LazySeq(null,(function (){
var s__27406__$1 = s__27406;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27406__$1);
if(temp__5735__auto__){
var s__27406__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27406__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27406__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27408 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27407 = (0);
while(true){
if((i__27407 < size__4581__auto__)){
var vec__27418 = cljs.core._nth(c__4580__auto__,i__27407);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27418,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27418,(1),null);
cljs.core.chunk_append(b__27408,((function (i__27407,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move){
return (function (vdom_state__25572__auto____$1){
var hook_instances__25573__auto____$1 = cljs.core.PersistentVector.EMPTY;
return ((function (i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = ((function (i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move){
return (function chess$components$board$iter__27405_$_iter__27428(s__27429){
return (new cljs.core.LazySeq(null,((function (i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move){
return (function (){
var s__27429__$1 = s__27429;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27429__$1);
if(temp__5735__auto____$1){
var s__27429__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27429__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__27429__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__27431 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__27430 = (0);
while(true){
if((i__27430 < size__4581__auto____$1)){
var vec__27443 = cljs.core._nth(c__4580__auto____$1,i__27430);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27443,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27443,(1),null);
cljs.core.chunk_append(b__27431,chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)));

var G__27555 = (i__27430 + (1));
i__27430 = G__27555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27431),chess$components$board$iter__27405_$_iter__27428(cljs.core.chunk_rest(s__27429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27431),null);
}
} else {
var vec__27453 = cljs.core.first(s__27429__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27453,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27453,(1),null);
return cljs.core.cons(chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)),chess$components$board$iter__27405_$_iter__27428(cljs.core.rest(s__27429__$2)));
}
} else {
return null;
}
break;
}
});})(i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move))
,null,null));
});})(i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move))
;
return iter__4582__auto__(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))], 0)));
})()], null)));
});
;})(i__27407,hook_instances__25573__auto____$1,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move))
});})(i__27407,vec__27418,row,i,c__4580__auto__,size__4581__auto__,b__27408,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move))
);

var G__27564 = (i__27407 + (1));
i__27407 = G__27564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27408),chess$components$board$iter__27405(cljs.core.chunk_rest(s__27406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27408),null);
}
} else {
var vec__27470 = cljs.core.first(s__27406__$2);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27470,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27470,(1),null);
return cljs.core.cons(((function (vec__27470,row,i,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move){
return (function (vdom_state__25572__auto____$1){
var hook_instances__25573__auto____$1 = cljs.core.PersistentVector.EMPTY;
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["display","flex","height","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4582__auto__ = (function chess$components$board$iter__27405_$_iter__27474(s__27475){
return (new cljs.core.LazySeq(null,(function (){
var s__27475__$1 = s__27475;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27475__$1);
if(temp__5735__auto____$1){
var s__27475__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27475__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27475__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27477 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27476 = (0);
while(true){
if((i__27476 < size__4581__auto__)){
var vec__27490 = cljs.core._nth(c__4580__auto__,i__27476);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,(1),null);
cljs.core.chunk_append(b__27477,chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)));

var G__27581 = (i__27476 + (1));
i__27476 = G__27581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27477),chess$components$board$iter__27405_$_iter__27474(cljs.core.chunk_rest(s__27475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27477),null);
}
} else {
var vec__27497 = cljs.core.first(s__27475__$2);
var sq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(1),null);
return cljs.core.cons(chess.components.square.square(chess.components.board.uiify(sq,i,j,state,set_state,moves,on_move)),chess$components$board$iter__27405_$_iter__27474(cljs.core.rest(s__27475__$2)));
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
});})(vec__27470,row,i,s__27406__$2,temp__5735__auto__,vec__27395,vec__27398,state,set_state,hook_instances__25573__auto__,board_size,map__27384,map__27384__$1,board,player,moves,on_move))
,chess$components$board$iter__27405(cljs.core.rest(s__27406__$2)));
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
(chess.components.board.board.cljs$lang$applyTo = (function (seq27382){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27382));
}));


//# sourceMappingURL=chess.components.board.js.map
