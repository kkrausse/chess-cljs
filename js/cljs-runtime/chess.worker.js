goog.provide('chess.worker');
if((typeof chess !== 'undefined') && (typeof chess.worker !== 'undefined') && (typeof chess.worker.c_state !== 'undefined')){
} else {
chess.worker.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
if((typeof chess !== 'undefined') && (typeof chess.worker !== 'undefined') && (typeof chess.worker.inited !== 'undefined')){
} else {
chess.worker.inited = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
}
if((typeof chess !== 'undefined') && (typeof chess.worker !== 'undefined') && (typeof chess.worker._ !== 'undefined')){
} else {
chess.worker._ = shadow.cljs.bootstrap.browser.init(chess.worker.c_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),chess.utils.asset_path("/js/bootstrap")], null),(function (){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9590){
var state_val_9591 = (state_9590[(1)]);
if((state_val_9591 === (1))){
var state_9590__$1 = state_9590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9590__$1,(2),chess.worker.inited,true);
} else {
if((state_val_9591 === (2))){
var inst_9587 = (state_9590[(2)]);
var inst_9588 = cljs.core.async.close_BANG_(chess.worker.inited);
var state_9590__$1 = (function (){var statearr_9592 = state_9590;
(statearr_9592[(7)] = inst_9587);

return statearr_9592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9590__$1,inst_9588);
} else {
return null;
}
}
});
return (function() {
var chess$worker$state_machine__8647__auto__ = null;
var chess$worker$state_machine__8647__auto____0 = (function (){
var statearr_9593 = [null,null,null,null,null,null,null,null];
(statearr_9593[(0)] = chess$worker$state_machine__8647__auto__);

(statearr_9593[(1)] = (1));

return statearr_9593;
});
var chess$worker$state_machine__8647__auto____1 = (function (state_9590){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9590);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9594){var ex__8650__auto__ = e9594;
var statearr_9595_9683 = state_9590;
(statearr_9595_9683[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9590[(4)]))){
var statearr_9596_9684 = state_9590;
(statearr_9596_9684[(1)] = cljs.core.first((state_9590[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9685 = state_9590;
state_9590 = G__9685;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$state_machine__8647__auto__ = function(state_9590){
switch(arguments.length){
case 0:
return chess$worker$state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$state_machine__8647__auto____1.call(this,state_9590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$state_machine__8647__auto____0;
chess$worker$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$state_machine__8647__auto____1;
return chess$worker$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9597 = f__8854__auto__();
(statearr_9597[(6)] = c__8853__auto__);

return statearr_9597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));
}
chess.worker.init_worker = (function chess$worker$init_worker(handler){

return (self["onmessage"] = (function (e){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9610){
var state_val_9611 = (state_9610[(1)]);
if((state_val_9611 === (1))){
var inst_9601 = e.data;
var inst_9603 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_9601);
var inst_9604 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_9603) : handler.call(null,inst_9603));
var state_9610__$1 = state_9610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9610__$1,(2),inst_9604);
} else {
if((state_val_9611 === (2))){
var inst_9606 = (state_9610[(2)]);
var inst_9607 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9606], 0));
var inst_9608 = postMessage(inst_9607);
var state_9610__$1 = state_9610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9610__$1,inst_9608);
} else {
return null;
}
}
});
return (function() {
var chess$worker$init_worker_$_state_machine__8647__auto__ = null;
var chess$worker$init_worker_$_state_machine__8647__auto____0 = (function (){
var statearr_9615 = [null,null,null,null,null,null,null];
(statearr_9615[(0)] = chess$worker$init_worker_$_state_machine__8647__auto__);

(statearr_9615[(1)] = (1));

return statearr_9615;
});
var chess$worker$init_worker_$_state_machine__8647__auto____1 = (function (state_9610){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9610);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9617){var ex__8650__auto__ = e9617;
var statearr_9618_9689 = state_9610;
(statearr_9618_9689[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9610[(4)]))){
var statearr_9620_9694 = state_9610;
(statearr_9620_9694[(1)] = cljs.core.first((state_9610[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9698 = state_9610;
state_9610 = G__9698;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$init_worker_$_state_machine__8647__auto__ = function(state_9610){
switch(arguments.length){
case 0:
return chess$worker$init_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$init_worker_$_state_machine__8647__auto____1.call(this,state_9610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_worker_$_state_machine__8647__auto____0;
chess$worker$init_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_worker_$_state_machine__8647__auto____1;
return chess$worker$init_worker_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9622 = f__8854__auto__();
(statearr_9622[(6)] = c__8853__auto__);

return statearr_9622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));
});
chess.worker.eval_form = (function chess$worker$eval_form(source){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(chess.worker.c_state,source,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,chess.worker.c_state)], null),(function (p1__9623_SHARP_){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9631){
var state_val_9633 = (state_9631[(1)]);
if((state_val_9633 === (1))){
var state_9631__$1 = state_9631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9631__$1,(2),c,p1__9623_SHARP_);
} else {
if((state_val_9633 === (2))){
var inst_9628 = (state_9631[(2)]);
var inst_9629 = cljs.core.async.close_BANG_(c);
var state_9631__$1 = (function (){var statearr_9636 = state_9631;
(statearr_9636[(7)] = inst_9628);

return statearr_9636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9631__$1,inst_9629);
} else {
return null;
}
}
});
return (function() {
var chess$worker$eval_form_$_state_machine__8647__auto__ = null;
var chess$worker$eval_form_$_state_machine__8647__auto____0 = (function (){
var statearr_9638 = [null,null,null,null,null,null,null,null];
(statearr_9638[(0)] = chess$worker$eval_form_$_state_machine__8647__auto__);

(statearr_9638[(1)] = (1));

return statearr_9638;
});
var chess$worker$eval_form_$_state_machine__8647__auto____1 = (function (state_9631){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9631);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9640){var ex__8650__auto__ = e9640;
var statearr_9642_9712 = state_9631;
(statearr_9642_9712[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9631[(4)]))){
var statearr_9644_9713 = state_9631;
(statearr_9644_9713[(1)] = cljs.core.first((state_9631[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9716 = state_9631;
state_9631 = G__9716;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$eval_form_$_state_machine__8647__auto__ = function(state_9631){
switch(arguments.length){
case 0:
return chess$worker$eval_form_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$eval_form_$_state_machine__8647__auto____1.call(this,state_9631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$eval_form_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$eval_form_$_state_machine__8647__auto____0;
chess$worker$eval_form_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$eval_form_$_state_machine__8647__auto____1;
return chess$worker$eval_form_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9647 = f__8854__auto__();
(statearr_9647[(6)] = c__8853__auto__);

return statearr_9647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));

return c;
});
chess.worker.pf = (function chess$worker$pf(thing){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thing], 0));

return thing;
});
chess.worker.init = (function chess$worker$init(){
return chess.worker.init_worker((function (msg){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9655){
var state_val_9656 = (state_9655[(1)]);
if((state_val_9656 === (1))){
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9655__$1,(2),chess.worker.inited);
} else {
if((state_val_9656 === (2))){
var inst_9650 = (state_9655[(2)]);
var inst_9651 = chess.worker.eval_form(msg);
var state_9655__$1 = (function (){var statearr_9661 = state_9655;
(statearr_9661[(7)] = inst_9650);

return statearr_9661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9655__$1,(3),inst_9651);
} else {
if((state_val_9656 === (3))){
var inst_9653 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9655__$1,inst_9653);
} else {
return null;
}
}
}
});
return (function() {
var chess$worker$init_$_state_machine__8647__auto__ = null;
var chess$worker$init_$_state_machine__8647__auto____0 = (function (){
var statearr_9664 = [null,null,null,null,null,null,null,null];
(statearr_9664[(0)] = chess$worker$init_$_state_machine__8647__auto__);

(statearr_9664[(1)] = (1));

return statearr_9664;
});
var chess$worker$init_$_state_machine__8647__auto____1 = (function (state_9655){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9655);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9666){var ex__8650__auto__ = e9666;
var statearr_9668_9721 = state_9655;
(statearr_9668_9721[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9655[(4)]))){
var statearr_9670_9722 = state_9655;
(statearr_9670_9722[(1)] = cljs.core.first((state_9655[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9724 = state_9655;
state_9655 = G__9724;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$init_$_state_machine__8647__auto__ = function(state_9655){
switch(arguments.length){
case 0:
return chess$worker$init_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$init_$_state_machine__8647__auto____1.call(this,state_9655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_$_state_machine__8647__auto____0;
chess$worker$init_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_$_state_machine__8647__auto____1;
return chess$worker$init_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9673 = f__8854__auto__();
(statearr_9673[(6)] = c__8853__auto__);

return statearr_9673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));
});

//# sourceMappingURL=chess.worker.js.map
