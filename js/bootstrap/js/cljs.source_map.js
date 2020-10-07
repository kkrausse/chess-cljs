goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__28875){
var vec__28876 = p__28875;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28876,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__28881 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__28892 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(4),null);
var vec__28895 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__28901 = segmap;
var map__28901__$1 = (((((!((map__28901 == null))))?(((((map__28901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28901):map__28901);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28901__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28901__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28901__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28908 = arguments.length;
switch (G__28908) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__28926 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30364 = cljs.core.next(segs__$1);
var G__30365 = nrelseg;
var G__30366 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30364;
relseg__$1 = G__30365;
result__$1 = G__30366;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28926,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28926,(1),null);
var G__30368 = (gline + (1));
var G__30369 = cljs.core.next(lines__$1);
var G__30370 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30371 = result__$1;
gline = G__30368;
lines__$1 = G__30369;
relseg = G__30370;
result = G__30371;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__28935 = segmap;
var map__28935__$1 = (((((!((map__28935 == null))))?(((((map__28935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28935):map__28935);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__28934_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__28934_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28951 = arguments.length;
switch (G__28951) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__28962 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30397 = cljs.core.next(segs__$1);
var G__30398 = nrelseg;
var G__30399 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30397;
relseg__$1 = G__30398;
result__$1 = G__30399;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28962,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28962,(1),null);
var G__30403 = (gline + (1));
var G__30404 = cljs.core.next(lines__$1);
var G__30405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30406 = result__$1;
gline = G__30403;
lines__$1 = G__30404;
relseg = G__30405;
result = G__30406;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__28968){
var vec__28969 = p__28968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__28977){
var vec__28980 = p__28977;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(4),null);
var seg = vec__28980;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__28985){
var vec__28986 = p__28985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__28996 = cljs.core.seq(infos);
var chunk__28997 = null;
var count__28998 = (0);
var i__28999 = (0);
while(true){
if((i__28999 < count__28998)){
var info = chunk__28997.cljs$core$IIndexed$_nth$arity$2(null,i__28999);
var segv_30411 = info__GT_segv(info,source_idx,line,col);
var gline_30412 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30413 = cljs.core.count(cljs.core.deref(lines));
if((gline_30412 > (lc_30413 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__28996,chunk__28997,count__28998,i__28999,segv_30411,gline_30412,lc_30413,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30412 - (lc_30413 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30411], null));
});})(seq__28996,chunk__28997,count__28998,i__28999,segv_30411,gline_30412,lc_30413,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__28996,chunk__28997,count__28998,i__28999,segv_30411,gline_30412,lc_30413,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30412], null),cljs.core.conj,segv_30411);
});})(seq__28996,chunk__28997,count__28998,i__28999,segv_30411,gline_30412,lc_30413,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30419 = seq__28996;
var G__30420 = chunk__28997;
var G__30421 = count__28998;
var G__30422 = (i__28999 + (1));
seq__28996 = G__30419;
chunk__28997 = G__30420;
count__28998 = G__30421;
i__28999 = G__30422;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28996);
if(temp__5735__auto__){
var seq__28996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28996__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28996__$1);
var G__30423 = cljs.core.chunk_rest(seq__28996__$1);
var G__30424 = c__4556__auto__;
var G__30425 = cljs.core.count(c__4556__auto__);
var G__30426 = (0);
seq__28996 = G__30423;
chunk__28997 = G__30424;
count__28998 = G__30425;
i__28999 = G__30426;
continue;
} else {
var info = cljs.core.first(seq__28996__$1);
var segv_30427 = info__GT_segv(info,source_idx,line,col);
var gline_30428 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30429 = cljs.core.count(cljs.core.deref(lines));
if((gline_30428 > (lc_30429 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__28996,chunk__28997,count__28998,i__28999,segv_30427,gline_30428,lc_30429,info,seq__28996__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30428 - (lc_30429 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30427], null));
});})(seq__28996,chunk__28997,count__28998,i__28999,segv_30427,gline_30428,lc_30429,info,seq__28996__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__28996,chunk__28997,count__28998,i__28999,segv_30427,gline_30428,lc_30429,info,seq__28996__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30428], null),cljs.core.conj,segv_30427);
});})(seq__28996,chunk__28997,count__28998,i__28999,segv_30427,gline_30428,lc_30429,info,seq__28996__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30430 = cljs.core.next(seq__28996__$1);
var G__30431 = null;
var G__30432 = (0);
var G__30433 = (0);
seq__28996 = G__30430;
chunk__28997 = G__30431;
count__28998 = G__30432;
i__28999 = G__30433;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__29005_30434 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29006_30435 = null;
var count__29007_30436 = (0);
var i__29008_30437 = (0);
while(true){
if((i__29008_30437 < count__29007_30436)){
var vec__29252_30438 = chunk__29006_30435.cljs$core$IIndexed$_nth$arity$2(null,i__29008_30437);
var source_idx_30439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252_30438,(0),null);
var vec__29255_30440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252_30438,(1),null);
var __30441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29255_30440,(0),null);
var lines_30442__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29255_30440,(1),null);
var seq__29258_30443 = cljs.core.seq(lines_30442__$1);
var chunk__29259_30444 = null;
var count__29260_30445 = (0);
var i__29261_30446 = (0);
while(true){
if((i__29261_30446 < count__29260_30445)){
var vec__29336_30447 = chunk__29259_30444.cljs$core$IIndexed$_nth$arity$2(null,i__29261_30446);
var line_30448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29336_30447,(0),null);
var cols_30449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29336_30447,(1),null);
var seq__29339_30450 = cljs.core.seq(cols_30449);
var chunk__29340_30451 = null;
var count__29341_30452 = (0);
var i__29342_30453 = (0);
while(true){
if((i__29342_30453 < count__29341_30452)){
var vec__29362_30459 = chunk__29340_30451.cljs$core$IIndexed$_nth$arity$2(null,i__29342_30453);
var col_30460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362_30459,(0),null);
var infos_30461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362_30459,(1),null);
encode_cols(infos_30461,source_idx_30439,line_30448,col_30460);


