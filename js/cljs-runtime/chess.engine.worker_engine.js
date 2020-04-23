goog.provide('chess.engine.worker_engine');
goog.require('cljs.core');
goog.require('chess.engine.core');
goog.require('cljs.core.async');
goog.require('chess.engine.local_engine');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('chess.utils');

chess.engine.worker_engine.load_worker = (function chess$engine$worker_engine$load_worker(filename,id){

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var reply_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var worker = (new Worker(filename));
(worker["onmessage"] = (function (e){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_7902){
var state_val_7904 = (state_7902[(1)]);
if((state_val_7904 === (1))){
var inst_7891 = e.data;
var inst_7892 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1(inst_7891) : chess.engine.worker_engine.printl.call(null,inst_7891));
var state_7902__$1 = state_7902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7902__$1,(2),reply_chan,inst_7892);
} else {
if((state_val_7904 === (2))){
var inst_7896 = (state_7902[(2)]);
var state_7902__$1 = state_7902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7902__$1,inst_7896);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0 = (function (){
var statearr_7907 = [null,null,null,null,null,null,null];
(statearr_7907[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__);

(statearr_7907[(1)] = (1));

return statearr_7907;
});
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1 = (function (state_7902){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_7902);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e7910){if((e7910 instanceof Object)){
var ex__7410__auto__ = e7910;
var statearr_7912_8355 = state_7902;
(statearr_7912_8355[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8356 = state_7902;
state_7902 = G__8356;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__ = function(state_7902){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1.call(this,state_7902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_7914 = f__7472__auto__();
(statearr_7914[(6)] = c__7471__auto__);

return statearr_7914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));

var c__7471__auto___8357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8009){
var state_val_8010 = (state_8009[(1)]);
if((state_val_8010 === (7))){
var state_8009__$1 = state_8009;
var statearr_8018_8358 = state_8009__$1;
(statearr_8018_8358[(2)] = false);

(statearr_8018_8358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (20))){
var inst_7955 = (state_8009[(7)]);
var inst_7977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7955);
var state_8009__$1 = state_8009;
var statearr_8020_8359 = state_8009__$1;
(statearr_8020_8359[(2)] = inst_7977);

(statearr_8020_8359[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (27))){
var inst_7981 = (state_8009[(8)]);
var inst_7991 = (state_8009[(2)]);
var inst_7992 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_7991);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8009__$1,(26),inst_7981,inst_7992);
} else {
if((state_val_8010 === (1))){
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(2),c);
} else {
if((state_val_8010 === (24))){
var state_8009__$1 = state_8009;
var statearr_8024_8360 = state_8009__$1;
(statearr_8024_8360[(2)] = null);

(statearr_8024_8360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (4))){
var state_8009__$1 = state_8009;
var statearr_8026_8361 = state_8009__$1;
(statearr_8026_8361[(2)] = false);

(statearr_8026_8361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (15))){
var state_8009__$1 = state_8009;
var statearr_8028_8362 = state_8009__$1;
(statearr_8028_8362[(2)] = false);

(statearr_8028_8362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (21))){
var inst_7955 = (state_8009[(7)]);
var state_8009__$1 = state_8009;
var statearr_8030_8363 = state_8009__$1;
(statearr_8030_8363[(2)] = inst_7955);

(statearr_8030_8363[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (13))){
var inst_8005 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8009__$1,inst_8005);
} else {
if((state_val_8010 === (22))){
var inst_7982 = (state_8009[(9)]);
var inst_7980 = (state_8009[(2)]);
var inst_7981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7980,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_7982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7980,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_7984 = (inst_7982__$1 == null);
var inst_7985 = cljs.core.not(inst_7984);
var state_8009__$1 = (function (){var statearr_8039 = state_8009;
(statearr_8039[(9)] = inst_7982__$1);

(statearr_8039[(8)] = inst_7981);

return statearr_8039;
})();
if(inst_7985){
var statearr_8040_8364 = state_8009__$1;
(statearr_8040_8364[(1)] = (23));

} else {
var statearr_8041_8365 = state_8009__$1;
(statearr_8041_8365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (6))){
var state_8009__$1 = state_8009;
var statearr_8043_8366 = state_8009__$1;
(statearr_8043_8366[(2)] = true);

(statearr_8043_8366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (28))){
var inst_7999 = (state_8009[(2)]);
var inst_7955 = inst_7999;
var state_8009__$1 = (function (){var statearr_8046 = state_8009;
(statearr_8046[(7)] = inst_7955);

return statearr_8046;
})();
var statearr_8048_8367 = state_8009__$1;
(statearr_8048_8367[(2)] = null);

(statearr_8048_8367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (25))){
var inst_8003 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8052_8368 = state_8009__$1;
(statearr_8052_8368[(2)] = inst_8003);

(statearr_8052_8368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (17))){
var state_8009__$1 = state_8009;
var statearr_8053_8369 = state_8009__$1;
(statearr_8053_8369[(2)] = true);

(statearr_8053_8369[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (3))){
var inst_7919 = (state_8009[(10)]);
var inst_7935 = inst_7919.cljs$lang$protocol_mask$partition0$;
var inst_7936 = (inst_7935 & (64));
var inst_7937 = inst_7919.cljs$core$ISeq$;
var inst_7938 = (cljs.core.PROTOCOL_SENTINEL === inst_7937);
var inst_7939 = ((inst_7936) || (inst_7938));
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7939)){
var statearr_8055_8370 = state_8009__$1;
(statearr_8055_8370[(1)] = (6));

} else {
var statearr_8056_8371 = state_8009__$1;
(statearr_8056_8371[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (12))){
var inst_7955 = (state_8009[(7)]);
var inst_7959 = (inst_7955 == null);
var inst_7960 = cljs.core.not(inst_7959);
var state_8009__$1 = state_8009;
if(inst_7960){
var statearr_8057_8372 = state_8009__$1;
(statearr_8057_8372[(1)] = (14));

} else {
var statearr_8058_8373 = state_8009__$1;
(statearr_8058_8373[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (2))){
var inst_7919 = (state_8009[(10)]);
var inst_7919__$1 = (state_8009[(2)]);
var inst_7931 = (inst_7919__$1 == null);
var inst_7932 = cljs.core.not(inst_7931);
var state_8009__$1 = (function (){var statearr_8060 = state_8009;
(statearr_8060[(10)] = inst_7919__$1);

return statearr_8060;
})();
if(inst_7932){
var statearr_8061_8374 = state_8009__$1;
(statearr_8061_8374[(1)] = (3));

} else {
var statearr_8062_8375 = state_8009__$1;
(statearr_8062_8375[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (23))){
var inst_7982 = (state_8009[(9)]);
var inst_7987 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," starting work") : chess.engine.worker_engine.printl.call(null,"worker ",id," starting work"));
var inst_7988 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_7982], 0));
var inst_7989 = worker.postMessage(inst_7988);
var state_8009__$1 = (function (){var statearr_8063 = state_8009;
(statearr_8063[(11)] = inst_7987);

(statearr_8063[(12)] = inst_7989);

return statearr_8063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(27),reply_chan);
} else {
if((state_val_8010 === (19))){
var inst_7971 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8065_8376 = state_8009__$1;
(statearr_8065_8376[(2)] = inst_7971);

(statearr_8065_8376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (11))){
var inst_7919 = (state_8009[(10)]);
var inst_7951 = (state_8009[(2)]);
var inst_7952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7951,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_7953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7951,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_7955 = inst_7919;
var state_8009__$1 = (function (){var statearr_8067 = state_8009;
(statearr_8067[(13)] = inst_7953);

(statearr_8067[(7)] = inst_7955);

(statearr_8067[(14)] = inst_7952);

return statearr_8067;
})();
var statearr_8068_8377 = state_8009__$1;
(statearr_8068_8377[(2)] = null);

(statearr_8068_8377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (9))){
var inst_7919 = (state_8009[(10)]);
var inst_7948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7919);
var state_8009__$1 = state_8009;
var statearr_8069_8378 = state_8009__$1;
(statearr_8069_8378[(2)] = inst_7948);

(statearr_8069_8378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (5))){
var inst_7946 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7946)){
var statearr_8070_8379 = state_8009__$1;
(statearr_8070_8379[(1)] = (9));

} else {
var statearr_8071_8380 = state_8009__$1;
(statearr_8071_8380[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (14))){
var inst_7955 = (state_8009[(7)]);
var inst_7963 = inst_7955.cljs$lang$protocol_mask$partition0$;
var inst_7964 = (inst_7963 & (64));
var inst_7965 = inst_7955.cljs$core$ISeq$;
var inst_7966 = (cljs.core.PROTOCOL_SENTINEL === inst_7965);
var inst_7967 = ((inst_7964) || (inst_7966));
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7967)){
var statearr_8074_8381 = state_8009__$1;
(statearr_8074_8381[(1)] = (17));

} else {
var statearr_8075_8382 = state_8009__$1;
(statearr_8075_8382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (26))){
var inst_7981 = (state_8009[(8)]);
var inst_7994 = (state_8009[(2)]);
var inst_7995 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," finished work") : chess.engine.worker_engine.printl.call(null,"worker ",id," finished work"));
var inst_7996 = cljs.core.async.close_BANG_(inst_7981);
var state_8009__$1 = (function (){var statearr_8076 = state_8009;
(statearr_8076[(15)] = inst_7994);

(statearr_8076[(16)] = inst_7995);

(statearr_8076[(17)] = inst_7996);

return statearr_8076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(28),c);
} else {
if((state_val_8010 === (16))){
var inst_7974 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7974)){
var statearr_8077_8392 = state_8009__$1;
(statearr_8077_8392[(1)] = (20));

} else {
var statearr_8078_8393 = state_8009__$1;
(statearr_8078_8393[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (10))){
var inst_7919 = (state_8009[(10)]);
var state_8009__$1 = state_8009;
var statearr_8079_8394 = state_8009__$1;
(statearr_8079_8394[(2)] = inst_7919);

(statearr_8079_8394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (18))){
var state_8009__$1 = state_8009;
var statearr_8080_8395 = state_8009__$1;
(statearr_8080_8395[(2)] = false);

(statearr_8080_8395[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8010 === (8))){
var inst_7943 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8082_8397 = state_8009__$1;
(statearr_8082_8397[(2)] = inst_7943);

(statearr_8082_8397[(1)] = (5));


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
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0 = (function (){
var statearr_8085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8085[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__);

(statearr_8085[(1)] = (1));

return statearr_8085;
});
var chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1 = (function (state_8009){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8009);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8086){if((e8086 instanceof Object)){
var ex__7410__auto__ = e8086;
var statearr_8087_8401 = state_8009;
(statearr_8087_8401[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8402 = state_8009;
state_8009 = G__8402;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__ = function(state_8009){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1.call(this,state_8009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__7407__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8089 = f__7472__auto__();
(statearr_8089[(6)] = c__7471__auto___8357);

return statearr_8089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
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
var seq__8093_8411 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__8094_8412 = null;
var count__8095_8413 = (0);
var i__8096_8414 = (0);
while(true){
if((i__8096_8414 < count__8095_8413)){
var i_8421 = chunk__8094_8412.cljs$core$IIndexed$_nth$arity$2(null,i__8096_8414);
var c__7471__auto___8428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8428,i_8421){
return (function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = ((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8428,i_8421){
return (function (state_8124){
var state_val_8125 = (state_8124[(1)]);
if((state_val_8125 === (1))){
var inst_8119 = chess.utils.asset_path("/js/worker.js");
var inst_8120 = chess.engine.worker_engine.load_worker(inst_8119,i_8421);
var state_8124__$1 = state_8124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8124__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_8120);
} else {
if((state_val_8125 === (2))){
var inst_8122 = (state_8124[(2)]);
var state_8124__$1 = state_8124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8124__$1,inst_8122);
} else {
return null;
}
}
});})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8428,i_8421))
;
return ((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,switch__7406__auto__,c__7471__auto___8428,i_8421){
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8126 = [null,null,null,null,null,null,null];
(statearr_8126[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8126[(1)] = (1));

return statearr_8126;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8124){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8124);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8127){if((e8127 instanceof Object)){
var ex__7410__auto__ = e8127;
var statearr_8128_8438 = state_8124;
(statearr_8128_8438[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8440 = state_8124;
state_8124 = G__8440;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8124){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
;})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,switch__7406__auto__,c__7471__auto___8428,i_8421))
})();
var state__7473__auto__ = (function (){var statearr_8129 = f__7472__auto__();
(statearr_8129[(6)] = c__7471__auto___8428);

return statearr_8129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
});})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8428,i_8421))
);



var G__8441 = seq__8093_8411;
var G__8442 = chunk__8094_8412;
var G__8443 = count__8095_8413;
var G__8444 = (i__8096_8414 + (1));
seq__8093_8411 = G__8441;
chunk__8094_8412 = G__8442;
count__8095_8413 = G__8443;
i__8096_8414 = G__8444;
continue;
} else {
var temp__5735__auto___8445 = cljs.core.seq(seq__8093_8411);
if(temp__5735__auto___8445){
var seq__8093_8446__$1 = temp__5735__auto___8445;
if(cljs.core.chunked_seq_QMARK_(seq__8093_8446__$1)){
var c__4609__auto___8448 = cljs.core.chunk_first(seq__8093_8446__$1);
var G__8449 = cljs.core.chunk_rest(seq__8093_8446__$1);
var G__8450 = c__4609__auto___8448;
var G__8451 = cljs.core.count(c__4609__auto___8448);
var G__8452 = (0);
seq__8093_8411 = G__8449;
chunk__8094_8412 = G__8450;
count__8095_8413 = G__8451;
i__8096_8414 = G__8452;
continue;
} else {
var i_8453 = cljs.core.first(seq__8093_8446__$1);
var c__7471__auto___8454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445){
return (function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = ((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445){
return (function (state_8135){
var state_val_8136 = (state_8135[(1)]);
if((state_val_8136 === (1))){
var inst_8130 = chess.utils.asset_path("/js/worker.js");
var inst_8131 = chess.engine.worker_engine.load_worker(inst_8130,i_8453);
var state_8135__$1 = state_8135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8135__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_8131);
} else {
if((state_val_8136 === (2))){
var inst_8133 = (state_8135[(2)]);
var state_8135__$1 = state_8135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8135__$1,inst_8133);
} else {
return null;
}
}
});})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445))
;
return ((function (seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,switch__7406__auto__,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445){
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8137 = [null,null,null,null,null,null,null];
(statearr_8137[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8137[(1)] = (1));

return statearr_8137;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8135){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8135);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8138){if((e8138 instanceof Object)){
var ex__7410__auto__ = e8138;
var statearr_8139_8459 = state_8135;
(statearr_8139_8459[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8461 = state_8135;
state_8135 = G__8461;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8135){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
;})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,switch__7406__auto__,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445))
})();
var state__7473__auto__ = (function (){var statearr_8140 = f__7472__auto__();
(statearr_8140[(6)] = c__7471__auto___8454);

return statearr_8140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
});})(seq__8093_8411,chunk__8094_8412,count__8095_8413,i__8096_8414,c__7471__auto___8454,i_8453,seq__8093_8446__$1,temp__5735__auto___8445))
);



var G__8462 = cljs.core.next(seq__8093_8446__$1);
var G__8463 = null;
var G__8464 = (0);
var G__8465 = (0);
seq__8093_8411 = G__8462;
chunk__8094_8412 = G__8463;
count__8095_8413 = G__8464;
i__8096_8414 = G__8465;
continue;
}
} else {
}
}
break;
}

var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8208){
var state_val_8209 = (state_8208[(1)]);
if((state_val_8209 === (7))){
var state_8208__$1 = state_8208;
var statearr_8210_8466 = state_8208__$1;
(statearr_8210_8466[(2)] = false);

(statearr_8210_8466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (20))){
var inst_8187 = (state_8208[(2)]);
var state_8208__$1 = state_8208;
var statearr_8211_8467 = state_8208__$1;
(statearr_8211_8467[(2)] = inst_8187);

(statearr_8211_8467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (1))){
var state_8208__$1 = state_8208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8208__$1,(2),chess.engine.worker_engine.work_chan);
} else {
if((state_val_8209 === (24))){
var inst_8201 = (state_8208[(2)]);
var state_8208__$1 = (function (){var statearr_8212 = state_8208;
(statearr_8212[(7)] = inst_8201);

return statearr_8212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8208__$1,(25),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_8209 === (4))){
var state_8208__$1 = state_8208;
var statearr_8213_8469 = state_8208__$1;
(statearr_8213_8469[(2)] = false);

(statearr_8213_8469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (15))){
var inst_8171 = (state_8208[(8)]);
var inst_8179 = inst_8171.cljs$lang$protocol_mask$partition0$;
var inst_8180 = (inst_8179 & (64));
var inst_8181 = inst_8171.cljs$core$ISeq$;
var inst_8182 = (cljs.core.PROTOCOL_SENTINEL === inst_8181);
var inst_8183 = ((inst_8180) || (inst_8182));
var state_8208__$1 = state_8208;
if(cljs.core.truth_(inst_8183)){
var statearr_8214_8470 = state_8208__$1;
(statearr_8214_8470[(1)] = (18));

} else {
var statearr_8215_8471 = state_8208__$1;
(statearr_8215_8471[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (21))){
var inst_8171 = (state_8208[(8)]);
var inst_8192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8171);
var state_8208__$1 = state_8208;
var statearr_8216_8472 = state_8208__$1;
(statearr_8216_8472[(2)] = inst_8192);

(statearr_8216_8472[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (13))){
var inst_8171 = (state_8208[(8)]);
var inst_8176 = (inst_8171 == null);
var inst_8177 = cljs.core.not(inst_8176);
var state_8208__$1 = state_8208;
if(inst_8177){
var statearr_8217_8473 = state_8208__$1;
(statearr_8217_8473[(1)] = (15));

} else {
var statearr_8218_8474 = state_8208__$1;
(statearr_8218_8474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (22))){
var inst_8171 = (state_8208[(8)]);
var state_8208__$1 = state_8208;
var statearr_8219_8476 = state_8208__$1;
(statearr_8219_8476[(2)] = inst_8171);

(statearr_8219_8476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (6))){
var state_8208__$1 = state_8208;
var statearr_8220_8478 = state_8208__$1;
(statearr_8220_8478[(2)] = true);

(statearr_8220_8478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (25))){
var inst_8201 = (state_8208[(7)]);
var inst_8203 = (state_8208[(2)]);
var inst_8171 = inst_8201;
var inst_8172 = inst_8203;
var state_8208__$1 = (function (){var statearr_8221 = state_8208;
(statearr_8221[(9)] = inst_8172);

(statearr_8221[(8)] = inst_8171);

return statearr_8221;
})();
var statearr_8222_8479 = state_8208__$1;
(statearr_8222_8479[(2)] = null);

(statearr_8222_8479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (17))){
var inst_8190 = (state_8208[(2)]);
var state_8208__$1 = state_8208;
if(cljs.core.truth_(inst_8190)){
var statearr_8223_8480 = state_8208__$1;
(statearr_8223_8480[(1)] = (21));

} else {
var statearr_8224_8481 = state_8208__$1;
(statearr_8224_8481[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (3))){
var inst_8145 = (state_8208[(10)]);
var inst_8150 = inst_8145.cljs$lang$protocol_mask$partition0$;
var inst_8151 = (inst_8150 & (64));
var inst_8152 = inst_8145.cljs$core$ISeq$;
var inst_8153 = (cljs.core.PROTOCOL_SENTINEL === inst_8152);
var inst_8154 = ((inst_8151) || (inst_8153));
var state_8208__$1 = state_8208;
if(cljs.core.truth_(inst_8154)){
var statearr_8225_8482 = state_8208__$1;
(statearr_8225_8482[(1)] = (6));

} else {
var statearr_8226_8483 = state_8208__$1;
(statearr_8226_8483[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (12))){
var inst_8145 = (state_8208[(10)]);
var inst_8170 = (state_8208[(2)]);
var inst_8171 = inst_8145;
var inst_8172 = inst_8170;
var state_8208__$1 = (function (){var statearr_8227 = state_8208;
(statearr_8227[(9)] = inst_8172);

(statearr_8227[(8)] = inst_8171);

return statearr_8227;
})();
var statearr_8228_8484 = state_8208__$1;
(statearr_8228_8484[(2)] = null);

(statearr_8228_8484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (2))){
var inst_8145 = (state_8208[(10)]);
var inst_8145__$1 = (state_8208[(2)]);
var inst_8147 = (inst_8145__$1 == null);
var inst_8148 = cljs.core.not(inst_8147);
var state_8208__$1 = (function (){var statearr_8229 = state_8208;
(statearr_8229[(10)] = inst_8145__$1);

return statearr_8229;
})();
if(inst_8148){
var statearr_8230_8485 = state_8208__$1;
(statearr_8230_8485[(1)] = (3));

} else {
var statearr_8231_8492 = state_8208__$1;
(statearr_8231_8492[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (23))){
var inst_8172 = (state_8208[(9)]);
var inst_8195 = (state_8208[(2)]);
var inst_8196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8195,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_8197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8195,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_8198 = (chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2 ? chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2(inst_8172,inst_8197) : chess.engine.worker_engine.submit_command.call(null,inst_8172,inst_8197));
var inst_8199 = cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(inst_8198,inst_8196);
var state_8208__$1 = (function (){var statearr_8232 = state_8208;
(statearr_8232[(11)] = inst_8199);

return statearr_8232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8208__$1,(24),chess.engine.worker_engine.work_chan);
} else {
if((state_val_8209 === (19))){
var state_8208__$1 = state_8208;
var statearr_8233_8494 = state_8208__$1;
(statearr_8233_8494[(2)] = false);

(statearr_8233_8494[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (11))){
var inst_8166 = (state_8208[(2)]);
var inst_8167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8166,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_8168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8166,new cljs.core.Keyword(null,"form","form",-1624062471));
var state_8208__$1 = (function (){var statearr_8234 = state_8208;
(statearr_8234[(12)] = inst_8167);

(statearr_8234[(13)] = inst_8168);

return statearr_8234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8208__$1,(12),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_8209 === (9))){
var inst_8145 = (state_8208[(10)]);
var inst_8163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8145);
var state_8208__$1 = state_8208;
var statearr_8235_8496 = state_8208__$1;
(statearr_8235_8496[(2)] = inst_8163);

(statearr_8235_8496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (5))){
var inst_8161 = (state_8208[(2)]);
var state_8208__$1 = state_8208;
if(cljs.core.truth_(inst_8161)){
var statearr_8236_8497 = state_8208__$1;
(statearr_8236_8497[(1)] = (9));

} else {
var statearr_8237_8498 = state_8208__$1;
(statearr_8237_8498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (14))){
var inst_8206 = (state_8208[(2)]);
var state_8208__$1 = state_8208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8208__$1,inst_8206);
} else {
if((state_val_8209 === (16))){
var state_8208__$1 = state_8208;
var statearr_8238_8499 = state_8208__$1;
(statearr_8238_8499[(2)] = false);

(statearr_8238_8499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (10))){
var inst_8145 = (state_8208[(10)]);
var state_8208__$1 = state_8208;
var statearr_8239_8500 = state_8208__$1;
(statearr_8239_8500[(2)] = inst_8145);

(statearr_8239_8500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (18))){
var state_8208__$1 = state_8208;
var statearr_8240_8501 = state_8208__$1;
(statearr_8240_8501[(2)] = true);

(statearr_8240_8501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8209 === (8))){
var inst_8158 = (state_8208[(2)]);
var state_8208__$1 = state_8208;
var statearr_8241_8502 = state_8208__$1;
(statearr_8241_8502[(2)] = inst_8158);

(statearr_8241_8502[(1)] = (5));


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
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8242[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8242[(1)] = (1));

return statearr_8242;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8208){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8208);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8243){if((e8243 instanceof Object)){
var ex__7410__auto__ = e8243;
var statearr_8244_8503 = state_8208;
(statearr_8244_8503[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8504 = state_8208;
state_8208 = G__8504;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8208){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8245 = f__7472__auto__();
(statearr_8245[(6)] = c__7471__auto__);

return statearr_8245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
})()
;
}
chess.engine.worker_engine.submit_command = (function chess$engine$worker_engine$submit_command(worker_chan,form){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8257){
var state_val_8258 = (state_8257[(1)]);
if((state_val_8258 === (1))){
var inst_8246 = (state_8257[(7)]);
var inst_8246__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8247 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_8248 = [inst_8246__$1,form];
var inst_8249 = cljs.core.PersistentHashMap.fromArrays(inst_8247,inst_8248);
var state_8257__$1 = (function (){var statearr_8259 = state_8257;
(statearr_8259[(7)] = inst_8246__$1);

return statearr_8259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8257__$1,(2),worker_chan,inst_8249);
} else {
if((state_val_8258 === (2))){
var inst_8246 = (state_8257[(7)]);
var inst_8251 = (state_8257[(2)]);
var state_8257__$1 = (function (){var statearr_8260 = state_8257;
(statearr_8260[(8)] = inst_8251);

return statearr_8260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8257__$1,(3),inst_8246);
} else {
if((state_val_8258 === (3))){
var inst_8253 = (state_8257[(2)]);
var state_8257__$1 = (function (){var statearr_8261 = state_8257;
(statearr_8261[(9)] = inst_8253);

return statearr_8261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8257__$1,(4),chess.engine.worker_engine.worker_chan_chan,worker_chan);
} else {
if((state_val_8258 === (4))){
var inst_8253 = (state_8257[(9)]);
var inst_8255 = (state_8257[(2)]);
var state_8257__$1 = (function (){var statearr_8262 = state_8257;
(statearr_8262[(10)] = inst_8255);

return statearr_8262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8257__$1,inst_8253);
} else {
return null;
}
}
}
}
});
return (function() {
var chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__ = null;
var chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____0 = (function (){
var statearr_8263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8263[(0)] = chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__);

(statearr_8263[(1)] = (1));

return statearr_8263;
});
var chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____1 = (function (state_8257){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8257);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8264){if((e8264 instanceof Object)){
var ex__7410__auto__ = e8264;
var statearr_8265_8505 = state_8257;
(statearr_8265_8505[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8506 = state_8257;
state_8257 = G__8506;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__ = function(state_8257){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____1.call(this,state_8257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____0;
chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$submit_command_$_state_machine__7407__auto____1;
return chess$engine$worker_engine$submit_command_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8266 = f__7472__auto__();
(statearr_8266[(6)] = c__7471__auto__);

return statearr_8266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
});
chess.engine.worker_engine.printl = (function chess$engine$worker_engine$printl(var_args){
var args__4795__auto__ = [];
var len__4789__auto___8507 = arguments.length;
var i__4790__auto___8508 = (0);
while(true){
if((i__4790__auto___8508 < len__4789__auto___8507)){
args__4795__auto__.push((arguments[i__4790__auto___8508]));

var G__8509 = (i__4790__auto___8508 + (1));
i__4790__auto___8508 = G__8509;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic = (function (x){
chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["printl: ",x], 0));

return cljs.core.last(x);
}));

(chess.engine.worker_engine.printl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.engine.worker_engine.printl.cljs$lang$applyTo = (function (seq8267){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8267));
}));

chess.engine.worker_engine.dispatch = (function chess$engine$worker_engine$dispatch(literal){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8277){
var state_val_8278 = (state_8277[(1)]);
if((state_val_8278 === (1))){
var inst_8268 = (state_8277[(7)]);
var inst_8268__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8269 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_8270 = [inst_8268__$1,literal];
var inst_8271 = cljs.core.PersistentHashMap.fromArrays(inst_8269,inst_8270);
var state_8277__$1 = (function (){var statearr_8279 = state_8277;
(statearr_8279[(7)] = inst_8268__$1);

return statearr_8279;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8277__$1,(2),chess.engine.worker_engine.work_chan,inst_8271);
} else {
if((state_val_8278 === (2))){
var inst_8268 = (state_8277[(7)]);
var inst_8273 = (state_8277[(2)]);
var state_8277__$1 = (function (){var statearr_8280 = state_8277;
(statearr_8280[(8)] = inst_8273);

return statearr_8280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8277__$1,(3),inst_8268);
} else {
if((state_val_8278 === (3))){
var inst_8275 = (state_8277[(2)]);
var state_8277__$1 = state_8277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8277__$1,inst_8275);
} else {
return null;
}
}
}
});
return (function() {
var chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__ = null;
var chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____0 = (function (){
var statearr_8281 = [null,null,null,null,null,null,null,null,null];
(statearr_8281[(0)] = chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__);

(statearr_8281[(1)] = (1));

return statearr_8281;
});
var chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____1 = (function (state_8277){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8277);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8282){if((e8282 instanceof Object)){
var ex__7410__auto__ = e8282;
var statearr_8283_8510 = state_8277;
(statearr_8283_8510[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8511 = state_8277;
state_8277 = G__8511;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__ = function(state_8277){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____1.call(this,state_8277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____0;
chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$dispatch_$_state_machine__7407__auto____1;
return chess$engine$worker_engine$dispatch_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8284 = f__7472__auto__();
(statearr_8284[(6)] = c__7471__auto__);

return statearr_8284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
});
chess.engine.worker_engine.worker_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.t_chess$engine$worker_engine8285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.worker_engine.t_chess$engine$worker_engine8285 = (function (meta8286){
this.meta8286 = meta8286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8287,meta8286__$1){
var self__ = this;
var _8287__$1 = this;
return (new chess.engine.worker_engine.t_chess$engine$worker_engine8285(meta8286__$1));
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8287){
var self__ = this;
var _8287__$1 = this;
return self__.meta8286;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8298){
var state_val_8299 = (state_8298[(1)]);
if((state_val_8299 === (1))){
var inst_8289 = (function (){return (function (form8288){
if((((form8288 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8288,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),board);
} else {
if((((form8288 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8288,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),move);
} else {
return form8288;

}
}
});
})();
var inst_8290 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null)));
var inst_8291 = clojure.walk.postwalk(inst_8289,inst_8290);
var inst_8292 = chess.engine.worker_engine.dispatch(inst_8291);
var state_8298__$1 = state_8298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8298__$1,(2),inst_8292);
} else {
if((state_val_8299 === (2))){
var inst_8294 = (state_8298[(2)]);
var inst_8295 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_8294);
var inst_8296 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_8295], 0));
var state_8298__$1 = state_8298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8298__$1,inst_8296);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8300 = [null,null,null,null,null,null,null];
(statearr_8300[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8300[(1)] = (1));

return statearr_8300;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8298){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8298);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8301){if((e8301 instanceof Object)){
var ex__7410__auto__ = e8301;
var statearr_8302_8512 = state_8298;
(statearr_8302_8512[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8513 = state_8298;
state_8298 = G__8513;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8298){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8303 = f__7472__auto__();
(statearr_8303[(6)] = c__7471__auto__);

return statearr_8303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8314){
var state_val_8315 = (state_8314[(1)]);
if((state_val_8315 === (1))){
var inst_8305 = (function (){return (function (form8304){
if((((form8304 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8304,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),board);
} else {
if((((form8304 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8304,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),color);
} else {
return form8304;

}
}
});
})();
var inst_8306 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)));
var inst_8307 = clojure.walk.postwalk(inst_8305,inst_8306);
var inst_8308 = chess.engine.worker_engine.dispatch(inst_8307);
var state_8314__$1 = state_8314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8314__$1,(2),inst_8308);
} else {
if((state_val_8315 === (2))){
var inst_8310 = (state_8314[(2)]);
var inst_8311 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_8310);
var inst_8312 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_8311], 0));
var state_8314__$1 = state_8314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8314__$1,inst_8312);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8316 = [null,null,null,null,null,null,null];
(statearr_8316[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8316[(1)] = (1));

return statearr_8316;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8314){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8314);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8317){if((e8317 instanceof Object)){
var ex__7410__auto__ = e8317;
var statearr_8318_8514 = state_8314;
(statearr_8318_8514[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8515 = state_8314;
state_8314 = G__8515;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8314){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8319 = f__7472__auto__();
(statearr_8319[(6)] = c__7471__auto__);

return statearr_8319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8333){
var state_val_8334 = (state_8333[(1)]);
if((state_val_8334 === (1))){
var inst_8320 = (function (){return (function (a,b){
return cljs.core.cons(b,a);
});
})();
var inst_8321 = cljs.core.PersistentVector.EMPTY;
var inst_8322 = (function (){return (function (move){
var c__7471__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8345){
var state_val_8346 = (state_8345[(1)]);
if((state_val_8346 === (1))){
var inst_8336 = (function (){return (function (form8335){
if((((form8335 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8335,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),board);
} else {
if((((form8335 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form8335,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__6103__6104__auto__){
if(cljs.core.seq_QMARK_(p1__6103__6104__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__6103__6104__auto__);
} else {
return p1__6103__6104__auto__;
}
}),move);
} else {
return form8335;

}
}
});
})();
var inst_8337 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move-value","move-value",2011801283,null)], null)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move","move",-470352782,null),cljs.core.list(new cljs.core.Symbol(null,"move-value","move-value",2011801283,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null),(2))], null));
var inst_8338 = clojure.walk.postwalk(inst_8336,inst_8337);
var inst_8339 = chess.engine.worker_engine.dispatch(inst_8338);
var state_8345__$1 = state_8345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8345__$1,(2),inst_8339);
} else {
if((state_val_8346 === (2))){
var inst_8341 = (state_8345[(2)]);
var inst_8342 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_8341);
var inst_8343 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_8342], 0));
var state_8345__$1 = state_8345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8345__$1,inst_8343);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8347 = [null,null,null,null,null,null,null];
(statearr_8347[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8347[(1)] = (1));

return statearr_8347;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8345){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8345);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8348){if((e8348 instanceof Object)){
var ex__7410__auto__ = e8348;
var statearr_8349_8516 = state_8345;
(statearr_8349_8516[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8517 = state_8345;
state_8345 = G__8517;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8345){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8350 = f__7472__auto__();
(statearr_8350[(6)] = c__7471__auto____$1);

return statearr_8350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto____$1;
});
})();
var inst_8323 = chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,board,color);
var inst_8324 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_8322,inst_8323);
var inst_8325 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_8324);
var inst_8326 = cljs.core.async.reduce(inst_8320,inst_8321,inst_8325);
var state_8333__$1 = state_8333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8333__$1,(2),inst_8326);
} else {
if((state_val_8334 === (2))){
var inst_8328 = (state_8333[(2)]);
var inst_8329 = chess.utils.maxf(cljs.core.second,inst_8328);
var inst_8330 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["final result",inst_8329], 0));
var inst_8331 = cljs.core.first(inst_8330);
var state_8333__$1 = state_8333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8333__$1,inst_8331);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__7407__auto__ = null;
var chess$engine$worker_engine$state_machine__7407__auto____0 = (function (){
var statearr_8351 = [null,null,null,null,null,null,null];
(statearr_8351[(0)] = chess$engine$worker_engine$state_machine__7407__auto__);

(statearr_8351[(1)] = (1));

return statearr_8351;
});
var chess$engine$worker_engine$state_machine__7407__auto____1 = (function (state_8333){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8333);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8352){if((e8352 instanceof Object)){
var ex__7410__auto__ = e8352;
var statearr_8353_8518 = state_8333;
(statearr_8353_8518[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8519 = state_8333;
state_8333 = G__8519;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__7407__auto__ = function(state_8333){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__7407__auto____1.call(this,state_8333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__7407__auto____0;
chess$engine$worker_engine$state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__7407__auto____1;
return chess$engine$worker_engine$state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8354 = f__7472__auto__();
(statearr_8354[(6)] = c__7471__auto__);

return statearr_8354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8286","meta8286",1239399396,null)], null);
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.cljs$lang$type = true);

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.cljs$lang$ctorStr = "chess.engine.worker-engine/t_chess$engine$worker_engine8285");

(chess.engine.worker_engine.t_chess$engine$worker_engine8285.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.worker-engine/t_chess$engine$worker_engine8285");
}));

/**
 * Positional factory function for chess.engine.worker-engine/t_chess$engine$worker_engine8285.
 */
chess.engine.worker_engine.__GT_t_chess$engine$worker_engine8285 = (function chess$engine$worker_engine$__GT_t_chess$engine$worker_engine8285(meta8286){
return (new chess.engine.worker_engine.t_chess$engine$worker_engine8285(meta8286));
});

}

return (new chess.engine.worker_engine.t_chess$engine$worker_engine8285(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.worker_engine.js.map
