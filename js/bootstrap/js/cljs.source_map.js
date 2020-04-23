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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29221){
var vec__29222 = p__29221;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29222,(1),null);
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
var vec__29228 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(4),null);
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
var vec__29234 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(4),null);
var vec__29237 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(4),null);
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
var map__29241 = segmap;
var map__29241__$1 = (((((!((map__29241 == null))))?(((((map__29241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29241):map__29241);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29241__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29241__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29241__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__29247 = arguments.length;
switch (G__29247) {
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
var vec__29254 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30390 = cljs.core.next(segs__$1);
var G__30391 = nrelseg;
var G__30392 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30390;
relseg__$1 = G__30391;
result__$1 = G__30392;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29254,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29254,(1),null);
var G__30393 = (gline + (1));
var G__30394 = cljs.core.next(lines__$1);
var G__30395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30396 = result__$1;
gline = G__30393;
lines__$1 = G__30394;
relseg = G__30395;
result = G__30396;
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
var map__29258 = segmap;
var map__29258__$1 = (((((!((map__29258 == null))))?(((((map__29258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29258):map__29258);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__29257_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29257_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__29266 = arguments.length;
switch (G__29266) {
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
var vec__29283 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30407 = cljs.core.next(segs__$1);
var G__30408 = nrelseg;
var G__30409 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30407;
relseg__$1 = G__30408;
result__$1 = G__30409;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(1),null);
var G__30410 = (gline + (1));
var G__30411 = cljs.core.next(lines__$1);
var G__30412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30413 = result__$1;
gline = G__30410;
lines__$1 = G__30411;
relseg = G__30412;
result = G__30413;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__29289){
var vec__29290 = p__29289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__29293){
var vec__29294 = p__29293;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(4),null);
var seg = vec__29294;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__29297){
var vec__29300 = p__29297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(4),null);
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
var seq__29313 = cljs.core.seq(infos);
var chunk__29314 = null;
var count__29315 = (0);
var i__29316 = (0);
while(true){
if((i__29316 < count__29315)){
var info = chunk__29314.cljs$core$IIndexed$_nth$arity$2(null,i__29316);
var segv_30422 = info__GT_segv(info,source_idx,line,col);
var gline_30423 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30424 = cljs.core.count(cljs.core.deref(lines));
if((gline_30423 > (lc_30424 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29313,chunk__29314,count__29315,i__29316,segv_30422,gline_30423,lc_30424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30423 - (lc_30424 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30422], null));
});})(seq__29313,chunk__29314,count__29315,i__29316,segv_30422,gline_30423,lc_30424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29313,chunk__29314,count__29315,i__29316,segv_30422,gline_30423,lc_30424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30423], null),cljs.core.conj,segv_30422);
});})(seq__29313,chunk__29314,count__29315,i__29316,segv_30422,gline_30423,lc_30424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30426 = seq__29313;
var G__30427 = chunk__29314;
var G__30428 = count__29315;
var G__30429 = (i__29316 + (1));
seq__29313 = G__30426;
chunk__29314 = G__30427;
count__29315 = G__30428;
i__29316 = G__30429;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29313);
if(temp__5735__auto__){
var seq__29313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29313__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29313__$1);
var G__30430 = cljs.core.chunk_rest(seq__29313__$1);
var G__30431 = c__4609__auto__;
var G__30432 = cljs.core.count(c__4609__auto__);
var G__30433 = (0);
seq__29313 = G__30430;
chunk__29314 = G__30431;
count__29315 = G__30432;
i__29316 = G__30433;
continue;
} else {
var info = cljs.core.first(seq__29313__$1);
var segv_30434 = info__GT_segv(info,source_idx,line,col);
var gline_30435 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30436 = cljs.core.count(cljs.core.deref(lines));
if((gline_30435 > (lc_30436 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29313,chunk__29314,count__29315,i__29316,segv_30434,gline_30435,lc_30436,info,seq__29313__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30435 - (lc_30436 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30434], null));
});})(seq__29313,chunk__29314,count__29315,i__29316,segv_30434,gline_30435,lc_30436,info,seq__29313__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29313,chunk__29314,count__29315,i__29316,segv_30434,gline_30435,lc_30436,info,seq__29313__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30435], null),cljs.core.conj,segv_30434);
});})(seq__29313,chunk__29314,count__29315,i__29316,segv_30434,gline_30435,lc_30436,info,seq__29313__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30441 = cljs.core.next(seq__29313__$1);
var G__30442 = null;
var G__30443 = (0);
var G__30444 = (0);
seq__29313 = G__30441;
chunk__29314 = G__30442;
count__29315 = G__30443;
i__29316 = G__30444;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__29328_30446 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29329_30447 = null;
var count__29330_30448 = (0);
var i__29331_30449 = (0);
while(true){
if((i__29331_30449 < count__29330_30448)){
var vec__29573_30450 = chunk__29329_30447.cljs$core$IIndexed$_nth$arity$2(null,i__29331_30449);
var source_idx_30451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573_30450,(0),null);
var vec__29576_30452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573_30450,(1),null);
var __30453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576_30452,(0),null);
var lines_30454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576_30452,(1),null);
var seq__29579_30456 = cljs.core.seq(lines_30454__$1);
var chunk__29580_30457 = null;
var count__29581_30458 = (0);
var i__29582_30459 = (0);
while(true){
if((i__29582_30459 < count__29581_30458)){
var vec__29664_30460 = chunk__29580_30457.cljs$core$IIndexed$_nth$arity$2(null,i__29582_30459);
var line_30461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664_30460,(0),null);
var cols_30462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664_30460,(1),null);
var seq__29667_30463 = cljs.core.seq(cols_30462);
var chunk__29668_30464 = null;
var count__29669_30465 = (0);
var i__29670_30466 = (0);
while(true){
if((i__29670_30466 < count__29669_30465)){
var vec__29683_30468 = chunk__29668_30464.cljs$core$IIndexed$_nth$arity$2(null,i__29670_30466);
var col_30469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29683_30468,(0),null);
var infos_30470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29683_30468,(1),null);
encode_cols(infos_30470,source_idx_30451,line_30461,col_30469);


