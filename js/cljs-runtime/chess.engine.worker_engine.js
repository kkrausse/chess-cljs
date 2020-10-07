goog.provide('chess.engine.worker_engine');

chess.engine.worker_engine.load_worker = (function chess$engine$worker_engine$load_worker(filename,id){

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var reply_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var worker = (new Worker(filename));
(worker["onmessage"] = (function (e){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9167){
var state_val_9168 = (state_9167[(1)]);
if((state_val_9168 === (1))){
var inst_9162 = e.data;
var inst_9163 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1(inst_9162) : chess.engine.worker_engine.printl.call(null,inst_9162));
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9167__$1,(2),reply_chan,inst_9163);
} else {
if((state_val_9168 === (2))){
var inst_9165 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9167__$1,inst_9165);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0 = (function (){
var statearr_9169 = [null,null,null,null,null,null,null];
(statearr_9169[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__);

(statearr_9169[(1)] = (1));

return statearr_9169;
});
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1 = (function (state_9167){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9167);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9176){var ex__8650__auto__ = e9176;
var statearr_9177_9598 = state_9167;
(statearr_9177_9598[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9167[(4)]))){
var statearr_9180_9599 = state_9167;
(statearr_9180_9599[(1)] = cljs.core.first((state_9167[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9600 = state_9167;
state_9167 = G__9600;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = function(state_9167){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1.call(this,state_9167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9184 = f__8854__auto__();
(statearr_9184[(6)] = c__8853__auto__);

return statearr_9184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));

var c__8853__auto___9602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9270){
var state_val_9271 = (state_9270[(1)]);
if((state_val_9271 === (7))){
var state_9270__$1 = state_9270;
var statearr_9272_9612 = state_9270__$1;
(statearr_9272_9612[(2)] = false);

(statearr_9272_9612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (20))){
var inst_9222 = (state_9270[(7)]);
var inst_9242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9222);
var state_9270__$1 = state_9270;
var statearr_9273_9613 = state_9270__$1;
(statearr_9273_9613[(2)] = inst_9242);

(statearr_9273_9613[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (27))){
var inst_9246 = (state_9270[(8)]);
var inst_9255 = (state_9270[(2)]);
var inst_9256 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_9255);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9270__$1,(26),inst_9246,inst_9256);
} else {
if((state_val_9271 === (1))){
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9270__$1,(2),c);
} else {
if((state_val_9271 === (24))){
var state_9270__$1 = state_9270;
var statearr_9274_9614 = state_9270__$1;
(statearr_9274_9614[(2)] = null);

(statearr_9274_9614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (4))){
var state_9270__$1 = state_9270;
var statearr_9275_9616 = state_9270__$1;
(statearr_9275_9616[(2)] = false);

(statearr_9275_9616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (15))){
var state_9270__$1 = state_9270;
var statearr_9276_9619 = state_9270__$1;
(statearr_9276_9619[(2)] = false);

(statearr_9276_9619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (21))){
var inst_9222 = (state_9270[(7)]);
var state_9270__$1 = state_9270;
var statearr_9277_9621 = state_9270__$1;
(statearr_9277_9621[(2)] = inst_9222);

(statearr_9277_9621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (13))){
var inst_9268 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9270__$1,inst_9268);
} else {
if((state_val_9271 === (22))){
var inst_9247 = (state_9270[(9)]);
var inst_9245 = (state_9270[(2)]);
var inst_9246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9245,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9245,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9248 = (inst_9247__$1 == null);
var inst_9249 = cljs.core.not(inst_9248);
var state_9270__$1 = (function (){var statearr_9278 = state_9270;
(statearr_9278[(9)] = inst_9247__$1);

(statearr_9278[(8)] = inst_9246);

return statearr_9278;
})();
if(inst_9249){
var statearr_9279_9624 = state_9270__$1;
(statearr_9279_9624[(1)] = (23));

} else {
var statearr_9280_9625 = state_9270__$1;
(statearr_9280_9625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (6))){
var state_9270__$1 = state_9270;
var statearr_9281_9626 = state_9270__$1;
(statearr_9281_9626[(2)] = true);

(statearr_9281_9626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (28))){
var inst_9262 = (state_9270[(2)]);
var inst_9222 = inst_9262;
var state_9270__$1 = (function (){var statearr_9282 = state_9270;
(statearr_9282[(7)] = inst_9222);

return statearr_9282;
})();
var statearr_9283_9632 = state_9270__$1;
(statearr_9283_9632[(2)] = null);

(statearr_9283_9632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (25))){
var inst_9266 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9284_9634 = state_9270__$1;
(statearr_9284_9634[(2)] = inst_9266);

(statearr_9284_9634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (17))){
var state_9270__$1 = state_9270;
var statearr_9285_9635 = state_9270__$1;
(statearr_9285_9635[(2)] = true);

(statearr_9285_9635[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (3))){
var inst_9194 = (state_9270[(10)]);
var inst_9203 = inst_9194.cljs$lang$protocol_mask$partition0$;
var inst_9204 = (inst_9203 & (64));
var inst_9205 = inst_9194.cljs$core$ISeq$;
var inst_9206 = (cljs.core.PROTOCOL_SENTINEL === inst_9205);
var inst_9207 = ((inst_9204) || (inst_9206));
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9207)){
var statearr_9286_9637 = state_9270__$1;
(statearr_9286_9637[(1)] = (6));

} else {
var statearr_9287_9639 = state_9270__$1;
(statearr_9287_9639[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (12))){
var inst_9222 = (state_9270[(7)]);
var inst_9226 = (inst_9222 == null);
var inst_9227 = cljs.core.not(inst_9226);
var state_9270__$1 = state_9270;
if(inst_9227){
var statearr_9288_9641 = state_9270__$1;
(statearr_9288_9641[(1)] = (14));

} else {
var statearr_9289_9643 = state_9270__$1;
(statearr_9289_9643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (2))){
var inst_9194 = (state_9270[(10)]);
var inst_9194__$1 = (state_9270[(2)]);
var inst_9200 = (inst_9194__$1 == null);
var inst_9201 = cljs.core.not(inst_9200);
var state_9270__$1 = (function (){var statearr_9290 = state_9270;
(statearr_9290[(10)] = inst_9194__$1);

return statearr_9290;
})();
if(inst_9201){
var statearr_9291_9645 = state_9270__$1;
(statearr_9291_9645[(1)] = (3));

} else {
var statearr_9292_9646 = state_9270__$1;
(statearr_9292_9646[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (23))){
var inst_9247 = (state_9270[(9)]);
var inst_9251 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," starting work") : chess.engine.worker_engine.printl.call(null,"worker ",id," starting work"));
var inst_9252 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9247], 0));
var inst_9253 = worker.postMessage(inst_9252);
var state_9270__$1 = (function (){var statearr_9293 = state_9270;
(statearr_9293[(11)] = inst_9251);

(statearr_9293[(12)] = inst_9253);

return statearr_9293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9270__$1,(27),reply_chan);
} else {
if((state_val_9271 === (19))){
var inst_9237 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9294_9648 = state_9270__$1;
(statearr_9294_9648[(2)] = inst_9237);

(statearr_9294_9648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (11))){
var inst_9194 = (state_9270[(10)]);
var inst_9219 = (state_9270[(2)]);
var inst_9220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9219,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9219,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9222 = inst_9194;
var state_9270__$1 = (function (){var statearr_9295 = state_9270;
(statearr_9295[(13)] = inst_9221);

(statearr_9295[(7)] = inst_9222);

(statearr_9295[(14)] = inst_9220);

return statearr_9295;
})();
var statearr_9296_9657 = state_9270__$1;
(statearr_9296_9657[(2)] = null);

(statearr_9296_9657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (9))){
var inst_9194 = (state_9270[(10)]);
var inst_9216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9194);
var state_9270__$1 = state_9270;
var statearr_9297_9658 = state_9270__$1;
(statearr_9297_9658[(2)] = inst_9216);

(statearr_9297_9658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (5))){
var inst_9214 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9214)){
var statearr_9298_9659 = state_9270__$1;
(statearr_9298_9659[(1)] = (9));

} else {
var statearr_9299_9660 = state_9270__$1;
(statearr_9299_9660[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (14))){
var inst_9222 = (state_9270[(7)]);
var inst_9229 = inst_9222.cljs$lang$protocol_mask$partition0$;
var inst_9230 = (inst_9229 & (64));
var inst_9231 = inst_9222.cljs$core$ISeq$;
var inst_9232 = (cljs.core.PROTOCOL_SENTINEL === inst_9231);
var inst_9233 = ((inst_9230) || (inst_9232));
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9233)){
var statearr_9300_9662 = state_9270__$1;
(statearr_9300_9662[(1)] = (17));

} else {
var statearr_9301_9663 = state_9270__$1;
(statearr_9301_9663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (26))){
var inst_9246 = (state_9270[(8)]);
var inst_9258 = (state_9270[(2)]);
var inst_9259 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," finished work") : chess.engine.worker_engine.printl.call(null,"worker ",id," finished work"));
var inst_9260 = cljs.core.async.close_BANG_(inst_9246);
var state_9270__$1 = (function (){var statearr_9302 = state_9270;
(statearr_9302[(15)] = inst_9258);

(statearr_9302[(16)] = inst_9260);

(statearr_9302[(17)] = inst_9259);

return statearr_9302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9270__$1,(28),c);
} else {
if((state_val_9271 === (16))){
var inst_9240 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9240)){
var statearr_9303_9665 = state_9270__$1;
(statearr_9303_9665[(1)] = (20));

} else {
var statearr_9304_9667 = state_9270__$1;
(statearr_9304_9667[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (10))){
var inst_9194 = (state_9270[(10)]);
var state_9270__$1 = state_9270;
var statearr_9305_9669 = state_9270__$1;
(statearr_9305_9669[(2)] = inst_9194);

(statearr_9305_9669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (18))){
var state_9270__$1 = state_9270;
var statearr_9306_9671 = state_9270__$1;
(statearr_9306_9671[(2)] = false);

(statearr_9306_9671[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (8))){
var inst_9211 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9307_9672 = state_9270__$1;
(statearr_9307_9672[(2)] = inst_9211);

(statearr_9307_9672[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
}
}
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
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0 = (function (){
var statearr_9308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9308[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__);

(statearr_9308[(1)] = (1));

return statearr_9308;
});
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1 = (function (state_9270){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9270);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9309){var ex__8650__auto__ = e9309;
var statearr_9310_9674 = state_9270;
(statearr_9310_9674[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9270[(4)]))){
var statearr_9311_9675 = state_9270;
(statearr_9311_9675[(1)] = cljs.core.first((state_9270[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9676 = state_9270;
state_9270 = G__9676;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = function(state_9270){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1.call(this,state_9270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9312 = f__8854__auto__();
(statearr_9312[(6)] = c__8853__auto___9602);

return statearr_9312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));


return c;
});
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.work_chan !== 'undefined')){
} else {
chess.engine.worker_engine.work_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((30));
}
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.worker_chan_chan !== 'undefined')){
} else {
chess.engine.worker_engine.worker_chan_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((30));
}
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine._ !== 'undefined')){
} else {
chess.engine.worker_engine._ = (function (){
var seq__9313_9677 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__9314_9678 = null;
var count__9315_9679 = (0);
var i__9316_9680 = (0);
while(true){
if((i__9316_9680 < count__9315_9679)){
var i_9681 = chunk__9314_9678.cljs$core$IIndexed$_nth$arity$2(null,i__9316_9680);
var c__8853__auto___9682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9682,i_9681){
return (function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = ((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9682,i_9681){
return (function (state_9346){
var state_val_9347 = (state_9346[(1)]);
if((state_val_9347 === (1))){
var inst_9341 = chess.utils.asset_path("/js/worker.js");
var inst_9342 = chess.engine.worker_engine.load_worker(inst_9341,i_9681);
var state_9346__$1 = state_9346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9346__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_9342);
} else {
if((state_val_9347 === (2))){
var inst_9344 = (state_9346[(2)]);
var state_9346__$1 = state_9346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9346__$1,inst_9344);
} else {
return null;
}
}
});})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9682,i_9681))
;
return ((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,switch__8646__auto__,c__8853__auto___9682,i_9681){
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9348 = [null,null,null,null,null,null,null];
(statearr_9348[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9348[(1)] = (1));

return statearr_9348;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9346){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9346);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9349){var ex__8650__auto__ = e9349;
var statearr_9350_9686 = state_9346;
(statearr_9350_9686[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9346[(4)]))){
var statearr_9351_9687 = state_9346;
(statearr_9351_9687[(1)] = cljs.core.first((state_9346[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9688 = state_9346;
state_9346 = G__9688;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9346){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
;})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,switch__8646__auto__,c__8853__auto___9682,i_9681))
})();
var state__8855__auto__ = (function (){var statearr_9352 = f__8854__auto__();
(statearr_9352[(6)] = c__8853__auto___9682);

return statearr_9352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
});})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9682,i_9681))
);



var G__9690 = seq__9313_9677;
var G__9691 = chunk__9314_9678;
var G__9692 = count__9315_9679;
var G__9693 = (i__9316_9680 + (1));
seq__9313_9677 = G__9690;
chunk__9314_9678 = G__9691;
count__9315_9679 = G__9692;
i__9316_9680 = G__9693;
continue;
} else {
var temp__5735__auto___9695 = cljs.core.seq(seq__9313_9677);
if(temp__5735__auto___9695){
var seq__9313_9696__$1 = temp__5735__auto___9695;
if(cljs.core.chunked_seq_QMARK_(seq__9313_9696__$1)){
var c__4556__auto___9697 = cljs.core.chunk_first(seq__9313_9696__$1);
var G__9699 = cljs.core.chunk_rest(seq__9313_9696__$1);
var G__9700 = c__4556__auto___9697;
var G__9701 = cljs.core.count(c__4556__auto___9697);
var G__9702 = (0);
seq__9313_9677 = G__9699;
chunk__9314_9678 = G__9700;
count__9315_9679 = G__9701;
i__9316_9680 = G__9702;
continue;
} else {
var i_9703 = cljs.core.first(seq__9313_9696__$1);
var c__8853__auto___9704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695){
return (function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = ((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695){
return (function (state_9358){
var state_val_9359 = (state_9358[(1)]);
if((state_val_9359 === (1))){
var inst_9353 = chess.utils.asset_path("/js/worker.js");
var inst_9354 = chess.engine.worker_engine.load_worker(inst_9353,i_9703);
var state_9358__$1 = state_9358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9358__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_9354);
} else {
if((state_val_9359 === (2))){
var inst_9356 = (state_9358[(2)]);
var state_9358__$1 = state_9358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9358__$1,inst_9356);
} else {
return null;
}
}
});})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695))
;
return ((function (seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,switch__8646__auto__,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695){
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9360 = [null,null,null,null,null,null,null];
(statearr_9360[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9360[(1)] = (1));

return statearr_9360;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9358){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9358);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9361){var ex__8650__auto__ = e9361;
var statearr_9362_9705 = state_9358;
(statearr_9362_9705[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9358[(4)]))){
var statearr_9363_9706 = state_9358;
(statearr_9363_9706[(1)] = cljs.core.first((state_9358[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9707 = state_9358;
state_9358 = G__9707;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9358){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
;})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,switch__8646__auto__,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695))
})();
var state__8855__auto__ = (function (){var statearr_9364 = f__8854__auto__();
(statearr_9364[(6)] = c__8853__auto___9704);

return statearr_9364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
});})(seq__9313_9677,chunk__9314_9678,count__9315_9679,i__9316_9680,c__8853__auto___9704,i_9703,seq__9313_9696__$1,temp__5735__auto___9695))
);



var G__9708 = cljs.core.next(seq__9313_9696__$1);
var G__9709 = null;
var G__9710 = (0);
var G__9711 = (0);
seq__9313_9677 = G__9708;
chunk__9314_9678 = G__9709;
count__9315_9679 = G__9710;
i__9316_9680 = G__9711;
continue;
}
} else {
}
}
break;
}

