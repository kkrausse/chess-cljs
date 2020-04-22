goog.provide('chess.engine.worker_engine');
goog.require('cljs.core');
goog.require('chess.engine.core');
goog.require('cljs.core.async');
goog.require('chess.utils');
chess.engine.worker_engine.submit_command = (function chess$engine$worker_engine$submit_command(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37389 = arguments.length;
var i__4790__auto___37390 = (0);
while(true){
if((i__4790__auto___37390 < len__4789__auto___37389)){
args__4795__auto__.push((arguments[i__4790__auto___37390]));

var G__37391 = (i__4790__auto___37390 + (1));
i__4790__auto___37390 = G__37391;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$variadic = (function (worker_chan,cmd,args){
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_37345){
var state_val_37346 = (state_37345[(1)]);
if((state_val_37346 === (1))){
var inst_37333 = (state_37345[(7)]);
var inst_37333__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_37334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37335 = [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_37336 = [cmd,args];
var inst_37337 = cljs.core.PersistentHashMap.fromArrays(inst_37335,inst_37336);
var inst_37338 = [inst_37337,inst_37333__$1];
var inst_37339 = (new cljs.core.PersistentVector(null,2,(5),inst_37334,inst_37338,null));
var state_37345__$1 = (function (){var statearr_37347 = state_37345;
(statearr_37347[(7)] = inst_37333__$1);

return statearr_37347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37345__$1,(2),worker_chan,inst_37339);
} else {
if((state_val_37346 === (2))){
var inst_37333 = (state_37345[(7)]);
var inst_37341 = (state_37345[(2)]);
var state_37345__$1 = (function (){var statearr_37348 = state_37345;
(statearr_37348[(8)] = inst_37341);

return statearr_37348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37345__$1,(3),inst_37333);
} else {
if((state_val_37346 === (3))){
var inst_37343 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37345__$1,inst_37343);
} else {
return null;
}
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__26732__auto__ = null;
var chess$engine$worker_engine$state_machine__26732__auto____0 = (function (){
var statearr_37349 = [null,null,null,null,null,null,null,null,null];
(statearr_37349[(0)] = chess$engine$worker_engine$state_machine__26732__auto__);

(statearr_37349[(1)] = (1));

return statearr_37349;
});
var chess$engine$worker_engine$state_machine__26732__auto____1 = (function (state_37345){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_37345);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e37350){if((e37350 instanceof Object)){
var ex__26735__auto__ = e37350;
var statearr_37351_37392 = state_37345;
(statearr_37351_37392[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37350;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37393 = state_37345;
state_37345 = G__37393;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__26732__auto__ = function(state_37345){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__26732__auto____1.call(this,state_37345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__26732__auto____0;
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__26732__auto____1;
return chess$engine$worker_engine$state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_37352 = f__26770__auto__();
(statearr_37352[(6)] = c__26769__auto__);

return statearr_37352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
}));

(chess.engine.worker_engine.submit_command.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chess.engine.worker_engine.submit_command.cljs$lang$applyTo = (function (seq37330){
var G__37331 = cljs.core.first(seq37330);
var seq37330__$1 = cljs.core.next(seq37330);
var G__37332 = cljs.core.first(seq37330__$1);
var seq37330__$2 = cljs.core.next(seq37330__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37331,G__37332,seq37330__$2);
}));

chess.engine.worker_engine.printl = (function chess$engine$worker_engine$printl(x){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["printl: ",x], 0));

return x;
});
chess.engine.worker_engine.worker_engine = (function (){var c = chess.utils.load_worker("/js/worker.js");
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loaded worker, theoretically"], 0));

if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.t_chess$engine$worker_engine37353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.worker_engine.t_chess$engine$worker_engine37353 = (function (c,meta37354){
this.c = c;
this.meta37354 = meta37354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37355,meta37354__$1){
var self__ = this;
var _37355__$1 = this;
return (new chess.engine.worker_engine.t_chess$engine$worker_engine37353(self__.c,meta37354__$1));
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37355){
var self__ = this;
var _37355__$1 = this;
return self__.meta37354;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_37361){
var state_val_37362 = (state_37361[(1)]);
if((state_val_37362 === (1))){
var inst_37356 = chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$variadic(self__.c,new cljs.core.Keyword(null,"apply-move","apply-move",1831458643),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,move], 0));
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37361__$1,(2),inst_37356);
} else {
if((state_val_37362 === (2))){
var inst_37358 = (state_37361[(2)]);
var inst_37359 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["move response: ",inst_37358], 0));
var state_37361__$1 = (function (){var statearr_37363 = state_37361;
(statearr_37363[(7)] = inst_37359);

return statearr_37363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37361__$1,inst_37358);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__26732__auto__ = null;
var chess$engine$worker_engine$state_machine__26732__auto____0 = (function (){
var statearr_37364 = [null,null,null,null,null,null,null,null];
(statearr_37364[(0)] = chess$engine$worker_engine$state_machine__26732__auto__);

(statearr_37364[(1)] = (1));

return statearr_37364;
});
var chess$engine$worker_engine$state_machine__26732__auto____1 = (function (state_37361){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_37361);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e37365){if((e37365 instanceof Object)){
var ex__26735__auto__ = e37365;
var statearr_37366_37394 = state_37361;
(statearr_37366_37394[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37395 = state_37361;
state_37361 = G__37395;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__26732__auto__ = function(state_37361){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__26732__auto____1.call(this,state_37361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__26732__auto____0;
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__26732__auto____1;
return chess$engine$worker_engine$state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_37367 = f__26770__auto__();
(statearr_37367[(6)] = c__26769__auto__);

return statearr_37367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_37372){
var state_val_37373 = (state_37372[(1)]);
if((state_val_37373 === (1))){
var inst_37368 = chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$variadic(self__.c,new cljs.core.Keyword(null,"possible-moves","possible-moves",22788046),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,color], 0));
var state_37372__$1 = state_37372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37372__$1,(2),inst_37368);
} else {
if((state_val_37373 === (2))){
var inst_37370 = (state_37372[(2)]);
var state_37372__$1 = state_37372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37372__$1,inst_37370);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__26732__auto__ = null;
var chess$engine$worker_engine$state_machine__26732__auto____0 = (function (){
var statearr_37374 = [null,null,null,null,null,null,null];
(statearr_37374[(0)] = chess$engine$worker_engine$state_machine__26732__auto__);

(statearr_37374[(1)] = (1));

return statearr_37374;
});
var chess$engine$worker_engine$state_machine__26732__auto____1 = (function (state_37372){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_37372);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e37375){if((e37375 instanceof Object)){
var ex__26735__auto__ = e37375;
var statearr_37376_37396 = state_37372;
(statearr_37376_37396[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37397 = state_37372;
state_37372 = G__37397;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__26732__auto__ = function(state_37372){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__26732__auto____1.call(this,state_37372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__26732__auto____0;
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__26732__auto____1;
return chess$engine$worker_engine$state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_37377 = f__26770__auto__();
(statearr_37377[(6)] = c__26769__auto__);

return statearr_37377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_37383){
var state_val_37384 = (state_37383[(1)]);
if((state_val_37384 === (1))){
var inst_37378 = chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$variadic(self__.c,new cljs.core.Keyword(null,"best-move","best-move",148157333),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([board,color], 0));
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37383__$1,(2),inst_37378);
} else {
if((state_val_37384 === (2))){
var inst_37380 = (state_37383[(2)]);
var inst_37381 = chess.engine.worker_engine.printl(inst_37380);
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37383__$1,inst_37381);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__26732__auto__ = null;
var chess$engine$worker_engine$state_machine__26732__auto____0 = (function (){
var statearr_37385 = [null,null,null,null,null,null,null];
(statearr_37385[(0)] = chess$engine$worker_engine$state_machine__26732__auto__);

(statearr_37385[(1)] = (1));

return statearr_37385;
});
var chess$engine$worker_engine$state_machine__26732__auto____1 = (function (state_37383){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_37383);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e37386){if((e37386 instanceof Object)){
var ex__26735__auto__ = e37386;
var statearr_37387_37407 = state_37383;
(statearr_37387_37407[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37408 = state_37383;
state_37383 = G__37408;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__26732__auto__ = function(state_37383){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__26732__auto____1.call(this,state_37383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__26732__auto____0;
chess$engine$worker_engine$state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__26732__auto____1;
return chess$engine$worker_engine$state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_37388 = f__26770__auto__();
(statearr_37388[(6)] = c__26769__auto__);

return statearr_37388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta37354","meta37354",-318458670,null)], null);
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.cljs$lang$type = true);

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.cljs$lang$ctorStr = "chess.engine.worker-engine/t_chess$engine$worker_engine37353");

(chess.engine.worker_engine.t_chess$engine$worker_engine37353.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.worker-engine/t_chess$engine$worker_engine37353");
}));

/**
 * Positional factory function for chess.engine.worker-engine/t_chess$engine$worker_engine37353.
 */
chess.engine.worker_engine.__GT_t_chess$engine$worker_engine37353 = (function chess$engine$worker_engine$__GT_t_chess$engine$worker_engine37353(c__$1,meta37354){
return (new chess.engine.worker_engine.t_chess$engine$worker_engine37353(c__$1,meta37354));
});

}

return (new chess.engine.worker_engine.t_chess$engine$worker_engine37353(c,cljs.core.PersistentArrayMap.EMPTY));
})();

//# sourceMappingURL=chess.engine.worker_engine.js.map
