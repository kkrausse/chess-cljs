goog.provide('shadow.cljs.bootstrap.env');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.loaded_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.loaded_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.bootstrap.env.set_loaded = (function shadow$cljs$bootstrap$env$set_loaded(namespaces){
var loaded = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),namespaces);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,loaded);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.index_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.index_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__47040){
var map__47041 = p__47040;
var map__47041__$1 = (((((!((map__47041 == null))))?(((((map__47041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47041):map__47041);
var data = map__47041__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__47043){
var map__47044 = p__47043;
var map__47044__$1 = (((((!((map__47044 == null))))?(((((map__47044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47044):map__47044);
var rc = map__47044__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx__$1,p__47049){
var vec__47050 = p__47049;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
}),idx,(function (){var iter__4529__auto__ = (function shadow$cljs$bootstrap$env$build_index_$_iter__47053(s__47054){
return (new cljs.core.LazySeq(null,(function (){
var s__47054__$1 = s__47054;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47054__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__47127 = cljs.core.first(xs__6292__auto__);
var map__47127__$1 = (((((!((map__47127 == null))))?(((((map__47127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47127):map__47127);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4525__auto__ = ((function (s__47054__$1,map__47127,map__47127__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__47041,map__47041__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__47053_$_iter__47055(s__47056){
return (new cljs.core.LazySeq(null,((function (s__47054__$1,map__47127,map__47127__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__47041,map__47041__$1,data,sources,exclude){
return (function (){
var s__47056__$1 = s__47056;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47056__$1);
if(temp__5735__auto____$1){
var s__47056__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47056__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47056__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47058 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47057 = (0);
while(true){
if((i__47057 < size__4528__auto__)){
var provide = cljs.core._nth(c__4527__auto__,i__47057);
cljs.core.chunk_append(b__47058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__47291 = (i__47057 + (1));
i__47057 = G__47291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47058),shadow$cljs$bootstrap$env$build_index_$_iter__47053_$_iter__47055(cljs.core.chunk_rest(s__47056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47058),null);
}
} else {
var provide = cljs.core.first(s__47056__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__47053_$_iter__47055(cljs.core.rest(s__47056__$2)));
}
} else {
return null;
}
break;
}
});})(s__47054__$1,map__47127,map__47127__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__47041,map__47041__$1,data,sources,exclude))
,null,null));
});})(s__47054__$1,map__47127,map__47127__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__47041,map__47041__$1,data,sources,exclude))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(provides));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__47053(cljs.core.rest(s__47054__$1)));
} else {
var G__47302 = cljs.core.rest(s__47054__$1);
s__47054__$1 = G__47302;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sources);
})());
cljs.core.reset_BANG_(shadow.cljs.bootstrap.env.index_ref,idx__$1);

return idx__$1;
});
shadow.cljs.bootstrap.env.get_ns_info = (function shadow$cljs$bootstrap$env$get_ns_info(ns){
var idx = cljs.core.deref(shadow.cljs.bootstrap.env.index_ref);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),ns], null));
var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not available"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}
});
shadow.cljs.bootstrap.env.find_deps = (function shadow$cljs$bootstrap$env$find_deps(entries){
if(cljs.core.set_QMARK_(entries)){
} else {
throw (new Error("Assert failed: (set? entries)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,entries)){
} else {
throw (new Error("Assert failed: (every? symbol? entries)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47167,p__47168){
var map__47169 = p__47167;
var map__47169__$1 = (((((!((map__47169 == null))))?(((((map__47169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47169):map__47169);
var x = map__47169__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__47170 = p__47168;
var map__47170__$1 = (((((!((map__47170 == null))))?(((((map__47170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47170):map__47170);
var src = map__47170__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});
shadow.cljs.bootstrap.env.create_cljs_user_BANG_ = (function shadow$cljs$bootstrap$env$create_cljs_user_BANG_(){
return goog.constructNamespace_("cljs.user");
});

//# sourceMappingURL=shadow.cljs.bootstrap.env.js.map