var G__30472 = seq__29667_30463;
var G__30473 = chunk__29668_30464;
var G__30474 = count__29669_30465;
var G__30475 = (i__29670_30466 + (1));
seq__29667_30463 = G__30472;
chunk__29668_30464 = G__30473;
count__29669_30465 = G__30474;
i__29670_30466 = G__30475;
continue;
} else {
var temp__5735__auto___30481 = cljs.core.seq(seq__29667_30463);
if(temp__5735__auto___30481){
var seq__29667_30482__$1 = temp__5735__auto___30481;
if(cljs.core.chunked_seq_QMARK_(seq__29667_30482__$1)){
var c__4609__auto___30483 = cljs.core.chunk_first(seq__29667_30482__$1);
var G__30485 = cljs.core.chunk_rest(seq__29667_30482__$1);
var G__30486 = c__4609__auto___30483;
var G__30487 = cljs.core.count(c__4609__auto___30483);
var G__30488 = (0);
seq__29667_30463 = G__30485;
chunk__29668_30464 = G__30486;
count__29669_30465 = G__30487;
i__29670_30466 = G__30488;
continue;
} else {
var vec__29686_30493 = cljs.core.first(seq__29667_30482__$1);
var col_30494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30493,(0),null);
var infos_30495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30493,(1),null);
encode_cols(infos_30495,source_idx_30451,line_30461,col_30494);


var G__30499 = cljs.core.next(seq__29667_30482__$1);
var G__30500 = null;
var G__30501 = (0);
var G__30502 = (0);
seq__29667_30463 = G__30499;
chunk__29668_30464 = G__30500;
count__29669_30465 = G__30501;
i__29670_30466 = G__30502;
continue;
}
} else {
}
}
break;
}


var G__30507 = seq__29579_30456;
var G__30508 = chunk__29580_30457;
var G__30509 = count__29581_30458;
var G__30510 = (i__29582_30459 + (1));
seq__29579_30456 = G__30507;
chunk__29580_30457 = G__30508;
count__29581_30458 = G__30509;
i__29582_30459 = G__30510;
continue;
} else {
var temp__5735__auto___30516 = cljs.core.seq(seq__29579_30456);
if(temp__5735__auto___30516){
var seq__29579_30517__$1 = temp__5735__auto___30516;
if(cljs.core.chunked_seq_QMARK_(seq__29579_30517__$1)){
var c__4609__auto___30518 = cljs.core.chunk_first(seq__29579_30517__$1);
var G__30519 = cljs.core.chunk_rest(seq__29579_30517__$1);
var G__30520 = c__4609__auto___30518;
var G__30521 = cljs.core.count(c__4609__auto___30518);
var G__30522 = (0);
seq__29579_30456 = G__30519;
chunk__29580_30457 = G__30520;
count__29581_30458 = G__30521;
i__29582_30459 = G__30522;
continue;
} else {
var vec__29691_30527 = cljs.core.first(seq__29579_30517__$1);
var line_30528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29691_30527,(0),null);
var cols_30529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29691_30527,(1),null);
var seq__29694_30533 = cljs.core.seq(cols_30529);
var chunk__29695_30534 = null;
var count__29696_30535 = (0);
var i__29697_30536 = (0);
while(true){
if((i__29697_30536 < count__29696_30535)){
var vec__29708_30541 = chunk__29695_30534.cljs$core$IIndexed$_nth$arity$2(null,i__29697_30536);
var col_30542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708_30541,(0),null);
var infos_30543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708_30541,(1),null);
encode_cols(infos_30543,source_idx_30451,line_30528,col_30542);


var G__30546 = seq__29694_30533;
var G__30547 = chunk__29695_30534;
var G__30548 = count__29696_30535;
var G__30549 = (i__29697_30536 + (1));
seq__29694_30533 = G__30546;
chunk__29695_30534 = G__30547;
count__29696_30535 = G__30548;
i__29697_30536 = G__30549;
continue;
} else {
var temp__5735__auto___30555__$1 = cljs.core.seq(seq__29694_30533);
if(temp__5735__auto___30555__$1){
var seq__29694_30556__$1 = temp__5735__auto___30555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29694_30556__$1)){
var c__4609__auto___30560 = cljs.core.chunk_first(seq__29694_30556__$1);
var G__30562 = cljs.core.chunk_rest(seq__29694_30556__$1);
var G__30563 = c__4609__auto___30560;
var G__30564 = cljs.core.count(c__4609__auto___30560);
var G__30565 = (0);
seq__29694_30533 = G__30562;
chunk__29695_30534 = G__30563;
count__29696_30535 = G__30564;
i__29697_30536 = G__30565;
continue;
} else {
var vec__29715_30566 = cljs.core.first(seq__29694_30556__$1);
var col_30567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29715_30566,(0),null);
var infos_30568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29715_30566,(1),null);
encode_cols(infos_30568,source_idx_30451,line_30528,col_30567);