var G__30462 = seq__29339_30450;
var G__30463 = chunk__29340_30451;
var G__30464 = count__29341_30452;
var G__30465 = (i__29342_30453 + (1));
seq__29339_30450 = G__30462;
chunk__29340_30451 = G__30463;
count__29341_30452 = G__30464;
i__29342_30453 = G__30465;
continue;
} else {
var temp__5735__auto___30466 = cljs.core.seq(seq__29339_30450);
if(temp__5735__auto___30466){
var seq__29339_30467__$1 = temp__5735__auto___30466;
if(cljs.core.chunked_seq_QMARK_(seq__29339_30467__$1)){
var c__4556__auto___30468 = cljs.core.chunk_first(seq__29339_30467__$1);
var G__30469 = cljs.core.chunk_rest(seq__29339_30467__$1);
var G__30470 = c__4556__auto___30468;
var G__30471 = cljs.core.count(c__4556__auto___30468);
var G__30472 = (0);
seq__29339_30450 = G__30469;
chunk__29340_30451 = G__30470;
count__29341_30452 = G__30471;
i__29342_30453 = G__30472;
continue;
} else {
var vec__29369_30473 = cljs.core.first(seq__29339_30467__$1);
var col_30474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369_30473,(0),null);
var infos_30475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369_30473,(1),null);
encode_cols(infos_30475,source_idx_30439,line_30448,col_30474);


var G__30479 = cljs.core.next(seq__29339_30467__$1);
var G__30480 = null;
var G__30481 = (0);
var G__30482 = (0);
seq__29339_30450 = G__30479;
chunk__29340_30451 = G__30480;
count__29341_30452 = G__30481;
i__29342_30453 = G__30482;
continue;
}
} else {
}
}
break;
}


var G__30483 = seq__29258_30443;
var G__30484 = chunk__29259_30444;
var G__30485 = count__29260_30445;
var G__30486 = (i__29261_30446 + (1));
seq__29258_30443 = G__30483;
chunk__29259_30444 = G__30484;
count__29260_30445 = G__30485;
i__29261_30446 = G__30486;
continue;
} else {
var temp__5735__auto___30487 = cljs.core.seq(seq__29258_30443);
if(temp__5735__auto___30487){
var seq__29258_30488__$1 = temp__5735__auto___30487;
if(cljs.core.chunked_seq_QMARK_(seq__29258_30488__$1)){
var c__4556__auto___30489 = cljs.core.chunk_first(seq__29258_30488__$1);
var G__30491 = cljs.core.chunk_rest(seq__29258_30488__$1);
var G__30492 = c__4556__auto___30489;
var G__30493 = cljs.core.count(c__4556__auto___30489);
var G__30494 = (0);
seq__29258_30443 = G__30491;
chunk__29259_30444 = G__30492;
count__29260_30445 = G__30493;
i__29261_30446 = G__30494;
continue;
} else {
var vec__29377_30496 = cljs.core.first(seq__29258_30488__$1);
var line_30497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377_30496,(0),null);
var cols_30498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377_30496,(1),null);
var seq__29381_30501 = cljs.core.seq(cols_30498);
var chunk__29382_30502 = null;
var count__29383_30503 = (0);
var i__29384_30504 = (0);
while(true){
if((i__29384_30504 < count__29383_30503)){
var vec__29401_30505 = chunk__29382_30502.cljs$core$IIndexed$_nth$arity$2(null,i__29384_30504);
var col_30506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401_30505,(0),null);
var infos_30507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401_30505,(1),null);
encode_cols(infos_30507,source_idx_30439,line_30497,col_30506);


var G__30508 = seq__29381_30501;
var G__30509 = chunk__29382_30502;
var G__30510 = count__29383_30503;
var G__30511 = (i__29384_30504 + (1));
seq__29381_30501 = G__30508;
chunk__29382_30502 = G__30509;
count__29383_30503 = G__30510;
i__29384_30504 = G__30511;
continue;
} else {
var temp__5735__auto___30512__$1 = cljs.core.seq(seq__29381_30501);
if(temp__5735__auto___30512__$1){
var seq__29381_30513__$1 = temp__5735__auto___30512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29381_30513__$1)){
var c__4556__auto___30514 = cljs.core.chunk_first(seq__29381_30513__$1);
var G__30516 = cljs.core.chunk_rest(seq__29381_30513__$1);
var G__30517 = c__4556__auto___30514;
var G__30518 = cljs.core.count(c__4556__auto___30514);
var G__30519 = (0);
seq__29381_30501 = G__30516;
chunk__29382_30502 = G__30517;
count__29383_30503 = G__30518;
i__29384_30504 = G__30519;
continue;
} else {
var vec__29404_30520 = cljs.core.first(seq__29381_30513__$1);
var col_30521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29404_30520,(0),null);
var infos_30522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29404_30520,(1),null);
encode_cols(infos_30522,source_idx_30439,line_30497,col_30521);


