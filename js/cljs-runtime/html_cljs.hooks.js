goog.provide('html_cljs.hooks');
html_cljs.hooks.use_state = (function html_cljs$hooks$use_state(clc){
var zeroth_value = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"html-cljs.hooks","html-cljs.hooks",-305009930,null),new cljs.core.Symbol(null,"rarespare","rarespare",1639611315,null));
var state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zeroth_value);
return (function (initial_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),zeroth_value)){
cljs.core.reset_BANG_(state_atom,initial_state);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref(state_atom);
}),(function (swap){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,swap);

return html_cljs.lifecycle.refresh(clc);
})], null);
});
});
html_cljs.hooks.use_effect = (function html_cljs$hooks$use_effect(clc){
var initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cleanup_func = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return (function (user_func){
if(cljs.core.not(cljs.core.deref(initialized))){
html_cljs.lifecycle.on_mount(clc,(function (){
return cljs.core.reset_BANG_(cleanup_func,(user_func.cljs$core$IFn$_invoke$arity$0 ? user_func.cljs$core$IFn$_invoke$arity$0() : user_func.call(null)));
}));

html_cljs.lifecycle.on_destroy(clc,(function (){
if((!((cljs.core.deref(cleanup_func) == null)))){
var fexpr__28147 = cljs.core.deref(cleanup_func);
return (fexpr__28147.cljs$core$IFn$_invoke$arity$0 ? fexpr__28147.cljs$core$IFn$_invoke$arity$0() : fexpr__28147.call(null));
} else {
return null;
}
}));

return cljs.core.reset_BANG_(initialized,true);
} else {
return null;
}
});
});
});
html_cljs.hooks.use_interval = (function html_cljs$hooks$use_interval(clc__27850__auto__){
var hooked_use_state28149 = html_cljs.hooks.use_state(clc__27850__auto__);
var hooked_use_state28150 = html_cljs.hooks.use_state(clc__27850__auto__);
var hooked_use_effect28151 = html_cljs.hooks.use_effect(clc__27850__auto__);
return (function (interval){
var vec__28152 = hooked_use_state28149((0));
var get_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(0),null);
var set_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(1),null);
var vec__28155 = hooked_use_state28150(null);
var get_interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(0),null);
var set_interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(1),null);
var set_effect = hooked_use_effect28151();
var start_timer = (function (){
if(((get_interval.cljs$core$IFn$_invoke$arity$0 ? get_interval.cljs$core$IFn$_invoke$arity$0() : get_interval.call(null)) == null)){
var G__28158 = (function (_){
return setInterval((function (){
return (set_cnt.cljs$core$IFn$_invoke$arity$1 ? set_cnt.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : set_cnt.call(null,cljs.core.inc));
}),interval);
});
return (set_interval.cljs$core$IFn$_invoke$arity$1 ? set_interval.cljs$core$IFn$_invoke$arity$1(G__28158) : set_interval.call(null,G__28158));
} else {
return null;
}
});
var stop_timer = (function (){
if((!(((get_interval.cljs$core$IFn$_invoke$arity$0 ? get_interval.cljs$core$IFn$_invoke$arity$0() : get_interval.call(null)) == null)))){
clearInterval((get_interval.cljs$core$IFn$_invoke$arity$0 ? get_interval.cljs$core$IFn$_invoke$arity$0() : get_interval.call(null)));

var G__28159 = (function (_){
return null;
});
return (set_interval.cljs$core$IFn$_invoke$arity$1 ? set_interval.cljs$core$IFn$_invoke$arity$1(G__28159) : set_interval.call(null,G__28159));
} else {
return null;
}
});
var toggle = (function (){
if(((get_interval.cljs$core$IFn$_invoke$arity$0 ? get_interval.cljs$core$IFn$_invoke$arity$0() : get_interval.call(null)) == null)){
return start_timer();
} else {
return stop_timer();
}
});
var G__28160_28161 = (function (){
start_timer();

return stop_timer;
});
(set_effect.cljs$core$IFn$_invoke$arity$1 ? set_effect.cljs$core$IFn$_invoke$arity$1(G__28160_28161) : set_effect.call(null,G__28160_28161));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(get_cnt.cljs$core$IFn$_invoke$arity$0 ? get_cnt.cljs$core$IFn$_invoke$arity$0() : get_cnt.call(null)),toggle], null);
});
});

//# sourceMappingURL=html_cljs.hooks.js.map
