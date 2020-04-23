goog.provide('chess.utils$macros');
var ret__4835__auto___8300 = (function (){
chess.utils$macros.match = (function chess$utils$macros$match(var_args){
var args__4795__auto__ = [];
var len__4789__auto___8301 = arguments.length;
var i__4790__auto___8302 = (0);
while(true){
if((i__4790__auto___8302 < len__4789__auto___8301)){
args__4795__auto__.push((arguments[i__4790__auto___8302]));

var G__8303 = (i__4790__auto___8302 + (1));
i__4790__auto___8302 = G__8303;
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
var G__8164 = bodies;
var vec__8167 = G__8164;
var seq__8168 = cljs.core.seq(vec__8167);
var first__8169 = cljs.core.first(seq__8168);
var seq__8168__$1 = cljs.core.next(seq__8168);
var matcher = first__8169;
var first__8169__$1 = cljs.core.first(seq__8168__$1);
var seq__8168__$2 = cljs.core.next(seq__8168__$1);
var result = first__8169__$1;
var remainder = seq__8168__$2;
var sofar__$1 = sofar;
var G__8164__$1 = G__8164;
while(true){
var sofar__$2 = sofar__$1;
var vec__8179 = G__8164__$1;
var seq__8180 = cljs.core.seq(vec__8179);
var first__8181 = cljs.core.first(seq__8180);
var seq__8180__$1 = cljs.core.next(seq__8180);
var matcher__$1 = first__8181;
var first__8181__$1 = cljs.core.first(seq__8180__$1);
var seq__8180__$2 = cljs.core.next(seq__8180__$1);
var result__$1 = first__8181__$1;
var remainder__$1 = seq__8180__$2;
if((matcher__$1 == null)){
return sofar__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),matcher__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),result__$1], null));
} else {
var G__8320 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,matcher__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,matchie,null,(1),null))], 0)))),result__$1], null));
var G__8321 = remainder__$1;
sofar__$1 = G__8320;
G__8164__$1 = G__8321;
continue;
}
}
break;
}
})()))),null,(1),null))], 0))));
}));

(chess.utils$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.match.cljs$lang$applyTo = (function (seq8144){
var G__8145 = cljs.core.first(seq8144);
var seq8144__$1 = cljs.core.next(seq8144);
var G__8146 = cljs.core.first(seq8144__$1);
var seq8144__$2 = cljs.core.next(seq8144__$1);
var G__8147 = cljs.core.first(seq8144__$2);
var seq8144__$3 = cljs.core.next(seq8144__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8145,G__8146,G__8147,seq8144__$3);
}));

return null;
})()
;
(chess.utils$macros.match.cljs$lang$macro = true);

chess.utils$macros.maprhs = (function chess$utils$macros$maprhs(f,s){
var sofar = cljs.core.PersistentVector.EMPTY;
var G__8187 = s;
var vec__8190 = G__8187;
var seq__8191 = cljs.core.seq(vec__8190);
var first__8192 = cljs.core.first(seq__8191);
var seq__8191__$1 = cljs.core.next(seq__8191);
var lhs = first__8192;
var first__8192__$1 = cljs.core.first(seq__8191__$1);
var seq__8191__$2 = cljs.core.next(seq__8191__$1);
var rhs = first__8192__$1;
var remainder = seq__8191__$2;
var sofar__$1 = sofar;
var G__8187__$1 = G__8187;
while(true){
var sofar__$2 = sofar__$1;
var vec__8200 = G__8187__$1;
var seq__8201 = cljs.core.seq(vec__8200);
var first__8202 = cljs.core.first(seq__8201);
var seq__8201__$1 = cljs.core.next(seq__8201);
var lhs__$1 = first__8202;
var first__8202__$1 = cljs.core.first(seq__8201__$1);
var seq__8201__$2 = cljs.core.next(seq__8201__$1);
var rhs__$1 = first__8202__$1;
var remainder__$1 = seq__8201__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhs__$1,rhs__$1], 0));

if((lhs__$1 == null)){
return sofar__$2;
} else {
var G__8338 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sofar__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(rhs__$1) : f.call(null,rhs__$1))], null));
var G__8339 = remainder__$1;
sofar__$1 = G__8338;
G__8187__$1 = G__8339;
continue;
}
break;
}
});
var ret__4835__auto___8343 = (function (){
chess.utils$macros.literalize = (function chess$utils$macros$literalize(var_args){
var args__4795__auto__ = [];
var len__4789__auto___8344 = arguments.length;
var i__4790__auto___8345 = (0);
while(true){
if((i__4790__auto___8345 < len__4789__auto___8344)){
args__4795__auto__.push((arguments[i__4790__auto___8345]));

var G__8346 = (i__4790__auto___8345 + (1));
i__4790__auto___8345 = G__8346;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("walk","postwalk","walk/postwalk",971729259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8211__8213__auto__","p1__8211__8213__auto__",-71364549,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8211__8213__auto__","p1__8211__8213__auto__",-71364549,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8211__8213__auto__","p1__8211__8213__auto__",-71364549,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__8211__8213__auto__","p1__8211__8213__auto__",-71364549,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,s,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([symbols], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(chess.utils$macros.literalize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chess.utils$macros.literalize.cljs$lang$applyTo = (function (seq8214){
var G__8218 = cljs.core.first(seq8214);
var seq8214__$1 = cljs.core.next(seq8214);
var G__8219 = cljs.core.first(seq8214__$1);
var seq8214__$2 = cljs.core.next(seq8214__$1);
var G__8220 = cljs.core.first(seq8214__$2);
var seq8214__$3 = cljs.core.next(seq8214__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8218,G__8219,G__8220,seq8214__$3);
}));

return null;
})()
;
(chess.utils$macros.literalize.cljs$lang$macro = true);

var ret__4835__auto___8381 = chess.utils$macros.plusminus = (function chess$utils$macros$plusminus(_AMPERSAND_form,_AMPERSAND_env,assignments,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(chess.utils$macros.maprhs((function (lit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit,(function (){var G__8292 = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit)].join('');
return (chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1 ? chess.utils$macros.read_string.cljs$core$IFn$_invoke$arity$1(G__8292) : chess.utils$macros.read_string.call(null,G__8292));
})()], null);
}),assignments))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});
(chess.utils$macros.plusminus.cljs$lang$macro = true);

