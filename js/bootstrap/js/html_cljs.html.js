goog.provide('html_cljs.html');






html_cljs.html.use_state = (function html_cljs$html$use_state(clc){
var zeroth_value = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"html-cljs.hooks","html-cljs.hooks",-305009930,null),new cljs.core.Symbol(null,"rarespare","rarespare",1639611315,null));
var state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zeroth_value);
return (function (initial_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),zeroth_value)){
cljs.core.reset_BANG_(state_atom,initial_state);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.deref(state_atom);
}),(function (swap){
html_cljs.lifecycle.refresh(clc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,swap);
})], null);
});
});

/**
 * @interface
 */
html_cljs.html.InternalLifecycle = function(){};

var html_cljs$html$InternalLifecycle$destroy_node$dyn_26515 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.destroy_node[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (html_cljs.html.destroy_node["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.destroy-node",_);
}
}
});
/**
 * user-defined ondestroy callbacks
 */
html_cljs.html.destroy_node = (function html_cljs$html$destroy_node(_){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$destroy_node$arity$1 == null)))))){
return _.html_cljs$html$InternalLifecycle$destroy_node$arity$1(_);
} else {
return html_cljs$html$InternalLifecycle$destroy_node$dyn_26515(_);
}
});

var html_cljs$html$InternalLifecycle$mount_node$dyn_26517 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.mount_node[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (html_cljs.html.mount_node["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.mount-node",_);
}
}
});
/**
 * user-defined onmount callbacks
 */
html_cljs.html.mount_node = (function html_cljs$html$mount_node(_){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$mount_node$arity$1 == null)))))){
return _.html_cljs$html$InternalLifecycle$mount_node$arity$1(_);
} else {
return html_cljs$html$InternalLifecycle$mount_node$dyn_26517(_);
}
});

var html_cljs$html$InternalLifecycle$replace_html$dyn_26518 = (function (_,elem_info){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.replace_html[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,elem_info) : m__4429__auto__.call(null,_,elem_info));
} else {
var m__4426__auto__ = (html_cljs.html.replace_html["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,elem_info) : m__4426__auto__.call(null,_,elem_info));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.replace-html",_);
}
}
});
/**
 * recreate the dom element using supplied elem info
 */
html_cljs.html.replace_html = (function html_cljs$html$replace_html(_,elem_info){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$replace_html$arity$2 == null)))))){
return _.html_cljs$html$InternalLifecycle$replace_html$arity$2(_,elem_info);
} else {
return html_cljs$html$InternalLifecycle$replace_html$dyn_26518(_,elem_info);
}
});

var html_cljs$html$InternalLifecycle$add_child$dyn_26521 = (function (_,vdom_node){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.add_child[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,vdom_node) : m__4429__auto__.call(null,_,vdom_node));
} else {
var m__4426__auto__ = (html_cljs.html.add_child["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,vdom_node) : m__4426__auto__.call(null,_,vdom_node));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.add-child",_);
}
}
});
/**
 * append this child element to end of children list
 */
html_cljs.html.add_child = (function html_cljs$html$add_child(_,vdom_node){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$add_child$arity$2 == null)))))){
return _.html_cljs$html$InternalLifecycle$add_child$arity$2(_,vdom_node);
} else {
return html_cljs$html$InternalLifecycle$add_child$dyn_26521(_,vdom_node);
}
});

var html_cljs$html$InternalLifecycle$remove_child$dyn_26526 = (function (_,vdom_node){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.remove_child[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,vdom_node) : m__4429__auto__.call(null,_,vdom_node));
} else {
var m__4426__auto__ = (html_cljs.html.remove_child["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,vdom_node) : m__4426__auto__.call(null,_,vdom_node));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.remove-child",_);
}
}
});
html_cljs.html.remove_child = (function html_cljs$html$remove_child(_,vdom_node){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$remove_child$arity$2 == null)))))){
return _.html_cljs$html$InternalLifecycle$remove_child$arity$2(_,vdom_node);
} else {
return html_cljs$html$InternalLifecycle$remove_child$dyn_26526(_,vdom_node);
}
});

var html_cljs$html$InternalLifecycle$replace_child$dyn_26531 = (function (_,old_vdom_node,new_vdom_node){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.replace_child[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,old_vdom_node,new_vdom_node) : m__4429__auto__.call(null,_,old_vdom_node,new_vdom_node));
} else {
var m__4426__auto__ = (html_cljs.html.replace_child["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,old_vdom_node,new_vdom_node) : m__4426__auto__.call(null,_,old_vdom_node,new_vdom_node));
} else {
throw cljs.core.missing_protocol("InternalLifecycle.replace-child",_);
}
}
});
html_cljs.html.replace_child = (function html_cljs$html$replace_child(_,old_vdom_node,new_vdom_node){
if((((!((_ == null)))) && ((!((_.html_cljs$html$InternalLifecycle$replace_child$arity$3 == null)))))){
return _.html_cljs$html$InternalLifecycle$replace_child$arity$3(_,old_vdom_node,new_vdom_node);
} else {
return html_cljs$html$InternalLifecycle$replace_child$dyn_26531(_,old_vdom_node,new_vdom_node);
}
});


/**
 * @interface
 */
html_cljs.html.ElementWrapper = function(){};

var html_cljs$html$ElementWrapper$create_html_elem$dyn_26536 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.create_html_elem[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (html_cljs.html.create_html_elem["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ElementWrapper.create-html-elem",_);
}
}
});
html_cljs.html.create_html_elem = (function html_cljs$html$create_html_elem(_){
if((((!((_ == null)))) && ((!((_.html_cljs$html$ElementWrapper$create_html_elem$arity$1 == null)))))){
return _.html_cljs$html$ElementWrapper$create_html_elem$arity$1(_);
} else {
return html_cljs$html$ElementWrapper$create_html_elem$dyn_26536(_);
}
});

