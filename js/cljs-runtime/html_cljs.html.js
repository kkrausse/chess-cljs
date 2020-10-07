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

var html_cljs$html$InternalLifecycle$destroy_node$dyn_28138 = (function (_){
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
return html_cljs$html$InternalLifecycle$destroy_node$dyn_28138(_);
}
});

var html_cljs$html$InternalLifecycle$mount_node$dyn_28139 = (function (_){
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
return html_cljs$html$InternalLifecycle$mount_node$dyn_28139(_);
}
});

var html_cljs$html$InternalLifecycle$replace_html$dyn_28140 = (function (_,elem_info){
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
return html_cljs$html$InternalLifecycle$replace_html$dyn_28140(_,elem_info);
}
});

var html_cljs$html$InternalLifecycle$add_child$dyn_28141 = (function (_,vdom_node){
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
return html_cljs$html$InternalLifecycle$add_child$dyn_28141(_,vdom_node);
}
});

var html_cljs$html$InternalLifecycle$remove_child$dyn_28142 = (function (_,vdom_node){
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
return html_cljs$html$InternalLifecycle$remove_child$dyn_28142(_,vdom_node);
}
});

var html_cljs$html$InternalLifecycle$replace_child$dyn_28143 = (function (_,old_vdom_node,new_vdom_node){
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
return html_cljs$html$InternalLifecycle$replace_child$dyn_28143(_,old_vdom_node,new_vdom_node);
}
});


/**
 * @interface
 */
html_cljs.html.ElementWrapper = function(){};

var html_cljs$html$ElementWrapper$create_html_elem$dyn_28144 = (function (_){
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
return html_cljs$html$ElementWrapper$create_html_elem$dyn_28144(_);
}
});

var html_cljs$html$ElementWrapper$replace_wrapper$dyn_28145 = (function (_,new_wrapper,that){
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
return html_cljs$html$ElementWrapper$replace_wrapper$dyn_28145(_,new_wrapper,that);
}
});

var html_cljs$html$ElementWrapper$destroy_elem$dyn_28146 = (function (_,html_elem){
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
return html_cljs$html$ElementWrapper$destroy_elem$dyn_28146(_,html_elem);
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

(html_cljs.html.ElementInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27917,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27921 = k27917;
var G__27921__$1 = (((G__27921 instanceof cljs.core.Keyword))?G__27921.fqn:null);
switch (G__27921__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27917,else__4383__auto__);

}
}));

(html_cljs.html.ElementInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27922){
var vec__27923 = p__27922;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(1),null);
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

(html_cljs.html.ElementInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27916){
var self__ = this;
var G__27916__$1 = this;
return (new cljs.core.RecordIter((0),G__27916__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(html_cljs.html.ElementInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27918,other27919){
var self__ = this;
var this27918__$1 = this;
return (((!((other27919 == null)))) && ((this27918__$1.constructor === other27919.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.type,other27919.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.id,other27919.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.class,other27919.class)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.elem_props,other27919.elem_props)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.style,other27919.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.on,other27919.on)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.href,other27919.href)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.content,other27919.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.children,other27919.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27918__$1.__extmap,other27919.__extmap)));
}));

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$ = cljs.core.PROTOCOL_SENTINEL);

