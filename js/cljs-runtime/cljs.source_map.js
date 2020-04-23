goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__27169){
var vec__27170 = p__27169;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27170,(1),null);
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
var vec__27181 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(4),null);
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
var vec__27189 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(4),null);
var vec__27192 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4185__auto__ = col;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var map__27211 = segmap;
var map__27211__$1 = (((((!((map__27211 == null))))?(((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27211):map__27211);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__27241 = arguments.length;
switch (G__27241) {
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
var vec__27254 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__28310 = cljs.core.next(segs__$1);
var G__28311 = nrelseg;
var G__28312 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__28310;
relseg__$1 = G__28311;
result__$1 = G__28312;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27254,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27254,(1),null);
var G__28313 = (gline + (1));
var G__28314 = cljs.core.next(lines__$1);
var G__28315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__28316 = result__$1;
gline = G__28313;
lines__$1 = G__28314;
relseg = G__28315;
result = G__28316;
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
var map__27264 = segmap;
var map__27264__$1 = (((((!((map__27264 == null))))?(((((map__27264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27264):map__27264);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__27259_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27259_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__27273 = arguments.length;
switch (G__27273) {
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
var vec__27281 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__28337 = cljs.core.next(segs__$1);
var G__28338 = nrelseg;
var G__28339 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__28337;
relseg__$1 = G__28338;
result__$1 = G__28339;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27281,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27281,(1),null);
var G__28341 = (gline + (1));
var G__28342 = cljs.core.next(lines__$1);
var G__28343 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__28344 = result__$1;
gline = G__28341;
lines__$1 = G__28342;
relseg = G__28343;
result = G__28344;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__27292){
var vec__27293 = p__27292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__27296){
var vec__27301 = p__27296;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27301,(4),null);
var seg = vec__27301;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__27306){
var vec__27307 = p__27306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4185__auto__ = name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__27329 = cljs.core.seq(infos);
var chunk__27330 = null;
var count__27331 = (0);
var i__27332 = (0);
while(true){
if((i__27332 < count__27331)){
var info = chunk__27330.cljs$core$IIndexed$_nth$arity$2(null,i__27332);
var segv_28350 = info__GT_segv(info,source_idx,line,col);
var gline_28351 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28352 = cljs.core.count(cljs.core.deref(lines));
if((gline_28351 > (lc_28352 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27329,chunk__27330,count__27331,i__27332,segv_28350,gline_28351,lc_28352,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28351 - (lc_28352 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28350], null));
});})(seq__27329,chunk__27330,count__27331,i__27332,segv_28350,gline_28351,lc_28352,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27329,chunk__27330,count__27331,i__27332,segv_28350,gline_28351,lc_28352,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28351], null),cljs.core.conj,segv_28350);
});})(seq__27329,chunk__27330,count__27331,i__27332,segv_28350,gline_28351,lc_28352,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28357 = seq__27329;
var G__28358 = chunk__27330;
var G__28359 = count__27331;
var G__28360 = (i__27332 + (1));
seq__27329 = G__28357;
chunk__27330 = G__28358;
count__27331 = G__28359;
i__27332 = G__28360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27329);
if(temp__5735__auto__){
var seq__27329__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27329__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27329__$1);
var G__28361 = cljs.core.chunk_rest(seq__27329__$1);
var G__28362 = c__4609__auto__;
var G__28363 = cljs.core.count(c__4609__auto__);
var G__28364 = (0);
seq__27329 = G__28361;
chunk__27330 = G__28362;
count__27331 = G__28363;
i__27332 = G__28364;
continue;
} else {
var info = cljs.core.first(seq__27329__$1);
var segv_28365 = info__GT_segv(info,source_idx,line,col);
var gline_28366 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28367 = cljs.core.count(cljs.core.deref(lines));
if((gline_28366 > (lc_28367 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27329,chunk__27330,count__27331,i__27332,segv_28365,gline_28366,lc_28367,info,seq__27329__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28366 - (lc_28367 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28365], null));
});})(seq__27329,chunk__27330,count__27331,i__27332,segv_28365,gline_28366,lc_28367,info,seq__27329__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__27329,chunk__27330,count__27331,i__27332,segv_28365,gline_28366,lc_28367,info,seq__27329__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28366], null),cljs.core.conj,segv_28365);
});})(seq__27329,chunk__27330,count__27331,i__27332,segv_28365,gline_28366,lc_28367,info,seq__27329__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28368 = cljs.core.next(seq__27329__$1);
var G__28369 = null;
var G__28370 = (0);
var G__28371 = (0);
seq__27329 = G__28368;
chunk__27330 = G__28369;
count__27331 = G__28370;
i__27332 = G__28371;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__27338_28372 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27339_28373 = null;
var count__27340_28374 = (0);
var i__27341_28375 = (0);
while(true){
if((i__27341_28375 < count__27340_28374)){
var vec__27630_28376 = chunk__27339_28373.cljs$core$IIndexed$_nth$arity$2(null,i__27341_28375);
var source_idx_28377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630_28376,(0),null);
var vec__27633_28378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630_28376,(1),null);
var __28379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633_28378,(0),null);
var lines_28380__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633_28378,(1),null);
var seq__27636_28381 = cljs.core.seq(lines_28380__$1);
var chunk__27637_28382 = null;
var count__27638_28383 = (0);
var i__27639_28384 = (0);
while(true){
if((i__27639_28384 < count__27638_28383)){
var vec__27691_28385 = chunk__27637_28382.cljs$core$IIndexed$_nth$arity$2(null,i__27639_28384);
var line_28386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27691_28385,(0),null);
var cols_28387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27691_28385,(1),null);
var seq__27694_28390 = cljs.core.seq(cols_28387);
var chunk__27695_28391 = null;
var count__27696_28392 = (0);
var i__27697_28393 = (0);
while(true){
if((i__27697_28393 < count__27696_28392)){
var vec__27709_28396 = chunk__27695_28391.cljs$core$IIndexed$_nth$arity$2(null,i__27697_28393);
var col_28397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709_28396,(0),null);
var infos_28398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709_28396,(1),null);
encode_cols(infos_28398,source_idx_28377,line_28386,col_28397);