var html_cljs$html$ElementWrapper$replace_wrapper$dyn_26541 = (function (_,new_wrapper,that){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.replace_wrapper[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,new_wrapper,that) : m__4429__auto__.call(null,_,new_wrapper,that));
} else {
var m__4426__auto__ = (html_cljs.html.replace_wrapper["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,new_wrapper,that) : m__4426__auto__.call(null,_,new_wrapper,that));
} else {
throw cljs.core.missing_protocol("ElementWrapper.replace-wrapper",_);
}
}
});
html_cljs.html.replace_wrapper = (function html_cljs$html$replace_wrapper(_,new_wrapper,that){
if((((!((_ == null)))) && ((!((_.html_cljs$html$ElementWrapper$replace_wrapper$arity$3 == null)))))){
return _.html_cljs$html$ElementWrapper$replace_wrapper$arity$3(_,new_wrapper,that);
} else {
return html_cljs$html$ElementWrapper$replace_wrapper$dyn_26541(_,new_wrapper,that);
}
});

var html_cljs$html$ElementWrapper$destroy_elem$dyn_26548 = (function (_,html_elem){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (html_cljs.html.destroy_elem[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,html_elem) : m__4429__auto__.call(null,_,html_elem));
} else {
var m__4426__auto__ = (html_cljs.html.destroy_elem["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,html_elem) : m__4426__auto__.call(null,_,html_elem));
} else {
throw cljs.core.missing_protocol("ElementWrapper.destroy-elem",_);
}
}
});
/**
 * cleans up callbacks and removes the dom node
 */
html_cljs.html.destroy_elem = (function html_cljs$html$destroy_elem(_,html_elem){
if((((!((_ == null)))) && ((!((_.html_cljs$html$ElementWrapper$destroy_elem$arity$2 == null)))))){
return _.html_cljs$html$ElementWrapper$destroy_elem$arity$2(_,html_elem);
} else {
return html_cljs$html$ElementWrapper$destroy_elem$dyn_26548(_,html_elem);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {html_cljs.html.ElementWrapper}
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
html_cljs.html.ElementInfo = (function (type,id,class$,elem_props,style,on,href,content,children,__meta,__extmap,__hash){
this.type = type;
this.id = id;
this.class$ = class$;
this.elem_props = elem_props;
this.style = style;
this.on = on;
this.href = href;
this.content = content;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(html_cljs.html.ElementInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26157,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26161 = k26157;
var G__26161__$1 = (((G__26161 instanceof cljs.core.Keyword))?G__26161.fqn:null);
switch (G__26161__$1) {
case "type":
return self__.type;

break;
case "id":
return self__.id;

break;
case "class":
return self__.class$;

break;
case "elem-props":
return self__.elem_props;

break;
case "style":
return self__.style;

break;
case "on":
return self__.on;

break;
case "href":
return self__.href;

break;
case "content":
return self__.content;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26157,else__4383__auto__);

}
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26162){
var vec__26163 = p__26162;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#html-cljs.html.ElementInfo{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elem-props","elem-props",917346836),self__.elem_props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on","on",173873944),self__.on],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"href","href",-793805698),self__.href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26156){
var self__ = this;
var G__26156__$1 = this;
return (new cljs.core.RecordIter((0),G__26156__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1196151798 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26158,other26159){
var self__ = this;
var this26158__$1 = this;
return (((!((other26159 == null)))) && ((this26158__$1.constructor === other26159.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.type,other26159.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.id,other26159.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.class,other26159.class)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.elem_props,other26159.elem_props)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.style,other26159.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.on,other26159.on)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.href,other26159.href)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.content,other26159.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.children,other26159.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26158__$1.__extmap,other26159.__extmap)));
}));

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$ = cljs.core.PROTOCOL_SENTINEL);

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$create_html_elem$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;

var node = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = document.createElement((node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348)) : node.call(null,new cljs.core.Keyword(null,"type","type",1174270348))));
var user_mods = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__26150_SHARP_){
return (el.className = p1__26150_SHARP_);
}),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),(function (p1__26151_SHARP_){
var seq__26181 = cljs.core.seq(p1__26151_SHARP_);
var chunk__26182 = null;
var count__26183 = (0);
var i__26184 = (0);
while(true){
if((i__26184 < count__26183)){
var vec__26191 = chunk__26182.cljs$core$IIndexed$_nth$arity$2(null,i__26184);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26191,(1),null);
(el[k] = v);


var G__26589 = seq__26181;
var G__26590 = chunk__26182;
var G__26591 = count__26183;
var G__26592 = (i__26184 + (1));
seq__26181 = G__26589;
chunk__26182 = G__26590;
count__26183 = G__26591;
i__26184 = G__26592;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26181);
if(temp__5735__auto__){
var seq__26181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26181__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26181__$1);
var G__26594 = cljs.core.chunk_rest(seq__26181__$1);
var G__26595 = c__4556__auto__;
var G__26596 = cljs.core.count(c__4556__auto__);
var G__26597 = (0);
seq__26181 = G__26594;
chunk__26182 = G__26595;
count__26183 = G__26596;
i__26184 = G__26597;
continue;
} else {
var vec__26194 = cljs.core.first(seq__26181__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26194,(1),null);
(el[k] = v);


var G__26600 = cljs.core.next(seq__26181__$1);
var G__26601 = null;
var G__26602 = (0);
var G__26603 = (0);
seq__26181 = G__26600;
chunk__26182 = G__26601;
count__26183 = G__26602;
i__26184 = G__26603;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__26152_SHARP_){
var seq__26197 = cljs.core.seq(p1__26152_SHARP_);
var chunk__26198 = null;
var count__26199 = (0);
var i__26200 = (0);
while(true){
if((i__26200 < count__26199)){
var vec__26207 = chunk__26198.cljs$core$IIndexed$_nth$arity$2(null,i__26200);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(1),null);
(el.style[k] = v);


var G__26609 = seq__26197;
var G__26610 = chunk__26198;
var G__26611 = count__26199;
var G__26612 = (i__26200 + (1));
seq__26197 = G__26609;
chunk__26198 = G__26610;
count__26199 = G__26611;
i__26200 = G__26612;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26197);
if(temp__5735__auto__){
var seq__26197__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26197__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26197__$1);
var G__26615 = cljs.core.chunk_rest(seq__26197__$1);
var G__26616 = c__4556__auto__;
var G__26617 = cljs.core.count(c__4556__auto__);
var G__26618 = (0);
seq__26197 = G__26615;
chunk__26198 = G__26616;
count__26199 = G__26617;
i__26200 = G__26618;
continue;
} else {
var vec__26210 = cljs.core.first(seq__26197__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26210,(1),null);
(el.style[k] = v);


var G__26619 = cljs.core.next(seq__26197__$1);
var G__26620 = null;
var G__26621 = (0);
var G__26622 = (0);
seq__26197 = G__26619;
chunk__26198 = G__26620;
count__26199 = G__26621;
i__26200 = G__26622;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"on","on",173873944),(function (p1__26153_SHARP_){
return (html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2(el,p1__26153_SHARP_) : html_cljs.html.add_callbacks.call(null,el,p1__26153_SHARP_));
}),new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__26154_SHARP_){
return (el.href = p1__26154_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__26155_SHARP_){
return (el.innerHTML = p1__26155_SHARP_);
})], null);
var seq__26213_26623 = cljs.core.seq(node);
var chunk__26214_26624 = null;
var count__26215_26625 = (0);
var i__26216_26626 = (0);
while(true){
if((i__26216_26626 < count__26215_26625)){
var vec__26225_26627 = chunk__26214_26624.cljs$core$IIndexed$_nth$arity$2(null,i__26216_26626);
var k_26628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225_26627,(0),null);
var v_26629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225_26627,(1),null);
if((!((v_26629 == null)))){
var fexpr__26228_26630 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_26628) : user_mods.call(null,k_26628));
(fexpr__26228_26630.cljs$core$IFn$_invoke$arity$1 ? fexpr__26228_26630.cljs$core$IFn$_invoke$arity$1(v_26629) : fexpr__26228_26630.call(null,v_26629));
} else {
}


