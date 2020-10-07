goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__46368){
var vec__46369 = p__46368;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(1),null);
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
var vec__46396 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(4),null);
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
var vec__46430 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(4),null);
var vec__46433 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(4),null);
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
var map__46445 = segmap;
var map__46445__$1 = (((((!((map__46445 == null))))?(((((map__46445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46445):map__46445);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46445__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46445__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46445__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46445__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46445__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__46456 = arguments.length;
switch (G__46456) {
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
var vec__46488 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48820 = cljs.core.next(segs__$1);
var G__48821 = nrelseg;
var G__48822 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48820;
relseg__$1 = G__48821;
result__$1 = G__48822;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46488,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46488,(1),null);
var G__48823 = (gline + (1));
var G__48824 = cljs.core.next(lines__$1);
var G__48825 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48826 = result__$1;
gline = G__48823;
lines__$1 = G__48824;
relseg = G__48825;
result = G__48826;
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
var map__46517 = segmap;
var map__46517__$1 = (((((!((map__46517 == null))))?(((((map__46517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46517):map__46517);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__46507_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46507_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__46529 = arguments.length;
switch (G__46529) {
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
var vec__46549 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48930 = cljs.core.next(segs__$1);
var G__48931 = nrelseg;
var G__48932 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48930;
relseg__$1 = G__48931;
result__$1 = G__48932;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46549,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46549,(1),null);
var G__48941 = (gline + (1));
var G__48942 = cljs.core.next(lines__$1);
var G__48943 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48944 = result__$1;
gline = G__48941;
lines__$1 = G__48942;
relseg = G__48943;
result = G__48944;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__46557){
var vec__46558 = p__46557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__46564){
var vec__46565 = p__46564;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46565,(4),null);
var seg = vec__46565;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__46568){
var vec__46569 = p__46568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46569,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46569,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46569,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46569,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46569,(4),null);
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
var seq__46588 = cljs.core.seq(infos);
var chunk__46589 = null;
var count__46590 = (0);
var i__46591 = (0);
while(true){
if((i__46591 < count__46590)){
var info = chunk__46589.cljs$core$IIndexed$_nth$arity$2(null,i__46591);
var segv_48966 = info__GT_segv(info,source_idx,line,col);
var gline_48967 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48968 = cljs.core.count(cljs.core.deref(lines));
if((gline_48967 > (lc_48968 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__46588,chunk__46589,count__46590,i__46591,segv_48966,gline_48967,lc_48968,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48967 - (lc_48968 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48966], null));
});})(seq__46588,chunk__46589,count__46590,i__46591,segv_48966,gline_48967,lc_48968,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__46588,chunk__46589,count__46590,i__46591,segv_48966,gline_48967,lc_48968,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48967], null),cljs.core.conj,segv_48966);
});})(seq__46588,chunk__46589,count__46590,i__46591,segv_48966,gline_48967,lc_48968,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48973 = seq__46588;
var G__48974 = chunk__46589;
var G__48975 = count__46590;
var G__48976 = (i__46591 + (1));
seq__46588 = G__48973;
chunk__46589 = G__48974;
count__46590 = G__48975;
i__46591 = G__48976;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46588);
if(temp__5735__auto__){
var seq__46588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46588__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46588__$1);
var G__48977 = cljs.core.chunk_rest(seq__46588__$1);
var G__48978 = c__4556__auto__;
var G__48979 = cljs.core.count(c__4556__auto__);
var G__48980 = (0);
seq__46588 = G__48977;
chunk__46589 = G__48978;
count__46590 = G__48979;
i__46591 = G__48980;
continue;
} else {
var info = cljs.core.first(seq__46588__$1);
var segv_48981 = info__GT_segv(info,source_idx,line,col);
var gline_48982 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48983 = cljs.core.count(cljs.core.deref(lines));
if((gline_48982 > (lc_48983 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__46588,chunk__46589,count__46590,i__46591,segv_48981,gline_48982,lc_48983,info,seq__46588__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48982 - (lc_48983 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48981], null));
});})(seq__46588,chunk__46589,count__46590,i__46591,segv_48981,gline_48982,lc_48983,info,seq__46588__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__46588,chunk__46589,count__46590,i__46591,segv_48981,gline_48982,lc_48983,info,seq__46588__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48982], null),cljs.core.conj,segv_48981);
});})(seq__46588,chunk__46589,count__46590,i__46591,segv_48981,gline_48982,lc_48983,info,seq__46588__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48987 = cljs.core.next(seq__46588__$1);
var G__48988 = null;
var G__48989 = (0);
var G__48990 = (0);
seq__46588 = G__48987;
chunk__46589 = G__48988;
count__46590 = G__48989;
i__46591 = G__48990;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__46637_48991 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__46638_48992 = null;
var count__46639_48993 = (0);
var i__46640_48994 = (0);
while(true){
if((i__46640_48994 < count__46639_48993)){
var vec__47217_48995 = chunk__46638_48992.cljs$core$IIndexed$_nth$arity$2(null,i__46640_48994);
var source_idx_48996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217_48995,(0),null);
var vec__47220_48997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47217_48995,(1),null);
var __48998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47220_48997,(0),null);
var lines_48999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47220_48997,(1),null);
var seq__47223_49000 = cljs.core.seq(lines_48999__$1);
var chunk__47224_49001 = null;
var count__47225_49002 = (0);
var i__47226_49003 = (0);
while(true){
if((i__47226_49003 < count__47225_49002)){
var vec__47334_49005 = chunk__47224_49001.cljs$core$IIndexed$_nth$arity$2(null,i__47226_49003);
var line_49006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47334_49005,(0),null);
var cols_49007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47334_49005,(1),null);
var seq__47337_49008 = cljs.core.seq(cols_49007);
var chunk__47338_49009 = null;
var count__47339_49010 = (0);
var i__47340_49011 = (0);
while(true){
if((i__47340_49011 < count__47339_49010)){
var vec__47347_49012 = chunk__47338_49009.cljs$core$IIndexed$_nth$arity$2(null,i__47340_49011);
var col_49013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47347_49012,(0),null);
var infos_49014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47347_49012,(1),null);
encode_cols(infos_49014,source_idx_48996,line_49006,col_49013);


