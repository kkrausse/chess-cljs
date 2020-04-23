goog.provide('html_cljs.html');





html_cljs.html.add_callbacks = (function html_cljs$html$add_callbacks(el,event_map){
var seq__7403 = cljs.core.seq(event_map);
var chunk__7404 = null;
var count__7405 = (0);
var i__7406 = (0);
while(true){
if((i__7406 < count__7405)){
var vec__7414 = chunk__7404.cljs$core$IIndexed$_nth$arity$2(null,i__7406);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7414,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7414,(1),null);
el.addEventListener(event_name,f);


var G__7603 = seq__7403;
var G__7604 = chunk__7404;
var G__7605 = count__7405;
var G__7606 = (i__7406 + (1));
seq__7403 = G__7603;
chunk__7404 = G__7604;
count__7405 = G__7605;
i__7406 = G__7606;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7403);
if(temp__5735__auto__){
var seq__7403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7403__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7403__$1);
var G__7607 = cljs.core.chunk_rest(seq__7403__$1);
var G__7608 = c__4609__auto__;
var G__7609 = cljs.core.count(c__4609__auto__);
var G__7610 = (0);
seq__7403 = G__7607;
chunk__7404 = G__7608;
count__7405 = G__7609;
i__7406 = G__7610;
continue;
} else {
var vec__7422 = cljs.core.first(seq__7403__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7422,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7422,(1),null);
el.addEventListener(event_name,f);


var G__7611 = cljs.core.next(seq__7403__$1);
var G__7612 = null;
var G__7613 = (0);
var G__7614 = (0);
seq__7403 = G__7611;
chunk__7404 = G__7612;
count__7405 = G__7613;
i__7406 = G__7614;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.rm_callbacks = (function html_cljs$html$rm_callbacks(el,event_map){
var seq__7425 = cljs.core.seq(event_map);
var chunk__7426 = null;
var count__7427 = (0);
var i__7428 = (0);
while(true){
if((i__7428 < count__7427)){
var vec__7442 = chunk__7426.cljs$core$IIndexed$_nth$arity$2(null,i__7428);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7442,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7442,(1),null);
el.removeEventListener(event_name,f);


var G__7615 = seq__7425;
var G__7616 = chunk__7426;
var G__7617 = count__7427;
var G__7618 = (i__7428 + (1));
seq__7425 = G__7615;
chunk__7426 = G__7616;
count__7427 = G__7617;
i__7428 = G__7618;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7425);
if(temp__5735__auto__){
var seq__7425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7425__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7425__$1);
var G__7620 = cljs.core.chunk_rest(seq__7425__$1);
var G__7621 = c__4609__auto__;
var G__7622 = cljs.core.count(c__4609__auto__);
var G__7623 = (0);
seq__7425 = G__7620;
chunk__7426 = G__7621;
count__7427 = G__7622;
i__7428 = G__7623;
continue;
} else {
var vec__7449 = cljs.core.first(seq__7425__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7449,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7449,(1),null);
el.removeEventListener(event_name,f);


var G__7625 = cljs.core.next(seq__7425__$1);
var G__7626 = null;
var G__7627 = (0);
var G__7628 = (0);
seq__7425 = G__7625;
chunk__7426 = G__7626;
count__7427 = G__7627;
i__7428 = G__7628;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.set_style = (function html_cljs$html$set_style(el,styles){
var seq__7453 = cljs.core.seq(styles);
var chunk__7454 = null;
var count__7455 = (0);
var i__7456 = (0);
while(true){
if((i__7456 < count__7455)){
var vec__7466 = chunk__7454.cljs$core$IIndexed$_nth$arity$2(null,i__7456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7466,(1),null);
(el.style[k] = v);


var G__7629 = seq__7453;
var G__7630 = chunk__7454;
var G__7631 = count__7455;
var G__7632 = (i__7456 + (1));
seq__7453 = G__7629;
chunk__7454 = G__7630;
count__7455 = G__7631;
i__7456 = G__7632;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7453);
if(temp__5735__auto__){
var seq__7453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7453__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7453__$1);
var G__7633 = cljs.core.chunk_rest(seq__7453__$1);
var G__7634 = c__4609__auto__;
var G__7635 = cljs.core.count(c__4609__auto__);
var G__7636 = (0);
seq__7453 = G__7633;
chunk__7454 = G__7634;
count__7455 = G__7635;
i__7456 = G__7636;
continue;
} else {
var vec__7472 = cljs.core.first(seq__7453__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7472,(1),null);
(el.style[k] = v);


var G__7641 = cljs.core.next(seq__7453__$1);
var G__7642 = null;
var G__7643 = (0);
var G__7644 = (0);
seq__7453 = G__7641;
chunk__7454 = G__7642;
count__7455 = G__7643;
i__7456 = G__7644;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.domify = (function html_cljs$html$domify(vdom_state_atm){

var state = cljs.core.deref(vdom_state_atm);
var node = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cached-render","cached-render",983243226)) : state.call(null,new cljs.core.Keyword(null,"cached-render","cached-render",983243226))),new cljs.core.Keyword(null,"children","children",-940561982));
var el = document.createElement((node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348)) : node.call(null,new cljs.core.Keyword(null,"type","type",1174270348))));
var user_mods = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.identity,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__7475_SHARP_){
return (el.className = p1__7475_SHARP_);
}),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),(function (p1__7476_SHARP_){
var seq__7483 = cljs.core.seq(p1__7476_SHARP_);
var chunk__7484 = null;
var count__7485 = (0);
var i__7486 = (0);
while(true){
if((i__7486 < count__7485)){
var vec__7494 = chunk__7484.cljs$core$IIndexed$_nth$arity$2(null,i__7486);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7494,(1),null);
(el[k] = v);


var G__7649 = seq__7483;
var G__7650 = chunk__7484;
var G__7651 = count__7485;
var G__7652 = (i__7486 + (1));
seq__7483 = G__7649;
chunk__7484 = G__7650;
count__7485 = G__7651;
i__7486 = G__7652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7483);
if(temp__5735__auto__){
var seq__7483__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7483__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7483__$1);
var G__7653 = cljs.core.chunk_rest(seq__7483__$1);
var G__7654 = c__4609__auto__;
var G__7655 = cljs.core.count(c__4609__auto__);
var G__7656 = (0);
seq__7483 = G__7653;
chunk__7484 = G__7654;
count__7485 = G__7655;
i__7486 = G__7656;
continue;
} else {
var vec__7499 = cljs.core.first(seq__7483__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7499,(1),null);
(el[k] = v);


var G__7657 = cljs.core.next(seq__7483__$1);
var G__7658 = null;
var G__7659 = (0);
var G__7660 = (0);
seq__7483 = G__7657;
chunk__7484 = G__7658;
count__7485 = G__7659;
i__7486 = G__7660;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__7477_SHARP_){
var seq__7503 = cljs.core.seq(p1__7477_SHARP_);
var chunk__7504 = null;
var count__7505 = (0);
var i__7506 = (0);
while(true){
if((i__7506 < count__7505)){
var vec__7513 = chunk__7504.cljs$core$IIndexed$_nth$arity$2(null,i__7506);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7513,(1),null);
(el.style[k] = v);


var G__7665 = seq__7503;
var G__7666 = chunk__7504;
var G__7667 = count__7505;
var G__7668 = (i__7506 + (1));
seq__7503 = G__7665;
chunk__7504 = G__7666;
count__7505 = G__7667;
i__7506 = G__7668;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7503);
if(temp__5735__auto__){
var seq__7503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7503__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7503__$1);
var G__7669 = cljs.core.chunk_rest(seq__7503__$1);
var G__7670 = c__4609__auto__;
var G__7671 = cljs.core.count(c__4609__auto__);
var G__7672 = (0);
seq__7503 = G__7669;
chunk__7504 = G__7670;
count__7505 = G__7671;
i__7506 = G__7672;
continue;
} else {
var vec__7519 = cljs.core.first(seq__7503__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7519,(1),null);
(el.style[k] = v);


var G__7673 = cljs.core.next(seq__7503__$1);
var G__7674 = null;
var G__7675 = (0);
var G__7676 = (0);
seq__7503 = G__7673;
chunk__7504 = G__7674;
count__7505 = G__7675;
i__7506 = G__7676;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"on","on",173873944),(function (p1__7478_SHARP_){
return html_cljs.html.add_callbacks(el,p1__7478_SHARP_);
}),new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__7479_SHARP_){
return (el.href = p1__7479_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__7480_SHARP_){
return (el.innerHTML = p1__7480_SHARP_);
})], null);
var seq__7527_7681 = cljs.core.seq(node);
var chunk__7528_7682 = null;
var count__7529_7683 = (0);
var i__7530_7684 = (0);
while(true){
if((i__7530_7684 < count__7529_7683)){
var vec__7542_7685 = chunk__7528_7682.cljs$core$IIndexed$_nth$arity$2(null,i__7530_7684);
var k_7686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7542_7685,(0),null);
var v_7687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7542_7685,(1),null);
var fexpr__7545_7688 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_7686) : user_mods.call(null,k_7686));
(fexpr__7545_7688.cljs$core$IFn$_invoke$arity$1 ? fexpr__7545_7688.cljs$core$IFn$_invoke$arity$1(v_7687) : fexpr__7545_7688.call(null,v_7687));