var G__30573 = cljs.core.next(seq__29694_30556__$1);
var G__30574 = null;
var G__30575 = (0);
var G__30576 = (0);
seq__29694_30533 = G__30573;
chunk__29695_30534 = G__30574;
count__29696_30535 = G__30575;
i__29697_30536 = G__30576;
continue;
}
} else {
}
}
break;
}


var G__30578 = cljs.core.next(seq__29579_30517__$1);
var G__30579 = null;
var G__30580 = (0);
var G__30581 = (0);
seq__29579_30456 = G__30578;
chunk__29580_30457 = G__30579;
count__29581_30458 = G__30580;
i__29582_30459 = G__30581;
continue;
}
} else {
}
}
break;
}


var G__30582 = seq__29328_30446;
var G__30583 = chunk__29329_30447;
var G__30584 = count__29330_30448;
var G__30585 = (i__29331_30449 + (1));
seq__29328_30446 = G__30582;
chunk__29329_30447 = G__30583;
count__29330_30448 = G__30584;
i__29331_30449 = G__30585;
continue;
} else {
var temp__5735__auto___30586 = cljs.core.seq(seq__29328_30446);
if(temp__5735__auto___30586){
var seq__29328_30587__$1 = temp__5735__auto___30586;
if(cljs.core.chunked_seq_QMARK_(seq__29328_30587__$1)){
var c__4609__auto___30588 = cljs.core.chunk_first(seq__29328_30587__$1);
var G__30590 = cljs.core.chunk_rest(seq__29328_30587__$1);
var G__30591 = c__4609__auto___30588;
var G__30592 = cljs.core.count(c__4609__auto___30588);
var G__30593 = (0);
seq__29328_30446 = G__30590;
chunk__29329_30447 = G__30591;
count__29330_30448 = G__30592;
i__29331_30449 = G__30593;
continue;
} else {
var vec__29719_30595 = cljs.core.first(seq__29328_30587__$1);
var source_idx_30596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29719_30595,(0),null);
var vec__29722_30597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29719_30595,(1),null);
var __30598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722_30597,(0),null);
var lines_30599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722_30597,(1),null);
var seq__29728_30600 = cljs.core.seq(lines_30599__$1);
var chunk__29729_30601 = null;
var count__29730_30602 = (0);
var i__29731_30603 = (0);
while(true){
if((i__29731_30603 < count__29730_30602)){
var vec__29780_30604 = chunk__29729_30601.cljs$core$IIndexed$_nth$arity$2(null,i__29731_30603);
var line_30605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780_30604,(0),null);
var cols_30606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780_30604,(1),null);
var seq__29783_30607 = cljs.core.seq(cols_30606);
var chunk__29784_30608 = null;
var count__29785_30609 = (0);
var i__29786_30610 = (0);
while(true){
if((i__29786_30610 < count__29785_30609)){
var vec__29795_30612 = chunk__29784_30608.cljs$core$IIndexed$_nth$arity$2(null,i__29786_30610);
var col_30613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795_30612,(0),null);
var infos_30614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795_30612,(1),null);
encode_cols(infos_30614,source_idx_30596,line_30605,col_30613);


var G__30616 = seq__29783_30607;
var G__30617 = chunk__29784_30608;
var G__30618 = count__29785_30609;
var G__30619 = (i__29786_30610 + (1));
seq__29783_30607 = G__30616;
chunk__29784_30608 = G__30617;
count__29785_30609 = G__30618;
i__29786_30610 = G__30619;
continue;
} else {
var temp__5735__auto___30622__$1 = cljs.core.seq(seq__29783_30607);
if(temp__5735__auto___30622__$1){
var seq__29783_30623__$1 = temp__5735__auto___30622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29783_30623__$1)){
var c__4609__auto___30624 = cljs.core.chunk_first(seq__29783_30623__$1);
var G__30625 = cljs.core.chunk_rest(seq__29783_30623__$1);
var G__30626 = c__4609__auto___30624;
var G__30627 = cljs.core.count(c__4609__auto___30624);
var G__30628 = (0);
seq__29783_30607 = G__30625;
chunk__29784_30608 = G__30626;
count__29785_30609 = G__30627;
i__29786_30610 = G__30628;
continue;
} else {
var vec__29800_30629 = cljs.core.first(seq__29783_30623__$1);
var col_30630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800_30629,(0),null);
var infos_30631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800_30629,(1),null);
encode_cols(infos_30631,source_idx_30596,line_30605,col_30630);


var G__30632 = cljs.core.next(seq__29783_30623__$1);
var G__30633 = null;
var G__30634 = (0);
var G__30635 = (0);
seq__29783_30607 = G__30632;
chunk__29784_30608 = G__30633;
count__29785_30609 = G__30634;
i__29786_30610 = G__30635;
continue;
}
} else {
}
}
break;
}


