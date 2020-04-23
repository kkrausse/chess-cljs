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
chess.worker._ = shadow.cljs.bootstrap.browser.init(chess.worker.c_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),chess.utils.asset_path("/js/bootstrap")], null),(function (){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_7901){
var state_val_7903 = (state_7901[(1)]);
if((state_val_7903 === (1))){
var state_7901__$1 = state_7901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7901__$1,(2),chess.worker.inited,true);
} else {
if((state_val_7903 === (2))){
var inst_7890 = (state_7901[(2)]);
var inst_7893 = cljs.core.async.close_BANG_(chess.worker.inited);
var state_7901__$1 = (function (){var statearr_7905 = state_7901;
(statearr_7905[(7)] = inst_7890);

return statearr_7905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7901__$1,inst_7893);
} else {
return null;
}
}
});
return (function() {
var chess$worker$state_machine__7407__auto__ = null;
var chess$worker$state_machine__7407__auto____0 = (function (){
var statearr_7906 = [null,null,null,null,null,null,null,null];
(statearr_7906[(0)] = chess$worker$state_machine__7407__auto__);

(statearr_7906[(1)] = (1));

return statearr_7906;
});
var chess$worker$state_machine__7407__auto____1 = (function (state_7901){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_7901);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e7909){if((e7909 instanceof Object)){
var ex__7410__auto__ = e7909;
var statearr_7911_8064 = state_7901;
(statearr_7911_8064[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8066 = state_7901;
state_7901 = G__8066;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$worker$state_machine__7407__auto__ = function(state_7901){
switch(arguments.length){
case 0:
return chess$worker$state_machine__7407__auto____0.call(this);
case 1:
return chess$worker$state_machine__7407__auto____1.call(this,state_7901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$state_machine__7407__auto____0;
chess$worker$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$state_machine__7407__auto____1;
return chess$worker$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_7913 = f__7472__auto__();
(statearr_7913[(6)] = c__7471__auto__);

return statearr_7913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));
}
chess.worker.init_worker = (function chess$worker$init_worker(handler){

return (self["onmessage"] = (function (e){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_7928){
var state_val_7929 = (state_7928[(1)]);
if((state_val_7929 === (1))){
var inst_7920 = e.data;
var inst_7921 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_7920);
var inst_7922 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_7921) : handler.call(null,inst_7921));
var state_7928__$1 = state_7928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7928__$1,(2),inst_7922);
} else {
if((state_val_7929 === (2))){
var inst_7924 = (state_7928[(2)]);
var inst_7925 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_7924], 0));
var inst_7926 = postMessage(inst_7925);
var state_7928__$1 = state_7928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7928__$1,inst_7926);
} else {
return null;
}
}
});
return (function() {
var chess$worker$init_worker_$_state_machine__7407__auto__ = null;
var chess$worker$init_worker_$_state_machine__7407__auto____0 = (function (){
var statearr_7962 = [null,null,null,null,null,null,null];
(statearr_7962[(0)] = chess$worker$init_worker_$_state_machine__7407__auto__);

(statearr_7962[(1)] = (1));

return statearr_7962;
});
var chess$worker$init_worker_$_state_machine__7407__auto____1 = (function (state_7928){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_7928);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e7976){if((e7976 instanceof Object)){
var ex__7410__auto__ = e7976;
var statearr_7983_8072 = state_7928;
(statearr_7983_8072[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8073 = state_7928;
state_7928 = G__8073;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$worker$init_worker_$_state_machine__7407__auto__ = function(state_7928){
switch(arguments.length){
case 0:
return chess$worker$init_worker_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$worker$init_worker_$_state_machine__7407__auto____1.call(this,state_7928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_worker_$_state_machine__7407__auto____0;
chess$worker$init_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_worker_$_state_machine__7407__auto____1;
return chess$worker$init_worker_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_7997 = f__7472__auto__();
(statearr_7997[(6)] = c__7471__auto__);

return statearr_7997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));
});
chess.worker.eval_form = (function chess$worker$eval_form(source){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(chess.worker.c_state,source,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,chess.worker.c_state)], null),(function (p1__8008_SHARP_){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8015){
var state_val_8016 = (state_8015[(1)]);
if((state_val_8016 === (1))){
var state_8015__$1 = state_8015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8015__$1,(2),c,p1__8008_SHARP_);
} else {
if((state_val_8016 === (2))){
var inst_8012 = (state_8015[(2)]);
var inst_8013 = cljs.core.async.close_BANG_(c);
var state_8015__$1 = (function (){var statearr_8019 = state_8015;
(statearr_8019[(7)] = inst_8012);

return statearr_8019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8015__$1,inst_8013);
} else {
return null;
}
}
});
return (function() {
var chess$worker$eval_form_$_state_machine__7407__auto__ = null;
var chess$worker$eval_form_$_state_machine__7407__auto____0 = (function (){
var statearr_8021 = [null,null,null,null,null,null,null,null];
(statearr_8021[(0)] = chess$worker$eval_form_$_state_machine__7407__auto__);

(statearr_8021[(1)] = (1));

return statearr_8021;
});
var chess$worker$eval_form_$_state_machine__7407__auto____1 = (function (state_8015){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8015);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8022){if((e8022 instanceof Object)){
var ex__7410__auto__ = e8022;
var statearr_8023_8081 = state_8015;
(statearr_8023_8081[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8084 = state_8015;
state_8015 = G__8084;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$worker$eval_form_$_state_machine__7407__auto__ = function(state_8015){
switch(arguments.length){
case 0:
return chess$worker$eval_form_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$worker$eval_form_$_state_machine__7407__auto____1.call(this,state_8015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$eval_form_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$eval_form_$_state_machine__7407__auto____0;
chess$worker$eval_form_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$eval_form_$_state_machine__7407__auto____1;
return chess$worker$eval_form_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8027 = f__7472__auto__();
(statearr_8027[(6)] = c__7471__auto__);

return statearr_8027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));

return c;
});
chess.worker.pf = (function chess$worker$pf(thing){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thing], 0));

return thing;
});
chess.worker.init = (function chess$worker$init(){
return chess.worker.init_worker((function (msg){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8037){
var state_val_8038 = (state_8037[(1)]);
if((state_val_8038 === (1))){
var state_8037__$1 = state_8037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8037__$1,(2),chess.worker.inited);
} else {
if((state_val_8038 === (2))){
var inst_8032 = (state_8037[(2)]);
var inst_8033 = chess.worker.eval_form(msg);
var state_8037__$1 = (function (){var statearr_8042 = state_8037;
(statearr_8042[(7)] = inst_8032);

return statearr_8042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8037__$1,(3),inst_8033);
} else {
if((state_val_8038 === (3))){
var inst_8035 = (state_8037[(2)]);
var state_8037__$1 = state_8037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8037__$1,inst_8035);
} else {
return null;
}
}
}
});
return (function() {
var chess$worker$init_$_state_machine__7407__auto__ = null;
var chess$worker$init_$_state_machine__7407__auto____0 = (function (){
var statearr_8045 = [null,null,null,null,null,null,null,null];
(statearr_8045[(0)] = chess$worker$init_$_state_machine__7407__auto__);

(statearr_8045[(1)] = (1));

return statearr_8045;
});
var chess$worker$init_$_state_machine__7407__auto____1 = (function (state_8037){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8037);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8047){if((e8047 instanceof Object)){
var ex__7410__auto__ = e8047;
var statearr_8050_8090 = state_8037;
(statearr_8050_8090[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8091 = state_8037;
state_8037 = G__8091;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$worker$init_$_state_machine__7407__auto__ = function(state_8037){
switch(arguments.length){
case 0:
return chess$worker$init_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$worker$init_$_state_machine__7407__auto____1.call(this,state_8037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$worker$init_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$worker$init_$_state_machine__7407__auto____0;
chess$worker$init_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$worker$init_$_state_machine__7407__auto____1;
return chess$worker$init_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8051 = f__7472__auto__();
(statearr_8051[(6)] = c__7471__auto__);

return statearr_8051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));
});

//# sourceMappingURL=chess.worker.js.map