var G__26631 = seq__26213_26623;
var G__26632 = chunk__26214_26624;
var G__26633 = count__26215_26625;
var G__26634 = (i__26216_26626 + (1));
seq__26213_26623 = G__26631;
chunk__26214_26624 = G__26632;
count__26215_26625 = G__26633;
i__26216_26626 = G__26634;
continue;
} else {
var temp__5735__auto___26635 = cljs.core.seq(seq__26213_26623);
if(temp__5735__auto___26635){
var seq__26213_26636__$1 = temp__5735__auto___26635;
if(cljs.core.chunked_seq_QMARK_(seq__26213_26636__$1)){
var c__4556__auto___26637 = cljs.core.chunk_first(seq__26213_26636__$1);
var G__26638 = cljs.core.chunk_rest(seq__26213_26636__$1);
var G__26639 = c__4556__auto___26637;
var G__26640 = cljs.core.count(c__4556__auto___26637);
var G__26641 = (0);
seq__26213_26623 = G__26638;
chunk__26214_26624 = G__26639;
count__26215_26625 = G__26640;
i__26216_26626 = G__26641;
continue;
} else {
var vec__26229_26642 = cljs.core.first(seq__26213_26636__$1);
var k_26643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26642,(0),null);
var v_26644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26642,(1),null);
if((!((v_26644 == null)))){
var fexpr__26232_26645 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_26643) : user_mods.call(null,k_26643));
(fexpr__26232_26645.cljs$core$IFn$_invoke$arity$1 ? fexpr__26232_26645.cljs$core$IFn$_invoke$arity$1(v_26644) : fexpr__26232_26645.call(null,v_26644));
} else {
}


var G__26646 = cljs.core.next(seq__26213_26636__$1);
var G__26647 = null;
var G__26648 = (0);
var G__26649 = (0);
seq__26213_26623 = G__26646;
chunk__26214_26624 = G__26647;
count__26215_26625 = G__26648;
i__26216_26626 = G__26649;
continue;
}
} else {
}
}
break;
}

return el;
}));

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$replace_wrapper$arity$3 = (function (this$,html_elem,that){
var self__ = this;
var this$__$1 = this;
(html_cljs.html.rm_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.rm_callbacks.cljs$core$IFn$_invoke$arity$2(html_elem,self__.on) : html_cljs.html.rm_callbacks.call(null,html_elem,self__.on));

var G__26233_26650 = html_elem;
var G__26234_26651 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(that);
(html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2(G__26233_26650,G__26234_26651) : html_cljs.html.add_callbacks.call(null,G__26233_26650,G__26234_26651));

var G__26235 = html_elem;
var G__26236 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(that);
return (html_cljs.html.set_style.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.set_style.cljs$core$IFn$_invoke$arity$2(G__26235,G__26236) : html_cljs.html.set_style.call(null,G__26235,G__26236));
}));

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$destroy_elem$arity$2 = (function (_,html_elem){
var self__ = this;
var ___$1 = this;
(html_cljs.html.rm_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.rm_callbacks.cljs$core$IFn$_invoke$arity$2(html_elem,self__.on) : html_cljs.html.rm_callbacks.call(null,html_elem,self__.on));

return html_elem.remove();
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"elem-props","elem-props",917346836),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"on","on",173873944),null,new cljs.core.Keyword(null,"href","href",-793805698),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26156){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26237 = cljs.core.keyword_identical_QMARK_;
var expr__26238 = k__4388__auto__;
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__26238)))){
return (new html_cljs.html.ElementInfo(G__26156,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,G__26156,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,G__26156,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elem-props","elem-props",917346836),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"elem-props","elem-props",917346836),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,G__26156,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,G__26156,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on","on",173873944),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"on","on",173873944),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,G__26156,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"href","href",-793805698),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"href","href",-793805698),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,G__26156,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,G__26156,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26237.cljs$core$IFn$_invoke$arity$2 ? pred__26237.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__26238) : pred__26237.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__26238)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,G__26156,self__.__meta,self__.__extmap,null));
} else {
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26156),null));
}
}
}
}
}
}
}
}
}
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elem-props","elem-props",917346836),self__.elem_props,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on","on",173873944),self__.on,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"href","href",-793805698),self__.href,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26156){
var self__ = this;
var this__4379__auto____$1 = this;
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,G__26156,self__.__extmap,self__.__hash));
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(html_cljs.html.ElementInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"class","class",-390430469,null),new cljs.core.Symbol(null,"elem-props","elem-props",-1737088933,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"href","href",846725829,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(html_cljs.html.ElementInfo.cljs$lang$type = true);

(html_cljs.html.ElementInfo.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"html-cljs.html/ElementInfo",null,(1),null));
}));

