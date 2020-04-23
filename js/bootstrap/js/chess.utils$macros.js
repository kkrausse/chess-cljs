goog.provide('chess.utils$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
var ret__4835__auto___7728 = (function (){
chess.utils$macros.match = (function chess$utils$macros$match(var_args){
var args__4795__auto__ = [];
var len__4789__auto___7729 = arguments.length;
var i__4790__auto___7730 = (0);
while(true){
if((i__4790__auto___7730 < len__4789__auto___7729)){
args__4795__auto__.push((arguments[i__4790__auto___7730]));

var G__7731 = (i__4790__auto___7730 + (1));
i__4790__auto___7730 = G__7731;
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
var G__7698 = bodies;
var vec__7699 = G__7698;
var seq__7700 = cljs.core.seq(vec__7699);
var first__7701 = cljs.core.first(seq__7700);
var seq__7700__$1 = cljs.core.next(seq__7700);
var matcher = first__7701;
var first__7701__$1 = cljs.core.first(seq__7700__$1);
var seq__7700__$2 = cljs.core.next(seq__7700__$1);
var result = first__7701__$1;
var remainder = seq__7700__$2;
var sofar__$1 = sofar;
var G__7698__$1 = G__7698;
while(true){
var sofar__$2 = sofar__$1;
var vec__7705 = G__7698__$1;
var seq__7706 = cljs.core.seq(vec__7705);
var first__7707 = cljs.core.first(seq__7706);
var seq__7706__$1 = cljs.core.next(seq__7706);
var matcher__$1 = first__7707;
var first__7707__$1 = cljs.core.first(seq__7706__$1);
var seq__7706__$2 = cljs.core.next(seq__7706__$1);
var result__$1 = first__7707__$1;
var remainder__$1 = seq__7706__$2;
if((matcher__$1 == null)){
return sofar__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),matcher__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),result__$1], null));
} else {
var G__7732 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,matcher__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,matchie,null,(1),null))], 0)))),result__$1], null));
var G__7733 = remainder__$1;
sofar__$1 = G__7732;
G__7698__$1 = G__7733;
continue;
}
}
break;
}
})()))),null,(1),null))], 0))));
}));

(chess.utils$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.match.cljs$lang$applyTo = (function (seq7691){
var G__7692 = cljs.core.first(seq7691);
var seq7691__$1 = cljs.core.next(seq7691);
var G__7693 = cljs.core.first(seq7691__$1);
var seq7691__$2 = cljs.core.next(seq7691__$1);
var G__7694 = cljs.core.first(seq7691__$2);
var seq7691__$3 = cljs.core.next(seq7691__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7692,G__7693,G__7694,seq7691__$3);
}));

return null;
})()
;
(chess.utils$macros.match.cljs$lang$macro = true);

chess.utils$macros.maprhs = (function chess$utils$macros$maprhs(f,s){
var sofar = cljs.core.PersistentVector.EMPTY;
var G__7711 = s;
var vec__7712 = G__7711;
var seq__7713 = cljs.core.seq(vec__7712);
var first__7714 = cljs.core.first(seq__7713);
var seq__7713__$1 = cljs.core.next(seq__7713);
var lhs = first__7714;
var first__7714__$1 = cljs.core.first(seq__7713__$1);
var seq__7713__$2 = cljs.core.next(seq__7713__$1);
var rhs = first__7714__$1;
var remainder = seq__7713__$2;
var sofar__$1 = sofar;
var G__7711__$1 = G__7711;
while(true){
var sofar__$2 = sofar__$1;
var vec__7718 = G__7711__$1;
var seq__7719 = cljs.core.seq(vec__7718);
var first__7720 = cljs.core.first(seq__7719);
var seq__7719__$1 = cljs.core.next(seq__7719);
var lhs__$1 = first__7720;
var first__7720__$1 = cljs.core.first(seq__7719__$1);
var seq__7719__$2 = cljs.core.next(seq__7719__$1);
var rhs__$1 = first__7720__$1;
var remainder__$1 = seq__7719__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhs__$1,rhs__$1], 0));

if((lhs__$1 == null)){
return sofar__$2;
} else {
var G__7734 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(rhs__$1) : f.call(null,rhs__$1))], null));
var G__7735 = remainder__$1;
sofar__$1 = G__7734;
G__7711__$1 = G__7735;
continue;
}
break;
}
});
var ret__4835__auto___7736 = (function (){
chess.utils$macros.literalize = (function chess$utils$macros$literalize(var_args){
var args__4795__auto__ = [];
var len__4789__auto___7737 = arguments.length;
var i__4790__auto___7738 = (0);
while(true){
if((i__4790__auto___7738 < len__4789__auto___7737)){
args__4795__auto__.push((arguments[i__4790__auto___7738]));

var G__7739 = (i__4790__auto___7738 + (1));
i__4790__auto___7738 = G__7739;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7721__7722__auto__","p1__7721__7722__auto__",1034717120,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7721__7722__auto__","p1__7721__7722__auto__",1034717120,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7721__7722__auto__","p1__7721__7722__auto__",1034717120,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7721__7722__auto__","p1__7721__7722__auto__",1034717120,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,s,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([symbols], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(chess.utils$macros.literalize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.literalize.cljs$lang$applyTo = (function (seq7723){
var G__7724 = cljs.core.first(seq7723);
var seq7723__$1 = cljs.core.next(seq7723);
var G__7725 = cljs.core.first(seq7723__$1);
var seq7723__$2 = cljs.core.next(seq7723__$1);
var G__7726 = cljs.core.first(seq7723__$2);
var seq7723__$3 = cljs.core.next(seq7723__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7724,G__7725,G__7726,seq7723__$3);
}));

return null;
})()
;
(chess.utils$macros.literalize.cljs$lang$macro = true);

var ret__4835__auto___7740 = chess.utils$macros.plusminus = (function chess$utils$macros$plusminus(_AMPERSAND_form,_AMPERSAND_env,assignments,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(chess.utils$macros.maprhs((function (lit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit,(function (){var G__7727 = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit)].join('');
return (chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1 ? chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1(G__7727) : chess.utils$macros.read_string.call(null,G__7727));
})()], null);
}),assignments))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});
(chess.utils$macros.plusminus.cljs$lang$macro = true);


//# sourceMappingURL=chess.utils$macros.js.map