var G__49016 = seq__47337_49008;
var G__49017 = chunk__47338_49009;
var G__49018 = count__47339_49010;
var G__49019 = (i__47340_49011 + (1));
seq__47337_49008 = G__49016;
chunk__47338_49009 = G__49017;
count__47339_49010 = G__49018;
i__47340_49011 = G__49019;
continue;
} else {
var temp__5735__auto___49020 = cljs.core.seq(seq__47337_49008);
if(temp__5735__auto___49020){
var seq__47337_49021__$1 = temp__5735__auto___49020;
if(cljs.core.chunked_seq_QMARK_(seq__47337_49021__$1)){
var c__4556__auto___49026 = cljs.core.chunk_first(seq__47337_49021__$1);
var G__49027 = cljs.core.chunk_rest(seq__47337_49021__$1);
var G__49028 = c__4556__auto___49026;
var G__49029 = cljs.core.count(c__4556__auto___49026);
var G__49030 = (0);
seq__47337_49008 = G__49027;
chunk__47338_49009 = G__49028;
count__47339_49010 = G__49029;
i__47340_49011 = G__49030;
continue;
} else {
var vec__47350_49031 = cljs.core.first(seq__47337_49021__$1);
var col_49032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350_49031,(0),null);
var infos_49033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350_49031,(1),null);
encode_cols(infos_49033,source_idx_48996,line_49006,col_49032);


var G__49036 = cljs.core.next(seq__47337_49021__$1);
var G__49037 = null;
var G__49038 = (0);
var G__49039 = (0);
seq__47337_49008 = G__49036;
chunk__47338_49009 = G__49037;
count__47339_49010 = G__49038;
i__47340_49011 = G__49039;
continue;
}
} else {
}
}
break;
}


var G__49041 = seq__47223_49000;
var G__49042 = chunk__47224_49001;
var G__49043 = count__47225_49002;
var G__49044 = (i__47226_49003 + (1));
seq__47223_49000 = G__49041;
chunk__47224_49001 = G__49042;
count__47225_49002 = G__49043;
i__47226_49003 = G__49044;
continue;
} else {
var temp__5735__auto___49045 = cljs.core.seq(seq__47223_49000);
if(temp__5735__auto___49045){
var seq__47223_49046__$1 = temp__5735__auto___49045;
if(cljs.core.chunked_seq_QMARK_(seq__47223_49046__$1)){
var c__4556__auto___49047 = cljs.core.chunk_first(seq__47223_49046__$1);
var G__49048 = cljs.core.chunk_rest(seq__47223_49046__$1);
var G__49049 = c__4556__auto___49047;
var G__49050 = cljs.core.count(c__4556__auto___49047);
var G__49051 = (0);
seq__47223_49000 = G__49048;
chunk__47224_49001 = G__49049;
count__47225_49002 = G__49050;
i__47226_49003 = G__49051;
continue;
} else {
var vec__47353_49052 = cljs.core.first(seq__47223_49046__$1);
var line_49053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47353_49052,(0),null);
var cols_49054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47353_49052,(1),null);
var seq__47356_49055 = cljs.core.seq(cols_49054);
var chunk__47357_49056 = null;
var count__47358_49057 = (0);
var i__47359_49058 = (0);
while(true){
if((i__47359_49058 < count__47358_49057)){
var vec__47391_49059 = chunk__47357_49056.cljs$core$IIndexed$_nth$arity$2(null,i__47359_49058);
var col_49060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47391_49059,(0),null);
var infos_49061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47391_49059,(1),null);
encode_cols(infos_49061,source_idx_48996,line_49053,col_49060);


var G__49063 = seq__47356_49055;
var G__49064 = chunk__47357_49056;
var G__49065 = count__47358_49057;
var G__49066 = (i__47359_49058 + (1));
seq__47356_49055 = G__49063;
chunk__47357_49056 = G__49064;
count__47358_49057 = G__49065;
i__47359_49058 = G__49066;
continue;
} else {
var temp__5735__auto___49068__$1 = cljs.core.seq(seq__47356_49055);
if(temp__5735__auto___49068__$1){
var seq__47356_49069__$1 = temp__5735__auto___49068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47356_49069__$1)){
var c__4556__auto___49070 = cljs.core.chunk_first(seq__47356_49069__$1);
var G__49071 = cljs.core.chunk_rest(seq__47356_49069__$1);
var G__49072 = c__4556__auto___49070;
var G__49073 = cljs.core.count(c__4556__auto___49070);
var G__49074 = (0);
seq__47356_49055 = G__49071;
chunk__47357_49056 = G__49072;
count__47358_49057 = G__49073;
i__47359_49058 = G__49074;
continue;
} else {
var vec__47411_49075 = cljs.core.first(seq__47356_49069__$1);
var col_49076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47411_49075,(0),null);
var infos_49077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47411_49075,(1),null);
encode_cols(infos_49077,source_idx_48996,line_49053,col_49076);