(html_cljs.html.ElementInfo.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"html-cljs.html/ElementInfo");
}));

/**
 * Positional factory function for html-cljs.html/ElementInfo.
 */
html_cljs.html.__GT_ElementInfo = (function html_cljs$html$__GT_ElementInfo(type,id,class$,elem_props,style,on,href,content,children){
return (new html_cljs.html.ElementInfo(type,id,class$,elem_props,style,on,href,content,children,null,null,null));
});

/**
 * Factory function for html-cljs.html/ElementInfo, taking a map of keywords to field values.
 */
html_cljs.html.map__GT_ElementInfo = (function html_cljs$html$map__GT_ElementInfo(G__26160){
var extmap__4419__auto__ = (function (){var G__26240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26160,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__26160)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26240);
} else {
return G__26240;
}
})();
return (new html_cljs.html.ElementInfo(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"elem-props","elem-props",917346836).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__26160),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__26160),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {html_cljs.lifecycle.LifecycleHooks}
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
 * @implements {html_cljs.html.InternalLifecycle}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
html_cljs.html.VDomNode = (function (props_atm,hooked_component_atm,child_nodes_atm,html_elem_atm,cached_render_atm,onmounts_atm,ondestroys_atm,__meta,__extmap,__hash){
this.props_atm = props_atm;
this.hooked_component_atm = hooked_component_atm;
this.child_nodes_atm = child_nodes_atm;
this.html_elem_atm = html_elem_atm;
this.cached_render_atm = cached_render_atm;
this.onmounts_atm = onmounts_atm;
this.ondestroys_atm = ondestroys_atm;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$ = cljs.core.PROTOCOL_SENTINEL);

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$destroy_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__26257_26666 = cljs.core.seq(cljs.core.deref(self__.child_nodes_atm));
var chunk__26258_26667 = null;
var count__26259_26668 = (0);
var i__26260_26669 = (0);
while(true){
if((i__26260_26669 < count__26259_26668)){
var child_26670 = chunk__26258_26667.cljs$core$IIndexed$_nth$arity$2(null,i__26260_26669);
html_cljs.html.destroy_node(child_26670);


var G__26671 = seq__26257_26666;
var G__26672 = chunk__26258_26667;
var G__26673 = count__26259_26668;
var G__26674 = (i__26260_26669 + (1));
seq__26257_26666 = G__26671;
chunk__26258_26667 = G__26672;
count__26259_26668 = G__26673;
i__26260_26669 = G__26674;
continue;
} else {
var temp__5735__auto___26675 = cljs.core.seq(seq__26257_26666);
if(temp__5735__auto___26675){
var seq__26257_26676__$1 = temp__5735__auto___26675;
if(cljs.core.chunked_seq_QMARK_(seq__26257_26676__$1)){
var c__4556__auto___26677 = cljs.core.chunk_first(seq__26257_26676__$1);
var G__26678 = cljs.core.chunk_rest(seq__26257_26676__$1);
var G__26679 = c__4556__auto___26677;
var G__26680 = cljs.core.count(c__4556__auto___26677);
var G__26681 = (0);
seq__26257_26666 = G__26678;
chunk__26258_26667 = G__26679;
count__26259_26668 = G__26680;
i__26260_26669 = G__26681;
continue;
} else {
var child_26682 = cljs.core.first(seq__26257_26676__$1);
html_cljs.html.destroy_node(child_26682);


var G__26683 = cljs.core.next(seq__26257_26676__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26257_26666 = G__26683;
chunk__26258_26667 = G__26684;
count__26259_26668 = G__26685;
i__26260_26669 = G__26686;
continue;
}
} else {
}
}
break;
}

var seq__26264 = cljs.core.seq(cljs.core.deref(self__.ondestroys_atm));
var chunk__26265 = null;
var count__26266 = (0);
var i__26267 = (0);
while(true){
if((i__26267 < count__26266)){
var f = chunk__26265.cljs$core$IIndexed$_nth$arity$2(null,i__26267);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26687 = seq__26264;
var G__26688 = chunk__26265;
var G__26689 = count__26266;
var G__26690 = (i__26267 + (1));
seq__26264 = G__26687;
chunk__26265 = G__26688;
count__26266 = G__26689;
i__26267 = G__26690;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26264);
if(temp__5735__auto__){
var seq__26264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26264__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26264__$1);
var G__26691 = cljs.core.chunk_rest(seq__26264__$1);
var G__26692 = c__4556__auto__;
var G__26693 = cljs.core.count(c__4556__auto__);
var G__26694 = (0);
seq__26264 = G__26691;
chunk__26265 = G__26692;
count__26266 = G__26693;
i__26267 = G__26694;
continue;
} else {
var f = cljs.core.first(seq__26264__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26695 = cljs.core.next(seq__26264__$1);
var G__26696 = null;
var G__26697 = (0);
var G__26698 = (0);
seq__26264 = G__26695;
chunk__26265 = G__26696;
count__26266 = G__26697;
i__26267 = G__26698;
continue;
}
} else {
return null;
}
}
break;
}
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$mount_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__26268 = cljs.core.seq(cljs.core.deref(self__.onmounts_atm));
var chunk__26269 = null;
var count__26270 = (0);
var i__26271 = (0);
while(true){
if((i__26271 < count__26270)){
var f = chunk__26269.cljs$core$IIndexed$_nth$arity$2(null,i__26271);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26699 = seq__26268;
var G__26700 = chunk__26269;
var G__26701 = count__26270;
var G__26702 = (i__26271 + (1));
seq__26268 = G__26699;
chunk__26269 = G__26700;
count__26270 = G__26701;
i__26271 = G__26702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26268);
if(temp__5735__auto__){
var seq__26268__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26268__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26268__$1);
var G__26703 = cljs.core.chunk_rest(seq__26268__$1);
var G__26704 = c__4556__auto__;
var G__26705 = cljs.core.count(c__4556__auto__);
var G__26706 = (0);
seq__26268 = G__26703;
chunk__26269 = G__26704;
count__26270 = G__26705;
i__26271 = G__26706;
continue;
} else {
var f = cljs.core.first(seq__26268__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26707 = cljs.core.next(seq__26268__$1);
var G__26708 = null;
var G__26709 = (0);
var G__26710 = (0);
seq__26268 = G__26707;
chunk__26269 = G__26708;
count__26270 = G__26709;
i__26271 = G__26710;
continue;
}
} else {
return null;
}
}
break;
}
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$replace_html$arity$2 = (function (_,elem_info){
var self__ = this;
var ___$1 = this;
var new_elem = html_cljs.html.create_html_elem(elem_info);
var old_elem = cljs.core.deref(self__.html_elem_atm);
var old_parent = old_elem.parentNode;
var seq__26277_26711 = cljs.core.seq(cljs.core.deref(self__.child_nodes_atm));
var chunk__26278_26712 = null;
var count__26279_26713 = (0);
var i__26280_26714 = (0);
while(true){
if((i__26280_26714 < count__26279_26713)){
var child_node_26715 = chunk__26278_26712.cljs$core$IIndexed$_nth$arity$2(null,i__26280_26714);
new_elem.appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(child_node_26715)));


var G__26716 = seq__26277_26711;
var G__26717 = chunk__26278_26712;
var G__26718 = count__26279_26713;
var G__26719 = (i__26280_26714 + (1));
seq__26277_26711 = G__26716;
chunk__26278_26712 = G__26717;
count__26279_26713 = G__26718;
i__26280_26714 = G__26719;
continue;
} else {
var temp__5735__auto___26720 = cljs.core.seq(seq__26277_26711);
if(temp__5735__auto___26720){
var seq__26277_26721__$1 = temp__5735__auto___26720;
if(cljs.core.chunked_seq_QMARK_(seq__26277_26721__$1)){
var c__4556__auto___26722 = cljs.core.chunk_first(seq__26277_26721__$1);
var G__26723 = cljs.core.chunk_rest(seq__26277_26721__$1);
var G__26724 = c__4556__auto___26722;
var G__26725 = cljs.core.count(c__4556__auto___26722);
var G__26726 = (0);
seq__26277_26711 = G__26723;
chunk__26278_26712 = G__26724;
count__26279_26713 = G__26725;
i__26280_26714 = G__26726;
continue;
} else {
var child_node_26727 = cljs.core.first(seq__26277_26721__$1);
new_elem.appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(child_node_26727)));


var G__26728 = cljs.core.next(seq__26277_26721__$1);
var G__26729 = null;
var G__26730 = (0);
var G__26731 = (0);
seq__26277_26711 = G__26728;
chunk__26278_26712 = G__26729;
count__26279_26713 = G__26730;
i__26280_26714 = G__26731;
continue;
}
} else {
}
}
break;
}

