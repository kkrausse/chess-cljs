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
var len__4736__auto___10060 = arguments.length;
var i__4737__auto___10061 = (0);
while(true){
if((i__4737__auto___10061 < len__4736__auto___10060)){
args__4742__auto__.push((arguments[i__4737__auto___10061]));

var G__10062 = (i__4737__auto___10061 + (1));
i__4737__auto___10061 = G__10062;
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
(chess.utils.zip.cljs$lang$applyTo = (function (seq10039){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10039));
}));

chess.utils.screen_print = (function chess$utils$screen_print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10063 = arguments.length;
var i__4737__auto___10064 = (0);
while(true){
if((i__4737__auto___10064 < len__4736__auto___10063)){
args__4742__auto__.push((arguments[i__4737__auto___10064]));

var G__10065 = (i__4737__auto___10064 + (1));
i__4737__auto___10064 = G__10065;
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
(chess.utils.screen_print.cljs$lang$applyTo = (function (seq10040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10040));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__10044 = xs;
var vec__10045 = G__10044;
var seq__10046 = cljs.core.seq(vec__10045);
var first__10047 = cljs.core.first(seq__10046);
var seq__10046__$1 = cljs.core.next(seq__10046);
var head = first__10047;
var remaining = seq__10046__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__10044__$1 = G__10044;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__10054 = G__10044__$1;
var seq__10055 = cljs.core.seq(vec__10054);
var first__10056 = cljs.core.first(seq__10055);
var seq__10055__$1 = cljs.core.next(seq__10055);
var head__$1 = first__10056;
var remaining__$1 = seq__10055__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__10057 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10057,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10057,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__10070 = remaining__$1;
var G__10071 = maxv;
var G__10072 = maxx;
G__10044__$1 = G__10070;
cur_max__$1 = G__10071;
cur_max_x__$1 = G__10072;
continue;
}
break;
}
});

//# sourceMappingURL=chess.utils.js.map
