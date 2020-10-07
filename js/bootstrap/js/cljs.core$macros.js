goog.provide('cljs.core$macros');
var ret__4785__auto___36584 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36585 = arguments.length;
var i__4737__auto___36586 = (0);
while(true){
if((i__4737__auto___36586 < len__4736__auto___36585)){
args__4742__auto__.push((arguments[i__4737__auto___36586]));

var G__36587 = (i__4737__auto___36586 + (1));
i__4737__auto___36586 = G__36587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__36590 = threaded;
var G__36591 = cljs.core.next(forms__$1);
x__$1 = G__36590;
forms__$1 = G__36591;
continue;
} else {
return x__$1;
}
break;
}
}));

(cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq34472){
var G__34473 = cljs.core.first(seq34472);
var seq34472__$1 = cljs.core.next(seq34472);
var G__34474 = cljs.core.first(seq34472__$1);
var seq34472__$2 = cljs.core.next(seq34472__$1);
var G__34475 = cljs.core.first(seq34472__$2);
var seq34472__$3 = cljs.core.next(seq34472__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34473,G__34474,G__34475,seq34472__$3);
}));

return null;
})()
;
(cljs.core$macros.__GT_.cljs$lang$macro = true);

var ret__4785__auto___36592 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36593 = arguments.length;
var i__4737__auto___36594 = (0);
while(true){
if((i__4737__auto___36594 < len__4736__auto___36593)){
args__4742__auto__.push((arguments[i__4737__auto___36594]));

var G__36595 = (i__4737__auto___36594 + (1));
i__4737__auto___36594 = G__36595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)))),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__36596 = threaded;
var G__36597 = cljs.core.next(forms__$1);
x__$1 = G__36596;
forms__$1 = G__36597;
continue;
} else {
return x__$1;
}
break;
}
}));

(cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq34476){
var G__34477 = cljs.core.first(seq34476);
var seq34476__$1 = cljs.core.next(seq34476);
var G__34478 = cljs.core.first(seq34476__$1);
var seq34476__$2 = cljs.core.next(seq34476__$1);
var G__34479 = cljs.core.first(seq34476__$2);
var seq34476__$3 = cljs.core.next(seq34476__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34477,G__34478,G__34479,seq34476__$3);
}));

return null;
})()
;
(cljs.core$macros.__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___36598 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__34486 = arguments.length;
switch (G__34486) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36600 = arguments.length;
var i__4737__auto___36601 = (0);
while(true){
if((i__4737__auto___36601 < len__4736__auto___36600)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36601]));

var G__36602 = (i__4737__auto___36601 + (1));
i__4737__auto___36601 = G__36602;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}));

(cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq34481){
var G__34482 = cljs.core.first(seq34481);
var seq34481__$1 = cljs.core.next(seq34481);
var G__34483 = cljs.core.first(seq34481__$1);
var seq34481__$2 = cljs.core.next(seq34481__$1);
var G__34484 = cljs.core.first(seq34481__$2);
var seq34481__$3 = cljs.core.next(seq34481__$2);
var G__34485 = cljs.core.first(seq34481__$3);
var seq34481__$4 = cljs.core.next(seq34481__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34482,G__34483,G__34484,G__34485,seq34481__$4);
}));

(cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._DOT__DOT_.cljs$lang$macro = true);

var ret__4785__auto___36603 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36604 = arguments.length;
var i__4737__auto___36605 = (0);
while(true){
if((i__4737__auto___36605 < len__4736__auto___36604)){
args__4742__auto__.push((arguments[i__4737__auto___36605]));

var G__36606 = (i__4737__auto___36605 + (1));
i__4737__auto___36605 = G__36606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
}));

(cljs.core$macros.comment.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.comment.cljs$lang$applyTo = (function (seq34522){
var G__34523 = cljs.core.first(seq34522);
var seq34522__$1 = cljs.core.next(seq34522);
var G__34524 = cljs.core.first(seq34522__$1);
var seq34522__$2 = cljs.core.next(seq34522__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34523,G__34524,seq34522__$2);
}));

return null;
})()
;
(cljs.core$macros.comment.cljs$lang$macro = true);

var ret__4785__auto___36607 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36608 = arguments.length;
var i__4737__auto___36609 = (0);
while(true){
if((i__4737__auto___36609 < len__4736__auto___36608)){
args__4742__auto__.push((arguments[i__4737__auto___36609]));

var G__36610 = (i__4737__auto___36609 + (1));
i__4737__auto___36609 = G__36610;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first(clauses),(new cljs.core.List(null,((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
}));

(cljs.core$macros.cond.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.cond.cljs$lang$applyTo = (function (seq34555){
var G__34556 = cljs.core.first(seq34555);
var seq34555__$1 = cljs.core.next(seq34555);
var G__34561 = cljs.core.first(seq34555__$1);
var seq34555__$2 = cljs.core.next(seq34555__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34556,G__34561,seq34555__$2);
}));

return null;
})()
;
(cljs.core$macros.cond.cljs$lang$macro = true);

var ret__4785__auto___36611 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36612 = arguments.length;
var i__4737__auto___36613 = (0);
while(true){
if((i__4737__auto___36613 < len__4736__auto___36612)){
args__4742__auto__.push((arguments[i__4737__auto___36613]));

var G__36615 = (i__4737__auto___36613 + (1));
i__4737__auto___36613 = G__36615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34566_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__34566_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true),null,(1),null)),(2),null));
}),names))));
}));

(cljs.core$macros.declare.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.declare.cljs$lang$applyTo = (function (seq34567){
var G__34568 = cljs.core.first(seq34567);
var seq34567__$1 = cljs.core.next(seq34567);
var G__34569 = cljs.core.first(seq34567__$1);
var seq34567__$2 = cljs.core.next(seq34567__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34568,G__34569,seq34567__$2);
}));

return null;
})()
;
(cljs.core$macros.declare.cljs$lang$macro = true);

var ret__4785__auto___36616 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new js/Map) (.set "a" 1) (.set "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36617 = arguments.length;
var i__4737__auto___36618 = (0);
while(true){
if((i__4737__auto___36618 < len__4736__auto___36617)){
args__4742__auto__.push((arguments[i__4737__auto___36618]));

var G__36619 = (i__4737__auto___36618 + (1));
i__4737__auto___36618 = G__36619;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))));
}
}),forms),(new cljs.core.List(null,gx,null,(1),null))], 0))));
}));

(cljs.core$macros.doto.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.doto.cljs$lang$applyTo = (function (seq34570){
var G__34571 = cljs.core.first(seq34570);
var seq34570__$1 = cljs.core.next(seq34570);
var G__34572 = cljs.core.first(seq34570__$1);
var seq34570__$2 = cljs.core.next(seq34570__$1);
var G__34573 = cljs.core.first(seq34570__$2);
var seq34570__$3 = cljs.core.next(seq34570__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34571,G__34572,G__34573,seq34570__$3);
}));

return null;
})()
;
(cljs.core$macros.doto.cljs$lang$macro = true);

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__36622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__36623 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__36622;
s = G__36623;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34608){
var vec__34609 = p__34608;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,p,null,(1),null)),fs], 0))));
}),impls))));
});
var ret__4785__auto___36624 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36625 = arguments.length;
var i__4737__auto___36626 = (0);
while(true){
if((i__4737__auto___36626 < len__4736__auto___36625)){
args__4742__auto__.push((arguments[i__4737__auto___36626]));

var G__36627 = (i__4737__auto___36626 + (1));
i__4737__auto___36626 = G__36627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
}));

(cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq34612){
var G__34613 = cljs.core.first(seq34612);
var seq34612__$1 = cljs.core.next(seq34612);
var G__34614 = cljs.core.first(seq34612__$1);
var seq34612__$2 = cljs.core.next(seq34612__$1);
var G__34615 = cljs.core.first(seq34612__$2);
var seq34612__$3 = cljs.core.next(seq34612__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34613,G__34614,G__34615,seq34612__$3);
}));

return null;
})()
;
(cljs.core$macros.extend_protocol.cljs$lang$macro = true);

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__36630 = cljs.core.next(params__$1);
var G__36631 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__36632 = lets;
params__$1 = G__36630;
new_params = G__36631;
lets = G__36632;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__36633 = cljs.core.next(params__$1);
var G__36634 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__36635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__36633;
new_params = G__36634;
lets = G__36635;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
var ret__4785__auto___36636 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36637 = arguments.length;
var i__4737__auto___36638 = (0);
while(true){
if((i__4737__auto___36638 < len__4736__auto___36637)){
args__4742__auto__.push((arguments[i__4737__auto___36638]));

var G__36639 = (i__4737__auto___36638 + (1));
i__4737__auto___36638 = G__36639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing")))})()));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__34677 = sig;
var seq__34678 = cljs.core.seq(vec__34677);
var first__34679 = cljs.core.first(seq__34678);
var seq__34678__$1 = cljs.core.next(seq__34678);
var params = first__34679;
var body = seq__34678__$1;
var _ = (((!(cljs.core.vector_QMARK_(params))))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
}));

(cljs.core$macros.fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.fn.cljs$lang$applyTo = (function (seq34642){
var G__34647 = cljs.core.first(seq34642);
var seq34642__$1 = cljs.core.next(seq34642);
var G__34648 = cljs.core.first(seq34642__$1);
var seq34642__$2 = cljs.core.next(seq34642__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34647,G__34648,seq34642__$2);
}));

return null;
})()
;
(cljs.core$macros.fn.cljs$lang$macro = true);

var ret__4785__auto___36648 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36649 = arguments.length;
var i__4737__auto___36650 = (0);
while(true){
if((i__4737__auto___36650 < len__4736__auto___36649)){
args__4742__auto__.push((arguments[i__4737__auto___36650]));

var G__36651 = (i__4737__auto___36650 + (1));
i__4737__auto___36650 = G__36651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
}));

(cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq34705){
var G__34706 = cljs.core.first(seq34705);
var seq34705__$1 = cljs.core.next(seq34705);
var G__34707 = cljs.core.first(seq34705__$1);
var seq34705__$2 = cljs.core.next(seq34705__$1);
var G__34708 = cljs.core.first(seq34705__$2);
var seq34705__$3 = cljs.core.next(seq34705__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34706,G__34707,G__34708,seq34705__$3);
}));

return null;
})()
;
(cljs.core$macros.defn_.cljs$lang$macro = true);

var ret__4785__auto___36652 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__34741 = arguments.length;
switch (G__34741) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36654 = arguments.length;
var i__4737__auto___36655 = (0);
while(true){
if((i__4737__auto___36655 < len__4736__auto___36654)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36655]));

var G__36656 = (i__4737__auto___36655 + (1));
i__4737__auto___36655 = G__36656;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34718__auto__","temp__34718__auto__",-940191533,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34718__auto__","temp__34718__auto__",-940191533,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34718__auto__","temp__34718__auto__",-940191533,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq34726){
var G__34728 = cljs.core.first(seq34726);
var seq34726__$1 = cljs.core.next(seq34726);
var G__34729 = cljs.core.first(seq34726__$1);
var seq34726__$2 = cljs.core.next(seq34726__$1);
var G__34730 = cljs.core.first(seq34726__$2);
var seq34726__$3 = cljs.core.next(seq34726__$2);
var G__34731 = cljs.core.first(seq34726__$3);
var seq34726__$4 = cljs.core.next(seq34726__$3);
var G__34732 = cljs.core.first(seq34726__$4);
var seq34726__$5 = cljs.core.next(seq34726__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34728,G__34729,G__34730,G__34731,G__34732,seq34726__$5);
}));

(cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.if_let.cljs$lang$macro = true);

var ret__4785__auto___36665 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0))));
}));

(cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(cljs.core$macros.if_not.cljs$lang$macro = true);

var ret__4785__auto___36667 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36668 = arguments.length;
var i__4737__auto___36669 = (0);
while(true){
if((i__4737__auto___36669 < len__4736__auto___36668)){
args__4742__auto__.push((arguments[i__4737__auto___36669]));

var G__36670 = (i__4737__auto___36669 + (1));
i__4737__auto___36669 = G__36670;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34789_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),p1__34789_SHARP_);
}),fnspecs))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq34797){
var G__34798 = cljs.core.first(seq34797);
var seq34797__$1 = cljs.core.next(seq34797);
var G__34799 = cljs.core.first(seq34797__$1);
var seq34797__$2 = cljs.core.next(seq34797__$1);
var G__34800 = cljs.core.first(seq34797__$2);
var seq34797__$3 = cljs.core.next(seq34797__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34798,G__34799,G__34800,seq34797__$3);
}));

return null;
})()
;
(cljs.core$macros.letfn.cljs$lang$macro = true);

var ret__4785__auto___36671 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36672 = arguments.length;
var i__4737__auto___36673 = (0);
while(true){
if((i__4737__auto___36673 < len__4736__auto___36672)){
args__4742__auto__.push((arguments[i__4737__auto___36673]));

var G__36674 = (i__4737__auto___36673 + (1));
i__4737__auto___36673 = G__36674;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,t,null,(1),null)),args)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name,null,(1),null)),args))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq34831){
var G__34832 = cljs.core.first(seq34831);
var seq34831__$1 = cljs.core.next(seq34831);
var G__34833 = cljs.core.first(seq34831__$1);
var seq34831__$2 = cljs.core.next(seq34831__$1);
var G__34834 = cljs.core.first(seq34831__$2);
var seq34831__$3 = cljs.core.next(seq34831__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34832,G__34833,G__34834,seq34831__$3);
}));

return null;
})()
;
(cljs.core$macros.memfn.cljs$lang$macro = true);

var ret__4785__auto___36675 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36676 = arguments.length;
var i__4737__auto___36677 = (0);
while(true){
if((i__4737__auto___36677 < len__4736__auto___36676)){
args__4742__auto__.push((arguments[i__4737__auto___36677]));

var G__36678 = (i__4737__auto___36677 + (1));
i__4737__auto___36677 = G__36678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros.when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when.cljs$lang$applyTo = (function (seq34859){
var G__34861 = cljs.core.first(seq34859);
var seq34859__$1 = cljs.core.next(seq34859);
var G__34862 = cljs.core.first(seq34859__$1);
var seq34859__$2 = cljs.core.next(seq34859__$1);
var G__34863 = cljs.core.first(seq34859__$2);
var seq34859__$3 = cljs.core.next(seq34859__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34861,G__34862,G__34863,seq34859__$3);
}));

return null;
})()
;
(cljs.core$macros.when.cljs$lang$macro = true);

var ret__4785__auto___36681 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36682 = arguments.length;
var i__4737__auto___36683 = (0);
while(true){
if((i__4737__auto___36683 < len__4736__auto___36682)){
args__4742__auto__.push((arguments[i__4737__auto___36683]));

var G__36684 = (i__4737__auto___36683 + (1));
i__4737__auto___36683 = G__36684;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var vec__34903 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"xs__34877__auto__","xs__34877__auto__",1285796092,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__34877__auto__","xs__34877__auto__",1285796092,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq34878){
var G__34879 = cljs.core.first(seq34878);
var seq34878__$1 = cljs.core.next(seq34878);
var G__34880 = cljs.core.first(seq34878__$1);
var seq34878__$2 = cljs.core.next(seq34878__$1);
var G__34881 = cljs.core.first(seq34878__$2);
var seq34878__$3 = cljs.core.next(seq34878__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34879,G__34880,G__34881,seq34878__$3);
}));

return null;
})()
;
(cljs.core$macros.when_first.cljs$lang$macro = true);

var ret__4785__auto___36687 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36688 = arguments.length;
var i__4737__auto___36689 = (0);
while(true){
if((i__4737__auto___36689 < len__4736__auto___36688)){
args__4742__auto__.push((arguments[i__4737__auto___36689]));

var G__36690 = (i__4737__auto___36689 + (1));
i__4737__auto___36689 = G__36690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34908__auto__","temp__34908__auto__",-2111295690,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34908__auto__","temp__34908__auto__",-2111295690,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__34908__auto__","temp__34908__auto__",-2111295690,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first(seq34909);
var seq34909__$1 = cljs.core.next(seq34909);
var G__34911 = cljs.core.first(seq34909__$1);
var seq34909__$2 = cljs.core.next(seq34909__$1);
var G__34912 = cljs.core.first(seq34909__$2);
var seq34909__$3 = cljs.core.next(seq34909__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34910,G__34911,G__34912,seq34909__$3);
}));

return null;
})()
;
(cljs.core$macros.when_let.cljs$lang$macro = true);

var ret__4785__auto___36691 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36692 = arguments.length;
var i__4737__auto___36693 = (0);
while(true){
if((i__4737__auto___36693 < len__4736__auto___36692)){
args__4742__auto__.push((arguments[i__4737__auto___36693]));

var G__36694 = (i__4737__auto___36693 + (1));
i__4737__auto___36693 = G__36694;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq34945){
var G__34946 = cljs.core.first(seq34945);
var seq34945__$1 = cljs.core.next(seq34945);
var G__34947 = cljs.core.first(seq34945__$1);
var seq34945__$2 = cljs.core.next(seq34945__$1);
var G__34948 = cljs.core.first(seq34945__$2);
var seq34945__$3 = cljs.core.next(seq34945__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34946,G__34947,G__34948,seq34945__$3);
}));

return null;
})()
;
(cljs.core$macros.when_not.cljs$lang$macro = true);

var ret__4785__auto___36695 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36696 = arguments.length;
var i__4737__auto___36697 = (0);
while(true){
if((i__4737__auto___36697 < len__4736__auto___36696)){
args__4742__auto__.push((arguments[i__4737__auto___36697]));

var G__36698 = (i__4737__auto___36697 + (1));
i__4737__auto___36697 = G__36698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.while$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.while$.cljs$lang$applyTo = (function (seq34973){
var G__34974 = cljs.core.first(seq34973);
var seq34973__$1 = cljs.core.next(seq34973);
var G__34975 = cljs.core.first(seq34973__$1);
var seq34973__$2 = cljs.core.next(seq34973__$1);
var G__34976 = cljs.core.first(seq34973__$2);
var seq34973__$3 = cljs.core.next(seq34973__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34974,G__34975,G__34976,seq34973__$3);
}));

return null;
})()
;
(cljs.core$macros.while$.cljs$lang$macro = true);