var G__49078 = cljs.core.next(seq__47356_49069__$1);
var G__49079 = null;
var G__49080 = (0);
var G__49081 = (0);
seq__47356_49055 = G__49078;
chunk__47357_49056 = G__49079;
count__47358_49057 = G__49080;
i__47359_49058 = G__49081;
continue;
}
} else {
}
}
break;
}


var G__49082 = cljs.core.next(seq__47223_49046__$1);
var G__49083 = null;
var G__49084 = (0);
var G__49085 = (0);
seq__47223_49000 = G__49082;
chunk__47224_49001 = G__49083;
count__47225_49002 = G__49084;
i__47226_49003 = G__49085;
continue;
}
} else {
}
}
break;
}


var G__49087 = seq__46637_48991;
var G__49088 = chunk__46638_48992;
var G__49089 = count__46639_48993;
var G__49090 = (i__46640_48994 + (1));
seq__46637_48991 = G__49087;
chunk__46638_48992 = G__49088;
count__46639_48993 = G__49089;
i__46640_48994 = G__49090;
continue;
} else {
var temp__5735__auto___49091 = cljs.core.seq(seq__46637_48991);
if(temp__5735__auto___49091){
var seq__46637_49092__$1 = temp__5735__auto___49091;
if(cljs.core.chunked_seq_QMARK_(seq__46637_49092__$1)){
var c__4556__auto___49093 = cljs.core.chunk_first(seq__46637_49092__$1);
var G__49095 = cljs.core.chunk_rest(seq__46637_49092__$1);
var G__49096 = c__4556__auto___49093;
var G__49097 = cljs.core.count(c__4556__auto___49093);
var G__49098 = (0);
seq__46637_48991 = G__49095;
chunk__46638_48992 = G__49096;
count__46639_48993 = G__49097;
i__46640_48994 = G__49098;
continue;
} else {
var vec__47416_49099 = cljs.core.first(seq__46637_49092__$1);
var source_idx_49100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416_49099,(0),null);
var vec__47419_49101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416_49099,(1),null);
var __49102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419_49101,(0),null);
var lines_49103__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419_49101,(1),null);
var seq__47424_49104 = cljs.core.seq(lines_49103__$1);
var chunk__47425_49105 = null;
var count__47426_49106 = (0);
var i__47427_49107 = (0);
while(true){
if((i__47427_49107 < count__47426_49106)){
var vec__47514_49109 = chunk__47425_49105.cljs$core$IIndexed$_nth$arity$2(null,i__47427_49107);
var line_49110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47514_49109,(0),null);
var cols_49111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47514_49109,(1),null);
var seq__47519_49112 = cljs.core.seq(cols_49111);
var chunk__47520_49113 = null;
var count__47521_49114 = (0);
var i__47522_49115 = (0);
while(true){
if((i__47522_49115 < count__47521_49114)){
var vec__47539_49120 = chunk__47520_49113.cljs$core$IIndexed$_nth$arity$2(null,i__47522_49115);
var col_49121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539_49120,(0),null);
var infos_49122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539_49120,(1),null);
encode_cols(infos_49122,source_idx_49100,line_49110,col_49121);


var G__49124 = seq__47519_49112;
var G__49125 = chunk__47520_49113;
var G__49126 = count__47521_49114;
var G__49127 = (i__47522_49115 + (1));
seq__47519_49112 = G__49124;
chunk__47520_49113 = G__49125;
count__47521_49114 = G__49126;
i__47522_49115 = G__49127;
continue;
} else {
var temp__5735__auto___49132__$1 = cljs.core.seq(seq__47519_49112);
if(temp__5735__auto___49132__$1){
var seq__47519_49133__$1 = temp__5735__auto___49132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47519_49133__$1)){
var c__4556__auto___49134 = cljs.core.chunk_first(seq__47519_49133__$1);
var G__49135 = cljs.core.chunk_rest(seq__47519_49133__$1);
var G__49136 = c__4556__auto___49134;
var G__49137 = cljs.core.count(c__4556__auto___49134);
var G__49138 = (0);
seq__47519_49112 = G__49135;
chunk__47520_49113 = G__49136;
count__47521_49114 = G__49137;
i__47522_49115 = G__49138;
continue;
} else {
var vec__47544_49139 = cljs.core.first(seq__47519_49133__$1);
var col_49140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47544_49139,(0),null);
var infos_49141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47544_49139,(1),null);
encode_cols(infos_49141,source_idx_49100,line_49110,col_49140);


var G__49143 = cljs.core.next(seq__47519_49133__$1);
var G__49144 = null;
var G__49145 = (0);
var G__49146 = (0);
seq__47519_49112 = G__49143;
chunk__47520_49113 = G__49144;
count__47521_49114 = G__49145;
i__47522_49115 = G__49146;
continue;
}
} else {
}
}
break;
}


