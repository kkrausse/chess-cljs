goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__8045){
var vec__8046 = p__8045;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8046,(1),null);
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
var vec__8052 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8052,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8052,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8052,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8052,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8052,(4),null);
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
var vec__8060 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(4),null);
var vec__8063 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(4),null);
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
var map__8067 = segmap;
var map__8067__$1 = (((((!((map__8067 == null))))?(((((map__8067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8067):map__8067);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__8073 = arguments.length;
switch (G__8073) {
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
var vec__8080 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9384 = cljs.core.next(segs__$1);
var G__9385 = nrelseg;
var G__9386 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9384;
relseg__$1 = G__9385;
result__$1 = G__9386;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8080,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8080,(1),null);
var G__9388 = (gline + (1));
var G__9389 = cljs.core.next(lines__$1);
var G__9390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9391 = result__$1;
gline = G__9388;
lines__$1 = G__9389;
relseg = G__9390;
result = G__9391;
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
var map__8084 = segmap;
var map__8084__$1 = (((((!((map__8084 == null))))?(((((map__8084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8084):map__8084);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8084__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8084__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8084__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8084__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__8083_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8083_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8088 = arguments.length;
switch (G__8088) {
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
var vec__8100 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9407 = cljs.core.next(segs__$1);
var G__9408 = nrelseg;
var G__9409 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9407;
relseg__$1 = G__9408;
result__$1 = G__9409;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8100,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8100,(1),null);
var G__9410 = (gline + (1));
var G__9411 = cljs.core.next(lines__$1);
var G__9412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9413 = result__$1;
gline = G__9410;
lines__$1 = G__9411;
relseg = G__9412;
result = G__9413;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8117){
var vec__8118 = p__8117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8118,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__8122){
var vec__8123 = p__8122;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(4),null);
var seg = vec__8123;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8133){
var vec__8134 = p__8133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(4),null);
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
var seq__8173 = cljs.core.seq(infos);
var chunk__8174 = null;
var count__8175 = (0);
var i__8176 = (0);
while(true){
if((i__8176 < count__8175)){
var info = chunk__8174.cljs$core$IIndexed$_nth$arity$2(null,i__8176);
var segv_9441 = info__GT_segv(info,source_idx,line,col);
var gline_9442 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9443 = cljs.core.count(cljs.core.deref(lines));
if((gline_9442 > (lc_9443 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8173,chunk__8174,count__8175,i__8176,segv_9441,gline_9442,lc_9443,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9442 - (lc_9443 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9441], null));
});})(seq__8173,chunk__8174,count__8175,i__8176,segv_9441,gline_9442,lc_9443,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8173,chunk__8174,count__8175,i__8176,segv_9441,gline_9442,lc_9443,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9442], null),cljs.core.conj,segv_9441);
});})(seq__8173,chunk__8174,count__8175,i__8176,segv_9441,gline_9442,lc_9443,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9448 = seq__8173;
var G__9449 = chunk__8174;
var G__9450 = count__8175;
var G__9451 = (i__8176 + (1));
seq__8173 = G__9448;
chunk__8174 = G__9449;
count__8175 = G__9450;
i__8176 = G__9451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8173);
if(temp__5735__auto__){
var seq__8173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8173__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__8173__$1);
var G__9455 = cljs.core.chunk_rest(seq__8173__$1);
var G__9456 = c__4609__auto__;
var G__9457 = cljs.core.count(c__4609__auto__);
var G__9458 = (0);
seq__8173 = G__9455;
chunk__8174 = G__9456;
count__8175 = G__9457;
i__8176 = G__9458;
continue;
} else {
var info = cljs.core.first(seq__8173__$1);
var segv_9459 = info__GT_segv(info,source_idx,line,col);
var gline_9460 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9461 = cljs.core.count(cljs.core.deref(lines));
if((gline_9460 > (lc_9461 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8173,chunk__8174,count__8175,i__8176,segv_9459,gline_9460,lc_9461,info,seq__8173__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9460 - (lc_9461 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9459], null));
});})(seq__8173,chunk__8174,count__8175,i__8176,segv_9459,gline_9460,lc_9461,info,seq__8173__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8173,chunk__8174,count__8175,i__8176,segv_9459,gline_9460,lc_9461,info,seq__8173__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9460], null),cljs.core.conj,segv_9459);
});})(seq__8173,chunk__8174,count__8175,i__8176,segv_9459,gline_9460,lc_9461,info,seq__8173__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9473 = cljs.core.next(seq__8173__$1);
var G__9474 = null;
var G__9475 = (0);
var G__9476 = (0);
seq__8173 = G__9473;
chunk__8174 = G__9474;
count__8175 = G__9475;
i__8176 = G__9476;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__8223_9477 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8224_9478 = null;
var count__8225_9479 = (0);
var i__8226_9480 = (0);
while(true){
if((i__8226_9480 < count__8225_9479)){
var vec__8464_9488 = chunk__8224_9478.cljs$core$IIndexed$_nth$arity$2(null,i__8226_9480);
var source_idx_9489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8464_9488,(0),null);
var vec__8467_9490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8464_9488,(1),null);
var __9491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8467_9490,(0),null);
var lines_9492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8467_9490,(1),null);
var seq__8470_9499 = cljs.core.seq(lines_9492__$1);
var chunk__8471_9500 = null;
var count__8472_9501 = (0);
var i__8473_9502 = (0);
while(true){
if((i__8473_9502 < count__8472_9501)){
var vec__8528_9505 = chunk__8471_9500.cljs$core$IIndexed$_nth$arity$2(null,i__8473_9502);
var line_9506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8528_9505,(0),null);
var cols_9507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8528_9505,(1),null);
var seq__8531_9517 = cljs.core.seq(cols_9507);
var chunk__8532_9518 = null;
var count__8533_9519 = (0);
var i__8534_9520 = (0);
while(true){
if((i__8534_9520 < count__8533_9519)){
var vec__8544_9525 = chunk__8532_9518.cljs$core$IIndexed$_nth$arity$2(null,i__8534_9520);
var col_9526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8544_9525,(0),null);
var infos_9527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8544_9525,(1),null);
encode_cols(infos_9527,source_idx_9489,line_9506,col_9526);