var ret__4785__auto___36699 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36700 = arguments.length;
var i__4737__auto___36701 = (0);
while(true){
if((i__4737__auto___36701 < len__4736__auto___36700)){
args__4742__auto__.push((arguments[i__4737__auto___36701]));

var G__36702 = (i__4737__auto___36701 + (1));
i__4737__auto___36701 = G__36702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34987){
var vec__34988 = p__34987;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq34983){
var G__34984 = cljs.core.first(seq34983);
var seq34983__$1 = cljs.core.next(seq34983);
var G__34985 = cljs.core.first(seq34983__$1);
var seq34983__$2 = cljs.core.next(seq34983__$1);
var G__34986 = cljs.core.first(seq34983__$2);
var seq34983__$3 = cljs.core.next(seq34983__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34984,G__34985,G__34986,seq34983__$3);
}));

return null;
})()
;
(cljs.core$macros.cond__GT_.cljs$lang$macro = true);

var ret__4785__auto___36703 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36704 = arguments.length;
var i__4737__auto___36705 = (0);
while(true){
if((i__4737__auto___36705 < len__4736__auto___36704)){
args__4742__auto__.push((arguments[i__4737__auto___36705]));

var G__36706 = (i__4737__auto___36705 + (1));
i__4737__auto___36705 = G__36706;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34996){
var vec__34998 = p__34996;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq34991){
var G__34992 = cljs.core.first(seq34991);
var seq34991__$1 = cljs.core.next(seq34991);
var G__34993 = cljs.core.first(seq34991__$1);
var seq34991__$2 = cljs.core.next(seq34991__$1);
var G__34994 = cljs.core.first(seq34991__$2);
var seq34991__$3 = cljs.core.next(seq34991__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34992,G__34993,G__34994,seq34991__$3);
}));

return null;
})()
;
(cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___36707 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36708 = arguments.length;
var i__4737__auto___36709 = (0);
while(true){
if((i__4737__auto___36709 < len__4736__auto___36708)){
args__4742__auto__.push((arguments[i__4737__auto___36709]));

var G__36710 = (i__4737__auto___36709 + (1));
i__4737__auto___36709 = G__36710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null))], 0))));
}));

(cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq35002){
var G__35003 = cljs.core.first(seq35002);
var seq35002__$1 = cljs.core.next(seq35002);
var G__35004 = cljs.core.first(seq35002__$1);
var seq35002__$2 = cljs.core.next(seq35002__$1);
var G__35005 = cljs.core.first(seq35002__$2);
var seq35002__$3 = cljs.core.next(seq35002__$2);
var G__35006 = cljs.core.first(seq35002__$3);
var seq35002__$4 = cljs.core.next(seq35002__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35003,G__35004,G__35005,G__35006,seq35002__$4);
}));

return null;
})()
;
(cljs.core$macros.as__GT_.cljs$lang$macro = true);

var ret__4785__auto___36711 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36712 = arguments.length;
var i__4737__auto___36713 = (0);
while(true){
if((i__4737__auto___36713 < len__4736__auto___36712)){
args__4742__auto__.push((arguments[i__4737__auto___36713]));

var G__36714 = (i__4737__auto___36713 + (1));
i__4737__auto___36713 = G__36714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq35008){
var G__35009 = cljs.core.first(seq35008);
var seq35008__$1 = cljs.core.next(seq35008);
var G__35010 = cljs.core.first(seq35008__$1);
var seq35008__$2 = cljs.core.next(seq35008__$1);
var G__35011 = cljs.core.first(seq35008__$2);
var seq35008__$3 = cljs.core.next(seq35008__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35009,G__35010,G__35011,seq35008__$3);
}));

return null;
})()
;
(cljs.core$macros.some__GT_.cljs$lang$macro = true);

var ret__4785__auto___36715 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36716 = arguments.length;
var i__4737__auto___36717 = (0);
while(true){
if((i__4737__auto___36717 < len__4736__auto___36716)){
args__4742__auto__.push((arguments[i__4737__auto___36717]));

var G__36718 = (i__4737__auto___36717 + (1));
i__4737__auto___36717 = G__36718;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq35042){
var G__35043 = cljs.core.first(seq35042);
var seq35042__$1 = cljs.core.next(seq35042);
var G__35044 = cljs.core.first(seq35042__$1);
var seq35042__$2 = cljs.core.next(seq35042__$1);
var G__35045 = cljs.core.first(seq35042__$2);
var seq35042__$3 = cljs.core.next(seq35042__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35043,G__35044,G__35045,seq35042__$3);
}));

return null;
})()
;
(cljs.core$macros.some__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___36719 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__35093 = arguments.length;
switch (G__35093) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36721 = arguments.length;
var i__4737__auto___36722 = (0);
while(true){
if((i__4737__auto___36722 < len__4736__auto___36721)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36722]));

var G__36723 = (i__4737__auto___36722 + (1));
i__4737__auto___36722 = G__36723;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35085__auto__","temp__35085__auto__",-900291601,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35085__auto__","temp__35085__auto__",-900291601,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35085__auto__","temp__35085__auto__",-900291601,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq35087){
var G__35088 = cljs.core.first(seq35087);
var seq35087__$1 = cljs.core.next(seq35087);
var G__35089 = cljs.core.first(seq35087__$1);
var seq35087__$2 = cljs.core.next(seq35087__$1);
var G__35090 = cljs.core.first(seq35087__$2);
var seq35087__$3 = cljs.core.next(seq35087__$2);
var G__35091 = cljs.core.first(seq35087__$3);
var seq35087__$4 = cljs.core.next(seq35087__$3);
var G__35092 = cljs.core.first(seq35087__$4);
var seq35087__$5 = cljs.core.next(seq35087__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35088,G__35089,G__35090,G__35091,G__35092,seq35087__$5);
}));

(cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.if_some.cljs$lang$macro = true);

var ret__4785__auto___36724 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36725 = arguments.length;
var i__4737__auto___36726 = (0);
while(true){
if((i__4737__auto___36726 < len__4736__auto___36725)){
args__4742__auto__.push((arguments[i__4737__auto___36726]));

var G__36727 = (i__4737__auto___36726 + (1));
i__4737__auto___36726 = G__36727;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35155__auto__","temp__35155__auto__",158348845,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35155__auto__","temp__35155__auto__",158348845,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__35155__auto__","temp__35155__auto__",158348845,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq35167){
var G__35168 = cljs.core.first(seq35167);
var seq35167__$1 = cljs.core.next(seq35167);
var G__35169 = cljs.core.first(seq35167__$1);
var seq35167__$2 = cljs.core.next(seq35167__$1);
var G__35170 = cljs.core.first(seq35167__$2);
var seq35167__$3 = cljs.core.next(seq35167__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35168,G__35169,G__35170,seq35167__$3);
}));

return null;
})()
;
(cljs.core$macros.when_some.cljs$lang$macro = true);

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35235_SHARP_){
if(cljs.core.seq_QMARK_(p1__35235_SHARP_)){
return cljs.core.first(p1__35235_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35235_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35235_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35240_SHARP_){
return cljs.core.vector_QMARK_(p1__35240_SHARP_);
}),argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__36728 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__36729 = cljs.core.next(fdecls);
ret = G__36728;
fdecls = G__36729;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,asig(fdecl),null,(1),null));
}
});
var ret__4785__auto___36730 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,init,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.defonce.cljs$lang$macro = true);

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__36731 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__36732 = n;
var G__36733 = cljs.core.nnext(bs);
var G__36734 = true;
ret = G__36731;
n = G__36732;
bs = G__36733;
seen_rest_QMARK_ = G__36734;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(cljs.core.truth_(seen_rest_QMARK_)){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__36735 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__36736 = (n + (1));
var G__36737 = cljs.core.next(bs);
var G__36738 = seen_rest_QMARK_;
ret = G__36735;
n = G__36736;
bs = G__36737;
seen_rest_QMARK_ = G__36738;
continue;
}

}
}
} else {
return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__35269_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__35269_SHARP_);
}
})(),cljs.core.name(p1__35269_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__35270_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__35270_SHARP_);
}
})(),cljs.core.name(p1__35270_SHARP_)),null,(1),null)),(2),null));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35271_SHARP_,p2__35272_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35271_SHARP_,p2__35272_SHARP_,(function (){var fexpr__35291 = cljs.core.val(entry);
return (fexpr__35291.cljs$core$IFn$_invoke$arity$1 ? fexpr__35291.cljs$core$IFn$_invoke$arity$1(p2__35272_SHARP_) : fexpr__35291.call(null,p2__35272_SHARP_));
})());
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__35293 = cljs.core.key(entry);
return (fexpr__35293.cljs$core$IFn$_invoke$arity$1 ? fexpr__35293.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__35293.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,(new cljs.core.List(null,(defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local)),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,null,(1),null)),(2),null)),(3),null)));
var G__36739 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__36740 = cljs.core.next(bes);
ret = G__36739;
bes = G__36740;
continue;
} else {
return ret;
}
break;
}
});
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});
var process_entry = (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5733__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35277_SHARP_){
return (cljs.core.first(p1__35277_SHARP_) instanceof cljs.core.Keyword);
}),bents));
if(temp__5733__auto__){
var kwbs = temp__5733__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__4785__auto___36741 = (function (){
cljs.core$macros.return_first = (function cljs$core$macros$return_first(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36742 = arguments.length;
var i__4737__auto___36743 = (0);
while(true){
if((i__4737__auto___36743 < len__4736__auto___36742)){
args__4742__auto__.push((arguments[i__4737__auto___36743]));

var G__36744 = (i__4737__auto___36743 + (1));
i__4737__auto___36743 = G__36744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35295__auto__","ret__35295__auto__",-1080041710,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35295__auto__","ret__35295__auto__",-1080041710,null),null,(1),null))], 0))));
}));

(cljs.core$macros.return_first.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.return_first.cljs$lang$applyTo = (function (seq35296){
var G__35297 = cljs.core.first(seq35296);
var seq35296__$1 = cljs.core.next(seq35296);
var G__35298 = cljs.core.first(seq35296__$1);
var seq35296__$2 = cljs.core.next(seq35296__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35297,G__35298,seq35296__$2);
}));

return null;
})()
;
(cljs.core$macros.return_first.cljs$lang$macro = true);

var ret__4785__auto___36745 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if(((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":((((default$ === true) || (default$ === false)))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?new cljs.core.Symbol("cljs.core","return-first","cljs.core/return-first",529240168,null):new cljs.core.Symbol(null,"do","do",1686842252,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
var G__35300 = m;
if((!(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"tag","tag",-1290361223))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35300,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(type));
} else {
return G__35300;
}
})),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(sym,cljs.core.assoc,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441),type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog","define","goog/define",-352722538,null),null,(1),null)),(new cljs.core.List(null,defname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.goog_define.cljs$lang$macro = true);

var ret__4785__auto___36746 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36747 = arguments.length;
var i__4737__auto___36748 = (0);
while(true){
if((i__4737__auto___36748 < len__4736__auto___36747)){
args__4742__auto__.push((arguments[i__4737__auto___36748]));

var G__36749 = (i__4737__auto___36748 + (1));
i__4737__auto___36748 = G__36749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.destructure(bindings),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.let$.cljs$lang$applyTo = (function (seq35301){
var G__35302 = cljs.core.first(seq35301);
var seq35301__$1 = cljs.core.next(seq35301);
var G__35303 = cljs.core.first(seq35301__$1);
var seq35301__$2 = cljs.core.next(seq35301__$1);
var G__35304 = cljs.core.first(seq35301__$2);
var seq35301__$3 = cljs.core.next(seq35301__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35302,G__35303,G__35304,seq35301__$3);
}));

return null;
})()
;
(cljs.core$macros.let$.cljs$lang$macro = true);

var ret__4785__auto___36750 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36751 = arguments.length;
var i__4737__auto___36752 = (0);
while(true){
if((i__4737__auto___36752 < len__4736__auto___36751)){
args__4742__auto__.push((arguments[i__4737__auto___36752]));

var G__36753 = (i__4737__auto___36752 + (1));
i__4737__auto___36752 = G__36753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
}),bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__35313){
var vec__35314 = p__35313;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bfs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(cljs.core$macros.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.loop.cljs$lang$applyTo = (function (seq35308){
var G__35309 = cljs.core.first(seq35308);
var seq35308__$1 = cljs.core.next(seq35308);
var G__35310 = cljs.core.first(seq35308__$1);
var seq35308__$2 = cljs.core.next(seq35308__$1);
var G__35311 = cljs.core.first(seq35308__$2);
var seq35308__$3 = cljs.core.next(seq35308__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35309,G__35310,G__35311,seq35308__$3);
}));

return null;
})()
;
(cljs.core$macros.loop.cljs$lang$macro = true);

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35319_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35319_SHARP_));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate((function (p__35320){
var vec__35321 = p__35320;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.compatible_QMARK_ = (function cljs$core$macros$compatible_QMARK_(inferred_tag,allowed_tags){
if(cljs.core.set_QMARK_(inferred_tag)){
return clojure.set.subset_QMARK_(inferred_tag,allowed_tags);
} else {
return cljs.core.contains_QMARK_(allowed_tags,inferred_tag);
}
});
cljs.core$macros.typed_expr_QMARK_ = (function cljs$core$macros$typed_expr_QMARK_(env,form,allowed_tags){
return cljs.core$macros.compatible_QMARK_(cljs.analyzer.infer_tag(env,(function (){var _STAR_cljs_warnings_STAR__orig_val__35327 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__35328 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__35328);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__35327);
}})()),allowed_tags);
});
cljs.core$macros.string_expr = (function cljs$core$macros$string_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null));
});
var ret__4785__auto___36782 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var G__35334 = arguments.length;
switch (G__35334) {
case 2:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36784 = arguments.length;
var i__4737__auto___36785 = (0);
while(true){
if((i__4737__auto___36785 < len__4736__auto___36784)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36785]));

var G__36787 = (i__4737__auto___36785 + (1));
i__4737__auto___36785 = G__36787;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return "";
}));

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null))){
return x;
} else {
return cljs.core$macros.string_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
}
}));

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,ys){
var interpolate = (function (x__$1){
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null))){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,ys))));
return cljs.core$macros.string_expr(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),x,ys));
}));

/** @this {Function} */
(cljs.core$macros.str.cljs$lang$applyTo = (function (seq35330){
var G__35331 = cljs.core.first(seq35330);
var seq35330__$1 = cljs.core.next(seq35330);
var G__35332 = cljs.core.first(seq35330__$1);
var seq35330__$2 = cljs.core.next(seq35330__$1);
var G__35333 = cljs.core.first(seq35330__$2);
var seq35330__$3 = cljs.core.next(seq35330__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35331,G__35332,G__35333,seq35330__$3);
}));

(cljs.core$macros.str.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.str.cljs$lang$macro = true);

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4115__auto__ = (function (){var G__35340 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__35339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__35339.cljs$core$IFn$_invoke$arity$1 ? fexpr__35339.cljs$core$IFn$_invoke$arity$1(G__35340) : fexpr__35339.call(null,G__35340));
})();
if(cljs.core.truth_(and__4115__auto__)){
var G__35342 = cljs.analyzer.infer_tag(env,ast);
var fexpr__35341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null);
return (fexpr__35341.cljs$core$IFn$_invoke$arity$1 ? fexpr__35341.cljs$core$IFn$_invoke$arity$1(G__35342) : fexpr__35341.call(null,G__35342));
} else {
return and__4115__auto__;
}
});
var ret__4785__auto___36802 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__35352 = arguments.length;
switch (G__35352) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36804 = arguments.length;
var i__4737__auto___36805 = (0);
while(true){
if((i__4737__auto___36805 < len__4736__auto___36804)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36805]));

var G__36806 = (i__4737__auto___36805 + (1));
i__4737__auto___36805 = G__36806;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
}));

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_((function (p1__35343_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__35343_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35344_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__35353 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__35354 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__35354);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__35344_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__35353);
}}),forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (p1__35345_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__35345_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null)], 0));
})(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})"))));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,and_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"and__35346__auto__","and__35346__auto__",54019787,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__35346__auto__","and__35346__auto__",54019787,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__35346__auto__","and__35346__auto__",54019787,null),null,(1),null))], 0)))),null,(1),null))], 0))));

}
}
}));

/** @this {Function} */
(cljs.core$macros.and.cljs$lang$applyTo = (function (seq35348){
var G__35349 = cljs.core.first(seq35348);
var seq35348__$1 = cljs.core.next(seq35348);
var G__35350 = cljs.core.first(seq35348__$1);
var seq35348__$2 = cljs.core.next(seq35348__$1);
var G__35351 = cljs.core.first(seq35348__$2);
var seq35348__$3 = cljs.core.next(seq35348__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35349,G__35350,G__35351,seq35348__$3);
}));

(cljs.core$macros.and.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.and.cljs$lang$macro = true);

var ret__4785__auto___36823 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__35364 = arguments.length;
switch (G__35364) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36825 = arguments.length;
var i__4737__auto___36826 = (0);
while(true){
if((i__4737__auto___36826 < len__4736__auto___36825)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36826]));

var G__36827 = (i__4737__auto___36826 + (1));
i__4737__auto___36826 = G__36827;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
}));

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_((function (p1__35355_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__35355_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35356_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__35372 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__35373 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__35373);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__35356_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__35372);
}}),forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (p1__35357_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__35357_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null)], 0));
})(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})"))));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,or_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"or__35358__auto__","or__35358__auto__",1008231227,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__35358__auto__","or__35358__auto__",1008231227,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"or__35358__auto__","or__35358__auto__",1008231227,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),next))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

/** @this {Function} */
(cljs.core$macros.or.cljs$lang$applyTo = (function (seq35360){
var G__35361 = cljs.core.first(seq35360);
var seq35360__$1 = cljs.core.next(seq35360);
var G__35362 = cljs.core.first(seq35360__$1);
var seq35360__$2 = cljs.core.next(seq35360__$1);
var G__35363 = cljs.core.first(seq35360__$2);
var seq35360__$3 = cljs.core.next(seq35360__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35361,G__35362,G__35363,seq35360__$3);
}));

(cljs.core$macros.or.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.or.cljs$lang$macro = true);