var G__49147 = seq__47424_49104;
var G__49148 = chunk__47425_49105;
var G__49149 = count__47426_49106;
var G__49150 = (i__47427_49107 + (1));
seq__47424_49104 = G__49147;
chunk__47425_49105 = G__49148;
count__47426_49106 = G__49149;
i__47427_49107 = G__49150;
continue;
} else {
var temp__5735__auto___49151__$1 = cljs.core.seq(seq__47424_49104);
if(temp__5735__auto___49151__$1){
var seq__47424_49152__$1 = temp__5735__auto___49151__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47424_49152__$1)){
var c__4556__auto___49153 = cljs.core.chunk_first(seq__47424_49152__$1);
var G__49154 = cljs.core.chunk_rest(seq__47424_49152__$1);
var G__49155 = c__4556__auto___49153;
var G__49156 = cljs.core.count(c__4556__auto___49153);
var G__49157 = (0);
seq__47424_49104 = G__49154;
chunk__47425_49105 = G__49155;
count__47426_49106 = G__49156;
i__47427_49107 = G__49157;
continue;
} else {
var vec__47567_49159 = cljs.core.first(seq__47424_49152__$1);
var line_49160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47567_49159,(0),null);
var cols_49161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47567_49159,(1),null);
var seq__47571_49162 = cljs.core.seq(cols_49161);
var chunk__47572_49163 = null;
var count__47573_49164 = (0);
var i__47574_49165 = (0);
while(true){
if((i__47574_49165 < count__47573_49164)){
var vec__47600_49167 = chunk__47572_49163.cljs$core$IIndexed$_nth$arity$2(null,i__47574_49165);
var col_49168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47600_49167,(0),null);
var infos_49169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47600_49167,(1),null);
encode_cols(infos_49169,source_idx_49100,line_49160,col_49168);


var G__49173 = seq__47571_49162;
var G__49174 = chunk__47572_49163;
var G__49175 = count__47573_49164;
var G__49176 = (i__47574_49165 + (1));
seq__47571_49162 = G__49173;
chunk__47572_49163 = G__49174;
count__47573_49164 = G__49175;
i__47574_49165 = G__49176;
continue;
} else {
var temp__5735__auto___49177__$2 = cljs.core.seq(seq__47571_49162);
if(temp__5735__auto___49177__$2){
var seq__47571_49178__$1 = temp__5735__auto___49177__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47571_49178__$1)){
var c__4556__auto___49179 = cljs.core.chunk_first(seq__47571_49178__$1);
var G__49180 = cljs.core.chunk_rest(seq__47571_49178__$1);
var G__49181 = c__4556__auto___49179;
var G__49182 = cljs.core.count(c__4556__auto___49179);
var G__49183 = (0);
seq__47571_49162 = G__49180;
chunk__47572_49163 = G__49181;
count__47573_49164 = G__49182;
i__47574_49165 = G__49183;
continue;
} else {
var vec__47606_49184 = cljs.core.first(seq__47571_49178__$1);
var col_49185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47606_49184,(0),null);
var infos_49186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47606_49184,(1),null);
encode_cols(infos_49186,source_idx_49100,line_49160,col_49185);


var G__49187 = cljs.core.next(seq__47571_49178__$1);
var G__49188 = null;
var G__49189 = (0);
var G__49190 = (0);
seq__47571_49162 = G__49187;
chunk__47572_49163 = G__49188;
count__47573_49164 = G__49189;
i__47574_49165 = G__49190;
continue;
}
} else {
}
}
break;
}


var G__49191 = cljs.core.next(seq__47424_49152__$1);
var G__49192 = null;
var G__49193 = (0);
var G__49194 = (0);
seq__47424_49104 = G__49191;
chunk__47425_49105 = G__49192;
count__47426_49106 = G__49193;
i__47427_49107 = G__49194;
continue;
}
} else {
}
}
break;
}