var G__9529 = seq__8531_9517;
var G__9530 = chunk__8532_9518;
var G__9531 = count__8533_9519;
var G__9532 = (i__8534_9520 + (1));
seq__8531_9517 = G__9529;
chunk__8532_9518 = G__9530;
count__8533_9519 = G__9531;
i__8534_9520 = G__9532;
continue;
} else {
var temp__5735__auto___9537 = cljs.core.seq(seq__8531_9517);
if(temp__5735__auto___9537){
var seq__8531_9538__$1 = temp__5735__auto___9537;
if(cljs.core.chunked_seq_QMARK_(seq__8531_9538__$1)){
var c__4609__auto___9539 = cljs.core.chunk_first(seq__8531_9538__$1);
var G__9540 = cljs.core.chunk_rest(seq__8531_9538__$1);
var G__9541 = c__4609__auto___9539;
var G__9542 = cljs.core.count(c__4609__auto___9539);
var G__9543 = (0);
seq__8531_9517 = G__9540;
chunk__8532_9518 = G__9541;
count__8533_9519 = G__9542;
i__8534_9520 = G__9543;
continue;
} else {
var vec__8547_9545 = cljs.core.first(seq__8531_9538__$1);
var col_9546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8547_9545,(0),null);
var infos_9547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8547_9545,(1),null);
encode_cols(infos_9547,source_idx_9489,line_9506,col_9546);


var G__9549 = cljs.core.next(seq__8531_9538__$1);
var G__9550 = null;
var G__9551 = (0);
var G__9552 = (0);
seq__8531_9517 = G__9549;
chunk__8532_9518 = G__9550;
count__8533_9519 = G__9551;
i__8534_9520 = G__9552;
continue;
}
} else {
}
}
break;
}


var G__9553 = seq__8470_9499;
var G__9554 = chunk__8471_9500;
var G__9555 = count__8472_9501;
var G__9556 = (i__8473_9502 + (1));
seq__8470_9499 = G__9553;
chunk__8471_9500 = G__9554;
count__8472_9501 = G__9555;
i__8473_9502 = G__9556;
continue;
} else {
var temp__5735__auto___9557 = cljs.core.seq(seq__8470_9499);
if(temp__5735__auto___9557){
var seq__8470_9559__$1 = temp__5735__auto___9557;
if(cljs.core.chunked_seq_QMARK_(seq__8470_9559__$1)){
var c__4609__auto___9562 = cljs.core.chunk_first(seq__8470_9559__$1);
var G__9563 = cljs.core.chunk_rest(seq__8470_9559__$1);
var G__9564 = c__4609__auto___9562;
var G__9565 = cljs.core.count(c__4609__auto___9562);
var G__9566 = (0);
seq__8470_9499 = G__9563;
chunk__8471_9500 = G__9564;
count__8472_9501 = G__9565;
i__8473_9502 = G__9566;
continue;
} else {
var vec__8550_9569 = cljs.core.first(seq__8470_9559__$1);
var line_9570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8550_9569,(0),null);
var cols_9571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8550_9569,(1),null);
var seq__8553_9572 = cljs.core.seq(cols_9571);
var chunk__8554_9573 = null;
var count__8555_9574 = (0);
var i__8556_9575 = (0);
while(true){
if((i__8556_9575 < count__8555_9574)){
var vec__8569_9576 = chunk__8554_9573.cljs$core$IIndexed$_nth$arity$2(null,i__8556_9575);
var col_9577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8569_9576,(0),null);
var infos_9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8569_9576,(1),null);
encode_cols(infos_9578,source_idx_9489,line_9570,col_9577);


var G__9580 = seq__8553_9572;
var G__9581 = chunk__8554_9573;
var G__9582 = count__8555_9574;
var G__9583 = (i__8556_9575 + (1));
seq__8553_9572 = G__9580;
chunk__8554_9573 = G__9581;
count__8555_9574 = G__9582;
i__8556_9575 = G__9583;
continue;
} else {
var temp__5735__auto___9584__$1 = cljs.core.seq(seq__8553_9572);
if(temp__5735__auto___9584__$1){
var seq__8553_9585__$1 = temp__5735__auto___9584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8553_9585__$1)){
var c__4609__auto___9586 = cljs.core.chunk_first(seq__8553_9585__$1);
var G__9587 = cljs.core.chunk_rest(seq__8553_9585__$1);
var G__9589 = c__4609__auto___9586;
var G__9590 = cljs.core.count(c__4609__auto___9586);
var G__9591 = (0);
seq__8553_9572 = G__9587;
chunk__8554_9573 = G__9589;
count__8555_9574 = G__9590;
i__8556_9575 = G__9591;
continue;
} else {
var vec__8572_9593 = cljs.core.first(seq__8553_9585__$1);
var col_9594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572_9593,(0),null);
var infos_9595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572_9593,(1),null);
encode_cols(infos_9595,source_idx_9489,line_9570,col_9594);


