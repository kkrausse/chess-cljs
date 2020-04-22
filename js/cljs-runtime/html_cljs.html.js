goog.provide('html_cljs.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');





html_cljs.html.add_callbacks = (function html_cljs$html$add_callbacks(el,event_map){
var seq__26996 = cljs.core.seq(event_map);
var chunk__26997 = null;
var count__26998 = (0);
var i__26999 = (0);
while(true){
if((i__26999 < count__26998)){
var vec__27006 = chunk__26997.cljs$core$IIndexed$_nth$arity$2(null,i__26999);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(1),null);
el.addEventListener(event_name,f);


var G__27139 = seq__26996;
var G__27140 = chunk__26997;
var G__27141 = count__26998;
var G__27142 = (i__26999 + (1));
seq__26996 = G__27139;
chunk__26997 = G__27140;
count__26998 = G__27141;
i__26999 = G__27142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26996);
if(temp__5735__auto__){
var seq__26996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26996__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26996__$1);
var G__27143 = cljs.core.chunk_rest(seq__26996__$1);
var G__27144 = c__4609__auto__;
var G__27145 = cljs.core.count(c__4609__auto__);
var G__27146 = (0);
seq__26996 = G__27143;
chunk__26997 = G__27144;
count__26998 = G__27145;
i__26999 = G__27146;
continue;
} else {
var vec__27009 = cljs.core.first(seq__26996__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(1),null);
el.addEventListener(event_name,f);


var G__27147 = cljs.core.next(seq__26996__$1);
var G__27148 = null;
var G__27149 = (0);
var G__27150 = (0);
seq__26996 = G__27147;
chunk__26997 = G__27148;
count__26998 = G__27149;
i__26999 = G__27150;
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
var seq__27012 = cljs.core.seq(event_map);
var chunk__27013 = null;
var count__27014 = (0);
var i__27015 = (0);
while(true){
if((i__27015 < count__27014)){
var vec__27022 = chunk__27013.cljs$core$IIndexed$_nth$arity$2(null,i__27015);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(1),null);
el.removeEventListener(event_name,f);


var G__27151 = seq__27012;
var G__27152 = chunk__27013;
var G__27153 = count__27014;
var G__27154 = (i__27015 + (1));
seq__27012 = G__27151;
chunk__27013 = G__27152;
count__27014 = G__27153;
i__27015 = G__27154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27012);
if(temp__5735__auto__){
var seq__27012__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27012__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27012__$1);
var G__27155 = cljs.core.chunk_rest(seq__27012__$1);
var G__27156 = c__4609__auto__;
var G__27157 = cljs.core.count(c__4609__auto__);
var G__27158 = (0);
seq__27012 = G__27155;
chunk__27013 = G__27156;
count__27014 = G__27157;
i__27015 = G__27158;
continue;
} else {
var vec__27025 = cljs.core.first(seq__27012__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27025,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27025,(1),null);
el.removeEventListener(event_name,f);


var G__27160 = cljs.core.next(seq__27012__$1);
var G__27161 = null;
var G__27162 = (0);
var G__27163 = (0);
seq__27012 = G__27160;
chunk__27013 = G__27161;
count__27014 = G__27162;
i__27015 = G__27163;
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
var seq__27028 = cljs.core.seq(styles);
var chunk__27029 = null;
var count__27030 = (0);
var i__27031 = (0);
while(true){
if((i__27031 < count__27030)){
var vec__27038 = chunk__27029.cljs$core$IIndexed$_nth$arity$2(null,i__27031);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27038,(1),null);
(el.style[k] = v);


var G__27165 = seq__27028;
var G__27166 = chunk__27029;
var G__27167 = count__27030;
var G__27168 = (i__27031 + (1));
seq__27028 = G__27165;
chunk__27029 = G__27166;
count__27030 = G__27167;
i__27031 = G__27168;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27028);
if(temp__5735__auto__){
var seq__27028__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27028__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27028__$1);
var G__27169 = cljs.core.chunk_rest(seq__27028__$1);
var G__27170 = c__4609__auto__;
var G__27171 = cljs.core.count(c__4609__auto__);
var G__27172 = (0);
seq__27028 = G__27169;
chunk__27029 = G__27170;
count__27030 = G__27171;
i__27031 = G__27172;
continue;
} else {
var vec__27041 = cljs.core.first(seq__27028__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27041,(1),null);
(el.style[k] = v);


var G__27173 = cljs.core.next(seq__27028__$1);
var G__27174 = null;
var G__27175 = (0);
var G__27176 = (0);
seq__27028 = G__27173;
chunk__27029 = G__27174;
count__27030 = G__27175;
i__27031 = G__27176;
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
var user_mods = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.identity,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__27044_SHARP_){
return (el.className = p1__27044_SHARP_);
}),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),(function (p1__27045_SHARP_){
var seq__27051 = cljs.core.seq(p1__27045_SHARP_);
var chunk__27052 = null;
var count__27053 = (0);
var i__27054 = (0);
while(true){
if((i__27054 < count__27053)){
var vec__27061 = chunk__27052.cljs$core$IIndexed$_nth$arity$2(null,i__27054);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27061,(1),null);
(el[k] = v);


var G__27177 = seq__27051;
var G__27178 = chunk__27052;
var G__27179 = count__27053;
var G__27180 = (i__27054 + (1));
seq__27051 = G__27177;
chunk__27052 = G__27178;
count__27053 = G__27179;
i__27054 = G__27180;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27051);
if(temp__5735__auto__){
var seq__27051__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27051__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27051__$1);
var G__27181 = cljs.core.chunk_rest(seq__27051__$1);
var G__27182 = c__4609__auto__;
var G__27183 = cljs.core.count(c__4609__auto__);
var G__27184 = (0);
seq__27051 = G__27181;
chunk__27052 = G__27182;
count__27053 = G__27183;
i__27054 = G__27184;
continue;
} else {
var vec__27064 = cljs.core.first(seq__27051__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27064,(1),null);
(el[k] = v);


var G__27185 = cljs.core.next(seq__27051__$1);
var G__27186 = null;
var G__27187 = (0);
var G__27188 = (0);
seq__27051 = G__27185;
chunk__27052 = G__27186;
count__27053 = G__27187;
i__27054 = G__27188;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__27046_SHARP_){
var seq__27067 = cljs.core.seq(p1__27046_SHARP_);
var chunk__27068 = null;
var count__27069 = (0);
var i__27070 = (0);
while(true){
if((i__27070 < count__27069)){
var vec__27077 = chunk__27068.cljs$core$IIndexed$_nth$arity$2(null,i__27070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(1),null);
(el.style[k] = v);


var G__27189 = seq__27067;
var G__27190 = chunk__27068;
var G__27191 = count__27069;
var G__27192 = (i__27070 + (1));
seq__27067 = G__27189;
chunk__27068 = G__27190;
count__27069 = G__27191;
i__27070 = G__27192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27067);
if(temp__5735__auto__){
var seq__27067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27067__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27067__$1);
var G__27193 = cljs.core.chunk_rest(seq__27067__$1);
var G__27194 = c__4609__auto__;
var G__27195 = cljs.core.count(c__4609__auto__);
var G__27196 = (0);
seq__27067 = G__27193;
chunk__27068 = G__27194;
count__27069 = G__27195;
i__27070 = G__27196;
continue;
} else {
var vec__27080 = cljs.core.first(seq__27067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(1),null);
(el.style[k] = v);


var G__27197 = cljs.core.next(seq__27067__$1);
var G__27198 = null;
var G__27199 = (0);
var G__27200 = (0);
seq__27067 = G__27197;
chunk__27068 = G__27198;
count__27069 = G__27199;
i__27070 = G__27200;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"on","on",173873944),(function (p1__27047_SHARP_){
return html_cljs.html.add_callbacks(el,p1__27047_SHARP_);
}),new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__27048_SHARP_){
return (el.href = p1__27048_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__27049_SHARP_){
return (el.innerHTML = p1__27049_SHARP_);
})], null);
var seq__27083_27201 = cljs.core.seq(node);
var chunk__27084_27202 = null;
var count__27085_27203 = (0);
var i__27086_27204 = (0);
while(true){
if((i__27086_27204 < count__27085_27203)){
var vec__27095_27205 = chunk__27084_27202.cljs$core$IIndexed$_nth$arity$2(null,i__27086_27204);
var k_27206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095_27205,(0),null);
var v_27207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095_27205,(1),null);
var fexpr__27098_27208 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_27206) : user_mods.call(null,k_27206));
(fexpr__27098_27208.cljs$core$IFn$_invoke$arity$1 ? fexpr__27098_27208.cljs$core$IFn$_invoke$arity$1(v_27207) : fexpr__27098_27208.call(null,v_27207));


