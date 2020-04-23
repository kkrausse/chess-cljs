goog.provide('html_cljs.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');





html_cljs.html.add_callbacks = (function html_cljs$html$add_callbacks(el,event_map){
var seq__28809 = cljs.core.seq(event_map);
var chunk__28810 = null;
var count__28811 = (0);
var i__28812 = (0);
while(true){
if((i__28812 < count__28811)){
var vec__28828 = chunk__28810.cljs$core$IIndexed$_nth$arity$2(null,i__28812);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(1),null);
el.addEventListener(event_name,f);


var G__29035 = seq__28809;
var G__29036 = chunk__28810;
var G__29037 = count__28811;
var G__29038 = (i__28812 + (1));
seq__28809 = G__29035;
chunk__28810 = G__29036;
count__28811 = G__29037;
i__28812 = G__29038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28809);
if(temp__5735__auto__){
var seq__28809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28809__$1);
var G__29039 = cljs.core.chunk_rest(seq__28809__$1);
var G__29040 = c__4609__auto__;
var G__29041 = cljs.core.count(c__4609__auto__);
var G__29042 = (0);
seq__28809 = G__29039;
chunk__28810 = G__29040;
count__28811 = G__29041;
i__28812 = G__29042;
continue;
} else {
var vec__28832 = cljs.core.first(seq__28809__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28832,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28832,(1),null);
el.addEventListener(event_name,f);


var G__29046 = cljs.core.next(seq__28809__$1);
var G__29047 = null;
var G__29048 = (0);
var G__29049 = (0);
seq__28809 = G__29046;
chunk__28810 = G__29047;
count__28811 = G__29048;
i__28812 = G__29049;
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
var seq__28840 = cljs.core.seq(event_map);
var chunk__28841 = null;
var count__28842 = (0);
var i__28843 = (0);
while(true){
if((i__28843 < count__28842)){
var vec__28855 = chunk__28841.cljs$core$IIndexed$_nth$arity$2(null,i__28843);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28855,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28855,(1),null);
el.removeEventListener(event_name,f);


var G__29051 = seq__28840;
var G__29052 = chunk__28841;
var G__29053 = count__28842;
var G__29054 = (i__28843 + (1));
seq__28840 = G__29051;
chunk__28841 = G__29052;
count__28842 = G__29053;
i__28843 = G__29054;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28840);
if(temp__5735__auto__){
var seq__28840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28840__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28840__$1);
var G__29055 = cljs.core.chunk_rest(seq__28840__$1);
var G__29056 = c__4609__auto__;
var G__29057 = cljs.core.count(c__4609__auto__);
var G__29058 = (0);
seq__28840 = G__29055;
chunk__28841 = G__29056;
count__28842 = G__29057;
i__28843 = G__29058;
continue;
} else {
var vec__28862 = cljs.core.first(seq__28840__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(1),null);
el.removeEventListener(event_name,f);


var G__29060 = cljs.core.next(seq__28840__$1);
var G__29061 = null;
var G__29062 = (0);
var G__29063 = (0);
seq__28840 = G__29060;
chunk__28841 = G__29061;
count__28842 = G__29062;
i__28843 = G__29063;
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
var seq__28866 = cljs.core.seq(styles);
var chunk__28867 = null;
var count__28868 = (0);
var i__28869 = (0);
while(true){
if((i__28869 < count__28868)){
var vec__28876 = chunk__28867.cljs$core$IIndexed$_nth$arity$2(null,i__28869);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28876,(1),null);
(el.style[k] = v);


var G__29064 = seq__28866;
var G__29065 = chunk__28867;
var G__29066 = count__28868;
var G__29067 = (i__28869 + (1));
seq__28866 = G__29064;
chunk__28867 = G__29065;
count__28868 = G__29066;
i__28869 = G__29067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28866);
if(temp__5735__auto__){
var seq__28866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28866__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28866__$1);
var G__29068 = cljs.core.chunk_rest(seq__28866__$1);
var G__29069 = c__4609__auto__;
var G__29070 = cljs.core.count(c__4609__auto__);
var G__29071 = (0);
seq__28866 = G__29068;
chunk__28867 = G__29069;
count__28868 = G__29070;
i__28869 = G__29071;
continue;
} else {
var vec__28880 = cljs.core.first(seq__28866__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(1),null);
(el.style[k] = v);


var G__29075 = cljs.core.next(seq__28866__$1);
var G__29076 = null;
var G__29077 = (0);
var G__29078 = (0);
seq__28866 = G__29075;
chunk__28867 = G__29076;
count__28868 = G__29077;
i__28869 = G__29078;
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
var user_mods = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.identity,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__28884_SHARP_){
return (el.className = p1__28884_SHARP_);
}),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),(function (p1__28885_SHARP_){
var seq__28894 = cljs.core.seq(p1__28885_SHARP_);
var chunk__28895 = null;
var count__28896 = (0);
var i__28897 = (0);
while(true){
if((i__28897 < count__28896)){
var vec__28909 = chunk__28895.cljs$core$IIndexed$_nth$arity$2(null,i__28897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(1),null);
(el[k] = v);


var G__29080 = seq__28894;
var G__29081 = chunk__28895;
var G__29082 = count__28896;
var G__29083 = (i__28897 + (1));
seq__28894 = G__29080;
chunk__28895 = G__29081;
count__28896 = G__29082;
i__28897 = G__29083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28894);
if(temp__5735__auto__){
var seq__28894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28894__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28894__$1);
var G__29085 = cljs.core.chunk_rest(seq__28894__$1);
var G__29086 = c__4609__auto__;
var G__29087 = cljs.core.count(c__4609__auto__);
var G__29088 = (0);
seq__28894 = G__29085;
chunk__28895 = G__29086;
count__28896 = G__29087;
i__28897 = G__29088;
continue;
} else {
var vec__28914 = cljs.core.first(seq__28894__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(1),null);
(el[k] = v);


var G__29092 = cljs.core.next(seq__28894__$1);
var G__29093 = null;
var G__29094 = (0);
var G__29095 = (0);
seq__28894 = G__29092;
chunk__28895 = G__29093;
count__28896 = G__29094;
i__28897 = G__29095;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__28886_SHARP_){
var seq__28918 = cljs.core.seq(p1__28886_SHARP_);
var chunk__28919 = null;
var count__28920 = (0);
var i__28921 = (0);
while(true){
if((i__28921 < count__28920)){
var vec__28932 = chunk__28919.cljs$core$IIndexed$_nth$arity$2(null,i__28921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28932,(1),null);
(el.style[k] = v);


var G__29100 = seq__28918;
var G__29101 = chunk__28919;
var G__29102 = count__28920;
var G__29103 = (i__28921 + (1));
seq__28918 = G__29100;
chunk__28919 = G__29101;
count__28920 = G__29102;
i__28921 = G__29103;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28918);
if(temp__5735__auto__){
var seq__28918__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28918__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28918__$1);
var G__29105 = cljs.core.chunk_rest(seq__28918__$1);
var G__29106 = c__4609__auto__;
var G__29107 = cljs.core.count(c__4609__auto__);
var G__29108 = (0);
seq__28918 = G__29105;
chunk__28919 = G__29106;
count__28920 = G__29107;
i__28921 = G__29108;
continue;
} else {
var vec__28936 = cljs.core.first(seq__28918__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(1),null);
(el.style[k] = v);


var G__29109 = cljs.core.next(seq__28918__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__28918 = G__29109;
chunk__28919 = G__29110;
count__28920 = G__29111;
i__28921 = G__29112;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"on","on",173873944),(function (p1__28887_SHARP_){
return html_cljs.html.add_callbacks(el,p1__28887_SHARP_);
}),new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__28888_SHARP_){
return (el.href = p1__28888_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__28889_SHARP_){
return (el.innerHTML = p1__28889_SHARP_);
})], null);
var seq__28939_29114 = cljs.core.seq(node);
var chunk__28940_29115 = null;
var count__28941_29116 = (0);
var i__28942_29117 = (0);
while(true){
if((i__28942_29117 < count__28941_29116)){
var vec__28951_29118 = chunk__28940_29115.cljs$core$IIndexed$_nth$arity$2(null,i__28942_29117);
var k_29119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28951_29118,(0),null);
var v_29120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28951_29118,(1),null);
var fexpr__28954_29125 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_29119) : user_mods.call(null,k_29119));
(fexpr__28954_29125.cljs$core$IFn$_invoke$arity$1 ? fexpr__28954_29125.cljs$core$IFn$_invoke$arity$1(v_29120) : fexpr__28954_29125.call(null,v_29120));