var ret__4785__auto___36857 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-=","cljs.core/coercive-=",-2012120473,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
});
(cljs.core$macros.nil_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36862 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
(cljs.core$macros.some_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36867 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(!~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.coercive_not.cljs$lang$macro = true);

var ret__4785__auto___36868 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true);

var ret__4785__auto___36872 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} == ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.coercive__EQ_.cljs$lang$macro = true);

var ret__4785__auto___36873 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
(cljs.core$macros.coercive_boolean.cljs$lang$macro = true);

var ret__4785__auto___36876 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != null && ~{} !== false)",(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.truth_.cljs$lang$macro = true);

var ret__4785__auto___36878 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"arguments",null,(1),null)),(2),null));
});
(cljs.core$macros.js_arguments.cljs$lang$macro = true);

var ret__4785__auto___36879 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"delete ~{}[~{}]",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_delete.cljs$lang$macro = true);

var ret__4785__auto___36880 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} in ~{}",(new cljs.core.List(null,key,(new cljs.core.List(null,obj,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_in.cljs$lang$macro = true);

var ret__4785__auto___36881 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"debugger",null,(1),null)),(2),null)),(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.js_debugger.cljs$lang$macro = true);

var ret__4785__auto___36886 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__35381 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__35382 = cljs.core.seq(vec__35381);
var first__35383 = cljs.core.first(seq__35382);
var seq__35382__$1 = cljs.core.next(seq__35382);
var x = first__35383;
var ys = seq__35382__$1;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["\n/**\n",[" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35380_SHARP_){
return [" * ",clojure.string.replace(p1__35380_SHARP_,/^   /,""),"\n"].join('');
}),ys)))," */\n"].join(''),null,(1),null)),(2),null));
});
(cljs.core$macros.js_comment.cljs$lang$macro = true);

var ret__4785__auto___36889 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,cast_expr,(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unsafe_cast.cljs$lang$macro = true);

var ret__4785__auto___36891 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join(''),null,(1),null)),(2),null));
});
(cljs.core$macros.js_inline_comment.cljs$lang$macro = true);

var ret__4785__auto___36895 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === true",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.true_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36898 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === false",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.false_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36899 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'string'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.string_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36900 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
var x__$1 = (function (){var G__35385 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",cljs.core.namespace(x))){
return cljs.core.name(G__35385);
} else {
return G__35385;
}
})();
var segs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"/","."),/\./);
var n = cljs.core.count(segs);
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35384_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",p1__35384_SHARP_)),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
}),cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.butlast,segs))));
var js = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"(typeof ~{} !== 'undefined')"));
return cljs.core$macros.bool_expr(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,js,null,(1),null)),(2),null)),syms));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
(cljs.core$macros.exists_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36906 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(void 0 === ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36909 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.identical_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36910 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} instanceof ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,c,null,(1),null)),(2),null)),(3),null)),(4),null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__35386__auto__","c__35386__auto__",1329590402,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35387__auto__","x__35387__auto__",2128566018,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"(~{} instanceof ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35387__auto__","x__35387__auto__",2128566018,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__35386__auto__","c__35386__auto__",1329590402,null),null,(1),null))], 0)))),null,(1),null))], 0))))));
});
(cljs.core$macros.instance_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36918 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'number'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.number_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36919 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))));
});
(cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36920 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))));
});
(cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36921 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__35394 = arguments.length;
switch (G__35394) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36924 = arguments.length;
var i__4737__auto___36925 = (0);
while(true){
if((i__4737__auto___36925 < len__4736__auto___36924)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36925]));

var G__36926 = (i__4737__auto___36925 + (1));
i__4737__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__35395 = cljs.analyzer.checked_arrays();
var G__35395__$1 = (((G__35395 instanceof cljs.core.Keyword))?G__35395.fqn:null);
switch (G__35395__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null))], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null))], 0))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,null,(1),null)),(2),null)),(3),null)),(4),null));

}
}));

(cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__35396 = cljs.analyzer.checked_arrays();
var G__35396__$1 = (((G__35396 instanceof cljs.core.Keyword))?G__35396.fqn:null);
switch (G__35396__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

}
}));

/** @this {Function} */
(cljs.core$macros.aget.cljs$lang$applyTo = (function (seq35389){
var G__35390 = cljs.core.first(seq35389);
var seq35389__$1 = cljs.core.next(seq35389);
var G__35391 = cljs.core.first(seq35389__$1);
var seq35389__$2 = cljs.core.next(seq35389__$1);
var G__35392 = cljs.core.first(seq35389__$2);
var seq35389__$3 = cljs.core.next(seq35389__$2);
var G__35393 = cljs.core.first(seq35389__$3);
var seq35389__$4 = cljs.core.next(seq35389__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35390,G__35391,G__35392,G__35393,seq35389__$4);
}));

(cljs.core$macros.aget.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.aget.cljs$lang$macro = true);

var ret__4785__auto___36935 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__35404 = arguments.length;
switch (G__35404) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36937 = arguments.length;
var i__4737__auto___36938 = (0);
while(true){
if((i__4737__auto___36938 < len__4736__auto___36937)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36938]));

var G__36939 = (i__4737__auto___36938 + (1));
i__4737__auto___36938 = G__36939;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__35406 = cljs.analyzer.checked_arrays();
var G__35406__$1 = (((G__35406 instanceof cljs.core.Keyword))?G__35406.fqn:null);
switch (G__35406__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))], 0))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));

}
}));

(cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__35408 = cljs.analyzer.checked_arrays();
var G__35408__$1 = (((G__35408 instanceof cljs.core.Keyword))?G__35408.fqn:null);
switch (G__35408__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

}
}));

/** @this {Function} */
(cljs.core$macros.aset.cljs$lang$applyTo = (function (seq35398){
var G__35399 = cljs.core.first(seq35398);
var seq35398__$1 = cljs.core.next(seq35398);
var G__35400 = cljs.core.first(seq35398__$1);
var seq35398__$2 = cljs.core.next(seq35398__$1);
var G__35401 = cljs.core.first(seq35398__$2);
var seq35398__$3 = cljs.core.next(seq35398__$2);
var G__35402 = cljs.core.first(seq35398__$3);
var seq35398__$4 = cljs.core.next(seq35398__$3);
var G__35403 = cljs.core.first(seq35398__$4);
var seq35398__$5 = cljs.core.next(seq35398__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35399,G__35400,G__35401,G__35402,G__35403,seq35398__$5);
}));

(cljs.core$macros.aset.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.aset.cljs$lang$macro = true);

var ret__4785__auto___36943 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unchecked_get.cljs$lang$macro = true);

var ret__4785__auto___36944 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
(cljs.core$macros.unchecked_set.cljs$lang$macro = true);

var ret__4785__auto___36945 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__35421 = arguments.length;
switch (G__35421) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___36947 = arguments.length;
var i__4737__auto___36948 = (0);
while(true){
if((i__4737__auto___36948 < len__4736__auto___36947)){
args_arr__4757__auto__.push((arguments[i__4737__auto___36948]));

var G__36949 = (i__4737__auto___36948 + (1));
i__4737__auto___36948 = G__36949;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} + ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq35416){
var G__35417 = cljs.core.first(seq35416);
var seq35416__$1 = cljs.core.next(seq35416);
var G__35418 = cljs.core.first(seq35416__$1);
var seq35416__$2 = cljs.core.next(seq35416__$1);
var G__35419 = cljs.core.first(seq35416__$2);
var seq35416__$3 = cljs.core.next(seq35416__$2);
var G__35420 = cljs.core.first(seq35416__$3);
var seq35416__$4 = cljs.core.next(seq35416__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35417,G__35418,G__35419,G__35420,seq35416__$4);
}));

(cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._PLUS_.cljs$lang$macro = true);

var ret__4785__auto___36950 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.byte$.cljs$lang$macro = true);

var ret__4785__auto___36951 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.short$.cljs$lang$macro = true);

var ret__4785__auto___36952 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.float$.cljs$lang$macro = true);

var ret__4785__auto___36953 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.double$.cljs$lang$macro = true);

var ret__4785__auto___36954 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_byte.cljs$lang$macro = true);

var ret__4785__auto___36955 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_char.cljs$lang$macro = true);

var ret__4785__auto___36956 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_short.cljs$lang$macro = true);

var ret__4785__auto___36957 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_float.cljs$lang$macro = true);

var ret__4785__auto___36958 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_double.cljs$lang$macro = true);

var ret__4785__auto___36959 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36960 = arguments.length;
var i__4737__auto___36961 = (0);
while(true){
if((i__4737__auto___36961 < len__4736__auto___36960)){
args__4742__auto__.push((arguments[i__4737__auto___36961]));

var G__36962 = (i__4737__auto___36961 + (1));
i__4737__auto___36961 = G__36962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq35430){
var G__35431 = cljs.core.first(seq35430);
var seq35430__$1 = cljs.core.next(seq35430);
var G__35432 = cljs.core.first(seq35430__$1);
var seq35430__$2 = cljs.core.next(seq35430__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35431,G__35432,seq35430__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_add.cljs$lang$macro = true);

var ret__4785__auto___36963 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36964 = arguments.length;
var i__4737__auto___36965 = (0);
while(true){
if((i__4737__auto___36965 < len__4736__auto___36964)){
args__4742__auto__.push((arguments[i__4737__auto___36965]));

var G__36966 = (i__4737__auto___36965 + (1));
i__4737__auto___36965 = G__36966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq35433){
var G__35434 = cljs.core.first(seq35433);
var seq35433__$1 = cljs.core.next(seq35433);
var G__35435 = cljs.core.first(seq35433__$1);
var seq35433__$2 = cljs.core.next(seq35433__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35434,G__35435,seq35433__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_add_int.cljs$lang$macro = true);

var ret__4785__auto___36967 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_dec.cljs$lang$macro = true);

var ret__4785__auto___36969 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true);

var ret__4785__auto___36970 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36971 = arguments.length;
var i__4737__auto___36972 = (0);
while(true){
if((i__4737__auto___36972 < len__4736__auto___36971)){
args__4742__auto__.push((arguments[i__4737__auto___36972]));

var G__36973 = (i__4737__auto___36972 + (1));
i__4737__auto___36972 = G__36973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq35442){
var G__35443 = cljs.core.first(seq35442);
var seq35442__$1 = cljs.core.next(seq35442);
var G__35444 = cljs.core.first(seq35442__$1);
var seq35442__$2 = cljs.core.next(seq35442__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35443,G__35444,seq35442__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true);

var ret__4785__auto___36978 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_inc.cljs$lang$macro = true);

var ret__4785__auto___36979 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true);

var ret__4785__auto___36984 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36985 = arguments.length;
var i__4737__auto___36986 = (0);
while(true){
if((i__4737__auto___36986 < len__4736__auto___36985)){
args__4742__auto__.push((arguments[i__4737__auto___36986]));

var G__36988 = (i__4737__auto___36986 + (1));
i__4737__auto___36986 = G__36988;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq35447){
var G__35448 = cljs.core.first(seq35447);
var seq35447__$1 = cljs.core.next(seq35447);
var G__35449 = cljs.core.first(seq35447__$1);
var seq35447__$2 = cljs.core.next(seq35447__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35448,G__35449,seq35447__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_multiply.cljs$lang$macro = true);

var ret__4785__auto___36990 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36991 = arguments.length;
var i__4737__auto___36992 = (0);
while(true){
if((i__4737__auto___36992 < len__4736__auto___36991)){
args__4742__auto__.push((arguments[i__4737__auto___36992]));

var G__36993 = (i__4737__auto___36992 + (1));
i__4737__auto___36992 = G__36993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq35450){
var G__35451 = cljs.core.first(seq35450);
var seq35450__$1 = cljs.core.next(seq35450);
var G__35452 = cljs.core.first(seq35450__$1);
var seq35450__$2 = cljs.core.next(seq35450__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35451,G__35452,seq35450__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true);

var ret__4785__auto___37002 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_negate.cljs$lang$macro = true);

var ret__4785__auto___37006 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true);

var ret__4785__auto___37011 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("core","mod","core/mod",1513235024,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
});
(cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true);

var ret__4785__auto___37012 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37013 = arguments.length;
var i__4737__auto___37014 = (0);
while(true){
if((i__4737__auto___37014 < len__4736__auto___37013)){
args__4742__auto__.push((arguments[i__4737__auto___37014]));

var G__37015 = (i__4737__auto___37014 + (1));
i__4737__auto___37014 = G__37015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq35454){
var G__35455 = cljs.core.first(seq35454);
var seq35454__$1 = cljs.core.next(seq35454);
var G__35456 = cljs.core.first(seq35454__$1);
var seq35454__$2 = cljs.core.next(seq35454__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35455,G__35456,seq35454__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_subtract.cljs$lang$macro = true);

var ret__4785__auto___37020 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37022 = arguments.length;
var i__4737__auto___37023 = (0);
while(true){
if((i__4737__auto___37023 < len__4736__auto___37022)){
args__4742__auto__.push((arguments[i__4737__auto___37023]));

var G__37025 = (i__4737__auto___37023 + (1));
i__4737__auto___37023 = G__37025;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq35470){
var G__35471 = cljs.core.first(seq35470);
var seq35470__$1 = cljs.core.next(seq35470);
var G__35472 = cljs.core.first(seq35470__$1);
var seq35470__$2 = cljs.core.next(seq35470__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35471,G__35472,seq35470__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true);

var ret__4785__auto___37029 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__35482 = arguments.length;
switch (G__35482) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37032 = arguments.length;
var i__4737__auto___37033 = (0);
while(true){
if((i__4737__auto___37033 < len__4736__auto___37032)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37033]));

var G__37040 = (i__4737__auto___37033 + (1));
i__4737__auto___37033 = G__37040;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(- ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} - ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._.cljs$lang$applyTo = (function (seq35477){
var G__35478 = cljs.core.first(seq35477);
var seq35477__$1 = cljs.core.next(seq35477);
var G__35479 = cljs.core.first(seq35477__$1);
var seq35477__$2 = cljs.core.next(seq35477__$1);
var G__35480 = cljs.core.first(seq35477__$2);
var seq35477__$3 = cljs.core.next(seq35477__$2);
var G__35481 = cljs.core.first(seq35477__$3);
var seq35477__$4 = cljs.core.next(seq35477__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35478,G__35479,G__35480,G__35481,seq35477__$4);
}));

(cljs.core$macros._.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._.cljs$lang$macro = true);

var ret__4785__auto___37046 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__35491 = arguments.length;
switch (G__35491) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37052 = arguments.length;
var i__4737__auto___37053 = (0);
while(true){
if((i__4737__auto___37053 < len__4736__auto___37052)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37053]));

var G__37054 = (i__4737__auto___37053 + (1));
i__4737__auto___37053 = G__37054;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} * ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq35486){
var G__35487 = cljs.core.first(seq35486);
var seq35486__$1 = cljs.core.next(seq35486);
var G__35488 = cljs.core.first(seq35486__$1);
var seq35486__$2 = cljs.core.next(seq35486__$1);
var G__35489 = cljs.core.first(seq35486__$2);
var seq35486__$3 = cljs.core.next(seq35486__$2);
var G__35490 = cljs.core.first(seq35486__$3);
var seq35486__$4 = cljs.core.next(seq35486__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35487,G__35488,G__35489,G__35490,seq35486__$4);
}));

(cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._STAR_.cljs$lang$macro = true);

var ret__4785__auto___37065 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__35498 = arguments.length;
switch (G__35498) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37069 = arguments.length;
var i__4737__auto___37070 = (0);
while(true){
if((i__4737__auto___37070 < len__4736__auto___37069)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37070]));

var G__37073 = (i__4737__auto___37070 + (1));
i__4737__auto___37070 = G__37073;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq35493){
var G__35494 = cljs.core.first(seq35493);
var seq35493__$1 = cljs.core.next(seq35493);
var G__35495 = cljs.core.first(seq35493__$1);
var seq35493__$2 = cljs.core.next(seq35493__$1);
var G__35496 = cljs.core.first(seq35493__$2);
var seq35493__$3 = cljs.core.next(seq35493__$2);
var G__35497 = cljs.core.first(seq35493__$3);
var seq35493__$4 = cljs.core.next(seq35493__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35494,G__35495,G__35496,G__35497,seq35493__$4);
}));

(cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._SLASH_.cljs$lang$macro = true);

var ret__4785__auto___37080 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__35505 = arguments.length;
switch (G__35505) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37083 = arguments.length;
var i__4737__auto___37084 = (0);
while(true){
if((i__4737__auto___37084 < len__4736__auto___37083)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37084]));

var G__37089 = (i__4737__auto___37084 + (1));
i__4737__auto___37084 = G__37089;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.divide.cljs$lang$applyTo = (function (seq35500){
var G__35501 = cljs.core.first(seq35500);
var seq35500__$1 = cljs.core.next(seq35500);
var G__35502 = cljs.core.first(seq35500__$1);
var seq35500__$2 = cljs.core.next(seq35500__$1);
var G__35503 = cljs.core.first(seq35500__$2);
var seq35500__$3 = cljs.core.next(seq35500__$2);
var G__35504 = cljs.core.first(seq35500__$3);
var seq35500__$4 = cljs.core.next(seq35500__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35501,G__35502,G__35503,G__35504,seq35500__$4);
}));

(cljs.core$macros.divide.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.divide.cljs$lang$macro = true);

var ret__4785__auto___37108 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__35513 = arguments.length;
switch (G__35513) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37115 = arguments.length;
var i__4737__auto___37117 = (0);
while(true){
if((i__4737__auto___37117 < len__4736__auto___37115)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37117]));

var G__37120 = (i__4737__auto___37117 + (1));
i__4737__auto___37117 = G__37120;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} < ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq35508){
var G__35509 = cljs.core.first(seq35508);
var seq35508__$1 = cljs.core.next(seq35508);
var G__35510 = cljs.core.first(seq35508__$1);
var seq35508__$2 = cljs.core.next(seq35508__$1);
var G__35511 = cljs.core.first(seq35508__$2);
var seq35508__$3 = cljs.core.next(seq35508__$2);
var G__35512 = cljs.core.first(seq35508__$3);
var seq35508__$4 = cljs.core.next(seq35508__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35509,G__35510,G__35511,G__35512,seq35508__$4);
}));

(cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._LT_.cljs$lang$macro = true);

