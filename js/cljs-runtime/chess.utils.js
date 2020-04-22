goog.provide('chess.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
chess.utils.nilmap = (function chess$utils$nilmap(x,f){
if((!((x == null)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return null;
}
});
chess.utils.zip = (function chess$utils$zip(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35933 = arguments.length;
var i__4790__auto___35934 = (0);
while(true){
if((i__4790__auto___35934 < len__4789__auto___35933)){
args__4795__auto__.push((arguments[i__4790__auto___35934]));

var G__35935 = (i__4790__auto___35934 + (1));
i__4790__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.cons(cljs.core.vector,seqs));
}));

(chess.utils.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.zip.cljs$lang$applyTo = (function (seq35847){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35847));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__35851 = xs;
var vec__35852 = G__35851;
var seq__35853 = cljs.core.seq(vec__35852);
var first__35854 = cljs.core.first(seq__35853);
var seq__35853__$1 = cljs.core.next(seq__35853);
var head = first__35854;
var remaining = seq__35853__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__35851__$1 = G__35851;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__35861 = G__35851__$1;
var seq__35862 = cljs.core.seq(vec__35861);
var first__35863 = cljs.core.first(seq__35862);
var seq__35862__$1 = cljs.core.next(seq__35862);
var head__$1 = first__35863;
var remaining__$1 = seq__35862__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__35864 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__35936 = remaining__$1;
var G__35937 = maxv;
var G__35938 = maxx;
G__35851__$1 = G__35936;
cur_max__$1 = G__35937;
cur_max_x__$1 = G__35938;
continue;
}
break;
}
});
chess.utils.init_worker = (function chess$utils$init_worker(handler){
return self.addEventListener("message",(function (e){
return postMessage(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__35867 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(e.data);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__35867) : handler.call(null,G__35867));
})()], 0)));
}));
});
chess.utils.load_worker = (function chess$utils$load_worker(filename){

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var reply_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var worker = (new Worker(filename));
worker.addEventListener("message",(function (e){
var c__26769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_35872){
var state_val_35873 = (state_35872[(1)]);
if((state_val_35873 === (1))){
var inst_35868 = e.data;
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35872__$1,(2),reply_chan,inst_35868);
} else {
if((state_val_35873 === (2))){
var inst_35870 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35872__$1,inst_35870);
} else {
return null;
}
}
});
return (function() {
var chess$utils$load_worker_$_state_machine__26732__auto__ = null;
var chess$utils$load_worker_$_state_machine__26732__auto____0 = (function (){
var statearr_35874 = [null,null,null,null,null,null,null];
(statearr_35874[(0)] = chess$utils$load_worker_$_state_machine__26732__auto__);

(statearr_35874[(1)] = (1));

return statearr_35874;
});
var chess$utils$load_worker_$_state_machine__26732__auto____1 = (function (state_35872){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_35872);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e35875){if((e35875 instanceof Object)){
var ex__26735__auto__ = e35875;
var statearr_35876_35939 = state_35872;
(statearr_35876_35939[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35940 = state_35872;
state_35872 = G__35940;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$utils$load_worker_$_state_machine__26732__auto__ = function(state_35872){
switch(arguments.length){
case 0:
return chess$utils$load_worker_$_state_machine__26732__auto____0.call(this);
case 1:
return chess$utils$load_worker_$_state_machine__26732__auto____1.call(this,state_35872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$utils$load_worker_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$utils$load_worker_$_state_machine__26732__auto____0;
chess$utils$load_worker_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$utils$load_worker_$_state_machine__26732__auto____1;
return chess$utils$load_worker_$_state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_35877 = f__26770__auto__();
(statearr_35877[(6)] = c__26769__auto__);

return statearr_35877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));

return c__26769__auto__;
}));

var c__26769__auto___35941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26770__auto__ = (function (){var switch__26731__auto__ = (function (state_35916){
var state_val_35917 = (state_35916[(1)]);
if((state_val_35917 === (7))){
var inst_35912 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
var statearr_35918_35949 = state_35916__$1;
(statearr_35918_35949[(2)] = inst_35912);

(statearr_35918_35949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (1))){
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35916__$1,(2),c);
} else {
if((state_val_35917 === (4))){
var inst_35914 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35916__$1,inst_35914);
} else {
if((state_val_35917 === (6))){
var state_35916__$1 = state_35916;
var statearr_35919_35951 = state_35916__$1;
(statearr_35919_35951[(2)] = null);

(statearr_35919_35951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (3))){
var inst_35889 = (state_35916[(7)]);
var inst_35894 = (state_35916[(8)]);
var inst_35894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35889,(0),null);
var inst_35895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35889,(1),null);
var inst_35896 = (inst_35894__$1 == null);
var inst_35897 = cljs.core.not(inst_35896);
var state_35916__$1 = (function (){var statearr_35920 = state_35916;
(statearr_35920[(9)] = inst_35895);

(statearr_35920[(8)] = inst_35894__$1);

return statearr_35920;
})();
if(inst_35897){
var statearr_35921_35955 = state_35916__$1;
(statearr_35921_35955[(1)] = (5));

} else {
var statearr_35922_35956 = state_35916__$1;
(statearr_35922_35956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (2))){
var inst_35886 = (state_35916[(2)]);
var inst_35887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35886,(0),null);
var inst_35888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35886,(1),null);
var inst_35889 = inst_35886;
var state_35916__$1 = (function (){var statearr_35923 = state_35916;
(statearr_35923[(10)] = inst_35888);

(statearr_35923[(7)] = inst_35889);

(statearr_35923[(11)] = inst_35887);

return statearr_35923;
})();
var statearr_35924_35957 = state_35916__$1;
(statearr_35924_35957[(2)] = null);

(statearr_35924_35957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (9))){
var inst_35895 = (state_35916[(9)]);
var inst_35902 = (state_35916[(2)]);
var inst_35903 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_35902);
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35916__$1,(8),inst_35895,inst_35903);
} else {
if((state_val_35917 === (5))){
var inst_35894 = (state_35916[(8)]);
var inst_35899 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35894], 0));
var inst_35900 = worker.postMessage(inst_35899);
var state_35916__$1 = (function (){var statearr_35925 = state_35916;
(statearr_35925[(12)] = inst_35900);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35916__$1,(9),reply_chan);
} else {
if((state_val_35917 === (10))){
var inst_35908 = (state_35916[(2)]);
var inst_35889 = inst_35908;
var state_35916__$1 = (function (){var statearr_35926 = state_35916;
(statearr_35926[(7)] = inst_35889);

return statearr_35926;
})();
var statearr_35927_35961 = state_35916__$1;
(statearr_35927_35961[(2)] = null);

(statearr_35927_35961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (8))){
var inst_35895 = (state_35916[(9)]);
var inst_35905 = (state_35916[(2)]);
var inst_35906 = cljs.core.async.close_BANG_(inst_35895);
var state_35916__$1 = (function (){var statearr_35928 = state_35916;
(statearr_35928[(13)] = inst_35906);

(statearr_35928[(14)] = inst_35905);

return statearr_35928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35916__$1,(10),c);
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
});
return (function() {
var chess$utils$load_worker_$_state_machine__26732__auto__ = null;
var chess$utils$load_worker_$_state_machine__26732__auto____0 = (function (){
var statearr_35929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35929[(0)] = chess$utils$load_worker_$_state_machine__26732__auto__);

(statearr_35929[(1)] = (1));

return statearr_35929;
});
var chess$utils$load_worker_$_state_machine__26732__auto____1 = (function (state_35916){
while(true){
var ret_value__26733__auto__ = (function (){try{while(true){
var result__26734__auto__ = switch__26731__auto__(state_35916);
if(cljs.core.keyword_identical_QMARK_(result__26734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26734__auto__;
}
break;
}
}catch (e35930){if((e35930 instanceof Object)){
var ex__26735__auto__ = e35930;
var statearr_35931_35970 = state_35916;
(statearr_35931_35970[(5)] = ex__26735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35971 = state_35916;
state_35916 = G__35971;
continue;
} else {
return ret_value__26733__auto__;
}
break;
}
});
chess$utils$load_worker_$_state_machine__26732__auto__ = function(state_35916){
switch(arguments.length){
case 0:
return chess$utils$load_worker_$_state_machine__26732__auto____0.call(this);
case 1:
return chess$utils$load_worker_$_state_machine__26732__auto____1.call(this,state_35916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chess$utils$load_worker_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$0 = chess$utils$load_worker_$_state_machine__26732__auto____0;
chess$utils$load_worker_$_state_machine__26732__auto__.cljs$core$IFn$_invoke$arity$1 = chess$utils$load_worker_$_state_machine__26732__auto____1;
return chess$utils$load_worker_$_state_machine__26732__auto__;
})()
})();
var state__26771__auto__ = (function (){var statearr_35932 = f__26770__auto__();
(statearr_35932[(6)] = c__26769__auto___35941);

return statearr_35932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26771__auto__);
}));


return c;
});

//# sourceMappingURL=chess.utils.js.map
