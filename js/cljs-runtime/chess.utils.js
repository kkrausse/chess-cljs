goog.provide('chess.utils');
chess.utils.nilmap = (function chess$utils$nilmap(x,f){
if((!((x == null)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return null;
}
});
chess.utils.zip = (function chess$utils$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7435 = arguments.length;
var i__4737__auto___7439 = (0);
while(true){
if((i__4737__auto___7439 < len__4736__auto___7435)){
args__4742__auto__.push((arguments[i__4737__auto___7439]));

var G__7446 = (i__4737__auto___7439 + (1));
i__4737__auto___7439 = G__7446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.cons(cljs.core.vector,seqs));
}));

(chess.utils.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.zip.cljs$lang$applyTo = (function (seq7242){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7242));
}));

chess.utils.screen_print = (function chess$utils$screen_print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7466 = arguments.length;
var i__4737__auto___7471 = (0);
while(true){
if((i__4737__auto___7471 < len__4736__auto___7466)){
args__4742__auto__.push((arguments[i__4737__auto___7471]));

var G__7475 = (i__4737__auto___7471 + (1));
i__4737__auto___7471 = G__7475;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
(document.getElementsByTagName("BODY")[(0)]).appendChild((function (){var el = document.createElement("p");
(el["innerHTML"] = stuff);

return el;
})());

return cljs.core.last(stuff);
}));

(chess.utils.screen_print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.screen_print.cljs$lang$applyTo = (function (seq7263){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7263));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__7298 = xs;
var vec__7299 = G__7298;
var seq__7300 = cljs.core.seq(vec__7299);
var first__7301 = cljs.core.first(seq__7300);
var seq__7300__$1 = cljs.core.next(seq__7300);
var head = first__7301;
var remaining = seq__7300__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__7298__$1 = G__7298;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__7341 = G__7298__$1;
var seq__7342 = cljs.core.seq(vec__7341);
var first__7343 = cljs.core.first(seq__7342);
var seq__7342__$1 = cljs.core.next(seq__7342);
var head__$1 = first__7343;
var remaining__$1 = seq__7342__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__7346 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__7516 = remaining__$1;
var G__7517 = maxv;
var G__7518 = maxx;
G__7298__$1 = G__7516;
cur_max__$1 = G__7517;
cur_max_x__$1 = G__7518;
continue;
}
break;
}
});

//# sourceMappingURL=chess.utils.js.map