var G__28400 = seq__27694_28390;
var G__28401 = chunk__27695_28391;
var G__28402 = count__27696_28392;
var G__28403 = (i__27697_28393 + (1));
seq__27694_28390 = G__28400;
chunk__27695_28391 = G__28401;
count__27696_28392 = G__28402;
i__27697_28393 = G__28403;
continue;
} else {
var temp__5735__auto___28404 = cljs.core.seq(seq__27694_28390);
if(temp__5735__auto___28404){
var seq__27694_28405__$1 = temp__5735__auto___28404;
if(cljs.core.chunked_seq_QMARK_(seq__27694_28405__$1)){
var c__4609__auto___28406 = cljs.core.chunk_first(seq__27694_28405__$1);
var G__28407 = cljs.core.chunk_rest(seq__27694_28405__$1);
var G__28408 = c__4609__auto___28406;
var G__28409 = cljs.core.count(c__4609__auto___28406);
var G__28410 = (0);
seq__27694_28390 = G__28407;
chunk__27695_28391 = G__28408;
count__27696_28392 = G__28409;
i__27697_28393 = G__28410;
continue;
} else {
var vec__27712_28411 = cljs.core.first(seq__27694_28405__$1);
var col_28412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712_28411,(0),null);
var infos_28413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712_28411,(1),null);
encode_cols(infos_28413,source_idx_28377,line_28386,col_28412);


var G__28414 = cljs.core.next(seq__27694_28405__$1);
var G__28415 = null;
var G__28416 = (0);
var G__28417 = (0);
seq__27694_28390 = G__28414;
chunk__27695_28391 = G__28415;
count__27696_28392 = G__28416;
i__27697_28393 = G__28417;
continue;
}
} else {
}
}
break;
}


var G__28418 = seq__27636_28381;
var G__28419 = chunk__27637_28382;
var G__28420 = count__27638_28383;
var G__28421 = (i__27639_28384 + (1));
seq__27636_28381 = G__28418;
chunk__27637_28382 = G__28419;
count__27638_28383 = G__28420;
i__27639_28384 = G__28421;
continue;
} else {
var temp__5735__auto___28422 = cljs.core.seq(seq__27636_28381);
if(temp__5735__auto___28422){
var seq__27636_28423__$1 = temp__5735__auto___28422;
if(cljs.core.chunked_seq_QMARK_(seq__27636_28423__$1)){
var c__4609__auto___28424 = cljs.core.chunk_first(seq__27636_28423__$1);
var G__28425 = cljs.core.chunk_rest(seq__27636_28423__$1);
var G__28426 = c__4609__auto___28424;
var G__28427 = cljs.core.count(c__4609__auto___28424);
var G__28428 = (0);
seq__27636_28381 = G__28425;
chunk__27637_28382 = G__28426;
count__27638_28383 = G__28427;
i__27639_28384 = G__28428;
continue;
} else {
var vec__27715_28429 = cljs.core.first(seq__27636_28423__$1);
var line_28430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715_28429,(0),null);
var cols_28431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715_28429,(1),null);
var seq__27718_28432 = cljs.core.seq(cols_28431);
var chunk__27719_28433 = null;
var count__27720_28434 = (0);
var i__27721_28435 = (0);
while(true){
if((i__27721_28435 < count__27720_28434)){
var vec__27729_28436 = chunk__27719_28433.cljs$core$IIndexed$_nth$arity$2(null,i__27721_28435);
var col_28437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27729_28436,(0),null);
var infos_28438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27729_28436,(1),null);
encode_cols(infos_28438,source_idx_28377,line_28430,col_28437);


var G__28439 = seq__27718_28432;
var G__28440 = chunk__27719_28433;
var G__28441 = count__27720_28434;
var G__28442 = (i__27721_28435 + (1));
seq__27718_28432 = G__28439;
chunk__27719_28433 = G__28440;
count__27720_28434 = G__28441;
i__27721_28435 = G__28442;
continue;
} else {
var temp__5735__auto___28445__$1 = cljs.core.seq(seq__27718_28432);
if(temp__5735__auto___28445__$1){
var seq__27718_28446__$1 = temp__5735__auto___28445__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27718_28446__$1)){
var c__4609__auto___28447 = cljs.core.chunk_first(seq__27718_28446__$1);
var G__28448 = cljs.core.chunk_rest(seq__27718_28446__$1);
var G__28449 = c__4609__auto___28447;
var G__28450 = cljs.core.count(c__4609__auto___28447);
var G__28451 = (0);
seq__27718_28432 = G__28448;
chunk__27719_28433 = G__28449;
count__27720_28434 = G__28450;
i__27721_28435 = G__28451;
continue;
} else {
var vec__27732_28454 = cljs.core.first(seq__27718_28446__$1);
var col_28455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27732_28454,(0),null);
var infos_28456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27732_28454,(1),null);
encode_cols(infos_28456,source_idx_28377,line_28430,col_28455);