var G__30524 = cljs.core.next(seq__29381_30513__$1);
var G__30525 = null;
var G__30526 = (0);
var G__30527 = (0);
seq__29381_30501 = G__30524;
chunk__29382_30502 = G__30525;
count__29383_30503 = G__30526;
i__29384_30504 = G__30527;
continue;
}
} else {
}
}
break;
}


var G__30528 = cljs.core.next(seq__29258_30488__$1);
var G__30529 = null;
var G__30530 = (0);
var G__30531 = (0);
seq__29258_30443 = G__30528;
chunk__29259_30444 = G__30529;
count__29260_30445 = G__30530;
i__29261_30446 = G__30531;
continue;
}
} else {
}
}
break;
}


var G__30532 = seq__29005_30434;
var G__30533 = chunk__29006_30435;
var G__30534 = count__29007_30436;
var G__30535 = (i__29008_30437 + (1));
seq__29005_30434 = G__30532;
chunk__29006_30435 = G__30533;
count__29007_30436 = G__30534;
i__29008_30437 = G__30535;
continue;
} else {
var temp__5735__auto___30536 = cljs.core.seq(seq__29005_30434);
if(temp__5735__auto___30536){
var seq__29005_30537__$1 = temp__5735__auto___30536;
if(cljs.core.chunked_seq_QMARK_(seq__29005_30537__$1)){
var c__4556__auto___30538 = cljs.core.chunk_first(seq__29005_30537__$1);
var G__30539 = cljs.core.chunk_rest(seq__29005_30537__$1);
var G__30540 = c__4556__auto___30538;
var G__30541 = cljs.core.count(c__4556__auto___30538);
var G__30542 = (0);
seq__29005_30434 = G__30539;
chunk__29006_30435 = G__30540;
count__29007_30436 = G__30541;
i__29008_30437 = G__30542;
continue;
} else {
var vec__29409_30543 = cljs.core.first(seq__29005_30537__$1);
var source_idx_30544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409_30543,(0),null);
var vec__29412_30545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409_30543,(1),null);
var __30546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29412_30545,(0),null);
var lines_30547__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29412_30545,(1),null);
var seq__29415_30548 = cljs.core.seq(lines_30547__$1);
var chunk__29416_30549 = null;
var count__29417_30550 = (0);
var i__29418_30551 = (0);
while(true){
if((i__29418_30551 < count__29417_30550)){
var vec__29478_30552 = chunk__29416_30549.cljs$core$IIndexed$_nth$arity$2(null,i__29418_30551);
var line_30553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29478_30552,(0),null);
var cols_30554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29478_30552,(1),null);
var seq__29482_30555 = cljs.core.seq(cols_30554);
var chunk__29483_30556 = null;
var count__29484_30557 = (0);
var i__29485_30558 = (0);
while(true){
if((i__29485_30558 < count__29484_30557)){
var vec__29497_30559 = chunk__29483_30556.cljs$core$IIndexed$_nth$arity$2(null,i__29485_30558);
var col_30560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497_30559,(0),null);
var infos_30561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497_30559,(1),null);
encode_cols(infos_30561,source_idx_30544,line_30553,col_30560);


var G__30562 = seq__29482_30555;
var G__30563 = chunk__29483_30556;
var G__30564 = count__29484_30557;
var G__30565 = (i__29485_30558 + (1));
seq__29482_30555 = G__30562;
chunk__29483_30556 = G__30563;
count__29484_30557 = G__30564;
i__29485_30558 = G__30565;
continue;
} else {
var temp__5735__auto___30566__$1 = cljs.core.seq(seq__29482_30555);
if(temp__5735__auto___30566__$1){
var seq__29482_30567__$1 = temp__5735__auto___30566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29482_30567__$1)){
var c__4556__auto___30569 = cljs.core.chunk_first(seq__29482_30567__$1);
var G__30570 = cljs.core.chunk_rest(seq__29482_30567__$1);
var G__30571 = c__4556__auto___30569;
var G__30572 = cljs.core.count(c__4556__auto___30569);
var G__30573 = (0);
seq__29482_30555 = G__30570;
chunk__29483_30556 = G__30571;
count__29484_30557 = G__30572;
i__29485_30558 = G__30573;
continue;
} else {
var vec__29500_30575 = cljs.core.first(seq__29482_30567__$1);
var col_30576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500_30575,(0),null);
var infos_30577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500_30575,(1),null);
encode_cols(infos_30577,source_idx_30544,line_30553,col_30576);


var G__30580 = cljs.core.next(seq__29482_30567__$1);
var G__30581 = null;
var G__30582 = (0);
var G__30583 = (0);
seq__29482_30555 = G__30580;
chunk__29483_30556 = G__30581;
count__29484_30557 = G__30582;
i__29485_30558 = G__30583;
continue;
}
} else {
}
}
break;
}


