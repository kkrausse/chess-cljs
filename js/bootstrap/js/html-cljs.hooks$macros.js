goog.provide('html_cljs.hooks$macros');
var ret__4785__auto___9013 = /**
 * would use this for the below macro to find the hooks invoked in the body
 */
html_cljs.hooks$macros.hook_meta = (function html_cljs$hooks$macros$hook_meta(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,"html-cljs.html/hook",null,(1),null)))));
});
(html_cljs.hooks$macros.hook_meta.cljs$lang$macro = true);

var ret__4785__auto___9014 = (function (){
/**
 * attempt to have macro search for hook invocations in the body rather than
 *   have the hooks be explicitly passed. For now, a failed attempt since I am
 *   unable to resolve symbols at compile time and get the metadata on them.
 */
html_cljs.hooks$macros.with_hooks = (function html_cljs$hooks$macros$with_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9015 = arguments.length;
var i__4737__auto___9016 = (0);
while(true){
if((i__4737__auto___9016 < len__4736__auto___9015)){
args__4742__auto__.push((arguments[i__4737__auto___9016]));

var G__9017 = (i__4737__auto___9016 + (1));
i__4737__auto___9016 = G__9017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return html_cljs.hooks$macros.with_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(html_cljs.hooks$macros.with_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,funcname,props,body){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(html_cljs.hooks$macros.hook_meta.cljs$core$IFn$_invoke$arity$0 ? html_cljs.hooks$macros.hook_meta.cljs$core$IFn$_invoke$arity$0() : html_cljs.hooks$macros.hook_meta.call(null))], 0));

var hooks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.prewalk((function (form){
if(cljs.core.seq_QMARK_(form)){
var vec__8948_9018 = form;
var seq__8949_9019 = cljs.core.seq(vec__8948_9018);
var first__8950_9020 = cljs.core.first(seq__8949_9019);
var seq__8949_9021__$1 = cljs.core.next(seq__8949_9019);
var head_9022 = first__8950_9020;
var tail_9023 = seq__8949_9021__$1;
var thing_9024 = (((head_9022 instanceof cljs.core.Symbol))?(html_cljs.hooks$macros.ns_resolve.cljs$core$IFn$_invoke$arity$3 ? html_cljs.hooks$macros.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_ns_STAR_,_AMPERSAND_env,head_9022) : html_cljs.hooks$macros.ns_resolve.call(null,cljs.core._STAR_ns_STAR_,_AMPERSAND_env,head_9022)):head_9022);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["checking",head_9022], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._STAR_ns_STAR_], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["symbol? ",(head_9022 instanceof cljs.core.Symbol)], 0));

if((head_9022 instanceof cljs.core.Symbol)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ns-resolved: ",(html_cljs.hooks$macros.ns_resolve.cljs$core$IFn$_invoke$arity$3 ? html_cljs.hooks$macros.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_ns_STAR_,_AMPERSAND_env,head_9022) : html_cljs.hooks$macros.ns_resolve.call(null,cljs.core._STAR_ns_STAR_,_AMPERSAND_env,head_9022))], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["meta thing",cljs.core.meta(thing_9024)], 0));

if((((!((head_9022 == null)))) && (cljs.core.contains_QMARK_(cljs.core.meta(thing_9024),(html_cljs.hooks$macros.hook_meta.cljs$core$IFn$_invoke$arity$0 ? html_cljs.hooks$macros.hook_meta.cljs$core$IFn$_invoke$arity$0() : html_cljs.hooks$macros.hook_meta.call(null)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hooks,(function (p1__8935_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8935_SHARP_,form);
}));
} else {
}
} else {
}

return form;
}),body);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,funcname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,props,null,(1),null)),body], 0))));
}));

(html_cljs.hooks$macros.with_hooks.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(html_cljs.hooks$macros.with_hooks.cljs$lang$applyTo = (function (seq8936){
var G__8937 = cljs.core.first(seq8936);
var seq8936__$1 = cljs.core.next(seq8936);
var G__8938 = cljs.core.first(seq8936__$1);
var seq8936__$2 = cljs.core.next(seq8936__$1);
var G__8939 = cljs.core.first(seq8936__$2);
var seq8936__$3 = cljs.core.next(seq8936__$2);
var G__8940 = cljs.core.first(seq8936__$3);
var seq8936__$4 = cljs.core.next(seq8936__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8937,G__8938,G__8939,G__8940,seq8936__$4);
}));

return null;
})()
;
(html_cljs.hooks$macros.with_hooks.cljs$lang$macro = true);


/**
 * @interface
 */
html_cljs.hooks$macros.HookFunc = function(){};

var html_cljs$hooks$macros$HookFunc$bind_lifecycle$dyn_9026 = (function (_,cmp){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.hooks$macros.bind_lifecycle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,cmp) : m__4429__auto__.call(null,_,cmp));
} else {
var m__4426__auto__ = (html_cljs.hooks$macros.bind_lifecycle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,cmp) : m__4426__auto__.call(null,_,cmp));
} else {
throw cljs.core.missing_protocol("HookFunc.bind-lifecycle",_);
}
}
});
/**
 * partially apply the hook. Returns an applied-hook
 */