var ret__4785__auto___37145 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__35520 = arguments.length;
switch (G__35520) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37165 = arguments.length;
var i__4737__auto___37166 = (0);
while(true){
if((i__4737__auto___37166 < len__4736__auto___37165)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37166]));

var G__37168 = (i__4737__auto___37166 + (1));
i__4737__auto___37166 = G__37168;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} <= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq35515){
var G__35516 = cljs.core.first(seq35515);
var seq35515__$1 = cljs.core.next(seq35515);
var G__35517 = cljs.core.first(seq35515__$1);
var seq35515__$2 = cljs.core.next(seq35515__$1);
var G__35518 = cljs.core.first(seq35515__$2);
var seq35515__$3 = cljs.core.next(seq35515__$2);
var G__35519 = cljs.core.first(seq35515__$3);
var seq35515__$4 = cljs.core.next(seq35515__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35516,G__35517,G__35518,G__35519,seq35515__$4);
}));

(cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._LT__EQ_.cljs$lang$macro = true);

var ret__4785__auto___37201 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__35527 = arguments.length;
switch (G__35527) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37206 = arguments.length;
var i__4737__auto___37207 = (0);
while(true){
if((i__4737__auto___37207 < len__4736__auto___37206)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37207]));

var G__37210 = (i__4737__auto___37207 + (1));
i__4737__auto___37207 = G__37210;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} > ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq35522){
var G__35523 = cljs.core.first(seq35522);
var seq35522__$1 = cljs.core.next(seq35522);
var G__35524 = cljs.core.first(seq35522__$1);
var seq35522__$2 = cljs.core.next(seq35522__$1);
var G__35525 = cljs.core.first(seq35522__$2);
var seq35522__$3 = cljs.core.next(seq35522__$2);
var G__35526 = cljs.core.first(seq35522__$3);
var seq35522__$4 = cljs.core.next(seq35522__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35523,G__35524,G__35525,G__35526,seq35522__$4);
}));

(cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._GT_.cljs$lang$macro = true);

var ret__4785__auto___37233 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__35534 = arguments.length;
switch (G__35534) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37236 = arguments.length;
var i__4737__auto___37237 = (0);
while(true){
if((i__4737__auto___37237 < len__4736__auto___37236)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37237]));

var G__37238 = (i__4737__auto___37237 + (1));
i__4737__auto___37237 = G__37238;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq35529){
var G__35530 = cljs.core.first(seq35529);
var seq35529__$1 = cljs.core.next(seq35529);
var G__35531 = cljs.core.first(seq35529__$1);
var seq35529__$2 = cljs.core.next(seq35529__$1);
var G__35532 = cljs.core.first(seq35529__$2);
var seq35529__$3 = cljs.core.next(seq35529__$2);
var G__35533 = cljs.core.first(seq35529__$3);
var seq35529__$4 = cljs.core.next(seq35529__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35530,G__35531,G__35532,G__35533,seq35529__$4);
}));

(cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._GT__EQ_.cljs$lang$macro = true);

var ret__4785__auto___37258 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__35541 = arguments.length;
switch (G__35541) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37263 = arguments.length;
var i__4737__auto___37264 = (0);
while(true){
if((i__4737__auto___37264 < len__4736__auto___37263)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37264]));

var G__37265 = (i__4737__auto___37264 + (1));
i__4737__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq35536){
var G__35537 = cljs.core.first(seq35536);
var seq35536__$1 = cljs.core.next(seq35536);
var G__35538 = cljs.core.first(seq35536__$1);
var seq35536__$2 = cljs.core.next(seq35536__$1);
var G__35539 = cljs.core.first(seq35536__$2);
var seq35536__$3 = cljs.core.next(seq35536__$2);
var G__35540 = cljs.core.first(seq35536__$3);
var seq35536__$4 = cljs.core.next(seq35536__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35537,G__35538,G__35539,G__35540,seq35536__$4);
}));

(cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._EQ__EQ_.cljs$lang$macro = true);

var ret__4785__auto___37272 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0))));
});
(cljs.core$macros.dec.cljs$lang$macro = true);

var ret__4785__auto___37273 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0))));
});
(cljs.core$macros.inc.cljs$lang$macro = true);

var ret__4785__auto___37275 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.zero_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___37276 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.pos_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___37278 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.neg_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___37279 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__35561 = arguments.length;
switch (G__35561) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37282 = arguments.length;
var i__4737__auto___37283 = (0);
while(true){
if((i__4737__auto___37283 < len__4736__auto___37282)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37283]));

var G__37284 = (i__4737__auto___37283 + (1));
i__4737__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35553__auto__","x__35553__auto__",-1676845981,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35554__auto__","y__35554__auto__",-702041195,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} > ~{}) ? ~{} : ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35553__auto__","x__35553__auto__",-1676845981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35554__auto__","y__35554__auto__",-702041195,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35553__auto__","x__35553__auto__",-1676845981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35554__auto__","y__35554__auto__",-702041195,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.max.cljs$lang$applyTo = (function (seq35556){
var G__35557 = cljs.core.first(seq35556);
var seq35556__$1 = cljs.core.next(seq35556);
var G__35558 = cljs.core.first(seq35556__$1);
var seq35556__$2 = cljs.core.next(seq35556__$1);
var G__35559 = cljs.core.first(seq35556__$2);
var seq35556__$3 = cljs.core.next(seq35556__$2);
var G__35560 = cljs.core.first(seq35556__$3);
var seq35556__$4 = cljs.core.next(seq35556__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35557,G__35558,G__35559,G__35560,seq35556__$4);
}));

(cljs.core$macros.max.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.max.cljs$lang$macro = true);

var ret__4785__auto___37300 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__35570 = arguments.length;
switch (G__35570) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37302 = arguments.length;
var i__4737__auto___37303 = (0);
while(true){
if((i__4737__auto___37303 < len__4736__auto___37302)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37303]));

var G__37304 = (i__4737__auto___37303 + (1));
i__4737__auto___37303 = G__37304;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35562__auto__","x__35562__auto__",-119002419,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35563__auto__","y__35563__auto__",-852545475,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} < ~{}) ? ~{} : ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35562__auto__","x__35562__auto__",-119002419,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35563__auto__","y__35563__auto__",-852545475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35562__auto__","x__35562__auto__",-119002419,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__35563__auto__","y__35563__auto__",-852545475,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.min.cljs$lang$applyTo = (function (seq35565){
var G__35566 = cljs.core.first(seq35565);
var seq35565__$1 = cljs.core.next(seq35565);
var G__35567 = cljs.core.first(seq35565__$1);
var seq35565__$2 = cljs.core.next(seq35565__$1);
var G__35568 = cljs.core.first(seq35565__$2);
var seq35565__$3 = cljs.core.next(seq35565__$2);
var G__35569 = cljs.core.first(seq35565__$3);
var seq35565__$4 = cljs.core.next(seq35565__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35566,G__35567,G__35568,G__35569,seq35565__$4);
}));

(cljs.core$macros.min.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.min.cljs$lang$macro = true);

var ret__4785__auto___37316 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} % ~{})",(new cljs.core.List(null,num,(new cljs.core.List(null,div,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_mod.cljs$lang$macro = true);

var ret__4785__auto___37318 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~ ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.bit_not.cljs$lang$macro = true);

var ret__4785__auto___37325 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__35577 = arguments.length;
switch (G__35577) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37327 = arguments.length;
var i__4737__auto___37328 = (0);
while(true){
if((i__4737__auto___37328 < len__4736__auto___37327)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37328]));

var G__37347 = (i__4737__auto___37328 + (1));
i__4737__auto___37328 = G__37347;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq35572){
var G__35573 = cljs.core.first(seq35572);
var seq35572__$1 = cljs.core.next(seq35572);
var G__35574 = cljs.core.first(seq35572__$1);
var seq35572__$2 = cljs.core.next(seq35572__$1);
var G__35575 = cljs.core.first(seq35572__$2);
var seq35572__$3 = cljs.core.next(seq35572__$2);
var G__35576 = cljs.core.first(seq35572__$3);
var seq35572__$4 = cljs.core.next(seq35572__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35573,G__35574,G__35575,G__35576,seq35572__$4);
}));

(cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_and.cljs$lang$macro = true);

var ret__4785__auto___37363 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__35585 = arguments.length;
switch (G__35585) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37365 = arguments.length;
var i__4737__auto___37366 = (0);
while(true){
if((i__4737__auto___37366 < len__4736__auto___37365)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37366]));

var G__37370 = (i__4737__auto___37366 + (1));
i__4737__auto___37366 = G__37370;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq35579){
var G__35580 = cljs.core.first(seq35579);
var seq35579__$1 = cljs.core.next(seq35579);
var G__35581 = cljs.core.first(seq35579__$1);
var seq35579__$2 = cljs.core.next(seq35579__$1);
var G__35582 = cljs.core.first(seq35579__$2);
var seq35579__$3 = cljs.core.next(seq35579__$2);
var G__35583 = cljs.core.first(seq35579__$3);
var seq35579__$4 = cljs.core.next(seq35579__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35580,G__35581,G__35582,G__35583,seq35579__$4);
}));

(cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true);

var ret__4785__auto___37371 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__35593 = arguments.length;
switch (G__35593) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37375 = arguments.length;
var i__4737__auto___37376 = (0);
while(true){
if((i__4737__auto___37376 < len__4736__auto___37375)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37376]));

var G__37377 = (i__4737__auto___37376 + (1));
i__4737__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq35588){
var G__35589 = cljs.core.first(seq35588);
var seq35588__$1 = cljs.core.next(seq35588);
var G__35590 = cljs.core.first(seq35588__$1);
var seq35588__$2 = cljs.core.next(seq35588__$1);
var G__35591 = cljs.core.first(seq35588__$2);
var seq35588__$3 = cljs.core.next(seq35588__$2);
var G__35592 = cljs.core.first(seq35588__$3);
var seq35588__$4 = cljs.core.next(seq35588__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35589,G__35590,G__35591,G__35592,seq35588__$4);
}));

(cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_or.cljs$lang$macro = true);

var ret__4785__auto___37379 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.int$.cljs$lang$macro = true);

var ret__4785__auto___37380 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__35600 = arguments.length;
switch (G__35600) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37382 = arguments.length;
var i__4737__auto___37383 = (0);
while(true){
if((i__4737__auto___37383 < len__4736__auto___37382)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37383]));

var G__37384 = (i__4737__auto___37383 + (1));
i__4737__auto___37383 = G__37384;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq35595){
var G__35596 = cljs.core.first(seq35595);
var seq35595__$1 = cljs.core.next(seq35595);
var G__35597 = cljs.core.first(seq35595__$1);
var seq35595__$2 = cljs.core.next(seq35595__$1);
var G__35598 = cljs.core.first(seq35595__$2);
var seq35595__$3 = cljs.core.next(seq35595__$2);
var G__35599 = cljs.core.first(seq35595__$3);
var seq35595__$4 = cljs.core.next(seq35595__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35596,G__35597,G__35598,G__35599,seq35595__$4);
}));

(cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_xor.cljs$lang$macro = true);

var ret__4785__auto___37395 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__35607 = arguments.length;
switch (G__35607) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37398 = arguments.length;
var i__4737__auto___37400 = (0);
while(true){
if((i__4737__auto___37400 < len__4736__auto___37398)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37400]));

var G__37401 = (i__4737__auto___37400 + (1));
i__4737__auto___37400 = G__37401;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq35602){
var G__35603 = cljs.core.first(seq35602);
var seq35602__$1 = cljs.core.next(seq35602);
var G__35604 = cljs.core.first(seq35602__$1);
var seq35602__$2 = cljs.core.next(seq35602__$1);
var G__35605 = cljs.core.first(seq35602__$2);
var seq35602__$3 = cljs.core.next(seq35602__$2);
var G__35606 = cljs.core.first(seq35602__$3);
var seq35602__$4 = cljs.core.next(seq35602__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35603,G__35604,G__35605,G__35606,seq35602__$4);
}));

(cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_and_not.cljs$lang$macro = true);

var ret__4785__auto___37408 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~(1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_clear.cljs$lang$macro = true);

var ret__4785__auto___37411 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_flip.cljs$lang$macro = true);

var ret__4785__auto___37413 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} & (1 << ~{})) != 0)",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.bit_test.cljs$lang$macro = true);

var ret__4785__auto___37418 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} << ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_left.cljs$lang$macro = true);

var ret__4785__auto___37420 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_right.cljs$lang$macro = true);

var ret__4785__auto___37425 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true);

var ret__4785__auto___37427 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true);

var ret__4785__auto___37431 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_set.cljs$lang$macro = true);

var ret__4785__auto___37433 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} >>> ~{}) & 0x01f)",(new cljs.core.List(null,hash,(new cljs.core.List(null,shift,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.mask.cljs$lang$macro = true);

var ret__4785__auto___37446 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(1 << ~{})",(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mask","cljs.core/mask",1721570575,null),null,(1),null)),(new cljs.core.List(null,hash,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,shift,null,(1),null))], 0)))),null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.bitpos.cljs$lang$macro = true);

var ret__4785__auto___37448 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hash_fn,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__35642__auto__","h__35642__auto__",-1299226250,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.caching_hash.cljs$lang$macro = true);

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cargs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35648__auto__","x__35648__auto__",1249873446,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35648__auto__","x__35648__auto__",1249873446,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),body))),null,(1),null))], 0))));
});
var ret__4785__auto___37466 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37467 = arguments.length;
var i__4737__auto___37468 = (0);
while(true){
if((i__4737__auto___37468 < len__4736__auto___37467)){
args__4742__auto__.push((arguments[i__4737__auto___37468]));

var G__37471 = (i__4737__auto___37468 + (1));
i__4737__auto___37468 = G__37471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((6) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4743__auto__);
});

(cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
}));

(cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq35662){
var G__35663 = cljs.core.first(seq35662);
var seq35662__$1 = cljs.core.next(seq35662);
var G__35664 = cljs.core.first(seq35662__$1);
var seq35662__$2 = cljs.core.next(seq35662__$1);
var G__35665 = cljs.core.first(seq35662__$2);
var seq35662__$3 = cljs.core.next(seq35662__$2);
var G__35666 = cljs.core.first(seq35662__$3);
var seq35662__$4 = cljs.core.next(seq35662__$3);
var G__35667 = cljs.core.first(seq35662__$4);
var seq35662__$5 = cljs.core.next(seq35662__$4);
var G__35668 = cljs.core.first(seq35662__$5);
var seq35662__$6 = cljs.core.next(seq35662__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35663,G__35664,G__35665,G__35666,G__35667,G__35668,seq35662__$6);
}));

return null;
})()
;
(cljs.core$macros.defcurried.cljs$lang$macro = true);

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,f1,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,clojure.walk.postwalk((function (p1__35672_SHARP_){
if(cljs.core.sequential_QMARK_(p1__35672_SHARP_)){
var G__35676 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__35672_SHARP_);
var fexpr__35675 = ((cljs.core.vector_QMARK_(p1__35672_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__35675.cljs$core$IFn$_invoke$arity$1 ? fexpr__35675.cljs$core$IFn$_invoke$arity$1(G__35676) : fexpr__35675.call(null,G__35676));
} else {
return p1__35672_SHARP_;
}
}),fkv),null,(1),null)),(new cljs.core.List(null,fkv,null,(1),null))], 0))));
});
var ret__4785__auto___37478 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__35677,fkv){
var vec__35678 = p__35677;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35678,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
(cljs.core$macros.rfn.cljs$lang$macro = true);

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__4785__auto___37484 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37485 = arguments.length;
var i__4737__auto___37486 = (0);
while(true){
if((i__4737__auto___37486 < len__4736__auto___37485)){
args__4742__auto__.push((arguments[i__4737__auto___37486]));

var G__37488 = (i__4737__auto___37486 + (1));
i__4737__auto___37486 = G__37488;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_)),".","$")].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(new cljs.core.List(null,meta_sym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,this_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meta_sym,null,(1),null))], 0)))),null,(1),null)),impls], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(new cljs.core.List(null,cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form)),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.reify.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.reify.cljs$lang$applyTo = (function (seq35681){
var G__35682 = cljs.core.first(seq35681);
var seq35681__$1 = cljs.core.next(seq35681);
var G__35683 = cljs.core.first(seq35681__$1);
var seq35681__$2 = cljs.core.next(seq35681__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35682,G__35683,seq35681__$2);
}));

return null;
})()
;
(cljs.core$macros.reify.cljs$lang$macro = true);

var ret__4785__auto___37497 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37498 = arguments.length;
var i__4737__auto___37499 = (0);
while(true){
if((i__4737__auto___37499 < len__4736__auto___37498)){
args__4742__auto__.push((arguments[i__4737__auto___37499]));

var G__37500 = (i__4737__auto___37499 + (1));
i__4737__auto___37499 = G__37500;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq35686){
var G__35687 = cljs.core.first(seq35686);
var seq35686__$1 = cljs.core.next(seq35686);
var G__35688 = cljs.core.first(seq35686__$1);
var seq35686__$2 = cljs.core.next(seq35686__$1);
var G__35689 = cljs.core.first(seq35686__$2);
var seq35686__$3 = cljs.core.next(seq35686__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35687,G__35688,G__35689,seq35686__$3);
}));

return null;
})()
;
(cljs.core$macros.specify_BANG_.cljs$lang$macro = true);

var ret__4785__auto___37505 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37506 = arguments.length;
var i__4737__auto___37507 = (0);
while(true){
if((i__4737__auto___37507 < len__4736__auto___37506)){
args__4742__auto__.push((arguments[i__4737__auto___37507]));

var G__37509 = (i__4737__auto___37507 + (1));
i__4737__auto___37507 = G__37509;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
}));

(cljs.core$macros.specify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.specify.cljs$lang$applyTo = (function (seq35693){
var G__35694 = cljs.core.first(seq35693);
var seq35693__$1 = cljs.core.next(seq35693);
var G__35695 = cljs.core.first(seq35693__$1);
var seq35693__$2 = cljs.core.next(seq35693__$1);
var G__35696 = cljs.core.first(seq35693__$2);
var seq35693__$3 = cljs.core.next(seq35693__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35694,G__35695,G__35696,seq35693__$3);
}));

return null;
})()
;
(cljs.core$macros.specify.cljs$lang$macro = true);