var G__7689 = seq__7527_7681;
var G__7690 = chunk__7528_7682;
var G__7691 = count__7529_7683;
var G__7692 = (i__7530_7684 + (1));
seq__7527_7681 = G__7689;
chunk__7528_7682 = G__7690;
count__7529_7683 = G__7691;
i__7530_7684 = G__7692;
continue;
} else {
var temp__5735__auto___7693 = cljs.core.seq(seq__7527_7681);
if(temp__5735__auto___7693){
var seq__7527_7694__$1 = temp__5735__auto___7693;
if(cljs.core.chunked_seq_QMARK_(seq__7527_7694__$1)){
var c__4609__auto___7695 = cljs.core.chunk_first(seq__7527_7694__$1);
var G__7696 = cljs.core.chunk_rest(seq__7527_7694__$1);
var G__7697 = c__4609__auto___7695;
var G__7698 = cljs.core.count(c__4609__auto___7695);
var G__7699 = (0);
seq__7527_7681 = G__7696;
chunk__7528_7682 = G__7697;
count__7529_7683 = G__7698;
i__7530_7684 = G__7699;
continue;
} else {
var vec__7547_7700 = cljs.core.first(seq__7527_7694__$1);
var k_7701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7547_7700,(0),null);
var v_7702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7547_7700,(1),null);
var fexpr__7553_7705 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_7701) : user_mods.call(null,k_7701));
(fexpr__7553_7705.cljs$core$IFn$_invoke$arity$1 ? fexpr__7553_7705.cljs$core$IFn$_invoke$arity$1(v_7702) : fexpr__7553_7705.call(null,v_7702));