var G__29126 = seq__28939_29114;
var G__29127 = chunk__28940_29115;
var G__29128 = count__28941_29116;
var G__29129 = (i__28942_29117 + (1));
seq__28939_29114 = G__29126;
chunk__28940_29115 = G__29127;
count__28941_29116 = G__29128;
i__28942_29117 = G__29129;
continue;
} else {
var temp__5735__auto___29131 = cljs.core.seq(seq__28939_29114);
if(temp__5735__auto___29131){
var seq__28939_29133__$1 = temp__5735__auto___29131;
if(cljs.core.chunked_seq_QMARK_(seq__28939_29133__$1)){
var c__4609__auto___29135 = cljs.core.chunk_first(seq__28939_29133__$1);
var G__29136 = cljs.core.chunk_rest(seq__28939_29133__$1);
var G__29137 = c__4609__auto___29135;
var G__29138 = cljs.core.count(c__4609__auto___29135);
var G__29139 = (0);
seq__28939_29114 = G__29136;
chunk__28940_29115 = G__29137;
count__28941_29116 = G__29138;
i__28942_29117 = G__29139;
continue;
} else {
var vec__28955_29140 = cljs.core.first(seq__28939_29133__$1);
var k_29141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955_29140,(0),null);
var v_29142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28955_29140,(1),null);
var fexpr__28958_29143 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_29141) : user_mods.call(null,k_29141));
(fexpr__28958_29143.cljs$core$IFn$_invoke$arity$1 ? fexpr__28958_29143.cljs$core$IFn$_invoke$arity$1(v_29142) : fexpr__28958_29143.call(null,v_29142));