old_parent.replaceChild(new_elem,old_elem);

html_cljs.html.destroy_elem(cljs.core.deref(self__.cached_render_atm),old_elem);

return cljs.core.reset_BANG_(self__.html_elem_atm,new_elem);
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$add_child$arity$2 = (function (_,vdom_node){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (p1__26242_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26242_SHARP_,vdom_node);
}));

return cljs.core.deref(self__.html_elem_atm).appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(vdom_node)));
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$remove_child$arity$2 = (function (_,vdom_node){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (nodes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26243_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26243_SHARP_,vdom_node);
}),nodes);
}));

cljs.core.deref(self__.html_elem_atm).removeChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(vdom_node)));

return html_cljs.html.destroy_node(vdom_node);
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$replace_child$arity$3 = (function (_,old_vdom_node,new_vdom_node){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (nodes){
return clojure.walk.prewalk((function (p1__26244_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26244_SHARP_,old_vdom_node)){
return new_vdom_node;
} else {
return p1__26244_SHARP_;
}
}),nodes);
}));

cljs.core.deref(self__.html_elem_atm).replaceChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(new_vdom_node)),cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(old_vdom_node)));

return html_cljs.html.destroy_node(old_vdom_node);
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26249,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26286 = k26249;
var G__26286__$1 = (((G__26286 instanceof cljs.core.Keyword))?G__26286.fqn:null);
switch (G__26286__$1) {
case "props-atm":
return self__.props_atm;

break;
case "hooked-component-atm":
return self__.hooked_component_atm;

break;
case "child-nodes-atm":
return self__.child_nodes_atm;

break;
case "html-elem-atm":
return self__.html_elem_atm;

break;
case "cached-render-atm":
return self__.cached_render_atm;

break;
case "onmounts-atm":
return self__.onmounts_atm;

break;
case "ondestroys-atm":
return self__.ondestroys_atm;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26249,else__4383__auto__);

}
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26287){
var vec__26288 = p__26287;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26288,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26288,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#html-cljs.html.VDomNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props-atm","props-atm",673512993),self__.props_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),self__.hooked_component_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),self__.child_nodes_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),self__.html_elem_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),self__.cached_render_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),self__.onmounts_atm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),self__.ondestroys_atm],null))], null),self__.__extmap));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26248){
var self__ = this;
var G__26248__$1 = this;
return (new cljs.core.RecordIter((0),G__26248__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props-atm","props-atm",673512993),new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,self__.__hash));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-383569437 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26250,other26251){
var self__ = this;
var this26250__$1 = this;
return (((!((other26251 == null)))) && ((this26250__$1.constructor === other26251.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.props_atm,other26251.props_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.hooked_component_atm,other26251.hooked_component_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.child_nodes_atm,other26251.child_nodes_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.html_elem_atm,other26251.html_elem_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.cached_render_atm,other26251.cached_render_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.onmounts_atm,other26251.onmounts_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.ondestroys_atm,other26251.ondestroys_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26250__$1.__extmap,other26251.__extmap)));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"props-atm","props-atm",673512993),null,new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),null,new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),null,new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),null,new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),null,new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),null,new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26248){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26321 = cljs.core.keyword_identical_QMARK_;
var expr__26322 = k__4388__auto__;
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props-atm","props-atm",673512993),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"props-atm","props-atm",673512993),expr__26322)))){
return (new html_cljs.html.VDomNode(G__26248,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,G__26248,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,G__26248,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,G__26248,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,G__26248,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,G__26248,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26321.cljs$core$IFn$_invoke$arity$2 ? pred__26321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),expr__26322) : pred__26321.call(null,new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),expr__26322)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,G__26248,self__.__meta,self__.__extmap,null));
} else {
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26248),null));
}
}
}
}
}
}
}
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"props-atm","props-atm",673512993),self__.props_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),self__.hooked_component_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),self__.child_nodes_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),self__.html_elem_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),self__.cached_render_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),self__.onmounts_atm,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),self__.ondestroys_atm,null))], null),self__.__extmap));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26248){
var self__ = this;
var this__4379__auto____$1 = this;
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,G__26248,self__.__extmap,self__.__hash));
}));