var G__28459 = cljs.core.next(seq__27718_28446__$1);
var G__28460 = null;
var G__28461 = (0);
var G__28462 = (0);
seq__27718_28432 = G__28459;
chunk__27719_28433 = G__28460;
count__27720_28434 = G__28461;
i__27721_28435 = G__28462;
continue;
}
} else {
}
}
break;
}


var G__28463 = cljs.core.next(seq__27636_28423__$1);
var G__28464 = null;
var G__28465 = (0);
var G__28466 = (0);
seq__27636_28381 = G__28463;
chunk__27637_28382 = G__28464;
count__27638_28383 = G__28465;
i__27639_28384 = G__28466;
continue;
}
} else {
}
}
break;
}


var G__28469 = seq__27338_28372;
var G__28470 = chunk__27339_28373;
var G__28471 = count__27340_28374;
var G__28472 = (i__27341_28375 + (1));
seq__27338_28372 = G__28469;
chunk__27339_28373 = G__28470;
count__27340_28374 = G__28471;
i__27341_28375 = G__28472;
continue;
} else {
var temp__5735__auto___28475 = cljs.core.seq(seq__27338_28372);
if(temp__5735__auto___28475){
var seq__27338_28476__$1 = temp__5735__auto___28475;
if(cljs.core.chunked_seq_QMARK_(seq__27338_28476__$1)){
var c__4609__auto___28477 = cljs.core.chunk_first(seq__27338_28476__$1);
var G__28478 = cljs.core.chunk_rest(seq__27338_28476__$1);
var G__28479 = c__4609__auto___28477;
var G__28480 = cljs.core.count(c__4609__auto___28477);
var G__28481 = (0);
seq__27338_28372 = G__28478;
chunk__27339_28373 = G__28479;
count__27340_28374 = G__28480;
i__27341_28375 = G__28481;
continue;
} else {
var vec__27748_28482 = cljs.core.first(seq__27338_28476__$1);
var source_idx_28483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748_28482,(0),null);
var vec__27751_28484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748_28482,(1),null);
var __28485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751_28484,(0),null);
var lines_28486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751_28484,(1),null);
var seq__27756_28487 = cljs.core.seq(lines_28486__$1);
var chunk__27757_28488 = null;
var count__27758_28489 = (0);
var i__27759_28490 = (0);
while(true){
if((i__27759_28490 < count__27758_28489)){
var vec__27821_28491 = chunk__27757_28488.cljs$core$IIndexed$_nth$arity$2(null,i__27759_28490);
var line_28492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27821_28491,(0),null);
var cols_28493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27821_28491,(1),null);
var seq__27824_28494 = cljs.core.seq(cols_28493);
var chunk__27825_28495 = null;
var count__27826_28496 = (0);
var i__27827_28497 = (0);
while(true){
if((i__27827_28497 < count__27826_28496)){
var vec__27844_28498 = chunk__27825_28495.cljs$core$IIndexed$_nth$arity$2(null,i__27827_28497);
var col_28499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844_28498,(0),null);
var infos_28500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844_28498,(1),null);
encode_cols(infos_28500,source_idx_28483,line_28492,col_28499);


var G__28501 = seq__27824_28494;
var G__28502 = chunk__27825_28495;
var G__28503 = count__27826_28496;
var G__28504 = (i__27827_28497 + (1));
seq__27824_28494 = G__28501;
chunk__27825_28495 = G__28502;
count__27826_28496 = G__28503;
i__27827_28497 = G__28504;
continue;
} else {
var temp__5735__auto___28505__$1 = cljs.core.seq(seq__27824_28494);
if(temp__5735__auto___28505__$1){
var seq__27824_28506__$1 = temp__5735__auto___28505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27824_28506__$1)){
var c__4609__auto___28507 = cljs.core.chunk_first(seq__27824_28506__$1);
var G__28508 = cljs.core.chunk_rest(seq__27824_28506__$1);
var G__28509 = c__4609__auto___28507;
var G__28510 = cljs.core.count(c__4609__auto___28507);
var G__28511 = (0);
seq__27824_28494 = G__28508;
chunk__27825_28495 = G__28509;
count__27826_28496 = G__28510;
i__27827_28497 = G__28511;
continue;
} else {
var vec__27858_28514 = cljs.core.first(seq__27824_28506__$1);
var col_28515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858_28514,(0),null);
var infos_28516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858_28514,(1),null);
encode_cols(infos_28516,source_idx_28483,line_28492,col_28515);


var G__28519 = cljs.core.next(seq__27824_28506__$1);
var G__28520 = null;
var G__28521 = (0);
var G__28522 = (0);
seq__27824_28494 = G__28519;
chunk__27825_28495 = G__28520;
count__27826_28496 = G__28521;
i__27827_28497 = G__28522;
continue;
}
} else {
}
}
break;
}


