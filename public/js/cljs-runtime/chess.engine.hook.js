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
var c__27116__auto___42347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42262){
var state_val_42263 = (state_42262[(1)]);
if((state_val_42263 === (1))){
var inst_42255 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,chess.engine.core.init_board,my_color);
var state_42262__$1 = state_42262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42262__$1,(2),inst_42255);
} else {
if((state_val_42263 === (2))){
var inst_42257 = (state_42262[(2)]);
var inst_42258 = cljs.core.reset_BANG_(moves,inst_42257);
var inst_42259 = cljs.core.reset_BANG_(initial,false);
var inst_42260 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_42262__$1 = (function (){var statearr_42269 = state_42262;
(statearr_42269[(7)] = inst_42258);

(statearr_42269[(8)] = inst_42259);

return statearr_42269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42262__$1,inst_42260);
} else {
return null;
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0 = (function (){
var statearr_42271 = [null,null,null,null,null,null,null,null,null];
(statearr_42271[(0)] = chess$engine$hook$use_async_engine_$_state_machine__27094__auto__);

(statearr_42271[(1)] = (1));

return statearr_42271;
});
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1 = (function (state_42262){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42262);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42273){if((e42273 instanceof Object)){
var ex__27097__auto__ = e42273;
var statearr_42274_42354 = state_42262;
(statearr_42274_42354[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42355 = state_42262;
state_42262 = G__42355;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__ = function(state_42262){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1.call(this,state_42262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42279 = f__27117__auto__();
(statearr_42279[(6)] = c__27116__auto___42347);

return statearr_42279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(board),cljs.core.deref(moves),(function (move){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42308){
var state_val_42309 = (state_42308[(1)]);
if((state_val_42309 === (1))){
var inst_42282 = cljs.core.deref(board);
var inst_42283 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_42282,move);
var state_42308__$1 = state_42308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42308__$1,(2),inst_42283);
} else {
if((state_val_42309 === (2))){
var inst_42285 = (state_42308[(7)]);
var inst_42285__$1 = (state_42308[(2)]);
var inst_42286 = chess.engine.core.other_color(my_color);
var inst_42287 = cljs.core.reset_BANG_(color,inst_42286);
var inst_42288 = cljs.core.reset_BANG_(board,inst_42285__$1);
var inst_42289 = cljs.core.PersistentVector.EMPTY;
var inst_42290 = cljs.core.reset_BANG_(moves,inst_42289);
var inst_42291 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var inst_42292 = chess.engine.core.other_color(my_color);
var inst_42293 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$best_move$arity$3(null,inst_42285__$1,inst_42292);
var state_42308__$1 = (function (){var statearr_42319 = state_42308;
(statearr_42319[(8)] = inst_42288);

(statearr_42319[(9)] = inst_42291);

(statearr_42319[(10)] = inst_42290);

(statearr_42319[(11)] = inst_42287);

(statearr_42319[(7)] = inst_42285__$1);

return statearr_42319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42308__$1,(4),inst_42293);
} else {
if((state_val_42309 === (3))){
var inst_42298 = (state_42308[(2)]);
var inst_42299 = cljs.core.reset_BANG_(board,inst_42298);
var inst_42300 = cljs.core.deref(board);
var inst_42301 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_42300,my_color);
var state_42308__$1 = (function (){var statearr_42326 = state_42308;
(statearr_42326[(12)] = inst_42299);

return statearr_42326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42308__$1,(5),inst_42301);
} else {
if((state_val_42309 === (4))){
var inst_42285 = (state_42308[(7)]);
var inst_42295 = (state_42308[(2)]);
var inst_42296 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_42285,inst_42295);
var state_42308__$1 = state_42308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42308__$1,(3),inst_42296);
} else {
if((state_val_42309 === (5))){
var inst_42303 = (state_42308[(2)]);
var inst_42304 = cljs.core.reset_BANG_(moves,inst_42303);
var inst_42305 = cljs.core.reset_BANG_(color,my_color);
var inst_42306 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_42308__$1 = (function (){var statearr_42327 = state_42308;
(statearr_42327[(13)] = inst_42304);

(statearr_42327[(14)] = inst_42305);

return statearr_42327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42308__$1,inst_42306);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0 = (function (){
var statearr_42329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42329[(0)] = chess$engine$hook$use_async_engine_$_state_machine__27094__auto__);

(statearr_42329[(1)] = (1));

return statearr_42329;
});
var chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1 = (function (state_42308){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42308);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42331){if((e42331 instanceof Object)){
var ex__27097__auto__ = e42331;
var statearr_42332_42366 = state_42308;
(statearr_42332_42366[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42368 = state_42308;
state_42308 = G__42368;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__ = function(state_42308){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1.call(this,state_42308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__27094__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__27094__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42338 = f__27117__auto__();
(statearr_42338[(6)] = c__27116__auto__);

return statearr_42338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
})], null);
});
});

//# sourceMappingURL=chess.engine.hook.js.map