var G__30636 = seq__29728_30600;
var G__30637 = chunk__29729_30601;
var G__30638 = count__29730_30602;
var G__30639 = (i__29731_30603 + (1));
seq__29728_30600 = G__30636;
chunk__29729_30601 = G__30637;
count__29730_30602 = G__30638;
i__29731_30603 = G__30639;
continue;
} else {
var temp__5735__auto___30641__$1 = cljs.core.seq(seq__29728_30600);
if(temp__5735__auto___30641__$1){
var seq__29728_30642__$1 = temp__5735__auto___30641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29728_30642__$1)){
var c__4609__auto___30644 = cljs.core.chunk_first(seq__29728_30642__$1);
var G__30645 = cljs.core.chunk_rest(seq__29728_30642__$1);
var G__30646 = c__4609__auto___30644;
var G__30647 = cljs.core.count(c__4609__auto___30644);
var G__30648 = (0);
seq__29728_30600 = G__30645;
chunk__29729_30601 = G__30646;
count__29730_30602 = G__30647;
i__29731_30603 = G__30648;
continue;
} else {
var vec__29803_30650 = cljs.core.first(seq__29728_30642__$1);
var line_30651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29803_30650,(0),null);
var cols_30652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29803_30650,(1),null);
var seq__29806_30655 = cljs.core.seq(cols_30652);
var chunk__29807_30656 = null;
var count__29808_30657 = (0);
var i__29809_30658 = (0);
while(true){
if((i__29809_30658 < count__29808_30657)){
var vec__29825_30659 = chunk__29807_30656.cljs$core$IIndexed$_nth$arity$2(null,i__29809_30658);
var col_30660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825_30659,(0),null);
var infos_30661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825_30659,(1),null);
encode_cols(infos_30661,source_idx_30596,line_30651,col_30660);


var G__30662 = seq__29806_30655;
var G__30663 = chunk__29807_30656;
var G__30664 = count__29808_30657;
var G__30665 = (i__29809_30658 + (1));
seq__29806_30655 = G__30662;
chunk__29807_30656 = G__30663;
count__29808_30657 = G__30664;
i__29809_30658 = G__30665;
continue;
} else {
var temp__5735__auto___30666__$2 = cljs.core.seq(seq__29806_30655);
if(temp__5735__auto___30666__$2){
var seq__29806_30667__$1 = temp__5735__auto___30666__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29806_30667__$1)){
var c__4609__auto___30668 = cljs.core.chunk_first(seq__29806_30667__$1);
var G__30669 = cljs.core.chunk_rest(seq__29806_30667__$1);
var G__30670 = c__4609__auto___30668;
var G__30671 = cljs.core.count(c__4609__auto___30668);
var G__30672 = (0);
seq__29806_30655 = G__30669;
chunk__29807_30656 = G__30670;
count__29808_30657 = G__30671;
i__29809_30658 = G__30672;
continue;
} else {
var vec__29834_30673 = cljs.core.first(seq__29806_30667__$1);
var col_30674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29834_30673,(0),null);
var infos_30675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29834_30673,(1),null);
encode_cols(infos_30675,source_idx_30596,line_30651,col_30674);


var G__30677 = cljs.core.next(seq__29806_30667__$1);
var G__30678 = null;
var G__30679 = (0);
var G__30680 = (0);
seq__29806_30655 = G__30677;
chunk__29807_30656 = G__30678;
count__29808_30657 = G__30679;
i__29809_30658 = G__30680;
continue;
}
} else {
}
}
break;
}


var G__30681 = cljs.core.next(seq__29728_30642__$1);
var G__30682 = null;
var G__30683 = (0);
var G__30684 = (0);
seq__29728_30600 = G__30681;
chunk__29729_30601 = G__30682;
count__29730_30602 = G__30683;
i__29731_30603 = G__30684;
continue;
}
} else {
}
}
break;
}