var G__49195 = cljs.core.next(seq__46637_49092__$1);
var G__49196 = null;
var G__49197 = (0);
var G__49198 = (0);
seq__46637_48991 = G__49195;
chunk__46638_48992 = G__49196;
count__46639_48993 = G__49197;
i__46640_48994 = G__49198;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__47609 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__46576_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46576_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__46577_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__46577_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46578_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__46578_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__47625 = G__47609;
goog.object.set(G__47625,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__47625;
} else {
return G__47609;
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
var vec__47641 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__47645 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47645,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47645,(1),null);
var G__49202 = cljs.core.next(col_map_seq);
var G__49203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__47645,col,infos,vec__47641,line,col_map){
return (function (v,p__47685){
var map__47686 = p__47685;
var map__47686__$1 = (((((!((map__47686 == null))))?(((((map__47686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47686):map__47686);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47686__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47686__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__47645,col,infos,vec__47641,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__49202;
new_cols = G__49203;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__49209 = cljs.core.next(line_map_seq);
var G__49210 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__49209;
new_lines = G__49210;
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
var seq__47696_49215 = cljs.core.seq(reverse_map);
var chunk__47697_49216 = null;
var count__47698_49217 = (0);
var i__47699_49218 = (0);
while(true){
if((i__47699_49218 < count__47698_49217)){
var vec__48310_49227 = chunk__47697_49216.cljs$core$IIndexed$_nth$arity$2(null,i__47699_49218);
var line_49228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48310_49227,(0),null);
var columns_49229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48310_49227,(1),null);
var seq__48313_49234 = cljs.core.seq(columns_49229);
var chunk__48314_49235 = null;
var count__48315_49236 = (0);
var i__48316_49237 = (0);
while(true){
if((i__48316_49237 < count__48315_49236)){
var vec__48438_49238 = chunk__48314_49235.cljs$core$IIndexed$_nth$arity$2(null,i__48316_49237);
var column_49239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48438_49238,(0),null);
var column_info_49240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48438_49238,(1),null);
var seq__48441_49249 = cljs.core.seq(column_info_49240);
var chunk__48442_49250 = null;
var count__48443_49251 = (0);
var i__48444_49252 = (0);
while(true){
if((i__48444_49252 < count__48443_49251)){
var map__48464_49257 = chunk__48442_49250.cljs$core$IIndexed$_nth$arity$2(null,i__48444_49252);
var map__48464_49258__$1 = (((((!((map__48464_49257 == null))))?(((((map__48464_49257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48464_49257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48464_49257):map__48464_49257);
var gline_49259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48464_49258__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48464_49258__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48464_49258__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49259], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48441_49249,chunk__48442_49250,count__48443_49251,i__48444_49252,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48464_49257,map__48464_49258__$1,gline_49259,gcol_49260,name_49261,vec__48438_49238,column_49239,column_info_49240,vec__48310_49227,line_49228,columns_49229,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49260], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49228,new cljs.core.Keyword(null,"col","col",-1959363084),column_49239,new cljs.core.Keyword(null,"name","name",1843675177),name_49261], null));
});})(seq__48441_49249,chunk__48442_49250,count__48443_49251,i__48444_49252,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48464_49257,map__48464_49258__$1,gline_49259,gcol_49260,name_49261,vec__48438_49238,column_49239,column_info_49240,vec__48310_49227,line_49228,columns_49229,inverted))
,cljs.core.sorted_map()));


var G__49292 = seq__48441_49249;
var G__49293 = chunk__48442_49250;
var G__49294 = count__48443_49251;
var G__49295 = (i__48444_49252 + (1));
seq__48441_49249 = G__49292;
chunk__48442_49250 = G__49293;
count__48443_49251 = G__49294;
i__48444_49252 = G__49295;
continue;
} else {
var temp__5735__auto___49296 = cljs.core.seq(seq__48441_49249);
if(temp__5735__auto___49296){
var seq__48441_49297__$1 = temp__5735__auto___49296;
if(cljs.core.chunked_seq_QMARK_(seq__48441_49297__$1)){
var c__4556__auto___49298 = cljs.core.chunk_first(seq__48441_49297__$1);
var G__49299 = cljs.core.chunk_rest(seq__48441_49297__$1);
var G__49300 = c__4556__auto___49298;
var G__49301 = cljs.core.count(c__4556__auto___49298);
var G__49302 = (0);
seq__48441_49249 = G__49299;
chunk__48442_49250 = G__49300;
count__48443_49251 = G__49301;
i__48444_49252 = G__49302;
continue;
} else {
var map__48476_49303 = cljs.core.first(seq__48441_49297__$1);
var map__48476_49304__$1 = (((((!((map__48476_49303 == null))))?(((((map__48476_49303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48476_49303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48476_49303):map__48476_49303);
var gline_49305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476_49304__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476_49304__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476_49304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49305], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48441_49249,chunk__48442_49250,count__48443_49251,i__48444_49252,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48476_49303,map__48476_49304__$1,gline_49305,gcol_49306,name_49307,seq__48441_49297__$1,temp__5735__auto___49296,vec__48438_49238,column_49239,column_info_49240,vec__48310_49227,line_49228,columns_49229,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49306], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49228,new cljs.core.Keyword(null,"col","col",-1959363084),column_49239,new cljs.core.Keyword(null,"name","name",1843675177),name_49307], null));
});})(seq__48441_49249,chunk__48442_49250,count__48443_49251,i__48444_49252,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48476_49303,map__48476_49304__$1,gline_49305,gcol_49306,name_49307,seq__48441_49297__$1,temp__5735__auto___49296,vec__48438_49238,column_49239,column_info_49240,vec__48310_49227,line_49228,columns_49229,inverted))
,cljs.core.sorted_map()));


var G__49328 = cljs.core.next(seq__48441_49297__$1);
var G__49329 = null;
var G__49330 = (0);
var G__49331 = (0);
seq__48441_49249 = G__49328;
chunk__48442_49250 = G__49329;
count__48443_49251 = G__49330;
i__48444_49252 = G__49331;
continue;
}
} else {
}
}
break;
}


var G__49336 = seq__48313_49234;
var G__49337 = chunk__48314_49235;
var G__49338 = count__48315_49236;
var G__49339 = (i__48316_49237 + (1));
seq__48313_49234 = G__49336;
chunk__48314_49235 = G__49337;
count__48315_49236 = G__49338;
i__48316_49237 = G__49339;
continue;
} else {
var temp__5735__auto___49340 = cljs.core.seq(seq__48313_49234);
if(temp__5735__auto___49340){
var seq__48313_49341__$1 = temp__5735__auto___49340;
if(cljs.core.chunked_seq_QMARK_(seq__48313_49341__$1)){
var c__4556__auto___49343 = cljs.core.chunk_first(seq__48313_49341__$1);
var G__49344 = cljs.core.chunk_rest(seq__48313_49341__$1);
var G__49345 = c__4556__auto___49343;
var G__49346 = cljs.core.count(c__4556__auto___49343);
var G__49347 = (0);
seq__48313_49234 = G__49344;
chunk__48314_49235 = G__49345;
count__48315_49236 = G__49346;
i__48316_49237 = G__49347;
continue;
} else {
var vec__48483_49350 = cljs.core.first(seq__48313_49341__$1);
var column_49351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48483_49350,(0),null);
var column_info_49352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48483_49350,(1),null);
var seq__48486_49353 = cljs.core.seq(column_info_49352);
var chunk__48487_49354 = null;
var count__48488_49355 = (0);
var i__48489_49356 = (0);
while(true){
if((i__48489_49356 < count__48488_49355)){
var map__48511_49357 = chunk__48487_49354.cljs$core$IIndexed$_nth$arity$2(null,i__48489_49356);
var map__48511_49358__$1 = (((((!((map__48511_49357 == null))))?(((((map__48511_49357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48511_49357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48511_49357):map__48511_49357);
var gline_49359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511_49358__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511_49358__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511_49358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49359], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48486_49353,chunk__48487_49354,count__48488_49355,i__48489_49356,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48511_49357,map__48511_49358__$1,gline_49359,gcol_49360,name_49361,vec__48483_49350,column_49351,column_info_49352,seq__48313_49341__$1,temp__5735__auto___49340,vec__48310_49227,line_49228,columns_49229,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49360], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49228,new cljs.core.Keyword(null,"col","col",-1959363084),column_49351,new cljs.core.Keyword(null,"name","name",1843675177),name_49361], null));
});})(seq__48486_49353,chunk__48487_49354,count__48488_49355,i__48489_49356,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48511_49357,map__48511_49358__$1,gline_49359,gcol_49360,name_49361,vec__48483_49350,column_49351,column_info_49352,seq__48313_49341__$1,temp__5735__auto___49340,vec__48310_49227,line_49228,columns_49229,inverted))
,cljs.core.sorted_map()));


