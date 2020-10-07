goog.provide('chess.utils$macros');
var ret__4785__auto___10162 = (function (){
chess.utils$macros.match = (function chess$utils$macros$match(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10163 = arguments.length;
var i__4737__auto___10167 = (0);
while(true){
if((i__4737__auto___10167 < len__4736__auto___10163)){
args__4742__auto__.push((arguments[i__4737__auto___10167]));

var G__10168 = (i__4737__auto___10167 + (1));
i__4737__auto___10167 = G__10168;
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
var G__10102 = bodies;
var vec__10103 = G__10102;
var seq__10104 = cljs.core.seq(vec__10103);
var first__10105 = cljs.core.first(seq__10104);
var seq__10104__$1 = cljs.core.next(seq__10104);
var matcher = first__10105;
var first__10105__$1 = cljs.core.first(seq__10104__$1);
var seq__10104__$2 = cljs.core.next(seq__10104__$1);
var result = first__10105__$1;
var remainder = seq__10104__$2;
var sofar__$1 = sofar;
var G__10102__$1 = G__10102;
while(true){
var sofar__$2 = sofar__$1;
var vec__10109 = G__10102__$1;
var seq__10110 = cljs.core.seq(vec__10109);
var first__10111 = cljs.core.first(seq__10110);
var seq__10110__$1 = cljs.core.next(seq__10110);
var matcher__$1 = first__10111;
var first__10111__$1 = cljs.core.first(seq__10110__$1);
var seq__10110__$2 = cljs.core.next(seq__10110__$1);
var result__$1 = first__10111__$1;
var remainder__$1 = seq__10110__$2;
if((matcher__$1 == null)){
return sofar__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),matcher__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),result__$1], null));
} else {
var G__10183 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,matcher__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,matchie,null,(1),null))], 0)))),result__$1], null));
var G__10184 = remainder__$1;
sofar__$1 = G__10183;
G__10102__$1 = G__10184;
continue;
}
}
break;
}
})()))),null,(1),null))], 0))));
}));

(chess.utils$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.match.cljs$lang$applyTo = (function (seq10086){
var G__10089 = cljs.core.first(seq10086);
var seq10086__$1 = cljs.core.next(seq10086);
var G__10090 = cljs.core.first(seq10086__$1);
var seq10086__$2 = cljs.core.next(seq10086__$1);
var G__10092 = cljs.core.first(seq10086__$2);
var seq10086__$3 = cljs.core.next(seq10086__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10089,G__10090,G__10092,seq10086__$3);
}));

return null;
})()
;
(chess.utils$macros.match.cljs$lang$macro = true);

chess.utils$macros.maprhs = (function chess$utils$macros$maprhs(f,s){
var sofar = cljs.core.PersistentVector.EMPTY;
var G__10115 = s;
var vec__10116 = G__10115;
var seq__10117 = cljs.core.seq(vec__10116);
var first__10118 = cljs.core.first(seq__10117);
var seq__10117__$1 = cljs.core.next(seq__10117);
var lhs = first__10118;
var first__10118__$1 = cljs.core.first(seq__10117__$1);
var seq__10117__$2 = cljs.core.next(seq__10117__$1);
var rhs = first__10118__$1;
var remainder = seq__10117__$2;
var sofar__$1 = sofar;
var G__10115__$1 = G__10115;
while(true){
var sofar__$2 = sofar__$1;
var vec__10122 = G__10115__$1;
var seq__10123 = cljs.core.seq(vec__10122);
var first__10124 = cljs.core.first(seq__10123);
var seq__10123__$1 = cljs.core.next(seq__10123);
var lhs__$1 = first__10124;
var first__10124__$1 = cljs.core.first(seq__10123__$1);
var seq__10123__$2 = cljs.core.next(seq__10123__$1);
var rhs__$1 = first__10124__$1;
var remainder__$1 = seq__10123__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhs__$1,rhs__$1], 0));

if((lhs__$1 == null)){
return sofar__$2;
} else {
var G__10192 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(rhs__$1) : f.call(null,rhs__$1))], null));
var G__10193 = remainder__$1;
sofar__$1 = G__10192;
G__10115__$1 = G__10193;
continue;
}
break;
}
});
var ret__4785__auto___10197 = (function (){
chess.utils$macros.literalize = (function chess$utils$macros$literalize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10198 = arguments.length;
var i__4737__auto___10199 = (0);
while(true){
if((i__4737__auto___10199 < len__4736__auto___10198)){
args__4742__auto__.push((arguments[i__4737__auto___10199]));

var G__10206 = (i__4737__auto___10199 + (1));
i__4737__auto___10199 = G__10206;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10127__10130__auto__","p1__10127__10130__auto__",426583787,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10127__10130__auto__","p1__10127__10130__auto__",426583787,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10127__10130__auto__","p1__10127__10130__auto__",426583787,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10127__10130__auto__","p1__10127__10130__auto__",426583787,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,s,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([symbols], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(chess.utils$macros.literalize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.literalize.cljs$lang$applyTo = (function (seq10131){
var G__10132 = cljs.core.first(seq10131);
var seq10131__$1 = cljs.core.next(seq10131);
var G__10133 = cljs.core.first(seq10131__$1);
var seq10131__$2 = cljs.core.next(seq10131__$1);
var G__10134 = cljs.core.first(seq10131__$2);
var seq10131__$3 = cljs.core.next(seq10131__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10132,G__10133,G__10134,seq10131__$3);
}));

return null;
})()
;
(chess.utils$macros.literalize.cljs$lang$macro = true);

var ret__4785__auto___10219 = chess.utils$macros.plusminus = (function chess$utils$macros$plusminus(_AMPERSAND_form,_AMPERSAND_env,assignments,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(chess.utils$macros.maprhs((function (lit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit,(function (){var G__10157 = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit)].join('');
return (chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1 ? chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1(G__10157) : chess.utils$macros.read_string.call(null,G__10157));
})()], null);
}),assignments))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});
(chess.utils$macros.plusminus.cljs$lang$macro = true);


//# sourceMappingURL=chess.utils$macros.js.map