var G__9598 = cljs.core.next(seq__8553_9585__$1);
var G__9599 = null;
var G__9600 = (0);
var G__9601 = (0);
seq__8553_9572 = G__9598;
chunk__8554_9573 = G__9599;
count__8555_9574 = G__9600;
i__8556_9575 = G__9601;
continue;
}
} else {
}
}
break;
}


var G__9602 = cljs.core.next(seq__8470_9559__$1);
var G__9603 = null;
var G__9604 = (0);
var G__9605 = (0);
seq__8470_9499 = G__9602;
chunk__8471_9500 = G__9603;
count__8472_9501 = G__9604;
i__8473_9502 = G__9605;
continue;
}
} else {
}
}
break;
}


var G__9606 = seq__8223_9477;
var G__9607 = chunk__8224_9478;
var G__9608 = count__8225_9479;
var G__9609 = (i__8226_9480 + (1));
seq__8223_9477 = G__9606;
chunk__8224_9478 = G__9607;
count__8225_9479 = G__9608;
i__8226_9480 = G__9609;
continue;
} else {
var temp__5735__auto___9611 = cljs.core.seq(seq__8223_9477);
if(temp__5735__auto___9611){
var seq__8223_9612__$1 = temp__5735__auto___9611;
if(cljs.core.chunked_seq_QMARK_(seq__8223_9612__$1)){
var c__4609__auto___9613 = cljs.core.chunk_first(seq__8223_9612__$1);
var G__9614 = cljs.core.chunk_rest(seq__8223_9612__$1);
var G__9615 = c__4609__auto___9613;
var G__9616 = cljs.core.count(c__4609__auto___9613);
var G__9617 = (0);
seq__8223_9477 = G__9614;
chunk__8224_9478 = G__9615;
count__8225_9479 = G__9616;
i__8226_9480 = G__9617;
continue;
} else {
var vec__8576_9620 = cljs.core.first(seq__8223_9612__$1);
var source_idx_9621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8576_9620,(0),null);
var vec__8579_9622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8576_9620,(1),null);
var __9623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8579_9622,(0),null);
var lines_9624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8579_9622,(1),null);
var seq__8582_9627 = cljs.core.seq(lines_9624__$1);
var chunk__8583_9628 = null;
var count__8584_9629 = (0);
var i__8585_9630 = (0);
while(true){
if((i__8585_9630 < count__8584_9629)){
var vec__8634_9632 = chunk__8583_9628.cljs$core$IIndexed$_nth$arity$2(null,i__8585_9630);
var line_9633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8634_9632,(0),null);
var cols_9634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8634_9632,(1),null);
var seq__8639_9636 = cljs.core.seq(cols_9634);
var chunk__8641_9637 = null;
var count__8642_9638 = (0);
var i__8643_9639 = (0);
while(true){
if((i__8643_9639 < count__8642_9638)){
var vec__8653_9642 = chunk__8641_9637.cljs$core$IIndexed$_nth$arity$2(null,i__8643_9639);
var col_9643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8653_9642,(0),null);
var infos_9644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8653_9642,(1),null);
encode_cols(infos_9644,source_idx_9621,line_9633,col_9643);


var G__9648 = seq__8639_9636;
var G__9649 = chunk__8641_9637;
var G__9650 = count__8642_9638;
var G__9651 = (i__8643_9639 + (1));
seq__8639_9636 = G__9648;
chunk__8641_9637 = G__9649;
count__8642_9638 = G__9650;
i__8643_9639 = G__9651;
continue;
} else {
var temp__5735__auto___9652__$1 = cljs.core.seq(seq__8639_9636);
if(temp__5735__auto___9652__$1){
var seq__8639_9653__$1 = temp__5735__auto___9652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8639_9653__$1)){
var c__4609__auto___9654 = cljs.core.chunk_first(seq__8639_9653__$1);
var G__9655 = cljs.core.chunk_rest(seq__8639_9653__$1);
var G__9656 = c__4609__auto___9654;
var G__9657 = cljs.core.count(c__4609__auto___9654);
var G__9658 = (0);
seq__8639_9636 = G__9655;
chunk__8641_9637 = G__9656;
count__8642_9638 = G__9657;
i__8643_9639 = G__9658;
continue;
} else {
var vec__8657_9659 = cljs.core.first(seq__8639_9653__$1);
var col_9660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8657_9659,(0),null);
var infos_9661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8657_9659,(1),null);
encode_cols(infos_9661,source_idx_9621,line_9633,col_9660);


var G__9662 = cljs.core.next(seq__8639_9653__$1);
var G__9663 = null;
var G__9664 = (0);
var G__9665 = (0);
seq__8639_9636 = G__9662;
chunk__8641_9637 = G__9663;
count__8642_9638 = G__9664;
i__8643_9639 = G__9665;
continue;
}
} else {
}
}
break;
}


