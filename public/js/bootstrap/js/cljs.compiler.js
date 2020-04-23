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
var map__32643 = s;
var map__32643__$1 = (((((!((map__32643 == null))))?(((((map__32643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32643):map__32643);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__32651 = info;
var map__32655 = G__32651;
var map__32655__$1 = (((((!((map__32655 == null))))?(((((map__32655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32655):map__32655);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32655__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__32651__$1 = G__32651;
while(true){
var d__$2 = d__$1;
var map__32676 = G__32651__$1;
var map__32676__$1 = (((((!((map__32676 == null))))?(((((map__32676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32676):map__32676);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32676__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__33719 = (d__$2 + (1));
var G__33720 = shadow__$1;
d__$1 = G__33719;
G__32651__$1 = G__33720;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__32682){
var map__32683 = p__32682;
var map__32683__$1 = (((((!((map__32683 == null))))?(((((map__32683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32683):map__32683);
var name_var = map__32683__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__32686 = info;
var map__32686__$1 = (((((!((map__32686 == null))))?(((((map__32686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32686):map__32686);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32686__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__32688 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__32688) : cljs.compiler.munge.call(null,G__32688));
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
var G__32725 = arguments.length;
switch (G__32725) {
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
var ms = (function (){var fexpr__32764 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11472,11472,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__32764.cljs$core$IFn$_invoke$arity$1 ? fexpr__32764.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__32764.call(null,ss__$3));
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
var G__32770 = cp;
switch (G__32770) {
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
var seq__32779_33733 = cljs.core.seq(s);
var chunk__32780_33734 = null;
var count__32781_33735 = (0);
var i__32782_33736 = (0);
while(true){
if((i__32782_33736 < count__32781_33735)){
var c_33737 = chunk__32780_33734.cljs$core$IIndexed$_nth$arity$2(null,i__32782_33736);
sb.append(cljs.compiler.escape_char(c_33737));


var G__33738 = seq__32779_33733;
var G__33739 = chunk__32780_33734;
var G__33740 = count__32781_33735;
var G__33741 = (i__32782_33736 + (1));
seq__32779_33733 = G__33738;
chunk__32780_33734 = G__33739;
count__32781_33735 = G__33740;
i__32782_33736 = G__33741;
continue;
} else {
var temp__5735__auto___33742 = cljs.core.seq(seq__32779_33733);
if(temp__5735__auto___33742){
var seq__32779_33743__$1 = temp__5735__auto___33742;
if(cljs.core.chunked_seq_QMARK_(seq__32779_33743__$1)){
var c__4609__auto___33744 = cljs.core.chunk_first(seq__32779_33743__$1);
var G__33745 = cljs.core.chunk_rest(seq__32779_33743__$1);
var G__33746 = c__4609__auto___33744;
var G__33747 = cljs.core.count(c__4609__auto___33744);
var G__33748 = (0);
seq__32779_33733 = G__33745;
chunk__32780_33734 = G__33746;
count__32781_33735 = G__33747;
i__32782_33736 = G__33748;
continue;
} else {
var c_33749 = cljs.core.first(seq__32779_33743__$1);
sb.append(cljs.compiler.escape_char(c_33749));


var G__33750 = cljs.core.next(seq__32779_33743__$1);
var G__33751 = null;
var G__33752 = (0);
var G__33753 = (0);
seq__32779_33733 = G__33750;
chunk__32780_33734 = G__33751;
count__32781_33735 = G__33752;
i__32782_33736 = G__33753;
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32793 = cljs.core.get_global_hierarchy;
return (fexpr__32793.cljs$core$IFn$_invoke$arity$0 ? fexpr__32793.cljs$core$IFn$_invoke$arity$0() : fexpr__32793.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__32794_33754 = ast;
var map__32794_33755__$1 = (((((!((map__32794_33754 == null))))?(((((map__32794_33754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32794_33754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32794_33754):map__32794_33754);
var env_33756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32794_33755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33756))){
var map__32796_33760 = env_33756;
var map__32796_33761__$1 = (((((!((map__32796_33760 == null))))?(((((map__32796_33760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32796_33760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32796_33760):map__32796_33760);
var line_33762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32796_33761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32796_33761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__32798 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__32800 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__32799 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__32799.cljs$core$IFn$_invoke$arity$1 ? fexpr__32799.cljs$core$IFn$_invoke$arity$1(G__32800) : fexpr__32799.call(null,G__32800));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32798,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__32798;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33762 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33763)?(column_33763 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__32809 = arguments.length;
switch (G__32809) {
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
var len__4789__auto___33768 = arguments.length;
var i__4790__auto___33769 = (0);
while(true){
if((i__4790__auto___33769 < len__4789__auto___33768)){
args_arr__4810__auto__.push((arguments[i__4790__auto___33769]));

var G__33771 = (i__4790__auto___33769 + (1));
i__4790__auto___33769 = G__33771;
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
var s_33780 = (function (){var G__32810 = a;
if((!(typeof a === 'string'))){
return G__32810.toString();
} else {
return G__32810;
}
})();
var temp__5739__auto___33781 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___33781 == null)){
} else {
var sm_data_33782 = temp__5739__auto___33781;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_33782,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__32801_SHARP_){
return (p1__32801_SHARP_ + s_33780.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_33780], 0));

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

var seq__32815 = cljs.core.seq(xs);
var chunk__32816 = null;
var count__32817 = (0);
var i__32818 = (0);
while(true){
if((i__32818 < count__32817)){
var x = chunk__32816.cljs$core$IIndexed$_nth$arity$2(null,i__32818);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33784 = seq__32815;
var G__33785 = chunk__32816;
var G__33786 = count__32817;
var G__33787 = (i__32818 + (1));
seq__32815 = G__33784;
chunk__32816 = G__33785;
count__32817 = G__33786;
i__32818 = G__33787;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32815);
if(temp__5735__auto__){
var seq__32815__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32815__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32815__$1);
var G__33790 = cljs.core.chunk_rest(seq__32815__$1);
var G__33791 = c__4609__auto__;
var G__33792 = cljs.core.count(c__4609__auto__);
var G__33793 = (0);
seq__32815 = G__33790;
chunk__32816 = G__33791;
count__32817 = G__33792;
i__32818 = G__33793;
continue;
} else {
var x = cljs.core.first(seq__32815__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33795 = cljs.core.next(seq__32815__$1);
var G__33796 = null;
var G__33797 = (0);
var G__33798 = (0);
seq__32815 = G__33795;
chunk__32816 = G__33796;
count__32817 = G__33797;
i__32818 = G__33798;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq32803){
var G__32804 = cljs.core.first(seq32803);
var seq32803__$1 = cljs.core.next(seq32803);
var G__32805 = cljs.core.first(seq32803__$1);
var seq32803__$2 = cljs.core.next(seq32803__$1);
var G__32806 = cljs.core.first(seq32803__$2);
var seq32803__$3 = cljs.core.next(seq32803__$2);
var G__32807 = cljs.core.first(seq32803__$3);
var seq32803__$4 = cljs.core.next(seq32803__$3);
var G__32808 = cljs.core.first(seq32803__$4);
var seq32803__$5 = cljs.core.next(seq32803__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32804,G__32805,G__32806,G__32807,G__32808,seq32803__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__32823){
var map__32824 = p__32823;
var map__32824__$1 = (((((!((map__32824 == null))))?(((((map__32824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32824):map__32824);
var m = map__32824__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32824__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__32835 = arguments.length;
switch (G__32835) {
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
var len__4789__auto___33800 = arguments.length;
var i__4790__auto___33801 = (0);
while(true){
if((i__4790__auto___33801 < len__4789__auto___33800)){
args_arr__4810__auto__.push((arguments[i__4790__auto___33801]));

var G__33802 = (i__4790__auto___33801 + (1));
i__4790__auto___33801 = G__33802;
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

var seq__32854_33807 = cljs.core.seq(xs);
var chunk__32855_33808 = null;
var count__32856_33809 = (0);
var i__32857_33810 = (0);
while(true){
if((i__32857_33810 < count__32856_33809)){
var x_33811 = chunk__32855_33808.cljs$core$IIndexed$_nth$arity$2(null,i__32857_33810);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33811);


var G__33812 = seq__32854_33807;
var G__33813 = chunk__32855_33808;
var G__33814 = count__32856_33809;
var G__33815 = (i__32857_33810 + (1));
seq__32854_33807 = G__33812;
chunk__32855_33808 = G__33813;
count__32856_33809 = G__33814;
i__32857_33810 = G__33815;
continue;
} else {
var temp__5735__auto___33816 = cljs.core.seq(seq__32854_33807);
if(temp__5735__auto___33816){
var seq__32854_33817__$1 = temp__5735__auto___33816;
if(cljs.core.chunked_seq_QMARK_(seq__32854_33817__$1)){
var c__4609__auto___33818 = cljs.core.chunk_first(seq__32854_33817__$1);
var G__33819 = cljs.core.chunk_rest(seq__32854_33817__$1);
var G__33820 = c__4609__auto___33818;
var G__33821 = cljs.core.count(c__4609__auto___33818);
var G__33822 = (0);
seq__32854_33807 = G__33819;
chunk__32855_33808 = G__33820;
count__32856_33809 = G__33821;
i__32857_33810 = G__33822;
continue;
} else {
var x_33823 = cljs.core.first(seq__32854_33817__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33823);


var G__33824 = cljs.core.next(seq__32854_33817__$1);
var G__33825 = null;
var G__33826 = (0);
var G__33827 = (0);
seq__32854_33807 = G__33824;
chunk__32855_33808 = G__33825;
count__32856_33809 = G__33826;
i__32857_33810 = G__33827;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq32829){
var G__32830 = cljs.core.first(seq32829);
var seq32829__$1 = cljs.core.next(seq32829);
var G__32831 = cljs.core.first(seq32829__$1);
var seq32829__$2 = cljs.core.next(seq32829__$1);
var G__32832 = cljs.core.first(seq32829__$2);
var seq32829__$3 = cljs.core.next(seq32829__$2);
var G__32833 = cljs.core.first(seq32829__$3);
var seq32829__$4 = cljs.core.next(seq32829__$3);
var G__32834 = cljs.core.first(seq32829__$4);
var seq32829__$5 = cljs.core.next(seq32829__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32830,G__32831,G__32832,G__32833,G__32834,seq32829__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32865_33828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32866_33829 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32867_33830 = true;
var _STAR_print_fn_STAR__temp_val__32868_33831 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32867_33830);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32868_33831);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32866_33829);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32865_33828);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32871 = cljs.core.get_global_hierarchy;
return (fexpr__32871.cljs$core$IFn$_invoke$arity$0 ? fexpr__32871.cljs$core$IFn$_invoke$arity$0() : fexpr__32871.call(null));
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
var vec__32875 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32875,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32875,(1),null);
var G__32878 = ns;
var G__32879 = name;
var G__32880 = (function (){
var G__32881 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__32881) : cljs.compiler.emit_constant.call(null,G__32881));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__32878,G__32879,G__32880) : cljs.compiler.emit_record_value.call(null,G__32878,G__32879,G__32880));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__32882 = cljs.core.keys(x);
var G__32883 = cljs.core.vals(x);
var G__32884 = cljs.compiler.emit_constants_comma_sep;
var G__32885 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__32882,G__32883,G__32884,G__32885) : cljs.compiler.emit_map.call(null,G__32882,G__32883,G__32884,G__32885));
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
var G__32889 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__32890 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__32889,G__32890) : cljs.compiler.emit_with_meta.call(null,G__32889,G__32890));
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
var vec__32946 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(2),null);
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
var G__32963 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__32963) : x.call(null,G__32963));
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
var G__32966 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__32966) : x.call(null,G__32966));
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
var G__32974 = items;
var G__32975 = (function (p1__32972_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__32972_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__32974,G__32975) : cljs.compiler.emit_js_object.call(null,G__32974,G__32975));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__32980){
var map__32981 = p__32980;
var map__32981__$1 = (((((!((map__32981 == null))))?(((((map__32981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32981):map__32981);
var ast = map__32981__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32981__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32981__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__32983 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__32983__$1 = (((((!((map__32983 == null))))?(((((map__32983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32983):map__32983);
var cenv = map__32983__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32983__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__32986 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4174__auto__ = (function (){var G__32989 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__32989) : cljs.compiler.es5_GT__EQ_.call(null,G__32989));
})();
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4174__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__32986,cljs.analyzer.es5_allowed);
} else {
return G__32986;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4185__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__32991 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__32991,reserved);
} else {
return G__32991;
}
})();
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__32992_33843 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__32992_33844__$1 = (((G__32992_33843 instanceof cljs.core.Keyword))?G__32992_33843.fqn:null);
switch (G__32992_33844__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__32998){
var map__32999 = p__32998;
var map__32999__$1 = (((((!((map__32999 == null))))?(((((map__32999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32999):map__32999);
var arg = map__32999__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33001 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33001__$1 = (((((!((map__33001 == null))))?(((((map__33001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33001):map__33001);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33009){
var map__33010 = p__33009;
var map__33010__$1 = (((((!((map__33010 == null))))?(((((map__33010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33010):map__33010);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33010__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33010__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__33012_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33012_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__33025 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33025) : comma_sep.call(null,G__33025));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__33026 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33026) : comma_sep.call(null,G__33026));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33031){
var map__33032 = p__33031;
var map__33032__$1 = (((((!((map__33032 == null))))?(((((map__33032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33032):map__33032);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33035){
var map__33036 = p__33035;
var map__33036__$1 = (((((!((map__33036 == null))))?(((((map__33036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33036):map__33036);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33036__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__33038_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33038_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__33039 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33039) : comma_sep.call(null,G__33039));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33040){
var map__33041 = p__33040;
var map__33041__$1 = (((((!((map__33041 == null))))?(((((map__33041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33041):map__33041);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___33862 = cljs.core.seq(items);
if(temp__5735__auto___33862){
var items_33863__$1 = temp__5735__auto___33862;
var vec__33043_33864 = items_33863__$1;
var seq__33044_33865 = cljs.core.seq(vec__33043_33864);
var first__33045_33866 = cljs.core.first(seq__33044_33865);
var seq__33044_33867__$1 = cljs.core.next(seq__33044_33865);
var vec__33046_33868 = first__33045_33866;
var k_33869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33046_33868,(0),null);
var v_33870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33046_33868,(1),null);
var r_33871 = seq__33044_33867__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_33869),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_33870) : emit_js_object_val.call(null,v_33870)));

var seq__33050_33872 = cljs.core.seq(r_33871);
var chunk__33051_33873 = null;
var count__33052_33874 = (0);
var i__33053_33875 = (0);
while(true){
if((i__33053_33875 < count__33052_33874)){
var vec__33060_33876 = chunk__33051_33873.cljs$core$IIndexed$_nth$arity$2(null,i__33053_33875);
var k_33877__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33060_33876,(0),null);
var v_33878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33060_33876,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_33877__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_33878__$1) : emit_js_object_val.call(null,v_33878__$1)));


var G__33879 = seq__33050_33872;
var G__33880 = chunk__33051_33873;
var G__33881 = count__33052_33874;
var G__33882 = (i__33053_33875 + (1));
seq__33050_33872 = G__33879;
chunk__33051_33873 = G__33880;
count__33052_33874 = G__33881;
i__33053_33875 = G__33882;
continue;
} else {
var temp__5735__auto___33883__$1 = cljs.core.seq(seq__33050_33872);
if(temp__5735__auto___33883__$1){
var seq__33050_33884__$1 = temp__5735__auto___33883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33050_33884__$1)){
var c__4609__auto___33885 = cljs.core.chunk_first(seq__33050_33884__$1);
var G__33886 = cljs.core.chunk_rest(seq__33050_33884__$1);
var G__33887 = c__4609__auto___33885;
var G__33888 = cljs.core.count(c__4609__auto___33885);
var G__33889 = (0);
seq__33050_33872 = G__33886;
chunk__33051_33873 = G__33887;
count__33052_33874 = G__33888;
i__33053_33875 = G__33889;
continue;
} else {
var vec__33067_33890 = cljs.core.first(seq__33050_33884__$1);
var k_33891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067_33890,(0),null);
var v_33892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067_33890,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_33891__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_33892__$1) : emit_js_object_val.call(null,v_33892__$1)));


var G__33893 = cljs.core.next(seq__33050_33884__$1);
var G__33894 = null;
var G__33895 = (0);
var G__33896 = (0);
seq__33050_33872 = G__33893;
chunk__33051_33873 = G__33894;
count__33052_33874 = G__33895;
i__33053_33875 = G__33896;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33070){
var map__33071 = p__33070;
var map__33071__$1 = (((((!((map__33071 == null))))?(((((map__33071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33071):map__33071);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33071__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33071__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__33073){
var map__33074 = p__33073;
var map__33074__$1 = (((((!((map__33074 == null))))?(((((map__33074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33074):map__33074);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__33076){
var map__33077 = p__33076;
var map__33077__$1 = (((((!((map__33077 == null))))?(((((map__33077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33077):map__33077);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33079){
var map__33080 = p__33079;
var map__33080__$1 = (((((!((map__33080 == null))))?(((((map__33080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33080):map__33080);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33080__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__33082 = cljs.analyzer.unwrap_quote(expr);
var map__33082__$1 = (((((!((map__33082 == null))))?(((((map__33082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33082):map__33082);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__33084 = cljs.analyzer.unwrap_quote(expr);
var map__33084__$1 = (((((!((map__33084 == null))))?(((((map__33084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33084):map__33084);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33084__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33084__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33084__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4185__auto__ = (function (){var fexpr__33087 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__33087.cljs$core$IFn$_invoke$arity$1 ? fexpr__33087.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33087.call(null,tag));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33088){
var map__33089 = p__33088;
var map__33089__$1 = (((((!((map__33089 == null))))?(((((map__33089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33089):map__33089);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__33091){
var map__33092 = p__33091;
var map__33092__$1 = (((((!((map__33092 == null))))?(((((map__33092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33092):map__33092);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33092__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33092__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33092__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33094_33908 = cljs.core.seq(nodes);
var chunk__33095_33909 = null;
var count__33096_33910 = (0);
var i__33097_33911 = (0);
while(true){
if((i__33097_33911 < count__33096_33910)){
var map__33123_33912 = chunk__33095_33909.cljs$core$IIndexed$_nth$arity$2(null,i__33097_33911);
var map__33123_33913__$1 = (((((!((map__33123_33912 == null))))?(((((map__33123_33912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33123_33912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33123_33912):map__33123_33912);
var ts_33914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33123_33913__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33124_33915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33123_33913__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33124_33916__$1 = (((((!((map__33124_33915 == null))))?(((((map__33124_33915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33124_33915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33124_33915):map__33124_33915);
var then_33917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124_33916__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33128_33918 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_33914));
var chunk__33129_33919 = null;
var count__33130_33920 = (0);
var i__33131_33921 = (0);
while(true){
if((i__33131_33921 < count__33130_33920)){
var test_33922 = chunk__33129_33919.cljs$core$IIndexed$_nth$arity$2(null,i__33131_33921);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33922,":");


var G__33923 = seq__33128_33918;
var G__33924 = chunk__33129_33919;
var G__33925 = count__33130_33920;
var G__33926 = (i__33131_33921 + (1));
seq__33128_33918 = G__33923;
chunk__33129_33919 = G__33924;
count__33130_33920 = G__33925;
i__33131_33921 = G__33926;
continue;
} else {
var temp__5735__auto___33927 = cljs.core.seq(seq__33128_33918);
if(temp__5735__auto___33927){
var seq__33128_33928__$1 = temp__5735__auto___33927;
if(cljs.core.chunked_seq_QMARK_(seq__33128_33928__$1)){
var c__4609__auto___33929 = cljs.core.chunk_first(seq__33128_33928__$1);
var G__33930 = cljs.core.chunk_rest(seq__33128_33928__$1);
var G__33931 = c__4609__auto___33929;
var G__33932 = cljs.core.count(c__4609__auto___33929);
var G__33933 = (0);
seq__33128_33918 = G__33930;
chunk__33129_33919 = G__33931;
count__33130_33920 = G__33932;
i__33131_33921 = G__33933;
continue;
} else {
var test_33934 = cljs.core.first(seq__33128_33928__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33934,":");


var G__33935 = cljs.core.next(seq__33128_33928__$1);
var G__33936 = null;
var G__33937 = (0);
var G__33938 = (0);
seq__33128_33918 = G__33935;
chunk__33129_33919 = G__33936;
count__33130_33920 = G__33937;
i__33131_33921 = G__33938;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_33917);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_33917);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__33939 = seq__33094_33908;
var G__33940 = chunk__33095_33909;
var G__33941 = count__33096_33910;
var G__33942 = (i__33097_33911 + (1));
seq__33094_33908 = G__33939;
chunk__33095_33909 = G__33940;
count__33096_33910 = G__33941;
i__33097_33911 = G__33942;
continue;
} else {
var temp__5735__auto___33943 = cljs.core.seq(seq__33094_33908);
if(temp__5735__auto___33943){
var seq__33094_33944__$1 = temp__5735__auto___33943;
if(cljs.core.chunked_seq_QMARK_(seq__33094_33944__$1)){
var c__4609__auto___33945 = cljs.core.chunk_first(seq__33094_33944__$1);
var G__33946 = cljs.core.chunk_rest(seq__33094_33944__$1);
var G__33947 = c__4609__auto___33945;
var G__33948 = cljs.core.count(c__4609__auto___33945);
var G__33949 = (0);
seq__33094_33908 = G__33946;
chunk__33095_33909 = G__33947;
count__33096_33910 = G__33948;
i__33097_33911 = G__33949;
continue;
} else {
var map__33140_33950 = cljs.core.first(seq__33094_33944__$1);
var map__33140_33951__$1 = (((((!((map__33140_33950 == null))))?(((((map__33140_33950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33140_33950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33140_33950):map__33140_33950);
var ts_33952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140_33951__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33141_33953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140_33951__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33141_33954__$1 = (((((!((map__33141_33953 == null))))?(((((map__33141_33953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33141_33953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33141_33953):map__33141_33953);
var then_33955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33141_33954__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33144_33960 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_33952));
var chunk__33145_33961 = null;
var count__33146_33962 = (0);
var i__33147_33963 = (0);
while(true){
if((i__33147_33963 < count__33146_33962)){
var test_33964 = chunk__33145_33961.cljs$core$IIndexed$_nth$arity$2(null,i__33147_33963);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33964,":");


var G__33965 = seq__33144_33960;
var G__33966 = chunk__33145_33961;
var G__33967 = count__33146_33962;
var G__33968 = (i__33147_33963 + (1));
seq__33144_33960 = G__33965;
chunk__33145_33961 = G__33966;
count__33146_33962 = G__33967;
i__33147_33963 = G__33968;
continue;
} else {
var temp__5735__auto___33969__$1 = cljs.core.seq(seq__33144_33960);
if(temp__5735__auto___33969__$1){
var seq__33144_33970__$1 = temp__5735__auto___33969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33144_33970__$1)){
var c__4609__auto___33971 = cljs.core.chunk_first(seq__33144_33970__$1);
var G__33972 = cljs.core.chunk_rest(seq__33144_33970__$1);
var G__33973 = c__4609__auto___33971;
var G__33974 = cljs.core.count(c__4609__auto___33971);
var G__33975 = (0);
seq__33144_33960 = G__33972;
chunk__33145_33961 = G__33973;
count__33146_33962 = G__33974;
i__33147_33963 = G__33975;
continue;
} else {
var test_33976 = cljs.core.first(seq__33144_33970__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_33976,":");


var G__33977 = cljs.core.next(seq__33144_33970__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33144_33960 = G__33977;
chunk__33145_33961 = G__33978;
count__33146_33962 = G__33979;
i__33147_33963 = G__33980;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_33955);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_33955);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__33981 = cljs.core.next(seq__33094_33944__$1);
var G__33982 = null;
var G__33983 = (0);
var G__33984 = (0);
seq__33094_33908 = G__33981;
chunk__33095_33909 = G__33982;
count__33096_33910 = G__33983;
i__33097_33911 = G__33984;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33164){
var map__33165 = p__33164;
var map__33165__$1 = (((((!((map__33165 == null))))?(((((map__33165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33165):map__33165);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33178 = env;
var G__33179 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33178,G__33179) : cljs.compiler.resolve_type.call(null,G__33178,G__33179));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33180 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33172_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__33172_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__33172_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__33183 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33183,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33183;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33186 = env;
var G__33187 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33186,G__33187) : cljs.compiler.resolve_type.call(null,G__33186,G__33187));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33188_SHARP_){
return cljs.compiler.resolve_type(env,p1__33188_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__33191 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33192 = cljs.core.seq(vec__33191);
var first__33193 = cljs.core.first(seq__33192);
var seq__33192__$1 = cljs.core.next(seq__33192);
var p = first__33193;
var first__33193__$1 = cljs.core.first(seq__33192__$1);
var seq__33192__$2 = cljs.core.next(seq__33192__$1);
var ts = first__33193__$1;
var first__33193__$2 = cljs.core.first(seq__33192__$2);
var seq__33192__$3 = cljs.core.next(seq__33192__$2);
var n = first__33193__$2;
var xs = seq__33192__$3;
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
var vec__33194 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33195 = cljs.core.seq(vec__33194);
var first__33196 = cljs.core.first(seq__33195);
var seq__33195__$1 = cljs.core.next(seq__33195);
var p = first__33196;
var first__33196__$1 = cljs.core.first(seq__33195__$1);
var seq__33195__$2 = cljs.core.next(seq__33195__$1);
var ts = first__33196__$1;
var xs = seq__33195__$2;
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
var G__33198 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__33197 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__33197.cljs$core$IFn$_invoke$arity$1 ? fexpr__33197.cljs$core$IFn$_invoke$arity$1(G__33198) : fexpr__33197.call(null,G__33198));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
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
var vec__33209 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33199_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__33199_SHARP_);
} else {
return p1__33199_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__33210 = cljs.core.seq(vec__33209);
var first__33211 = cljs.core.first(seq__33210);
var seq__33210__$1 = cljs.core.next(seq__33210);
var x = first__33211;
var ys = seq__33210__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__33212 = cljs.core.seq(ys);
var chunk__33213 = null;
var count__33214 = (0);
var i__33215 = (0);
while(true){
if((i__33215 < count__33214)){
var next_line = chunk__33213.cljs$core$IIndexed$_nth$arity$2(null,i__33215);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__33999 = seq__33212;
var G__34000 = chunk__33213;
var G__34001 = count__33214;
var G__34002 = (i__33215 + (1));
seq__33212 = G__33999;
chunk__33213 = G__34000;
count__33214 = G__34001;
i__33215 = G__34002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33212);
if(temp__5735__auto__){
var seq__33212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33212__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33212__$1);
var G__34003 = cljs.core.chunk_rest(seq__33212__$1);
var G__34004 = c__4609__auto__;
var G__34005 = cljs.core.count(c__4609__auto__);
var G__34006 = (0);
seq__33212 = G__34003;
chunk__33213 = G__34004;
count__33214 = G__34005;
i__33215 = G__34006;
continue;
} else {
var next_line = cljs.core.first(seq__33212__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34007 = cljs.core.next(seq__33212__$1);
var G__34008 = null;
var G__34009 = (0);
var G__34010 = (0);
seq__33212 = G__34007;
chunk__33213 = G__34008;
count__33214 = G__34009;
i__33215 = G__34010;
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

var seq__33216_34011 = cljs.core.seq(docs__$2);
var chunk__33217_34012 = null;
var count__33218_34013 = (0);
var i__33219_34014 = (0);
while(true){
if((i__33219_34014 < count__33218_34013)){
var e_34015 = chunk__33217_34012.cljs$core$IIndexed$_nth$arity$2(null,i__33219_34014);
if(cljs.core.truth_(e_34015)){
print_comment_lines(e_34015);
} else {
}


var G__34016 = seq__33216_34011;
var G__34017 = chunk__33217_34012;
var G__34018 = count__33218_34013;
var G__34019 = (i__33219_34014 + (1));
seq__33216_34011 = G__34016;
chunk__33217_34012 = G__34017;
count__33218_34013 = G__34018;
i__33219_34014 = G__34019;
continue;
} else {
var temp__5735__auto___34020 = cljs.core.seq(seq__33216_34011);
if(temp__5735__auto___34020){
var seq__33216_34021__$1 = temp__5735__auto___34020;
if(cljs.core.chunked_seq_QMARK_(seq__33216_34021__$1)){
var c__4609__auto___34022 = cljs.core.chunk_first(seq__33216_34021__$1);
var G__34023 = cljs.core.chunk_rest(seq__33216_34021__$1);
var G__34024 = c__4609__auto___34022;
var G__34025 = cljs.core.count(c__4609__auto___34022);
var G__34026 = (0);
seq__33216_34011 = G__34023;
chunk__33217_34012 = G__34024;
count__33218_34013 = G__34025;
i__33219_34014 = G__34026;
continue;
} else {
var e_34031 = cljs.core.first(seq__33216_34021__$1);
if(cljs.core.truth_(e_34031)){
print_comment_lines(e_34031);
} else {
}


var G__34032 = cljs.core.next(seq__33216_34021__$1);
var G__34033 = null;
var G__34034 = (0);
var G__34035 = (0);
seq__33216_34011 = G__34032;
chunk__33217_34012 = G__34033;
count__33218_34013 = G__34034;
i__33219_34014 = G__34035;
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
var and__4174__auto__ = cljs.core.some((function (p1__33221_SHARP_){
return goog.string.startsWith(p1__33221_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33225){
var map__33226 = p__33225;
var map__33226__$1 = (((((!((map__33226 == null))))?(((((map__33226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33226):map__33226);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33228){
var map__33229 = p__33228;
var map__33229__$1 = (((((!((map__33229 == null))))?(((((map__33229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33229):map__33229);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33229__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33229__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__33231_34040 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__33232_34041 = null;
var count__33233_34042 = (0);
var i__33234_34043 = (0);
while(true){
if((i__33234_34043 < count__33233_34042)){
var vec__33241_34044 = chunk__33232_34041.cljs$core$IIndexed$_nth$arity$2(null,i__33234_34043);
var i_34045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241_34044,(0),null);
var param_34046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241_34044,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34046);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34047 = seq__33231_34040;
var G__34048 = chunk__33232_34041;
var G__34049 = count__33233_34042;
var G__34050 = (i__33234_34043 + (1));
seq__33231_34040 = G__34047;
chunk__33232_34041 = G__34048;
count__33233_34042 = G__34049;
i__33234_34043 = G__34050;
continue;
} else {
var temp__5735__auto___34051 = cljs.core.seq(seq__33231_34040);
if(temp__5735__auto___34051){
var seq__33231_34056__$1 = temp__5735__auto___34051;
if(cljs.core.chunked_seq_QMARK_(seq__33231_34056__$1)){
var c__4609__auto___34057 = cljs.core.chunk_first(seq__33231_34056__$1);
var G__34058 = cljs.core.chunk_rest(seq__33231_34056__$1);
var G__34059 = c__4609__auto___34057;
var G__34060 = cljs.core.count(c__4609__auto___34057);
var G__34061 = (0);
seq__33231_34040 = G__34058;
chunk__33232_34041 = G__34059;
count__33233_34042 = G__34060;
i__33234_34043 = G__34061;
continue;
} else {
var vec__33244_34062 = cljs.core.first(seq__33231_34056__$1);
var i_34063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33244_34062,(0),null);
var param_34064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33244_34062,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34064);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34065 = cljs.core.next(seq__33231_34056__$1);
var G__34066 = null;
var G__34067 = (0);
var G__34068 = (0);
seq__33231_34040 = G__34065;
chunk__33232_34041 = G__34066;
count__33233_34042 = G__34067;
i__33234_34043 = G__34068;
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

var seq__33247_34069 = cljs.core.seq(params);
var chunk__33248_34070 = null;
var count__33249_34071 = (0);
var i__33250_34072 = (0);
while(true){
if((i__33250_34072 < count__33249_34071)){
var param_34073 = chunk__33248_34070.cljs$core$IIndexed$_nth$arity$2(null,i__33250_34072);
cljs.compiler.emit(param_34073);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34073,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34074 = seq__33247_34069;
var G__34075 = chunk__33248_34070;
var G__34076 = count__33249_34071;
var G__34077 = (i__33250_34072 + (1));
seq__33247_34069 = G__34074;
chunk__33248_34070 = G__34075;
count__33249_34071 = G__34076;
i__33250_34072 = G__34077;
continue;
} else {
var temp__5735__auto___34078 = cljs.core.seq(seq__33247_34069);
if(temp__5735__auto___34078){
var seq__33247_34079__$1 = temp__5735__auto___34078;
if(cljs.core.chunked_seq_QMARK_(seq__33247_34079__$1)){
var c__4609__auto___34080 = cljs.core.chunk_first(seq__33247_34079__$1);
var G__34081 = cljs.core.chunk_rest(seq__33247_34079__$1);
var G__34082 = c__4609__auto___34080;
var G__34083 = cljs.core.count(c__4609__auto___34080);
var G__34084 = (0);
seq__33247_34069 = G__34081;
chunk__33248_34070 = G__34082;
count__33249_34071 = G__34083;
i__33250_34072 = G__34084;
continue;
} else {
var param_34086 = cljs.core.first(seq__33247_34079__$1);
cljs.compiler.emit(param_34086);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34086,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34090 = cljs.core.next(seq__33247_34079__$1);
var G__34091 = null;
var G__34092 = (0);
var G__34093 = (0);
seq__33247_34069 = G__34090;
chunk__33248_34070 = G__34091;
count__33249_34071 = G__34092;
i__33250_34072 = G__34093;
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

var seq__33254_34094 = cljs.core.seq(params);
var chunk__33255_34095 = null;
var count__33256_34096 = (0);
var i__33257_34097 = (0);
while(true){
if((i__33257_34097 < count__33256_34096)){
var param_34098 = chunk__33255_34095.cljs$core$IIndexed$_nth$arity$2(null,i__33257_34097);
cljs.compiler.emit(param_34098);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34098,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34099 = seq__33254_34094;
var G__34100 = chunk__33255_34095;
var G__34101 = count__33256_34096;
var G__34102 = (i__33257_34097 + (1));
seq__33254_34094 = G__34099;
chunk__33255_34095 = G__34100;
count__33256_34096 = G__34101;
i__33257_34097 = G__34102;
continue;
} else {
var temp__5735__auto___34103 = cljs.core.seq(seq__33254_34094);
if(temp__5735__auto___34103){
var seq__33254_34104__$1 = temp__5735__auto___34103;
if(cljs.core.chunked_seq_QMARK_(seq__33254_34104__$1)){
var c__4609__auto___34105 = cljs.core.chunk_first(seq__33254_34104__$1);
var G__34106 = cljs.core.chunk_rest(seq__33254_34104__$1);
var G__34107 = c__4609__auto___34105;
var G__34108 = cljs.core.count(c__4609__auto___34105);
var G__34109 = (0);
seq__33254_34094 = G__34106;
chunk__33255_34095 = G__34107;
count__33256_34096 = G__34108;
i__33257_34097 = G__34109;
continue;
} else {
var param_34110 = cljs.core.first(seq__33254_34104__$1);
cljs.compiler.emit(param_34110);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34110,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34111 = cljs.core.next(seq__33254_34104__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__33254_34094 = G__34111;
chunk__33255_34095 = G__34112;
count__33256_34096 = G__34113;
i__33257_34097 = G__34114;
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
var seq__33258 = cljs.core.seq(params);
var chunk__33259 = null;
var count__33260 = (0);
var i__33261 = (0);
while(true){
if((i__33261 < count__33260)){
var param = chunk__33259.cljs$core$IIndexed$_nth$arity$2(null,i__33261);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34115 = seq__33258;
var G__34116 = chunk__33259;
var G__34117 = count__33260;
var G__34118 = (i__33261 + (1));
seq__33258 = G__34115;
chunk__33259 = G__34116;
count__33260 = G__34117;
i__33261 = G__34118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33258);
if(temp__5735__auto__){
var seq__33258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33258__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33258__$1);
var G__34119 = cljs.core.chunk_rest(seq__33258__$1);
var G__34120 = c__4609__auto__;
var G__34121 = cljs.core.count(c__4609__auto__);
var G__34122 = (0);
seq__33258 = G__34119;
chunk__33259 = G__34120;
count__33260 = G__34121;
i__33261 = G__34122;
continue;
} else {
var param = cljs.core.first(seq__33258__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34127 = cljs.core.next(seq__33258__$1);
var G__34128 = null;
var G__34129 = (0);
var G__34130 = (0);
seq__33258 = G__34127;
chunk__33259 = G__34128;
count__33260 = G__34129;
i__33261 = G__34130;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33266){
var map__33267 = p__33266;
var map__33267__$1 = (((((!((map__33267 == null))))?(((((map__33267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33267):map__33267);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33269){
var map__33270 = p__33269;
var map__33270__$1 = (((((!((map__33270 == null))))?(((((map__33270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33270):map__33270);
var f = map__33270__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_34135__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34136 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34135__$1);
var delegate_name_34137 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34136),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_34137," = function (");

var seq__33272_34138 = cljs.core.seq(params);
var chunk__33273_34139 = null;
var count__33274_34140 = (0);
var i__33275_34141 = (0);
while(true){
if((i__33275_34141 < count__33274_34140)){
var param_34142 = chunk__33273_34139.cljs$core$IIndexed$_nth$arity$2(null,i__33275_34141);
cljs.compiler.emit(param_34142);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34142,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34143 = seq__33272_34138;
var G__34144 = chunk__33273_34139;
var G__34145 = count__33274_34140;
var G__34146 = (i__33275_34141 + (1));
seq__33272_34138 = G__34143;
chunk__33273_34139 = G__34144;
count__33274_34140 = G__34145;
i__33275_34141 = G__34146;
continue;
} else {
var temp__5735__auto___34147 = cljs.core.seq(seq__33272_34138);
if(temp__5735__auto___34147){
var seq__33272_34148__$1 = temp__5735__auto___34147;
if(cljs.core.chunked_seq_QMARK_(seq__33272_34148__$1)){
var c__4609__auto___34149 = cljs.core.chunk_first(seq__33272_34148__$1);
var G__34150 = cljs.core.chunk_rest(seq__33272_34148__$1);
var G__34151 = c__4609__auto___34149;
var G__34152 = cljs.core.count(c__4609__auto___34149);
var G__34153 = (0);
seq__33272_34138 = G__34150;
chunk__33273_34139 = G__34151;
count__33274_34140 = G__34152;
i__33275_34141 = G__34153;
continue;
} else {
var param_34154 = cljs.core.first(seq__33272_34148__$1);
cljs.compiler.emit(param_34154);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34154,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34155 = cljs.core.next(seq__33272_34148__$1);
var G__34156 = null;
var G__34157 = (0);
var G__34158 = (0);
seq__33272_34138 = G__34155;
chunk__33273_34139 = G__34156;
count__33274_34140 = G__34157;
i__33275_34141 = G__34158;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_34136," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_34164 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_34164,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_34137,".call(this,");

var seq__33276_34165 = cljs.core.seq(params);
var chunk__33277_34166 = null;
var count__33278_34167 = (0);
var i__33279_34168 = (0);
while(true){
if((i__33279_34168 < count__33278_34167)){
var param_34169 = chunk__33277_34166.cljs$core$IIndexed$_nth$arity$2(null,i__33279_34168);
cljs.compiler.emit(param_34169);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34169,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34170 = seq__33276_34165;
var G__34171 = chunk__33277_34166;
var G__34172 = count__33278_34167;
var G__34173 = (i__33279_34168 + (1));
seq__33276_34165 = G__34170;
chunk__33277_34166 = G__34171;
count__33278_34167 = G__34172;
i__33279_34168 = G__34173;
continue;
} else {
var temp__5735__auto___34174 = cljs.core.seq(seq__33276_34165);
if(temp__5735__auto___34174){
var seq__33276_34175__$1 = temp__5735__auto___34174;
if(cljs.core.chunked_seq_QMARK_(seq__33276_34175__$1)){
var c__4609__auto___34176 = cljs.core.chunk_first(seq__33276_34175__$1);
var G__34177 = cljs.core.chunk_rest(seq__33276_34175__$1);
var G__34178 = c__4609__auto___34176;
var G__34179 = cljs.core.count(c__4609__auto___34176);
var G__34180 = (0);
seq__33276_34165 = G__34177;
chunk__33277_34166 = G__34178;
count__33278_34167 = G__34179;
i__33279_34168 = G__34180;
continue;
} else {
var param_34181 = cljs.core.first(seq__33276_34175__$1);
cljs.compiler.emit(param_34181);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34181,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34182 = cljs.core.next(seq__33276_34175__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33276_34165 = G__34182;
chunk__33277_34166 = G__34183;
count__33278_34167 = G__34184;
i__33279_34168 = G__34185;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34136,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_34136,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_34135__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34136,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_34137,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34136,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33288){
var map__33289 = p__33288;
var map__33289__$1 = (((((!((map__33289 == null))))?(((((map__33289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33289):map__33289);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33285_SHARP_){
var and__4174__auto__ = p1__33285_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33285_SHARP_));
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
var name_34190__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34191 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34190__$1);
var maxparams_34192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_34193 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34191),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_34194 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__33286_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__33286_SHARP_)));
}),cljs.core.seq(mmap_34193));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_34191," = null;");

var seq__33293_34195 = cljs.core.seq(ms_34194);
var chunk__33294_34196 = null;
var count__33295_34197 = (0);
var i__33296_34198 = (0);
while(true){
if((i__33296_34198 < count__33295_34197)){
var vec__33316_34199 = chunk__33294_34196.cljs$core$IIndexed$_nth$arity$2(null,i__33296_34198);
var n_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316_34199,(0),null);
var meth_34201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316_34199,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34200," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34201))){
cljs.compiler.emit_variadic_fn_method(meth_34201);
} else {
cljs.compiler.emit_fn_method(meth_34201);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34202 = seq__33293_34195;
var G__34203 = chunk__33294_34196;
var G__34204 = count__33295_34197;
var G__34205 = (i__33296_34198 + (1));
seq__33293_34195 = G__34202;
chunk__33294_34196 = G__34203;
count__33295_34197 = G__34204;
i__33296_34198 = G__34205;
continue;
} else {
var temp__5735__auto___34206 = cljs.core.seq(seq__33293_34195);
if(temp__5735__auto___34206){
var seq__33293_34208__$1 = temp__5735__auto___34206;
if(cljs.core.chunked_seq_QMARK_(seq__33293_34208__$1)){
var c__4609__auto___34212 = cljs.core.chunk_first(seq__33293_34208__$1);
var G__34213 = cljs.core.chunk_rest(seq__33293_34208__$1);
var G__34214 = c__4609__auto___34212;
var G__34215 = cljs.core.count(c__4609__auto___34212);
var G__34216 = (0);
seq__33293_34195 = G__34213;
chunk__33294_34196 = G__34214;
count__33295_34197 = G__34215;
i__33296_34198 = G__34216;
continue;
} else {
var vec__33319_34217 = cljs.core.first(seq__33293_34208__$1);
var n_34218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319_34217,(0),null);
var meth_34219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319_34217,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34218," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34219))){
cljs.compiler.emit_variadic_fn_method(meth_34219);
} else {
cljs.compiler.emit_fn_method(meth_34219);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34220 = cljs.core.next(seq__33293_34208__$1);
var G__34221 = null;
var G__34222 = (0);
var G__34223 = (0);
seq__33293_34195 = G__34220;
chunk__33294_34196 = G__34221;
count__33295_34197 = G__34222;
i__33296_34198 = G__34223;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34191," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_34192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_34192)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_34192));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__33322_34224 = cljs.core.seq(ms_34194);
var chunk__33323_34225 = null;
var count__33324_34226 = (0);
var i__33325_34227 = (0);
while(true){
if((i__33325_34227 < count__33324_34226)){
var vec__33345_34228 = chunk__33323_34225.cljs$core$IIndexed$_nth$arity$2(null,i__33325_34227);
var n_34229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345_34228,(0),null);
var meth_34230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345_34228,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34230))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34231 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34231," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34232 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34231," = new cljs.core.IndexedSeq(",a_34232,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34229,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34192)),(((cljs.core.count(maxparams_34192) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34231,");"], 0));
} else {
var pcnt_34233 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34230));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34233,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34229,".call(this",(((pcnt_34233 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34233,maxparams_34192)),null,(1),null)),(2),null))),");");
}


var G__34234 = seq__33322_34224;
var G__34235 = chunk__33323_34225;
var G__34236 = count__33324_34226;
var G__34237 = (i__33325_34227 + (1));
seq__33322_34224 = G__34234;
chunk__33323_34225 = G__34235;
count__33324_34226 = G__34236;
i__33325_34227 = G__34237;
continue;
} else {
var temp__5735__auto___34238 = cljs.core.seq(seq__33322_34224);
if(temp__5735__auto___34238){
var seq__33322_34239__$1 = temp__5735__auto___34238;
if(cljs.core.chunked_seq_QMARK_(seq__33322_34239__$1)){
var c__4609__auto___34240 = cljs.core.chunk_first(seq__33322_34239__$1);
var G__34241 = cljs.core.chunk_rest(seq__33322_34239__$1);
var G__34242 = c__4609__auto___34240;
var G__34243 = cljs.core.count(c__4609__auto___34240);
var G__34244 = (0);
seq__33322_34224 = G__34241;
chunk__33323_34225 = G__34242;
count__33324_34226 = G__34243;
i__33325_34227 = G__34244;
continue;
} else {
var vec__33369_34245 = cljs.core.first(seq__33322_34239__$1);
var n_34246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33369_34245,(0),null);
var meth_34247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33369_34245,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34247))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34248 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34248," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34249 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34248," = new cljs.core.IndexedSeq(",a_34249,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34246,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34192)),(((cljs.core.count(maxparams_34192) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34248,");"], 0));
} else {
var pcnt_34251 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34247));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34251,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34246,".call(this",(((pcnt_34251 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34251,maxparams_34192)),null,(1),null)),(2),null))),");");
}


var G__34253 = cljs.core.next(seq__33322_34239__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__33322_34224 = G__34253;
chunk__33323_34225 = G__34254;
count__33324_34226 = G__34255;
i__33325_34227 = G__34256;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_34264 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_34194)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_34264,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34191,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34191,".cljs$lang$applyTo = ",cljs.core.some((function (p1__33287_SHARP_){
var vec__33376 = p1__33287_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33376,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33376,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_34194),".cljs$lang$applyTo;");
} else {
}

var seq__33379_34265 = cljs.core.seq(ms_34194);
var chunk__33380_34266 = null;
var count__33381_34267 = (0);
var i__33382_34268 = (0);
while(true){
if((i__33382_34268 < count__33381_34267)){
var vec__33389_34269 = chunk__33380_34266.cljs$core$IIndexed$_nth$arity$2(null,i__33382_34268);
var n_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33389_34269,(0),null);
var meth_34271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33389_34269,(1),null);
var c_34272 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34271));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34271))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34191,".cljs$core$IFn$_invoke$arity$variadic = ",n_34270,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34191,".cljs$core$IFn$_invoke$arity$",c_34272," = ",n_34270,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34273 = seq__33379_34265;
var G__34274 = chunk__33380_34266;
var G__34275 = count__33381_34267;
var G__34276 = (i__33382_34268 + (1));
seq__33379_34265 = G__34273;
chunk__33380_34266 = G__34274;
count__33381_34267 = G__34275;
i__33382_34268 = G__34276;
continue;
} else {
var temp__5735__auto___34277 = cljs.core.seq(seq__33379_34265);
if(temp__5735__auto___34277){
var seq__33379_34278__$1 = temp__5735__auto___34277;
if(cljs.core.chunked_seq_QMARK_(seq__33379_34278__$1)){
var c__4609__auto___34279 = cljs.core.chunk_first(seq__33379_34278__$1);
var G__34280 = cljs.core.chunk_rest(seq__33379_34278__$1);
var G__34281 = c__4609__auto___34279;
var G__34282 = cljs.core.count(c__4609__auto___34279);
var G__34283 = (0);
seq__33379_34265 = G__34280;
chunk__33380_34266 = G__34281;
count__33381_34267 = G__34282;
i__33382_34268 = G__34283;
continue;
} else {
var vec__33392_34284 = cljs.core.first(seq__33379_34278__$1);
var n_34285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392_34284,(0),null);
var meth_34286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392_34284,(1),null);
var c_34287 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34286));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34286))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34191,".cljs$core$IFn$_invoke$arity$variadic = ",n_34285,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34191,".cljs$core$IFn$_invoke$arity$",c_34287," = ",n_34285,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34288 = cljs.core.next(seq__33379_34278__$1);
var G__34289 = null;
var G__34290 = (0);
var G__34291 = (0);
seq__33379_34265 = G__34288;
chunk__33380_34266 = G__34289;
count__33381_34267 = G__34290;
i__33382_34268 = G__34291;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34191,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33395){
var map__33396 = p__33395;
var map__33396__$1 = (((((!((map__33396 == null))))?(((((map__33396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33396):map__33396);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33407_34292 = cljs.core.seq(statements);
var chunk__33408_34293 = null;
var count__33409_34294 = (0);
var i__33410_34295 = (0);
while(true){
if((i__33410_34295 < count__33409_34294)){
var s_34296 = chunk__33408_34293.cljs$core$IIndexed$_nth$arity$2(null,i__33410_34295);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34296);


var G__34297 = seq__33407_34292;
var G__34298 = chunk__33408_34293;
var G__34299 = count__33409_34294;
var G__34300 = (i__33410_34295 + (1));
seq__33407_34292 = G__34297;
chunk__33408_34293 = G__34298;
count__33409_34294 = G__34299;
i__33410_34295 = G__34300;
continue;
} else {
var temp__5735__auto___34301 = cljs.core.seq(seq__33407_34292);
if(temp__5735__auto___34301){
var seq__33407_34302__$1 = temp__5735__auto___34301;
if(cljs.core.chunked_seq_QMARK_(seq__33407_34302__$1)){
var c__4609__auto___34303 = cljs.core.chunk_first(seq__33407_34302__$1);
var G__34304 = cljs.core.chunk_rest(seq__33407_34302__$1);
var G__34305 = c__4609__auto___34303;
var G__34306 = cljs.core.count(c__4609__auto___34303);
var G__34307 = (0);
seq__33407_34292 = G__34304;
chunk__33408_34293 = G__34305;
count__33409_34294 = G__34306;
i__33410_34295 = G__34307;
continue;
} else {
var s_34308 = cljs.core.first(seq__33407_34302__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34308);


var G__34309 = cljs.core.next(seq__33407_34302__$1);
var G__34310 = null;
var G__34311 = (0);
var G__34312 = (0);
seq__33407_34292 = G__34309;
chunk__33408_34293 = G__34310;
count__33409_34294 = G__34311;
i__33410_34295 = G__34312;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33426){
var map__33432 = p__33426;
var map__33432__$1 = (((((!((map__33432 == null))))?(((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33432):map__33432);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33436,is_loop){
var map__33437 = p__33436;
var map__33437__$1 = (((((!((map__33437 == null))))?(((((map__33437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33437):map__33437);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33439_34318 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33440_34319 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33440_34319);

try{var seq__33441_34320 = cljs.core.seq(bindings);
var chunk__33442_34321 = null;
var count__33443_34322 = (0);
var i__33444_34323 = (0);
while(true){
if((i__33444_34323 < count__33443_34322)){
var map__33474_34324 = chunk__33442_34321.cljs$core$IIndexed$_nth$arity$2(null,i__33444_34323);
var map__33474_34325__$1 = (((((!((map__33474_34324 == null))))?(((((map__33474_34324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33474_34324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33474_34324):map__33474_34324);
var binding_34326 = map__33474_34325__$1;
var init_34327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33474_34325__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34326);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34327,";");


var G__34328 = seq__33441_34320;
var G__34329 = chunk__33442_34321;
var G__34330 = count__33443_34322;
var G__34331 = (i__33444_34323 + (1));
seq__33441_34320 = G__34328;
chunk__33442_34321 = G__34329;
count__33443_34322 = G__34330;
i__33444_34323 = G__34331;
continue;
} else {
var temp__5735__auto___34333 = cljs.core.seq(seq__33441_34320);
if(temp__5735__auto___34333){
var seq__33441_34334__$1 = temp__5735__auto___34333;
if(cljs.core.chunked_seq_QMARK_(seq__33441_34334__$1)){
var c__4609__auto___34336 = cljs.core.chunk_first(seq__33441_34334__$1);
var G__34337 = cljs.core.chunk_rest(seq__33441_34334__$1);
var G__34338 = c__4609__auto___34336;
var G__34339 = cljs.core.count(c__4609__auto___34336);
var G__34340 = (0);
seq__33441_34320 = G__34337;
chunk__33442_34321 = G__34338;
count__33443_34322 = G__34339;
i__33444_34323 = G__34340;
continue;
} else {
var map__33476_34341 = cljs.core.first(seq__33441_34334__$1);
var map__33476_34342__$1 = (((((!((map__33476_34341 == null))))?(((((map__33476_34341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33476_34341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33476_34341):map__33476_34341);
var binding_34343 = map__33476_34342__$1;
var init_34344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33476_34342__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34343);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34344,";");


var G__34345 = cljs.core.next(seq__33441_34334__$1);
var G__34346 = null;
var G__34347 = (0);
var G__34348 = (0);
seq__33441_34320 = G__34345;
chunk__33442_34321 = G__34346;
count__33443_34322 = G__34347;
i__33444_34323 = G__34348;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33439_34318);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33478){
var map__33479 = p__33478;
var map__33479__$1 = (((((!((map__33479 == null))))?(((((map__33479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33479):map__33479);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33479__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33479__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4666__auto___34349 = cljs.core.count(exprs);
var i_34350 = (0);
while(true){
if((i_34350 < n__4666__auto___34349)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34350) : temps.call(null,i_34350))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_34350) : exprs.call(null,i_34350)),";");

var G__34351 = (i_34350 + (1));
i_34350 = G__34351;
continue;
} else {
}
break;
}

var n__4666__auto___34352 = cljs.core.count(exprs);
var i_34353 = (0);
while(true){
if((i_34353 < n__4666__auto___34352)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_34353) : params.call(null,i_34353)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34353) : temps.call(null,i_34353)),";");

var G__34354 = (i_34353 + (1));
i_34353 = G__34354;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33483){
var map__33484 = p__33483;
var map__33484__$1 = (((((!((map__33484 == null))))?(((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33484):map__33484);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33486_34355 = cljs.core.seq(bindings);
var chunk__33487_34356 = null;
var count__33488_34357 = (0);
var i__33489_34358 = (0);
while(true){
if((i__33489_34358 < count__33488_34357)){
var map__33502_34359 = chunk__33487_34356.cljs$core$IIndexed$_nth$arity$2(null,i__33489_34358);
var map__33502_34360__$1 = (((((!((map__33502_34359 == null))))?(((((map__33502_34359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33502_34359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33502_34359):map__33502_34359);
var binding_34361 = map__33502_34360__$1;
var init_34362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502_34360__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34361)," = ",init_34362,";");


var G__34363 = seq__33486_34355;
var G__34364 = chunk__33487_34356;
var G__34365 = count__33488_34357;
var G__34366 = (i__33489_34358 + (1));
seq__33486_34355 = G__34363;
chunk__33487_34356 = G__34364;
count__33488_34357 = G__34365;
i__33489_34358 = G__34366;
continue;
} else {
var temp__5735__auto___34367 = cljs.core.seq(seq__33486_34355);
if(temp__5735__auto___34367){
var seq__33486_34368__$1 = temp__5735__auto___34367;
if(cljs.core.chunked_seq_QMARK_(seq__33486_34368__$1)){
var c__4609__auto___34369 = cljs.core.chunk_first(seq__33486_34368__$1);
var G__34370 = cljs.core.chunk_rest(seq__33486_34368__$1);
var G__34371 = c__4609__auto___34369;
var G__34372 = cljs.core.count(c__4609__auto___34369);
var G__34373 = (0);
seq__33486_34355 = G__34370;
chunk__33487_34356 = G__34371;
count__33488_34357 = G__34372;
i__33489_34358 = G__34373;
continue;
} else {
var map__33509_34374 = cljs.core.first(seq__33486_34368__$1);
var map__33509_34375__$1 = (((((!((map__33509_34374 == null))))?(((((map__33509_34374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33509_34374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33509_34374):map__33509_34374);
var binding_34376 = map__33509_34375__$1;
var init_34377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33509_34375__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34376)," = ",init_34377,";");


var G__34378 = cljs.core.next(seq__33486_34368__$1);
var G__34379 = null;
var G__34380 = (0);
var G__34381 = (0);
seq__33486_34355 = G__34378;
chunk__33487_34356 = G__34379;
count__33488_34357 = G__34380;
i__33489_34358 = G__34381;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33514){
var map__33515 = p__33514;
var map__33515__$1 = (((((!((map__33515 == null))))?(((((map__33515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33515):map__33515);
var expr = map__33515__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33515__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33515__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__33529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__33529.cljs$core$IFn$_invoke$arity$1 ? fexpr__33529.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33529.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__33535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__33535.cljs$core$IFn$_invoke$arity$1 ? fexpr__33535.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__33535.call(null,first_arg_tag));
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
var vec__33517 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33512_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33512_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33513_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33513_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33517,(1),null);
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
var pimpl_34387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_34387,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34388 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_34388,args)),(((mfa_34388 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_34388,args)),"], 0))"], 0));
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
var G__33557 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__33556 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__33556.cljs$core$IFn$_invoke$arity$1 ? fexpr__33556.cljs$core$IFn$_invoke$arity$1(G__33557) : fexpr__33556.call(null,G__33557));
} else {
return and__4174__auto__;
}
})())){
var fprop_34391 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34391," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34391,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34391," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34391,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33558){
var map__33559 = p__33558;
var map__33559__$1 = (((((!((map__33559 == null))))?(((((map__33559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33559):map__33559);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33559__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33559__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__33561){
var map__33562 = p__33561;
var map__33562__$1 = (((((!((map__33562 == null))))?(((((map__33562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33562):map__33562);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33562__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33562__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
var map__33564 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33564__$1 = (((((!((map__33564 == null))))?(((((map__33564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33564):map__33564);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33564__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33564__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__33565 = options;
var map__33565__$1 = (((((!((map__33565 == null))))?(((((map__33565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33565):map__33565);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33565__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33565__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__33566 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__33571 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__33571__$1 = (((((!((map__33571 == null))))?(((((map__33571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33571):map__33571);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33571__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33571__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__33573_34395 = cljs.core.seq(libs_to_load);
var chunk__33574_34396 = null;
var count__33575_34397 = (0);
var i__33576_34398 = (0);
while(true){
if((i__33576_34398 < count__33575_34397)){
var lib_34400 = chunk__33574_34396.cljs$core$IIndexed$_nth$arity$2(null,i__33576_34398);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34400)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34400),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34400),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34400),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34400),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34400,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34400),"');");
}

}
}
}


var G__34401 = seq__33573_34395;
var G__34402 = chunk__33574_34396;
var G__34403 = count__33575_34397;
var G__34404 = (i__33576_34398 + (1));
seq__33573_34395 = G__34401;
chunk__33574_34396 = G__34402;
count__33575_34397 = G__34403;
i__33576_34398 = G__34404;
continue;
} else {
var temp__5735__auto___34405 = cljs.core.seq(seq__33573_34395);
if(temp__5735__auto___34405){
var seq__33573_34406__$1 = temp__5735__auto___34405;
if(cljs.core.chunked_seq_QMARK_(seq__33573_34406__$1)){
var c__4609__auto___34407 = cljs.core.chunk_first(seq__33573_34406__$1);
var G__34408 = cljs.core.chunk_rest(seq__33573_34406__$1);
var G__34409 = c__4609__auto___34407;
var G__34410 = cljs.core.count(c__4609__auto___34407);
var G__34411 = (0);
seq__33573_34395 = G__34408;
chunk__33574_34396 = G__34409;
count__33575_34397 = G__34410;
i__33576_34398 = G__34411;
continue;
} else {
var lib_34412 = cljs.core.first(seq__33573_34406__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34412)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34412),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34412),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34412),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34412),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34412,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34412),"');");
}

}
}
}


var G__34413 = cljs.core.next(seq__33573_34406__$1);
var G__34414 = null;
var G__34415 = (0);
var G__34416 = (0);
seq__33573_34395 = G__34413;
chunk__33574_34396 = G__34414;
count__33575_34397 = G__34415;
i__33576_34398 = G__34416;
continue;
}
} else {
}
}
break;
}

var seq__33582_34417 = cljs.core.seq(node_libs);
var chunk__33583_34418 = null;
var count__33584_34419 = (0);
var i__33585_34420 = (0);
while(true){
if((i__33585_34420 < count__33584_34419)){
var lib_34421 = chunk__33583_34418.cljs$core$IIndexed$_nth$arity$2(null,i__33585_34420);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34421)," = require('",lib_34421,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34422 = seq__33582_34417;
var G__34423 = chunk__33583_34418;
var G__34424 = count__33584_34419;
var G__34425 = (i__33585_34420 + (1));
seq__33582_34417 = G__34422;
chunk__33583_34418 = G__34423;
count__33584_34419 = G__34424;
i__33585_34420 = G__34425;
continue;
} else {
var temp__5735__auto___34426 = cljs.core.seq(seq__33582_34417);
if(temp__5735__auto___34426){
var seq__33582_34427__$1 = temp__5735__auto___34426;
if(cljs.core.chunked_seq_QMARK_(seq__33582_34427__$1)){
var c__4609__auto___34428 = cljs.core.chunk_first(seq__33582_34427__$1);
var G__34429 = cljs.core.chunk_rest(seq__33582_34427__$1);
var G__34430 = c__4609__auto___34428;
var G__34431 = cljs.core.count(c__4609__auto___34428);
var G__34432 = (0);
seq__33582_34417 = G__34429;
chunk__33583_34418 = G__34430;
count__33584_34419 = G__34431;
i__33585_34420 = G__34432;
continue;
} else {
var lib_34433 = cljs.core.first(seq__33582_34427__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34433)," = require('",lib_34433,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34435 = cljs.core.next(seq__33582_34427__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__33582_34417 = G__34435;
chunk__33583_34418 = G__34436;
count__33584_34419 = G__34437;
i__33585_34420 = G__34438;
continue;
}
} else {
}
}
break;
}

var seq__33586_34439 = cljs.core.seq(global_exports_libs);
var chunk__33587_34440 = null;
var count__33588_34441 = (0);
var i__33589_34442 = (0);
while(true){
if((i__33589_34442 < count__33588_34441)){
var lib_34444 = chunk__33587_34440.cljs$core$IIndexed$_nth$arity$2(null,i__33589_34442);
var map__33594_34447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_34444));
var map__33594_34448__$1 = (((((!((map__33594_34447 == null))))?(((((map__33594_34447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33594_34447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33594_34447):map__33594_34447);
var global_exports_34449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33594_34448__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_34449,lib_34444);


var G__34450 = seq__33586_34439;
var G__34451 = chunk__33587_34440;
var G__34452 = count__33588_34441;
var G__34453 = (i__33589_34442 + (1));
seq__33586_34439 = G__34450;
chunk__33587_34440 = G__34451;
count__33588_34441 = G__34452;
i__33589_34442 = G__34453;
continue;
} else {
var temp__5735__auto___34454 = cljs.core.seq(seq__33586_34439);
if(temp__5735__auto___34454){
var seq__33586_34455__$1 = temp__5735__auto___34454;
if(cljs.core.chunked_seq_QMARK_(seq__33586_34455__$1)){
var c__4609__auto___34456 = cljs.core.chunk_first(seq__33586_34455__$1);
var G__34457 = cljs.core.chunk_rest(seq__33586_34455__$1);
var G__34458 = c__4609__auto___34456;
var G__34459 = cljs.core.count(c__4609__auto___34456);
var G__34460 = (0);
seq__33586_34439 = G__34457;
chunk__33587_34440 = G__34458;
count__33588_34441 = G__34459;
i__33589_34442 = G__34460;
continue;
} else {
var lib_34461 = cljs.core.first(seq__33586_34455__$1);
var map__33596_34462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_34461));
var map__33596_34463__$1 = (((((!((map__33596_34462 == null))))?(((((map__33596_34462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33596_34462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33596_34462):map__33596_34462);
var global_exports_34464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33596_34463__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_34464,lib_34461);


var G__34465 = cljs.core.next(seq__33586_34455__$1);
var G__34466 = null;
var G__34467 = (0);
var G__34468 = (0);
seq__33586_34439 = G__34465;
chunk__33587_34440 = G__34466;
count__33588_34441 = G__34467;
i__33589_34442 = G__34468;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__33598){
var map__33599 = p__33598;
var map__33599__$1 = (((((!((map__33599 == null))))?(((((map__33599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33599):map__33599);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__33601){
var map__33602 = p__33601;
var map__33602__$1 = (((((!((map__33602 == null))))?(((((map__33602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33602):map__33602);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33602__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__33604){
var map__33605 = p__33604;
var map__33605__$1 = (((((!((map__33605 == null))))?(((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33605):map__33605);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33607_34470 = cljs.core.seq(protocols);
var chunk__33608_34471 = null;
var count__33609_34472 = (0);
var i__33610_34473 = (0);
while(true){
if((i__33610_34473 < count__33609_34472)){
var protocol_34474 = chunk__33608_34471.cljs$core$IIndexed$_nth$arity$2(null,i__33610_34473);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34474)),"}");


var G__34475 = seq__33607_34470;
var G__34476 = chunk__33608_34471;
var G__34477 = count__33609_34472;
var G__34478 = (i__33610_34473 + (1));
seq__33607_34470 = G__34475;
chunk__33608_34471 = G__34476;
count__33609_34472 = G__34477;
i__33610_34473 = G__34478;
continue;
} else {
var temp__5735__auto___34479 = cljs.core.seq(seq__33607_34470);
if(temp__5735__auto___34479){
var seq__33607_34480__$1 = temp__5735__auto___34479;
if(cljs.core.chunked_seq_QMARK_(seq__33607_34480__$1)){
var c__4609__auto___34481 = cljs.core.chunk_first(seq__33607_34480__$1);
var G__34482 = cljs.core.chunk_rest(seq__33607_34480__$1);
var G__34483 = c__4609__auto___34481;
var G__34484 = cljs.core.count(c__4609__auto___34481);
var G__34485 = (0);
seq__33607_34470 = G__34482;
chunk__33608_34471 = G__34483;
count__33609_34472 = G__34484;
i__33610_34473 = G__34485;
continue;
} else {
var protocol_34490 = cljs.core.first(seq__33607_34480__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34490)),"}");


var G__34491 = cljs.core.next(seq__33607_34480__$1);
var G__34492 = null;
var G__34493 = (0);
var G__34494 = (0);
seq__33607_34470 = G__34491;
chunk__33608_34471 = G__34492;
count__33609_34472 = G__34493;
i__33610_34473 = G__34494;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33619_34495 = cljs.core.seq(fields__$1);
var chunk__33620_34496 = null;
var count__33621_34497 = (0);
var i__33622_34498 = (0);
while(true){
if((i__33622_34498 < count__33621_34497)){
var fld_34499 = chunk__33620_34496.cljs$core$IIndexed$_nth$arity$2(null,i__33622_34498);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34499," = ",fld_34499,";");


var G__34500 = seq__33619_34495;
var G__34501 = chunk__33620_34496;
var G__34502 = count__33621_34497;
var G__34503 = (i__33622_34498 + (1));
seq__33619_34495 = G__34500;
chunk__33620_34496 = G__34501;
count__33621_34497 = G__34502;
i__33622_34498 = G__34503;
continue;
} else {
var temp__5735__auto___34504 = cljs.core.seq(seq__33619_34495);
if(temp__5735__auto___34504){
var seq__33619_34505__$1 = temp__5735__auto___34504;
if(cljs.core.chunked_seq_QMARK_(seq__33619_34505__$1)){
var c__4609__auto___34506 = cljs.core.chunk_first(seq__33619_34505__$1);
var G__34507 = cljs.core.chunk_rest(seq__33619_34505__$1);
var G__34508 = c__4609__auto___34506;
var G__34509 = cljs.core.count(c__4609__auto___34506);
var G__34510 = (0);
seq__33619_34495 = G__34507;
chunk__33620_34496 = G__34508;
count__33621_34497 = G__34509;
i__33622_34498 = G__34510;
continue;
} else {
var fld_34511 = cljs.core.first(seq__33619_34505__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34511," = ",fld_34511,";");


var G__34512 = cljs.core.next(seq__33619_34505__$1);
var G__34513 = null;
var G__34514 = (0);
var G__34515 = (0);
seq__33619_34495 = G__34512;
chunk__33620_34496 = G__34513;
count__33621_34497 = G__34514;
i__33622_34498 = G__34515;
continue;
}
} else {
}
}
break;
}

var seq__33625_34516 = cljs.core.seq(pmasks);
var chunk__33626_34517 = null;
var count__33627_34518 = (0);
var i__33628_34519 = (0);
while(true){
if((i__33628_34519 < count__33627_34518)){
var vec__33635_34520 = chunk__33626_34517.cljs$core$IIndexed$_nth$arity$2(null,i__33628_34519);
var pno_34521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34520,(0),null);
var pmask_34522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34520,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_34521,"$ = ",pmask_34522,";");


var G__34523 = seq__33625_34516;
var G__34524 = chunk__33626_34517;
var G__34525 = count__33627_34518;
var G__34526 = (i__33628_34519 + (1));
seq__33625_34516 = G__34523;
chunk__33626_34517 = G__34524;
count__33627_34518 = G__34525;
i__33628_34519 = G__34526;
continue;
} else {
var temp__5735__auto___34527 = cljs.core.seq(seq__33625_34516);
if(temp__5735__auto___34527){
var seq__33625_34528__$1 = temp__5735__auto___34527;
if(cljs.core.chunked_seq_QMARK_(seq__33625_34528__$1)){
var c__4609__auto___34529 = cljs.core.chunk_first(seq__33625_34528__$1);
var G__34530 = cljs.core.chunk_rest(seq__33625_34528__$1);
var G__34531 = c__4609__auto___34529;
var G__34532 = cljs.core.count(c__4609__auto___34529);
var G__34533 = (0);
seq__33625_34516 = G__34530;
chunk__33626_34517 = G__34531;
count__33627_34518 = G__34532;
i__33628_34519 = G__34533;
continue;
} else {
var vec__33638_34534 = cljs.core.first(seq__33625_34528__$1);
var pno_34535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638_34534,(0),null);
var pmask_34536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638_34534,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_34535,"$ = ",pmask_34536,";");


var G__34537 = cljs.core.next(seq__33625_34528__$1);
var G__34538 = null;
var G__34539 = (0);
var G__34540 = (0);
seq__33625_34516 = G__34537;
chunk__33626_34517 = G__34538;
count__33627_34518 = G__34539;
i__33628_34519 = G__34540;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__33642){
var map__33643 = p__33642;
var map__33643__$1 = (((((!((map__33643 == null))))?(((((map__33643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33643):map__33643);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33645_34545 = cljs.core.seq(protocols);
var chunk__33646_34546 = null;
var count__33647_34547 = (0);
var i__33648_34548 = (0);
while(true){
if((i__33648_34548 < count__33647_34547)){
var protocol_34549 = chunk__33646_34546.cljs$core$IIndexed$_nth$arity$2(null,i__33648_34548);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34549)),"}");


var G__34550 = seq__33645_34545;
var G__34551 = chunk__33646_34546;
var G__34552 = count__33647_34547;
var G__34553 = (i__33648_34548 + (1));
seq__33645_34545 = G__34550;
chunk__33646_34546 = G__34551;
count__33647_34547 = G__34552;
i__33648_34548 = G__34553;
continue;
} else {
var temp__5735__auto___34554 = cljs.core.seq(seq__33645_34545);
if(temp__5735__auto___34554){
var seq__33645_34555__$1 = temp__5735__auto___34554;
if(cljs.core.chunked_seq_QMARK_(seq__33645_34555__$1)){
var c__4609__auto___34556 = cljs.core.chunk_first(seq__33645_34555__$1);
var G__34557 = cljs.core.chunk_rest(seq__33645_34555__$1);
var G__34558 = c__4609__auto___34556;
var G__34559 = cljs.core.count(c__4609__auto___34556);
var G__34560 = (0);
seq__33645_34545 = G__34557;
chunk__33646_34546 = G__34558;
count__33647_34547 = G__34559;
i__33648_34548 = G__34560;
continue;
} else {
var protocol_34561 = cljs.core.first(seq__33645_34555__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34561)),"}");


var G__34562 = cljs.core.next(seq__33645_34555__$1);
var G__34563 = null;
var G__34564 = (0);
var G__34565 = (0);
seq__33645_34545 = G__34562;
chunk__33646_34546 = G__34563;
count__33647_34547 = G__34564;
i__33648_34548 = G__34565;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33649_34566 = cljs.core.seq(fields__$1);
var chunk__33650_34567 = null;
var count__33651_34568 = (0);
var i__33652_34569 = (0);
while(true){
if((i__33652_34569 < count__33651_34568)){
var fld_34570 = chunk__33650_34567.cljs$core$IIndexed$_nth$arity$2(null,i__33652_34569);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34570," = ",fld_34570,";");


var G__34571 = seq__33649_34566;
var G__34572 = chunk__33650_34567;
var G__34573 = count__33651_34568;
var G__34574 = (i__33652_34569 + (1));
seq__33649_34566 = G__34571;
chunk__33650_34567 = G__34572;
count__33651_34568 = G__34573;
i__33652_34569 = G__34574;
continue;
} else {
var temp__5735__auto___34575 = cljs.core.seq(seq__33649_34566);
if(temp__5735__auto___34575){
var seq__33649_34576__$1 = temp__5735__auto___34575;
if(cljs.core.chunked_seq_QMARK_(seq__33649_34576__$1)){
var c__4609__auto___34577 = cljs.core.chunk_first(seq__33649_34576__$1);
var G__34578 = cljs.core.chunk_rest(seq__33649_34576__$1);
var G__34579 = c__4609__auto___34577;
var G__34580 = cljs.core.count(c__4609__auto___34577);
var G__34581 = (0);
seq__33649_34566 = G__34578;
chunk__33650_34567 = G__34579;
count__33651_34568 = G__34580;
i__33652_34569 = G__34581;
continue;
} else {
var fld_34582 = cljs.core.first(seq__33649_34576__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34582," = ",fld_34582,";");


var G__34583 = cljs.core.next(seq__33649_34576__$1);
var G__34584 = null;
var G__34585 = (0);
var G__34586 = (0);
seq__33649_34566 = G__34583;
chunk__33650_34567 = G__34584;
count__33651_34568 = G__34585;
i__33652_34569 = G__34586;
continue;
}
} else {
}
}
break;
}

var seq__33653_34588 = cljs.core.seq(pmasks);
var chunk__33654_34589 = null;
var count__33655_34590 = (0);
var i__33656_34591 = (0);
while(true){
if((i__33656_34591 < count__33655_34590)){
var vec__33663_34595 = chunk__33654_34589.cljs$core$IIndexed$_nth$arity$2(null,i__33656_34591);
var pno_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663_34595,(0),null);
var pmask_34597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663_34595,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_34596,"$ = ",pmask_34597,";");


var G__34598 = seq__33653_34588;
var G__34599 = chunk__33654_34589;
var G__34600 = count__33655_34590;
var G__34601 = (i__33656_34591 + (1));
seq__33653_34588 = G__34598;
chunk__33654_34589 = G__34599;
count__33655_34590 = G__34600;
i__33656_34591 = G__34601;
continue;
} else {
var temp__5735__auto___34602 = cljs.core.seq(seq__33653_34588);
if(temp__5735__auto___34602){
var seq__33653_34603__$1 = temp__5735__auto___34602;
if(cljs.core.chunked_seq_QMARK_(seq__33653_34603__$1)){
var c__4609__auto___34604 = cljs.core.chunk_first(seq__33653_34603__$1);
var G__34605 = cljs.core.chunk_rest(seq__33653_34603__$1);
var G__34606 = c__4609__auto___34604;
var G__34607 = cljs.core.count(c__4609__auto___34604);
var G__34608 = (0);
seq__33653_34588 = G__34605;
chunk__33654_34589 = G__34606;
count__33655_34590 = G__34607;
i__33656_34591 = G__34608;
continue;
} else {
var vec__33666_34609 = cljs.core.first(seq__33653_34603__$1);
var pno_34610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_34609,(0),null);
var pmask_34611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_34609,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_34610,"$ = ",pmask_34611,";");


var G__34612 = cljs.core.next(seq__33653_34603__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__33653_34588 = G__34612;
chunk__33654_34589 = G__34613;
count__33655_34590 = G__34614;
i__33656_34591 = G__34615;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__33669){
var map__33670 = p__33669;
var map__33670__$1 = (((((!((map__33670 == null))))?(((((map__33670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33670):map__33670);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__33673){
var map__33674 = p__33673;
var map__33674__$1 = (((((!((map__33674 == null))))?(((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33674):map__33674);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4174__auto__ = code;
if(cljs.core.truth_(and__4174__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4174__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__27183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__33681 = cljs.core.seq(table);
var chunk__33682 = null;
var count__33683 = (0);
var i__33684 = (0);
while(true){
if((i__33684 < count__33683)){
var vec__33691 = chunk__33682.cljs$core$IIndexed$_nth$arity$2(null,i__33684);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(1),null);
var ns_34621 = cljs.core.namespace(sym);
var name_34622 = cljs.core.name(sym);
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


var G__34623 = seq__33681;
var G__34624 = chunk__33682;
var G__34625 = count__33683;
var G__34626 = (i__33684 + (1));
seq__33681 = G__34623;
chunk__33682 = G__34624;
count__33683 = G__34625;
i__33684 = G__34626;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33681);
if(temp__5735__auto__){
var seq__33681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33681__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33681__$1);
var G__34627 = cljs.core.chunk_rest(seq__33681__$1);
var G__34628 = c__4609__auto__;
var G__34629 = cljs.core.count(c__4609__auto__);
var G__34630 = (0);
seq__33681 = G__34627;
chunk__33682 = G__34628;
count__33683 = G__34629;
i__33684 = G__34630;
continue;
} else {
var vec__33694 = cljs.core.first(seq__33681__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(1),null);
var ns_34631 = cljs.core.namespace(sym);
var name_34632 = cljs.core.name(sym);
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


var G__34635 = cljs.core.next(seq__33681__$1);
var G__34636 = null;
var G__34637 = (0);
var G__34638 = (0);
seq__33681 = G__34635;
chunk__33682 = G__34636;
count__33683 = G__34637;
i__33684 = G__34638;
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
var G__33698 = arguments.length;
switch (G__33698) {
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
var k_34640 = cljs.core.first(ks);
var vec__33699_34641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_34640);
var top_34642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699_34641,(0),null);
var prefix_SINGLEQUOTE__34643 = vec__33699_34641;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_34640)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__34643) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_34642)) || (cljs.core.contains_QMARK_(known_externs,top_34642)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__34643)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_34642);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__34643)),";");
}
} else {
}

var m_34650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_34640);
if(cljs.core.empty_QMARK_(m_34650)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__34643,m_34650,top_level,known_externs);
}

var G__34651 = cljs.core.next(ks);
ks = G__34651;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