(html_cljs.html.VDomNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$ = cljs.core.PROTOCOL_SENTINEL);

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$rerender$arity$2 = (function (this$,new_props){
var self__ = this;
var this$__$1 = this;
var new_elem_info = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.hooked_component_atm),new_props);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(new_elem_info) : html_cljs.html.steralized.call(null,new_elem_info)),(function (){var G__26326 = cljs.core.deref(self__.cached_render_atm);
return (html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(G__26326) : html_cljs.html.steralized.call(null,G__26326));
})())){
html_cljs.html.replace_wrapper(cljs.core.deref(self__.cached_render_atm),cljs.core.deref(self__.html_elem_atm),new_elem_info);
} else {
this$__$1.html_cljs$html$InternalLifecycle$replace_html$arity$2(null,new_elem_info);
}

var seq__26327_26749 = cljs.core.seq((function (){var G__26363 = (function (){var G__26365 = cljs.core.deref(self__.child_nodes_atm);
var G__26366 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.cached_render_atm)));
var G__26367 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.cached_render_atm)));
return (html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$3(G__26365,G__26366,G__26367) : html_cljs.html.extendzip.call(null,G__26365,G__26366,G__26367));
})();
var G__26364 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new_elem_info);
return (html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$2(G__26363,G__26364) : html_cljs.html.extendzip.call(null,G__26363,G__26364));
})());
var chunk__26328_26750 = null;
var count__26329_26751 = (0);
var i__26330_26752 = (0);
while(true){
if((i__26330_26752 < count__26329_26751)){
var vec__26375_26753 = chunk__26328_26750.cljs$core$IIndexed$_nth$arity$2(null,i__26330_26752);
var vec__26378_26754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26375_26753,(0),null);
var child_node_26755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26378_26754,(0),null);
var old_component_26756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26378_26754,(1),null);
var old_props_26757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26378_26754,(2),null);
var vec__26381_26758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26375_26753,(1),null);
var new_component_26759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26381_26758,(0),null);
var new_props_26760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26381_26758,(1),null);
if((child_node_26755 == null)){
this$__$1.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_26759,new_props_26760__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_26759,new_props_26760__$1)));
} else {
if((new_component_26759 == null)){
this$__$1.html_cljs$html$InternalLifecycle$remove_child$arity$2(null,child_node_26755);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.hash(old_component_26756),cljs.core.hash(new_component_26759))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_26757,new_props_26760__$1)))){
this$__$1.html_cljs$html$InternalLifecycle$replace_child$arity$3(null,child_node_26755,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_26759,new_props_26760__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_26759,new_props_26760__$1)));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_26757,new_props_26760__$1)){
html_cljs.lifecycle.rerender(child_node_26755,new_props_26760__$1);
} else {

}
}
}
}


var G__26761 = seq__26327_26749;
var G__26762 = chunk__26328_26750;
var G__26763 = count__26329_26751;
var G__26764 = (i__26330_26752 + (1));
seq__26327_26749 = G__26761;
chunk__26328_26750 = G__26762;
count__26329_26751 = G__26763;
i__26330_26752 = G__26764;
continue;
} else {
var temp__5735__auto___26765 = cljs.core.seq(seq__26327_26749);
if(temp__5735__auto___26765){
var seq__26327_26766__$1 = temp__5735__auto___26765;
if(cljs.core.chunked_seq_QMARK_(seq__26327_26766__$1)){
var c__4556__auto___26767 = cljs.core.chunk_first(seq__26327_26766__$1);
var G__26768 = cljs.core.chunk_rest(seq__26327_26766__$1);
var G__26769 = c__4556__auto___26767;
var G__26770 = cljs.core.count(c__4556__auto___26767);
var G__26771 = (0);
seq__26327_26749 = G__26768;
chunk__26328_26750 = G__26769;
count__26329_26751 = G__26770;
i__26330_26752 = G__26771;
continue;
} else {
var vec__26384_26772 = cljs.core.first(seq__26327_26766__$1);
var vec__26387_26773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384_26772,(0),null);
var child_node_26774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387_26773,(0),null);
var old_component_26775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387_26773,(1),null);
var old_props_26776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387_26773,(2),null);
var vec__26390_26777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384_26772,(1),null);
var new_component_26778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390_26777,(0),null);
var new_props_26779__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390_26777,(1),null);
if((child_node_26774 == null)){
this$__$1.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_26778,new_props_26779__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_26778,new_props_26779__$1)));
} else {
if((new_component_26778 == null)){
this$__$1.html_cljs$html$InternalLifecycle$remove_child$arity$2(null,child_node_26774);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.hash(old_component_26775),cljs.core.hash(new_component_26778))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_26776,new_props_26779__$1)))){
this$__$1.html_cljs$html$InternalLifecycle$replace_child$arity$3(null,child_node_26774,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_26778,new_props_26779__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_26778,new_props_26779__$1)));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_26776,new_props_26779__$1)){
html_cljs.lifecycle.rerender(child_node_26774,new_props_26779__$1);
} else {

}
}
}
}


var G__26780 = cljs.core.next(seq__26327_26766__$1);
var G__26781 = null;
var G__26782 = (0);
var G__26783 = (0);
seq__26327_26749 = G__26780;
chunk__26328_26750 = G__26781;
count__26329_26751 = G__26782;
i__26330_26752 = G__26783;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(self__.cached_render_atm,new_elem_info);

