goog.provide('chess.utils');
chess.utils.nilmap = (function chess$utils$nilmap(x,f){
if((!((x == null)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return null;
}
});
chess.utils.zip = (function chess$utils$zip(var_args){
var args__4795__auto__ = [];
var len__4789__auto___7283 = arguments.length;
var i__4790__auto___7284 = (0);
while(true){
if((i__4790__auto___7284 < len__4789__auto___7283)){
args__4795__auto__.push((arguments[i__4790__auto___7284]));

var G__7285 = (i__4790__auto___7284 + (1));
i__4790__auto___7284 = G__7285;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.cons(cljs.core.vector,seqs));
}));

(chess.utils.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.zip.cljs$lang$applyTo = (function (seq7241){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7241));
}));

chess.utils.asset_path = (function chess$utils$asset_path(rec){
if(cljs.core.truth_(window.location.href.includes("localhost"))){
return rec;
} else {
return ["/chess-cljs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rec)].join('');
}
});
chess.utils.screen_print = (function chess$utils$screen_print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___7288 = arguments.length;
var i__4790__auto___7289 = (0);
while(true){
if((i__4790__auto___7289 < len__4789__auto___7288)){
args__4795__auto__.push((arguments[i__4790__auto___7289]));

var G__7291 = (i__4790__auto___7289 + (1));
i__4790__auto___7289 = G__7291;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
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
(chess.utils.screen_print.cljs$lang$applyTo = (function (seq7248){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7248));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__7260 = xs;
var vec__7261 = G__7260;
var seq__7262 = cljs.core.seq(vec__7261);
var first__7263 = cljs.core.first(seq__7262);
var seq__7262__$1 = cljs.core.next(seq__7262);
var head = first__7263;
var remaining = seq__7262__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__7260__$1 = G__7260;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__7272 = G__7260__$1;
var seq__7273 = cljs.core.seq(vec__7272);
var first__7274 = cljs.core.first(seq__7273);
var seq__7273__$1 = cljs.core.next(seq__7273);
var head__$1 = first__7274;
var remaining__$1 = seq__7273__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__7275 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7275,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7275,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__7310 = remaining__$1;
var G__7311 = maxv;
var G__7312 = maxx;
G__7260__$1 = G__7310;
cur_max__$1 = G__7311;
cur_max_x__$1 = G__7312;
continue;
}
break;
}
});
