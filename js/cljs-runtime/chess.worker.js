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
chess.worker._ = shadow.cljs.bootstrap.browser.init(chess.worker.c_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"./bootstrap"], null),(function (){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9177){
var state_val_9180 = (state_9177[(1)]);
if((state_val_9180 === (1))){
var state_9177__$1 = state_9177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9177__$1,(2),chess.worker.inited,true);
} else {
if((state_val_9180 === (2))){
var inst_9166 = (state_9177[(2)]);
var inst_9169 = cljs.core.async.close_BANG_(chess.worker.inited);
var state_9177__$1 = (function (){var statearr_9181 = state_9177;
(statearr_9181[(7)] = inst_9166);

return statearr_9181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9177__$1,inst_9169);
} else {
return null;
}
}
});
return (function() {
var chess$worker$state_machine__8647__auto__ = null;
var chess$worker$state_machine__8647__auto____0 = (function (){
var statearr_9183 = [null,null,null,null,null,null,null,null];
(statearr_9183[(0)] = chess$worker$state_machine__8647__auto__);

(statearr_9183[(1)] = (1));

return statearr_9183;
});
var chess$worker$state_machine__8647__auto____1 = (function (state_9177){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9177);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9186){var ex__8650__auto__ = e9186;
var statearr_9188_9346 = state_9177;
(statearr_9188_9346[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9177[(4)]))){
var statearr_9189_9348 = state_9177;
(statearr_9189_9348[(1)] = cljs.core.first((state_9177[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9350 = state_9177;
state_9177 = G__9350;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$state_machine__8647__auto__ = function(state_9177){
switch(arguments.length){
case 0:
return chess$worker$state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$state_machine__8647__auto____1.call(this,state_9177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$state_machine__8647__auto____0;
chess$worker$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$state_machine__8647__auto____1;
return chess$worker$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9192 = f__8719__auto__();
(statearr_9192[(6)] = c__8718__auto__);

return statearr_9192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));
}
chess.worker.init_worker = (function chess$worker$init_worker(handler){

return (self["onmessage"] = (function (e){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9207){
var state_val_9208 = (state_9207[(1)]);
if((state_val_9208 === (1))){
var inst_9198 = e.data;
var inst_9199 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_9198);
var inst_9200 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_9199) : handler.call(null,inst_9199));
var state_9207__$1 = state_9207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9207__$1,(2),inst_9200);
} else {
if((state_val_9208 === (2))){
var inst_9202 = (state_9207[(2)]);
var inst_9203 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9202], 0));
var inst_9204 = postMessage(inst_9203);
var state_9207__$1 = state_9207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9207__$1,inst_9204);
} else {
return null;
}
}
});
return (function() {
var chess$worker$init_worker_$_state_machine__8647__auto__ = null;
var chess$worker$init_worker_$_state_machine__8647__auto____0 = (function (){
var statearr_9234 = [null,null,null,null,null,null,null];
(statearr_9234[(0)] = chess$worker$init_worker_$_state_machine__8647__auto__);

(statearr_9234[(1)] = (1));

return statearr_9234;
});
var chess$worker$init_worker_$_state_machine__8647__auto____1 = (function (state_9207){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9207);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9239){var ex__8650__auto__ = e9239;
var statearr_9242_9356 = state_9207;
(statearr_9242_9356[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9207[(4)]))){
var statearr_9258_9358 = state_9207;
(statearr_9258_9358[(1)] = cljs.core.first((state_9207[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9359 = state_9207;
state_9207 = G__9359;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$init_worker_$_state_machine__8647__auto__ = function(state_9207){
switch(arguments.length){
case 0:
return chess$worker$init_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$init_worker_$_state_machine__8647__auto____1.call(this,state_9207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_worker_$_state_machine__8647__auto____0;
chess$worker$init_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_worker_$_state_machine__8647__auto____1;
return chess$worker$init_worker_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9274 = f__8719__auto__();
(statearr_9274[(6)] = c__8718__auto__);

return statearr_9274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));
});
chess.worker.eval_form = (function chess$worker$eval_form(source){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(chess.worker.c_state,source,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,chess.worker.c_state)], null),(function (p1__9282_SHARP_){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9293){
var state_val_9294 = (state_9293[(1)]);
if((state_val_9294 === (1))){
var state_9293__$1 = state_9293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9293__$1,(2),c,p1__9282_SHARP_);
} else {
if((state_val_9294 === (2))){
var inst_9290 = (state_9293[(2)]);
var inst_9291 = cljs.core.async.close_BANG_(c);
var state_9293__$1 = (function (){var statearr_9297 = state_9293;
(statearr_9297[(7)] = inst_9290);

return statearr_9297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9293__$1,inst_9291);
} else {
return null;
}
}
});
return (function() {
var chess$worker$eval_form_$_state_machine__8647__auto__ = null;
var chess$worker$eval_form_$_state_machine__8647__auto____0 = (function (){
var statearr_9300 = [null,null,null,null,null,null,null,null];
(statearr_9300[(0)] = chess$worker$eval_form_$_state_machine__8647__auto__);

(statearr_9300[(1)] = (1));

return statearr_9300;
});
var chess$worker$eval_form_$_state_machine__8647__auto____1 = (function (state_9293){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9293);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9301){var ex__8650__auto__ = e9301;
var statearr_9302_9368 = state_9293;
(statearr_9302_9368[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9293[(4)]))){
var statearr_9304_9370 = state_9293;
(statearr_9304_9370[(1)] = cljs.core.first((state_9293[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9371 = state_9293;
state_9293 = G__9371;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$eval_form_$_state_machine__8647__auto__ = function(state_9293){
switch(arguments.length){
case 0:
return chess$worker$eval_form_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$eval_form_$_state_machine__8647__auto____1.call(this,state_9293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$eval_form_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$eval_form_$_state_machine__8647__auto____0;
chess$worker$eval_form_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$eval_form_$_state_machine__8647__auto____1;
return chess$worker$eval_form_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9306 = f__8719__auto__();
(statearr_9306[(6)] = c__8718__auto__);

return statearr_9306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));

return c;
});
chess.worker.pf = (function chess$worker$pf(thing){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thing], 0));

return thing;
});
chess.worker.init = (function chess$worker$init(){
return chess.worker.init_worker((function (msg){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9317){
var state_val_9318 = (state_9317[(1)]);
if((state_val_9318 === (1))){
var state_9317__$1 = state_9317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9317__$1,(2),chess.worker.inited);
} else {
if((state_val_9318 === (2))){
var inst_9312 = (state_9317[(2)]);
var inst_9313 = chess.worker.eval_form(msg);
var state_9317__$1 = (function (){var statearr_9322 = state_9317;
(statearr_9322[(7)] = inst_9312);

return statearr_9322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9317__$1,(3),inst_9313);
} else {
if((state_val_9318 === (3))){
var inst_9315 = (state_9317[(2)]);
var state_9317__$1 = state_9317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9317__$1,inst_9315);
} else {
return null;
}
}
}
});
return (function() {
var chess$worker$init_$_state_machine__8647__auto__ = null;
var chess$worker$init_$_state_machine__8647__auto____0 = (function (){
var statearr_9326 = [null,null,null,null,null,null,null,null];
(statearr_9326[(0)] = chess$worker$init_$_state_machine__8647__auto__);

(statearr_9326[(1)] = (1));

return statearr_9326;
});
var chess$worker$init_$_state_machine__8647__auto____1 = (function (state_9317){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9317);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9328){var ex__8650__auto__ = e9328;
var statearr_9329_9374 = state_9317;
(statearr_9329_9374[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9317[(4)]))){
var statearr_9331_9379 = state_9317;
(statearr_9331_9379[(1)] = cljs.core.first((state_9317[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9381 = state_9317;
state_9317 = G__9381;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$worker$init_$_state_machine__8647__auto__ = function(state_9317){
switch(arguments.length){
case 0:
return chess$worker$init_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$worker$init_$_state_machine__8647__auto____1.call(this,state_9317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_$_state_machine__8647__auto____0;
chess$worker$init_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_$_state_machine__8647__auto____1;
return chess$worker$init_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9334 = f__8719__auto__();
(statearr_9334[(6)] = c__8718__auto__);

return statearr_9334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));
});

//# sourceMappingURL=chess.worker.js.map