(html_cljs.html.ElementInfo.prototype.html_cljs$html$ElementWrapper$create_html_elem$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;

var node = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = document.createElement((node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348)) : node.call(null,new cljs.core.Keyword(null,"type","type",1174270348))));
var user_mods = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__27910_SHARP_){
return (el.className = p1__27910_SHARP_);
}),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),(function (p1__27911_SHARP_){
var seq__27926 = cljs.core.seq(p1__27911_SHARP_);
var chunk__27927 = null;
var count__27928 = (0);
var i__27929 = (0);
while(true){
if((i__27929 < count__27928)){
var vec__27936 = chunk__27927.cljs$core$IIndexed$_nth$arity$2(null,i__27929);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(1),null);
(el[k] = v);


var G__28162 = seq__27926;
var G__28163 = chunk__27927;
var G__28164 = count__27928;
var G__28165 = (i__27929 + (1));
seq__27926 = G__28162;
chunk__27927 = G__28163;
count__27928 = G__28164;
i__27929 = G__28165;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27926);
if(temp__5735__auto__){
var seq__27926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27926__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27926__$1);
var G__28166 = cljs.core.chunk_rest(seq__27926__$1);
var G__28167 = c__4556__auto__;
var G__28168 = cljs.core.count(c__4556__auto__);
var G__28169 = (0);
seq__27926 = G__28166;
chunk__27927 = G__28167;
count__27928 = G__28168;
i__27929 = G__28169;
continue;
} else {
var vec__27939 = cljs.core.first(seq__27926__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(1),null);
(el[k] = v);


var G__28170 = cljs.core.next(seq__27926__$1);
var G__28171 = null;
var G__28172 = (0);
var G__28173 = (0);
seq__27926 = G__28170;
chunk__27927 = G__28171;
count__27928 = G__28172;
i__27929 = G__28173;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__27912_SHARP_){
var seq__27942 = cljs.core.seq(p1__27912_SHARP_);
var chunk__27943 = null;
var count__27944 = (0);
var i__27945 = (0);
while(true){
if((i__27945 < count__27944)){
var vec__27952 = chunk__27943.cljs$core$IIndexed$_nth$arity$2(null,i__27945);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(1),null);
(el.style[k] = v);


var G__28174 = seq__27942;
var G__28175 = chunk__27943;
var G__28176 = count__27944;
var G__28177 = (i__27945 + (1));
seq__27942 = G__28174;
chunk__27943 = G__28175;
count__27944 = G__28176;
i__27945 = G__28177;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27942);
if(temp__5735__auto__){
var seq__27942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27942__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27942__$1);
var G__28178 = cljs.core.chunk_rest(seq__27942__$1);
var G__28179 = c__4556__auto__;
var G__28180 = cljs.core.count(c__4556__auto__);
var G__28181 = (0);
seq__27942 = G__28178;
chunk__27943 = G__28179;
count__27944 = G__28180;
i__27945 = G__28181;
continue;
} else {
var vec__27955 = cljs.core.first(seq__27942__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27955,(1),null);
(el.style[k] = v);


var G__28182 = cljs.core.next(seq__27942__$1);
var G__28183 = null;
var G__28184 = (0);
var G__28185 = (0);
seq__27942 = G__28182;
chunk__27943 = G__28183;
count__27944 = G__28184;
i__27945 = G__28185;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"on","on",173873944),(function (p1__27913_SHARP_){
return (html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2(el,p1__27913_SHARP_) : html_cljs.html.add_callbacks.call(null,el,p1__27913_SHARP_));
}),new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__27914_SHARP_){
return (el.href = p1__27914_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__27915_SHARP_){
return (el.innerHTML = p1__27915_SHARP_);
})], null);
var seq__27958_28186 = cljs.core.seq(node);
var chunk__27959_28187 = null;
var count__27960_28188 = (0);
var i__27961_28189 = (0);
while(true){
if((i__27961_28189 < count__27960_28188)){
var vec__27970_28190 = chunk__27959_28187.cljs$core$IIndexed$_nth$arity$2(null,i__27961_28189);
var k_28191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970_28190,(0),null);
var v_28192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27970_28190,(1),null);
if((!((v_28192 == null)))){
var fexpr__27973_28193 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_28191) : user_mods.call(null,k_28191));
(fexpr__27973_28193.cljs$core$IFn$_invoke$arity$1 ? fexpr__27973_28193.cljs$core$IFn$_invoke$arity$1(v_28192) : fexpr__27973_28193.call(null,v_28192));
} else {
}