var G__30584 = seq__29415_30548;
var G__30585 = chunk__29416_30549;
var G__30586 = count__29417_30550;
var G__30587 = (i__29418_30551 + (1));
seq__29415_30548 = G__30584;
chunk__29416_30549 = G__30585;
count__29417_30550 = G__30586;
i__29418_30551 = G__30587;
continue;
} else {
var temp__5735__auto___30588__$1 = cljs.core.seq(seq__29415_30548);
if(temp__5735__auto___30588__$1){
var seq__29415_30589__$1 = temp__5735__auto___30588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29415_30589__$1)){
var c__4556__auto___30590 = cljs.core.chunk_first(seq__29415_30589__$1);
var G__30591 = cljs.core.chunk_rest(seq__29415_30589__$1);
var G__30592 = c__4556__auto___30590;
var G__30593 = cljs.core.count(c__4556__auto___30590);
var G__30594 = (0);
seq__29415_30548 = G__30591;
chunk__29416_30549 = G__30592;
count__29417_30550 = G__30593;
i__29418_30551 = G__30594;
continue;
} else {
var vec__29505_30595 = cljs.core.first(seq__29415_30589__$1);
var line_30596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29505_30595,(0),null);
var cols_30597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29505_30595,(1),null);
var seq__29508_30598 = cljs.core.seq(cols_30597);
var chunk__29509_30599 = null;
var count__29510_30600 = (0);
var i__29511_30601 = (0);
while(true){
if((i__29511_30601 < count__29510_30600)){
var vec__29518_30602 = chunk__29509_30599.cljs$core$IIndexed$_nth$arity$2(null,i__29511_30601);
var col_30603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29518_30602,(0),null);
var infos_30604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29518_30602,(1),null);
encode_cols(infos_30604,source_idx_30544,line_30596,col_30603);


var G__30606 = seq__29508_30598;
var G__30607 = chunk__29509_30599;
var G__30608 = count__29510_30600;
var G__30609 = (i__29511_30601 + (1));
seq__29508_30598 = G__30606;
chunk__29509_30599 = G__30607;
count__29510_30600 = G__30608;
i__29511_30601 = G__30609;
continue;
} else {
var temp__5735__auto___30612__$2 = cljs.core.seq(seq__29508_30598);
if(temp__5735__auto___30612__$2){
var seq__29508_30613__$1 = temp__5735__auto___30612__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29508_30613__$1)){
var c__4556__auto___30614 = cljs.core.chunk_first(seq__29508_30613__$1);
var G__30615 = cljs.core.chunk_rest(seq__29508_30613__$1);
var G__30616 = c__4556__auto___30614;
var G__30617 = cljs.core.count(c__4556__auto___30614);
var G__30618 = (0);
seq__29508_30598 = G__30615;
chunk__29509_30599 = G__30616;
count__29510_30600 = G__30617;
i__29511_30601 = G__30618;
continue;
} else {
var vec__29521_30619 = cljs.core.first(seq__29508_30613__$1);
var col_30620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521_30619,(0),null);
var infos_30621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521_30619,(1),null);
encode_cols(infos_30621,source_idx_30544,line_30596,col_30620);


var G__30622 = cljs.core.next(seq__29508_30613__$1);
var G__30623 = null;
var G__30624 = (0);
var G__30625 = (0);
seq__29508_30598 = G__30622;
chunk__29509_30599 = G__30623;
count__29510_30600 = G__30624;
i__29511_30601 = G__30625;
continue;
}
} else {
}
}
break;
}


var G__30628 = cljs.core.next(seq__29415_30589__$1);
var G__30629 = null;
var G__30630 = (0);
var G__30631 = (0);
seq__29415_30548 = G__30628;
chunk__29416_30549 = G__30629;
count__29417_30550 = G__30630;
i__29418_30551 = G__30631;
continue;
}
} else {
}
}
break;
}


