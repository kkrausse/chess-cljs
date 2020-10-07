goog.provide('html_cljs.lifecycle');

/**
 * passed to a component / hooks as the user interface to the library.
 *   The underlying dom element may be updated / deleted and recreated
 *   transparently without a full rerender.
 * @interface
 */
html_cljs.lifecycle.LifecycleHooks = function(){};

var html_cljs$lifecycle$LifecycleHooks$rerender$dyn_26022 = (function (this$,new_props){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (html_cljs.lifecycle.rerender[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_props) : m__4429__auto__.call(null,this$,new_props));
} else {
var m__4426__auto__ = (html_cljs.lifecycle.rerender["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_props) : m__4426__auto__.call(null,this$,new_props));
} else {
throw cljs.core.missing_protocol("LifecycleHooks.rerender",this$);
}
}
});
/**
 * call this to trigger refresh. used for hooks mainly when they
 *         want to re-trigger a render because of updating state. May
 *         delete and re-create the dom-element but will never delete the
 *         vdom node (nor can it if it wanted to since it doesn't have
 *         access to the original component function that made this node)
 */
html_cljs.lifecycle.rerender = (function html_cljs$lifecycle$rerender(this$,new_props){
if((((!((this$ == null)))) && ((!((this$.html_cljs$lifecycle$LifecycleHooks$rerender$arity$2 == null)))))){
return this$.html_cljs$lifecycle$LifecycleHooks$rerender$arity$2(this$,new_props);
} else {
return html_cljs$lifecycle$LifecycleHooks$rerender$dyn_26022(this$,new_props);
}
});

var html_cljs$lifecycle$LifecycleHooks$getprops$dyn_26023 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (html_cljs.lifecycle.getprops[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (html_cljs.lifecycle.getprops["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("LifecycleHooks.getprops",this$);
}
}
});
/**
 * gets the props for refresh
 */
html_cljs.lifecycle.getprops = (function html_cljs$lifecycle$getprops(this$){
if((((!((this$ == null)))) && ((!((this$.html_cljs$lifecycle$LifecycleHooks$getprops$arity$1 == null)))))){
return this$.html_cljs$lifecycle$LifecycleHooks$getprops$arity$1(this$);
} else {
return html_cljs$lifecycle$LifecycleHooks$getprops$dyn_26023(this$);
}
});

var html_cljs$lifecycle$LifecycleHooks$on_mount$dyn_26024 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (html_cljs.lifecycle.on_mount[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (html_cljs.lifecycle.on_mount["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("LifecycleHooks.on-mount",this$);
}
}
});
/**
 * register callback on mounting
 */
html_cljs.lifecycle.on_mount = (function html_cljs$lifecycle$on_mount(this$,f){
if((((!((this$ == null)))) && ((!((this$.html_cljs$lifecycle$LifecycleHooks$on_mount$arity$2 == null)))))){
return this$.html_cljs$lifecycle$LifecycleHooks$on_mount$arity$2(this$,f);
} else {
return html_cljs$lifecycle$LifecycleHooks$on_mount$dyn_26024(this$,f);
}
});

var html_cljs$lifecycle$LifecycleHooks$on_destroy$dyn_26025 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (html_cljs.lifecycle.on_destroy[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (html_cljs.lifecycle.on_destroy["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("LifecycleHooks.on-destroy",this$);
}
}
});
/**
 * calls f when the vdom element is destroyed
 */
html_cljs.lifecycle.on_destroy = (function html_cljs$lifecycle$on_destroy(this$,f){
if((((!((this$ == null)))) && ((!((this$.html_cljs$lifecycle$LifecycleHooks$on_destroy$arity$2 == null)))))){
return this$.html_cljs$lifecycle$LifecycleHooks$on_destroy$arity$2(this$,f);
} else {
return html_cljs$lifecycle$LifecycleHooks$on_destroy$dyn_26025(this$,f);
}
});

html_cljs.lifecycle.refresh = (function html_cljs$lifecycle$refresh(clc){
return html_cljs.lifecycle.rerender(clc,html_cljs.lifecycle.getprops(clc));
});

//# sourceMappingURL=html_cljs.lifecycle.js.map
