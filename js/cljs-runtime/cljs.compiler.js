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
var map__51059 = s;
var map__51059__$1 = (((((!((map__51059 == null))))?(((((map__51059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51059):map__51059);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51059__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__51062 = info;
var map__51063 = G__51062;
var map__51063__$1 = (((((!((map__51063 == null))))?(((((map__51063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51063):map__51063);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51063__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__51062__$1 = G__51062;
while(true){
var d__$2 = d__$1;
var map__51067 = G__51062__$1;
var map__51067__$1 = (((((!((map__51067 == null))))?(((((map__51067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51067):map__51067);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51067__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__51861 = (d__$2 + (1));
var G__51862 = shadow__$2;
d__$1 = G__51861;
G__51062__$1 = G__51862;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__51069){
var map__51070 = p__51069;
var map__51070__$1 = (((((!((map__51070 == null))))?(((((map__51070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51070):map__51070);
var name_var = map__51070__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51070__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__51072 = info;
var map__51072__$1 = (((((!((map__51072 == null))))?(((((map__51072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51072):map__51072);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__51074 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__51074) : cljs.compiler.munge.call(null,G__51074));
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
var G__51077 = arguments.length;
switch (G__51077) {
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
var ms = (function (){var fexpr__51081 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__51081.cljs$core$IFn$_invoke$arity$1 ? fexpr__51081.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__51081.call(null,ss__$3));
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
var G__51082 = cp;
switch (G__51082) {
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
var seq__51084_51865 = cljs.core.seq(s);
var chunk__51085_51866 = null;
var count__51086_51867 = (0);
var i__51087_51868 = (0);
while(true){
if((i__51087_51868 < count__51086_51867)){
var c_51869 = chunk__51085_51866.cljs$core$IIndexed$_nth$arity$2(null,i__51087_51868);
sb.append(cljs.compiler.escape_char(c_51869));


var G__51870 = seq__51084_51865;
var G__51871 = chunk__51085_51866;
var G__51872 = count__51086_51867;
var G__51873 = (i__51087_51868 + (1));
seq__51084_51865 = G__51870;
chunk__51085_51866 = G__51871;
count__51086_51867 = G__51872;
i__51087_51868 = G__51873;
continue;
} else {
var temp__5735__auto___51874 = cljs.core.seq(seq__51084_51865);
if(temp__5735__auto___51874){
var seq__51084_51875__$1 = temp__5735__auto___51874;
if(cljs.core.chunked_seq_QMARK_(seq__51084_51875__$1)){
var c__4556__auto___51876 = cljs.core.chunk_first(seq__51084_51875__$1);
var G__51877 = cljs.core.chunk_rest(seq__51084_51875__$1);
var G__51878 = c__4556__auto___51876;
var G__51879 = cljs.core.count(c__4556__auto___51876);
var G__51880 = (0);
seq__51084_51865 = G__51877;
chunk__51085_51866 = G__51878;
count__51086_51867 = G__51879;
i__51087_51868 = G__51880;
continue;
} else {
var c_51881 = cljs.core.first(seq__51084_51875__$1);
sb.append(cljs.compiler.escape_char(c_51881));


var G__51882 = cljs.core.next(seq__51084_51875__$1);
var G__51883 = null;
var G__51884 = (0);
var G__51885 = (0);
seq__51084_51865 = G__51882;
chunk__51085_51866 = G__51883;
count__51086_51867 = G__51884;
i__51087_51868 = G__51885;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51089 = cljs.core.get_global_hierarchy;
return (fexpr__51089.cljs$core$IFn$_invoke$arity$0 ? fexpr__51089.cljs$core$IFn$_invoke$arity$0() : fexpr__51089.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__51090_51886 = ast;
var map__51090_51887__$1 = (((((!((map__51090_51886 == null))))?(((((map__51090_51886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51090_51886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51090_51886):map__51090_51886);
var env_51888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51090_51887__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_51888))){
var map__51092_51889 = env_51888;
var map__51092_51890__$1 = (((((!((map__51092_51889 == null))))?(((((map__51092_51889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51092_51889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51092_51889):map__51092_51889);
var line_51891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092_51890__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092_51890__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__51094 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__51096 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__51095 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__51095.cljs$core$IFn$_invoke$arity$1 ? fexpr__51095.cljs$core$IFn$_invoke$arity$1(G__51096) : fexpr__51095.call(null,G__51096));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51094,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__51094;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_51891 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_51892)?(column_51892 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__51106 = arguments.length;
switch (G__51106) {
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
var len__4736__auto___51894 = arguments.length;
var i__4737__auto___51895 = (0);
while(true){
if((i__4737__auto___51895 < len__4736__auto___51894)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51895]));

var G__51896 = (i__4737__auto___51895 + (1));
i__4737__auto___51895 = G__51896;
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
var s_51897 = (function (){var G__51107 = a;
if((!(typeof a === 'string'))){
return G__51107.toString();
} else {
return G__51107;
}
})();
var temp__5739__auto___51898 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___51898 == null)){
} else {
var sm_data_51899 = temp__5739__auto___51898;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_51899,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__51097_SHARP_){
return (p1__51097_SHARP_ + s_51897.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_51897], 0));

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

var seq__51121 = cljs.core.seq(xs);
var chunk__51122 = null;
var count__51123 = (0);
var i__51124 = (0);
while(true){
if((i__51124 < count__51123)){
var x = chunk__51122.cljs$core$IIndexed$_nth$arity$2(null,i__51124);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__51900 = seq__51121;
var G__51901 = chunk__51122;
var G__51902 = count__51123;
var G__51903 = (i__51124 + (1));
seq__51121 = G__51900;
chunk__51122 = G__51901;
count__51123 = G__51902;
i__51124 = G__51903;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51121);
if(temp__5735__auto__){
var seq__51121__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51121__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51121__$1);
var G__51904 = cljs.core.chunk_rest(seq__51121__$1);
var G__51905 = c__4556__auto__;
var G__51906 = cljs.core.count(c__4556__auto__);
var G__51907 = (0);
seq__51121 = G__51904;
chunk__51122 = G__51905;
count__51123 = G__51906;
i__51124 = G__51907;
continue;
} else {
var x = cljs.core.first(seq__51121__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__51908 = cljs.core.next(seq__51121__$1);
var G__51909 = null;
var G__51910 = (0);
var G__51911 = (0);
seq__51121 = G__51908;
chunk__51122 = G__51909;
count__51123 = G__51910;
i__51124 = G__51911;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq51099){
var G__51100 = cljs.core.first(seq51099);
var seq51099__$1 = cljs.core.next(seq51099);
var G__51101 = cljs.core.first(seq51099__$1);
var seq51099__$2 = cljs.core.next(seq51099__$1);
var G__51102 = cljs.core.first(seq51099__$2);
var seq51099__$3 = cljs.core.next(seq51099__$2);
var G__51103 = cljs.core.first(seq51099__$3);
var seq51099__$4 = cljs.core.next(seq51099__$3);
var G__51104 = cljs.core.first(seq51099__$4);
var seq51099__$5 = cljs.core.next(seq51099__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51100,G__51101,G__51102,G__51103,G__51104,seq51099__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__51126){
var map__51127 = p__51126;
var map__51127__$1 = (((((!((map__51127 == null))))?(((((map__51127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51127):map__51127);
var m = map__51127__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51127__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__51136 = arguments.length;
switch (G__51136) {
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
var len__4736__auto___51921 = arguments.length;
var i__4737__auto___51922 = (0);
while(true){
if((i__4737__auto___51922 < len__4736__auto___51921)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51922]));

var G__51923 = (i__4737__auto___51922 + (1));
i__4737__auto___51922 = G__51923;
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

var seq__51140_51926 = cljs.core.seq(xs);
var chunk__51141_51927 = null;
var count__51142_51928 = (0);
var i__51143_51929 = (0);
while(true){
if((i__51143_51929 < count__51142_51928)){
var x_51930 = chunk__51141_51927.cljs$core$IIndexed$_nth$arity$2(null,i__51143_51929);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_51930);


var G__51931 = seq__51140_51926;
var G__51932 = chunk__51141_51927;
var G__51933 = count__51142_51928;
var G__51934 = (i__51143_51929 + (1));
seq__51140_51926 = G__51931;
chunk__51141_51927 = G__51932;
count__51142_51928 = G__51933;
i__51143_51929 = G__51934;
continue;
} else {
var temp__5735__auto___51935 = cljs.core.seq(seq__51140_51926);
if(temp__5735__auto___51935){
var seq__51140_51936__$1 = temp__5735__auto___51935;
if(cljs.core.chunked_seq_QMARK_(seq__51140_51936__$1)){
var c__4556__auto___51937 = cljs.core.chunk_first(seq__51140_51936__$1);
var G__51938 = cljs.core.chunk_rest(seq__51140_51936__$1);
var G__51939 = c__4556__auto___51937;
var G__51940 = cljs.core.count(c__4556__auto___51937);
var G__51941 = (0);
seq__51140_51926 = G__51938;
chunk__51141_51927 = G__51939;
count__51142_51928 = G__51940;
i__51143_51929 = G__51941;
continue;
} else {
var x_51942 = cljs.core.first(seq__51140_51936__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_51942);


var G__51943 = cljs.core.next(seq__51140_51936__$1);
var G__51944 = null;
var G__51945 = (0);
var G__51946 = (0);
seq__51140_51926 = G__51943;
chunk__51141_51927 = G__51944;
count__51142_51928 = G__51945;
i__51143_51929 = G__51946;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq51130){
var G__51131 = cljs.core.first(seq51130);
var seq51130__$1 = cljs.core.next(seq51130);
var G__51132 = cljs.core.first(seq51130__$1);
var seq51130__$2 = cljs.core.next(seq51130__$1);
var G__51133 = cljs.core.first(seq51130__$2);
var seq51130__$3 = cljs.core.next(seq51130__$2);
var G__51134 = cljs.core.first(seq51130__$3);
var seq51130__$4 = cljs.core.next(seq51130__$3);
var G__51135 = cljs.core.first(seq51130__$4);
var seq51130__$5 = cljs.core.next(seq51130__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51131,G__51132,G__51133,G__51134,G__51135,seq51130__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51144_51947 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51145_51948 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51146_51949 = true;
var _STAR_print_fn_STAR__temp_val__51147_51950 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51146_51949);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51147_51950);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51145_51948);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51144_51947);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51148 = cljs.core.get_global_hierarchy;
return (fexpr__51148.cljs$core$IFn$_invoke$arity$0 ? fexpr__51148.cljs$core$IFn$_invoke$arity$0() : fexpr__51148.call(null));
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
var vec__51153 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51153,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51153,(1),null);
var G__51156 = ns;
var G__51157 = name;
var G__51158 = (function (){
var G__51159 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__51159) : cljs.compiler.emit_constant.call(null,G__51159));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__51156,G__51157,G__51158) : cljs.compiler.emit_record_value.call(null,G__51156,G__51157,G__51158));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__51160 = cljs.core.keys(x);
var G__51161 = cljs.core.vals(x);
var G__51162 = cljs.compiler.emit_constants_comma_sep;
var G__51163 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__51160,G__51161,G__51162,G__51163) : cljs.compiler.emit_map.call(null,G__51160,G__51161,G__51162,G__51163));
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
var G__51164 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__51165 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__51164,G__51165) : cljs.compiler.emit_with_meta.call(null,G__51164,G__51165));
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
var vec__51171 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51171,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51171,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51171,(2),null);
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
var G__51175 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51175) : x.call(null,G__51175));
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
var G__51176 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51176) : x.call(null,G__51176));
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
var G__51179 = items;
var G__51180 = (function (p1__51177_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__51177_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__51179,G__51180) : cljs.compiler.emit_js_object.call(null,G__51179,G__51180));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__51182){
var map__51183 = p__51182;
var map__51183__$1 = (((((!((map__51183 == null))))?(((((map__51183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51183):map__51183);
var ast = map__51183__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51183__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51183__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__51185 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__51185__$1 = (((((!((map__51185 == null))))?(((((map__51185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51185):map__51185);
var cenv = map__51185__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51185__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__51187 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__51190 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__51190) : cljs.compiler.es5_GT__EQ_.call(null,G__51190));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__51187,cljs.analyzer.es5_allowed);
} else {
return G__51187;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__51191 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__51191,reserved);
} else {
return G__51191;
}
})();
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__51192_51952 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__51192_51953__$1 = (((G__51192_51952 instanceof cljs.core.Keyword))?G__51192_51952.fqn:null);
switch (G__51192_51953__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__51195){
var map__51196 = p__51195;
var map__51196__$1 = (((((!((map__51196 == null))))?(((((map__51196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51196):map__51196);
var arg = map__51196__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51196__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51196__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51196__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__51198 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__51198__$1 = (((((!((map__51198 == null))))?(((((map__51198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51198):map__51198);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__51200){
var map__51201 = p__51200;
var map__51201__$1 = (((((!((map__51201 == null))))?(((((map__51201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51201):map__51201);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__51206_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51206_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__51207 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51207) : comma_sep.call(null,G__51207));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__51212 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51212) : comma_sep.call(null,G__51212));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__51213){
var map__51214 = p__51213;
var map__51214__$1 = (((((!((map__51214 == null))))?(((((map__51214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51214):map__51214);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51214__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51214__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51214__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__51221){
var map__51222 = p__51221;
var map__51222__$1 = (((((!((map__51222 == null))))?(((((map__51222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51222):map__51222);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51222__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__51228_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51228_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__51239 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51239) : comma_sep.call(null,G__51239));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__51240){
var map__51241 = p__51240;
var map__51241__$1 = (((((!((map__51241 == null))))?(((((map__51241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51241):map__51241);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___51977 = cljs.core.seq(items);
if(temp__5735__auto___51977){
var items_51978__$1 = temp__5735__auto___51977;
var vec__51243_51979 = items_51978__$1;
var seq__51244_51980 = cljs.core.seq(vec__51243_51979);
var first__51245_51981 = cljs.core.first(seq__51244_51980);
var seq__51244_51982__$1 = cljs.core.next(seq__51244_51980);
var vec__51246_51983 = first__51245_51981;
var k_51984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51246_51983,(0),null);
var v_51985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51246_51983,(1),null);
var r_51986 = seq__51244_51982__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_51984),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_51985) : emit_js_object_val.call(null,v_51985)));

var seq__51249_51988 = cljs.core.seq(r_51986);
var chunk__51250_51989 = null;
var count__51251_51990 = (0);
var i__51252_51991 = (0);
while(true){
if((i__51252_51991 < count__51251_51990)){
var vec__51259_51992 = chunk__51250_51989.cljs$core$IIndexed$_nth$arity$2(null,i__51252_51991);
var k_51993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51259_51992,(0),null);
var v_51994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51259_51992,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_51993__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_51994__$1) : emit_js_object_val.call(null,v_51994__$1)));


var G__51995 = seq__51249_51988;
var G__51996 = chunk__51250_51989;
var G__51997 = count__51251_51990;
var G__51998 = (i__51252_51991 + (1));
seq__51249_51988 = G__51995;
chunk__51250_51989 = G__51996;
count__51251_51990 = G__51997;
i__51252_51991 = G__51998;
continue;
} else {
var temp__5735__auto___51999__$1 = cljs.core.seq(seq__51249_51988);
if(temp__5735__auto___51999__$1){
var seq__51249_52000__$1 = temp__5735__auto___51999__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51249_52000__$1)){
var c__4556__auto___52001 = cljs.core.chunk_first(seq__51249_52000__$1);
var G__52002 = cljs.core.chunk_rest(seq__51249_52000__$1);
var G__52003 = c__4556__auto___52001;
var G__52004 = cljs.core.count(c__4556__auto___52001);
var G__52005 = (0);
seq__51249_51988 = G__52002;
chunk__51250_51989 = G__52003;
count__51251_51990 = G__52004;
i__51252_51991 = G__52005;
continue;
} else {
var vec__51262_52008 = cljs.core.first(seq__51249_52000__$1);
var k_52009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262_52008,(0),null);
var v_52010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51262_52008,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_52009__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52010__$1) : emit_js_object_val.call(null,v_52010__$1)));


var G__52011 = cljs.core.next(seq__51249_52000__$1);
var G__52012 = null;
var G__52013 = (0);
var G__52014 = (0);
seq__51249_51988 = G__52011;
chunk__51250_51989 = G__52012;
count__51251_51990 = G__52013;
i__51252_51991 = G__52014;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__51265){
var map__51266 = p__51265;
var map__51266__$1 = (((((!((map__51266 == null))))?(((((map__51266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51266):map__51266);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__51268){
var map__51269 = p__51268;
var map__51269__$1 = (((((!((map__51269 == null))))?(((((map__51269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51269):map__51269);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__51271){
var map__51272 = p__51271;
var map__51272__$1 = (((((!((map__51272 == null))))?(((((map__51272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51272):map__51272);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51272__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__51274){
var map__51275 = p__51274;
var map__51275__$1 = (((((!((map__51275 == null))))?(((((map__51275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51275):map__51275);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__51278 = cljs.analyzer.unwrap_quote(expr);
var map__51278__$1 = (((((!((map__51278 == null))))?(((((map__51278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51278):map__51278);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51278__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51278__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51278__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__51284 = cljs.analyzer.unwrap_quote(expr);
var map__51284__$1 = (((((!((map__51284 == null))))?(((((map__51284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51284):map__51284);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__51287 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__51287.cljs$core$IFn$_invoke$arity$1 ? fexpr__51287.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__51287.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__51288){
var map__51289 = p__51288;
var map__51289__$1 = (((((!((map__51289 == null))))?(((((map__51289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51289):map__51289);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__51291){
var map__51292 = p__51291;
var map__51292__$1 = (((((!((map__51292 == null))))?(((((map__51292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51292):map__51292);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__51294_52020 = cljs.core.seq(nodes);
var chunk__51295_52021 = null;
var count__51296_52022 = (0);
var i__51297_52023 = (0);
while(true){
if((i__51297_52023 < count__51296_52022)){
var map__51314_52024 = chunk__51295_52021.cljs$core$IIndexed$_nth$arity$2(null,i__51297_52023);
var map__51314_52025__$1 = (((((!((map__51314_52024 == null))))?(((((map__51314_52024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51314_52024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51314_52024):map__51314_52024);
var ts_52026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51314_52025__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51315_52027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51314_52025__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51315_52028__$1 = (((((!((map__51315_52027 == null))))?(((((map__51315_52027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51315_52027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51315_52027):map__51315_52027);
var then_52029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315_52028__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51318_52030 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_52026));
var chunk__51319_52031 = null;
var count__51320_52032 = (0);
var i__51321_52033 = (0);
while(true){
if((i__51321_52033 < count__51320_52032)){
var test_52035 = chunk__51319_52031.cljs$core$IIndexed$_nth$arity$2(null,i__51321_52033);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52035,":");


var G__52036 = seq__51318_52030;
var G__52037 = chunk__51319_52031;
var G__52038 = count__51320_52032;
var G__52039 = (i__51321_52033 + (1));
seq__51318_52030 = G__52036;
chunk__51319_52031 = G__52037;
count__51320_52032 = G__52038;
i__51321_52033 = G__52039;
continue;
} else {
var temp__5735__auto___52041 = cljs.core.seq(seq__51318_52030);
if(temp__5735__auto___52041){
var seq__51318_52042__$1 = temp__5735__auto___52041;
if(cljs.core.chunked_seq_QMARK_(seq__51318_52042__$1)){
var c__4556__auto___52043 = cljs.core.chunk_first(seq__51318_52042__$1);
var G__52044 = cljs.core.chunk_rest(seq__51318_52042__$1);
var G__52045 = c__4556__auto___52043;
var G__52046 = cljs.core.count(c__4556__auto___52043);
var G__52047 = (0);
seq__51318_52030 = G__52044;
chunk__51319_52031 = G__52045;
count__51320_52032 = G__52046;
i__51321_52033 = G__52047;
continue;
} else {
var test_52048 = cljs.core.first(seq__51318_52042__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52048,":");


var G__52050 = cljs.core.next(seq__51318_52042__$1);
var G__52051 = null;
var G__52052 = (0);
var G__52053 = (0);
seq__51318_52030 = G__52050;
chunk__51319_52031 = G__52051;
count__51320_52032 = G__52052;
i__51321_52033 = G__52053;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_52029);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_52029);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__52054 = seq__51294_52020;
var G__52055 = chunk__51295_52021;
var G__52056 = count__51296_52022;
var G__52057 = (i__51297_52023 + (1));
seq__51294_52020 = G__52054;
chunk__51295_52021 = G__52055;
count__51296_52022 = G__52056;
i__51297_52023 = G__52057;
continue;
} else {
var temp__5735__auto___52058 = cljs.core.seq(seq__51294_52020);
if(temp__5735__auto___52058){
var seq__51294_52059__$1 = temp__5735__auto___52058;
if(cljs.core.chunked_seq_QMARK_(seq__51294_52059__$1)){
var c__4556__auto___52061 = cljs.core.chunk_first(seq__51294_52059__$1);
var G__52062 = cljs.core.chunk_rest(seq__51294_52059__$1);
var G__52063 = c__4556__auto___52061;
var G__52064 = cljs.core.count(c__4556__auto___52061);
var G__52065 = (0);
seq__51294_52020 = G__52062;
chunk__51295_52021 = G__52063;
count__51296_52022 = G__52064;
i__51297_52023 = G__52065;
continue;
} else {
var map__51322_52066 = cljs.core.first(seq__51294_52059__$1);
var map__51322_52067__$1 = (((((!((map__51322_52066 == null))))?(((((map__51322_52066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51322_52066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51322_52066):map__51322_52066);
var ts_52068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51322_52067__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51323_52069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51322_52067__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51323_52070__$1 = (((((!((map__51323_52069 == null))))?(((((map__51323_52069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51323_52069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51323_52069):map__51323_52069);
var then_52071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51323_52070__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51326_52072 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_52068));
var chunk__51327_52073 = null;
var count__51328_52074 = (0);
var i__51329_52075 = (0);
while(true){
if((i__51329_52075 < count__51328_52074)){
var test_52076 = chunk__51327_52073.cljs$core$IIndexed$_nth$arity$2(null,i__51329_52075);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52076,":");


var G__52077 = seq__51326_52072;
var G__52078 = chunk__51327_52073;
var G__52079 = count__51328_52074;
var G__52080 = (i__51329_52075 + (1));
seq__51326_52072 = G__52077;
chunk__51327_52073 = G__52078;
count__51328_52074 = G__52079;
i__51329_52075 = G__52080;
continue;
} else {
var temp__5735__auto___52081__$1 = cljs.core.seq(seq__51326_52072);
if(temp__5735__auto___52081__$1){
var seq__51326_52082__$1 = temp__5735__auto___52081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51326_52082__$1)){
var c__4556__auto___52083 = cljs.core.chunk_first(seq__51326_52082__$1);
var G__52084 = cljs.core.chunk_rest(seq__51326_52082__$1);
var G__52085 = c__4556__auto___52083;
var G__52086 = cljs.core.count(c__4556__auto___52083);
var G__52087 = (0);
seq__51326_52072 = G__52084;
chunk__51327_52073 = G__52085;
count__51328_52074 = G__52086;
i__51329_52075 = G__52087;
continue;
} else {
var test_52088 = cljs.core.first(seq__51326_52082__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52088,":");


var G__52089 = cljs.core.next(seq__51326_52082__$1);
var G__52090 = null;
var G__52091 = (0);
var G__52092 = (0);
seq__51326_52072 = G__52089;
chunk__51327_52073 = G__52090;
count__51328_52074 = G__52091;
i__51329_52075 = G__52092;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_52071);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_52071);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__52093 = cljs.core.next(seq__51294_52059__$1);
var G__52094 = null;
var G__52095 = (0);
var G__52096 = (0);
seq__51294_52020 = G__52093;
chunk__51295_52021 = G__52094;
count__51296_52022 = G__52095;
i__51297_52023 = G__52096;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__51330){
var map__51331 = p__51330;
var map__51331__$1 = (((((!((map__51331 == null))))?(((((map__51331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51331):map__51331);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51336 = env;
var G__51337 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51336,G__51337) : cljs.compiler.resolve_type.call(null,G__51336,G__51337));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__51338 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51338,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51338,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__51333_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__51333_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__51333_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__51341 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__51341,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__51341;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51344 = env;
var G__51345 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51344,G__51345) : cljs.compiler.resolve_type.call(null,G__51344,G__51345));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51346_SHARP_){
return cljs.compiler.resolve_type(env,p1__51346_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__51355 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51356 = cljs.core.seq(vec__51355);
var first__51357 = cljs.core.first(seq__51356);
var seq__51356__$1 = cljs.core.next(seq__51356);
var p = first__51357;
var first__51357__$1 = cljs.core.first(seq__51356__$1);
var seq__51356__$2 = cljs.core.next(seq__51356__$1);
var ts = first__51357__$1;
var first__51357__$2 = cljs.core.first(seq__51356__$2);
var seq__51356__$3 = cljs.core.next(seq__51356__$2);
var n = first__51357__$2;
var xs = seq__51356__$3;
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
var vec__51358 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51359 = cljs.core.seq(vec__51358);
var first__51360 = cljs.core.first(seq__51359);
var seq__51359__$1 = cljs.core.next(seq__51359);
var p = first__51360;
var first__51360__$1 = cljs.core.first(seq__51359__$1);
var seq__51359__$2 = cljs.core.next(seq__51359__$1);
var ts = first__51360__$1;
var xs = seq__51359__$2;
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
var G__51362 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__51361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__51361.cljs$core$IFn$_invoke$arity$1 ? fexpr__51361.cljs$core$IFn$_invoke$arity$1(G__51362) : fexpr__51361.call(null,G__51362));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__51365 = arguments.length;
switch (G__51365) {
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
var vec__51373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51363_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__51363_SHARP_);
} else {
return p1__51363_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__51374 = cljs.core.seq(vec__51373);
var first__51375 = cljs.core.first(seq__51374);
var seq__51374__$1 = cljs.core.next(seq__51374);
var x = first__51375;
var ys = seq__51374__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__51376 = cljs.core.seq(ys);
var chunk__51377 = null;
var count__51378 = (0);
var i__51379 = (0);
while(true){
if((i__51379 < count__51378)){
var next_line = chunk__51377.cljs$core$IIndexed$_nth$arity$2(null,i__51379);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__52131 = seq__51376;
var G__52133 = chunk__51377;
var G__52134 = count__51378;
var G__52135 = (i__51379 + (1));
seq__51376 = G__52131;
chunk__51377 = G__52133;
count__51378 = G__52134;
i__51379 = G__52135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51376);
if(temp__5735__auto__){
var seq__51376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51376__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51376__$1);
var G__52137 = cljs.core.chunk_rest(seq__51376__$1);
var G__52138 = c__4556__auto__;
var G__52139 = cljs.core.count(c__4556__auto__);
var G__52140 = (0);
seq__51376 = G__52137;
chunk__51377 = G__52138;
count__51378 = G__52139;
i__51379 = G__52140;
continue;
} else {
var next_line = cljs.core.first(seq__51376__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__52141 = cljs.core.next(seq__51376__$1);
var G__52142 = null;
var G__52143 = (0);
var G__52144 = (0);
seq__51376 = G__52141;
chunk__51377 = G__52142;
count__51378 = G__52143;
i__51379 = G__52144;
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

var seq__51380_52145 = cljs.core.seq(docs__$2);
var chunk__51381_52146 = null;
var count__51382_52147 = (0);
var i__51383_52148 = (0);
while(true){
if((i__51383_52148 < count__51382_52147)){
var e_52149 = chunk__51381_52146.cljs$core$IIndexed$_nth$arity$2(null,i__51383_52148);
if(cljs.core.truth_(e_52149)){
print_comment_lines(e_52149);
} else {
}


var G__52150 = seq__51380_52145;
var G__52151 = chunk__51381_52146;
var G__52152 = count__51382_52147;
var G__52153 = (i__51383_52148 + (1));
seq__51380_52145 = G__52150;
chunk__51381_52146 = G__52151;
count__51382_52147 = G__52152;
i__51383_52148 = G__52153;
continue;
} else {
var temp__5735__auto___52154 = cljs.core.seq(seq__51380_52145);
if(temp__5735__auto___52154){
var seq__51380_52155__$1 = temp__5735__auto___52154;
if(cljs.core.chunked_seq_QMARK_(seq__51380_52155__$1)){
var c__4556__auto___52156 = cljs.core.chunk_first(seq__51380_52155__$1);
var G__52157 = cljs.core.chunk_rest(seq__51380_52155__$1);
var G__52158 = c__4556__auto___52156;
var G__52159 = cljs.core.count(c__4556__auto___52156);
var G__52160 = (0);
seq__51380_52145 = G__52157;
chunk__51381_52146 = G__52158;
count__51382_52147 = G__52159;
i__51383_52148 = G__52160;
continue;
} else {
var e_52161 = cljs.core.first(seq__51380_52155__$1);
if(cljs.core.truth_(e_52161)){
print_comment_lines(e_52161);
} else {
}


var G__52162 = cljs.core.next(seq__51380_52155__$1);
var G__52163 = null;
var G__52164 = (0);
var G__52165 = (0);
seq__51380_52145 = G__52162;
chunk__51381_52146 = G__52163;
count__51382_52147 = G__52164;
i__51383_52148 = G__52165;
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
var and__4115__auto__ = cljs.core.some((function (p1__51385_SHARP_){
return goog.string.startsWith(p1__51385_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__51387){
var map__51388 = p__51387;
var map__51388__$1 = (((((!((map__51388 == null))))?(((((map__51388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51388):map__51388);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__51394){
var map__51396 = p__51394;
var map__51396__$1 = (((((!((map__51396 == null))))?(((((map__51396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51396):map__51396);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51396__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51396__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__51398_52176 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__51399_52177 = null;
var count__51400_52178 = (0);
var i__51401_52179 = (0);
while(true){
if((i__51401_52179 < count__51400_52178)){
var vec__51408_52180 = chunk__51399_52177.cljs$core$IIndexed$_nth$arity$2(null,i__51401_52179);
var i_52181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408_52180,(0),null);
var param_52182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408_52180,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_52182);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__52185 = seq__51398_52176;
var G__52186 = chunk__51399_52177;
var G__52187 = count__51400_52178;
var G__52188 = (i__51401_52179 + (1));
seq__51398_52176 = G__52185;
chunk__51399_52177 = G__52186;
count__51400_52178 = G__52187;
i__51401_52179 = G__52188;
continue;
} else {
var temp__5735__auto___52189 = cljs.core.seq(seq__51398_52176);
if(temp__5735__auto___52189){
var seq__51398_52190__$1 = temp__5735__auto___52189;
if(cljs.core.chunked_seq_QMARK_(seq__51398_52190__$1)){
var c__4556__auto___52191 = cljs.core.chunk_first(seq__51398_52190__$1);
var G__52192 = cljs.core.chunk_rest(seq__51398_52190__$1);
var G__52193 = c__4556__auto___52191;
var G__52194 = cljs.core.count(c__4556__auto___52191);
var G__52195 = (0);
seq__51398_52176 = G__52192;
chunk__51399_52177 = G__52193;
count__51400_52178 = G__52194;
i__51401_52179 = G__52195;
continue;
} else {
var vec__51411_52196 = cljs.core.first(seq__51398_52190__$1);
var i_52197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51411_52196,(0),null);
var param_52198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51411_52196,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_52198);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__52199 = cljs.core.next(seq__51398_52190__$1);
var G__52200 = null;
var G__52201 = (0);
var G__52202 = (0);
seq__51398_52176 = G__52199;
chunk__51399_52177 = G__52200;
count__51400_52178 = G__52201;
i__51401_52179 = G__52202;
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

var seq__51415_52203 = cljs.core.seq(params);
var chunk__51416_52204 = null;
var count__51417_52205 = (0);
var i__51418_52206 = (0);
while(true){
if((i__51418_52206 < count__51417_52205)){
var param_52207 = chunk__51416_52204.cljs$core$IIndexed$_nth$arity$2(null,i__51418_52206);
cljs.compiler.emit(param_52207);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52207,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52208 = seq__51415_52203;
var G__52209 = chunk__51416_52204;
var G__52210 = count__51417_52205;
var G__52211 = (i__51418_52206 + (1));
seq__51415_52203 = G__52208;
chunk__51416_52204 = G__52209;
count__51417_52205 = G__52210;
i__51418_52206 = G__52211;
continue;
} else {
var temp__5735__auto___52212 = cljs.core.seq(seq__51415_52203);
if(temp__5735__auto___52212){
var seq__51415_52213__$1 = temp__5735__auto___52212;
if(cljs.core.chunked_seq_QMARK_(seq__51415_52213__$1)){
var c__4556__auto___52215 = cljs.core.chunk_first(seq__51415_52213__$1);
var G__52216 = cljs.core.chunk_rest(seq__51415_52213__$1);
var G__52217 = c__4556__auto___52215;
var G__52218 = cljs.core.count(c__4556__auto___52215);
var G__52219 = (0);
seq__51415_52203 = G__52216;
chunk__51416_52204 = G__52217;
count__51417_52205 = G__52218;
i__51418_52206 = G__52219;
continue;
} else {
var param_52220 = cljs.core.first(seq__51415_52213__$1);
cljs.compiler.emit(param_52220);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52220,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52221 = cljs.core.next(seq__51415_52213__$1);
var G__52222 = null;
var G__52223 = (0);
var G__52224 = (0);
seq__51415_52203 = G__52221;
chunk__51416_52204 = G__52222;
count__51417_52205 = G__52223;
i__51418_52206 = G__52224;
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

var seq__51420_52225 = cljs.core.seq(params);
var chunk__51421_52226 = null;
var count__51422_52227 = (0);
var i__51423_52228 = (0);
while(true){
if((i__51423_52228 < count__51422_52227)){
var param_52230 = chunk__51421_52226.cljs$core$IIndexed$_nth$arity$2(null,i__51423_52228);
cljs.compiler.emit(param_52230);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52230,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52232 = seq__51420_52225;
var G__52233 = chunk__51421_52226;
var G__52234 = count__51422_52227;
var G__52235 = (i__51423_52228 + (1));
seq__51420_52225 = G__52232;
chunk__51421_52226 = G__52233;
count__51422_52227 = G__52234;
i__51423_52228 = G__52235;
continue;
} else {
var temp__5735__auto___52239 = cljs.core.seq(seq__51420_52225);
if(temp__5735__auto___52239){
var seq__51420_52240__$1 = temp__5735__auto___52239;
if(cljs.core.chunked_seq_QMARK_(seq__51420_52240__$1)){
var c__4556__auto___52241 = cljs.core.chunk_first(seq__51420_52240__$1);
var G__52242 = cljs.core.chunk_rest(seq__51420_52240__$1);
var G__52243 = c__4556__auto___52241;
var G__52244 = cljs.core.count(c__4556__auto___52241);
var G__52245 = (0);
seq__51420_52225 = G__52242;
chunk__51421_52226 = G__52243;
count__51422_52227 = G__52244;
i__51423_52228 = G__52245;
continue;
} else {
var param_52246 = cljs.core.first(seq__51420_52240__$1);
cljs.compiler.emit(param_52246);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52246,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52247 = cljs.core.next(seq__51420_52240__$1);
var G__52248 = null;
var G__52249 = (0);
var G__52250 = (0);
seq__51420_52225 = G__52247;
chunk__51421_52226 = G__52248;
count__51422_52227 = G__52249;
i__51423_52228 = G__52250;
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
var seq__51424 = cljs.core.seq(params);
var chunk__51425 = null;
var count__51426 = (0);
var i__51427 = (0);
while(true){
if((i__51427 < count__51426)){
var param = chunk__51425.cljs$core$IIndexed$_nth$arity$2(null,i__51427);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52253 = seq__51424;
var G__52254 = chunk__51425;
var G__52255 = count__51426;
var G__52256 = (i__51427 + (1));
seq__51424 = G__52253;
chunk__51425 = G__52254;
count__51426 = G__52255;
i__51427 = G__52256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51424);
if(temp__5735__auto__){
var seq__51424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51424__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51424__$1);
var G__52260 = cljs.core.chunk_rest(seq__51424__$1);
var G__52261 = c__4556__auto__;
var G__52262 = cljs.core.count(c__4556__auto__);
var G__52263 = (0);
seq__51424 = G__52260;
chunk__51425 = G__52261;
count__51426 = G__52262;
i__51427 = G__52263;
continue;
} else {
var param = cljs.core.first(seq__51424__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52265 = cljs.core.next(seq__51424__$1);
var G__52266 = null;
var G__52267 = (0);
var G__52268 = (0);
seq__51424 = G__52265;
chunk__51425 = G__52266;
count__51426 = G__52267;
i__51427 = G__52268;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__51428){
var map__51429 = p__51428;
var map__51429__$1 = (((((!((map__51429 == null))))?(((((map__51429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51429):map__51429);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__51431){
var map__51432 = p__51431;
var map__51432__$1 = (((((!((map__51432 == null))))?(((((map__51432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51432):map__51432);
var f = map__51432__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51432__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__32988__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_52275__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_52276 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_52275__$1);
var delegate_name_52277 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_52276),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_52277," = function (");

var seq__51434_52278 = cljs.core.seq(params);
var chunk__51435_52279 = null;
var count__51436_52280 = (0);
var i__51437_52281 = (0);
while(true){
if((i__51437_52281 < count__51436_52280)){
var param_52282 = chunk__51435_52279.cljs$core$IIndexed$_nth$arity$2(null,i__51437_52281);
cljs.compiler.emit(param_52282);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52282,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52283 = seq__51434_52278;
var G__52284 = chunk__51435_52279;
var G__52285 = count__51436_52280;
var G__52286 = (i__51437_52281 + (1));
seq__51434_52278 = G__52283;
chunk__51435_52279 = G__52284;
count__51436_52280 = G__52285;
i__51437_52281 = G__52286;
continue;
} else {
var temp__5735__auto___52287 = cljs.core.seq(seq__51434_52278);
if(temp__5735__auto___52287){
var seq__51434_52288__$1 = temp__5735__auto___52287;
if(cljs.core.chunked_seq_QMARK_(seq__51434_52288__$1)){
var c__4556__auto___52289 = cljs.core.chunk_first(seq__51434_52288__$1);
var G__52290 = cljs.core.chunk_rest(seq__51434_52288__$1);
var G__52291 = c__4556__auto___52289;
var G__52292 = cljs.core.count(c__4556__auto___52289);
var G__52293 = (0);
seq__51434_52278 = G__52290;
chunk__51435_52279 = G__52291;
count__51436_52280 = G__52292;
i__51437_52281 = G__52293;
continue;
} else {
var param_52294 = cljs.core.first(seq__51434_52288__$1);
cljs.compiler.emit(param_52294);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52294,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52299 = cljs.core.next(seq__51434_52288__$1);
var G__52300 = null;
var G__52301 = (0);
var G__52302 = (0);
seq__51434_52278 = G__52299;
chunk__51435_52279 = G__52300;
count__51436_52280 = G__52301;
i__51437_52281 = G__52302;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_52276," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_52303 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_52303,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_52277,".call(this,");

var seq__51438_52304 = cljs.core.seq(params);
var chunk__51439_52305 = null;
var count__51440_52306 = (0);
var i__51441_52307 = (0);
while(true){
if((i__51441_52307 < count__51440_52306)){
var param_52308 = chunk__51439_52305.cljs$core$IIndexed$_nth$arity$2(null,i__51441_52307);
cljs.compiler.emit(param_52308);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52308,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52309 = seq__51438_52304;
var G__52310 = chunk__51439_52305;
var G__52311 = count__51440_52306;
var G__52312 = (i__51441_52307 + (1));
seq__51438_52304 = G__52309;
chunk__51439_52305 = G__52310;
count__51440_52306 = G__52311;
i__51441_52307 = G__52312;
continue;
} else {
var temp__5735__auto___52313 = cljs.core.seq(seq__51438_52304);
if(temp__5735__auto___52313){
var seq__51438_52315__$1 = temp__5735__auto___52313;
if(cljs.core.chunked_seq_QMARK_(seq__51438_52315__$1)){
var c__4556__auto___52316 = cljs.core.chunk_first(seq__51438_52315__$1);
var G__52317 = cljs.core.chunk_rest(seq__51438_52315__$1);
var G__52318 = c__4556__auto___52316;
var G__52319 = cljs.core.count(c__4556__auto___52316);
var G__52320 = (0);
seq__51438_52304 = G__52317;
chunk__51439_52305 = G__52318;
count__51440_52306 = G__52319;
i__51441_52307 = G__52320;
continue;
} else {
var param_52321 = cljs.core.first(seq__51438_52315__$1);
cljs.compiler.emit(param_52321);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_52321,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__52322 = cljs.core.next(seq__51438_52315__$1);
var G__52323 = null;
var G__52324 = (0);
var G__52325 = (0);
seq__51438_52304 = G__52322;
chunk__51439_52305 = G__52323;
count__51440_52306 = G__52324;
i__51441_52307 = G__52325;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52276,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_52276,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_52275__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52276,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_52277,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_52276,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32988__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__51448){
var map__51449 = p__51448;
var map__51449__$1 = (((((!((map__51449 == null))))?(((((map__51449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51449):map__51449);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51449__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51445_SHARP_){
var and__4115__auto__ = p1__51445_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__51445_SHARP_));
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
var name_52331__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_52332 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_52331__$1);
var maxparams_52333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_52334 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_52332),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_52335 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51446_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__51446_SHARP_)));
}),cljs.core.seq(mmap_52334));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_52332," = null;");

var seq__51451_52336 = cljs.core.seq(ms_52335);
var chunk__51452_52337 = null;
var count__51453_52338 = (0);
var i__51454_52339 = (0);
while(true){
if((i__51454_52339 < count__51453_52338)){
var vec__51461_52340 = chunk__51452_52337.cljs$core$IIndexed$_nth$arity$2(null,i__51454_52339);
var n_52341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461_52340,(0),null);
var meth_52342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461_52340,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_52341," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52342))){
cljs.compiler.emit_variadic_fn_method(meth_52342);
} else {
cljs.compiler.emit_fn_method(meth_52342);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__52344 = seq__51451_52336;
var G__52345 = chunk__51452_52337;
var G__52346 = count__51453_52338;
var G__52347 = (i__51454_52339 + (1));
seq__51451_52336 = G__52344;
chunk__51452_52337 = G__52345;
count__51453_52338 = G__52346;
i__51454_52339 = G__52347;
continue;
} else {
var temp__5735__auto___52348 = cljs.core.seq(seq__51451_52336);
if(temp__5735__auto___52348){
var seq__51451_52349__$1 = temp__5735__auto___52348;
if(cljs.core.chunked_seq_QMARK_(seq__51451_52349__$1)){
var c__4556__auto___52350 = cljs.core.chunk_first(seq__51451_52349__$1);
var G__52352 = cljs.core.chunk_rest(seq__51451_52349__$1);
var G__52353 = c__4556__auto___52350;
var G__52354 = cljs.core.count(c__4556__auto___52350);
var G__52355 = (0);
seq__51451_52336 = G__52352;
chunk__51452_52337 = G__52353;
count__51453_52338 = G__52354;
i__51454_52339 = G__52355;
continue;
} else {
var vec__51464_52356 = cljs.core.first(seq__51451_52349__$1);
var n_52357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464_52356,(0),null);
var meth_52358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464_52356,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_52357," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52358))){
cljs.compiler.emit_variadic_fn_method(meth_52358);
} else {
cljs.compiler.emit_fn_method(meth_52358);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__52360 = cljs.core.next(seq__51451_52349__$1);
var G__52361 = null;
var G__52362 = (0);
var G__52363 = (0);
seq__51451_52336 = G__52360;
chunk__51452_52337 = G__52361;
count__51453_52338 = G__52362;
i__51454_52339 = G__52363;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52332," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_52333),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_52333)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_52333));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__51467_52364 = cljs.core.seq(ms_52335);
var chunk__51468_52365 = null;
var count__51469_52366 = (0);
var i__51470_52367 = (0);
while(true){
if((i__51470_52367 < count__51469_52366)){
var vec__51477_52368 = chunk__51468_52365.cljs$core$IIndexed$_nth$arity$2(null,i__51470_52367);
var n_52369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51477_52368,(0),null);
var meth_52370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51477_52368,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52370))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_52371 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_52371," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_52373 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_52371," = new cljs.core.IndexedSeq(",a_52373,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_52369,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_52333)),(((cljs.core.count(maxparams_52333) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_52371,");"], 0));
} else {
var pcnt_52375 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_52370));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_52375,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_52369,".call(this",(((pcnt_52375 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_52375,maxparams_52333)),null,(1),null)),(2),null))),");");
}


var G__52376 = seq__51467_52364;
var G__52377 = chunk__51468_52365;
var G__52378 = count__51469_52366;
var G__52379 = (i__51470_52367 + (1));
seq__51467_52364 = G__52376;
chunk__51468_52365 = G__52377;
count__51469_52366 = G__52378;
i__51470_52367 = G__52379;
continue;
} else {
var temp__5735__auto___52380 = cljs.core.seq(seq__51467_52364);
if(temp__5735__auto___52380){
var seq__51467_52381__$1 = temp__5735__auto___52380;
if(cljs.core.chunked_seq_QMARK_(seq__51467_52381__$1)){
var c__4556__auto___52382 = cljs.core.chunk_first(seq__51467_52381__$1);
var G__52383 = cljs.core.chunk_rest(seq__51467_52381__$1);
var G__52384 = c__4556__auto___52382;
var G__52385 = cljs.core.count(c__4556__auto___52382);
var G__52386 = (0);
seq__51467_52364 = G__52383;
chunk__51468_52365 = G__52384;
count__51469_52366 = G__52385;
i__51470_52367 = G__52386;
continue;
} else {
var vec__51480_52387 = cljs.core.first(seq__51467_52381__$1);
var n_52388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480_52387,(0),null);
var meth_52389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480_52387,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52389))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_52390 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_52390," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_52391 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_52390," = new cljs.core.IndexedSeq(",a_52391,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_52388,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_52333)),(((cljs.core.count(maxparams_52333) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_52390,");"], 0));
} else {
var pcnt_52392 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_52389));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_52392,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_52388,".call(this",(((pcnt_52392 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_52392,maxparams_52333)),null,(1),null)),(2),null))),");");
}


var G__52395 = cljs.core.next(seq__51467_52381__$1);
var G__52396 = null;
var G__52397 = (0);
var G__52398 = (0);
seq__51467_52364 = G__52395;
chunk__51468_52365 = G__52396;
count__51469_52366 = G__52397;
i__51470_52367 = G__52398;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_52399 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_52335)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_52399,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52332,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52332,".cljs$lang$applyTo = ",cljs.core.some((function (p1__51447_SHARP_){
var vec__51486 = p1__51447_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51486,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51486,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_52335),".cljs$lang$applyTo;");
} else {
}

var seq__51489_52403 = cljs.core.seq(ms_52335);
var chunk__51490_52404 = null;
var count__51491_52405 = (0);
var i__51492_52406 = (0);
while(true){
if((i__51492_52406 < count__51491_52405)){
var vec__51499_52410 = chunk__51490_52404.cljs$core$IIndexed$_nth$arity$2(null,i__51492_52406);
var n_52411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51499_52410,(0),null);
var meth_52412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51499_52410,(1),null);
var c_52413 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_52412));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52412))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52332,".cljs$core$IFn$_invoke$arity$variadic = ",n_52411,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_52332,".cljs$core$IFn$_invoke$arity$",c_52413," = ",n_52411,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__52414 = seq__51489_52403;
var G__52415 = chunk__51490_52404;
var G__52416 = count__51491_52405;
var G__52417 = (i__51492_52406 + (1));
seq__51489_52403 = G__52414;
chunk__51490_52404 = G__52415;
count__51491_52405 = G__52416;
i__51492_52406 = G__52417;
continue;
} else {
var temp__5735__auto___52418 = cljs.core.seq(seq__51489_52403);
if(temp__5735__auto___52418){
var seq__51489_52419__$1 = temp__5735__auto___52418;
if(cljs.core.chunked_seq_QMARK_(seq__51489_52419__$1)){
var c__4556__auto___52420 = cljs.core.chunk_first(seq__51489_52419__$1);
var G__52421 = cljs.core.chunk_rest(seq__51489_52419__$1);
var G__52422 = c__4556__auto___52420;
var G__52423 = cljs.core.count(c__4556__auto___52420);
var G__52424 = (0);
seq__51489_52403 = G__52421;
chunk__51490_52404 = G__52422;
count__51491_52405 = G__52423;
i__51492_52406 = G__52424;
continue;
} else {
var vec__51502_52425 = cljs.core.first(seq__51489_52419__$1);
var n_52426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502_52425,(0),null);
var meth_52427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502_52425,(1),null);
var c_52428 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_52427));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_52427))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_52332,".cljs$core$IFn$_invoke$arity$variadic = ",n_52426,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_52332,".cljs$core$IFn$_invoke$arity$",c_52428," = ",n_52426,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__52430 = cljs.core.next(seq__51489_52419__$1);
var G__52431 = null;
var G__52432 = (0);
var G__52433 = (0);
seq__51489_52403 = G__52430;
chunk__51490_52404 = G__52431;
count__51491_52405 = G__52432;
i__51492_52406 = G__52433;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_52332,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__51505){
var map__51506 = p__51505;
var map__51506__$1 = (((((!((map__51506 == null))))?(((((map__51506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51506):map__51506);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51506__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51506__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51506__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__51512_52437 = cljs.core.seq(statements);
var chunk__51513_52438 = null;
var count__51514_52439 = (0);
var i__51515_52440 = (0);
while(true){
if((i__51515_52440 < count__51514_52439)){
var s_52444 = chunk__51513_52438.cljs$core$IIndexed$_nth$arity$2(null,i__51515_52440);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_52444);


var G__52445 = seq__51512_52437;
var G__52446 = chunk__51513_52438;
var G__52447 = count__51514_52439;
var G__52448 = (i__51515_52440 + (1));
seq__51512_52437 = G__52445;
chunk__51513_52438 = G__52446;
count__51514_52439 = G__52447;
i__51515_52440 = G__52448;
continue;
} else {
var temp__5735__auto___52449 = cljs.core.seq(seq__51512_52437);
if(temp__5735__auto___52449){
var seq__51512_52450__$1 = temp__5735__auto___52449;
if(cljs.core.chunked_seq_QMARK_(seq__51512_52450__$1)){
var c__4556__auto___52451 = cljs.core.chunk_first(seq__51512_52450__$1);
var G__52452 = cljs.core.chunk_rest(seq__51512_52450__$1);
var G__52453 = c__4556__auto___52451;
var G__52454 = cljs.core.count(c__4556__auto___52451);
var G__52455 = (0);
seq__51512_52437 = G__52452;
chunk__51513_52438 = G__52453;
count__51514_52439 = G__52454;
i__51515_52440 = G__52455;
continue;
} else {
var s_52456 = cljs.core.first(seq__51512_52450__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_52456);


var G__52457 = cljs.core.next(seq__51512_52450__$1);
var G__52458 = null;
var G__52459 = (0);
var G__52460 = (0);
seq__51512_52437 = G__52457;
chunk__51513_52438 = G__52458;
count__51514_52439 = G__52459;
i__51515_52440 = G__52460;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__51516){
var map__51517 = p__51516;
var map__51517__$1 = (((((!((map__51517 == null))))?(((((map__51517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51517):map__51517);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51517__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51517__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51517__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__51519,is_loop){
var map__51520 = p__51519;
var map__51520__$1 = (((((!((map__51520 == null))))?(((((map__51520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51520):map__51520);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__51522_52462 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__51523_52463 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__51523_52463);

try{var seq__51524_52464 = cljs.core.seq(bindings);
var chunk__51525_52465 = null;
var count__51526_52466 = (0);
var i__51527_52467 = (0);
while(true){
if((i__51527_52467 < count__51526_52466)){
var map__51532_52468 = chunk__51525_52465.cljs$core$IIndexed$_nth$arity$2(null,i__51527_52467);
var map__51532_52469__$1 = (((((!((map__51532_52468 == null))))?(((((map__51532_52468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51532_52468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51532_52468):map__51532_52468);
var binding_52470 = map__51532_52469__$1;
var init_52471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_52469__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_52470);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_52471,";");


var G__52480 = seq__51524_52464;
var G__52481 = chunk__51525_52465;
var G__52482 = count__51526_52466;
var G__52483 = (i__51527_52467 + (1));
seq__51524_52464 = G__52480;
chunk__51525_52465 = G__52481;
count__51526_52466 = G__52482;
i__51527_52467 = G__52483;
continue;
} else {
var temp__5735__auto___52484 = cljs.core.seq(seq__51524_52464);
if(temp__5735__auto___52484){
var seq__51524_52485__$1 = temp__5735__auto___52484;
if(cljs.core.chunked_seq_QMARK_(seq__51524_52485__$1)){
var c__4556__auto___52486 = cljs.core.chunk_first(seq__51524_52485__$1);
var G__52487 = cljs.core.chunk_rest(seq__51524_52485__$1);
var G__52488 = c__4556__auto___52486;
var G__52489 = cljs.core.count(c__4556__auto___52486);
var G__52490 = (0);
seq__51524_52464 = G__52487;
chunk__51525_52465 = G__52488;
count__51526_52466 = G__52489;
i__51527_52467 = G__52490;
continue;
} else {
var map__51534_52499 = cljs.core.first(seq__51524_52485__$1);
var map__51534_52500__$1 = (((((!((map__51534_52499 == null))))?(((((map__51534_52499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51534_52499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51534_52499):map__51534_52499);
var binding_52501 = map__51534_52500__$1;
var init_52502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51534_52500__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_52501);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_52502,";");


var G__52503 = cljs.core.next(seq__51524_52485__$1);
var G__52504 = null;
var G__52505 = (0);
var G__52506 = (0);
seq__51524_52464 = G__52503;
chunk__51525_52465 = G__52504;
count__51526_52466 = G__52505;
i__51527_52467 = G__52506;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__51522_52462);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__51536){
var map__51537 = p__51536;
var map__51537__$1 = (((((!((map__51537 == null))))?(((((map__51537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51537):map__51537);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51537__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51537__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51537__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___52511 = cljs.core.count(exprs);
var i_52512 = (0);
while(true){
if((i_52512 < n__4613__auto___52511)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_52512) : temps.call(null,i_52512))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_52512) : exprs.call(null,i_52512)),";");

var G__52514 = (i_52512 + (1));
i_52512 = G__52514;
continue;
} else {
}
break;
}

var n__4613__auto___52516 = cljs.core.count(exprs);
var i_52517 = (0);
while(true){
if((i_52517 < n__4613__auto___52516)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_52517) : params.call(null,i_52517)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_52517) : temps.call(null,i_52517)),";");

var G__52518 = (i_52517 + (1));
i_52517 = G__52518;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__51540){
var map__51541 = p__51540;
var map__51541__$1 = (((((!((map__51541 == null))))?(((((map__51541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51541):map__51541);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__51545_52522 = cljs.core.seq(bindings);
var chunk__51547_52523 = null;
var count__51548_52524 = (0);
var i__51549_52525 = (0);
while(true){
if((i__51549_52525 < count__51548_52524)){
var map__51555_52526 = chunk__51547_52523.cljs$core$IIndexed$_nth$arity$2(null,i__51549_52525);
var map__51555_52527__$1 = (((((!((map__51555_52526 == null))))?(((((map__51555_52526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51555_52526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51555_52526):map__51555_52526);
var binding_52528 = map__51555_52527__$1;
var init_52529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51555_52527__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_52528)," = ",init_52529,";");


var G__52534 = seq__51545_52522;
var G__52535 = chunk__51547_52523;
var G__52536 = count__51548_52524;
var G__52537 = (i__51549_52525 + (1));
seq__51545_52522 = G__52534;
chunk__51547_52523 = G__52535;
count__51548_52524 = G__52536;
i__51549_52525 = G__52537;
continue;
} else {
var temp__5735__auto___52538 = cljs.core.seq(seq__51545_52522);
if(temp__5735__auto___52538){
var seq__51545_52539__$1 = temp__5735__auto___52538;
if(cljs.core.chunked_seq_QMARK_(seq__51545_52539__$1)){
var c__4556__auto___52540 = cljs.core.chunk_first(seq__51545_52539__$1);
var G__52541 = cljs.core.chunk_rest(seq__51545_52539__$1);
var G__52542 = c__4556__auto___52540;
var G__52543 = cljs.core.count(c__4556__auto___52540);
var G__52544 = (0);
seq__51545_52522 = G__52541;
chunk__51547_52523 = G__52542;
count__51548_52524 = G__52543;
i__51549_52525 = G__52544;
continue;
} else {
var map__51557_52545 = cljs.core.first(seq__51545_52539__$1);
var map__51557_52546__$1 = (((((!((map__51557_52545 == null))))?(((((map__51557_52545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51557_52545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51557_52545):map__51557_52545);
var binding_52547 = map__51557_52546__$1;
var init_52548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557_52546__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_52547)," = ",init_52548,";");


var G__52549 = cljs.core.next(seq__51545_52539__$1);
var G__52550 = null;
var G__52551 = (0);
var G__52552 = (0);
seq__51545_52522 = G__52549;
chunk__51547_52523 = G__52550;
count__51548_52524 = G__52551;
i__51549_52525 = G__52552;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__51567){
var map__51568 = p__51567;
var map__51568__$1 = (((((!((map__51568 == null))))?(((((map__51568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51568):map__51568);
var expr = map__51568__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51568__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51568__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51568__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__51593 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__51593.cljs$core$IFn$_invoke$arity$1 ? fexpr__51593.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__51593.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__51599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__51599.cljs$core$IFn$_invoke$arity$1 ? fexpr__51599.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__51599.call(null,first_arg_tag));
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
var vec__51574 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__51561_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51561_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__51562_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51562_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(1),null);
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
var pimpl_52572 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_52572,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_52575 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_52575,args)),(((mfa_52575 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_52575,args)),"], 0))"], 0));
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
var G__51631 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__51630 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__51630.cljs$core$IFn$_invoke$arity$1 ? fexpr__51630.cljs$core$IFn$_invoke$arity$1(G__51631) : fexpr__51630.call(null,G__51631));
} else {
return and__4115__auto__;
}
})())){
var fprop_52579 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_52579," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_52579,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_52579," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_52579,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__51632){
var map__51633 = p__51632;
var map__51633__$1 = (((((!((map__51633 == null))))?(((((map__51633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51633):map__51633);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51633__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51633__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51633__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__51635){
var map__51636 = p__51635;
var map__51636__$1 = (((((!((map__51636 == null))))?(((((map__51636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51636):map__51636);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51636__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51636__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__51650 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__51650__$1 = (((((!((map__51650 == null))))?(((((map__51650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51650):map__51650);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51650__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51650__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__51651 = options;
var map__51651__$1 = (((((!((map__51651 == null))))?(((((map__51651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51651):map__51651);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__51652 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__51660 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__51660__$1 = (((((!((map__51660 == null))))?(((((map__51660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51660):map__51660);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__51671_52598 = cljs.core.seq(libs_to_load);
var chunk__51672_52599 = null;
var count__51673_52600 = (0);
var i__51674_52601 = (0);
while(true){
if((i__51674_52601 < count__51673_52600)){
var lib_52602 = chunk__51672_52599.cljs$core$IIndexed$_nth$arity$2(null,i__51674_52601);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_52602)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_52602),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52602),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_52602),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52602),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_52602,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52602),"');");
}

}
}
}


var G__52606 = seq__51671_52598;
var G__52607 = chunk__51672_52599;
var G__52608 = count__51673_52600;
var G__52609 = (i__51674_52601 + (1));
seq__51671_52598 = G__52606;
chunk__51672_52599 = G__52607;
count__51673_52600 = G__52608;
i__51674_52601 = G__52609;
continue;
} else {
var temp__5735__auto___52610 = cljs.core.seq(seq__51671_52598);
if(temp__5735__auto___52610){
var seq__51671_52611__$1 = temp__5735__auto___52610;
if(cljs.core.chunked_seq_QMARK_(seq__51671_52611__$1)){
var c__4556__auto___52612 = cljs.core.chunk_first(seq__51671_52611__$1);
var G__52617 = cljs.core.chunk_rest(seq__51671_52611__$1);
var G__52618 = c__4556__auto___52612;
var G__52619 = cljs.core.count(c__4556__auto___52612);
var G__52620 = (0);
seq__51671_52598 = G__52617;
chunk__51672_52599 = G__52618;
count__51673_52600 = G__52619;
i__51674_52601 = G__52620;
continue;
} else {
var lib_52621 = cljs.core.first(seq__51671_52611__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_52621)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_52621),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52621),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_52621),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52621),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_52621,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_52621),"');");
}

}
}
}


var G__52624 = cljs.core.next(seq__51671_52611__$1);
var G__52625 = null;
var G__52626 = (0);
var G__52627 = (0);
seq__51671_52598 = G__52624;
chunk__51672_52599 = G__52625;
count__51673_52600 = G__52626;
i__51674_52601 = G__52627;
continue;
}
} else {
}
}
break;
}

var seq__51693_52632 = cljs.core.seq(node_libs);
var chunk__51694_52633 = null;
var count__51695_52634 = (0);
var i__51696_52635 = (0);
while(true){
if((i__51696_52635 < count__51695_52634)){
var lib_52636 = chunk__51694_52633.cljs$core$IIndexed$_nth$arity$2(null,i__51696_52635);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_52636)," = require('",lib_52636,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__52637 = seq__51693_52632;
var G__52638 = chunk__51694_52633;
var G__52639 = count__51695_52634;
var G__52640 = (i__51696_52635 + (1));
seq__51693_52632 = G__52637;
chunk__51694_52633 = G__52638;
count__51695_52634 = G__52639;
i__51696_52635 = G__52640;
continue;
} else {
var temp__5735__auto___52642 = cljs.core.seq(seq__51693_52632);
if(temp__5735__auto___52642){
var seq__51693_52643__$1 = temp__5735__auto___52642;
if(cljs.core.chunked_seq_QMARK_(seq__51693_52643__$1)){
var c__4556__auto___52645 = cljs.core.chunk_first(seq__51693_52643__$1);
var G__52646 = cljs.core.chunk_rest(seq__51693_52643__$1);
var G__52647 = c__4556__auto___52645;
var G__52648 = cljs.core.count(c__4556__auto___52645);
var G__52649 = (0);
seq__51693_52632 = G__52646;
chunk__51694_52633 = G__52647;
count__51695_52634 = G__52648;
i__51696_52635 = G__52649;
continue;
} else {
var lib_52651 = cljs.core.first(seq__51693_52643__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_52651)," = require('",lib_52651,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__52652 = cljs.core.next(seq__51693_52643__$1);
var G__52653 = null;
var G__52654 = (0);
var G__52655 = (0);
seq__51693_52632 = G__52652;
chunk__51694_52633 = G__52653;
count__51695_52634 = G__52654;
i__51696_52635 = G__52655;
continue;
}
} else {
}
}
break;
}

var seq__51711_52656 = cljs.core.seq(global_exports_libs);
var chunk__51712_52657 = null;
var count__51713_52658 = (0);
var i__51714_52659 = (0);
while(true){
if((i__51714_52659 < count__51713_52658)){
var lib_52660 = chunk__51712_52657.cljs$core$IIndexed$_nth$arity$2(null,i__51714_52659);
var map__51721_52662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_52660));
var map__51721_52663__$1 = (((((!((map__51721_52662 == null))))?(((((map__51721_52662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51721_52662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51721_52662):map__51721_52662);
var global_exports_52664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721_52663__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_52664,lib_52660);


var G__52666 = seq__51711_52656;
var G__52667 = chunk__51712_52657;
var G__52668 = count__51713_52658;
var G__52669 = (i__51714_52659 + (1));
seq__51711_52656 = G__52666;
chunk__51712_52657 = G__52667;
count__51713_52658 = G__52668;
i__51714_52659 = G__52669;
continue;
} else {
var temp__5735__auto___52671 = cljs.core.seq(seq__51711_52656);
if(temp__5735__auto___52671){
var seq__51711_52672__$1 = temp__5735__auto___52671;
if(cljs.core.chunked_seq_QMARK_(seq__51711_52672__$1)){
var c__4556__auto___52673 = cljs.core.chunk_first(seq__51711_52672__$1);
var G__52674 = cljs.core.chunk_rest(seq__51711_52672__$1);
var G__52675 = c__4556__auto___52673;
var G__52676 = cljs.core.count(c__4556__auto___52673);
var G__52677 = (0);
seq__51711_52656 = G__52674;
chunk__51712_52657 = G__52675;
count__51713_52658 = G__52676;
i__51714_52659 = G__52677;
continue;
} else {
var lib_52678 = cljs.core.first(seq__51711_52672__$1);
var map__51723_52679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_52678));
var map__51723_52680__$1 = (((((!((map__51723_52679 == null))))?(((((map__51723_52679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51723_52679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51723_52679):map__51723_52679);
var global_exports_52681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51723_52680__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_52681,lib_52678);


var G__52682 = cljs.core.next(seq__51711_52672__$1);
var G__52683 = null;
var G__52684 = (0);
var G__52685 = (0);
seq__51711_52656 = G__52682;
chunk__51712_52657 = G__52683;
count__51713_52658 = G__52684;
i__51714_52659 = G__52685;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__51725){
var map__51726 = p__51725;
var map__51726__$1 = (((((!((map__51726 == null))))?(((((map__51726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51726):map__51726);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51726__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__51728){
var map__51733 = p__51728;
var map__51733__$1 = (((((!((map__51733 == null))))?(((((map__51733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51733):map__51733);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__51743){
var map__51744 = p__51743;
var map__51744__$1 = (((((!((map__51744 == null))))?(((((map__51744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51744):map__51744);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__51747_52699 = cljs.core.seq(protocols);
var chunk__51748_52700 = null;
var count__51749_52701 = (0);
var i__51750_52702 = (0);
while(true){
if((i__51750_52702 < count__51749_52701)){
var protocol_52707 = chunk__51748_52700.cljs$core$IIndexed$_nth$arity$2(null,i__51750_52702);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_52707)),"}");


var G__52708 = seq__51747_52699;
var G__52709 = chunk__51748_52700;
var G__52710 = count__51749_52701;
var G__52711 = (i__51750_52702 + (1));
seq__51747_52699 = G__52708;
chunk__51748_52700 = G__52709;
count__51749_52701 = G__52710;
i__51750_52702 = G__52711;
continue;
} else {
var temp__5735__auto___52712 = cljs.core.seq(seq__51747_52699);
if(temp__5735__auto___52712){
var seq__51747_52713__$1 = temp__5735__auto___52712;
if(cljs.core.chunked_seq_QMARK_(seq__51747_52713__$1)){
var c__4556__auto___52714 = cljs.core.chunk_first(seq__51747_52713__$1);
var G__52715 = cljs.core.chunk_rest(seq__51747_52713__$1);
var G__52716 = c__4556__auto___52714;
var G__52717 = cljs.core.count(c__4556__auto___52714);
var G__52718 = (0);
seq__51747_52699 = G__52715;
chunk__51748_52700 = G__52716;
count__51749_52701 = G__52717;
i__51750_52702 = G__52718;
continue;
} else {
var protocol_52719 = cljs.core.first(seq__51747_52713__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_52719)),"}");


var G__52720 = cljs.core.next(seq__51747_52713__$1);
var G__52721 = null;
var G__52722 = (0);
var G__52723 = (0);
seq__51747_52699 = G__52720;
chunk__51748_52700 = G__52721;
count__51749_52701 = G__52722;
i__51750_52702 = G__52723;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__51752_52724 = cljs.core.seq(fields__$1);
var chunk__51753_52725 = null;
var count__51754_52726 = (0);
var i__51755_52727 = (0);
while(true){
if((i__51755_52727 < count__51754_52726)){
var fld_52728 = chunk__51753_52725.cljs$core$IIndexed$_nth$arity$2(null,i__51755_52727);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_52728," = ",fld_52728,";");


var G__52729 = seq__51752_52724;
var G__52730 = chunk__51753_52725;
var G__52731 = count__51754_52726;
var G__52732 = (i__51755_52727 + (1));
seq__51752_52724 = G__52729;
chunk__51753_52725 = G__52730;
count__51754_52726 = G__52731;
i__51755_52727 = G__52732;
continue;
} else {
var temp__5735__auto___52733 = cljs.core.seq(seq__51752_52724);
if(temp__5735__auto___52733){
var seq__51752_52734__$1 = temp__5735__auto___52733;
if(cljs.core.chunked_seq_QMARK_(seq__51752_52734__$1)){
var c__4556__auto___52736 = cljs.core.chunk_first(seq__51752_52734__$1);
var G__52740 = cljs.core.chunk_rest(seq__51752_52734__$1);
var G__52741 = c__4556__auto___52736;
var G__52742 = cljs.core.count(c__4556__auto___52736);
var G__52743 = (0);
seq__51752_52724 = G__52740;
chunk__51753_52725 = G__52741;
count__51754_52726 = G__52742;
i__51755_52727 = G__52743;
continue;
} else {
var fld_52744 = cljs.core.first(seq__51752_52734__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_52744," = ",fld_52744,";");


var G__52745 = cljs.core.next(seq__51752_52734__$1);
var G__52746 = null;
var G__52747 = (0);
var G__52748 = (0);
seq__51752_52724 = G__52745;
chunk__51753_52725 = G__52746;
count__51754_52726 = G__52747;
i__51755_52727 = G__52748;
continue;
}
} else {
}
}
break;
}

var seq__51756_52749 = cljs.core.seq(pmasks);
var chunk__51757_52750 = null;
var count__51758_52751 = (0);
var i__51759_52752 = (0);
while(true){
if((i__51759_52752 < count__51758_52751)){
var vec__51768_52753 = chunk__51757_52750.cljs$core$IIndexed$_nth$arity$2(null,i__51759_52752);
var pno_52754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768_52753,(0),null);
var pmask_52755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768_52753,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_52754,"$ = ",pmask_52755,";");


var G__52756 = seq__51756_52749;
var G__52757 = chunk__51757_52750;
var G__52758 = count__51758_52751;
var G__52759 = (i__51759_52752 + (1));
seq__51756_52749 = G__52756;
chunk__51757_52750 = G__52757;
count__51758_52751 = G__52758;
i__51759_52752 = G__52759;
continue;
} else {
var temp__5735__auto___52760 = cljs.core.seq(seq__51756_52749);
if(temp__5735__auto___52760){
var seq__51756_52761__$1 = temp__5735__auto___52760;
if(cljs.core.chunked_seq_QMARK_(seq__51756_52761__$1)){
var c__4556__auto___52762 = cljs.core.chunk_first(seq__51756_52761__$1);
var G__52763 = cljs.core.chunk_rest(seq__51756_52761__$1);
var G__52764 = c__4556__auto___52762;
var G__52765 = cljs.core.count(c__4556__auto___52762);
var G__52766 = (0);
seq__51756_52749 = G__52763;
chunk__51757_52750 = G__52764;
count__51758_52751 = G__52765;
i__51759_52752 = G__52766;
continue;
} else {
var vec__51771_52767 = cljs.core.first(seq__51756_52761__$1);
var pno_52768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51771_52767,(0),null);
var pmask_52769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51771_52767,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_52768,"$ = ",pmask_52769,";");


var G__52772 = cljs.core.next(seq__51756_52761__$1);
var G__52773 = null;
var G__52774 = (0);
var G__52775 = (0);
seq__51756_52749 = G__52772;
chunk__51757_52750 = G__52773;
count__51758_52751 = G__52774;
i__51759_52752 = G__52775;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__51774){
var map__51775 = p__51774;
var map__51775__$1 = (((((!((map__51775 == null))))?(((((map__51775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51775):map__51775);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__51777_52786 = cljs.core.seq(protocols);
var chunk__51778_52787 = null;
var count__51779_52788 = (0);
var i__51780_52789 = (0);
while(true){
if((i__51780_52789 < count__51779_52788)){
var protocol_52790 = chunk__51778_52787.cljs$core$IIndexed$_nth$arity$2(null,i__51780_52789);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_52790)),"}");


var G__52791 = seq__51777_52786;
var G__52792 = chunk__51778_52787;
var G__52793 = count__51779_52788;
var G__52794 = (i__51780_52789 + (1));
seq__51777_52786 = G__52791;
chunk__51778_52787 = G__52792;
count__51779_52788 = G__52793;
i__51780_52789 = G__52794;
continue;
} else {
var temp__5735__auto___52795 = cljs.core.seq(seq__51777_52786);
if(temp__5735__auto___52795){
var seq__51777_52796__$1 = temp__5735__auto___52795;
if(cljs.core.chunked_seq_QMARK_(seq__51777_52796__$1)){
var c__4556__auto___52797 = cljs.core.chunk_first(seq__51777_52796__$1);
var G__52798 = cljs.core.chunk_rest(seq__51777_52796__$1);
var G__52799 = c__4556__auto___52797;
var G__52800 = cljs.core.count(c__4556__auto___52797);
var G__52801 = (0);
seq__51777_52786 = G__52798;
chunk__51778_52787 = G__52799;
count__51779_52788 = G__52800;
i__51780_52789 = G__52801;
continue;
} else {
var protocol_52804 = cljs.core.first(seq__51777_52796__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_52804)),"}");


var G__52805 = cljs.core.next(seq__51777_52796__$1);
var G__52806 = null;
var G__52807 = (0);
var G__52808 = (0);
seq__51777_52786 = G__52805;
chunk__51778_52787 = G__52806;
count__51779_52788 = G__52807;
i__51780_52789 = G__52808;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__51781_52813 = cljs.core.seq(fields__$1);
var chunk__51782_52814 = null;
var count__51783_52815 = (0);
var i__51784_52816 = (0);
while(true){
if((i__51784_52816 < count__51783_52815)){
var fld_52817 = chunk__51782_52814.cljs$core$IIndexed$_nth$arity$2(null,i__51784_52816);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_52817," = ",fld_52817,";");


var G__52818 = seq__51781_52813;
var G__52819 = chunk__51782_52814;
var G__52820 = count__51783_52815;
var G__52821 = (i__51784_52816 + (1));
seq__51781_52813 = G__52818;
chunk__51782_52814 = G__52819;
count__51783_52815 = G__52820;
i__51784_52816 = G__52821;
continue;
} else {
var temp__5735__auto___52822 = cljs.core.seq(seq__51781_52813);
if(temp__5735__auto___52822){
var seq__51781_52823__$1 = temp__5735__auto___52822;
if(cljs.core.chunked_seq_QMARK_(seq__51781_52823__$1)){
var c__4556__auto___52824 = cljs.core.chunk_first(seq__51781_52823__$1);
var G__52825 = cljs.core.chunk_rest(seq__51781_52823__$1);
var G__52826 = c__4556__auto___52824;
var G__52827 = cljs.core.count(c__4556__auto___52824);
var G__52828 = (0);
seq__51781_52813 = G__52825;
chunk__51782_52814 = G__52826;
count__51783_52815 = G__52827;
i__51784_52816 = G__52828;
continue;
} else {
var fld_52830 = cljs.core.first(seq__51781_52823__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_52830," = ",fld_52830,";");


var G__52832 = cljs.core.next(seq__51781_52823__$1);
var G__52833 = null;
var G__52834 = (0);
var G__52835 = (0);
seq__51781_52813 = G__52832;
chunk__51782_52814 = G__52833;
count__51783_52815 = G__52834;
i__51784_52816 = G__52835;
continue;
}
} else {
}
}
break;
}

var seq__51800_52836 = cljs.core.seq(pmasks);
var chunk__51801_52837 = null;
var count__51802_52838 = (0);
var i__51803_52839 = (0);
while(true){
if((i__51803_52839 < count__51802_52838)){
var vec__51817_52840 = chunk__51801_52837.cljs$core$IIndexed$_nth$arity$2(null,i__51803_52839);
var pno_52841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817_52840,(0),null);
var pmask_52842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817_52840,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_52841,"$ = ",pmask_52842,";");


var G__52847 = seq__51800_52836;
var G__52848 = chunk__51801_52837;
var G__52849 = count__51802_52838;
var G__52850 = (i__51803_52839 + (1));
seq__51800_52836 = G__52847;
chunk__51801_52837 = G__52848;
count__51802_52838 = G__52849;
i__51803_52839 = G__52850;
continue;
} else {
var temp__5735__auto___52851 = cljs.core.seq(seq__51800_52836);
if(temp__5735__auto___52851){
var seq__51800_52852__$1 = temp__5735__auto___52851;
if(cljs.core.chunked_seq_QMARK_(seq__51800_52852__$1)){
var c__4556__auto___52853 = cljs.core.chunk_first(seq__51800_52852__$1);
var G__52854 = cljs.core.chunk_rest(seq__51800_52852__$1);
var G__52855 = c__4556__auto___52853;
var G__52856 = cljs.core.count(c__4556__auto___52853);
var G__52857 = (0);
seq__51800_52836 = G__52854;
chunk__51801_52837 = G__52855;
count__51802_52838 = G__52856;
i__51803_52839 = G__52857;
continue;
} else {
var vec__51820_52858 = cljs.core.first(seq__51800_52852__$1);
var pno_52859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51820_52858,(0),null);
var pmask_52860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51820_52858,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_52859,"$ = ",pmask_52860,";");


var G__52861 = cljs.core.next(seq__51800_52852__$1);
var G__52862 = null;
var G__52863 = (0);
var G__52864 = (0);
seq__51800_52836 = G__52861;
chunk__51801_52837 = G__52862;
count__51802_52838 = G__52863;
i__51803_52839 = G__52864;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__51823){
var map__51824 = p__51823;
var map__51824__$1 = (((((!((map__51824 == null))))?(((((map__51824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51824):map__51824);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__51827){
var map__51828 = p__51827;
var map__51828__$1 = (((((!((map__51828 == null))))?(((((map__51828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51828):map__51828);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__51835 = cljs.core.seq(table);
var chunk__51836 = null;
var count__51837 = (0);
var i__51838 = (0);
while(true){
if((i__51838 < count__51837)){
var vec__51845 = chunk__51836.cljs$core$IIndexed$_nth$arity$2(null,i__51838);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51845,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51845,(1),null);
var ns_52871 = cljs.core.namespace(sym);
var name_52872 = cljs.core.name(sym);
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


var G__52873 = seq__51835;
var G__52874 = chunk__51836;
var G__52875 = count__51837;
var G__52876 = (i__51838 + (1));
seq__51835 = G__52873;
chunk__51836 = G__52874;
count__51837 = G__52875;
i__51838 = G__52876;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51835);
if(temp__5735__auto__){
var seq__51835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51835__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51835__$1);
var G__52877 = cljs.core.chunk_rest(seq__51835__$1);
var G__52878 = c__4556__auto__;
var G__52879 = cljs.core.count(c__4556__auto__);
var G__52880 = (0);
seq__51835 = G__52877;
chunk__51836 = G__52878;
count__51837 = G__52879;
i__51838 = G__52880;
continue;
} else {
var vec__51848 = cljs.core.first(seq__51835__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51848,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51848,(1),null);
var ns_52881 = cljs.core.namespace(sym);
var name_52882 = cljs.core.name(sym);
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


var G__52885 = cljs.core.next(seq__51835__$1);
var G__52886 = null;
var G__52887 = (0);
var G__52888 = (0);
seq__51835 = G__52885;
chunk__51836 = G__52886;
count__51837 = G__52887;
i__51838 = G__52888;
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
var G__51852 = arguments.length;
switch (G__51852) {
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
var k_52915 = cljs.core.first(ks);
var vec__51853_52916 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_52915);
var top_52917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853_52916,(0),null);
var prefix_SINGLEQUOTE__52918 = vec__51853_52916;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_52915)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__52918) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_52917)) || (cljs.core.contains_QMARK_(known_externs,top_52917)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__52918)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_52917);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__52918)),";");
}
} else {
}

var m_52919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_52915);
if(cljs.core.empty_QMARK_(m_52919)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__52918,m_52919,top_level,known_externs);
}

var G__52920 = cljs.core.next(ks);
ks = G__52920;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
