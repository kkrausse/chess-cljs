goog.provide('chess.engine.hook');
goog.require('cljs.core');
goog.require('chess.engine.core');
goog.require('chess.engine.local_engine');
goog.require('chess.engine.worker_engine');
goog.require('html_cljs.html');
goog.require('cljs.core.async');
chess.engine.hook.use_engine = (function chess$engine$hook$use_engine(my_color){

var color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_color);
var board = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(chess.engine.core.init_board);
var moves = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,chess.engine.core.init_board,my_color));
return (function (vdom_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(board),cljs.core.deref(moves),(function (move){
var my_board = chess.engine.local_engine.local_engine.chess$engine$core$Engine$apply_move$arity$3(null,cljs.core.deref(board),move);
cljs.core.reset_BANG_(color,chess.engine.core.other_color(my_color));

cljs.core.reset_BANG_(board,my_board);

cljs.core.reset_BANG_(moves,cljs.core.PersistentVector.EMPTY);

html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

return setTimeout((function (){
cljs.core.reset_BANG_(board,chess.engine.local_engine.local_engine.chess$engine$core$Engine$apply_move$arity$3(null,my_board,chess.engine.local_engine.local_engine.chess$engine$core$Engine$best_move$arity$3(null,my_board,chess.engine.core.other_color(my_color))));

cljs.core.reset_BANG_(moves,chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,cljs.core.deref(board),my_color));

cljs.core.reset_BANG_(color,my_color);

return html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
}),(100));
})], null);
});
});
chess.engine.hook.use_async_engine = (function chess$engine$hook$use_async_engine(my_color){

var color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_color);
var board = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(chess.engine.core.init_board);
var moves = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var initial = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (vdom_state){
if(cljs.core.truth_(cljs.core.deref(initial))){
var c__7471__auto___8468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8390){
var state_val_8391 = (state_8390[(1)]);
if((state_val_8391 === (1))){
var inst_8383 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,chess.engine.core.init_board,my_color);
var state_8390__$1 = state_8390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8390__$1,(2),inst_8383);
} else {
if((state_val_8391 === (2))){
var inst_8385 = (state_8390[(2)]);
var inst_8386 = cljs.core.reset_BANG_(moves,inst_8385);
var inst_8387 = cljs.core.reset_BANG_(initial,false);
var inst_8388 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_8390__$1 = (function (){var statearr_8396 = state_8390;
(statearr_8396[(7)] = inst_8387);

(statearr_8396[(8)] = inst_8386);

return statearr_8396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8390__$1,inst_8388);
} else {
return null;
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0 = (function (){
var statearr_8398 = [null,null,null,null,null,null,null,null,null];
(statearr_8398[(0)] = chess$engine$hook$use_async_engine_$_state_machine__7407__auto__);

(statearr_8398[(1)] = (1));

return statearr_8398;
});
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1 = (function (state_8390){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8390);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8399){if((e8399 instanceof Object)){
var ex__7410__auto__ = e8399;
var statearr_8400_8475 = state_8390;
(statearr_8400_8475[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8477 = state_8390;
state_8390 = G__8477;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__ = function(state_8390){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1.call(this,state_8390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8403 = f__7472__auto__();
(statearr_8403[(6)] = c__7471__auto___8468);

return statearr_8403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(board),cljs.core.deref(moves),(function (move){
var c__7471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7472__auto__ = (function (){var switch__7406__auto__ = (function (state_8436){
var state_val_8437 = (state_8436[(1)]);
if((state_val_8437 === (1))){
var inst_8404 = cljs.core.deref(board);
var inst_8405 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_8404,move);
var state_8436__$1 = state_8436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8436__$1,(2),inst_8405);
} else {
if((state_val_8437 === (2))){
var inst_8407 = (state_8436[(7)]);
var inst_8407__$1 = (state_8436[(2)]);
var inst_8408 = chess.engine.core.other_color(my_color);
var inst_8409 = cljs.core.reset_BANG_(color,inst_8408);
var inst_8410 = cljs.core.reset_BANG_(board,inst_8407__$1);
var inst_8415 = cljs.core.PersistentVector.EMPTY;
var inst_8416 = cljs.core.reset_BANG_(moves,inst_8415);
var inst_8417 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var inst_8418 = chess.engine.core.other_color(my_color);
var inst_8419 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$best_move$arity$3(null,inst_8407__$1,inst_8418);
var state_8436__$1 = (function (){var statearr_8439 = state_8436;
(statearr_8439[(8)] = inst_8409);

(statearr_8439[(9)] = inst_8410);

(statearr_8439[(10)] = inst_8417);

(statearr_8439[(7)] = inst_8407__$1);

(statearr_8439[(11)] = inst_8416);

return statearr_8439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8436__$1,(4),inst_8419);
} else {
if((state_val_8437 === (3))){
var inst_8425 = (state_8436[(2)]);
var inst_8426 = cljs.core.reset_BANG_(board,inst_8425);
var inst_8427 = cljs.core.deref(board);
var inst_8429 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_8427,my_color);
var state_8436__$1 = (function (){var statearr_8447 = state_8436;
(statearr_8447[(12)] = inst_8426);

return statearr_8447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8436__$1,(5),inst_8429);
} else {
if((state_val_8437 === (4))){
var inst_8407 = (state_8436[(7)]);
var inst_8422 = (state_8436[(2)]);
var inst_8423 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_8407,inst_8422);
var state_8436__$1 = state_8436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8436__$1,(3),inst_8423);
} else {
if((state_val_8437 === (5))){
var inst_8431 = (state_8436[(2)]);
var inst_8432 = cljs.core.reset_BANG_(moves,inst_8431);
var inst_8433 = cljs.core.reset_BANG_(color,my_color);
var inst_8434 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_8436__$1 = (function (){var statearr_8455 = state_8436;
(statearr_8455[(13)] = inst_8433);

(statearr_8455[(14)] = inst_8432);

return statearr_8455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8436__$1,inst_8434);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0 = (function (){
var statearr_8456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8456[(0)] = chess$engine$hook$use_async_engine_$_state_machine__7407__auto__);

(statearr_8456[(1)] = (1));

return statearr_8456;
});
var chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1 = (function (state_8436){
while(true){
var ret_value__7408__auto__ = (function (){try{while(true){
var result__7409__auto__ = switch__7406__auto__(state_8436);
if(cljs.core.keyword_identical_QMARK_(result__7409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7409__auto__;
}
break;
}
}catch (e8457){if((e8457 instanceof Object)){
var ex__7410__auto__ = e8457;
var statearr_8458_8493 = state_8436;
(statearr_8458_8493[(5)] = ex__7410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8495 = state_8436;
state_8436 = G__8495;
continue;
} else {
return ret_value__7408__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__ = function(state_8436){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1.call(this,state_8436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__7407__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__7407__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__7407__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__7407__auto__;
})()
})();
var state__7473__auto__ = (function (){var statearr_8460 = f__7472__auto__();
(statearr_8460[(6)] = c__7471__auto__);

return statearr_8460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7473__auto__);
}));

return c__7471__auto__;
})], null);
});
});

//# sourceMappingURL=chess.engine.hook.js.map
