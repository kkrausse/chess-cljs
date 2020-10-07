goog.provide('chess.engine.worker_engine');

chess.engine.worker_engine.load_worker = (function chess$engine$worker_engine$load_worker(filename,id){

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var reply_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var worker = (new Worker(filename));
(worker["onmessage"] = (function (e){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9178){
var state_val_9179 = (state_9178[(1)]);
if((state_val_9179 === (1))){
var inst_9167 = e.data;
var inst_9168 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1(inst_9167) : chess.engine.worker_engine.printl.call(null,inst_9167));
var state_9178__$1 = state_9178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9178__$1,(2),reply_chan,inst_9168);
} else {
if((state_val_9179 === (2))){
var inst_9171 = (state_9178[(2)]);
var state_9178__$1 = state_9178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9178__$1,inst_9171);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0 = (function (){
var statearr_9182 = [null,null,null,null,null,null,null];
(statearr_9182[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__);

(statearr_9182[(1)] = (1));

return statearr_9182;
});
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1 = (function (state_9178){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9178);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9185){var ex__8650__auto__ = e9185;
var statearr_9187_9648 = state_9178;
(statearr_9187_9648[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9178[(4)]))){
var statearr_9190_9649 = state_9178;
(statearr_9190_9649[(1)] = cljs.core.first((state_9178[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9650 = state_9178;
state_9178 = G__9650;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = function(state_9178){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1.call(this,state_9178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9191 = f__8719__auto__();
(statearr_9191[(6)] = c__8718__auto__);

return statearr_9191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));

var c__8718__auto___9651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9287){
var state_val_9288 = (state_9287[(1)]);
if((state_val_9288 === (7))){
var state_9287__$1 = state_9287;
var statearr_9296_9652 = state_9287__$1;
(statearr_9296_9652[(2)] = false);

(statearr_9296_9652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (20))){
var inst_9231 = (state_9287[(7)]);
var inst_9254 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9231);
var state_9287__$1 = state_9287;
var statearr_9298_9653 = state_9287__$1;
(statearr_9298_9653[(2)] = inst_9254);

(statearr_9298_9653[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (27))){
var inst_9259 = (state_9287[(8)]);
var inst_9269 = (state_9287[(2)]);
var inst_9270 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_9269);
var state_9287__$1 = state_9287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9287__$1,(26),inst_9259,inst_9270);
} else {
if((state_val_9288 === (1))){
var state_9287__$1 = state_9287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9287__$1,(2),c);
} else {
if((state_val_9288 === (24))){
var state_9287__$1 = state_9287;
var statearr_9303_9654 = state_9287__$1;
(statearr_9303_9654[(2)] = null);

(statearr_9303_9654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (4))){
var state_9287__$1 = state_9287;
var statearr_9305_9655 = state_9287__$1;
(statearr_9305_9655[(2)] = false);

(statearr_9305_9655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (15))){
var state_9287__$1 = state_9287;
var statearr_9307_9656 = state_9287__$1;
(statearr_9307_9656[(2)] = false);

(statearr_9307_9656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (21))){
var inst_9231 = (state_9287[(7)]);
var state_9287__$1 = state_9287;
var statearr_9309_9657 = state_9287__$1;
(statearr_9309_9657[(2)] = inst_9231);

(statearr_9309_9657[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (13))){
var inst_9284 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9287__$1,inst_9284);
} else {
if((state_val_9288 === (22))){
var inst_9260 = (state_9287[(9)]);
var inst_9257 = (state_9287[(2)]);
var inst_9259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9257,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9260__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9257,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9261 = (inst_9260__$1 == null);
var inst_9262 = cljs.core.not(inst_9261);
var state_9287__$1 = (function (){var statearr_9319 = state_9287;
(statearr_9319[(9)] = inst_9260__$1);

(statearr_9319[(8)] = inst_9259);

return statearr_9319;
})();
if(inst_9262){
var statearr_9320_9662 = state_9287__$1;
(statearr_9320_9662[(1)] = (23));

} else {
var statearr_9321_9663 = state_9287__$1;
(statearr_9321_9663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (6))){
var state_9287__$1 = state_9287;
var statearr_9323_9664 = state_9287__$1;
(statearr_9323_9664[(2)] = true);

(statearr_9323_9664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (28))){
var inst_9277 = (state_9287[(2)]);
var inst_9231 = inst_9277;
var state_9287__$1 = (function (){var statearr_9324 = state_9287;
(statearr_9324[(7)] = inst_9231);

return statearr_9324;
})();
var statearr_9327_9674 = state_9287__$1;
(statearr_9327_9674[(2)] = null);

(statearr_9327_9674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (25))){
var inst_9281 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
var statearr_9330_9675 = state_9287__$1;
(statearr_9330_9675[(2)] = inst_9281);

(statearr_9330_9675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (17))){
var state_9287__$1 = state_9287;
var statearr_9332_9676 = state_9287__$1;
(statearr_9332_9676[(2)] = true);

(statearr_9332_9676[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (3))){
var inst_9197 = (state_9287[(10)]);
var inst_9212 = inst_9197.cljs$lang$protocol_mask$partition0$;
var inst_9213 = (inst_9212 & (64));
var inst_9214 = inst_9197.cljs$core$ISeq$;
var inst_9215 = (cljs.core.PROTOCOL_SENTINEL === inst_9214);
var inst_9216 = ((inst_9213) || (inst_9215));
var state_9287__$1 = state_9287;
if(cljs.core.truth_(inst_9216)){
var statearr_9335_9678 = state_9287__$1;
(statearr_9335_9678[(1)] = (6));

} else {
var statearr_9336_9679 = state_9287__$1;
(statearr_9336_9679[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (12))){
var inst_9231 = (state_9287[(7)]);
var inst_9236 = (inst_9231 == null);
var inst_9237 = cljs.core.not(inst_9236);
var state_9287__$1 = state_9287;
if(inst_9237){
var statearr_9337_9688 = state_9287__$1;
(statearr_9337_9688[(1)] = (14));

} else {
var statearr_9338_9692 = state_9287__$1;
(statearr_9338_9692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (2))){
var inst_9197 = (state_9287[(10)]);
var inst_9197__$1 = (state_9287[(2)]);
var inst_9209 = (inst_9197__$1 == null);
var inst_9210 = cljs.core.not(inst_9209);
var state_9287__$1 = (function (){var statearr_9339 = state_9287;
(statearr_9339[(10)] = inst_9197__$1);

return statearr_9339;
})();
if(inst_9210){
var statearr_9341_9695 = state_9287__$1;
(statearr_9341_9695[(1)] = (3));

} else {
var statearr_9342_9696 = state_9287__$1;
(statearr_9342_9696[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (23))){
var inst_9260 = (state_9287[(9)]);
var inst_9264 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," starting work") : chess.engine.worker_engine.printl.call(null,"worker ",id," starting work"));
var inst_9266 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9260], 0));
var inst_9267 = worker.postMessage(inst_9266);
var state_9287__$1 = (function (){var statearr_9343 = state_9287;
(statearr_9343[(11)] = inst_9267);

(statearr_9343[(12)] = inst_9264);

return statearr_9343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9287__$1,(27),reply_chan);
} else {
if((state_val_9288 === (19))){
var inst_9249 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
var statearr_9345_9698 = state_9287__$1;
(statearr_9345_9698[(2)] = inst_9249);

(statearr_9345_9698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (11))){
var inst_9197 = (state_9287[(10)]);
var inst_9228 = (state_9287[(2)]);
var inst_9229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9228,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9228,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9231 = inst_9197;
var state_9287__$1 = (function (){var statearr_9347 = state_9287;
(statearr_9347[(13)] = inst_9229);

(statearr_9347[(7)] = inst_9231);

(statearr_9347[(14)] = inst_9230);

return statearr_9347;
})();
var statearr_9349_9700 = state_9287__$1;
(statearr_9349_9700[(2)] = null);

(statearr_9349_9700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (9))){
var inst_9197 = (state_9287[(10)]);
var inst_9225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9197);
var state_9287__$1 = state_9287;
var statearr_9351_9702 = state_9287__$1;
(statearr_9351_9702[(2)] = inst_9225);

(statearr_9351_9702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (5))){
var inst_9223 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
if(cljs.core.truth_(inst_9223)){
var statearr_9352_9704 = state_9287__$1;
(statearr_9352_9704[(1)] = (9));

} else {
var statearr_9353_9706 = state_9287__$1;
(statearr_9353_9706[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (14))){
var inst_9231 = (state_9287[(7)]);
var inst_9240 = inst_9231.cljs$lang$protocol_mask$partition0$;
var inst_9241 = (inst_9240 & (64));
var inst_9243 = inst_9231.cljs$core$ISeq$;
var inst_9244 = (cljs.core.PROTOCOL_SENTINEL === inst_9243);
var inst_9245 = ((inst_9241) || (inst_9244));
var state_9287__$1 = state_9287;
if(cljs.core.truth_(inst_9245)){
var statearr_9354_9709 = state_9287__$1;
(statearr_9354_9709[(1)] = (17));

} else {
var statearr_9355_9710 = state_9287__$1;
(statearr_9355_9710[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (26))){
var inst_9259 = (state_9287[(8)]);
var inst_9272 = (state_9287[(2)]);
var inst_9273 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," finished work") : chess.engine.worker_engine.printl.call(null,"worker ",id," finished work"));
var inst_9275 = cljs.core.async.close_BANG_(inst_9259);
var state_9287__$1 = (function (){var statearr_9357 = state_9287;
(statearr_9357[(15)] = inst_9275);

(statearr_9357[(16)] = inst_9272);

(statearr_9357[(17)] = inst_9273);

return statearr_9357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9287__$1,(28),c);
} else {
if((state_val_9288 === (16))){
var inst_9252 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
if(cljs.core.truth_(inst_9252)){
var statearr_9360_9745 = state_9287__$1;
(statearr_9360_9745[(1)] = (20));

} else {
var statearr_9361_9746 = state_9287__$1;
(statearr_9361_9746[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (10))){
var inst_9197 = (state_9287[(10)]);
var state_9287__$1 = state_9287;
var statearr_9362_9749 = state_9287__$1;
(statearr_9362_9749[(2)] = inst_9197);

(statearr_9362_9749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (18))){
var state_9287__$1 = state_9287;
var statearr_9363_9750 = state_9287__$1;
(statearr_9363_9750[(2)] = false);

(statearr_9363_9750[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9288 === (8))){
var inst_9220 = (state_9287[(2)]);
var state_9287__$1 = state_9287;
var statearr_9364_9751 = state_9287__$1;
(statearr_9364_9751[(2)] = inst_9220);

(statearr_9364_9751[(1)] = (5));


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
var statearr_9365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9365[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__);

(statearr_9365[(1)] = (1));

return statearr_9365;
});
var chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1 = (function (state_9287){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9287);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9366){var ex__8650__auto__ = e9366;
var statearr_9367_9753 = state_9287;
(statearr_9367_9753[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9287[(4)]))){
var statearr_9369_9754 = state_9287;
(statearr_9369_9754[(1)] = cljs.core.first((state_9287[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9755 = state_9287;
state_9287 = G__9755;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__ = function(state_9287){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1.call(this,state_9287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9372 = f__8719__auto__();
(statearr_9372[(6)] = c__8718__auto___9651);

return statearr_9372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
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
var seq__9375_9758 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__9376_9759 = null;
var count__9377_9760 = (0);
var i__9378_9761 = (0);
while(true){
if((i__9378_9761 < count__9377_9760)){
var i_9762 = chunk__9376_9759.cljs$core$IIndexed$_nth$arity$2(null,i__9378_9761);
var c__8718__auto___9763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9763,i_9762){
return (function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = ((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9763,i_9762){
return (function (state_9409){
var state_val_9410 = (state_9409[(1)]);
if((state_val_9410 === (1))){
var inst_9405 = chess.engine.worker_engine.load_worker("js/worker.js",i_9762);
var state_9409__$1 = state_9409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9409__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_9405);
} else {
if((state_val_9410 === (2))){
var inst_9407 = (state_9409[(2)]);
var state_9409__$1 = state_9409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9409__$1,inst_9407);
} else {
return null;
}
}
});})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9763,i_9762))
;
return ((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,switch__8646__auto__,c__8718__auto___9763,i_9762){
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9411 = [null,null,null,null,null,null,null];
(statearr_9411[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9411[(1)] = (1));

return statearr_9411;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9409){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9409);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9412){var ex__8650__auto__ = e9412;
var statearr_9413_9767 = state_9409;
(statearr_9413_9767[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9409[(4)]))){
var statearr_9414_9769 = state_9409;
(statearr_9414_9769[(1)] = cljs.core.first((state_9409[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9772 = state_9409;
state_9409 = G__9772;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9409){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
;})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,switch__8646__auto__,c__8718__auto___9763,i_9762))
})();
var state__8720__auto__ = (function (){var statearr_9415 = f__8719__auto__();
(statearr_9415[(6)] = c__8718__auto___9763);

return statearr_9415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
});})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9763,i_9762))
);



var G__9774 = seq__9375_9758;
var G__9775 = chunk__9376_9759;
var G__9776 = count__9377_9760;
var G__9777 = (i__9378_9761 + (1));
seq__9375_9758 = G__9774;
chunk__9376_9759 = G__9775;
count__9377_9760 = G__9776;
i__9378_9761 = G__9777;
continue;
} else {
var temp__5735__auto___9778 = cljs.core.seq(seq__9375_9758);
if(temp__5735__auto___9778){
var seq__9375_9779__$1 = temp__5735__auto___9778;
if(cljs.core.chunked_seq_QMARK_(seq__9375_9779__$1)){
var c__4556__auto___9780 = cljs.core.chunk_first(seq__9375_9779__$1);
var G__9781 = cljs.core.chunk_rest(seq__9375_9779__$1);
var G__9782 = c__4556__auto___9780;
var G__9783 = cljs.core.count(c__4556__auto___9780);
var G__9784 = (0);
seq__9375_9758 = G__9781;
chunk__9376_9759 = G__9782;
count__9377_9760 = G__9783;
i__9378_9761 = G__9784;
continue;
} else {
var i_9786 = cljs.core.first(seq__9375_9779__$1);
var c__8718__auto___9787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778){
return (function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = ((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778){
return (function (state_9420){
var state_val_9421 = (state_9420[(1)]);
if((state_val_9421 === (1))){
var inst_9416 = chess.engine.worker_engine.load_worker("js/worker.js",i_9786);
var state_9420__$1 = state_9420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9420__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_9416);
} else {
if((state_val_9421 === (2))){
var inst_9418 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9420__$1,inst_9418);
} else {
return null;
}
}
});})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778))
;
return ((function (seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,switch__8646__auto__,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778){
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9422 = [null,null,null,null,null,null,null];
(statearr_9422[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9422[(1)] = (1));

return statearr_9422;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9420){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9420);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9423){var ex__8650__auto__ = e9423;
var statearr_9424_9790 = state_9420;
(statearr_9424_9790[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9420[(4)]))){
var statearr_9425_9791 = state_9420;
(statearr_9425_9791[(1)] = cljs.core.first((state_9420[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9792 = state_9420;
state_9420 = G__9792;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9420){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
;})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,switch__8646__auto__,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778))
})();
var state__8720__auto__ = (function (){var statearr_9426 = f__8719__auto__();
(statearr_9426[(6)] = c__8718__auto___9787);

return statearr_9426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
});})(seq__9375_9758,chunk__9376_9759,count__9377_9760,i__9378_9761,c__8718__auto___9787,i_9786,seq__9375_9779__$1,temp__5735__auto___9778))
);



var G__9793 = cljs.core.next(seq__9375_9779__$1);
var G__9794 = null;
var G__9795 = (0);
var G__9796 = (0);
seq__9375_9758 = G__9793;
chunk__9376_9759 = G__9794;
count__9377_9760 = G__9795;
i__9378_9761 = G__9796;
continue;
}
} else {
}
}
break;
}

var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9494){
var state_val_9495 = (state_9494[(1)]);
if((state_val_9495 === (7))){
var state_9494__$1 = state_9494;
var statearr_9496_9797 = state_9494__$1;
(statearr_9496_9797[(2)] = false);

(statearr_9496_9797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (20))){
var inst_9473 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
var statearr_9497_9798 = state_9494__$1;
(statearr_9497_9798[(2)] = inst_9473);

(statearr_9497_9798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (1))){
var state_9494__$1 = state_9494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9494__$1,(2),chess.engine.worker_engine.work_chan);
} else {
if((state_val_9495 === (24))){
var inst_9487 = (state_9494[(2)]);
var state_9494__$1 = (function (){var statearr_9498 = state_9494;
(statearr_9498[(7)] = inst_9487);

return statearr_9498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9494__$1,(25),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_9495 === (4))){
var state_9494__$1 = state_9494;
var statearr_9499_9801 = state_9494__$1;
(statearr_9499_9801[(2)] = false);

(statearr_9499_9801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (15))){
var inst_9457 = (state_9494[(8)]);
var inst_9465 = inst_9457.cljs$lang$protocol_mask$partition0$;
var inst_9466 = (inst_9465 & (64));
var inst_9467 = inst_9457.cljs$core$ISeq$;
var inst_9468 = (cljs.core.PROTOCOL_SENTINEL === inst_9467);
var inst_9469 = ((inst_9466) || (inst_9468));
var state_9494__$1 = state_9494;
if(cljs.core.truth_(inst_9469)){
var statearr_9500_9803 = state_9494__$1;
(statearr_9500_9803[(1)] = (18));

} else {
var statearr_9501_9804 = state_9494__$1;
(statearr_9501_9804[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (21))){
var inst_9457 = (state_9494[(8)]);
var inst_9478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9457);
var state_9494__$1 = state_9494;
var statearr_9502_9807 = state_9494__$1;
(statearr_9502_9807[(2)] = inst_9478);

(statearr_9502_9807[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (13))){
var inst_9457 = (state_9494[(8)]);
var inst_9462 = (inst_9457 == null);
var inst_9463 = cljs.core.not(inst_9462);
var state_9494__$1 = state_9494;
if(inst_9463){
var statearr_9503_9811 = state_9494__$1;
(statearr_9503_9811[(1)] = (15));

} else {
var statearr_9504_9813 = state_9494__$1;
(statearr_9504_9813[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (22))){
var inst_9457 = (state_9494[(8)]);
var state_9494__$1 = state_9494;
var statearr_9505_9818 = state_9494__$1;
(statearr_9505_9818[(2)] = inst_9457);

(statearr_9505_9818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (6))){
var state_9494__$1 = state_9494;
var statearr_9506_9836 = state_9494__$1;
(statearr_9506_9836[(2)] = true);

(statearr_9506_9836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (25))){
var inst_9487 = (state_9494[(7)]);
var inst_9489 = (state_9494[(2)]);
var inst_9457 = inst_9487;
var inst_9458 = inst_9489;
var state_9494__$1 = (function (){var statearr_9507 = state_9494;
(statearr_9507[(9)] = inst_9458);

(statearr_9507[(8)] = inst_9457);

return statearr_9507;
})();
var statearr_9508_9837 = state_9494__$1;
(statearr_9508_9837[(2)] = null);

(statearr_9508_9837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (17))){
var inst_9476 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
if(cljs.core.truth_(inst_9476)){
var statearr_9509_9838 = state_9494__$1;
(statearr_9509_9838[(1)] = (21));

} else {
var statearr_9510_9839 = state_9494__$1;
(statearr_9510_9839[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (3))){
var inst_9431 = (state_9494[(10)]);
var inst_9436 = inst_9431.cljs$lang$protocol_mask$partition0$;
var inst_9437 = (inst_9436 & (64));
var inst_9438 = inst_9431.cljs$core$ISeq$;
var inst_9439 = (cljs.core.PROTOCOL_SENTINEL === inst_9438);
var inst_9440 = ((inst_9437) || (inst_9439));
var state_9494__$1 = state_9494;
if(cljs.core.truth_(inst_9440)){
var statearr_9511_9842 = state_9494__$1;
(statearr_9511_9842[(1)] = (6));

} else {
var statearr_9512_9843 = state_9494__$1;
(statearr_9512_9843[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (12))){
var inst_9431 = (state_9494[(10)]);
var inst_9456 = (state_9494[(2)]);
var inst_9457 = inst_9431;
var inst_9458 = inst_9456;
var state_9494__$1 = (function (){var statearr_9513 = state_9494;
(statearr_9513[(9)] = inst_9458);

(statearr_9513[(8)] = inst_9457);

return statearr_9513;
})();
var statearr_9514_9846 = state_9494__$1;
(statearr_9514_9846[(2)] = null);

(statearr_9514_9846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (2))){
var inst_9431 = (state_9494[(10)]);
var inst_9431__$1 = (state_9494[(2)]);
var inst_9433 = (inst_9431__$1 == null);
var inst_9434 = cljs.core.not(inst_9433);
var state_9494__$1 = (function (){var statearr_9515 = state_9494;
(statearr_9515[(10)] = inst_9431__$1);

return statearr_9515;
})();
if(inst_9434){
var statearr_9516_9848 = state_9494__$1;
(statearr_9516_9848[(1)] = (3));

} else {
var statearr_9517_9849 = state_9494__$1;
(statearr_9517_9849[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (23))){
var inst_9458 = (state_9494[(9)]);
var inst_9481 = (state_9494[(2)]);
var inst_9482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9481,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9481,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_9484 = (chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2 ? chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2(inst_9458,inst_9483) : chess.engine.worker_engine.submit_command.call(null,inst_9458,inst_9483));
var inst_9485 = cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(inst_9484,inst_9482);
var state_9494__$1 = (function (){var statearr_9518 = state_9494;
(statearr_9518[(11)] = inst_9485);

return statearr_9518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9494__$1,(24),chess.engine.worker_engine.work_chan);
} else {
if((state_val_9495 === (19))){
var state_9494__$1 = state_9494;
var statearr_9519_9854 = state_9494__$1;
(statearr_9519_9854[(2)] = false);

(statearr_9519_9854[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (11))){
var inst_9452 = (state_9494[(2)]);
var inst_9453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9452,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_9454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9452,new cljs.core.Keyword(null,"form","form",-1624062471));
var state_9494__$1 = (function (){var statearr_9520 = state_9494;
(statearr_9520[(12)] = inst_9453);

(statearr_9520[(13)] = inst_9454);

return statearr_9520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9494__$1,(12),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_9495 === (9))){
var inst_9431 = (state_9494[(10)]);
var inst_9449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9431);
var state_9494__$1 = state_9494;
var statearr_9521_9858 = state_9494__$1;
(statearr_9521_9858[(2)] = inst_9449);

(statearr_9521_9858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (5))){
var inst_9447 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
if(cljs.core.truth_(inst_9447)){
var statearr_9522_9859 = state_9494__$1;
(statearr_9522_9859[(1)] = (9));

} else {
var statearr_9523_9861 = state_9494__$1;
(statearr_9523_9861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (14))){
var inst_9492 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9494__$1,inst_9492);
} else {
if((state_val_9495 === (16))){
var state_9494__$1 = state_9494;
var statearr_9524_9863 = state_9494__$1;
(statearr_9524_9863[(2)] = false);

(statearr_9524_9863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (10))){
var inst_9431 = (state_9494[(10)]);
var state_9494__$1 = state_9494;
var statearr_9525_9866 = state_9494__$1;
(statearr_9525_9866[(2)] = inst_9431);

(statearr_9525_9866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (18))){
var state_9494__$1 = state_9494;
var statearr_9526_9867 = state_9494__$1;
(statearr_9526_9867[(2)] = true);

(statearr_9526_9867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (8))){
var inst_9444 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
var statearr_9527_9869 = state_9494__$1;
(statearr_9527_9869[(2)] = inst_9444);

(statearr_9527_9869[(1)] = (5));


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
var statearr_9528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9528[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9528[(1)] = (1));

return statearr_9528;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9494){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9494);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9529){var ex__8650__auto__ = e9529;
var statearr_9530_9870 = state_9494;
(statearr_9530_9870[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9494[(4)]))){
var statearr_9531_9871 = state_9494;
(statearr_9531_9871[(1)] = cljs.core.first((state_9494[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9872 = state_9494;
state_9494 = G__9872;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9494){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9532 = f__8719__auto__();
(statearr_9532[(6)] = c__8718__auto__);

return statearr_9532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
})()
;
}
chess.engine.worker_engine.submit_command = (function chess$engine$worker_engine$submit_command(worker_chan,form){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9544){
var state_val_9545 = (state_9544[(1)]);
if((state_val_9545 === (1))){
var inst_9533 = (state_9544[(7)]);
var inst_9533__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9534 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_9535 = [inst_9533__$1,form];
var inst_9536 = cljs.core.PersistentHashMap.fromArrays(inst_9534,inst_9535);
var state_9544__$1 = (function (){var statearr_9546 = state_9544;
(statearr_9546[(7)] = inst_9533__$1);

return statearr_9546;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9544__$1,(2),worker_chan,inst_9536);
} else {
if((state_val_9545 === (2))){
var inst_9533 = (state_9544[(7)]);
var inst_9538 = (state_9544[(2)]);
var state_9544__$1 = (function (){var statearr_9547 = state_9544;
(statearr_9547[(8)] = inst_9538);

return statearr_9547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9544__$1,(3),inst_9533);
} else {
if((state_val_9545 === (3))){
var inst_9540 = (state_9544[(2)]);
var state_9544__$1 = (function (){var statearr_9548 = state_9544;
(statearr_9548[(9)] = inst_9540);

return statearr_9548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9544__$1,(4),chess.engine.worker_engine.worker_chan_chan,worker_chan);
} else {
if((state_val_9545 === (4))){
var inst_9540 = (state_9544[(9)]);
var inst_9542 = (state_9544[(2)]);
var state_9544__$1 = (function (){var statearr_9549 = state_9544;
(statearr_9549[(10)] = inst_9542);

return statearr_9549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9544__$1,inst_9540);
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
var statearr_9550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9550[(0)] = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__);

(statearr_9550[(1)] = (1));

return statearr_9550;
});
var chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1 = (function (state_9544){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9544);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9551){var ex__8650__auto__ = e9551;
var statearr_9552_9883 = state_9544;
(statearr_9552_9883[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9544[(4)]))){
var statearr_9553_9884 = state_9544;
(statearr_9553_9884[(1)] = cljs.core.first((state_9544[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9885 = state_9544;
state_9544 = G__9885;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__ = function(state_9544){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1.call(this,state_9544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____0;
chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$submit_command_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$submit_command_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9554 = f__8719__auto__();
(statearr_9554[(6)] = c__8718__auto__);

return statearr_9554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
});
chess.engine.worker_engine.printl = (function chess$engine$worker_engine$printl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9890 = arguments.length;
var i__4737__auto___9891 = (0);
while(true){
if((i__4737__auto___9891 < len__4736__auto___9890)){
args__4742__auto__.push((arguments[i__4737__auto___9891]));

var G__9892 = (i__4737__auto___9891 + (1));
i__4737__auto___9891 = G__9892;
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
(chess.engine.worker_engine.printl.cljs$lang$applyTo = (function (seq9555){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9555));
}));

chess.engine.worker_engine.dispatch = (function chess$engine$worker_engine$dispatch(literal){
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9565){
var state_val_9566 = (state_9565[(1)]);
if((state_val_9566 === (1))){
var inst_9556 = (state_9565[(7)]);
var inst_9556__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9557 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_9558 = [inst_9556__$1,literal];
var inst_9559 = cljs.core.PersistentHashMap.fromArrays(inst_9557,inst_9558);
var state_9565__$1 = (function (){var statearr_9567 = state_9565;
(statearr_9567[(7)] = inst_9556__$1);

return statearr_9567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9565__$1,(2),chess.engine.worker_engine.work_chan,inst_9559);
} else {
if((state_val_9566 === (2))){
var inst_9556 = (state_9565[(7)]);
var inst_9561 = (state_9565[(2)]);
var state_9565__$1 = (function (){var statearr_9568 = state_9565;
(statearr_9568[(8)] = inst_9561);

return statearr_9568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9565__$1,(3),inst_9556);
} else {
if((state_val_9566 === (3))){
var inst_9563 = (state_9565[(2)]);
var state_9565__$1 = state_9565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9565__$1,inst_9563);
} else {
return null;
}
}
}
});
return (function() {
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__ = null;
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0 = (function (){
var statearr_9569 = [null,null,null,null,null,null,null,null,null];
(statearr_9569[(0)] = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__);

(statearr_9569[(1)] = (1));

return statearr_9569;
});
var chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1 = (function (state_9565){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9565);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9570){var ex__8650__auto__ = e9570;
var statearr_9571_9901 = state_9565;
(statearr_9571_9901[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9565[(4)]))){
var statearr_9572_9902 = state_9565;
(statearr_9572_9902[(1)] = cljs.core.first((state_9565[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9903 = state_9565;
state_9565 = G__9903;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__ = function(state_9565){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1.call(this,state_9565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____0;
chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$dispatch_$_state_machine__8647__auto____1;
return chess$engine$worker_engine$dispatch_$_state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9573 = f__8719__auto__();
(statearr_9573[(6)] = c__8718__auto__);

return statearr_9573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
});
chess.engine.worker_engine.worker_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.t_chess$engine$worker_engine9574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.worker_engine.t_chess$engine$worker_engine9574 = (function (meta9575){
this.meta9575 = meta9575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9576,meta9575__$1){
var self__ = this;
var _9576__$1 = this;
return (new chess.engine.worker_engine.t_chess$engine$worker_engine9574(meta9575__$1));
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9576){
var self__ = this;
var _9576__$1 = this;
return self__.meta9575;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9587){
var state_val_9588 = (state_9587[(1)]);
if((state_val_9588 === (1))){
var inst_9578 = (function (){return (function (form9577){
if((((form9577 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9577,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),board);
} else {
if((((form9577 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9577,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),move);
} else {
return form9577;

}
}
});
})();
var inst_9579 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null)));
var inst_9580 = clojure.walk.postwalk(inst_9578,inst_9579);
var inst_9581 = chess.engine.worker_engine.dispatch(inst_9580);
var state_9587__$1 = state_9587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9587__$1,(2),inst_9581);
} else {
if((state_val_9588 === (2))){
var inst_9583 = (state_9587[(2)]);
var inst_9584 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9583);
var inst_9585 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9584], 0));
var state_9587__$1 = state_9587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9587__$1,inst_9585);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9589 = [null,null,null,null,null,null,null];
(statearr_9589[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9589[(1)] = (1));

return statearr_9589;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9587){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9587);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9590){var ex__8650__auto__ = e9590;
var statearr_9591_9912 = state_9587;
(statearr_9591_9912[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9587[(4)]))){
var statearr_9592_9913 = state_9587;
(statearr_9592_9913[(1)] = cljs.core.first((state_9587[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9914 = state_9587;
state_9587 = G__9914;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9587){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9593 = f__8719__auto__();
(statearr_9593[(6)] = c__8718__auto__);

return statearr_9593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9604){
var state_val_9605 = (state_9604[(1)]);
if((state_val_9605 === (1))){
var inst_9595 = (function (){return (function (form9594){
if((((form9594 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9594,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),board);
} else {
if((((form9594 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9594,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),color);
} else {
return form9594;

}
}
});
})();
var inst_9596 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)));
var inst_9597 = clojure.walk.postwalk(inst_9595,inst_9596);
var inst_9598 = chess.engine.worker_engine.dispatch(inst_9597);
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9604__$1,(2),inst_9598);
} else {
if((state_val_9605 === (2))){
var inst_9600 = (state_9604[(2)]);
var inst_9601 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9600);
var inst_9602 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9601], 0));
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9604__$1,inst_9602);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9606 = [null,null,null,null,null,null,null];
(statearr_9606[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9606[(1)] = (1));

return statearr_9606;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9604){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9604);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9607){var ex__8650__auto__ = e9607;
var statearr_9608_9918 = state_9604;
(statearr_9608_9918[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9604[(4)]))){
var statearr_9609_9920 = state_9604;
(statearr_9609_9920[(1)] = cljs.core.first((state_9604[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9922 = state_9604;
state_9604 = G__9922;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9604){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9610 = f__8719__auto__();
(statearr_9610[(6)] = c__8718__auto__);

return statearr_9610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__8718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9624){
var state_val_9625 = (state_9624[(1)]);
if((state_val_9625 === (1))){
var inst_9611 = (function (){return (function (a,b){
return cljs.core.cons(b,a);
});
})();
var inst_9612 = cljs.core.PersistentVector.EMPTY;
var inst_9613 = (function (){return (function (move){
var c__8718__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8719__auto__ = (function (){var switch__8646__auto__ = (function (state_9636){
var state_val_9637 = (state_9636[(1)]);
if((state_val_9637 === (1))){
var inst_9627 = (function (){return (function (form9626){
if((((form9626 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9626,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),board);
} else {
if((((form9626 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form9626,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__7211__7212__auto__){
if(cljs.core.seq_QMARK_(p1__7211__7212__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__7211__7212__auto__);
} else {
return p1__7211__7212__auto__;
}
}),move);
} else {
return form9626;

}
}
});
})();
var inst_9628 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move-value","move-value",2011801283,null)], null)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move","move",-470352782,null),cljs.core.list(new cljs.core.Symbol(null,"move-value","move-value",2011801283,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null),(2))], null));
var inst_9629 = clojure.walk.postwalk(inst_9627,inst_9628);
var inst_9630 = chess.engine.worker_engine.dispatch(inst_9629);
var state_9636__$1 = state_9636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9636__$1,(2),inst_9630);
} else {
if((state_val_9637 === (2))){
var inst_9632 = (state_9636[(2)]);
var inst_9633 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_9632);
var inst_9634 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9633], 0));
var state_9636__$1 = state_9636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9636__$1,inst_9634);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9638 = [null,null,null,null,null,null,null];
(statearr_9638[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9638[(1)] = (1));

return statearr_9638;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9636){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9636);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9639){var ex__8650__auto__ = e9639;
var statearr_9640_9929 = state_9636;
(statearr_9640_9929[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9636[(4)]))){
var statearr_9641_9930 = state_9636;
(statearr_9641_9930[(1)] = cljs.core.first((state_9636[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9931 = state_9636;
state_9636 = G__9931;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9636){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9642 = f__8719__auto__();
(statearr_9642[(6)] = c__8718__auto____$1);

return statearr_9642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto____$1;
});
})();
var inst_9614 = chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,board,color);
var inst_9615 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_9613,inst_9614);
var inst_9616 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_9615);
var inst_9617 = cljs.core.async.reduce(inst_9611,inst_9612,inst_9616);
var state_9624__$1 = state_9624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9624__$1,(2),inst_9617);
} else {
if((state_val_9625 === (2))){
var inst_9619 = (state_9624[(2)]);
var inst_9620 = chess.utils.maxf(cljs.core.second,inst_9619);
var inst_9621 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["final result",inst_9620], 0));
var inst_9622 = cljs.core.first(inst_9621);
var state_9624__$1 = state_9624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9624__$1,inst_9622);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__8647__auto__ = null;
var chess$engine$worker_engine$state_machine__8647__auto____0 = (function (){
var statearr_9643 = [null,null,null,null,null,null,null];
(statearr_9643[(0)] = chess$engine$worker_engine$state_machine__8647__auto__);

(statearr_9643[(1)] = (1));

return statearr_9643;
});
var chess$engine$worker_engine$state_machine__8647__auto____1 = (function (state_9624){
while(true){
var ret_value__8648__auto__ = (function (){try{while(true){
var result__8649__auto__ = switch__8646__auto__(state_9624);
if(cljs.core.keyword_identical_QMARK_(result__8649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8649__auto__;
}
break;
}
}catch (e9644){var ex__8650__auto__ = e9644;
var statearr_9645_9932 = state_9624;
(statearr_9645_9932[(2)] = ex__8650__auto__);


if(cljs.core.seq((state_9624[(4)]))){
var statearr_9646_9933 = state_9624;
(statearr_9646_9933[(1)] = cljs.core.first((state_9624[(4)])));

} else {
throw ex__8650__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9934 = state_9624;
state_9624 = G__9934;
continue;
} else {
return ret_value__8648__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__8647__auto__ = function(state_9624){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__8647__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__8647__auto____1.call(this,state_9624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__8647__auto____0;
chess$engine$worker_engine$state_machine__8647__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__8647__auto____1;
return chess$engine$worker_engine$state_machine__8647__auto__;
})()
})();
var state__8720__auto__ = (function (){var statearr_9647 = f__8719__auto__();
(statearr_9647[(6)] = c__8718__auto__);

return statearr_9647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8720__auto__);
}));

return c__8718__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9575","meta9575",1797530161,null)], null);
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.cljs$lang$type = true);

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.cljs$lang$ctorStr = "chess.engine.worker-engine/t_chess$engine$worker_engine9574");

(chess.engine.worker_engine.t_chess$engine$worker_engine9574.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"chess.engine.worker-engine/t_chess$engine$worker_engine9574");
}));

/**
 * Positional factory function for chess.engine.worker-engine/t_chess$engine$worker_engine9574.
 */
chess.engine.worker_engine.__GT_t_chess$engine$worker_engine9574 = (function chess$engine$worker_engine$__GT_t_chess$engine$worker_engine9574(meta9575){
return (new chess.engine.worker_engine.t_chess$engine$worker_engine9574(meta9575));
});

}

return (new chess.engine.worker_engine.t_chess$engine$worker_engine9574(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.worker_engine.js.map