var G__28523 = seq__27756_28487;
var G__28524 = chunk__27757_28488;
var G__28525 = count__27758_28489;
var G__28526 = (i__27759_28490 + (1));
seq__27756_28487 = G__28523;
chunk__27757_28488 = G__28524;
count__27758_28489 = G__28525;
i__27759_28490 = G__28526;
continue;
} else {
var temp__5735__auto___28527__$1 = cljs.core.seq(seq__27756_28487);
if(temp__5735__auto___28527__$1){
var seq__27756_28528__$1 = temp__5735__auto___28527__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27756_28528__$1)){
var c__4609__auto___28529 = cljs.core.chunk_first(seq__27756_28528__$1);
var G__28530 = cljs.core.chunk_rest(seq__27756_28528__$1);
var G__28531 = c__4609__auto___28529;
var G__28532 = cljs.core.count(c__4609__auto___28529);
var G__28533 = (0);
seq__27756_28487 = G__28530;
chunk__27757_28488 = G__28531;
count__27758_28489 = G__28532;
i__27759_28490 = G__28533;
continue;
} else {
var vec__27861_28534 = cljs.core.first(seq__27756_28528__$1);
var line_28535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861_28534,(0),null);
var cols_28536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861_28534,(1),null);
var seq__27864_28537 = cljs.core.seq(cols_28536);
var chunk__27866_28538 = null;
var count__27867_28539 = (0);
var i__27868_28540 = (0);
while(true){
if((i__27868_28540 < count__27867_28539)){
var vec__27897_28541 = chunk__27866_28538.cljs$core$IIndexed$_nth$arity$2(null,i__27868_28540);
var col_28542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897_28541,(0),null);
var infos_28543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27897_28541,(1),null);
encode_cols(infos_28543,source_idx_28483,line_28535,col_28542);


var G__28547 = seq__27864_28537;
var G__28548 = chunk__27866_28538;
var G__28549 = count__27867_28539;
var G__28550 = (i__27868_28540 + (1));
seq__27864_28537 = G__28547;
chunk__27866_28538 = G__28548;
count__27867_28539 = G__28549;
i__27868_28540 = G__28550;
continue;
} else {
var temp__5735__auto___28551__$2 = cljs.core.seq(seq__27864_28537);
if(temp__5735__auto___28551__$2){
var seq__27864_28552__$1 = temp__5735__auto___28551__$2;
if(cljs.core.chunked_seq_QMARK_(seq__27864_28552__$1)){
var c__4609__auto___28553 = cljs.core.chunk_first(seq__27864_28552__$1);
var G__28554 = cljs.core.chunk_rest(seq__27864_28552__$1);
var G__28555 = c__4609__auto___28553;
var G__28556 = cljs.core.count(c__4609__auto___28553);
var G__28557 = (0);
seq__27864_28537 = G__28554;
chunk__27866_28538 = G__28555;
count__27867_28539 = G__28556;
i__27868_28540 = G__28557;
continue;
} else {
var vec__27904_28559 = cljs.core.first(seq__27864_28552__$1);
var col_28560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904_28559,(0),null);
var infos_28561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904_28559,(1),null);
encode_cols(infos_28561,source_idx_28483,line_28535,col_28560);


var G__28562 = cljs.core.next(seq__27864_28552__$1);
var G__28563 = null;
var G__28564 = (0);
var G__28565 = (0);
seq__27864_28537 = G__28562;
chunk__27866_28538 = G__28563;
count__27867_28539 = G__28564;
i__27868_28540 = G__28565;
continue;
}
} else {
}
}
break;
}


var G__28566 = cljs.core.next(seq__27756_28528__$1);
var G__28567 = null;
var G__28568 = (0);
var G__28569 = (0);
seq__27756_28487 = G__28566;
chunk__27757_28488 = G__28567;
count__27758_28489 = G__28568;
i__27759_28490 = G__28569;
continue;
}
} else {
}
}
break;
}