var G__30634 = cljs.core.next(seq__29005_30537__$1);
var G__30635 = null;
var G__30636 = (0);
var G__30637 = (0);
seq__29005_30434 = G__30634;
chunk__29006_30435 = G__30635;
count__29007_30436 = G__30636;
i__29008_30437 = G__30637;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29524 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__28992_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28992_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__28993_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__28993_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28994_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__28994_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__29556 = G__29524;
goog.object.set(G__29556,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29556;
} else {
return G__29524;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__29560 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__29564 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29564,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29564,(1),null);
var G__30654 = cljs.core.next(col_map_seq);
var G__30655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29564,col,infos,vec__29560,line,col_map){
return (function (v,p__29567){
var map__29568 = p__29567;
var map__29568__$1 = (((((!((map__29568 == null))))?(((((map__29568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29568):map__29568);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29568__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29568__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29564,col,infos,vec__29560,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__30654;
new_cols = G__30655;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__30660 = cljs.core.next(line_map_seq);
var G__30661 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__30660;
new_lines = G__30661;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__29572_30662 = cljs.core.seq(reverse_map);
var chunk__29573_30663 = null;
var count__29574_30664 = (0);
var i__29575_30665 = (0);
while(true){
if((i__29575_30665 < count__29574_30664)){
var vec__29977_30667 = chunk__29573_30663.cljs$core$IIndexed$_nth$arity$2(null,i__29575_30665);
var line_30668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29977_30667,(0),null);
var columns_30669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29977_30667,(1),null);
var seq__29980_30670 = cljs.core.seq(columns_30669);
var chunk__29981_30671 = null;
var count__29982_30672 = (0);
var i__29983_30673 = (0);
while(true){
if((i__29983_30673 < count__29982_30672)){
var vec__30036_30674 = chunk__29981_30671.cljs$core$IIndexed$_nth$arity$2(null,i__29983_30673);
var column_30675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036_30674,(0),null);
var column_info_30676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036_30674,(1),null);
var seq__30039_30677 = cljs.core.seq(column_info_30676);
var chunk__30040_30678 = null;
var count__30041_30679 = (0);
var i__30042_30680 = (0);
while(true){
if((i__30042_30680 < count__30041_30679)){
var map__30063_30681 = chunk__30040_30678.cljs$core$IIndexed$_nth$arity$2(null,i__30042_30680);
var map__30063_30682__$1 = (((((!((map__30063_30681 == null))))?(((((map__30063_30681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30063_30681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30063_30681):map__30063_30681);
var gline_30683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063_30682__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063_30682__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063_30682__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30683], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30039_30677,chunk__30040_30678,count__30041_30679,i__30042_30680,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30063_30681,map__30063_30682__$1,gline_30683,gcol_30684,name_30685,vec__30036_30674,column_30675,column_info_30676,vec__29977_30667,line_30668,columns_30669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30684], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30668,new cljs.core.Keyword(null,"col","col",-1959363084),column_30675,new cljs.core.Keyword(null,"name","name",1843675177),name_30685], null));
});})(seq__30039_30677,chunk__30040_30678,count__30041_30679,i__30042_30680,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30063_30681,map__30063_30682__$1,gline_30683,gcol_30684,name_30685,vec__30036_30674,column_30675,column_info_30676,vec__29977_30667,line_30668,columns_30669,inverted))
,cljs.core.sorted_map()));


var G__30687 = seq__30039_30677;
var G__30688 = chunk__30040_30678;
var G__30689 = count__30041_30679;
var G__30690 = (i__30042_30680 + (1));
seq__30039_30677 = G__30687;
chunk__30040_30678 = G__30688;
count__30041_30679 = G__30689;
i__30042_30680 = G__30690;
continue;
} else {
var temp__5735__auto___30691 = cljs.core.seq(seq__30039_30677);
if(temp__5735__auto___30691){
var seq__30039_30692__$1 = temp__5735__auto___30691;
if(cljs.core.chunked_seq_QMARK_(seq__30039_30692__$1)){
var c__4556__auto___30693 = cljs.core.chunk_first(seq__30039_30692__$1);
var G__30694 = cljs.core.chunk_rest(seq__30039_30692__$1);
var G__30695 = c__4556__auto___30693;
var G__30696 = cljs.core.count(c__4556__auto___30693);
var G__30697 = (0);
seq__30039_30677 = G__30694;
chunk__30040_30678 = G__30695;
count__30041_30679 = G__30696;
i__30042_30680 = G__30697;
continue;
} else {
var map__30065_30698 = cljs.core.first(seq__30039_30692__$1);
var map__30065_30699__$1 = (((((!((map__30065_30698 == null))))?(((((map__30065_30698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065_30698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30065_30698):map__30065_30698);
var gline_30700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30065_30699__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30065_30699__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30065_30699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30700], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30039_30677,chunk__30040_30678,count__30041_30679,i__30042_30680,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30065_30698,map__30065_30699__$1,gline_30700,gcol_30701,name_30702,seq__30039_30692__$1,temp__5735__auto___30691,vec__30036_30674,column_30675,column_info_30676,vec__29977_30667,line_30668,columns_30669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30701], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30668,new cljs.core.Keyword(null,"col","col",-1959363084),column_30675,new cljs.core.Keyword(null,"name","name",1843675177),name_30702], null));
});})(seq__30039_30677,chunk__30040_30678,count__30041_30679,i__30042_30680,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30065_30698,map__30065_30699__$1,gline_30700,gcol_30701,name_30702,seq__30039_30692__$1,temp__5735__auto___30691,vec__30036_30674,column_30675,column_info_30676,vec__29977_30667,line_30668,columns_30669,inverted))
,cljs.core.sorted_map()));


var G__30706 = cljs.core.next(seq__30039_30692__$1);
var G__30707 = null;
var G__30708 = (0);
var G__30709 = (0);
seq__30039_30677 = G__30706;
chunk__30040_30678 = G__30707;
count__30041_30679 = G__30708;
i__30042_30680 = G__30709;
continue;
}
} else {
}
}
break;
}


var G__30710 = seq__29980_30670;
var G__30711 = chunk__29981_30671;
var G__30712 = count__29982_30672;
var G__30713 = (i__29983_30673 + (1));
seq__29980_30670 = G__30710;
chunk__29981_30671 = G__30711;
count__29982_30672 = G__30712;
i__29983_30673 = G__30713;
continue;
} else {
var temp__5735__auto___30714 = cljs.core.seq(seq__29980_30670);
if(temp__5735__auto___30714){
var seq__29980_30715__$1 = temp__5735__auto___30714;
if(cljs.core.chunked_seq_QMARK_(seq__29980_30715__$1)){
var c__4556__auto___30716 = cljs.core.chunk_first(seq__29980_30715__$1);
var G__30717 = cljs.core.chunk_rest(seq__29980_30715__$1);
var G__30718 = c__4556__auto___30716;
var G__30719 = cljs.core.count(c__4556__auto___30716);
var G__30720 = (0);
seq__29980_30670 = G__30717;
chunk__29981_30671 = G__30718;
count__29982_30672 = G__30719;
i__29983_30673 = G__30720;
continue;
} else {
var vec__30071_30722 = cljs.core.first(seq__29980_30715__$1);
var column_30723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30071_30722,(0),null);
var column_info_30724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30071_30722,(1),null);
var seq__30074_30726 = cljs.core.seq(column_info_30724);
var chunk__30078_30727 = null;
var count__30079_30728 = (0);
var i__30080_30729 = (0);
while(true){
if((i__30080_30729 < count__30079_30728)){
var map__30093_30730 = chunk__30078_30727.cljs$core$IIndexed$_nth$arity$2(null,i__30080_30729);
var map__30093_30731__$1 = (((((!((map__30093_30730 == null))))?(((((map__30093_30730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30093_30730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30093_30730):map__30093_30730);
var gline_30732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30093_30731__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30093_30731__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30093_30731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30732], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30074_30726,chunk__30078_30727,count__30079_30728,i__30080_30729,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30093_30730,map__30093_30731__$1,gline_30732,gcol_30733,name_30734,vec__30071_30722,column_30723,column_info_30724,seq__29980_30715__$1,temp__5735__auto___30714,vec__29977_30667,line_30668,columns_30669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30733], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30668,new cljs.core.Keyword(null,"col","col",-1959363084),column_30723,new cljs.core.Keyword(null,"name","name",1843675177),name_30734], null));
});})(seq__30074_30726,chunk__30078_30727,count__30079_30728,i__30080_30729,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30093_30730,map__30093_30731__$1,gline_30732,gcol_30733,name_30734,vec__30071_30722,column_30723,column_info_30724,seq__29980_30715__$1,temp__5735__auto___30714,vec__29977_30667,line_30668,columns_30669,inverted))
,cljs.core.sorted_map()));


