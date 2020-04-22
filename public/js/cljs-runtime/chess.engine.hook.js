goog.provide('chess.engine.hook');
goog.require('cljs.core');
goog.require('chess.engine.core');
goog.require('chess.engine.local_engine');
goog.require('chess.engine.worker_engine');
goog.require('html_cljs.html');
goog.require('chess.utils');
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
var c__26769__auto___38280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_38233){
var state_val_38234 = (state_38233[(1)]);
if((state_val_38234 === (1))){
var inst_38226 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,chess.engine.core.init_board,my_color);
var state_38233__$1 = state_38233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38233__$1,(2),inst_38226);
} else {
if((state_val_38234 === (2))){
var inst_38228 = (state_38233[(2)]);
var inst_38229 = cljs.core.reset_BANG_(moves,inst_38228);
var inst_38230 = cljs.core.reset_BANG_(initial,false);
var inst_38231 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_38233__$1 = (function (){var statearr_38236 = state_38233;
(statearr_38236[(7)] = inst_38229);

(statearr_38236[(8)] = inst_38230);

return statearr_38236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38233__$1,inst_38231);
} else {
return null;
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0 = (function (){
var statearr_38237 = [null,null,null,null,null,null,null,null,null];
(statearr_38237[(0)] = chess$engine$hook$use_async_engine_$_state_machine__26732__auto__);

(statearr_38237[(1)] = (1));

return statearr_38237;
});
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1 = (function (state_38233){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_38233);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e38238){if((e38238 instanceof Object)){
var ex__26735__auto__ = e38238;
var statearr_38239_38282 = state_38233;
(statearr_38239_38282[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38283 = state_38233;
state_38233 = G__38283;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__ = function(state_38233){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1.call(this,state_38233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_38240 = f__26770__auto__();
(statearr_38240[(6)] = c__26769__auto___38280);

return statearr_38240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(board),cljs.core.deref(moves),(function (move){
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_38270){
var state_val_38271 = (state_38270[(1)]);
if((state_val_38271 === (1))){
var inst_38244 = cljs.core.deref(board);
var inst_38245 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_38244,move);
var state_38270__$1 = state_38270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38270__$1,(2),inst_38245);
} else {
if((state_val_38271 === (2))){
var inst_38247 = (state_38270[(7)]);
var inst_38247__$1 = (state_38270[(2)]);
var inst_38248 = chess.engine.core.other_color(my_color);
var inst_38249 = cljs.core.reset_BANG_(color,inst_38248);
var inst_38250 = cljs.core.reset_BANG_(board,inst_38247__$1);
var inst_38251 = cljs.core.PersistentVector.EMPTY;
var inst_38252 = cljs.core.reset_BANG_(moves,inst_38251);
var inst_38253 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var inst_38254 = chess.engine.core.other_color(my_color);
var inst_38255 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$best_move$arity$3(null,inst_38247__$1,inst_38254);
var state_38270__$1 = (function (){var statearr_38272 = state_38270;
(statearr_38272[(7)] = inst_38247__$1);

(statearr_38272[(8)] = inst_38253);

(statearr_38272[(9)] = inst_38252);

(statearr_38272[(10)] = inst_38250);

(statearr_38272[(11)] = inst_38249);

return statearr_38272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38270__$1,(4),inst_38255);
} else {
if((state_val_38271 === (3))){
var inst_38260 = (state_38270[(2)]);
var inst_38261 = cljs.core.reset_BANG_(board,inst_38260);
var inst_38262 = cljs.core.deref(board);
var inst_38263 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$possible_moves$arity$3(null,inst_38262,my_color);
var state_38270__$1 = (function (){var statearr_38273 = state_38270;
(statearr_38273[(12)] = inst_38261);

return statearr_38273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38270__$1,(5),inst_38263);
} else {
if((state_val_38271 === (4))){
var inst_38247 = (state_38270[(7)]);
var inst_38257 = (state_38270[(2)]);
var inst_38258 = chess.engine.worker_engine.worker_engine.chess$engine$core$Engine$apply_move$arity$3(null,inst_38247,inst_38257);
var state_38270__$1 = state_38270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38270__$1,(3),inst_38258);
} else {
if((state_val_38271 === (5))){
var inst_38265 = (state_38270[(2)]);
var inst_38266 = cljs.core.reset_BANG_(moves,inst_38265);
var inst_38267 = cljs.core.reset_BANG_(color,my_color);
var inst_38268 = html_cljs.html.refresh.cljs$core$IFn$_invoke$arity$1(vdom_state);
var state_38270__$1 = (function (){var statearr_38274 = state_38270;
(statearr_38274[(13)] = inst_38267);

(statearr_38274[(14)] = inst_38266);

return statearr_38274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38270__$1,inst_38268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto__ = null;
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0 = (function (){
var statearr_38276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38276[(0)] = chess$engine$hook$use_async_engine_$_state_machine__26732__auto__);

(statearr_38276[(1)] = (1));

return statearr_38276;
});
var chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1 = (function (state_38270){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_38270);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e38277){if((e38277 instanceof Object)){
var ex__26735__auto__ = e38277;
var statearr_38278_38287 = state_38270;
(statearr_38278_38287[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38288 = state_38270;
state_38270 = G__38288;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__ = function(state_38270){
switch(arguments.length){
case 0:
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0.call(this);
case 1:
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1.call(this,state_38270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$hook$use_async_engine_$_state_machine__26732__auto____0;
chess$engine$hook$use_async_engine_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$hook$use_async_engine_$_state_machine__26732__auto____1;
return chess$engine$hook$use_async_engine_$_state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_38279 = f__26770__auto__();
(statearr_38279[(6)] = c__26769__auto__);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
})], null);
});
});

//# sourceMappingURL=chess.engine.hook.js.map
