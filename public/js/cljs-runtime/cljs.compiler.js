goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__29450 = s;
var map__29450__$1 = (((((!((map__29450 == null))))?(((((map__29450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29450):map__29450);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29450__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29454 = info;
var map__29455 = G__29454;
var map__29455__$1 = (((((!((map__29455 == null))))?(((((map__29455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29455):map__29455);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29455__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29454__$1 = G__29454;
while(true){
var d__$2 = d__$1;
var map__29471 = G__29454__$1;
var map__29471__$1 = (((((!((map__29471 == null))))?(((((map__29471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29471):map__29471);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29471__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__30322 = (d__$2 + (1));
var G__30323 = shadow__$2;
d__$1 = G__30322;
G__29454__$1 = G__30323;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29508){
var map__29509 = p__29508;
var map__29509__$1 = (((((!((map__29509 == null))))?(((((map__29509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29509):map__29509);
var name_var = map__29509__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29511 = info;
var map__29511__$1 = (((((!((map__29511 == null))))?(((((map__29511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29511):map__29511);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__29516 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__29516) : cljs.compiler.munge.call(null,G__29516));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__29518 = arguments.length;
switch (G__29518) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__29519 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11472),(11472),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__29519.cljs$core$IFn$_invoke$arity$1 ? fexpr__29519.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__29519.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__29520 = cp;
switch (G__29520) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__29521_30340 = cljs.core.seq(s);
var chunk__29522_30341 = null;
var count__29523_30342 = (0);
var i__29524_30343 = (0);
while(true){
if((i__29524_30343 < count__29523_30342)){
var c_30344 = chunk__29522_30341.cljs$core$IIndexed$_nth$arity$2(null,i__29524_30343);
sb.append(cljs.compiler.escape_char(c_30344));


var G__30345 = seq__29521_30340;
var G__30346 = chunk__29522_30341;
var G__30347 = count__29523_30342;
var G__30348 = (i__29524_30343 + (1));
seq__29521_30340 = G__30345;
chunk__29522_30341 = G__30346;
count__29523_30342 = G__30347;
i__29524_30343 = G__30348;
continue;
} else {
var temp__5735__auto___30349 = cljs.core.seq(seq__29521_30340);
if(temp__5735__auto___30349){
var seq__29521_30350__$1 = temp__5735__auto___30349;
if(cljs.core.chunked_seq_QMARK_(seq__29521_30350__$1)){
var c__4609__auto___30351 = cljs.core.chunk_first(seq__29521_30350__$1);
var G__30352 = cljs.core.chunk_rest(seq__29521_30350__$1);
var G__30353 = c__4609__auto___30351;
var G__30354 = cljs.core.count(c__4609__auto___30351);
var G__30355 = (0);
seq__29521_30340 = G__30352;
chunk__29522_30341 = G__30353;
count__29523_30342 = G__30354;
i__29524_30343 = G__30355;
continue;
} else {
var c_30356 = cljs.core.first(seq__29521_30350__$1);
sb.append(cljs.compiler.escape_char(c_30356));


var G__30357 = cljs.core.next(seq__29521_30350__$1);
var G__30358 = null;
var G__30359 = (0);
var G__30360 = (0);
seq__29521_30340 = G__30357;
chunk__29522_30341 = G__30358;
count__29523_30342 = G__30359;
i__29524_30343 = G__30360;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29525 = cljs.core.get_global_hierarchy;
return (fexpr__29525.cljs$core$IFn$_invoke$arity$0 ? fexpr__29525.cljs$core$IFn$_invoke$arity$0() : fexpr__29525.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29526_30361 = ast;
var map__29526_30362__$1 = (((((!((map__29526_30361 == null))))?(((((map__29526_30361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29526_30361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29526_30361):map__29526_30361);
var env_30363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29526_30362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_30363))){
var map__29528_30364 = env_30363;
var map__29528_30365__$1 = (((((!((map__29528_30364 == null))))?(((((map__29528_30364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29528_30364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29528_30364):map__29528_30364);
var line_30366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29528_30365__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29528_30365__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__29530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__29532 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__29531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__29531.cljs$core$IFn$_invoke$arity$1 ? fexpr__29531.cljs$core$IFn$_invoke$arity$1(G__29532) : fexpr__29531.call(null,G__29532));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29530,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29530;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_30366 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_30367)?(column_30367 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29541 = arguments.length;
switch (G__29541) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___30371 = arguments.length;
var i__4790__auto___30372 = (0);
while(true){
if((i__4790__auto___30372 < len__4789__auto___30371)){
args_arr__4810__auto__.push((arguments[i__4790__auto___30372]));

var G__30373 = (i__4790__auto___30372 + (1));
i__4790__auto___30372 = G__30373;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4811__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_30375 = (function (){var G__29545 = a;
if((!(typeof a === 'string'))){
return G__29545.toString();
} else {
return G__29545;
}
})();
var temp__5739__auto___30376 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___30376 == null)){
} else {
var sm_data_30377 = temp__5739__auto___30376;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_30377,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__29533_SHARP_){
return (p1__29533_SHARP_ + s_30375.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30375], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__29547 = cljs.core.seq(xs);
var chunk__29548 = null;
var count__29549 = (0);
var i__29550 = (0);
while(true){
if((i__29550 < count__29549)){
var x = chunk__29548.cljs$core$IIndexed$_nth$arity$2(null,i__29550);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__30378 = seq__29547;
var G__30379 = chunk__29548;
var G__30380 = count__29549;
var G__30381 = (i__29550 + (1));
seq__29547 = G__30378;
chunk__29548 = G__30379;
count__29549 = G__30380;
i__29550 = G__30381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29547);
if(temp__5735__auto__){
var seq__29547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29547__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29547__$1);
var G__30385 = cljs.core.chunk_rest(seq__29547__$1);
var G__30386 = c__4609__auto__;
var G__30387 = cljs.core.count(c__4609__auto__);
var G__30388 = (0);
seq__29547 = G__30385;
chunk__29548 = G__30386;
count__29549 = G__30387;
i__29550 = G__30388;
continue;
} else {
var x = cljs.core.first(seq__29547__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__30389 = cljs.core.next(seq__29547__$1);
var G__30390 = null;
var G__30391 = (0);
var G__30392 = (0);
seq__29547 = G__30389;
chunk__29548 = G__30390;
count__29549 = G__30391;
i__29550 = G__30392;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq29535){
var G__29536 = cljs.core.first(seq29535);
var seq29535__$1 = cljs.core.next(seq29535);
var G__29537 = cljs.core.first(seq29535__$1);
var seq29535__$2 = cljs.core.next(seq29535__$1);
var G__29538 = cljs.core.first(seq29535__$2);
var seq29535__$3 = cljs.core.next(seq29535__$2);
var G__29539 = cljs.core.first(seq29535__$3);
var seq29535__$4 = cljs.core.next(seq29535__$3);
var G__29540 = cljs.core.first(seq29535__$4);
var seq29535__$5 = cljs.core.next(seq29535__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29536,G__29537,G__29538,G__29539,G__29540,seq29535__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__29553){
var map__29554 = p__29553;
var map__29554__$1 = (((((!((map__29554 == null))))?(((((map__29554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29554):map__29554);
var m = map__29554__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29554__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29563 = arguments.length;
switch (G__29563) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___30397 = arguments.length;
var i__4790__auto___30398 = (0);
while(true){
if((i__4790__auto___30398 < len__4789__auto___30397)){
args_arr__4810__auto__.push((arguments[i__4790__auto___30398]));

var G__30399 = (i__4790__auto___30398 + (1));
i__4790__auto___30398 = G__30399;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4811__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__29577_30401 = cljs.core.seq(xs);
var chunk__29578_30402 = null;
var count__29579_30403 = (0);
var i__29580_30404 = (0);
while(true){
if((i__29580_30404 < count__29579_30403)){
var x_30405 = chunk__29578_30402.cljs$core$IIndexed$_nth$arity$2(null,i__29580_30404);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_30405);


var G__30406 = seq__29577_30401;
var G__30407 = chunk__29578_30402;
var G__30408 = count__29579_30403;
var G__30409 = (i__29580_30404 + (1));
seq__29577_30401 = G__30406;
chunk__29578_30402 = G__30407;
count__29579_30403 = G__30408;
i__29580_30404 = G__30409;
continue;
} else {
var temp__5735__auto___30410 = cljs.core.seq(seq__29577_30401);
if(temp__5735__auto___30410){
var seq__29577_30411__$1 = temp__5735__auto___30410;
if(cljs.core.chunked_seq_QMARK_(seq__29577_30411__$1)){
var c__4609__auto___30412 = cljs.core.chunk_first(seq__29577_30411__$1);
var G__30413 = cljs.core.chunk_rest(seq__29577_30411__$1);
var G__30414 = c__4609__auto___30412;
var G__30415 = cljs.core.count(c__4609__auto___30412);
var G__30416 = (0);
seq__29577_30401 = G__30413;
chunk__29578_30402 = G__30414;
count__29579_30403 = G__30415;
i__29580_30404 = G__30416;
continue;
} else {
var x_30417 = cljs.core.first(seq__29577_30411__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_30417);


var G__30418 = cljs.core.next(seq__29577_30411__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__29577_30401 = G__30418;
chunk__29578_30402 = G__30419;
count__29579_30403 = G__30420;
i__29580_30404 = G__30421;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29557){
var G__29558 = cljs.core.first(seq29557);
var seq29557__$1 = cljs.core.next(seq29557);
var G__29559 = cljs.core.first(seq29557__$1);
var seq29557__$2 = cljs.core.next(seq29557__$1);
var G__29560 = cljs.core.first(seq29557__$2);
var seq29557__$3 = cljs.core.next(seq29557__$2);
var G__29561 = cljs.core.first(seq29557__$3);
var seq29557__$4 = cljs.core.next(seq29557__$3);
var G__29562 = cljs.core.first(seq29557__$4);
var seq29557__$5 = cljs.core.next(seq29557__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29558,G__29559,G__29560,G__29561,G__29562,seq29557__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29583_30422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29584_30423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29585_30424 = true;
var _STAR_print_fn_STAR__temp_val__29586_30425 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29585_30424);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29586_30425);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29584_30423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29583_30422);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29587 = cljs.core.get_global_hierarchy;
return (fexpr__29587.cljs$core$IFn$_invoke$arity$0 ? fexpr__29587.cljs$core$IFn$_invoke$arity$0() : fexpr__29587.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__29589 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29589,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29589,(1),null);
var G__29592 = ns;
var G__29593 = name;
var G__29594 = (function (){
var G__29595 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__29595) : cljs.compiler.emit_constant.call(null,G__29595));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__29592,G__29593,G__29594) : cljs.compiler.emit_record_value.call(null,G__29592,G__29593,G__29594));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__29596 = cljs.core.keys(x);
var G__29597 = cljs.core.vals(x);
var G__29598 = cljs.compiler.emit_constants_comma_sep;
var G__29599 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__29596,G__29597,G__29598,G__29599) : cljs.compiler.emit_map.call(null,G__29596,G__29597,G__29598,G__29599));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__29602 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__29603 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__29602,G__29603) : cljs.compiler.emit_with_meta.call(null,G__29602,G__29603));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__29604 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29604,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29604,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29604,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4174__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4174__auto__)){
var G__29612 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29612) : x.call(null,G__29612));
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4174__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4174__auto__)){
var G__29613 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__29613) : x.call(null,G__29613));
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__29620 = items;
var G__29621 = (function (p1__29619_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__29619_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__29620,G__29621) : cljs.compiler.emit_js_object.call(null,G__29620,G__29621));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29623){
var map__29624 = p__29623;
var map__29624__$1 = (((((!((map__29624 == null))))?(((((map__29624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29624):map__29624);
var ast = map__29624__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29624__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29624__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29624__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29626 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__29626__$1 = (((((!((map__29626 == null))))?(((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29626):map__29626);
var cenv = map__29626__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29626__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4185__auto__ = js_module_name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__29628 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4174__auto__ = (function (){var G__29631 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__29631) : cljs.compiler.es5_GT__EQ_.call(null,G__29631));
})();
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4174__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__29628,cljs.analyzer.es5_allowed);
} else {
return G__29628;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4185__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__29632 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__29632,reserved);
} else {
return G__29632;
}
})();
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__29633_30458 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29633_30459__$1 = (((G__29633_30458 instanceof cljs.core.Keyword))?G__29633_30458.fqn:null);
switch (G__29633_30459__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4174__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29636){
var map__29637 = p__29636;
var map__29637__$1 = (((((!((map__29637 == null))))?(((((map__29637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29637):map__29637);
var arg = map__29637__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29637__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29637__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29637__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29637__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29642 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29642__$1 = (((((!((map__29642 == null))))?(((((map__29642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29642):map__29642);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29644){
var map__29645 = p__29644;
var map__29645__$1 = (((((!((map__29645 == null))))?(((((map__29645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29645):map__29645);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__29647_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29647_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__29654 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29654) : comma_sep.call(null,G__29654));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__29655 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29655) : comma_sep.call(null,G__29655));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29656){
var map__29657 = p__29656;
var map__29657__$1 = (((((!((map__29657 == null))))?(((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29657):map__29657);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29657__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29657__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29675){
var map__29676 = p__29675;
var map__29676__$1 = (((((!((map__29676 == null))))?(((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29676):map__29676);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29676__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__29678_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29678_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__29679 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29679) : comma_sep.call(null,G__29679));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29680){
var map__29681 = p__29680;
var map__29681__$1 = (((((!((map__29681 == null))))?(((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29681):map__29681);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29681__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29681__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___30486 = cljs.core.seq(items);
if(temp__5735__auto___30486){
var items_30487__$1 = temp__5735__auto___30486;
var vec__29683_30488 = items_30487__$1;
var seq__29684_30489 = cljs.core.seq(vec__29683_30488);
var first__29685_30490 = cljs.core.first(seq__29684_30489);
var seq__29684_30491__$1 = cljs.core.next(seq__29684_30489);
var vec__29686_30492 = first__29685_30490;
var k_30494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30492,(0),null);
var v_30495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30492,(1),null);
var r_30496 = seq__29684_30491__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_30494),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30495) : emit_js_object_val.call(null,v_30495)));

var seq__29689_30497 = cljs.core.seq(r_30496);
var chunk__29690_30498 = null;
var count__29691_30499 = (0);
var i__29692_30500 = (0);
while(true){
if((i__29692_30500 < count__29691_30499)){
var vec__29699_30501 = chunk__29690_30498.cljs$core$IIndexed$_nth$arity$2(null,i__29692_30500);
var k_30502__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699_30501,(0),null);
var v_30503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699_30501,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_30502__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30503__$1) : emit_js_object_val.call(null,v_30503__$1)));


var G__30504 = seq__29689_30497;
var G__30505 = chunk__29690_30498;
var G__30506 = count__29691_30499;
var G__30507 = (i__29692_30500 + (1));
seq__29689_30497 = G__30504;
chunk__29690_30498 = G__30505;
count__29691_30499 = G__30506;
i__29692_30500 = G__30507;
continue;
} else {
var temp__5735__auto___30509__$1 = cljs.core.seq(seq__29689_30497);
if(temp__5735__auto___30509__$1){
var seq__29689_30510__$1 = temp__5735__auto___30509__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29689_30510__$1)){
var c__4609__auto___30511 = cljs.core.chunk_first(seq__29689_30510__$1);
var G__30512 = cljs.core.chunk_rest(seq__29689_30510__$1);
var G__30513 = c__4609__auto___30511;
var G__30514 = cljs.core.count(c__4609__auto___30511);
var G__30515 = (0);
seq__29689_30497 = G__30512;
chunk__29690_30498 = G__30513;
count__29691_30499 = G__30514;
i__29692_30500 = G__30515;
continue;
} else {
var vec__29702_30516 = cljs.core.first(seq__29689_30510__$1);
var k_30517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702_30516,(0),null);
var v_30518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702_30516,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_30517__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30518__$1) : emit_js_object_val.call(null,v_30518__$1)));


var G__30519 = cljs.core.next(seq__29689_30510__$1);
var G__30520 = null;
var G__30521 = (0);
var G__30522 = (0);
seq__29689_30497 = G__30519;
chunk__29690_30498 = G__30520;
count__29691_30499 = G__30521;
i__29692_30500 = G__30522;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29705){
var map__29706 = p__29705;
var map__29706__$1 = (((((!((map__29706 == null))))?(((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29706):map__29706);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29706__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29706__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29709){
var map__29710 = p__29709;
var map__29710__$1 = (((((!((map__29710 == null))))?(((((map__29710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29710):map__29710);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29710__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29716){
var map__29717 = p__29716;
var map__29717__$1 = (((((!((map__29717 == null))))?(((((map__29717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29717):map__29717);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29717__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29719){
var map__29720 = p__29719;
var map__29720__$1 = (((((!((map__29720 == null))))?(((((map__29720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29720):map__29720);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29720__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29722 = cljs.analyzer.unwrap_quote(expr);
var map__29722__$1 = (((((!((map__29722 == null))))?(((((map__29722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29722):map__29722);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29722__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29722__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29722__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4185__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4174__auto__ = form;
if(cljs.core.truth_(and__4174__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4174__auto__;
}
})():false);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__29724 = cljs.analyzer.unwrap_quote(expr);
var map__29724__$1 = (((((!((map__29724 == null))))?(((((map__29724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29724):map__29724);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29724__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29724__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29724__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4185__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4185__auto__ = (function (){var fexpr__29727 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__29727.cljs$core$IFn$_invoke$arity$1 ? fexpr__29727.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__29727.call(null,tag));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29728){
var map__29729 = p__29728;
var map__29729__$1 = (((((!((map__29729 == null))))?(((((map__29729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29729):map__29729);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29729__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29729__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29729__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29729__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4185__auto__ = unchecked;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29731){
var map__29732 = p__29731;
var map__29732__$1 = (((((!((map__29732 == null))))?(((((map__29732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29732):map__29732);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29732__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__29734_30536 = cljs.core.seq(nodes);
var chunk__29735_30537 = null;
var count__29736_30538 = (0);
var i__29737_30539 = (0);
while(true){
if((i__29737_30539 < count__29736_30538)){
var map__29754_30540 = chunk__29735_30537.cljs$core$IIndexed$_nth$arity$2(null,i__29737_30539);
var map__29754_30541__$1 = (((((!((map__29754_30540 == null))))?(((((map__29754_30540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29754_30540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29754_30540):map__29754_30540);
var ts_30542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29754_30541__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29755_30543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29754_30541__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29755_30544__$1 = (((((!((map__29755_30543 == null))))?(((((map__29755_30543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29755_30543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29755_30543):map__29755_30543);
var then_30545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29755_30544__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29758_30548 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_30542));
var chunk__29759_30549 = null;
var count__29760_30550 = (0);
var i__29761_30551 = (0);
while(true){
if((i__29761_30551 < count__29760_30550)){
var test_30553 = chunk__29759_30549.cljs$core$IIndexed$_nth$arity$2(null,i__29761_30551);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30553,":");


var G__30554 = seq__29758_30548;
var G__30555 = chunk__29759_30549;
var G__30556 = count__29760_30550;
var G__30557 = (i__29761_30551 + (1));
seq__29758_30548 = G__30554;
chunk__29759_30549 = G__30555;
count__29760_30550 = G__30556;
i__29761_30551 = G__30557;
continue;
} else {
var temp__5735__auto___30558 = cljs.core.seq(seq__29758_30548);
if(temp__5735__auto___30558){
var seq__29758_30559__$1 = temp__5735__auto___30558;
if(cljs.core.chunked_seq_QMARK_(seq__29758_30559__$1)){
var c__4609__auto___30560 = cljs.core.chunk_first(seq__29758_30559__$1);
var G__30561 = cljs.core.chunk_rest(seq__29758_30559__$1);
var G__30562 = c__4609__auto___30560;
var G__30563 = cljs.core.count(c__4609__auto___30560);
var G__30564 = (0);
seq__29758_30548 = G__30561;
chunk__29759_30549 = G__30562;
count__29760_30550 = G__30563;
i__29761_30551 = G__30564;
continue;
} else {
var test_30565 = cljs.core.first(seq__29758_30559__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30565,":");


var G__30566 = cljs.core.next(seq__29758_30559__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__29758_30548 = G__30566;
chunk__29759_30549 = G__30567;
count__29760_30550 = G__30568;
i__29761_30551 = G__30569;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_30545);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_30545);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__30570 = seq__29734_30536;
var G__30571 = chunk__29735_30537;
var G__30572 = count__29736_30538;
var G__30573 = (i__29737_30539 + (1));
seq__29734_30536 = G__30570;
chunk__29735_30537 = G__30571;
count__29736_30538 = G__30572;
i__29737_30539 = G__30573;
continue;
} else {
var temp__5735__auto___30574 = cljs.core.seq(seq__29734_30536);
if(temp__5735__auto___30574){
var seq__29734_30575__$1 = temp__5735__auto___30574;
if(cljs.core.chunked_seq_QMARK_(seq__29734_30575__$1)){
var c__4609__auto___30576 = cljs.core.chunk_first(seq__29734_30575__$1);
var G__30578 = cljs.core.chunk_rest(seq__29734_30575__$1);
var G__30579 = c__4609__auto___30576;
var G__30580 = cljs.core.count(c__4609__auto___30576);
var G__30581 = (0);
seq__29734_30536 = G__30578;
chunk__29735_30537 = G__30579;
count__29736_30538 = G__30580;
i__29737_30539 = G__30581;
continue;
} else {
var map__29769_30582 = cljs.core.first(seq__29734_30575__$1);
var map__29769_30583__$1 = (((((!((map__29769_30582 == null))))?(((((map__29769_30582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29769_30582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29769_30582):map__29769_30582);
var ts_30584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29769_30583__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29770_30585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29769_30583__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29770_30586__$1 = (((((!((map__29770_30585 == null))))?(((((map__29770_30585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29770_30585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29770_30585):map__29770_30585);
var then_30587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770_30586__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29774_30590 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_30584));
var chunk__29775_30591 = null;
var count__29776_30592 = (0);
var i__29777_30593 = (0);
while(true){
if((i__29777_30593 < count__29776_30592)){
var test_30594 = chunk__29775_30591.cljs$core$IIndexed$_nth$arity$2(null,i__29777_30593);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30594,":");


var G__30595 = seq__29774_30590;
var G__30596 = chunk__29775_30591;
var G__30597 = count__29776_30592;
var G__30598 = (i__29777_30593 + (1));
seq__29774_30590 = G__30595;
chunk__29775_30591 = G__30596;
count__29776_30592 = G__30597;
i__29777_30593 = G__30598;
continue;
} else {
var temp__5735__auto___30599__$1 = cljs.core.seq(seq__29774_30590);
if(temp__5735__auto___30599__$1){
var seq__29774_30600__$1 = temp__5735__auto___30599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29774_30600__$1)){
var c__4609__auto___30601 = cljs.core.chunk_first(seq__29774_30600__$1);
var G__30602 = cljs.core.chunk_rest(seq__29774_30600__$1);
var G__30603 = c__4609__auto___30601;
var G__30604 = cljs.core.count(c__4609__auto___30601);
var G__30605 = (0);
seq__29774_30590 = G__30602;
chunk__29775_30591 = G__30603;
count__29776_30592 = G__30604;
i__29777_30593 = G__30605;
continue;
} else {
var test_30606 = cljs.core.first(seq__29774_30600__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30606,":");


var G__30607 = cljs.core.next(seq__29774_30600__$1);
var G__30608 = null;
var G__30609 = (0);
var G__30610 = (0);
seq__29774_30590 = G__30607;
chunk__29775_30591 = G__30608;
count__29776_30592 = G__30609;
i__29777_30593 = G__30610;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_30587);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_30587);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__30612 = cljs.core.next(seq__29734_30575__$1);
var G__30613 = null;
var G__30614 = (0);
var G__30615 = (0);
seq__29734_30536 = G__30612;
chunk__29735_30537 = G__30613;
count__29736_30538 = G__30614;
i__29737_30539 = G__30615;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29778){
var map__29779 = p__29778;
var map__29779__$1 = (((((!((map__29779 == null))))?(((((map__29779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29779):map__29779);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29784 = env;
var G__29785 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29784,G__29785) : cljs.compiler.resolve_type.call(null,G__29784,G__29785));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__29786 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__29781_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__29781_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__29781_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__29789 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29789,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29789;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29792 = env;
var G__29793 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29792,G__29793) : cljs.compiler.resolve_type.call(null,G__29792,G__29793));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29794_SHARP_){
return cljs.compiler.resolve_type(env,p1__29794_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__29796 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29797 = cljs.core.seq(vec__29796);
var first__29798 = cljs.core.first(seq__29797);
var seq__29797__$1 = cljs.core.next(seq__29797);
var p = first__29798;
var first__29798__$1 = cljs.core.first(seq__29797__$1);
var seq__29797__$2 = cljs.core.next(seq__29797__$1);
var ts = first__29798__$1;
var first__29798__$2 = cljs.core.first(seq__29797__$2);
var seq__29797__$3 = cljs.core.next(seq__29797__$2);
var n = first__29798__$2;
var xs = seq__29797__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4174__auto__ = ts;
if(cljs.core.truth_(and__4174__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4174__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__29799 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29800 = cljs.core.seq(vec__29799);
var first__29801 = cljs.core.first(seq__29800);
var seq__29800__$1 = cljs.core.next(seq__29800);
var p = first__29801;
var first__29801__$1 = cljs.core.first(seq__29800__$1);
var seq__29800__$2 = cljs.core.next(seq__29800__$1);
var ts = first__29801__$1;
var xs = seq__29800__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4174__auto__ = ts;
if(cljs.core.truth_(and__4174__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4174__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__29804 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__29803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__29803.cljs$core$IFn$_invoke$arity$1 ? fexpr__29803.cljs$core$IFn$_invoke$arity$1(G__29804) : fexpr__29803.call(null,G__29804));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__29807 = arguments.length;
switch (G__29807) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__29819 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29805_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__29805_SHARP_);
} else {
return p1__29805_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__29820 = cljs.core.seq(vec__29819);
var first__29821 = cljs.core.first(seq__29820);
var seq__29820__$1 = cljs.core.next(seq__29820);
var x = first__29821;
var ys = seq__29820__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__29822 = cljs.core.seq(ys);
var chunk__29823 = null;
var count__29824 = (0);
var i__29825 = (0);
while(true){
if((i__29825 < count__29824)){
var next_line = chunk__29823.cljs$core$IIndexed$_nth$arity$2(null,i__29825);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__30634 = seq__29822;
var G__30635 = chunk__29823;
var G__30636 = count__29824;
var G__30637 = (i__29825 + (1));
seq__29822 = G__30634;
chunk__29823 = G__30635;
count__29824 = G__30636;
i__29825 = G__30637;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29822);
if(temp__5735__auto__){
var seq__29822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29822__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29822__$1);
var G__30638 = cljs.core.chunk_rest(seq__29822__$1);
var G__30639 = c__4609__auto__;
var G__30640 = cljs.core.count(c__4609__auto__);
var G__30641 = (0);
seq__29822 = G__30638;
chunk__29823 = G__30639;
count__29824 = G__30640;
i__29825 = G__30641;
continue;
} else {
var next_line = cljs.core.first(seq__29822__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__30642 = cljs.core.next(seq__29822__$1);
var G__30643 = null;
var G__30644 = (0);
var G__30645 = (0);
seq__29822 = G__30642;
chunk__29823 = G__30643;
count__29824 = G__30644;
i__29825 = G__30645;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__29828_30646 = cljs.core.seq(docs__$2);
var chunk__29829_30647 = null;
var count__29830_30648 = (0);
var i__29831_30649 = (0);
while(true){
if((i__29831_30649 < count__29830_30648)){
var e_30650 = chunk__29829_30647.cljs$core$IIndexed$_nth$arity$2(null,i__29831_30649);
if(cljs.core.truth_(e_30650)){
print_comment_lines(e_30650);
} else {
}


var G__30651 = seq__29828_30646;
var G__30652 = chunk__29829_30647;
var G__30653 = count__29830_30648;
var G__30654 = (i__29831_30649 + (1));
seq__29828_30646 = G__30651;
chunk__29829_30647 = G__30652;
count__29830_30648 = G__30653;
i__29831_30649 = G__30654;
continue;
} else {
var temp__5735__auto___30655 = cljs.core.seq(seq__29828_30646);
if(temp__5735__auto___30655){
var seq__29828_30656__$1 = temp__5735__auto___30655;
if(cljs.core.chunked_seq_QMARK_(seq__29828_30656__$1)){
var c__4609__auto___30657 = cljs.core.chunk_first(seq__29828_30656__$1);
var G__30658 = cljs.core.chunk_rest(seq__29828_30656__$1);
var G__30659 = c__4609__auto___30657;
var G__30660 = cljs.core.count(c__4609__auto___30657);
var G__30661 = (0);
seq__29828_30646 = G__30658;
chunk__29829_30647 = G__30659;
count__29830_30648 = G__30660;
i__29831_30649 = G__30661;
continue;
} else {
var e_30670 = cljs.core.first(seq__29828_30656__$1);
if(cljs.core.truth_(e_30670)){
print_comment_lines(e_30670);
} else {
}


var G__30671 = cljs.core.next(seq__29828_30656__$1);
var G__30672 = null;
var G__30673 = (0);
var G__30674 = (0);
seq__29828_30646 = G__30671;
chunk__29829_30647 = G__30672;
count__29830_30648 = G__30673;
i__29831_30649 = G__30674;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4174__auto__ = cljs.core.some((function (p1__29833_SHARP_){
return goog.string.startsWith(p1__29833_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = opts;
if(cljs.core.truth_(and__4174__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29834){
var map__29835 = p__29834;
var map__29835__$1 = (((((!((map__29835 == null))))?(((((map__29835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29835):map__29835);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29835__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4185__auto__ = init;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4174__auto__)){
return test;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29837){
var map__29838 = p__29837;
var map__29838__$1 = (((((!((map__29838 == null))))?(((((map__29838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29838):map__29838);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__29840_30696 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__29841_30697 = null;
var count__29842_30698 = (0);
var i__29843_30699 = (0);
while(true){
if((i__29843_30699 < count__29842_30698)){
var vec__29850_30700 = chunk__29841_30697.cljs$core$IIndexed$_nth$arity$2(null,i__29843_30699);
var i_30701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850_30700,(0),null);
var param_30702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850_30700,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_30702);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__30703 = seq__29840_30696;
var G__30704 = chunk__29841_30697;
var G__30705 = count__29842_30698;
var G__30706 = (i__29843_30699 + (1));
seq__29840_30696 = G__30703;
chunk__29841_30697 = G__30704;
count__29842_30698 = G__30705;
i__29843_30699 = G__30706;
continue;
} else {
var temp__5735__auto___30707 = cljs.core.seq(seq__29840_30696);
if(temp__5735__auto___30707){
var seq__29840_30708__$1 = temp__5735__auto___30707;
if(cljs.core.chunked_seq_QMARK_(seq__29840_30708__$1)){
var c__4609__auto___30709 = cljs.core.chunk_first(seq__29840_30708__$1);
var G__30710 = cljs.core.chunk_rest(seq__29840_30708__$1);
var G__30711 = c__4609__auto___30709;
var G__30712 = cljs.core.count(c__4609__auto___30709);
var G__30713 = (0);
seq__29840_30696 = G__30710;
chunk__29841_30697 = G__30711;
count__29842_30698 = G__30712;
i__29843_30699 = G__30713;
continue;
} else {
var vec__29853_30714 = cljs.core.first(seq__29840_30708__$1);
var i_30715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853_30714,(0),null);
var param_30716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853_30714,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_30716);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__30717 = cljs.core.next(seq__29840_30708__$1);
var G__30718 = null;
var G__30719 = (0);
var G__30720 = (0);
seq__29840_30696 = G__30717;
chunk__29841_30697 = G__30718;
count__29842_30698 = G__30719;
i__29843_30699 = G__30720;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__29856_30721 = cljs.core.seq(params);
var chunk__29857_30722 = null;
var count__29858_30723 = (0);
var i__29859_30724 = (0);
while(true){
if((i__29859_30724 < count__29858_30723)){
var param_30727 = chunk__29857_30722.cljs$core$IIndexed$_nth$arity$2(null,i__29859_30724);
cljs.compiler.emit(param_30727);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30727,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30729 = seq__29856_30721;
var G__30730 = chunk__29857_30722;
var G__30731 = count__29858_30723;
var G__30732 = (i__29859_30724 + (1));
seq__29856_30721 = G__30729;
chunk__29857_30722 = G__30730;
count__29858_30723 = G__30731;
i__29859_30724 = G__30732;
continue;
} else {
var temp__5735__auto___30733 = cljs.core.seq(seq__29856_30721);
if(temp__5735__auto___30733){
var seq__29856_30734__$1 = temp__5735__auto___30733;
if(cljs.core.chunked_seq_QMARK_(seq__29856_30734__$1)){
var c__4609__auto___30735 = cljs.core.chunk_first(seq__29856_30734__$1);
var G__30736 = cljs.core.chunk_rest(seq__29856_30734__$1);
var G__30737 = c__4609__auto___30735;
var G__30738 = cljs.core.count(c__4609__auto___30735);
var G__30739 = (0);
seq__29856_30721 = G__30736;
chunk__29857_30722 = G__30737;
count__29858_30723 = G__30738;
i__29859_30724 = G__30739;
continue;
} else {
var param_30740 = cljs.core.first(seq__29856_30734__$1);
cljs.compiler.emit(param_30740);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30740,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30742 = cljs.core.next(seq__29856_30734__$1);
var G__30743 = null;
var G__30744 = (0);
var G__30745 = (0);
seq__29856_30721 = G__30742;
chunk__29857_30722 = G__30743;
count__29858_30723 = G__30744;
i__29859_30724 = G__30745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__29860_30750 = cljs.core.seq(params);
var chunk__29861_30751 = null;
var count__29862_30752 = (0);
var i__29863_30753 = (0);
while(true){
if((i__29863_30753 < count__29862_30752)){
var param_30755 = chunk__29861_30751.cljs$core$IIndexed$_nth$arity$2(null,i__29863_30753);
cljs.compiler.emit(param_30755);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30755,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30756 = seq__29860_30750;
var G__30757 = chunk__29861_30751;
var G__30758 = count__29862_30752;
var G__30759 = (i__29863_30753 + (1));
seq__29860_30750 = G__30756;
chunk__29861_30751 = G__30757;
count__29862_30752 = G__30758;
i__29863_30753 = G__30759;
continue;
} else {
var temp__5735__auto___30760 = cljs.core.seq(seq__29860_30750);
if(temp__5735__auto___30760){
var seq__29860_30761__$1 = temp__5735__auto___30760;
if(cljs.core.chunked_seq_QMARK_(seq__29860_30761__$1)){
var c__4609__auto___30762 = cljs.core.chunk_first(seq__29860_30761__$1);
var G__30763 = cljs.core.chunk_rest(seq__29860_30761__$1);
var G__30764 = c__4609__auto___30762;
var G__30765 = cljs.core.count(c__4609__auto___30762);
var G__30766 = (0);
seq__29860_30750 = G__30763;
chunk__29861_30751 = G__30764;
count__29862_30752 = G__30765;
i__29863_30753 = G__30766;
continue;
} else {
var param_30767 = cljs.core.first(seq__29860_30761__$1);
cljs.compiler.emit(param_30767);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30767,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30768 = cljs.core.next(seq__29860_30761__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__29860_30750 = G__30768;
chunk__29861_30751 = G__30769;
count__29862_30752 = G__30770;
i__29863_30753 = G__30771;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__29864 = cljs.core.seq(params);
var chunk__29865 = null;
var count__29866 = (0);
var i__29867 = (0);
while(true){
if((i__29867 < count__29866)){
var param = chunk__29865.cljs$core$IIndexed$_nth$arity$2(null,i__29867);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30772 = seq__29864;
var G__30773 = chunk__29865;
var G__30774 = count__29866;
var G__30775 = (i__29867 + (1));
seq__29864 = G__30772;
chunk__29865 = G__30773;
count__29866 = G__30774;
i__29867 = G__30775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29864);
if(temp__5735__auto__){
var seq__29864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29864__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29864__$1);
var G__30778 = cljs.core.chunk_rest(seq__29864__$1);
var G__30779 = c__4609__auto__;
var G__30780 = cljs.core.count(c__4609__auto__);
var G__30781 = (0);
seq__29864 = G__30778;
chunk__29865 = G__30779;
count__29866 = G__30780;
i__29867 = G__30781;
continue;
} else {
var param = cljs.core.first(seq__29864__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30782 = cljs.core.next(seq__29864__$1);
var G__30783 = null;
var G__30784 = (0);
var G__30785 = (0);
seq__29864 = G__30782;
chunk__29865 = G__30783;
count__29866 = G__30784;
i__29867 = G__30785;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29871){
var map__29872 = p__29871;
var map__29872__$1 = (((((!((map__29872 == null))))?(((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29872):map__29872);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29874){
var map__29875 = p__29874;
var map__29875__$1 = (((((!((map__29875 == null))))?(((((map__29875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29875):map__29875);
var f = map__29875__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_30794__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30795 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30794__$1);
var delegate_name_30796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30795),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_30796," = function (");

var seq__29877_30799 = cljs.core.seq(params);
var chunk__29878_30800 = null;
var count__29879_30801 = (0);
var i__29880_30802 = (0);
while(true){
if((i__29880_30802 < count__29879_30801)){
var param_30803 = chunk__29878_30800.cljs$core$IIndexed$_nth$arity$2(null,i__29880_30802);
cljs.compiler.emit(param_30803);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30803,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30804 = seq__29877_30799;
var G__30805 = chunk__29878_30800;
var G__30806 = count__29879_30801;
var G__30807 = (i__29880_30802 + (1));
seq__29877_30799 = G__30804;
chunk__29878_30800 = G__30805;
count__29879_30801 = G__30806;
i__29880_30802 = G__30807;
continue;
} else {
var temp__5735__auto___30808 = cljs.core.seq(seq__29877_30799);
if(temp__5735__auto___30808){
var seq__29877_30809__$1 = temp__5735__auto___30808;
if(cljs.core.chunked_seq_QMARK_(seq__29877_30809__$1)){
var c__4609__auto___30810 = cljs.core.chunk_first(seq__29877_30809__$1);
var G__30811 = cljs.core.chunk_rest(seq__29877_30809__$1);
var G__30812 = c__4609__auto___30810;
var G__30813 = cljs.core.count(c__4609__auto___30810);
var G__30814 = (0);
seq__29877_30799 = G__30811;
chunk__29878_30800 = G__30812;
count__29879_30801 = G__30813;
i__29880_30802 = G__30814;
continue;
} else {
var param_30816 = cljs.core.first(seq__29877_30809__$1);
cljs.compiler.emit(param_30816);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30816,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30818 = cljs.core.next(seq__29877_30809__$1);
var G__30819 = null;
var G__30820 = (0);
var G__30821 = (0);
seq__29877_30799 = G__30818;
chunk__29878_30800 = G__30819;
count__29879_30801 = G__30820;
i__29880_30802 = G__30821;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_30795," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_30827 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_30827,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_30796,".call(this,");

var seq__29881_30830 = cljs.core.seq(params);
var chunk__29882_30831 = null;
var count__29883_30832 = (0);
var i__29884_30833 = (0);
while(true){
if((i__29884_30833 < count__29883_30832)){
var param_30834 = chunk__29882_30831.cljs$core$IIndexed$_nth$arity$2(null,i__29884_30833);
cljs.compiler.emit(param_30834);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30834,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30839 = seq__29881_30830;
var G__30840 = chunk__29882_30831;
var G__30841 = count__29883_30832;
var G__30842 = (i__29884_30833 + (1));
seq__29881_30830 = G__30839;
chunk__29882_30831 = G__30840;
count__29883_30832 = G__30841;
i__29884_30833 = G__30842;
continue;
} else {
var temp__5735__auto___30843 = cljs.core.seq(seq__29881_30830);
if(temp__5735__auto___30843){
var seq__29881_30844__$1 = temp__5735__auto___30843;
if(cljs.core.chunked_seq_QMARK_(seq__29881_30844__$1)){
var c__4609__auto___30845 = cljs.core.chunk_first(seq__29881_30844__$1);
var G__30847 = cljs.core.chunk_rest(seq__29881_30844__$1);
var G__30848 = c__4609__auto___30845;
var G__30849 = cljs.core.count(c__4609__auto___30845);
var G__30850 = (0);
seq__29881_30830 = G__30847;
chunk__29882_30831 = G__30848;
count__29883_30832 = G__30849;
i__29884_30833 = G__30850;
continue;
} else {
var param_30852 = cljs.core.first(seq__29881_30844__$1);
cljs.compiler.emit(param_30852);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30852,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30854 = cljs.core.next(seq__29881_30844__$1);
var G__30855 = null;
var G__30856 = (0);
var G__30857 = (0);
seq__29881_30830 = G__30854;
chunk__29882_30831 = G__30855;
count__29883_30832 = G__30856;
i__29884_30833 = G__30857;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30795,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_30795,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_30794__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30795,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30796,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_30795,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29891){
var map__29892 = p__29891;
var map__29892__$1 = (((((!((map__29892 == null))))?(((((map__29892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29892):map__29892);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29892__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29888_SHARP_){
var and__4174__auto__ = p1__29888_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29888_SHARP_));
} else {
return and__4174__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4185__auto__ = in_loop;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_30861__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30862 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30861__$1);
var maxparams_30863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30864 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30862),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_30865 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__29889_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__29889_SHARP_)));
}),cljs.core.seq(mmap_30864));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_30862," = null;");

var seq__29898_30869 = cljs.core.seq(ms_30865);
var chunk__29899_30870 = null;
var count__29900_30871 = (0);
var i__29901_30872 = (0);
while(true){
if((i__29901_30872 < count__29900_30871)){
var vec__29908_30874 = chunk__29899_30870.cljs$core$IIndexed$_nth$arity$2(null,i__29901_30872);
var n_30875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29908_30874,(0),null);
var meth_30876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29908_30874,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_30875," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30876))){
cljs.compiler.emit_variadic_fn_method(meth_30876);
} else {
cljs.compiler.emit_fn_method(meth_30876);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__30878 = seq__29898_30869;
var G__30879 = chunk__29899_30870;
var G__30880 = count__29900_30871;
var G__30881 = (i__29901_30872 + (1));
seq__29898_30869 = G__30878;
chunk__29899_30870 = G__30879;
count__29900_30871 = G__30880;
i__29901_30872 = G__30881;
continue;
} else {
var temp__5735__auto___30882 = cljs.core.seq(seq__29898_30869);
if(temp__5735__auto___30882){
var seq__29898_30887__$1 = temp__5735__auto___30882;
if(cljs.core.chunked_seq_QMARK_(seq__29898_30887__$1)){
var c__4609__auto___30888 = cljs.core.chunk_first(seq__29898_30887__$1);
var G__30889 = cljs.core.chunk_rest(seq__29898_30887__$1);
var G__30890 = c__4609__auto___30888;
var G__30891 = cljs.core.count(c__4609__auto___30888);
var G__30892 = (0);
seq__29898_30869 = G__30889;
chunk__29899_30870 = G__30890;
count__29900_30871 = G__30891;
i__29901_30872 = G__30892;
continue;
} else {
var vec__29911_30893 = cljs.core.first(seq__29898_30887__$1);
var n_30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911_30893,(0),null);
var meth_30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911_30893,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_30894," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30895))){
cljs.compiler.emit_variadic_fn_method(meth_30895);
} else {
cljs.compiler.emit_fn_method(meth_30895);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__30902 = cljs.core.next(seq__29898_30887__$1);
var G__30903 = null;
var G__30904 = (0);
var G__30905 = (0);
seq__29898_30869 = G__30902;
chunk__29899_30870 = G__30903;
count__29900_30871 = G__30904;
i__29901_30872 = G__30905;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30862," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_30863),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30863)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_30863));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__29914_30908 = cljs.core.seq(ms_30865);
var chunk__29915_30909 = null;
var count__29916_30910 = (0);
var i__29917_30911 = (0);
while(true){
if((i__29917_30911 < count__29916_30910)){
var vec__29924_30913 = chunk__29915_30909.cljs$core$IIndexed$_nth$arity$2(null,i__29917_30911);
var n_30914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924_30913,(0),null);
var meth_30915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924_30913,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30915))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_30916 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_30916," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_30918 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_30916," = new cljs.core.IndexedSeq(",a_30918,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_30914,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30863)),(((cljs.core.count(maxparams_30863) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30916,");"], 0));
} else {
var pcnt_30921 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30915));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_30921,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_30914,".call(this",(((pcnt_30921 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30921,maxparams_30863)),null,(1),null)),(2),null))),");");
}


var G__30922 = seq__29914_30908;
var G__30923 = chunk__29915_30909;
var G__30924 = count__29916_30910;
var G__30925 = (i__29917_30911 + (1));
seq__29914_30908 = G__30922;
chunk__29915_30909 = G__30923;
count__29916_30910 = G__30924;
i__29917_30911 = G__30925;
continue;
} else {
var temp__5735__auto___30926 = cljs.core.seq(seq__29914_30908);
if(temp__5735__auto___30926){
var seq__29914_30927__$1 = temp__5735__auto___30926;
if(cljs.core.chunked_seq_QMARK_(seq__29914_30927__$1)){
var c__4609__auto___30928 = cljs.core.chunk_first(seq__29914_30927__$1);
var G__30929 = cljs.core.chunk_rest(seq__29914_30927__$1);
var G__30930 = c__4609__auto___30928;
var G__30931 = cljs.core.count(c__4609__auto___30928);
var G__30932 = (0);
seq__29914_30908 = G__30929;
chunk__29915_30909 = G__30930;
count__29916_30910 = G__30931;
i__29917_30911 = G__30932;
continue;
} else {
var vec__29928_30933 = cljs.core.first(seq__29914_30927__$1);
var n_30934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29928_30933,(0),null);
var meth_30935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29928_30933,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30935))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_30936 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_30936," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_30937 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_30936," = new cljs.core.IndexedSeq(",a_30937,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_30934,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30863)),(((cljs.core.count(maxparams_30863) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30936,");"], 0));
} else {
var pcnt_30938 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30935));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_30938,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_30934,".call(this",(((pcnt_30938 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30938,maxparams_30863)),null,(1),null)),(2),null))),");");
}


var G__30940 = cljs.core.next(seq__29914_30927__$1);
var G__30941 = null;
var G__30942 = (0);
var G__30943 = (0);
seq__29914_30908 = G__30940;
chunk__29915_30909 = G__30941;
count__29916_30910 = G__30942;
i__29917_30911 = G__30943;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_30944 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_30865)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_30944,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30862,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30862,".cljs$lang$applyTo = ",cljs.core.some((function (p1__29890_SHARP_){
var vec__29935 = p1__29890_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29935,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29935,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_30865),".cljs$lang$applyTo;");
} else {
}

var seq__29938_30945 = cljs.core.seq(ms_30865);
var chunk__29939_30946 = null;
var count__29940_30947 = (0);
var i__29941_30948 = (0);
while(true){
if((i__29941_30948 < count__29940_30947)){
var vec__29948_30950 = chunk__29939_30946.cljs$core$IIndexed$_nth$arity$2(null,i__29941_30948);
var n_30951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29948_30950,(0),null);
var meth_30952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29948_30950,(1),null);
var c_30956 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30952));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30952))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30862,".cljs$core$IFn$_invoke$arity$variadic = ",n_30951,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_30862,".cljs$core$IFn$_invoke$arity$",c_30956," = ",n_30951,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__30957 = seq__29938_30945;
var G__30958 = chunk__29939_30946;
var G__30959 = count__29940_30947;
var G__30960 = (i__29941_30948 + (1));
seq__29938_30945 = G__30957;
chunk__29939_30946 = G__30958;
count__29940_30947 = G__30959;
i__29941_30948 = G__30960;
continue;
} else {
var temp__5735__auto___30965 = cljs.core.seq(seq__29938_30945);
if(temp__5735__auto___30965){
var seq__29938_30966__$1 = temp__5735__auto___30965;
if(cljs.core.chunked_seq_QMARK_(seq__29938_30966__$1)){
var c__4609__auto___30967 = cljs.core.chunk_first(seq__29938_30966__$1);
var G__30968 = cljs.core.chunk_rest(seq__29938_30966__$1);
var G__30969 = c__4609__auto___30967;
var G__30970 = cljs.core.count(c__4609__auto___30967);
var G__30971 = (0);
seq__29938_30945 = G__30968;
chunk__29939_30946 = G__30969;
count__29940_30947 = G__30970;
i__29941_30948 = G__30971;
continue;
} else {
var vec__29952_30972 = cljs.core.first(seq__29938_30966__$1);
var n_30973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952_30972,(0),null);
var meth_30974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952_30972,(1),null);
var c_30975 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30974));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30974))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30862,".cljs$core$IFn$_invoke$arity$variadic = ",n_30973,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_30862,".cljs$core$IFn$_invoke$arity$",c_30975," = ",n_30973,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__30976 = cljs.core.next(seq__29938_30966__$1);
var G__30977 = null;
var G__30978 = (0);
var G__30979 = (0);
seq__29938_30945 = G__30976;
chunk__29939_30946 = G__30977;
count__29940_30947 = G__30978;
i__29941_30948 = G__30979;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_30862,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29955){
var map__29956 = p__29955;
var map__29956__$1 = (((((!((map__29956 == null))))?(((((map__29956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29956):map__29956);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29956__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29956__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__29958_30984 = cljs.core.seq(statements);
var chunk__29959_30985 = null;
var count__29960_30986 = (0);
var i__29961_30987 = (0);
while(true){
if((i__29961_30987 < count__29960_30986)){
var s_30988 = chunk__29959_30985.cljs$core$IIndexed$_nth$arity$2(null,i__29961_30987);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_30988);


var G__30989 = seq__29958_30984;
var G__30990 = chunk__29959_30985;
var G__30991 = count__29960_30986;
var G__30992 = (i__29961_30987 + (1));
seq__29958_30984 = G__30989;
chunk__29959_30985 = G__30990;
count__29960_30986 = G__30991;
i__29961_30987 = G__30992;
continue;
} else {
var temp__5735__auto___30993 = cljs.core.seq(seq__29958_30984);
if(temp__5735__auto___30993){
var seq__29958_30994__$1 = temp__5735__auto___30993;
if(cljs.core.chunked_seq_QMARK_(seq__29958_30994__$1)){
var c__4609__auto___30995 = cljs.core.chunk_first(seq__29958_30994__$1);
var G__30996 = cljs.core.chunk_rest(seq__29958_30994__$1);
var G__30997 = c__4609__auto___30995;
var G__30998 = cljs.core.count(c__4609__auto___30995);
var G__30999 = (0);
seq__29958_30984 = G__30996;
chunk__29959_30985 = G__30997;
count__29960_30986 = G__30998;
i__29961_30987 = G__30999;
continue;
} else {
var s_31000 = cljs.core.first(seq__29958_30994__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_31000);


var G__31005 = cljs.core.next(seq__29958_30994__$1);
var G__31006 = null;
var G__31007 = (0);
var G__31008 = (0);
seq__29958_30984 = G__31005;
chunk__29959_30985 = G__31006;
count__29960_30986 = G__31007;
i__29961_30987 = G__31008;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29976){
var map__29977 = p__29976;
var map__29977__$1 = (((((!((map__29977 == null))))?(((((map__29977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29977):map__29977);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29979,is_loop){
var map__29980 = p__29979;
var map__29980__$1 = (((((!((map__29980 == null))))?(((((map__29980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29980):map__29980);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29980__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29980__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29980__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__29982_31013 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__29983_31014 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__29983_31014);

try{var seq__29992_31015 = cljs.core.seq(bindings);
var chunk__29993_31016 = null;
var count__29994_31017 = (0);
var i__29995_31018 = (0);
while(true){
if((i__29995_31018 < count__29994_31017)){
var map__30018_31019 = chunk__29993_31016.cljs$core$IIndexed$_nth$arity$2(null,i__29995_31018);
var map__30018_31020__$1 = (((((!((map__30018_31019 == null))))?(((((map__30018_31019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30018_31019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30018_31019):map__30018_31019);
var binding_31021 = map__30018_31020__$1;
var init_31022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30018_31020__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_31021);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_31022,";");


var G__31025 = seq__29992_31015;
var G__31026 = chunk__29993_31016;
var G__31027 = count__29994_31017;
var G__31028 = (i__29995_31018 + (1));
seq__29992_31015 = G__31025;
chunk__29993_31016 = G__31026;
count__29994_31017 = G__31027;
i__29995_31018 = G__31028;
continue;
} else {
var temp__5735__auto___31033 = cljs.core.seq(seq__29992_31015);
if(temp__5735__auto___31033){
var seq__29992_31034__$1 = temp__5735__auto___31033;
if(cljs.core.chunked_seq_QMARK_(seq__29992_31034__$1)){
var c__4609__auto___31035 = cljs.core.chunk_first(seq__29992_31034__$1);
var G__31036 = cljs.core.chunk_rest(seq__29992_31034__$1);
var G__31037 = c__4609__auto___31035;
var G__31038 = cljs.core.count(c__4609__auto___31035);
var G__31039 = (0);
seq__29992_31015 = G__31036;
chunk__29993_31016 = G__31037;
count__29994_31017 = G__31038;
i__29995_31018 = G__31039;
continue;
} else {
var map__30032_31041 = cljs.core.first(seq__29992_31034__$1);
var map__30032_31042__$1 = (((((!((map__30032_31041 == null))))?(((((map__30032_31041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30032_31041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30032_31041):map__30032_31041);
var binding_31043 = map__30032_31042__$1;
var init_31044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032_31042__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_31043);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_31044,";");


var G__31046 = cljs.core.next(seq__29992_31034__$1);
var G__31047 = null;
var G__31048 = (0);
var G__31049 = (0);
seq__29992_31015 = G__31046;
chunk__29993_31016 = G__31047;
count__29994_31017 = G__31048;
i__29995_31018 = G__31049;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__29982_31013);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30034){
var map__30035 = p__30034;
var map__30035__$1 = (((((!((map__30035 == null))))?(((((map__30035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30035):map__30035);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30035__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30035__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4666__auto___31056 = cljs.core.count(exprs);
var i_31057 = (0);
while(true){
if((i_31057 < n__4666__auto___31056)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_31057) : temps.call(null,i_31057))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_31057) : exprs.call(null,i_31057)),";");

var G__31058 = (i_31057 + (1));
i_31057 = G__31058;
continue;
} else {
}
break;
}

var n__4666__auto___31063 = cljs.core.count(exprs);
var i_31064 = (0);
while(true){
if((i_31064 < n__4666__auto___31063)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_31064) : params.call(null,i_31064)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_31064) : temps.call(null,i_31064)),";");

var G__31065 = (i_31064 + (1));
i_31064 = G__31065;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30037){
var map__30038 = p__30037;
var map__30038__$1 = (((((!((map__30038 == null))))?(((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30038):map__30038);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__30040_31068 = cljs.core.seq(bindings);
var chunk__30041_31069 = null;
var count__30042_31070 = (0);
var i__30043_31071 = (0);
while(true){
if((i__30043_31071 < count__30042_31070)){
var map__30051_31072 = chunk__30041_31069.cljs$core$IIndexed$_nth$arity$2(null,i__30043_31071);
var map__30051_31073__$1 = (((((!((map__30051_31072 == null))))?(((((map__30051_31072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30051_31072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30051_31072):map__30051_31072);
var binding_31074 = map__30051_31073__$1;
var init_31075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30051_31073__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_31074)," = ",init_31075,";");


var G__31080 = seq__30040_31068;
var G__31081 = chunk__30041_31069;
var G__31082 = count__30042_31070;
var G__31083 = (i__30043_31071 + (1));
seq__30040_31068 = G__31080;
chunk__30041_31069 = G__31081;
count__30042_31070 = G__31082;
i__30043_31071 = G__31083;
continue;
} else {
var temp__5735__auto___31084 = cljs.core.seq(seq__30040_31068);
if(temp__5735__auto___31084){
var seq__30040_31085__$1 = temp__5735__auto___31084;
if(cljs.core.chunked_seq_QMARK_(seq__30040_31085__$1)){
var c__4609__auto___31086 = cljs.core.chunk_first(seq__30040_31085__$1);
var G__31087 = cljs.core.chunk_rest(seq__30040_31085__$1);
var G__31088 = c__4609__auto___31086;
var G__31089 = cljs.core.count(c__4609__auto___31086);
var G__31090 = (0);
seq__30040_31068 = G__31087;
chunk__30041_31069 = G__31088;
count__30042_31070 = G__31089;
i__30043_31071 = G__31090;
continue;
} else {
var map__30062_31091 = cljs.core.first(seq__30040_31085__$1);
var map__30062_31092__$1 = (((((!((map__30062_31091 == null))))?(((((map__30062_31091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30062_31091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30062_31091):map__30062_31091);
var binding_31093 = map__30062_31092__$1;
var init_31094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30062_31092__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_31093)," = ",init_31094,";");


var G__31097 = cljs.core.next(seq__30040_31085__$1);
var G__31098 = null;
var G__31099 = (0);
var G__31100 = (0);
seq__30040_31068 = G__31097;
chunk__30041_31069 = G__31098;
count__30042_31070 = G__31099;
i__30043_31071 = G__31100;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30083){
var map__30084 = p__30083;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30084):map__30084);
var expr = map__30084__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4174__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4174__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4174__auto__ = protocol;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = tag;
if(cljs.core.truth_(and__4174__auto____$1)){
var or__4185__auto__ = (function (){var and__4174__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4174__auto____$2)){
var and__4174__auto____$3 = protocol;
if(cljs.core.truth_(and__4174__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4174__auto____$3;
}
} else {
return and__4174__auto____$2;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto____$2 = (function (){var or__4185__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4174__auto____$2)){
var or__4185__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__30119 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__30119.cljs$core$IFn$_invoke$arity$1 ? fexpr__30119.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30119.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4174__auto____$2;
}
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__30125 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__30125.cljs$core$IFn$_invoke$arity$1 ? fexpr__30125.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__30125.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__30086 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (arity > mfa);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__30073_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30073_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__30074_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30074_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(1),null);
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_31137 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_31137,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_31139 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_31139,args)),(((mfa_31139 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_31139,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4174__auto__)){
var G__30129 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__30128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__30128.cljs$core$IFn$_invoke$arity$1 ? fexpr__30128.cljs$core$IFn$_invoke$arity$1(G__30129) : fexpr__30128.call(null,G__30129));
} else {
return and__4174__auto__;
}
})())){
var fprop_31141 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_31141," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_31141,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_31141," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_31141,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30138){
var map__30139 = p__30138;
var map__30139__$1 = (((((!((map__30139 == null))))?(((((map__30139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30139):map__30139);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30139__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30139__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30139__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30145){
var map__30146 = p__30145;
var map__30146__$1 = (((((!((map__30146 == null))))?(((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30146):map__30146);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__30150 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30150__$1 = (((((!((map__30150 == null))))?(((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30150):map__30150);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30151 = options;
var map__30151__$1 = (((((!((map__30151 == null))))?(((((map__30151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30151):map__30151);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30151__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30151__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30152 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30157 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30157__$1 = (((((!((map__30157 == null))))?(((((map__30157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30157):map__30157);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30157__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30157__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30159_31165 = cljs.core.seq(libs_to_load);
var chunk__30160_31166 = null;
var count__30161_31167 = (0);
var i__30162_31168 = (0);
while(true){
if((i__30162_31168 < count__30161_31167)){
var lib_31169 = chunk__30160_31166.cljs$core$IIndexed$_nth$arity$2(null,i__30162_31168);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_31169)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31169),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31169),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31169),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31169),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_31169,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31169),"');");
}

}
}
}


var G__31170 = seq__30159_31165;
var G__31171 = chunk__30160_31166;
var G__31172 = count__30161_31167;
var G__31173 = (i__30162_31168 + (1));
seq__30159_31165 = G__31170;
chunk__30160_31166 = G__31171;
count__30161_31167 = G__31172;
i__30162_31168 = G__31173;
continue;
} else {
var temp__5735__auto___31174 = cljs.core.seq(seq__30159_31165);
if(temp__5735__auto___31174){
var seq__30159_31175__$1 = temp__5735__auto___31174;
if(cljs.core.chunked_seq_QMARK_(seq__30159_31175__$1)){
var c__4609__auto___31177 = cljs.core.chunk_first(seq__30159_31175__$1);
var G__31178 = cljs.core.chunk_rest(seq__30159_31175__$1);
var G__31179 = c__4609__auto___31177;
var G__31180 = cljs.core.count(c__4609__auto___31177);
var G__31181 = (0);
seq__30159_31165 = G__31178;
chunk__30160_31166 = G__31179;
count__30161_31167 = G__31180;
i__30162_31168 = G__31181;
continue;
} else {
var lib_31182 = cljs.core.first(seq__30159_31175__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_31182)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31182),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31182),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_31182),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31182),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_31182,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_31182),"');");
}

}
}
}


var G__31188 = cljs.core.next(seq__30159_31175__$1);
var G__31189 = null;
var G__31190 = (0);
var G__31191 = (0);
seq__30159_31165 = G__31188;
chunk__30160_31166 = G__31189;
count__30161_31167 = G__31190;
i__30162_31168 = G__31191;
continue;
}
} else {
}
}
break;
}

var seq__30173_31193 = cljs.core.seq(node_libs);
var chunk__30174_31194 = null;
var count__30175_31195 = (0);
var i__30176_31196 = (0);
while(true){
if((i__30176_31196 < count__30175_31195)){
var lib_31197 = chunk__30174_31194.cljs$core$IIndexed$_nth$arity$2(null,i__30176_31196);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_31197)," = require('",lib_31197,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__31200 = seq__30173_31193;
var G__31201 = chunk__30174_31194;
var G__31202 = count__30175_31195;
var G__31203 = (i__30176_31196 + (1));
seq__30173_31193 = G__31200;
chunk__30174_31194 = G__31201;
count__30175_31195 = G__31202;
i__30176_31196 = G__31203;
continue;
} else {
var temp__5735__auto___31204 = cljs.core.seq(seq__30173_31193);
if(temp__5735__auto___31204){
var seq__30173_31205__$1 = temp__5735__auto___31204;
if(cljs.core.chunked_seq_QMARK_(seq__30173_31205__$1)){
var c__4609__auto___31206 = cljs.core.chunk_first(seq__30173_31205__$1);
var G__31207 = cljs.core.chunk_rest(seq__30173_31205__$1);
var G__31208 = c__4609__auto___31206;
var G__31209 = cljs.core.count(c__4609__auto___31206);
var G__31210 = (0);
seq__30173_31193 = G__31207;
chunk__30174_31194 = G__31208;
count__30175_31195 = G__31209;
i__30176_31196 = G__31210;
continue;
} else {
var lib_31211 = cljs.core.first(seq__30173_31205__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_31211)," = require('",lib_31211,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__31216 = cljs.core.next(seq__30173_31205__$1);
var G__31217 = null;
var G__31218 = (0);
var G__31219 = (0);
seq__30173_31193 = G__31216;
chunk__30174_31194 = G__31217;
count__30175_31195 = G__31218;
i__30176_31196 = G__31219;
continue;
}
} else {
}
}
break;
}

var seq__30191_31220 = cljs.core.seq(global_exports_libs);
var chunk__30192_31221 = null;
var count__30193_31222 = (0);
var i__30194_31223 = (0);
while(true){
if((i__30194_31223 < count__30193_31222)){
var lib_31224 = chunk__30192_31221.cljs$core$IIndexed$_nth$arity$2(null,i__30194_31223);
var map__30199_31225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_31224));
var map__30199_31226__$1 = (((((!((map__30199_31225 == null))))?(((((map__30199_31225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30199_31225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30199_31225):map__30199_31225);
var global_exports_31227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199_31226__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_31227,lib_31224);


var G__31229 = seq__30191_31220;
var G__31230 = chunk__30192_31221;
var G__31231 = count__30193_31222;
var G__31232 = (i__30194_31223 + (1));
seq__30191_31220 = G__31229;
chunk__30192_31221 = G__31230;
count__30193_31222 = G__31231;
i__30194_31223 = G__31232;
continue;
} else {
var temp__5735__auto___31233 = cljs.core.seq(seq__30191_31220);
if(temp__5735__auto___31233){
var seq__30191_31238__$1 = temp__5735__auto___31233;
if(cljs.core.chunked_seq_QMARK_(seq__30191_31238__$1)){
var c__4609__auto___31239 = cljs.core.chunk_first(seq__30191_31238__$1);
var G__31240 = cljs.core.chunk_rest(seq__30191_31238__$1);
var G__31241 = c__4609__auto___31239;
var G__31242 = cljs.core.count(c__4609__auto___31239);
var G__31243 = (0);
seq__30191_31220 = G__31240;
chunk__30192_31221 = G__31241;
count__30193_31222 = G__31242;
i__30194_31223 = G__31243;
continue;
} else {
var lib_31244 = cljs.core.first(seq__30191_31238__$1);
var map__30201_31245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_31244));
var map__30201_31246__$1 = (((((!((map__30201_31245 == null))))?(((((map__30201_31245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30201_31245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30201_31245):map__30201_31245);
var global_exports_31247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201_31246__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_31247,lib_31244);


var G__31249 = cljs.core.next(seq__30191_31238__$1);
var G__31250 = null;
var G__31251 = (0);
var G__31252 = (0);
seq__30191_31220 = G__31249;
chunk__30192_31221 = G__31250;
count__30193_31222 = G__31251;
i__30194_31223 = G__31252;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30205){
var map__30206 = p__30205;
var map__30206__$1 = (((((!((map__30206 == null))))?(((((map__30206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30206):map__30206);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30208){
var map__30209 = p__30208;
var map__30209__$1 = (((((!((map__30209 == null))))?(((((map__30209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30209):map__30209);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30209__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30211){
var map__30212 = p__30211;
var map__30212__$1 = (((((!((map__30212 == null))))?(((((map__30212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30212):map__30212);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30212__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__30214_31255 = cljs.core.seq(protocols);
var chunk__30215_31256 = null;
var count__30216_31257 = (0);
var i__30217_31258 = (0);
while(true){
if((i__30217_31258 < count__30216_31257)){
var protocol_31259 = chunk__30215_31256.cljs$core$IIndexed$_nth$arity$2(null,i__30217_31258);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31259)),"}");


var G__31262 = seq__30214_31255;
var G__31263 = chunk__30215_31256;
var G__31264 = count__30216_31257;
var G__31265 = (i__30217_31258 + (1));
seq__30214_31255 = G__31262;
chunk__30215_31256 = G__31263;
count__30216_31257 = G__31264;
i__30217_31258 = G__31265;
continue;
} else {
var temp__5735__auto___31266 = cljs.core.seq(seq__30214_31255);
if(temp__5735__auto___31266){
var seq__30214_31268__$1 = temp__5735__auto___31266;
if(cljs.core.chunked_seq_QMARK_(seq__30214_31268__$1)){
var c__4609__auto___31269 = cljs.core.chunk_first(seq__30214_31268__$1);
var G__31270 = cljs.core.chunk_rest(seq__30214_31268__$1);
var G__31271 = c__4609__auto___31269;
var G__31272 = cljs.core.count(c__4609__auto___31269);
var G__31273 = (0);
seq__30214_31255 = G__31270;
chunk__30215_31256 = G__31271;
count__30216_31257 = G__31272;
i__30217_31258 = G__31273;
continue;
} else {
var protocol_31274 = cljs.core.first(seq__30214_31268__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31274)),"}");


var G__31275 = cljs.core.next(seq__30214_31268__$1);
var G__31276 = null;
var G__31277 = (0);
var G__31278 = (0);
seq__30214_31255 = G__31275;
chunk__30215_31256 = G__31276;
count__30216_31257 = G__31277;
i__30217_31258 = G__31278;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__30218_31301 = cljs.core.seq(fields__$1);
var chunk__30219_31302 = null;
var count__30220_31303 = (0);
var i__30221_31304 = (0);
while(true){
if((i__30221_31304 < count__30220_31303)){
var fld_31305 = chunk__30219_31302.cljs$core$IIndexed$_nth$arity$2(null,i__30221_31304);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31305," = ",fld_31305,";");


var G__31306 = seq__30218_31301;
var G__31307 = chunk__30219_31302;
var G__31308 = count__30220_31303;
var G__31309 = (i__30221_31304 + (1));
seq__30218_31301 = G__31306;
chunk__30219_31302 = G__31307;
count__30220_31303 = G__31308;
i__30221_31304 = G__31309;
continue;
} else {
var temp__5735__auto___31310 = cljs.core.seq(seq__30218_31301);
if(temp__5735__auto___31310){
var seq__30218_31311__$1 = temp__5735__auto___31310;
if(cljs.core.chunked_seq_QMARK_(seq__30218_31311__$1)){
var c__4609__auto___31312 = cljs.core.chunk_first(seq__30218_31311__$1);
var G__31313 = cljs.core.chunk_rest(seq__30218_31311__$1);
var G__31314 = c__4609__auto___31312;
var G__31315 = cljs.core.count(c__4609__auto___31312);
var G__31316 = (0);
seq__30218_31301 = G__31313;
chunk__30219_31302 = G__31314;
count__30220_31303 = G__31315;
i__30221_31304 = G__31316;
continue;
} else {
var fld_31317 = cljs.core.first(seq__30218_31311__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31317," = ",fld_31317,";");


var G__31318 = cljs.core.next(seq__30218_31311__$1);
var G__31319 = null;
var G__31320 = (0);
var G__31321 = (0);
seq__30218_31301 = G__31318;
chunk__30219_31302 = G__31319;
count__30220_31303 = G__31320;
i__30221_31304 = G__31321;
continue;
}
} else {
}
}
break;
}

var seq__30222_31323 = cljs.core.seq(pmasks);
var chunk__30223_31324 = null;
var count__30224_31325 = (0);
var i__30225_31326 = (0);
while(true){
if((i__30225_31326 < count__30224_31325)){
var vec__30232_31327 = chunk__30223_31324.cljs$core$IIndexed$_nth$arity$2(null,i__30225_31326);
var pno_31328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232_31327,(0),null);
var pmask_31329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232_31327,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31328,"$ = ",pmask_31329,";");


var G__31330 = seq__30222_31323;
var G__31331 = chunk__30223_31324;
var G__31332 = count__30224_31325;
var G__31333 = (i__30225_31326 + (1));
seq__30222_31323 = G__31330;
chunk__30223_31324 = G__31331;
count__30224_31325 = G__31332;
i__30225_31326 = G__31333;
continue;
} else {
var temp__5735__auto___31334 = cljs.core.seq(seq__30222_31323);
if(temp__5735__auto___31334){
var seq__30222_31335__$1 = temp__5735__auto___31334;
if(cljs.core.chunked_seq_QMARK_(seq__30222_31335__$1)){
var c__4609__auto___31336 = cljs.core.chunk_first(seq__30222_31335__$1);
var G__31337 = cljs.core.chunk_rest(seq__30222_31335__$1);
var G__31338 = c__4609__auto___31336;
var G__31339 = cljs.core.count(c__4609__auto___31336);
var G__31340 = (0);
seq__30222_31323 = G__31337;
chunk__30223_31324 = G__31338;
count__30224_31325 = G__31339;
i__30225_31326 = G__31340;
continue;
} else {
var vec__30235_31342 = cljs.core.first(seq__30222_31335__$1);
var pno_31343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30235_31342,(0),null);
var pmask_31344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30235_31342,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31343,"$ = ",pmask_31344,";");


var G__31345 = cljs.core.next(seq__30222_31335__$1);
var G__31346 = null;
var G__31347 = (0);
var G__31348 = (0);
seq__30222_31323 = G__31345;
chunk__30223_31324 = G__31346;
count__30224_31325 = G__31347;
i__30225_31326 = G__31348;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30238){
var map__30239 = p__30238;
var map__30239__$1 = (((((!((map__30239 == null))))?(((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30239):map__30239);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30239__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30239__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30239__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30239__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30239__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__30241_31355 = cljs.core.seq(protocols);
var chunk__30242_31356 = null;
var count__30243_31357 = (0);
var i__30244_31358 = (0);
while(true){
if((i__30244_31358 < count__30243_31357)){
var protocol_31359 = chunk__30242_31356.cljs$core$IIndexed$_nth$arity$2(null,i__30244_31358);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31359)),"}");


var G__31360 = seq__30241_31355;
var G__31361 = chunk__30242_31356;
var G__31362 = count__30243_31357;
var G__31363 = (i__30244_31358 + (1));
seq__30241_31355 = G__31360;
chunk__30242_31356 = G__31361;
count__30243_31357 = G__31362;
i__30244_31358 = G__31363;
continue;
} else {
var temp__5735__auto___31366 = cljs.core.seq(seq__30241_31355);
if(temp__5735__auto___31366){
var seq__30241_31367__$1 = temp__5735__auto___31366;
if(cljs.core.chunked_seq_QMARK_(seq__30241_31367__$1)){
var c__4609__auto___31368 = cljs.core.chunk_first(seq__30241_31367__$1);
var G__31369 = cljs.core.chunk_rest(seq__30241_31367__$1);
var G__31370 = c__4609__auto___31368;
var G__31371 = cljs.core.count(c__4609__auto___31368);
var G__31372 = (0);
seq__30241_31355 = G__31369;
chunk__30242_31356 = G__31370;
count__30243_31357 = G__31371;
i__30244_31358 = G__31372;
continue;
} else {
var protocol_31373 = cljs.core.first(seq__30241_31367__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31373)),"}");


var G__31374 = cljs.core.next(seq__30241_31367__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__30241_31355 = G__31374;
chunk__30242_31356 = G__31375;
count__30243_31357 = G__31376;
i__30244_31358 = G__31377;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__30245_31378 = cljs.core.seq(fields__$1);
var chunk__30246_31379 = null;
var count__30247_31380 = (0);
var i__30248_31381 = (0);
while(true){
if((i__30248_31381 < count__30247_31380)){
var fld_31386 = chunk__30246_31379.cljs$core$IIndexed$_nth$arity$2(null,i__30248_31381);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31386," = ",fld_31386,";");


var G__31387 = seq__30245_31378;
var G__31388 = chunk__30246_31379;
var G__31389 = count__30247_31380;
var G__31390 = (i__30248_31381 + (1));
seq__30245_31378 = G__31387;
chunk__30246_31379 = G__31388;
count__30247_31380 = G__31389;
i__30248_31381 = G__31390;
continue;
} else {
var temp__5735__auto___31391 = cljs.core.seq(seq__30245_31378);
if(temp__5735__auto___31391){
var seq__30245_31392__$1 = temp__5735__auto___31391;
if(cljs.core.chunked_seq_QMARK_(seq__30245_31392__$1)){
var c__4609__auto___31393 = cljs.core.chunk_first(seq__30245_31392__$1);
var G__31394 = cljs.core.chunk_rest(seq__30245_31392__$1);
var G__31395 = c__4609__auto___31393;
var G__31396 = cljs.core.count(c__4609__auto___31393);
var G__31397 = (0);
seq__30245_31378 = G__31394;
chunk__30246_31379 = G__31395;
count__30247_31380 = G__31396;
i__30248_31381 = G__31397;
continue;
} else {
var fld_31398 = cljs.core.first(seq__30245_31392__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_31398," = ",fld_31398,";");


var G__31399 = cljs.core.next(seq__30245_31392__$1);
var G__31400 = null;
var G__31401 = (0);
var G__31402 = (0);
seq__30245_31378 = G__31399;
chunk__30246_31379 = G__31400;
count__30247_31380 = G__31401;
i__30248_31381 = G__31402;
continue;
}
} else {
}
}
break;
}

var seq__30253_31403 = cljs.core.seq(pmasks);
var chunk__30254_31404 = null;
var count__30255_31405 = (0);
var i__30256_31406 = (0);
while(true){
if((i__30256_31406 < count__30255_31405)){
var vec__30264_31407 = chunk__30254_31404.cljs$core$IIndexed$_nth$arity$2(null,i__30256_31406);
var pno_31408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264_31407,(0),null);
var pmask_31409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264_31407,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31408,"$ = ",pmask_31409,";");


var G__31414 = seq__30253_31403;
var G__31415 = chunk__30254_31404;
var G__31416 = count__30255_31405;
var G__31417 = (i__30256_31406 + (1));
seq__30253_31403 = G__31414;
chunk__30254_31404 = G__31415;
count__30255_31405 = G__31416;
i__30256_31406 = G__31417;
continue;
} else {
var temp__5735__auto___31418 = cljs.core.seq(seq__30253_31403);
if(temp__5735__auto___31418){
var seq__30253_31419__$1 = temp__5735__auto___31418;
if(cljs.core.chunked_seq_QMARK_(seq__30253_31419__$1)){
var c__4609__auto___31420 = cljs.core.chunk_first(seq__30253_31419__$1);
var G__31421 = cljs.core.chunk_rest(seq__30253_31419__$1);
var G__31422 = c__4609__auto___31420;
var G__31423 = cljs.core.count(c__4609__auto___31420);
var G__31424 = (0);
seq__30253_31403 = G__31421;
chunk__30254_31404 = G__31422;
count__30255_31405 = G__31423;
i__30256_31406 = G__31424;
continue;
} else {
var vec__30267_31425 = cljs.core.first(seq__30253_31419__$1);
var pno_31426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30267_31425,(0),null);
var pmask_31427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30267_31425,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_31426,"$ = ",pmask_31427,";");


var G__31428 = cljs.core.next(seq__30253_31419__$1);
var G__31429 = null;
var G__31430 = (0);
var G__31431 = (0);
seq__30253_31403 = G__31428;
chunk__30254_31404 = G__31429;
count__30255_31405 = G__31430;
i__30256_31406 = G__31431;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30270){
var map__30271 = p__30270;
var map__30271__$1 = (((((!((map__30271 == null))))?(((((map__30271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30271):map__30271);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30273){
var map__30274 = p__30273;
var map__30274__$1 = (((((!((map__30274 == null))))?(((((map__30274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30274):map__30274);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30274__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30274__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30274__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30274__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4174__auto__ = code;
if(cljs.core.truth_(and__4174__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4174__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__29443__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29443__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__30280 = cljs.core.seq(table);
var chunk__30281 = null;
var count__30282 = (0);
var i__30283 = (0);
while(true){
if((i__30283 < count__30282)){
var vec__30298 = chunk__30281.cljs$core$IIndexed$_nth$arity$2(null,i__30283);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30298,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30298,(1),null);
var ns_31434 = cljs.core.namespace(sym);
var name_31435 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__31436 = seq__30280;
var G__31437 = chunk__30281;
var G__31438 = count__30282;
var G__31439 = (i__30283 + (1));
seq__30280 = G__31436;
chunk__30281 = G__31437;
count__30282 = G__31438;
i__30283 = G__31439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30280);
if(temp__5735__auto__){
var seq__30280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30280__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30280__$1);
var G__31440 = cljs.core.chunk_rest(seq__30280__$1);
var G__31441 = c__4609__auto__;
var G__31442 = cljs.core.count(c__4609__auto__);
var G__31443 = (0);
seq__30280 = G__31440;
chunk__30281 = G__31441;
count__30282 = G__31442;
i__30283 = G__31443;
continue;
} else {
var vec__30303 = cljs.core.first(seq__30280__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(1),null);
var ns_31444 = cljs.core.namespace(sym);
var name_31445 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__31446 = cljs.core.next(seq__30280__$1);
var G__31447 = null;
var G__31448 = (0);
var G__31449 = (0);
seq__30280 = G__31446;
chunk__30281 = G__31447;
count__30282 = G__31448;
i__30283 = G__31449;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__30307 = arguments.length;
switch (G__30307) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_31451 = cljs.core.first(ks);
var vec__30308_31452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_31451);
var top_31453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30308_31452,(0),null);
var prefix_SINGLEQUOTE__31454 = vec__30308_31452;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_31451)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__31454) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_31453)) || (cljs.core.contains_QMARK_(known_externs,top_31453)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31454)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_31453);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31454)),";");
}
} else {
}

var m_31457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_31451);
if(cljs.core.empty_QMARK_(m_31457)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__31454,m_31457,top_level,known_externs);
}

var G__31458 = cljs.core.next(ks);
ks = G__31458;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