var G__28194 = seq__27958_28186;
var G__28195 = chunk__27959_28187;
var G__28196 = count__27960_28188;
var G__28197 = (i__27961_28189 + (1));
seq__27958_28186 = G__28194;
chunk__27959_28187 = G__28195;
count__27960_28188 = G__28196;
i__27961_28189 = G__28197;
continue;
} else {
var temp__5735__auto___28198 = cljs.core.seq(seq__27958_28186);
if(temp__5735__auto___28198){
var seq__27958_28199__$1 = temp__5735__auto___28198;
if(cljs.core.chunked_seq_QMARK_(seq__27958_28199__$1)){
var c__4556__auto___28200 = cljs.core.chunk_first(seq__27958_28199__$1);
var G__28201 = cljs.core.chunk_rest(seq__27958_28199__$1);
var G__28202 = c__4556__auto___28200;
var G__28203 = cljs.core.count(c__4556__auto___28200);
var G__28204 = (0);
seq__27958_28186 = G__28201;
chunk__27959_28187 = G__28202;
count__27960_28188 = G__28203;
i__27961_28189 = G__28204;
continue;
} else {
var vec__27974_28205 = cljs.core.first(seq__27958_28199__$1);
var k_28206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_28205,(0),null);
var v_28207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_28205,(1),null);
if((!((v_28207 == null)))){
var fexpr__27977_28208 = (user_mods.cljs$core$IFn$_invoke$arity$1 ? user_mods.cljs$core$IFn$_invoke$arity$1(k_28206) : user_mods.call(null,k_28206));
(fexpr__27977_28208.cljs$core$IFn$_invoke$arity$1 ? fexpr__27977_28208.cljs$core$IFn$_invoke$arity$1(v_28207) : fexpr__27977_28208.call(null,v_28207));
} else {
}


var G__28209 = cljs.core.next(seq__27958_28199__$1);
var G__28210 = null;
var G__28211 = (0);
var G__28212 = (0);
seq__27958_28186 = G__28209;
chunk__27959_28187 = G__28210;
count__27960_28188 = G__28211;
i__27961_28189 = G__28212;
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

var G__27978_28213 = html_elem;
var G__27979_28214 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(that);
(html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.add_callbacks.cljs$core$IFn$_invoke$arity$2(G__27978_28213,G__27979_28214) : html_cljs.html.add_callbacks.call(null,G__27978_28213,G__27979_28214));

var G__27980 = html_elem;
var G__27981 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(that);
return (html_cljs.html.set_style.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.set_style.cljs$core$IFn$_invoke$arity$2(G__27980,G__27981) : html_cljs.html.set_style.call(null,G__27980,G__27981));
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

(html_cljs.html.ElementInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27916){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27982 = cljs.core.keyword_identical_QMARK_;
var expr__27983 = k__4388__auto__;
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__27983)))){
return (new html_cljs.html.ElementInfo(G__27916,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,G__27916,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,G__27916,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elem-props","elem-props",917346836),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"elem-props","elem-props",917346836),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,G__27916,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,G__27916,self__.on,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on","on",173873944),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"on","on",173873944),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,G__27916,self__.href,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"href","href",-793805698),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"href","href",-793805698),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,G__27916,self__.content,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,G__27916,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27982.cljs$core$IFn$_invoke$arity$2 ? pred__27982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__27983) : pred__27982.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__27983)))){
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,G__27916,self__.__meta,self__.__extmap,null));
} else {
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27916),null));
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

(html_cljs.html.ElementInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27916){
var self__ = this;
var this__4379__auto____$1 = this;
return (new html_cljs.html.ElementInfo(self__.type,self__.id,self__.class$,self__.elem_props,self__.style,self__.on,self__.href,self__.content,self__.children,G__27916,self__.__extmap,self__.__hash));
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
html_cljs.html.map__GT_ElementInfo = (function html_cljs$html$map__GT_ElementInfo(G__27920){
var extmap__4419__auto__ = (function (){var G__27985 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27920,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__27920)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27985);
} else {
return G__27985;
}
})();
return (new html_cljs.html.ElementInfo(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"elem-props","elem-props",917346836).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__27920),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__27920),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var seq__27996_28238 = cljs.core.seq(cljs.core.deref(self__.child_nodes_atm));
var chunk__27997_28239 = null;
var count__27998_28240 = (0);
var i__27999_28241 = (0);
while(true){
if((i__27999_28241 < count__27998_28240)){
var child_28244 = chunk__27997_28239.cljs$core$IIndexed$_nth$arity$2(null,i__27999_28241);
html_cljs.html.destroy_node(child_28244);


var G__28245 = seq__27996_28238;
var G__28246 = chunk__27997_28239;
var G__28247 = count__27998_28240;
var G__28248 = (i__27999_28241 + (1));
seq__27996_28238 = G__28245;
chunk__27997_28239 = G__28246;
count__27998_28240 = G__28247;
i__27999_28241 = G__28248;
continue;
} else {
var temp__5735__auto___28251 = cljs.core.seq(seq__27996_28238);
if(temp__5735__auto___28251){
var seq__27996_28252__$1 = temp__5735__auto___28251;
if(cljs.core.chunked_seq_QMARK_(seq__27996_28252__$1)){
var c__4556__auto___28253 = cljs.core.chunk_first(seq__27996_28252__$1);
var G__28254 = cljs.core.chunk_rest(seq__27996_28252__$1);
var G__28255 = c__4556__auto___28253;
var G__28256 = cljs.core.count(c__4556__auto___28253);
var G__28257 = (0);
seq__27996_28238 = G__28254;
chunk__27997_28239 = G__28255;
count__27998_28240 = G__28256;
i__27999_28241 = G__28257;
continue;
} else {
var child_28262 = cljs.core.first(seq__27996_28252__$1);
html_cljs.html.destroy_node(child_28262);


var G__28266 = cljs.core.next(seq__27996_28252__$1);
var G__28267 = null;
var G__28268 = (0);
var G__28269 = (0);
seq__27996_28238 = G__28266;
chunk__27997_28239 = G__28267;
count__27998_28240 = G__28268;
i__27999_28241 = G__28269;
continue;
}
} else {
}
}
break;
}

