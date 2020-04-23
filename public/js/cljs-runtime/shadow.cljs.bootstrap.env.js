goog.provide('shadow.cljs.bootstrap.env');
goog.require('cljs.core');
goog.require('clojure.set');
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
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__27202){
var map__27203 = p__27202;
var map__27203__$1 = (((((!((map__27203 == null))))?(((((map__27203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27203):map__27203);
var data = map__27203__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__27207){
var map__27208 = p__27207;
var map__27208__$1 = (((((!((map__27208 == null))))?(((((map__27208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27208):map__27208);
var rc = map__27208__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27208__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx__$1,p__27216){
var vec__27217 = p__27216;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
}),idx,(function (){var iter__4582__auto__ = (function shadow$cljs$bootstrap$env$build_index_$_iter__27221(s__27222){
return (new cljs.core.LazySeq(null,(function (){
var s__27222__$1 = s__27222;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27222__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__27236 = cljs.core.first(xs__6292__auto__);
var map__27236__$1 = (((((!((map__27236 == null))))?(((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27236):map__27236);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4578__auto__ = ((function (s__27222__$1,map__27236,map__27236__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__27203,map__27203__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__27221_$_iter__27223(s__27224){
return (new cljs.core.LazySeq(null,((function (s__27222__$1,map__27236,map__27236__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__27203,map__27203__$1,data,sources,exclude){
return (function (){
var s__27224__$1 = s__27224;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27224__$1);
if(temp__5735__auto____$1){
var s__27224__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27224__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27224__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27226 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27225 = (0);
while(true){
if((i__27225 < size__4581__auto__)){
var provide = cljs.core._nth(c__4580__auto__,i__27225);
cljs.core.chunk_append(b__27226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__27286 = (i__27225 + (1));
i__27225 = G__27286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27226),shadow$cljs$bootstrap$env$build_index_$_iter__27221_$_iter__27223(cljs.core.chunk_rest(s__27224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27226),null);
}
} else {
var provide = cljs.core.first(s__27224__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__27221_$_iter__27223(cljs.core.rest(s__27224__$2)));
}
} else {
return null;
}
break;
}
});})(s__27222__$1,map__27236,map__27236__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__27203,map__27203__$1,data,sources,exclude))
,null,null));
});})(s__27222__$1,map__27236,map__27236__$1,resource_id,provides,xs__6292__auto__,temp__5735__auto__,idx,map__27203,map__27203__$1,data,sources,exclude))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(provides));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__27221(cljs.core.rest(s__27222__$1)));
} else {
var G__27289 = cljs.core.rest(s__27222__$1);
s__27222__$1 = G__27289;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})());
cljs.core.reset_BANG_(shadow.cljs.bootstrap.env.index_ref,idx__$1);

return idx__$1;
});
shadow.cljs.bootstrap.env.get_ns_info = (function shadow$cljs$bootstrap$env$get_ns_info(ns){
var idx = cljs.core.deref(shadow.cljs.bootstrap.env.index_ref);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),ns], null));
var or__4185__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27260,p__27261){
var map__27262 = p__27260;
var map__27262__$1 = (((((!((map__27262 == null))))?(((((map__27262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27262):map__27262);
var x = map__27262__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27262__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27262__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__27263 = p__27261;
var map__27263__$1 = (((((!((map__27263 == null))))?(((((map__27263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27263):map__27263);
var src = map__27263__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});

//# sourceMappingURL=shadow.cljs.bootstrap.env.js.map