var G__49364 = seq__48486_49353;
var G__49365 = chunk__48487_49354;
var G__49366 = count__48488_49355;
var G__49367 = (i__48489_49356 + (1));
seq__48486_49353 = G__49364;
chunk__48487_49354 = G__49365;
count__48488_49355 = G__49366;
i__48489_49356 = G__49367;
continue;
} else {
var temp__5735__auto___49368__$1 = cljs.core.seq(seq__48486_49353);
if(temp__5735__auto___49368__$1){
var seq__48486_49369__$1 = temp__5735__auto___49368__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48486_49369__$1)){
var c__4556__auto___49370 = cljs.core.chunk_first(seq__48486_49369__$1);
var G__49371 = cljs.core.chunk_rest(seq__48486_49369__$1);
var G__49372 = c__4556__auto___49370;
var G__49373 = cljs.core.count(c__4556__auto___49370);
var G__49374 = (0);
seq__48486_49353 = G__49371;
chunk__48487_49354 = G__49372;
count__48488_49355 = G__49373;
i__48489_49356 = G__49374;
continue;
} else {
var map__48517_49375 = cljs.core.first(seq__48486_49369__$1);
var map__48517_49376__$1 = (((((!((map__48517_49375 == null))))?(((((map__48517_49375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48517_49375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48517_49375):map__48517_49375);
var gline_49377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517_49376__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517_49376__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517_49376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49377], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48486_49353,chunk__48487_49354,count__48488_49355,i__48489_49356,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48517_49375,map__48517_49376__$1,gline_49377,gcol_49378,name_49379,seq__48486_49369__$1,temp__5735__auto___49368__$1,vec__48483_49350,column_49351,column_info_49352,seq__48313_49341__$1,temp__5735__auto___49340,vec__48310_49227,line_49228,columns_49229,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49378], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49228,new cljs.core.Keyword(null,"col","col",-1959363084),column_49351,new cljs.core.Keyword(null,"name","name",1843675177),name_49379], null));
});})(seq__48486_49353,chunk__48487_49354,count__48488_49355,i__48489_49356,seq__48313_49234,chunk__48314_49235,count__48315_49236,i__48316_49237,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48517_49375,map__48517_49376__$1,gline_49377,gcol_49378,name_49379,seq__48486_49369__$1,temp__5735__auto___49368__$1,vec__48483_49350,column_49351,column_info_49352,seq__48313_49341__$1,temp__5735__auto___49340,vec__48310_49227,line_49228,columns_49229,inverted))
,cljs.core.sorted_map()));


var G__49380 = cljs.core.next(seq__48486_49369__$1);
var G__49381 = null;
var G__49382 = (0);
var G__49383 = (0);
seq__48486_49353 = G__49380;
chunk__48487_49354 = G__49381;
count__48488_49355 = G__49382;
i__48489_49356 = G__49383;
continue;
}
} else {
}
}
break;
}


var G__49384 = cljs.core.next(seq__48313_49341__$1);
var G__49385 = null;
var G__49386 = (0);
var G__49387 = (0);
seq__48313_49234 = G__49384;
chunk__48314_49235 = G__49385;
count__48315_49236 = G__49386;
i__48316_49237 = G__49387;
continue;
}
} else {
}
}
break;
}


