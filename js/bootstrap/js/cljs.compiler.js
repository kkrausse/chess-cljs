goog.provide('cljs.compiler');
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
var map__33024 = s;
var map__33024__$1 = (((((!((map__33024 == null))))?(((((map__33024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33024):map__33024);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33024__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33027 = info;
var map__33028 = G__33027;
var map__33028__$1 = (((((!((map__33028 == null))))?(((((map__33028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33028):map__33028);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33028__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33027__$1 = G__33027;
while(true){
var d__$2 = d__$1;
var map__33033 = G__33027__$1;
var map__33033__$1 = (((((!((map__33033 == null))))?(((((map__33033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33033):map__33033);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33033__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__34305 = (d__$2 + (1));
var G__34306 = shadow__$1;
d__$1 = G__34305;
G__33027__$1 = G__34306;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33039){
var map__33040 = p__33039;
var map__33040__$1 = (((((!((map__33040 == null))))?(((((map__33040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33040):map__33040);
var name_var = map__33040__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__33043 = info;
var map__33043__$1 = (((((!((map__33043 == null))))?(((((map__33043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33043):map__33043);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33043__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__33045 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__33045) : cljs.compiler.munge.call(null,G__33045));
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
var G__33047 = arguments.length;
switch (G__33047) {
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
var ms = (function (){var fexpr__33052 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__33052.cljs$core$IFn$_invoke$arity$1 ? fexpr__33052.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__33052.call(null,ss__$3));
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
var G__33054 = cp;
switch (G__33054) {
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
var seq__33058_34315 = cljs.core.seq(s);
var chunk__33059_34316 = null;
var count__33060_34317 = (0);
var i__33061_34318 = (0);
while(true){
if((i__33061_34318 < count__33060_34317)){
var c_34319 = chunk__33059_34316.cljs$core$IIndexed$_nth$arity$2(null,i__33061_34318);
sb.append(cljs.compiler.escape_char(c_34319));


var G__34320 = seq__33058_34315;
var G__34321 = chunk__33059_34316;
var G__34322 = count__33060_34317;
var G__34323 = (i__33061_34318 + (1));
seq__33058_34315 = G__34320;
chunk__33059_34316 = G__34321;
count__33060_34317 = G__34322;
i__33061_34318 = G__34323;
continue;
} else {
var temp__5735__auto___34324 = cljs.core.seq(seq__33058_34315);
if(temp__5735__auto___34324){
var seq__33058_34325__$1 = temp__5735__auto___34324;
if(cljs.core.chunked_seq_QMARK_(seq__33058_34325__$1)){
var c__4556__auto___34326 = cljs.core.chunk_first(seq__33058_34325__$1);
var G__34327 = cljs.core.chunk_rest(seq__33058_34325__$1);
var G__34328 = c__4556__auto___34326;
var G__34329 = cljs.core.count(c__4556__auto___34326);
var G__34330 = (0);
seq__33058_34315 = G__34327;
chunk__33059_34316 = G__34328;
count__33060_34317 = G__34329;
i__33061_34318 = G__34330;
continue;
} else {
var c_34331 = cljs.core.first(seq__33058_34325__$1);
sb.append(cljs.compiler.escape_char(c_34331));


var G__34332 = cljs.core.next(seq__33058_34325__$1);
var G__34333 = null;
var G__34334 = (0);
var G__34335 = (0);
seq__33058_34315 = G__34332;
chunk__33059_34316 = G__34333;
count__33060_34317 = G__34334;
i__33061_34318 = G__34335;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33068 = cljs.core.get_global_hierarchy;
return (fexpr__33068.cljs$core$IFn$_invoke$arity$0 ? fexpr__33068.cljs$core$IFn$_invoke$arity$0() : fexpr__33068.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__33070_34336 = ast;
var map__33070_34337__$1 = (((((!((map__33070_34336 == null))))?(((((map__33070_34336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33070_34336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33070_34336):map__33070_34336);
var env_34338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33070_34337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_34338))){
var map__33073_34339 = env_34338;
var map__33073_34340__$1 = (((((!((map__33073_34339 == null))))?(((((map__33073_34339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33073_34339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33073_34339):map__33073_34339);
var line_34341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33073_34340__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33073_34340__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__33076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__33078 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__33077 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__33077.cljs$core$IFn$_invoke$arity$1 ? fexpr__33077.cljs$core$IFn$_invoke$arity$1(G__33078) : fexpr__33077.call(null,G__33078));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33076,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__33076;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_34341 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_34342)?(column_34342 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__33091 = arguments.length;
switch (G__33091) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___34350 = arguments.length;
var i__4737__auto___34351 = (0);
while(true){
if((i__4737__auto___34351 < len__4736__auto___34350)){
args_arr__4757__auto__.push((arguments[i__4737__auto___34351]));

var G__34352 = (i__4737__auto___34351 + (1));
i__4737__auto___34351 = G__34352;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

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
var s_34359 = (function (){var G__33094 = a;
if((!(typeof a === 'string'))){
return G__33094.toString();
} else {
return G__33094;
}
})();
var temp__5739__auto___34365 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___34365 == null)){
} else {
var sm_data_34366 = temp__5739__auto___34365;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_34366,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__33080_SHARP_){
return (p1__33080_SHARP_ + s_34359.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_34359], 0));

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

var seq__33100 = cljs.core.seq(xs);
var chunk__33101 = null;
var count__33102 = (0);
var i__33103 = (0);
while(true){
if((i__33103 < count__33102)){
var x = chunk__33101.cljs$core$IIndexed$_nth$arity$2(null,i__33103);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__34368 = seq__33100;
var G__34369 = chunk__33101;
var G__34370 = count__33102;
var G__34371 = (i__33103 + (1));
seq__33100 = G__34368;
chunk__33101 = G__34369;
count__33102 = G__34370;
i__33103 = G__34371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33100);
if(temp__5735__auto__){
var seq__33100__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33100__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33100__$1);
var G__34372 = cljs.core.chunk_rest(seq__33100__$1);
var G__34373 = c__4556__auto__;
var G__34374 = cljs.core.count(c__4556__auto__);
var G__34375 = (0);
seq__33100 = G__34372;
chunk__33101 = G__34373;
count__33102 = G__34374;
i__33103 = G__34375;
continue;
} else {
var x = cljs.core.first(seq__33100__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__34376 = cljs.core.next(seq__33100__$1);
var G__34377 = null;
var G__34378 = (0);
var G__34379 = (0);
seq__33100 = G__34376;
chunk__33101 = G__34377;
count__33102 = G__34378;
i__33103 = G__34379;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq33085){
var G__33086 = cljs.core.first(seq33085);
var seq33085__$1 = cljs.core.next(seq33085);
var G__33087 = cljs.core.first(seq33085__$1);
var seq33085__$2 = cljs.core.next(seq33085__$1);
var G__33088 = cljs.core.first(seq33085__$2);
var seq33085__$3 = cljs.core.next(seq33085__$2);
var G__33089 = cljs.core.first(seq33085__$3);
var seq33085__$4 = cljs.core.next(seq33085__$3);
var G__33090 = cljs.core.first(seq33085__$4);
var seq33085__$5 = cljs.core.next(seq33085__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33086,G__33087,G__33088,G__33089,G__33090,seq33085__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__33112){
var map__33113 = p__33112;
var map__33113__$1 = (((((!((map__33113 == null))))?(((((map__33113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33113):map__33113);
var m = map__33113__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33113__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__33146 = arguments.length;
switch (G__33146) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___34386 = arguments.length;
var i__4737__auto___34387 = (0);
while(true){
if((i__4737__auto___34387 < len__4736__auto___34386)){
args_arr__4757__auto__.push((arguments[i__4737__auto___34387]));

var G__34388 = (i__4737__auto___34387 + (1));
i__4737__auto___34387 = G__34388;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

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

var seq__33190_34391 = cljs.core.seq(xs);
var chunk__33191_34392 = null;
var count__33192_34393 = (0);
var i__33193_34394 = (0);
while(true){
if((i__33193_34394 < count__33192_34393)){
var x_34395 = chunk__33191_34392.cljs$core$IIndexed$_nth$arity$2(null,i__33193_34394);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_34395);


var G__34396 = seq__33190_34391;
var G__34397 = chunk__33191_34392;
var G__34398 = count__33192_34393;
var G__34399 = (i__33193_34394 + (1));
seq__33190_34391 = G__34396;
chunk__33191_34392 = G__34397;
count__33192_34393 = G__34398;
i__33193_34394 = G__34399;
continue;
} else {
var temp__5735__auto___34400 = cljs.core.seq(seq__33190_34391);
if(temp__5735__auto___34400){
var seq__33190_34401__$1 = temp__5735__auto___34400;
if(cljs.core.chunked_seq_QMARK_(seq__33190_34401__$1)){
var c__4556__auto___34402 = cljs.core.chunk_first(seq__33190_34401__$1);
var G__34403 = cljs.core.chunk_rest(seq__33190_34401__$1);
var G__34404 = c__4556__auto___34402;
var G__34405 = cljs.core.count(c__4556__auto___34402);
var G__34406 = (0);
seq__33190_34391 = G__34403;
chunk__33191_34392 = G__34404;
count__33192_34393 = G__34405;
i__33193_34394 = G__34406;
continue;
} else {
var x_34407 = cljs.core.first(seq__33190_34401__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_34407);


var G__34408 = cljs.core.next(seq__33190_34401__$1);
var G__34409 = null;
var G__34410 = (0);
var G__34411 = (0);
seq__33190_34391 = G__34408;
chunk__33191_34392 = G__34409;
count__33192_34393 = G__34410;
i__33193_34394 = G__34411;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33137){
var G__33138 = cljs.core.first(seq33137);
var seq33137__$1 = cljs.core.next(seq33137);
var G__33139 = cljs.core.first(seq33137__$1);
var seq33137__$2 = cljs.core.next(seq33137__$1);
var G__33140 = cljs.core.first(seq33137__$2);
var seq33137__$3 = cljs.core.next(seq33137__$2);
var G__33141 = cljs.core.first(seq33137__$3);
var seq33137__$4 = cljs.core.next(seq33137__$3);
var G__33142 = cljs.core.first(seq33137__$4);
var seq33137__$5 = cljs.core.next(seq33137__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33138,G__33139,G__33140,G__33141,G__33142,seq33137__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33217_34412 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33218_34413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33219_34414 = true;
var _STAR_print_fn_STAR__temp_val__33220_34415 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33219_34414);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33220_34415);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33218_34413);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33217_34412);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33230 = cljs.core.get_global_hierarchy;
return (fexpr__33230.cljs$core$IFn$_invoke$arity$0 ? fexpr__33230.cljs$core$IFn$_invoke$arity$0() : fexpr__33230.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
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
var vec__33231 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(1),null);
var G__33234 = ns;
var G__33235 = name;
var G__33236 = (function (){
var G__33239 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__33239) : cljs.compiler.emit_constant.call(null,G__33239));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__33234,G__33235,G__33236) : cljs.compiler.emit_record_value.call(null,G__33234,G__33235,G__33236));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__33241 = cljs.core.keys(x);
var G__33242 = cljs.core.vals(x);
var G__33243 = cljs.compiler.emit_constants_comma_sep;
var G__33244 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__33241,G__33242,G__33243,G__33244) : cljs.compiler.emit_map.call(null,G__33241,G__33242,G__33243,G__33244));
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
var G__33251 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__33252 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__33251,G__33252) : cljs.compiler.emit_with_meta.call(null,G__33251,G__33252));
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
var vec__33268 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33268,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33268,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33268,(2),null);
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
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__33292 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33292) : x.call(null,G__33292));
} else {
return and__4115__auto__;
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
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__33293 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33293) : x.call(null,G__33293));
} else {
return and__4115__auto__;
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
var G__33297 = items;
var G__33298 = (function (p1__33296_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__33296_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__33297,G__33298) : cljs.compiler.emit_js_object.call(null,G__33297,G__33298));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__33300){
var map__33301 = p__33300;
var map__33301__$1 = (((((!((map__33301 == null))))?(((((map__33301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33301):map__33301);
var ast = map__33301__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33301__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33301__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33307 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33307__$1 = (((((!((map__33307 == null))))?(((((map__33307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33307):map__33307);
var cenv = map__33307__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33307__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var reserved = (function (){var G__33316 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__33319 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__33319) : cljs.compiler.es5_GT__EQ_.call(null,G__33319));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__33316,cljs.analyzer.es5_allowed);
} else {
return G__33316;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__33326 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__33326,reserved);
} else {
return G__33326;
}
})();
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__33328_34425 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__33328_34426__$1 = (((G__33328_34425 instanceof cljs.core.Keyword))?G__33328_34425.fqn:null);
switch (G__33328_34426__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__33338){
var map__33339 = p__33338;
var map__33339__$1 = (((((!((map__33339 == null))))?(((((map__33339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33339):map__33339);
var arg = map__33339__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33342 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33342__$1 = (((((!((map__33342 == null))))?(((((map__33342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33342):map__33342);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33349){
var map__33350 = p__33349;
var map__33350__$1 = (((((!((map__33350 == null))))?(((((map__33350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33350):map__33350);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33350__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33350__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33350__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__33357_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33357_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__33363 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33363) : comma_sep.call(null,G__33363));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__33364 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33364) : comma_sep.call(null,G__33364));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33366){
var map__33367 = p__33366;
var map__33367__$1 = (((((!((map__33367 == null))))?(((((map__33367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33367):map__33367);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33367__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33367__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33371){
var map__33372 = p__33371;
var map__33372__$1 = (((((!((map__33372 == null))))?(((((map__33372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33372):map__33372);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33372__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__33374_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33374_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__33393 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33393) : comma_sep.call(null,G__33393));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33397){
var map__33398 = p__33397;
var map__33398__$1 = (((((!((map__33398 == null))))?(((((map__33398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33398):map__33398);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33398__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___34436 = cljs.core.seq(items);
if(temp__5735__auto___34436){
var items_34437__$1 = temp__5735__auto___34436;
var vec__33403_34438 = items_34437__$1;
var seq__33404_34439 = cljs.core.seq(vec__33403_34438);
var first__33405_34440 = cljs.core.first(seq__33404_34439);
var seq__33404_34441__$1 = cljs.core.next(seq__33404_34439);
var vec__33406_34442 = first__33405_34440;
var k_34443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406_34442,(0),null);
var v_34444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406_34442,(1),null);
var r_34445 = seq__33404_34441__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_34443),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34444) : emit_js_object_val.call(null,v_34444)));

var seq__33409_34446 = cljs.core.seq(r_34445);
var chunk__33410_34447 = null;
var count__33411_34448 = (0);
var i__33412_34449 = (0);
while(true){
if((i__33412_34449 < count__33411_34448)){
var vec__33423_34450 = chunk__33410_34447.cljs$core$IIndexed$_nth$arity$2(null,i__33412_34449);
var k_34451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423_34450,(0),null);
var v_34452__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423_34450,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34451__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34452__$1) : emit_js_object_val.call(null,v_34452__$1)));


var G__34453 = seq__33409_34446;
var G__34454 = chunk__33410_34447;
var G__34455 = count__33411_34448;
var G__34456 = (i__33412_34449 + (1));
seq__33409_34446 = G__34453;
chunk__33410_34447 = G__34454;
count__33411_34448 = G__34455;
i__33412_34449 = G__34456;
continue;
} else {
var temp__5735__auto___34457__$1 = cljs.core.seq(seq__33409_34446);
if(temp__5735__auto___34457__$1){
var seq__33409_34458__$1 = temp__5735__auto___34457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33409_34458__$1)){
var c__4556__auto___34459 = cljs.core.chunk_first(seq__33409_34458__$1);
var G__34460 = cljs.core.chunk_rest(seq__33409_34458__$1);
var G__34461 = c__4556__auto___34459;
var G__34462 = cljs.core.count(c__4556__auto___34459);
var G__34463 = (0);
seq__33409_34446 = G__34460;
chunk__33410_34447 = G__34461;
count__33411_34448 = G__34462;
i__33412_34449 = G__34463;
continue;
} else {
var vec__33429_34464 = cljs.core.first(seq__33409_34458__$1);
var k_34465__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33429_34464,(0),null);
var v_34466__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33429_34464,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34465__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34466__$1) : emit_js_object_val.call(null,v_34466__$1)));


var G__34467 = cljs.core.next(seq__33409_34458__$1);
var G__34468 = null;
var G__34469 = (0);
var G__34470 = (0);
seq__33409_34446 = G__34467;
chunk__33410_34447 = G__34468;
count__33411_34448 = G__34469;
i__33412_34449 = G__34470;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33432){
var map__33433 = p__33432;
var map__33433__$1 = (((((!((map__33433 == null))))?(((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33433):map__33433);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33433__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33433__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__33435){
var map__33436 = p__33435;
var map__33436__$1 = (((((!((map__33436 == null))))?(((((map__33436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33436):map__33436);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__33446){
var map__33447 = p__33446;
var map__33447__$1 = (((((!((map__33447 == null))))?(((((map__33447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33447):map__33447);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33447__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33450){
var map__33451 = p__33450;
var map__33451__$1 = (((((!((map__33451 == null))))?(((((map__33451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33451):map__33451);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33451__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__33459 = cljs.analyzer.unwrap_quote(expr);
var map__33459__$1 = (((((!((map__33459 == null))))?(((((map__33459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33459):map__33459);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__33473 = cljs.analyzer.unwrap_quote(expr);
var map__33473__$1 = (((((!((map__33473 == null))))?(((((map__33473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33473):map__33473);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33473__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33473__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33473__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
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
var or__4126__auto__ = (function (){var fexpr__33481 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__33481.cljs$core$IFn$_invoke$arity$1 ? fexpr__33481.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33481.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33482){
var map__33484 = p__33482;
var map__33484__$1 = (((((!((map__33484 == null))))?(((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33484):map__33484);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__33489){
var map__33490 = p__33489;
var map__33490__$1 = (((((!((map__33490 == null))))?(((((map__33490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33490):map__33490);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33492_34487 = cljs.core.seq(nodes);
var chunk__33493_34488 = null;
var count__33494_34489 = (0);
var i__33495_34490 = (0);
while(true){
if((i__33495_34490 < count__33494_34489)){
var map__33534_34491 = chunk__33493_34488.cljs$core$IIndexed$_nth$arity$2(null,i__33495_34490);
var map__33534_34492__$1 = (((((!((map__33534_34491 == null))))?(((((map__33534_34491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33534_34491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33534_34491):map__33534_34491);
var ts_34493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33534_34492__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33535_34494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33534_34492__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33535_34495__$1 = (((((!((map__33535_34494 == null))))?(((((map__33535_34494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33535_34494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33535_34494):map__33535_34494);
var then_34496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33535_34495__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33538_34497 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34493));
var chunk__33539_34498 = null;
var count__33540_34499 = (0);
var i__33541_34500 = (0);
while(true){
if((i__33541_34500 < count__33540_34499)){
var test_34501 = chunk__33539_34498.cljs$core$IIndexed$_nth$arity$2(null,i__33541_34500);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34501,":");


var G__34502 = seq__33538_34497;
var G__34503 = chunk__33539_34498;
var G__34504 = count__33540_34499;
var G__34505 = (i__33541_34500 + (1));
seq__33538_34497 = G__34502;
chunk__33539_34498 = G__34503;
count__33540_34499 = G__34504;
i__33541_34500 = G__34505;
continue;
} else {
var temp__5735__auto___34506 = cljs.core.seq(seq__33538_34497);
if(temp__5735__auto___34506){
var seq__33538_34507__$1 = temp__5735__auto___34506;
if(cljs.core.chunked_seq_QMARK_(seq__33538_34507__$1)){
var c__4556__auto___34508 = cljs.core.chunk_first(seq__33538_34507__$1);
var G__34509 = cljs.core.chunk_rest(seq__33538_34507__$1);
var G__34510 = c__4556__auto___34508;
var G__34511 = cljs.core.count(c__4556__auto___34508);
var G__34512 = (0);
seq__33538_34497 = G__34509;
chunk__33539_34498 = G__34510;
count__33540_34499 = G__34511;
i__33541_34500 = G__34512;
continue;
} else {
var test_34513 = cljs.core.first(seq__33538_34507__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34513,":");


var G__34514 = cljs.core.next(seq__33538_34507__$1);
var G__34515 = null;
var G__34516 = (0);
var G__34517 = (0);
seq__33538_34497 = G__34514;
chunk__33539_34498 = G__34515;
count__33540_34499 = G__34516;
i__33541_34500 = G__34517;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34496);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34496);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34518 = seq__33492_34487;
var G__34519 = chunk__33493_34488;
var G__34520 = count__33494_34489;
var G__34521 = (i__33495_34490 + (1));
seq__33492_34487 = G__34518;
chunk__33493_34488 = G__34519;
count__33494_34489 = G__34520;
i__33495_34490 = G__34521;
continue;
} else {
var temp__5735__auto___34525 = cljs.core.seq(seq__33492_34487);
if(temp__5735__auto___34525){
var seq__33492_34526__$1 = temp__5735__auto___34525;
if(cljs.core.chunked_seq_QMARK_(seq__33492_34526__$1)){
var c__4556__auto___34527 = cljs.core.chunk_first(seq__33492_34526__$1);
var G__34528 = cljs.core.chunk_rest(seq__33492_34526__$1);
var G__34529 = c__4556__auto___34527;
var G__34530 = cljs.core.count(c__4556__auto___34527);
var G__34531 = (0);
seq__33492_34487 = G__34528;
chunk__33493_34488 = G__34529;
count__33494_34489 = G__34530;
i__33495_34490 = G__34531;
continue;
} else {
var map__33542_34532 = cljs.core.first(seq__33492_34526__$1);
var map__33542_34533__$1 = (((((!((map__33542_34532 == null))))?(((((map__33542_34532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33542_34532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33542_34532):map__33542_34532);
var ts_34534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33542_34533__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33543_34535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33542_34533__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33543_34536__$1 = (((((!((map__33543_34535 == null))))?(((((map__33543_34535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33543_34535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33543_34535):map__33543_34535);
var then_34537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33543_34536__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33546_34538 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34534));
var chunk__33547_34539 = null;
var count__33548_34540 = (0);
var i__33549_34541 = (0);
while(true){
if((i__33549_34541 < count__33548_34540)){
var test_34542 = chunk__33547_34539.cljs$core$IIndexed$_nth$arity$2(null,i__33549_34541);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34542,":");


var G__34543 = seq__33546_34538;
var G__34544 = chunk__33547_34539;
var G__34545 = count__33548_34540;
var G__34546 = (i__33549_34541 + (1));
seq__33546_34538 = G__34543;
chunk__33547_34539 = G__34544;
count__33548_34540 = G__34545;
i__33549_34541 = G__34546;
continue;
} else {
var temp__5735__auto___34547__$1 = cljs.core.seq(seq__33546_34538);
if(temp__5735__auto___34547__$1){
var seq__33546_34548__$1 = temp__5735__auto___34547__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33546_34548__$1)){
var c__4556__auto___34549 = cljs.core.chunk_first(seq__33546_34548__$1);
var G__34550 = cljs.core.chunk_rest(seq__33546_34548__$1);
var G__34551 = c__4556__auto___34549;
var G__34552 = cljs.core.count(c__4556__auto___34549);
var G__34553 = (0);
seq__33546_34538 = G__34550;
chunk__33547_34539 = G__34551;
count__33548_34540 = G__34552;
i__33549_34541 = G__34553;
continue;
} else {
var test_34554 = cljs.core.first(seq__33546_34548__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34554,":");


var G__34557 = cljs.core.next(seq__33546_34548__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__33546_34538 = G__34557;
chunk__33547_34539 = G__34558;
count__33548_34540 = G__34559;
i__33549_34541 = G__34560;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34537);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34537);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34562 = cljs.core.next(seq__33492_34526__$1);
var G__34563 = null;
var G__34564 = (0);
var G__34565 = (0);
seq__33492_34487 = G__34562;
chunk__33493_34488 = G__34563;
count__33494_34489 = G__34564;
i__33495_34490 = G__34565;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33550){
var map__33551 = p__33550;
var map__33551__$1 = (((((!((map__33551 == null))))?(((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33551):map__33551);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33551__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33560 = env;
var G__33561 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33560,G__33561) : cljs.compiler.resolve_type.call(null,G__33560,G__33561));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33562 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33553_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__33553_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__33553_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__33565 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33565,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33565;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33568 = env;
var G__33569 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33568,G__33569) : cljs.compiler.resolve_type.call(null,G__33568,G__33569));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33571_SHARP_){
return cljs.compiler.resolve_type(env,p1__33571_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__33584 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33585 = cljs.core.seq(vec__33584);
var first__33586 = cljs.core.first(seq__33585);
var seq__33585__$1 = cljs.core.next(seq__33585);
var p = first__33586;
var first__33586__$1 = cljs.core.first(seq__33585__$1);
var seq__33585__$2 = cljs.core.next(seq__33585__$1);
var ts = first__33586__$1;
var first__33586__$2 = cljs.core.first(seq__33585__$2);
var seq__33585__$3 = cljs.core.next(seq__33585__$2);
var n = first__33586__$2;
var xs = seq__33585__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__33593 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33594 = cljs.core.seq(vec__33593);
var first__33595 = cljs.core.first(seq__33594);
var seq__33594__$1 = cljs.core.next(seq__33594);
var p = first__33595;
var first__33595__$1 = cljs.core.first(seq__33594__$1);
var seq__33594__$2 = cljs.core.next(seq__33594__$1);
var ts = first__33595__$1;
var xs = seq__33594__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
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
var G__33599 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__33598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__33598.cljs$core$IFn$_invoke$arity$1 ? fexpr__33598.cljs$core$IFn$_invoke$arity$1(G__33599) : fexpr__33598.call(null,G__33599));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__33602 = arguments.length;
switch (G__33602) {
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
var vec__33627 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33600_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__33600_SHARP_);
} else {
return p1__33600_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__33628 = cljs.core.seq(vec__33627);
var first__33629 = cljs.core.first(seq__33628);
var seq__33628__$1 = cljs.core.next(seq__33628);
var x = first__33629;
var ys = seq__33628__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__33631 = cljs.core.seq(ys);
var chunk__33632 = null;
var count__33633 = (0);
var i__33634 = (0);
while(true){
if((i__33634 < count__33633)){
var next_line = chunk__33632.cljs$core$IIndexed$_nth$arity$2(null,i__33634);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34575 = seq__33631;
var G__34576 = chunk__33632;
var G__34577 = count__33633;
var G__34578 = (i__33634 + (1));
seq__33631 = G__34575;
chunk__33632 = G__34576;
count__33633 = G__34577;
i__33634 = G__34578;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33631);
if(temp__5735__auto__){
var seq__33631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33631__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33631__$1);
var G__34579 = cljs.core.chunk_rest(seq__33631__$1);
var G__34580 = c__4556__auto__;
var G__34581 = cljs.core.count(c__4556__auto__);
var G__34582 = (0);
seq__33631 = G__34579;
chunk__33632 = G__34580;
count__33633 = G__34581;
i__33634 = G__34582;
continue;
} else {
var next_line = cljs.core.first(seq__33631__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34583 = cljs.core.next(seq__33631__$1);
var G__34584 = null;
var G__34585 = (0);
var G__34586 = (0);
seq__33631 = G__34583;
chunk__33632 = G__34584;
count__33633 = G__34585;
i__33634 = G__34586;
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

var seq__33639_34587 = cljs.core.seq(docs__$2);
var chunk__33640_34588 = null;
var count__33641_34589 = (0);
var i__33642_34590 = (0);
while(true){
if((i__33642_34590 < count__33641_34589)){
var e_34591 = chunk__33640_34588.cljs$core$IIndexed$_nth$arity$2(null,i__33642_34590);
if(cljs.core.truth_(e_34591)){
print_comment_lines(e_34591);
} else {
}


var G__34592 = seq__33639_34587;
var G__34593 = chunk__33640_34588;
var G__34594 = count__33641_34589;
var G__34595 = (i__33642_34590 + (1));
seq__33639_34587 = G__34592;
chunk__33640_34588 = G__34593;
count__33641_34589 = G__34594;
i__33642_34590 = G__34595;
continue;
} else {
var temp__5735__auto___34596 = cljs.core.seq(seq__33639_34587);
if(temp__5735__auto___34596){
var seq__33639_34597__$1 = temp__5735__auto___34596;
if(cljs.core.chunked_seq_QMARK_(seq__33639_34597__$1)){
var c__4556__auto___34598 = cljs.core.chunk_first(seq__33639_34597__$1);
var G__34599 = cljs.core.chunk_rest(seq__33639_34597__$1);
var G__34600 = c__4556__auto___34598;
var G__34601 = cljs.core.count(c__4556__auto___34598);
var G__34602 = (0);
seq__33639_34587 = G__34599;
chunk__33640_34588 = G__34600;
count__33641_34589 = G__34601;
i__33642_34590 = G__34602;
continue;
} else {
var e_34603 = cljs.core.first(seq__33639_34597__$1);
if(cljs.core.truth_(e_34603)){
print_comment_lines(e_34603);
} else {
}


var G__34604 = cljs.core.next(seq__33639_34597__$1);
var G__34605 = null;
var G__34606 = (0);
var G__34607 = (0);
seq__33639_34587 = G__34604;
chunk__33640_34588 = G__34605;
count__33641_34589 = G__34606;
i__33642_34590 = G__34607;
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
var and__4115__auto__ = cljs.core.some((function (p1__33655_SHARP_){
return goog.string.startsWith(p1__33655_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
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
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33664){
var map__33665 = p__33664;
var map__33665__$1 = (((((!((map__33665 == null))))?(((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33665):map__33665);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

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

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33672){
var map__33673 = p__33672;
var map__33673__$1 = (((((!((map__33673 == null))))?(((((map__33673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33673):map__33673);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__33675_34616 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__33676_34617 = null;
var count__33677_34618 = (0);
var i__33678_34619 = (0);
while(true){
if((i__33678_34619 < count__33677_34618)){
var vec__33686_34620 = chunk__33676_34617.cljs$core$IIndexed$_nth$arity$2(null,i__33678_34619);
var i_34621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686_34620,(0),null);
var param_34622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686_34620,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34622);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34623 = seq__33675_34616;
var G__34624 = chunk__33676_34617;
var G__34625 = count__33677_34618;
var G__34626 = (i__33678_34619 + (1));
seq__33675_34616 = G__34623;
chunk__33676_34617 = G__34624;
count__33677_34618 = G__34625;
i__33678_34619 = G__34626;
continue;
} else {
var temp__5735__auto___34627 = cljs.core.seq(seq__33675_34616);
if(temp__5735__auto___34627){
var seq__33675_34628__$1 = temp__5735__auto___34627;
if(cljs.core.chunked_seq_QMARK_(seq__33675_34628__$1)){
var c__4556__auto___34629 = cljs.core.chunk_first(seq__33675_34628__$1);
var G__34631 = cljs.core.chunk_rest(seq__33675_34628__$1);
var G__34632 = c__4556__auto___34629;
var G__34633 = cljs.core.count(c__4556__auto___34629);
var G__34634 = (0);
seq__33675_34616 = G__34631;
chunk__33676_34617 = G__34632;
count__33677_34618 = G__34633;
i__33678_34619 = G__34634;
continue;
} else {
var vec__33690_34635 = cljs.core.first(seq__33675_34628__$1);
var i_34636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33690_34635,(0),null);
var param_34637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33690_34635,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34637);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34638 = cljs.core.next(seq__33675_34628__$1);
var G__34639 = null;
var G__34640 = (0);
var G__34641 = (0);
seq__33675_34616 = G__34638;
chunk__33676_34617 = G__34639;
count__33677_34618 = G__34640;
i__33678_34619 = G__34641;
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

var seq__33693_34643 = cljs.core.seq(params);
var chunk__33694_34644 = null;
var count__33695_34645 = (0);
var i__33696_34646 = (0);
while(true){
if((i__33696_34646 < count__33695_34645)){
var param_34649 = chunk__33694_34644.cljs$core$IIndexed$_nth$arity$2(null,i__33696_34646);
cljs.compiler.emit(param_34649);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34649,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34650 = seq__33693_34643;
var G__34651 = chunk__33694_34644;
var G__34652 = count__33695_34645;
var G__34653 = (i__33696_34646 + (1));
seq__33693_34643 = G__34650;
chunk__33694_34644 = G__34651;
count__33695_34645 = G__34652;
i__33696_34646 = G__34653;
continue;
} else {
var temp__5735__auto___34654 = cljs.core.seq(seq__33693_34643);
if(temp__5735__auto___34654){
var seq__33693_34655__$1 = temp__5735__auto___34654;
if(cljs.core.chunked_seq_QMARK_(seq__33693_34655__$1)){
var c__4556__auto___34656 = cljs.core.chunk_first(seq__33693_34655__$1);
var G__34657 = cljs.core.chunk_rest(seq__33693_34655__$1);
var G__34658 = c__4556__auto___34656;
var G__34659 = cljs.core.count(c__4556__auto___34656);
var G__34660 = (0);
seq__33693_34643 = G__34657;
chunk__33694_34644 = G__34658;
count__33695_34645 = G__34659;
i__33696_34646 = G__34660;
continue;
} else {
var param_34661 = cljs.core.first(seq__33693_34655__$1);
cljs.compiler.emit(param_34661);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34661,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34662 = cljs.core.next(seq__33693_34655__$1);
var G__34663 = null;
var G__34664 = (0);
var G__34665 = (0);
seq__33693_34643 = G__34662;
chunk__33694_34644 = G__34663;
count__33695_34645 = G__34664;
i__33696_34646 = G__34665;
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

var seq__33700_34666 = cljs.core.seq(params);
var chunk__33701_34667 = null;
var count__33702_34668 = (0);
var i__33703_34669 = (0);
while(true){
if((i__33703_34669 < count__33702_34668)){
var param_34670 = chunk__33701_34667.cljs$core$IIndexed$_nth$arity$2(null,i__33703_34669);
cljs.compiler.emit(param_34670);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34670,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34671 = seq__33700_34666;
var G__34672 = chunk__33701_34667;
var G__34673 = count__33702_34668;
var G__34674 = (i__33703_34669 + (1));
seq__33700_34666 = G__34671;
chunk__33701_34667 = G__34672;
count__33702_34668 = G__34673;
i__33703_34669 = G__34674;
continue;
} else {
var temp__5735__auto___34675 = cljs.core.seq(seq__33700_34666);
if(temp__5735__auto___34675){
var seq__33700_34676__$1 = temp__5735__auto___34675;
if(cljs.core.chunked_seq_QMARK_(seq__33700_34676__$1)){
var c__4556__auto___34680 = cljs.core.chunk_first(seq__33700_34676__$1);
var G__34681 = cljs.core.chunk_rest(seq__33700_34676__$1);
var G__34682 = c__4556__auto___34680;
var G__34683 = cljs.core.count(c__4556__auto___34680);
var G__34684 = (0);
seq__33700_34666 = G__34681;
chunk__33701_34667 = G__34682;
count__33702_34668 = G__34683;
i__33703_34669 = G__34684;
continue;
} else {
var param_34685 = cljs.core.first(seq__33700_34676__$1);
cljs.compiler.emit(param_34685);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34685,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34686 = cljs.core.next(seq__33700_34676__$1);
var G__34687 = null;
var G__34688 = (0);
var G__34689 = (0);
seq__33700_34666 = G__34686;
chunk__33701_34667 = G__34687;
count__33702_34668 = G__34688;
i__33703_34669 = G__34689;
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
var seq__33710 = cljs.core.seq(params);
var chunk__33711 = null;
var count__33712 = (0);
var i__33713 = (0);
while(true){
if((i__33713 < count__33712)){
var param = chunk__33711.cljs$core$IIndexed$_nth$arity$2(null,i__33713);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34690 = seq__33710;
var G__34691 = chunk__33711;
var G__34692 = count__33712;
var G__34693 = (i__33713 + (1));
seq__33710 = G__34690;
chunk__33711 = G__34691;
count__33712 = G__34692;
i__33713 = G__34693;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33710);
if(temp__5735__auto__){
var seq__33710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33710__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33710__$1);
var G__34694 = cljs.core.chunk_rest(seq__33710__$1);
var G__34695 = c__4556__auto__;
var G__34696 = cljs.core.count(c__4556__auto__);
var G__34697 = (0);
seq__33710 = G__34694;
chunk__33711 = G__34695;
count__33712 = G__34696;
i__33713 = G__34697;
continue;
} else {
var param = cljs.core.first(seq__33710__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34700 = cljs.core.next(seq__33710__$1);
var G__34701 = null;
var G__34702 = (0);
var G__34703 = (0);
seq__33710 = G__34700;
chunk__33711 = G__34701;
count__33712 = G__34702;
i__33713 = G__34703;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33717){
var map__33719 = p__33717;
var map__33719__$1 = (((((!((map__33719 == null))))?(((((map__33719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33719):map__33719);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33740){
var map__33741 = p__33740;
var map__33741__$1 = (((((!((map__33741 == null))))?(((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33741):map__33741);
var f = map__33741__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_34710__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34711 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34710__$1);
var delegate_name_34712 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34711),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_34712," = function (");

var seq__33743_34713 = cljs.core.seq(params);
var chunk__33744_34714 = null;
var count__33745_34715 = (0);
var i__33746_34716 = (0);
while(true){
if((i__33746_34716 < count__33745_34715)){
var param_34717 = chunk__33744_34714.cljs$core$IIndexed$_nth$arity$2(null,i__33746_34716);
cljs.compiler.emit(param_34717);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34717,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34719 = seq__33743_34713;
var G__34720 = chunk__33744_34714;
var G__34721 = count__33745_34715;
var G__34722 = (i__33746_34716 + (1));
seq__33743_34713 = G__34719;
chunk__33744_34714 = G__34720;
count__33745_34715 = G__34721;
i__33746_34716 = G__34722;
continue;
} else {
var temp__5735__auto___34723 = cljs.core.seq(seq__33743_34713);
if(temp__5735__auto___34723){
var seq__33743_34724__$1 = temp__5735__auto___34723;
if(cljs.core.chunked_seq_QMARK_(seq__33743_34724__$1)){
var c__4556__auto___34727 = cljs.core.chunk_first(seq__33743_34724__$1);
var G__34733 = cljs.core.chunk_rest(seq__33743_34724__$1);
var G__34734 = c__4556__auto___34727;
var G__34735 = cljs.core.count(c__4556__auto___34727);
var G__34736 = (0);
seq__33743_34713 = G__34733;
chunk__33744_34714 = G__34734;
count__33745_34715 = G__34735;
i__33746_34716 = G__34736;
continue;
} else {
var param_34740 = cljs.core.first(seq__33743_34724__$1);
cljs.compiler.emit(param_34740);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34740,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34742 = cljs.core.next(seq__33743_34724__$1);
var G__34743 = null;
var G__34744 = (0);
var G__34745 = (0);
seq__33743_34713 = G__34742;
chunk__33744_34714 = G__34743;
count__33745_34715 = G__34744;
i__33746_34716 = G__34745;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_34711," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_34746 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_34746,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_34712,".call(this,");

var seq__33767_34747 = cljs.core.seq(params);
var chunk__33768_34748 = null;
var count__33769_34749 = (0);
var i__33770_34750 = (0);
while(true){
if((i__33770_34750 < count__33769_34749)){
var param_34751 = chunk__33768_34748.cljs$core$IIndexed$_nth$arity$2(null,i__33770_34750);
cljs.compiler.emit(param_34751);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34751,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34752 = seq__33767_34747;
var G__34753 = chunk__33768_34748;
var G__34754 = count__33769_34749;
var G__34755 = (i__33770_34750 + (1));
seq__33767_34747 = G__34752;
chunk__33768_34748 = G__34753;
count__33769_34749 = G__34754;
i__33770_34750 = G__34755;
continue;
} else {
var temp__5735__auto___34756 = cljs.core.seq(seq__33767_34747);
if(temp__5735__auto___34756){
var seq__33767_34757__$1 = temp__5735__auto___34756;
if(cljs.core.chunked_seq_QMARK_(seq__33767_34757__$1)){
var c__4556__auto___34758 = cljs.core.chunk_first(seq__33767_34757__$1);
var G__34759 = cljs.core.chunk_rest(seq__33767_34757__$1);
var G__34760 = c__4556__auto___34758;
var G__34761 = cljs.core.count(c__4556__auto___34758);
var G__34762 = (0);
seq__33767_34747 = G__34759;
chunk__33768_34748 = G__34760;
count__33769_34749 = G__34761;
i__33770_34750 = G__34762;
continue;
} else {
var param_34763 = cljs.core.first(seq__33767_34757__$1);
cljs.compiler.emit(param_34763);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34763,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34764 = cljs.core.next(seq__33767_34757__$1);
var G__34765 = null;
var G__34766 = (0);
var G__34767 = (0);
seq__33767_34747 = G__34764;
chunk__33768_34748 = G__34765;
count__33769_34749 = G__34766;
i__33770_34750 = G__34767;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34711,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_34711,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_34710__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34711,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_34712,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34711,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33792){
var map__33793 = p__33792;
var map__33793__$1 = (((((!((map__33793 == null))))?(((((map__33793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33793):map__33793);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33793__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33789_SHARP_){
var and__4115__auto__ = p1__33789_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33789_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var name_34770__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34771 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34770__$1);
var maxparams_34772 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_34773 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34771),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_34774 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__33790_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__33790_SHARP_)));
}),cljs.core.seq(mmap_34773));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_34771," = null;");

var seq__33795_34775 = cljs.core.seq(ms_34774);
var chunk__33796_34776 = null;
var count__33797_34777 = (0);
var i__33798_34778 = (0);
while(true){
if((i__33798_34778 < count__33797_34777)){
var vec__33819_34779 = chunk__33796_34776.cljs$core$IIndexed$_nth$arity$2(null,i__33798_34778);
var n_34780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819_34779,(0),null);
var meth_34781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819_34779,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34780," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34781))){
cljs.compiler.emit_variadic_fn_method(meth_34781);
} else {
cljs.compiler.emit_fn_method(meth_34781);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34782 = seq__33795_34775;
var G__34783 = chunk__33796_34776;
var G__34784 = count__33797_34777;
var G__34785 = (i__33798_34778 + (1));
seq__33795_34775 = G__34782;
chunk__33796_34776 = G__34783;
count__33797_34777 = G__34784;
i__33798_34778 = G__34785;
continue;
} else {
var temp__5735__auto___34786 = cljs.core.seq(seq__33795_34775);
if(temp__5735__auto___34786){
var seq__33795_34787__$1 = temp__5735__auto___34786;
if(cljs.core.chunked_seq_QMARK_(seq__33795_34787__$1)){
var c__4556__auto___34788 = cljs.core.chunk_first(seq__33795_34787__$1);
var G__34790 = cljs.core.chunk_rest(seq__33795_34787__$1);
var G__34791 = c__4556__auto___34788;
var G__34792 = cljs.core.count(c__4556__auto___34788);
var G__34793 = (0);
seq__33795_34775 = G__34790;
chunk__33796_34776 = G__34791;
count__33797_34777 = G__34792;
i__33798_34778 = G__34793;
continue;
} else {
var vec__33823_34794 = cljs.core.first(seq__33795_34787__$1);
var n_34795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823_34794,(0),null);
var meth_34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823_34794,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34795," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34796))){
cljs.compiler.emit_variadic_fn_method(meth_34796);
} else {
cljs.compiler.emit_fn_method(meth_34796);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34801 = cljs.core.next(seq__33795_34787__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__33795_34775 = G__34801;
chunk__33796_34776 = G__34802;
count__33797_34777 = G__34803;
i__33798_34778 = G__34804;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34771," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_34772),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_34772)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_34772));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__33836_34805 = cljs.core.seq(ms_34774);
var chunk__33837_34806 = null;
var count__33838_34807 = (0);
var i__33839_34808 = (0);
while(true){
if((i__33839_34808 < count__33838_34807)){
var vec__33856_34811 = chunk__33837_34806.cljs$core$IIndexed$_nth$arity$2(null,i__33839_34808);
var n_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856_34811,(0),null);
var meth_34813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856_34811,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34813))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34814 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34814," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34815 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34814," = new cljs.core.IndexedSeq(",a_34815,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34812,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34772)),(((cljs.core.count(maxparams_34772) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34814,");"], 0));
} else {
var pcnt_34816 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34813));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34816,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34812,".call(this",(((pcnt_34816 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34816,maxparams_34772)),null,(1),null)),(2),null))),");");
}


var G__34817 = seq__33836_34805;
var G__34818 = chunk__33837_34806;
var G__34819 = count__33838_34807;
var G__34820 = (i__33839_34808 + (1));
seq__33836_34805 = G__34817;
chunk__33837_34806 = G__34818;
count__33838_34807 = G__34819;
i__33839_34808 = G__34820;
continue;
} else {
var temp__5735__auto___34821 = cljs.core.seq(seq__33836_34805);
if(temp__5735__auto___34821){
var seq__33836_34822__$1 = temp__5735__auto___34821;
if(cljs.core.chunked_seq_QMARK_(seq__33836_34822__$1)){
var c__4556__auto___34823 = cljs.core.chunk_first(seq__33836_34822__$1);
var G__34824 = cljs.core.chunk_rest(seq__33836_34822__$1);
var G__34825 = c__4556__auto___34823;
var G__34826 = cljs.core.count(c__4556__auto___34823);
var G__34827 = (0);
seq__33836_34805 = G__34824;
chunk__33837_34806 = G__34825;
count__33838_34807 = G__34826;
i__33839_34808 = G__34827;
continue;
} else {
var vec__33859_34828 = cljs.core.first(seq__33836_34822__$1);
var n_34829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859_34828,(0),null);
var meth_34830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859_34828,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34830))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34835 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34835," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34836 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34835," = new cljs.core.IndexedSeq(",a_34836,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34829,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34772)),(((cljs.core.count(maxparams_34772) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34835,");"], 0));
} else {
var pcnt_34837 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34830));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34837,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34829,".call(this",(((pcnt_34837 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34837,maxparams_34772)),null,(1),null)),(2),null))),");");
}


var G__34838 = cljs.core.next(seq__33836_34822__$1);
var G__34839 = null;
var G__34840 = (0);
var G__34841 = (0);
seq__33836_34805 = G__34838;
chunk__33837_34806 = G__34839;
count__33838_34807 = G__34840;
i__33839_34808 = G__34841;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_34842 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_34774)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_34842,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34771,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34771,".cljs$lang$applyTo = ",cljs.core.some((function (p1__33791_SHARP_){
var vec__33874 = p1__33791_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33874,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33874,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_34774),".cljs$lang$applyTo;");
} else {
}

var seq__33883_34846 = cljs.core.seq(ms_34774);
var chunk__33884_34847 = null;
var count__33885_34848 = (0);
var i__33886_34849 = (0);
while(true){
if((i__33886_34849 < count__33885_34848)){
var vec__33905_34850 = chunk__33884_34847.cljs$core$IIndexed$_nth$arity$2(null,i__33886_34849);
var n_34851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905_34850,(0),null);
var meth_34852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905_34850,(1),null);
var c_34853 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34852));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34852))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34771,".cljs$core$IFn$_invoke$arity$variadic = ",n_34851,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34771,".cljs$core$IFn$_invoke$arity$",c_34853," = ",n_34851,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34854 = seq__33883_34846;
var G__34855 = chunk__33884_34847;
var G__34856 = count__33885_34848;
var G__34857 = (i__33886_34849 + (1));
seq__33883_34846 = G__34854;
chunk__33884_34847 = G__34855;
count__33885_34848 = G__34856;
i__33886_34849 = G__34857;
continue;
} else {
var temp__5735__auto___34858 = cljs.core.seq(seq__33883_34846);
if(temp__5735__auto___34858){
var seq__33883_34860__$1 = temp__5735__auto___34858;
if(cljs.core.chunked_seq_QMARK_(seq__33883_34860__$1)){
var c__4556__auto___34864 = cljs.core.chunk_first(seq__33883_34860__$1);
var G__34865 = cljs.core.chunk_rest(seq__33883_34860__$1);
var G__34866 = c__4556__auto___34864;
var G__34867 = cljs.core.count(c__4556__auto___34864);
var G__34868 = (0);
seq__33883_34846 = G__34865;
chunk__33884_34847 = G__34866;
count__33885_34848 = G__34867;
i__33886_34849 = G__34868;
continue;
} else {
var vec__33908_34869 = cljs.core.first(seq__33883_34860__$1);
var n_34870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908_34869,(0),null);
var meth_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908_34869,(1),null);
var c_34872 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34871));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34871))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34771,".cljs$core$IFn$_invoke$arity$variadic = ",n_34870,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34771,".cljs$core$IFn$_invoke$arity$",c_34872," = ",n_34870,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34873 = cljs.core.next(seq__33883_34860__$1);
var G__34874 = null;
var G__34875 = (0);
var G__34876 = (0);
seq__33883_34846 = G__34873;
chunk__33884_34847 = G__34874;
count__33885_34848 = G__34875;
i__33886_34849 = G__34876;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34771,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33911){
var map__33912 = p__33911;
var map__33912__$1 = (((((!((map__33912 == null))))?(((((map__33912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33912):map__33912);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33912__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33912__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33912__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33916_34882 = cljs.core.seq(statements);
var chunk__33917_34883 = null;
var count__33918_34884 = (0);
var i__33919_34885 = (0);
while(true){
if((i__33919_34885 < count__33918_34884)){
var s_34886 = chunk__33917_34883.cljs$core$IIndexed$_nth$arity$2(null,i__33919_34885);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34886);


var G__34887 = seq__33916_34882;
var G__34888 = chunk__33917_34883;
var G__34889 = count__33918_34884;
var G__34890 = (i__33919_34885 + (1));
seq__33916_34882 = G__34887;
chunk__33917_34883 = G__34888;
count__33918_34884 = G__34889;
i__33919_34885 = G__34890;
continue;
} else {
var temp__5735__auto___34891 = cljs.core.seq(seq__33916_34882);
if(temp__5735__auto___34891){
var seq__33916_34892__$1 = temp__5735__auto___34891;
if(cljs.core.chunked_seq_QMARK_(seq__33916_34892__$1)){
var c__4556__auto___34893 = cljs.core.chunk_first(seq__33916_34892__$1);
var G__34894 = cljs.core.chunk_rest(seq__33916_34892__$1);
var G__34895 = c__4556__auto___34893;
var G__34896 = cljs.core.count(c__4556__auto___34893);
var G__34897 = (0);
seq__33916_34882 = G__34894;
chunk__33917_34883 = G__34895;
count__33918_34884 = G__34896;
i__33919_34885 = G__34897;
continue;
} else {
var s_34898 = cljs.core.first(seq__33916_34892__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34898);


var G__34899 = cljs.core.next(seq__33916_34892__$1);
var G__34900 = null;
var G__34901 = (0);
var G__34902 = (0);
seq__33916_34882 = G__34899;
chunk__33917_34883 = G__34900;
count__33918_34884 = G__34901;
i__33919_34885 = G__34902;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33922){
var map__33923 = p__33922;
var map__33923__$1 = (((((!((map__33923 == null))))?(((((map__33923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33923):map__33923);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33935,is_loop){
var map__33937 = p__33935;
var map__33937__$1 = (((((!((map__33937 == null))))?(((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33937):map__33937);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33944_34906 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33945_34907 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33945_34907);

try{var seq__33947_34913 = cljs.core.seq(bindings);
var chunk__33948_34914 = null;
var count__33949_34915 = (0);
var i__33950_34916 = (0);
while(true){
if((i__33950_34916 < count__33949_34915)){
var map__33958_34917 = chunk__33948_34914.cljs$core$IIndexed$_nth$arity$2(null,i__33950_34916);
var map__33958_34918__$1 = (((((!((map__33958_34917 == null))))?(((((map__33958_34917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33958_34917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33958_34917):map__33958_34917);
var binding_34919 = map__33958_34918__$1;
var init_34920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33958_34918__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34919);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34920,";");


var G__34921 = seq__33947_34913;
var G__34922 = chunk__33948_34914;
var G__34923 = count__33949_34915;
var G__34924 = (i__33950_34916 + (1));
seq__33947_34913 = G__34921;
chunk__33948_34914 = G__34922;
count__33949_34915 = G__34923;
i__33950_34916 = G__34924;
continue;
} else {
var temp__5735__auto___34925 = cljs.core.seq(seq__33947_34913);
if(temp__5735__auto___34925){
var seq__33947_34926__$1 = temp__5735__auto___34925;
if(cljs.core.chunked_seq_QMARK_(seq__33947_34926__$1)){
var c__4556__auto___34927 = cljs.core.chunk_first(seq__33947_34926__$1);
var G__34928 = cljs.core.chunk_rest(seq__33947_34926__$1);
var G__34929 = c__4556__auto___34927;
var G__34930 = cljs.core.count(c__4556__auto___34927);
var G__34931 = (0);
seq__33947_34913 = G__34928;
chunk__33948_34914 = G__34929;
count__33949_34915 = G__34930;
i__33950_34916 = G__34931;
continue;
} else {
var map__33961_34932 = cljs.core.first(seq__33947_34926__$1);
var map__33961_34933__$1 = (((((!((map__33961_34932 == null))))?(((((map__33961_34932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33961_34932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33961_34932):map__33961_34932);
var binding_34934 = map__33961_34933__$1;
var init_34935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961_34933__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34934);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34935,";");


var G__34936 = cljs.core.next(seq__33947_34926__$1);
var G__34937 = null;
var G__34938 = (0);
var G__34939 = (0);
seq__33947_34913 = G__34936;
chunk__33948_34914 = G__34937;
count__33949_34915 = G__34938;
i__33950_34916 = G__34939;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33944_34906);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33965){
var map__33966 = p__33965;
var map__33966__$1 = (((((!((map__33966 == null))))?(((((map__33966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33966):map__33966);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___34940 = cljs.core.count(exprs);
var i_34941 = (0);
while(true){
if((i_34941 < n__4613__auto___34940)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34941) : temps.call(null,i_34941))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_34941) : exprs.call(null,i_34941)),";");

var G__34942 = (i_34941 + (1));
i_34941 = G__34942;
continue;
} else {
}
break;
}

var n__4613__auto___34943 = cljs.core.count(exprs);
var i_34944 = (0);
while(true){
if((i_34944 < n__4613__auto___34943)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_34944) : params.call(null,i_34944)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34944) : temps.call(null,i_34944)),";");

var G__34949 = (i_34944 + (1));
i_34944 = G__34949;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33971){
var map__33973 = p__33971;
var map__33973__$1 = (((((!((map__33973 == null))))?(((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33973):map__33973);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33976_34950 = cljs.core.seq(bindings);
var chunk__33977_34951 = null;
var count__33978_34952 = (0);
var i__33979_34953 = (0);
while(true){
if((i__33979_34953 < count__33978_34952)){
var map__33986_34954 = chunk__33977_34951.cljs$core$IIndexed$_nth$arity$2(null,i__33979_34953);
var map__33986_34955__$1 = (((((!((map__33986_34954 == null))))?(((((map__33986_34954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33986_34954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33986_34954):map__33986_34954);
var binding_34956 = map__33986_34955__$1;
var init_34957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33986_34955__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34956)," = ",init_34957,";");


var G__34958 = seq__33976_34950;
var G__34959 = chunk__33977_34951;
var G__34960 = count__33978_34952;
var G__34961 = (i__33979_34953 + (1));
seq__33976_34950 = G__34958;
chunk__33977_34951 = G__34959;
count__33978_34952 = G__34960;
i__33979_34953 = G__34961;
continue;
} else {
var temp__5735__auto___34962 = cljs.core.seq(seq__33976_34950);
if(temp__5735__auto___34962){
var seq__33976_34963__$1 = temp__5735__auto___34962;
if(cljs.core.chunked_seq_QMARK_(seq__33976_34963__$1)){
var c__4556__auto___34964 = cljs.core.chunk_first(seq__33976_34963__$1);
var G__34965 = cljs.core.chunk_rest(seq__33976_34963__$1);
var G__34966 = c__4556__auto___34964;
var G__34967 = cljs.core.count(c__4556__auto___34964);
var G__34968 = (0);
seq__33976_34950 = G__34965;
chunk__33977_34951 = G__34966;
count__33978_34952 = G__34967;
i__33979_34953 = G__34968;
continue;
} else {
var map__33995_34969 = cljs.core.first(seq__33976_34963__$1);
var map__33995_34970__$1 = (((((!((map__33995_34969 == null))))?(((((map__33995_34969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33995_34969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33995_34969):map__33995_34969);
var binding_34971 = map__33995_34970__$1;
var init_34972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33995_34970__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34971)," = ",init_34972,";");


var G__34977 = cljs.core.next(seq__33976_34963__$1);
var G__34978 = null;
var G__34979 = (0);
var G__34980 = (0);
seq__33976_34950 = G__34977;
chunk__33977_34951 = G__34978;
count__33978_34952 = G__34979;
i__33979_34953 = G__34980;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__34019){
var map__34020 = p__34019;
var map__34020__$1 = (((((!((map__34020 == null))))?(((((map__34020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34020):map__34020);
var expr = map__34020__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34020__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34020__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__34040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__34040.cljs$core$IFn$_invoke$arity$1 ? fexpr__34040.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__34040.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
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
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__34042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__34042.cljs$core$IFn$_invoke$arity$1 ? fexpr__34042.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__34042.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__34024 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__34012_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34012_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__34013_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34013_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024,(1),null);
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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
var pimpl_34995 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_34995,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34997 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_34997,args)),(((mfa_34997 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_34997,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__34082 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__34081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__34081.cljs$core$IFn$_invoke$arity$1 ? fexpr__34081.cljs$core$IFn$_invoke$arity$1(G__34082) : fexpr__34081.call(null,G__34082));
} else {
return and__4115__auto__;
}
})())){
var fprop_35001 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_35001," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_35001,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_35001," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_35001,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__34091){
var map__34092 = p__34091;
var map__34092__$1 = (((((!((map__34092 == null))))?(((((map__34092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34092):map__34092);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34092__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__34094){
var map__34095 = p__34094;
var map__34095__$1 = (((((!((map__34095 == null))))?(((((map__34095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34095):map__34095);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__34112 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__34112__$1 = (((((!((map__34112 == null))))?(((((map__34112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34112):map__34112);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34112__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34112__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__34113 = options;
var map__34113__$1 = (((((!((map__34113 == null))))?(((((map__34113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34113):map__34113);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34113__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34113__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34113__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__34114 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__34123 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__34123__$1 = (((((!((map__34123 == null))))?(((((map__34123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34123):map__34123);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34123__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34123__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__34128_35012 = cljs.core.seq(libs_to_load);
var chunk__34129_35013 = null;
var count__34130_35014 = (0);
var i__34131_35015 = (0);
while(true){
if((i__34131_35015 < count__34130_35014)){
var lib_35016 = chunk__34129_35013.cljs$core$IIndexed$_nth$arity$2(null,i__34131_35015);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_35016)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_35016),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35016),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_35016),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35016),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_35016,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35016),"');");
}

}
}
}


var G__35017 = seq__34128_35012;
var G__35018 = chunk__34129_35013;
var G__35019 = count__34130_35014;
var G__35020 = (i__34131_35015 + (1));
seq__34128_35012 = G__35017;
chunk__34129_35013 = G__35018;
count__34130_35014 = G__35019;
i__34131_35015 = G__35020;
continue;
} else {
var temp__5735__auto___35021 = cljs.core.seq(seq__34128_35012);
if(temp__5735__auto___35021){
var seq__34128_35022__$1 = temp__5735__auto___35021;
if(cljs.core.chunked_seq_QMARK_(seq__34128_35022__$1)){
var c__4556__auto___35023 = cljs.core.chunk_first(seq__34128_35022__$1);
var G__35024 = cljs.core.chunk_rest(seq__34128_35022__$1);
var G__35025 = c__4556__auto___35023;
var G__35026 = cljs.core.count(c__4556__auto___35023);
var G__35027 = (0);
seq__34128_35012 = G__35024;
chunk__34129_35013 = G__35025;
count__34130_35014 = G__35026;
i__34131_35015 = G__35027;
continue;
} else {
var lib_35028 = cljs.core.first(seq__34128_35022__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_35028)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_35028),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35028),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_35028),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35028),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_35028,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_35028),"');");
}

}
}
}


var G__35029 = cljs.core.next(seq__34128_35022__$1);
var G__35030 = null;
var G__35031 = (0);
var G__35032 = (0);
seq__34128_35012 = G__35029;
chunk__34129_35013 = G__35030;
count__34130_35014 = G__35031;
i__34131_35015 = G__35032;
continue;
}
} else {
}
}
break;
}

var seq__34134_35033 = cljs.core.seq(node_libs);
var chunk__34135_35034 = null;
var count__34136_35035 = (0);
var i__34137_35036 = (0);
while(true){
if((i__34137_35036 < count__34136_35035)){
var lib_35037 = chunk__34135_35034.cljs$core$IIndexed$_nth$arity$2(null,i__34137_35036);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_35037)," = require('",lib_35037,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__35038 = seq__34134_35033;
var G__35039 = chunk__34135_35034;
var G__35040 = count__34136_35035;
var G__35041 = (i__34137_35036 + (1));
seq__34134_35033 = G__35038;
chunk__34135_35034 = G__35039;
count__34136_35035 = G__35040;
i__34137_35036 = G__35041;
continue;
} else {
var temp__5735__auto___35046 = cljs.core.seq(seq__34134_35033);
if(temp__5735__auto___35046){
var seq__34134_35047__$1 = temp__5735__auto___35046;
if(cljs.core.chunked_seq_QMARK_(seq__34134_35047__$1)){
var c__4556__auto___35048 = cljs.core.chunk_first(seq__34134_35047__$1);
var G__35049 = cljs.core.chunk_rest(seq__34134_35047__$1);
var G__35050 = c__4556__auto___35048;
var G__35051 = cljs.core.count(c__4556__auto___35048);
var G__35052 = (0);
seq__34134_35033 = G__35049;
chunk__34135_35034 = G__35050;
count__34136_35035 = G__35051;
i__34137_35036 = G__35052;
continue;
} else {
var lib_35053 = cljs.core.first(seq__34134_35047__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_35053)," = require('",lib_35053,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__35054 = cljs.core.next(seq__34134_35047__$1);
var G__35055 = null;
var G__35056 = (0);
var G__35057 = (0);
seq__34134_35033 = G__35054;
chunk__34135_35034 = G__35055;
count__34136_35035 = G__35056;
i__34137_35036 = G__35057;
continue;
}
} else {
}
}
break;
}

var seq__34142_35058 = cljs.core.seq(global_exports_libs);
var chunk__34143_35059 = null;
var count__34144_35060 = (0);
var i__34145_35061 = (0);
while(true){
if((i__34145_35061 < count__34144_35060)){
var lib_35062 = chunk__34143_35059.cljs$core$IIndexed$_nth$arity$2(null,i__34145_35061);
var map__34150_35063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_35062));
var map__34150_35064__$1 = (((((!((map__34150_35063 == null))))?(((((map__34150_35063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34150_35063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34150_35063):map__34150_35063);
var global_exports_35065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34150_35064__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_35065,lib_35062);


var G__35066 = seq__34142_35058;
var G__35067 = chunk__34143_35059;
var G__35068 = count__34144_35060;
var G__35069 = (i__34145_35061 + (1));
seq__34142_35058 = G__35066;
chunk__34143_35059 = G__35067;
count__34144_35060 = G__35068;
i__34145_35061 = G__35069;
continue;
} else {
var temp__5735__auto___35070 = cljs.core.seq(seq__34142_35058);
if(temp__5735__auto___35070){
var seq__34142_35071__$1 = temp__5735__auto___35070;
if(cljs.core.chunked_seq_QMARK_(seq__34142_35071__$1)){
var c__4556__auto___35072 = cljs.core.chunk_first(seq__34142_35071__$1);
var G__35073 = cljs.core.chunk_rest(seq__34142_35071__$1);
var G__35074 = c__4556__auto___35072;
var G__35075 = cljs.core.count(c__4556__auto___35072);
var G__35076 = (0);
seq__34142_35058 = G__35073;
chunk__34143_35059 = G__35074;
count__34144_35060 = G__35075;
i__34145_35061 = G__35076;
continue;
} else {
var lib_35077 = cljs.core.first(seq__34142_35071__$1);
var map__34157_35078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_35077));
var map__34157_35079__$1 = (((((!((map__34157_35078 == null))))?(((((map__34157_35078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34157_35078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34157_35078):map__34157_35078);
var global_exports_35080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157_35079__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_35080,lib_35077);


var G__35081 = cljs.core.next(seq__34142_35071__$1);
var G__35082 = null;
var G__35083 = (0);
var G__35084 = (0);
seq__34142_35058 = G__35081;
chunk__34143_35059 = G__35082;
count__34144_35060 = G__35083;
i__34145_35061 = G__35084;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__34162){
var map__34163 = p__34162;
var map__34163__$1 = (((((!((map__34163 == null))))?(((((map__34163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34163):map__34163);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__34165){
var map__34166 = p__34165;
var map__34166__$1 = (((((!((map__34166 == null))))?(((((map__34166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34166):map__34166);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__34176){
var map__34177 = p__34176;
var map__34177__$1 = (((((!((map__34177 == null))))?(((((map__34177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34177):map__34177);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34177__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34177__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34177__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34177__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34177__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__34181_35094 = cljs.core.seq(protocols);
var chunk__34182_35095 = null;
var count__34183_35096 = (0);
var i__34184_35097 = (0);
while(true){
if((i__34184_35097 < count__34183_35096)){
var protocol_35098 = chunk__34182_35095.cljs$core$IIndexed$_nth$arity$2(null,i__34184_35097);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35098)),"}");


var G__35099 = seq__34181_35094;
var G__35100 = chunk__34182_35095;
var G__35101 = count__34183_35096;
var G__35102 = (i__34184_35097 + (1));
seq__34181_35094 = G__35099;
chunk__34182_35095 = G__35100;
count__34183_35096 = G__35101;
i__34184_35097 = G__35102;
continue;
} else {
var temp__5735__auto___35103 = cljs.core.seq(seq__34181_35094);
if(temp__5735__auto___35103){
var seq__34181_35105__$1 = temp__5735__auto___35103;
if(cljs.core.chunked_seq_QMARK_(seq__34181_35105__$1)){
var c__4556__auto___35106 = cljs.core.chunk_first(seq__34181_35105__$1);
var G__35107 = cljs.core.chunk_rest(seq__34181_35105__$1);
var G__35108 = c__4556__auto___35106;
var G__35109 = cljs.core.count(c__4556__auto___35106);
var G__35110 = (0);
seq__34181_35094 = G__35107;
chunk__34182_35095 = G__35108;
count__34183_35096 = G__35109;
i__34184_35097 = G__35110;
continue;
} else {
var protocol_35111 = cljs.core.first(seq__34181_35105__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35111)),"}");


var G__35112 = cljs.core.next(seq__34181_35105__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34181_35094 = G__35112;
chunk__34182_35095 = G__35113;
count__34183_35096 = G__35114;
i__34184_35097 = G__35115;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__34189_35116 = cljs.core.seq(fields__$1);
var chunk__34190_35117 = null;
var count__34191_35118 = (0);
var i__34192_35119 = (0);
while(true){
if((i__34192_35119 < count__34191_35118)){
var fld_35120 = chunk__34190_35117.cljs$core$IIndexed$_nth$arity$2(null,i__34192_35119);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35120," = ",fld_35120,";");


var G__35121 = seq__34189_35116;
var G__35122 = chunk__34190_35117;
var G__35123 = count__34191_35118;
var G__35124 = (i__34192_35119 + (1));
seq__34189_35116 = G__35121;
chunk__34190_35117 = G__35122;
count__34191_35118 = G__35123;
i__34192_35119 = G__35124;
continue;
} else {
var temp__5735__auto___35125 = cljs.core.seq(seq__34189_35116);
if(temp__5735__auto___35125){
var seq__34189_35126__$1 = temp__5735__auto___35125;
if(cljs.core.chunked_seq_QMARK_(seq__34189_35126__$1)){
var c__4556__auto___35127 = cljs.core.chunk_first(seq__34189_35126__$1);
var G__35128 = cljs.core.chunk_rest(seq__34189_35126__$1);
var G__35129 = c__4556__auto___35127;
var G__35130 = cljs.core.count(c__4556__auto___35127);
var G__35131 = (0);
seq__34189_35116 = G__35128;
chunk__34190_35117 = G__35129;
count__34191_35118 = G__35130;
i__34192_35119 = G__35131;
continue;
} else {
var fld_35132 = cljs.core.first(seq__34189_35126__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35132," = ",fld_35132,";");


var G__35133 = cljs.core.next(seq__34189_35126__$1);
var G__35134 = null;
var G__35135 = (0);
var G__35136 = (0);
seq__34189_35116 = G__35133;
chunk__34190_35117 = G__35134;
count__34191_35118 = G__35135;
i__34192_35119 = G__35136;
continue;
}
} else {
}
}
break;
}

var seq__34194_35137 = cljs.core.seq(pmasks);
var chunk__34195_35138 = null;
var count__34196_35139 = (0);
var i__34197_35140 = (0);
while(true){
if((i__34197_35140 < count__34196_35139)){
var vec__34205_35141 = chunk__34195_35138.cljs$core$IIndexed$_nth$arity$2(null,i__34197_35140);
var pno_35142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34205_35141,(0),null);
var pmask_35143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34205_35141,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35142,"$ = ",pmask_35143,";");


var G__35144 = seq__34194_35137;
var G__35145 = chunk__34195_35138;
var G__35146 = count__34196_35139;
var G__35147 = (i__34197_35140 + (1));
seq__34194_35137 = G__35144;
chunk__34195_35138 = G__35145;
count__34196_35139 = G__35146;
i__34197_35140 = G__35147;
continue;
} else {
var temp__5735__auto___35148 = cljs.core.seq(seq__34194_35137);
if(temp__5735__auto___35148){
var seq__34194_35149__$1 = temp__5735__auto___35148;
if(cljs.core.chunked_seq_QMARK_(seq__34194_35149__$1)){
var c__4556__auto___35150 = cljs.core.chunk_first(seq__34194_35149__$1);
var G__35151 = cljs.core.chunk_rest(seq__34194_35149__$1);
var G__35152 = c__4556__auto___35150;
var G__35153 = cljs.core.count(c__4556__auto___35150);
var G__35154 = (0);
seq__34194_35137 = G__35151;
chunk__34195_35138 = G__35152;
count__34196_35139 = G__35153;
i__34197_35140 = G__35154;
continue;
} else {
var vec__34208_35156 = cljs.core.first(seq__34194_35149__$1);
var pno_35157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34208_35156,(0),null);
var pmask_35158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34208_35156,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35157,"$ = ",pmask_35158,";");


var G__35163 = cljs.core.next(seq__34194_35149__$1);
var G__35164 = null;
var G__35165 = (0);
var G__35166 = (0);
seq__34194_35137 = G__35163;
chunk__34195_35138 = G__35164;
count__34196_35139 = G__35165;
i__34197_35140 = G__35166;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__34211){
var map__34212 = p__34211;
var map__34212__$1 = (((((!((map__34212 == null))))?(((((map__34212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34212):map__34212);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34212__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34212__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34212__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34212__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34212__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__34214_35177 = cljs.core.seq(protocols);
var chunk__34215_35178 = null;
var count__34216_35179 = (0);
var i__34217_35180 = (0);
while(true){
if((i__34217_35180 < count__34216_35179)){
var protocol_35181 = chunk__34215_35178.cljs$core$IIndexed$_nth$arity$2(null,i__34217_35180);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35181)),"}");


var G__35185 = seq__34214_35177;
var G__35186 = chunk__34215_35178;
var G__35187 = count__34216_35179;
var G__35188 = (i__34217_35180 + (1));
seq__34214_35177 = G__35185;
chunk__34215_35178 = G__35186;
count__34216_35179 = G__35187;
i__34217_35180 = G__35188;
continue;
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34214_35177);
if(temp__5735__auto___35189){
var seq__34214_35190__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34214_35190__$1)){
var c__4556__auto___35191 = cljs.core.chunk_first(seq__34214_35190__$1);
var G__35192 = cljs.core.chunk_rest(seq__34214_35190__$1);
var G__35193 = c__4556__auto___35191;
var G__35194 = cljs.core.count(c__4556__auto___35191);
var G__35195 = (0);
seq__34214_35177 = G__35192;
chunk__34215_35178 = G__35193;
count__34216_35179 = G__35194;
i__34217_35180 = G__35195;
continue;
} else {
var protocol_35196 = cljs.core.first(seq__34214_35190__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35196)),"}");


var G__35197 = cljs.core.next(seq__34214_35190__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34214_35177 = G__35197;
chunk__34215_35178 = G__35198;
count__34216_35179 = G__35199;
i__34217_35180 = G__35200;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__34221_35204 = cljs.core.seq(fields__$1);
var chunk__34222_35205 = null;
var count__34223_35206 = (0);
var i__34224_35207 = (0);
while(true){
if((i__34224_35207 < count__34223_35206)){
var fld_35208 = chunk__34222_35205.cljs$core$IIndexed$_nth$arity$2(null,i__34224_35207);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35208," = ",fld_35208,";");


var G__35209 = seq__34221_35204;
var G__35210 = chunk__34222_35205;
var G__35211 = count__34223_35206;
var G__35212 = (i__34224_35207 + (1));
seq__34221_35204 = G__35209;
chunk__34222_35205 = G__35210;
count__34223_35206 = G__35211;
i__34224_35207 = G__35212;
continue;
} else {
var temp__5735__auto___35213 = cljs.core.seq(seq__34221_35204);
if(temp__5735__auto___35213){
var seq__34221_35214__$1 = temp__5735__auto___35213;
if(cljs.core.chunked_seq_QMARK_(seq__34221_35214__$1)){
var c__4556__auto___35215 = cljs.core.chunk_first(seq__34221_35214__$1);
var G__35216 = cljs.core.chunk_rest(seq__34221_35214__$1);
var G__35217 = c__4556__auto___35215;
var G__35218 = cljs.core.count(c__4556__auto___35215);
var G__35219 = (0);
seq__34221_35204 = G__35216;
chunk__34222_35205 = G__35217;
count__34223_35206 = G__35218;
i__34224_35207 = G__35219;
continue;
} else {
var fld_35220 = cljs.core.first(seq__34221_35214__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35220," = ",fld_35220,";");


var G__35221 = cljs.core.next(seq__34221_35214__$1);
var G__35222 = null;
var G__35223 = (0);
var G__35224 = (0);
seq__34221_35204 = G__35221;
chunk__34222_35205 = G__35222;
count__34223_35206 = G__35223;
i__34224_35207 = G__35224;
continue;
}
} else {
}
}
break;
}

var seq__34225_35225 = cljs.core.seq(pmasks);
var chunk__34226_35226 = null;
var count__34227_35227 = (0);
var i__34228_35228 = (0);
while(true){
if((i__34228_35228 < count__34227_35227)){
var vec__34235_35229 = chunk__34226_35226.cljs$core$IIndexed$_nth$arity$2(null,i__34228_35228);
var pno_35230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34235_35229,(0),null);
var pmask_35231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34235_35229,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35230,"$ = ",pmask_35231,";");


var G__35236 = seq__34225_35225;
var G__35237 = chunk__34226_35226;
var G__35238 = count__34227_35227;
var G__35239 = (i__34228_35228 + (1));
seq__34225_35225 = G__35236;
chunk__34226_35226 = G__35237;
count__34227_35227 = G__35238;
i__34228_35228 = G__35239;
continue;
} else {
var temp__5735__auto___35241 = cljs.core.seq(seq__34225_35225);
if(temp__5735__auto___35241){
var seq__34225_35242__$1 = temp__5735__auto___35241;
if(cljs.core.chunked_seq_QMARK_(seq__34225_35242__$1)){
var c__4556__auto___35243 = cljs.core.chunk_first(seq__34225_35242__$1);
var G__35244 = cljs.core.chunk_rest(seq__34225_35242__$1);
var G__35245 = c__4556__auto___35243;
var G__35246 = cljs.core.count(c__4556__auto___35243);
var G__35247 = (0);
seq__34225_35225 = G__35244;
chunk__34226_35226 = G__35245;
count__34227_35227 = G__35246;
i__34228_35228 = G__35247;
continue;
} else {
var vec__34238_35248 = cljs.core.first(seq__34225_35242__$1);
var pno_35249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34238_35248,(0),null);
var pmask_35250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34238_35248,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35249,"$ = ",pmask_35250,";");


var G__35251 = cljs.core.next(seq__34225_35242__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__34225_35225 = G__35251;
chunk__34226_35226 = G__35252;
count__34227_35227 = G__35253;
i__34228_35228 = G__35254;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__34242){
var map__34243 = p__34242;
var map__34243__$1 = (((((!((map__34243 == null))))?(((((map__34243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34243):map__34243);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34247){
var map__34248 = p__34247;
var map__34248__$1 = (((((!((map__34248 == null))))?(((((map__34248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34248):map__34248);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__34259 = cljs.core.seq(table);
var chunk__34260 = null;
var count__34261 = (0);
var i__34262 = (0);
while(true){
if((i__34262 < count__34261)){
var vec__34269 = chunk__34260.cljs$core$IIndexed$_nth$arity$2(null,i__34262);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(1),null);
var ns_35257 = cljs.core.namespace(sym);
var name_35258 = cljs.core.name(sym);
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


var G__35259 = seq__34259;
var G__35260 = chunk__34260;
var G__35261 = count__34261;
var G__35262 = (i__34262 + (1));
seq__34259 = G__35259;
chunk__34260 = G__35260;
count__34261 = G__35261;
i__34262 = G__35262;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34259);
if(temp__5735__auto__){
var seq__34259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34259__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34259__$1);
var G__35263 = cljs.core.chunk_rest(seq__34259__$1);
var G__35264 = c__4556__auto__;
var G__35265 = cljs.core.count(c__4556__auto__);
var G__35266 = (0);
seq__34259 = G__35263;
chunk__34260 = G__35264;
count__34261 = G__35265;
i__34262 = G__35266;
continue;
} else {
var vec__34273 = cljs.core.first(seq__34259__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273,(1),null);
var ns_35267 = cljs.core.namespace(sym);
var name_35268 = cljs.core.name(sym);
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


var G__35273 = cljs.core.next(seq__34259__$1);
var G__35274 = null;
var G__35275 = (0);
var G__35276 = (0);
seq__34259 = G__35273;
chunk__34260 = G__35274;
count__34261 = G__35275;
i__34262 = G__35276;
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
var G__34277 = arguments.length;
switch (G__34277) {
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
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_35279 = cljs.core.first(ks);
var vec__34278_35280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_35279);
var top_35281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278_35280,(0),null);
var prefix_SINGLEQUOTE__35282 = vec__34278_35280;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35279)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__35282) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_35281)) || (cljs.core.contains_QMARK_(known_externs,top_35281)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35282)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_35281);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35282)),";");
}
} else {
}

var m_35284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_35279);
if(cljs.core.empty_QMARK_(m_35284)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__35282,m_35284,top_level,known_externs);
}

var G__35285 = cljs.core.next(ks);
ks = G__35285;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
