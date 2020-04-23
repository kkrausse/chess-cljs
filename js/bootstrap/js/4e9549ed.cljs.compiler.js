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
var map__11752 = s;
var map__11752__$1 = (((((!((map__11752 == null))))?(((((map__11752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11752):map__11752);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11759 = info;
var map__11760 = G__11759;
var map__11760__$1 = (((((!((map__11760 == null))))?(((((map__11760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11760):map__11760);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11760__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11759__$1 = G__11759;
while(true){
var d__$2 = d__$1;
var map__11767 = G__11759__$1;
var map__11767__$1 = (((((!((map__11767 == null))))?(((((map__11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11767):map__11767);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12608 = (d__$2 + (1));
var G__12609 = shadow__$1;
d__$1 = G__12608;
G__11759__$1 = G__12609;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11769){
var map__11770 = p__11769;
var map__11770__$1 = (((((!((map__11770 == null))))?(((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11770):map__11770);
var name_var = map__11770__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11770__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11772 = info;
var map__11772__$1 = (((((!((map__11772 == null))))?(((((map__11772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11772):map__11772);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11772__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11772__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__11774 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__11774) : cljs.compiler.munge.call(null,G__11774));
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
var G__11776 = arguments.length;
switch (G__11776) {
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
var ms = (function (){var fexpr__11777 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11472,11472,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__11777.cljs$core$IFn$_invoke$arity$1 ? fexpr__11777.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__11777.call(null,ss__$3));
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
var G__11778 = cp;
switch (G__11778) {
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
var seq__11779_12622 = cljs.core.seq(s);
var chunk__11780_12623 = null;
var count__11781_12624 = (0);
var i__11782_12625 = (0);
while(true){
if((i__11782_12625 < count__11781_12624)){
var c_12626 = chunk__11780_12623.cljs$core$IIndexed$_nth$arity$2(null,i__11782_12625);
sb.append(cljs.compiler.escape_char(c_12626));


var G__12627 = seq__11779_12622;
var G__12628 = chunk__11780_12623;
var G__12629 = count__11781_12624;
var G__12630 = (i__11782_12625 + (1));
seq__11779_12622 = G__12627;
chunk__11780_12623 = G__12628;
count__11781_12624 = G__12629;
i__11782_12625 = G__12630;
continue;
} else {
var temp__5735__auto___12631 = cljs.core.seq(seq__11779_12622);
if(temp__5735__auto___12631){
var seq__11779_12632__$1 = temp__5735__auto___12631;
if(cljs.core.chunked_seq_QMARK_(seq__11779_12632__$1)){
var c__4609__auto___12633 = cljs.core.chunk_first(seq__11779_12632__$1);
var G__12634 = cljs.core.chunk_rest(seq__11779_12632__$1);
var G__12635 = c__4609__auto___12633;
var G__12636 = cljs.core.count(c__4609__auto___12633);
var G__12637 = (0);
seq__11779_12622 = G__12634;
chunk__11780_12623 = G__12635;
count__11781_12624 = G__12636;
i__11782_12625 = G__12637;
continue;
} else {
var c_12640 = cljs.core.first(seq__11779_12632__$1);
sb.append(cljs.compiler.escape_char(c_12640));


var G__12645 = cljs.core.next(seq__11779_12632__$1);
var G__12646 = null;
var G__12647 = (0);
var G__12648 = (0);
seq__11779_12622 = G__12645;
chunk__11780_12623 = G__12646;
count__11781_12624 = G__12647;
i__11782_12625 = G__12648;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__11786 = cljs.core.get_global_hierarchy;
return (fexpr__11786.cljs$core$IFn$_invoke$arity$0 ? fexpr__11786.cljs$core$IFn$_invoke$arity$0() : fexpr__11786.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11787_12652 = ast;
var map__11787_12653__$1 = (((((!((map__11787_12652 == null))))?(((((map__11787_12652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11787_12652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11787_12652):map__11787_12652);
var env_12654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11787_12653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12654))){
var map__11790_12655 = env_12654;
var map__11790_12656__$1 = (((((!((map__11790_12655 == null))))?(((((map__11790_12655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11790_12655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11790_12655):map__11790_12655);
var line_12657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11790_12656__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11790_12656__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__11792 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__11794 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__11793 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__11793.cljs$core$IFn$_invoke$arity$1 ? fexpr__11793.cljs$core$IFn$_invoke$arity$1(G__11794) : fexpr__11793.call(null,G__11794));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11792,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11792;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12657 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12658)?(column_12658 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__11806 = arguments.length;
switch (G__11806) {
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
var len__4789__auto___12663 = arguments.length;
var i__4790__auto___12664 = (0);
while(true){
if((i__4790__auto___12664 < len__4789__auto___12663)){
args_arr__4810__auto__.push((arguments[i__4790__auto___12664]));

var G__12665 = (i__4790__auto___12664 + (1));
i__4790__auto___12664 = G__12665;
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
var s_12669 = (function (){var G__11808 = a;
if((!(typeof a === 'string'))){
return G__11808.toString();
} else {
return G__11808;
}
})();
var temp__5739__auto___12670 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___12670 == null)){
} else {
var sm_data_12671 = temp__5739__auto___12670;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_12671,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__11796_SHARP_){
return (p1__11796_SHARP_ + s_12669.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_12669], 0));

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

var seq__11818 = cljs.core.seq(xs);
var chunk__11819 = null;
var count__11820 = (0);
var i__11821 = (0);
while(true){
if((i__11821 < count__11820)){
var x = chunk__11819.cljs$core$IIndexed$_nth$arity$2(null,i__11821);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__12678 = seq__11818;
var G__12679 = chunk__11819;
var G__12680 = count__11820;
var G__12681 = (i__11821 + (1));
seq__11818 = G__12678;
chunk__11819 = G__12679;
count__11820 = G__12680;
i__11821 = G__12681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11818);
if(temp__5735__auto__){
var seq__11818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11818__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__11818__$1);
var G__12682 = cljs.core.chunk_rest(seq__11818__$1);
var G__12683 = c__4609__auto__;
var G__12684 = cljs.core.count(c__4609__auto__);
var G__12685 = (0);
seq__11818 = G__12682;
chunk__11819 = G__12683;
count__11820 = G__12684;
i__11821 = G__12685;
continue;
} else {
var x = cljs.core.first(seq__11818__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__12686 = cljs.core.next(seq__11818__$1);
var G__12687 = null;
var G__12688 = (0);
var G__12689 = (0);
seq__11818 = G__12686;
chunk__11819 = G__12687;
count__11820 = G__12688;
i__11821 = G__12689;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq11799){
var G__11800 = cljs.core.first(seq11799);
var seq11799__$1 = cljs.core.next(seq11799);
var G__11801 = cljs.core.first(seq11799__$1);
var seq11799__$2 = cljs.core.next(seq11799__$1);
var G__11802 = cljs.core.first(seq11799__$2);
var seq11799__$3 = cljs.core.next(seq11799__$2);
var G__11803 = cljs.core.first(seq11799__$3);
var seq11799__$4 = cljs.core.next(seq11799__$3);
var G__11804 = cljs.core.first(seq11799__$4);
var seq11799__$5 = cljs.core.next(seq11799__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11800,G__11801,G__11802,G__11803,G__11804,seq11799__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__11850){
var map__11851 = p__11850;
var map__11851__$1 = (((((!((map__11851 == null))))?(((((map__11851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11851):map__11851);
var m = map__11851__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11851__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11864 = arguments.length;
switch (G__11864) {
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
var len__4789__auto___12694 = arguments.length;
var i__4790__auto___12695 = (0);
while(true){
if((i__4790__auto___12695 < len__4789__auto___12694)){
args_arr__4810__auto__.push((arguments[i__4790__auto___12695]));

var G__12696 = (i__4790__auto___12695 + (1));
i__4790__auto___12695 = G__12696;
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

var seq__11868_12697 = cljs.core.seq(xs);
var chunk__11869_12698 = null;
var count__11870_12699 = (0);
var i__11871_12700 = (0);
while(true){
if((i__11871_12700 < count__11870_12699)){
var x_12701 = chunk__11869_12698.cljs$core$IIndexed$_nth$arity$2(null,i__11871_12700);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_12701);


var G__12702 = seq__11868_12697;
var G__12703 = chunk__11869_12698;
var G__12704 = count__11870_12699;
var G__12705 = (i__11871_12700 + (1));
seq__11868_12697 = G__12702;
chunk__11869_12698 = G__12703;
count__11870_12699 = G__12704;
i__11871_12700 = G__12705;
continue;
} else {
var temp__5735__auto___12706 = cljs.core.seq(seq__11868_12697);
if(temp__5735__auto___12706){
var seq__11868_12708__$1 = temp__5735__auto___12706;
if(cljs.core.chunked_seq_QMARK_(seq__11868_12708__$1)){
var c__4609__auto___12709 = cljs.core.chunk_first(seq__11868_12708__$1);
var G__12710 = cljs.core.chunk_rest(seq__11868_12708__$1);
var G__12711 = c__4609__auto___12709;
var G__12712 = cljs.core.count(c__4609__auto___12709);
var G__12713 = (0);
seq__11868_12697 = G__12710;
chunk__11869_12698 = G__12711;
count__11870_12699 = G__12712;
i__11871_12700 = G__12713;
continue;
} else {
var x_12714 = cljs.core.first(seq__11868_12708__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_12714);


var G__12715 = cljs.core.next(seq__11868_12708__$1);
var G__12716 = null;
var G__12717 = (0);
var G__12718 = (0);
seq__11868_12697 = G__12715;
chunk__11869_12698 = G__12716;
count__11870_12699 = G__12717;
i__11871_12700 = G__12718;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11858){
var G__11859 = cljs.core.first(seq11858);
var seq11858__$1 = cljs.core.next(seq11858);
var G__11860 = cljs.core.first(seq11858__$1);
var seq11858__$2 = cljs.core.next(seq11858__$1);
var G__11861 = cljs.core.first(seq11858__$2);
var seq11858__$3 = cljs.core.next(seq11858__$2);
var G__11862 = cljs.core.first(seq11858__$3);
var seq11858__$4 = cljs.core.next(seq11858__$3);
var G__11863 = cljs.core.first(seq11858__$4);
var seq11858__$5 = cljs.core.next(seq11858__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11859,G__11860,G__11861,G__11862,G__11863,seq11858__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11872_12722 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11873_12723 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11874_12724 = true;
var _STAR_print_fn_STAR__temp_val__11875_12725 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11874_12724);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11875_12725);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11873_12723);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11872_12722);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__11877 = cljs.core.get_global_hierarchy;
return (fexpr__11877.cljs$core$IFn$_invoke$arity$0 ? fexpr__11877.cljs$core$IFn$_invoke$arity$0() : fexpr__11877.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__11882 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(1),null);
var G__11885 = ns;
var G__11886 = name;
var G__11887 = (function (){
var G__11888 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__11888) : cljs.compiler.emit_constant.call(null,G__11888));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__11885,G__11886,G__11887) : cljs.compiler.emit_record_value.call(null,G__11885,G__11886,G__11887));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__11889 = cljs.core.keys(x);
var G__11890 = cljs.core.vals(x);
var G__11891 = cljs.compiler.emit_constants_comma_sep;
var G__11892 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__11889,G__11890,G__11891,G__11892) : cljs.compiler.emit_map.call(null,G__11889,G__11890,G__11891,G__11892));
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
var G__11897 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__11898 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__11897,G__11898) : cljs.compiler.emit_with_meta.call(null,G__11897,G__11898));
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
var vec__11900 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11900,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11900,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11900,(2),null);
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
var G__11903 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__11903) : x.call(null,G__11903));
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
var G__11904 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__11904) : x.call(null,G__11904));
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
var G__11908 = items;
var G__11909 = (function (p1__11907_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__11907_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__11908,G__11909) : cljs.compiler.emit_js_object.call(null,G__11908,G__11909));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11914){
var map__11915 = p__11914;
var map__11915__$1 = (((((!((map__11915 == null))))?(((((map__11915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11915):map__11915);
var ast = map__11915__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11915__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11915__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11915__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11917 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__11917__$1 = (((((!((map__11917 == null))))?(((((map__11917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11917):map__11917);
var cenv = map__11917__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11917__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__11919 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4174__auto__ = (function (){var G__11922 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__11922) : cljs.compiler.es5_GT__EQ_.call(null,G__11922));
})();
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4174__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__11919,cljs.analyzer.es5_allowed);
} else {
return G__11919;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4185__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__11926 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__11926,reserved);
} else {
return G__11926;
}
})();
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__11930_12738 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11930_12739__$1 = (((G__11930_12738 instanceof cljs.core.Keyword))?G__11930_12738.fqn:null);
switch (G__11930_12739__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11933){
var map__11934 = p__11933;
var map__11934__$1 = (((((!((map__11934 == null))))?(((((map__11934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11934):map__11934);
var arg = map__11934__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11934__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11934__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11934__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11934__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__11944 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11944__$1 = (((((!((map__11944 == null))))?(((((map__11944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11944):map__11944);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11944__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11952){
var map__11953 = p__11952;
var map__11953__$1 = (((((!((map__11953 == null))))?(((((map__11953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11953):map__11953);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11953__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11953__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__11955_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11955_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__11956 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__11956) : comma_sep.call(null,G__11956));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__11957 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__11957) : comma_sep.call(null,G__11957));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11958){
var map__11959 = p__11958;
var map__11959__$1 = (((((!((map__11959 == null))))?(((((map__11959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11959):map__11959);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11961){
var map__11962 = p__11961;
var map__11962__$1 = (((((!((map__11962 == null))))?(((((map__11962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11962):map__11962);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__11964_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11964_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__11966 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__11966) : comma_sep.call(null,G__11966));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11967){
var map__11968 = p__11967;
var map__11968__$1 = (((((!((map__11968 == null))))?(((((map__11968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11968):map__11968);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11968__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___12744 = cljs.core.seq(items);
if(temp__5735__auto___12744){
var items_12745__$1 = temp__5735__auto___12744;
var vec__11974_12746 = items_12745__$1;
var seq__11975_12747 = cljs.core.seq(vec__11974_12746);
var first__11976_12748 = cljs.core.first(seq__11975_12747);
var seq__11975_12749__$1 = cljs.core.next(seq__11975_12747);
var vec__11977_12750 = first__11976_12748;
var k_12751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977_12750,(0),null);
var v_12752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977_12750,(1),null);
var r_12753 = seq__11975_12749__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_12751),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_12752) : emit_js_object_val.call(null,v_12752)));

var seq__11980_12757 = cljs.core.seq(r_12753);
var chunk__11981_12758 = null;
var count__11982_12759 = (0);
var i__11983_12760 = (0);
while(true){
if((i__11983_12760 < count__11982_12759)){
var vec__11990_12761 = chunk__11981_12758.cljs$core$IIndexed$_nth$arity$2(null,i__11983_12760);
var k_12762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11990_12761,(0),null);
var v_12763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11990_12761,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_12762__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_12763__$1) : emit_js_object_val.call(null,v_12763__$1)));


var G__12764 = seq__11980_12757;
var G__12765 = chunk__11981_12758;
var G__12766 = count__11982_12759;
var G__12767 = (i__11983_12760 + (1));
seq__11980_12757 = G__12764;
chunk__11981_12758 = G__12765;
count__11982_12759 = G__12766;
i__11983_12760 = G__12767;
continue;
} else {
var temp__5735__auto___12768__$1 = cljs.core.seq(seq__11980_12757);
if(temp__5735__auto___12768__$1){
var seq__11980_12769__$1 = temp__5735__auto___12768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11980_12769__$1)){
var c__4609__auto___12770 = cljs.core.chunk_first(seq__11980_12769__$1);
var G__12771 = cljs.core.chunk_rest(seq__11980_12769__$1);
var G__12772 = c__4609__auto___12770;
var G__12773 = cljs.core.count(c__4609__auto___12770);
var G__12774 = (0);
seq__11980_12757 = G__12771;
chunk__11981_12758 = G__12772;
count__11982_12759 = G__12773;
i__11983_12760 = G__12774;
continue;
} else {
var vec__11993_12775 = cljs.core.first(seq__11980_12769__$1);
var k_12776__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993_12775,(0),null);
var v_12777__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993_12775,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_12776__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_12777__$1) : emit_js_object_val.call(null,v_12777__$1)));


var G__12778 = cljs.core.next(seq__11980_12769__$1);
var G__12779 = null;
var G__12780 = (0);
var G__12781 = (0);
seq__11980_12757 = G__12778;
chunk__11981_12758 = G__12779;
count__11982_12759 = G__12780;
i__11983_12760 = G__12781;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11996){
var map__11997 = p__11996;
var map__11997__$1 = (((((!((map__11997 == null))))?(((((map__11997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11997):map__11997);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11997__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11997__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11997__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11999){
var map__12000 = p__11999;
var map__12000__$1 = (((((!((map__12000 == null))))?(((((map__12000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12000):map__12000);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__12002){
var map__12003 = p__12002;
var map__12003__$1 = (((((!((map__12003 == null))))?(((((map__12003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12003):map__12003);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12003__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__12005){
var map__12006 = p__12005;
var map__12006__$1 = (((((!((map__12006 == null))))?(((((map__12006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12006):map__12006);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12006__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__12008 = cljs.analyzer.unwrap_quote(expr);
var map__12008__$1 = (((((!((map__12008 == null))))?(((((map__12008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12008):map__12008);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12008__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12008__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12008__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__12010 = cljs.analyzer.unwrap_quote(expr);
var map__12010__$1 = (((((!((map__12010 == null))))?(((((map__12010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12010):map__12010);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12010__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12010__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12010__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4185__auto__ = (function (){var fexpr__12013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__12013.cljs$core$IFn$_invoke$arity$1 ? fexpr__12013.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__12013.call(null,tag));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12014){
var map__12015 = p__12014;
var map__12015__$1 = (((((!((map__12015 == null))))?(((((map__12015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12015):map__12015);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12015__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12015__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12015__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12015__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__12023){
var map__12025 = p__12023;
var map__12025__$1 = (((((!((map__12025 == null))))?(((((map__12025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12025):map__12025);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12025__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12025__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12025__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12028_12795 = cljs.core.seq(nodes);
var chunk__12029_12796 = null;
var count__12030_12797 = (0);
var i__12031_12798 = (0);
while(true){
if((i__12031_12798 < count__12030_12797)){
var map__12048_12799 = chunk__12029_12796.cljs$core$IIndexed$_nth$arity$2(null,i__12031_12798);
var map__12048_12800__$1 = (((((!((map__12048_12799 == null))))?(((((map__12048_12799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12048_12799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12048_12799):map__12048_12799);
var ts_12801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12048_12800__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12049_12802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12048_12800__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12049_12803__$1 = (((((!((map__12049_12802 == null))))?(((((map__12049_12802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12049_12802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12049_12802):map__12049_12802);
var then_12804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12049_12803__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12053_12805 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_12801));
var chunk__12054_12806 = null;
var count__12055_12807 = (0);
var i__12056_12808 = (0);
while(true){
if((i__12056_12808 < count__12055_12807)){
var test_12809 = chunk__12054_12806.cljs$core$IIndexed$_nth$arity$2(null,i__12056_12808);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_12809,":");


var G__12810 = seq__12053_12805;
var G__12811 = chunk__12054_12806;
var G__12812 = count__12055_12807;
var G__12813 = (i__12056_12808 + (1));
seq__12053_12805 = G__12810;
chunk__12054_12806 = G__12811;
count__12055_12807 = G__12812;
i__12056_12808 = G__12813;
continue;
} else {
var temp__5735__auto___12814 = cljs.core.seq(seq__12053_12805);
if(temp__5735__auto___12814){
var seq__12053_12815__$1 = temp__5735__auto___12814;
if(cljs.core.chunked_seq_QMARK_(seq__12053_12815__$1)){
var c__4609__auto___12816 = cljs.core.chunk_first(seq__12053_12815__$1);
var G__12817 = cljs.core.chunk_rest(seq__12053_12815__$1);
var G__12818 = c__4609__auto___12816;
var G__12819 = cljs.core.count(c__4609__auto___12816);
var G__12820 = (0);
seq__12053_12805 = G__12817;
chunk__12054_12806 = G__12818;
count__12055_12807 = G__12819;
i__12056_12808 = G__12820;
continue;
} else {
var test_12821 = cljs.core.first(seq__12053_12815__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_12821,":");


var G__12822 = cljs.core.next(seq__12053_12815__$1);
var G__12823 = null;
var G__12824 = (0);
var G__12825 = (0);
seq__12053_12805 = G__12822;
chunk__12054_12806 = G__12823;
count__12055_12807 = G__12824;
i__12056_12808 = G__12825;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_12804);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_12804);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__12826 = seq__12028_12795;
var G__12827 = chunk__12029_12796;
var G__12828 = count__12030_12797;
var G__12829 = (i__12031_12798 + (1));
seq__12028_12795 = G__12826;
chunk__12029_12796 = G__12827;
count__12030_12797 = G__12828;
i__12031_12798 = G__12829;
continue;
} else {
var temp__5735__auto___12830 = cljs.core.seq(seq__12028_12795);
if(temp__5735__auto___12830){
var seq__12028_12831__$1 = temp__5735__auto___12830;
if(cljs.core.chunked_seq_QMARK_(seq__12028_12831__$1)){
var c__4609__auto___12832 = cljs.core.chunk_first(seq__12028_12831__$1);
var G__12833 = cljs.core.chunk_rest(seq__12028_12831__$1);
var G__12834 = c__4609__auto___12832;
var G__12835 = cljs.core.count(c__4609__auto___12832);
var G__12836 = (0);
seq__12028_12795 = G__12833;
chunk__12029_12796 = G__12834;
count__12030_12797 = G__12835;
i__12031_12798 = G__12836;
continue;
} else {
var map__12058_12837 = cljs.core.first(seq__12028_12831__$1);
var map__12058_12838__$1 = (((((!((map__12058_12837 == null))))?(((((map__12058_12837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12058_12837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12058_12837):map__12058_12837);
var ts_12839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12058_12838__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12059_12840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12058_12838__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12059_12841__$1 = (((((!((map__12059_12840 == null))))?(((((map__12059_12840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12059_12840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12059_12840):map__12059_12840);
var then_12842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12059_12841__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12062_12843 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_12839));
var chunk__12063_12844 = null;
var count__12064_12845 = (0);
var i__12065_12846 = (0);
while(true){
if((i__12065_12846 < count__12064_12845)){
var test_12847 = chunk__12063_12844.cljs$core$IIndexed$_nth$arity$2(null,i__12065_12846);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_12847,":");


var G__12848 = seq__12062_12843;
var G__12849 = chunk__12063_12844;
var G__12850 = count__12064_12845;
var G__12851 = (i__12065_12846 + (1));
seq__12062_12843 = G__12848;
chunk__12063_12844 = G__12849;
count__12064_12845 = G__12850;
i__12065_12846 = G__12851;
continue;
} else {
var temp__5735__auto___12852__$1 = cljs.core.seq(seq__12062_12843);
if(temp__5735__auto___12852__$1){
var seq__12062_12853__$1 = temp__5735__auto___12852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12062_12853__$1)){
var c__4609__auto___12854 = cljs.core.chunk_first(seq__12062_12853__$1);
var G__12855 = cljs.core.chunk_rest(seq__12062_12853__$1);
var G__12856 = c__4609__auto___12854;
var G__12857 = cljs.core.count(c__4609__auto___12854);
var G__12858 = (0);
seq__12062_12843 = G__12855;
chunk__12063_12844 = G__12856;
count__12064_12845 = G__12857;
i__12065_12846 = G__12858;
continue;
} else {
var test_12859 = cljs.core.first(seq__12062_12853__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_12859,":");


var G__12860 = cljs.core.next(seq__12062_12853__$1);
var G__12861 = null;
var G__12862 = (0);
var G__12863 = (0);
seq__12062_12843 = G__12860;
chunk__12063_12844 = G__12861;
count__12064_12845 = G__12862;
i__12065_12846 = G__12863;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_12842);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_12842);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__12864 = cljs.core.next(seq__12028_12831__$1);
var G__12865 = null;
var G__12866 = (0);
var G__12867 = (0);
seq__12028_12795 = G__12864;
chunk__12029_12796 = G__12865;
count__12030_12797 = G__12866;
i__12031_12798 = G__12867;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12070){
var map__12071 = p__12070;
var map__12071__$1 = (((((!((map__12071 == null))))?(((((map__12071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12071):map__12071);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12071__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12078 = env;
var G__12079 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12078,G__12079) : cljs.compiler.resolve_type.call(null,G__12078,G__12079));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__12080 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__12075_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__12075_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__12075_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__12083 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__12083,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12083;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12086 = env;
var G__12087 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12086,G__12087) : cljs.compiler.resolve_type.call(null,G__12086,G__12087));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12088_SHARP_){
return cljs.compiler.resolve_type(env,p1__12088_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__12089 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12090 = cljs.core.seq(vec__12089);
var first__12091 = cljs.core.first(seq__12090);
var seq__12090__$1 = cljs.core.next(seq__12090);
var p = first__12091;
var first__12091__$1 = cljs.core.first(seq__12090__$1);
var seq__12090__$2 = cljs.core.next(seq__12090__$1);
var ts = first__12091__$1;
var first__12091__$2 = cljs.core.first(seq__12090__$2);
var seq__12090__$3 = cljs.core.next(seq__12090__$2);
var n = first__12091__$2;
var xs = seq__12090__$3;
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
var vec__12092 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12093 = cljs.core.seq(vec__12092);
var first__12094 = cljs.core.first(seq__12093);
var seq__12093__$1 = cljs.core.next(seq__12093);
var p = first__12094;
var first__12094__$1 = cljs.core.first(seq__12093__$1);
var seq__12093__$2 = cljs.core.next(seq__12093__$1);
var ts = first__12094__$1;
var xs = seq__12093__$2;
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
var G__12096 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__12095 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__12095.cljs$core$IFn$_invoke$arity$1 ? fexpr__12095.cljs$core$IFn$_invoke$arity$1(G__12096) : fexpr__12095.call(null,G__12096));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__12099 = arguments.length;
switch (G__12099) {
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
var vec__12107 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12097_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__12097_SHARP_);
} else {
return p1__12097_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__12108 = cljs.core.seq(vec__12107);
var first__12109 = cljs.core.first(seq__12108);
var seq__12108__$1 = cljs.core.next(seq__12108);
var x = first__12109;
var ys = seq__12108__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__12110 = cljs.core.seq(ys);
var chunk__12111 = null;
var count__12112 = (0);
var i__12113 = (0);
while(true){
if((i__12113 < count__12112)){
var next_line = chunk__12111.cljs$core$IIndexed$_nth$arity$2(null,i__12113);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__12880 = seq__12110;
var G__12881 = chunk__12111;
var G__12882 = count__12112;
var G__12883 = (i__12113 + (1));
seq__12110 = G__12880;
chunk__12111 = G__12881;
count__12112 = G__12882;
i__12113 = G__12883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12110);
if(temp__5735__auto__){
var seq__12110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12110__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__12110__$1);
var G__12884 = cljs.core.chunk_rest(seq__12110__$1);
var G__12885 = c__4609__auto__;
var G__12886 = cljs.core.count(c__4609__auto__);
var G__12887 = (0);
seq__12110 = G__12884;
chunk__12111 = G__12885;
count__12112 = G__12886;
i__12113 = G__12887;
continue;
} else {
var next_line = cljs.core.first(seq__12110__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__12888 = cljs.core.next(seq__12110__$1);
var G__12889 = null;
var G__12890 = (0);
var G__12891 = (0);
seq__12110 = G__12888;
chunk__12111 = G__12889;
count__12112 = G__12890;
i__12113 = G__12891;
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

var seq__12117_12896 = cljs.core.seq(docs__$2);
var chunk__12118_12897 = null;
var count__12119_12898 = (0);
var i__12120_12899 = (0);
while(true){
if((i__12120_12899 < count__12119_12898)){
var e_12900 = chunk__12118_12897.cljs$core$IIndexed$_nth$arity$2(null,i__12120_12899);
if(cljs.core.truth_(e_12900)){
print_comment_lines(e_12900);
} else {
}


var G__12901 = seq__12117_12896;
var G__12902 = chunk__12118_12897;
var G__12903 = count__12119_12898;
var G__12904 = (i__12120_12899 + (1));
seq__12117_12896 = G__12901;
chunk__12118_12897 = G__12902;
count__12119_12898 = G__12903;
i__12120_12899 = G__12904;
continue;
} else {
var temp__5735__auto___12905 = cljs.core.seq(seq__12117_12896);
if(temp__5735__auto___12905){
var seq__12117_12906__$1 = temp__5735__auto___12905;
if(cljs.core.chunked_seq_QMARK_(seq__12117_12906__$1)){
var c__4609__auto___12907 = cljs.core.chunk_first(seq__12117_12906__$1);
var G__12908 = cljs.core.chunk_rest(seq__12117_12906__$1);
var G__12909 = c__4609__auto___12907;
var G__12910 = cljs.core.count(c__4609__auto___12907);
var G__12911 = (0);
seq__12117_12896 = G__12908;
chunk__12118_12897 = G__12909;
count__12119_12898 = G__12910;
i__12120_12899 = G__12911;
continue;
} else {
var e_12912 = cljs.core.first(seq__12117_12906__$1);
if(cljs.core.truth_(e_12912)){
print_comment_lines(e_12912);
} else {
}


var G__12913 = cljs.core.next(seq__12117_12906__$1);
var G__12914 = null;
var G__12915 = (0);
var G__12916 = (0);
seq__12117_12896 = G__12913;
chunk__12118_12897 = G__12914;
count__12119_12898 = G__12915;
i__12120_12899 = G__12916;
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
var and__4174__auto__ = cljs.core.some((function (p1__12122_SHARP_){
return goog.string.startsWith(p1__12122_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12123){
var map__12124 = p__12123;
var map__12124__$1 = (((((!((map__12124 == null))))?(((((map__12124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12124):map__12124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12124__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12126){
var map__12127 = p__12126;
var map__12127__$1 = (((((!((map__12127 == null))))?(((((map__12127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12127):map__12127);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12127__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12127__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__12129_12925 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__12130_12926 = null;
var count__12131_12927 = (0);
var i__12132_12928 = (0);
while(true){
if((i__12132_12928 < count__12131_12927)){
var vec__12142_12929 = chunk__12130_12926.cljs$core$IIndexed$_nth$arity$2(null,i__12132_12928);
var i_12930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142_12929,(0),null);
var param_12931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142_12929,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_12931);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__12932 = seq__12129_12925;
var G__12933 = chunk__12130_12926;
var G__12934 = count__12131_12927;
var G__12935 = (i__12132_12928 + (1));
seq__12129_12925 = G__12932;
chunk__12130_12926 = G__12933;
count__12131_12927 = G__12934;
i__12132_12928 = G__12935;
continue;
} else {
var temp__5735__auto___12936 = cljs.core.seq(seq__12129_12925);
if(temp__5735__auto___12936){
var seq__12129_12937__$1 = temp__5735__auto___12936;
if(cljs.core.chunked_seq_QMARK_(seq__12129_12937__$1)){
var c__4609__auto___12938 = cljs.core.chunk_first(seq__12129_12937__$1);
var G__12939 = cljs.core.chunk_rest(seq__12129_12937__$1);
var G__12940 = c__4609__auto___12938;
var G__12941 = cljs.core.count(c__4609__auto___12938);
var G__12942 = (0);
seq__12129_12925 = G__12939;
chunk__12130_12926 = G__12940;
count__12131_12927 = G__12941;
i__12132_12928 = G__12942;
continue;
} else {
var vec__12145_12943 = cljs.core.first(seq__12129_12937__$1);
var i_12944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145_12943,(0),null);
var param_12945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145_12943,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_12945);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__12946 = cljs.core.next(seq__12129_12937__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12129_12925 = G__12946;
chunk__12130_12926 = G__12947;
count__12131_12927 = G__12948;
i__12132_12928 = G__12949;
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

var seq__12148_12950 = cljs.core.seq(params);
var chunk__12149_12951 = null;
var count__12150_12952 = (0);
var i__12151_12953 = (0);
while(true){
if((i__12151_12953 < count__12150_12952)){
var param_12955 = chunk__12149_12951.cljs$core$IIndexed$_nth$arity$2(null,i__12151_12953);
cljs.compiler.emit(param_12955);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_12955,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__12956 = seq__12148_12950;
var G__12957 = chunk__12149_12951;
var G__12958 = count__12150_12952;
var G__12959 = (i__12151_12953 + (1));
seq__12148_12950 = G__12956;
chunk__12149_12951 = G__12957;
count__12150_12952 = G__12958;
i__12151_12953 = G__12959;
continue;
} else {
var temp__5735__auto___12964 = cljs.core.seq(seq__12148_12950);
if(temp__5735__auto___12964){
var seq__12148_12965__$1 = temp__5735__auto___12964;
if(cljs.core.chunked_seq_QMARK_(seq__12148_12965__$1)){
var c__4609__auto___12966 = cljs.core.chunk_first(seq__12148_12965__$1);
var G__12967 = cljs.core.chunk_rest(seq__12148_12965__$1);
var G__12968 = c__4609__auto___12966;
var G__12969 = cljs.core.count(c__4609__auto___12966);
var G__12970 = (0);
seq__12148_12950 = G__12967;
chunk__12149_12951 = G__12968;
count__12150_12952 = G__12969;
i__12151_12953 = G__12970;
continue;
} else {
var param_12971 = cljs.core.first(seq__12148_12965__$1);
cljs.compiler.emit(param_12971);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_12971,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__12972 = cljs.core.next(seq__12148_12965__$1);
var G__12973 = null;
var G__12974 = (0);
var G__12975 = (0);
seq__12148_12950 = G__12972;
chunk__12149_12951 = G__12973;
count__12150_12952 = G__12974;
i__12151_12953 = G__12975;
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

var seq__12156_12976 = cljs.core.seq(params);
var chunk__12157_12977 = null;
var count__12158_12978 = (0);
var i__12159_12979 = (0);
while(true){
if((i__12159_12979 < count__12158_12978)){
var param_12980 = chunk__12157_12977.cljs$core$IIndexed$_nth$arity$2(null,i__12159_12979);
cljs.compiler.emit(param_12980);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_12980,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__12981 = seq__12156_12976;
var G__12982 = chunk__12157_12977;
var G__12983 = count__12158_12978;
var G__12984 = (i__12159_12979 + (1));
seq__12156_12976 = G__12981;
chunk__12157_12977 = G__12982;
count__12158_12978 = G__12983;
i__12159_12979 = G__12984;
continue;
} else {
var temp__5735__auto___12985 = cljs.core.seq(seq__12156_12976);
if(temp__5735__auto___12985){
var seq__12156_12986__$1 = temp__5735__auto___12985;
if(cljs.core.chunked_seq_QMARK_(seq__12156_12986__$1)){
var c__4609__auto___12987 = cljs.core.chunk_first(seq__12156_12986__$1);
var G__12988 = cljs.core.chunk_rest(seq__12156_12986__$1);
var G__12989 = c__4609__auto___12987;
var G__12990 = cljs.core.count(c__4609__auto___12987);
var G__12991 = (0);
seq__12156_12976 = G__12988;
chunk__12157_12977 = G__12989;
count__12158_12978 = G__12990;
i__12159_12979 = G__12991;
continue;
} else {
var param_12992 = cljs.core.first(seq__12156_12986__$1);
cljs.compiler.emit(param_12992);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_12992,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__12993 = cljs.core.next(seq__12156_12986__$1);
var G__12994 = null;
var G__12995 = (0);
var G__12996 = (0);
seq__12156_12976 = G__12993;
chunk__12157_12977 = G__12994;
count__12158_12978 = G__12995;
i__12159_12979 = G__12996;
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
var seq__12160 = cljs.core.seq(params);
var chunk__12161 = null;
var count__12162 = (0);
var i__12163 = (0);
while(true){
if((i__12163 < count__12162)){
var param = chunk__12161.cljs$core$IIndexed$_nth$arity$2(null,i__12163);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__12997 = seq__12160;
var G__12998 = chunk__12161;
var G__12999 = count__12162;
var G__13000 = (i__12163 + (1));
seq__12160 = G__12997;
chunk__12161 = G__12998;
count__12162 = G__12999;
i__12163 = G__13000;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12160);
if(temp__5735__auto__){
var seq__12160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12160__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__12160__$1);
var G__13001 = cljs.core.chunk_rest(seq__12160__$1);
var G__13002 = c__4609__auto__;
var G__13003 = cljs.core.count(c__4609__auto__);
var G__13004 = (0);
seq__12160 = G__13001;
chunk__12161 = G__13002;
count__12162 = G__13003;
i__12163 = G__13004;
continue;
} else {
var param = cljs.core.first(seq__12160__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13005 = cljs.core.next(seq__12160__$1);
var G__13006 = null;
var G__13007 = (0);
var G__13008 = (0);
seq__12160 = G__13005;
chunk__12161 = G__13006;
count__12162 = G__13007;
i__12163 = G__13008;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12164){
var map__12165 = p__12164;
var map__12165__$1 = (((((!((map__12165 == null))))?(((((map__12165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12165):map__12165);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12167){
var map__12168 = p__12167;
var map__12168__$1 = (((((!((map__12168 == null))))?(((((map__12168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12168):map__12168);
var f = map__12168__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12168__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_13017__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13018 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13017__$1);
var delegate_name_13019 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13018),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_13019," = function (");

var seq__12173_13020 = cljs.core.seq(params);
var chunk__12174_13021 = null;
var count__12175_13022 = (0);
var i__12176_13023 = (0);
while(true){
if((i__12176_13023 < count__12175_13022)){
var param_13024 = chunk__12174_13021.cljs$core$IIndexed$_nth$arity$2(null,i__12176_13023);
cljs.compiler.emit(param_13024);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13024,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13025 = seq__12173_13020;
var G__13026 = chunk__12174_13021;
var G__13027 = count__12175_13022;
var G__13028 = (i__12176_13023 + (1));
seq__12173_13020 = G__13025;
chunk__12174_13021 = G__13026;
count__12175_13022 = G__13027;
i__12176_13023 = G__13028;
continue;
} else {
var temp__5735__auto___13029 = cljs.core.seq(seq__12173_13020);
if(temp__5735__auto___13029){
var seq__12173_13030__$1 = temp__5735__auto___13029;
if(cljs.core.chunked_seq_QMARK_(seq__12173_13030__$1)){
var c__4609__auto___13031 = cljs.core.chunk_first(seq__12173_13030__$1);
var G__13032 = cljs.core.chunk_rest(seq__12173_13030__$1);
var G__13033 = c__4609__auto___13031;
var G__13034 = cljs.core.count(c__4609__auto___13031);
var G__13035 = (0);
seq__12173_13020 = G__13032;
chunk__12174_13021 = G__13033;
count__12175_13022 = G__13034;
i__12176_13023 = G__13035;
continue;
} else {
var param_13036 = cljs.core.first(seq__12173_13030__$1);
cljs.compiler.emit(param_13036);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13036,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13037 = cljs.core.next(seq__12173_13030__$1);
var G__13038 = null;
var G__13039 = (0);
var G__13040 = (0);
seq__12173_13020 = G__13037;
chunk__12174_13021 = G__13038;
count__12175_13022 = G__13039;
i__12176_13023 = G__13040;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_13018," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_13041 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_13041,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_13019,".call(this,");

var seq__12180_13042 = cljs.core.seq(params);
var chunk__12181_13043 = null;
var count__12182_13044 = (0);
var i__12183_13045 = (0);
while(true){
if((i__12183_13045 < count__12182_13044)){
var param_13046 = chunk__12181_13043.cljs$core$IIndexed$_nth$arity$2(null,i__12183_13045);
cljs.compiler.emit(param_13046);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13046,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13048 = seq__12180_13042;
var G__13049 = chunk__12181_13043;
var G__13050 = count__12182_13044;
var G__13051 = (i__12183_13045 + (1));
seq__12180_13042 = G__13048;
chunk__12181_13043 = G__13049;
count__12182_13044 = G__13050;
i__12183_13045 = G__13051;
continue;
} else {
var temp__5735__auto___13055 = cljs.core.seq(seq__12180_13042);
if(temp__5735__auto___13055){
var seq__12180_13056__$1 = temp__5735__auto___13055;
if(cljs.core.chunked_seq_QMARK_(seq__12180_13056__$1)){
var c__4609__auto___13057 = cljs.core.chunk_first(seq__12180_13056__$1);
var G__13058 = cljs.core.chunk_rest(seq__12180_13056__$1);
var G__13059 = c__4609__auto___13057;
var G__13060 = cljs.core.count(c__4609__auto___13057);
var G__13061 = (0);
seq__12180_13042 = G__13058;
chunk__12181_13043 = G__13059;
count__12182_13044 = G__13060;
i__12183_13045 = G__13061;
continue;
} else {
var param_13062 = cljs.core.first(seq__12180_13056__$1);
cljs.compiler.emit(param_13062);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13062,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13063 = cljs.core.next(seq__12180_13056__$1);
var G__13064 = null;
var G__13065 = (0);
var G__13066 = (0);
seq__12180_13042 = G__13063;
chunk__12181_13043 = G__13064;
count__12182_13044 = G__13065;
i__12183_13045 = G__13066;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13018,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_13018,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_13017__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13018,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13019,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_13018,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12201){
var map__12202 = p__12201;
var map__12202__$1 = (((((!((map__12202 == null))))?(((((map__12202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12202):map__12202);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12193_SHARP_){
var and__4174__auto__ = p1__12193_SHARP_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12193_SHARP_));
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
var name_13071__$1 = (function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13072 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13071__$1);
var maxparams_13073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13074 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13072),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_13075 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12195_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__12195_SHARP_)));
}),cljs.core.seq(mmap_13074));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_13072," = null;");

var seq__12204_13077 = cljs.core.seq(ms_13075);
var chunk__12205_13078 = null;
var count__12206_13079 = (0);
var i__12207_13080 = (0);
while(true){
if((i__12207_13080 < count__12206_13079)){
var vec__12227_13084 = chunk__12205_13078.cljs$core$IIndexed$_nth$arity$2(null,i__12207_13080);
var n_13085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12227_13084,(0),null);
var meth_13086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12227_13084,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_13085," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13086))){
cljs.compiler.emit_variadic_fn_method(meth_13086);
} else {
cljs.compiler.emit_fn_method(meth_13086);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__13087 = seq__12204_13077;
var G__13088 = chunk__12205_13078;
var G__13089 = count__12206_13079;
var G__13090 = (i__12207_13080 + (1));
seq__12204_13077 = G__13087;
chunk__12205_13078 = G__13088;
count__12206_13079 = G__13089;
i__12207_13080 = G__13090;
continue;
} else {
var temp__5735__auto___13091 = cljs.core.seq(seq__12204_13077);
if(temp__5735__auto___13091){
var seq__12204_13092__$1 = temp__5735__auto___13091;
if(cljs.core.chunked_seq_QMARK_(seq__12204_13092__$1)){
var c__4609__auto___13093 = cljs.core.chunk_first(seq__12204_13092__$1);
var G__13094 = cljs.core.chunk_rest(seq__12204_13092__$1);
var G__13095 = c__4609__auto___13093;
var G__13096 = cljs.core.count(c__4609__auto___13093);
var G__13097 = (0);
seq__12204_13077 = G__13094;
chunk__12205_13078 = G__13095;
count__12206_13079 = G__13096;
i__12207_13080 = G__13097;
continue;
} else {
var vec__12241_13098 = cljs.core.first(seq__12204_13092__$1);
var n_13099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241_13098,(0),null);
var meth_13100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241_13098,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_13099," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13100))){
cljs.compiler.emit_variadic_fn_method(meth_13100);
} else {
cljs.compiler.emit_fn_method(meth_13100);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__13101 = cljs.core.next(seq__12204_13092__$1);
var G__13102 = null;
var G__13103 = (0);
var G__13104 = (0);
seq__12204_13077 = G__13101;
chunk__12205_13078 = G__13102;
count__12206_13079 = G__13103;
i__12207_13080 = G__13104;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13072," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_13073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13073)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_13073));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__12254_13106 = cljs.core.seq(ms_13075);
var chunk__12255_13107 = null;
var count__12256_13108 = (0);
var i__12257_13109 = (0);
while(true){
if((i__12257_13109 < count__12256_13108)){
var vec__12268_13113 = chunk__12255_13107.cljs$core$IIndexed$_nth$arity$2(null,i__12257_13109);
var n_13114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12268_13113,(0),null);
var meth_13115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12268_13113,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13115))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_13116 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_13116," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_13117 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_13116," = new cljs.core.IndexedSeq(",a_13117,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_13114,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13073)),(((cljs.core.count(maxparams_13073) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_13116,");"], 0));
} else {
var pcnt_13118 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13115));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_13118,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_13114,".call(this",(((pcnt_13118 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13118,maxparams_13073)),null,(1),null)),(2),null))),");");
}


var G__13119 = seq__12254_13106;
var G__13120 = chunk__12255_13107;
var G__13121 = count__12256_13108;
var G__13122 = (i__12257_13109 + (1));
seq__12254_13106 = G__13119;
chunk__12255_13107 = G__13120;
count__12256_13108 = G__13121;
i__12257_13109 = G__13122;
continue;
} else {
var temp__5735__auto___13123 = cljs.core.seq(seq__12254_13106);
if(temp__5735__auto___13123){
var seq__12254_13124__$1 = temp__5735__auto___13123;
if(cljs.core.chunked_seq_QMARK_(seq__12254_13124__$1)){
var c__4609__auto___13125 = cljs.core.chunk_first(seq__12254_13124__$1);
var G__13126 = cljs.core.chunk_rest(seq__12254_13124__$1);
var G__13127 = c__4609__auto___13125;
var G__13128 = cljs.core.count(c__4609__auto___13125);
var G__13129 = (0);
seq__12254_13106 = G__13126;
chunk__12255_13107 = G__13127;
count__12256_13108 = G__13128;
i__12257_13109 = G__13129;
continue;
} else {
var vec__12271_13130 = cljs.core.first(seq__12254_13124__$1);
var n_13131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12271_13130,(0),null);
var meth_13132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12271_13130,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13132))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_13133 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_13133," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_13134 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_13133," = new cljs.core.IndexedSeq(",a_13134,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_13131,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13073)),(((cljs.core.count(maxparams_13073) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_13133,");"], 0));
} else {
var pcnt_13135 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13132));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_13135,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_13131,".call(this",(((pcnt_13135 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13135,maxparams_13073)),null,(1),null)),(2),null))),");");
}


var G__13136 = cljs.core.next(seq__12254_13124__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12254_13106 = G__13136;
chunk__12255_13107 = G__13137;
count__12256_13108 = G__13138;
i__12257_13109 = G__13139;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_13140 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_13075)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_13140,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13072,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13072,".cljs$lang$applyTo = ",cljs.core.some((function (p1__12200_SHARP_){
var vec__12286 = p1__12200_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_13075),".cljs$lang$applyTo;");
} else {
}

var seq__12289_13141 = cljs.core.seq(ms_13075);
var chunk__12290_13142 = null;
var count__12291_13143 = (0);
var i__12292_13144 = (0);
while(true){
if((i__12292_13144 < count__12291_13143)){
var vec__12308_13145 = chunk__12290_13142.cljs$core$IIndexed$_nth$arity$2(null,i__12292_13144);
var n_13146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12308_13145,(0),null);
var meth_13147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12308_13145,(1),null);
var c_13149 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13147));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13147))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13072,".cljs$core$IFn$_invoke$arity$variadic = ",n_13146,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_13072,".cljs$core$IFn$_invoke$arity$",c_13149," = ",n_13146,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__13154 = seq__12289_13141;
var G__13155 = chunk__12290_13142;
var G__13156 = count__12291_13143;
var G__13157 = (i__12292_13144 + (1));
seq__12289_13141 = G__13154;
chunk__12290_13142 = G__13155;
count__12291_13143 = G__13156;
i__12292_13144 = G__13157;
continue;
} else {
var temp__5735__auto___13158 = cljs.core.seq(seq__12289_13141);
if(temp__5735__auto___13158){
var seq__12289_13159__$1 = temp__5735__auto___13158;
if(cljs.core.chunked_seq_QMARK_(seq__12289_13159__$1)){
var c__4609__auto___13160 = cljs.core.chunk_first(seq__12289_13159__$1);
var G__13161 = cljs.core.chunk_rest(seq__12289_13159__$1);
var G__13162 = c__4609__auto___13160;
var G__13163 = cljs.core.count(c__4609__auto___13160);
var G__13164 = (0);
seq__12289_13141 = G__13161;
chunk__12290_13142 = G__13162;
count__12291_13143 = G__13163;
i__12292_13144 = G__13164;
continue;
} else {
var vec__12319_13165 = cljs.core.first(seq__12289_13159__$1);
var n_13166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_13165,(0),null);
var meth_13167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_13165,(1),null);
var c_13168 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13167));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13167))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13072,".cljs$core$IFn$_invoke$arity$variadic = ",n_13166,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_13072,".cljs$core$IFn$_invoke$arity$",c_13168," = ",n_13166,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__13169 = cljs.core.next(seq__12289_13159__$1);
var G__13170 = null;
var G__13171 = (0);
var G__13172 = (0);
seq__12289_13141 = G__13169;
chunk__12290_13142 = G__13170;
count__12291_13143 = G__13171;
i__12292_13144 = G__13172;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_13072,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12322){
var map__12323 = p__12322;
var map__12323__$1 = (((((!((map__12323 == null))))?(((((map__12323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12323):map__12323);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12323__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12323__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12323__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__12327_13173 = cljs.core.seq(statements);
var chunk__12328_13174 = null;
var count__12329_13175 = (0);
var i__12330_13176 = (0);
while(true){
if((i__12330_13176 < count__12329_13175)){
var s_13177 = chunk__12328_13174.cljs$core$IIndexed$_nth$arity$2(null,i__12330_13176);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_13177);


var G__13178 = seq__12327_13173;
var G__13179 = chunk__12328_13174;
var G__13180 = count__12329_13175;
var G__13181 = (i__12330_13176 + (1));
seq__12327_13173 = G__13178;
chunk__12328_13174 = G__13179;
count__12329_13175 = G__13180;
i__12330_13176 = G__13181;
continue;
} else {
var temp__5735__auto___13182 = cljs.core.seq(seq__12327_13173);
if(temp__5735__auto___13182){
var seq__12327_13183__$1 = temp__5735__auto___13182;
if(cljs.core.chunked_seq_QMARK_(seq__12327_13183__$1)){
var c__4609__auto___13184 = cljs.core.chunk_first(seq__12327_13183__$1);
var G__13185 = cljs.core.chunk_rest(seq__12327_13183__$1);
var G__13186 = c__4609__auto___13184;
var G__13187 = cljs.core.count(c__4609__auto___13184);
var G__13188 = (0);
seq__12327_13173 = G__13185;
chunk__12328_13174 = G__13186;
count__12329_13175 = G__13187;
i__12330_13176 = G__13188;
continue;
} else {
var s_13189 = cljs.core.first(seq__12327_13183__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_13189);


var G__13190 = cljs.core.next(seq__12327_13183__$1);
var G__13191 = null;
var G__13192 = (0);
var G__13193 = (0);
seq__12327_13173 = G__13190;
chunk__12328_13174 = G__13191;
count__12329_13175 = G__13192;
i__12330_13176 = G__13193;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12349){
var map__12350 = p__12349;
var map__12350__$1 = (((((!((map__12350 == null))))?(((((map__12350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12350):map__12350);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12350__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12359,is_loop){
var map__12360 = p__12359;
var map__12360__$1 = (((((!((map__12360 == null))))?(((((map__12360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12360):map__12360);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12360__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12360__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__12362_13198 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__12363_13199 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__12363_13199);

try{var seq__12364_13200 = cljs.core.seq(bindings);
var chunk__12365_13201 = null;
var count__12366_13202 = (0);
var i__12367_13203 = (0);
while(true){
if((i__12367_13203 < count__12366_13202)){
var map__12374_13204 = chunk__12365_13201.cljs$core$IIndexed$_nth$arity$2(null,i__12367_13203);
var map__12374_13205__$1 = (((((!((map__12374_13204 == null))))?(((((map__12374_13204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12374_13204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12374_13204):map__12374_13204);
var binding_13206 = map__12374_13205__$1;
var init_13207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12374_13205__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_13206);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_13207,";");


var G__13208 = seq__12364_13200;
var G__13209 = chunk__12365_13201;
var G__13210 = count__12366_13202;
var G__13211 = (i__12367_13203 + (1));
seq__12364_13200 = G__13208;
chunk__12365_13201 = G__13209;
count__12366_13202 = G__13210;
i__12367_13203 = G__13211;
continue;
} else {
var temp__5735__auto___13212 = cljs.core.seq(seq__12364_13200);
if(temp__5735__auto___13212){
var seq__12364_13213__$1 = temp__5735__auto___13212;
if(cljs.core.chunked_seq_QMARK_(seq__12364_13213__$1)){
var c__4609__auto___13214 = cljs.core.chunk_first(seq__12364_13213__$1);
var G__13215 = cljs.core.chunk_rest(seq__12364_13213__$1);
var G__13216 = c__4609__auto___13214;
var G__13217 = cljs.core.count(c__4609__auto___13214);
var G__13218 = (0);
seq__12364_13200 = G__13215;
chunk__12365_13201 = G__13216;
count__12366_13202 = G__13217;
i__12367_13203 = G__13218;
continue;
} else {
var map__12380_13219 = cljs.core.first(seq__12364_13213__$1);
var map__12380_13220__$1 = (((((!((map__12380_13219 == null))))?(((((map__12380_13219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12380_13219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12380_13219):map__12380_13219);
var binding_13221 = map__12380_13220__$1;
var init_13222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12380_13220__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_13221);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_13222,";");


var G__13223 = cljs.core.next(seq__12364_13213__$1);
var G__13224 = null;
var G__13225 = (0);
var G__13226 = (0);
seq__12364_13200 = G__13223;
chunk__12365_13201 = G__13224;
count__12366_13202 = G__13225;
i__12367_13203 = G__13226;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__12362_13198);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12390){
var map__12392 = p__12390;
var map__12392__$1 = (((((!((map__12392 == null))))?(((((map__12392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12392):map__12392);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12392__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12392__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12392__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4666__auto___13231 = cljs.core.count(exprs);
var i_13232 = (0);
while(true){
if((i_13232 < n__4666__auto___13231)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13232) : temps.call(null,i_13232))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_13232) : exprs.call(null,i_13232)),";");

var G__13233 = (i_13232 + (1));
i_13232 = G__13233;
continue;
} else {
}
break;
}

var n__4666__auto___13234 = cljs.core.count(exprs);
var i_13235 = (0);
while(true){
if((i_13235 < n__4666__auto___13234)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_13235) : params.call(null,i_13235)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13235) : temps.call(null,i_13235)),";");

var G__13236 = (i_13235 + (1));
i_13235 = G__13236;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12395){
var map__12396 = p__12395;
var map__12396__$1 = (((((!((map__12396 == null))))?(((((map__12396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12396):map__12396);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__12398_13237 = cljs.core.seq(bindings);
var chunk__12399_13238 = null;
var count__12400_13239 = (0);
var i__12401_13240 = (0);
while(true){
if((i__12401_13240 < count__12400_13239)){
var map__12408_13241 = chunk__12399_13238.cljs$core$IIndexed$_nth$arity$2(null,i__12401_13240);
var map__12408_13242__$1 = (((((!((map__12408_13241 == null))))?(((((map__12408_13241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12408_13241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12408_13241):map__12408_13241);
var binding_13243 = map__12408_13242__$1;
var init_13244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408_13242__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13243)," = ",init_13244,";");


var G__13245 = seq__12398_13237;
var G__13246 = chunk__12399_13238;
var G__13247 = count__12400_13239;
var G__13248 = (i__12401_13240 + (1));
seq__12398_13237 = G__13245;
chunk__12399_13238 = G__13246;
count__12400_13239 = G__13247;
i__12401_13240 = G__13248;
continue;
} else {
var temp__5735__auto___13249 = cljs.core.seq(seq__12398_13237);
if(temp__5735__auto___13249){
var seq__12398_13250__$1 = temp__5735__auto___13249;
if(cljs.core.chunked_seq_QMARK_(seq__12398_13250__$1)){
var c__4609__auto___13251 = cljs.core.chunk_first(seq__12398_13250__$1);
var G__13252 = cljs.core.chunk_rest(seq__12398_13250__$1);
var G__13253 = c__4609__auto___13251;
var G__13254 = cljs.core.count(c__4609__auto___13251);
var G__13255 = (0);
seq__12398_13237 = G__13252;
chunk__12399_13238 = G__13253;
count__12400_13239 = G__13254;
i__12401_13240 = G__13255;
continue;
} else {
var map__12410_13256 = cljs.core.first(seq__12398_13250__$1);
var map__12410_13257__$1 = (((((!((map__12410_13256 == null))))?(((((map__12410_13256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12410_13256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12410_13256):map__12410_13256);
var binding_13258 = map__12410_13257__$1;
var init_13259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12410_13257__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13258)," = ",init_13259,";");


var G__13260 = cljs.core.next(seq__12398_13250__$1);
var G__13261 = null;
var G__13262 = (0);
var G__13263 = (0);
seq__12398_13237 = G__13260;
chunk__12399_13238 = G__13261;
count__12400_13239 = G__13262;
i__12401_13240 = G__13263;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12414){
var map__12417 = p__12414;
var map__12417__$1 = (((((!((map__12417 == null))))?(((((map__12417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12417):map__12417);
var expr = map__12417__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__12451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__12451.cljs$core$IFn$_invoke$arity$1 ? fexpr__12451.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__12451.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__12453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__12453.cljs$core$IFn$_invoke$arity$1 ? fexpr__12453.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__12453.call(null,first_arg_tag));
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
var vec__12425 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__12412_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12412_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__12413_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12413_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12425,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12425,(1),null);
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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
var pimpl_13273 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_13273,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13274 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_13274,args)),(((mfa_13274 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_13274,args)),"], 0))"], 0));
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
var G__12455 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__12454 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__12454.cljs$core$IFn$_invoke$arity$1 ? fexpr__12454.cljs$core$IFn$_invoke$arity$1(G__12455) : fexpr__12454.call(null,G__12455));
} else {
return and__4174__auto__;
}
})())){
var fprop_13280 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_13280," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_13280,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_13280," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_13280,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12456){
var map__12457 = p__12456;
var map__12457__$1 = (((((!((map__12457 == null))))?(((((map__12457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12457):map__12457);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12457__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12457__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12459){
var map__12460 = p__12459;
var map__12460__$1 = (((((!((map__12460 == null))))?(((((map__12460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12460):map__12460);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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
var map__12462 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__12462__$1 = (((((!((map__12462 == null))))?(((((map__12462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12462):map__12462);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12463 = options;
var map__12463__$1 = (((((!((map__12463 == null))))?(((((map__12463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12463):map__12463);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12463__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12463__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12464 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12469 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12469__$1 = (((((!((map__12469 == null))))?(((((map__12469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12469):map__12469);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12469__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12469__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12464,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12464,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12474_13283 = cljs.core.seq(libs_to_load);
var chunk__12475_13284 = null;
var count__12476_13285 = (0);
var i__12477_13286 = (0);
while(true){
if((i__12477_13286 < count__12476_13285)){
var lib_13287 = chunk__12475_13284.cljs$core$IIndexed$_nth$arity$2(null,i__12477_13286);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_13287)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_13287),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13287),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_13287),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13287),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_13287,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13287),"');");
}

}
}
}


var G__13288 = seq__12474_13283;
var G__13289 = chunk__12475_13284;
var G__13290 = count__12476_13285;
var G__13291 = (i__12477_13286 + (1));
seq__12474_13283 = G__13288;
chunk__12475_13284 = G__13289;
count__12476_13285 = G__13290;
i__12477_13286 = G__13291;
continue;
} else {
var temp__5735__auto___13292 = cljs.core.seq(seq__12474_13283);
if(temp__5735__auto___13292){
var seq__12474_13293__$1 = temp__5735__auto___13292;
if(cljs.core.chunked_seq_QMARK_(seq__12474_13293__$1)){
var c__4609__auto___13294 = cljs.core.chunk_first(seq__12474_13293__$1);
var G__13295 = cljs.core.chunk_rest(seq__12474_13293__$1);
var G__13296 = c__4609__auto___13294;
var G__13297 = cljs.core.count(c__4609__auto___13294);
var G__13298 = (0);
seq__12474_13283 = G__13295;
chunk__12475_13284 = G__13296;
count__12476_13285 = G__13297;
i__12477_13286 = G__13298;
continue;
} else {
var lib_13299 = cljs.core.first(seq__12474_13293__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_13299)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_13299),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13299),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_13299),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13299),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_13299,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_13299),"');");
}

}
}
}


var G__13300 = cljs.core.next(seq__12474_13293__$1);
var G__13301 = null;
var G__13302 = (0);
var G__13303 = (0);
seq__12474_13283 = G__13300;
chunk__12475_13284 = G__13301;
count__12476_13285 = G__13302;
i__12477_13286 = G__13303;
continue;
}
} else {
}
}
break;
}

var seq__12480_13304 = cljs.core.seq(node_libs);
var chunk__12481_13305 = null;
var count__12482_13306 = (0);
var i__12483_13307 = (0);
while(true){
if((i__12483_13307 < count__12482_13306)){
var lib_13308 = chunk__12481_13305.cljs$core$IIndexed$_nth$arity$2(null,i__12483_13307);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_13308)," = require('",lib_13308,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__13309 = seq__12480_13304;
var G__13310 = chunk__12481_13305;
var G__13311 = count__12482_13306;
var G__13312 = (i__12483_13307 + (1));
seq__12480_13304 = G__13309;
chunk__12481_13305 = G__13310;
count__12482_13306 = G__13311;
i__12483_13307 = G__13312;
continue;
} else {
var temp__5735__auto___13313 = cljs.core.seq(seq__12480_13304);
if(temp__5735__auto___13313){
var seq__12480_13314__$1 = temp__5735__auto___13313;
if(cljs.core.chunked_seq_QMARK_(seq__12480_13314__$1)){
var c__4609__auto___13315 = cljs.core.chunk_first(seq__12480_13314__$1);
var G__13316 = cljs.core.chunk_rest(seq__12480_13314__$1);
var G__13317 = c__4609__auto___13315;
var G__13318 = cljs.core.count(c__4609__auto___13315);
var G__13319 = (0);
seq__12480_13304 = G__13316;
chunk__12481_13305 = G__13317;
count__12482_13306 = G__13318;
i__12483_13307 = G__13319;
continue;
} else {
var lib_13320 = cljs.core.first(seq__12480_13314__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_13320)," = require('",lib_13320,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__13321 = cljs.core.next(seq__12480_13314__$1);
var G__13322 = null;
var G__13323 = (0);
var G__13324 = (0);
seq__12480_13304 = G__13321;
chunk__12481_13305 = G__13322;
count__12482_13306 = G__13323;
i__12483_13307 = G__13324;
continue;
}
} else {
}
}
break;
}

var seq__12484_13325 = cljs.core.seq(global_exports_libs);
var chunk__12485_13326 = null;
var count__12486_13327 = (0);
var i__12487_13328 = (0);
while(true){
if((i__12487_13328 < count__12486_13327)){
var lib_13329 = chunk__12485_13326.cljs$core$IIndexed$_nth$arity$2(null,i__12487_13328);
var map__12492_13330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_13329));
var map__12492_13331__$1 = (((((!((map__12492_13330 == null))))?(((((map__12492_13330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12492_13330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12492_13330):map__12492_13330);
var global_exports_13332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12492_13331__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_13332,lib_13329);


var G__13333 = seq__12484_13325;
var G__13334 = chunk__12485_13326;
var G__13335 = count__12486_13327;
var G__13336 = (i__12487_13328 + (1));
seq__12484_13325 = G__13333;
chunk__12485_13326 = G__13334;
count__12486_13327 = G__13335;
i__12487_13328 = G__13336;
continue;
} else {
var temp__5735__auto___13337 = cljs.core.seq(seq__12484_13325);
if(temp__5735__auto___13337){
var seq__12484_13338__$1 = temp__5735__auto___13337;
if(cljs.core.chunked_seq_QMARK_(seq__12484_13338__$1)){
var c__4609__auto___13339 = cljs.core.chunk_first(seq__12484_13338__$1);
var G__13340 = cljs.core.chunk_rest(seq__12484_13338__$1);
var G__13341 = c__4609__auto___13339;
var G__13342 = cljs.core.count(c__4609__auto___13339);
var G__13343 = (0);
seq__12484_13325 = G__13340;
chunk__12485_13326 = G__13341;
count__12486_13327 = G__13342;
i__12487_13328 = G__13343;
continue;
} else {
var lib_13344 = cljs.core.first(seq__12484_13338__$1);
var map__12494_13345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_13344));
var map__12494_13346__$1 = (((((!((map__12494_13345 == null))))?(((((map__12494_13345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12494_13345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12494_13345):map__12494_13345);
var global_exports_13347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12494_13346__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_13347,lib_13344);


var G__13348 = cljs.core.next(seq__12484_13338__$1);
var G__13349 = null;
var G__13350 = (0);
var G__13351 = (0);
seq__12484_13325 = G__13348;
chunk__12485_13326 = G__13349;
count__12486_13327 = G__13350;
i__12487_13328 = G__13351;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12496){
var map__12497 = p__12496;
var map__12497__$1 = (((((!((map__12497 == null))))?(((((map__12497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12497):map__12497);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12499){
var map__12500 = p__12499;
var map__12500__$1 = (((((!((map__12500 == null))))?(((((map__12500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12500):map__12500);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12502){
var map__12503 = p__12502;
var map__12503__$1 = (((((!((map__12503 == null))))?(((((map__12503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12503):map__12503);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__12513_13357 = cljs.core.seq(protocols);
var chunk__12514_13358 = null;
var count__12515_13359 = (0);
var i__12516_13360 = (0);
while(true){
if((i__12516_13360 < count__12515_13359)){
var protocol_13361 = chunk__12514_13358.cljs$core$IIndexed$_nth$arity$2(null,i__12516_13360);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13361)),"}");


var G__13362 = seq__12513_13357;
var G__13363 = chunk__12514_13358;
var G__13364 = count__12515_13359;
var G__13365 = (i__12516_13360 + (1));
seq__12513_13357 = G__13362;
chunk__12514_13358 = G__13363;
count__12515_13359 = G__13364;
i__12516_13360 = G__13365;
continue;
} else {
var temp__5735__auto___13366 = cljs.core.seq(seq__12513_13357);
if(temp__5735__auto___13366){
var seq__12513_13367__$1 = temp__5735__auto___13366;
if(cljs.core.chunked_seq_QMARK_(seq__12513_13367__$1)){
var c__4609__auto___13368 = cljs.core.chunk_first(seq__12513_13367__$1);
var G__13369 = cljs.core.chunk_rest(seq__12513_13367__$1);
var G__13370 = c__4609__auto___13368;
var G__13371 = cljs.core.count(c__4609__auto___13368);
var G__13372 = (0);
seq__12513_13357 = G__13369;
chunk__12514_13358 = G__13370;
count__12515_13359 = G__13371;
i__12516_13360 = G__13372;
continue;
} else {
var protocol_13373 = cljs.core.first(seq__12513_13367__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13373)),"}");


var G__13374 = cljs.core.next(seq__12513_13367__$1);
var G__13375 = null;
var G__13376 = (0);
var G__13377 = (0);
seq__12513_13357 = G__13374;
chunk__12514_13358 = G__13375;
count__12515_13359 = G__13376;
i__12516_13360 = G__13377;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__12519_13378 = cljs.core.seq(fields__$1);
var chunk__12520_13379 = null;
var count__12521_13380 = (0);
var i__12522_13381 = (0);
while(true){
if((i__12522_13381 < count__12521_13380)){
var fld_13382 = chunk__12520_13379.cljs$core$IIndexed$_nth$arity$2(null,i__12522_13381);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_13382," = ",fld_13382,";");


var G__13383 = seq__12519_13378;
var G__13384 = chunk__12520_13379;
var G__13385 = count__12521_13380;
var G__13386 = (i__12522_13381 + (1));
seq__12519_13378 = G__13383;
chunk__12520_13379 = G__13384;
count__12521_13380 = G__13385;
i__12522_13381 = G__13386;
continue;
} else {
var temp__5735__auto___13387 = cljs.core.seq(seq__12519_13378);
if(temp__5735__auto___13387){
var seq__12519_13388__$1 = temp__5735__auto___13387;
if(cljs.core.chunked_seq_QMARK_(seq__12519_13388__$1)){
var c__4609__auto___13389 = cljs.core.chunk_first(seq__12519_13388__$1);
var G__13390 = cljs.core.chunk_rest(seq__12519_13388__$1);
var G__13391 = c__4609__auto___13389;
var G__13392 = cljs.core.count(c__4609__auto___13389);
var G__13393 = (0);
seq__12519_13378 = G__13390;
chunk__12520_13379 = G__13391;
count__12521_13380 = G__13392;
i__12522_13381 = G__13393;
continue;
} else {
var fld_13394 = cljs.core.first(seq__12519_13388__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_13394," = ",fld_13394,";");


var G__13395 = cljs.core.next(seq__12519_13388__$1);
var G__13396 = null;
var G__13397 = (0);
var G__13398 = (0);
seq__12519_13378 = G__13395;
chunk__12520_13379 = G__13396;
count__12521_13380 = G__13397;
i__12522_13381 = G__13398;
continue;
}
} else {
}
}
break;
}

var seq__12523_13399 = cljs.core.seq(pmasks);
var chunk__12524_13400 = null;
var count__12525_13401 = (0);
var i__12526_13402 = (0);
while(true){
if((i__12526_13402 < count__12525_13401)){
var vec__12534_13403 = chunk__12524_13400.cljs$core$IIndexed$_nth$arity$2(null,i__12526_13402);
var pno_13404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_13403,(0),null);
var pmask_13405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_13403,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_13404,"$ = ",pmask_13405,";");


var G__13406 = seq__12523_13399;
var G__13407 = chunk__12524_13400;
var G__13408 = count__12525_13401;
var G__13409 = (i__12526_13402 + (1));
seq__12523_13399 = G__13406;
chunk__12524_13400 = G__13407;
count__12525_13401 = G__13408;
i__12526_13402 = G__13409;
continue;
} else {
var temp__5735__auto___13410 = cljs.core.seq(seq__12523_13399);
if(temp__5735__auto___13410){
var seq__12523_13411__$1 = temp__5735__auto___13410;
if(cljs.core.chunked_seq_QMARK_(seq__12523_13411__$1)){
var c__4609__auto___13412 = cljs.core.chunk_first(seq__12523_13411__$1);
var G__13413 = cljs.core.chunk_rest(seq__12523_13411__$1);
var G__13414 = c__4609__auto___13412;
var G__13415 = cljs.core.count(c__4609__auto___13412);
var G__13416 = (0);
seq__12523_13399 = G__13413;
chunk__12524_13400 = G__13414;
count__12525_13401 = G__13415;
i__12526_13402 = G__13416;
continue;
} else {
var vec__12537_13417 = cljs.core.first(seq__12523_13411__$1);
var pno_13418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537_13417,(0),null);
var pmask_13419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537_13417,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_13418,"$ = ",pmask_13419,";");


var G__13420 = cljs.core.next(seq__12523_13411__$1);
var G__13421 = null;
var G__13422 = (0);
var G__13423 = (0);
seq__12523_13399 = G__13420;
chunk__12524_13400 = G__13421;
count__12525_13401 = G__13422;
i__12526_13402 = G__13423;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12540){
var map__12541 = p__12540;
var map__12541__$1 = (((((!((map__12541 == null))))?(((((map__12541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12541):map__12541);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__12543_13424 = cljs.core.seq(protocols);
var chunk__12544_13425 = null;
var count__12545_13426 = (0);
var i__12546_13427 = (0);
while(true){
if((i__12546_13427 < count__12545_13426)){
var protocol_13429 = chunk__12544_13425.cljs$core$IIndexed$_nth$arity$2(null,i__12546_13427);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13429)),"}");


var G__13431 = seq__12543_13424;
var G__13432 = chunk__12544_13425;
var G__13433 = count__12545_13426;
var G__13434 = (i__12546_13427 + (1));
seq__12543_13424 = G__13431;
chunk__12544_13425 = G__13432;
count__12545_13426 = G__13433;
i__12546_13427 = G__13434;
continue;
} else {
var temp__5735__auto___13435 = cljs.core.seq(seq__12543_13424);
if(temp__5735__auto___13435){
var seq__12543_13436__$1 = temp__5735__auto___13435;
if(cljs.core.chunked_seq_QMARK_(seq__12543_13436__$1)){
var c__4609__auto___13437 = cljs.core.chunk_first(seq__12543_13436__$1);
var G__13438 = cljs.core.chunk_rest(seq__12543_13436__$1);
var G__13439 = c__4609__auto___13437;
var G__13440 = cljs.core.count(c__4609__auto___13437);
var G__13441 = (0);
seq__12543_13424 = G__13438;
chunk__12544_13425 = G__13439;
count__12545_13426 = G__13440;
i__12546_13427 = G__13441;
continue;
} else {
var protocol_13443 = cljs.core.first(seq__12543_13436__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13443)),"}");


var G__13444 = cljs.core.next(seq__12543_13436__$1);
var G__13445 = null;
var G__13446 = (0);
var G__13447 = (0);
seq__12543_13424 = G__13444;
chunk__12544_13425 = G__13445;
count__12545_13426 = G__13446;
i__12546_13427 = G__13447;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__12547_13448 = cljs.core.seq(fields__$1);
var chunk__12548_13449 = null;
var count__12549_13450 = (0);
var i__12550_13451 = (0);
while(true){
if((i__12550_13451 < count__12549_13450)){
var fld_13452 = chunk__12548_13449.cljs$core$IIndexed$_nth$arity$2(null,i__12550_13451);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_13452," = ",fld_13452,";");


var G__13453 = seq__12547_13448;
var G__13454 = chunk__12548_13449;
var G__13455 = count__12549_13450;
var G__13456 = (i__12550_13451 + (1));
seq__12547_13448 = G__13453;
chunk__12548_13449 = G__13454;
count__12549_13450 = G__13455;
i__12550_13451 = G__13456;
continue;
} else {
var temp__5735__auto___13457 = cljs.core.seq(seq__12547_13448);
if(temp__5735__auto___13457){
var seq__12547_13458__$1 = temp__5735__auto___13457;
if(cljs.core.chunked_seq_QMARK_(seq__12547_13458__$1)){
var c__4609__auto___13459 = cljs.core.chunk_first(seq__12547_13458__$1);
var G__13460 = cljs.core.chunk_rest(seq__12547_13458__$1);
var G__13461 = c__4609__auto___13459;
var G__13462 = cljs.core.count(c__4609__auto___13459);
var G__13463 = (0);
seq__12547_13448 = G__13460;
chunk__12548_13449 = G__13461;
count__12549_13450 = G__13462;
i__12550_13451 = G__13463;
continue;
} else {
var fld_13464 = cljs.core.first(seq__12547_13458__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_13464," = ",fld_13464,";");


var G__13465 = cljs.core.next(seq__12547_13458__$1);
var G__13466 = null;
var G__13467 = (0);
var G__13468 = (0);
seq__12547_13448 = G__13465;
chunk__12548_13449 = G__13466;
count__12549_13450 = G__13467;
i__12550_13451 = G__13468;
continue;
}
} else {
}
}
break;
}

var seq__12551_13469 = cljs.core.seq(pmasks);
var chunk__12552_13470 = null;
var count__12553_13471 = (0);
var i__12554_13472 = (0);
while(true){
if((i__12554_13472 < count__12553_13471)){
var vec__12561_13473 = chunk__12552_13470.cljs$core$IIndexed$_nth$arity$2(null,i__12554_13472);
var pno_13474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561_13473,(0),null);
var pmask_13475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561_13473,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_13474,"$ = ",pmask_13475,";");


var G__13476 = seq__12551_13469;
var G__13477 = chunk__12552_13470;
var G__13478 = count__12553_13471;
var G__13479 = (i__12554_13472 + (1));
seq__12551_13469 = G__13476;
chunk__12552_13470 = G__13477;
count__12553_13471 = G__13478;
i__12554_13472 = G__13479;
continue;
} else {
var temp__5735__auto___13480 = cljs.core.seq(seq__12551_13469);
if(temp__5735__auto___13480){
var seq__12551_13481__$1 = temp__5735__auto___13480;
if(cljs.core.chunked_seq_QMARK_(seq__12551_13481__$1)){
var c__4609__auto___13482 = cljs.core.chunk_first(seq__12551_13481__$1);
var G__13483 = cljs.core.chunk_rest(seq__12551_13481__$1);
var G__13484 = c__4609__auto___13482;
var G__13485 = cljs.core.count(c__4609__auto___13482);
var G__13486 = (0);
seq__12551_13469 = G__13483;
chunk__12552_13470 = G__13484;
count__12553_13471 = G__13485;
i__12554_13472 = G__13486;
continue;
} else {
var vec__12564_13487 = cljs.core.first(seq__12551_13481__$1);
var pno_13488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12564_13487,(0),null);
var pmask_13489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12564_13487,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_13488,"$ = ",pmask_13489,";");


var G__13490 = cljs.core.next(seq__12551_13481__$1);
var G__13491 = null;
var G__13492 = (0);
var G__13493 = (0);
seq__12551_13469 = G__13490;
chunk__12552_13470 = G__13491;
count__12553_13471 = G__13492;
i__12554_13472 = G__13493;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12568){
var map__12569 = p__12568;
var map__12569__$1 = (((((!((map__12569 == null))))?(((((map__12569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12569):map__12569);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12571){
var map__12572 = p__12571;
var map__12572__$1 = (((((!((map__12572 == null))))?(((((map__12572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12572):map__12572);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12572__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12572__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12572__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12572__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12572__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4174__auto__ = code;
if(cljs.core.truth_(and__4174__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4174__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__11702__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11702__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__12579 = cljs.core.seq(table);
var chunk__12580 = null;
var count__12581 = (0);
var i__12582 = (0);
while(true){
if((i__12582 < count__12581)){
var vec__12589 = chunk__12580.cljs$core$IIndexed$_nth$arity$2(null,i__12582);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
var ns_13497 = cljs.core.namespace(sym);
var name_13498 = cljs.core.name(sym);
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


var G__13499 = seq__12579;
var G__13500 = chunk__12580;
var G__13501 = count__12581;
var G__13502 = (i__12582 + (1));
seq__12579 = G__13499;
chunk__12580 = G__13500;
count__12581 = G__13501;
i__12582 = G__13502;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12579);
if(temp__5735__auto__){
var seq__12579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12579__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__12579__$1);
var G__13503 = cljs.core.chunk_rest(seq__12579__$1);
var G__13504 = c__4609__auto__;
var G__13505 = cljs.core.count(c__4609__auto__);
var G__13506 = (0);
seq__12579 = G__13503;
chunk__12580 = G__13504;
count__12581 = G__13505;
i__12582 = G__13506;
continue;
} else {
var vec__12592 = cljs.core.first(seq__12579__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(1),null);
var ns_13507 = cljs.core.namespace(sym);
var name_13508 = cljs.core.name(sym);
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


var G__13509 = cljs.core.next(seq__12579__$1);
var G__13510 = null;
var G__13511 = (0);
var G__13512 = (0);
seq__12579 = G__13509;
chunk__12580 = G__13510;
count__12581 = G__13511;
i__12582 = G__13512;
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
var G__12596 = arguments.length;
switch (G__12596) {
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
var k_13518 = cljs.core.first(ks);
var vec__12597_13519 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_13518);
var top_13520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597_13519,(0),null);
var prefix_SINGLEQUOTE__13521 = vec__12597_13519;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_13518)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__13521) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_13520)) || (cljs.core.contains_QMARK_(known_externs,top_13520)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__13521)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_13520);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__13521)),";");
}
} else {
}

var m_13522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_13518);
if(cljs.core.empty_QMARK_(m_13522)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__13521,m_13522,top_level,known_externs);
}

var G__13523 = cljs.core.next(ks);
ks = G__13523;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