var G__49388 = seq__47696_49215;
var G__49389 = chunk__47697_49216;
var G__49390 = count__47698_49217;
var G__49391 = (i__47699_49218 + (1));
seq__47696_49215 = G__49388;
chunk__47697_49216 = G__49389;
count__47698_49217 = G__49390;
i__47699_49218 = G__49391;
continue;
} else {
var temp__5735__auto___49392 = cljs.core.seq(seq__47696_49215);
if(temp__5735__auto___49392){
var seq__47696_49393__$1 = temp__5735__auto___49392;
if(cljs.core.chunked_seq_QMARK_(seq__47696_49393__$1)){
var c__4556__auto___49394 = cljs.core.chunk_first(seq__47696_49393__$1);
var G__49395 = cljs.core.chunk_rest(seq__47696_49393__$1);
var G__49396 = c__4556__auto___49394;
var G__49397 = cljs.core.count(c__4556__auto___49394);
var G__49398 = (0);
seq__47696_49215 = G__49395;
chunk__47697_49216 = G__49396;
count__47698_49217 = G__49397;
i__47699_49218 = G__49398;
continue;
} else {
var vec__48524_49399 = cljs.core.first(seq__47696_49393__$1);
var line_49400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48524_49399,(0),null);
var columns_49401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48524_49399,(1),null);
var seq__48527_49402 = cljs.core.seq(columns_49401);
var chunk__48528_49403 = null;
var count__48529_49404 = (0);
var i__48530_49405 = (0);
while(true){
if((i__48530_49405 < count__48529_49404)){
var vec__48617_49406 = chunk__48528_49403.cljs$core$IIndexed$_nth$arity$2(null,i__48530_49405);
var column_49407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48617_49406,(0),null);
var column_info_49408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48617_49406,(1),null);
var seq__48621_49409 = cljs.core.seq(column_info_49408);
var chunk__48622_49410 = null;
var count__48623_49411 = (0);
var i__48624_49412 = (0);
while(true){
if((i__48624_49412 < count__48623_49411)){
var map__48672_49413 = chunk__48622_49410.cljs$core$IIndexed$_nth$arity$2(null,i__48624_49412);
var map__48672_49414__$1 = (((((!((map__48672_49413 == null))))?(((((map__48672_49413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48672_49413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48672_49413):map__48672_49413);
var gline_49415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48672_49414__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48672_49414__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48672_49414__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49415], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48621_49409,chunk__48622_49410,count__48623_49411,i__48624_49412,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48672_49413,map__48672_49414__$1,gline_49415,gcol_49416,name_49417,vec__48617_49406,column_49407,column_info_49408,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49416], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49400,new cljs.core.Keyword(null,"col","col",-1959363084),column_49407,new cljs.core.Keyword(null,"name","name",1843675177),name_49417], null));
});})(seq__48621_49409,chunk__48622_49410,count__48623_49411,i__48624_49412,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48672_49413,map__48672_49414__$1,gline_49415,gcol_49416,name_49417,vec__48617_49406,column_49407,column_info_49408,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted))
,cljs.core.sorted_map()));


var G__49443 = seq__48621_49409;
var G__49444 = chunk__48622_49410;
var G__49445 = count__48623_49411;
var G__49446 = (i__48624_49412 + (1));
seq__48621_49409 = G__49443;
chunk__48622_49410 = G__49444;
count__48623_49411 = G__49445;
i__48624_49412 = G__49446;
continue;
} else {
var temp__5735__auto___49447__$1 = cljs.core.seq(seq__48621_49409);
if(temp__5735__auto___49447__$1){
var seq__48621_49448__$1 = temp__5735__auto___49447__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48621_49448__$1)){
var c__4556__auto___49453 = cljs.core.chunk_first(seq__48621_49448__$1);
var G__49454 = cljs.core.chunk_rest(seq__48621_49448__$1);
var G__49455 = c__4556__auto___49453;
var G__49456 = cljs.core.count(c__4556__auto___49453);
var G__49457 = (0);
seq__48621_49409 = G__49454;
chunk__48622_49410 = G__49455;
count__48623_49411 = G__49456;
i__48624_49412 = G__49457;
continue;
} else {
var map__48681_49462 = cljs.core.first(seq__48621_49448__$1);
var map__48681_49463__$1 = (((((!((map__48681_49462 == null))))?(((((map__48681_49462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48681_49462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48681_49462):map__48681_49462);
var gline_49464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681_49463__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681_49463__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681_49463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49464], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48621_49409,chunk__48622_49410,count__48623_49411,i__48624_49412,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48681_49462,map__48681_49463__$1,gline_49464,gcol_49465,name_49466,seq__48621_49448__$1,temp__5735__auto___49447__$1,vec__48617_49406,column_49407,column_info_49408,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49465], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49400,new cljs.core.Keyword(null,"col","col",-1959363084),column_49407,new cljs.core.Keyword(null,"name","name",1843675177),name_49466], null));
});})(seq__48621_49409,chunk__48622_49410,count__48623_49411,i__48624_49412,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48681_49462,map__48681_49463__$1,gline_49464,gcol_49465,name_49466,seq__48621_49448__$1,temp__5735__auto___49447__$1,vec__48617_49406,column_49407,column_info_49408,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted))
,cljs.core.sorted_map()));


var G__49476 = cljs.core.next(seq__48621_49448__$1);
var G__49477 = null;
var G__49478 = (0);
var G__49479 = (0);
seq__48621_49409 = G__49476;
chunk__48622_49410 = G__49477;
count__48623_49411 = G__49478;
i__48624_49412 = G__49479;
continue;
}
} else {
}
}
break;
}


