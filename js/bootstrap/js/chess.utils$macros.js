goog.provide('chess.utils$macros');
var ret__4785__auto___8987 = (function (){
chess.utils$macros.match = (function chess$utils$macros$match(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8988 = arguments.length;
var i__4737__auto___8989 = (0);
while(true){
if((i__4737__auto___8989 < len__4736__auto___8988)){
args__4742__auto__.push((arguments[i__4737__auto___8989]));

var G__8990 = (i__4737__auto___8989 + (1));
i__4737__auto___8989 = G__8990;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return chess.utils$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(chess.utils$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,bodies){
var matchie = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("matchie");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,matchie,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(function (){var sofar = cljs.core.PersistentVector.EMPTY;
var G__8944 = bodies;
var vec__8945 = G__8944;
var seq__8946 = cljs.core.seq(vec__8945);
var first__8947 = cljs.core.first(seq__8946);
var seq__8946__$1 = cljs.core.next(seq__8946);
var matcher = first__8947;
var first__8947__$1 = cljs.core.first(seq__8946__$1);
var seq__8946__$2 = cljs.core.next(seq__8946__$1);
var result = first__8947__$1;
var remainder = seq__8946__$2;
var sofar__$1 = sofar;
var G__8944__$1 = G__8944;
while(true){
var sofar__$2 = sofar__$1;
var vec__8954 = G__8944__$1;
var seq__8955 = cljs.core.seq(vec__8954);
var first__8956 = cljs.core.first(seq__8955);
var seq__8955__$1 = cljs.core.next(seq__8955);
var matcher__$1 = first__8956;
var first__8956__$1 = cljs.core.first(seq__8955__$1);
var seq__8955__$2 = cljs.core.next(seq__8955__$1);
var result__$1 = first__8956__$1;
var remainder__$1 = seq__8955__$2;
if((matcher__$1 == null)){
return sofar__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),matcher__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),result__$1], null));
} else {
var G__8994 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,matcher__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,matchie,null,(1),null))], 0)))),result__$1], null));
var G__8995 = remainder__$1;
sofar__$1 = G__8994;
G__8944__$1 = G__8995;
continue;
}
}
break;
}
})()))),null,(1),null))], 0))));
}));

(chess.utils$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.match.cljs$lang$applyTo = (function (seq8931){
var G__8932 = cljs.core.first(seq8931);
var seq8931__$1 = cljs.core.next(seq8931);
var G__8933 = cljs.core.first(seq8931__$1);
var seq8931__$2 = cljs.core.next(seq8931__$1);
var G__8934 = cljs.core.first(seq8931__$2);
var seq8931__$3 = cljs.core.next(seq8931__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8932,G__8933,G__8934,seq8931__$3);
}));

return null;
})()
;
(chess.utils$macros.match.cljs$lang$macro = true);

chess.utils$macros.maprhs = (function chess$utils$macros$maprhs(f,s){
var sofar = cljs.core.PersistentVector.EMPTY;
var G__8960 = s;
var vec__8961 = G__8960;
var seq__8962 = cljs.core.seq(vec__8961);
var first__8963 = cljs.core.first(seq__8962);
var seq__8962__$1 = cljs.core.next(seq__8962);
var lhs = first__8963;
var first__8963__$1 = cljs.core.first(seq__8962__$1);
var seq__8962__$2 = cljs.core.next(seq__8962__$1);
var rhs = first__8963__$1;
var remainder = seq__8962__$2;
var sofar__$1 = sofar;
var G__8960__$1 = G__8960;
while(true){
var sofar__$2 = sofar__$1;
var vec__8967 = G__8960__$1;
var seq__8968 = cljs.core.seq(vec__8967);
var first__8969 = cljs.core.first(seq__8968);
var seq__8968__$1 = cljs.core.next(seq__8968);
var lhs__$1 = first__8969;
var first__8969__$1 = cljs.core.first(seq__8968__$1);
var seq__8968__$2 = cljs.core.next(seq__8968__$1);
var rhs__$1 = first__8969__$1;
var remainder__$1 = seq__8968__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhs__$1,rhs__$1], 0));

if((lhs__$1 == null)){
return sofar__$2;
} else {
var G__9003 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(rhs__$1) : f.call(null,rhs__$1))], null));
var G__9004 = remainder__$1;
sofar__$1 = G__9003;
G__8960__$1 = G__9004;
continue;
}
break;
}
});
var ret__4785__auto___9005 = (function (){
chess.utils$macros.literalize = (function chess$utils$macros$literalize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9006 = arguments.length;
var i__4737__auto___9007 = (0);
while(true){
if((i__4737__auto___9007 < len__4736__auto___9006)){
args__4742__auto__.push((arguments[i__4737__auto___9007]));

var G__9008 = (i__4737__auto___9007 + (1));
i__4737__auto___9007 = G__9008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return chess.utils$macros.literalize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(chess.utils$macros.literalize.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,symbols,body){
var form = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"form","form",16469056,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8970__8971__auto__","p1__8970__8971__auto__",-1680267895,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8970__8971__auto__","p1__8970__8971__auto__",-1680267895,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8970__8971__auto__","p1__8970__8971__auto__",-1680267895,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8970__8971__auto__","p1__8970__8971__auto__",-1680267895,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,s,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([symbols], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(chess.utils$macros.literalize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.literalize.cljs$lang$applyTo = (function (seq8972){
var G__8973 = cljs.core.first(seq8972);
var seq8972__$1 = cljs.core.next(seq8972);
var G__8974 = cljs.core.first(seq8972__$1);
var seq8972__$2 = cljs.core.next(seq8972__$1);
var G__8975 = cljs.core.first(seq8972__$2);
var seq8972__$3 = cljs.core.next(seq8972__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8973,G__8974,G__8975,seq8972__$3);
}));

return null;
})()
;
(chess.utils$macros.literalize.cljs$lang$macro = true);

var ret__4785__auto___9025 = chess.utils$macros.plusminus = (function chess$utils$macros$plusminus(_AMPERSAND_form,_AMPERSAND_env,assignments,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(chess.utils$macros.maprhs((function (lit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit,(function (){var G__8986 = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit)].join('');
return (chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1 ? chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1(G__8986) : chess.utils$macros.read_string.call(null,G__8986));
})()], null);
}),assignments))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});
(chess.utils$macros.plusminus.cljs$lang$macro = true);


//# sourceMappingURL=chess.utils$macros.js.map
