goog.provide('chess.worker');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('shadow.cljs.bootstrap.browser');
goog.require('chess.engine.core');
goog.require('chess.engine.local_engine');
goog.require('cljs.core.async');
goog.require('chess.utils');
goog.require('cljs.reader');
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
chess.worker._ = shadow.cljs.bootstrap.browser.init(chess.worker.c_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap"], null),(function (){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (1))){
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30182__$1,(2),chess.worker.inited,true);
} else {
if((state_val_30183 === (2))){
var inst_30179 = (state_30182[(2)]);
var inst_30180 = cljs.core.async.close_BANG_(chess.worker.inited);
var state_30182__$1 = (function (){var statearr_30184 = state_30182;
(statearr_30184[(7)] = inst_30179);

return statearr_30184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30182__$1,inst_30180);
} else {
return null;
}
}
});
return (function() {
var chess$worker$state_machine__27094__auto__ = null;
var chess$worker$state_machine__27094__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null,null];
(statearr_30185[(0)] = chess$worker$state_machine__27094__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var chess$worker$state_machine__27094__auto____1 = (function (state_30182){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_30182);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__27097__auto__ = e30186;
var statearr_30187_30228 = state_30182;
(statearr_30187_30228[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30182;
state_30182 = G__30229;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$worker$state_machine__27094__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return chess$worker$state_machine__27094__auto____0.call(this);
case 1:
return chess$worker$state_machine__27094__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$state_machine__27094__auto____0;
chess$worker$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$state_machine__27094__auto____1;
return chess$worker$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_30188 = f__27117__auto__();
(statearr_30188[(6)] = c__27116__auto__);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));
}
chess.worker.init_worker = (function chess$worker$init_worker(handler){

return (self["onmessage"] = (function (e){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_30197){
var state_val_30198 = (state_30197[(1)]);
if((state_val_30198 === (1))){
var inst_30189 = e.data;
var inst_30190 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_30189);
var inst_30191 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_30190) : handler.call(null,inst_30190));
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30197__$1,(2),inst_30191);
} else {
if((state_val_30198 === (2))){
var inst_30193 = (state_30197[(2)]);
var inst_30194 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30193], 0));
var inst_30195 = postMessage(inst_30194);
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30197__$1,inst_30195);
} else {
return null;
}
}
});
return (function() {
var chess$worker$init_worker_$_state_machine__27094__auto__ = null;
var chess$worker$init_worker_$_state_machine__27094__auto____0 = (function (){
var statearr_30199 = [null,null,null,null,null,null,null];
(statearr_30199[(0)] = chess$worker$init_worker_$_state_machine__27094__auto__);

(statearr_30199[(1)] = (1));

return statearr_30199;
});
var chess$worker$init_worker_$_state_machine__27094__auto____1 = (function (state_30197){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_30197);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e30200){if((e30200 instanceof Object)){
var ex__27097__auto__ = e30200;
var statearr_30201_30230 = state_30197;
(statearr_30201_30230[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30231 = state_30197;
state_30197 = G__30231;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$worker$init_worker_$_state_machine__27094__auto__ = function(state_30197){
switch(arguments.length){
case 0:
return chess$worker$init_worker_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$worker$init_worker_$_state_machine__27094__auto____1.call(this,state_30197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_worker_$_state_machine__27094__auto____0;
chess$worker$init_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_worker_$_state_machine__27094__auto____1;
return chess$worker$init_worker_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_30202 = f__27117__auto__();
(statearr_30202[(6)] = c__27116__auto__);

return statearr_30202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));
});
chess.worker.eval_form = (function chess$worker$eval_form(source){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(chess.worker.c_state,source,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,chess.worker.c_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("chess.user")], null),(function (p1__30203_SHARP_){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (1))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30208__$1,(2),c,p1__30203_SHARP_);
} else {
if((state_val_30209 === (2))){
var inst_30205 = (state_30208[(2)]);
var inst_30206 = cljs.core.async.close_BANG_(c);
var state_30208__$1 = (function (){var statearr_30210 = state_30208;
(statearr_30210[(7)] = inst_30205);

return statearr_30210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30208__$1,inst_30206);
} else {
return null;
}
}
});
return (function() {
var chess$worker$eval_form_$_state_machine__27094__auto__ = null;
var chess$worker$eval_form_$_state_machine__27094__auto____0 = (function (){
var statearr_30211 = [null,null,null,null,null,null,null,null];
(statearr_30211[(0)] = chess$worker$eval_form_$_state_machine__27094__auto__);

(statearr_30211[(1)] = (1));

return statearr_30211;
});
var chess$worker$eval_form_$_state_machine__27094__auto____1 = (function (state_30208){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_30208);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e30212){if((e30212 instanceof Object)){
var ex__27097__auto__ = e30212;
var statearr_30213_30232 = state_30208;
(statearr_30213_30232[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30233 = state_30208;
state_30208 = G__30233;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$worker$eval_form_$_state_machine__27094__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return chess$worker$eval_form_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$worker$eval_form_$_state_machine__27094__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$eval_form_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$eval_form_$_state_machine__27094__auto____0;
chess$worker$eval_form_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$eval_form_$_state_machine__27094__auto____1;
return chess$worker$eval_form_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_30214 = f__27117__auto__();
(statearr_30214[(6)] = c__27116__auto__);

return statearr_30214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));

return c;
});
chess.worker.pf = (function chess$worker$pf(thing){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thing], 0));

return thing;
});
chess.worker.init = (function chess$worker$init(){
return chess.worker.init_worker((function (msg){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_30221){
var state_val_30222 = (state_30221[(1)]);
if((state_val_30222 === (1))){
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30221__$1,(2),chess.worker.inited);
} else {
if((state_val_30222 === (2))){
var inst_30216 = (state_30221[(2)]);
var inst_30217 = chess.worker.eval_form(msg);
var state_30221__$1 = (function (){var statearr_30223 = state_30221;
(statearr_30223[(7)] = inst_30216);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30221__$1,(3),inst_30217);
} else {
if((state_val_30222 === (3))){
var inst_30219 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30221__$1,inst_30219);
} else {
return null;
}
}
}
});
return (function() {
var chess$worker$init_$_state_machine__27094__auto__ = null;
var chess$worker$init_$_state_machine__27094__auto____0 = (function (){
var statearr_30224 = [null,null,null,null,null,null,null,null];
(statearr_30224[(0)] = chess$worker$init_$_state_machine__27094__auto__);

(statearr_30224[(1)] = (1));

return statearr_30224;
});
var chess$worker$init_$_state_machine__27094__auto____1 = (function (state_30221){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_30221);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e30225){if((e30225 instanceof Object)){
var ex__27097__auto__ = e30225;
var statearr_30226_30234 = state_30221;
(statearr_30226_30234[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30235 = state_30221;
state_30221 = G__30235;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$worker$init_$_state_machine__27094__auto__ = function(state_30221){
switch(arguments.length){
case 0:
return chess$worker$init_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$worker$init_$_state_machine__27094__auto____1.call(this,state_30221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_$_state_machine__27094__auto____0;
chess$worker$init_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_$_state_machine__27094__auto____1;
return chess$worker$init_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_30227 = f__27117__auto__();
(statearr_30227[(6)] = c__27116__auto__);

return statearr_30227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));
});

//# sourceMappingURL=chess.worker.js.map