var G__9666 = seq__8582_9627;
var G__9667 = chunk__8583_9628;
var G__9668 = count__8584_9629;
var G__9669 = (i__8585_9630 + (1));
seq__8582_9627 = G__9666;
chunk__8583_9628 = G__9667;
count__8584_9629 = G__9668;
i__8585_9630 = G__9669;
continue;
} else {
var temp__5735__auto___9670__$1 = cljs.core.seq(seq__8582_9627);
if(temp__5735__auto___9670__$1){
var seq__8582_9671__$1 = temp__5735__auto___9670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8582_9671__$1)){
var c__4609__auto___9672 = cljs.core.chunk_first(seq__8582_9671__$1);
var G__9673 = cljs.core.chunk_rest(seq__8582_9671__$1);
var G__9674 = c__4609__auto___9672;
var G__9675 = cljs.core.count(c__4609__auto___9672);
var G__9676 = (0);
seq__8582_9627 = G__9673;
chunk__8583_9628 = G__9674;
count__8584_9629 = G__9675;
i__8585_9630 = G__9676;
continue;
} else {
var vec__8662_9677 = cljs.core.first(seq__8582_9671__$1);
var line_9678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8662_9677,(0),null);
var cols_9679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8662_9677,(1),null);
var seq__8665_9680 = cljs.core.seq(cols_9679);
var chunk__8666_9681 = null;
var count__8667_9682 = (0);
var i__8668_9683 = (0);
while(true){
if((i__8668_9683 < count__8667_9682)){
var vec__8677_9684 = chunk__8666_9681.cljs$core$IIndexed$_nth$arity$2(null,i__8668_9683);
var col_9685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8677_9684,(0),null);
var infos_9686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8677_9684,(1),null);
encode_cols(infos_9686,source_idx_9621,line_9678,col_9685);


var G__9687 = seq__8665_9680;
var G__9688 = chunk__8666_9681;
var G__9689 = count__8667_9682;
var G__9690 = (i__8668_9683 + (1));
seq__8665_9680 = G__9687;
chunk__8666_9681 = G__9688;
count__8667_9682 = G__9689;
i__8668_9683 = G__9690;
continue;
} else {
var temp__5735__auto___9691__$2 = cljs.core.seq(seq__8665_9680);
if(temp__5735__auto___9691__$2){
var seq__8665_9692__$1 = temp__5735__auto___9691__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8665_9692__$1)){
var c__4609__auto___9693 = cljs.core.chunk_first(seq__8665_9692__$1);
var G__9694 = cljs.core.chunk_rest(seq__8665_9692__$1);
var G__9695 = c__4609__auto___9693;
var G__9696 = cljs.core.count(c__4609__auto___9693);
var G__9697 = (0);
seq__8665_9680 = G__9694;
chunk__8666_9681 = G__9695;
count__8667_9682 = G__9696;
i__8668_9683 = G__9697;
continue;
} else {
var vec__8681_9698 = cljs.core.first(seq__8665_9692__$1);
var col_9699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8681_9698,(0),null);
var infos_9700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8681_9698,(1),null);
encode_cols(infos_9700,source_idx_9621,line_9678,col_9699);


var G__9701 = cljs.core.next(seq__8665_9692__$1);
var G__9702 = null;
var G__9703 = (0);
var G__9704 = (0);
seq__8665_9680 = G__9701;
chunk__8666_9681 = G__9702;
count__8667_9682 = G__9703;
i__8668_9683 = G__9704;
continue;
}
} else {
}
}
break;
}


var G__9705 = cljs.core.next(seq__8582_9671__$1);
var G__9706 = null;
var G__9707 = (0);
var G__9708 = (0);
seq__8582_9627 = G__9705;
chunk__8583_9628 = G__9706;
count__8584_9629 = G__9707;
i__8585_9630 = G__9708;
continue;
}
} else {
}
}
break;
}


