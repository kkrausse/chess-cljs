goog.provide('chess.utils$macros');
var ret__4835__auto___5934 = (function (){
chess.utils$macros.match = (function chess$utils$macros$match(var_args){
var args__4795__auto__ = [];
var len__4789__auto___5935 = arguments.length;
var i__4790__auto___5936 = (0);
while(true){
if((i__4790__auto___5936 < len__4789__auto___5935)){
args__4795__auto__.push((arguments[i__4790__auto___5936]));

var G__5937 = (i__4790__auto___5936 + (1));
i__4790__auto___5936 = G__5937;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return chess.utils$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(chess.utils$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,bodies){
var matchie = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("matchie");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,matchie,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(function (){var sofar = cljs.core.PersistentVector.EMPTY;
var G__5821 = bodies;
var vec__5822 = G__5821;
var seq__5823 = cljs.core.seq(vec__5822);
var first__5824 = cljs.core.first(seq__5823);
var seq__5823__$1 = cljs.core.next(seq__5823);
var matcher = first__5824;
var first__5824__$1 = cljs.core.first(seq__5823__$1);
var seq__5823__$2 = cljs.core.next(seq__5823__$1);
var result = first__5824__$1;
var remainder = seq__5823__$2;
var sofar__$1 = sofar;
var G__5821__$1 = G__5821;
while(true){
var sofar__$2 = sofar__$1;
var vec__5844 = G__5821__$1;
var seq__5845 = cljs.core.seq(vec__5844);
var first__5846 = cljs.core.first(seq__5845);
var seq__5845__$1 = cljs.core.next(seq__5845);
var matcher__$1 = first__5846;
var first__5846__$1 = cljs.core.first(seq__5845__$1);
var seq__5845__$2 = cljs.core.next(seq__5845__$1);
var result__$1 = first__5846__$1;
var remainder__$1 = seq__5845__$2;
if((matcher__$1 == null)){
return sofar__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),matcher__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),result__$1], null));
} else {
var G__5938 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,matcher__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,matchie,null,(1),null))], 0)))),result__$1], null));
var G__5939 = remainder__$1;
sofar__$1 = G__5938;
G__5821__$1 = G__5939;
continue;
}
}
break;
}
})()))),null,(1),null))], 0))));
}));

(chess.utils$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.match.cljs$lang$applyTo = (function (seq5786){
var G__5787 = cljs.core.first(seq5786);
var seq5786__$1 = cljs.core.next(seq5786);
var G__5788 = cljs.core.first(seq5786__$1);
var seq5786__$2 = cljs.core.next(seq5786__$1);
var G__5789 = cljs.core.first(seq5786__$2);
var seq5786__$3 = cljs.core.next(seq5786__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5787,G__5788,G__5789,seq5786__$3);
}));

return null;
})()
;
(chess.utils$macros.match.cljs$lang$macro = true);

chess.utils$macros.maprhs = (function chess$utils$macros$maprhs(f,s){
var sofar = cljs.core.PersistentVector.EMPTY;
var G__5865 = s;
var vec__5866 = G__5865;
var seq__5867 = cljs.core.seq(vec__5866);
var first__5868 = cljs.core.first(seq__5867);
var seq__5867__$1 = cljs.core.next(seq__5867);
var lhs = first__5868;
var first__5868__$1 = cljs.core.first(seq__5867__$1);
var seq__5867__$2 = cljs.core.next(seq__5867__$1);
var rhs = first__5868__$1;
var remainder = seq__5867__$2;
var sofar__$1 = sofar;
var G__5865__$1 = G__5865;
while(true){
var sofar__$2 = sofar__$1;
var vec__5882 = G__5865__$1;
var seq__5883 = cljs.core.seq(vec__5882);
var first__5884 = cljs.core.first(seq__5883);
var seq__5883__$1 = cljs.core.next(seq__5883);
var lhs__$1 = first__5884;
var first__5884__$1 = cljs.core.first(seq__5883__$1);
var seq__5883__$2 = cljs.core.next(seq__5883__$1);
var rhs__$1 = first__5884__$1;
var remainder__$1 = seq__5883__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhs__$1,rhs__$1], 0));

if((lhs__$1 == null)){
return sofar__$2;
} else {
var G__5940 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(rhs__$1) : f.call(null,rhs__$1))], null));
var G__5941 = remainder__$1;
sofar__$1 = G__5940;
G__5865__$1 = G__5941;
continue;
}
break;
}
});
var ret__4835__auto___5942 = (function (){
chess.utils$macros.literalize = (function chess$utils$macros$literalize(var_args){
var args__4795__auto__ = [];
var len__4789__auto___5943 = arguments.length;
var i__4790__auto___5944 = (0);
while(true){
if((i__4790__auto___5944 < len__4789__auto___5943)){
args__4795__auto__.push((arguments[i__4790__auto___5944]));

var G__5945 = (i__4790__auto___5944 + (1));
i__4790__auto___5944 = G__5945;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return chess.utils$macros.literalize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(chess.utils$macros.literalize.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,symbols,body){
var form = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"form","form",16469056,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__5891__5893__auto__","p1__5891__5893__auto__",1667306869,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__5891__5893__auto__","p1__5891__5893__auto__",1667306869,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__5891__5893__auto__","p1__5891__5893__auto__",1667306869,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__5891__5893__auto__","p1__5891__5893__auto__",1667306869,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,s,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([symbols], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(chess.utils$macros.literalize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.literalize.cljs$lang$applyTo = (function (seq5898){
var G__5899 = cljs.core.first(seq5898);
var seq5898__$1 = cljs.core.next(seq5898);
var G__5900 = cljs.core.first(seq5898__$1);
var seq5898__$2 = cljs.core.next(seq5898__$1);
var G__5901 = cljs.core.first(seq5898__$2);
var seq5898__$3 = cljs.core.next(seq5898__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5899,G__5900,G__5901,seq5898__$3);
}));

return null;
})()
;
(chess.utils$macros.literalize.cljs$lang$macro = true);

var ret__4835__auto___5946 = chess.utils$macros.plusminus = (function chess$utils$macros$plusminus(_AMPERSAND_form,_AMPERSAND_env,assignments,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(chess.utils$macros.maprhs((function (lit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit,(function (){var G__5929 = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit)].join('');
return (chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1 ? chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1(G__5929) : chess.utils$macros.read_string.call(null,G__5929));
})()], null);
}),assignments))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});
(chess.utils$macros.plusminus.cljs$lang$macro = true);