var G__27209 = seq__27083_27201;
var G__27210 = chunk__27084_27202;
var G__27211 = count__27085_27203;
var G__27212 = (i__27086_27204 + (1));
seq__27083_27201 = G__27209;
chunk__27084_27202 = G__27210;
count__27085_27203 = G__27211;
i__27086_27204 = G__27212;
continue;
} else {
var temp__5735__auto___27213 = cljs.core.seq(seq__27083_27201);
if(temp__5735__auto___27213){
var seq__27083_27217__$1 = temp__5735__auto___27213;
if(cljs.core.chunked_seq_QMARK_(seq__27083_27217__$1)){
var c__4609__auto___27218 = cljs.core.chunk_first(seq__27083_27217__$1);
var G__27219 = cljs.core.chunk_rest(seq__27083_27217__$1);
var G__27220 = c__4609__auto___27218;
var G__27221 = cljs.core.count(c__4609__auto___27218);
var G__27222 = (0);
seq__27083_27201 = G__27219;
chunk__27084_27202 = G__27220;
count__27085_27203 = G__27221;
i__27086_27204 = G__27222;
continue;
} else {
var vec__27099_27227 = cljs.core.first(seq__27083_27217__$1);
var k_27228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099_27227,(0),null);
var v_27233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099_27227,(1),null);
var fexpr__27102_27234 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_27228) : user_mods.call(null,k_27228));
(fexpr__27102_27234.cljs$core$IFn$_invoke$arity$1 ? fexpr__27102_27234.cljs$core$IFn$_invoke$arity$1(v_27233) : fexpr__27102_27234.call(null,v_27233));