var seq__28000 = cljs.core.seq(cljs.core.deref(self__.ondestroys_atm));
var chunk__28001 = null;
var count__28002 = (0);
var i__28003 = (0);
while(true){
if((i__28003 < count__28002)){
var f = chunk__28001.cljs$core$IIndexed$_nth$arity$2(null,i__28003);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__28274 = seq__28000;
var G__28275 = chunk__28001;
var G__28276 = count__28002;
var G__28277 = (i__28003 + (1));
seq__28000 = G__28274;
chunk__28001 = G__28275;
count__28002 = G__28276;
i__28003 = G__28277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28000);
if(temp__5735__auto__){
var seq__28000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28000__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28000__$1);
var G__28280 = cljs.core.chunk_rest(seq__28000__$1);
var G__28281 = c__4556__auto__;
var G__28282 = cljs.core.count(c__4556__auto__);
var G__28283 = (0);
seq__28000 = G__28280;
chunk__28001 = G__28281;
count__28002 = G__28282;
i__28003 = G__28283;
continue;
} else {
var f = cljs.core.first(seq__28000__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__28286 = cljs.core.next(seq__28000__$1);
var G__28287 = null;
var G__28288 = (0);
var G__28289 = (0);
seq__28000 = G__28286;
chunk__28001 = G__28287;
count__28002 = G__28288;
i__28003 = G__28289;
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
var seq__28004 = cljs.core.seq(cljs.core.deref(self__.onmounts_atm));
var chunk__28005 = null;
var count__28006 = (0);
var i__28007 = (0);
while(true){
if((i__28007 < count__28006)){
var f = chunk__28005.cljs$core$IIndexed$_nth$arity$2(null,i__28007);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__28293 = seq__28004;
var G__28294 = chunk__28005;
var G__28295 = count__28006;
var G__28296 = (i__28007 + (1));
seq__28004 = G__28293;
chunk__28005 = G__28294;
count__28006 = G__28295;
i__28007 = G__28296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28004);
if(temp__5735__auto__){
var seq__28004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28004__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28004__$1);
var G__28299 = cljs.core.chunk_rest(seq__28004__$1);
var G__28300 = c__4556__auto__;
var G__28301 = cljs.core.count(c__4556__auto__);
var G__28302 = (0);
seq__28004 = G__28299;
chunk__28005 = G__28300;
count__28006 = G__28301;
i__28007 = G__28302;
continue;
} else {
var f = cljs.core.first(seq__28004__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__28303 = cljs.core.next(seq__28004__$1);
var G__28304 = null;
var G__28305 = (0);
var G__28306 = (0);
seq__28004 = G__28303;
chunk__28005 = G__28304;
count__28006 = G__28305;
i__28007 = G__28306;
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
var seq__28008_28312 = cljs.core.seq(cljs.core.deref(self__.child_nodes_atm));
var chunk__28009_28313 = null;
var count__28010_28314 = (0);
var i__28011_28315 = (0);
while(true){
if((i__28011_28315 < count__28010_28314)){
var child_node_28318 = chunk__28009_28313.cljs$core$IIndexed$_nth$arity$2(null,i__28011_28315);
new_elem.appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(child_node_28318)));


var G__28319 = seq__28008_28312;
var G__28320 = chunk__28009_28313;
var G__28321 = count__28010_28314;
var G__28322 = (i__28011_28315 + (1));
seq__28008_28312 = G__28319;
chunk__28009_28313 = G__28320;
count__28010_28314 = G__28321;
i__28011_28315 = G__28322;
continue;
} else {
var temp__5735__auto___28323 = cljs.core.seq(seq__28008_28312);
if(temp__5735__auto___28323){
var seq__28008_28324__$1 = temp__5735__auto___28323;
if(cljs.core.chunked_seq_QMARK_(seq__28008_28324__$1)){
var c__4556__auto___28325 = cljs.core.chunk_first(seq__28008_28324__$1);
var G__28326 = cljs.core.chunk_rest(seq__28008_28324__$1);
var G__28327 = c__4556__auto___28325;
var G__28328 = cljs.core.count(c__4556__auto___28325);
var G__28329 = (0);
seq__28008_28312 = G__28326;
chunk__28009_28313 = G__28327;
count__28010_28314 = G__28328;
i__28011_28315 = G__28329;
continue;
} else {
var child_node_28330 = cljs.core.first(seq__28008_28324__$1);
new_elem.appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(child_node_28330)));


var G__28333 = cljs.core.next(seq__28008_28324__$1);
var G__28334 = null;
var G__28335 = (0);
var G__28336 = (0);
seq__28008_28312 = G__28333;
chunk__28009_28313 = G__28334;
count__28010_28314 = G__28335;
i__28011_28315 = G__28336;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (p1__27986_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27986_SHARP_,vdom_node);
}));

return cljs.core.deref(self__.html_elem_atm).appendChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(vdom_node)));
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$remove_child$arity$2 = (function (_,vdom_node){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (nodes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27987_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27987_SHARP_,vdom_node);
}),nodes);
}));