var G__30685 = cljs.core.next(seq__29328_30587__$1);
var G__30686 = null;
var G__30687 = (0);
var G__30688 = (0);
seq__29328_30446 = G__30685;
chunk__29329_30447 = G__30686;
count__29330_30448 = G__30687;
i__29331_30449 = G__30688;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29844 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__29304_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29304_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__29305_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29305_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29306_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__29306_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__29846 = G__29844;
goog.object.set(G__29846,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29846;
} else {
return G__29844;
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
var vec__29848 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29848,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29848,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__29851 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29851,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29851,(1),null);
var G__30695 = cljs.core.next(col_map_seq);
var G__30696 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29851,col,infos,vec__29848,line,col_map){
return (function (v,p__29854){
var map__29855 = p__29854;
var map__29855__$1 = (((((!((map__29855 == null))))?(((((map__29855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29855):map__29855);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29851,col,infos,vec__29848,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__30695;
new_cols = G__30696;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__30698 = cljs.core.next(line_map_seq);
var G__30699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__30698;
new_lines = G__30699;
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
var seq__29863_30700 = cljs.core.seq(reverse_map);
var chunk__29864_30701 = null;
var count__29865_30702 = (0);
var i__29866_30703 = (0);
while(true){
if((i__29866_30703 < count__29865_30702)){
var vec__30084_30705 = chunk__29864_30701.cljs$core$IIndexed$_nth$arity$2(null,i__29866_30703);
var line_30706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084_30705,(0),null);
var columns_30707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084_30705,(1),null);
var seq__30087_30708 = cljs.core.seq(columns_30707);
var chunk__30088_30709 = null;
var count__30089_30710 = (0);
var i__30090_30712 = (0);
while(true){
if((i__30090_30712 < count__30089_30710)){
var vec__30156_30715 = chunk__30088_30709.cljs$core$IIndexed$_nth$arity$2(null,i__30090_30712);
var column_30716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156_30715,(0),null);
var column_info_30717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156_30715,(1),null);
var seq__30161_30718 = cljs.core.seq(column_info_30717);
var chunk__30162_30719 = null;
var count__30163_30720 = (0);
var i__30164_30721 = (0);
while(true){
if((i__30164_30721 < count__30163_30720)){
var map__30179_30722 = chunk__30162_30719.cljs$core$IIndexed$_nth$arity$2(null,i__30164_30721);
var map__30179_30723__$1 = (((((!((map__30179_30722 == null))))?(((((map__30179_30722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30179_30722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30179_30722):map__30179_30722);
var gline_30724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30179_30723__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30179_30723__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30179_30723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30724], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30161_30718,chunk__30162_30719,count__30163_30720,i__30164_30721,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30179_30722,map__30179_30723__$1,gline_30724,gcol_30725,name_30726,vec__30156_30715,column_30716,column_info_30717,vec__30084_30705,line_30706,columns_30707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30725], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30706,new cljs.core.Keyword(null,"col","col",-1959363084),column_30716,new cljs.core.Keyword(null,"name","name",1843675177),name_30726], null));
});})(seq__30161_30718,chunk__30162_30719,count__30163_30720,i__30164_30721,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30179_30722,map__30179_30723__$1,gline_30724,gcol_30725,name_30726,vec__30156_30715,column_30716,column_info_30717,vec__30084_30705,line_30706,columns_30707,inverted))
,cljs.core.sorted_map()));


var G__30738 = seq__30161_30718;
var G__30739 = chunk__30162_30719;
var G__30740 = count__30163_30720;
var G__30741 = (i__30164_30721 + (1));
seq__30161_30718 = G__30738;
chunk__30162_30719 = G__30739;
count__30163_30720 = G__30740;
i__30164_30721 = G__30741;
continue;
} else {
var temp__5735__auto___30742 = cljs.core.seq(seq__30161_30718);
if(temp__5735__auto___30742){
var seq__30161_30743__$1 = temp__5735__auto___30742;
if(cljs.core.chunked_seq_QMARK_(seq__30161_30743__$1)){
var c__4609__auto___30744 = cljs.core.chunk_first(seq__30161_30743__$1);
var G__30745 = cljs.core.chunk_rest(seq__30161_30743__$1);
var G__30746 = c__4609__auto___30744;
var G__30747 = cljs.core.count(c__4609__auto___30744);
var G__30748 = (0);
seq__30161_30718 = G__30745;
chunk__30162_30719 = G__30746;
count__30163_30720 = G__30747;
i__30164_30721 = G__30748;
continue;
} else {
var map__30184_30752 = cljs.core.first(seq__30161_30743__$1);
var map__30184_30753__$1 = (((((!((map__30184_30752 == null))))?(((((map__30184_30752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30184_30752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30184_30752):map__30184_30752);
var gline_30754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30184_30753__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30184_30753__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30184_30753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30754], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30161_30718,chunk__30162_30719,count__30163_30720,i__30164_30721,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30184_30752,map__30184_30753__$1,gline_30754,gcol_30755,name_30756,seq__30161_30743__$1,temp__5735__auto___30742,vec__30156_30715,column_30716,column_info_30717,vec__30084_30705,line_30706,columns_30707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30755], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30706,new cljs.core.Keyword(null,"col","col",-1959363084),column_30716,new cljs.core.Keyword(null,"name","name",1843675177),name_30756], null));
});})(seq__30161_30718,chunk__30162_30719,count__30163_30720,i__30164_30721,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30184_30752,map__30184_30753__$1,gline_30754,gcol_30755,name_30756,seq__30161_30743__$1,temp__5735__auto___30742,vec__30156_30715,column_30716,column_info_30717,vec__30084_30705,line_30706,columns_30707,inverted))
,cljs.core.sorted_map()));


var G__30761 = cljs.core.next(seq__30161_30743__$1);
var G__30762 = null;
var G__30763 = (0);
var G__30764 = (0);
seq__30161_30718 = G__30761;
chunk__30162_30719 = G__30762;
count__30163_30720 = G__30763;
i__30164_30721 = G__30764;
continue;
}
} else {
}
}
break;
}


var G__30765 = seq__30087_30708;
var G__30766 = chunk__30088_30709;
var G__30767 = count__30089_30710;
var G__30768 = (i__30090_30712 + (1));
seq__30087_30708 = G__30765;
chunk__30088_30709 = G__30766;
count__30089_30710 = G__30767;
i__30090_30712 = G__30768;
continue;
} else {
var temp__5735__auto___30772 = cljs.core.seq(seq__30087_30708);
if(temp__5735__auto___30772){
var seq__30087_30773__$1 = temp__5735__auto___30772;
if(cljs.core.chunked_seq_QMARK_(seq__30087_30773__$1)){
var c__4609__auto___30774 = cljs.core.chunk_first(seq__30087_30773__$1);
var G__30775 = cljs.core.chunk_rest(seq__30087_30773__$1);
var G__30776 = c__4609__auto___30774;
var G__30777 = cljs.core.count(c__4609__auto___30774);
var G__30778 = (0);
seq__30087_30708 = G__30775;
chunk__30088_30709 = G__30776;
count__30089_30710 = G__30777;
i__30090_30712 = G__30778;
continue;
} else {
var vec__30187_30779 = cljs.core.first(seq__30087_30773__$1);
var column_30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30187_30779,(0),null);
var column_info_30781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30187_30779,(1),null);
var seq__30192_30782 = cljs.core.seq(column_info_30781);
var chunk__30193_30783 = null;
var count__30194_30784 = (0);
var i__30195_30785 = (0);
while(true){
if((i__30195_30785 < count__30194_30784)){
var map__30206_30787 = chunk__30193_30783.cljs$core$IIndexed$_nth$arity$2(null,i__30195_30785);
var map__30206_30788__$1 = (((((!((map__30206_30787 == null))))?(((((map__30206_30787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30206_30787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30206_30787):map__30206_30787);
var gline_30789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206_30788__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206_30788__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206_30788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30789], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30192_30782,chunk__30193_30783,count__30194_30784,i__30195_30785,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30206_30787,map__30206_30788__$1,gline_30789,gcol_30790,name_30791,vec__30187_30779,column_30780,column_info_30781,seq__30087_30773__$1,temp__5735__auto___30772,vec__30084_30705,line_30706,columns_30707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30790], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30706,new cljs.core.Keyword(null,"col","col",-1959363084),column_30780,new cljs.core.Keyword(null,"name","name",1843675177),name_30791], null));
});})(seq__30192_30782,chunk__30193_30783,count__30194_30784,i__30195_30785,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30206_30787,map__30206_30788__$1,gline_30789,gcol_30790,name_30791,vec__30187_30779,column_30780,column_info_30781,seq__30087_30773__$1,temp__5735__auto___30772,vec__30084_30705,line_30706,columns_30707,inverted))
,cljs.core.sorted_map()));