var G__7707 = cljs.core.next(seq__7527_7694__$1);
var G__7708 = null;
var G__7709 = (0);
var G__7710 = (0);
seq__7527_7681 = G__7707;
chunk__7528_7682 = G__7708;
count__7529_7683 = G__7709;
i__7530_7684 = G__7710;
continue;
}
} else {
}
}
break;
}

var seq__7555_7711 = cljs.core.seq((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : state.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))));
var chunk__7556_7712 = null;
var count__7557_7713 = (0);
var i__7558_7714 = (0);
while(true){
if((i__7558_7714 < count__7557_7713)){
var child_7715 = chunk__7556_7712.cljs$core$IIndexed$_nth$arity$2(null,i__7558_7714);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_7715) : html_cljs.html.domify.call(null,child_7715)));


var G__7717 = seq__7555_7711;
var G__7718 = chunk__7556_7712;
var G__7719 = count__7557_7713;
var G__7720 = (i__7558_7714 + (1));
seq__7555_7711 = G__7717;
chunk__7556_7712 = G__7718;
count__7557_7713 = G__7719;
i__7558_7714 = G__7720;
continue;
} else {
var temp__5735__auto___7721 = cljs.core.seq(seq__7555_7711);
if(temp__5735__auto___7721){
var seq__7555_7723__$1 = temp__5735__auto___7721;
if(cljs.core.chunked_seq_QMARK_(seq__7555_7723__$1)){
var c__4609__auto___7724 = cljs.core.chunk_first(seq__7555_7723__$1);
var G__7725 = cljs.core.chunk_rest(seq__7555_7723__$1);
var G__7726 = c__4609__auto___7724;
var G__7727 = cljs.core.count(c__4609__auto___7724);
var G__7728 = (0);
seq__7555_7711 = G__7725;
chunk__7556_7712 = G__7726;
count__7557_7713 = G__7727;
i__7558_7714 = G__7728;
continue;
} else {
var child_7730 = cljs.core.first(seq__7555_7723__$1);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_7730) : html_cljs.html.domify.call(null,child_7730)));


var G__7733 = cljs.core.next(seq__7555_7723__$1);
var G__7734 = null;
var G__7735 = (0);
var G__7736 = (0);
seq__7555_7711 = G__7733;
chunk__7556_7712 = G__7734;
count__7557_7713 = G__7735;
i__7558_7714 = G__7736;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_state_atm,(function (p1__7482_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7482_SHARP_,new cljs.core.Keyword(null,"el","el",-1618201118),el);
}));