var G__30743 = seq__30074_30726;
var G__30744 = chunk__30078_30727;
var G__30745 = count__30079_30728;
var G__30746 = (i__30080_30729 + (1));
seq__30074_30726 = G__30743;
chunk__30078_30727 = G__30744;
count__30079_30728 = G__30745;
i__30080_30729 = G__30746;
continue;
} else {
var temp__5735__auto___30747__$1 = cljs.core.seq(seq__30074_30726);
if(temp__5735__auto___30747__$1){
var seq__30074_30748__$1 = temp__5735__auto___30747__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30074_30748__$1)){
var c__4556__auto___30749 = cljs.core.chunk_first(seq__30074_30748__$1);
var G__30750 = cljs.core.chunk_rest(seq__30074_30748__$1);
var G__30751 = c__4556__auto___30749;
var G__30752 = cljs.core.count(c__4556__auto___30749);
var G__30753 = (0);
seq__30074_30726 = G__30750;
chunk__30078_30727 = G__30751;
count__30079_30728 = G__30752;
i__30080_30729 = G__30753;
continue;
} else {
var map__30101_30754 = cljs.core.first(seq__30074_30748__$1);
var map__30101_30755__$1 = (((((!((map__30101_30754 == null))))?(((((map__30101_30754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30101_30754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30101_30754):map__30101_30754);
var gline_30756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101_30755__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101_30755__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30101_30755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30756], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30074_30726,chunk__30078_30727,count__30079_30728,i__30080_30729,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30101_30754,map__30101_30755__$1,gline_30756,gcol_30757,name_30758,seq__30074_30748__$1,temp__5735__auto___30747__$1,vec__30071_30722,column_30723,column_info_30724,seq__29980_30715__$1,temp__5735__auto___30714,vec__29977_30667,line_30668,columns_30669,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30757], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30668,new cljs.core.Keyword(null,"col","col",-1959363084),column_30723,new cljs.core.Keyword(null,"name","name",1843675177),name_30758], null));
});})(seq__30074_30726,chunk__30078_30727,count__30079_30728,i__30080_30729,seq__29980_30670,chunk__29981_30671,count__29982_30672,i__29983_30673,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30101_30754,map__30101_30755__$1,gline_30756,gcol_30757,name_30758,seq__30074_30748__$1,temp__5735__auto___30747__$1,vec__30071_30722,column_30723,column_info_30724,seq__29980_30715__$1,temp__5735__auto___30714,vec__29977_30667,line_30668,columns_30669,inverted))
,cljs.core.sorted_map()));


var G__30762 = cljs.core.next(seq__30074_30748__$1);
var G__30763 = null;
var G__30764 = (0);
var G__30765 = (0);
seq__30074_30726 = G__30762;
chunk__30078_30727 = G__30763;
count__30079_30728 = G__30764;
i__30080_30729 = G__30765;
continue;
}
} else {
}
}
break;
}


var G__30766 = cljs.core.next(seq__29980_30715__$1);
var G__30767 = null;
var G__30768 = (0);
var G__30769 = (0);
seq__29980_30670 = G__30766;
chunk__29981_30671 = G__30767;
count__29982_30672 = G__30768;
i__29983_30673 = G__30769;
continue;
}
} else {
}
}
break;
}


