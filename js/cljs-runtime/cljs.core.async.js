goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40530 = arguments.length;
switch (G__40530) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40537 = (function (f,blockable,meta40538){
this.f = f;
this.blockable = blockable;
this.meta40538 = meta40538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40539,meta40538__$1){
var self__ = this;
var _40539__$1 = this;
return (new cljs.core.async.t_cljs$core$async40537(self__.f,self__.blockable,meta40538__$1));
}));

(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40539){
var self__ = this;
var _40539__$1 = this;
return self__.meta40538;
}));

(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40538","meta40538",-1429831286,null)], null);
}));

(cljs.core.async.t_cljs$core$async40537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40537");

(cljs.core.async.t_cljs$core$async40537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40537.
 */
cljs.core.async.__GT_t_cljs$core$async40537 = (function cljs$core$async$__GT_t_cljs$core$async40537(f__$1,blockable__$1,meta40538){
return (new cljs.core.async.t_cljs$core$async40537(f__$1,blockable__$1,meta40538));
});

}

return (new cljs.core.async.t_cljs$core$async40537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40554 = arguments.length;
switch (G__40554) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40557 = arguments.length;
switch (G__40557) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40561 = arguments.length;
switch (G__40561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43710 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43710) : fn1.call(null,val_43710));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43710) : fn1.call(null,val_43710));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40567 = arguments.length;
switch (G__40567) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___43715 = n;
var x_43716 = (0);
while(true){
if((x_43716 < n__4613__auto___43715)){
(a[x_43716] = x_43716);

var G__43717 = (x_43716 + (1));
x_43716 = G__43717;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40577 = (function (flag,meta40578){
this.flag = flag;
this.meta40578 = meta40578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40579,meta40578__$1){
var self__ = this;
var _40579__$1 = this;
return (new cljs.core.async.t_cljs$core$async40577(self__.flag,meta40578__$1));
}));

(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40579){
var self__ = this;
var _40579__$1 = this;
return self__.meta40578;
}));

(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40578","meta40578",347898688,null)], null);
}));

(cljs.core.async.t_cljs$core$async40577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40577");

(cljs.core.async.t_cljs$core$async40577.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40577.
 */
cljs.core.async.__GT_t_cljs$core$async40577 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40577(flag__$1,meta40578){
return (new cljs.core.async.t_cljs$core$async40577(flag__$1,meta40578));
});

}

return (new cljs.core.async.t_cljs$core$async40577(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40586 = (function (flag,cb,meta40587){
this.flag = flag;
this.cb = cb;
this.meta40587 = meta40587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40588,meta40587__$1){
var self__ = this;
var _40588__$1 = this;
return (new cljs.core.async.t_cljs$core$async40586(self__.flag,self__.cb,meta40587__$1));
}));

(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40588){
var self__ = this;
var _40588__$1 = this;
return self__.meta40587;
}));

(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40587","meta40587",836054805,null)], null);
}));

(cljs.core.async.t_cljs$core$async40586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40586");

(cljs.core.async.t_cljs$core$async40586.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40586.
 */
cljs.core.async.__GT_t_cljs$core$async40586 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40586(flag__$1,cb__$1,meta40587){
return (new cljs.core.async.t_cljs$core$async40586(flag__$1,cb__$1,meta40587));
});

}

