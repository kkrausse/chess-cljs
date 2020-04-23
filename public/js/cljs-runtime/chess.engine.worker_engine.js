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
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_41841){
var state_val_41842 = (state_41841[(1)]);
if((state_val_41842 === (1))){
var inst_41836 = e.data;
var inst_41837 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$1(inst_41836) : chess.engine.worker_engine.printl.call(null,inst_41836));
var state_41841__$1 = state_41841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41841__$1,(2),reply_chan,inst_41837);
} else {
if((state_val_41842 === (2))){
var inst_41839 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41841__$1,inst_41839);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0 = (function (){
var statearr_41843 = [null,null,null,null,null,null,null];
(statearr_41843[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__);

(statearr_41843[(1)] = (1));

return statearr_41843;
});
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1 = (function (state_41841){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_41841);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e41844){if((e41844 instanceof Object)){
var ex__27097__auto__ = e41844;
var statearr_41845_42227 = state_41841;
(statearr_41845_42227[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42228 = state_41841;
state_41841 = G__42228;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__ = function(state_41841){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1.call(this,state_41841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_41846 = f__27117__auto__();
(statearr_41846[(6)] = c__27116__auto__);

return statearr_41846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));

var c__27116__auto___42229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_41923){
var state_val_41924 = (state_41923[(1)]);
if((state_val_41924 === (7))){
var state_41923__$1 = state_41923;
var statearr_41925_42230 = state_41923__$1;
(statearr_41925_42230[(2)] = false);

(statearr_41925_42230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (20))){
var inst_41875 = (state_41923[(7)]);
var inst_41895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41875);
var state_41923__$1 = state_41923;
var statearr_41926_42231 = state_41923__$1;
(statearr_41926_42231[(2)] = inst_41895);

(statearr_41926_42231[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (27))){
var inst_41899 = (state_41923[(8)]);
var inst_41908 = (state_41923[(2)]);
var inst_41909 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_41908);
var state_41923__$1 = state_41923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41923__$1,(26),inst_41899,inst_41909);
} else {
if((state_val_41924 === (1))){
var state_41923__$1 = state_41923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41923__$1,(2),c);
} else {
if((state_val_41924 === (24))){
var state_41923__$1 = state_41923;
var statearr_41927_42232 = state_41923__$1;
(statearr_41927_42232[(2)] = null);

(statearr_41927_42232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (4))){
var state_41923__$1 = state_41923;
var statearr_41928_42233 = state_41923__$1;
(statearr_41928_42233[(2)] = false);

(statearr_41928_42233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (15))){
var state_41923__$1 = state_41923;
var statearr_41929_42234 = state_41923__$1;
(statearr_41929_42234[(2)] = false);

(statearr_41929_42234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (21))){
var inst_41875 = (state_41923[(7)]);
var state_41923__$1 = state_41923;
var statearr_41930_42235 = state_41923__$1;
(statearr_41930_42235[(2)] = inst_41875);

(statearr_41930_42235[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (13))){
var inst_41921 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41923__$1,inst_41921);
} else {
if((state_val_41924 === (22))){
var inst_41900 = (state_41923[(9)]);
var inst_41898 = (state_41923[(2)]);
var inst_41899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41898,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_41900__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41898,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_41901 = (inst_41900__$1 == null);
var inst_41902 = cljs.core.not(inst_41901);
var state_41923__$1 = (function (){var statearr_41931 = state_41923;
(statearr_41931[(9)] = inst_41900__$1);

(statearr_41931[(8)] = inst_41899);

return statearr_41931;
})();
if(inst_41902){
var statearr_41932_42236 = state_41923__$1;
(statearr_41932_42236[(1)] = (23));

} else {
var statearr_41933_42237 = state_41923__$1;
(statearr_41933_42237[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (6))){
var state_41923__$1 = state_41923;
var statearr_41934_42238 = state_41923__$1;
(statearr_41934_42238[(2)] = true);

(statearr_41934_42238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (28))){
var inst_41915 = (state_41923[(2)]);
var inst_41875 = inst_41915;
var state_41923__$1 = (function (){var statearr_41935 = state_41923;
(statearr_41935[(7)] = inst_41875);

return statearr_41935;
})();
var statearr_41936_42239 = state_41923__$1;
(statearr_41936_42239[(2)] = null);

(statearr_41936_42239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (25))){
var inst_41919 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
var statearr_41937_42240 = state_41923__$1;
(statearr_41937_42240[(2)] = inst_41919);

(statearr_41937_42240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (17))){
var state_41923__$1 = state_41923;
var statearr_41938_42241 = state_41923__$1;
(statearr_41938_42241[(2)] = true);

(statearr_41938_42241[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (3))){
var inst_41851 = (state_41923[(10)]);
var inst_41856 = inst_41851.cljs$lang$protocol_mask$partition0$;
var inst_41857 = (inst_41856 & (64));
var inst_41858 = inst_41851.cljs$core$ISeq$;
var inst_41859 = (cljs.core.PROTOCOL_SENTINEL === inst_41858);
var inst_41860 = ((inst_41857) || (inst_41859));
var state_41923__$1 = state_41923;
if(cljs.core.truth_(inst_41860)){
var statearr_41939_42242 = state_41923__$1;
(statearr_41939_42242[(1)] = (6));

} else {
var statearr_41940_42243 = state_41923__$1;
(statearr_41940_42243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (12))){
var inst_41875 = (state_41923[(7)]);
var inst_41879 = (inst_41875 == null);
var inst_41880 = cljs.core.not(inst_41879);
var state_41923__$1 = state_41923;
if(inst_41880){
var statearr_41941_42244 = state_41923__$1;
(statearr_41941_42244[(1)] = (14));

} else {
var statearr_41942_42245 = state_41923__$1;
(statearr_41942_42245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (2))){
var inst_41851 = (state_41923[(10)]);
var inst_41851__$1 = (state_41923[(2)]);
var inst_41853 = (inst_41851__$1 == null);
var inst_41854 = cljs.core.not(inst_41853);
var state_41923__$1 = (function (){var statearr_41943 = state_41923;
(statearr_41943[(10)] = inst_41851__$1);

return statearr_41943;
})();
if(inst_41854){
var statearr_41944_42246 = state_41923__$1;
(statearr_41944_42246[(1)] = (3));

} else {
var statearr_41945_42247 = state_41923__$1;
(statearr_41945_42247[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (23))){
var inst_41900 = (state_41923[(9)]);
var inst_41904 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," starting work") : chess.engine.worker_engine.printl.call(null,"worker ",id," starting work"));
var inst_41905 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41900], 0));
var inst_41906 = worker.postMessage(inst_41905);
var state_41923__$1 = (function (){var statearr_41946 = state_41923;
(statearr_41946[(11)] = inst_41906);

(statearr_41946[(12)] = inst_41904);

return statearr_41946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41923__$1,(27),reply_chan);
} else {
if((state_val_41924 === (19))){
var inst_41890 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
var statearr_41947_42248 = state_41923__$1;
(statearr_41947_42248[(2)] = inst_41890);

(statearr_41947_42248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (11))){
var inst_41851 = (state_41923[(10)]);
var inst_41872 = (state_41923[(2)]);
var inst_41873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41872,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_41874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41872,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_41875 = inst_41851;
var state_41923__$1 = (function (){var statearr_41948 = state_41923;
(statearr_41948[(13)] = inst_41873);

(statearr_41948[(7)] = inst_41875);

(statearr_41948[(14)] = inst_41874);

return statearr_41948;
})();
var statearr_41949_42249 = state_41923__$1;
(statearr_41949_42249[(2)] = null);

(statearr_41949_42249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (9))){
var inst_41851 = (state_41923[(10)]);
var inst_41869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41851);
var state_41923__$1 = state_41923;
var statearr_41950_42250 = state_41923__$1;
(statearr_41950_42250[(2)] = inst_41869);

(statearr_41950_42250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (5))){
var inst_41867 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
if(cljs.core.truth_(inst_41867)){
var statearr_41951_42251 = state_41923__$1;
(statearr_41951_42251[(1)] = (9));

} else {
var statearr_41952_42252 = state_41923__$1;
(statearr_41952_42252[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (14))){
var inst_41875 = (state_41923[(7)]);
var inst_41882 = inst_41875.cljs$lang$protocol_mask$partition0$;
var inst_41883 = (inst_41882 & (64));
var inst_41884 = inst_41875.cljs$core$ISeq$;
var inst_41885 = (cljs.core.PROTOCOL_SENTINEL === inst_41884);
var inst_41886 = ((inst_41883) || (inst_41885));
var state_41923__$1 = state_41923;
if(cljs.core.truth_(inst_41886)){
var statearr_41953_42253 = state_41923__$1;
(statearr_41953_42253[(1)] = (17));

} else {
var statearr_41954_42254 = state_41923__$1;
(statearr_41954_42254[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (26))){
var inst_41899 = (state_41923[(8)]);
var inst_41911 = (state_41923[(2)]);
var inst_41912 = (chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3 ? chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$3("worker ",id," finished work") : chess.engine.worker_engine.printl.call(null,"worker ",id," finished work"));
var inst_41913 = cljs.core.async.close_BANG_(inst_41899);
var state_41923__$1 = (function (){var statearr_41955 = state_41923;
(statearr_41955[(15)] = inst_41913);

(statearr_41955[(16)] = inst_41911);

(statearr_41955[(17)] = inst_41912);

return statearr_41955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41923__$1,(28),c);
} else {
if((state_val_41924 === (16))){
var inst_41893 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
if(cljs.core.truth_(inst_41893)){
var statearr_41956_42264 = state_41923__$1;
(statearr_41956_42264[(1)] = (20));

} else {
var statearr_41957_42265 = state_41923__$1;
(statearr_41957_42265[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (10))){
var inst_41851 = (state_41923[(10)]);
var state_41923__$1 = state_41923;
var statearr_41958_42266 = state_41923__$1;
(statearr_41958_42266[(2)] = inst_41851);

(statearr_41958_42266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (18))){
var state_41923__$1 = state_41923;
var statearr_41959_42267 = state_41923__$1;
(statearr_41959_42267[(2)] = false);

(statearr_41959_42267[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (8))){
var inst_41864 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
var statearr_41960_42268 = state_41923__$1;
(statearr_41960_42268[(2)] = inst_41864);

(statearr_41960_42268[(1)] = (5));


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
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__ = null;
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0 = (function (){
var statearr_41961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41961[(0)] = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__);

(statearr_41961[(1)] = (1));

return statearr_41961;
});
var chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1 = (function (state_41923){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_41923);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e41962){if((e41962 instanceof Object)){
var ex__27097__auto__ = e41962;
var statearr_41963_42270 = state_41923;
(statearr_41963_42270[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42272 = state_41923;
state_41923 = G__42272;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__ = function(state_41923){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1.call(this,state_41923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____0;
chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$load_worker_$_state_machine__27094__auto____1;
return chess$engine$worker_engine$load_worker_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_41964 = f__27117__auto__();
(statearr_41964[(6)] = c__27116__auto___42229);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
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
var seq__41965_42275 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__41966_42276 = null;
var count__41967_42277 = (0);
var i__41968_42278 = (0);
while(true){
if((i__41968_42278 < count__41967_42277)){
var i_42280 = chunk__41966_42276.cljs$core$IIndexed$_nth$arity$2(null,i__41968_42278);
var c__27116__auto___42281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42281,i_42280){
return (function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = ((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42281,i_42280){
return (function (state_41996){
var state_val_41997 = (state_41996[(1)]);
if((state_val_41997 === (1))){
var inst_41991 = chess.utils.asset_path("/js/worker.js");
var inst_41992 = chess.engine.worker_engine.load_worker(inst_41991,i_42280);
var state_41996__$1 = state_41996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41996__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_41992);
} else {
if((state_val_41997 === (2))){
var inst_41994 = (state_41996[(2)]);
var state_41996__$1 = state_41996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41996__$1,inst_41994);
} else {
return null;
}
}
});})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42281,i_42280))
;
return ((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,switch__27093__auto__,c__27116__auto___42281,i_42280){
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_41998 = [null,null,null,null,null,null,null];
(statearr_41998[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_41998[(1)] = (1));

return statearr_41998;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_41996){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_41996);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e41999){if((e41999 instanceof Object)){
var ex__27097__auto__ = e41999;
var statearr_42000_42310 = state_41996;
(statearr_42000_42310[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42311 = state_41996;
state_41996 = G__42311;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_41996){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_41996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
;})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,switch__27093__auto__,c__27116__auto___42281,i_42280))
})();
var state__27118__auto__ = (function (){var statearr_42001 = f__27117__auto__();
(statearr_42001[(6)] = c__27116__auto___42281);

return statearr_42001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
});})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42281,i_42280))
);



var G__42312 = seq__41965_42275;
var G__42313 = chunk__41966_42276;
var G__42314 = count__41967_42277;
var G__42315 = (i__41968_42278 + (1));
seq__41965_42275 = G__42312;
chunk__41966_42276 = G__42313;
count__41967_42277 = G__42314;
i__41968_42278 = G__42315;
continue;
} else {
var temp__5735__auto___42316 = cljs.core.seq(seq__41965_42275);
if(temp__5735__auto___42316){
var seq__41965_42317__$1 = temp__5735__auto___42316;
if(cljs.core.chunked_seq_QMARK_(seq__41965_42317__$1)){
var c__4609__auto___42318 = cljs.core.chunk_first(seq__41965_42317__$1);
var G__42320 = cljs.core.chunk_rest(seq__41965_42317__$1);
var G__42321 = c__4609__auto___42318;
var G__42322 = cljs.core.count(c__4609__auto___42318);
var G__42323 = (0);
seq__41965_42275 = G__42320;
chunk__41966_42276 = G__42321;
count__41967_42277 = G__42322;
i__41968_42278 = G__42323;
continue;
} else {
var i_42324 = cljs.core.first(seq__41965_42317__$1);
var c__27116__auto___42325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316){
return (function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = ((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316){
return (function (state_42007){
var state_val_42008 = (state_42007[(1)]);
if((state_val_42008 === (1))){
var inst_42002 = chess.utils.asset_path("/js/worker.js");
var inst_42003 = chess.engine.worker_engine.load_worker(inst_42002,i_42324);
var state_42007__$1 = state_42007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42007__$1,(2),chess.engine.worker_engine.worker_chan_chan,inst_42003);
} else {
if((state_val_42008 === (2))){
var inst_42005 = (state_42007[(2)]);
var state_42007__$1 = state_42007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42007__$1,inst_42005);
} else {
return null;
}
}
});})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316))
;
return ((function (seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,switch__27093__auto__,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316){
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42009 = [null,null,null,null,null,null,null];
(statearr_42009[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42009[(1)] = (1));

return statearr_42009;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42007){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42007);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42010){if((e42010 instanceof Object)){
var ex__27097__auto__ = e42010;
var statearr_42011_42328 = state_42007;
(statearr_42011_42328[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42330 = state_42007;
state_42007 = G__42330;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42007){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
;})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,switch__27093__auto__,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316))
})();
var state__27118__auto__ = (function (){var statearr_42012 = f__27117__auto__();
(statearr_42012[(6)] = c__27116__auto___42325);

return statearr_42012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
});})(seq__41965_42275,chunk__41966_42276,count__41967_42277,i__41968_42278,c__27116__auto___42325,i_42324,seq__41965_42317__$1,temp__5735__auto___42316))
);



var G__42333 = cljs.core.next(seq__41965_42317__$1);
var G__42334 = null;
var G__42335 = (0);
var G__42336 = (0);
seq__41965_42275 = G__42333;
chunk__41966_42276 = G__42334;
count__41967_42277 = G__42335;
i__41968_42278 = G__42336;
continue;
}
} else {
}
}
break;
}

var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42080){
var state_val_42081 = (state_42080[(1)]);
if((state_val_42081 === (7))){
var state_42080__$1 = state_42080;
var statearr_42082_42337 = state_42080__$1;
(statearr_42082_42337[(2)] = false);

(statearr_42082_42337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (20))){
var inst_42059 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
var statearr_42083_42339 = state_42080__$1;
(statearr_42083_42339[(2)] = inst_42059);

(statearr_42083_42339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (1))){
var state_42080__$1 = state_42080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42080__$1,(2),chess.engine.worker_engine.work_chan);
} else {
if((state_val_42081 === (24))){
var inst_42073 = (state_42080[(2)]);
var state_42080__$1 = (function (){var statearr_42084 = state_42080;
(statearr_42084[(7)] = inst_42073);

return statearr_42084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42080__$1,(25),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_42081 === (4))){
var state_42080__$1 = state_42080;
var statearr_42085_42340 = state_42080__$1;
(statearr_42085_42340[(2)] = false);

(statearr_42085_42340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (15))){
var inst_42043 = (state_42080[(8)]);
var inst_42051 = inst_42043.cljs$lang$protocol_mask$partition0$;
var inst_42052 = (inst_42051 & (64));
var inst_42053 = inst_42043.cljs$core$ISeq$;
var inst_42054 = (cljs.core.PROTOCOL_SENTINEL === inst_42053);
var inst_42055 = ((inst_42052) || (inst_42054));
var state_42080__$1 = state_42080;
if(cljs.core.truth_(inst_42055)){
var statearr_42086_42341 = state_42080__$1;
(statearr_42086_42341[(1)] = (18));

} else {
var statearr_42087_42342 = state_42080__$1;
(statearr_42087_42342[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (21))){
var inst_42043 = (state_42080[(8)]);
var inst_42064 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42043);
var state_42080__$1 = state_42080;
var statearr_42088_42343 = state_42080__$1;
(statearr_42088_42343[(2)] = inst_42064);

(statearr_42088_42343[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (13))){
var inst_42043 = (state_42080[(8)]);
var inst_42048 = (inst_42043 == null);
var inst_42049 = cljs.core.not(inst_42048);
var state_42080__$1 = state_42080;
if(inst_42049){
var statearr_42089_42344 = state_42080__$1;
(statearr_42089_42344[(1)] = (15));

} else {
var statearr_42090_42345 = state_42080__$1;
(statearr_42090_42345[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (22))){
var inst_42043 = (state_42080[(8)]);
var state_42080__$1 = state_42080;
var statearr_42091_42346 = state_42080__$1;
(statearr_42091_42346[(2)] = inst_42043);

(statearr_42091_42346[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (6))){
var state_42080__$1 = state_42080;
var statearr_42092_42348 = state_42080__$1;
(statearr_42092_42348[(2)] = true);

(statearr_42092_42348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (25))){
var inst_42073 = (state_42080[(7)]);
var inst_42075 = (state_42080[(2)]);
var inst_42043 = inst_42073;
var inst_42044 = inst_42075;
var state_42080__$1 = (function (){var statearr_42093 = state_42080;
(statearr_42093[(9)] = inst_42044);

(statearr_42093[(8)] = inst_42043);

return statearr_42093;
})();
var statearr_42094_42349 = state_42080__$1;
(statearr_42094_42349[(2)] = null);

(statearr_42094_42349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (17))){
var inst_42062 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
if(cljs.core.truth_(inst_42062)){
var statearr_42095_42350 = state_42080__$1;
(statearr_42095_42350[(1)] = (21));

} else {
var statearr_42096_42351 = state_42080__$1;
(statearr_42096_42351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (3))){
var inst_42017 = (state_42080[(10)]);
var inst_42022 = inst_42017.cljs$lang$protocol_mask$partition0$;
var inst_42023 = (inst_42022 & (64));
var inst_42024 = inst_42017.cljs$core$ISeq$;
var inst_42025 = (cljs.core.PROTOCOL_SENTINEL === inst_42024);
var inst_42026 = ((inst_42023) || (inst_42025));
var state_42080__$1 = state_42080;
if(cljs.core.truth_(inst_42026)){
var statearr_42097_42352 = state_42080__$1;
(statearr_42097_42352[(1)] = (6));

} else {
var statearr_42098_42353 = state_42080__$1;
(statearr_42098_42353[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (12))){
var inst_42017 = (state_42080[(10)]);
var inst_42042 = (state_42080[(2)]);
var inst_42043 = inst_42017;
var inst_42044 = inst_42042;
var state_42080__$1 = (function (){var statearr_42099 = state_42080;
(statearr_42099[(9)] = inst_42044);

(statearr_42099[(8)] = inst_42043);

return statearr_42099;
})();
var statearr_42100_42356 = state_42080__$1;
(statearr_42100_42356[(2)] = null);

(statearr_42100_42356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (2))){
var inst_42017 = (state_42080[(10)]);
var inst_42017__$1 = (state_42080[(2)]);
var inst_42019 = (inst_42017__$1 == null);
var inst_42020 = cljs.core.not(inst_42019);
var state_42080__$1 = (function (){var statearr_42101 = state_42080;
(statearr_42101[(10)] = inst_42017__$1);

return statearr_42101;
})();
if(inst_42020){
var statearr_42102_42357 = state_42080__$1;
(statearr_42102_42357[(1)] = (3));

} else {
var statearr_42103_42358 = state_42080__$1;
(statearr_42103_42358[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (23))){
var inst_42044 = (state_42080[(9)]);
var inst_42067 = (state_42080[(2)]);
var inst_42068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42067,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_42069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42067,new cljs.core.Keyword(null,"form","form",-1624062471));
var inst_42070 = (chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2 ? chess.engine.worker_engine.submit_command.cljs$core$IFn$_invoke$arity$2(inst_42044,inst_42069) : chess.engine.worker_engine.submit_command.call(null,inst_42044,inst_42069));
var inst_42071 = cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(inst_42070,inst_42068);
var state_42080__$1 = (function (){var statearr_42104 = state_42080;
(statearr_42104[(11)] = inst_42071);

return statearr_42104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42080__$1,(24),chess.engine.worker_engine.work_chan);
} else {
if((state_val_42081 === (19))){
var state_42080__$1 = state_42080;
var statearr_42105_42359 = state_42080__$1;
(statearr_42105_42359[(2)] = false);

(statearr_42105_42359[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (11))){
var inst_42038 = (state_42080[(2)]);
var inst_42039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42038,new cljs.core.Keyword(null,"rc","rc",-1948144765));
var inst_42040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42038,new cljs.core.Keyword(null,"form","form",-1624062471));
var state_42080__$1 = (function (){var statearr_42106 = state_42080;
(statearr_42106[(12)] = inst_42039);

(statearr_42106[(13)] = inst_42040);

return statearr_42106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42080__$1,(12),chess.engine.worker_engine.worker_chan_chan);
} else {
if((state_val_42081 === (9))){
var inst_42017 = (state_42080[(10)]);
var inst_42035 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42017);
var state_42080__$1 = state_42080;
var statearr_42107_42360 = state_42080__$1;
(statearr_42107_42360[(2)] = inst_42035);

(statearr_42107_42360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (5))){
var inst_42033 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
if(cljs.core.truth_(inst_42033)){
var statearr_42108_42361 = state_42080__$1;
(statearr_42108_42361[(1)] = (9));

} else {
var statearr_42109_42362 = state_42080__$1;
(statearr_42109_42362[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (14))){
var inst_42078 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42080__$1,inst_42078);
} else {
if((state_val_42081 === (16))){
var state_42080__$1 = state_42080;
var statearr_42110_42363 = state_42080__$1;
(statearr_42110_42363[(2)] = false);

(statearr_42110_42363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (10))){
var inst_42017 = (state_42080[(10)]);
var state_42080__$1 = state_42080;
var statearr_42111_42364 = state_42080__$1;
(statearr_42111_42364[(2)] = inst_42017);

(statearr_42111_42364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (18))){
var state_42080__$1 = state_42080;
var statearr_42112_42365 = state_42080__$1;
(statearr_42112_42365[(2)] = true);

(statearr_42112_42365[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (8))){
var inst_42030 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
var statearr_42113_42367 = state_42080__$1;
(statearr_42113_42367[(2)] = inst_42030);

(statearr_42113_42367[(1)] = (5));


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
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42114[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42114[(1)] = (1));

return statearr_42114;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42080){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42080);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42115){if((e42115 instanceof Object)){
var ex__27097__auto__ = e42115;
var statearr_42116_42369 = state_42080;
(statearr_42116_42369[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42370 = state_42080;
state_42080 = G__42370;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42080){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42117 = f__27117__auto__();
(statearr_42117[(6)] = c__27116__auto__);

return statearr_42117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
})()
;
}
chess.engine.worker_engine.submit_command = (function chess$engine$worker_engine$submit_command(worker_chan,form){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42129){
var state_val_42130 = (state_42129[(1)]);
if((state_val_42130 === (1))){
var inst_42118 = (state_42129[(7)]);
var inst_42118__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42119 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_42120 = [inst_42118__$1,form];
var inst_42121 = cljs.core.PersistentHashMap.fromArrays(inst_42119,inst_42120);
var state_42129__$1 = (function (){var statearr_42131 = state_42129;
(statearr_42131[(7)] = inst_42118__$1);

return statearr_42131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42129__$1,(2),worker_chan,inst_42121);
} else {
if((state_val_42130 === (2))){
var inst_42118 = (state_42129[(7)]);
var inst_42123 = (state_42129[(2)]);
var state_42129__$1 = (function (){var statearr_42132 = state_42129;
(statearr_42132[(8)] = inst_42123);

return statearr_42132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42129__$1,(3),inst_42118);
} else {
if((state_val_42130 === (3))){
var inst_42125 = (state_42129[(2)]);
var state_42129__$1 = (function (){var statearr_42133 = state_42129;
(statearr_42133[(9)] = inst_42125);

return statearr_42133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42129__$1,(4),chess.engine.worker_engine.worker_chan_chan,worker_chan);
} else {
if((state_val_42130 === (4))){
var inst_42125 = (state_42129[(9)]);
var inst_42127 = (state_42129[(2)]);
var state_42129__$1 = (function (){var statearr_42134 = state_42129;
(statearr_42134[(10)] = inst_42127);

return statearr_42134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42129__$1,inst_42125);
} else {
return null;
}
}
}
}
});
return (function() {
var chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__ = null;
var chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____0 = (function (){
var statearr_42135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42135[(0)] = chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__);

(statearr_42135[(1)] = (1));

return statearr_42135;
});
var chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____1 = (function (state_42129){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42129);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42136){if((e42136 instanceof Object)){
var ex__27097__auto__ = e42136;
var statearr_42137_42371 = state_42129;
(statearr_42137_42371[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42372 = state_42129;
state_42129 = G__42372;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__ = function(state_42129){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____1.call(this,state_42129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____0;
chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$submit_command_$_state_machine__27094__auto____1;
return chess$engine$worker_engine$submit_command_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42138 = f__27117__auto__();
(statearr_42138[(6)] = c__27116__auto__);

return statearr_42138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
});
chess.engine.worker_engine.printl = (function chess$engine$worker_engine$printl(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42373 = arguments.length;
var i__4790__auto___42374 = (0);
while(true){
if((i__4790__auto___42374 < len__4789__auto___42373)){
args__4795__auto__.push((arguments[i__4790__auto___42374]));

var G__42375 = (i__4790__auto___42374 + (1));
i__4790__auto___42374 = G__42375;
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
(chess.engine.worker_engine.printl.cljs$lang$applyTo = (function (seq42139){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42139));
}));

chess.engine.worker_engine.dispatch = (function chess$engine$worker_engine$dispatch(literal){
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42149){
var state_val_42150 = (state_42149[(1)]);
if((state_val_42150 === (1))){
var inst_42140 = (state_42149[(7)]);
var inst_42140__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42141 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_42142 = [inst_42140__$1,literal];
var inst_42143 = cljs.core.PersistentHashMap.fromArrays(inst_42141,inst_42142);
var state_42149__$1 = (function (){var statearr_42151 = state_42149;
(statearr_42151[(7)] = inst_42140__$1);

return statearr_42151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42149__$1,(2),chess.engine.worker_engine.work_chan,inst_42143);
} else {
if((state_val_42150 === (2))){
var inst_42140 = (state_42149[(7)]);
var inst_42145 = (state_42149[(2)]);
var state_42149__$1 = (function (){var statearr_42152 = state_42149;
(statearr_42152[(8)] = inst_42145);

return statearr_42152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42149__$1,(3),inst_42140);
} else {
if((state_val_42150 === (3))){
var inst_42147 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42149__$1,inst_42147);
} else {
return null;
}
}
}
});
return (function() {
var chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__ = null;
var chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____0 = (function (){
var statearr_42153 = [null,null,null,null,null,null,null,null,null];
(statearr_42153[(0)] = chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__);

(statearr_42153[(1)] = (1));

return statearr_42153;
});
var chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____1 = (function (state_42149){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42149);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42154){if((e42154 instanceof Object)){
var ex__27097__auto__ = e42154;
var statearr_42155_42376 = state_42149;
(statearr_42155_42376[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42377 = state_42149;
state_42149 = G__42377;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__ = function(state_42149){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____1.call(this,state_42149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____0;
chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$dispatch_$_state_machine__27094__auto____1;
return chess$engine$worker_engine$dispatch_$_state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42156 = f__27117__auto__();
(statearr_42156[(6)] = c__27116__auto__);

return statearr_42156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
});
chess.engine.worker_engine.worker_engine = (function (){
if((typeof chess !== 'undefined') && (typeof chess.engine !== 'undefined') && (typeof chess.engine.worker_engine !== 'undefined') && (typeof chess.engine.worker_engine.t_chess$engine$worker_engine42157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {chess.engine.core.Engine}
 * @implements {cljs.core.IWithMeta}
*/
chess.engine.worker_engine.t_chess$engine$worker_engine42157 = (function (meta42158){
this.meta42158 = meta42158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42159,meta42158__$1){
var self__ = this;
var _42159__$1 = this;
return (new chess.engine.worker_engine.t_chess$engine$worker_engine42157(meta42158__$1));
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42159){
var self__ = this;
var _42159__$1 = this;
return self__.meta42158;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.chess$engine$core$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.chess$engine$core$Engine$apply_move$arity$3 = (function (_,board,move){
var self__ = this;
var ___$1 = this;
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42170){
var state_val_42171 = (state_42170[(1)]);
if((state_val_42171 === (1))){
var inst_42161 = (function (){return (function (form42160){
if((((form42160 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42160,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),board);
} else {
if((((form42160 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42160,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),move);
} else {
return form42160;

}
}
});
})();
var inst_42162 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null)));
var inst_42163 = clojure.walk.postwalk(inst_42161,inst_42162);
var inst_42164 = chess.engine.worker_engine.dispatch(inst_42163);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42170__$1,(2),inst_42164);
} else {
if((state_val_42171 === (2))){
var inst_42166 = (state_42170[(2)]);
var inst_42167 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_42166);
var inst_42168 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42167], 0));
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42170__$1,inst_42168);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42172 = [null,null,null,null,null,null,null];
(statearr_42172[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42172[(1)] = (1));

return statearr_42172;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42170){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42170);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42173){if((e42173 instanceof Object)){
var ex__27097__auto__ = e42173;
var statearr_42174_42378 = state_42170;
(statearr_42174_42378[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42379 = state_42170;
state_42170 = G__42379;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42170){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42175 = f__27117__auto__();
(statearr_42175[(6)] = c__27116__auto__);

return statearr_42175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.chess$engine$core$Engine$possible_moves$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42186){
var state_val_42187 = (state_42186[(1)]);
if((state_val_42187 === (1))){
var inst_42177 = (function (){return (function (form42176){
if((((form42176 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42176,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),board);
} else {
if((((form42176 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42176,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),color);
} else {
return form42176;

}
}
});
})();
var inst_42178 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.core","chess.engine.core",-1738754402,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Engine","Engine",545304390,null),new cljs.core.Symbol(null,"apply-move","apply-move",-822977126,null),new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"best-move","best-move",1788688860,null)], null)], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null)], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"possible-moves","possible-moves",1663319573,null),new cljs.core.Symbol(null,"local-engine","local-engine",1607625106,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)));
var inst_42179 = clojure.walk.postwalk(inst_42177,inst_42178);
var inst_42180 = chess.engine.worker_engine.dispatch(inst_42179);
var state_42186__$1 = state_42186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42186__$1,(2),inst_42180);
} else {
if((state_val_42187 === (2))){
var inst_42182 = (state_42186[(2)]);
var inst_42183 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_42182);
var inst_42184 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42183], 0));
var state_42186__$1 = state_42186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42186__$1,inst_42184);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42188 = [null,null,null,null,null,null,null];
(statearr_42188[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42188[(1)] = (1));

return statearr_42188;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42186){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42186);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42189){if((e42189 instanceof Object)){
var ex__27097__auto__ = e42189;
var statearr_42190_42380 = state_42186;
(statearr_42190_42380[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42381 = state_42186;
state_42186 = G__42381;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42186){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42191 = f__27117__auto__();
(statearr_42191[(6)] = c__27116__auto__);

return statearr_42191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.prototype.chess$engine$core$Engine$best_move$arity$3 = (function (_,board,color){
var self__ = this;
var ___$1 = this;
var c__27116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42205){
var state_val_42206 = (state_42205[(1)]);
if((state_val_42206 === (1))){
var inst_42192 = (function (){return (function (a,b){
return cljs.core.cons(b,a);
});
})();
var inst_42193 = cljs.core.PersistentVector.EMPTY;
var inst_42194 = (function (){return (function (move){
var c__27116__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27117__auto__ = (function (){var switch__27093__auto__ = (function (state_42217){
var state_val_42218 = (state_42217[(1)]);
if((state_val_42218 === (1))){
var inst_42208 = (function (){return (function (form42207){
if((((form42207 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42207,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"board","board",-266486106,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),board);
} else {
if((((form42207 instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form42207,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"move","move",-470352782,null)))))){
return clojure.walk.postwalk((function (p1__25537__25538__auto__){
if(cljs.core.seq_QMARK_(p1__25537__25538__auto__)){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),p1__25537__25538__auto__);
} else {
return p1__25537__25538__auto__;
}
}),move);
} else {
return form42207;

}
}
});
})();
var inst_42209 = cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chess.engine.local-engine","chess.engine.local-engine",1532474516,null),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move-value","move-value",2011801283,null)], null)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"move","move",-470352782,null),cljs.core.list(new cljs.core.Symbol(null,"move-value","move-value",2011801283,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"move","move",-470352782,null),(2))], null));
var inst_42210 = clojure.walk.postwalk(inst_42208,inst_42209);
var inst_42211 = chess.engine.worker_engine.dispatch(inst_42210);
var state_42217__$1 = state_42217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42217__$1,(2),inst_42211);
} else {
if((state_val_42218 === (2))){
var inst_42213 = (state_42217[(2)]);
var inst_42214 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_42213);
var inst_42215 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42214], 0));
var state_42217__$1 = state_42217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42217__$1,inst_42215);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42219 = [null,null,null,null,null,null,null];
(statearr_42219[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42219[(1)] = (1));

return statearr_42219;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42217){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42217);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42220){if((e42220 instanceof Object)){
var ex__27097__auto__ = e42220;
var statearr_42221_42382 = state_42217;
(statearr_42221_42382[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42383 = state_42217;
state_42217 = G__42383;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42217){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42222 = f__27117__auto__();
(statearr_42222[(6)] = c__27116__auto____$1);

return statearr_42222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto____$1;
});
})();
var inst_42195 = chess.engine.local_engine.local_engine.chess$engine$core$Engine$possible_moves$arity$3(null,board,color);
var inst_42196 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42194,inst_42195);
var inst_42197 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_42196);
var inst_42198 = cljs.core.async.reduce(inst_42192,inst_42193,inst_42197);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42205__$1,(2),inst_42198);
} else {
if((state_val_42206 === (2))){
var inst_42200 = (state_42205[(2)]);
var inst_42201 = chess.utils.maxf(cljs.core.second,inst_42200);
var inst_42202 = chess.engine.worker_engine.printl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["final result",inst_42201], 0));
var inst_42203 = cljs.core.first(inst_42202);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42205__$1,inst_42203);
} else {
return null;
}
}
});
return (function() {
var chess$engine$worker_engine$state_machine__27094__auto__ = null;
var chess$engine$worker_engine$state_machine__27094__auto____0 = (function (){
var statearr_42223 = [null,null,null,null,null,null,null];
(statearr_42223[(0)] = chess$engine$worker_engine$state_machine__27094__auto__);

(statearr_42223[(1)] = (1));

return statearr_42223;
});
var chess$engine$worker_engine$state_machine__27094__auto____1 = (function (state_42205){
while(true){
var ret_value__27095__auto__ = (function (){try{while(true){
var result__27096__auto__ = switch__27093__auto__(state_42205);
if(cljs.core.keyword_identical_QMARK_(result__27096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27096__auto__;
}
break;
}
}catch (e42224){if((e42224 instanceof Object)){
var ex__27097__auto__ = e42224;
var statearr_42225_42384 = state_42205;
(statearr_42225_42384[(5)] = ex__27097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42385 = state_42205;
state_42205 = G__42385;
continue;
} else {
return ret_value__27095__auto__;
}
break;
}
});
chess$engine$worker_engine$state_machine__27094__auto__ = function(state_42205){
switch(arguments.length){
case 0:
return chess$engine$worker_engine$state_machine__27094__auto____0.call(this);
case 1:
return chess$engine$worker_engine$state_machine__27094__auto____1.call(this,state_42205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$0 = chess$engine$worker_engine$state_machine__27094__auto____0;
chess$engine$worker_engine$state_machine__27094__auto__.cljs$core$IFn$_invoke$arity$1 = chess$engine$worker_engine$state_machine__27094__auto____1;
return chess$engine$worker_engine$state_machine__27094__auto__;
})()
})();
var state__27118__auto__ = (function (){var statearr_42226 = f__27117__auto__();
(statearr_42226[(6)] = c__27116__auto__);

return statearr_42226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27118__auto__);
}));

return c__27116__auto__;
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42158","meta42158",531420975,null)], null);
}));

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.cljs$lang$type = true);

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.cljs$lang$ctorStr = "chess.engine.worker-engine/t_chess$engine$worker_engine42157");

(chess.engine.worker_engine.t_chess$engine$worker_engine42157.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chess.engine.worker-engine/t_chess$engine$worker_engine42157");
}));

/**
 * Positional factory function for chess.engine.worker-engine/t_chess$engine$worker_engine42157.
 */
chess.engine.worker_engine.__GT_t_chess$engine$worker_engine42157 = (function chess$engine$worker_engine$__GT_t_chess$engine$worker_engine42157(meta42158){
return (new chess.engine.worker_engine.t_chess$engine$worker_engine42157(meta42158));
});

}

return (new chess.engine.worker_engine.t_chess$engine$worker_engine42157(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=chess.engine.worker_engine.js.map