var G__27235 = cljs.core.next(seq__27083_27217__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27083_27201 = G__27235;
chunk__27084_27202 = G__27236;
count__27085_27203 = G__27237;
i__27086_27204 = G__27238;
continue;
}
} else {
}
}
break;
}

var seq__27103_27239 = cljs.core.seq((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : state.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))));
var chunk__27104_27240 = null;
var count__27105_27241 = (0);
var i__27106_27242 = (0);
while(true){
if((i__27106_27242 < count__27105_27241)){
var child_27243 = chunk__27104_27240.cljs$core$IIndexed$_nth$arity$2(null,i__27106_27242);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_27243) : html_cljs.html.domify.call(null,child_27243)));


var G__27244 = seq__27103_27239;
var G__27245 = chunk__27104_27240;
var G__27246 = count__27105_27241;
var G__27247 = (i__27106_27242 + (1));
seq__27103_27239 = G__27244;
chunk__27104_27240 = G__27245;
count__27105_27241 = G__27246;
i__27106_27242 = G__27247;
continue;
} else {
var temp__5735__auto___27248 = cljs.core.seq(seq__27103_27239);
if(temp__5735__auto___27248){
var seq__27103_27250__$1 = temp__5735__auto___27248;
if(cljs.core.chunked_seq_QMARK_(seq__27103_27250__$1)){
var c__4609__auto___27253 = cljs.core.chunk_first(seq__27103_27250__$1);
var G__27254 = cljs.core.chunk_rest(seq__27103_27250__$1);
var G__27255 = c__4609__auto___27253;
var G__27256 = cljs.core.count(c__4609__auto___27253);
var G__27257 = (0);
seq__27103_27239 = G__27254;
chunk__27104_27240 = G__27255;
count__27105_27241 = G__27256;
i__27106_27242 = G__27257;
continue;
} else {
var child_27262 = cljs.core.first(seq__27103_27250__$1);
el.appendChild((html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.domify.cljs$core$IFn$_invoke$arity$1(child_27262) : html_cljs.html.domify.call(null,child_27262)));


var G__27266 = cljs.core.next(seq__27103_27250__$1);
var G__27267 = null;
var G__27268 = (0);
var G__27269 = (0);
seq__27103_27239 = G__27266;
chunk__27104_27240 = G__27267;
count__27105_27241 = G__27268;
i__27106_27242 = G__27269;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_state_atm,(function (p1__27050_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27050_SHARP_,new cljs.core.Keyword(null,"el","el",-1618201118),el);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27107){
var vec__27108 = p__27107;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(1),null);
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
var G__27114 = arguments.length;
switch (G__27114) {
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

var seq__27115 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : old_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428))),(new_vdom.cljs$core$IFn$_invoke$arity$1 ? new_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)) : new_vdom.call(null,new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428)))));
var chunk__27116 = null;
var count__27117 = (0);
var i__27118 = (0);
while(true){
if((i__27118 < count__27117)){
var vec__27125 = chunk__27116.cljs$core$IIndexed$_nth$arity$2(null,i__27118);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27125,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27125,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__27115,chunk__27116,count__27117,i__27118,vec__27125,old_child,new_child,old_render,new_vdom,new_render){
return (function (p1__27111_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__27111_SHARP_], 0));
});})(seq__27115,chunk__27116,count__27117,i__27118,vec__27125,old_child,new_child,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__27285 = seq__27115;
var G__27286 = chunk__27116;
var G__27287 = count__27117;
var G__27288 = (i__27118 + (1));
seq__27115 = G__27285;
chunk__27116 = G__27286;
count__27117 = G__27287;
i__27118 = G__27288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27115);
if(temp__5735__auto__){
var seq__27115__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27115__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27115__$1);
var G__27295 = cljs.core.chunk_rest(seq__27115__$1);
var G__27296 = c__4609__auto__;
var G__27297 = cljs.core.count(c__4609__auto__);
var G__27298 = (0);
seq__27115 = G__27295;
chunk__27116 = G__27296;
count__27117 = G__27297;
i__27118 = G__27298;
continue;
} else {
var vec__27128 = cljs.core.first(seq__27115__$1);
var old_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27128,(0),null);
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27128,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,((function (seq__27115,chunk__27116,count__27117,i__27118,vec__27128,old_child,new_child,seq__27115__$1,temp__5735__auto__,old_render,new_vdom,new_render){
return (function (p1__27111_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(old_child),p1__27111_SHARP_], 0));
});})(seq__27115,chunk__27116,count__27117,i__27118,vec__27128,old_child,new_child,seq__27115__$1,temp__5735__auto__,old_render,new_vdom,new_render))
);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(new_child,cljs.core.deref(old_child));