var G__30799 = seq__30192_30782;
var G__30800 = chunk__30193_30783;
var G__30801 = count__30194_30784;
var G__30802 = (i__30195_30785 + (1));
seq__30192_30782 = G__30799;
chunk__30193_30783 = G__30800;
count__30194_30784 = G__30801;
i__30195_30785 = G__30802;
continue;
} else {
var temp__5735__auto___30804__$1 = cljs.core.seq(seq__30192_30782);
if(temp__5735__auto___30804__$1){
var seq__30192_30805__$1 = temp__5735__auto___30804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30192_30805__$1)){
var c__4609__auto___30806 = cljs.core.chunk_first(seq__30192_30805__$1);
var G__30807 = cljs.core.chunk_rest(seq__30192_30805__$1);
var G__30808 = c__4609__auto___30806;
var G__30809 = cljs.core.count(c__4609__auto___30806);
var G__30810 = (0);
seq__30192_30782 = G__30807;
chunk__30193_30783 = G__30808;
count__30194_30784 = G__30809;
i__30195_30785 = G__30810;
continue;
} else {
var map__30213_30812 = cljs.core.first(seq__30192_30805__$1);
var map__30213_30813__$1 = (((((!((map__30213_30812 == null))))?(((((map__30213_30812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30213_30812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30213_30812):map__30213_30812);
var gline_30814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213_30813__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213_30813__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213_30813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30814], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30192_30782,chunk__30193_30783,count__30194_30784,i__30195_30785,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30213_30812,map__30213_30813__$1,gline_30814,gcol_30815,name_30816,seq__30192_30805__$1,temp__5735__auto___30804__$1,vec__30187_30779,column_30780,column_info_30781,seq__30087_30773__$1,temp__5735__auto___30772,vec__30084_30705,line_30706,columns_30707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30815], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30706,new cljs.core.Keyword(null,"col","col",-1959363084),column_30780,new cljs.core.Keyword(null,"name","name",1843675177),name_30816], null));
});})(seq__30192_30782,chunk__30193_30783,count__30194_30784,i__30195_30785,seq__30087_30708,chunk__30088_30709,count__30089_30710,i__30090_30712,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30213_30812,map__30213_30813__$1,gline_30814,gcol_30815,name_30816,seq__30192_30805__$1,temp__5735__auto___30804__$1,vec__30187_30779,column_30780,column_info_30781,seq__30087_30773__$1,temp__5735__auto___30772,vec__30084_30705,line_30706,columns_30707,inverted))
,cljs.core.sorted_map()));


var G__30822 = cljs.core.next(seq__30192_30805__$1);
var G__30823 = null;
var G__30824 = (0);
var G__30825 = (0);
seq__30192_30782 = G__30822;
chunk__30193_30783 = G__30823;
count__30194_30784 = G__30824;
i__30195_30785 = G__30825;
continue;
}
} else {
}
}
break;
}


var G__30827 = cljs.core.next(seq__30087_30773__$1);
var G__30828 = null;
var G__30829 = (0);
var G__30830 = (0);
seq__30087_30708 = G__30827;
chunk__30088_30709 = G__30828;
count__30089_30710 = G__30829;
i__30090_30712 = G__30830;
continue;
}
} else {
}
}
break;
}