return el;
});
html_cljs.html.create_vdom = (function html_cljs$html$create_vdom(node_func){
var vdom_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var render = (node_func.cljs$core$IFn$_invoke$arity$1 ? node_func.cljs$core$IFn$_invoke$arity$1(vdom_state) : node_func.call(null,vdom_state));
cljs.core.reset_BANG_(vdom_state,(html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1(render) : html_cljs.html.render_to_state.call(null,render)));

return vdom_state;
});
html_cljs.html.mount = (function html_cljs$html$mount(html_el,component){
(html_cljs.html.clear_children.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.clear_children.cljs$core$IFn$_invoke$arity$1(html_el) : html_cljs.html.clear_children.call(null,html_el));

return html_el.appendChild(html_cljs.html.domify(html_cljs.html.create_vdom(component)));
});
html_cljs.html.this_not_that = (function html_cljs$html$this_not_that(this_map,that_map){
var ti = (((this_map == null))?cljs.core.PersistentArrayMap.EMPTY:this_map);
var ta = (((that_map == null))?cljs.core.PersistentArrayMap.EMPTY:that_map);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7568){
var vec__7569 = p__7568;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7569,(1),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.hash((ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(k) : ta.call(null,k))),cljs.core.hash(v))));
}),ti));
});
html_cljs.html.refresh_events = (function html_cljs$html$refresh_events(el,old_render,new_render){
html_cljs.html.rm_callbacks(el,html_cljs.html.this_not_that((old_render.cljs$core$IFn$_invoke$arity$1 ? old_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on","on",173873944)) : old_render.call(null,new cljs.core.Keyword(null,"on","on",173873944))),(new_render.cljs$core$IFn$_invoke$arity$1 ? new_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on","on",173873944)) : new_render.call(null,new cljs.core.Keyword(null,"on","on",173873944)))));

return html_cljs.html.add_callbacks(el,html_cljs.html.this_not_that((new_render.cljs$core$IFn$_invoke$arity$1 ? new_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on","on",173873944)) : new_render.call(null,new cljs.core.Keyword(null,"on","on",173873944))),(old_render.cljs$core$IFn$_invoke$arity$1 ? old_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on","on",173873944)) : old_render.call(null,new cljs.core.Keyword(null,"on","on",173873944)))));
});
html_cljs.html.refresh_style = (function html_cljs$html$refresh_style(el,old_render,new_render){
return html_cljs.html.set_style(el,html_cljs.html.this_not_that((new_render.cljs$core$IFn$_invoke$arity$1 ? new_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736)) : new_render.call(null,new cljs.core.Keyword(null,"style","style",-496642736))),(old_render.cljs$core$IFn$_invoke$arity$1 ? old_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on","on",173873944)) : old_render.call(null,new cljs.core.Keyword(null,"on","on",173873944)))));
});
/**
 * old-vdom assumed to be domified. new-vdom assumed not to have been
 */
html_cljs.html.refresh = (function html_cljs$html$refresh(var_args){
var G__7577 = arguments.length;
switch (G__7577) {
case 2:
return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2 = (function (vdom_atm,old_vdom){
var old_render = (old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cached-render","cached-render",983243226)) : old_vdom.call(null,new cljs.core.Keyword(null,"cached-render","cached-render",983243226)));
var new_vdom = cljs.core.deref(vdom_atm);
var new_render = (new_vdom.cljs$core$IFn$_invoke$arity$1 ? new_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cached-render","cached-render",983243226)) : new_vdom.call(null,new cljs.core.Keyword(null,"cached-render","cached-render",983243226)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(old_render) : html_cljs.html.steralized.call(null,old_render)),(html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(new_render) : html_cljs.html.steralized.call(null,new_render)))){
html_cljs.html.refresh_events((old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : old_vdom.call(null,new cljs.core.Keyword(null,"el","el",-1618201118))),old_render,new_render);

html_cljs.html.refresh_style((old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : old_vdom.call(null,new cljs.core.Keyword(null,"el","el",-1618201118))),old_render,new_render);

var seq__7578 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : old_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))),(new_vdom.cljs$core$IFn$_invoke$arity$1 ? new_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : new_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)))));
var chunk__7579 = null;
var count__7580 = (0);
var i__7581 = (0);
while(true){
if((i__7581 < count__7580)){
var vec__7588 = chunk__7579.cljs$core$IIndexed$_nth$arity$2(null,i__7581);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7588,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7588,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__7578,chunk__7579,count__7580,i__7581,vec__7588,old_child,new_child,old_render,new_vdom,new_render){
return (function (p1__7574_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__7574_SHARP_], 0));
});})(seq__7578,chunk__7579,count__7580,i__7581,vec__7588,old_child,new_child,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__7745 = seq__7578;
var G__7746 = chunk__7579;
var G__7747 = count__7580;
var G__7748 = (i__7581 + (1));
seq__7578 = G__7745;
chunk__7579 = G__7746;
count__7580 = G__7747;
i__7581 = G__7748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7578);
if(temp__5735__auto__){
var seq__7578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7578__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__7578__$1);
var G__7753 = cljs.core.chunk_rest(seq__7578__$1);
var G__7754 = c__4609__auto__;
var G__7755 = cljs.core.count(c__4609__auto__);
var G__7756 = (0);
seq__7578 = G__7753;
chunk__7579 = G__7754;
count__7580 = G__7755;
i__7581 = G__7756;
continue;
} else {
var vec__7591 = cljs.core.first(seq__7578__$1);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7591,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7591,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__7578,chunk__7579,count__7580,i__7581,vec__7591,old_child,new_child,seq__7578__$1,temp__5735__auto__,old_render,new_vdom,new_render){
return (function (p1__7574_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__7574_SHARP_], 0));
});})(seq__7578,chunk__7579,count__7580,i__7581,vec__7591,old_child,new_child,seq__7578__$1,temp__5735__auto__,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__7758 = cljs.core.next(seq__7578__$1);
var G__7759 = null;
var G__7760 = (0);
var G__7761 = (0);
seq__7578 = G__7758;
chunk__7579 = G__7759;
count__7580 = G__7760;
i__7581 = G__7761;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var G__7594 = (old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : old_vdom.call(null,new cljs.core.Keyword(null,"el","el",-1618201118)));
var G__7595 = html_cljs.html.domify(vdom_atm);
return (html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2(G__7594,G__7595) : html_cljs.html.replace_el.call(null,G__7594,G__7595));
}
}));