cljs.core.deref(self__.html_elem_atm).removeChild(cljs.core.deref(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(vdom_node)));

return html_cljs.html.destroy_node(vdom_node);
}));

(html_cljs.html.VDomNode.prototype.html_cljs$html$InternalLifecycle$replace_child$arity$3 = (function (_,old_vdom_node,new_vdom_node){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.child_nodes_atm,(function (nodes){
return clojure.walk.prewalk((function (p1__27988_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27988_SHARP_,old_vdom_node)){
return new_vdom_node;
} else {
return p1__27988_SHARP_;
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

(html_cljs.html.VDomNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27992,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28012 = k27992;
var G__28012__$1 = (((G__28012 instanceof cljs.core.Keyword))?G__28012.fqn:null);
switch (G__28012__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27992,else__4383__auto__);

}
}));

(html_cljs.html.VDomNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28013){
var vec__28014 = p__28013;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28014,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28014,(1),null);
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

(html_cljs.html.VDomNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27991){
var self__ = this;
var G__27991__$1 = this;
return (new cljs.core.RecordIter((0),G__27991__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props-atm","props-atm",673512993),new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(html_cljs.html.VDomNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27993,other27994){
var self__ = this;
var this27993__$1 = this;
return (((!((other27994 == null)))) && ((this27993__$1.constructor === other27994.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.props_atm,other27994.props_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.hooked_component_atm,other27994.hooked_component_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.child_nodes_atm,other27994.child_nodes_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.html_elem_atm,other27994.html_elem_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.cached_render_atm,other27994.cached_render_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.onmounts_atm,other27994.onmounts_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.ondestroys_atm,other27994.ondestroys_atm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.__extmap,other27994.__extmap)));
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

(html_cljs.html.VDomNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27991){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28017 = cljs.core.keyword_identical_QMARK_;
var expr__28018 = k__4388__auto__;
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props-atm","props-atm",673512993),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"props-atm","props-atm",673512993),expr__28018)))){
return (new html_cljs.html.VDomNode(G__27991,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,G__27991,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,G__27991,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,G__27991,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,G__27991,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,G__27991,self__.ondestroys_atm,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),expr__28018) : pred__28017.call(null,new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762),expr__28018)))){
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,G__27991,self__.__meta,self__.__extmap,null));
} else {
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27991),null));
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

(html_cljs.html.VDomNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27991){
var self__ = this;
var this__4379__auto____$1 = this;
return (new html_cljs.html.VDomNode(self__.props_atm,self__.hooked_component_atm,self__.child_nodes_atm,self__.html_elem_atm,self__.cached_render_atm,self__.onmounts_atm,self__.ondestroys_atm,G__27991,self__.__extmap,self__.__hash));
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(new_elem_info) : html_cljs.html.steralized.call(null,new_elem_info)),(function (){var G__28020 = cljs.core.deref(self__.cached_render_atm);
return (html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1 ? html_cljs.html.steralized.cljs$core$IFn$_invoke$arity$1(G__28020) : html_cljs.html.steralized.call(null,G__28020));
})())){
html_cljs.html.replace_wrapper(cljs.core.deref(self__.cached_render_atm),cljs.core.deref(self__.html_elem_atm),new_elem_info);
} else {
this$__$1.html_cljs$html$InternalLifecycle$replace_html$arity$2(null,new_elem_info);
}