var G__30770 = seq__29572_30662;
var G__30771 = chunk__29573_30663;
var G__30772 = count__29574_30664;
var G__30773 = (i__29575_30665 + (1));
seq__29572_30662 = G__30770;
chunk__29573_30663 = G__30771;
count__29574_30664 = G__30772;
i__29575_30665 = G__30773;
continue;
} else {
var temp__5735__auto___30774 = cljs.core.seq(seq__29572_30662);
if(temp__5735__auto___30774){
var seq__29572_30775__$1 = temp__5735__auto___30774;
if(cljs.core.chunked_seq_QMARK_(seq__29572_30775__$1)){
var c__4556__auto___30776 = cljs.core.chunk_first(seq__29572_30775__$1);
var G__30777 = cljs.core.chunk_rest(seq__29572_30775__$1);
var G__30778 = c__4556__auto___30776;
var G__30779 = cljs.core.count(c__4556__auto___30776);
var G__30780 = (0);
seq__29572_30662 = G__30777;
chunk__29573_30663 = G__30778;
count__29574_30664 = G__30779;
i__29575_30665 = G__30780;
continue;
} else {
var vec__30110_30781 = cljs.core.first(seq__29572_30775__$1);
var line_30782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30110_30781,(0),null);
var columns_30783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30110_30781,(1),null);
var seq__30113_30784 = cljs.core.seq(columns_30783);
var chunk__30114_30785 = null;
var count__30115_30786 = (0);
var i__30116_30787 = (0);
while(true){
if((i__30116_30787 < count__30115_30786)){
var vec__30193_30788 = chunk__30114_30785.cljs$core$IIndexed$_nth$arity$2(null,i__30116_30787);
var column_30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30193_30788,(0),null);
var column_info_30790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30193_30788,(1),null);
var seq__30196_30791 = cljs.core.seq(column_info_30790);
var chunk__30197_30792 = null;
var count__30198_30793 = (0);
var i__30199_30794 = (0);
while(true){
if((i__30199_30794 < count__30198_30793)){
var map__30223_30796 = chunk__30197_30792.cljs$core$IIndexed$_nth$arity$2(null,i__30199_30794);
var map__30223_30797__$1 = (((((!((map__30223_30796 == null))))?(((((map__30223_30796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30223_30796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30223_30796):map__30223_30796);
var gline_30798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223_30797__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223_30797__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223_30797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30798], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30196_30791,chunk__30197_30792,count__30198_30793,i__30199_30794,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30223_30796,map__30223_30797__$1,gline_30798,gcol_30799,name_30800,vec__30193_30788,column_30789,column_info_30790,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30799], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30782,new cljs.core.Keyword(null,"col","col",-1959363084),column_30789,new cljs.core.Keyword(null,"name","name",1843675177),name_30800], null));
});})(seq__30196_30791,chunk__30197_30792,count__30198_30793,i__30199_30794,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30223_30796,map__30223_30797__$1,gline_30798,gcol_30799,name_30800,vec__30193_30788,column_30789,column_info_30790,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted))
,cljs.core.sorted_map()));


var G__30802 = seq__30196_30791;
var G__30803 = chunk__30197_30792;
var G__30804 = count__30198_30793;
var G__30805 = (i__30199_30794 + (1));
seq__30196_30791 = G__30802;
chunk__30197_30792 = G__30803;
count__30198_30793 = G__30804;
i__30199_30794 = G__30805;
continue;
} else {
var temp__5735__auto___30806__$1 = cljs.core.seq(seq__30196_30791);
if(temp__5735__auto___30806__$1){
var seq__30196_30807__$1 = temp__5735__auto___30806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30196_30807__$1)){
var c__4556__auto___30808 = cljs.core.chunk_first(seq__30196_30807__$1);
var G__30809 = cljs.core.chunk_rest(seq__30196_30807__$1);
var G__30810 = c__4556__auto___30808;
var G__30811 = cljs.core.count(c__4556__auto___30808);
var G__30812 = (0);
seq__30196_30791 = G__30809;
chunk__30197_30792 = G__30810;
count__30198_30793 = G__30811;
i__30199_30794 = G__30812;
continue;
} else {
var map__30232_30813 = cljs.core.first(seq__30196_30807__$1);
var map__30232_30814__$1 = (((((!((map__30232_30813 == null))))?(((((map__30232_30813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30232_30813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30232_30813):map__30232_30813);
var gline_30815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232_30814__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232_30814__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232_30814__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30815], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30196_30791,chunk__30197_30792,count__30198_30793,i__30199_30794,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30232_30813,map__30232_30814__$1,gline_30815,gcol_30816,name_30817,seq__30196_30807__$1,temp__5735__auto___30806__$1,vec__30193_30788,column_30789,column_info_30790,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30816], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30782,new cljs.core.Keyword(null,"col","col",-1959363084),column_30789,new cljs.core.Keyword(null,"name","name",1843675177),name_30817], null));
});})(seq__30196_30791,chunk__30197_30792,count__30198_30793,i__30199_30794,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30232_30813,map__30232_30814__$1,gline_30815,gcol_30816,name_30817,seq__30196_30807__$1,temp__5735__auto___30806__$1,vec__30193_30788,column_30789,column_info_30790,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted))
,cljs.core.sorted_map()));


var G__30820 = cljs.core.next(seq__30196_30807__$1);
var G__30821 = null;
var G__30822 = (0);
var G__30823 = (0);
seq__30196_30791 = G__30820;
chunk__30197_30792 = G__30821;
count__30198_30793 = G__30822;
i__30199_30794 = G__30823;
continue;
}
} else {
}
}
break;
}