var G__28570 = cljs.core.next(seq__27338_28476__$1);
var G__28571 = null;
var G__28572 = (0);
var G__28573 = (0);
seq__27338_28372 = G__28570;
chunk__27339_28373 = G__28571;
count__27340_28374 = G__28572;
i__27341_28375 = G__28573;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27915 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__27317_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27317_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__27318_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27318_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27319_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__27319_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27934 = G__27915;
goog.object.set(G__27934,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27934;
} else {
return G__27915;
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
var vec__27935 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__27940 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
var G__28590 = cljs.core.next(col_map_seq);
var G__28591 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27940,col,infos,vec__27935,line,col_map){
return (function (v,p__27944){
var map__27945 = p__27944;
var map__27945__$1 = (((((!((map__27945 == null))))?(((((map__27945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27945):map__27945);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27945__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27945__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27940,col,infos,vec__27935,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28590;
new_cols = G__28591;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28596 = cljs.core.next(line_map_seq);
var G__28597 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__28596;
new_lines = G__28597;
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
var seq__27951_28598 = cljs.core.seq(reverse_map);
var chunk__27952_28599 = null;
var count__27953_28600 = (0);
var i__27954_28601 = (0);
while(true){
if((i__27954_28601 < count__27953_28600)){
var vec__28136_28602 = chunk__27952_28599.cljs$core$IIndexed$_nth$arity$2(null,i__27954_28601);
var line_28603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28136_28602,(0),null);
var columns_28604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28136_28602,(1),null);
var seq__28139_28607 = cljs.core.seq(columns_28604);
var chunk__28140_28608 = null;
var count__28141_28609 = (0);
var i__28142_28610 = (0);
while(true){
if((i__28142_28610 < count__28141_28609)){
var vec__28185_28611 = chunk__28140_28608.cljs$core$IIndexed$_nth$arity$2(null,i__28142_28610);
var column_28612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28185_28611,(0),null);
var column_info_28613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28185_28611,(1),null);
var seq__28188_28614 = cljs.core.seq(column_info_28613);
var chunk__28189_28615 = null;
var count__28190_28616 = (0);
var i__28191_28617 = (0);
while(true){
if((i__28191_28617 < count__28190_28616)){
var map__28196_28618 = chunk__28189_28615.cljs$core$IIndexed$_nth$arity$2(null,i__28191_28617);
var map__28196_28619__$1 = (((((!((map__28196_28618 == null))))?(((((map__28196_28618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28196_28618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28196_28618):map__28196_28618);
var gline_28620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28196_28619__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28196_28619__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28196_28619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28620], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28188_28614,chunk__28189_28615,count__28190_28616,i__28191_28617,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28196_28618,map__28196_28619__$1,gline_28620,gcol_28621,name_28622,vec__28185_28611,column_28612,column_info_28613,vec__28136_28602,line_28603,columns_28604,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28621], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28603,new cljs.core.Keyword(null,"col","col",-1959363084),column_28612,new cljs.core.Keyword(null,"name","name",1843675177),name_28622], null));
});})(seq__28188_28614,chunk__28189_28615,count__28190_28616,i__28191_28617,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28196_28618,map__28196_28619__$1,gline_28620,gcol_28621,name_28622,vec__28185_28611,column_28612,column_info_28613,vec__28136_28602,line_28603,columns_28604,inverted))
,cljs.core.sorted_map()));


var G__28623 = seq__28188_28614;
var G__28624 = chunk__28189_28615;
var G__28625 = count__28190_28616;
var G__28626 = (i__28191_28617 + (1));
seq__28188_28614 = G__28623;
chunk__28189_28615 = G__28624;
count__28190_28616 = G__28625;
i__28191_28617 = G__28626;
continue;
} else {
var temp__5735__auto___28627 = cljs.core.seq(seq__28188_28614);
if(temp__5735__auto___28627){
var seq__28188_28628__$1 = temp__5735__auto___28627;
if(cljs.core.chunked_seq_QMARK_(seq__28188_28628__$1)){
var c__4609__auto___28629 = cljs.core.chunk_first(seq__28188_28628__$1);
var G__28630 = cljs.core.chunk_rest(seq__28188_28628__$1);
var G__28631 = c__4609__auto___28629;
var G__28632 = cljs.core.count(c__4609__auto___28629);
var G__28633 = (0);
seq__28188_28614 = G__28630;
chunk__28189_28615 = G__28631;
count__28190_28616 = G__28632;
i__28191_28617 = G__28633;
continue;
} else {
var map__28198_28635 = cljs.core.first(seq__28188_28628__$1);
var map__28198_28636__$1 = (((((!((map__28198_28635 == null))))?(((((map__28198_28635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28198_28635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28198_28635):map__28198_28635);
var gline_28637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28198_28636__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28198_28636__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28198_28636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28637], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28188_28614,chunk__28189_28615,count__28190_28616,i__28191_28617,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28198_28635,map__28198_28636__$1,gline_28637,gcol_28638,name_28639,seq__28188_28628__$1,temp__5735__auto___28627,vec__28185_28611,column_28612,column_info_28613,vec__28136_28602,line_28603,columns_28604,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28638], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28603,new cljs.core.Keyword(null,"col","col",-1959363084),column_28612,new cljs.core.Keyword(null,"name","name",1843675177),name_28639], null));
});})(seq__28188_28614,chunk__28189_28615,count__28190_28616,i__28191_28617,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28198_28635,map__28198_28636__$1,gline_28637,gcol_28638,name_28639,seq__28188_28628__$1,temp__5735__auto___28627,vec__28185_28611,column_28612,column_info_28613,vec__28136_28602,line_28603,columns_28604,inverted))
,cljs.core.sorted_map()));


var G__28651 = cljs.core.next(seq__28188_28628__$1);
var G__28652 = null;
var G__28653 = (0);
var G__28654 = (0);
seq__28188_28614 = G__28651;
chunk__28189_28615 = G__28652;
count__28190_28616 = G__28653;
i__28191_28617 = G__28654;
continue;
}
} else {
}
}
break;
}


var G__28655 = seq__28139_28607;
var G__28656 = chunk__28140_28608;
var G__28657 = count__28141_28609;
var G__28658 = (i__28142_28610 + (1));
seq__28139_28607 = G__28655;
chunk__28140_28608 = G__28656;
count__28141_28609 = G__28657;
i__28142_28610 = G__28658;
continue;
} else {
var temp__5735__auto___28659 = cljs.core.seq(seq__28139_28607);
if(temp__5735__auto___28659){
var seq__28139_28660__$1 = temp__5735__auto___28659;
if(cljs.core.chunked_seq_QMARK_(seq__28139_28660__$1)){
var c__4609__auto___28661 = cljs.core.chunk_first(seq__28139_28660__$1);
var G__28662 = cljs.core.chunk_rest(seq__28139_28660__$1);
var G__28663 = c__4609__auto___28661;
var G__28664 = cljs.core.count(c__4609__auto___28661);
var G__28665 = (0);
seq__28139_28607 = G__28662;
chunk__28140_28608 = G__28663;
count__28141_28609 = G__28664;
i__28142_28610 = G__28665;
continue;
} else {
var vec__28200_28666 = cljs.core.first(seq__28139_28660__$1);
var column_28667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200_28666,(0),null);
var column_info_28668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200_28666,(1),null);
var seq__28203_28669 = cljs.core.seq(column_info_28668);
var chunk__28204_28670 = null;
var count__28205_28671 = (0);
var i__28206_28672 = (0);
while(true){
if((i__28206_28672 < count__28205_28671)){
var map__28212_28673 = chunk__28204_28670.cljs$core$IIndexed$_nth$arity$2(null,i__28206_28672);
var map__28212_28674__$1 = (((((!((map__28212_28673 == null))))?(((((map__28212_28673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28212_28673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28212_28673):map__28212_28673);
var gline_28675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28212_28674__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28212_28674__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28212_28674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28675], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28203_28669,chunk__28204_28670,count__28205_28671,i__28206_28672,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28212_28673,map__28212_28674__$1,gline_28675,gcol_28676,name_28677,vec__28200_28666,column_28667,column_info_28668,seq__28139_28660__$1,temp__5735__auto___28659,vec__28136_28602,line_28603,columns_28604,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28676], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28603,new cljs.core.Keyword(null,"col","col",-1959363084),column_28667,new cljs.core.Keyword(null,"name","name",1843675177),name_28677], null));
});})(seq__28203_28669,chunk__28204_28670,count__28205_28671,i__28206_28672,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28212_28673,map__28212_28674__$1,gline_28675,gcol_28676,name_28677,vec__28200_28666,column_28667,column_info_28668,seq__28139_28660__$1,temp__5735__auto___28659,vec__28136_28602,line_28603,columns_28604,inverted))
,cljs.core.sorted_map()));


