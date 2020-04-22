goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33243 = coll;
var G__33244 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33243,G__33244) : shadow.dom.lazy_native_coll_seq.call(null,G__33243,G__33244));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33291 = arguments.length;
switch (G__33291) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33299 = arguments.length;
switch (G__33299) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33308 = arguments.length;
switch (G__33308) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33319 = arguments.length;
switch (G__33319) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33333 = arguments.length;
switch (G__33333) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33346){if((e33346 instanceof Object)){
var e = e33346;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33346;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33353 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33354 = null;
var count__33355 = (0);
var i__33356 = (0);
while(true){
if((i__33356 < count__33355)){
var el = chunk__33354.cljs$core$IIndexed$_nth$arity$2(null,i__33356);
var handler_34387__$1 = ((function (seq__33353,chunk__33354,count__33355,i__33356,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33353,chunk__33354,count__33355,i__33356,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34387__$1);


var G__34388 = seq__33353;
var G__34389 = chunk__33354;
var G__34390 = count__33355;
var G__34391 = (i__33356 + (1));
seq__33353 = G__34388;
chunk__33354 = G__34389;
count__33355 = G__34390;
i__33356 = G__34391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33353);
if(temp__5735__auto__){
var seq__33353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33353__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33353__$1);
var G__34392 = cljs.core.chunk_rest(seq__33353__$1);
var G__34393 = c__4609__auto__;
var G__34394 = cljs.core.count(c__4609__auto__);
var G__34395 = (0);
seq__33353 = G__34392;
chunk__33354 = G__34393;
count__33355 = G__34394;
i__33356 = G__34395;
continue;
} else {
var el = cljs.core.first(seq__33353__$1);
var handler_34396__$1 = ((function (seq__33353,chunk__33354,count__33355,i__33356,el,seq__33353__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33353,chunk__33354,count__33355,i__33356,el,seq__33353__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34396__$1);


var G__34397 = cljs.core.next(seq__33353__$1);
var G__34398 = null;
var G__34399 = (0);
var G__34400 = (0);
seq__33353 = G__34397;
chunk__33354 = G__34398;
count__33355 = G__34399;
i__33356 = G__34400;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33376 = arguments.length;
switch (G__33376) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33399 = cljs.core.seq(events);
var chunk__33400 = null;
var count__33401 = (0);
var i__33402 = (0);
while(true){
if((i__33402 < count__33401)){
var vec__33415 = chunk__33400.cljs$core$IIndexed$_nth$arity$2(null,i__33402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33415,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34403 = seq__33399;
var G__34404 = chunk__33400;
var G__34405 = count__33401;
var G__34406 = (i__33402 + (1));
seq__33399 = G__34403;
chunk__33400 = G__34404;
count__33401 = G__34405;
i__33402 = G__34406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33399);
if(temp__5735__auto__){
var seq__33399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33399__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33399__$1);
var G__34407 = cljs.core.chunk_rest(seq__33399__$1);
var G__34408 = c__4609__auto__;
var G__34409 = cljs.core.count(c__4609__auto__);
var G__34410 = (0);
seq__33399 = G__34407;
chunk__33400 = G__34408;
count__33401 = G__34409;
i__33402 = G__34410;
continue;
} else {
var vec__33424 = cljs.core.first(seq__33399__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33424,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34412 = cljs.core.next(seq__33399__$1);
var G__34413 = null;
var G__34414 = (0);
var G__34415 = (0);
seq__33399 = G__34412;
chunk__33400 = G__34413;
count__33401 = G__34414;
i__33402 = G__34415;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33436 = cljs.core.seq(styles);
var chunk__33437 = null;
var count__33438 = (0);
var i__33439 = (0);
while(true){
if((i__33439 < count__33438)){
var vec__33460 = chunk__33437.cljs$core$IIndexed$_nth$arity$2(null,i__33439);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33460,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34417 = seq__33436;
var G__34418 = chunk__33437;
var G__34419 = count__33438;
var G__34420 = (i__33439 + (1));
seq__33436 = G__34417;
chunk__33437 = G__34418;
count__33438 = G__34419;
i__33439 = G__34420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33436);
if(temp__5735__auto__){
var seq__33436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33436__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33436__$1);
var G__34421 = cljs.core.chunk_rest(seq__33436__$1);
var G__34422 = c__4609__auto__;
var G__34423 = cljs.core.count(c__4609__auto__);
var G__34424 = (0);
seq__33436 = G__34421;
chunk__33437 = G__34422;
count__33438 = G__34423;
i__33439 = G__34424;
continue;
} else {
var vec__33467 = cljs.core.first(seq__33436__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33467,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34425 = cljs.core.next(seq__33436__$1);
var G__34426 = null;
var G__34427 = (0);
var G__34428 = (0);
seq__33436 = G__34425;
chunk__33437 = G__34426;
count__33438 = G__34427;
i__33439 = G__34428;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33476_34429 = key;
var G__33476_34430__$1 = (((G__33476_34429 instanceof cljs.core.Keyword))?G__33476_34429.fqn:null);
switch (G__33476_34430__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34435 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34435,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34435,"aria-");
}
})())){
el.setAttribute(ks_34435,value);
} else {
(el[ks_34435] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33523){
var map__33527 = p__33523;
var map__33527__$1 = (((((!((map__33527 == null))))?(((((map__33527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33527):map__33527);
var props = map__33527__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33533 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33540 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33540,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33540;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33552 = arguments.length;
switch (G__33552) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33582){
var vec__33584 = p__33582;
var seq__33585 = cljs.core.seq(vec__33584);
var first__33586 = cljs.core.first(seq__33585);
var seq__33585__$1 = cljs.core.next(seq__33585);
var nn = first__33586;
var first__33586__$1 = cljs.core.first(seq__33585__$1);
var seq__33585__$2 = cljs.core.next(seq__33585__$1);
var np = first__33586__$1;
var nc = seq__33585__$2;
var node = vec__33584;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33593 = nn;
var G__33594 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33593,G__33594) : create_fn.call(null,G__33593,G__33594));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33597 = nn;
var G__33598 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33597,G__33598) : create_fn.call(null,G__33597,G__33598));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33607 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33607,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33607,(1),null);
var seq__33610_34448 = cljs.core.seq(node_children);
var chunk__33611_34449 = null;
var count__33612_34450 = (0);
var i__33613_34451 = (0);
while(true){
if((i__33613_34451 < count__33612_34450)){
var child_struct_34452 = chunk__33611_34449.cljs$core$IIndexed$_nth$arity$2(null,i__33613_34451);
var children_34453 = shadow.dom.dom_node(child_struct_34452);
if(cljs.core.seq_QMARK_(children_34453)){
var seq__33724_34454 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34453));
var chunk__33726_34455 = null;
var count__33727_34456 = (0);
var i__33728_34457 = (0);
while(true){
if((i__33728_34457 < count__33727_34456)){
var child_34458 = chunk__33726_34455.cljs$core$IIndexed$_nth$arity$2(null,i__33728_34457);
if(cljs.core.truth_(child_34458)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34458);


var G__34459 = seq__33724_34454;
var G__34460 = chunk__33726_34455;
var G__34461 = count__33727_34456;
var G__34462 = (i__33728_34457 + (1));
seq__33724_34454 = G__34459;
chunk__33726_34455 = G__34460;
count__33727_34456 = G__34461;
i__33728_34457 = G__34462;
continue;
} else {
var G__34463 = seq__33724_34454;
var G__34464 = chunk__33726_34455;
var G__34465 = count__33727_34456;
var G__34466 = (i__33728_34457 + (1));
seq__33724_34454 = G__34463;
chunk__33726_34455 = G__34464;
count__33727_34456 = G__34465;
i__33728_34457 = G__34466;
continue;
}
} else {
var temp__5735__auto___34467 = cljs.core.seq(seq__33724_34454);
if(temp__5735__auto___34467){
var seq__33724_34468__$1 = temp__5735__auto___34467;
if(cljs.core.chunked_seq_QMARK_(seq__33724_34468__$1)){
var c__4609__auto___34469 = cljs.core.chunk_first(seq__33724_34468__$1);
var G__34470 = cljs.core.chunk_rest(seq__33724_34468__$1);
var G__34471 = c__4609__auto___34469;
var G__34472 = cljs.core.count(c__4609__auto___34469);
var G__34473 = (0);
seq__33724_34454 = G__34470;
chunk__33726_34455 = G__34471;
count__33727_34456 = G__34472;
i__33728_34457 = G__34473;
continue;
} else {
var child_34474 = cljs.core.first(seq__33724_34468__$1);
if(cljs.core.truth_(child_34474)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34474);


var G__34475 = cljs.core.next(seq__33724_34468__$1);
var G__34476 = null;
var G__34477 = (0);
var G__34478 = (0);
seq__33724_34454 = G__34475;
chunk__33726_34455 = G__34476;
count__33727_34456 = G__34477;
i__33728_34457 = G__34478;
continue;
} else {
var G__34479 = cljs.core.next(seq__33724_34468__$1);
var G__34480 = null;
var G__34481 = (0);
var G__34482 = (0);
seq__33724_34454 = G__34479;
chunk__33726_34455 = G__34480;
count__33727_34456 = G__34481;
i__33728_34457 = G__34482;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34453);
}


var G__34483 = seq__33610_34448;
var G__34484 = chunk__33611_34449;
var G__34485 = count__33612_34450;
var G__34486 = (i__33613_34451 + (1));
seq__33610_34448 = G__34483;
chunk__33611_34449 = G__34484;
count__33612_34450 = G__34485;
i__33613_34451 = G__34486;
continue;
} else {
var temp__5735__auto___34487 = cljs.core.seq(seq__33610_34448);
if(temp__5735__auto___34487){
var seq__33610_34488__$1 = temp__5735__auto___34487;
if(cljs.core.chunked_seq_QMARK_(seq__33610_34488__$1)){
var c__4609__auto___34490 = cljs.core.chunk_first(seq__33610_34488__$1);
var G__34491 = cljs.core.chunk_rest(seq__33610_34488__$1);
var G__34492 = c__4609__auto___34490;
var G__34493 = cljs.core.count(c__4609__auto___34490);
var G__34494 = (0);
seq__33610_34448 = G__34491;
chunk__33611_34449 = G__34492;
count__33612_34450 = G__34493;
i__33613_34451 = G__34494;
continue;
} else {
var child_struct_34495 = cljs.core.first(seq__33610_34488__$1);
var children_34496 = shadow.dom.dom_node(child_struct_34495);
if(cljs.core.seq_QMARK_(children_34496)){
var seq__33765_34497 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34496));
var chunk__33767_34498 = null;
var count__33768_34499 = (0);
var i__33769_34500 = (0);
while(true){
if((i__33769_34500 < count__33768_34499)){
var child_34502 = chunk__33767_34498.cljs$core$IIndexed$_nth$arity$2(null,i__33769_34500);
if(cljs.core.truth_(child_34502)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34502);


var G__34503 = seq__33765_34497;
var G__34504 = chunk__33767_34498;
var G__34505 = count__33768_34499;
var G__34506 = (i__33769_34500 + (1));
seq__33765_34497 = G__34503;
chunk__33767_34498 = G__34504;
count__33768_34499 = G__34505;
i__33769_34500 = G__34506;
continue;
} else {
var G__34507 = seq__33765_34497;
var G__34508 = chunk__33767_34498;
var G__34509 = count__33768_34499;
var G__34510 = (i__33769_34500 + (1));
seq__33765_34497 = G__34507;
chunk__33767_34498 = G__34508;
count__33768_34499 = G__34509;
i__33769_34500 = G__34510;
continue;
}
} else {
var temp__5735__auto___34511__$1 = cljs.core.seq(seq__33765_34497);
if(temp__5735__auto___34511__$1){
var seq__33765_34512__$1 = temp__5735__auto___34511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33765_34512__$1)){
var c__4609__auto___34513 = cljs.core.chunk_first(seq__33765_34512__$1);
var G__34514 = cljs.core.chunk_rest(seq__33765_34512__$1);
var G__34515 = c__4609__auto___34513;
var G__34516 = cljs.core.count(c__4609__auto___34513);
var G__34517 = (0);
seq__33765_34497 = G__34514;
chunk__33767_34498 = G__34515;
count__33768_34499 = G__34516;
i__33769_34500 = G__34517;
continue;
} else {
var child_34518 = cljs.core.first(seq__33765_34512__$1);
if(cljs.core.truth_(child_34518)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34518);


var G__34519 = cljs.core.next(seq__33765_34512__$1);
var G__34520 = null;
var G__34521 = (0);
var G__34522 = (0);
seq__33765_34497 = G__34519;
chunk__33767_34498 = G__34520;
count__33768_34499 = G__34521;
i__33769_34500 = G__34522;
continue;
} else {
var G__34523 = cljs.core.next(seq__33765_34512__$1);
var G__34524 = null;
var G__34525 = (0);
var G__34526 = (0);
seq__33765_34497 = G__34523;
chunk__33767_34498 = G__34524;
count__33768_34499 = G__34525;
i__33769_34500 = G__34526;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34496);
}


var G__34528 = cljs.core.next(seq__33610_34488__$1);
var G__34529 = null;
var G__34530 = (0);
var G__34531 = (0);
seq__33610_34448 = G__34528;
chunk__33611_34449 = G__34529;
count__33612_34450 = G__34530;
i__33613_34451 = G__34531;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33792 = cljs.core.seq(node);
var chunk__33793 = null;
var count__33794 = (0);
var i__33795 = (0);
while(true){
if((i__33795 < count__33794)){
var n = chunk__33793.cljs$core$IIndexed$_nth$arity$2(null,i__33795);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34537 = seq__33792;
var G__34538 = chunk__33793;
var G__34539 = count__33794;
var G__34540 = (i__33795 + (1));
seq__33792 = G__34537;
chunk__33793 = G__34538;
count__33794 = G__34539;
i__33795 = G__34540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33792);
if(temp__5735__auto__){
var seq__33792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33792__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33792__$1);
var G__34541 = cljs.core.chunk_rest(seq__33792__$1);
var G__34542 = c__4609__auto__;
var G__34543 = cljs.core.count(c__4609__auto__);
var G__34544 = (0);
seq__33792 = G__34541;
chunk__33793 = G__34542;
count__33794 = G__34543;
i__33795 = G__34544;
continue;
} else {
var n = cljs.core.first(seq__33792__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34549 = cljs.core.next(seq__33792__$1);
var G__34550 = null;
var G__34551 = (0);
var G__34552 = (0);
seq__33792 = G__34549;
chunk__33793 = G__34550;
count__33794 = G__34551;
i__33795 = G__34552;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33802 = arguments.length;
switch (G__33802) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33837 = arguments.length;
switch (G__33837) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34604 = arguments.length;
var i__4790__auto___34605 = (0);
while(true){
if((i__4790__auto___34605 < len__4789__auto___34604)){
args__4795__auto__.push((arguments[i__4790__auto___34605]));

var G__34606 = (i__4790__auto___34605 + (1));
i__4790__auto___34605 = G__34606;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33887_34611 = cljs.core.seq(nodes);
var chunk__33888_34612 = null;
var count__33889_34613 = (0);
var i__33890_34614 = (0);
while(true){
if((i__33890_34614 < count__33889_34613)){
var node_34617 = chunk__33888_34612.cljs$core$IIndexed$_nth$arity$2(null,i__33890_34614);
fragment.appendChild(shadow.dom._to_dom(node_34617));


var G__34618 = seq__33887_34611;
var G__34619 = chunk__33888_34612;
var G__34620 = count__33889_34613;
var G__34621 = (i__33890_34614 + (1));
seq__33887_34611 = G__34618;
chunk__33888_34612 = G__34619;
count__33889_34613 = G__34620;
i__33890_34614 = G__34621;
continue;
} else {
var temp__5735__auto___34623 = cljs.core.seq(seq__33887_34611);
if(temp__5735__auto___34623){
var seq__33887_34624__$1 = temp__5735__auto___34623;
if(cljs.core.chunked_seq_QMARK_(seq__33887_34624__$1)){
var c__4609__auto___34625 = cljs.core.chunk_first(seq__33887_34624__$1);
var G__34626 = cljs.core.chunk_rest(seq__33887_34624__$1);
var G__34627 = c__4609__auto___34625;
var G__34628 = cljs.core.count(c__4609__auto___34625);
var G__34629 = (0);
seq__33887_34611 = G__34626;
chunk__33888_34612 = G__34627;
count__33889_34613 = G__34628;
i__33890_34614 = G__34629;
continue;
} else {
var node_34630 = cljs.core.first(seq__33887_34624__$1);
fragment.appendChild(shadow.dom._to_dom(node_34630));


var G__34631 = cljs.core.next(seq__33887_34624__$1);
var G__34632 = null;
var G__34633 = (0);
var G__34634 = (0);
seq__33887_34611 = G__34631;
chunk__33888_34612 = G__34632;
count__33889_34613 = G__34633;
i__33890_34614 = G__34634;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33876){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33876));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33900_34635 = cljs.core.seq(scripts);
var chunk__33901_34636 = null;
var count__33902_34637 = (0);
var i__33903_34638 = (0);
while(true){
if((i__33903_34638 < count__33902_34637)){
var vec__33924_34639 = chunk__33901_34636.cljs$core$IIndexed$_nth$arity$2(null,i__33903_34638);
var script_tag_34640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924_34639,(0),null);
var script_body_34641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924_34639,(1),null);
eval(script_body_34641);


var G__34646 = seq__33900_34635;
var G__34647 = chunk__33901_34636;
var G__34648 = count__33902_34637;
var G__34649 = (i__33903_34638 + (1));
seq__33900_34635 = G__34646;
chunk__33901_34636 = G__34647;
count__33902_34637 = G__34648;
i__33903_34638 = G__34649;
continue;
} else {
var temp__5735__auto___34650 = cljs.core.seq(seq__33900_34635);
if(temp__5735__auto___34650){
var seq__33900_34651__$1 = temp__5735__auto___34650;
if(cljs.core.chunked_seq_QMARK_(seq__33900_34651__$1)){
var c__4609__auto___34652 = cljs.core.chunk_first(seq__33900_34651__$1);
var G__34653 = cljs.core.chunk_rest(seq__33900_34651__$1);
var G__34654 = c__4609__auto___34652;
var G__34655 = cljs.core.count(c__4609__auto___34652);
var G__34656 = (0);
seq__33900_34635 = G__34653;
chunk__33901_34636 = G__34654;
count__33902_34637 = G__34655;
i__33903_34638 = G__34656;
continue;
} else {
var vec__33927_34657 = cljs.core.first(seq__33900_34651__$1);
var script_tag_34658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33927_34657,(0),null);
var script_body_34659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33927_34657,(1),null);
eval(script_body_34659);


var G__34660 = cljs.core.next(seq__33900_34651__$1);
var G__34661 = null;
var G__34662 = (0);
var G__34663 = (0);
seq__33900_34635 = G__34660;
chunk__33901_34636 = G__34661;
count__33902_34637 = G__34662;
i__33903_34638 = G__34663;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33930){
var vec__33931 = p__33930;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33938 = arguments.length;
switch (G__33938) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33969 = cljs.core.seq(style_keys);
var chunk__33970 = null;
var count__33971 = (0);
var i__33972 = (0);
while(true){
if((i__33972 < count__33971)){
var it = chunk__33970.cljs$core$IIndexed$_nth$arity$2(null,i__33972);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34678 = seq__33969;
var G__34679 = chunk__33970;
var G__34680 = count__33971;
var G__34681 = (i__33972 + (1));
seq__33969 = G__34678;
chunk__33970 = G__34679;
count__33971 = G__34680;
i__33972 = G__34681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33969);
if(temp__5735__auto__){
var seq__33969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33969__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33969__$1);
var G__34682 = cljs.core.chunk_rest(seq__33969__$1);
var G__34683 = c__4609__auto__;
var G__34684 = cljs.core.count(c__4609__auto__);
var G__34685 = (0);
seq__33969 = G__34682;
chunk__33970 = G__34683;
count__33971 = G__34684;
i__33972 = G__34685;
continue;
} else {
var it = cljs.core.first(seq__33969__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34686 = cljs.core.next(seq__33969__$1);
var G__34687 = null;
var G__34688 = (0);
var G__34689 = (0);
seq__33969 = G__34686;
chunk__33970 = G__34687;
count__33971 = G__34688;
i__33972 = G__34689;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33987,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34000 = k33987;
var G__34000__$1 = (((G__34000 instanceof cljs.core.Keyword))?G__34000.fqn:null);
switch (G__34000__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33987,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34006){
var vec__34007 = p__34006;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34007,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34007,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33986){
var self__ = this;
var G__33986__$1 = this;
return (new cljs.core.RecordIter((0),G__33986__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33988,other33989){
var self__ = this;
var this33988__$1 = this;
return (((!((other33989 == null)))) && ((this33988__$1.constructor === other33989.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33988__$1.x,other33989.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33988__$1.y,other33989.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33988__$1.__extmap,other33989.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33986){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34023 = cljs.core.keyword_identical_QMARK_;
var expr__34024 = k__4447__auto__;
if(cljs.core.truth_((pred__34023.cljs$core$IFn$_invoke$arity$2 ? pred__34023.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34024) : pred__34023.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34024)))){
return (new shadow.dom.Coordinate(G__33986,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34023.cljs$core$IFn$_invoke$arity$2 ? pred__34023.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34024) : pred__34023.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34024)))){
return (new shadow.dom.Coordinate(self__.x,G__33986,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33986),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33986){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33986,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33993){
var extmap__4478__auto__ = (function (){var G__34039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33993,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33993)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34039);
} else {
return G__34039;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33993),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33993),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34046,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34053 = k34046;
var G__34053__$1 = (((G__34053 instanceof cljs.core.Keyword))?G__34053.fqn:null);
switch (G__34053__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34046,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34058){
var vec__34060 = p__34058;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34045){
var self__ = this;
var G__34045__$1 = this;
return (new cljs.core.RecordIter((0),G__34045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34047,other34048){
var self__ = this;
var this34047__$1 = this;
return (((!((other34048 == null)))) && ((this34047__$1.constructor === other34048.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34047__$1.w,other34048.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34047__$1.h,other34048.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34047__$1.__extmap,other34048.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34045){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34077 = cljs.core.keyword_identical_QMARK_;
var expr__34078 = k__4447__auto__;
if(cljs.core.truth_((pred__34077.cljs$core$IFn$_invoke$arity$2 ? pred__34077.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34078) : pred__34077.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34078)))){
return (new shadow.dom.Size(G__34045,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34077.cljs$core$IFn$_invoke$arity$2 ? pred__34077.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34078) : pred__34077.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34078)))){
return (new shadow.dom.Size(self__.w,G__34045,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34045),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34045){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34045,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34049){
var extmap__4478__auto__ = (function (){var G__34093 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34049,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34049)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34093);
} else {
return G__34093;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34049),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34049),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34717 = (i + (1));
var G__34718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34717;
ret = G__34718;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34104){
var vec__34107 = p__34104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34107,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34113 = arguments.length;
switch (G__34113) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34728 = ps;
var G__34729 = (i + (1));
el__$1 = G__34728;
i = G__34729;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34150 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34156_34733 = cljs.core.seq(props);
var chunk__34157_34734 = null;
var count__34158_34735 = (0);
var i__34159_34736 = (0);
while(true){
if((i__34159_34736 < count__34158_34735)){
var vec__34177_34737 = chunk__34157_34734.cljs$core$IIndexed$_nth$arity$2(null,i__34159_34736);
var k_34738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34177_34737,(0),null);
var v_34739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34177_34737,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34738);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34738),v_34739);


var G__34740 = seq__34156_34733;
var G__34741 = chunk__34157_34734;
var G__34742 = count__34158_34735;
var G__34743 = (i__34159_34736 + (1));
seq__34156_34733 = G__34740;
chunk__34157_34734 = G__34741;
count__34158_34735 = G__34742;
i__34159_34736 = G__34743;
continue;
} else {
var temp__5735__auto___34744 = cljs.core.seq(seq__34156_34733);
if(temp__5735__auto___34744){
var seq__34156_34745__$1 = temp__5735__auto___34744;
if(cljs.core.chunked_seq_QMARK_(seq__34156_34745__$1)){
var c__4609__auto___34746 = cljs.core.chunk_first(seq__34156_34745__$1);
var G__34747 = cljs.core.chunk_rest(seq__34156_34745__$1);
var G__34748 = c__4609__auto___34746;
var G__34749 = cljs.core.count(c__4609__auto___34746);
var G__34750 = (0);
seq__34156_34733 = G__34747;
chunk__34157_34734 = G__34748;
count__34158_34735 = G__34749;
i__34159_34736 = G__34750;
continue;
} else {
var vec__34181_34751 = cljs.core.first(seq__34156_34745__$1);
var k_34752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34751,(0),null);
var v_34753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34751,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34752);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34752),v_34753);


var G__34757 = cljs.core.next(seq__34156_34745__$1);
var G__34758 = null;
var G__34759 = (0);
var G__34760 = (0);
seq__34156_34733 = G__34757;
chunk__34157_34734 = G__34758;
count__34158_34735 = G__34759;
i__34159_34736 = G__34760;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34188 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188,(1),null);
var seq__34192_34761 = cljs.core.seq(node_children);
var chunk__34194_34762 = null;
var count__34195_34763 = (0);
var i__34196_34764 = (0);
while(true){
if((i__34196_34764 < count__34195_34763)){
var child_struct_34765 = chunk__34194_34762.cljs$core$IIndexed$_nth$arity$2(null,i__34196_34764);
if((!((child_struct_34765 == null)))){
if(typeof child_struct_34765 === 'string'){
var text_34766 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34766),child_struct_34765].join(''));
} else {
var children_34767 = shadow.dom.svg_node(child_struct_34765);
if(cljs.core.seq_QMARK_(children_34767)){
var seq__34262_34768 = cljs.core.seq(children_34767);
var chunk__34264_34769 = null;
var count__34265_34770 = (0);
var i__34266_34771 = (0);
while(true){
if((i__34266_34771 < count__34265_34770)){
var child_34772 = chunk__34264_34769.cljs$core$IIndexed$_nth$arity$2(null,i__34266_34771);
if(cljs.core.truth_(child_34772)){
node.appendChild(child_34772);


var G__34773 = seq__34262_34768;
var G__34774 = chunk__34264_34769;
var G__34775 = count__34265_34770;
var G__34776 = (i__34266_34771 + (1));
seq__34262_34768 = G__34773;
chunk__34264_34769 = G__34774;
count__34265_34770 = G__34775;
i__34266_34771 = G__34776;
continue;
} else {
var G__34777 = seq__34262_34768;
var G__34778 = chunk__34264_34769;
var G__34779 = count__34265_34770;
var G__34780 = (i__34266_34771 + (1));
seq__34262_34768 = G__34777;
chunk__34264_34769 = G__34778;
count__34265_34770 = G__34779;
i__34266_34771 = G__34780;
continue;
}
} else {
var temp__5735__auto___34784 = cljs.core.seq(seq__34262_34768);
if(temp__5735__auto___34784){
var seq__34262_34785__$1 = temp__5735__auto___34784;
if(cljs.core.chunked_seq_QMARK_(seq__34262_34785__$1)){
var c__4609__auto___34786 = cljs.core.chunk_first(seq__34262_34785__$1);
var G__34787 = cljs.core.chunk_rest(seq__34262_34785__$1);
var G__34788 = c__4609__auto___34786;
var G__34789 = cljs.core.count(c__4609__auto___34786);
var G__34790 = (0);
seq__34262_34768 = G__34787;
chunk__34264_34769 = G__34788;
count__34265_34770 = G__34789;
i__34266_34771 = G__34790;
continue;
} else {
var child_34791 = cljs.core.first(seq__34262_34785__$1);
if(cljs.core.truth_(child_34791)){
node.appendChild(child_34791);


var G__34792 = cljs.core.next(seq__34262_34785__$1);
var G__34793 = null;
var G__34794 = (0);
var G__34795 = (0);
seq__34262_34768 = G__34792;
chunk__34264_34769 = G__34793;
count__34265_34770 = G__34794;
i__34266_34771 = G__34795;
continue;
} else {
var G__34796 = cljs.core.next(seq__34262_34785__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34262_34768 = G__34796;
chunk__34264_34769 = G__34797;
count__34265_34770 = G__34798;
i__34266_34771 = G__34799;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34767);
}
}


var G__34800 = seq__34192_34761;
var G__34801 = chunk__34194_34762;
var G__34802 = count__34195_34763;
var G__34803 = (i__34196_34764 + (1));
seq__34192_34761 = G__34800;
chunk__34194_34762 = G__34801;
count__34195_34763 = G__34802;
i__34196_34764 = G__34803;
continue;
} else {
var G__34804 = seq__34192_34761;
var G__34805 = chunk__34194_34762;
var G__34806 = count__34195_34763;
var G__34807 = (i__34196_34764 + (1));
seq__34192_34761 = G__34804;
chunk__34194_34762 = G__34805;
count__34195_34763 = G__34806;
i__34196_34764 = G__34807;
continue;
}
} else {
var temp__5735__auto___34808 = cljs.core.seq(seq__34192_34761);
if(temp__5735__auto___34808){
var seq__34192_34809__$1 = temp__5735__auto___34808;
if(cljs.core.chunked_seq_QMARK_(seq__34192_34809__$1)){
var c__4609__auto___34810 = cljs.core.chunk_first(seq__34192_34809__$1);
var G__34811 = cljs.core.chunk_rest(seq__34192_34809__$1);
var G__34812 = c__4609__auto___34810;
var G__34813 = cljs.core.count(c__4609__auto___34810);
var G__34814 = (0);
seq__34192_34761 = G__34811;
chunk__34194_34762 = G__34812;
count__34195_34763 = G__34813;
i__34196_34764 = G__34814;
continue;
} else {
var child_struct_34815 = cljs.core.first(seq__34192_34809__$1);
if((!((child_struct_34815 == null)))){
if(typeof child_struct_34815 === 'string'){
var text_34816 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34816),child_struct_34815].join(''));
} else {
var children_34817 = shadow.dom.svg_node(child_struct_34815);
if(cljs.core.seq_QMARK_(children_34817)){
var seq__34290_34818 = cljs.core.seq(children_34817);
var chunk__34293_34819 = null;
var count__34294_34820 = (0);
var i__34295_34821 = (0);
while(true){
if((i__34295_34821 < count__34294_34820)){
var child_34822 = chunk__34293_34819.cljs$core$IIndexed$_nth$arity$2(null,i__34295_34821);
if(cljs.core.truth_(child_34822)){
node.appendChild(child_34822);


var G__34823 = seq__34290_34818;
var G__34824 = chunk__34293_34819;
var G__34825 = count__34294_34820;
var G__34826 = (i__34295_34821 + (1));
seq__34290_34818 = G__34823;
chunk__34293_34819 = G__34824;
count__34294_34820 = G__34825;
i__34295_34821 = G__34826;
continue;
} else {
var G__34828 = seq__34290_34818;
var G__34829 = chunk__34293_34819;
var G__34830 = count__34294_34820;
var G__34831 = (i__34295_34821 + (1));
seq__34290_34818 = G__34828;
chunk__34293_34819 = G__34829;
count__34294_34820 = G__34830;
i__34295_34821 = G__34831;
continue;
}
} else {
var temp__5735__auto___34835__$1 = cljs.core.seq(seq__34290_34818);
if(temp__5735__auto___34835__$1){
var seq__34290_34836__$1 = temp__5735__auto___34835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34290_34836__$1)){
var c__4609__auto___34837 = cljs.core.chunk_first(seq__34290_34836__$1);
var G__34838 = cljs.core.chunk_rest(seq__34290_34836__$1);
var G__34839 = c__4609__auto___34837;
var G__34840 = cljs.core.count(c__4609__auto___34837);
var G__34841 = (0);
seq__34290_34818 = G__34838;
chunk__34293_34819 = G__34839;
count__34294_34820 = G__34840;
i__34295_34821 = G__34841;
continue;
} else {
var child_34842 = cljs.core.first(seq__34290_34836__$1);
if(cljs.core.truth_(child_34842)){
node.appendChild(child_34842);


var G__34844 = cljs.core.next(seq__34290_34836__$1);
var G__34845 = null;
var G__34846 = (0);
var G__34847 = (0);
seq__34290_34818 = G__34844;
chunk__34293_34819 = G__34845;
count__34294_34820 = G__34846;
i__34295_34821 = G__34847;
continue;
} else {
var G__34848 = cljs.core.next(seq__34290_34836__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34290_34818 = G__34848;
chunk__34293_34819 = G__34849;
count__34294_34820 = G__34850;
i__34295_34821 = G__34851;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34817);
}
}


var G__34852 = cljs.core.next(seq__34192_34809__$1);
var G__34853 = null;
var G__34854 = (0);
var G__34855 = (0);
seq__34192_34761 = G__34852;
chunk__34194_34762 = G__34853;
count__34195_34763 = G__34854;
i__34196_34764 = G__34855;
continue;
} else {
var G__34856 = cljs.core.next(seq__34192_34809__$1);
var G__34857 = null;
var G__34858 = (0);
var G__34859 = (0);
seq__34192_34761 = G__34856;
chunk__34194_34762 = G__34857;
count__34195_34763 = G__34858;
i__34196_34764 = G__34859;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34860 = arguments.length;
var i__4790__auto___34861 = (0);
while(true){
if((i__4790__auto___34861 < len__4789__auto___34860)){
args__4795__auto__.push((arguments[i__4790__auto___34861]));

var G__34862 = (i__4790__auto___34861 + (1));
i__4790__auto___34861 = G__34862;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34328){
var G__34329 = cljs.core.first(seq34328);
var seq34328__$1 = cljs.core.next(seq34328);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34329,seq34328__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34345 = arguments.length;
switch (G__34345) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29655__auto___34864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_34362){
var state_val_34363 = (state_34362[(1)]);
if((state_val_34363 === (1))){
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34362__$1,(2),once_or_cleanup);
} else {
if((state_val_34363 === (2))){
var inst_34359 = (state_34362[(2)]);
var inst_34360 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34362__$1 = (function (){var statearr_34369 = state_34362;
(statearr_34369[(7)] = inst_34359);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34362__$1,inst_34360);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29368__auto__ = null;
var shadow$dom$state_machine__29368__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = shadow$dom$state_machine__29368__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var shadow$dom$state_machine__29368__auto____1 = (function (state_34362){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_34362);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e34372){if((e34372 instanceof Object)){
var ex__29371__auto__ = e34372;
var statearr_34373_34867 = state_34362;
(statearr_34373_34867[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34868 = state_34362;
state_34362 = G__34868;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
shadow$dom$state_machine__29368__auto__ = function(state_34362){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29368__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29368__auto____1.call(this,state_34362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29368__auto____0;
shadow$dom$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29368__auto____1;
return shadow$dom$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_34376 = f__29656__auto__();
(statearr_34376[(6)] = c__29655__auto___34864);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