var G__30824 = seq__30113_30784;
var G__30825 = chunk__30114_30785;
var G__30826 = count__30115_30786;
var G__30827 = (i__30116_30787 + (1));
seq__30113_30784 = G__30824;
chunk__30114_30785 = G__30825;
count__30115_30786 = G__30826;
i__30116_30787 = G__30827;
continue;
} else {
var temp__5735__auto___30828__$1 = cljs.core.seq(seq__30113_30784);
if(temp__5735__auto___30828__$1){
var seq__30113_30829__$1 = temp__5735__auto___30828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30113_30829__$1)){
var c__4556__auto___30830 = cljs.core.chunk_first(seq__30113_30829__$1);
var G__30831 = cljs.core.chunk_rest(seq__30113_30829__$1);
var G__30832 = c__4556__auto___30830;
var G__30833 = cljs.core.count(c__4556__auto___30830);
var G__30834 = (0);
seq__30113_30784 = G__30831;
chunk__30114_30785 = G__30832;
count__30115_30786 = G__30833;
i__30116_30787 = G__30834;
continue;
} else {
var vec__30243_30835 = cljs.core.first(seq__30113_30829__$1);
var column_30836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243_30835,(0),null);
var column_info_30837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243_30835,(1),null);
var seq__30247_30838 = cljs.core.seq(column_info_30837);
var chunk__30248_30839 = null;
var count__30249_30840 = (0);
var i__30250_30841 = (0);
while(true){
if((i__30250_30841 < count__30249_30840)){
var map__30278_30842 = chunk__30248_30839.cljs$core$IIndexed$_nth$arity$2(null,i__30250_30841);
var map__30278_30843__$1 = (((((!((map__30278_30842 == null))))?(((((map__30278_30842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30278_30842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30278_30842):map__30278_30842);
var gline_30844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278_30843__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278_30843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278_30843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30247_30838,chunk__30248_30839,count__30249_30840,i__30250_30841,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30278_30842,map__30278_30843__$1,gline_30844,gcol_30845,name_30846,vec__30243_30835,column_30836,column_info_30837,seq__30113_30829__$1,temp__5735__auto___30828__$1,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30782,new cljs.core.Keyword(null,"col","col",-1959363084),column_30836,new cljs.core.Keyword(null,"name","name",1843675177),name_30846], null));
});})(seq__30247_30838,chunk__30248_30839,count__30249_30840,i__30250_30841,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30278_30842,map__30278_30843__$1,gline_30844,gcol_30845,name_30846,vec__30243_30835,column_30836,column_info_30837,seq__30113_30829__$1,temp__5735__auto___30828__$1,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted))
,cljs.core.sorted_map()));


var G__30858 = seq__30247_30838;
var G__30859 = chunk__30248_30839;
var G__30860 = count__30249_30840;
var G__30861 = (i__30250_30841 + (1));
seq__30247_30838 = G__30858;
chunk__30248_30839 = G__30859;
count__30249_30840 = G__30860;
i__30250_30841 = G__30861;
continue;
} else {
var temp__5735__auto___30862__$2 = cljs.core.seq(seq__30247_30838);
if(temp__5735__auto___30862__$2){
var seq__30247_30865__$1 = temp__5735__auto___30862__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30247_30865__$1)){
var c__4556__auto___30866 = cljs.core.chunk_first(seq__30247_30865__$1);
var G__30868 = cljs.core.chunk_rest(seq__30247_30865__$1);
var G__30869 = c__4556__auto___30866;
var G__30870 = cljs.core.count(c__4556__auto___30866);
var G__30871 = (0);
seq__30247_30838 = G__30868;
chunk__30248_30839 = G__30869;
count__30249_30840 = G__30870;
i__30250_30841 = G__30871;
continue;
} else {
var map__30287_30872 = cljs.core.first(seq__30247_30865__$1);
var map__30287_30873__$1 = (((((!((map__30287_30872 == null))))?(((((map__30287_30872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30287_30872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30287_30872):map__30287_30872);
var gline_30874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30287_30873__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30287_30873__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30287_30873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30874], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30247_30838,chunk__30248_30839,count__30249_30840,i__30250_30841,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30287_30872,map__30287_30873__$1,gline_30874,gcol_30875,name_30876,seq__30247_30865__$1,temp__5735__auto___30862__$2,vec__30243_30835,column_30836,column_info_30837,seq__30113_30829__$1,temp__5735__auto___30828__$1,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30875], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30782,new cljs.core.Keyword(null,"col","col",-1959363084),column_30836,new cljs.core.Keyword(null,"name","name",1843675177),name_30876], null));
});})(seq__30247_30838,chunk__30248_30839,count__30249_30840,i__30250_30841,seq__30113_30784,chunk__30114_30785,count__30115_30786,i__30116_30787,seq__29572_30662,chunk__29573_30663,count__29574_30664,i__29575_30665,map__30287_30872,map__30287_30873__$1,gline_30874,gcol_30875,name_30876,seq__30247_30865__$1,temp__5735__auto___30862__$2,vec__30243_30835,column_30836,column_info_30837,seq__30113_30829__$1,temp__5735__auto___30828__$1,vec__30110_30781,line_30782,columns_30783,seq__29572_30775__$1,temp__5735__auto___30774,inverted))
,cljs.core.sorted_map()));


var G__30884 = cljs.core.next(seq__30247_30865__$1);
var G__30885 = null;
var G__30886 = (0);
var G__30887 = (0);
seq__30247_30838 = G__30884;
chunk__30248_30839 = G__30885;
count__30249_30840 = G__30886;
i__30250_30841 = G__30887;
continue;
}
} else {
}
}
break;
}


var G__30888 = cljs.core.next(seq__30113_30829__$1);
var G__30889 = null;
var G__30890 = (0);
var G__30891 = (0);
seq__30113_30784 = G__30888;
chunk__30114_30785 = G__30889;
count__30115_30786 = G__30890;
i__30116_30787 = G__30891;
continue;
}
} else {
}
}
break;
}


var G__30892 = cljs.core.next(seq__29572_30775__$1);
var G__30893 = null;
var G__30894 = (0);
var G__30895 = (0);
seq__29572_30662 = G__30892;
chunk__29573_30663 = G__30893;
count__29574_30664 = G__30894;
i__29575_30665 = G__30895;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
