goog.provide('chess.core');
chess.core.use_chan = (function chess$core$use_chan(clc__7133__auto__){
var hooked_use_state9805 = html_cljs.hooks.use_state(clc__7133__auto__);
var hooked_use_effect9806 = html_cljs.hooks.use_effect(clc__7133__auto__);
return (function (channel){
var vec__9808 = hooked_use_state9805("no status");
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808,(0),null);
var setcur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808,(1),null);
var seteffect = hooked_use_effect9806();
var G__9812_9915 = (function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mounting hook"], 0));

var c__8718__auto___9916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9834){
var state_val_9835 = (state_9834[(1)]);
if((state_val_9835 === (1))){
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9834__$1,(2),channel);
} else {
if((state_val_9835 === (2))){
var inst_9815 = (state_9834[(2)]);
var inst_9816 = inst_9815;
var state_9834__$1 = (function (){var statearr_9840 = state_9834;
(statearr_9840[(7)] = inst_9816);

return statearr_9840;
})();
var statearr_9841_9917 = state_9834__$1;
(statearr_9841_9917[(2)] = null);

(statearr_9841_9917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (3))){
var inst_9816 = (state_9834[(7)]);
var state_9834__$1 = state_9834;
if(cljs.core.truth_(inst_9816)){
var statearr_9844_9919 = state_9834__$1;
(statearr_9844_9919[(1)] = (5));

} else {
var statearr_9845_9921 = state_9834__$1;
(statearr_9845_9921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (4))){
var inst_9832 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9834__$1,inst_9832);
} else {
if((state_val_9835 === (5))){
var inst_9816 = (state_9834[(7)]);
var inst_9820 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["putting ",inst_9816], 0));
var inst_9821 = (function (){var item = inst_9816;
var temp__5733__auto__ = inst_9816;
return (function (){
return item;
});
})();
var inst_9822 = (setcur.cljs$core$IFn$_invoke$arity$1 ? setcur.cljs$core$IFn$_invoke$arity$1(inst_9821) : setcur.call(null,inst_9821));
var state_9834__$1 = (function (){var statearr_9847 = state_9834;
(statearr_9847[(8)] = inst_9820);

(statearr_9847[(9)] = inst_9822);

return statearr_9847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9834__$1,(8),channel);
} else {
if((state_val_9835 === (6))){
var inst_9816 = (state_9834[(7)]);
var inst_9827 = (function (){var item = inst_9816;
var temp__5733__auto__ = inst_9816;
return (function (){
return null;
});
})();
var inst_9828 = (setcur.cljs$core$IFn$_invoke$arity$1 ? setcur.cljs$core$IFn$_invoke$arity$1(inst_9827) : setcur.call(null,inst_9827));
var state_9834__$1 = state_9834;
var statearr_9850_9923 = state_9834__$1;
(statearr_9850_9923[(2)] = inst_9828);

(statearr_9850_9923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (7))){
var inst_9830 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9853_9924 = state_9834__$1;
(statearr_9853_9924[(2)] = inst_9830);

(statearr_9853_9924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (8))){
var inst_9824 = (state_9834[(2)]);
var inst_9816 = inst_9824;
var state_9834__$1 = (function (){var statearr_9856 = state_9834;
(statearr_9856[(7)] = inst_9816);

return statearr_9856;
})();
var statearr_9857_9925 = state_9834__$1;
(statearr_9857_9925[(2)] = null);

(statearr_9857_9925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var chess$core$use_chan_$_state_machine__8647__auto__ = null;
var chess$core$use_chan_$_state_machine__8647__auto____0 = (function (){
var statearr_9860 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9860[(0)] = chess$core$use_chan_$_state_machine__8647__auto__);

(statearr_9860[(1)] = (1));

return statearr_9860;
});
var chess$core$use_chan_$_state_machine__8647__auto____1 = (function (state_9834){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9834);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9862){var ex__8650__auto__ = e9862;
var statearr_9864_9926 = state_9834;
(statearr_9864_9926[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9834[(4)]))){
var statearr_9865_9927 = state_9834;
(statearr_9865_9927[(1)] = cljs.core.first((state_9834[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9928 = state_9834;
state_9834 = G__9928;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$core$use_chan_$_state_machine__8647__auto__ = function(state_9834){
switch(arguments.length){
case 0:
return chess$core$use_chan_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$core$use_chan_$_state_machine__8647__auto____1.call(this,state_9834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$core$use_chan_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$core$use_chan_$_state_machine__8647__auto____0;
chess$core$use_chan_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$core$use_chan_$_state_machine__8647__auto____1;
return chess$core$use_chan_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9868 = f__8719__auto__();
(statearr_9868[(6)] = c__8718__auto___9916);

return statearr_9868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));


return cljs.core.identity;
});
(seteffect.cljs$core$IFn$_invoke$arity$1 ? seteffect.cljs$core$IFn$_invoke$arity$1(G__9812_9915) : seteffect.call(null,G__9812_9915));

return (cur.cljs$core$IFn$_invoke$arity$0 ? cur.cljs$core$IFn$_invoke$arity$0() : cur.call(null));
});
});
chess.core.abs = (function chess$core$abs(n){
var x__4214__auto__ = n;
var y__4215__auto__ = (- n);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
chess.core.dots = (function chess$core$dots(clc__7133__auto__){
var hooked_use_interval9873 = html_cljs.hooks.use_interval(clc__7133__auto__);
return (function (){
var vec__9874 = hooked_use_interval9873((300));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(0),null);
var togglet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(1),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),(function (){var numdots = chess.core.abs((cljs.core.mod(t,(6)) - (3)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return ".";
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(numdots)));
})()], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9877){
var vec__9878 = p__9877;
var seq__9879 = cljs.core.seq(vec__9878);
var first__9880 = cljs.core.first(seq__9879);
var seq__9879__$1 = cljs.core.next(seq__9879);
var c__7153__auto__ = first__9880;
var _ = seq__9879__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
});
chess.core.status_bar = (function chess$core$status_bar(clc__7133__auto__){
var hooked_use_chan9881 = chess.core.use_chan(clc__7133__auto__);
var hooked_use_effect9882 = html_cljs.hooks.use_effect(clc__7133__auto__);
return (function (status_chan){
var status = hooked_use_chan9881(status_chan);
var seteffect = hooked_use_effect9882();
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["text-align","left","margin-left","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9886){
var vec__9887 = p__9886;
var seq__9888 = cljs.core.seq(vec__9887);
var first__9889 = cljs.core.first(seq__9888);
var seq__9888__$1 = cljs.core.next(seq__9888);
var c__7153__auto__ = first__9889;
var _ = seq__9888__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7133__auto____$1){
return (function (status__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),status__$1], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9893){
var vec__9894 = p__9893;
var seq__9895 = cljs.core.seq(vec__9894);
var first__9896 = cljs.core.first(seq__9895);
var seq__9895__$1 = cljs.core.next(seq__9895);
var c__7153__auto__ = first__9896;
var _ = seq__9895__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,status,null,(1),null)),(2),null)),(new cljs.core.List(null,((clojure.string.includes_QMARK_(status,"loading"))?(new cljs.core.List(null,chess.core.dots,null,(1),null)):null),null,(1),null)),(2),null)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7133__auto____$1){
return (function (status__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),status__$1], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9897){
var vec__9898 = p__9897;
var seq__9899 = cljs.core.seq(vec__9898);
var first__9900 = cljs.core.first(seq__9899);
var seq__9899__$1 = cljs.core.next(seq__9899);
var c__7153__auto__ = first__9900;
var _ = seq__9899__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,status,null,(1),null)),(2),null)),(new cljs.core.List(null,((clojure.string.includes_QMARK_(status,"loading"))?(new cljs.core.List(null,chess.core.dots,null,(1),null)):null),null,(1),null)),(2),null)))))));
});
});
chess.core.game = (function chess$core$game(){
var status_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((2));
return (function (clc__7133__auto__){
var hooked_use_async_engine9904 = chess.engine.hook.use_async_engine(clc__7133__auto__);
return (function (){
var vec__9905 = hooked_use_async_engine9904(new cljs.core.Keyword(null,"white","white",-483998618),status_chan);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9905,(0),null);
var moves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9905,(1),null);
var on_move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9905,(2),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["width","100%","height","100%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9908){
var vec__9909 = p__9908;
var seq__9910 = cljs.core.seq(vec__9909);
var first__9911 = cljs.core.first(seq__9910);
var seq__9910__$1 = cljs.core.next(seq__9910);
var c__7153__auto__ = first__9911;
var _ = seq__9910__$1;
if((c__7153__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7153__auto__], 0));

} else {
}

return c__7153__auto__;
}),(new cljs.core.List(null,(new cljs.core.List(null,chess.core.status_bar,(new cljs.core.List(null,status_chan,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,chess.components.board.board,(new cljs.core.List(null,new cljs.core.Keyword(null,"board","board",-1907017633),(new cljs.core.List(null,board_data,(new cljs.core.List(null,new cljs.core.Keyword(null,"player","player",-97687400),(new cljs.core.List(null,new cljs.core.Keyword(null,"white","white",-483998618),(new cljs.core.List(null,new cljs.core.Keyword(null,"moves","moves",927465255),(new cljs.core.List(null,moves,(new cljs.core.List(null,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),null,(1),null)),(2),null))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,(new cljs.core.List(null,(new cljs.core.List(null,chess.core.status_bar,(new cljs.core.List(null,status_chan,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,chess.components.board.board,(new cljs.core.List(null,new cljs.core.Keyword(null,"board","board",-1907017633),(new cljs.core.List(null,board_data,(new cljs.core.List(null,new cljs.core.Keyword(null,"player","player",-97687400),(new cljs.core.List(null,new cljs.core.Keyword(null,"white","white",-483998618),(new cljs.core.List(null,new cljs.core.Keyword(null,"moves","moves",927465255),(new cljs.core.List(null,moves,(new cljs.core.List(null,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),(new cljs.core.List(null,on_move,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),null,(1),null)),(2),null))))));
});
});
});
if((typeof chess !== 'undefined') && (typeof chess.core !== 'undefined') && (typeof chess.core.mounted !== 'undefined')){
} else {
chess.core.mounted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
chess.core.mount_root = (function chess$core$mount_root(component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(chess.core.mounted,(function (old_vdom_node){
if((!((old_vdom_node == null)))){
html_cljs.html.destroy_node(old_vdom_node);
} else {
}

return html_cljs.html.mount(document.getElementById("app"),component);
}));
});
chess.core.init = (function chess$core$init(){
return chess.core.mount_root(chess.core.game());
});
goog.exportSymbol('chess.core.init', chess.core.init);

//# sourceMappingURL=chess.core.js.map