var G__9709 = cljs.core.next(seq__8223_9612__$1);
var G__9710 = null;
var G__9711 = (0);
var G__9712 = (0);
seq__8223_9477 = G__9709;
chunk__8224_9478 = G__9710;
count__8225_9479 = G__9711;
i__8226_9480 = G__9712;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8685 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__8148_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8148_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__8150_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__8150_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8152_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__8152_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8688 = G__8685;
goog.object.set(G__8688,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8688;
} else {
return G__8685;
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
var vec__8689 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8689,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8689,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__8692 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8692,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8692,(1),null);
var G__9719 = cljs.core.next(col_map_seq);
var G__9720 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8692,col,infos,vec__8689,line,col_map){
return (function (v,p__8696){
var map__8697 = p__8696;
var map__8697__$1 = (((((!((map__8697 == null))))?(((((map__8697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8697):map__8697);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8697__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8697__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8692,col,infos,vec__8689,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9719;
new_cols = G__9720;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9725 = cljs.core.next(line_map_seq);
var G__9726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__9725;
new_lines = G__9726;
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
var seq__8701_9728 = cljs.core.seq(reverse_map);
var chunk__8702_9729 = null;
var count__8703_9730 = (0);
var i__8704_9731 = (0);
while(true){
if((i__8704_9731 < count__8703_9730)){
var vec__8949_9732 = chunk__8702_9729.cljs$core$IIndexed$_nth$arity$2(null,i__8704_9731);
var line_9733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8949_9732,(0),null);
var columns_9734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8949_9732,(1),null);
var seq__8952_9736 = cljs.core.seq(columns_9734);
var chunk__8953_9737 = null;
var count__8954_9738 = (0);
var i__8955_9739 = (0);
while(true){
if((i__8955_9739 < count__8954_9738)){
var vec__9030_9740 = chunk__8953_9737.cljs$core$IIndexed$_nth$arity$2(null,i__8955_9739);
var column_9741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9030_9740,(0),null);
var column_info_9742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9030_9740,(1),null);
var seq__9033_9743 = cljs.core.seq(column_info_9742);
var chunk__9034_9744 = null;
var count__9035_9745 = (0);
var i__9036_9746 = (0);
while(true){
if((i__9036_9746 < count__9035_9745)){
var map__9053_9747 = chunk__9034_9744.cljs$core$IIndexed$_nth$arity$2(null,i__9036_9746);
var map__9053_9748__$1 = (((((!((map__9053_9747 == null))))?(((((map__9053_9747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9053_9747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9053_9747):map__9053_9747);
var gline_9749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9053_9748__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9053_9748__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9053_9748__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9749], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9033_9743,chunk__9034_9744,count__9035_9745,i__9036_9746,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9053_9747,map__9053_9748__$1,gline_9749,gcol_9750,name_9751,vec__9030_9740,column_9741,column_info_9742,vec__8949_9732,line_9733,columns_9734,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9750], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9733,new cljs.core.Keyword(null,"col","col",-1959363084),column_9741,new cljs.core.Keyword(null,"name","name",1843675177),name_9751], null));
});})(seq__9033_9743,chunk__9034_9744,count__9035_9745,i__9036_9746,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9053_9747,map__9053_9748__$1,gline_9749,gcol_9750,name_9751,vec__9030_9740,column_9741,column_info_9742,vec__8949_9732,line_9733,columns_9734,inverted))
,cljs.core.sorted_map()));


var G__9752 = seq__9033_9743;
var G__9753 = chunk__9034_9744;
var G__9754 = count__9035_9745;
var G__9755 = (i__9036_9746 + (1));
seq__9033_9743 = G__9752;
chunk__9034_9744 = G__9753;
count__9035_9745 = G__9754;
i__9036_9746 = G__9755;
continue;
} else {
var temp__5735__auto___9756 = cljs.core.seq(seq__9033_9743);
if(temp__5735__auto___9756){
var seq__9033_9757__$1 = temp__5735__auto___9756;
if(cljs.core.chunked_seq_QMARK_(seq__9033_9757__$1)){
var c__4609__auto___9758 = cljs.core.chunk_first(seq__9033_9757__$1);
var G__9759 = cljs.core.chunk_rest(seq__9033_9757__$1);
var G__9760 = c__4609__auto___9758;
var G__9761 = cljs.core.count(c__4609__auto___9758);
var G__9762 = (0);
seq__9033_9743 = G__9759;
chunk__9034_9744 = G__9760;
count__9035_9745 = G__9761;
i__9036_9746 = G__9762;
continue;
} else {
var map__9063_9763 = cljs.core.first(seq__9033_9757__$1);
var map__9063_9764__$1 = (((((!((map__9063_9763 == null))))?(((((map__9063_9763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9063_9763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9063_9763):map__9063_9763);
var gline_9765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9063_9764__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9063_9764__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9063_9764__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9033_9743,chunk__9034_9744,count__9035_9745,i__9036_9746,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9063_9763,map__9063_9764__$1,gline_9765,gcol_9766,name_9767,seq__9033_9757__$1,temp__5735__auto___9756,vec__9030_9740,column_9741,column_info_9742,vec__8949_9732,line_9733,columns_9734,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9766], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9733,new cljs.core.Keyword(null,"col","col",-1959363084),column_9741,new cljs.core.Keyword(null,"name","name",1843675177),name_9767], null));
});})(seq__9033_9743,chunk__9034_9744,count__9035_9745,i__9036_9746,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9063_9763,map__9063_9764__$1,gline_9765,gcol_9766,name_9767,seq__9033_9757__$1,temp__5735__auto___9756,vec__9030_9740,column_9741,column_info_9742,vec__8949_9732,line_9733,columns_9734,inverted))
,cljs.core.sorted_map()));


var G__9768 = cljs.core.next(seq__9033_9757__$1);
var G__9769 = null;
var G__9770 = (0);
var G__9771 = (0);
seq__9033_9743 = G__9768;
chunk__9034_9744 = G__9769;
count__9035_9745 = G__9770;
i__9036_9746 = G__9771;
continue;
}
} else {
}
}
break;
}


var G__9773 = seq__8952_9736;
var G__9774 = chunk__8953_9737;
var G__9775 = count__8954_9738;
var G__9776 = (i__8955_9739 + (1));
seq__8952_9736 = G__9773;
chunk__8953_9737 = G__9774;
count__8954_9738 = G__9775;
i__8955_9739 = G__9776;
continue;
} else {
var temp__5735__auto___9777 = cljs.core.seq(seq__8952_9736);
if(temp__5735__auto___9777){
var seq__8952_9778__$1 = temp__5735__auto___9777;
if(cljs.core.chunked_seq_QMARK_(seq__8952_9778__$1)){
var c__4609__auto___9779 = cljs.core.chunk_first(seq__8952_9778__$1);
var G__9780 = cljs.core.chunk_rest(seq__8952_9778__$1);
var G__9781 = c__4609__auto___9779;
var G__9782 = cljs.core.count(c__4609__auto___9779);
var G__9783 = (0);
seq__8952_9736 = G__9780;
chunk__8953_9737 = G__9781;
count__8954_9738 = G__9782;
i__8955_9739 = G__9783;
continue;
} else {
var vec__9084_9784 = cljs.core.first(seq__8952_9778__$1);
var column_9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084_9784,(0),null);
var column_info_9786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084_9784,(1),null);
var seq__9088_9787 = cljs.core.seq(column_info_9786);
var chunk__9089_9788 = null;
var count__9090_9789 = (0);
var i__9091_9790 = (0);
while(true){
if((i__9091_9790 < count__9090_9789)){
var map__9102_9791 = chunk__9089_9788.cljs$core$IIndexed$_nth$arity$2(null,i__9091_9790);
var map__9102_9792__$1 = (((((!((map__9102_9791 == null))))?(((((map__9102_9791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9102_9791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9102_9791):map__9102_9791);
var gline_9793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9102_9792__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9102_9792__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9102_9792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9793], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9088_9787,chunk__9089_9788,count__9090_9789,i__9091_9790,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9102_9791,map__9102_9792__$1,gline_9793,gcol_9794,name_9795,vec__9084_9784,column_9785,column_info_9786,seq__8952_9778__$1,temp__5735__auto___9777,vec__8949_9732,line_9733,columns_9734,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9794], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9733,new cljs.core.Keyword(null,"col","col",-1959363084),column_9785,new cljs.core.Keyword(null,"name","name",1843675177),name_9795], null));
});})(seq__9088_9787,chunk__9089_9788,count__9090_9789,i__9091_9790,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9102_9791,map__9102_9792__$1,gline_9793,gcol_9794,name_9795,vec__9084_9784,column_9785,column_info_9786,seq__8952_9778__$1,temp__5735__auto___9777,vec__8949_9732,line_9733,columns_9734,inverted))
,cljs.core.sorted_map()));