var G__29144 = cljs.core.next(seq__28939_29133__$1);
var G__29145 = null;
var G__29146 = (0);
var G__29147 = (0);
seq__28939_29114 = G__29144;
chunk__28940_29115 = G__29145;
count__28941_29116 = G__29146;
i__28942_29117 = G__29147;
continue;
}
} else {
}
}
break;
}

var seq__28959_29148 = cljs.core.seq((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : state.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))));
var chunk__28960_29149 = null;
var count__28961_29150 = (0);
var i__28962_29151 = (0);
while(true){
if((i__28962_29151 < count__28961_29150)){
var child_29156 = chunk__28960_29149.cljs$core$IIndexed$_nth$arity$2(null,i__28962_29151);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_29156) : html_cljs.html.domify.call(null,child_29156)));


var G__29157 = seq__28959_29148;
var G__29158 = chunk__28960_29149;
var G__29159 = count__28961_29150;
var G__29160 = (i__28962_29151 + (1));
seq__28959_29148 = G__29157;
chunk__28960_29149 = G__29158;
count__28961_29150 = G__29159;
i__28962_29151 = G__29160;
continue;
} else {
var temp__5735__auto___29162 = cljs.core.seq(seq__28959_29148);
if(temp__5735__auto___29162){
var seq__28959_29163__$1 = temp__5735__auto___29162;
if(cljs.core.chunked_seq_QMARK_(seq__28959_29163__$1)){
var c__4609__auto___29164 = cljs.core.chunk_first(seq__28959_29163__$1);
var G__29165 = cljs.core.chunk_rest(seq__28959_29163__$1);
var G__29166 = c__4609__auto___29164;
var G__29167 = cljs.core.count(c__4609__auto___29164);
var G__29168 = (0);
seq__28959_29148 = G__29165;
chunk__28960_29149 = G__29166;
count__28961_29150 = G__29167;
i__28962_29151 = G__29168;
continue;
} else {
var child_29169 = cljs.core.first(seq__28959_29163__$1);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_29169) : html_cljs.html.domify.call(null,child_29169)));