var G__28683 = seq__28203_28669;
var G__28684 = chunk__28204_28670;
var G__28685 = count__28205_28671;
var G__28686 = (i__28206_28672 + (1));
seq__28203_28669 = G__28683;
chunk__28204_28670 = G__28684;
count__28205_28671 = G__28685;
i__28206_28672 = G__28686;
continue;
} else {
var temp__5735__auto___28690__$1 = cljs.core.seq(seq__28203_28669);
if(temp__5735__auto___28690__$1){
var seq__28203_28691__$1 = temp__5735__auto___28690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28203_28691__$1)){
var c__4609__auto___28693 = cljs.core.chunk_first(seq__28203_28691__$1);
var G__28694 = cljs.core.chunk_rest(seq__28203_28691__$1);
var G__28695 = c__4609__auto___28693;
var G__28696 = cljs.core.count(c__4609__auto___28693);
var G__28697 = (0);
seq__28203_28669 = G__28694;
chunk__28204_28670 = G__28695;
count__28205_28671 = G__28696;
i__28206_28672 = G__28697;
continue;
} else {
var map__28214_28698 = cljs.core.first(seq__28203_28691__$1);
var map__28214_28699__$1 = (((((!((map__28214_28698 == null))))?(((((map__28214_28698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28214_28698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28214_28698):map__28214_28698);
var gline_28700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214_28699__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214_28699__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214_28699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28700], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28203_28669,chunk__28204_28670,count__28205_28671,i__28206_28672,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28214_28698,map__28214_28699__$1,gline_28700,gcol_28701,name_28702,seq__28203_28691__$1,temp__5735__auto___28690__$1,vec__28200_28666,column_28667,column_info_28668,seq__28139_28660__$1,temp__5735__auto___28659,vec__28136_28602,line_28603,columns_28604,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28701], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28603,new cljs.core.Keyword(null,"col","col",-1959363084),column_28667,new cljs.core.Keyword(null,"name","name",1843675177),name_28702], null));
});})(seq__28203_28669,chunk__28204_28670,count__28205_28671,i__28206_28672,seq__28139_28607,chunk__28140_28608,count__28141_28609,i__28142_28610,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28214_28698,map__28214_28699__$1,gline_28700,gcol_28701,name_28702,seq__28203_28691__$1,temp__5735__auto___28690__$1,vec__28200_28666,column_28667,column_info_28668,seq__28139_28660__$1,temp__5735__auto___28659,vec__28136_28602,line_28603,columns_28604,inverted))
,cljs.core.sorted_map()));


var G__28707 = cljs.core.next(seq__28203_28691__$1);
var G__28708 = null;
var G__28709 = (0);
var G__28710 = (0);
seq__28203_28669 = G__28707;
chunk__28204_28670 = G__28708;
count__28205_28671 = G__28709;
i__28206_28672 = G__28710;
continue;
}
} else {
}
}
break;
}


var G__28711 = cljs.core.next(seq__28139_28660__$1);
var G__28712 = null;
var G__28713 = (0);
var G__28714 = (0);
seq__28139_28607 = G__28711;
chunk__28140_28608 = G__28712;
count__28141_28609 = G__28713;
i__28142_28610 = G__28714;
continue;
}
} else {
}
}
break;
}