var G__9800 = seq__9088_9787;
var G__9801 = chunk__9089_9788;
var G__9802 = count__9090_9789;
var G__9803 = (i__9091_9790 + (1));
seq__9088_9787 = G__9800;
chunk__9089_9788 = G__9801;
count__9090_9789 = G__9802;
i__9091_9790 = G__9803;
continue;
} else {
var temp__5735__auto___9804__$1 = cljs.core.seq(seq__9088_9787);
if(temp__5735__auto___9804__$1){
var seq__9088_9805__$1 = temp__5735__auto___9804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9088_9805__$1)){
var c__4609__auto___9806 = cljs.core.chunk_first(seq__9088_9805__$1);
var G__9807 = cljs.core.chunk_rest(seq__9088_9805__$1);
var G__9808 = c__4609__auto___9806;
var G__9809 = cljs.core.count(c__4609__auto___9806);
var G__9810 = (0);
seq__9088_9787 = G__9807;
chunk__9089_9788 = G__9808;
count__9090_9789 = G__9809;
i__9091_9790 = G__9810;
continue;
} else {
var map__9111_9811 = cljs.core.first(seq__9088_9805__$1);
var map__9111_9812__$1 = (((((!((map__9111_9811 == null))))?(((((map__9111_9811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9111_9811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9111_9811):map__9111_9811);
var gline_9813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9111_9812__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9111_9812__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9111_9812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9813], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9088_9787,chunk__9089_9788,count__9090_9789,i__9091_9790,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9111_9811,map__9111_9812__$1,gline_9813,gcol_9814,name_9815,seq__9088_9805__$1,temp__5735__auto___9804__$1,vec__9084_9784,column_9785,column_info_9786,seq__8952_9778__$1,temp__5735__auto___9777,vec__8949_9732,line_9733,columns_9734,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9814], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9733,new cljs.core.Keyword(null,"col","col",-1959363084),column_9785,new cljs.core.Keyword(null,"name","name",1843675177),name_9815], null));
});})(seq__9088_9787,chunk__9089_9788,count__9090_9789,i__9091_9790,seq__8952_9736,chunk__8953_9737,count__8954_9738,i__8955_9739,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9111_9811,map__9111_9812__$1,gline_9813,gcol_9814,name_9815,seq__9088_9805__$1,temp__5735__auto___9804__$1,vec__9084_9784,column_9785,column_info_9786,seq__8952_9778__$1,temp__5735__auto___9777,vec__8949_9732,line_9733,columns_9734,inverted))
,cljs.core.sorted_map()));


var G__9819 = cljs.core.next(seq__9088_9805__$1);
var G__9820 = null;
var G__9821 = (0);
var G__9822 = (0);
seq__9088_9787 = G__9819;
chunk__9089_9788 = G__9820;
count__9090_9789 = G__9821;
i__9091_9790 = G__9822;
continue;
}
} else {
}
}
break;
}


var G__9823 = cljs.core.next(seq__8952_9778__$1);
var G__9824 = null;
var G__9825 = (0);
var G__9826 = (0);
seq__8952_9736 = G__9823;
chunk__8953_9737 = G__9824;
count__8954_9738 = G__9825;
i__8955_9739 = G__9826;
continue;
}
} else {
}
}
break;
}