(html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1 = (function (vdom_atm){
var vstate = cljs.core.deref(vdom_atm);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_atm,(function (p1__7575_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__7575_SHARP_,(function (){var G__7596 = (p1__7575_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__7575_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"render","render",-1408033454)) : p1__7575_SHARP_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
return (html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1(G__7596) : html_cljs.html.render_to_state.call(null,G__7596));
})()], 0));
}));

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(vdom_atm,vstate);
}));

(html_cljs.html.refresh.cljs$lang$maxFixedArity = 2);

html_cljs.html.render_to_state = (function html_cljs$html$render_to_state(render){
var cached_render = (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428),(function (){var iter__4582__auto__ = (function html_cljs$html$render_to_state_$_iter__7597(s__7598){
return (new cljs.core.LazySeq(null,(function (){
var s__7598__$1 = s__7598;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7598__$1);
if(temp__5735__auto__){
var s__7598__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7598__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__7598__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__7600 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__7599 = (0);
while(true){
if((i__7599 < size__4581__auto__)){
var child = cljs.core._nth(c__4580__auto__,i__7599);
cljs.core.chunk_append(b__7600,html_cljs.html.create_vdom(child));

var G__7777 = (i__7599 + (1));
i__7599 = G__7777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7600),html_cljs$html$render_to_state_$_iter__7597(cljs.core.chunk_rest(s__7598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7600),null);
}
} else {
var child = cljs.core.first(s__7598__$2);
return cljs.core.cons(html_cljs.html.create_vdom(child),html_cljs$html$render_to_state_$_iter__7597(cljs.core.rest(s__7598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cached_render.cljs$core$IFn$_invoke$arity$1 ? cached_render.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982)) : cached_render.call(null,new cljs.core.Keyword(null,"children","children",-940561982))));
})(),new cljs.core.Keyword(null,"cached-render","cached-render",983243226),cached_render,new cljs.core.Keyword(null,"render","render",-1408033454),render], null);
});
html_cljs.html.steralized = (function html_cljs$html$steralized(vdom){

return clojure.walk.postwalk((function (p1__7602_SHARP_){
if(cljs.core.fn_QMARK_(p1__7602_SHARP_)){
return "fn";
} else {
return p1__7602_SHARP_;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(vdom,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on","on",173873944)], 0)));
});
html_cljs.html.replace_el = (function html_cljs$html$replace_el(old_el,new_el){
return old_el.parentNode.replaceChild(new_el,old_el);
});
html_cljs.html.clear_children = (function html_cljs$html$clear_children(el){
if(cljs.core.truth_(el.firstChild)){
el.removeChild(el.firstChild);

return (html_cljs.html.clear_children.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.clear_children.cljs$core$IFn$_invoke$arity$1(el) : html_cljs.html.clear_children.call(null,el));
} else {
return el;
}
});