var G__30831 = seq__29863_30700;
var G__30832 = chunk__29864_30701;
var G__30833 = count__29865_30702;
var G__30834 = (i__29866_30703 + (1));
seq__29863_30700 = G__30831;
chunk__29864_30701 = G__30832;
count__29865_30702 = G__30833;
i__29866_30703 = G__30834;
continue;
} else {
var temp__5735__auto___30838 = cljs.core.seq(seq__29863_30700);
if(temp__5735__auto___30838){
var seq__29863_30839__$1 = temp__5735__auto___30838;
if(cljs.core.chunked_seq_QMARK_(seq__29863_30839__$1)){
var c__4609__auto___30840 = cljs.core.chunk_first(seq__29863_30839__$1);
var G__30842 = cljs.core.chunk_rest(seq__29863_30839__$1);
var G__30843 = c__4609__auto___30840;
var G__30844 = cljs.core.count(c__4609__auto___30840);
var G__30845 = (0);
seq__29863_30700 = G__30842;
chunk__29864_30701 = G__30843;
count__29865_30702 = G__30844;
i__29866_30703 = G__30845;
continue;
} else {
var vec__30227_30847 = cljs.core.first(seq__29863_30839__$1);
var line_30848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30227_30847,(0),null);
var columns_30849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30227_30847,(1),null);
var seq__30230_30850 = cljs.core.seq(columns_30849);
var chunk__30231_30851 = null;
var count__30232_30852 = (0);
var i__30233_30853 = (0);
while(true){
if((i__30233_30853 < count__30232_30852)){
var vec__30283_30854 = chunk__30231_30851.cljs$core$IIndexed$_nth$arity$2(null,i__30233_30853);
var column_30855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_30854,(0),null);
var column_info_30856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283_30854,(1),null);
var seq__30286_30857 = cljs.core.seq(column_info_30856);
var chunk__30287_30858 = null;
var count__30288_30859 = (0);
var i__30289_30860 = (0);
while(true){
if((i__30289_30860 < count__30288_30859)){
var map__30300_30861 = chunk__30287_30858.cljs$core$IIndexed$_nth$arity$2(null,i__30289_30860);
var map__30300_30862__$1 = (((((!((map__30300_30861 == null))))?(((((map__30300_30861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300_30861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30300_30861):map__30300_30861);
var gline_30863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30862__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30862__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300_30862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30863], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30286_30857,chunk__30287_30858,count__30288_30859,i__30289_30860,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30300_30861,map__30300_30862__$1,gline_30863,gcol_30864,name_30865,vec__30283_30854,column_30855,column_info_30856,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30864], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30848,new cljs.core.Keyword(null,"col","col",-1959363084),column_30855,new cljs.core.Keyword(null,"name","name",1843675177),name_30865], null));
});})(seq__30286_30857,chunk__30287_30858,count__30288_30859,i__30289_30860,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30300_30861,map__30300_30862__$1,gline_30863,gcol_30864,name_30865,vec__30283_30854,column_30855,column_info_30856,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted))
,cljs.core.sorted_map()));


var G__30868 = seq__30286_30857;
var G__30869 = chunk__30287_30858;
var G__30870 = count__30288_30859;
var G__30871 = (i__30289_30860 + (1));
seq__30286_30857 = G__30868;
chunk__30287_30858 = G__30869;
count__30288_30859 = G__30870;
i__30289_30860 = G__30871;
continue;
} else {
var temp__5735__auto___30873__$1 = cljs.core.seq(seq__30286_30857);
if(temp__5735__auto___30873__$1){
var seq__30286_30874__$1 = temp__5735__auto___30873__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30286_30874__$1)){
var c__4609__auto___30875 = cljs.core.chunk_first(seq__30286_30874__$1);
var G__30877 = cljs.core.chunk_rest(seq__30286_30874__$1);
var G__30878 = c__4609__auto___30875;
var G__30879 = cljs.core.count(c__4609__auto___30875);
var G__30880 = (0);
seq__30286_30857 = G__30877;
chunk__30287_30858 = G__30878;
count__30288_30859 = G__30879;
i__30289_30860 = G__30880;
continue;
} else {
var map__30305_30882 = cljs.core.first(seq__30286_30874__$1);
var map__30305_30883__$1 = (((((!((map__30305_30882 == null))))?(((((map__30305_30882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305_30882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30305_30882):map__30305_30882);
var gline_30884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30305_30883__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30305_30883__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30305_30883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30884], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30286_30857,chunk__30287_30858,count__30288_30859,i__30289_30860,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30305_30882,map__30305_30883__$1,gline_30884,gcol_30885,name_30886,seq__30286_30874__$1,temp__5735__auto___30873__$1,vec__30283_30854,column_30855,column_info_30856,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30848,new cljs.core.Keyword(null,"col","col",-1959363084),column_30855,new cljs.core.Keyword(null,"name","name",1843675177),name_30886], null));
});})(seq__30286_30857,chunk__30287_30858,count__30288_30859,i__30289_30860,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30305_30882,map__30305_30883__$1,gline_30884,gcol_30885,name_30886,seq__30286_30874__$1,temp__5735__auto___30873__$1,vec__30283_30854,column_30855,column_info_30856,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted))
,cljs.core.sorted_map()));


var G__30896 = cljs.core.next(seq__30286_30874__$1);
var G__30897 = null;
var G__30898 = (0);
var G__30899 = (0);
seq__30286_30857 = G__30896;
chunk__30287_30858 = G__30897;
count__30288_30859 = G__30898;
i__30289_30860 = G__30899;
continue;
}
} else {
}
}
break;
}