var G__9828 = seq__8701_9728;
var G__9829 = chunk__8702_9729;
var G__9830 = count__8703_9730;
var G__9831 = (i__8704_9731 + (1));
seq__8701_9728 = G__9828;
chunk__8702_9729 = G__9829;
count__8703_9730 = G__9830;
i__8704_9731 = G__9831;
continue;
} else {
var temp__5735__auto___9832 = cljs.core.seq(seq__8701_9728);
if(temp__5735__auto___9832){
var seq__8701_9833__$1 = temp__5735__auto___9832;
if(cljs.core.chunked_seq_QMARK_(seq__8701_9833__$1)){
var c__4609__auto___9834 = cljs.core.chunk_first(seq__8701_9833__$1);
var G__9835 = cljs.core.chunk_rest(seq__8701_9833__$1);
var G__9836 = c__4609__auto___9834;
var G__9837 = cljs.core.count(c__4609__auto___9834);
var G__9838 = (0);
seq__8701_9728 = G__9835;
chunk__8702_9729 = G__9836;
count__8703_9730 = G__9837;
i__8704_9731 = G__9838;
continue;
} else {
var vec__9125_9839 = cljs.core.first(seq__8701_9833__$1);
var line_9840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9125_9839,(0),null);
var columns_9841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9125_9839,(1),null);
var seq__9129_9842 = cljs.core.seq(columns_9841);
var chunk__9130_9843 = null;
var count__9131_9844 = (0);
var i__9132_9845 = (0);
while(true){
if((i__9132_9845 < count__9131_9844)){
var vec__9244_9846 = chunk__9130_9843.cljs$core$IIndexed$_nth$arity$2(null,i__9132_9845);
var column_9847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_9846,(0),null);
var column_info_9848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_9846,(1),null);
var seq__9247_9849 = cljs.core.seq(column_info_9848);
var chunk__9248_9850 = null;
var count__9249_9851 = (0);
var i__9250_9852 = (0);
while(true){
if((i__9250_9852 < count__9249_9851)){
var map__9261_9857 = chunk__9248_9850.cljs$core$IIndexed$_nth$arity$2(null,i__9250_9852);
var map__9261_9858__$1 = (((((!((map__9261_9857 == null))))?(((((map__9261_9857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9261_9857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9261_9857):map__9261_9857);
var gline_9859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9261_9858__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9261_9858__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9261_9858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9859], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9247_9849,chunk__9248_9850,count__9249_9851,i__9250_9852,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9261_9857,map__9261_9858__$1,gline_9859,gcol_9860,name_9861,vec__9244_9846,column_9847,column_info_9848,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9840,new cljs.core.Keyword(null,"col","col",-1959363084),column_9847,new cljs.core.Keyword(null,"name","name",1843675177),name_9861], null));
});})(seq__9247_9849,chunk__9248_9850,count__9249_9851,i__9250_9852,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9261_9857,map__9261_9858__$1,gline_9859,gcol_9860,name_9861,vec__9244_9846,column_9847,column_info_9848,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted))
,cljs.core.sorted_map()));


var G__9863 = seq__9247_9849;
var G__9864 = chunk__9248_9850;
var G__9865 = count__9249_9851;
var G__9866 = (i__9250_9852 + (1));
seq__9247_9849 = G__9863;
chunk__9248_9850 = G__9864;
count__9249_9851 = G__9865;
i__9250_9852 = G__9866;
continue;
} else {
var temp__5735__auto___9867__$1 = cljs.core.seq(seq__9247_9849);
if(temp__5735__auto___9867__$1){
var seq__9247_9868__$1 = temp__5735__auto___9867__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9247_9868__$1)){
var c__4609__auto___9871 = cljs.core.chunk_first(seq__9247_9868__$1);
var G__9875 = cljs.core.chunk_rest(seq__9247_9868__$1);
var G__9876 = c__4609__auto___9871;
var G__9877 = cljs.core.count(c__4609__auto___9871);
var G__9878 = (0);
seq__9247_9849 = G__9875;
chunk__9248_9850 = G__9876;
count__9249_9851 = G__9877;
i__9250_9852 = G__9878;
continue;
} else {
var map__9268_9879 = cljs.core.first(seq__9247_9868__$1);
var map__9268_9880__$1 = (((((!((map__9268_9879 == null))))?(((((map__9268_9879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9268_9879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9268_9879):map__9268_9879);
var gline_9881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9268_9880__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9268_9880__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9268_9880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9881], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9247_9849,chunk__9248_9850,count__9249_9851,i__9250_9852,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9268_9879,map__9268_9880__$1,gline_9881,gcol_9882,name_9883,seq__9247_9868__$1,temp__5735__auto___9867__$1,vec__9244_9846,column_9847,column_info_9848,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9882], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9840,new cljs.core.Keyword(null,"col","col",-1959363084),column_9847,new cljs.core.Keyword(null,"name","name",1843675177),name_9883], null));
});})(seq__9247_9849,chunk__9248_9850,count__9249_9851,i__9250_9852,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9268_9879,map__9268_9880__$1,gline_9881,gcol_9882,name_9883,seq__9247_9868__$1,temp__5735__auto___9867__$1,vec__9244_9846,column_9847,column_info_9848,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted))
,cljs.core.sorted_map()));


var G__9891 = cljs.core.next(seq__9247_9868__$1);
var G__9892 = null;
var G__9893 = (0);
var G__9894 = (0);
seq__9247_9849 = G__9891;
chunk__9248_9850 = G__9892;
count__9249_9851 = G__9893;
i__9250_9852 = G__9894;
continue;
}
} else {
}
}
break;
}