cljs.core.reset_BANG_(self__.props_atm,new_props);

return this$__$1;
}));

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$getprops$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref(self__.props_atm);
}));

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$on_mount$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.onmounts_atm,(function (p1__26246_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26246_SHARP_,f);
}));
}));

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$on_destroy$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ondestroys_atm,(function (p1__26247_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26247_SHARP_,f);
}));
}));

(html_cljs.html.VDomNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props-atm","props-atm",-1980922776,null),new cljs.core.Symbol(null,"hooked-component-atm","hooked-component-atm",1408084581,null),new cljs.core.Symbol(null,"child-nodes-atm","child-nodes-atm",-869849231,null),new cljs.core.Symbol(null,"html-elem-atm","html-elem-atm",-1114718880,null),new cljs.core.Symbol(null,"cached-render-atm","cached-render-atm",-704449863,null),new cljs.core.Symbol(null,"onmounts-atm","onmounts-atm",1315388725,null),new cljs.core.Symbol(null,"ondestroys-atm","ondestroys-atm",-1079946007,null)], null);
}));

(html_cljs.html.VDomNode.cljs$lang$type = true);

(html_cljs.html.VDomNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"html-cljs.html/VDomNode",null,(1),null));
}));

(html_cljs.html.VDomNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"html-cljs.html/VDomNode");
}));

/**
 * Positional factory function for html-cljs.html/VDomNode.
 */
html_cljs.html.__GT_VDomNode = (function html_cljs$html$__GT_VDomNode(props_atm,hooked_component_atm,child_nodes_atm,html_elem_atm,cached_render_atm,onmounts_atm,ondestroys_atm){
return (new html_cljs.html.VDomNode(props_atm,hooked_component_atm,child_nodes_atm,html_elem_atm,cached_render_atm,onmounts_atm,ondestroys_atm,null,null,null));
});

/**
 * Factory function for html-cljs.html/VDomNode, taking a map of keywords to field values.
 */
html_cljs.html.map__GT_VDomNode = (function html_cljs$html$map__GT_VDomNode(G__26252){
var extmap__4419__auto__ = (function (){var G__26409 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26252,new cljs.core.Keyword(null,"props-atm","props-atm",673512993),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762)], 0));
if(cljs.core.record_QMARK_(G__26252)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26409);
} else {
return G__26409;
}
})();
return (new html_cljs.html.VDomNode(new cljs.core.Keyword(null,"props-atm","props-atm",673512993).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802).cljs$core$IFn$_invoke$arity$1(G__26252),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762).cljs$core$IFn$_invoke$arity$1(G__26252),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * create (and bind to html-dom) a full VDomNode from this component.
 *   the 2 param version creates it from scratch
 *   3 param version tries to reuse the html-element supplied with the old node
 */
html_cljs.html.component__GT_VDomNode = (function html_cljs$html$component__GT_VDomNode(component,props){
var node = html_cljs.html.map__GT_VDomNode(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"props-atm","props-atm",673512993),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));
var hooked_component = (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(node) : component.call(null,node));
var elem_info = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hooked_component,props);
cljs.core.reset_BANG_(node.hooked_component_atm,hooked_component);

cljs.core.reset_BANG_(node.html_elem_atm,html_cljs.html.create_html_elem(elem_info));

cljs.core.reset_BANG_(node.cached_render_atm,elem_info);

var seq__26417_26793 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(elem_info));
var chunk__26418_26794 = null;
var count__26419_26795 = (0);
var i__26420_26796 = (0);
while(true){
if((i__26420_26796 < count__26419_26795)){
var vec__26436_26798 = chunk__26418_26794.cljs$core$IIndexed$_nth$arity$2(null,i__26420_26796);
var child_component_26799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26436_26798,(0),null);
var props_26800__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26436_26798,(1),null);
node.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3(child_component_26799,props_26800__$1,node) : html_cljs.html.component__GT_VDomNode.call(null,child_component_26799,props_26800__$1,node)));


var G__26801 = seq__26417_26793;
var G__26802 = chunk__26418_26794;
var G__26803 = count__26419_26795;
var G__26804 = (i__26420_26796 + (1));
seq__26417_26793 = G__26801;
chunk__26418_26794 = G__26802;
count__26419_26795 = G__26803;
i__26420_26796 = G__26804;
continue;
} else {
var temp__5735__auto___26805 = cljs.core.seq(seq__26417_26793);
if(temp__5735__auto___26805){
var seq__26417_26810__$1 = temp__5735__auto___26805;
if(cljs.core.chunked_seq_QMARK_(seq__26417_26810__$1)){
var c__4556__auto___26814 = cljs.core.chunk_first(seq__26417_26810__$1);
var G__26816 = cljs.core.chunk_rest(seq__26417_26810__$1);
var G__26817 = c__4556__auto___26814;
var G__26818 = cljs.core.count(c__4556__auto___26814);
var G__26819 = (0);
seq__26417_26793 = G__26816;
chunk__26418_26794 = G__26817;
count__26419_26795 = G__26818;
i__26420_26796 = G__26819;
continue;
} else {
var vec__26445_26823 = cljs.core.first(seq__26417_26810__$1);
var child_component_26824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445_26823,(0),null);
var props_26825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445_26823,(1),null);
node.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3(child_component_26824,props_26825__$1,node) : html_cljs.html.component__GT_VDomNode.call(null,child_component_26824,props_26825__$1,node)));


var G__26828 = cljs.core.next(seq__26417_26810__$1);
var G__26829 = null;
var G__26830 = (0);
var G__26831 = (0);
seq__26417_26793 = G__26828;
chunk__26418_26794 = G__26829;
count__26419_26795 = G__26830;
i__26420_26796 = G__26831;
continue;
}
} else {
}
}
break;
}

node.html_cljs$html$InternalLifecycle$mount_node$arity$1(null);

return node;
});
/**
 * zips arbitrary number of seqs filling in nils if some are shorter
 */
