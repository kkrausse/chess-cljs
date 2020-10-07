goog.provide('chess.engine.hook');
chess.engine.hook.use_async_engine = (function chess$engine$hook$use_async_engine(clc__7188__auto__){
var hooked_use_state9759 = html_cljs.hooks.use_state(clc__7188__auto__);
var hooked_use_state9760 = html_cljs.hooks.use_state(clc__7188__auto__);
var hooked_use_state9761 = html_cljs.hooks.use_state(clc__7188__auto__);
var hooked_use_effect9762 = html_cljs.hooks.use_effect(clc__7188__auto__);
return (function (my_color,status_chan){
var vec__9763 = hooked_use_state9759(my_color);
var getcolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,(0),null);
var setcolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,(1),null);
var vec__9766 = hooked_use_state9760(chess.engine.core.init_board);
var getboard = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9766,(0),null);
var setboard = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9766,(1),null);
var vec__9769 = hooked_use_state9761(cljs.core.PersistentVector.EMPTY);
var getmoves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9769,(0),null);
var setmoves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9769,(1),null);
var set_effect = hooked_use_effect9762();
var G__9772_9849 = (function (){
var c__8853__auto___9850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9784){
var state_val_9785 = (state_9784[(1)]);
if((state_val_9785 === (1))){
var state_9784__$1 = state_9784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9784__$1,(2),status_chan,"loading bootstraped workers");
} else {
if((state_val_9785 === (2))){
var inst_9774 = (state_9784[(2)]);
var inst_9775 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9776 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_9775,my_color);
var state_9784__$1 = (function (){var statearr_9789 = state_9784;
(statearr_9789[(7)] = inst_9774);

return statearr_9789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9784__$1,(3),inst_9776);
} else {
if((state_val_9785 === (3))){
var inst_9778 = (state_9784[(2)]);
var state_9784__$1 = (function (){var statearr_9790 = state_9784;
(statearr_9790[(8)] = inst_9778);

return statearr_9790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9784__$1,(4),status_chan,"white's turn!");
} else {
if((state_val_9785 === (4))){
var inst_9778 = (state_9784[(8)]);
var inst_9780 = (state_9784[(2)]);
var inst_9781 = (function (){var init_moves = inst_9778;
return (function (){
return init_moves;
});
})();
var inst_9782 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9781) : setmoves.call(null,inst_9781));
var state_9784__$1 = (function (){var statearr_9791 = state_9784;
(statearr_9791[(9)] = inst_9780);

return statearr_9791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9784__$1,inst_9782);
} else {
return null;
}
}
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0 = (function (){
var statearr_9792 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9792[(0)] = chess$engine$hook$use_async_engine_$_state_machine__8647__auto__);

(statearr_9792[(1)] = (1));

return statearr_9792;
});
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1 = (function (state_9784){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9784);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9793){var ex__8650__auto__ = e9793;
var statearr_9794_9851 = state_9784;
(statearr_9794_9851[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9784[(4)]))){
var statearr_9795_9852 = state_9784;
(statearr_9795_9852[(1)] = cljs.core.first((state_9784[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9853 = state_9784;
state_9784 = G__9853;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = function(state_9784){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1.call(this,state_9784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9796 = f__8854__auto__();
(statearr_9796[(6)] = c__8853__auto___9850);

return statearr_9796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));


return cljs.core.identity;
});
(set_effect.cljs$core$IFn$_invoke$arity$1 ? set_effect.cljs$core$IFn$_invoke$arity$1(G__9772_9849) : set_effect.call(null,G__9772_9849));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null)),(getmoves.cljs$core$IFn$_invoke$arity$0 ? getmoves.cljs$core$IFn$_invoke$arity$0() : getmoves.call(null)),(function (move){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9832){
var state_val_9833 = (state_9832[(1)]);
if((state_val_9833 === (1))){
var inst_9797 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9798 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_9797,move);
var state_9832__$1 = state_9832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9832__$1,(2),inst_9798);
} else {
if((state_val_9833 === (2))){
var inst_9800 = (state_9832[(2)]);
var inst_9801 = (setcolor.cljs$core$IFn$_invoke$arity$1 ? setcolor.cljs$core$IFn$_invoke$arity$1(chess.engine.core.other_color) : setcolor.call(null,chess.engine.core.other_color));
var inst_9802 = (function (){var my_board = inst_9800;
return (function (){
return my_board;
});
})();
var inst_9803 = (setboard.cljs$core$IFn$_invoke$arity$1 ? setboard.cljs$core$IFn$_invoke$arity$1(inst_9802) : setboard.call(null,inst_9802));
var inst_9804 = (function (){return (function (){
return cljs.core.PersistentVector.EMPTY;
});
})();
var inst_9805 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9804) : setmoves.call(null,inst_9804));
var state_9832__$1 = (function (){var statearr_9835 = state_9832;
(statearr_9835[(7)] = inst_9805);

(statearr_9835[(8)] = inst_9803);

(statearr_9835[(9)] = inst_9801);

return statearr_9835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9832__$1,(3),status_chan,"loading move");
} else {
if((state_val_9833 === (3))){
var inst_9808 = (state_9832[(2)]);
var inst_9809 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9810 = chess.engine.core.other_color(my_color);
var inst_9811 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$best_move$arity$3(null,inst_9809,inst_9810);
var state_9832__$1 = (function (){var statearr_9836 = state_9832;
(statearr_9836[(10)] = inst_9808);

return statearr_9836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9832__$1,(4),inst_9811);
} else {
if((state_val_9833 === (4))){
var inst_9813 = (state_9832[(11)]);
var inst_9813__$1 = (state_9832[(2)]);
var inst_9815 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9816 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_9815,inst_9813__$1);
var state_9832__$1 = (function (){var statearr_9837 = state_9832;
(statearr_9837[(11)] = inst_9813__$1);

return statearr_9837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9832__$1,(5),inst_9816);
} else {
if((state_val_9833 === (5))){
var inst_9813 = (state_9832[(11)]);
var inst_9818 = (state_9832[(2)]);
var inst_9819 = (function (){var opp_move = inst_9813;
var new_board = inst_9818;
return (function (){
return new_board;
});
})();
var inst_9820 = (setboard.cljs$core$IFn$_invoke$arity$1 ? setboard.cljs$core$IFn$_invoke$arity$1(inst_9819) : setboard.call(null,inst_9819));
var inst_9821 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9822 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_9821,my_color);
var state_9832__$1 = (function (){var statearr_9840 = state_9832;
(statearr_9840[(12)] = inst_9820);

return statearr_9840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9832__$1,(6),inst_9822);
} else {
if((state_val_9833 === (6))){
var inst_9824 = (state_9832[(2)]);
var inst_9825 = (function (){var new_moves = inst_9824;
return (function (){
return new_moves;
});
})();
var inst_9826 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9825) : setmoves.call(null,inst_9825));
var state_9832__$1 = (function (){var statearr_9842 = state_9832;
(statearr_9842[(13)] = inst_9826);

return statearr_9842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9832__$1,(7),status_chan,"white's turn");
} else {
if((state_val_9833 === (7))){
var inst_9828 = (state_9832[(2)]);
var inst_9829 = (function (){return (function (){
return my_color;
});
})();
var inst_9830 = (setcolor.cljs$core$IFn$_invoke$arity$1 ? setcolor.cljs$core$IFn$_invoke$arity$1(inst_9829) : setcolor.call(null,inst_9829));
var state_9832__$1 = (function (){var statearr_9843 = state_9832;
(statearr_9843[(14)] = inst_9828);

return statearr_9843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9832__$1,inst_9830);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0 = (function (){
var statearr_9844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9844[(0)] = chess$engine$hook$use_async_engine_$_state_machine__8647__auto__);

(statearr_9844[(1)] = (1));

return statearr_9844;
});
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1 = (function (state_9832){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9832);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9845){var ex__8650__auto__ = e9845;
var statearr_9846_9854 = state_9832;
(statearr_9846_9854[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9832[(4)]))){
var statearr_9847_9855 = state_9832;
(statearr_9847_9855[(1)] = cljs.core.first((state_9832[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9856 = state_9832;
state_9832 = G__9856;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = function(state_9832){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1.call(this,state_9832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9848 = f__8854__auto__();
(statearr_9848[(6)] = c__8853__auto__);

return statearr_9848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
})], null);
});
});

//# sourceMappingURL=chess.engine.hook.js.map
