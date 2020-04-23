goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35799 = arguments.length;
var i__4790__auto___35800 = (0);
while(true){
if((i__4790__auto___35800 < len__4789__auto___35799)){
args__4795__auto__.push((arguments[i__4790__auto___35800]));

var G__35801 = (i__4790__auto___35800 + (1));
i__4790__auto___35800 = G__35801;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35647){
var G__35648 = cljs.core.first(seq35647);
var seq35647__$1 = cljs.core.next(seq35647);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35648,seq35647__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35664 = cljs.core.seq(sources);
var chunk__35665 = null;
var count__35666 = (0);
var i__35667 = (0);
while(true){
if((i__35667 < count__35666)){
var map__35679 = chunk__35665.cljs$core$IIndexed$_nth$arity$2(null,i__35667);
var map__35679__$1 = (((((!((map__35679 == null))))?(((((map__35679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35679):map__35679);
var src = map__35679__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35681){var e_35802 = e35681;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35802);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35802.message)].join('')));
}

var G__35803 = seq__35664;
var G__35804 = chunk__35665;
var G__35805 = count__35666;
var G__35806 = (i__35667 + (1));
seq__35664 = G__35803;
chunk__35665 = G__35804;
count__35666 = G__35805;
i__35667 = G__35806;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35664);
if(temp__5735__auto__){
var seq__35664__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35664__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35664__$1);
var G__35807 = cljs.core.chunk_rest(seq__35664__$1);
var G__35808 = c__4609__auto__;
var G__35809 = cljs.core.count(c__4609__auto__);
var G__35810 = (0);
seq__35664 = G__35807;
chunk__35665 = G__35808;
count__35666 = G__35809;
i__35667 = G__35810;
continue;
} else {
var map__35682 = cljs.core.first(seq__35664__$1);
var map__35682__$1 = (((((!((map__35682 == null))))?(((((map__35682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35682):map__35682);
var src = map__35682__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35684){var e_35811 = e35684;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35811);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35811.message)].join('')));
}

var G__35812 = cljs.core.next(seq__35664__$1);
var G__35813 = null;
var G__35814 = (0);
var G__35815 = (0);
seq__35664 = G__35812;
chunk__35665 = G__35813;
count__35666 = G__35814;
i__35667 = G__35815;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35687 = cljs.core.seq(js_requires);
var chunk__35688 = null;
var count__35689 = (0);
var i__35690 = (0);
while(true){
if((i__35690 < count__35689)){
var js_ns = chunk__35688.cljs$core$IIndexed$_nth$arity$2(null,i__35690);
var require_str_35816 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35816);


var G__35817 = seq__35687;
var G__35818 = chunk__35688;
var G__35819 = count__35689;
var G__35820 = (i__35690 + (1));
seq__35687 = G__35817;
chunk__35688 = G__35818;
count__35689 = G__35819;
i__35690 = G__35820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35687);
if(temp__5735__auto__){
var seq__35687__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35687__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35687__$1);
var G__35821 = cljs.core.chunk_rest(seq__35687__$1);
var G__35822 = c__4609__auto__;
var G__35823 = cljs.core.count(c__4609__auto__);
var G__35824 = (0);
seq__35687 = G__35821;
chunk__35688 = G__35822;
count__35689 = G__35823;
i__35690 = G__35824;
continue;
} else {
var js_ns = cljs.core.first(seq__35687__$1);
var require_str_35825 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35825);


var G__35826 = cljs.core.next(seq__35687__$1);
var G__35827 = null;
var G__35828 = (0);
var G__35829 = (0);
seq__35687 = G__35826;
chunk__35688 = G__35827;
count__35689 = G__35828;
i__35690 = G__35829;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35693 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35693) : callback.call(null,G__35693));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35695){
var map__35696 = p__35695;
var map__35696__$1 = (((((!((map__35696 == null))))?(((((map__35696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35696):map__35696);
var msg = map__35696__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35696__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35696__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35698(s__35699){
return (new cljs.core.LazySeq(null,(function (){
var s__35699__$1 = s__35699;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35699__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35704 = cljs.core.first(xs__6292__auto__);
var map__35704__$1 = (((((!((map__35704 == null))))?(((((map__35704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35704):map__35704);
var src = map__35704__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35699__$1,map__35704,map__35704__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35696,map__35696__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35698_$_iter__35700(s__35701){
return (new cljs.core.LazySeq(null,((function (s__35699__$1,map__35704,map__35704__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35696,map__35696__$1,msg,info,reload_info){
return (function (){
var s__35701__$1 = s__35701;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35701__$1);
if(temp__5735__auto____$1){
var s__35701__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35701__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35701__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35703 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35702 = (0);
while(true){
if((i__35702 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__35702);
cljs.core.chunk_append(b__35703,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35830 = (i__35702 + (1));
i__35702 = G__35830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35703),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35698_$_iter__35700(cljs.core.chunk_rest(s__35701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35703),null);
}
} else {
var warning = cljs.core.first(s__35701__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35698_$_iter__35700(cljs.core.rest(s__35701__$2)));
}
} else {
return null;
}
break;
}
});})(s__35699__$1,map__35704,map__35704__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35696,map__35696__$1,msg,info,reload_info))
,null,null));
});})(s__35699__$1,map__35704,map__35704__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35696,map__35696__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35698(cljs.core.rest(s__35699__$1)));
} else {
var G__35831 = cljs.core.rest(s__35699__$1);
s__35699__$1 = G__35831;
continue;
}
} else {
var G__35832 = cljs.core.rest(s__35699__$1);
s__35699__$1 = G__35832;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35706_35833 = cljs.core.seq(warnings);
var chunk__35707_35834 = null;
var count__35708_35835 = (0);
var i__35709_35836 = (0);
while(true){
if((i__35709_35836 < count__35708_35835)){
var map__35714_35837 = chunk__35707_35834.cljs$core$IIndexed$_nth$arity$2(null,i__35709_35836);
var map__35714_35838__$1 = (((((!((map__35714_35837 == null))))?(((((map__35714_35837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35714_35837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35714_35837):map__35714_35837);
var w_35839 = map__35714_35838__$1;
var msg_35840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714_35838__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714_35838__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714_35838__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714_35838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35843)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35841),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35842),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35840__$1)].join(''));


var G__35844 = seq__35706_35833;
var G__35845 = chunk__35707_35834;
var G__35846 = count__35708_35835;
var G__35847 = (i__35709_35836 + (1));
seq__35706_35833 = G__35844;
chunk__35707_35834 = G__35845;
count__35708_35835 = G__35846;
i__35709_35836 = G__35847;
continue;
} else {
var temp__5735__auto___35848 = cljs.core.seq(seq__35706_35833);
if(temp__5735__auto___35848){
var seq__35706_35849__$1 = temp__5735__auto___35848;
if(cljs.core.chunked_seq_QMARK_(seq__35706_35849__$1)){
var c__4609__auto___35850 = cljs.core.chunk_first(seq__35706_35849__$1);
var G__35851 = cljs.core.chunk_rest(seq__35706_35849__$1);
var G__35852 = c__4609__auto___35850;
var G__35853 = cljs.core.count(c__4609__auto___35850);
var G__35854 = (0);
seq__35706_35833 = G__35851;
chunk__35707_35834 = G__35852;
count__35708_35835 = G__35853;
i__35709_35836 = G__35854;
continue;
} else {
var map__35718_35855 = cljs.core.first(seq__35706_35849__$1);
var map__35718_35856__$1 = (((((!((map__35718_35855 == null))))?(((((map__35718_35855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35718_35855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35718_35855):map__35718_35855);
var w_35857 = map__35718_35856__$1;
var msg_35858__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_35856__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_35856__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_35856__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718_35856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35861)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35859),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35860),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35858__$1)].join(''));


var G__35862 = cljs.core.next(seq__35706_35849__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35706_35833 = G__35862;
chunk__35707_35834 = G__35863;
count__35708_35835 = G__35864;
i__35709_35836 = G__35865;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35694_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35694_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35720){
var map__35721 = p__35720;
var map__35721__$1 = (((((!((map__35721 == null))))?(((((map__35721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35721):map__35721);
var msg = map__35721__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35723 = cljs.core.seq(updates);
var chunk__35725 = null;
var count__35726 = (0);
var i__35727 = (0);
while(true){
if((i__35727 < count__35726)){
var path = chunk__35725.cljs$core$IIndexed$_nth$arity$2(null,i__35727);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35753_35866 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35756_35867 = null;
var count__35757_35868 = (0);
var i__35758_35869 = (0);
while(true){
if((i__35758_35869 < count__35757_35868)){
var node_35870 = chunk__35756_35867.cljs$core$IIndexed$_nth$arity$2(null,i__35758_35869);
var path_match_35871 = shadow.cljs.devtools.client.browser.match_paths(node_35870.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35871)){
var new_link_35872 = (function (){var G__35763 = node_35870.cloneNode(true);
G__35763.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35871),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35763;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35871], 0));

goog.dom.insertSiblingAfter(new_link_35872,node_35870);

goog.dom.removeNode(node_35870);


var G__35873 = seq__35753_35866;
var G__35874 = chunk__35756_35867;
var G__35875 = count__35757_35868;
var G__35876 = (i__35758_35869 + (1));
seq__35753_35866 = G__35873;
chunk__35756_35867 = G__35874;
count__35757_35868 = G__35875;
i__35758_35869 = G__35876;
continue;
} else {
var G__35877 = seq__35753_35866;
var G__35878 = chunk__35756_35867;
var G__35879 = count__35757_35868;
var G__35880 = (i__35758_35869 + (1));
seq__35753_35866 = G__35877;
chunk__35756_35867 = G__35878;
count__35757_35868 = G__35879;
i__35758_35869 = G__35880;
continue;
}
} else {
var temp__5735__auto___35881 = cljs.core.seq(seq__35753_35866);
if(temp__5735__auto___35881){
var seq__35753_35882__$1 = temp__5735__auto___35881;
if(cljs.core.chunked_seq_QMARK_(seq__35753_35882__$1)){
var c__4609__auto___35883 = cljs.core.chunk_first(seq__35753_35882__$1);
var G__35884 = cljs.core.chunk_rest(seq__35753_35882__$1);
var G__35885 = c__4609__auto___35883;
var G__35886 = cljs.core.count(c__4609__auto___35883);
var G__35887 = (0);
seq__35753_35866 = G__35884;
chunk__35756_35867 = G__35885;
count__35757_35868 = G__35886;
i__35758_35869 = G__35887;
continue;
} else {
var node_35888 = cljs.core.first(seq__35753_35882__$1);
var path_match_35889 = shadow.cljs.devtools.client.browser.match_paths(node_35888.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35889)){
var new_link_35890 = (function (){var G__35764 = node_35888.cloneNode(true);
G__35764.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35889),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35764;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35889], 0));

goog.dom.insertSiblingAfter(new_link_35890,node_35888);

goog.dom.removeNode(node_35888);


var G__35891 = cljs.core.next(seq__35753_35882__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35753_35866 = G__35891;
chunk__35756_35867 = G__35892;
count__35757_35868 = G__35893;
i__35758_35869 = G__35894;
continue;
} else {
var G__35895 = cljs.core.next(seq__35753_35882__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35753_35866 = G__35895;
chunk__35756_35867 = G__35896;
count__35757_35868 = G__35897;
i__35758_35869 = G__35898;
continue;
}
}
} else {
}
}
break;
}


var G__35899 = seq__35723;
var G__35900 = chunk__35725;
var G__35901 = count__35726;
var G__35902 = (i__35727 + (1));
seq__35723 = G__35899;
chunk__35725 = G__35900;
count__35726 = G__35901;
i__35727 = G__35902;
continue;
} else {
var G__35903 = seq__35723;
var G__35904 = chunk__35725;
var G__35905 = count__35726;
var G__35906 = (i__35727 + (1));
seq__35723 = G__35903;
chunk__35725 = G__35904;
count__35726 = G__35905;
i__35727 = G__35906;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35723);
if(temp__5735__auto__){
var seq__35723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35723__$1);
var G__35907 = cljs.core.chunk_rest(seq__35723__$1);
var G__35908 = c__4609__auto__;
var G__35909 = cljs.core.count(c__4609__auto__);
var G__35910 = (0);
seq__35723 = G__35907;
chunk__35725 = G__35908;
count__35726 = G__35909;
i__35727 = G__35910;
continue;
} else {
var path = cljs.core.first(seq__35723__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35765_35911 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35768_35912 = null;
var count__35769_35913 = (0);
var i__35770_35914 = (0);
while(true){
if((i__35770_35914 < count__35769_35913)){
var node_35915 = chunk__35768_35912.cljs$core$IIndexed$_nth$arity$2(null,i__35770_35914);
var path_match_35916 = shadow.cljs.devtools.client.browser.match_paths(node_35915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35916)){
var new_link_35917 = (function (){var G__35775 = node_35915.cloneNode(true);
G__35775.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35775;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35916], 0));

goog.dom.insertSiblingAfter(new_link_35917,node_35915);

goog.dom.removeNode(node_35915);


var G__35918 = seq__35765_35911;
var G__35919 = chunk__35768_35912;
var G__35920 = count__35769_35913;
var G__35921 = (i__35770_35914 + (1));
seq__35765_35911 = G__35918;
chunk__35768_35912 = G__35919;
count__35769_35913 = G__35920;
i__35770_35914 = G__35921;
continue;
} else {
var G__35922 = seq__35765_35911;
var G__35923 = chunk__35768_35912;
var G__35924 = count__35769_35913;
var G__35925 = (i__35770_35914 + (1));
seq__35765_35911 = G__35922;
chunk__35768_35912 = G__35923;
count__35769_35913 = G__35924;
i__35770_35914 = G__35925;
continue;
}
} else {
var temp__5735__auto___35926__$1 = cljs.core.seq(seq__35765_35911);
if(temp__5735__auto___35926__$1){
var seq__35765_35927__$1 = temp__5735__auto___35926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35765_35927__$1)){
var c__4609__auto___35928 = cljs.core.chunk_first(seq__35765_35927__$1);
var G__35929 = cljs.core.chunk_rest(seq__35765_35927__$1);
var G__35930 = c__4609__auto___35928;
var G__35931 = cljs.core.count(c__4609__auto___35928);
var G__35932 = (0);
seq__35765_35911 = G__35929;
chunk__35768_35912 = G__35930;
count__35769_35913 = G__35931;
i__35770_35914 = G__35932;
continue;
} else {
var node_35933 = cljs.core.first(seq__35765_35927__$1);
var path_match_35934 = shadow.cljs.devtools.client.browser.match_paths(node_35933.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35934)){
var new_link_35935 = (function (){var G__35776 = node_35933.cloneNode(true);
G__35776.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35934),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35776;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35934], 0));

goog.dom.insertSiblingAfter(new_link_35935,node_35933);

goog.dom.removeNode(node_35933);


var G__35936 = cljs.core.next(seq__35765_35927__$1);
var G__35937 = null;
var G__35938 = (0);
var G__35939 = (0);
seq__35765_35911 = G__35936;
chunk__35768_35912 = G__35937;
count__35769_35913 = G__35938;
i__35770_35914 = G__35939;
continue;
} else {
var G__35940 = cljs.core.next(seq__35765_35927__$1);
var G__35941 = null;
var G__35942 = (0);
var G__35943 = (0);
seq__35765_35911 = G__35940;
chunk__35768_35912 = G__35941;
count__35769_35913 = G__35942;
i__35770_35914 = G__35943;
continue;
}
}
} else {
}
}
break;
}


var G__35944 = cljs.core.next(seq__35723__$1);
var G__35945 = null;
var G__35946 = (0);
var G__35947 = (0);
seq__35723 = G__35944;
chunk__35725 = G__35945;
count__35726 = G__35946;
i__35727 = G__35947;
continue;
} else {
var G__35948 = cljs.core.next(seq__35723__$1);
var G__35949 = null;
var G__35950 = (0);
var G__35951 = (0);
seq__35723 = G__35948;
chunk__35725 = G__35949;
count__35726 = G__35950;
i__35727 = G__35951;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35777){
var map__35778 = p__35777;
var map__35778__$1 = (((((!((map__35778 == null))))?(((((map__35778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35778):map__35778);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35778__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35778__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35780,done){
var map__35781 = p__35780;
var map__35781__$1 = (((((!((map__35781 == null))))?(((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35781):map__35781);
var msg = map__35781__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35783){
var map__35784 = p__35783;
var map__35784__$1 = (((((!((map__35784 == null))))?(((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35784):map__35784);
var src = map__35784__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35786){var e = e35786;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35787,done){
var map__35788 = p__35787;
var map__35788__$1 = (((((!((map__35788 == null))))?(((((map__35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35788):map__35788);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35790){
var map__35791 = p__35790;
var map__35791__$1 = (((((!((map__35791 == null))))?(((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35791):map__35791);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35793,done){
var map__35794 = p__35793;
var map__35794__$1 = (((((!((map__35794 == null))))?(((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35794):map__35794);
var msg = map__35794__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35796_35952 = type;
var G__35796_35953__$1 = (((G__35796_35952 instanceof cljs.core.Keyword))?G__35796_35952.fqn:null);
switch (G__35796_35953__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35797 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35797.cljs$core$IFn$_invoke$arity$1 ? fexpr__35797.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35797.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35798){var e = e35798;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35955 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35955)){
var s_35956 = temp__5735__auto___35955;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35956.onclose = (function (e){
return null;
}));

s_35956.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