var seq__28021_28364 = cljs.core.seq((function (){var G__28048 = (function (){var G__28050 = cljs.core.deref(self__.child_nodes_atm);
var G__28051 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.cached_render_atm)));
var G__28052 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.cached_render_atm)));
return (html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$3(G__28050,G__28051,G__28052) : html_cljs.html.extendzip.call(null,G__28050,G__28051,G__28052));
})();
var G__28049 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new_elem_info);
return (html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.extendzip.cljs$core$IFn$_invoke$arity$2(G__28048,G__28049) : html_cljs.html.extendzip.call(null,G__28048,G__28049));
})());
var chunk__28022_28365 = null;
var count__28023_28366 = (0);
var i__28024_28367 = (0);
while(true){
if((i__28024_28367 < count__28023_28366)){
var vec__28053_28369 = chunk__28022_28365.cljs$core$IIndexed$_nth$arity$2(null,i__28024_28367);
var vec__28056_28370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053_28369,(0),null);
var child_node_28371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28056_28370,(0),null);
var old_component_28372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28056_28370,(1),null);
var old_props_28373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28056_28370,(2),null);
var vec__28059_28374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053_28369,(1),null);
var new_component_28375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28059_28374,(0),null);
var new_props_28376__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28059_28374,(1),null);
if((child_node_28371 == null)){
this$__$1.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_28375,new_props_28376__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_28375,new_props_28376__$1)));
} else {
if((new_component_28375 == null)){
this$__$1.html_cljs$html$InternalLifecycle$remove_child$arity$2(null,child_node_28371);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.hash(old_component_28372),cljs.core.hash(new_component_28375))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_28373,new_props_28376__$1)))){
this$__$1.html_cljs$html$InternalLifecycle$replace_child$arity$3(null,child_node_28371,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_28375,new_props_28376__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_28375,new_props_28376__$1)));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_28373,new_props_28376__$1)){
html_cljs.lifecycle.rerender(child_node_28371,new_props_28376__$1);
} else {

}
}
}
}


var G__28380 = seq__28021_28364;
var G__28381 = chunk__28022_28365;
var G__28382 = count__28023_28366;
var G__28383 = (i__28024_28367 + (1));
seq__28021_28364 = G__28380;
chunk__28022_28365 = G__28381;
count__28023_28366 = G__28382;
i__28024_28367 = G__28383;
continue;
} else {
var temp__5735__auto___28384 = cljs.core.seq(seq__28021_28364);
if(temp__5735__auto___28384){
var seq__28021_28385__$1 = temp__5735__auto___28384;
if(cljs.core.chunked_seq_QMARK_(seq__28021_28385__$1)){
var c__4556__auto___28386 = cljs.core.chunk_first(seq__28021_28385__$1);
var G__28387 = cljs.core.chunk_rest(seq__28021_28385__$1);
var G__28388 = c__4556__auto___28386;
var G__28389 = cljs.core.count(c__4556__auto___28386);
var G__28390 = (0);
seq__28021_28364 = G__28387;
chunk__28022_28365 = G__28388;
count__28023_28366 = G__28389;
i__28024_28367 = G__28390;
continue;
} else {
var vec__28062_28391 = cljs.core.first(seq__28021_28385__$1);
var vec__28065_28392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28062_28391,(0),null);
var child_node_28393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28392,(0),null);
var old_component_28394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28392,(1),null);
var old_props_28395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28392,(2),null);
var vec__28068_28396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28062_28391,(1),null);
var new_component_28397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28396,(0),null);
var new_props_28398__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28396,(1),null);
if((child_node_28393 == null)){
this$__$1.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_28397,new_props_28398__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_28397,new_props_28398__$1)));
} else {
if((new_component_28397 == null)){
this$__$1.html_cljs$html$InternalLifecycle$remove_child$arity$2(null,child_node_28393);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.hash(old_component_28394),cljs.core.hash(new_component_28397))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_28395,new_props_28398__$1)))){
this$__$1.html_cljs$html$InternalLifecycle$replace_child$arity$3(null,child_node_28393,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$2(new_component_28397,new_props_28398__$1) : html_cljs.html.component__GT_VDomNode.call(null,new_component_28397,new_props_28398__$1)));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props_28395,new_props_28398__$1)){
html_cljs.lifecycle.rerender(child_node_28393,new_props_28398__$1);
} else {

}
}
}
}


var G__28402 = cljs.core.next(seq__28021_28385__$1);
var G__28403 = null;
var G__28404 = (0);
var G__28405 = (0);
seq__28021_28364 = G__28402;
chunk__28022_28365 = G__28403;
count__28023_28366 = G__28404;
i__28024_28367 = G__28405;
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.onmounts_atm,(function (p1__27989_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27989_SHARP_,f);
}));
}));