var ret__4785__auto___37531 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"this",null,(1),null)),(2),null));
});
(cljs.core$macros.js_this.cljs$lang$macro = true);

var ret__4785__auto___37534 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37535 = arguments.length;
var i__4737__auto___37536 = (0);
while(true){
if((i__4737__auto___37536 < len__4736__auto___37535)){
args__4742__auto__.push((arguments[i__4737__auto___37536]));

var G__37537 = (i__4737__auto___37536 + (1));
i__4737__auto___37536 = G__37537;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-this","cljs.core/js-this",29003817,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq35698){
var G__35699 = cljs.core.first(seq35698);
var seq35698__$1 = cljs.core.next(seq35698);
var G__35700 = cljs.core.first(seq35698__$1);
var seq35698__$2 = cljs.core.next(seq35698__$1);
var G__35701 = cljs.core.first(seq35698__$2);
var seq35698__$3 = cljs.core.next(seq35698__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35699,G__35700,G__35701,seq35698__$3);
}));

return null;
})()
;
(cljs.core$macros.this_as.cljs$lang$macro = true);

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.update_protocol_var = (function cljs$core$macros$update_protocol_var(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5733__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5733__auto__)){
var var$ = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),(function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
}));
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__37542 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__37543 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__37542;
s = G__37543;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__35708){
var vec__35709 = p__35708;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709,(1),null);
cljs.core$macros.update_protocol_var(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym),(0),(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35712){
var vec__35713 = p__35712;
var seq__35714 = cljs.core.seq(vec__35713);
var first__35715 = cljs.core.first(seq__35714);
var seq__35714__$1 = cljs.core.next(seq__35714);
var f = first__35715;
var meths = seq__35714__$1;
var form = vec__35713;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([pfn_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),meths))),cljs.core.meta(form)),null,(1),null))], 0))));
}),sigs));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core$macros !== 'undefined') && (typeof cljs.core$macros.extend_prefix !== 'undefined')){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35717 = cljs.core.get_global_hierarchy;
return (fexpr__35717.cljs$core$IFn$_invoke$arity$0 ? fexpr__35717.cljs$core$IFn$_invoke$arity$0() : fexpr__35717.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),(function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(sym),null,(1),null))], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property(sym),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend-type","extend-type",-517175606),true], null));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__35719){
var vec__35720 = p__35719;
var seq__35721 = cljs.core.seq(vec__35720);
var first__35722 = cljs.core.first(seq__35721);
var seq__35721__$1 = cljs.core.next(seq__35721);
var vec__35723 = first__35722;
var seq__35724 = cljs.core.seq(vec__35723);
var first__35725 = cljs.core.first(seq__35724);
var seq__35724__$1 = cljs.core.next(seq__35724);
var this$ = first__35725;
var args = seq__35724__$1;
var sig = vec__35723;
var body = seq__35721__$1;
return (new cljs.core.List(null,cljs.core.vec(args),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body),null,(1),null)),(2),null));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__35726){
var vec__35727 = p__35726;
var seq__35728 = cljs.core.seq(vec__35727);
var first__35729 = cljs.core.first(seq__35728);
var seq__35728__$1 = cljs.core.next(seq__35728);
var vec__35730 = first__35729;
var seq__35731 = cljs.core.seq(vec__35730);
var first__35732 = cljs.core.first(seq__35731);
var seq__35731__$1 = cljs.core.next(seq__35731);
var this$ = first__35732;
var args = seq__35731__$1;
var sig = vec__35730;
var body = seq__35728__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.cons(self_sym,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__35733){
var vec__35734 = p__35733;
var seq__35735 = cljs.core.seq(vec__35734);
var first__35736 = cljs.core.first(seq__35735);
var seq__35735__$1 = cljs.core.next(seq__35735);
var vec__35737 = first__35736;
var seq__35738 = cljs.core.seq(vec__35737);
var first__35739 = cljs.core.first(seq__35738);
var seq__35738__$1 = cljs.core.next(seq__35738);
var this$ = first__35739;
var args = seq__35738__$1;
var sig = vec__35737;
var body = seq__35735__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(args),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__35740){
var vec__35742 = p__35740;
var seq__35743 = cljs.core.seq(vec__35742);
var first__35744 = cljs.core.first(seq__35743);
var seq__35743__$1 = cljs.core.next(seq__35743);
var vec__35745 = first__35744;
var seq__35746 = cljs.core.seq(vec__35745);
var first__35747 = cljs.core.first(seq__35746);
var seq__35746__$1 = cljs.core.next(seq__35746);
var this$ = first__35747;
var args = seq__35746__$1;
var sig = vec__35745;
var body = seq__35743__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,this_SINGLEQUOTE_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35749){
var vec__35750 = p__35749;
var seq__35751 = cljs.core.seq(vec__35750);
var first__35752 = cljs.core.first(seq__35751);
var seq__35751__$1 = cljs.core.next(seq__35751);
var f = first__35752;
var meths = seq__35751__$1;
var form = vec__35750;
var vec__35753 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35748_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__35748_SHARP_);
}),meths__$1)))),cljs.core.meta(form)),null,(1),null))], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__35758){
var vec__35759 = p__35758;
var seq__35760 = cljs.core.seq(vec__35759);
var first__35761 = cljs.core.first(seq__35760);
var seq__35760__$1 = cljs.core.next(seq__35760);
var f = first__35761;
var meths = seq__35760__$1;
var form = vec__35759;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,meth,null,(1),null))))),cljs.core.meta(form)),null,(1),null))], 0))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35757_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__35757_SHARP_);
}),meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__35763){
var vec__35764 = p__35763;
var seq__35765 = cljs.core.seq(vec__35764);
var first__35766 = cljs.core.first(seq__35765);
var seq__35765__$1 = cljs.core.next(seq__35765);
var f = first__35766;
var meths = seq__35765__$1;
var form = vec__35764;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35762_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__35762_SHARP_);
}),meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),meths__$1))),cljs.core.meta(form)),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-call",".-call",1760541695,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".concat",".concat",1180408684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,argsym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.meta(form)),null,(1),null))], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__35772){
var vec__35773 = p__35772;
var seq__35774 = cljs.core.seq(vec__35773);
var first__35775 = cljs.core.first(seq__35774);
var seq__35774__$1 = cljs.core.next(seq__35774);
var f = first__35775;
var meths = seq__35774__$1;
var form = vec__35773;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.name(f)))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form)),null,(1),null))], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35778){
var vec__35779 = p__35778;
var seq__35780 = cljs.core.seq(vec__35779);
var first__35781 = cljs.core.first(seq__35780);
var seq__35780__$1 = cljs.core.next(seq__35780);
var sig = first__35781;
var body = seq__35780__$1;
var meth = vec__35779;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.adapt_proto_params(type,meth),null,(1),null))))),cljs.core.meta(form)),null,(1),null))], 0))));
}),meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__35782){
var vec__35783 = p__35782;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(1),null);
cljs.core$macros.update_protocol_var(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__35788 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name(method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name(method_name),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_37598 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_37598))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths)))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__37600 = cljs.core.next(sigs__$1);
var G__37601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__37600;
seen = G__37601;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_37605 = cljs.core.PersistentHashSet.EMPTY;
var methods_37606__$1 = methods$;
while(true){
if(cljs.core.seq(methods_37606__$1)){
var vec__35817_37607 = cljs.core.first(methods_37606__$1);
var fname_37608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817_37607,(0),null);
var method_37609 = vec__35817_37607;
if(cljs.core.contains_QMARK_(seen_37605,fname_37608)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_37608], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_37609);

var G__37612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_37605,fname_37608);
var G__37613 = cljs.core.next(methods_37606__$1);
seen_37605 = G__37612;
methods_37606__$1 = G__37613;
continue;
} else {
}
break;
}

var G__37615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__37616 = impls__$2;
protos = G__37615;
impls__$1 = G__37616;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__4785__auto___37618 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37619 = arguments.length;
var i__4737__auto___37620 = (0);
while(true){
if((i__4737__auto___37620 < len__4736__auto___37619)){
args__4742__auto__.push((arguments[i__4737__auto___37620]));

var G__37621 = (i__4737__auto___37620 + (1));
i__4737__auto___37620 = G__37621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__35831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null);
return (fexpr__35831.cljs$core$IFn$_invoke$arity$1 ? fexpr__35831.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__35831.call(null,type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__35828 = (function (){var temp__5733__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__5733__auto__)){
var type = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve(type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35828,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35828,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__4115__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35823_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__35823_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__35823_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
}));

(cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq35824){
var G__35825 = cljs.core.first(seq35824);
var seq35824__$1 = cljs.core.next(seq35824);
var G__35826 = cljs.core.first(seq35824__$1);
var seq35824__$2 = cljs.core.next(seq35824__$1);
var G__35827 = cljs.core.first(seq35824__$2);
var seq35824__$3 = cljs.core.next(seq35824__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35825,G__35826,G__35827,seq35824__$3);
}));

return null;
})()
;
(cljs.core$macros.extend_type.cljs$lang$macro = true);

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
}),parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__35833){
var vec__35835 = p__35833;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35832_SHARP_){
return cljs.core.cons(cljs.core.second(p1__35832_SHARP_),cljs.core.nnext(p1__35832_SHARP_));
}),sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__35839 = arguments.length;
switch (G__35839) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
}));

(cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__37664 = ret__$1;
var G__37665 = specs__$2;
ret = G__37664;
specs__$1 = G__37665;
continue;
} else {
return ret;
}
break;
}
}));

(cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4);

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35840_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__35840_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var docstring = ["Positional factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),"."].join('');
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0)))),null,(1),null))], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__4785__auto___37683 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37684 = arguments.length;
var i__4737__auto___37685 = (0);
while(true){
if((i__4737__auto___37685 < len__4736__auto___37684)){
args__4742__auto__.push((arguments[i__4737__auto___37685]));

var G__37687 = (i__4737__auto___37685 + (1));
i__4737__auto___37685 = G__37687;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__35865 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35865,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35865,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35848__auto__","this__35848__auto__",-400086185,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35849__auto__","writer__35849__auto__",-1449482021,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__35850__auto__","opt__35850__auto__",-695157998,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35849__auto__","writer__35849__auto__",-1449482021,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory(t__$1,r,fields),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))], 0))));
}));

(cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq35854){
var G__35855 = cljs.core.first(seq35854);
var seq35854__$1 = cljs.core.next(seq35854);
var G__35856 = cljs.core.first(seq35854__$1);
var seq35854__$2 = cljs.core.next(seq35854__$1);
var G__35857 = cljs.core.first(seq35854__$2);
var seq35854__$3 = cljs.core.next(seq35854__$2);
var G__35858 = cljs.core.first(seq35854__$3);
var seq35854__$4 = cljs.core.next(seq35854__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35855,G__35856,G__35857,G__35858,seq35854__$4);
}));

return null;
})()
;
(cljs.core$macros.deftype.cljs$lang$macro = true);

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35873_SHARP_){
return cljs.core.with_meta(p1__35873_SHARP_,null);
}),fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.namespace(rname),".",cljs.core.name(rname),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-clone","-clone",227130084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35874__auto__","this__35874__auto__",790628371,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35875__auto__","this__35875__auto__",-27976658,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","caching-hash","cljs.core/caching-hash",-1804846488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35875__auto__","this__35875__auto__",-27976658,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"coll__35876__auto__","coll__35876__auto__",-372618368,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.hash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__35876__auto__","coll__35876__auto__",-372618368,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,other,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(field),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(field),null,(1),null))], 0)))),null,(1),null))], 0))));
}),base_fields),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35878__auto__","this__35878__auto__",2001324964,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35879__auto__","this__35879__auto__",1749856673,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35880__auto__","this__35880__auto__",1176287110,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35881__auto__","k__35881__auto__",1984300989,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35880__auto__","this__35880__auto__",1176287110,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35881__auto__","k__35881__auto__",1984300989,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35882__auto__","this__35882__auto__",-535572085,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"else__35883__auto__","else__35883__auto__",1781198156,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__35883__auto__","else__35883__auto__",1781198156,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-count","-count",416049189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35884__auto__","this__35884__auto__",-1594556690,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count(base_fields),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35885__auto__","this__35885__auto__",921819764,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__35886__auto__","entry__35886__auto__",-1183753839,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__35886__auto__","entry__35886__auto__",-1183753839,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35885__auto__","this__35885__auto__",921819764,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__35886__auto__","entry__35886__auto__",-1183753839,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__35886__auto__","entry__35886__auto__",-1183753839,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35885__auto__","this__35885__auto__",921819764,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__35886__auto__","entry__35886__auto__",-1183753839,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35887__auto__","this__35887__auto__",1570405197,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35888__auto__","k__35888__auto__",1181876190,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gs,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","condp","cljs.core/condp",353371154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35888__auto__","k__35888__auto__",1181876190,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35888__auto__","k__35888__auto__",1181876190,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35889__auto__","this__35889__auto__",2081767305,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35890__auto__","k__35890__auto__",357470803,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35890__auto__","k__35890__auto__",357470803,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35889__auto__","this__35889__auto__",2081767305,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35890__auto__","k__35890__auto__",357470803,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35890__auto__","k__35890__auto__",357470803,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35892__auto__","this__35892__auto__",1098936066,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35891_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MapEntry.","cljs.core/MapEntry.",1317224033,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__35891_SHARP_),(new cljs.core.List(null,p1__35891_SHARP_,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null));
}),base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gs,null,(1),null)),(new cljs.core.List(null,cljs.core.count(base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("core","nil-iter","core/nil-iter",1079948314,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35894__auto__","this__35894__auto__",1247649239,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35895__auto__","writer__35895__auto__",1454826247,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__35896__auto__","opts__35896__auto__",-1117326797,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__35897__auto__","pr-pair__35897__auto__",-415525788,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__35898__auto__","keyval__35898__auto__",137709057,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35895__auto__","writer__35895__auto__",1454826247,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.pr_writer",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__35896__auto__","opts__35896__auto__",-1117326797,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__35898__auto__","keyval__35898__auto__",137709057,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35895__auto__","writer__35895__auto__",1454826247,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__35897__auto__","pr-pair__35897__auto__",-415525788,null),null,(1),null)),(new cljs.core.List(null,pr_open,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__35896__auto__","opts__35896__auto__",-1117326797,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35893_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__35893_SHARP_),(new cljs.core.List(null,p1__35893_SHARP_,null,(1),null)),(2),null)),(3),null));
}),base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-kv-reduce","-kv-reduce",456218795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35899__auto__","this__35899__auto__",-1546340106,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__35900__auto__","f__35900__auto__",-1842748326,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"init__35901__auto__","init__35901__auto__",-1154254260,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35902__auto__","ret__35902__auto__",303013727,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__35903__auto__","k__35903__auto__",-1471138801,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__35904__auto__","v__35904__auto__",2014907475,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"f__35900__auto__","f__35900__auto__",-1842748326,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__35902__auto__","ret__35902__auto__",303013727,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35903__auto__","k__35903__auto__",-1471138801,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__35904__auto__","v__35904__auto__",2014907475,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"init__35901__auto__","init__35901__auto__",-1154254260,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__35899__auto__","this__35899__auto__",-1546340106,null),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
var vec__35905 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35905,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35905,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hinted_fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var docstring = ["Factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),", taking a map of keywords to field values."].join('');
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)))));
}),ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,ms,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__35924__auto__","extmap__35924__auto__",1488481673,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->>","cljs.core/cond->>",738809549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__35924__auto__","extmap__35924__auto__",1488481673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4785__auto___37988 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37990 = arguments.length;
var i__4737__auto___37991 = (0);
while(true){
if((i__4737__auto___37991 < len__4736__auto___37990)){
args__4742__auto__.push((arguments[i__4737__auto___37991]));

var G__37994 = (i__4737__auto___37991 + (1));
i__4737__auto___37991 = G__37994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35934__auto__","this__35934__auto__",-2038336244,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__35934__auto__","this__35934__auto__",-2038336244,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35935__auto__","writer__35935__auto__",-1868869826,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__35935__auto__","writer__35935__auto__",-1868869826,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory(rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_map_factory(rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))], 0))));
}));

(cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq35936){
var G__35937 = cljs.core.first(seq35936);
var seq35936__$1 = cljs.core.next(seq35936);
var G__35938 = cljs.core.first(seq35936__$1);
var seq35936__$2 = cljs.core.next(seq35936__$1);
var G__35939 = cljs.core.first(seq35936__$2);
var seq35936__$3 = cljs.core.next(seq35936__$2);
var G__35940 = cljs.core.first(seq35936__$3);
var seq35936__$4 = cljs.core.next(seq35936__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35937,G__35938,G__35939,G__35940,seq35936__$4);
}));

return null;
})()
;
(cljs.core$macros.defrecord.cljs$lang$macro = true);