var G__30900 = seq__30230_30850;
var G__30901 = chunk__30231_30851;
var G__30902 = count__30232_30852;
var G__30903 = (i__30233_30853 + (1));
seq__30230_30850 = G__30900;
chunk__30231_30851 = G__30901;
count__30232_30852 = G__30902;
i__30233_30853 = G__30903;
continue;
} else {
var temp__5735__auto___30904__$1 = cljs.core.seq(seq__30230_30850);
if(temp__5735__auto___30904__$1){
var seq__30230_30905__$1 = temp__5735__auto___30904__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30230_30905__$1)){
var c__4609__auto___30906 = cljs.core.chunk_first(seq__30230_30905__$1);
var G__30907 = cljs.core.chunk_rest(seq__30230_30905__$1);
var G__30908 = c__4609__auto___30906;
var G__30909 = cljs.core.count(c__4609__auto___30906);
var G__30910 = (0);
seq__30230_30850 = G__30907;
chunk__30231_30851 = G__30908;
count__30232_30852 = G__30909;
i__30233_30853 = G__30910;
continue;
} else {
var vec__30310_30911 = cljs.core.first(seq__30230_30905__$1);
var column_30912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310_30911,(0),null);
var column_info_30913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310_30911,(1),null);
var seq__30313_30914 = cljs.core.seq(column_info_30913);
var chunk__30314_30915 = null;
var count__30315_30916 = (0);
var i__30316_30917 = (0);
while(true){
if((i__30316_30917 < count__30315_30916)){
var map__30334_30918 = chunk__30314_30915.cljs$core$IIndexed$_nth$arity$2(null,i__30316_30917);
var map__30334_30919__$1 = (((((!((map__30334_30918 == null))))?(((((map__30334_30918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30334_30918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30334_30918):map__30334_30918);
var gline_30920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334_30919__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334_30919__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334_30919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30920], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30313_30914,chunk__30314_30915,count__30315_30916,i__30316_30917,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30334_30918,map__30334_30919__$1,gline_30920,gcol_30921,name_30922,vec__30310_30911,column_30912,column_info_30913,seq__30230_30905__$1,temp__5735__auto___30904__$1,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30921], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30848,new cljs.core.Keyword(null,"col","col",-1959363084),column_30912,new cljs.core.Keyword(null,"name","name",1843675177),name_30922], null));
});})(seq__30313_30914,chunk__30314_30915,count__30315_30916,i__30316_30917,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30334_30918,map__30334_30919__$1,gline_30920,gcol_30921,name_30922,vec__30310_30911,column_30912,column_info_30913,seq__30230_30905__$1,temp__5735__auto___30904__$1,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted))
,cljs.core.sorted_map()));


var G__30938 = seq__30313_30914;
var G__30939 = chunk__30314_30915;
var G__30940 = count__30315_30916;
var G__30941 = (i__30316_30917 + (1));
seq__30313_30914 = G__30938;
chunk__30314_30915 = G__30939;
count__30315_30916 = G__30940;
i__30316_30917 = G__30941;
continue;
} else {
var temp__5735__auto___30943__$2 = cljs.core.seq(seq__30313_30914);
if(temp__5735__auto___30943__$2){
var seq__30313_30945__$1 = temp__5735__auto___30943__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30313_30945__$1)){
var c__4609__auto___30947 = cljs.core.chunk_first(seq__30313_30945__$1);
var G__30948 = cljs.core.chunk_rest(seq__30313_30945__$1);
var G__30949 = c__4609__auto___30947;
var G__30950 = cljs.core.count(c__4609__auto___30947);
var G__30951 = (0);
seq__30313_30914 = G__30948;
chunk__30314_30915 = G__30949;
count__30315_30916 = G__30950;
i__30316_30917 = G__30951;
continue;
} else {
var map__30340_30955 = cljs.core.first(seq__30313_30945__$1);
var map__30340_30956__$1 = (((((!((map__30340_30955 == null))))?(((((map__30340_30955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30340_30955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30340_30955):map__30340_30955);
var gline_30957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30340_30956__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30340_30956__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30340_30956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30957], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__30313_30914,chunk__30314_30915,count__30315_30916,i__30316_30917,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30340_30955,map__30340_30956__$1,gline_30957,gcol_30958,name_30959,seq__30313_30945__$1,temp__5735__auto___30943__$2,vec__30310_30911,column_30912,column_info_30913,seq__30230_30905__$1,temp__5735__auto___30904__$1,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30958], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_30848,new cljs.core.Keyword(null,"col","col",-1959363084),column_30912,new cljs.core.Keyword(null,"name","name",1843675177),name_30959], null));
});})(seq__30313_30914,chunk__30314_30915,count__30315_30916,i__30316_30917,seq__30230_30850,chunk__30231_30851,count__30232_30852,i__30233_30853,seq__29863_30700,chunk__29864_30701,count__29865_30702,i__29866_30703,map__30340_30955,map__30340_30956__$1,gline_30957,gcol_30958,name_30959,seq__30313_30945__$1,temp__5735__auto___30943__$2,vec__30310_30911,column_30912,column_info_30913,seq__30230_30905__$1,temp__5735__auto___30904__$1,vec__30227_30847,line_30848,columns_30849,seq__29863_30839__$1,temp__5735__auto___30838,inverted))
,cljs.core.sorted_map()));


var G__30967 = cljs.core.next(seq__30313_30945__$1);
var G__30968 = null;
var G__30969 = (0);
var G__30970 = (0);
seq__30313_30914 = G__30967;
chunk__30314_30915 = G__30968;
count__30315_30916 = G__30969;
i__30316_30917 = G__30970;
continue;
}
} else {
}
}
break;
}


var G__30971 = cljs.core.next(seq__30230_30905__$1);
var G__30972 = null;
var G__30973 = (0);
var G__30974 = (0);
seq__30230_30850 = G__30971;
chunk__30231_30851 = G__30972;
count__30232_30852 = G__30973;
i__30233_30853 = G__30974;
continue;
}
} else {
}
}
break;
}


var G__30975 = cljs.core.next(seq__29863_30839__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__29863_30700 = G__30975;
chunk__29864_30701 = G__30976;
count__29865_30702 = G__30977;
i__29866_30703 = G__30978;
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