return (new cljs.core.async.t_cljs$core$async40586(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40595_SHARP_){
var G__40602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40595_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40602) : fret.call(null,G__40602));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40596_SHARP_){
var G__40603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40596_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40603) : fret.call(null,G__40603));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43743 = (i + (1));
i = G__43743;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43745 = arguments.length;
var i__4737__auto___43746 = (0);
while(true){
if((i__4737__auto___43746 < len__4736__auto___43745)){
args__4742__auto__.push((arguments[i__4737__auto___43746]));

var G__43747 = (i__4737__auto___43746 + (1));
i__4737__auto___43746 = G__43747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40610){
var map__40611 = p__40610;
var map__40611__$1 = (((((!((map__40611 == null))))?(((((map__40611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40611):map__40611);
var opts = map__40611__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40607){
var G__40608 = cljs.core.first(seq40607);
var seq40607__$1 = cljs.core.next(seq40607);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40608,seq40607__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40626 = arguments.length;
switch (G__40626) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40432__auto___43765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_40694){
var state_val_40695 = (state_40694[(1)]);
if((state_val_40695 === (7))){
var inst_40683 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
var statearr_40720_43771 = state_40694__$1;
(statearr_40720_43771[(2)] = inst_40683);

(statearr_40720_43771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (1))){
var state_40694__$1 = state_40694;
var statearr_40721_43773 = state_40694__$1;
(statearr_40721_43773[(2)] = null);

(statearr_40721_43773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (4))){
var inst_40658 = (state_40694[(7)]);
var inst_40658__$1 = (state_40694[(2)]);
var inst_40660 = (inst_40658__$1 == null);
var state_40694__$1 = (function (){var statearr_40725 = state_40694;
(statearr_40725[(7)] = inst_40658__$1);

return statearr_40725;
})();
if(cljs.core.truth_(inst_40660)){
var statearr_40726_43777 = state_40694__$1;
(statearr_40726_43777[(1)] = (5));

} else {
var statearr_40727_43778 = state_40694__$1;
(statearr_40727_43778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (13))){
var state_40694__$1 = state_40694;
var statearr_40730_43779 = state_40694__$1;
(statearr_40730_43779[(2)] = null);

(statearr_40730_43779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (6))){
var inst_40658 = (state_40694[(7)]);
var state_40694__$1 = state_40694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40694__$1,(11),to,inst_40658);
} else {
if((state_val_40695 === (3))){
var inst_40686 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40694__$1,inst_40686);
} else {
if((state_val_40695 === (12))){
var state_40694__$1 = state_40694;
var statearr_40747_43802 = state_40694__$1;
(statearr_40747_43802[(2)] = null);

(statearr_40747_43802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (2))){
var state_40694__$1 = state_40694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40694__$1,(4),from);
} else {
if((state_val_40695 === (11))){
var inst_40675 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
if(cljs.core.truth_(inst_40675)){
var statearr_40748_43803 = state_40694__$1;
(statearr_40748_43803[(1)] = (12));

} else {
var statearr_40749_43804 = state_40694__$1;
(statearr_40749_43804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (9))){
var state_40694__$1 = state_40694;
var statearr_40750_43806 = state_40694__$1;
(statearr_40750_43806[(2)] = null);

(statearr_40750_43806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (5))){
var state_40694__$1 = state_40694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40752_43807 = state_40694__$1;
(statearr_40752_43807[(1)] = (8));

} else {
var statearr_40753_43808 = state_40694__$1;
(statearr_40753_43808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (14))){
var inst_40681 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
var statearr_40754_43812 = state_40694__$1;
(statearr_40754_43812[(2)] = inst_40681);

(statearr_40754_43812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (10))){
var inst_40668 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
var statearr_40756_43813 = state_40694__$1;
(statearr_40756_43813[(2)] = inst_40668);

(statearr_40756_43813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40695 === (8))){
var inst_40665 = cljs.core.async.close_BANG_(to);
var state_40694__$1 = state_40694;
var statearr_40757_43814 = state_40694__$1;
(statearr_40757_43814[(2)] = inst_40665);

(statearr_40757_43814[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_40759 = [null,null,null,null,null,null,null,null];
(statearr_40759[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_40759[(1)] = (1));

return statearr_40759;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_40694){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_40694);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e40761){var ex__39851__auto__ = e40761;
var statearr_40762_43818 = state_40694;
(statearr_40762_43818[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_40694[(4)]))){
var statearr_40764_43820 = state_40694;
(statearr_40764_43820[(1)] = cljs.core.first((state_40694[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43822 = state_40694;
state_40694 = G__43822;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_40694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_40694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_40765 = f__40433__auto__();
(statearr_40765[(6)] = c__40432__auto___43765);

return statearr_40765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__40772){
var vec__40773 = p__40772;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40773,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40773,(1),null);
var job = vec__40773;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40432__auto___43826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_40780){
var state_val_40781 = (state_40780[(1)]);
if((state_val_40781 === (1))){
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40780__$1,(2),res,v);
} else {
if((state_val_40781 === (2))){
var inst_40777 = (state_40780[(2)]);
var inst_40778 = cljs.core.async.close_BANG_(res);
var state_40780__$1 = (function (){var statearr_40803 = state_40780;
(statearr_40803[(7)] = inst_40777);

return statearr_40803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40780__$1,inst_40778);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_40804 = [null,null,null,null,null,null,null,null];
(statearr_40804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__);

(statearr_40804[(1)] = (1));

return statearr_40804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1 = (function (state_40780){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_40780);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e40807){var ex__39851__auto__ = e40807;
var statearr_40808_43832 = state_40780;
(statearr_40808_43832[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_40780[(4)]))){
var statearr_40810_43833 = state_40780;
(statearr_40810_43833[(1)] = cljs.core.first((state_40780[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43834 = state_40780;
state_40780 = G__43834;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = function(state_40780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1.call(this,state_40780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_40812 = f__40433__auto__();
(statearr_40812[(6)] = c__40432__auto___43826);

return statearr_40812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40814){
var vec__40818 = p__40814;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40818,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40818,(1),null);
var job = vec__40818;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___43843 = n;
var __43844 = (0);
while(true){
if((__43844 < n__4613__auto___43843)){
var G__40821_43845 = type;
var G__40821_43846__$1 = (((G__40821_43845 instanceof cljs.core.Keyword))?G__40821_43845.fqn:null);
switch (G__40821_43846__$1) {
case "compute":
var c__40432__auto___43848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43844,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = ((function (__43844,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function (state_40840){
var state_val_40841 = (state_40840[(1)]);
if((state_val_40841 === (1))){
var state_40840__$1 = state_40840;
var statearr_40842_43849 = state_40840__$1;
(statearr_40842_43849[(2)] = null);

(statearr_40842_43849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (2))){
var state_40840__$1 = state_40840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40840__$1,(4),jobs);
} else {
if((state_val_40841 === (3))){
var inst_40835 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40840__$1,inst_40835);
} else {
if((state_val_40841 === (4))){
var inst_40826 = (state_40840[(2)]);
var inst_40827 = process(inst_40826);
var state_40840__$1 = state_40840;
if(cljs.core.truth_(inst_40827)){
var statearr_40861_43850 = state_40840__$1;
(statearr_40861_43850[(1)] = (5));

} else {
var statearr_40864_43851 = state_40840__$1;
(statearr_40864_43851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (5))){
var state_40840__$1 = state_40840;
var statearr_40865_43852 = state_40840__$1;
(statearr_40865_43852[(2)] = null);

(statearr_40865_43852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (6))){
var state_40840__$1 = state_40840;
var statearr_40866_43853 = state_40840__$1;
(statearr_40866_43853[(2)] = null);

(statearr_40866_43853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (7))){
var inst_40833 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40867_43855 = state_40840__$1;
(statearr_40867_43855[(2)] = inst_40833);

(statearr_40867_43855[(1)] = (3));


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
});})(__43844,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
;
return ((function (__43844,switch__39847__auto__,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_40868 = [null,null,null,null,null,null,null];
(statearr_40868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__);

(statearr_40868[(1)] = (1));

return statearr_40868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1 = (function (state_40840){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_40840);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e40869){var ex__39851__auto__ = e40869;
var statearr_40870_43857 = state_40840;
(statearr_40870_43857[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_40840[(4)]))){
var statearr_40871_43858 = state_40840;
(statearr_40871_43858[(1)] = cljs.core.first((state_40840[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43863 = state_40840;
state_40840 = G__43863;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = function(state_40840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1.call(this,state_40840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__;
})()
;})(__43844,switch__39847__auto__,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
})();
var state__40434__auto__ = (function (){var statearr_40872 = f__40433__auto__();
(statearr_40872[(6)] = c__40432__auto___43848);

return statearr_40872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
});})(__43844,c__40432__auto___43848,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
);


break;
case "async":
var c__40432__auto___43866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43844,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = ((function (__43844,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function (state_40885){
var state_val_40886 = (state_40885[(1)]);
if((state_val_40886 === (1))){
var state_40885__$1 = state_40885;
var statearr_40888_43872 = state_40885__$1;
(statearr_40888_43872[(2)] = null);

(statearr_40888_43872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (2))){
var state_40885__$1 = state_40885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40885__$1,(4),jobs);
} else {
if((state_val_40886 === (3))){
var inst_40883 = (state_40885[(2)]);
var state_40885__$1 = state_40885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40885__$1,inst_40883);
} else {
if((state_val_40886 === (4))){
var inst_40875 = (state_40885[(2)]);
var inst_40876 = async(inst_40875);
var state_40885__$1 = state_40885;
if(cljs.core.truth_(inst_40876)){
var statearr_40892_43876 = state_40885__$1;
(statearr_40892_43876[(1)] = (5));

} else {
var statearr_40893_43877 = state_40885__$1;
(statearr_40893_43877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (5))){
var state_40885__$1 = state_40885;
var statearr_40894_43880 = state_40885__$1;
(statearr_40894_43880[(2)] = null);

(statearr_40894_43880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (6))){
var state_40885__$1 = state_40885;
var statearr_40895_43906 = state_40885__$1;
(statearr_40895_43906[(2)] = null);

(statearr_40895_43906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (7))){
var inst_40881 = (state_40885[(2)]);
var state_40885__$1 = state_40885;
var statearr_40896_43907 = state_40885__$1;
(statearr_40896_43907[(2)] = inst_40881);

(statearr_40896_43907[(1)] = (3));


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
});})(__43844,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
;
return ((function (__43844,switch__39847__auto__,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_40897 = [null,null,null,null,null,null,null];
(statearr_40897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__);

(statearr_40897[(1)] = (1));

return statearr_40897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1 = (function (state_40885){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_40885);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e40898){var ex__39851__auto__ = e40898;
var statearr_40899_43921 = state_40885;
(statearr_40899_43921[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_40885[(4)]))){
var statearr_40900_43922 = state_40885;
(statearr_40900_43922[(1)] = cljs.core.first((state_40885[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43926 = state_40885;
state_40885 = G__43926;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = function(state_40885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1.call(this,state_40885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__;
})()
;})(__43844,switch__39847__auto__,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
})();
var state__40434__auto__ = (function (){var statearr_40901 = f__40433__auto__();
(statearr_40901[(6)] = c__40432__auto___43866);

return statearr_40901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
});})(__43844,c__40432__auto___43866,G__40821_43845,G__40821_43846__$1,n__4613__auto___43843,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40821_43846__$1)].join('')));

}

var G__43929 = (__43844 + (1));
__43844 = G__43929;
continue;
} else {
}
break;
}

var c__40432__auto___43930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_40937){
var state_val_40942 = (state_40937[(1)]);
if((state_val_40942 === (7))){
var inst_40931 = (state_40937[(2)]);
var state_40937__$1 = state_40937;
var statearr_40947_43933 = state_40937__$1;
(statearr_40947_43933[(2)] = inst_40931);

(statearr_40947_43933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (1))){
var state_40937__$1 = state_40937;
var statearr_40948_43934 = state_40937__$1;
(statearr_40948_43934[(2)] = null);

(statearr_40948_43934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (4))){
var inst_40908 = (state_40937[(7)]);
var inst_40908__$1 = (state_40937[(2)]);
var inst_40909 = (inst_40908__$1 == null);
var state_40937__$1 = (function (){var statearr_40950 = state_40937;
(statearr_40950[(7)] = inst_40908__$1);

return statearr_40950;
})();
if(cljs.core.truth_(inst_40909)){
var statearr_40951_43935 = state_40937__$1;
(statearr_40951_43935[(1)] = (5));

} else {
var statearr_40952_43936 = state_40937__$1;
(statearr_40952_43936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (6))){
var inst_40914 = (state_40937[(8)]);
var inst_40908 = (state_40937[(7)]);
var inst_40914__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40917 = [inst_40908,inst_40914__$1];
var inst_40918 = (new cljs.core.PersistentVector(null,2,(5),inst_40916,inst_40917,null));
var state_40937__$1 = (function (){var statearr_40955 = state_40937;
(statearr_40955[(8)] = inst_40914__$1);

return statearr_40955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40937__$1,(8),jobs,inst_40918);
} else {
if((state_val_40942 === (3))){
var inst_40933 = (state_40937[(2)]);
var state_40937__$1 = state_40937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40937__$1,inst_40933);
} else {
if((state_val_40942 === (2))){
var state_40937__$1 = state_40937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40937__$1,(4),from);
} else {
if((state_val_40942 === (9))){
var inst_40925 = (state_40937[(2)]);
var state_40937__$1 = (function (){var statearr_40957 = state_40937;
(statearr_40957[(9)] = inst_40925);

return statearr_40957;
})();
var statearr_40960_43943 = state_40937__$1;
(statearr_40960_43943[(2)] = null);

(statearr_40960_43943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (5))){
var inst_40911 = cljs.core.async.close_BANG_(jobs);
var state_40937__$1 = state_40937;
var statearr_40961_43945 = state_40937__$1;
(statearr_40961_43945[(2)] = inst_40911);

(statearr_40961_43945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (8))){
var inst_40914 = (state_40937[(8)]);
var inst_40920 = (state_40937[(2)]);
var state_40937__$1 = (function (){var statearr_40962 = state_40937;
(statearr_40962[(10)] = inst_40920);

return statearr_40962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40937__$1,(9),results,inst_40914);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_40972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__);

(statearr_40972[(1)] = (1));

return statearr_40972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1 = (function (state_40937){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_40937);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e40974){var ex__39851__auto__ = e40974;
var statearr_40975_43960 = state_40937;
(statearr_40975_43960[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_40937[(4)]))){
var statearr_40976_43961 = state_40937;
(statearr_40976_43961[(1)] = cljs.core.first((state_40937[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43962 = state_40937;
state_40937 = G__43962;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = function(state_40937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1.call(this,state_40937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_40983 = f__40433__auto__();
(statearr_40983[(6)] = c__40432__auto___43930);

return statearr_40983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


var c__40432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41026){
var state_val_41027 = (state_41026[(1)]);
if((state_val_41027 === (7))){
var inst_41022 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41028_43964 = state_41026__$1;
(statearr_41028_43964[(2)] = inst_41022);

(statearr_41028_43964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (20))){
var state_41026__$1 = state_41026;
var statearr_41032_43965 = state_41026__$1;
(statearr_41032_43965[(2)] = null);

(statearr_41032_43965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (1))){
var state_41026__$1 = state_41026;
var statearr_41037_43966 = state_41026__$1;
(statearr_41037_43966[(2)] = null);

(statearr_41037_43966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (4))){
var inst_40987 = (state_41026[(7)]);
var inst_40987__$1 = (state_41026[(2)]);
var inst_40990 = (inst_40987__$1 == null);
var state_41026__$1 = (function (){var statearr_41038 = state_41026;
(statearr_41038[(7)] = inst_40987__$1);

return statearr_41038;
})();
if(cljs.core.truth_(inst_40990)){
var statearr_41039_43971 = state_41026__$1;
(statearr_41039_43971[(1)] = (5));

} else {
var statearr_41040_43972 = state_41026__$1;
(statearr_41040_43972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (15))){
var inst_41004 = (state_41026[(8)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41026__$1,(18),to,inst_41004);
} else {
if((state_val_41027 === (21))){
var inst_41017 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41042_43973 = state_41026__$1;
(statearr_41042_43973[(2)] = inst_41017);

(statearr_41042_43973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (13))){
var inst_41019 = (state_41026[(2)]);
var state_41026__$1 = (function (){var statearr_41043 = state_41026;
(statearr_41043[(9)] = inst_41019);

return statearr_41043;
})();
var statearr_41044_43974 = state_41026__$1;
(statearr_41044_43974[(2)] = null);

(statearr_41044_43974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (6))){
var inst_40987 = (state_41026[(7)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41026__$1,(11),inst_40987);
} else {
if((state_val_41027 === (17))){
var inst_41012 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
if(cljs.core.truth_(inst_41012)){
var statearr_41047_43976 = state_41026__$1;
(statearr_41047_43976[(1)] = (19));

} else {
var statearr_41048_43977 = state_41026__$1;
(statearr_41048_43977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (3))){
var inst_41024 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41026__$1,inst_41024);
} else {
if((state_val_41027 === (12))){
var inst_40999 = (state_41026[(10)]);
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41026__$1,(14),inst_40999);
} else {
if((state_val_41027 === (2))){
var state_41026__$1 = state_41026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41026__$1,(4),results);
} else {
if((state_val_41027 === (19))){
var state_41026__$1 = state_41026;
var statearr_41052_43978 = state_41026__$1;
(statearr_41052_43978[(2)] = null);

(statearr_41052_43978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (11))){
var inst_40999 = (state_41026[(2)]);
var state_41026__$1 = (function (){var statearr_41056 = state_41026;
(statearr_41056[(10)] = inst_40999);

return statearr_41056;
})();
var statearr_41057_43979 = state_41026__$1;
(statearr_41057_43979[(2)] = null);

(statearr_41057_43979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (9))){
var state_41026__$1 = state_41026;
var statearr_41058_43980 = state_41026__$1;
(statearr_41058_43980[(2)] = null);

(statearr_41058_43980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (5))){
var state_41026__$1 = state_41026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41059_43981 = state_41026__$1;
(statearr_41059_43981[(1)] = (8));

} else {
var statearr_41064_43982 = state_41026__$1;
(statearr_41064_43982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (14))){
var inst_41004 = (state_41026[(8)]);
var inst_41004__$1 = (state_41026[(2)]);
var inst_41005 = (inst_41004__$1 == null);
var inst_41006 = cljs.core.not(inst_41005);
var state_41026__$1 = (function (){var statearr_41083 = state_41026;
(statearr_41083[(8)] = inst_41004__$1);

return statearr_41083;
})();
if(inst_41006){
var statearr_41087_43983 = state_41026__$1;
(statearr_41087_43983[(1)] = (15));

} else {
var statearr_41088_43984 = state_41026__$1;
(statearr_41088_43984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (16))){
var state_41026__$1 = state_41026;
var statearr_41089_43985 = state_41026__$1;
(statearr_41089_43985[(2)] = false);

(statearr_41089_43985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (10))){
var inst_40996 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41094_43986 = state_41026__$1;
(statearr_41094_43986[(2)] = inst_40996);

(statearr_41094_43986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (18))){
var inst_41009 = (state_41026[(2)]);
var state_41026__$1 = state_41026;
var statearr_41098_43989 = state_41026__$1;
(statearr_41098_43989[(2)] = inst_41009);

(statearr_41098_43989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41027 === (8))){
var inst_40993 = cljs.core.async.close_BANG_(to);
var state_41026__$1 = state_41026;
var statearr_41099_43994 = state_41026__$1;
(statearr_41099_43994[(2)] = inst_40993);

(statearr_41099_43994[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_41104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__);

(statearr_41104[(1)] = (1));

return statearr_41104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1 = (function (state_41026){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41026);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41106){var ex__39851__auto__ = e41106;
var statearr_41110_44000 = state_41026;
(statearr_41110_44000[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41026[(4)]))){
var statearr_41111_44001 = state_41026;
(statearr_41111_44001[(1)] = cljs.core.first((state_41026[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44003 = state_41026;
state_41026 = G__44003;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__ = function(state_41026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1.call(this,state_41026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41116 = f__40433__auto__();
(statearr_41116[(6)] = c__40432__auto__);

return statearr_41116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));

return c__40432__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41124 = arguments.length;
switch (G__41124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41140 = arguments.length;
switch (G__41140) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41147 = arguments.length;
switch (G__41147) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__40432__auto___44045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41184){
var state_val_41185 = (state_41184[(1)]);
if((state_val_41185 === (7))){
var inst_41180 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
var statearr_41189_44060 = state_41184__$1;
(statearr_41189_44060[(2)] = inst_41180);

(statearr_41189_44060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (1))){
var state_41184__$1 = state_41184;
var statearr_41190_44063 = state_41184__$1;
(statearr_41190_44063[(2)] = null);

(statearr_41190_44063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (4))){
var inst_41161 = (state_41184[(7)]);
var inst_41161__$1 = (state_41184[(2)]);
var inst_41162 = (inst_41161__$1 == null);
var state_41184__$1 = (function (){var statearr_41196 = state_41184;
(statearr_41196[(7)] = inst_41161__$1);

return statearr_41196;
})();
if(cljs.core.truth_(inst_41162)){
var statearr_41200_44068 = state_41184__$1;
(statearr_41200_44068[(1)] = (5));

} else {
var statearr_41201_44069 = state_41184__$1;
(statearr_41201_44069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (13))){
var state_41184__$1 = state_41184;
var statearr_41202_44072 = state_41184__$1;
(statearr_41202_44072[(2)] = null);

(statearr_41202_44072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (6))){
var inst_41161 = (state_41184[(7)]);
var inst_41167 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41161) : p.call(null,inst_41161));
var state_41184__$1 = state_41184;
if(cljs.core.truth_(inst_41167)){
var statearr_41211_44074 = state_41184__$1;
(statearr_41211_44074[(1)] = (9));

} else {
var statearr_41217_44078 = state_41184__$1;
(statearr_41217_44078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (3))){
var inst_41182 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41184__$1,inst_41182);
} else {
if((state_val_41185 === (12))){
var state_41184__$1 = state_41184;
var statearr_41242_44079 = state_41184__$1;
(statearr_41242_44079[(2)] = null);

(statearr_41242_44079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (2))){
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41184__$1,(4),ch);
} else {
if((state_val_41185 === (11))){
var inst_41161 = (state_41184[(7)]);
var inst_41171 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41184__$1,(8),inst_41171,inst_41161);
} else {
if((state_val_41185 === (9))){
var state_41184__$1 = state_41184;
var statearr_41258_44082 = state_41184__$1;
(statearr_41258_44082[(2)] = tc);

(statearr_41258_44082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (5))){
var inst_41164 = cljs.core.async.close_BANG_(tc);
var inst_41165 = cljs.core.async.close_BANG_(fc);
var state_41184__$1 = (function (){var statearr_41260 = state_41184;
(statearr_41260[(8)] = inst_41164);

return statearr_41260;
})();
var statearr_41261_44088 = state_41184__$1;
(statearr_41261_44088[(2)] = inst_41165);

(statearr_41261_44088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (14))){
var inst_41178 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
var statearr_41263_44092 = state_41184__$1;
(statearr_41263_44092[(2)] = inst_41178);

(statearr_41263_44092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (10))){
var state_41184__$1 = state_41184;
var statearr_41264_44093 = state_41184__$1;
(statearr_41264_44093[(2)] = fc);

(statearr_41264_44093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (8))){
var inst_41173 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
if(cljs.core.truth_(inst_41173)){
var statearr_41265_44095 = state_41184__$1;
(statearr_41265_44095[(1)] = (12));

} else {
var statearr_41266_44098 = state_41184__$1;
(statearr_41266_44098[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_41267 = [null,null,null,null,null,null,null,null,null];
(statearr_41267[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_41267[(1)] = (1));

return statearr_41267;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_41184){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41184);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41268){var ex__39851__auto__ = e41268;
var statearr_41269_44102 = state_41184;
(statearr_41269_44102[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41184[(4)]))){
var statearr_41270_44103 = state_41184;
(statearr_41270_44103[(1)] = cljs.core.first((state_41184[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44104 = state_41184;
state_41184 = G__44104;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_41184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_41184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41272 = f__40433__auto__();
(statearr_41272[(6)] = c__40432__auto___44045);

return statearr_41272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41307){
var state_val_41308 = (state_41307[(1)]);
if((state_val_41308 === (7))){
var inst_41303 = (state_41307[(2)]);
var state_41307__$1 = state_41307;
var statearr_41309_44146 = state_41307__$1;
(statearr_41309_44146[(2)] = inst_41303);

(statearr_41309_44146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (1))){
var inst_41282 = init;
var inst_41283 = inst_41282;
var state_41307__$1 = (function (){var statearr_41310 = state_41307;
(statearr_41310[(7)] = inst_41283);

return statearr_41310;
})();
var statearr_41311_44149 = state_41307__$1;
(statearr_41311_44149[(2)] = null);

(statearr_41311_44149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (4))){
var inst_41286 = (state_41307[(8)]);
var inst_41286__$1 = (state_41307[(2)]);
var inst_41287 = (inst_41286__$1 == null);
var state_41307__$1 = (function (){var statearr_41313 = state_41307;
(statearr_41313[(8)] = inst_41286__$1);

return statearr_41313;
})();
if(cljs.core.truth_(inst_41287)){
var statearr_41314_44153 = state_41307__$1;
(statearr_41314_44153[(1)] = (5));

} else {
var statearr_41315_44154 = state_41307__$1;
(statearr_41315_44154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (6))){
var inst_41290 = (state_41307[(9)]);
var inst_41283 = (state_41307[(7)]);
var inst_41286 = (state_41307[(8)]);
var inst_41290__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41283,inst_41286) : f.call(null,inst_41283,inst_41286));
var inst_41291 = cljs.core.reduced_QMARK_(inst_41290__$1);
var state_41307__$1 = (function (){var statearr_41316 = state_41307;
(statearr_41316[(9)] = inst_41290__$1);

return statearr_41316;
})();
if(inst_41291){
var statearr_41317_44159 = state_41307__$1;
(statearr_41317_44159[(1)] = (8));

} else {
var statearr_41318_44162 = state_41307__$1;
(statearr_41318_44162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (3))){
var inst_41305 = (state_41307[(2)]);
var state_41307__$1 = state_41307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41307__$1,inst_41305);
} else {
if((state_val_41308 === (2))){
var state_41307__$1 = state_41307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41307__$1,(4),ch);
} else {
if((state_val_41308 === (9))){
var inst_41290 = (state_41307[(9)]);
var inst_41283 = inst_41290;
var state_41307__$1 = (function (){var statearr_41319 = state_41307;
(statearr_41319[(7)] = inst_41283);

return statearr_41319;
})();
var statearr_41320_44168 = state_41307__$1;
(statearr_41320_44168[(2)] = null);

(statearr_41320_44168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (5))){
var inst_41283 = (state_41307[(7)]);
var state_41307__$1 = state_41307;
var statearr_41321_44169 = state_41307__$1;
(statearr_41321_44169[(2)] = inst_41283);

(statearr_41321_44169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (10))){
var inst_41301 = (state_41307[(2)]);
var state_41307__$1 = state_41307;
var statearr_41325_44173 = state_41307__$1;
(statearr_41325_44173[(2)] = inst_41301);

(statearr_41325_44173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41308 === (8))){
var inst_41290 = (state_41307[(9)]);
var inst_41297 = cljs.core.deref(inst_41290);
var state_41307__$1 = state_41307;
var statearr_41326_44176 = state_41307__$1;
(statearr_41326_44176[(2)] = inst_41297);

(statearr_41326_44176[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39848__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39848__auto____0 = (function (){
var statearr_41327 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41327[(0)] = cljs$core$async$reduce_$_state_machine__39848__auto__);

(statearr_41327[(1)] = (1));

return statearr_41327;
});
var cljs$core$async$reduce_$_state_machine__39848__auto____1 = (function (state_41307){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41307);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41328){var ex__39851__auto__ = e41328;
var statearr_41329_44180 = state_41307;
(statearr_41329_44180[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41307[(4)]))){
var statearr_41330_44182 = state_41307;
(statearr_41330_44182[(1)] = cljs.core.first((state_41307[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44190 = state_41307;
state_41307 = G__44190;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39848__auto__ = function(state_41307){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39848__auto____1.call(this,state_41307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39848__auto____0;
cljs$core$async$reduce_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39848__auto____1;
return cljs$core$async$reduce_$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41331 = f__40433__auto__();
(statearr_41331[(6)] = c__40432__auto__);

return statearr_41331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));

return c__40432__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41346){
var state_val_41347 = (state_41346[(1)]);
if((state_val_41347 === (1))){
var inst_41341 = cljs.core.async.reduce(f__$1,init,ch);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41346__$1,(2),inst_41341);
} else {
if((state_val_41347 === (2))){
var inst_41343 = (state_41346[(2)]);
var inst_41344 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41343) : f__$1.call(null,inst_41343));
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41346__$1,inst_41344);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39848__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39848__auto____0 = (function (){
var statearr_41352 = [null,null,null,null,null,null,null];
(statearr_41352[(0)] = cljs$core$async$transduce_$_state_machine__39848__auto__);

(statearr_41352[(1)] = (1));

return statearr_41352;
});
var cljs$core$async$transduce_$_state_machine__39848__auto____1 = (function (state_41346){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41346);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41353){var ex__39851__auto__ = e41353;
var statearr_41354_44207 = state_41346;
(statearr_41354_44207[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41346[(4)]))){
var statearr_41355_44208 = state_41346;
(statearr_41355_44208[(1)] = cljs.core.first((state_41346[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44213 = state_41346;
state_41346 = G__44213;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39848__auto__ = function(state_41346){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39848__auto____1.call(this,state_41346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39848__auto____0;
cljs$core$async$transduce_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39848__auto____1;
return cljs$core$async$transduce_$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41356 = f__40433__auto__();
(statearr_41356[(6)] = c__40432__auto__);

return statearr_41356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));

return c__40432__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41364 = arguments.length;
switch (G__41364) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41389){
var state_val_41390 = (state_41389[(1)]);
if((state_val_41390 === (7))){
var inst_41371 = (state_41389[(2)]);
var state_41389__$1 = state_41389;
var statearr_41401_44230 = state_41389__$1;
(statearr_41401_44230[(2)] = inst_41371);

(statearr_41401_44230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (1))){
var inst_41365 = cljs.core.seq(coll);
var inst_41366 = inst_41365;
var state_41389__$1 = (function (){var statearr_41402 = state_41389;
(statearr_41402[(7)] = inst_41366);

return statearr_41402;
})();
var statearr_41403_44231 = state_41389__$1;
(statearr_41403_44231[(2)] = null);

(statearr_41403_44231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (4))){
var inst_41366 = (state_41389[(7)]);
var inst_41369 = cljs.core.first(inst_41366);
var state_41389__$1 = state_41389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41389__$1,(7),ch,inst_41369);
} else {
if((state_val_41390 === (13))){
var inst_41383 = (state_41389[(2)]);
var state_41389__$1 = state_41389;
var statearr_41404_44236 = state_41389__$1;
(statearr_41404_44236[(2)] = inst_41383);

(statearr_41404_44236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (6))){
var inst_41374 = (state_41389[(2)]);
var state_41389__$1 = state_41389;
if(cljs.core.truth_(inst_41374)){
var statearr_41412_44241 = state_41389__$1;
(statearr_41412_44241[(1)] = (8));

} else {
var statearr_41413_44242 = state_41389__$1;
(statearr_41413_44242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (3))){
var inst_41387 = (state_41389[(2)]);
var state_41389__$1 = state_41389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41389__$1,inst_41387);
} else {
if((state_val_41390 === (12))){
var state_41389__$1 = state_41389;
var statearr_41414_44246 = state_41389__$1;
(statearr_41414_44246[(2)] = null);

(statearr_41414_44246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (2))){
var inst_41366 = (state_41389[(7)]);
var state_41389__$1 = state_41389;
if(cljs.core.truth_(inst_41366)){
var statearr_41415_44247 = state_41389__$1;
(statearr_41415_44247[(1)] = (4));

} else {
var statearr_41416_44249 = state_41389__$1;
(statearr_41416_44249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (11))){
var inst_41380 = cljs.core.async.close_BANG_(ch);
var state_41389__$1 = state_41389;
var statearr_41419_44252 = state_41389__$1;
(statearr_41419_44252[(2)] = inst_41380);

(statearr_41419_44252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (9))){
var state_41389__$1 = state_41389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41420_44259 = state_41389__$1;
(statearr_41420_44259[(1)] = (11));

} else {
var statearr_41421_44260 = state_41389__$1;
(statearr_41421_44260[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (5))){
var inst_41366 = (state_41389[(7)]);
var state_41389__$1 = state_41389;
var statearr_41422_44262 = state_41389__$1;
(statearr_41422_44262[(2)] = inst_41366);

(statearr_41422_44262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (10))){
var inst_41385 = (state_41389[(2)]);
var state_41389__$1 = state_41389;
var statearr_41423_44282 = state_41389__$1;
(statearr_41423_44282[(2)] = inst_41385);

(statearr_41423_44282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41390 === (8))){
var inst_41366 = (state_41389[(7)]);
var inst_41376 = cljs.core.next(inst_41366);
var inst_41366__$1 = inst_41376;
var state_41389__$1 = (function (){var statearr_41424 = state_41389;
(statearr_41424[(7)] = inst_41366__$1);

return statearr_41424;
})();
var statearr_41429_44285 = state_41389__$1;
(statearr_41429_44285[(2)] = null);

(statearr_41429_44285[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_41434 = [null,null,null,null,null,null,null,null];
(statearr_41434[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_41434[(1)] = (1));

return statearr_41434;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_41389){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41389);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41440){var ex__39851__auto__ = e41440;
var statearr_41441_44287 = state_41389;
(statearr_41441_44287[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41389[(4)]))){
var statearr_41442_44288 = state_41389;
(statearr_41442_44288[(1)] = cljs.core.first((state_41389[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44293 = state_41389;
state_41389 = G__44293;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_41389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_41389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41443 = f__40433__auto__();
(statearr_41443[(6)] = c__40432__auto__);

return statearr_41443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));

return c__40432__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41449 = arguments.length;
switch (G__41449) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44303 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44303(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44311 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44311(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44315 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44315(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44327 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44327(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41472 = (function (ch,cs,meta41473){
this.ch = ch;
this.cs = cs;
this.meta41473 = meta41473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41474,meta41473__$1){
var self__ = this;
var _41474__$1 = this;
return (new cljs.core.async.t_cljs$core$async41472(self__.ch,self__.cs,meta41473__$1));
}));

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41474){
var self__ = this;
var _41474__$1 = this;
return self__.meta41473;
}));

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41472.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41473","meta41473",-1530941693,null)], null);
}));

(cljs.core.async.t_cljs$core$async41472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41472");

(cljs.core.async.t_cljs$core$async41472.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41472.
 */
cljs.core.async.__GT_t_cljs$core$async41472 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41472(ch__$1,cs__$1,meta41473){
return (new cljs.core.async.t_cljs$core$async41472(ch__$1,cs__$1,meta41473));
});

}

return (new cljs.core.async.t_cljs$core$async41472(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__40432__auto___44348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_41623){
var state_val_41624 = (state_41623[(1)]);
if((state_val_41624 === (7))){
var inst_41619 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41629_44350 = state_41623__$1;
(statearr_41629_44350[(2)] = inst_41619);

(statearr_41629_44350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (20))){
var inst_41523 = (state_41623[(7)]);
var inst_41535 = cljs.core.first(inst_41523);
var inst_41536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41535,(0),null);
var inst_41537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41535,(1),null);
var state_41623__$1 = (function (){var statearr_41631 = state_41623;
(statearr_41631[(8)] = inst_41536);

return statearr_41631;
})();
if(cljs.core.truth_(inst_41537)){
var statearr_41636_44353 = state_41623__$1;
(statearr_41636_44353[(1)] = (22));

} else {
var statearr_41637_44355 = state_41623__$1;
(statearr_41637_44355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (27))){
var inst_41572 = (state_41623[(9)]);
var inst_41565 = (state_41623[(10)]);
var inst_41567 = (state_41623[(11)]);
var inst_41492 = (state_41623[(12)]);
var inst_41572__$1 = cljs.core._nth(inst_41565,inst_41567);
var inst_41573 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41572__$1,inst_41492,done);
var state_41623__$1 = (function (){var statearr_41639 = state_41623;
(statearr_41639[(9)] = inst_41572__$1);

return statearr_41639;
})();
if(cljs.core.truth_(inst_41573)){
var statearr_41640_44358 = state_41623__$1;
(statearr_41640_44358[(1)] = (30));

} else {
var statearr_41645_44359 = state_41623__$1;
(statearr_41645_44359[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (1))){
var state_41623__$1 = state_41623;
var statearr_41647_44360 = state_41623__$1;
(statearr_41647_44360[(2)] = null);

(statearr_41647_44360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (24))){
var inst_41523 = (state_41623[(7)]);
var inst_41542 = (state_41623[(2)]);
var inst_41543 = cljs.core.next(inst_41523);
var inst_41501 = inst_41543;
var inst_41502 = null;
var inst_41503 = (0);
var inst_41504 = (0);
var state_41623__$1 = (function (){var statearr_41649 = state_41623;
(statearr_41649[(13)] = inst_41542);

(statearr_41649[(14)] = inst_41502);

(statearr_41649[(15)] = inst_41503);

(statearr_41649[(16)] = inst_41501);

(statearr_41649[(17)] = inst_41504);

return statearr_41649;
})();
var statearr_41650_44363 = state_41623__$1;
(statearr_41650_44363[(2)] = null);

(statearr_41650_44363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (39))){
var state_41623__$1 = state_41623;
var statearr_41654_44365 = state_41623__$1;
(statearr_41654_44365[(2)] = null);

(statearr_41654_44365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (4))){
var inst_41492 = (state_41623[(12)]);
var inst_41492__$1 = (state_41623[(2)]);
var inst_41493 = (inst_41492__$1 == null);
var state_41623__$1 = (function (){var statearr_41658 = state_41623;
(statearr_41658[(12)] = inst_41492__$1);

return statearr_41658;
})();
if(cljs.core.truth_(inst_41493)){
var statearr_41659_44369 = state_41623__$1;
(statearr_41659_44369[(1)] = (5));

} else {
var statearr_41660_44370 = state_41623__$1;
(statearr_41660_44370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (15))){
var inst_41502 = (state_41623[(14)]);
var inst_41503 = (state_41623[(15)]);
var inst_41501 = (state_41623[(16)]);
var inst_41504 = (state_41623[(17)]);
var inst_41519 = (state_41623[(2)]);
var inst_41520 = (inst_41504 + (1));
var tmp41651 = inst_41502;
var tmp41652 = inst_41503;
var tmp41653 = inst_41501;
var inst_41501__$1 = tmp41653;
var inst_41502__$1 = tmp41651;
var inst_41503__$1 = tmp41652;
var inst_41504__$1 = inst_41520;
var state_41623__$1 = (function (){var statearr_41664 = state_41623;
(statearr_41664[(14)] = inst_41502__$1);

(statearr_41664[(15)] = inst_41503__$1);

(statearr_41664[(16)] = inst_41501__$1);

(statearr_41664[(18)] = inst_41519);

(statearr_41664[(17)] = inst_41504__$1);

return statearr_41664;
})();
var statearr_41665_44374 = state_41623__$1;
(statearr_41665_44374[(2)] = null);

(statearr_41665_44374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (21))){
var inst_41546 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41672_44375 = state_41623__$1;
(statearr_41672_44375[(2)] = inst_41546);

(statearr_41672_44375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (31))){
var inst_41572 = (state_41623[(9)]);
var inst_41576 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41572);
var state_41623__$1 = state_41623;
var statearr_41675_44376 = state_41623__$1;
(statearr_41675_44376[(2)] = inst_41576);

(statearr_41675_44376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (32))){
var inst_41564 = (state_41623[(19)]);
var inst_41565 = (state_41623[(10)]);
var inst_41566 = (state_41623[(20)]);
var inst_41567 = (state_41623[(11)]);
var inst_41578 = (state_41623[(2)]);
var inst_41579 = (inst_41567 + (1));
var tmp41666 = inst_41564;
var tmp41667 = inst_41565;
var tmp41668 = inst_41566;
var inst_41564__$1 = tmp41666;
var inst_41565__$1 = tmp41667;
var inst_41566__$1 = tmp41668;
var inst_41567__$1 = inst_41579;
var state_41623__$1 = (function (){var statearr_41680 = state_41623;
(statearr_41680[(19)] = inst_41564__$1);

(statearr_41680[(10)] = inst_41565__$1);

(statearr_41680[(20)] = inst_41566__$1);

(statearr_41680[(11)] = inst_41567__$1);

(statearr_41680[(21)] = inst_41578);

return statearr_41680;
})();
var statearr_41681_44377 = state_41623__$1;
(statearr_41681_44377[(2)] = null);

(statearr_41681_44377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (40))){
var inst_41592 = (state_41623[(22)]);
var inst_41596 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41592);
var state_41623__$1 = state_41623;
var statearr_41688_44378 = state_41623__$1;
(statearr_41688_44378[(2)] = inst_41596);

(statearr_41688_44378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (33))){
var inst_41582 = (state_41623[(23)]);
var inst_41585 = cljs.core.chunked_seq_QMARK_(inst_41582);
var state_41623__$1 = state_41623;
if(inst_41585){
var statearr_41689_44379 = state_41623__$1;
(statearr_41689_44379[(1)] = (36));

} else {
var statearr_41694_44380 = state_41623__$1;
(statearr_41694_44380[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (13))){
var inst_41513 = (state_41623[(24)]);
var inst_41516 = cljs.core.async.close_BANG_(inst_41513);
var state_41623__$1 = state_41623;
var statearr_41695_44381 = state_41623__$1;
(statearr_41695_44381[(2)] = inst_41516);

(statearr_41695_44381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (22))){
var inst_41536 = (state_41623[(8)]);
var inst_41539 = cljs.core.async.close_BANG_(inst_41536);
var state_41623__$1 = state_41623;
var statearr_41696_44420 = state_41623__$1;
(statearr_41696_44420[(2)] = inst_41539);

(statearr_41696_44420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (36))){
var inst_41582 = (state_41623[(23)]);
var inst_41587 = cljs.core.chunk_first(inst_41582);
var inst_41588 = cljs.core.chunk_rest(inst_41582);
var inst_41589 = cljs.core.count(inst_41587);
var inst_41564 = inst_41588;
var inst_41565 = inst_41587;
var inst_41566 = inst_41589;
var inst_41567 = (0);
var state_41623__$1 = (function (){var statearr_41697 = state_41623;
(statearr_41697[(19)] = inst_41564);

(statearr_41697[(10)] = inst_41565);

(statearr_41697[(20)] = inst_41566);

(statearr_41697[(11)] = inst_41567);

return statearr_41697;
})();
var statearr_41698_44425 = state_41623__$1;
(statearr_41698_44425[(2)] = null);

(statearr_41698_44425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (41))){
var inst_41582 = (state_41623[(23)]);
var inst_41598 = (state_41623[(2)]);
var inst_41599 = cljs.core.next(inst_41582);
var inst_41564 = inst_41599;
var inst_41565 = null;
var inst_41566 = (0);
var inst_41567 = (0);
var state_41623__$1 = (function (){var statearr_41699 = state_41623;
(statearr_41699[(25)] = inst_41598);

(statearr_41699[(19)] = inst_41564);

(statearr_41699[(10)] = inst_41565);

(statearr_41699[(20)] = inst_41566);

(statearr_41699[(11)] = inst_41567);

return statearr_41699;
})();
var statearr_41700_44426 = state_41623__$1;
(statearr_41700_44426[(2)] = null);

(statearr_41700_44426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (43))){
var state_41623__$1 = state_41623;
var statearr_41701_44430 = state_41623__$1;
(statearr_41701_44430[(2)] = null);

(statearr_41701_44430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (29))){
var inst_41607 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41702_44431 = state_41623__$1;
(statearr_41702_44431[(2)] = inst_41607);

(statearr_41702_44431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (44))){
var inst_41616 = (state_41623[(2)]);
var state_41623__$1 = (function (){var statearr_41704 = state_41623;
(statearr_41704[(26)] = inst_41616);

return statearr_41704;
})();
var statearr_41705_44432 = state_41623__$1;
(statearr_41705_44432[(2)] = null);

(statearr_41705_44432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (6))){
var inst_41556 = (state_41623[(27)]);
var inst_41555 = cljs.core.deref(cs);
var inst_41556__$1 = cljs.core.keys(inst_41555);
var inst_41557 = cljs.core.count(inst_41556__$1);
var inst_41558 = cljs.core.reset_BANG_(dctr,inst_41557);
var inst_41563 = cljs.core.seq(inst_41556__$1);
var inst_41564 = inst_41563;
var inst_41565 = null;
var inst_41566 = (0);
var inst_41567 = (0);
var state_41623__$1 = (function (){var statearr_41706 = state_41623;
(statearr_41706[(27)] = inst_41556__$1);

(statearr_41706[(28)] = inst_41558);

(statearr_41706[(19)] = inst_41564);

(statearr_41706[(10)] = inst_41565);

(statearr_41706[(20)] = inst_41566);

(statearr_41706[(11)] = inst_41567);

return statearr_41706;
})();
var statearr_41720_44433 = state_41623__$1;
(statearr_41720_44433[(2)] = null);

(statearr_41720_44433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (28))){
var inst_41582 = (state_41623[(23)]);
var inst_41564 = (state_41623[(19)]);
var inst_41582__$1 = cljs.core.seq(inst_41564);
var state_41623__$1 = (function (){var statearr_41724 = state_41623;
(statearr_41724[(23)] = inst_41582__$1);

return statearr_41724;
})();
if(inst_41582__$1){
var statearr_41725_44434 = state_41623__$1;
(statearr_41725_44434[(1)] = (33));

} else {
var statearr_41730_44435 = state_41623__$1;
(statearr_41730_44435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (25))){
var inst_41566 = (state_41623[(20)]);
var inst_41567 = (state_41623[(11)]);
var inst_41569 = (inst_41567 < inst_41566);
var inst_41570 = inst_41569;
var state_41623__$1 = state_41623;
if(cljs.core.truth_(inst_41570)){
var statearr_41733_44436 = state_41623__$1;
(statearr_41733_44436[(1)] = (27));

} else {
var statearr_41734_44437 = state_41623__$1;
(statearr_41734_44437[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (34))){
var state_41623__$1 = state_41623;
var statearr_41735_44442 = state_41623__$1;
(statearr_41735_44442[(2)] = null);

(statearr_41735_44442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (17))){
var state_41623__$1 = state_41623;
var statearr_41736_44446 = state_41623__$1;
(statearr_41736_44446[(2)] = null);

(statearr_41736_44446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (3))){
var inst_41621 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41623__$1,inst_41621);
} else {
if((state_val_41624 === (12))){
var inst_41551 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41738_44447 = state_41623__$1;
(statearr_41738_44447[(2)] = inst_41551);

(statearr_41738_44447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (2))){
var state_41623__$1 = state_41623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41623__$1,(4),ch);
} else {
if((state_val_41624 === (23))){
var state_41623__$1 = state_41623;
var statearr_41739_44448 = state_41623__$1;
(statearr_41739_44448[(2)] = null);

(statearr_41739_44448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (35))){
var inst_41605 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41740_44452 = state_41623__$1;
(statearr_41740_44452[(2)] = inst_41605);

(statearr_41740_44452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (19))){
var inst_41523 = (state_41623[(7)]);
var inst_41527 = cljs.core.chunk_first(inst_41523);
var inst_41528 = cljs.core.chunk_rest(inst_41523);
var inst_41529 = cljs.core.count(inst_41527);
var inst_41501 = inst_41528;
var inst_41502 = inst_41527;
var inst_41503 = inst_41529;
var inst_41504 = (0);
var state_41623__$1 = (function (){var statearr_41742 = state_41623;
(statearr_41742[(14)] = inst_41502);

(statearr_41742[(15)] = inst_41503);

(statearr_41742[(16)] = inst_41501);

(statearr_41742[(17)] = inst_41504);

return statearr_41742;
})();
var statearr_41743_44464 = state_41623__$1;
(statearr_41743_44464[(2)] = null);

(statearr_41743_44464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (11))){
var inst_41523 = (state_41623[(7)]);
var inst_41501 = (state_41623[(16)]);
var inst_41523__$1 = cljs.core.seq(inst_41501);
var state_41623__$1 = (function (){var statearr_41749 = state_41623;
(statearr_41749[(7)] = inst_41523__$1);

return statearr_41749;
})();
if(inst_41523__$1){
var statearr_41750_44465 = state_41623__$1;
(statearr_41750_44465[(1)] = (16));

} else {
var statearr_41751_44466 = state_41623__$1;
(statearr_41751_44466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (9))){
var inst_41553 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41752_44467 = state_41623__$1;
(statearr_41752_44467[(2)] = inst_41553);

(statearr_41752_44467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (5))){
var inst_41499 = cljs.core.deref(cs);
var inst_41500 = cljs.core.seq(inst_41499);
var inst_41501 = inst_41500;
var inst_41502 = null;
var inst_41503 = (0);
var inst_41504 = (0);
var state_41623__$1 = (function (){var statearr_41756 = state_41623;
(statearr_41756[(14)] = inst_41502);

(statearr_41756[(15)] = inst_41503);

(statearr_41756[(16)] = inst_41501);

(statearr_41756[(17)] = inst_41504);

return statearr_41756;
})();
var statearr_41757_44468 = state_41623__$1;
(statearr_41757_44468[(2)] = null);

(statearr_41757_44468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (14))){
var state_41623__$1 = state_41623;
var statearr_41761_44469 = state_41623__$1;
(statearr_41761_44469[(2)] = null);

(statearr_41761_44469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (45))){
var inst_41613 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41762_44470 = state_41623__$1;
(statearr_41762_44470[(2)] = inst_41613);

(statearr_41762_44470[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (26))){
var inst_41556 = (state_41623[(27)]);
var inst_41609 = (state_41623[(2)]);
var inst_41610 = cljs.core.seq(inst_41556);
var state_41623__$1 = (function (){var statearr_41763 = state_41623;
(statearr_41763[(29)] = inst_41609);

return statearr_41763;
})();
if(inst_41610){
var statearr_41764_44476 = state_41623__$1;
(statearr_41764_44476[(1)] = (42));

} else {
var statearr_41765_44481 = state_41623__$1;
(statearr_41765_44481[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (16))){
var inst_41523 = (state_41623[(7)]);
var inst_41525 = cljs.core.chunked_seq_QMARK_(inst_41523);
var state_41623__$1 = state_41623;
if(inst_41525){
var statearr_41768_44483 = state_41623__$1;
(statearr_41768_44483[(1)] = (19));

} else {
var statearr_41769_44484 = state_41623__$1;
(statearr_41769_44484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (38))){
var inst_41602 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41770_44489 = state_41623__$1;
(statearr_41770_44489[(2)] = inst_41602);

(statearr_41770_44489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (30))){
var state_41623__$1 = state_41623;
var statearr_41771_44490 = state_41623__$1;
(statearr_41771_44490[(2)] = null);

(statearr_41771_44490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (10))){
var inst_41502 = (state_41623[(14)]);
var inst_41504 = (state_41623[(17)]);
var inst_41512 = cljs.core._nth(inst_41502,inst_41504);
var inst_41513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41512,(0),null);
var inst_41514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41512,(1),null);
var state_41623__$1 = (function (){var statearr_41773 = state_41623;
(statearr_41773[(24)] = inst_41513);

return statearr_41773;
})();
if(cljs.core.truth_(inst_41514)){
var statearr_41775_44491 = state_41623__$1;
(statearr_41775_44491[(1)] = (13));

} else {
var statearr_41776_44492 = state_41623__$1;
(statearr_41776_44492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (18))){
var inst_41549 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41779_44493 = state_41623__$1;
(statearr_41779_44493[(2)] = inst_41549);

(statearr_41779_44493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (42))){
var state_41623__$1 = state_41623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41623__$1,(45),dchan);
} else {
if((state_val_41624 === (37))){
var inst_41592 = (state_41623[(22)]);
var inst_41582 = (state_41623[(23)]);
var inst_41492 = (state_41623[(12)]);
var inst_41592__$1 = cljs.core.first(inst_41582);
var inst_41593 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41592__$1,inst_41492,done);
var state_41623__$1 = (function (){var statearr_41790 = state_41623;
(statearr_41790[(22)] = inst_41592__$1);

return statearr_41790;
})();
if(cljs.core.truth_(inst_41593)){
var statearr_41791_44494 = state_41623__$1;
(statearr_41791_44494[(1)] = (39));

} else {
var statearr_41792_44495 = state_41623__$1;
(statearr_41792_44495[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (8))){
var inst_41503 = (state_41623[(15)]);
var inst_41504 = (state_41623[(17)]);
var inst_41506 = (inst_41504 < inst_41503);
var inst_41507 = inst_41506;
var state_41623__$1 = state_41623;
if(cljs.core.truth_(inst_41507)){
var statearr_41794_44507 = state_41623__$1;
(statearr_41794_44507[(1)] = (10));

} else {
var statearr_41796_44508 = state_41623__$1;
(statearr_41796_44508[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__39848__auto__ = null;
var cljs$core$async$mult_$_state_machine__39848__auto____0 = (function (){
var statearr_41798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41798[(0)] = cljs$core$async$mult_$_state_machine__39848__auto__);

(statearr_41798[(1)] = (1));

return statearr_41798;
});
var cljs$core$async$mult_$_state_machine__39848__auto____1 = (function (state_41623){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_41623);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e41803){var ex__39851__auto__ = e41803;
var statearr_41808_44522 = state_41623;
(statearr_41808_44522[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_41623[(4)]))){
var statearr_41809_44525 = state_41623;
(statearr_41809_44525[(1)] = cljs.core.first((state_41623[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44527 = state_41623;
state_41623 = G__44527;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39848__auto__ = function(state_41623){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39848__auto____1.call(this,state_41623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39848__auto____0;
cljs$core$async$mult_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39848__auto____1;
return cljs$core$async$mult_$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_41811 = f__40433__auto__();
(statearr_41811[(6)] = c__40432__auto___44348);

return statearr_41811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41821 = arguments.length;
switch (G__41821) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44534 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44534(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44539 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44539(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44542 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44542(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44549 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44549(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44554 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44554(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44558 = arguments.length;
var i__4737__auto___44559 = (0);
while(true){
if((i__4737__auto___44559 < len__4736__auto___44558)){
args__4742__auto__.push((arguments[i__4737__auto___44559]));

var G__44560 = (i__4737__auto___44559 + (1));
i__4737__auto___44559 = G__44560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41856){
var map__41857 = p__41856;
var map__41857__$1 = (((((!((map__41857 == null))))?(((((map__41857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41857):map__41857);
var opts = map__41857__$1;
var statearr_41859_44562 = state;
(statearr_41859_44562[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41860_44563 = state;
(statearr_41860_44563[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_41864_44564 = state;
(statearr_41864_44564[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41849){
var G__41850 = cljs.core.first(seq41849);
var seq41849__$1 = cljs.core.next(seq41849);
var G__41851 = cljs.core.first(seq41849__$1);
var seq41849__$2 = cljs.core.next(seq41849__$1);
var G__41852 = cljs.core.first(seq41849__$2);
var seq41849__$3 = cljs.core.next(seq41849__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41850,G__41851,G__41852,seq41849__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41876 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41877){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41877 = meta41877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41878,meta41877__$1){
var self__ = this;
var _41878__$1 = this;
return (new cljs.core.async.t_cljs$core$async41876(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41877__$1));
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41878){
var self__ = this;
var _41878__$1 = this;
return self__.meta41877;
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41876.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41877","meta41877",1246850016,null)], null);
}));

(cljs.core.async.t_cljs$core$async41876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41876");

(cljs.core.async.t_cljs$core$async41876.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41876.
 */
cljs.core.async.__GT_t_cljs$core$async41876 = (function cljs$core$async$mix_$___GT_t_cljs$core$async41876(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41877){
return (new cljs.core.async.t_cljs$core$async41876(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41877));
});

}

return (new cljs.core.async.t_cljs$core$async41876(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40432__auto___44577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_42058){
var state_val_42060 = (state_42058[(1)]);
if((state_val_42060 === (7))){
var inst_41937 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
var statearr_42068_44578 = state_42058__$1;
(statearr_42068_44578[(2)] = inst_41937);

(statearr_42068_44578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (20))){
var inst_41955 = (state_42058[(7)]);
var state_42058__$1 = state_42058;
var statearr_42085_44579 = state_42058__$1;
(statearr_42085_44579[(2)] = inst_41955);

(statearr_42085_44579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (27))){
var state_42058__$1 = state_42058;
var statearr_42092_44586 = state_42058__$1;
(statearr_42092_44586[(2)] = null);

(statearr_42092_44586[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (1))){
var inst_41921 = (state_42058[(8)]);
var inst_41921__$1 = calc_state();
var inst_41924 = (inst_41921__$1 == null);
var inst_41925 = cljs.core.not(inst_41924);
var state_42058__$1 = (function (){var statearr_42095 = state_42058;
(statearr_42095[(8)] = inst_41921__$1);

return statearr_42095;
})();
if(inst_41925){
var statearr_42096_44587 = state_42058__$1;
(statearr_42096_44587[(1)] = (2));

} else {
var statearr_42098_44588 = state_42058__$1;
(statearr_42098_44588[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (24))){
var inst_41990 = (state_42058[(9)]);
var inst_41981 = (state_42058[(10)]);
var inst_42005 = (state_42058[(11)]);
var inst_42005__$1 = (inst_41981.cljs$core$IFn$_invoke$arity$1 ? inst_41981.cljs$core$IFn$_invoke$arity$1(inst_41990) : inst_41981.call(null,inst_41990));
var state_42058__$1 = (function (){var statearr_42115 = state_42058;
(statearr_42115[(11)] = inst_42005__$1);

return statearr_42115;
})();
if(cljs.core.truth_(inst_42005__$1)){
var statearr_42122_44590 = state_42058__$1;
(statearr_42122_44590[(1)] = (29));

} else {
var statearr_42123_44592 = state_42058__$1;
(statearr_42123_44592[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (4))){
var inst_41940 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_41940)){
var statearr_42129_44593 = state_42058__$1;
(statearr_42129_44593[(1)] = (8));

} else {
var statearr_42131_44594 = state_42058__$1;
(statearr_42131_44594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (15))){
var inst_41974 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_41974)){
var statearr_42135_44595 = state_42058__$1;
(statearr_42135_44595[(1)] = (19));

} else {
var statearr_42136_44596 = state_42058__$1;
(statearr_42136_44596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (21))){
var inst_41979 = (state_42058[(12)]);
var inst_41979__$1 = (state_42058[(2)]);
var inst_41981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41979__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41979__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41979__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42058__$1 = (function (){var statearr_42144 = state_42058;
(statearr_42144[(12)] = inst_41979__$1);

(statearr_42144[(10)] = inst_41981);

(statearr_42144[(13)] = inst_41982);

return statearr_42144;
})();
return cljs.core.async.ioc_alts_BANG_(state_42058__$1,(22),inst_41983);
} else {
if((state_val_42060 === (31))){
var inst_42014 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_42014)){
var statearr_42151_44597 = state_42058__$1;
(statearr_42151_44597[(1)] = (32));

} else {
var statearr_42152_44598 = state_42058__$1;
(statearr_42152_44598[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (32))){
var inst_41989 = (state_42058[(14)]);
var state_42058__$1 = state_42058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42058__$1,(35),out,inst_41989);
} else {
if((state_val_42060 === (33))){
var inst_41979 = (state_42058[(12)]);
var inst_41955 = inst_41979;
var state_42058__$1 = (function (){var statearr_42154 = state_42058;
(statearr_42154[(7)] = inst_41955);

return statearr_42154;
})();
var statearr_42155_44600 = state_42058__$1;
(statearr_42155_44600[(2)] = null);

(statearr_42155_44600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (13))){
var inst_41955 = (state_42058[(7)]);
var inst_41963 = inst_41955.cljs$lang$protocol_mask$partition0$;
var inst_41964 = (inst_41963 & (64));
var inst_41965 = inst_41955.cljs$core$ISeq$;
var inst_41966 = (cljs.core.PROTOCOL_SENTINEL === inst_41965);
var inst_41967 = ((inst_41964) || (inst_41966));
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_41967)){
var statearr_42157_44601 = state_42058__$1;
(statearr_42157_44601[(1)] = (16));

} else {
var statearr_42158_44602 = state_42058__$1;
(statearr_42158_44602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (22))){
var inst_41990 = (state_42058[(9)]);
var inst_41989 = (state_42058[(14)]);
var inst_41988 = (state_42058[(2)]);
var inst_41989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41988,(0),null);
var inst_41990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41988,(1),null);
var inst_41992 = (inst_41989__$1 == null);
var inst_41993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41990__$1,change);
var inst_41994 = ((inst_41992) || (inst_41993));
var state_42058__$1 = (function (){var statearr_42159 = state_42058;
(statearr_42159[(9)] = inst_41990__$1);

(statearr_42159[(14)] = inst_41989__$1);

return statearr_42159;
})();
if(cljs.core.truth_(inst_41994)){
var statearr_42160_44603 = state_42058__$1;
(statearr_42160_44603[(1)] = (23));

} else {
var statearr_42161_44604 = state_42058__$1;
(statearr_42161_44604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (36))){
var inst_41979 = (state_42058[(12)]);
var inst_41955 = inst_41979;
var state_42058__$1 = (function (){var statearr_42165 = state_42058;
(statearr_42165[(7)] = inst_41955);

return statearr_42165;
})();
var statearr_42168_44605 = state_42058__$1;
(statearr_42168_44605[(2)] = null);

(statearr_42168_44605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (29))){
var inst_42005 = (state_42058[(11)]);
var state_42058__$1 = state_42058;
var statearr_42169_44606 = state_42058__$1;
(statearr_42169_44606[(2)] = inst_42005);

(statearr_42169_44606[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (6))){
var state_42058__$1 = state_42058;
var statearr_42175_44607 = state_42058__$1;
(statearr_42175_44607[(2)] = false);

(statearr_42175_44607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (28))){
var inst_42001 = (state_42058[(2)]);
var inst_42002 = calc_state();
var inst_41955 = inst_42002;
var state_42058__$1 = (function (){var statearr_42185 = state_42058;
(statearr_42185[(15)] = inst_42001);

(statearr_42185[(7)] = inst_41955);

return statearr_42185;
})();
var statearr_42186_44612 = state_42058__$1;
(statearr_42186_44612[(2)] = null);

(statearr_42186_44612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (25))){
var inst_42034 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
var statearr_42188_44613 = state_42058__$1;
(statearr_42188_44613[(2)] = inst_42034);

(statearr_42188_44613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (34))){
var inst_42032 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
var statearr_42189_44614 = state_42058__$1;
(statearr_42189_44614[(2)] = inst_42032);

(statearr_42189_44614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (17))){
var state_42058__$1 = state_42058;
var statearr_42190_44615 = state_42058__$1;
(statearr_42190_44615[(2)] = false);

(statearr_42190_44615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (3))){
var state_42058__$1 = state_42058;
var statearr_42191_44616 = state_42058__$1;
(statearr_42191_44616[(2)] = false);

(statearr_42191_44616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (12))){
var inst_42036 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42058__$1,inst_42036);
} else {
if((state_val_42060 === (2))){
var inst_41921 = (state_42058[(8)]);
var inst_41929 = inst_41921.cljs$lang$protocol_mask$partition0$;
var inst_41930 = (inst_41929 & (64));
var inst_41931 = inst_41921.cljs$core$ISeq$;
var inst_41932 = (cljs.core.PROTOCOL_SENTINEL === inst_41931);
var inst_41933 = ((inst_41930) || (inst_41932));
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_41933)){
var statearr_42192_44617 = state_42058__$1;
(statearr_42192_44617[(1)] = (5));

} else {
var statearr_42193_44618 = state_42058__$1;
(statearr_42193_44618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (23))){
var inst_41989 = (state_42058[(14)]);
var inst_41996 = (inst_41989 == null);
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_41996)){
var statearr_42194_44619 = state_42058__$1;
(statearr_42194_44619[(1)] = (26));

} else {
var statearr_42195_44620 = state_42058__$1;
(statearr_42195_44620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (35))){
var inst_42022 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
if(cljs.core.truth_(inst_42022)){
var statearr_42196_44622 = state_42058__$1;
(statearr_42196_44622[(1)] = (36));

} else {
var statearr_42197_44623 = state_42058__$1;
(statearr_42197_44623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (19))){
var inst_41955 = (state_42058[(7)]);
var inst_41976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41955);
var state_42058__$1 = state_42058;
var statearr_42198_44624 = state_42058__$1;
(statearr_42198_44624[(2)] = inst_41976);

(statearr_42198_44624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (11))){
var inst_41955 = (state_42058[(7)]);
var inst_41960 = (inst_41955 == null);
var inst_41961 = cljs.core.not(inst_41960);
var state_42058__$1 = state_42058;
if(inst_41961){
var statearr_42200_44626 = state_42058__$1;
(statearr_42200_44626[(1)] = (13));

} else {
var statearr_42201_44627 = state_42058__$1;
(statearr_42201_44627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (9))){
var inst_41921 = (state_42058[(8)]);
var state_42058__$1 = state_42058;
var statearr_42202_44628 = state_42058__$1;
(statearr_42202_44628[(2)] = inst_41921);

(statearr_42202_44628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (5))){
var state_42058__$1 = state_42058;
var statearr_42203_44629 = state_42058__$1;
(statearr_42203_44629[(2)] = true);

(statearr_42203_44629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (14))){
var state_42058__$1 = state_42058;
var statearr_42204_44630 = state_42058__$1;
(statearr_42204_44630[(2)] = false);

(statearr_42204_44630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (26))){
var inst_41990 = (state_42058[(9)]);
var inst_41998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41990);
var state_42058__$1 = state_42058;
var statearr_42205_44631 = state_42058__$1;
(statearr_42205_44631[(2)] = inst_41998);

(statearr_42205_44631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (16))){
var state_42058__$1 = state_42058;
var statearr_42206_44633 = state_42058__$1;
(statearr_42206_44633[(2)] = true);

(statearr_42206_44633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (38))){
var inst_42027 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
var statearr_42207_44634 = state_42058__$1;
(statearr_42207_44634[(2)] = inst_42027);

(statearr_42207_44634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (30))){
var inst_41990 = (state_42058[(9)]);
var inst_41981 = (state_42058[(10)]);
var inst_41982 = (state_42058[(13)]);
var inst_42009 = cljs.core.empty_QMARK_(inst_41981);
var inst_42010 = (inst_41982.cljs$core$IFn$_invoke$arity$1 ? inst_41982.cljs$core$IFn$_invoke$arity$1(inst_41990) : inst_41982.call(null,inst_41990));
var inst_42011 = cljs.core.not(inst_42010);
var inst_42012 = ((inst_42009) && (inst_42011));
var state_42058__$1 = state_42058;
var statearr_42208_44640 = state_42058__$1;
(statearr_42208_44640[(2)] = inst_42012);

(statearr_42208_44640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (10))){
var inst_41921 = (state_42058[(8)]);
var inst_41945 = (state_42058[(2)]);
var inst_41948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41945,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41945,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41955 = inst_41921;
var state_42058__$1 = (function (){var statearr_42209 = state_42058;
(statearr_42209[(16)] = inst_41949);

(statearr_42209[(17)] = inst_41948);

(statearr_42209[(18)] = inst_41954);

(statearr_42209[(7)] = inst_41955);

return statearr_42209;
})();
var statearr_42214_44647 = state_42058__$1;
(statearr_42214_44647[(2)] = null);

(statearr_42214_44647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (18))){
var inst_41971 = (state_42058[(2)]);
var state_42058__$1 = state_42058;
var statearr_42219_44648 = state_42058__$1;
(statearr_42219_44648[(2)] = inst_41971);

(statearr_42219_44648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (37))){
var state_42058__$1 = state_42058;
var statearr_42224_44649 = state_42058__$1;
(statearr_42224_44649[(2)] = null);

(statearr_42224_44649[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42060 === (8))){
var inst_41921 = (state_42058[(8)]);
var inst_41942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41921);
var state_42058__$1 = state_42058;
var statearr_42225_44654 = state_42058__$1;
(statearr_42225_44654[(2)] = inst_41942);

(statearr_42225_44654[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__39848__auto__ = null;
var cljs$core$async$mix_$_state_machine__39848__auto____0 = (function (){
var statearr_42226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42226[(0)] = cljs$core$async$mix_$_state_machine__39848__auto__);

(statearr_42226[(1)] = (1));

return statearr_42226;
});
var cljs$core$async$mix_$_state_machine__39848__auto____1 = (function (state_42058){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_42058);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e42229){var ex__39851__auto__ = e42229;
var statearr_42230_44655 = state_42058;
(statearr_42230_44655[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_42058[(4)]))){
var statearr_42231_44657 = state_42058;
(statearr_42231_44657[(1)] = cljs.core.first((state_42058[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44659 = state_42058;
state_42058 = G__44659;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39848__auto__ = function(state_42058){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39848__auto____1.call(this,state_42058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39848__auto____0;
cljs$core$async$mix_$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39848__auto____1;
return cljs$core$async$mix_$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_42232 = f__40433__auto__();
(statearr_42232[(6)] = c__40432__auto___44577);

return statearr_42232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44662 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44662(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44664 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44664(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44667 = (function() {
var G__44668 = null;
var G__44668__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44668__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44668 = function(p,v){
switch(arguments.length){
case 1:
return G__44668__1.call(this,p);
case 2:
return G__44668__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44668.cljs$core$IFn$_invoke$arity$1 = G__44668__1;
G__44668.cljs$core$IFn$_invoke$arity$2 = G__44668__2;
return G__44668;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42251 = arguments.length;
switch (G__42251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44667(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44667(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42279 = arguments.length;
switch (G__42279) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42265_SHARP_){
if(cljs.core.truth_((p1__42265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42265_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42265_SHARP_.call(null,topic)))){
return p1__42265_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42265_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42291 = meta42291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42292,meta42291__$1){
var self__ = this;
var _42292__$1 = this;
return (new cljs.core.async.t_cljs$core$async42290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42291__$1));
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42292){
var self__ = this;
var _42292__$1 = this;
return self__.meta42291;
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42291","meta42291",-1565694593,null)], null);
}));

(cljs.core.async.t_cljs$core$async42290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42290");

(cljs.core.async.t_cljs$core$async42290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42290.
 */
cljs.core.async.__GT_t_cljs$core$async42290 = (function cljs$core$async$__GT_t_cljs$core$async42290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42291){
return (new cljs.core.async.t_cljs$core$async42290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42291));
});

}

return (new cljs.core.async.t_cljs$core$async42290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40432__auto___44679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (7))){
var inst_42376 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42388_44680 = state_42381__$1;
(statearr_42388_44680[(2)] = inst_42376);

(statearr_42388_44680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (20))){
var state_42381__$1 = state_42381;
var statearr_42393_44681 = state_42381__$1;
(statearr_42393_44681[(2)] = null);

(statearr_42393_44681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (1))){
var state_42381__$1 = state_42381;
var statearr_42394_44683 = state_42381__$1;
(statearr_42394_44683[(2)] = null);

(statearr_42394_44683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (24))){
var inst_42358 = (state_42381[(7)]);
var inst_42367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42358);
var state_42381__$1 = state_42381;
var statearr_42397_44684 = state_42381__$1;
(statearr_42397_44684[(2)] = inst_42367);

(statearr_42397_44684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (4))){
var inst_42308 = (state_42381[(8)]);
var inst_42308__$1 = (state_42381[(2)]);
var inst_42309 = (inst_42308__$1 == null);
var state_42381__$1 = (function (){var statearr_42398 = state_42381;
(statearr_42398[(8)] = inst_42308__$1);

return statearr_42398;
})();
if(cljs.core.truth_(inst_42309)){
var statearr_42399_44685 = state_42381__$1;
(statearr_42399_44685[(1)] = (5));

} else {
var statearr_42400_44686 = state_42381__$1;
(statearr_42400_44686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (15))){
var inst_42352 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42401_44690 = state_42381__$1;
(statearr_42401_44690[(2)] = inst_42352);

(statearr_42401_44690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (21))){
var inst_42372 = (state_42381[(2)]);
var state_42381__$1 = (function (){var statearr_42402 = state_42381;
(statearr_42402[(9)] = inst_42372);

return statearr_42402;
})();
var statearr_42404_44691 = state_42381__$1;
(statearr_42404_44691[(2)] = null);

(statearr_42404_44691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (13))){
var inst_42333 = (state_42381[(10)]);
var inst_42335 = cljs.core.chunked_seq_QMARK_(inst_42333);
var state_42381__$1 = state_42381;
if(inst_42335){
var statearr_42409_44692 = state_42381__$1;
(statearr_42409_44692[(1)] = (16));

} else {
var statearr_42410_44693 = state_42381__$1;
(statearr_42410_44693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (22))){
var inst_42364 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42364)){
var statearr_42411_44694 = state_42381__$1;
(statearr_42411_44694[(1)] = (23));

} else {
var statearr_42412_44695 = state_42381__$1;
(statearr_42412_44695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var inst_42308 = (state_42381[(8)]);
var inst_42358 = (state_42381[(7)]);
var inst_42360 = (state_42381[(11)]);
var inst_42358__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42308) : topic_fn.call(null,inst_42308));
var inst_42359 = cljs.core.deref(mults);
var inst_42360__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42359,inst_42358__$1);
var state_42381__$1 = (function (){var statearr_42413 = state_42381;
(statearr_42413[(7)] = inst_42358__$1);

(statearr_42413[(11)] = inst_42360__$1);

return statearr_42413;
})();
if(cljs.core.truth_(inst_42360__$1)){
var statearr_42414_44697 = state_42381__$1;
(statearr_42414_44697[(1)] = (19));

} else {
var statearr_42415_44702 = state_42381__$1;
(statearr_42415_44702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (25))){
var inst_42369 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42422_44703 = state_42381__$1;
(statearr_42422_44703[(2)] = inst_42369);

(statearr_42422_44703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (17))){
var inst_42333 = (state_42381[(10)]);
var inst_42343 = cljs.core.first(inst_42333);
var inst_42344 = cljs.core.async.muxch_STAR_(inst_42343);
var inst_42345 = cljs.core.async.close_BANG_(inst_42344);
var inst_42346 = cljs.core.next(inst_42333);
var inst_42318 = inst_42346;
var inst_42319 = null;
var inst_42320 = (0);
var inst_42321 = (0);
var state_42381__$1 = (function (){var statearr_42424 = state_42381;
(statearr_42424[(12)] = inst_42321);

(statearr_42424[(13)] = inst_42318);

(statearr_42424[(14)] = inst_42320);

(statearr_42424[(15)] = inst_42345);

(statearr_42424[(16)] = inst_42319);

return statearr_42424;
})();
var statearr_42425_44711 = state_42381__$1;
(statearr_42425_44711[(2)] = null);

(statearr_42425_44711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (3))){
var inst_42378 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42381__$1,inst_42378);
} else {
if((state_val_42382 === (12))){
var inst_42354 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42432_44712 = state_42381__$1;
(statearr_42432_44712[(2)] = inst_42354);

(statearr_42432_44712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (2))){
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42381__$1,(4),ch);
} else {
if((state_val_42382 === (23))){
var state_42381__$1 = state_42381;
var statearr_42433_44716 = state_42381__$1;
(statearr_42433_44716[(2)] = null);

(statearr_42433_44716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (19))){
var inst_42308 = (state_42381[(8)]);
var inst_42360 = (state_42381[(11)]);
var inst_42362 = cljs.core.async.muxch_STAR_(inst_42360);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42381__$1,(22),inst_42362,inst_42308);
} else {
if((state_val_42382 === (11))){
var inst_42318 = (state_42381[(13)]);
var inst_42333 = (state_42381[(10)]);
var inst_42333__$1 = cljs.core.seq(inst_42318);
var state_42381__$1 = (function (){var statearr_42434 = state_42381;
(statearr_42434[(10)] = inst_42333__$1);

return statearr_42434;
})();
if(inst_42333__$1){
var statearr_42435_44721 = state_42381__$1;
(statearr_42435_44721[(1)] = (13));

} else {
var statearr_42436_44722 = state_42381__$1;
(statearr_42436_44722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (9))){
var inst_42356 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42437_44723 = state_42381__$1;
(statearr_42437_44723[(2)] = inst_42356);

(statearr_42437_44723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var inst_42315 = cljs.core.deref(mults);
var inst_42316 = cljs.core.vals(inst_42315);
var inst_42317 = cljs.core.seq(inst_42316);
var inst_42318 = inst_42317;
var inst_42319 = null;
var inst_42320 = (0);
var inst_42321 = (0);
var state_42381__$1 = (function (){var statearr_42439 = state_42381;
(statearr_42439[(12)] = inst_42321);

(statearr_42439[(13)] = inst_42318);

(statearr_42439[(14)] = inst_42320);

(statearr_42439[(16)] = inst_42319);

return statearr_42439;
})();
var statearr_42440_44725 = state_42381__$1;
(statearr_42440_44725[(2)] = null);

(statearr_42440_44725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (14))){
var state_42381__$1 = state_42381;
var statearr_42444_44729 = state_42381__$1;
(statearr_42444_44729[(2)] = null);

(statearr_42444_44729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (16))){
var inst_42333 = (state_42381[(10)]);
var inst_42337 = cljs.core.chunk_first(inst_42333);
var inst_42338 = cljs.core.chunk_rest(inst_42333);
var inst_42340 = cljs.core.count(inst_42337);
var inst_42318 = inst_42338;
var inst_42319 = inst_42337;
var inst_42320 = inst_42340;
var inst_42321 = (0);
var state_42381__$1 = (function (){var statearr_42445 = state_42381;
(statearr_42445[(12)] = inst_42321);

(statearr_42445[(13)] = inst_42318);

(statearr_42445[(14)] = inst_42320);

(statearr_42445[(16)] = inst_42319);

return statearr_42445;
})();
var statearr_42446_44730 = state_42381__$1;
(statearr_42446_44730[(2)] = null);

(statearr_42446_44730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (10))){
var inst_42321 = (state_42381[(12)]);
var inst_42318 = (state_42381[(13)]);
var inst_42320 = (state_42381[(14)]);
var inst_42319 = (state_42381[(16)]);
var inst_42326 = cljs.core._nth(inst_42319,inst_42321);
var inst_42327 = cljs.core.async.muxch_STAR_(inst_42326);
var inst_42328 = cljs.core.async.close_BANG_(inst_42327);
var inst_42329 = (inst_42321 + (1));
var tmp42441 = inst_42318;
var tmp42442 = inst_42320;
var tmp42443 = inst_42319;
var inst_42318__$1 = tmp42441;
var inst_42319__$1 = tmp42443;
var inst_42320__$1 = tmp42442;
var inst_42321__$1 = inst_42329;
var state_42381__$1 = (function (){var statearr_42449 = state_42381;
(statearr_42449[(12)] = inst_42321__$1);

(statearr_42449[(13)] = inst_42318__$1);

(statearr_42449[(17)] = inst_42328);

(statearr_42449[(14)] = inst_42320__$1);

(statearr_42449[(16)] = inst_42319__$1);

return statearr_42449;
})();
var statearr_42450_44734 = state_42381__$1;
(statearr_42450_44734[(2)] = null);

(statearr_42450_44734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (18))){
var inst_42349 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42451_44735 = state_42381__$1;
(statearr_42451_44735[(2)] = inst_42349);

(statearr_42451_44735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (8))){
var inst_42321 = (state_42381[(12)]);
var inst_42320 = (state_42381[(14)]);
var inst_42323 = (inst_42321 < inst_42320);
var inst_42324 = inst_42323;
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42324)){
var statearr_42452_44756 = state_42381__$1;
(statearr_42452_44756[(1)] = (10));

} else {
var statearr_42453_44757 = state_42381__$1;
(statearr_42453_44757[(1)] = (11));

}

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
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_42460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42460[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_42460[(1)] = (1));

return statearr_42460;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_42381){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_42381);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e42461){var ex__39851__auto__ = e42461;
var statearr_42462_44758 = state_42381;
(statearr_42462_44758[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_42381[(4)]))){
var statearr_42463_44759 = state_42381;
(statearr_42463_44759[(1)] = cljs.core.first((state_42381[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44760 = state_42381;
state_42381 = G__44760;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_42464 = f__40433__auto__();
(statearr_42464[(6)] = c__40432__auto___44679);

return statearr_42464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42466 = arguments.length;
switch (G__42466) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42469 = arguments.length;
switch (G__42469) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42498 = arguments.length;
switch (G__42498) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__40432__auto___44808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_42568){
var state_val_42569 = (state_42568[(1)]);
if((state_val_42569 === (7))){
var state_42568__$1 = state_42568;
var statearr_42570_44814 = state_42568__$1;
(statearr_42570_44814[(2)] = null);

(statearr_42570_44814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (1))){
var state_42568__$1 = state_42568;
var statearr_42572_44824 = state_42568__$1;
(statearr_42572_44824[(2)] = null);

(statearr_42572_44824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (4))){
var inst_42507 = (state_42568[(7)]);
var inst_42505 = (state_42568[(8)]);
var inst_42509 = (inst_42507 < inst_42505);
var state_42568__$1 = state_42568;
if(cljs.core.truth_(inst_42509)){
var statearr_42576_44825 = state_42568__$1;
(statearr_42576_44825[(1)] = (6));

} else {
var statearr_42577_44826 = state_42568__$1;
(statearr_42577_44826[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (15))){
var inst_42554 = (state_42568[(9)]);
var inst_42559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42554);
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42568__$1,(17),out,inst_42559);
} else {
if((state_val_42569 === (13))){
var inst_42554 = (state_42568[(9)]);
var inst_42554__$1 = (state_42568[(2)]);
var inst_42555 = cljs.core.some(cljs.core.nil_QMARK_,inst_42554__$1);
var state_42568__$1 = (function (){var statearr_42583 = state_42568;
(statearr_42583[(9)] = inst_42554__$1);

return statearr_42583;
})();
if(cljs.core.truth_(inst_42555)){
var statearr_42584_44827 = state_42568__$1;
(statearr_42584_44827[(1)] = (14));

} else {
var statearr_42585_44828 = state_42568__$1;
(statearr_42585_44828[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (6))){
var state_42568__$1 = state_42568;
var statearr_42587_44829 = state_42568__$1;
(statearr_42587_44829[(2)] = null);

(statearr_42587_44829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (17))){
var inst_42561 = (state_42568[(2)]);
var state_42568__$1 = (function (){var statearr_42592 = state_42568;
(statearr_42592[(10)] = inst_42561);

return statearr_42592;
})();
var statearr_42595_44833 = state_42568__$1;
(statearr_42595_44833[(2)] = null);

(statearr_42595_44833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (3))){
var inst_42566 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42568__$1,inst_42566);
} else {
if((state_val_42569 === (12))){
var _ = (function (){var statearr_42596 = state_42568;
(statearr_42596[(4)] = cljs.core.rest((state_42568[(4)])));

return statearr_42596;
})();
var state_42568__$1 = state_42568;
var ex42590 = (state_42568__$1[(2)]);
var statearr_42597_44835 = state_42568__$1;
(statearr_42597_44835[(5)] = ex42590);


if((ex42590 instanceof Object)){
var statearr_42601_44836 = state_42568__$1;
(statearr_42601_44836[(1)] = (11));

(statearr_42601_44836[(5)] = null);

} else {
throw ex42590;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (2))){
var inst_42504 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42505 = cnt;
var inst_42507 = (0);
var state_42568__$1 = (function (){var statearr_42607 = state_42568;
(statearr_42607[(7)] = inst_42507);

(statearr_42607[(8)] = inst_42505);

(statearr_42607[(11)] = inst_42504);

return statearr_42607;
})();
var statearr_42609_44837 = state_42568__$1;
(statearr_42609_44837[(2)] = null);

(statearr_42609_44837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (11))){
var inst_42533 = (state_42568[(2)]);
var inst_42534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42568__$1 = (function (){var statearr_42611 = state_42568;
(statearr_42611[(12)] = inst_42533);

return statearr_42611;
})();
var statearr_42612_44838 = state_42568__$1;
(statearr_42612_44838[(2)] = inst_42534);

(statearr_42612_44838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (9))){
var inst_42507 = (state_42568[(7)]);
var _ = (function (){var statearr_42616 = state_42568;
(statearr_42616[(4)] = cljs.core.cons((12),(state_42568[(4)])));

return statearr_42616;
})();
var inst_42540 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42507) : chs__$1.call(null,inst_42507));
var inst_42541 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42507) : done.call(null,inst_42507));
var inst_42542 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42540,inst_42541);
var ___$1 = (function (){var statearr_42617 = state_42568;
(statearr_42617[(4)] = cljs.core.rest((state_42568[(4)])));

return statearr_42617;
})();
var state_42568__$1 = state_42568;
var statearr_42618_44839 = state_42568__$1;
(statearr_42618_44839[(2)] = inst_42542);

(statearr_42618_44839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (5))){
var inst_42552 = (state_42568[(2)]);
var state_42568__$1 = (function (){var statearr_42619 = state_42568;
(statearr_42619[(13)] = inst_42552);

return statearr_42619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42568__$1,(13),dchan);
} else {
if((state_val_42569 === (14))){
var inst_42557 = cljs.core.async.close_BANG_(out);
var state_42568__$1 = state_42568;
var statearr_42624_44840 = state_42568__$1;
(statearr_42624_44840[(2)] = inst_42557);

(statearr_42624_44840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (16))){
var inst_42564 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42629_44841 = state_42568__$1;
(statearr_42629_44841[(2)] = inst_42564);

(statearr_42629_44841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (10))){
var inst_42507 = (state_42568[(7)]);
var inst_42545 = (state_42568[(2)]);
var inst_42546 = (inst_42507 + (1));
var inst_42507__$1 = inst_42546;
var state_42568__$1 = (function (){var statearr_42632 = state_42568;
(statearr_42632[(7)] = inst_42507__$1);

(statearr_42632[(14)] = inst_42545);

return statearr_42632;
})();
var statearr_42633_44857 = state_42568__$1;
(statearr_42633_44857[(2)] = null);

(statearr_42633_44857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42569 === (8))){
var inst_42550 = (state_42568[(2)]);
var state_42568__$1 = state_42568;
var statearr_42638_44860 = state_42568__$1;
(statearr_42638_44860[(2)] = inst_42550);

(statearr_42638_44860[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_42641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42641[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_42641[(1)] = (1));

return statearr_42641;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_42568){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_42568);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e42642){var ex__39851__auto__ = e42642;
var statearr_42643_44867 = state_42568;
(statearr_42643_44867[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_42568[(4)]))){
var statearr_42644_44868 = state_42568;
(statearr_42644_44868[(1)] = cljs.core.first((state_42568[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44869 = state_42568;
state_42568 = G__44869;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_42568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_42568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_42647 = f__40433__auto__();
(statearr_42647[(6)] = c__40432__auto___44808);

return statearr_42647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42652 = arguments.length;
switch (G__42652) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___44876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_42697){
var state_val_42699 = (state_42697[(1)]);
if((state_val_42699 === (7))){
var inst_42670 = (state_42697[(7)]);
var inst_42669 = (state_42697[(8)]);
var inst_42669__$1 = (state_42697[(2)]);
var inst_42670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42669__$1,(0),null);
var inst_42671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42669__$1,(1),null);
var inst_42672 = (inst_42670__$1 == null);
var state_42697__$1 = (function (){var statearr_42716 = state_42697;
(statearr_42716[(9)] = inst_42671);

(statearr_42716[(7)] = inst_42670__$1);

(statearr_42716[(8)] = inst_42669__$1);

return statearr_42716;
})();
if(cljs.core.truth_(inst_42672)){
var statearr_42717_44879 = state_42697__$1;
(statearr_42717_44879[(1)] = (8));

} else {
var statearr_42718_44880 = state_42697__$1;
(statearr_42718_44880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (1))){
var inst_42658 = cljs.core.vec(chs);
var inst_42659 = inst_42658;
var state_42697__$1 = (function (){var statearr_42720 = state_42697;
(statearr_42720[(10)] = inst_42659);

return statearr_42720;
})();
var statearr_42722_44883 = state_42697__$1;
(statearr_42722_44883[(2)] = null);

(statearr_42722_44883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (4))){
var inst_42659 = (state_42697[(10)]);
var state_42697__$1 = state_42697;
return cljs.core.async.ioc_alts_BANG_(state_42697__$1,(7),inst_42659);
} else {
if((state_val_42699 === (6))){
var inst_42691 = (state_42697[(2)]);
var state_42697__$1 = state_42697;
var statearr_42723_44884 = state_42697__$1;
(statearr_42723_44884[(2)] = inst_42691);

(statearr_42723_44884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (3))){
var inst_42693 = (state_42697[(2)]);
var state_42697__$1 = state_42697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42697__$1,inst_42693);
} else {
if((state_val_42699 === (2))){
var inst_42659 = (state_42697[(10)]);
var inst_42661 = cljs.core.count(inst_42659);
var inst_42662 = (inst_42661 > (0));
var state_42697__$1 = state_42697;
if(cljs.core.truth_(inst_42662)){
var statearr_42727_44888 = state_42697__$1;
(statearr_42727_44888[(1)] = (4));

} else {
var statearr_42728_44889 = state_42697__$1;
(statearr_42728_44889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (11))){
var inst_42659 = (state_42697[(10)]);
var inst_42684 = (state_42697[(2)]);
var tmp42726 = inst_42659;
var inst_42659__$1 = tmp42726;
var state_42697__$1 = (function (){var statearr_42729 = state_42697;
(statearr_42729[(10)] = inst_42659__$1);

(statearr_42729[(11)] = inst_42684);

return statearr_42729;
})();
var statearr_42731_44893 = state_42697__$1;
(statearr_42731_44893[(2)] = null);

(statearr_42731_44893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (9))){
var inst_42670 = (state_42697[(7)]);
var state_42697__$1 = state_42697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42697__$1,(11),out,inst_42670);
} else {
if((state_val_42699 === (5))){
var inst_42689 = cljs.core.async.close_BANG_(out);
var state_42697__$1 = state_42697;
var statearr_42735_44894 = state_42697__$1;
(statearr_42735_44894[(2)] = inst_42689);

(statearr_42735_44894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (10))){
var inst_42687 = (state_42697[(2)]);
var state_42697__$1 = state_42697;
var statearr_42740_44897 = state_42697__$1;
(statearr_42740_44897[(2)] = inst_42687);

(statearr_42740_44897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (8))){
var inst_42659 = (state_42697[(10)]);
var inst_42671 = (state_42697[(9)]);
var inst_42670 = (state_42697[(7)]);
var inst_42669 = (state_42697[(8)]);
var inst_42679 = (function (){var cs = inst_42659;
var vec__42665 = inst_42669;
var v = inst_42670;
var c = inst_42671;
return (function (p1__42650_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42650_SHARP_);
});
})();
var inst_42680 = cljs.core.filterv(inst_42679,inst_42659);
var inst_42659__$1 = inst_42680;
var state_42697__$1 = (function (){var statearr_42743 = state_42697;
(statearr_42743[(10)] = inst_42659__$1);

return statearr_42743;
})();
var statearr_42745_44898 = state_42697__$1;
(statearr_42745_44898[(2)] = null);

(statearr_42745_44898[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_42747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42747[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_42747[(1)] = (1));

return statearr_42747;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_42697){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_42697);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e42749){var ex__39851__auto__ = e42749;
var statearr_42750_44899 = state_42697;
(statearr_42750_44899[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_42697[(4)]))){
var statearr_42751_44902 = state_42697;
(statearr_42751_44902[(1)] = cljs.core.first((state_42697[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44903 = state_42697;
state_42697 = G__44903;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_42697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_42697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_42764 = f__40433__auto__();
(statearr_42764[(6)] = c__40432__auto___44876);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42778 = arguments.length;
switch (G__42778) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___44911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_42819){
var state_val_42820 = (state_42819[(1)]);
if((state_val_42820 === (7))){
var inst_42789 = (state_42819[(7)]);
var inst_42789__$1 = (state_42819[(2)]);
var inst_42794 = (inst_42789__$1 == null);
var inst_42795 = cljs.core.not(inst_42794);
var state_42819__$1 = (function (){var statearr_42821 = state_42819;
(statearr_42821[(7)] = inst_42789__$1);

return statearr_42821;
})();
if(inst_42795){
var statearr_42822_44912 = state_42819__$1;
(statearr_42822_44912[(1)] = (8));

} else {
var statearr_42823_44913 = state_42819__$1;
(statearr_42823_44913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (1))){
var inst_42780 = (0);
var state_42819__$1 = (function (){var statearr_42824 = state_42819;
(statearr_42824[(8)] = inst_42780);

return statearr_42824;
})();
var statearr_42825_44915 = state_42819__$1;
(statearr_42825_44915[(2)] = null);

(statearr_42825_44915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (4))){
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42819__$1,(7),ch);
} else {
if((state_val_42820 === (6))){
var inst_42809 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42826_44916 = state_42819__$1;
(statearr_42826_44916[(2)] = inst_42809);

(statearr_42826_44916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (3))){
var inst_42811 = (state_42819[(2)]);
var inst_42812 = cljs.core.async.close_BANG_(out);
var state_42819__$1 = (function (){var statearr_42827 = state_42819;
(statearr_42827[(9)] = inst_42811);

return statearr_42827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42819__$1,inst_42812);
} else {
if((state_val_42820 === (2))){
var inst_42780 = (state_42819[(8)]);
var inst_42782 = (inst_42780 < n);
var state_42819__$1 = state_42819;
if(cljs.core.truth_(inst_42782)){
var statearr_42828_44920 = state_42819__$1;
(statearr_42828_44920[(1)] = (4));

} else {
var statearr_42829_44921 = state_42819__$1;
(statearr_42829_44921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (11))){
var inst_42780 = (state_42819[(8)]);
var inst_42801 = (state_42819[(2)]);
var inst_42802 = (inst_42780 + (1));
var inst_42780__$1 = inst_42802;
var state_42819__$1 = (function (){var statearr_42832 = state_42819;
(statearr_42832[(10)] = inst_42801);

(statearr_42832[(8)] = inst_42780__$1);

return statearr_42832;
})();
var statearr_42834_44925 = state_42819__$1;
(statearr_42834_44925[(2)] = null);

(statearr_42834_44925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (9))){
var state_42819__$1 = state_42819;
var statearr_42837_44928 = state_42819__$1;
(statearr_42837_44928[(2)] = null);

(statearr_42837_44928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (5))){
var state_42819__$1 = state_42819;
var statearr_42839_44930 = state_42819__$1;
(statearr_42839_44930[(2)] = null);

(statearr_42839_44930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (10))){
var inst_42806 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42849_44931 = state_42819__$1;
(statearr_42849_44931[(2)] = inst_42806);

(statearr_42849_44931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (8))){
var inst_42789 = (state_42819[(7)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42819__$1,(11),out,inst_42789);
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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_42854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42854[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_42854[(1)] = (1));

return statearr_42854;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_42819){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_42819);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e42857){var ex__39851__auto__ = e42857;
var statearr_42859_44932 = state_42819;
(statearr_42859_44932[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_42819[(4)]))){
var statearr_42864_44934 = state_42819;
(statearr_42864_44934[(1)] = cljs.core.first((state_42819[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44935 = state_42819;
state_42819 = G__44935;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_42819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_42819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_42869 = f__40433__auto__();
(statearr_42869[(6)] = c__40432__auto___44911);

return statearr_42869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42874 = (function (f,ch,meta42875){
this.f = f;
this.ch = ch;
this.meta42875 = meta42875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42876,meta42875__$1){
var self__ = this;
var _42876__$1 = this;
return (new cljs.core.async.t_cljs$core$async42874(self__.f,self__.ch,meta42875__$1));
}));

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42876){
var self__ = this;
var _42876__$1 = this;
return self__.meta42875;
}));

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42893 = (function (f,ch,meta42875,_,fn1,meta42894){
this.f = f;
this.ch = ch;
this.meta42875 = meta42875;
this._ = _;
this.fn1 = fn1;
this.meta42894 = meta42894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42895,meta42894__$1){
var self__ = this;
var _42895__$1 = this;
return (new cljs.core.async.t_cljs$core$async42893(self__.f,self__.ch,self__.meta42875,self__._,self__.fn1,meta42894__$1));
}));

(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42895){
var self__ = this;
var _42895__$1 = this;
return self__.meta42894;
}));

(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42873_SHARP_){
var G__42904 = (((p1__42873_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42873_SHARP_) : self__.f.call(null,p1__42873_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42904) : f1.call(null,G__42904));
});
}));

(cljs.core.async.t_cljs$core$async42893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42875","meta42875",1700035889,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42874","cljs.core.async/t_cljs$core$async42874",773104520,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42894","meta42894",1322912517,null)], null);
}));

(cljs.core.async.t_cljs$core$async42893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42893");

(cljs.core.async.t_cljs$core$async42893.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42893.
 */
cljs.core.async.__GT_t_cljs$core$async42893 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42893(f__$1,ch__$1,meta42875__$1,___$2,fn1__$1,meta42894){
return (new cljs.core.async.t_cljs$core$async42893(f__$1,ch__$1,meta42875__$1,___$2,fn1__$1,meta42894));
});

}

return (new cljs.core.async.t_cljs$core$async42893(self__.f,self__.ch,self__.meta42875,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42911 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42911) : self__.f.call(null,G__42911));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42875","meta42875",1700035889,null)], null);
}));

(cljs.core.async.t_cljs$core$async42874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42874");

(cljs.core.async.t_cljs$core$async42874.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42874.
 */
cljs.core.async.__GT_t_cljs$core$async42874 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42874(f__$1,ch__$1,meta42875){
return (new cljs.core.async.t_cljs$core$async42874(f__$1,ch__$1,meta42875));
});

}

return (new cljs.core.async.t_cljs$core$async42874(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42918 = (function (f,ch,meta42919){
this.f = f;
this.ch = ch;
this.meta42919 = meta42919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42920,meta42919__$1){
var self__ = this;
var _42920__$1 = this;
return (new cljs.core.async.t_cljs$core$async42918(self__.f,self__.ch,meta42919__$1));
}));

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42920){
var self__ = this;
var _42920__$1 = this;
return self__.meta42919;
}));

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42919","meta42919",794648158,null)], null);
}));

(cljs.core.async.t_cljs$core$async42918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42918");

(cljs.core.async.t_cljs$core$async42918.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42918.
 */
cljs.core.async.__GT_t_cljs$core$async42918 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42918(f__$1,ch__$1,meta42919){
return (new cljs.core.async.t_cljs$core$async42918(f__$1,ch__$1,meta42919));
});

}

return (new cljs.core.async.t_cljs$core$async42918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42945 = (function (p,ch,meta42946){
this.p = p;
this.ch = ch;
this.meta42946 = meta42946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42947,meta42946__$1){
var self__ = this;
var _42947__$1 = this;
return (new cljs.core.async.t_cljs$core$async42945(self__.p,self__.ch,meta42946__$1));
}));

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42947){
var self__ = this;
var _42947__$1 = this;
return self__.meta42946;
}));

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42946","meta42946",-76698123,null)], null);
}));

(cljs.core.async.t_cljs$core$async42945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42945");

(cljs.core.async.t_cljs$core$async42945.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42945.
 */
cljs.core.async.__GT_t_cljs$core$async42945 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42945(p__$1,ch__$1,meta42946){
return (new cljs.core.async.t_cljs$core$async42945(p__$1,ch__$1,meta42946));
});

}

return (new cljs.core.async.t_cljs$core$async42945(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42984 = arguments.length;
switch (G__42984) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___44957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_43008){
var state_val_43009 = (state_43008[(1)]);
if((state_val_43009 === (7))){
var inst_43004 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
var statearr_43010_44960 = state_43008__$1;
(statearr_43010_44960[(2)] = inst_43004);

(statearr_43010_44960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (1))){
var state_43008__$1 = state_43008;
var statearr_43011_44961 = state_43008__$1;
(statearr_43011_44961[(2)] = null);

(statearr_43011_44961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (4))){
var inst_42990 = (state_43008[(7)]);
var inst_42990__$1 = (state_43008[(2)]);
var inst_42991 = (inst_42990__$1 == null);
var state_43008__$1 = (function (){var statearr_43012 = state_43008;
(statearr_43012[(7)] = inst_42990__$1);

return statearr_43012;
})();
if(cljs.core.truth_(inst_42991)){
var statearr_43013_44962 = state_43008__$1;
(statearr_43013_44962[(1)] = (5));

} else {
var statearr_43014_44963 = state_43008__$1;
(statearr_43014_44963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (6))){
var inst_42990 = (state_43008[(7)]);
var inst_42995 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42990) : p.call(null,inst_42990));
var state_43008__$1 = state_43008;
if(cljs.core.truth_(inst_42995)){
var statearr_43015_44964 = state_43008__$1;
(statearr_43015_44964[(1)] = (8));

} else {
var statearr_43016_44965 = state_43008__$1;
(statearr_43016_44965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (3))){
var inst_43006 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43008__$1,inst_43006);
} else {
if((state_val_43009 === (2))){
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43008__$1,(4),ch);
} else {
if((state_val_43009 === (11))){
var inst_42998 = (state_43008[(2)]);
var state_43008__$1 = state_43008;
var statearr_43018_44966 = state_43008__$1;
(statearr_43018_44966[(2)] = inst_42998);

(statearr_43018_44966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (9))){
var state_43008__$1 = state_43008;
var statearr_43021_44967 = state_43008__$1;
(statearr_43021_44967[(2)] = null);

(statearr_43021_44967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (5))){
var inst_42993 = cljs.core.async.close_BANG_(out);
var state_43008__$1 = state_43008;
var statearr_43022_44968 = state_43008__$1;
(statearr_43022_44968[(2)] = inst_42993);

(statearr_43022_44968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (10))){
var inst_43001 = (state_43008[(2)]);
var state_43008__$1 = (function (){var statearr_43023 = state_43008;
(statearr_43023[(8)] = inst_43001);

return statearr_43023;
})();
var statearr_43025_44975 = state_43008__$1;
(statearr_43025_44975[(2)] = null);

(statearr_43025_44975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43009 === (8))){
var inst_42990 = (state_43008[(7)]);
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43008__$1,(11),out,inst_42990);
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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_43031 = [null,null,null,null,null,null,null,null,null];
(statearr_43031[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_43031[(1)] = (1));

return statearr_43031;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_43008){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_43008);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e43032){var ex__39851__auto__ = e43032;
var statearr_43033_44985 = state_43008;
(statearr_43033_44985[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_43008[(4)]))){
var statearr_43034_44987 = state_43008;
(statearr_43034_44987[(1)] = cljs.core.first((state_43008[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44988 = state_43008;
state_43008 = G__44988;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_43008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_43008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_43035 = f__40433__auto__();
(statearr_43035[(6)] = c__40432__auto___44957);

return statearr_43035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43044 = arguments.length;
switch (G__43044) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_43122){
var state_val_43123 = (state_43122[(1)]);
if((state_val_43123 === (7))){
var inst_43115 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
var statearr_43130_44995 = state_43122__$1;
(statearr_43130_44995[(2)] = inst_43115);

(statearr_43130_44995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (20))){
var inst_43083 = (state_43122[(7)]);
var inst_43094 = (state_43122[(2)]);
var inst_43095 = cljs.core.next(inst_43083);
var inst_43069 = inst_43095;
var inst_43070 = null;
var inst_43071 = (0);
var inst_43072 = (0);
var state_43122__$1 = (function (){var statearr_43135 = state_43122;
(statearr_43135[(8)] = inst_43070);

(statearr_43135[(9)] = inst_43069);

(statearr_43135[(10)] = inst_43094);

(statearr_43135[(11)] = inst_43071);

(statearr_43135[(12)] = inst_43072);

return statearr_43135;
})();
var statearr_43140_45004 = state_43122__$1;
(statearr_43140_45004[(2)] = null);

(statearr_43140_45004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (1))){
var state_43122__$1 = state_43122;
var statearr_43161_45005 = state_43122__$1;
(statearr_43161_45005[(2)] = null);

(statearr_43161_45005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (4))){
var inst_43056 = (state_43122[(13)]);
var inst_43056__$1 = (state_43122[(2)]);
var inst_43057 = (inst_43056__$1 == null);
var state_43122__$1 = (function (){var statearr_43162 = state_43122;
(statearr_43162[(13)] = inst_43056__$1);

return statearr_43162;
})();
if(cljs.core.truth_(inst_43057)){
var statearr_43163_45006 = state_43122__$1;
(statearr_43163_45006[(1)] = (5));

} else {
var statearr_43164_45007 = state_43122__$1;
(statearr_43164_45007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (15))){
var state_43122__$1 = state_43122;
var statearr_43168_45008 = state_43122__$1;
(statearr_43168_45008[(2)] = null);

(statearr_43168_45008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (21))){
var state_43122__$1 = state_43122;
var statearr_43169_45009 = state_43122__$1;
(statearr_43169_45009[(2)] = null);

(statearr_43169_45009[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (13))){
var inst_43070 = (state_43122[(8)]);
var inst_43069 = (state_43122[(9)]);
var inst_43071 = (state_43122[(11)]);
var inst_43072 = (state_43122[(12)]);
var inst_43079 = (state_43122[(2)]);
var inst_43080 = (inst_43072 + (1));
var tmp43165 = inst_43070;
var tmp43166 = inst_43069;
var tmp43167 = inst_43071;
var inst_43069__$1 = tmp43166;
var inst_43070__$1 = tmp43165;
var inst_43071__$1 = tmp43167;
var inst_43072__$1 = inst_43080;
var state_43122__$1 = (function (){var statearr_43170 = state_43122;
(statearr_43170[(8)] = inst_43070__$1);

(statearr_43170[(9)] = inst_43069__$1);

(statearr_43170[(11)] = inst_43071__$1);

(statearr_43170[(14)] = inst_43079);

(statearr_43170[(12)] = inst_43072__$1);

return statearr_43170;
})();
var statearr_43171_45018 = state_43122__$1;
(statearr_43171_45018[(2)] = null);

(statearr_43171_45018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (22))){
var state_43122__$1 = state_43122;
var statearr_43172_45027 = state_43122__$1;
(statearr_43172_45027[(2)] = null);

(statearr_43172_45027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (6))){
var inst_43056 = (state_43122[(13)]);
var inst_43067 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43056) : f.call(null,inst_43056));
var inst_43068 = cljs.core.seq(inst_43067);
var inst_43069 = inst_43068;
var inst_43070 = null;
var inst_43071 = (0);
var inst_43072 = (0);
var state_43122__$1 = (function (){var statearr_43180 = state_43122;
(statearr_43180[(8)] = inst_43070);

(statearr_43180[(9)] = inst_43069);

(statearr_43180[(11)] = inst_43071);

(statearr_43180[(12)] = inst_43072);

return statearr_43180;
})();
var statearr_43186_45028 = state_43122__$1;
(statearr_43186_45028[(2)] = null);

(statearr_43186_45028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (17))){
var inst_43083 = (state_43122[(7)]);
var inst_43087 = cljs.core.chunk_first(inst_43083);
var inst_43088 = cljs.core.chunk_rest(inst_43083);
var inst_43089 = cljs.core.count(inst_43087);
var inst_43069 = inst_43088;
var inst_43070 = inst_43087;
var inst_43071 = inst_43089;
var inst_43072 = (0);
var state_43122__$1 = (function (){var statearr_43191 = state_43122;
(statearr_43191[(8)] = inst_43070);

(statearr_43191[(9)] = inst_43069);

(statearr_43191[(11)] = inst_43071);

(statearr_43191[(12)] = inst_43072);

return statearr_43191;
})();
var statearr_43192_45029 = state_43122__$1;
(statearr_43192_45029[(2)] = null);

(statearr_43192_45029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (3))){
var inst_43117 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43122__$1,inst_43117);
} else {
if((state_val_43123 === (12))){
var inst_43103 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
var statearr_43195_45032 = state_43122__$1;
(statearr_43195_45032[(2)] = inst_43103);

(statearr_43195_45032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (2))){
var state_43122__$1 = state_43122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43122__$1,(4),in$);
} else {
if((state_val_43123 === (23))){
var inst_43113 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
var statearr_43209_45034 = state_43122__$1;
(statearr_43209_45034[(2)] = inst_43113);

(statearr_43209_45034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (19))){
var inst_43098 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
var statearr_43213_45035 = state_43122__$1;
(statearr_43213_45035[(2)] = inst_43098);

(statearr_43213_45035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (11))){
var inst_43069 = (state_43122[(9)]);
var inst_43083 = (state_43122[(7)]);
var inst_43083__$1 = cljs.core.seq(inst_43069);
var state_43122__$1 = (function (){var statearr_43214 = state_43122;
(statearr_43214[(7)] = inst_43083__$1);

return statearr_43214;
})();
if(inst_43083__$1){
var statearr_43215_45036 = state_43122__$1;
(statearr_43215_45036[(1)] = (14));

} else {
var statearr_43216_45037 = state_43122__$1;
(statearr_43216_45037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (9))){
var inst_43105 = (state_43122[(2)]);
var inst_43106 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43122__$1 = (function (){var statearr_43218 = state_43122;
(statearr_43218[(15)] = inst_43105);

return statearr_43218;
})();
if(cljs.core.truth_(inst_43106)){
var statearr_43221_45038 = state_43122__$1;
(statearr_43221_45038[(1)] = (21));

} else {
var statearr_43222_45039 = state_43122__$1;
(statearr_43222_45039[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (5))){
var inst_43060 = cljs.core.async.close_BANG_(out);
var state_43122__$1 = state_43122;
var statearr_43223_45040 = state_43122__$1;
(statearr_43223_45040[(2)] = inst_43060);

(statearr_43223_45040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (14))){
var inst_43083 = (state_43122[(7)]);
var inst_43085 = cljs.core.chunked_seq_QMARK_(inst_43083);
var state_43122__$1 = state_43122;
if(inst_43085){
var statearr_43224_45041 = state_43122__$1;
(statearr_43224_45041[(1)] = (17));

} else {
var statearr_43225_45042 = state_43122__$1;
(statearr_43225_45042[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (16))){
var inst_43101 = (state_43122[(2)]);
var state_43122__$1 = state_43122;
var statearr_43228_45043 = state_43122__$1;
(statearr_43228_45043[(2)] = inst_43101);

(statearr_43228_45043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43123 === (10))){
var inst_43070 = (state_43122[(8)]);
var inst_43072 = (state_43122[(12)]);
var inst_43077 = cljs.core._nth(inst_43070,inst_43072);
var state_43122__$1 = state_43122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43122__$1,(13),out,inst_43077);
} else {
if((state_val_43123 === (18))){
var inst_43083 = (state_43122[(7)]);
var inst_43092 = cljs.core.first(inst_43083);
var state_43122__$1 = state_43122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43122__$1,(20),out,inst_43092);
} else {
if((state_val_43123 === (8))){
var inst_43071 = (state_43122[(11)]);
var inst_43072 = (state_43122[(12)]);
var inst_43074 = (inst_43072 < inst_43071);
var inst_43075 = inst_43074;
var state_43122__$1 = state_43122;
if(cljs.core.truth_(inst_43075)){
var statearr_43229_45047 = state_43122__$1;
(statearr_43229_45047[(1)] = (10));

} else {
var statearr_43230_45048 = state_43122__$1;
(statearr_43230_45048[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____0 = (function (){
var statearr_43234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43234[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__);

(statearr_43234[(1)] = (1));

return statearr_43234;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____1 = (function (state_43122){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_43122);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e43238){var ex__39851__auto__ = e43238;
var statearr_43240_45049 = state_43122;
(statearr_43240_45049[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_43122[(4)]))){
var statearr_43242_45050 = state_43122;
(statearr_43242_45050[(1)] = cljs.core.first((state_43122[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45051 = state_43122;
state_43122 = G__45051;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__ = function(state_43122){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____1.call(this,state_43122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39848__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_43244 = f__40433__auto__();
(statearr_43244[(6)] = c__40432__auto__);

return statearr_43244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));

return c__40432__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43248 = arguments.length;
switch (G__43248) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43275 = arguments.length;
switch (G__43275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43295 = arguments.length;
switch (G__43295) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___45086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_43328){
var state_val_43329 = (state_43328[(1)]);
if((state_val_43329 === (7))){
var inst_43322 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
var statearr_43332_45092 = state_43328__$1;
(statearr_43332_45092[(2)] = inst_43322);

(statearr_43332_45092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (1))){
var inst_43302 = null;
var state_43328__$1 = (function (){var statearr_43337 = state_43328;
(statearr_43337[(7)] = inst_43302);

return statearr_43337;
})();
var statearr_43338_45100 = state_43328__$1;
(statearr_43338_45100[(2)] = null);

(statearr_43338_45100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (4))){
var inst_43307 = (state_43328[(8)]);
var inst_43307__$1 = (state_43328[(2)]);
var inst_43308 = (inst_43307__$1 == null);
var inst_43309 = cljs.core.not(inst_43308);
var state_43328__$1 = (function (){var statearr_43344 = state_43328;
(statearr_43344[(8)] = inst_43307__$1);

return statearr_43344;
})();
if(inst_43309){
var statearr_43349_45143 = state_43328__$1;
(statearr_43349_45143[(1)] = (5));

} else {
var statearr_43351_45145 = state_43328__$1;
(statearr_43351_45145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (6))){
var state_43328__$1 = state_43328;
var statearr_43355_45146 = state_43328__$1;
(statearr_43355_45146[(2)] = null);

(statearr_43355_45146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (3))){
var inst_43324 = (state_43328[(2)]);
var inst_43325 = cljs.core.async.close_BANG_(out);
var state_43328__$1 = (function (){var statearr_43357 = state_43328;
(statearr_43357[(9)] = inst_43324);

return statearr_43357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43328__$1,inst_43325);
} else {
if((state_val_43329 === (2))){
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43328__$1,(4),ch);
} else {
if((state_val_43329 === (11))){
var inst_43307 = (state_43328[(8)]);
var inst_43316 = (state_43328[(2)]);
var inst_43302 = inst_43307;
var state_43328__$1 = (function (){var statearr_43366 = state_43328;
(statearr_43366[(7)] = inst_43302);

(statearr_43366[(10)] = inst_43316);

return statearr_43366;
})();
var statearr_43373_45158 = state_43328__$1;
(statearr_43373_45158[(2)] = null);

(statearr_43373_45158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (9))){
var inst_43307 = (state_43328[(8)]);
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43328__$1,(11),out,inst_43307);
} else {
if((state_val_43329 === (5))){
var inst_43302 = (state_43328[(7)]);
var inst_43307 = (state_43328[(8)]);
var inst_43311 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43307,inst_43302);
var state_43328__$1 = state_43328;
if(inst_43311){
var statearr_43381_45167 = state_43328__$1;
(statearr_43381_45167[(1)] = (8));

} else {
var statearr_43382_45168 = state_43328__$1;
(statearr_43382_45168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (10))){
var inst_43319 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
var statearr_43383_45170 = state_43328__$1;
(statearr_43383_45170[(2)] = inst_43319);

(statearr_43383_45170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (8))){
var inst_43302 = (state_43328[(7)]);
var tmp43379 = inst_43302;
var inst_43302__$1 = tmp43379;
var state_43328__$1 = (function (){var statearr_43384 = state_43328;
(statearr_43384[(7)] = inst_43302__$1);

return statearr_43384;
})();
var statearr_43385_45171 = state_43328__$1;
(statearr_43385_45171[(2)] = null);

(statearr_43385_45171[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_43389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43389[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_43389[(1)] = (1));

return statearr_43389;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_43328){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_43328);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e43390){var ex__39851__auto__ = e43390;
var statearr_43391_45172 = state_43328;
(statearr_43391_45172[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_43328[(4)]))){
var statearr_43392_45174 = state_43328;
(statearr_43392_45174[(1)] = cljs.core.first((state_43328[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45176 = state_43328;
state_43328 = G__45176;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_43328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_43328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_43397 = f__40433__auto__();
(statearr_43397[(6)] = c__40432__auto___45086);

return statearr_43397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43400 = arguments.length;
switch (G__43400) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___45181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_43471){
var state_val_43472 = (state_43471[(1)]);
if((state_val_43472 === (7))){
var inst_43467 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43473_45186 = state_43471__$1;
(statearr_43473_45186[(2)] = inst_43467);

(statearr_43473_45186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (1))){
var inst_43434 = (new Array(n));
var inst_43435 = inst_43434;
var inst_43436 = (0);
var state_43471__$1 = (function (){var statearr_43474 = state_43471;
(statearr_43474[(7)] = inst_43436);

(statearr_43474[(8)] = inst_43435);

return statearr_43474;
})();
var statearr_43475_45194 = state_43471__$1;
(statearr_43475_45194[(2)] = null);

(statearr_43475_45194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (4))){
var inst_43439 = (state_43471[(9)]);
var inst_43439__$1 = (state_43471[(2)]);
var inst_43440 = (inst_43439__$1 == null);
var inst_43441 = cljs.core.not(inst_43440);
var state_43471__$1 = (function (){var statearr_43476 = state_43471;
(statearr_43476[(9)] = inst_43439__$1);

return statearr_43476;
})();
if(inst_43441){
var statearr_43477_45202 = state_43471__$1;
(statearr_43477_45202[(1)] = (5));

} else {
var statearr_43478_45204 = state_43471__$1;
(statearr_43478_45204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (15))){
var inst_43461 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43479_45210 = state_43471__$1;
(statearr_43479_45210[(2)] = inst_43461);

(statearr_43479_45210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (13))){
var state_43471__$1 = state_43471;
var statearr_43480_45213 = state_43471__$1;
(statearr_43480_45213[(2)] = null);

(statearr_43480_45213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (6))){
var inst_43436 = (state_43471[(7)]);
var inst_43457 = (inst_43436 > (0));
var state_43471__$1 = state_43471;
if(cljs.core.truth_(inst_43457)){
var statearr_43486_45216 = state_43471__$1;
(statearr_43486_45216[(1)] = (12));

} else {
var statearr_43487_45221 = state_43471__$1;
(statearr_43487_45221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (3))){
var inst_43469 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43471__$1,inst_43469);
} else {
if((state_val_43472 === (12))){
var inst_43435 = (state_43471[(8)]);
var inst_43459 = cljs.core.vec(inst_43435);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43471__$1,(15),out,inst_43459);
} else {
if((state_val_43472 === (2))){
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43471__$1,(4),ch);
} else {
if((state_val_43472 === (11))){
var inst_43451 = (state_43471[(2)]);
var inst_43452 = (new Array(n));
var inst_43435 = inst_43452;
var inst_43436 = (0);
var state_43471__$1 = (function (){var statearr_43492 = state_43471;
(statearr_43492[(7)] = inst_43436);

(statearr_43492[(8)] = inst_43435);

(statearr_43492[(10)] = inst_43451);

return statearr_43492;
})();
var statearr_43494_45226 = state_43471__$1;
(statearr_43494_45226[(2)] = null);

(statearr_43494_45226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (9))){
var inst_43435 = (state_43471[(8)]);
var inst_43449 = cljs.core.vec(inst_43435);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43471__$1,(11),out,inst_43449);
} else {
if((state_val_43472 === (5))){
var inst_43439 = (state_43471[(9)]);
var inst_43436 = (state_43471[(7)]);
var inst_43435 = (state_43471[(8)]);
var inst_43444 = (state_43471[(11)]);
var inst_43443 = (inst_43435[inst_43436] = inst_43439);
var inst_43444__$1 = (inst_43436 + (1));
var inst_43445 = (inst_43444__$1 < n);
var state_43471__$1 = (function (){var statearr_43499 = state_43471;
(statearr_43499[(11)] = inst_43444__$1);

(statearr_43499[(12)] = inst_43443);

return statearr_43499;
})();
if(cljs.core.truth_(inst_43445)){
var statearr_43502_45242 = state_43471__$1;
(statearr_43502_45242[(1)] = (8));

} else {
var statearr_43504_45243 = state_43471__$1;
(statearr_43504_45243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (14))){
var inst_43464 = (state_43471[(2)]);
var inst_43465 = cljs.core.async.close_BANG_(out);
var state_43471__$1 = (function (){var statearr_43518 = state_43471;
(statearr_43518[(13)] = inst_43464);

return statearr_43518;
})();
var statearr_43519_45244 = state_43471__$1;
(statearr_43519_45244[(2)] = inst_43465);

(statearr_43519_45244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (10))){
var inst_43455 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43520_45245 = state_43471__$1;
(statearr_43520_45245[(2)] = inst_43455);

(statearr_43520_45245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (8))){
var inst_43435 = (state_43471[(8)]);
var inst_43444 = (state_43471[(11)]);
var tmp43505 = inst_43435;
var inst_43435__$1 = tmp43505;
var inst_43436 = inst_43444;
var state_43471__$1 = (function (){var statearr_43521 = state_43471;
(statearr_43521[(7)] = inst_43436);

(statearr_43521[(8)] = inst_43435__$1);

return statearr_43521;
})();
var statearr_43522_45246 = state_43471__$1;
(statearr_43522_45246[(2)] = null);

(statearr_43522_45246[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_43523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43523[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_43523[(1)] = (1));

return statearr_43523;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_43471){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_43471);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e43524){var ex__39851__auto__ = e43524;
var statearr_43525_45247 = state_43471;
(statearr_43525_45247[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_43471[(4)]))){
var statearr_43526_45248 = state_43471;
(statearr_43526_45248[(1)] = cljs.core.first((state_43471[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45249 = state_43471;
state_43471 = G__45249;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_43471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_43471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_43532 = f__40433__auto__();
(statearr_43532[(6)] = c__40432__auto___45181);

return statearr_43532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43541 = arguments.length;
switch (G__43541) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40432__auto___45257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40433__auto__ = (function (){var switch__39847__auto__ = (function (state_43606){
var state_val_43610 = (state_43606[(1)]);
if((state_val_43610 === (7))){
var inst_43602 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43614_45258 = state_43606__$1;
(statearr_43614_45258[(2)] = inst_43602);

(statearr_43614_45258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (1))){
var inst_43563 = [];
var inst_43564 = inst_43563;
var inst_43565 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43606__$1 = (function (){var statearr_43617 = state_43606;
(statearr_43617[(7)] = inst_43565);

(statearr_43617[(8)] = inst_43564);

return statearr_43617;
})();
var statearr_43618_45280 = state_43606__$1;
(statearr_43618_45280[(2)] = null);

(statearr_43618_45280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (4))){
var inst_43568 = (state_43606[(9)]);
var inst_43568__$1 = (state_43606[(2)]);
var inst_43569 = (inst_43568__$1 == null);
var inst_43570 = cljs.core.not(inst_43569);
var state_43606__$1 = (function (){var statearr_43620 = state_43606;
(statearr_43620[(9)] = inst_43568__$1);

return statearr_43620;
})();
if(inst_43570){
var statearr_43621_45286 = state_43606__$1;
(statearr_43621_45286[(1)] = (5));

} else {
var statearr_43622_45287 = state_43606__$1;
(statearr_43622_45287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (15))){
var inst_43596 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43623_45289 = state_43606__$1;
(statearr_43623_45289[(2)] = inst_43596);

(statearr_43623_45289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (13))){
var state_43606__$1 = state_43606;
var statearr_43624_45291 = state_43606__$1;
(statearr_43624_45291[(2)] = null);

(statearr_43624_45291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (6))){
var inst_43564 = (state_43606[(8)]);
var inst_43591 = inst_43564.length;
var inst_43592 = (inst_43591 > (0));
var state_43606__$1 = state_43606;
if(cljs.core.truth_(inst_43592)){
var statearr_43627_45294 = state_43606__$1;
(statearr_43627_45294[(1)] = (12));

} else {
var statearr_43629_45295 = state_43606__$1;
(statearr_43629_45295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (3))){
var inst_43604 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43606__$1,inst_43604);
} else {
if((state_val_43610 === (12))){
var inst_43564 = (state_43606[(8)]);
var inst_43594 = cljs.core.vec(inst_43564);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43606__$1,(15),out,inst_43594);
} else {
if((state_val_43610 === (2))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43606__$1,(4),ch);
} else {
if((state_val_43610 === (11))){
var inst_43568 = (state_43606[(9)]);
var inst_43573 = (state_43606[(10)]);
var inst_43584 = (state_43606[(2)]);
var inst_43585 = [];
var inst_43586 = inst_43585.push(inst_43568);
var inst_43564 = inst_43585;
var inst_43565 = inst_43573;
var state_43606__$1 = (function (){var statearr_43641 = state_43606;
(statearr_43641[(11)] = inst_43586);

(statearr_43641[(12)] = inst_43584);

(statearr_43641[(7)] = inst_43565);

(statearr_43641[(8)] = inst_43564);

return statearr_43641;
})();
var statearr_43648_45299 = state_43606__$1;
(statearr_43648_45299[(2)] = null);

(statearr_43648_45299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (9))){
var inst_43564 = (state_43606[(8)]);
var inst_43582 = cljs.core.vec(inst_43564);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43606__$1,(11),out,inst_43582);
} else {
if((state_val_43610 === (5))){
var inst_43568 = (state_43606[(9)]);
var inst_43573 = (state_43606[(10)]);
var inst_43565 = (state_43606[(7)]);
var inst_43573__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43568) : f.call(null,inst_43568));
var inst_43574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43573__$1,inst_43565);
var inst_43576 = cljs.core.keyword_identical_QMARK_(inst_43565,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43577 = ((inst_43574) || (inst_43576));
var state_43606__$1 = (function (){var statearr_43653 = state_43606;
(statearr_43653[(10)] = inst_43573__$1);

return statearr_43653;
})();
if(cljs.core.truth_(inst_43577)){
var statearr_43654_45327 = state_43606__$1;
(statearr_43654_45327[(1)] = (8));

} else {
var statearr_43655_45328 = state_43606__$1;
(statearr_43655_45328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (14))){
var inst_43599 = (state_43606[(2)]);
var inst_43600 = cljs.core.async.close_BANG_(out);
var state_43606__$1 = (function (){var statearr_43660 = state_43606;
(statearr_43660[(13)] = inst_43599);

return statearr_43660;
})();
var statearr_43661_45338 = state_43606__$1;
(statearr_43661_45338[(2)] = inst_43600);

(statearr_43661_45338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (10))){
var inst_43589 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43663_45341 = state_43606__$1;
(statearr_43663_45341[(2)] = inst_43589);

(statearr_43663_45341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43610 === (8))){
var inst_43568 = (state_43606[(9)]);
var inst_43573 = (state_43606[(10)]);
var inst_43564 = (state_43606[(8)]);
var inst_43579 = inst_43564.push(inst_43568);
var tmp43656 = inst_43564;
var inst_43564__$1 = tmp43656;
var inst_43565 = inst_43573;
var state_43606__$1 = (function (){var statearr_43664 = state_43606;
(statearr_43664[(14)] = inst_43579);

(statearr_43664[(7)] = inst_43565);

(statearr_43664[(8)] = inst_43564__$1);

return statearr_43664;
})();
var statearr_43665_45344 = state_43606__$1;
(statearr_43665_45344[(2)] = null);

(statearr_43665_45344[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39848__auto__ = null;
var cljs$core$async$state_machine__39848__auto____0 = (function (){
var statearr_43666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43666[(0)] = cljs$core$async$state_machine__39848__auto__);

(statearr_43666[(1)] = (1));

return statearr_43666;
});
var cljs$core$async$state_machine__39848__auto____1 = (function (state_43606){
while(true){
var ret_value__39849__auto__ = (function (){try{while(true){
var result__39850__auto__ = switch__39847__auto__(state_43606);
if(cljs.core.keyword_identical_QMARK_(result__39850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39850__auto__;
}
break;
}
}catch (e43669){var ex__39851__auto__ = e43669;
var statearr_43670_45347 = state_43606;
(statearr_43670_45347[(2)] = ex__39851__auto__);


if(cljs.core.seq((state_43606[(4)]))){
var statearr_43672_45349 = state_43606;
(statearr_43672_45349[(1)] = cljs.core.first((state_43606[(4)])));

} else {
throw ex__39851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45351 = state_43606;
state_43606 = G__45351;
continue;
} else {
return ret_value__39849__auto__;
}
break;
}
});
cljs$core$async$state_machine__39848__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39848__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39848__auto____0;
cljs$core$async$state_machine__39848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39848__auto____1;
return cljs$core$async$state_machine__39848__auto__;
})()
})();
var state__40434__auto__ = (function (){var statearr_43673 = f__40433__auto__();
(statearr_43673[(6)] = c__40432__auto___45257);

return statearr_43673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40434__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
