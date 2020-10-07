goog.provide('chess.core');
chess.core.use_chan = (function chess$core$use_chan(clc__7188__auto__){
var hooked_use_state9857 = html_cljs.hooks.use_state(clc__7188__auto__);
var hooked_use_effect9858 = html_cljs.hooks.use_effect(clc__7188__auto__);
return (function (channel){
var vec__9859 = hooked_use_state9857("no status");
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9859,(0),null);
var setcur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9859,(1),null);
var seteffect = hooked_use_effect9858();
var G__9862_9928 = (function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mounting hook"], 0));

var c__8853__auto___9929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9882){
var state_val_9883 = (state_9882[(1)]);
if((state_val_9883 === (1))){
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9882__$1,(2),channel);
} else {
if((state_val_9883 === (2))){
var inst_9864 = (state_9882[(2)]);
var inst_9865 = inst_9864;
var state_9882__$1 = (function (){var statearr_9884 = state_9882;
(statearr_9884[(7)] = inst_9865);

return statearr_9884;
})();
var statearr_9885_9930 = state_9882__$1;
(statearr_9885_9930[(2)] = null);

(statearr_9885_9930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (3))){
var inst_9865 = (state_9882[(7)]);
var state_9882__$1 = state_9882;
if(cljs.core.truth_(inst_9865)){
var statearr_9886_9931 = state_9882__$1;
(statearr_9886_9931[(1)] = (5));

} else {
var statearr_9887_9932 = state_9882__$1;
(statearr_9887_9932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (4))){
var inst_9880 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9882__$1,inst_9880);
} else {
if((state_val_9883 === (5))){
var inst_9865 = (state_9882[(7)]);
var inst_9868 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["putting ",inst_9865], 0));
var inst_9869 = (function (){var item = inst_9865;
var temp__5733__auto__ = inst_9865;
return (function (){
return item;
});
})();
var inst_9870 = (setcur.cljs$core$IFn$_invoke$arity$1 ? setcur.cljs$core$IFn$_invoke$arity$1(inst_9869) : setcur.call(null,inst_9869));
var state_9882__$1 = (function (){var statearr_9888 = state_9882;
(statearr_9888[(8)] = inst_9870);

(statearr_9888[(9)] = inst_9868);

return statearr_9888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9882__$1,(8),channel);
} else {
if((state_val_9883 === (6))){
var inst_9865 = (state_9882[(7)]);
var inst_9875 = (function (){var item = inst_9865;
var temp__5733__auto__ = inst_9865;
return (function (){
return null;
});
})();
var inst_9876 = (setcur.cljs$core$IFn$_invoke$arity$1 ? setcur.cljs$core$IFn$_invoke$arity$1(inst_9875) : setcur.call(null,inst_9875));
var state_9882__$1 = state_9882;
var statearr_9889_9933 = state_9882__$1;
(statearr_9889_9933[(2)] = inst_9876);

(statearr_9889_9933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (7))){
var inst_9878 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9890_9934 = state_9882__$1;
(statearr_9890_9934[(2)] = inst_9878);

(statearr_9890_9934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (8))){
var inst_9872 = (state_9882[(2)]);
var inst_9865 = inst_9872;
var state_9882__$1 = (function (){var statearr_9891 = state_9882;
(statearr_9891[(7)] = inst_9865);

return statearr_9891;
})();
var statearr_9892_9935 = state_9882__$1;
(statearr_9892_9935[(2)] = null);

(statearr_9892_9935[(1)] = (3));


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
var statearr_9893 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9893[(0)] = chess$core$use_chan_$_state_machine__8647__auto__);

(statearr_9893[(1)] = (1));

return statearr_9893;
});
var chess$core$use_chan_$_state_machine__8647__auto____1 = (function (state_9882){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9882);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9894){var ex__8650__auto__ = e9894;
var statearr_9895_9936 = state_9882;
(statearr_9895_9936[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9882[(4)]))){
var statearr_9896_9937 = state_9882;
(statearr_9896_9937[(1)] = cljs.core.first((state_9882[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9938 = state_9882;
state_9882 = G__9938;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$core$use_chan_$_state_machine__8647__auto__ = function(state_9882){
switch(arguments.length){
case 0:
return chess$core$use_chan_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$core$use_chan_$_state_machine__8647__auto____1.call(this,state_9882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$core$use_chan_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$core$use_chan_$_state_machine__8647__auto____0;
chess$core$use_chan_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$core$use_chan_$_state_machine__8647__auto____1;
return chess$core$use_chan_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9897 = f__8854__auto__();
(statearr_9897[(6)] = c__8853__auto___9929);

return statearr_9897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));


return cljs.core.identity;
});
(seteffect.cljs$core$IFn$_invoke$arity$1 ? seteffect.cljs$core$IFn$_invoke$arity$1(G__9862_9928) : seteffect.call(null,G__9862_9928));

return (cur.cljs$core$IFn$_invoke$arity$0 ? cur.cljs$core$IFn$_invoke$arity$0() : cur.call(null));
});
});
chess.core.abs = (function chess$core$abs(n){
var x__4214__auto__ = n;
var y__4215__auto__ = (- n);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
chess.core.dots = (function chess$core$dots(clc__7188__auto__){
var hooked_use_interval9898 = html_cljs.hooks.use_interval(clc__7188__auto__);
return (function (){
var vec__9899 = hooked_use_interval9898((300));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(0),null);
var togglet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(1),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),(function (){var numdots = chess.core.abs((cljs.core.mod(t,(6)) - (3)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return ".";
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(numdots)));
})()], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9902){
var vec__9903 = p__9902;
var seq__9904 = cljs.core.seq(vec__9903);
var first__9905 = cljs.core.first(seq__9904);
var seq__9904__$1 = cljs.core.next(seq__9904);
var c__7208__auto__ = first__9905;
var _ = seq__9904__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
});
chess.core.status_bar = (function chess$core$status_bar(clc__7188__auto__){
var hooked_use_chan9906 = chess.core.use_chan(clc__7188__auto__);
var hooked_use_effect9907 = html_cljs.hooks.use_effect(clc__7188__auto__);
return (function (status_chan){
var status = hooked_use_chan9906(status_chan);
var seteffect = hooked_use_effect9907();
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["text-align","left","margin-left","13%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9908){
var vec__9909 = p__9908;
var seq__9910 = cljs.core.seq(vec__9909);
var first__9911 = cljs.core.first(seq__9910);
var seq__9910__$1 = cljs.core.next(seq__9910);
var c__7208__auto__ = first__9911;
var _ = seq__9910__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7188__auto____$1){
return (function (status__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),status__$1], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9912){
var vec__9913 = p__9912;
var seq__9914 = cljs.core.seq(vec__9913);
var first__9915 = cljs.core.first(seq__9914);
var seq__9914__$1 = cljs.core.next(seq__9914);
var c__7208__auto__ = first__9915;
var _ = seq__9914__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,status,null,(1),null)),(2),null)),(new cljs.core.List(null,((clojure.string.includes_QMARK_(status,"loading"))?(new cljs.core.List(null,chess.core.dots,null,(1),null)):null),null,(1),null)),(2),null)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(new cljs.core.List(null,(new cljs.core.List(null,(function (clc__7188__auto____$1){
return (function (status__$1){
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"span",new cljs.core.Keyword(null,"content","content",15833224),status__$1], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9916){
var vec__9917 = p__9916;
var seq__9918 = cljs.core.seq(vec__9917);
var first__9919 = cljs.core.first(seq__9918);
var seq__9918__$1 = cljs.core.next(seq__9918);
var c__7208__auto__ = first__9919;
var _ = seq__9918__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
}),cljs.core.List.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.List.EMPTY))));
});
}),(new cljs.core.List(null,status,null,(1),null)),(2),null)),(new cljs.core.List(null,((clojure.string.includes_QMARK_(status,"loading"))?(new cljs.core.List(null,chess.core.dots,null,(1),null)):null),null,(1),null)),(2),null)))))));
});
});
chess.core.game = (function chess$core$game(){
var status_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((2));
return (function (clc__7188__auto__){
var hooked_use_async_engine9920 = chess.engine.hook.use_async_engine(clc__7188__auto__);
return (function (){
var vec__9921 = hooked_use_async_engine9920(new cljs.core.Keyword(null,"white","white",-483998618),status_chan);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9921,(0),null);
var moves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9921,(1),null);
var on_move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9921,(2),null);
return html_cljs.html.map__GT_ElementInfo(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"div",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["width","100%","height","100%"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9924){
var vec__9925 = p__9924;
var seq__9926 = cljs.core.seq(vec__9925);
var first__9927 = cljs.core.first(seq__9926);
var seq__9926__$1 = cljs.core.next(seq__9926);
var c__7208__auto__ = first__9927;
var _ = seq__9926__$1;
if((c__7208__auto__ instanceof cljs.core.Symbol)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wow. got symbol",c__7208__auto__], 0));

} else {
}

return c__7208__auto__;
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