html_cljs.html.extendzip = (function html_cljs$html$extendzip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26836 = arguments.length;
var i__4737__auto___26837 = (0);
while(true){
if((i__4737__auto___26837 < len__4736__auto___26836)){
args__4742__auto__.push((arguments[i__4737__auto___26837]));

var G__26838 = (i__4737__auto___26837 + (1));
i__4737__auto___26837 = G__26838;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$variadic = (function (ls){
var maxlen = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,ls));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.vector),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (l){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return null;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((maxlen - cljs.core.count(l)))));
}),ls));
}));

(html_cljs.html.extendzip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(html_cljs.html.extendzip.cljs$lang$applyTo = (function (seq26448){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26448));
}));

html_cljs.html.update_children = (function html_cljs$html$update_children(children){
return null;
});
html_cljs.html.steralized = (function html_cljs$html$steralized(elem_info){

return clojure.walk.postwalk((function (p1__26453_SHARP_){
if(cljs.core.fn_QMARK_(p1__26453_SHARP_)){
return "fn";
} else {
return p1__26453_SHARP_;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(elem_info,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"children","children",-940561982)], 0)));
});
html_cljs.html.add_callbacks = (function html_cljs$html$add_callbacks(el,event_map){
var seq__26454 = cljs.core.seq(event_map);
var chunk__26455 = null;
var count__26456 = (0);
var i__26457 = (0);
while(true){
if((i__26457 < count__26456)){
var vec__26468 = chunk__26455.cljs$core$IIndexed$_nth$arity$2(null,i__26457);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468,(1),null);
el.addEventListener(event_name,f);


var G__26857 = seq__26454;
var G__26858 = chunk__26455;
var G__26859 = count__26456;
var G__26860 = (i__26457 + (1));
seq__26454 = G__26857;
chunk__26455 = G__26858;
count__26456 = G__26859;
i__26457 = G__26860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26454);
if(temp__5735__auto__){
var seq__26454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26454__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26454__$1);
var G__26863 = cljs.core.chunk_rest(seq__26454__$1);
var G__26864 = c__4556__auto__;
var G__26865 = cljs.core.count(c__4556__auto__);
var G__26866 = (0);
seq__26454 = G__26863;
chunk__26455 = G__26864;
count__26456 = G__26865;
i__26457 = G__26866;
continue;
} else {
var vec__26472 = cljs.core.first(seq__26454__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472,(1),null);
el.addEventListener(event_name,f);


var G__26870 = cljs.core.next(seq__26454__$1);
var G__26871 = null;
var G__26872 = (0);
var G__26873 = (0);
seq__26454 = G__26870;
chunk__26455 = G__26871;
count__26456 = G__26872;
i__26457 = G__26873;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.rm_callbacks = (function html_cljs$html$rm_callbacks(el,event_map){
var seq__26475 = cljs.core.seq(event_map);
var chunk__26476 = null;
var count__26477 = (0);
var i__26478 = (0);
while(true){
if((i__26478 < count__26477)){
var vec__26487 = chunk__26476.cljs$core$IIndexed$_nth$arity$2(null,i__26478);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26487,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26487,(1),null);
el.removeEventListener(event_name,f);


var G__26878 = seq__26475;
var G__26879 = chunk__26476;
var G__26880 = count__26477;
var G__26881 = (i__26478 + (1));
seq__26475 = G__26878;
chunk__26476 = G__26879;
count__26477 = G__26880;
i__26478 = G__26881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26475);
if(temp__5735__auto__){
var seq__26475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26475__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26475__$1);
var G__26882 = cljs.core.chunk_rest(seq__26475__$1);
var G__26883 = c__4556__auto__;
var G__26884 = cljs.core.count(c__4556__auto__);
var G__26885 = (0);
seq__26475 = G__26882;
chunk__26476 = G__26883;
count__26477 = G__26884;
i__26478 = G__26885;
continue;
} else {
var vec__26490 = cljs.core.first(seq__26475__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26490,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26490,(1),null);
el.removeEventListener(event_name,f);


var G__26887 = cljs.core.next(seq__26475__$1);
var G__26888 = null;
var G__26889 = (0);
var G__26890 = (0);
seq__26475 = G__26887;
chunk__26476 = G__26888;
count__26477 = G__26889;
i__26478 = G__26890;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.set_style = (function html_cljs$html$set_style(el,styles){
var seq__26493 = cljs.core.seq(styles);
var chunk__26494 = null;
var count__26495 = (0);
var i__26496 = (0);
while(true){
if((i__26496 < count__26495)){
var vec__26509 = chunk__26494.cljs$core$IIndexed$_nth$arity$2(null,i__26496);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26509,(1),null);
(el.style[k] = v);


var G__26892 = seq__26493;
var G__26893 = chunk__26494;
var G__26894 = count__26495;
var G__26895 = (i__26496 + (1));
seq__26493 = G__26892;
chunk__26494 = G__26893;
count__26495 = G__26894;
i__26496 = G__26895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26493);
if(temp__5735__auto__){
var seq__26493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26493__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26493__$1);
var G__26896 = cljs.core.chunk_rest(seq__26493__$1);
var G__26897 = c__4556__auto__;
var G__26898 = cljs.core.count(c__4556__auto__);
var G__26899 = (0);
seq__26493 = G__26896;
chunk__26494 = G__26897;
count__26495 = G__26898;
i__26496 = G__26899;
continue;
} else {
var vec__26512 = cljs.core.first(seq__26493__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512,(1),null);
(el.style[k] = v);


var G__26900 = cljs.core.next(seq__26493__$1);
var G__26901 = null;
var G__26902 = (0);
var G__26903 = (0);
seq__26493 = G__26900;
chunk__26494 = G__26901;
count__26495 = G__26902;
i__26496 = G__26903;
continue;
}
} else {
return null;
}
}
break;
}
});
html_cljs.html.mount = (function html_cljs$html$mount(html_elem,component){
var el_26904 = html_elem;
while(true){
if(cljs.core.truth_(el_26904.hasChildNodes())){
el_26904.removeChild(el_26904.firstChild);

var G__26905 = el_26904;
el_26904 = G__26905;
continue;
} else {
}
break;
}

var node = html_cljs.html.component__GT_VDomNode(component,null);
html_elem.appendChild(cljs.core.deref(node.html_elem_atm));

return node;
});

//# sourceMappingURL=html_cljs.html.js.map