var G__27303 = cljs.core.next(seq__27115__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27115 = G__27303;
chunk__27116 = G__27304;
count__27117 = G__27305;
i__27118 = G__27306;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var G__27131 = (old_vdom.cljs$core$IFn$_invoke$arity$1 ? old_vdom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"el","el",-1618201118)) : old_vdom.call(null,new cljs.core.Keyword(null,"el","el",-1618201118)));
var G__27132 = html_cljs.html.domify(vdom_atm);
return (html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.replace_el.cljs$core$IFn$_invoke$arity$2(G__27131,G__27132) : html_cljs.html.replace_el.call(null,G__27131,G__27132));
}
}));

(html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1 = (function (vdom_atm){
var vstate = cljs.core.deref(vdom_atm);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vdom_atm,(function (p1__27112_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27112_SHARP_,(function (){var G__27133 = (p1__27112_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27112_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"render","render",-1408033454)) : p1__27112_SHARP_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
return (html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.render_to_state.cljs$core$IFn$_invoke$arity$1(G__27133) : html_cljs.html.render_to_state.call(null,G__27133));
})()], 0));
}));

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$2(vdom_atm,vstate);
}));

(html_cljs.html.refresh.cljs$lang$maxFixedArity = 2);

html_cljs.html.render_to_state = (function html_cljs$html$render_to_state(render){
var cached_render = (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vdom-children","vdom-children",436187428),(function (){var iter__4582__auto__ = (function html_cljs$html$render_to_state_$_iter__27134(s__27135){
return (new cljs.core.LazySeq(null,(function (){
var s__27135__$1 = s__27135;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27135__$1);
if(temp__5735__auto__){
var s__27135__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27135__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27135__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27137 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27136 = (0);
while(true){
if((i__27136 < size__4581__auto__)){
var child = cljs.core._nth(c__4580__auto__,i__27136);
cljs.core.chunk_append(b__27137,html_cljs.html.create_vdom(child));

var G__27320 = (i__27136 + (1));
i__27136 = G__27320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27137),html_cljs$html$render_to_state_$_iter__27134(cljs.core.chunk_rest(s__27135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27137),null);
}
} else {
var child = cljs.core.first(s__27135__$2);
return cljs.core.cons(html_cljs.html.create_vdom(child),html_cljs$html$render_to_state_$_iter__27134(cljs.core.rest(s__27135__$2)));
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

return clojure.walk.postwalk((function (p1__27138_SHARP_){
if(cljs.core.fn_QMARK_(p1__27138_SHARP_)){
return "fn";
} else {
return p1__27138_SHARP_;
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