(html_cljs.html.VDomNode.prototype.html_cljs$lifecycle$LifecycleHooks$on_destroy$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ondestroys_atm,(function (p1__27990_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27990_SHARP_,f);
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
html_cljs.html.map__GT_VDomNode = (function html_cljs$html$map__GT_VDomNode(G__27995){
var extmap__4419__auto__ = (function (){var G__28071 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27995,new cljs.core.Keyword(null,"props-atm","props-atm",673512993),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762)], 0));
if(cljs.core.record_QMARK_(G__27995)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28071);
} else {
return G__28071;
}
})();
return (new html_cljs.html.VDomNode(new cljs.core.Keyword(null,"props-atm","props-atm",673512993).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"hooked-component-atm","hooked-component-atm",-232446946).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"child-nodes-atm","child-nodes-atm",1784586538).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"html-elem-atm","html-elem-atm",1539716889).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"cached-render-atm","cached-render-atm",1949985906).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"onmounts-atm","onmounts-atm",-325142802).cljs$core$IFn$_invoke$arity$1(G__27995),new cljs.core.Keyword(null,"ondestroys-atm","ondestroys-atm",1574489762).cljs$core$IFn$_invoke$arity$1(G__27995),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

var seq__28072_28412 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(elem_info));
var chunk__28073_28413 = null;
var count__28074_28414 = (0);
var i__28075_28415 = (0);
while(true){
if((i__28075_28415 < count__28074_28414)){
var vec__28082_28416 = chunk__28073_28413.cljs$core$IIndexed$_nth$arity$2(null,i__28075_28415);
var child_component_28417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082_28416,(0),null);
var props_28418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28082_28416,(1),null);
node.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3(child_component_28417,props_28418__$1,node) : html_cljs.html.component__GT_VDomNode.call(null,child_component_28417,props_28418__$1,node)));


