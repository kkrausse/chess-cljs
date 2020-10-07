goog.provide('html_cljs.html$macros');
var ret__4785__auto___26937 = html_cljs.html$macros.make_children = (function html_cljs$html$macros$make_children(_AMPERSAND_form,_AMPERSAND_env,children){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null))], 0))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","print","cljs.core/print",1475912266,null),null,(1),null)),(new cljs.core.List(null,"wow. got symbol",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__26886__auto__","c__26886__auto__",48653269,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,children,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,children,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(html_cljs.html$macros.make_children.cljs$lang$macro = true);

var ret__4785__auto___26944 = (function (){
/**
 * create component prettily. invoking the hook thing for the component itself
 */
html_cljs.html$macros.cmp = (function html_cljs$html$macros$cmp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26945 = arguments.length;
var i__4737__auto___26946 = (0);
while(true){
if((i__4737__auto___26946 < len__4736__auto___26945)){
args__4742__auto__.push((arguments[i__4737__auto___26946]));

var G__26947 = (i__4737__auto___26946 + (1));
i__4737__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return html_cljs.html$macros.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(html_cljs.html$macros.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,props,args){
var vec__26912 = args;
var hooks_or_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(0),null);
var data_or_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(1),null);
var or_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(2),null);
var vec__26915 = ((cljs.core.vector_QMARK_(hooks_or_data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hooks_or_data,data_or_children,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,or_children)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,hooks_or_data,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data_or_children)], null));
var hooks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(1),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(2),null);
var childs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,children),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26906_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__26906_SHARP_));
}),children));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("html-cljs.html","mkhook","html-cljs.html/mkhook",868818575,null),null,(1),null)),(new cljs.core.List(null,props,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hooks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("html-cljs.html","map->ElementInfo","html-cljs.html/map->ElementInfo",569125475,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"children","children",-940561982),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("html-cljs.html","make-children","html-cljs.html/make-children",-1602881982,null),null,(1),null)),(new cljs.core.List(null,children,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(html_cljs.html$macros.cmp.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(html_cljs.html$macros.cmp.cljs$lang$applyTo = (function (seq26908){
var G__26909 = cljs.core.first(seq26908);
var seq26908__$1 = cljs.core.next(seq26908);
var G__26910 = cljs.core.first(seq26908__$1);
var seq26908__$2 = cljs.core.next(seq26908__$1);
var G__26911 = cljs.core.first(seq26908__$2);
var seq26908__$3 = cljs.core.next(seq26908__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26909,G__26910,G__26911,seq26908__$3);
}));

return null;
})()
;
(html_cljs.html$macros.cmp.cljs$lang$macro = true);


//# sourceMappingURL=html-cljs.html$macros.js.map