var G__28715 = seq__27951_28598;
var G__28716 = chunk__27952_28599;
var G__28717 = count__27953_28600;
var G__28718 = (i__27954_28601 + (1));
seq__27951_28598 = G__28715;
chunk__27952_28599 = G__28716;
count__27953_28600 = G__28717;
i__27954_28601 = G__28718;
continue;
} else {
var temp__5735__auto___28719 = cljs.core.seq(seq__27951_28598);
if(temp__5735__auto___28719){
var seq__27951_28720__$1 = temp__5735__auto___28719;
if(cljs.core.chunked_seq_QMARK_(seq__27951_28720__$1)){
var c__4609__auto___28721 = cljs.core.chunk_first(seq__27951_28720__$1);
var G__28722 = cljs.core.chunk_rest(seq__27951_28720__$1);
var G__28723 = c__4609__auto___28721;
var G__28724 = cljs.core.count(c__4609__auto___28721);
var G__28725 = (0);
seq__27951_28598 = G__28722;
chunk__27952_28599 = G__28723;
count__27953_28600 = G__28724;
i__27954_28601 = G__28725;
continue;
} else {
var vec__28216_28726 = cljs.core.first(seq__27951_28720__$1);
var line_28727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216_28726,(0),null);
var columns_28728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216_28726,(1),null);
var seq__28219_28729 = cljs.core.seq(columns_28728);
var chunk__28220_28730 = null;
var count__28221_28731 = (0);
var i__28222_28732 = (0);
while(true){
if((i__28222_28732 < count__28221_28731)){
var vec__28265_28733 = chunk__28220_28730.cljs$core$IIndexed$_nth$arity$2(null,i__28222_28732);
var column_28734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265_28733,(0),null);
var column_info_28735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265_28733,(1),null);
var seq__28268_28737 = cljs.core.seq(column_info_28735);
var chunk__28269_28738 = null;
var count__28270_28739 = (0);
var i__28271_28740 = (0);
while(true){
if((i__28271_28740 < count__28270_28739)){
var map__28276_28741 = chunk__28269_28738.cljs$core$IIndexed$_nth$arity$2(null,i__28271_28740);
var map__28276_28742__$1 = (((((!((map__28276_28741 == null))))?(((((map__28276_28741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28276_28741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28276_28741):map__28276_28741);
var gline_28743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28276_28742__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28276_28742__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28276_28742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28743], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28268_28737,chunk__28269_28738,count__28270_28739,i__28271_28740,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28276_28741,map__28276_28742__$1,gline_28743,gcol_28744,name_28745,vec__28265_28733,column_28734,column_info_28735,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28744], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28727,new cljs.core.Keyword(null,"col","col",-1959363084),column_28734,new cljs.core.Keyword(null,"name","name",1843675177),name_28745], null));
});})(seq__28268_28737,chunk__28269_28738,count__28270_28739,i__28271_28740,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28276_28741,map__28276_28742__$1,gline_28743,gcol_28744,name_28745,vec__28265_28733,column_28734,column_info_28735,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted))
,cljs.core.sorted_map()));


var G__28750 = seq__28268_28737;
var G__28751 = chunk__28269_28738;
var G__28752 = count__28270_28739;
var G__28753 = (i__28271_28740 + (1));
seq__28268_28737 = G__28750;
chunk__28269_28738 = G__28751;
count__28270_28739 = G__28752;
i__28271_28740 = G__28753;
continue;
} else {
var temp__5735__auto___28754__$1 = cljs.core.seq(seq__28268_28737);
if(temp__5735__auto___28754__$1){
var seq__28268_28755__$1 = temp__5735__auto___28754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28268_28755__$1)){
var c__4609__auto___28756 = cljs.core.chunk_first(seq__28268_28755__$1);
var G__28757 = cljs.core.chunk_rest(seq__28268_28755__$1);
var G__28758 = c__4609__auto___28756;
var G__28759 = cljs.core.count(c__4609__auto___28756);
var G__28760 = (0);
seq__28268_28737 = G__28757;
chunk__28269_28738 = G__28758;
count__28270_28739 = G__28759;
i__28271_28740 = G__28760;
continue;
} else {
var map__28278_28764 = cljs.core.first(seq__28268_28755__$1);
var map__28278_28765__$1 = (((((!((map__28278_28764 == null))))?(((((map__28278_28764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28278_28764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28278_28764):map__28278_28764);
var gline_28766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278_28765__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278_28765__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278_28765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28766], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28268_28737,chunk__28269_28738,count__28270_28739,i__28271_28740,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28278_28764,map__28278_28765__$1,gline_28766,gcol_28767,name_28768,seq__28268_28755__$1,temp__5735__auto___28754__$1,vec__28265_28733,column_28734,column_info_28735,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28767], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28727,new cljs.core.Keyword(null,"col","col",-1959363084),column_28734,new cljs.core.Keyword(null,"name","name",1843675177),name_28768], null));
});})(seq__28268_28737,chunk__28269_28738,count__28270_28739,i__28271_28740,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28278_28764,map__28278_28765__$1,gline_28766,gcol_28767,name_28768,seq__28268_28755__$1,temp__5735__auto___28754__$1,vec__28265_28733,column_28734,column_info_28735,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted))
,cljs.core.sorted_map()));


var G__28773 = cljs.core.next(seq__28268_28755__$1);
var G__28774 = null;
var G__28775 = (0);
var G__28776 = (0);
seq__28268_28737 = G__28773;
chunk__28269_28738 = G__28774;
count__28270_28739 = G__28775;
i__28271_28740 = G__28776;
continue;
}
} else {
}
}
break;
}