var G__9895 = seq__9129_9842;
var G__9896 = chunk__9130_9843;
var G__9897 = count__9131_9844;
var G__9898 = (i__9132_9845 + (1));
seq__9129_9842 = G__9895;
chunk__9130_9843 = G__9896;
count__9131_9844 = G__9897;
i__9132_9845 = G__9898;
continue;
} else {
var temp__5735__auto___9902__$1 = cljs.core.seq(seq__9129_9842);
if(temp__5735__auto___9902__$1){
var seq__9129_9903__$1 = temp__5735__auto___9902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9129_9903__$1)){
var c__4609__auto___9904 = cljs.core.chunk_first(seq__9129_9903__$1);
var G__9905 = cljs.core.chunk_rest(seq__9129_9903__$1);
var G__9906 = c__4609__auto___9904;
var G__9907 = cljs.core.count(c__4609__auto___9904);
var G__9908 = (0);
seq__9129_9842 = G__9905;
chunk__9130_9843 = G__9906;
count__9131_9844 = G__9907;
i__9132_9845 = G__9908;
continue;
} else {
var vec__9274_9909 = cljs.core.first(seq__9129_9903__$1);
var column_9910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9274_9909,(0),null);
var column_info_9911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9274_9909,(1),null);
var seq__9277_9912 = cljs.core.seq(column_info_9911);
var chunk__9278_9913 = null;
var count__9279_9914 = (0);
var i__9280_9915 = (0);
while(true){
if((i__9280_9915 < count__9279_9914)){
var map__9320_9916 = chunk__9278_9913.cljs$core$IIndexed$_nth$arity$2(null,i__9280_9915);
var map__9320_9917__$1 = (((((!((map__9320_9916 == null))))?(((((map__9320_9916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9320_9916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9320_9916):map__9320_9916);
var gline_9918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9320_9917__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9320_9917__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9320_9917__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9918], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9277_9912,chunk__9278_9913,count__9279_9914,i__9280_9915,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9320_9916,map__9320_9917__$1,gline_9918,gcol_9919,name_9920,vec__9274_9909,column_9910,column_info_9911,seq__9129_9903__$1,temp__5735__auto___9902__$1,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9919], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9840,new cljs.core.Keyword(null,"col","col",-1959363084),column_9910,new cljs.core.Keyword(null,"name","name",1843675177),name_9920], null));
});})(seq__9277_9912,chunk__9278_9913,count__9279_9914,i__9280_9915,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9320_9916,map__9320_9917__$1,gline_9918,gcol_9919,name_9920,vec__9274_9909,column_9910,column_info_9911,seq__9129_9903__$1,temp__5735__auto___9902__$1,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted))
,cljs.core.sorted_map()));


var G__9925 = seq__9277_9912;
var G__9926 = chunk__9278_9913;
var G__9927 = count__9279_9914;
var G__9928 = (i__9280_9915 + (1));
seq__9277_9912 = G__9925;
chunk__9278_9913 = G__9926;
count__9279_9914 = G__9927;
i__9280_9915 = G__9928;
continue;
} else {
var temp__5735__auto___9929__$2 = cljs.core.seq(seq__9277_9912);
if(temp__5735__auto___9929__$2){
var seq__9277_9930__$1 = temp__5735__auto___9929__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9277_9930__$1)){
var c__4609__auto___9931 = cljs.core.chunk_first(seq__9277_9930__$1);
var G__9932 = cljs.core.chunk_rest(seq__9277_9930__$1);
var G__9933 = c__4609__auto___9931;
var G__9934 = cljs.core.count(c__4609__auto___9931);
var G__9935 = (0);
seq__9277_9912 = G__9932;
chunk__9278_9913 = G__9933;
count__9279_9914 = G__9934;
i__9280_9915 = G__9935;
continue;
} else {
var map__9349_9936 = cljs.core.first(seq__9277_9930__$1);
var map__9349_9937__$1 = (((((!((map__9349_9936 == null))))?(((((map__9349_9936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9349_9936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9349_9936):map__9349_9936);
var gline_9938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9937__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9937__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9938], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9277_9912,chunk__9278_9913,count__9279_9914,i__9280_9915,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9349_9936,map__9349_9937__$1,gline_9938,gcol_9939,name_9940,seq__9277_9930__$1,temp__5735__auto___9929__$2,vec__9274_9909,column_9910,column_info_9911,seq__9129_9903__$1,temp__5735__auto___9902__$1,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9939], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9840,new cljs.core.Keyword(null,"col","col",-1959363084),column_9910,new cljs.core.Keyword(null,"name","name",1843675177),name_9940], null));
});})(seq__9277_9912,chunk__9278_9913,count__9279_9914,i__9280_9915,seq__9129_9842,chunk__9130_9843,count__9131_9844,i__9132_9845,seq__8701_9728,chunk__8702_9729,count__8703_9730,i__8704_9731,map__9349_9936,map__9349_9937__$1,gline_9938,gcol_9939,name_9940,seq__9277_9930__$1,temp__5735__auto___9929__$2,vec__9274_9909,column_9910,column_info_9911,seq__9129_9903__$1,temp__5735__auto___9902__$1,vec__9125_9839,line_9840,columns_9841,seq__8701_9833__$1,temp__5735__auto___9832,inverted))
,cljs.core.sorted_map()));


var G__9942 = cljs.core.next(seq__9277_9930__$1);
var G__9943 = null;
var G__9944 = (0);
var G__9945 = (0);
seq__9277_9912 = G__9942;
chunk__9278_9913 = G__9943;
count__9279_9914 = G__9944;
i__9280_9915 = G__9945;
continue;
}
} else {
}
}
break;
}


var G__9946 = cljs.core.next(seq__9129_9903__$1);
var G__9947 = null;
var G__9948 = (0);
var G__9949 = (0);
seq__9129_9842 = G__9946;
chunk__9130_9843 = G__9947;
count__9131_9844 = G__9948;
i__9132_9845 = G__9949;
continue;
}
} else {
}
}
break;
}


var G__9950 = cljs.core.next(seq__8701_9833__$1);
var G__9951 = null;
var G__9952 = (0);
var G__9953 = (0);
seq__8701_9728 = G__9950;
chunk__8702_9729 = G__9951;
count__8703_9730 = G__9952;
i__8704_9731 = G__9953;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