var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9432){
var state_val_9433 = (state_9432[(1)]);
if((state_val_9433 === (7))){
var state_9432__$1 = state_9432;
var statearr_9434_9714 = state_9432__$1;
(statearr_9434_9714[(2)] = false);

(statearr_9434_9714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (20))){
var inst_9411 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9435_9715 = state_9432__$1;
(statearr_9435_9715[(2)] = inst_9411);

(statearr_9435_9715[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (1))){
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9432__$1,(2),chess.engine.worker_engine.work_chan);
} else {
if((state_val_9433 === (24))){
var inst_9425 = (state_9432[(2)]);
var state_9432__$1 = (function (){var statearr_9436 = state_9432;
(statearr_9436[(7)] = inst_9425);

return statearr_9436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9432__$1,(25),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_9433 === (4))){
var state_9432__$1 = state_9432;
var statearr_9437_9717 = state_9432__$1;
(statearr_9437_9717[(2)] = false);

(statearr_9437_9717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (15))){
var inst_9395 = (state_9432[(8)]);
var inst_9403 = inst_9395.cljs$lang$protocol_mask$partition0$;
var inst_9404 = (inst_9403 & (64));
var inst_9405 = inst_9395.cljs$core$ISeq$;
var inst_9406 = (cljs.core.PROTOCOL_SENTINEL === inst_9405);
var inst_9407 = ((inst_9404) || (inst_9406));
var state_9432__$1 = state_9432;
if(cljs.core.truth_(inst_9407)){
var statearr_9438_9718 = state_9432__$1;
(statearr_9438_9718[(1)] = (18));

} else {
var statearr_9439_9719 = state_9432__$1;
(statearr_9439_9719[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (21))){
var inst_9395 = (state_9432[(8)]);
var inst_9416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9395);
var state_9432__$1 = state_9432;
var statearr_9440_9720 = state_9432__$1;
(statearr_9440_9720[(2)] = inst_9416);

(statearr_9440_9720[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (13))){
var inst_9395 = (state_9432[(8)]);
var inst_9400 = (inst_9395 == null);
var inst_9401 = cljs.core.not(inst_9400);
var state_9432__$1 = state_9432;
if(inst_9401){
var statearr_9441_9723 = state_9432__$1;
(statearr_9441_9723[(1)] = (15));

} else {
var statearr_9442_9725 = state_9432__$1;
(statearr_9442_9725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (22))){
var inst_9395 = (state_9432[(8)]);
var state_9432__$1 = state_9432;
var statearr_9443_9726 = state_9432__$1;
(statearr_9443_9726[(2)] = inst_9395);

(statearr_9443_9726[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (6))){
var state_9432__$1 = state_9432;
var statearr_9444_9727 = state_9432__$1;
(statearr_9444_9727[(2)] = true);

(statearr_9444_9727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (25))){
var inst_9425 = (state_9432[(7)]);
var inst_9427 = (state_9432[(2)]);
var inst_9395 = inst_9425;
var inst_9396 = inst_9427;
var state_9432__$1 = (function (){var statearr_9445 = state_9432;
(statearr_9445[(9)] = inst_9396);

(statearr_9445[(8)] = inst_9395);

return statearr_9445;
})();
var statearr_9446_9728 = state_9432__$1;
(statearr_9446_9728[(2)] = null);

(statearr_9446_9728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (17))){
var inst_9414 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
if(cljs.core.truth_(inst_9414)){
var statearr_9447_9729 = state_9432__$1;
(statearr_9447_9729[(1)] = (21));

} else {
var statearr_9448_9730 = state_9432__$1;
(statearr_9448_9730[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (3))){
var inst_9369 = (state_9432[(10)]);
var inst_9374 = inst_9369.cljs$lang$protocol_mask$partition0$;
var inst_9375 = (inst_9374 & (64));
var inst_9376 = inst_9369.cljs$core$ISeq$;
var inst_9377 = (cljs.core.PROTOCOL_SENTINEL === inst_9376);
var inst_9378 = ((inst_9375) || (inst_9377));
var state_9432__$1 = state_9432;
if(cljs.core.truth_(inst_9378)){
var statearr_9449_9731 = state_9432__$1;
(statearr_9449_9731[(1)] = (6));

} else {
var statearr_9450_9732 = state_9432__$1;
(statearr_9450_9732[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (12))){
var inst_9369 = (state_9432[(10)]);
var inst_9394 = (state_9432[(2)]);
var inst_9395 = inst_9369;
var inst_9396 = inst_9394;
var state_9432__$1 = (function (){var statearr_9451 = state_9432;
(statearr_9451[(9)] = inst_9396);

(statearr_9451[(8)] = inst_9395);

return statearr_9451;
})();
var statearr_9452_9733 = state_9432__$1;
(statearr_9452_9733[(2)] = null);

(statearr_9452_9733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (2))){
var inst_9369 = (state_9432[(10)]);
var inst_9369__$1 = (state_9432[(2)]);
var inst_9371 = (inst_9369__$1 == null);
var inst_9372 = cljs.core.not(inst_9371);
var state_9432__$1 = (function (){var statearr_9453 = state_9432;
(statearr_9453[(10)] = inst_9369__$1);

return statearr_9453;
})();
if(inst_9372){
var statearr_9454_9734 = state_9432__$1;
(statearr_9454_9734[(1)] = (3));

} else {
var statearr_9455_9735 = state_9432__$1;
(statearr_9455_9735[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (23))){
var inst_9396 = (state_9432[(9)]);
var inst_9419 = (state_9432[(2)]);
var inst_9420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9419,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9419,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9422 = (chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2 ? chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2(inst_9396,inst_9421) : chess.engine.worker_engine.submit_command.call(null,inst_9396,inst_9421));
var inst_9423 = cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(inst_9422,inst_9420);
var state_9432__$1 = (function (){var statearr_9456 = state_9432;
(statearr_9456[(11)] = inst_9423);

return statearr_9456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9432__$1,(24),chess.engine.worker_engine.work_chan);
} else {
if((state_val_9433 === (19))){
var state_9432__$1 = state_9432;
var statearr_9457_9736 = state_9432__$1;
(statearr_9457_9736[(2)] = false);

(statearr_9457_9736[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (11))){
var inst_9390 = (state_9432[(2)]);
var inst_9391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9390,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9390,new cljs.core.Keyword(null,"form","form",-1624062471));
var state_9432__$1 = (function (){var statearr_9458 = state_9432;
(statearr_9458[(12)] = inst_9392);

(statearr_9458[(13)] = inst_9391);

return statearr_9458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9432__$1,(12),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_9433 === (9))){
var inst_9369 = (state_9432[(10)]);
var inst_9387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9369);
var state_9432__$1 = state_9432;
var statearr_9459_9737 = state_9432__$1;
(statearr_9459_9737[(2)] = inst_9387);

(statearr_9459_9737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (5))){
var inst_9385 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
if(cljs.core.truth_(inst_9385)){
var statearr_9460_9738 = state_9432__$1;
(statearr_9460_9738[(1)] = (9));

} else {
var statearr_9461_9739 = state_9432__$1;
(statearr_9461_9739[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (14))){
var inst_9430 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9432__$1,inst_9430);
} else {
if((state_val_9433 === (16))){
var state_9432__$1 = state_9432;
var statearr_9462_9740 = state_9432__$1;
(statearr_9462_9740[(2)] = false);

(statearr_9462_9740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (10))){
var inst_9369 = (state_9432[(10)]);
var state_9432__$1 = state_9432;
var statearr_9463_9741 = state_9432__$1;
(statearr_9463_9741[(2)] = inst_9369);

(statearr_9463_9741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (18))){
var state_9432__$1 = state_9432;
var statearr_9464_9742 = state_9432__$1;
(statearr_9464_9742[(2)] = true);

(statearr_9464_9742[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9433 === (8))){
var inst_9382 = (state_9432[(2)]);
var state_9432__$1 = state_9432;
var statearr_9465_9743 = state_9432__$1;
(statearr_9465_9743[(2)] = inst_9382);

(statearr_9465_9743[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
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
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9466[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9466[(1)] = (1));

return statearr_9466;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9432){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9432);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9467){var ex__8650__auto__ = e9467;
var statearr_9468_9744 = state_9432;
(statearr_9468_9744[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9432[(4)]))){
var statearr_9469_9745 = state_9432;
(statearr_9469_9745[(1)] = cljs.core.first((state_9432[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9746 = state_9432;
state_9432 = G__9746;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9432){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9470 = f__8854__auto__();
(statearr_9470[(6)] = c__8853__auto__);

return statearr_9470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
})()
;
}
chess.engine.worker_engine.submit_command = (function chess$engine$worker_engine$submit_command(worker_chan,form){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9482){
var state_val_9483 = (state_9482[(1)]);
if((state_val_9483 === (1))){
var inst_9471 = (state_9482[(7)]);
var inst_9471__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9472 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_9473 = [inst_9471__$1,form];
var inst_9474 = cljs.core.PersistentHashMap.fromArrays(inst_9472,inst_9473);
var state_9482__$1 = (function (){var statearr_9484 = state_9482;
(statearr_9484[(7)] = inst_9471__$1);

return statearr_9484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9482__$1,(2),worker_chan,inst_9474);
} else {
if((state_val_9483 === (2))){
var inst_9471 = (state_9482[(7)]);
var inst_9476 = (state_9482[(2)]);
var state_9482__$1 = (function (){var statearr_9485 = state_9482;
(statearr_9485[(8)] = inst_9476);

return statearr_9485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9482__$1,(3),inst_9471);
} else {
if((state_val_9483 === (3))){
var inst_9478 = (state_9482[(2)]);
var state_9482__$1 = (function (){var statearr_9486 = state_9482;
(statearr_9486[(9)] = inst_9478);

return statearr_9486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9482__$1,(4),chess.engine.worker_engine.worker_chan_chan,worker_chan);
} else {
if((state_val_9483 === (4))){
var inst_9478 = (state_9482[(9)]);
var inst_9480 = (state_9482[(2)]);
var state_9482__$1 = (function (){var statearr_9487 = state_9482;
(statearr_9487[(10)] = inst_9480);

return statearr_9487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9482__$1,inst_9478);
} else {
return null;
}
}
}
}
});
return (function() {
var chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____0 = (function (){
var statearr_9488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9488[(0)] = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__);

(statearr_9488[(1)] = (1));

return statearr_9488;
});
var chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1 = (function (state_9482){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9482);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9489){var ex__8650__auto__ = e9489;
var statearr_9490_9747 = state_9482;
(statearr_9490_9747[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9482[(4)]))){
var statearr_9491_9748 = state_9482;
(statearr_9491_9748[(1)] = cljs.core.first((state_9482[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9749 = state_9482;
state_9482 = G__9749;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__ = function(state_9482){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1.call(this,state_9482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____0;
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9492 = f__8854__auto__();
(statearr_9492[(6)] = c__8853__auto__);

return statearr_9492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
});
chess.engine.worker_engine.printl = (function chess$engine$worker_engine$printl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9750 = arguments.length;
var i__4737__auto___9751 = (0);
while(true){
if((i__4737__auto___9751 < len__4736__auto___9750)){
args__4742__auto__.push((arguments[i__4737__auto___9751]));

var G__9752 = (i__4737__auto___9751 + (1));
i__4737__auto___9751 = G__9752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic = (function (x){
chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["printl: ",x], 0));

return cljs.core.last(x);
}));

(chess.engine.worker_engine.printl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.engine.worker_engine.printl.cljs$lang$applyTo = (function (seq9493){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9493));
}));

chess.engine.worker_engine.dispatch = (function chess$engine$worker_engine$dispatch(literal){
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9503){
var state_val_9504 = (state_9503[(1)]);
if((state_val_9504 === (1))){
var inst_9494 = (state_9503[(7)]);
var inst_9494__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9495 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_9496 = [inst_9494__$1,literal];
var inst_9497 = cljs.core.PersistentHashMap.fromArrays(inst_9495,inst_9496);
var state_9503__$1 = (function (){var statearr_9505 = state_9503;
(statearr_9505[(7)] = inst_9494__$1);

return statearr_9505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9503__$1,(2),chess.engine.worker_engine.work_chan,inst_9497);
} else {
if((state_val_9504 === (2))){
var inst_9494 = (state_9503[(7)]);
var inst_9499 = (state_9503[(2)]);
var state_9503__$1 = (function (){var statearr_9506 = state_9503;
(statearr_9506[(8)] = inst_9499);

return statearr_9506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9503__$1,(3),inst_9494);
} else {
if((state_val_9504 === (3))){
var inst_9501 = (state_9503[(2)]);
var state_9503__$1 = state_9503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9503__$1,inst_9501);
} else {
return null;
}
}
}
});
return (function() {
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0 = (function (){
var statearr_9507 = [null,null,null,null,null,null,null,null,null];
(statearr_9507[(0)] = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__);

(statearr_9507[(1)] = (1));

return statearr_9507;
});
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1 = (function (state_9503){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9503);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9508){var ex__8650__auto__ = e9508;
var statearr_9509_9753 = state_9503;
(statearr_9509_9753[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9503[(4)]))){
var statearr_9510_9754 = state_9503;
(statearr_9510_9754[(1)] = cljs.core.first((state_9503[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9755 = state_9503;
state_9503 = G__9755;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__ = function(state_9503){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1.call(this,state_9503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0;
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9511 = f__8854__auto__();
(statearr_9511[(6)] = c__8853__auto__);

return statearr_9511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
});
chess.engine.worker_engine.worker_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.t_chess$engine$worker_engine9512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.worker_engine.t_chess$engine$worker_engine9512 = (function (meta9513){
this.meta9513 = meta9513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9514,meta9513__$1){
var self__ = this;
var _9514__$1 = this;
return (new chess.engine.worker_engine.t_chess$engine$worker_engine9512(meta9513__$1));
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9514){
var self__ = this;
var _9514__$1 = this;
return self__.meta9513;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9525){
var state_val_9526 = (state_9525[(1)]);
if((state_val_9526 === (1))){
var inst_9516 = (function (){return (function (form9515){
if((((form9515 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9515,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),board);
} else {
if((((form9515 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9515,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),move);
} else {
return form9515;

}
}
});
})();
var inst_9517 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null)));
var inst_9518 = clojure.walk.postwalk(inst_9516,inst_9517);
var inst_9519 = chess.engine.worker_engine.dispatch(inst_9518);
var state_9525__$1 = state_9525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9525__$1,(2),inst_9519);
} else {
if((state_val_9526 === (2))){
var inst_9521 = (state_9525[(2)]);
var inst_9522 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9521);
var inst_9523 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9522], 0));
var state_9525__$1 = state_9525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9525__$1,inst_9523);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9527 = [null,null,null,null,null,null,null];
(statearr_9527[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9527[(1)] = (1));

return statearr_9527;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9525){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9525);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9528){var ex__8650__auto__ = e9528;
var statearr_9529_9756 = state_9525;
(statearr_9529_9756[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9525[(4)]))){
var statearr_9530_9757 = state_9525;
(statearr_9530_9757[(1)] = cljs.core.first((state_9525[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9758 = state_9525;
state_9525 = G__9758;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9525){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9531 = f__8854__auto__();
(statearr_9531[(6)] = c__8853__auto__);

return statearr_9531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9542){
var state_val_9543 = (state_9542[(1)]);
if((state_val_9543 === (1))){
var inst_9533 = (function (){return (function (form9532){
if((((form9532 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9532,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),board);
} else {
if((((form9532 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9532,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),color);
} else {
return form9532;

}
}
});
})();
var inst_9534 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)));
var inst_9535 = clojure.walk.postwalk(inst_9533,inst_9534);
var inst_9536 = chess.engine.worker_engine.dispatch(inst_9535);
var state_9542__$1 = state_9542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9542__$1,(2),inst_9536);
} else {
if((state_val_9543 === (2))){
var inst_9538 = (state_9542[(2)]);
var inst_9539 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9538);
var inst_9540 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9539], 0));
var state_9542__$1 = state_9542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9542__$1,inst_9540);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9544 = [null,null,null,null,null,null,null];
(statearr_9544[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9544[(1)] = (1));

return statearr_9544;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9542){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9542);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9545){var ex__8650__auto__ = e9545;
var statearr_9546_9786 = state_9542;
(statearr_9546_9786[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9542[(4)]))){
var statearr_9547_9787 = state_9542;
(statearr_9547_9787[(1)] = cljs.core.first((state_9542[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9788 = state_9542;
state_9542 = G__9788;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9542){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9548 = f__8854__auto__();
(statearr_9548[(6)] = c__8853__auto__);

return statearr_9548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__8853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9562){
var state_val_9563 = (state_9562[(1)]);
if((state_val_9563 === (1))){
var inst_9549 = (function (){return (function (a,b){
return cljs.core.cons(b,a);
});
})();
var inst_9550 = cljs.core.PersistentVector.EMPTY;
var inst_9551 = (function (){return (function (move){
var c__8853__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8854__auto__ = (function (){var switch__8646__auto__ = (function (state_9574){
var state_val_9575 = (state_9574[(1)]);
if((state_val_9575 === (1))){
var inst_9565 = (function (){return (function (form9564){
if((((form9564 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9564,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),board);
} else {
if((((form9564 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9564,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__7087__7088__auto__){
if(cljs.core.seq_QMARK_(p1__7087__7088__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7087__7088__auto__);
} else {
return p1__7087__7088__auto__;
}
}),move);
} else {
return form9564;

}
}
});
})();
var inst_9566 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move-value","move-value",2011801283,null)], null)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move","move",-470352782,null),cljs.core.list(new cljs.core.Symbol(null,"move-value","move-value",2011801283,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null),(2))], null));
var inst_9567 = clojure.walk.postwalk(inst_9565,inst_9566);
var inst_9568 = chess.engine.worker_engine.dispatch(inst_9567);
var state_9574__$1 = state_9574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9574__$1,(2),inst_9568);
} else {
if((state_val_9575 === (2))){
var inst_9570 = (state_9574[(2)]);
var inst_9571 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9570);
var inst_9572 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9571], 0));
var state_9574__$1 = state_9574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9574__$1,inst_9572);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9576 = [null,null,null,null,null,null,null];
(statearr_9576[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9576[(1)] = (1));

return statearr_9576;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9574){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9574);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9577){var ex__8650__auto__ = e9577;
var statearr_9578_9806 = state_9574;
(statearr_9578_9806[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9574[(4)]))){
var statearr_9579_9814 = state_9574;
(statearr_9579_9814[(1)] = cljs.core.first((state_9574[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9834 = state_9574;
state_9574 = G__9834;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9574){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9580 = f__8854__auto__();
(statearr_9580[(6)] = c__8853__auto____$1);

return statearr_9580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto____$1;
});
})();
var inst_9552 = chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,board,color);
var inst_9553 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_9551,inst_9552);
var inst_9554 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_9553);
var inst_9555 = cljs.core.async.reduce(inst_9549,inst_9550,inst_9554);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9562__$1,(2),inst_9555);
} else {
if((state_val_9563 === (2))){
var inst_9557 = (state_9562[(2)]);
var inst_9558 = chess.utils.maxf(cljs.core.second,inst_9557);
var inst_9559 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["final result",inst_9558], 0));
var inst_9560 = cljs.core.first(inst_9559);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9562__$1,inst_9560);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9581 = [null,null,null,null,null,null,null];
(statearr_9581[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9581[(1)] = (1));

return statearr_9581;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9562){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9562);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9582){var ex__8650__auto__ = e9582;
var statearr_9583_9838 = state_9562;
(statearr_9583_9838[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9562[(4)]))){
var statearr_9584_9839 = state_9562;
(statearr_9584_9839[(1)] = cljs.core.first((state_9562[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9841 = state_9562;
state_9562 = G__9841;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9562){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8855__auto__ = (function (){var statearr_9585 = f__8854__auto__();
(statearr_9585[(6)] = c__8853__auto__);

return statearr_9585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8855__auto__);
}));

return c__8853__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9513","meta9513",-1800602503,null)], null);
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.cljs$lang$type = true);

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.cljs$lang$ctorStr = "chess.engine.worker-engine/t_chess$engine$worker_engine9512");

(chess.engine.worker_engine.t_chess$engine$worker_engine9512.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.worker-engine/t_chess$engine$worker_engine9512");
}));

/**
 * Positional factory function for chess.engine.worker-engine/t_chess$engine$worker_engine9512.
 */
chess.engine.worker_engine.__GT_t_chess$engine$worker_engine9512 = (function chess$engine$worker_engine$__GT_t_chess$engine$worker_engine9512(meta9513){
return (new chess.engine.worker_engine.t_chess$engine$worker_engine9512(meta9513));
});

}

return (new chess.engine.worker_engine.t_chess$engine$worker_engine9512(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.worker_engine.js.map