var G__29170 = cljs.core.next(seq__28959_29163__$1);
var G__29171 = null;
var G__29172 = (0);
var G__29173 = (0);
seq__28959_29148 = G__29170;
chunk__28960_29149 = G__29171;
count__28961_29150 = G__29172;
i__28962_29151 = G__29173;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_state_atm,(function (p1__28890_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28890_SHARP_,new cljs.core.Keyword(null,"el","el",-1618201118),el);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28970){
var vec__28972 = p__28970;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(1),null);
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
var G__28989 = arguments.length;
switch (G__28989) {
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

var seq__28997 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : old_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))),(new_vdom.cljs$core$IFn$_invoke$arity$1 ? new_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : new_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)))));
var chunk__28998 = null;
var count__28999 = (0);
var i__29000 = (0);
while(true){
if((i__29000 < count__28999)){
var vec__29011 = chunk__28998.cljs$core$IIndexed$_nth$arity$2(null,i__29000);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29011,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29011,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__28997,chunk__28998,count__28999,i__29000,vec__29011,old_child,new_child,old_render,new_vdom,new_render){
return (function (p1__28984_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__28984_SHARP_], 0));
});})(seq__28997,chunk__28998,count__28999,i__29000,vec__29011,old_child,new_child,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__29180 = seq__28997;
var G__29181 = chunk__28998;
var G__29182 = count__28999;
var G__29183 = (i__29000 + (1));
seq__28997 = G__29180;
chunk__28998 = G__29181;
count__28999 = G__29182;
i__29000 = G__29183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28997);
if(temp__5735__auto__){
var seq__28997__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28997__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28997__$1);
var G__29184 = cljs.core.chunk_rest(seq__28997__$1);
var G__29185 = c__4609__auto__;
var G__29186 = cljs.core.count(c__4609__auto__);
var G__29187 = (0);
seq__28997 = G__29184;
chunk__28998 = G__29185;
count__28999 = G__29186;
i__29000 = G__29187;
continue;
} else {
var vec__29015 = cljs.core.first(seq__28997__$1);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29015,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29015,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__28997,chunk__28998,count__28999,i__29000,vec__29015,old_child,new_child,seq__28997__$1,temp__5735__auto__,old_render,new_vdom,new_render){
return (function (p1__28984_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__28984_SHARP_], 0));
});})(seq__28997,chunk__28998,count__28999,i__29000,vec__29015,old_child,new_child,seq__28997__$1,temp__5735__auto__,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__29188 = cljs.core.next(seq__28997__$1);
var G__29189 = null;
var G__29190 = (0);
var G__29191 = (0);
seq__28997 = G__29188;
chunk__28998 = G__29189;
count__28999 = G__29190;
i__29000 = G__29191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var G__29021 = (old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : old_vdom.call(null,new cljs.core.Keyword(null,"el","el",-1618201118)));
var G__29022 = html_cljs.html.domify(vdom_atm);
return (html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2(G__29021,G__29022) : html_cljs.html.replace_el.call(null,G__29021,G__29022));
}
}));

(html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1 = (function (vdom_atm){
var vstate = cljs.core.deref(vdom_atm);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_atm,(function (p1__28985_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__28985_SHARP_,(function (){var G__29024 = (p1__28985_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28985_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"render","render",-1408033454)) : p1__28985_SHARP_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
return (html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1(G__29024) : html_cljs.html.render_to_state.call(null,G__29024));
})()], 0));
}));

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(vdom_atm,vstate);
}));

(html_cljs.html.refresh.cljs$lang$maxFixedArity = 2);

html_cljs.html.render_to_state = (function html_cljs$html$render_to_state(render){
var cached_render = (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428),(function (){var iter__4582__auto__ = (function html_cljs$html$render_to_state_$_iter__29026(s__29027){
return (new cljs.core.LazySeq(null,(function (){
var s__29027__$1 = s__29027;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29027__$1);
if(temp__5735__auto__){
var s__29027__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29027__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29027__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29029 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29028 = (0);
while(true){
if((i__29028 < size__4581__auto__)){
var child = cljs.core._nth(c__4580__auto__,i__29028);
cljs.core.chunk_append(b__29029,html_cljs.html.create_vdom(child));

var G__29193 = (i__29028 + (1));
i__29028 = G__29193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29029),html_cljs$html$render_to_state_$_iter__29026(cljs.core.chunk_rest(s__29027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29029),null);
}
} else {
var child = cljs.core.first(s__29027__$2);
return cljs.core.cons(html_cljs.html.create_vdom(child),html_cljs$html$render_to_state_$_iter__29026(cljs.core.rest(s__29027__$2)));
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

return clojure.walk.postwalk((function (p1__29030_SHARP_){
if(cljs.core.fn_QMARK_(p1__29030_SHARP_)){
return "fn";
} else {
return p1__29030_SHARP_;
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

//# sourceMappingURL=html_cljs.html.js.map
