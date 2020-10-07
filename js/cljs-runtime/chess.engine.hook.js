goog.provide('chess.engine.hook');
chess.engine.hook.use_async_engine = (function chess$engine$hook$use_async_engine(clc__7133__auto__){
var hooked_use_state9658 = html_cljs.hooks.use_state(clc__7133__auto__);
var hooked_use_state9659 = html_cljs.hooks.use_state(clc__7133__auto__);
var hooked_use_state9660 = html_cljs.hooks.use_state(clc__7133__auto__);
var hooked_use_effect9661 = html_cljs.hooks.use_effect(clc__7133__auto__);
return (function (my_color,status_chan){
var vec__9665 = hooked_use_state9658(my_color);
var getcolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9665,(0),null);
var setcolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9665,(1),null);
var vec__9668 = hooked_use_state9659(chess.engine.core.init_board);
var getboard = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9668,(0),null);
var setboard = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9668,(1),null);
var vec__9671 = hooked_use_state9660(cljs.core.PersistentVector.EMPTY);
var getmoves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9671,(0),null);
var setmoves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9671,(1),null);
var set_effect = hooked_use_effect9661();
var G__9677_9788 = (function (){
var c__8718__auto___9789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9693){
var state_val_9694 = (state_9693[(1)]);
if((state_val_9694 === (1))){
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9693__$1,(2),status_chan,"loading bootstraped workers");
} else {
if((state_val_9694 === (2))){
var inst_9681 = (state_9693[(2)]);
var inst_9682 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9683 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_9682,my_color);
var state_9693__$1 = (function (){var statearr_9697 = state_9693;
(statearr_9697[(7)] = inst_9681);

return statearr_9697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9693__$1,(3),inst_9683);
} else {
if((state_val_9694 === (3))){
var inst_9685 = (state_9693[(2)]);
var state_9693__$1 = (function (){var statearr_9699 = state_9693;
(statearr_9699[(8)] = inst_9685);

return statearr_9699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9693__$1,(4),status_chan,"white's turn!");
} else {
if((state_val_9694 === (4))){
var inst_9685 = (state_9693[(8)]);
var inst_9687 = (state_9693[(2)]);
var inst_9689 = (function (){var init_moves = inst_9685;
return (function (){
return init_moves;
});
})();
var inst_9690 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9689) : setmoves.call(null,inst_9689));
var state_9693__$1 = (function (){var statearr_9701 = state_9693;
(statearr_9701[(9)] = inst_9687);

return statearr_9701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9693__$1,inst_9690);
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
var statearr_9703 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9703[(0)] = chess$engine$hook$use_async_engine_$_state_machine__8647__auto__);

(statearr_9703[(1)] = (1));

return statearr_9703;
});
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1 = (function (state_9693){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9693);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9705){var ex__8650__auto__ = e9705;
var statearr_9707_9799 = state_9693;
(statearr_9707_9799[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9693[(4)]))){
var statearr_9708_9800 = state_9693;
(statearr_9708_9800[(1)] = cljs.core.first((state_9693[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9802 = state_9693;
state_9693 = G__9802;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = function(state_9693){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1.call(this,state_9693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9711 = f__8719__auto__();
(statearr_9711[(6)] = c__8718__auto___9789);

return statearr_9711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));


return cljs.core.identity;
});
(set_effect.cljs$core$IFn$_invoke$arity$1 ? set_effect.cljs$core$IFn$_invoke$arity$1(G__9677_9788) : set_effect.call(null,G__9677_9788));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null)),(getmoves.cljs$core$IFn$_invoke$arity$0 ? getmoves.cljs$core$IFn$_invoke$arity$0() : getmoves.call(null)),(function (move){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9747){
var state_val_9748 = (state_9747[(1)]);
if((state_val_9748 === (1))){
var inst_9712 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9713 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_9712,move);
var state_9747__$1 = state_9747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9747__$1,(2),inst_9713);
} else {
if((state_val_9748 === (2))){
var inst_9715 = (state_9747[(2)]);
var inst_9716 = (setcolor.cljs$core$IFn$_invoke$arity$1 ? setcolor.cljs$core$IFn$_invoke$arity$1(chess.engine.core.other_color) : setcolor.call(null,chess.engine.core.other_color));
var inst_9717 = (function (){var my_board = inst_9715;
return (function (){
return my_board;
});
})();
var inst_9718 = (setboard.cljs$core$IFn$_invoke$arity$1 ? setboard.cljs$core$IFn$_invoke$arity$1(inst_9717) : setboard.call(null,inst_9717));
var inst_9719 = (function (){return (function (){
return cljs.core.PersistentVector.EMPTY;
});
})();
var inst_9720 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9719) : setmoves.call(null,inst_9719));
var state_9747__$1 = (function (){var statearr_9752 = state_9747;
(statearr_9752[(7)] = inst_9716);

(statearr_9752[(8)] = inst_9720);

(statearr_9752[(9)] = inst_9718);

return statearr_9752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9747__$1,(3),status_chan,"loading move");
} else {
if((state_val_9748 === (3))){
var inst_9722 = (state_9747[(2)]);
var inst_9723 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9724 = chess.engine.core.other_color(my_color);
var inst_9725 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$best_move$arity$3(null,inst_9723,inst_9724);
var state_9747__$1 = (function (){var statearr_9756 = state_9747;
(statearr_9756[(10)] = inst_9722);

return statearr_9756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9747__$1,(4),inst_9725);
} else {
if((state_val_9748 === (4))){
var inst_9727 = (state_9747[(11)]);
var inst_9727__$1 = (state_9747[(2)]);
var inst_9728 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9729 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_9728,inst_9727__$1);
var state_9747__$1 = (function (){var statearr_9757 = state_9747;
(statearr_9757[(11)] = inst_9727__$1);

return statearr_9757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9747__$1,(5),inst_9729);
} else {
if((state_val_9748 === (5))){
var inst_9727 = (state_9747[(11)]);
var inst_9731 = (state_9747[(2)]);
var inst_9732 = (function (){var opp_move = inst_9727;
var new_board = inst_9731;
return (function (){
return new_board;
});
})();
var inst_9733 = (setboard.cljs$core$IFn$_invoke$arity$1 ? setboard.cljs$core$IFn$_invoke$arity$1(inst_9732) : setboard.call(null,inst_9732));
var inst_9734 = (getboard.cljs$core$IFn$_invoke$arity$0 ? getboard.cljs$core$IFn$_invoke$arity$0() : getboard.call(null));
var inst_9735 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_9734,my_color);
var state_9747__$1 = (function (){var statearr_9764 = state_9747;
(statearr_9764[(12)] = inst_9733);

return statearr_9764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9747__$1,(6),inst_9735);
} else {
if((state_val_9748 === (6))){
var inst_9737 = (state_9747[(2)]);
var inst_9738 = (function (){var new_moves = inst_9737;
return (function (){
return new_moves;
});
})();
var inst_9739 = (setmoves.cljs$core$IFn$_invoke$arity$1 ? setmoves.cljs$core$IFn$_invoke$arity$1(inst_9738) : setmoves.call(null,inst_9738));
var state_9747__$1 = (function (){var statearr_9765 = state_9747;
(statearr_9765[(13)] = inst_9739);

return statearr_9765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9747__$1,(7),status_chan,"white's turn");
} else {
if((state_val_9748 === (7))){
var inst_9741 = (state_9747[(2)]);
var inst_9742 = (function (){return (function (){
return my_color;
});
})();
var inst_9743 = (setcolor.cljs$core$IFn$_invoke$arity$1 ? setcolor.cljs$core$IFn$_invoke$arity$1(inst_9742) : setcolor.call(null,inst_9742));
var state_9747__$1 = (function (){var statearr_9766 = state_9747;
(statearr_9766[(14)] = inst_9741);

return statearr_9766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9747__$1,inst_9743);
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
var statearr_9768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9768[(0)] = chess$engine$hook$use_async_engine_$_state_machine__8647__auto__);

(statearr_9768[(1)] = (1));

return statearr_9768;
});
var chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1 = (function (state_9747){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9747);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9770){var ex__8650__auto__ = e9770;
var statearr_9771_9851 = state_9747;
(statearr_9771_9851[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9747[(4)]))){
var statearr_9773_9852 = state_9747;
(statearr_9773_9852[(1)] = cljs.core.first((state_9747[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9855 = state_9747;
state_9747 = G__9855;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__ = function(state_9747){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1.call(this,state_9747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__8647__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9785 = f__8719__auto__();
(statearr_9785[(6)] = c__8718__auto__);

return statearr_9785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
})], null);
});
});

//# sourceMappingURL=chess.engine.hook.js.map
