goog.provide('chess.components.square');
goog.require('cljs.core');
goog.require('html_cljs.html');
goog.require('chess.utils');
chess.components.square.square = (function chess$components$square$square(props){

var has_piece = (!(((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : props.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784))) == null)));
var style = new cljs.core.PersistentArrayMap(null, 4, ["float","left","width","15%","background",(cljs.core.truth_((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764)) : props.call(null,new cljs.core.Keyword(null,"selected","selected",574897764))))?"#40aad4":(cljs.core.truth_((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653)) : props.call(null,new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653))))?"#4ae896":(cljs.core.truth_((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tint","tint",-1286736913)) : props.call(null,new cljs.core.Keyword(null,"tint","tint",-1286736913))))?"#ada284":"#fff"
))),"border",(cljs.core.truth_((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653)) : props.call(null,new cljs.core.Keyword(null,"can-move-to","can-move-to",260990653))))?"1px dotted #40aad4":"1px solid #999"
)], null);
return (function (vdom_state__25572__auto__){
var hook_instances__25573__auto__ = cljs.core.PersistentVector.EMPTY;
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, ["click",(function (){
var fexpr__27350 = (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-click","on-click",1632826543)) : props.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)));
return (fexpr__27350.cljs$core$IFn$_invoke$arity$0 ? fexpr__27350.cljs$core$IFn$_invoke$arity$0() : fexpr__27350.call(null));
})], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((has_piece)?(function (vdom_state__25572__auto____$1){
var hook_instances__25573__auto____$1 = cljs.core.PersistentVector.EMPTY;
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["width","90%"], null),new cljs.core.Keyword(null,"elem-props","elem-props",917346836),new cljs.core.PersistentArrayMap(null, 1, ["src",chess.utils.asset_path(["/pieces/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : props.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece","piece",1396691784)) : props.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784)))),".svg"].join(''))], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.flatten(cljs.core.PersistentVector.EMPTY));
});
}):cljs.core.List.EMPTY)], null)));
});
});
});

//# sourceMappingURL=chess.components.square.js.map