html_cljs.hooks$macros.bind_lifecycle = (function html_cljs$hooks$macros$bind_lifecycle(_,cmp){
if((((!((_ == null)))) && ((!((_.html_cljs$hooks$macros$HookFunc$bind_lifecycle$arity$2 == null)))))){
return _.html_cljs$hooks$macros$HookFunc$bind_lifecycle$arity$2(_,cmp);
} else {
return html_cljs$hooks$macros$HookFunc$bind_lifecycle$dyn_9026(_,cmp);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {html_cljs.hooks$macros.HookFunc}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
html_cljs.hooks$macros.Hook = (function (f,__meta,__extmap,__hash){
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(html_cljs.hooks$macros.Hook.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8977,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8981 = k8977;
var G__8981__$1 = (((G__8981 instanceof cljs.core.Keyword))?G__8981.fqn:null);
switch (G__8981__$1) {
case "f":
return self__.f;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8977,else__4383__auto__);

}
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8982){
var vec__8983 = p__8982;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8983,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8983,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#html-cljs.hooks$macros.Hook{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null))], null),self__.__extmap));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8976){
var self__ = this;
var G__8976__$1 = this;
return (new cljs.core.RecordIter((0),G__8976__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new html_cljs.hooks$macros.Hook(self__.f,self__.__meta,self__.__extmap,self__.__hash));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1819735001 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8978,other8979){
var self__ = this;
var this8978__$1 = this;
return (((!((other8979 == null)))) && ((this8978__$1.constructor === other8979.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8978__$1.f,other8979.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8978__$1.__extmap,other8979.__extmap)));
}));

(html_cljs.hooks$macros.Hook.prototype.html_cljs$hooks$macros$HookFunc$ = cljs.core.PROTOCOL_SENTINEL);

(html_cljs.hooks$macros.Hook.prototype.html_cljs$hooks$macros$HookFunc$bind_lifecycle$arity$2 = (function (_,cmp){
var self__ = this;
var ___$1 = this;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cmp) : self__.f.call(null,cmp));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new html_cljs.hooks$macros.Hook(self__.f,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8976){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8991 = cljs.core.keyword_identical_QMARK_;
var expr__8992 = k__4388__auto__;
if(cljs.core.truth_((pred__8991.cljs$core$IFn$_invoke$arity$2 ? pred__8991.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__8992) : pred__8991.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__8992)))){
return (new html_cljs.hooks$macros.Hook(G__8976,self__.__meta,self__.__extmap,null));
} else {
return (new html_cljs.hooks$macros.Hook(self__.f,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8976),null));
}
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null))], null),self__.__extmap));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8976){
var self__ = this;
var this__4379__auto____$1 = this;
return (new html_cljs.hooks$macros.Hook(self__.f,G__8976,self__.__extmap,self__.__hash));
}));

(html_cljs.hooks$macros.Hook.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(html_cljs.hooks$macros.Hook.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(html_cljs.hooks$macros.Hook.cljs$lang$type = true);

(html_cljs.hooks$macros.Hook.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"html-cljs.hooks$macros/Hook",null,(1),null));
}));

(html_cljs.hooks$macros.Hook.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"html-cljs.hooks$macros/Hook");
}));

/**
 * Positional factory function for html-cljs.hooks$macros/Hook.
 */
html_cljs.hooks$macros.__GT_Hook = (function html_cljs$hooks$macros$__GT_Hook(f){
return (new html_cljs.hooks$macros.Hook(f,null,null,null));
});

/**
 * Factory function for html-cljs.hooks$macros/Hook, taking a map of keywords to field values.
 */
html_cljs.hooks$macros.map__GT_Hook = (function html_cljs$hooks$macros$map__GT_Hook(G__8980){
var extmap__4419__auto__ = (function (){var G__8996 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8980,new cljs.core.Keyword(null,"f","f",-1597136552));
if(cljs.core.record_QMARK_(G__8980)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8996);
} else {
return G__8996;
}
})();
return (new html_cljs.hooks$macros.Hook(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__8980),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

var ret__4785__auto___9028 = (function (){
html_cljs.hooks$macros.mkhook = (function html_cljs$hooks$macros$mkhook(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9029 = arguments.length;
var i__4737__auto___9030 = (0);
while(true){
if((i__4737__auto___9030 < len__4736__auto___9029)){
args__4742__auto__.push((arguments[i__4737__auto___9030]));

var G__9031 = (i__4737__auto___9030 + (1));
i__4737__auto___9030 = G__9031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return html_cljs.hooks$macros.mkhook.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(html_cljs.hooks$macros.mkhook.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,props,hooks,body){
var hooklhs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),hooks);
var hookrhs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(hooks));
var hooked_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hookname){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["hooked-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hookname)].join(''));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hookrhs));
var clc_sym = new cljs.core.Symbol(null,"clc__8997__auto__","clc__8997__auto__",515269300,null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,clc_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hooked_syms,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hook){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hook,null,(1),null)),(new cljs.core.List(null,clc_sym,null,(1),null)))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hookrhs))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,props,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hooklhs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9009){
var vec__9010 = p__9009;
var hooked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9010,(0),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9010,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hooked,null,(1),null)),cljs.core.rest(rhs))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,hooked_syms,hookrhs))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(html_cljs.hooks$macros.mkhook.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(html_cljs.hooks$macros.mkhook.cljs$lang$applyTo = (function (seq8998){
var G__8999 = cljs.core.first(seq8998);
var seq8998__$1 = cljs.core.next(seq8998);
var G__9000 = cljs.core.first(seq8998__$1);
var seq8998__$2 = cljs.core.next(seq8998__$1);
var G__9001 = cljs.core.first(seq8998__$2);
var seq8998__$3 = cljs.core.next(seq8998__$2);
var G__9002 = cljs.core.first(seq8998__$3);
var seq8998__$4 = cljs.core.next(seq8998__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8999,G__9000,G__9001,G__9002,seq8998__$4);
}));

return null;
})()
;
(html_cljs.hooks$macros.mkhook.cljs$lang$macro = true);


//# sourceMappingURL=html-cljs.hooks$macros.js.map