var ret__4785__auto___38035 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38037 = arguments.length;
var i__4737__auto___38038 = (0);
while(true){
if((i__4737__auto___38038 < len__4736__auto___38037)){
args__4742__auto__.push((arguments[i__4737__auto___38038]));

var G__38039 = (i__4737__auto___38038 + (1));
i__4737__auto___38038 = G__38039;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__35959 = (function (){var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true], null);
var methods$ = cljs.core.PersistentVector.EMPTY;
var sigs = doc_PLUS_methods;
while(true){
if(cljs.core.not(cljs.core.seq(sigs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,methods$], null);
} else {
var vec__35965 = sigs;
var seq__35966 = cljs.core.seq(vec__35965);
var first__35967 = cljs.core.first(seq__35966);
var seq__35966__$1 = cljs.core.next(seq__35966);
var head = first__35967;
var tail = seq__35966__$1;
if(typeof head === 'string'){
var G__38042 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"doc","doc",1913296891),head);
var G__38043 = methods$;
var G__38044 = tail;
opts = G__38042;
methods$ = G__38043;
sigs = G__38044;
continue;
} else {
if((head instanceof cljs.core.Keyword)){
var G__38048 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,head,cljs.core.first(tail));
var G__38049 = methods$;
var G__38050 = cljs.core.rest(tail);
opts = G__38048;
methods$ = G__38049;
sigs = G__38050;
continue;
} else {
if(cljs.core.seq_QMARK_(head)){
var G__38051 = opts;
var G__38052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(methods$,head);
var G__38053 = tail;
opts = G__38051;
methods$ = G__38052;
sigs = G__38053;
continue;
} else {
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)," received unexpected argument"].join('')));

}
}
}
}
break;
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(psym,cljs.core.merge,opts);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__35970 = cljs.core.seq(methods$);
var chunk__35971 = null;
var count__35972 = (0);
var i__35973 = (0);
while(true){
if((i__35973 < count__35972)){
var vec__35985 = chunk__35971.cljs$core$IIndexed$_nth$arity$2(null,i__35973);
var seq__35986 = cljs.core.seq(vec__35985);
var first__35987 = cljs.core.first(seq__35986);
var seq__35986__$1 = cljs.core.next(seq__35986);
var mname = first__35987;
var arities = seq__35986__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__38059 = seq__35970;
var G__38060 = chunk__35971;
var G__38061 = count__35972;
var G__38062 = (i__35973 + (1));
seq__35970 = G__38059;
chunk__35971 = G__38060;
count__35972 = G__38061;
i__35973 = G__38062;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35970);
if(temp__5735__auto__){
var seq__35970__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35970__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35970__$1);
var G__38065 = cljs.core.chunk_rest(seq__35970__$1);
var G__38066 = c__4556__auto__;
var G__38067 = cljs.core.count(c__4556__auto__);
var G__38068 = (0);
seq__35970 = G__38065;
chunk__35971 = G__38066;
count__35972 = G__38067;
i__35973 = G__38068;
continue;
} else {
var vec__35990 = cljs.core.first(seq__35970__$1);
var seq__35991 = cljs.core.seq(vec__35990);
var first__35992 = cljs.core.first(seq__35991);
var seq__35991__$1 = cljs.core.next(seq__35991);
var mname = first__35992;
var arities = seq__35991__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__38077 = cljs.core.next(seq__35970__$1);
var G__38078 = null;
var G__38079 = (0);
var G__38080 = (0);
seq__35970 = G__38077;
chunk__35971 = G__38078;
count__35972 = G__38079;
i__35973 = G__38080;
continue;
}
} else {
return null;
}
}
break;
}
})();
var sig__GT_syms = (function (sig){
if((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if(((cljs.core.map_QMARK_(arg)) && ((!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
}),sig);
} else {
return sig;
}
});
var expand_dyn = (function (fname,sig){
var sig__$1 = sig__GT_syms(sig);
var fqn_fname = cljs.core.with_meta(fqn(fname),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null));
var fsig = cljs.core.first(sig__$1);
var check = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__35949__auto__","m__35949__auto__",-476612140,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"_",null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__35949__auto__","m__35949__auto__",-476612140,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__35949__auto__","m__35949__auto__",-476612140,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fsig,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
var check__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts)))?check:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__35950__auto__","meta-impl__35950__auto__",-2012416637,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("core","meta","core/meta",-1141410454,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("core","get","core/get",-959829427,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__35950__auto__","meta-impl__35950__auto__",-2012416637,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check,null,(1),null))], 0)))));
var check__$2 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35951__auto__","x__35951__auto__",-1044751762,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__35952__auto__","m__35952__auto__",-480750030,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35951__auto__","x__35951__auto__",-1044751762,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__35952__auto__","m__35952__auto__",-480750030,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__35952__auto__","m__35952__auto__",-480750030,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$1,null,(1),null))], 0)))),null,(1),null))], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check__$2,null,(1),null)))));
});
var expand_sig = (function (dyn_name,slot,sig){
var sig__$1 = sig__GT_syms(sig);
var fsig = cljs.core.first(sig__$1);
var check = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),true], null)),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),sig__$1], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,dyn_name,null,(1),null)),sig__$1))),null,(1),null))], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check,null,(1),null)))));
});
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36009){
var vec__36010 = p__36009;
var seq__36011 = cljs.core.seq(vec__36010);
var first__36012 = cljs.core.first(seq__36011);
var seq__36011__$1 = cljs.core.next(seq__36011);
var fname = first__36012;
var sigs = seq__36011__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc),cljs.core.vec(sigs__$1)], null);
}),methods$))),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sigs","sigs",-1653119622)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36013){
var vec__36014 = p__36013;
var seq__36015 = cljs.core.seq(vec__36014);
var first__36016 = cljs.core.first(seq__36015);
var seq__36015__$1 = cljs.core.next(seq__36015);
var fname = first__36016;
var sigs = seq__36015__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fname),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),fname,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(sigs__$1),new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),methods$)));
var method = (function (p__36017){
var vec__36018 = p__36017;
var seq__36019 = cljs.core.seq(vec__36018);
var first__36020 = cljs.core.first(seq__36019);
var seq__36019__$1 = cljs.core.next(seq__36019);
var fname = first__36020;
var sigs = seq__36019__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var ___$1 = (function (){var temp__5739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"defs","defs",1398449717)) : cljs.core$macros.__GT_.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"defs","defs",1398449717))),fname);
if((temp__5739__auto__ == null)){
return null;
} else {
var existing = temp__5739__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(existing))){
return null;
} else {
return cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname,new cljs.core.Keyword(null,"existing","existing",-340796094),existing], null));
}
}
})();
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.name(fname)))].join(''));
var dyn_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$dyn"].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,dyn_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("core","fn","core/fn",468324874,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sig){
return expand_dyn(fname__$1,sig);
}),sigs__$1)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sig){
return expand_sig(dyn_name,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),true], null)),sig);
}),sigs__$1)], 0)))),null,(1),null))], 0))));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,psym__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"function(){}",null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq35955){
var G__35956 = cljs.core.first(seq35955);
var seq35955__$1 = cljs.core.next(seq35955);
var G__35957 = cljs.core.first(seq35955__$1);
var seq35955__$2 = cljs.core.next(seq35955__$1);
var G__35958 = cljs.core.first(seq35955__$2);
var seq35955__$3 = cljs.core.next(seq35955__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35956,G__35957,G__35958,seq35955__$3);
}));

return null;
})()
;
(cljs.core$macros.defprotocol.cljs$lang$macro = true);

var ret__4785__auto___38181 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__36021 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))));
}
});
(cljs.core$macros.implements_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___38191 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__36024 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-not","cljs.core/coercive-not",303282494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xsym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xsym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-not","cljs.core/coercive-not",303282494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null))], 0))));
}
});
(cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___38224 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38225 = arguments.length;
var i__4737__auto___38226 = (0);
while(true){
if((i__4737__auto___38226 < len__4736__auto___38225)){
args__4742__auto__.push((arguments[i__4737__auto___38226]));

var G__38227 = (i__4737__auto___38226 + (1));
i__4737__auto___38226 = G__38227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq36031){
var G__36032 = cljs.core.first(seq36031);
var seq36031__$1 = cljs.core.next(seq36031);
var G__36033 = cljs.core.first(seq36031__$1);
var seq36031__$2 = cljs.core.next(seq36031__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36032,G__36033,seq36031__$2);
}));

return null;
})()
;
(cljs.core$macros.lazy_seq.cljs$lang$macro = true);

var ret__4785__auto___38229 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38231 = arguments.length;
var i__4737__auto___38232 = (0);
while(true){
if((i__4737__auto___38232 < len__4736__auto___38231)){
args__4742__auto__.push((arguments[i__4737__auto___38232]));

var G__38233 = (i__4737__auto___38232 + (1));
i__4737__auto___38232 = G__38233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.delay.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.delay.cljs$lang$applyTo = (function (seq36035){
var G__36036 = cljs.core.first(seq36035);
var seq36035__$1 = cljs.core.next(seq36035);
var G__36037 = cljs.core.first(seq36035__$1);
var seq36035__$2 = cljs.core.next(seq36035__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36036,G__36037,seq36035__$2);
}));

return null;
})()
;
(cljs.core$macros.delay.cljs$lang$macro = true);

var ret__4785__auto___38244 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38245 = arguments.length;
var i__4737__auto___38246 = (0);
while(true){
if((i__4737__auto___38246 < len__4736__auto___38245)){
args__4742__auto__.push((arguments[i__4737__auto___38246]));

var G__38247 = (i__4737__auto___38246 + (1));
i__4737__auto___38246 = G__38247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var orig_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__36040_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36040_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__36041_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36041_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,orig_val_syms));
var bind_value = (function (p__36046){
var vec__36047 = p__36046;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(orig_val_syms,names),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(temp_val_syms,vals))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq36042){
var G__36043 = cljs.core.first(seq36042);
var seq36042__$1 = cljs.core.next(seq36042);
var G__36044 = cljs.core.first(seq36042__$1);
var seq36042__$2 = cljs.core.next(seq36042__$1);
var G__36045 = cljs.core.first(seq36042__$2);
var seq36042__$3 = cljs.core.next(seq36042__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36043,G__36044,G__36045,seq36042__$3);
}));

return null;
})()
;
(cljs.core$macros.with_redefs.cljs$lang$macro = true);

var ret__4785__auto___38253 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38256 = arguments.length;
var i__4737__auto___38257 = (0);
while(true){
if((i__4737__auto___38257 < len__4736__auto___38256)){
args__4742__auto__.push((arguments[i__4737__auto___38257]));

var G__38258 = (i__4737__auto___38257 + (1));
i__4737__auto___38257 = G__38258;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.binding.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.binding.cljs$lang$applyTo = (function (seq36052){
var G__36053 = cljs.core.first(seq36052);
var seq36052__$1 = cljs.core.next(seq36052);
var G__36054 = cljs.core.first(seq36052__$1);
var seq36052__$2 = cljs.core.next(seq36052__$1);
var G__36055 = cljs.core.first(seq36052__$2);
var seq36052__$3 = cljs.core.next(seq36052__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36053,G__36054,G__36055,seq36052__$3);
}));

return null;
})()
;
(cljs.core$macros.binding.cljs$lang$macro = true);

var ret__4785__auto___38265 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an Error is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38266 = arguments.length;
var i__4737__auto___38267 = (0);
while(true){
if((i__4737__auto___38267 < len__4736__auto___38266)){
args__4742__auto__.push((arguments[i__4737__auto___38267]));

var G__38268 = (i__4737__auto___38267 + (1));
i__4737__auto___38267 = G__38268;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__36080 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__36083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36080,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(2),null);
var clause = vec__36083;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36080,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit(pred__$1,expr__$1,more),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"p__36074__auto__","p__36074__auto__",1880582943,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__36074__auto__","p__36074__auto__",1880582943,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit(pred__$1,expr__$1,more),null,(1),null))], 0))));

}
}
}
});
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,gpred,null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gexpr,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emit(gpred,gexpr,clauses),null,(1),null))], 0))));
}));

(cljs.core$macros.condp.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.condp.cljs$lang$applyTo = (function (seq36075){
var G__36076 = cljs.core.first(seq36075);
var seq36075__$1 = cljs.core.next(seq36075);
var G__36077 = cljs.core.first(seq36075__$1);
var seq36075__$2 = cljs.core.next(seq36075__$1);
var G__36078 = cljs.core.first(seq36075__$2);
var seq36075__$3 = cljs.core.next(seq36075__$2);
var G__36079 = cljs.core.first(seq36075__$3);
var seq36075__$4 = cljs.core.next(seq36075__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36076,G__36077,G__36078,G__36079,seq36075__$4);
}));

return null;
})()
;
(cljs.core$macros.condp.cljs$lang$macro = true);

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = ((cljs.core.list_QMARK_(x))?cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x)):false);
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__4785__auto___38292 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38293 = arguments.length;
var i__4737__auto___38294 = (0);
while(true){
if((i__4737__auto___38294 < len__4736__auto___38293)){
args__4742__auto__.push((arguments[i__4737__auto___38294]));

var G__38296 = (i__4737__auto___38294 + (1));
i__4737__auto___38294 = G__38296;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__36098){
var vec__36099 = p__36098;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36099,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36099,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test__$1,null,(1),null)),(2),null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
}),m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test,null,(1),null)),(2),null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__36090_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__36090_SHARP_);
})], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36091_SHARP_){
if(cljs.core.seq_QMARK_(p1__36091_SHARP_)){
return cljs.core.vec(p1__36091_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36091_SHARP_], null);
}
}),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = (function (p1__36092_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36092_SHARP_).substring((1));
});
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36093_SHARP_){
if(cljs.core.seq_QMARK_(p1__36093_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__36093_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__36093_SHARP_)], null);
}
}),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(esym,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__36112){
var vec__36116 = p__36112;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));

}
}
}));

(cljs.core$macros.case$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.case$.cljs$lang$applyTo = (function (seq36094){
var G__36095 = cljs.core.first(seq36094);
var seq36094__$1 = cljs.core.next(seq36094);
var G__36096 = cljs.core.first(seq36094__$1);
var seq36094__$2 = cljs.core.next(seq36094__$1);
var G__36097 = cljs.core.first(seq36094__$2);
var seq36094__$3 = cljs.core.next(seq36094__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36095,G__36096,G__36097,seq36094__$3);
}));

return null;
})()
;
(cljs.core$macros.case$.cljs$lang$macro = true);

var ret__4785__auto___38329 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return x;
} else {
return null;
}
});
(cljs.core$macros.when_assert.cljs$lang$macro = true);

var ret__4785__auto___38354 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__36126 = arguments.length;
switch (G__36126) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,["Assert failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Assert failed: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.core$macros.assert.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.core$macros.assert.cljs$lang$macro = true);

var ret__4785__auto___38378 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__36135){
var vec__36137 = p__36135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = (function() { 
var G__38391__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__38391 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__38393__i = 0, G__38393__a = new Array(arguments.length -  0);
while (G__38393__i < G__38393__a.length) {G__38393__a[G__38393__i] = arguments[G__38393__i + 0]; ++G__38393__i;}
  msg = new cljs.core.IndexedSeq(G__38393__a,0,null);
} 
return G__38391__delegate.call(this,msg);};
G__38391.cljs$lang$maxFixedArity = 0;
G__38391.cljs$lang$applyTo = (function (arglist__38394){
var msg = cljs.core.seq(arglist__38394);
return G__38391__delegate(msg);
});
G__38391.cljs$core$IFn$_invoke$arity$variadic = G__38391__delegate;
return G__38391;
})()
;
var emit_bind = (function cljs$core$macros$for_$_emit_bind(p__36142){
var vec__36143 = p__36142;
var seq__36144 = cljs.core.seq(vec__36143);
var first__36145 = cljs.core.first(seq__36144);
var seq__36144__$1 = cljs.core.next(seq__36144);
var vec__36146 = first__36145;
var seq__36147 = cljs.core.seq(vec__36146);
var first__36148 = cljs.core.first(seq__36147);
var seq__36147__$1 = cljs.core.next(seq__36147);
var bind = first__36148;
var first__36148__$1 = cljs.core.first(seq__36147__$1);
var seq__36147__$2 = cljs.core.next(seq__36147__$1);
var expr = first__36148__$1;
var mod_pairs = seq__36147__$2;
var vec__36149 = seq__36144__$1;
var vec__36152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(1),null);
var next_groups = vec__36149;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__36155){
var vec__36159 = p__36155;
var seq__36160 = cljs.core.seq(vec__36159);
var first__36161 = cljs.core.first(seq__36160);
var seq__36160__$1 = cljs.core.next(seq__36160);
var vec__36162 = first__36161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(1),null);
var pair = vec__36162;
var etc = seq__36160__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__36127__auto__","iterys__36127__auto__",-951619542,null),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind(next_groups),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__36128__auto__","fs__36128__auto__",-1728819464,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__36127__auto__","iterys__36127__auto__",-951619542,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__36128__auto__","fs__36128__auto__",-1728819464,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__36128__auto__","fs__36128__auto__",-1728819464,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
}
});
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-first","cljs.core/when-first",-667185267,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__36173){
var vec__36174 = p__36173;
var seq__36175 = cljs.core.seq(vec__36174);
var first__36176 = cljs.core.first(seq__36175);
var seq__36175__$1 = cljs.core.next(seq__36175);
var vec__36177 = first__36176;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177,(1),null);
var pair = vec__36177;
var etc = seq__36175__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body_expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__36131__auto__","c__36131__auto__",-188097795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,2502,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,2502,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,82,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null),null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__36132__auto__","size__36132__auto__",-301198032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__36131__auto__","c__36131__auto__",-188097795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__36132__auto__","size__36132__auto__",-301198032,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-boolean","cljs.core/coercive-boolean",-386297147,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__36132__auto__","size__36132__auto__",-301198032,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__36131__auto__","c__36131__auto__",-188097795,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gi,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_cmod(mod_pairs),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__36133__auto__","iter__36133__auto__",-159199387,null),null,(1),null)),(new cljs.core.List(null,emit_bind(to_groups(seq_exprs)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__36133__auto__","iter__36133__auto__",-159199387,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(seq_exprs),null,(1),null))))),null,(1),null))], 0))));
});
(cljs.core$macros.for$.cljs$lang$macro = true);

var ret__4785__auto___38496 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38500 = arguments.length;
var i__4737__auto___38501 = (0);
while(true){
if((i__4737__auto___38501 < len__4736__auto___38500)){
args__4742__auto__.push((arguments[i__4737__auto___38501]));

var G__38503 = (i__4737__auto___38501 + (1));
i__4737__auto___38501 = G__38503;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var err = (function() { 
var G__38512__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__38512 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__38513__i = 0, G__38513__a = new Array(arguments.length -  0);
while (G__38513__i < G__38513__a.length) {G__38513__a[G__38513__i] = arguments[G__38513__i + 0]; ++G__38513__i;}
  msg = new cljs.core.IndexedSeq(G__38513__a,0,null);
} 
return G__38512__delegate.call(this,msg);};
G__38512.cljs$lang$maxFixedArity = 0;
G__38512.cljs$lang$applyTo = (function (arglist__38514){
var msg = cljs.core.seq(arglist__38514);
return G__38512__delegate(msg);
});
G__38512.cljs$core$IFn$_invoke$arity$variadic = G__38512__delegate;
return G__38512;
})()
;
var step = (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))),null,(1),null)),(new cljs.core.List(null,recform__$1,null,(1),null))], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null))], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-boolean","cljs.core/coercive-boolean",-386297147,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,countsym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,isym,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform_chunk,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"c__36191__auto__","c__36191__auto__",1529673917,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c__36191__auto__","c__36191__auto__",1529673917,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__36191__auto__","c__36191__auto__",1529673917,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);

}
}
}
}
}
});
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
}));

(cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq36192){
var G__36193 = cljs.core.first(seq36192);
var seq36192__$1 = cljs.core.next(seq36192);
var G__36194 = cljs.core.first(seq36192__$1);
var seq36192__$2 = cljs.core.next(seq36192__$1);
var G__36195 = cljs.core.first(seq36192__$2);
var seq36192__$3 = cljs.core.next(seq36192__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36193,G__36194,G__36195,seq36192__$3);
}));

return null;
})()
;
(cljs.core$macros.doseq.cljs$lang$macro = true);

var ret__4785__auto___38601 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38604 = arguments.length;
var i__4737__auto___38605 = (0);
while(true){
if((i__4737__auto___38605 < len__4736__auto___38604)){
args__4742__auto__.push((arguments[i__4737__auto___38605]));

var G__38606 = (i__4737__auto___38605 + (1));
i__4737__auto___38605 = G__38606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

(cljs.core$macros.array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.array.cljs$lang$applyTo = (function (seq36201){
var G__36202 = cljs.core.first(seq36201);
var seq36201__$1 = cljs.core.next(seq36201);
var G__36203 = cljs.core.first(seq36201__$1);
var seq36201__$2 = cljs.core.next(seq36201__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36202,G__36203,seq36201__$2);
}));

return null;
})()
;
(cljs.core$macros.array.cljs$lang$macro = true);

var ret__4785__auto___38609 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__36232 = arguments.length;
switch (G__36232) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38616 = arguments.length;
var i__4737__auto___38617 = (0);
while(true){
if((i__4737__auto___38617 < len__4736__auto___38616)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38617]));

var G__38618 = (i__4737__auto___38617 + (1));
i__4737__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))));
}));

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"dims__36223__auto__","dims__36223__auto__",944195890,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),more_sizes))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__36224__auto__","dimarray__36224__auto__",-1995448494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__36225__auto__","i__36225__auto__",-1076417265,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__36224__auto__","dimarray__36224__auto__",-1995448494,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__36224__auto__","dimarray__36224__auto__",-1995448494,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"i__36225__auto__","i__36225__auto__",-1076417265,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__36223__auto__","dims__36223__auto__",944195890,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__36224__auto__","dimarray__36224__auto__",-1995448494,null),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

/** @this {Function} */
(cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq36227){
var G__36228 = cljs.core.first(seq36227);
var seq36227__$1 = cljs.core.next(seq36227);
var G__36229 = cljs.core.first(seq36227__$1);
var seq36227__$2 = cljs.core.next(seq36227__$1);
var G__36230 = cljs.core.first(seq36227__$2);
var seq36227__$3 = cljs.core.next(seq36227__$2);
var G__36231 = cljs.core.first(seq36227__$3);
var seq36227__$4 = cljs.core.next(seq36227__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36228,G__36229,G__36230,G__36231,seq36227__$4);
}));

(cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.make_array.cljs$lang$macro = true);

var ret__4785__auto___38640 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__36253 = arguments.length;
switch (G__36253) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38646 = arguments.length;
var i__4737__auto___38647 = (0);
while(true){
if((i__4737__auto___38647 < len__4736__auto___38646)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38647]));

var G__38654 = (i__4737__auto___38647 + (1));
i__4737__auto___38647 = G__38654;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
}));

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
var cnt = (cljs.core.count(xs) + (1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.list.cljs$lang$applyTo = (function (seq36249){
var G__36250 = cljs.core.first(seq36249);
var seq36249__$1 = cljs.core.next(seq36249);
var G__36251 = cljs.core.first(seq36249__$1);
var seq36249__$2 = cljs.core.next(seq36249__$1);
var G__36252 = cljs.core.first(seq36249__$2);
var seq36249__$3 = cljs.core.next(seq36249__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36250,G__36251,G__36252,seq36249__$3);
}));

(cljs.core$macros.list.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.list.cljs$lang$macro = true);

var ret__4785__auto___38671 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__36258 = arguments.length;
switch (G__36258) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38675 = arguments.length;
var i__4737__auto___38676 = (0);
while(true){
if((i__4737__auto___38676 < len__4736__auto___38675)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38676]));

var G__38677 = (i__4737__auto___38676 + (1));
i__4737__auto___38676 = G__38677;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}));

(cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
}));

/** @this {Function} */
(cljs.core$macros.vector.cljs$lang$applyTo = (function (seq36255){
var G__36256 = cljs.core.first(seq36255);
var seq36255__$1 = cljs.core.next(seq36255);
var G__36257 = cljs.core.first(seq36255__$1);
var seq36255__$2 = cljs.core.next(seq36255__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36256,G__36257,seq36255__$2);
}));

(cljs.core$macros.vector.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.vector.cljs$lang$macro = true);

var ret__4785__auto___38685 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__36265 = arguments.length;
switch (G__36265) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38687 = arguments.length;
var i__4737__auto___38688 = (0);
while(true){
if((i__4737__auto___38688 < len__4736__auto___38687)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38688]));

var G__38689 = (i__4737__auto___38688 + (1));
i__4737__auto___38688 = G__38689;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
}));

(cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if(((cljs.core.every_QMARK_((function (p1__36259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(p1__36259_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36260_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__36268 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__36269 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__36269);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__36260_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__36268);
}}),keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.count(kvs) / (2)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),kvs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),kvs))),null,(1),null))], 0))));
}
}));

/** @this {Function} */
(cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq36262){
var G__36263 = cljs.core.first(seq36262);
var seq36262__$1 = cljs.core.next(seq36262);
var G__36264 = cljs.core.first(seq36262__$1);
var seq36262__$2 = cljs.core.next(seq36262__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36263,G__36264,seq36262__$2);
}));

(cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.array_map.cljs$lang$macro = true);

var ret__4785__auto___38725 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__36274 = arguments.length;
switch (G__36274) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38733 = arguments.length;
var i__4737__auto___38734 = (0);
while(true){
if((i__4737__auto___38734 < len__4736__auto___38733)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38734]));

var G__38770 = (i__4737__auto___38734 + (1));
i__4737__auto___38734 = G__38770;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)))));
}));

(cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),vs))),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
}));

/** @this {Function} */
(cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq36271){
var G__36272 = cljs.core.first(seq36271);
var seq36271__$1 = cljs.core.next(seq36271);
var G__36273 = cljs.core.first(seq36271__$1);
var seq36271__$2 = cljs.core.next(seq36271__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36272,G__36273,seq36271__$2);
}));

(cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.hash_map.cljs$lang$macro = true);

var ret__4785__auto___38791 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__36281 = arguments.length;
switch (G__36281) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38793 = arguments.length;
var i__4737__auto___38794 = (0);
while(true){
if((i__4737__auto___38794 < len__4736__auto___38793)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38794]));

var G__38795 = (i__4737__auto___38794 + (1));
i__4737__auto___38794 = G__38795;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)))));
}));

(cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if((((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__36275_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(p1__36275_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36276_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__36284 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__36285 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__36285);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__36276_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__36284);
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(xs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
}));

/** @this {Function} */
(cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq36278){
var G__36279 = cljs.core.first(seq36278);
var seq36278__$1 = cljs.core.next(seq36278);
var G__36280 = cljs.core.first(seq36278__$1);
var seq36278__$2 = cljs.core.next(seq36278__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36279,G__36280,seq36278__$2);
}));

(cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.hash_set.cljs$lang$macro = true);

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"})"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4785__auto___38804 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38805 = arguments.length;
var i__4737__auto___38806 = (0);
while(true){
if((i__4737__auto___38806 < len__4736__auto___38805)){
args__4742__auto__.push((arguments[i__4737__auto___38806]));

var G__38807 = (i__4737__auto___38806 + (1));
i__4737__auto___38806 = G__38807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return (((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
var filter_on_keys = (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36292){
var vec__36293 = p__36292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36293,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36293,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
}),coll));
});
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36298){
var vec__36299 = p__36298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36299,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}),sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36302){
var vec__36303 = p__36302;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36303,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k),null,(1),null))], 0))));
}),expr__GT_local),(new cljs.core.List(null,obj,null,(1),null))], 0))));
}
}));

(cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq36289){
var G__36290 = cljs.core.first(seq36289);
var seq36289__$1 = cljs.core.next(seq36289);
var G__36291 = cljs.core.first(seq36289__$1);
var seq36289__$2 = cljs.core.next(seq36289__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36290,G__36291,seq36289__$2);
}));

return null;
})()
;
(cljs.core$macros.js_obj.cljs$lang$macro = true);

var ret__4785__auto___38822 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}.length",(new cljs.core.List(null,a,null,(1),null)),(2),null)),(3),null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
(cljs.core$macros.alength.cljs$lang$macro = true);

var ret__4785__auto___38825 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"a__36306__auto__","a__36306__auto__",1930727314,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__36307__auto__","l__36307__auto__",721680908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__36306__auto__","a__36306__auto__",1930727314,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__36306__auto__","a__36306__auto__",1930727314,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__36307__auto__","l__36307__auto__",721680908,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.amap.cljs$lang$macro = true);

var ret__4785__auto___38865 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"a__36312__auto__","a__36312__auto__",-1244076988,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__36313__auto__","l__36313__auto__",1263616213,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__36312__auto__","a__36312__auto__",-1244076988,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,init,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__36313__auto__","l__36313__auto__",1263616213,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.areduce.cljs$lang$macro = true);

var ret__4785__auto___38884 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38886 = arguments.length;
var i__4737__auto___38887 = (0);
while(true){
if((i__4737__auto___38887 < len__4736__auto___38886)){
args__4742__auto__.push((arguments[i__4737__auto___38887]));

var G__38888 = (i__4737__auto___38887 + (1));
i__4737__auto___38887 = G__38888;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"n__36318__auto__","n__36318__auto__",-1911542095,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n__36318__auto__","n__36318__auto__",-1911542095,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq36319){
var G__36320 = cljs.core.first(seq36319);
var seq36319__$1 = cljs.core.next(seq36319);
var G__36321 = cljs.core.first(seq36319__$1);
var seq36319__$2 = cljs.core.next(seq36319__$1);
var G__36322 = cljs.core.first(seq36319__$2);
var seq36319__$3 = cljs.core.next(seq36319__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36320,G__36321,G__36322,seq36319__$3);
}));

return null;
})()
;
(cljs.core$macros.dotimes.cljs$lang$macro = true);

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38897 = arguments.length;
var i__4737__auto___38898 = (0);
while(true){
if((i__4737__auto___38898 < len__4736__auto___38897)){
args__4742__auto__.push((arguments[i__4737__auto___38898]));

var G__38899 = (i__4737__auto___38898 + (1));
i__4737__auto___38898 = G__38899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36325_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36325_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
}));

(cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq36326){
var G__36327 = cljs.core.first(seq36326);
var seq36326__$1 = cljs.core.next(seq36326);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36327,seq36326__$1);
}));

var ret__4785__auto___38917 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38920 = arguments.length;
var i__4737__auto___38921 = (0);
while(true){
if((i__4737__auto___38921 < len__4736__auto___38920)){
args__4742__auto__.push((arguments[i__4737__auto___38921]));

var G__38923 = (i__4737__auto___38921 + (1));
i__4737__auto___38921 = G__38923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defonce","cljs.core/defonce",-1291833100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(mm_name,m__$2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__36328__auto__","method-table__36328__auto__",924385568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__36329__auto__","prefer-table__36329__auto__",-1508426602,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__36330__auto__","method-cache__36330__auto__",-1774415312,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__36331__auto__","cached-hierarchy__36331__auto__",-1738914480,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__36332__auto__","hierarchy__36332__auto__",-1853142741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,options__$4,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.get_global_hierarchy",null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,mm_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.name(mm_name),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__36332__auto__","hierarchy__36332__auto__",-1853142741,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__36328__auto__","method-table__36328__auto__",924385568,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__36329__auto__","prefer-table__36329__auto__",-1508426602,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__36330__auto__","method-cache__36330__auto__",-1774415312,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__36331__auto__","cached-hierarchy__36331__auto__",-1738914480,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq36333){
var G__36334 = cljs.core.first(seq36333);
var seq36333__$1 = cljs.core.next(seq36333);
var G__36335 = cljs.core.first(seq36333__$1);
var seq36333__$2 = cljs.core.next(seq36333__$1);
var G__36336 = cljs.core.first(seq36333__$2);
var seq36333__$3 = cljs.core.next(seq36333__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36334,G__36335,G__36336,seq36333__$3);
}));

return null;
})()
;
(cljs.core$macros.defmulti.cljs$lang$macro = true);

var ret__4785__auto___39007 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39009 = arguments.length;
var i__4737__auto___39010 = (0);
while(true){
if((i__4737__auto___39010 < len__4736__auto___39009)){
args__4742__auto__.push((arguments[i__4737__auto___39010]));

var G__39014 = (i__4737__auto___39010 + (1));
i__4737__auto___39010 = G__39014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),fn_tail))),null,(1),null))], 0))));
}));

(cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq36342){
var G__36343 = cljs.core.first(seq36342);
var seq36342__$1 = cljs.core.next(seq36342);
var G__36344 = cljs.core.first(seq36342__$1);
var seq36342__$2 = cljs.core.next(seq36342__$1);
var G__36345 = cljs.core.first(seq36342__$2);
var seq36342__$3 = cljs.core.next(seq36342__$2);
var G__36346 = cljs.core.first(seq36342__$3);
var seq36342__$4 = cljs.core.next(seq36342__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36343,G__36344,G__36345,G__36346,seq36342__$4);
}));

return null;
})()
;
(cljs.core$macros.defmethod.cljs$lang$macro = true);

var ret__4785__auto___39021 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__36351__auto__","start__36351__auto__",-1194088699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__36352__auto__","ret__36352__auto__",1076386305,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36351__auto__","start__36351__auto__",-1194088699,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(6),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__36352__auto__","ret__36352__auto__",1076386305,null),null,(1),null))], 0))));
});
(cljs.core$macros.time.cljs$lang$macro = true);

var ret__4785__auto___39047 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39048 = arguments.length;
var i__4737__auto___39049 = (0);
while(true){
if((i__4737__auto___39049 < len__4736__auto___39048)){
args__4742__auto__.push((arguments[i__4737__auto___39049]));

var G__39051 = (i__4737__auto___39049 + (1));
i__4737__auto___39049 = G__39051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__36385){
var map__36390 = p__36385;
var map__36390__$1 = (((((!((map__36390 == null))))?(((((map__36390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36390):map__36390);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36390__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__36365__auto__","start__36365__auto__",-1254837778,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__36366__auto__","ret__36366__auto__",218501848,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___36367__auto__","___36367__auto__",-1375981177,null),null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__36368__auto__","end__36368__auto__",1747900558,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36372__auto__","elapsed__36372__auto__",1399195396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__36368__auto__","end__36368__auto__",1747900558,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36365__auto__","start__36365__auto__",-1254837778,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,print_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,bs_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,expr_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)),(new cljs.core.List(null," runs, ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36372__auto__","elapsed__36372__auto__",1399195396,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq36373){
var G__36374 = cljs.core.first(seq36373);
var seq36373__$1 = cljs.core.next(seq36373);
var G__36375 = cljs.core.first(seq36373__$1);
var seq36373__$2 = cljs.core.next(seq36373__$1);
var G__36376 = cljs.core.first(seq36373__$2);
var seq36373__$3 = cljs.core.next(seq36373__$2);
var G__36377 = cljs.core.first(seq36373__$3);
var seq36373__$4 = cljs.core.next(seq36373__$3);
var G__36378 = cljs.core.first(seq36373__$4);
var seq36373__$5 = cljs.core.next(seq36373__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36374,G__36375,G__36376,G__36377,G__36378,seq36373__$5);
}));

return null;
})()
;
(cljs.core$macros.simple_benchmark.cljs$lang$macro = true);

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__36409 = arguments.length;
switch (G__36409) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
}));

(cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(function (){var G__36417 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__36417) : cljs.core$macros.cs.call(null,G__36417));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"Only up to 20 arguments supported on functions",null,(1),null))))),null,(1),null)))));
}
}));

(cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___39150 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0(),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.gen_apply_to.cljs$lang$macro = true);

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",proto_name].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",proto_name].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36424_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36424_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new_arg_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,next_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,proto_prop,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,proto_inv,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),all_args], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"arr__36425__auto__","arr__36425__auto__",-832368302,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),all_args))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__36426__auto__","s__36426__auto__",847158944,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__36426__auto__","s__36426__auto__",847158944,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__36425__auto__","arr__36425__auto__",-832368302,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__36426__auto__","s__36426__auto__",847158944,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__36426__auto__","s__36426__auto__",847158944,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__36425__auto__","arr__36425__auto__",-832368302,null),null,(1),null))], 0)))),null,(1),null))], 0)))):(function (){var G__36430 = f;
var G__36431 = (num_args + (1));
var G__36432 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__36430,G__36431,G__36432) : cljs.core$macros.gen_apply_to_simple_helper.call(null,G__36430,G__36431,G__36432));
})()),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4785__auto___39221 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
(cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true);

var ret__4785__auto___39224 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39225 = arguments.length;
var i__4737__auto___39226 = (0);
while(true){
if((i__4737__auto___39226 < len__4736__auto___39225)){
args__4742__auto__.push((arguments[i__4737__auto___39226]));

var G__39227 = (i__4737__auto___39226 + (1));
i__4737__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sb__36437__auto__","sb__36437__auto__",-1515341614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("goog.string","StringBuffer.","goog.string/StringBuffer.",-6870594,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36438__auto__","x__36438__auto__",-1148565262,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".append",".append",1595439852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__36437__auto__","sb__36437__auto__",-1515341614,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36438__auto__","x__36438__auto__",-1148565262,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__36437__auto__","sb__36437__auto__",-1515341614,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq36439){
var G__36440 = cljs.core.first(seq36439);
var seq36439__$1 = cljs.core.next(seq36439);
var G__36441 = cljs.core.first(seq36439__$1);
var seq36439__$2 = cljs.core.next(seq36439__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36440,G__36441,seq36439__$2);
}));

return null;
})()
;
(cljs.core$macros.with_out_str.cljs$lang$macro = true);