var G__28419 = seq__28072_28412;
var G__28420 = chunk__28073_28413;
var G__28421 = count__28074_28414;
var G__28422 = (i__28075_28415 + (1));
seq__28072_28412 = G__28419;
chunk__28073_28413 = G__28420;
count__28074_28414 = G__28421;
i__28075_28415 = G__28422;
continue;
} else {
var temp__5735__auto___28424 = cljs.core.seq(seq__28072_28412);
if(temp__5735__auto___28424){
var seq__28072_28425__$1 = temp__5735__auto___28424;
if(cljs.core.chunked_seq_QMARK_(seq__28072_28425__$1)){
var c__4556__auto___28426 = cljs.core.chunk_first(seq__28072_28425__$1);
var G__28427 = cljs.core.chunk_rest(seq__28072_28425__$1);
var G__28428 = c__4556__auto___28426;
var G__28429 = cljs.core.count(c__4556__auto___28426);
var G__28430 = (0);
seq__28072_28412 = G__28427;
chunk__28073_28413 = G__28428;
count__28074_28414 = G__28429;
i__28075_28415 = G__28430;
continue;
} else {
var vec__28085_28431 = cljs.core.first(seq__28072_28425__$1);
var child_component_28432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085_28431,(0),null);
var props_28433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085_28431,(1),null);
node.html_cljs$html$InternalLifecycle$add_child$arity$2(null,(html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3 ? html_cljs.html.component__GT_VDomNode.cljs$core$IFn$_invoke$arity$3(child_component_28432,props_28433__$1,node) : html_cljs.html.component__GT_VDomNode.call(null,child_component_28432,props_28433__$1,node)));


var G__28434 = cljs.core.next(seq__28072_28425__$1);
var G__28435 = null;
var G__28436 = (0);
var G__28437 = (0);
seq__28072_28412 = G__28434;
chunk__28073_28413 = G__28435;
count__28074_28414 = G__28436;
i__28075_28415 = G__28437;
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
var len__4736__auto___28438 = arguments.length;
var i__4737__auto___28439 = (0);
while(true){
if((i__4737__auto___28439 < len__4736__auto___28438)){
args__4742__auto__.push((arguments[i__4737__auto___28439]));

var G__28440 = (i__4737__auto___28439 + (1));
i__4737__auto___28439 = G__28440;
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
(html_cljs.html.extendzip.cljs$lang$applyTo = (function (seq28088){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28088));
}));

html_cljs.html.update_children = (function html_cljs$html$update_children(children){
return null;
});
html_cljs.html.steralized = (function html_cljs$html$steralized(elem_info){

return clojure.walk.postwalk((function (p1__28089_SHARP_){
if(cljs.core.fn_QMARK_(p1__28089_SHARP_)){
return "fn";
} else {
return p1__28089_SHARP_;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(elem_info,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"children","children",-940561982)], 0)));
});
html_cljs.html.add_callbacks = (function html_cljs$html$add_callbacks(el,event_map){
var seq__28090 = cljs.core.seq(event_map);
var chunk__28091 = null;
var count__28092 = (0);
var i__28093 = (0);
while(true){
if((i__28093 < count__28092)){
var vec__28100 = chunk__28091.cljs$core$IIndexed$_nth$arity$2(null,i__28093);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28100,(1),null);
el.addEventListener(event_name,f);


var G__28442 = seq__28090;
var G__28443 = chunk__28091;
var G__28444 = count__28092;
var G__28445 = (i__28093 + (1));
seq__28090 = G__28442;
chunk__28091 = G__28443;
count__28092 = G__28444;
i__28093 = G__28445;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28090);
if(temp__5735__auto__){
var seq__28090__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28090__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28090__$1);
var G__28446 = cljs.core.chunk_rest(seq__28090__$1);
var G__28447 = c__4556__auto__;
var G__28448 = cljs.core.count(c__4556__auto__);
var G__28449 = (0);
seq__28090 = G__28446;
chunk__28091 = G__28447;
count__28092 = G__28448;
i__28093 = G__28449;
continue;
} else {
var vec__28103 = cljs.core.first(seq__28090__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(1),null);
el.addEventListener(event_name,f);


var G__28450 = cljs.core.next(seq__28090__$1);
var G__28451 = null;
var G__28452 = (0);
var G__28453 = (0);
seq__28090 = G__28450;
chunk__28091 = G__28451;
count__28092 = G__28452;
i__28093 = G__28453;
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
var seq__28106 = cljs.core.seq(event_map);
var chunk__28107 = null;
var count__28108 = (0);
var i__28109 = (0);
while(true){
if((i__28109 < count__28108)){
var vec__28116 = chunk__28107.cljs$core$IIndexed$_nth$arity$2(null,i__28109);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(1),null);
el.removeEventListener(event_name,f);


var G__28454 = seq__28106;
var G__28455 = chunk__28107;
var G__28456 = count__28108;
var G__28457 = (i__28109 + (1));
seq__28106 = G__28454;
chunk__28107 = G__28455;
count__28108 = G__28456;
i__28109 = G__28457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28106);
if(temp__5735__auto__){
var seq__28106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28106__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28106__$1);
var G__28458 = cljs.core.chunk_rest(seq__28106__$1);
var G__28459 = c__4556__auto__;
var G__28460 = cljs.core.count(c__4556__auto__);
var G__28461 = (0);
seq__28106 = G__28458;
chunk__28107 = G__28459;
count__28108 = G__28460;
i__28109 = G__28461;
continue;
} else {
var vec__28119 = cljs.core.first(seq__28106__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(1),null);
el.removeEventListener(event_name,f);


var G__28465 = cljs.core.next(seq__28106__$1);
var G__28466 = null;
var G__28467 = (0);
var G__28468 = (0);
seq__28106 = G__28465;
chunk__28107 = G__28466;
count__28108 = G__28467;
i__28109 = G__28468;
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
var seq__28122 = cljs.core.seq(styles);
var chunk__28123 = null;
var count__28124 = (0);
var i__28125 = (0);
while(true){
if((i__28125 < count__28124)){
var vec__28132 = chunk__28123.cljs$core$IIndexed$_nth$arity$2(null,i__28125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(1),null);
(el.style[k] = v);


var G__28473 = seq__28122;
var G__28474 = chunk__28123;
var G__28475 = count__28124;
var G__28476 = (i__28125 + (1));
seq__28122 = G__28473;
chunk__28123 = G__28474;
count__28124 = G__28475;
i__28125 = G__28476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28122);
if(temp__5735__auto__){
var seq__28122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28122__$1);
var G__28480 = cljs.core.chunk_rest(seq__28122__$1);
var G__28481 = c__4556__auto__;
var G__28482 = cljs.core.count(c__4556__auto__);
var G__28483 = (0);
seq__28122 = G__28480;
chunk__28123 = G__28481;
count__28124 = G__28482;
i__28125 = G__28483;
continue;
} else {
var vec__28135 = cljs.core.first(seq__28122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135,(1),null);
(el.style[k] = v);


var G__28487 = cljs.core.next(seq__28122__$1);
var G__28488 = null;
var G__28489 = (0);
var G__28490 = (0);
seq__28122 = G__28487;
chunk__28123 = G__28488;
count__28124 = G__28489;
i__28125 = G__28490;
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
var el_28491 = html_elem;
while(true){
if(cljs.core.truth_(el_28491.hasChildNodes())){
el_28491.removeChild(el_28491.firstChild);

var G__28492 = el_28491;
el_28491 = G__28492;
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
