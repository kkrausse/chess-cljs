goog.provide('html_cljs.hooks');
goog.require('cljs.core');
goog.require('html_cljs.html');
html_cljs.hooks.use_state = (function html_cljs$hooks$use_state(init){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(init);
return (function (vdom_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(state),(function (swap_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,swap_state);

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
})], null);
});
});
html_cljs.hooks.use_dom_el = (function html_cljs$hooks$use_dom_el(){
return (function (vdom_state){
return (function (){
var fexpr__27164 = cljs.core.deref(vdom_state);
return (fexpr__27164.cljs$core$IFn$_invoke$arity$1 ? fexpr__27164.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : fexpr__27164.call(null,new cljs.core.Keyword(null,"el","el",-1618201118)));
});
});
});

//# sourceMappingURL=html_cljs.hooks.js.map