var ret__4785__auto___39240 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39241 = arguments.length;
var i__4737__auto___39242 = (0);
while(true){
if((i__4737__auto___39242 < len__4736__auto___39241)){
args__4742__auto__.push((arguments[i__4737__auto___39242]));

var G__39243 = (i__4737__auto___39242 + (1));
i__4737__auto___39242 = G__39243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36444_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),(new cljs.core.List(null,p1__36444_SHARP_,null,(1),null)),(2),null));
}),colls))));
}));

(cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq36445){
var G__36446 = cljs.core.first(seq36445);
var seq36445__$1 = cljs.core.next(seq36445);
var G__36447 = cljs.core.first(seq36445__$1);
var seq36445__$2 = cljs.core.next(seq36445__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36446,G__36447,seq36445__$2);
}));

return null;
})()
;
(cljs.core$macros.lazy_cat.cljs$lang$macro = true);

var ret__4785__auto___39252 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"''+~{}",(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.js_str.cljs$lang$macro = true);

var ret__4785__auto___39253 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,ty,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__36450__auto__","this__36450__auto__",177558207,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__36450__auto__","this__36450__auto__",177558207,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.es6_iterable.cljs$lang$macro = true);

var ret__4785__auto___39256 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36454){
var vec__36455 = p__36454;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)),null,(1),null))))),null,(1),null))))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36459){
var vec__36460 = p__36459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36460,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36460,(1),null);
return cljs.core.not(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_publics.cljs$lang$macro = true);

var ret__4785__auto___39329 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36464){
var vec__36465 = p__36464;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36465,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(ctor),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor),null,(1),null))))));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_imports.cljs$lang$macro = true);

var ret__4785__auto___39374 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36470){
var vec__36471 = p__36470;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36471,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36471,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)),null,(1),null))))),null,(1),null))))));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_interns.cljs$lang$macro = true);

var ret__4785__auto___39414 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-delete","cljs.core/js-delete",-496744137,null),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),null,(1),null))], 0))));
});
(cljs.core$macros.ns_unmap.cljs$lang$macro = true);

var ret__4785__auto___39451 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39453 = arguments.length;
var i__4737__auto___39454 = (0);
while(true){
if((i__4737__auto___39454 < len__4736__auto___39453)){
args__4742__auto__.push((arguments[i__4737__auto___39454]));

var G__39455 = (i__4737__auto___39454 + (1));
i__4737__auto___39454 = G__39455;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq36478){
var G__36479 = cljs.core.first(seq36478);
var seq36478__$1 = cljs.core.next(seq36478);
var G__36480 = cljs.core.first(seq36478__$1);
var seq36478__$2 = cljs.core.next(seq36478__$1);
var G__36481 = cljs.core.first(seq36478__$2);
var seq36478__$3 = cljs.core.next(seq36478__$2);
var G__36482 = cljs.core.first(seq36478__$3);
var seq36478__$4 = cljs.core.next(seq36478__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36479,G__36480,G__36481,G__36482,seq36478__$4);
}));

return null;
})()
;
(cljs.core$macros.vswap_BANG_.cljs$lang$macro = true);

var ret__4785__auto___39475 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39476 = arguments.length;
var i__4737__auto___39477 = (0);
while(true){
if((i__4737__auto___39477 < len__4736__auto___39476)){
args__4742__auto__.push((arguments[i__4737__auto___39477]));

var G__39478 = (i__4737__auto___39477 + (1));
i__4737__auto___39477 = G__39478;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
}));

(cljs.core$macros.locking.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.locking.cljs$lang$applyTo = (function (seq36485){
var G__36486 = cljs.core.first(seq36485);
var seq36485__$1 = cljs.core.next(seq36485);
var G__36487 = cljs.core.first(seq36485__$1);
var seq36485__$2 = cljs.core.next(seq36485__$1);
var G__36488 = cljs.core.first(seq36485__$2);
var seq36485__$3 = cljs.core.next(seq36485__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36486,G__36487,G__36488,seq36485__$3);
}));

return null;
})()
;
(cljs.core$macros.locking.cljs$lang$macro = true);

var ret__4785__auto___39487 = cljs.core$macros.ns_special_form = (function cljs$core$macros$ns_special_form(_AMPERSAND_form,_AMPERSAND_env){
return null;
});
(cljs.core$macros.ns_special_form.cljs$lang$macro = true);

var ret__4785__auto___39488 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39507 = arguments.length;
var i__4737__auto___39508 = (0);
while(true){
if((i__4737__auto___39508 < len__4736__auto___39507)){
args__4742__auto__.push((arguments[i__4737__auto___39508]));

var G__39510 = (i__4737__auto___39508 + (1));
i__4737__auto___39508 = G__39510;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args),null,(1),null)))));
}));

(cljs.core$macros.require.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.require.cljs$lang$applyTo = (function (seq36494){
var G__36495 = cljs.core.first(seq36494);
var seq36494__$1 = cljs.core.next(seq36494);
var G__36496 = cljs.core.first(seq36494__$1);
var seq36494__$2 = cljs.core.next(seq36494__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36495,G__36496,seq36494__$2);
}));

return null;
})()
;
(cljs.core$macros.require.cljs$lang$macro = true);

var ret__4785__auto___39515 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39519 = arguments.length;
var i__4737__auto___39521 = (0);
while(true){
if((i__4737__auto___39521 < len__4736__auto___39519)){
args__4742__auto__.push((arguments[i__4737__auto___39521]));

var G__39523 = (i__4737__auto___39521 + (1));
i__4737__auto___39521 = G__39523;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args),null,(1),null)))));
}));

(cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq36497){
var G__36498 = cljs.core.first(seq36497);
var seq36497__$1 = cljs.core.next(seq36497);
var G__36499 = cljs.core.first(seq36497__$1);
var seq36497__$2 = cljs.core.next(seq36497__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36498,G__36499,seq36497__$2);
}));

return null;
})()
;
(cljs.core$macros.require_macros.cljs$lang$macro = true);

var ret__4785__auto___39590 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39592 = arguments.length;
var i__4737__auto___39593 = (0);
while(true){
if((i__4737__auto___39593 < len__4736__auto___39592)){
args__4742__auto__.push((arguments[i__4737__auto___39593]));

var G__39595 = (i__4737__auto___39593 + (1));
i__4737__auto___39593 = G__39595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args),null,(1),null)))));
}));

(cljs.core$macros.use.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.use.cljs$lang$applyTo = (function (seq36504){
var G__36505 = cljs.core.first(seq36504);
var seq36504__$1 = cljs.core.next(seq36504);
var G__36506 = cljs.core.first(seq36504__$1);
var seq36504__$2 = cljs.core.next(seq36504__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36505,G__36506,seq36504__$2);
}));

return null;
})()
;
(cljs.core$macros.use.cljs$lang$macro = true);

var ret__4785__auto___39607 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39608 = arguments.length;
var i__4737__auto___39609 = (0);
while(true){
if((i__4737__auto___39609 < len__4736__auto___39608)){
args__4742__auto__.push((arguments[i__4737__auto___39609]));

var G__39611 = (i__4737__auto___39609 + (1));
i__4737__auto___39609 = G__39611;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args),null,(1),null)))));
}));

(cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq36516){
var G__36517 = cljs.core.first(seq36516);
var seq36516__$1 = cljs.core.next(seq36516);
var G__36518 = cljs.core.first(seq36516__$1);
var seq36516__$2 = cljs.core.next(seq36516__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36517,G__36518,seq36516__$2);
}));

return null;
})()
;
(cljs.core$macros.use_macros.cljs$lang$macro = true);

var ret__4785__auto___39613 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39614 = arguments.length;
var i__4737__auto___39616 = (0);
while(true){
if((i__4737__auto___39616 < len__4736__auto___39614)){
args__4742__auto__.push((arguments[i__4737__auto___39616]));

var G__39617 = (i__4737__auto___39616 + (1));
i__4737__auto___39616 = G__39617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists),null,(1),null)))));
}));

(cljs.core$macros.import$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.import$.cljs$lang$applyTo = (function (seq36523){
var G__36524 = cljs.core.first(seq36523);
var seq36523__$1 = cljs.core.next(seq36523);
var G__36525 = cljs.core.first(seq36523__$1);
var seq36523__$2 = cljs.core.next(seq36523__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36524,G__36525,seq36523__$2);
}));

return null;
})()
;
(cljs.core$macros.import$.cljs$lang$macro = true);

var ret__4785__auto___39652 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39653 = arguments.length;
var i__4737__auto___39654 = (0);
while(true){
if((i__4737__auto___39654 < len__4736__auto___39653)){
args__4742__auto__.push((arguments[i__4737__auto___39654]));

var G__39655 = (i__4737__auto___39654 + (1));
i__4737__auto___39654 = G__39655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args),null,(1),null)))));
}));

(cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq36528){
var G__36529 = cljs.core.first(seq36528);
var seq36528__$1 = cljs.core.next(seq36528);
var G__36530 = cljs.core.first(seq36528__$1);
var seq36528__$2 = cljs.core.next(seq36528__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36529,G__36530,seq36528__$2);
}));

return null;
})()
;
(cljs.core$macros.refer_clojure.cljs$lang$macro = true);

var ret__4785__auto___39673 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("goog","nodeGlobalRequire","goog/nodeGlobalRequire",163905703,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
});
(cljs.core$macros.load_file_STAR_.cljs$lang$macro = true);

var ret__4785__auto___39675 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer.macroexpand_1(_AMPERSAND_env,form),null,(1),null)))));
} else {
return form;
}
});
(cljs.core$macros.macroexpand_1.cljs$lang$macro = true);

var ret__4785__auto___39677 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if((!((form__$1 === form_SINGLEQUOTE_)))){
var G__39681 = form_SINGLEQUOTE_;
var G__39682 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__39681;
form_SINGLEQUOTE_ = G__39682;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form_SINGLEQUOTE_,null,(1),null)))));
}
break;
}
} else {
return form;
}
});
(cljs.core$macros.macroexpand.cljs$lang$macro = true);

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl))){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.ffirst(fdecl));
} else {
return false;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__36534 = arguments.length;
switch (G__36534) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
}));

(cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__36535,solo){
var vec__36536 = p__36535;
var seq__36537 = cljs.core.seq(vec__36536);
var first__36538 = cljs.core.first(seq__36537);
var seq__36537__$1 = cljs.core.next(seq__36537);
var arglist = first__36538;
var body = seq__36537__$1;
var method = vec__36536;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});
var get_delegate_prop = (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});
var param_bind = (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,param,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3122,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3122,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,54,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,restarg,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3123,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,51,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3123,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))], 0)))));
});
var apply_to = (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__36531__auto__","self__36531__auto__",-1785091512,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__36531__auto__","self__36531__auto__",-1785091512,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,get_delegate(),null,(1),null)),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,restarg,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__36532__auto__","self__36532__auto__",1698913108,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__36532__auto__","self__36532__auto__",1698913108,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,get_delegate(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,get_delegate_prop(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(sig),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.count(sig) - (1)),null,(1),null))], 0)))),null,(1),null)))))):null),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-inline-comment","cljs.core/js-inline-comment",1792529242,null),null,(1),null)),(new cljs.core.List(null," @this {Function} ",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(sym,cljs.core.dissoc,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,apply_to(),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___39799 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"len__36540__auto__","len__36540__auto__",1932352561,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__36541__auto__","i__36541__auto__",-1677831445,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__36541__auto__","i__36541__auto__",-1677831445,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"len__36540__auto__","len__36540__auto__",1932352561,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,dest,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"i__36541__auto__","i__36541__auto__",-1677831445,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__36541__auto__","i__36541__auto__",-1677831445,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.copy_arguments.cljs$lang$macro = true);

cljs.core$macros.elide_implicit_macro_args = (function cljs$core$macros$elide_implicit_macro_args(arglists){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arglist){
if(cljs.core.vector_QMARK_(arglist)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(arglist,(2));
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),arglist);
}
}),arglists);
});
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__36544,emit_var_QMARK_){
var vec__36545 = p__36544;
var vec__36548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(0),null);
var seq__36549 = cljs.core.seq(vec__36548);
var first__36550 = cljs.core.first(seq__36549);
var seq__36549__$1 = cljs.core.next(seq__36549);
var arglist = first__36550;
var body = seq__36549__$1;
var method = vec__36548;
var fdecl = vec__36545;
var dest_args = (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__36551 = c_1;
if(cljs.core.truth_(macro_QMARK_)){
return (G__36551 - (2));
} else {
return G__36551;
}
})();
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__36552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null);
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__36552);
} else {
return G__36552;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__36553 = (new cljs.core.List(null,arglist,null,(1),null));
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__36553);
} else {
return G__36553;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
var name__$1 = cljs.core.with_meta(name,meta__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__36542__auto__","args__36542__auto__",-576642703,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","copy-arguments","cljs.core/copy-arguments",1735553785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36542__auto__","args__36542__auto__",-576642703,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__36543__auto__","argseq__36543__auto__",-1659794622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36542__auto__","args__36542__auto__",-576642703,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3185,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3185,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36542__auto__","args__36542__auto__",-576642703,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,c_1,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__36543__auto__","argseq__36543__auto__",-1659794622,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(name__$1,method),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null))], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')),null,(1),null)),dest_args(c)))),null,(1),null))], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(name__$1,p__36563){
var vec__36564 = p__36563;
var seq__36565 = cljs.core.seq(vec__36564);
var first__36566 = cljs.core.first(seq__36565);
var seq__36565__$1 = cljs.core.next(seq__36565);
var sig = first__36566;
var body = seq__36565__$1;
var method = vec__36564;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name__$1,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(name__$1,cljs.core.update,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),cljs.core.count(sig)], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,method,null,(1),null))))),null,(1),null))], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var varsig_QMARK_ = (function (p1__36554_SHARP_){
return cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),p1__36554_SHARP_));
});
var map__36567 = cljs.core.group_by(varsig_QMARK_,arglists);
var map__36567__$1 = (((((!((map__36567 == null))))?(((((map__36567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36567):map__36567);
var sigs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36567__$1,false);
var var_sigs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36567__$1,true);
var variadic_QMARK_ = (cljs.core.count(var_sigs) > (0));
var variadic_params = ((variadic_QMARK_)?(function (){var G__36569 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.first(var_sigs));
var G__36569__$1 = cljs.core.count(G__36569)
;
if(cljs.core.truth_(macro_QMARK_)){
return (G__36569__$1 - (2));
} else {
return G__36569__$1;
}
})():(0));
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(var_sigs)) - (2))], null)));
var mfa = (function (){var G__36570 = maxfa;
if(cljs.core.truth_(macro_QMARK_)){
return (G__36570 - (2));
} else {
return G__36570;
}
})();
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__36571 = sigs;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__36571);
} else {
return G__36571;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__36572 = arglists;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__36572);
} else {
return G__36572;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
var name__$1 = cljs.core.with_meta(name,meta__$1);
if(((1) < cljs.core.count(var_sigs))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if((((variadic_params > (0))) && ((!((variadic_params === ((1) + mfa))))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__36555_SHARP_){
return fixed_arity(rname,p1__36555_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(new cljs.core.List(null,((variadic_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__36556__auto__","args-arr__36556__auto__",129829020,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","copy-arguments","cljs.core/copy-arguments",1735553785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__36556__auto__","args-arr__36556__auto__",129829020,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__36557__auto__","argseq__36557__auto__",-2047287790,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3262,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,59,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3262,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__36556__auto__","args-arr__36556__auto__",129829020,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,maxfa,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__36557__auto__","argseq__36557__auto__",-2047287790,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(2),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36558_SHARP_){
return fn_method(name__$1,p1__36558_SHARP_);
}),fdecl),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,maxfa,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null))], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core$macros.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4)){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4),null,(1),null)),(2),null)),(3),null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__39895__i = 0, G__39895__a = new Array(arguments.length -  3);
while (G__39895__i < G__39895__a.length) {G__39895__a[G__39895__i] = arguments[G__39895__i + 3]; ++G__39895__i;}
  fdecl = new cljs.core.IndexedSeq(G__39895__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__39896){
var _AMPERSAND_form = cljs.core.first(arglist__39896);
arglist__39896 = cljs.core.next(arglist__39896);
var _AMPERSAND_env = cljs.core.first(arglist__39896);
arglist__39896 = cljs.core.next(arglist__39896);
var name = cljs.core.first(arglist__39896);
var fdecl = cljs.core.rest(arglist__39896);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
(cljs.core$macros.defn.cljs$lang$macro = true);
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39897 = arguments.length;
var i__4737__auto___39898 = (0);
while(true){
if((i__4737__auto___39898 < len__4736__auto___39897)){
args__4742__auto__.push((arguments[i__4737__auto___39898]));

var G__39899 = (i__4737__auto___39898 + (1));
i__4737__auto___39898 = G__39899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true),null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__39985 = cljs.core.cons(f,p);
var G__39986 = cljs.core.next(args__$1);
p = G__39985;
args__$1 = G__39986;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__39987 = cljs.core.cons(f,p);
var G__39988 = cljs.core.next(args__$1);
p = G__39987;
args__$1 = G__39988;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__40000 = cljs.core.next(fd);
fd = G__40000;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__40002 = cljs.core.next(fd);
fd = G__40002;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__40008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__40009 = cljs.core.next(ds);
acc = G__40008;
ds = G__40009;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__40015 = cljs.core.next(p);
var G__40016 = cljs.core.cons(cljs.core.first(p),d);
p = G__40015;
d = G__40016;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__36574__auto__","ret__36574__auto__",-145603661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__36574__auto__","ret__36574__auto__",-145603661,null),null,(1),null))], 0))));
}));

(cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq36575){
var G__36576 = cljs.core.first(seq36575);
var seq36575__$1 = cljs.core.next(seq36575);
var G__36577 = cljs.core.first(seq36575__$1);
var seq36575__$2 = cljs.core.next(seq36575__$1);
var G__36578 = cljs.core.first(seq36575__$2);
var seq36575__$3 = cljs.core.next(seq36575__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36576,G__36577,G__36578,seq36575__$3);
}));

(cljs.core$macros.defmacro.cljs$lang$macro = true);
var ret__4785__auto___40030 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if(((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(quoted_sym))))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__36579 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e36582){var e = e36582;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,resolved,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,meta,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.resolve.cljs$lang$macro = true);


//# sourceMappingURL=cljs.core$macros.js.map