var G__28777 = seq__28219_28729;
var G__28778 = chunk__28220_28730;
var G__28779 = count__28221_28731;
var G__28780 = (i__28222_28732 + (1));
seq__28219_28729 = G__28777;
chunk__28220_28730 = G__28778;
count__28221_28731 = G__28779;
i__28222_28732 = G__28780;
continue;
} else {
var temp__5735__auto___28781__$1 = cljs.core.seq(seq__28219_28729);
if(temp__5735__auto___28781__$1){
var seq__28219_28782__$1 = temp__5735__auto___28781__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28219_28782__$1)){
var c__4609__auto___28783 = cljs.core.chunk_first(seq__28219_28782__$1);
var G__28784 = cljs.core.chunk_rest(seq__28219_28782__$1);
var G__28785 = c__4609__auto___28783;
var G__28786 = cljs.core.count(c__4609__auto___28783);
var G__28787 = (0);
seq__28219_28729 = G__28784;
chunk__28220_28730 = G__28785;
count__28221_28731 = G__28786;
i__28222_28732 = G__28787;
continue;
} else {
var vec__28280_28788 = cljs.core.first(seq__28219_28782__$1);
var column_28789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280_28788,(0),null);
var column_info_28790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280_28788,(1),null);
var seq__28283_28791 = cljs.core.seq(column_info_28790);
var chunk__28284_28792 = null;
var count__28285_28793 = (0);
var i__28286_28794 = (0);
while(true){
if((i__28286_28794 < count__28285_28793)){
var map__28291_28795 = chunk__28284_28792.cljs$core$IIndexed$_nth$arity$2(null,i__28286_28794);
var map__28291_28796__$1 = (((((!((map__28291_28795 == null))))?(((((map__28291_28795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28291_28795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28291_28795):map__28291_28795);
var gline_28797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291_28796__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291_28796__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291_28796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28797], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28283_28791,chunk__28284_28792,count__28285_28793,i__28286_28794,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28291_28795,map__28291_28796__$1,gline_28797,gcol_28798,name_28799,vec__28280_28788,column_28789,column_info_28790,seq__28219_28782__$1,temp__5735__auto___28781__$1,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28798], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28727,new cljs.core.Keyword(null,"col","col",-1959363084),column_28789,new cljs.core.Keyword(null,"name","name",1843675177),name_28799], null));
});})(seq__28283_28791,chunk__28284_28792,count__28285_28793,i__28286_28794,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28291_28795,map__28291_28796__$1,gline_28797,gcol_28798,name_28799,vec__28280_28788,column_28789,column_info_28790,seq__28219_28782__$1,temp__5735__auto___28781__$1,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted))
,cljs.core.sorted_map()));


var G__28808 = seq__28283_28791;
var G__28809 = chunk__28284_28792;
var G__28810 = count__28285_28793;
var G__28811 = (i__28286_28794 + (1));
seq__28283_28791 = G__28808;
chunk__28284_28792 = G__28809;
count__28285_28793 = G__28810;
i__28286_28794 = G__28811;
continue;
} else {
var temp__5735__auto___28812__$2 = cljs.core.seq(seq__28283_28791);
if(temp__5735__auto___28812__$2){
var seq__28283_28813__$1 = temp__5735__auto___28812__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28283_28813__$1)){
var c__4609__auto___28814 = cljs.core.chunk_first(seq__28283_28813__$1);
var G__28815 = cljs.core.chunk_rest(seq__28283_28813__$1);
var G__28816 = c__4609__auto___28814;
var G__28817 = cljs.core.count(c__4609__auto___28814);
var G__28818 = (0);
seq__28283_28791 = G__28815;
chunk__28284_28792 = G__28816;
count__28285_28793 = G__28817;
i__28286_28794 = G__28818;
continue;
} else {
var map__28293_28819 = cljs.core.first(seq__28283_28813__$1);
var map__28293_28820__$1 = (((((!((map__28293_28819 == null))))?(((((map__28293_28819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28293_28819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28293_28819):map__28293_28819);
var gline_28821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28293_28820__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28293_28820__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28293_28820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28283_28791,chunk__28284_28792,count__28285_28793,i__28286_28794,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28293_28819,map__28293_28820__$1,gline_28821,gcol_28822,name_28823,seq__28283_28813__$1,temp__5735__auto___28812__$2,vec__28280_28788,column_28789,column_info_28790,seq__28219_28782__$1,temp__5735__auto___28781__$1,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28822], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28727,new cljs.core.Keyword(null,"col","col",-1959363084),column_28789,new cljs.core.Keyword(null,"name","name",1843675177),name_28823], null));
});})(seq__28283_28791,chunk__28284_28792,count__28285_28793,i__28286_28794,seq__28219_28729,chunk__28220_28730,count__28221_28731,i__28222_28732,seq__27951_28598,chunk__27952_28599,count__27953_28600,i__27954_28601,map__28293_28819,map__28293_28820__$1,gline_28821,gcol_28822,name_28823,seq__28283_28813__$1,temp__5735__auto___28812__$2,vec__28280_28788,column_28789,column_info_28790,seq__28219_28782__$1,temp__5735__auto___28781__$1,vec__28216_28726,line_28727,columns_28728,seq__27951_28720__$1,temp__5735__auto___28719,inverted))
,cljs.core.sorted_map()));


var G__28824 = cljs.core.next(seq__28283_28813__$1);
var G__28825 = null;
var G__28826 = (0);
var G__28827 = (0);
seq__28283_28791 = G__28824;
chunk__28284_28792 = G__28825;
count__28285_28793 = G__28826;
i__28286_28794 = G__28827;
continue;
}
} else {
}
}
break;
}


var G__28828 = cljs.core.next(seq__28219_28782__$1);
var G__28829 = null;
var G__28830 = (0);
var G__28831 = (0);
seq__28219_28729 = G__28828;
chunk__28220_28730 = G__28829;
count__28221_28731 = G__28830;
i__28222_28732 = G__28831;
continue;
}
} else {
}
}
break;
}


var G__28832 = cljs.core.next(seq__27951_28720__$1);
var G__28833 = null;
var G__28834 = (0);
var G__28835 = (0);
seq__27951_28598 = G__28832;
chunk__27952_28599 = G__28833;
count__27953_28600 = G__28834;
i__27954_28601 = G__28835;
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