var G__49481 = seq__48527_49402;
var G__49482 = chunk__48528_49403;
var G__49483 = count__48529_49404;
var G__49484 = (i__48530_49405 + (1));
seq__48527_49402 = G__49481;
chunk__48528_49403 = G__49482;
count__48529_49404 = G__49483;
i__48530_49405 = G__49484;
continue;
} else {
var temp__5735__auto___49486__$1 = cljs.core.seq(seq__48527_49402);
if(temp__5735__auto___49486__$1){
var seq__48527_49492__$1 = temp__5735__auto___49486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48527_49492__$1)){
var c__4556__auto___49494 = cljs.core.chunk_first(seq__48527_49492__$1);
var G__49495 = cljs.core.chunk_rest(seq__48527_49492__$1);
var G__49496 = c__4556__auto___49494;
var G__49497 = cljs.core.count(c__4556__auto___49494);
var G__49498 = (0);
seq__48527_49402 = G__49495;
chunk__48528_49403 = G__49496;
count__48529_49404 = G__49497;
i__48530_49405 = G__49498;
continue;
} else {
var vec__48701_49504 = cljs.core.first(seq__48527_49492__$1);
var column_49505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701_49504,(0),null);
var column_info_49506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701_49504,(1),null);
var seq__48704_49507 = cljs.core.seq(column_info_49506);
var chunk__48705_49508 = null;
var count__48706_49509 = (0);
var i__48707_49510 = (0);
while(true){
if((i__48707_49510 < count__48706_49509)){
var map__48721_49511 = chunk__48705_49508.cljs$core$IIndexed$_nth$arity$2(null,i__48707_49510);
var map__48721_49512__$1 = (((((!((map__48721_49511 == null))))?(((((map__48721_49511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48721_49511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48721_49511):map__48721_49511);
var gline_49513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_49512__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_49512__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_49512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49513], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48704_49507,chunk__48705_49508,count__48706_49509,i__48707_49510,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48721_49511,map__48721_49512__$1,gline_49513,gcol_49514,name_49515,vec__48701_49504,column_49505,column_info_49506,seq__48527_49492__$1,temp__5735__auto___49486__$1,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49514], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49400,new cljs.core.Keyword(null,"col","col",-1959363084),column_49505,new cljs.core.Keyword(null,"name","name",1843675177),name_49515], null));
});})(seq__48704_49507,chunk__48705_49508,count__48706_49509,i__48707_49510,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48721_49511,map__48721_49512__$1,gline_49513,gcol_49514,name_49515,vec__48701_49504,column_49505,column_info_49506,seq__48527_49492__$1,temp__5735__auto___49486__$1,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted))
,cljs.core.sorted_map()));


var G__49558 = seq__48704_49507;
var G__49559 = chunk__48705_49508;
var G__49560 = count__48706_49509;
var G__49561 = (i__48707_49510 + (1));
seq__48704_49507 = G__49558;
chunk__48705_49508 = G__49559;
count__48706_49509 = G__49560;
i__48707_49510 = G__49561;
continue;
} else {
var temp__5735__auto___49562__$2 = cljs.core.seq(seq__48704_49507);
if(temp__5735__auto___49562__$2){
var seq__48704_49563__$1 = temp__5735__auto___49562__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48704_49563__$1)){
var c__4556__auto___49568 = cljs.core.chunk_first(seq__48704_49563__$1);
var G__49569 = cljs.core.chunk_rest(seq__48704_49563__$1);
var G__49570 = c__4556__auto___49568;
var G__49571 = cljs.core.count(c__4556__auto___49568);
var G__49572 = (0);
seq__48704_49507 = G__49569;
chunk__48705_49508 = G__49570;
count__48706_49509 = G__49571;
i__48707_49510 = G__49572;
continue;
} else {
var map__48724_49576 = cljs.core.first(seq__48704_49563__$1);
var map__48724_49577__$1 = (((((!((map__48724_49576 == null))))?(((((map__48724_49576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48724_49576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48724_49576):map__48724_49576);
var gline_49578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724_49577__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724_49577__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724_49577__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49578], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48704_49507,chunk__48705_49508,count__48706_49509,i__48707_49510,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48724_49576,map__48724_49577__$1,gline_49578,gcol_49579,name_49580,seq__48704_49563__$1,temp__5735__auto___49562__$2,vec__48701_49504,column_49505,column_info_49506,seq__48527_49492__$1,temp__5735__auto___49486__$1,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49579], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49400,new cljs.core.Keyword(null,"col","col",-1959363084),column_49505,new cljs.core.Keyword(null,"name","name",1843675177),name_49580], null));
});})(seq__48704_49507,chunk__48705_49508,count__48706_49509,i__48707_49510,seq__48527_49402,chunk__48528_49403,count__48529_49404,i__48530_49405,seq__47696_49215,chunk__47697_49216,count__47698_49217,i__47699_49218,map__48724_49576,map__48724_49577__$1,gline_49578,gcol_49579,name_49580,seq__48704_49563__$1,temp__5735__auto___49562__$2,vec__48701_49504,column_49505,column_info_49506,seq__48527_49492__$1,temp__5735__auto___49486__$1,vec__48524_49399,line_49400,columns_49401,seq__47696_49393__$1,temp__5735__auto___49392,inverted))
,cljs.core.sorted_map()));


var G__49588 = cljs.core.next(seq__48704_49563__$1);
var G__49589 = null;
var G__49590 = (0);
var G__49591 = (0);
seq__48704_49507 = G__49588;
chunk__48705_49508 = G__49589;
count__48706_49509 = G__49590;
i__48707_49510 = G__49591;
continue;
}
} else {
}
}
break;
}


var G__49592 = cljs.core.next(seq__48527_49492__$1);
var G__49593 = null;
var G__49594 = (0);
var G__49595 = (0);
seq__48527_49402 = G__49592;
chunk__48528_49403 = G__49593;
count__48529_49404 = G__49594;
i__48530_49405 = G__49595;
continue;
}
} else {
}
}
break;
}


var G__49596 = cljs.core.next(seq__47696_49393__$1);
var G__49597 = null;
var G__49598 = (0);
var G__49599 = (0);
seq__47696_49215 = G__49596;
chunk__47697_49216 = G__49597;
count__47698_49217 = G__49598;
i__47699_49218 = G__49599;
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
