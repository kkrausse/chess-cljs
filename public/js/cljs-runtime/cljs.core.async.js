goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29733 = arguments.length;
switch (G__29733) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29742 = (function (f,blockable,meta29743){
this.f = f;
this.blockable = blockable;
this.meta29743 = meta29743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29744,meta29743__$1){
var self__ = this;
var _29744__$1 = this;
return (new cljs.core.async.t_cljs$core$async29742(self__.f,self__.blockable,meta29743__$1));
}));

(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29744){
var self__ = this;
var _29744__$1 = this;
return self__.meta29743;
}));

(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29743","meta29743",235587354,null)], null);
}));

(cljs.core.async.t_cljs$core$async29742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29742");

(cljs.core.async.t_cljs$core$async29742.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29742.
 */
cljs.core.async.__GT_t_cljs$core$async29742 = (function cljs$core$async$__GT_t_cljs$core$async29742(f__$1,blockable__$1,meta29743){
return (new cljs.core.async.t_cljs$core$async29742(f__$1,blockable__$1,meta29743));
});

}

return (new cljs.core.async.t_cljs$core$async29742(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29782 = arguments.length;
switch (G__29782) {
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
var G__29786 = arguments.length;
switch (G__29786) {
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
var G__29800 = arguments.length;
switch (G__29800) {
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
var val_33088 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33088) : fn1.call(null,val_33088));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33088) : fn1.call(null,val_33088));
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
var G__29807 = arguments.length;
switch (G__29807) {
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
var n__4666__auto___33110 = n;
var x_33111 = (0);
while(true){
if((x_33111 < n__4666__auto___33110)){
(a[x_33111] = x_33111);

var G__33112 = (x_33111 + (1));
x_33111 = G__33112;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29844 = (function (flag,meta29845){
this.flag = flag;
this.meta29845 = meta29845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29846,meta29845__$1){
var self__ = this;
var _29846__$1 = this;
return (new cljs.core.async.t_cljs$core$async29844(self__.flag,meta29845__$1));
}));

(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29846){
var self__ = this;
var _29846__$1 = this;
return self__.meta29845;
}));

(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29845","meta29845",-1933693246,null)], null);
}));

(cljs.core.async.t_cljs$core$async29844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29844");

(cljs.core.async.t_cljs$core$async29844.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29844.
 */
cljs.core.async.__GT_t_cljs$core$async29844 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29844(flag__$1,meta29845){
return (new cljs.core.async.t_cljs$core$async29844(flag__$1,meta29845));
});

}

return (new cljs.core.async.t_cljs$core$async29844(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29909 = (function (flag,cb,meta29910){
this.flag = flag;
this.cb = cb;
this.meta29910 = meta29910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29911,meta29910__$1){
var self__ = this;
var _29911__$1 = this;
return (new cljs.core.async.t_cljs$core$async29909(self__.flag,self__.cb,meta29910__$1));
}));

(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29911){
var self__ = this;
var _29911__$1 = this;
return self__.meta29910;
}));

(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29910","meta29910",-430850008,null)], null);
}));

(cljs.core.async.t_cljs$core$async29909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29909");

(cljs.core.async.t_cljs$core$async29909.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29909.
 */
cljs.core.async.__GT_t_cljs$core$async29909 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29909(flag__$1,cb__$1,meta29910){
return (new cljs.core.async.t_cljs$core$async29909(flag__$1,cb__$1,meta29910));
});

}

return (new cljs.core.async.t_cljs$core$async29909(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29928_SHARP_){
var G__29938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29928_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29938) : fret.call(null,G__29938));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29929_SHARP_){
var G__29942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29929_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29942) : fret.call(null,G__29942));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33145 = (i + (1));
i = G__33145;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___33147 = arguments.length;
var i__4790__auto___33148 = (0);
while(true){
if((i__4790__auto___33148 < len__4789__auto___33147)){
args__4795__auto__.push((arguments[i__4790__auto___33148]));

var G__33150 = (i__4790__auto___33148 + (1));
i__4790__auto___33148 = G__33150;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29947){
var map__29949 = p__29947;
var map__29949__$1 = (((((!((map__29949 == null))))?(((((map__29949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29949):map__29949);
var opts = map__29949__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29945){
var G__29946 = cljs.core.first(seq29945);
var seq29945__$1 = cljs.core.next(seq29945);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29946,seq29945__$1);
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
var G__29963 = arguments.length;
switch (G__29963) {
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
var c__29655__auto___33170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_30057 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30079_33174 = state_30067__$1;
(statearr_30079_33174[(2)] = inst_30057);

(statearr_30079_33174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30080_33176 = state_30067__$1;
(statearr_30080_33176[(2)] = null);

(statearr_30080_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var inst_30039 = (state_30067[(7)]);
var inst_30039__$1 = (state_30067[(2)]);
var inst_30040 = (inst_30039__$1 == null);
var state_30067__$1 = (function (){var statearr_30081 = state_30067;
(statearr_30081[(7)] = inst_30039__$1);

return statearr_30081;
})();
if(cljs.core.truth_(inst_30040)){
var statearr_30082_33177 = state_30067__$1;
(statearr_30082_33177[(1)] = (5));

} else {
var statearr_30083_33178 = state_30067__$1;
(statearr_30083_33178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (13))){
var state_30067__$1 = state_30067;
var statearr_30088_33179 = state_30067__$1;
(statearr_30088_33179[(2)] = null);

(statearr_30088_33179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var inst_30039 = (state_30067[(7)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30067__$1,(11),to,inst_30039);
} else {
if((state_val_30068 === (3))){
var inst_30062 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30067__$1,inst_30062);
} else {
if((state_val_30068 === (12))){
var state_30067__$1 = state_30067;
var statearr_30089_33180 = state_30067__$1;
(statearr_30089_33180[(2)] = null);

(statearr_30089_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30067__$1,(4),from);
} else {
if((state_val_30068 === (11))){
var inst_30050 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30050)){
var statearr_30090_33191 = state_30067__$1;
(statearr_30090_33191[(1)] = (12));

} else {
var statearr_30091_33194 = state_30067__$1;
(statearr_30091_33194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (9))){
var state_30067__$1 = state_30067;
var statearr_30092_33195 = state_30067__$1;
(statearr_30092_33195[(2)] = null);

(statearr_30092_33195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var state_30067__$1 = state_30067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30093_33196 = state_30067__$1;
(statearr_30093_33196[(1)] = (8));

} else {
var statearr_30094_33203 = state_30067__$1;
(statearr_30094_33203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (14))){
var inst_30055 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30095_33205 = state_30067__$1;
(statearr_30095_33205[(2)] = inst_30055);

(statearr_30095_33205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var inst_30047 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30096_33212 = state_30067__$1;
(statearr_30096_33212[(2)] = inst_30047);

(statearr_30096_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (8))){
var inst_30043 = cljs.core.async.close_BANG_(to);
var state_30067__$1 = state_30067;
var statearr_30099_33220 = state_30067__$1;
(statearr_30099_33220[(2)] = inst_30043);

(statearr_30099_33220[(1)] = (10));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_30103 = [null,null,null,null,null,null,null,null];
(statearr_30103[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_30103[(1)] = (1));

return statearr_30103;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_30067){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30067);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30104){if((e30104 instanceof Object)){
var ex__29371__auto__ = e30104;
var statearr_30105_33229 = state_30067;
(statearr_30105_33229[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33230 = state_30067;
state_30067 = G__33230;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30106 = f__29656__auto__();
(statearr_30106[(6)] = c__29655__auto___33170);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var process = (function (p__30120){
var vec__30129 = p__30120;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30129,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30129,(1),null);
var job = vec__30129;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29655__auto___33232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30137){
var state_val_30138 = (state_30137[(1)]);
if((state_val_30138 === (1))){
var state_30137__$1 = state_30137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30137__$1,(2),res,v);
} else {
if((state_val_30138 === (2))){
var inst_30134 = (state_30137[(2)]);
var inst_30135 = cljs.core.async.close_BANG_(res);
var state_30137__$1 = (function (){var statearr_30139 = state_30137;
(statearr_30139[(7)] = inst_30134);

return statearr_30139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30137__$1,inst_30135);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_30140 = [null,null,null,null,null,null,null,null];
(statearr_30140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__);

(statearr_30140[(1)] = (1));

return statearr_30140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1 = (function (state_30137){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30137);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30141){if((e30141 instanceof Object)){
var ex__29371__auto__ = e30141;
var statearr_30142_33234 = state_30137;
(statearr_30142_33234[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33235 = state_30137;
state_30137 = G__33235;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = function(state_30137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1.call(this,state_30137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30155 = f__29656__auto__();
(statearr_30155[(6)] = c__29655__auto___33232);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30156){
var vec__30157 = p__30156;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(1),null);
var job = vec__30157;
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
var n__4666__auto___33236 = n;
var __33237 = (0);
while(true){
if((__33237 < n__4666__auto___33236)){
var G__30161_33239 = type;
var G__30161_33240__$1 = (((G__30161_33239 instanceof cljs.core.Keyword))?G__30161_33239.fqn:null);
switch (G__30161_33240__$1) {
case "compute":
var c__29655__auto___33242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33237,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = ((function (__33237,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function (state_30174){
var state_val_30175 = (state_30174[(1)]);
if((state_val_30175 === (1))){
var state_30174__$1 = state_30174;
var statearr_30177_33245 = state_30174__$1;
(statearr_30177_33245[(2)] = null);

(statearr_30177_33245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (2))){
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30174__$1,(4),jobs);
} else {
if((state_val_30175 === (3))){
var inst_30172 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30174__$1,inst_30172);
} else {
if((state_val_30175 === (4))){
var inst_30164 = (state_30174[(2)]);
var inst_30165 = process(inst_30164);
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30165)){
var statearr_30181_33253 = state_30174__$1;
(statearr_30181_33253[(1)] = (5));

} else {
var statearr_30182_33254 = state_30174__$1;
(statearr_30182_33254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (5))){
var state_30174__$1 = state_30174;
var statearr_30183_33255 = state_30174__$1;
(statearr_30183_33255[(2)] = null);

(statearr_30183_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (6))){
var state_30174__$1 = state_30174;
var statearr_30184_33256 = state_30174__$1;
(statearr_30184_33256[(2)] = null);

(statearr_30184_33256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (7))){
var inst_30170 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30185_33258 = state_30174__$1;
(statearr_30185_33258[(2)] = inst_30170);

(statearr_30185_33258[(1)] = (3));


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
});})(__33237,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
;
return ((function (__33237,switch__29367__auto__,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_30186 = [null,null,null,null,null,null,null];
(statearr_30186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__);

(statearr_30186[(1)] = (1));

return statearr_30186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1 = (function (state_30174){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30174);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30187){if((e30187 instanceof Object)){
var ex__29371__auto__ = e30187;
var statearr_30188_33260 = state_30174;
(statearr_30188_33260[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_30174;
state_30174 = G__33262;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__;
})()
;})(__33237,switch__29367__auto__,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
})();
var state__29657__auto__ = (function (){var statearr_30192 = f__29656__auto__();
(statearr_30192[(6)] = c__29655__auto___33242);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
});})(__33237,c__29655__auto___33242,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
);


break;
case "async":
var c__29655__auto___33265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33237,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = ((function (__33237,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function (state_30206){
var state_val_30208 = (state_30206[(1)]);
if((state_val_30208 === (1))){
var state_30206__$1 = state_30206;
var statearr_30211_33269 = state_30206__$1;
(statearr_30211_33269[(2)] = null);

(statearr_30211_33269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (2))){
var state_30206__$1 = state_30206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30206__$1,(4),jobs);
} else {
if((state_val_30208 === (3))){
var inst_30204 = (state_30206[(2)]);
var state_30206__$1 = state_30206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30206__$1,inst_30204);
} else {
if((state_val_30208 === (4))){
var inst_30195 = (state_30206[(2)]);
var inst_30197 = async(inst_30195);
var state_30206__$1 = state_30206;
if(cljs.core.truth_(inst_30197)){
var statearr_30212_33271 = state_30206__$1;
(statearr_30212_33271[(1)] = (5));

} else {
var statearr_30213_33272 = state_30206__$1;
(statearr_30213_33272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (5))){
var state_30206__$1 = state_30206;
var statearr_30214_33273 = state_30206__$1;
(statearr_30214_33273[(2)] = null);

(statearr_30214_33273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (6))){
var state_30206__$1 = state_30206;
var statearr_30216_33274 = state_30206__$1;
(statearr_30216_33274[(2)] = null);

(statearr_30216_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (7))){
var inst_30202 = (state_30206[(2)]);
var state_30206__$1 = state_30206;
var statearr_30218_33277 = state_30206__$1;
(statearr_30218_33277[(2)] = inst_30202);

(statearr_30218_33277[(1)] = (3));


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
});})(__33237,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
;
return ((function (__33237,switch__29367__auto__,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null];
(statearr_30226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1 = (function (state_30206){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30206);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30234){if((e30234 instanceof Object)){
var ex__29371__auto__ = e30234;
var statearr_30235_33283 = state_30206;
(statearr_30235_33283[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33284 = state_30206;
state_30206 = G__33284;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = function(state_30206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1.call(this,state_30206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__;
})()
;})(__33237,switch__29367__auto__,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
})();
var state__29657__auto__ = (function (){var statearr_30237 = f__29656__auto__();
(statearr_30237[(6)] = c__29655__auto___33265);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
});})(__33237,c__29655__auto___33265,G__30161_33239,G__30161_33240__$1,n__4666__auto___33236,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30161_33240__$1)].join('')));

}

var G__33286 = (__33237 + (1));
__33237 = G__33286;
continue;
} else {
}
break;
}

var c__29655__auto___33288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30259){
var state_val_30260 = (state_30259[(1)]);
if((state_val_30260 === (7))){
var inst_30255 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30265_33292 = state_30259__$1;
(statearr_30265_33292[(2)] = inst_30255);

(statearr_30265_33292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (1))){
var state_30259__$1 = state_30259;
var statearr_30266_33293 = state_30259__$1;
(statearr_30266_33293[(2)] = null);

(statearr_30266_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (4))){
var inst_30240 = (state_30259[(7)]);
var inst_30240__$1 = (state_30259[(2)]);
var inst_30241 = (inst_30240__$1 == null);
var state_30259__$1 = (function (){var statearr_30273 = state_30259;
(statearr_30273[(7)] = inst_30240__$1);

return statearr_30273;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30274_33294 = state_30259__$1;
(statearr_30274_33294[(1)] = (5));

} else {
var statearr_30275_33295 = state_30259__$1;
(statearr_30275_33295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (6))){
var inst_30245 = (state_30259[(8)]);
var inst_30240 = (state_30259[(7)]);
var inst_30245__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30247 = [inst_30240,inst_30245__$1];
var inst_30248 = (new cljs.core.PersistentVector(null,2,(5),inst_30246,inst_30247,null));
var state_30259__$1 = (function (){var statearr_30280 = state_30259;
(statearr_30280[(8)] = inst_30245__$1);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30259__$1,(8),jobs,inst_30248);
} else {
if((state_val_30260 === (3))){
var inst_30257 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30259__$1,inst_30257);
} else {
if((state_val_30260 === (2))){
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30259__$1,(4),from);
} else {
if((state_val_30260 === (9))){
var inst_30252 = (state_30259[(2)]);
var state_30259__$1 = (function (){var statearr_30281 = state_30259;
(statearr_30281[(9)] = inst_30252);

return statearr_30281;
})();
var statearr_30282_33296 = state_30259__$1;
(statearr_30282_33296[(2)] = null);

(statearr_30282_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (5))){
var inst_30243 = cljs.core.async.close_BANG_(jobs);
var state_30259__$1 = state_30259;
var statearr_30283_33298 = state_30259__$1;
(statearr_30283_33298[(2)] = inst_30243);

(statearr_30283_33298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (8))){
var inst_30245 = (state_30259[(8)]);
var inst_30250 = (state_30259[(2)]);
var state_30259__$1 = (function (){var statearr_30284 = state_30259;
(statearr_30284[(10)] = inst_30250);

return statearr_30284;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30259__$1,(9),results,inst_30245);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_30285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__);

(statearr_30285[(1)] = (1));

return statearr_30285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1 = (function (state_30259){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30259);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30286){if((e30286 instanceof Object)){
var ex__29371__auto__ = e30286;
var statearr_30287_33301 = state_30259;
(statearr_30287_33301[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33302 = state_30259;
state_30259 = G__33302;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = function(state_30259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1.call(this,state_30259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30288 = f__29656__auto__();
(statearr_30288[(6)] = c__29655__auto___33288);

return statearr_30288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


var c__29655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30337_33304 = state_30335__$1;
(statearr_30337_33304[(2)] = inst_30331);

(statearr_30337_33304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (20))){
var state_30335__$1 = state_30335;
var statearr_30344_33305 = state_30335__$1;
(statearr_30344_33305[(2)] = null);

(statearr_30344_33305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (1))){
var state_30335__$1 = state_30335;
var statearr_30345_33309 = state_30335__$1;
(statearr_30345_33309[(2)] = null);

(statearr_30345_33309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30296 = (state_30335[(7)]);
var inst_30296__$1 = (state_30335[(2)]);
var inst_30297 = (inst_30296__$1 == null);
var state_30335__$1 = (function (){var statearr_30346 = state_30335;
(statearr_30346[(7)] = inst_30296__$1);

return statearr_30346;
})();
if(cljs.core.truth_(inst_30297)){
var statearr_30347_33311 = state_30335__$1;
(statearr_30347_33311[(1)] = (5));

} else {
var statearr_30348_33312 = state_30335__$1;
(statearr_30348_33312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (15))){
var inst_30310 = (state_30335[(8)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30335__$1,(18),to,inst_30310);
} else {
if((state_val_30336 === (21))){
var inst_30326 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30349_33314 = state_30335__$1;
(statearr_30349_33314[(2)] = inst_30326);

(statearr_30349_33314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (13))){
var inst_30328 = (state_30335[(2)]);
var state_30335__$1 = (function (){var statearr_30351 = state_30335;
(statearr_30351[(9)] = inst_30328);

return statearr_30351;
})();
var statearr_30352_33315 = state_30335__$1;
(statearr_30352_33315[(2)] = null);

(statearr_30352_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var inst_30296 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(11),inst_30296);
} else {
if((state_val_30336 === (17))){
var inst_30321 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30321)){
var statearr_30354_33317 = state_30335__$1;
(statearr_30354_33317[(1)] = (19));

} else {
var statearr_30355_33318 = state_30335__$1;
(statearr_30355_33318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (12))){
var inst_30307 = (state_30335[(10)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(14),inst_30307);
} else {
if((state_val_30336 === (2))){
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30335__$1,(4),results);
} else {
if((state_val_30336 === (19))){
var state_30335__$1 = state_30335;
var statearr_30357_33320 = state_30335__$1;
(statearr_30357_33320[(2)] = null);

(statearr_30357_33320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (11))){
var inst_30307 = (state_30335[(2)]);
var state_30335__$1 = (function (){var statearr_30360 = state_30335;
(statearr_30360[(10)] = inst_30307);

return statearr_30360;
})();
var statearr_30366_33321 = state_30335__$1;
(statearr_30366_33321[(2)] = null);

(statearr_30366_33321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var state_30335__$1 = state_30335;
var statearr_30367_33322 = state_30335__$1;
(statearr_30367_33322[(2)] = null);

(statearr_30367_33322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var state_30335__$1 = state_30335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30369_33323 = state_30335__$1;
(statearr_30369_33323[(1)] = (8));

} else {
var statearr_30370_33324 = state_30335__$1;
(statearr_30370_33324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (14))){
var inst_30310 = (state_30335[(8)]);
var inst_30310__$1 = (state_30335[(2)]);
var inst_30312 = (inst_30310__$1 == null);
var inst_30313 = cljs.core.not(inst_30312);
var state_30335__$1 = (function (){var statearr_30371 = state_30335;
(statearr_30371[(8)] = inst_30310__$1);

return statearr_30371;
})();
if(inst_30313){
var statearr_30372_33325 = state_30335__$1;
(statearr_30372_33325[(1)] = (15));

} else {
var statearr_30373_33326 = state_30335__$1;
(statearr_30373_33326[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (16))){
var state_30335__$1 = state_30335;
var statearr_30374_33327 = state_30335__$1;
(statearr_30374_33327[(2)] = false);

(statearr_30374_33327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30304 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30377_33328 = state_30335__$1;
(statearr_30377_33328[(2)] = inst_30304);

(statearr_30377_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (18))){
var inst_30316 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30378_33329 = state_30335__$1;
(statearr_30378_33329[(2)] = inst_30316);

(statearr_30378_33329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30301 = cljs.core.async.close_BANG_(to);
var state_30335__$1 = state_30335;
var statearr_30379_33330 = state_30335__$1;
(statearr_30379_33330[(2)] = inst_30301);

(statearr_30379_33330[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_30382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__);

(statearr_30382[(1)] = (1));

return statearr_30382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1 = (function (state_30335){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30335);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30388){if((e30388 instanceof Object)){
var ex__29371__auto__ = e30388;
var statearr_30391_33334 = state_30335;
(statearr_30391_33334[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33335 = state_30335;
state_30335 = G__33335;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30394 = f__29656__auto__();
(statearr_30394[(6)] = c__29655__auto__);

return statearr_30394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

return c__29655__auto__;
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
var G__30398 = arguments.length;
switch (G__30398) {
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
var G__30410 = arguments.length;
switch (G__30410) {
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
var G__30426 = arguments.length;
switch (G__30426) {
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
var c__29655__auto___33343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30461){
var state_val_30462 = (state_30461[(1)]);
if((state_val_30462 === (7))){
var inst_30457 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
var statearr_30466_33345 = state_30461__$1;
(statearr_30466_33345[(2)] = inst_30457);

(statearr_30466_33345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (1))){
var state_30461__$1 = state_30461;
var statearr_30467_33347 = state_30461__$1;
(statearr_30467_33347[(2)] = null);

(statearr_30467_33347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (4))){
var inst_30436 = (state_30461[(7)]);
var inst_30436__$1 = (state_30461[(2)]);
var inst_30437 = (inst_30436__$1 == null);
var state_30461__$1 = (function (){var statearr_30471 = state_30461;
(statearr_30471[(7)] = inst_30436__$1);

return statearr_30471;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30473_33348 = state_30461__$1;
(statearr_30473_33348[(1)] = (5));

} else {
var statearr_30475_33349 = state_30461__$1;
(statearr_30475_33349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (13))){
var state_30461__$1 = state_30461;
var statearr_30479_33350 = state_30461__$1;
(statearr_30479_33350[(2)] = null);

(statearr_30479_33350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (6))){
var inst_30436 = (state_30461[(7)]);
var inst_30443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30436) : p.call(null,inst_30436));
var state_30461__$1 = state_30461;
if(cljs.core.truth_(inst_30443)){
var statearr_30483_33351 = state_30461__$1;
(statearr_30483_33351[(1)] = (9));

} else {
var statearr_30484_33352 = state_30461__$1;
(statearr_30484_33352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (3))){
var inst_30459 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30461__$1,inst_30459);
} else {
if((state_val_30462 === (12))){
var state_30461__$1 = state_30461;
var statearr_30485_33357 = state_30461__$1;
(statearr_30485_33357[(2)] = null);

(statearr_30485_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (2))){
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30461__$1,(4),ch);
} else {
if((state_val_30462 === (11))){
var inst_30436 = (state_30461[(7)]);
var inst_30447 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30461__$1,(8),inst_30447,inst_30436);
} else {
if((state_val_30462 === (9))){
var state_30461__$1 = state_30461;
var statearr_30488_33358 = state_30461__$1;
(statearr_30488_33358[(2)] = tc);

(statearr_30488_33358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (5))){
var inst_30440 = cljs.core.async.close_BANG_(tc);
var inst_30441 = cljs.core.async.close_BANG_(fc);
var state_30461__$1 = (function (){var statearr_30494 = state_30461;
(statearr_30494[(8)] = inst_30440);

return statearr_30494;
})();
var statearr_30496_33359 = state_30461__$1;
(statearr_30496_33359[(2)] = inst_30441);

(statearr_30496_33359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (14))){
var inst_30454 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
var statearr_30497_33360 = state_30461__$1;
(statearr_30497_33360[(2)] = inst_30454);

(statearr_30497_33360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (10))){
var state_30461__$1 = state_30461;
var statearr_30499_33362 = state_30461__$1;
(statearr_30499_33362[(2)] = fc);

(statearr_30499_33362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (8))){
var inst_30449 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
if(cljs.core.truth_(inst_30449)){
var statearr_30500_33364 = state_30461__$1;
(statearr_30500_33364[(1)] = (12));

} else {
var statearr_30501_33365 = state_30461__$1;
(statearr_30501_33365[(1)] = (13));

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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null,null,null];
(statearr_30508[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_30461){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30461);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30510){if((e30510 instanceof Object)){
var ex__29371__auto__ = e30510;
var statearr_30512_33366 = state_30461;
(statearr_30512_33366[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33367 = state_30461;
state_30461 = G__33367;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_30461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_30461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30518 = f__29656__auto__();
(statearr_30518[(6)] = c__29655__auto___33343);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var c__29655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30560_33368 = state_30554__$1;
(statearr_30560_33368[(2)] = inst_30550);

(statearr_30560_33368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (1))){
var inst_30522 = init;
var state_30554__$1 = (function (){var statearr_30564 = state_30554;
(statearr_30564[(7)] = inst_30522);

return statearr_30564;
})();
var statearr_30566_33371 = state_30554__$1;
(statearr_30566_33371[(2)] = null);

(statearr_30566_33371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (4))){
var inst_30525 = (state_30554[(8)]);
var inst_30525__$1 = (state_30554[(2)]);
var inst_30526 = (inst_30525__$1 == null);
var state_30554__$1 = (function (){var statearr_30569 = state_30554;
(statearr_30569[(8)] = inst_30525__$1);

return statearr_30569;
})();
if(cljs.core.truth_(inst_30526)){
var statearr_30570_33379 = state_30554__$1;
(statearr_30570_33379[(1)] = (5));

} else {
var statearr_30571_33380 = state_30554__$1;
(statearr_30571_33380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (6))){
var inst_30522 = (state_30554[(7)]);
var inst_30530 = (state_30554[(9)]);
var inst_30525 = (state_30554[(8)]);
var inst_30530__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30522,inst_30525) : f.call(null,inst_30522,inst_30525));
var inst_30531 = cljs.core.reduced_QMARK_(inst_30530__$1);
var state_30554__$1 = (function (){var statearr_30575 = state_30554;
(statearr_30575[(9)] = inst_30530__$1);

return statearr_30575;
})();
if(inst_30531){
var statearr_30578_33383 = state_30554__$1;
(statearr_30578_33383[(1)] = (8));

} else {
var statearr_30580_33384 = state_30554__$1;
(statearr_30580_33384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30554__$1,(4),ch);
} else {
if((state_val_30555 === (9))){
var inst_30530 = (state_30554[(9)]);
var inst_30522 = inst_30530;
var state_30554__$1 = (function (){var statearr_30582 = state_30554;
(statearr_30582[(7)] = inst_30522);

return statearr_30582;
})();
var statearr_30583_33391 = state_30554__$1;
(statearr_30583_33391[(2)] = null);

(statearr_30583_33391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var inst_30522 = (state_30554[(7)]);
var state_30554__$1 = state_30554;
var statearr_30588_33392 = state_30554__$1;
(statearr_30588_33392[(2)] = inst_30522);

(statearr_30588_33392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (10))){
var inst_30548 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30594_33396 = state_30554__$1;
(statearr_30594_33396[(2)] = inst_30548);

(statearr_30594_33396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (8))){
var inst_30530 = (state_30554[(9)]);
var inst_30544 = cljs.core.deref(inst_30530);
var state_30554__$1 = state_30554;
var statearr_30596_33398 = state_30554__$1;
(statearr_30596_33398[(2)] = inst_30544);

(statearr_30596_33398[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29368__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29368__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = cljs$core$async$reduce_$_state_machine__29368__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var cljs$core$async$reduce_$_state_machine__29368__auto____1 = (function (state_30554){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30554);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30613){if((e30613 instanceof Object)){
var ex__29371__auto__ = e30613;
var statearr_30618_33410 = state_30554;
(statearr_30618_33410[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33411 = state_30554;
state_30554 = G__33411;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29368__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29368__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29368__auto____0;
cljs$core$async$reduce_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29368__auto____1;
return cljs$core$async$reduce_$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30620 = f__29656__auto__();
(statearr_30620[(6)] = c__29655__auto__);

return statearr_30620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

return c__29655__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (1))){
var inst_30629 = cljs.core.async.reduce(f__$1,init,ch);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30638__$1,(2),inst_30629);
} else {
if((state_val_30639 === (2))){
var inst_30631 = (state_30638[(2)]);
var inst_30632 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30631) : f__$1.call(null,inst_30631));
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30638__$1,inst_30632);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29368__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29368__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null];
(statearr_30656[(0)] = cljs$core$async$transduce_$_state_machine__29368__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var cljs$core$async$transduce_$_state_machine__29368__auto____1 = (function (state_30638){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30638);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30660){if((e30660 instanceof Object)){
var ex__29371__auto__ = e30660;
var statearr_30663_33427 = state_30638;
(statearr_30663_33427[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_30638;
state_30638 = G__33432;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29368__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29368__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29368__auto____0;
cljs$core$async$transduce_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29368__auto____1;
return cljs$core$async$transduce_$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30668 = f__29656__auto__();
(statearr_30668[(6)] = c__29655__auto__);

return statearr_30668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

return c__29655__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30674 = arguments.length;
switch (G__30674) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_30712){
var state_val_30713 = (state_30712[(1)]);
if((state_val_30713 === (7))){
var inst_30694 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30718_33443 = state_30712__$1;
(statearr_30718_33443[(2)] = inst_30694);

(statearr_30718_33443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (1))){
var inst_30684 = cljs.core.seq(coll);
var inst_30686 = inst_30684;
var state_30712__$1 = (function (){var statearr_30720 = state_30712;
(statearr_30720[(7)] = inst_30686);

return statearr_30720;
})();
var statearr_30721_33447 = state_30712__$1;
(statearr_30721_33447[(2)] = null);

(statearr_30721_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (4))){
var inst_30686 = (state_30712[(7)]);
var inst_30692 = cljs.core.first(inst_30686);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30712__$1,(7),ch,inst_30692);
} else {
if((state_val_30713 === (13))){
var inst_30706 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30725_33448 = state_30712__$1;
(statearr_30725_33448[(2)] = inst_30706);

(statearr_30725_33448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (6))){
var inst_30697 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
if(cljs.core.truth_(inst_30697)){
var statearr_30727_33452 = state_30712__$1;
(statearr_30727_33452[(1)] = (8));

} else {
var statearr_30731_33453 = state_30712__$1;
(statearr_30731_33453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (3))){
var inst_30710 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30712__$1,inst_30710);
} else {
if((state_val_30713 === (12))){
var state_30712__$1 = state_30712;
var statearr_30748_33454 = state_30712__$1;
(statearr_30748_33454[(2)] = null);

(statearr_30748_33454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (2))){
var inst_30686 = (state_30712[(7)]);
var state_30712__$1 = state_30712;
if(cljs.core.truth_(inst_30686)){
var statearr_30749_33459 = state_30712__$1;
(statearr_30749_33459[(1)] = (4));

} else {
var statearr_30758_33463 = state_30712__$1;
(statearr_30758_33463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (11))){
var inst_30703 = cljs.core.async.close_BANG_(ch);
var state_30712__$1 = state_30712;
var statearr_30762_33464 = state_30712__$1;
(statearr_30762_33464[(2)] = inst_30703);

(statearr_30762_33464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (9))){
var state_30712__$1 = state_30712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30763_33465 = state_30712__$1;
(statearr_30763_33465[(1)] = (11));

} else {
var statearr_30764_33466 = state_30712__$1;
(statearr_30764_33466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (5))){
var inst_30686 = (state_30712[(7)]);
var state_30712__$1 = state_30712;
var statearr_30768_33471 = state_30712__$1;
(statearr_30768_33471[(2)] = inst_30686);

(statearr_30768_33471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (10))){
var inst_30708 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30773_33474 = state_30712__$1;
(statearr_30773_33474[(2)] = inst_30708);

(statearr_30773_33474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (8))){
var inst_30686 = (state_30712[(7)]);
var inst_30699 = cljs.core.next(inst_30686);
var inst_30686__$1 = inst_30699;
var state_30712__$1 = (function (){var statearr_30781 = state_30712;
(statearr_30781[(7)] = inst_30686__$1);

return statearr_30781;
})();
var statearr_30782_33475 = state_30712__$1;
(statearr_30782_33475[(2)] = null);

(statearr_30782_33475[(1)] = (2));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_30712){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_30712);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e30791){if((e30791 instanceof Object)){
var ex__29371__auto__ = e30791;
var statearr_30792_33478 = state_30712;
(statearr_30792_33478[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33479 = state_30712;
state_30712 = G__33479;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_30712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_30712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_30800 = f__29656__auto__();
(statearr_30800[(6)] = c__29655__auto__);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

return c__29655__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30855 = (function (ch,cs,meta30856){
this.ch = ch;
this.cs = cs;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30857,meta30856__$1){
var self__ = this;
var _30857__$1 = this;
return (new cljs.core.async.t_cljs$core$async30855(self__.ch,self__.cs,meta30856__$1));
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30857){
var self__ = this;
var _30857__$1 = this;
return self__.meta30856;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30856","meta30856",1737564773,null)], null);
}));

(cljs.core.async.t_cljs$core$async30855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30855");

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30855.
 */
cljs.core.async.__GT_t_cljs$core$async30855 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30855(ch__$1,cs__$1,meta30856){
return (new cljs.core.async.t_cljs$core$async30855(ch__$1,cs__$1,meta30856));
});

}

return (new cljs.core.async.t_cljs$core$async30855(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29655__auto___33509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_31038){
var state_val_31039 = (state_31038[(1)]);
if((state_val_31039 === (7))){
var inst_31031 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31048_33510 = state_31038__$1;
(statearr_31048_33510[(2)] = inst_31031);

(statearr_31048_33510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (20))){
var inst_30912 = (state_31038[(7)]);
var inst_30926 = cljs.core.first(inst_30912);
var inst_30927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30926,(0),null);
var inst_30928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30926,(1),null);
var state_31038__$1 = (function (){var statearr_31058 = state_31038;
(statearr_31058[(8)] = inst_30927);

return statearr_31058;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_31059_33514 = state_31038__$1;
(statearr_31059_33514[(1)] = (22));

} else {
var statearr_31060_33515 = state_31038__$1;
(statearr_31060_33515[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (27))){
var inst_30978 = (state_31038[(9)]);
var inst_30967 = (state_31038[(10)]);
var inst_30969 = (state_31038[(11)]);
var inst_30877 = (state_31038[(12)]);
var inst_30978__$1 = cljs.core._nth(inst_30967,inst_30969);
var inst_30979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30978__$1,inst_30877,done);
var state_31038__$1 = (function (){var statearr_31064 = state_31038;
(statearr_31064[(9)] = inst_30978__$1);

return statearr_31064;
})();
if(cljs.core.truth_(inst_30979)){
var statearr_31065_33517 = state_31038__$1;
(statearr_31065_33517[(1)] = (30));

} else {
var statearr_31066_33518 = state_31038__$1;
(statearr_31066_33518[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (1))){
var state_31038__$1 = state_31038;
var statearr_31071_33521 = state_31038__$1;
(statearr_31071_33521[(2)] = null);

(statearr_31071_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (24))){
var inst_30912 = (state_31038[(7)]);
var inst_30933 = (state_31038[(2)]);
var inst_30934 = cljs.core.next(inst_30912);
var inst_30886 = inst_30934;
var inst_30887 = null;
var inst_30888 = (0);
var inst_30889 = (0);
var state_31038__$1 = (function (){var statearr_31072 = state_31038;
(statearr_31072[(13)] = inst_30889);

(statearr_31072[(14)] = inst_30888);

(statearr_31072[(15)] = inst_30887);

(statearr_31072[(16)] = inst_30933);

(statearr_31072[(17)] = inst_30886);

return statearr_31072;
})();
var statearr_31073_33524 = state_31038__$1;
(statearr_31073_33524[(2)] = null);

(statearr_31073_33524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (39))){
var state_31038__$1 = state_31038;
var statearr_31081_33528 = state_31038__$1;
(statearr_31081_33528[(2)] = null);

(statearr_31081_33528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (4))){
var inst_30877 = (state_31038[(12)]);
var inst_30877__$1 = (state_31038[(2)]);
var inst_30878 = (inst_30877__$1 == null);
var state_31038__$1 = (function (){var statearr_31083 = state_31038;
(statearr_31083[(12)] = inst_30877__$1);

return statearr_31083;
})();
if(cljs.core.truth_(inst_30878)){
var statearr_31084_33531 = state_31038__$1;
(statearr_31084_33531[(1)] = (5));

} else {
var statearr_31085_33532 = state_31038__$1;
(statearr_31085_33532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (15))){
var inst_30889 = (state_31038[(13)]);
var inst_30888 = (state_31038[(14)]);
var inst_30887 = (state_31038[(15)]);
var inst_30886 = (state_31038[(17)]);
var inst_30905 = (state_31038[(2)]);
var inst_30907 = (inst_30889 + (1));
var tmp31074 = inst_30888;
var tmp31075 = inst_30887;
var tmp31076 = inst_30886;
var inst_30886__$1 = tmp31076;
var inst_30887__$1 = tmp31075;
var inst_30888__$1 = tmp31074;
var inst_30889__$1 = inst_30907;
var state_31038__$1 = (function (){var statearr_31095 = state_31038;
(statearr_31095[(13)] = inst_30889__$1);

(statearr_31095[(14)] = inst_30888__$1);

(statearr_31095[(15)] = inst_30887__$1);

(statearr_31095[(18)] = inst_30905);

(statearr_31095[(17)] = inst_30886__$1);

return statearr_31095;
})();
var statearr_31096_33542 = state_31038__$1;
(statearr_31096_33542[(2)] = null);

(statearr_31096_33542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (21))){
var inst_30937 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31100_33546 = state_31038__$1;
(statearr_31100_33546[(2)] = inst_30937);

(statearr_31100_33546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (31))){
var inst_30978 = (state_31038[(9)]);
var inst_30982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30978);
var state_31038__$1 = state_31038;
var statearr_31101_33559 = state_31038__$1;
(statearr_31101_33559[(2)] = inst_30982);

(statearr_31101_33559[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (32))){
var inst_30968 = (state_31038[(19)]);
var inst_30966 = (state_31038[(20)]);
var inst_30967 = (state_31038[(10)]);
var inst_30969 = (state_31038[(11)]);
var inst_30984 = (state_31038[(2)]);
var inst_30985 = (inst_30969 + (1));
var tmp31097 = inst_30968;
var tmp31098 = inst_30966;
var tmp31099 = inst_30967;
var inst_30966__$1 = tmp31098;
var inst_30967__$1 = tmp31099;
var inst_30968__$1 = tmp31097;
var inst_30969__$1 = inst_30985;
var state_31038__$1 = (function (){var statearr_31102 = state_31038;
(statearr_31102[(19)] = inst_30968__$1);

(statearr_31102[(20)] = inst_30966__$1);

(statearr_31102[(10)] = inst_30967__$1);

(statearr_31102[(11)] = inst_30969__$1);

(statearr_31102[(21)] = inst_30984);

return statearr_31102;
})();
var statearr_31109_33570 = state_31038__$1;
(statearr_31109_33570[(2)] = null);

(statearr_31109_33570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (40))){
var inst_31001 = (state_31038[(22)]);
var inst_31005 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31001);
var state_31038__$1 = state_31038;
var statearr_31114_33572 = state_31038__$1;
(statearr_31114_33572[(2)] = inst_31005);

(statearr_31114_33572[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (33))){
var inst_30988 = (state_31038[(23)]);
var inst_30993 = cljs.core.chunked_seq_QMARK_(inst_30988);
var state_31038__$1 = state_31038;
if(inst_30993){
var statearr_31121_33573 = state_31038__$1;
(statearr_31121_33573[(1)] = (36));

} else {
var statearr_31123_33575 = state_31038__$1;
(statearr_31123_33575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (13))){
var inst_30899 = (state_31038[(24)]);
var inst_30902 = cljs.core.async.close_BANG_(inst_30899);
var state_31038__$1 = state_31038;
var statearr_31128_33579 = state_31038__$1;
(statearr_31128_33579[(2)] = inst_30902);

(statearr_31128_33579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (22))){
var inst_30927 = (state_31038[(8)]);
var inst_30930 = cljs.core.async.close_BANG_(inst_30927);
var state_31038__$1 = state_31038;
var statearr_31135_33581 = state_31038__$1;
(statearr_31135_33581[(2)] = inst_30930);

(statearr_31135_33581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (36))){
var inst_30988 = (state_31038[(23)]);
var inst_30996 = cljs.core.chunk_first(inst_30988);
var inst_30997 = cljs.core.chunk_rest(inst_30988);
var inst_30998 = cljs.core.count(inst_30996);
var inst_30966 = inst_30997;
var inst_30967 = inst_30996;
var inst_30968 = inst_30998;
var inst_30969 = (0);
var state_31038__$1 = (function (){var statearr_31142 = state_31038;
(statearr_31142[(19)] = inst_30968);

(statearr_31142[(20)] = inst_30966);

(statearr_31142[(10)] = inst_30967);

(statearr_31142[(11)] = inst_30969);

return statearr_31142;
})();
var statearr_31143_33590 = state_31038__$1;
(statearr_31143_33590[(2)] = null);

(statearr_31143_33590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (41))){
var inst_30988 = (state_31038[(23)]);
var inst_31007 = (state_31038[(2)]);
var inst_31009 = cljs.core.next(inst_30988);
var inst_30966 = inst_31009;
var inst_30967 = null;
var inst_30968 = (0);
var inst_30969 = (0);
var state_31038__$1 = (function (){var statearr_31156 = state_31038;
(statearr_31156[(19)] = inst_30968);

(statearr_31156[(20)] = inst_30966);

(statearr_31156[(25)] = inst_31007);

(statearr_31156[(10)] = inst_30967);

(statearr_31156[(11)] = inst_30969);

return statearr_31156;
})();
var statearr_31157_33600 = state_31038__$1;
(statearr_31157_33600[(2)] = null);

(statearr_31157_33600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (43))){
var state_31038__$1 = state_31038;
var statearr_31162_33601 = state_31038__$1;
(statearr_31162_33601[(2)] = null);

(statearr_31162_33601[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (29))){
var inst_31018 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31165_33604 = state_31038__$1;
(statearr_31165_33604[(2)] = inst_31018);

(statearr_31165_33604[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (44))){
var inst_31028 = (state_31038[(2)]);
var state_31038__$1 = (function (){var statearr_31166 = state_31038;
(statearr_31166[(26)] = inst_31028);

return statearr_31166;
})();
var statearr_31167_33606 = state_31038__$1;
(statearr_31167_33606[(2)] = null);

(statearr_31167_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (6))){
var inst_30947 = (state_31038[(27)]);
var inst_30946 = cljs.core.deref(cs);
var inst_30947__$1 = cljs.core.keys(inst_30946);
var inst_30948 = cljs.core.count(inst_30947__$1);
var inst_30949 = cljs.core.reset_BANG_(dctr,inst_30948);
var inst_30965 = cljs.core.seq(inst_30947__$1);
var inst_30966 = inst_30965;
var inst_30967 = null;
var inst_30968 = (0);
var inst_30969 = (0);
var state_31038__$1 = (function (){var statearr_31176 = state_31038;
(statearr_31176[(19)] = inst_30968);

(statearr_31176[(20)] = inst_30966);

(statearr_31176[(27)] = inst_30947__$1);

(statearr_31176[(10)] = inst_30967);

(statearr_31176[(11)] = inst_30969);

(statearr_31176[(28)] = inst_30949);

return statearr_31176;
})();
var statearr_31185_33614 = state_31038__$1;
(statearr_31185_33614[(2)] = null);

(statearr_31185_33614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (28))){
var inst_30966 = (state_31038[(20)]);
var inst_30988 = (state_31038[(23)]);
var inst_30988__$1 = cljs.core.seq(inst_30966);
var state_31038__$1 = (function (){var statearr_31190 = state_31038;
(statearr_31190[(23)] = inst_30988__$1);

return statearr_31190;
})();
if(inst_30988__$1){
var statearr_31191_33625 = state_31038__$1;
(statearr_31191_33625[(1)] = (33));

} else {
var statearr_31192_33626 = state_31038__$1;
(statearr_31192_33626[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (25))){
var inst_30968 = (state_31038[(19)]);
var inst_30969 = (state_31038[(11)]);
var inst_30975 = (inst_30969 < inst_30968);
var inst_30976 = inst_30975;
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_30976)){
var statearr_31198_33629 = state_31038__$1;
(statearr_31198_33629[(1)] = (27));

} else {
var statearr_31201_33631 = state_31038__$1;
(statearr_31201_33631[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (34))){
var state_31038__$1 = state_31038;
var statearr_31207_33633 = state_31038__$1;
(statearr_31207_33633[(2)] = null);

(statearr_31207_33633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (17))){
var state_31038__$1 = state_31038;
var statearr_31212_33636 = state_31038__$1;
(statearr_31212_33636[(2)] = null);

(statearr_31212_33636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (3))){
var inst_31033 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31038__$1,inst_31033);
} else {
if((state_val_31039 === (12))){
var inst_30942 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31218_33640 = state_31038__$1;
(statearr_31218_33640[(2)] = inst_30942);

(statearr_31218_33640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (2))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31038__$1,(4),ch);
} else {
if((state_val_31039 === (23))){
var state_31038__$1 = state_31038;
var statearr_31227_33643 = state_31038__$1;
(statearr_31227_33643[(2)] = null);

(statearr_31227_33643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (35))){
var inst_31016 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31236_33645 = state_31038__$1;
(statearr_31236_33645[(2)] = inst_31016);

(statearr_31236_33645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (19))){
var inst_30912 = (state_31038[(7)]);
var inst_30917 = cljs.core.chunk_first(inst_30912);
var inst_30918 = cljs.core.chunk_rest(inst_30912);
var inst_30920 = cljs.core.count(inst_30917);
var inst_30886 = inst_30918;
var inst_30887 = inst_30917;
var inst_30888 = inst_30920;
var inst_30889 = (0);
var state_31038__$1 = (function (){var statearr_31248 = state_31038;
(statearr_31248[(13)] = inst_30889);

(statearr_31248[(14)] = inst_30888);

(statearr_31248[(15)] = inst_30887);

(statearr_31248[(17)] = inst_30886);

return statearr_31248;
})();
var statearr_31253_33652 = state_31038__$1;
(statearr_31253_33652[(2)] = null);

(statearr_31253_33652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (11))){
var inst_30912 = (state_31038[(7)]);
var inst_30886 = (state_31038[(17)]);
var inst_30912__$1 = cljs.core.seq(inst_30886);
var state_31038__$1 = (function (){var statearr_31259 = state_31038;
(statearr_31259[(7)] = inst_30912__$1);

return statearr_31259;
})();
if(inst_30912__$1){
var statearr_31264_33661 = state_31038__$1;
(statearr_31264_33661[(1)] = (16));

} else {
var statearr_31266_33662 = state_31038__$1;
(statearr_31266_33662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (9))){
var inst_30944 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31273_33667 = state_31038__$1;
(statearr_31273_33667[(2)] = inst_30944);

(statearr_31273_33667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (5))){
var inst_30884 = cljs.core.deref(cs);
var inst_30885 = cljs.core.seq(inst_30884);
var inst_30886 = inst_30885;
var inst_30887 = null;
var inst_30888 = (0);
var inst_30889 = (0);
var state_31038__$1 = (function (){var statearr_31279 = state_31038;
(statearr_31279[(13)] = inst_30889);

(statearr_31279[(14)] = inst_30888);

(statearr_31279[(15)] = inst_30887);

(statearr_31279[(17)] = inst_30886);

return statearr_31279;
})();
var statearr_31280_33668 = state_31038__$1;
(statearr_31280_33668[(2)] = null);

(statearr_31280_33668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (14))){
var state_31038__$1 = state_31038;
var statearr_31281_33671 = state_31038__$1;
(statearr_31281_33671[(2)] = null);

(statearr_31281_33671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (45))){
var inst_31024 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31283_33675 = state_31038__$1;
(statearr_31283_33675[(2)] = inst_31024);

(statearr_31283_33675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (26))){
var inst_30947 = (state_31038[(27)]);
var inst_31020 = (state_31038[(2)]);
var inst_31021 = cljs.core.seq(inst_30947);
var state_31038__$1 = (function (){var statearr_31286 = state_31038;
(statearr_31286[(29)] = inst_31020);

return statearr_31286;
})();
if(inst_31021){
var statearr_31287_33688 = state_31038__$1;
(statearr_31287_33688[(1)] = (42));

} else {
var statearr_31288_33689 = state_31038__$1;
(statearr_31288_33689[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (16))){
var inst_30912 = (state_31038[(7)]);
var inst_30915 = cljs.core.chunked_seq_QMARK_(inst_30912);
var state_31038__$1 = state_31038;
if(inst_30915){
var statearr_31292_33693 = state_31038__$1;
(statearr_31292_33693[(1)] = (19));

} else {
var statearr_31293_33695 = state_31038__$1;
(statearr_31293_33695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (38))){
var inst_31013 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31295_33698 = state_31038__$1;
(statearr_31295_33698[(2)] = inst_31013);

(statearr_31295_33698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (30))){
var state_31038__$1 = state_31038;
var statearr_31296_33700 = state_31038__$1;
(statearr_31296_33700[(2)] = null);

(statearr_31296_33700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (10))){
var inst_30889 = (state_31038[(13)]);
var inst_30887 = (state_31038[(15)]);
var inst_30898 = cljs.core._nth(inst_30887,inst_30889);
var inst_30899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30898,(0),null);
var inst_30900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30898,(1),null);
var state_31038__$1 = (function (){var statearr_31297 = state_31038;
(statearr_31297[(24)] = inst_30899);

return statearr_31297;
})();
if(cljs.core.truth_(inst_30900)){
var statearr_31298_33705 = state_31038__$1;
(statearr_31298_33705[(1)] = (13));

} else {
var statearr_31299_33707 = state_31038__$1;
(statearr_31299_33707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (18))){
var inst_30940 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31300_33710 = state_31038__$1;
(statearr_31300_33710[(2)] = inst_30940);

(statearr_31300_33710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (42))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31038__$1,(45),dchan);
} else {
if((state_val_31039 === (37))){
var inst_30877 = (state_31038[(12)]);
var inst_31001 = (state_31038[(22)]);
var inst_30988 = (state_31038[(23)]);
var inst_31001__$1 = cljs.core.first(inst_30988);
var inst_31002 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31001__$1,inst_30877,done);
var state_31038__$1 = (function (){var statearr_31305 = state_31038;
(statearr_31305[(22)] = inst_31001__$1);

return statearr_31305;
})();
if(cljs.core.truth_(inst_31002)){
var statearr_31306_33717 = state_31038__$1;
(statearr_31306_33717[(1)] = (39));

} else {
var statearr_31311_33720 = state_31038__$1;
(statearr_31311_33720[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (8))){
var inst_30889 = (state_31038[(13)]);
var inst_30888 = (state_31038[(14)]);
var inst_30892 = (inst_30889 < inst_30888);
var inst_30893 = inst_30892;
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_30893)){
var statearr_31316_33734 = state_31038__$1;
(statearr_31316_33734[(1)] = (10));

} else {
var statearr_31317_33735 = state_31038__$1;
(statearr_31317_33735[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29368__auto__ = null;
var cljs$core$async$mult_$_state_machine__29368__auto____0 = (function (){
var statearr_31326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31326[(0)] = cljs$core$async$mult_$_state_machine__29368__auto__);

(statearr_31326[(1)] = (1));

return statearr_31326;
});
var cljs$core$async$mult_$_state_machine__29368__auto____1 = (function (state_31038){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_31038);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e31329){if((e31329 instanceof Object)){
var ex__29371__auto__ = e31329;
var statearr_31330_33743 = state_31038;
(statearr_31330_33743[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_31038;
state_31038 = G__33744;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29368__auto__ = function(state_31038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29368__auto____1.call(this,state_31038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29368__auto____0;
cljs$core$async$mult_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29368__auto____1;
return cljs$core$async$mult_$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_31331 = f__29656__auto__();
(statearr_31331[(6)] = c__29655__auto___33509);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var G__31338 = arguments.length;
switch (G__31338) {
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33782 = arguments.length;
var i__4790__auto___33783 = (0);
while(true){
if((i__4790__auto___33783 < len__4789__auto___33782)){
args__4795__auto__.push((arguments[i__4790__auto___33783]));

var G__33784 = (i__4790__auto___33783 + (1));
i__4790__auto___33783 = G__33784;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31383){
var map__31384 = p__31383;
var map__31384__$1 = (((((!((map__31384 == null))))?(((((map__31384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31384):map__31384);
var opts = map__31384__$1;
var statearr_31386_33786 = state;
(statearr_31386_33786[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31387_33787 = state;
(statearr_31387_33787[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31389_33788 = state;
(statearr_31389_33788[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31377){
var G__31378 = cljs.core.first(seq31377);
var seq31377__$1 = cljs.core.next(seq31377);
var G__31379 = cljs.core.first(seq31377__$1);
var seq31377__$2 = cljs.core.next(seq31377__$1);
var G__31380 = cljs.core.first(seq31377__$2);
var seq31377__$3 = cljs.core.next(seq31377__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31378,G__31379,G__31380,seq31377__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31398 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31399){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31399 = meta31399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31400,meta31399__$1){
var self__ = this;
var _31400__$1 = this;
return (new cljs.core.async.t_cljs$core$async31398(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31399__$1));
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31400){
var self__ = this;
var _31400__$1 = this;
return self__.meta31399;
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31399","meta31399",1912597020,null)], null);
}));

(cljs.core.async.t_cljs$core$async31398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31398");

(cljs.core.async.t_cljs$core$async31398.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31398.
 */
cljs.core.async.__GT_t_cljs$core$async31398 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31399){
return (new cljs.core.async.t_cljs$core$async31398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31399));
});

}

return (new cljs.core.async.t_cljs$core$async31398(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29655__auto___33820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_31547){
var state_val_31548 = (state_31547[(1)]);
if((state_val_31548 === (7))){
var inst_31445 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31551_33821 = state_31547__$1;
(statearr_31551_33821[(2)] = inst_31445);

(statearr_31551_33821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (20))){
var inst_31457 = (state_31547[(7)]);
var state_31547__$1 = state_31547;
var statearr_31553_33822 = state_31547__$1;
(statearr_31553_33822[(2)] = inst_31457);

(statearr_31553_33822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (27))){
var state_31547__$1 = state_31547;
var statearr_31554_33825 = state_31547__$1;
(statearr_31554_33825[(2)] = null);

(statearr_31554_33825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (1))){
var inst_31429 = (state_31547[(8)]);
var inst_31429__$1 = calc_state();
var inst_31431 = (inst_31429__$1 == null);
var inst_31432 = cljs.core.not(inst_31431);
var state_31547__$1 = (function (){var statearr_31557 = state_31547;
(statearr_31557[(8)] = inst_31429__$1);

return statearr_31557;
})();
if(inst_31432){
var statearr_31558_33826 = state_31547__$1;
(statearr_31558_33826[(1)] = (2));

} else {
var statearr_31559_33827 = state_31547__$1;
(statearr_31559_33827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (24))){
var inst_31496 = (state_31547[(9)]);
var inst_31487 = (state_31547[(10)]);
var inst_31517 = (state_31547[(11)]);
var inst_31517__$1 = (inst_31487.cljs$core$IFn$_invoke$arity$1 ? inst_31487.cljs$core$IFn$_invoke$arity$1(inst_31496) : inst_31487.call(null,inst_31496));
var state_31547__$1 = (function (){var statearr_31560 = state_31547;
(statearr_31560[(11)] = inst_31517__$1);

return statearr_31560;
})();
if(cljs.core.truth_(inst_31517__$1)){
var statearr_31562_33828 = state_31547__$1;
(statearr_31562_33828[(1)] = (29));

} else {
var statearr_31563_33829 = state_31547__$1;
(statearr_31563_33829[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (4))){
var inst_31448 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31448)){
var statearr_31564_33830 = state_31547__$1;
(statearr_31564_33830[(1)] = (8));

} else {
var statearr_31566_33831 = state_31547__$1;
(statearr_31566_33831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (15))){
var inst_31480 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31480)){
var statearr_31567_33832 = state_31547__$1;
(statearr_31567_33832[(1)] = (19));

} else {
var statearr_31573_33833 = state_31547__$1;
(statearr_31573_33833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (21))){
var inst_31486 = (state_31547[(12)]);
var inst_31486__$1 = (state_31547[(2)]);
var inst_31487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31486__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31486__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31486__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31547__$1 = (function (){var statearr_31575 = state_31547;
(statearr_31575[(12)] = inst_31486__$1);

(statearr_31575[(10)] = inst_31487);

(statearr_31575[(13)] = inst_31488);

return statearr_31575;
})();
return cljs.core.async.ioc_alts_BANG_(state_31547__$1,(22),inst_31489);
} else {
if((state_val_31548 === (31))){
var inst_31526 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31526)){
var statearr_31578_33834 = state_31547__$1;
(statearr_31578_33834[(1)] = (32));

} else {
var statearr_31579_33836 = state_31547__$1;
(statearr_31579_33836[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (32))){
var inst_31495 = (state_31547[(14)]);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31547__$1,(35),out,inst_31495);
} else {
if((state_val_31548 === (33))){
var inst_31486 = (state_31547[(12)]);
var inst_31457 = inst_31486;
var state_31547__$1 = (function (){var statearr_31585 = state_31547;
(statearr_31585[(7)] = inst_31457);

return statearr_31585;
})();
var statearr_31586_33842 = state_31547__$1;
(statearr_31586_33842[(2)] = null);

(statearr_31586_33842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (13))){
var inst_31457 = (state_31547[(7)]);
var inst_31467 = inst_31457.cljs$lang$protocol_mask$partition0$;
var inst_31468 = (inst_31467 & (64));
var inst_31469 = inst_31457.cljs$core$ISeq$;
var inst_31470 = (cljs.core.PROTOCOL_SENTINEL === inst_31469);
var inst_31471 = ((inst_31468) || (inst_31470));
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31471)){
var statearr_31589_33847 = state_31547__$1;
(statearr_31589_33847[(1)] = (16));

} else {
var statearr_31591_33852 = state_31547__$1;
(statearr_31591_33852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (22))){
var inst_31496 = (state_31547[(9)]);
var inst_31495 = (state_31547[(14)]);
var inst_31494 = (state_31547[(2)]);
var inst_31495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31494,(0),null);
var inst_31496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31494,(1),null);
var inst_31501 = (inst_31495__$1 == null);
var inst_31504 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31496__$1,change);
var inst_31505 = ((inst_31501) || (inst_31504));
var state_31547__$1 = (function (){var statearr_31596 = state_31547;
(statearr_31596[(9)] = inst_31496__$1);

(statearr_31596[(14)] = inst_31495__$1);

return statearr_31596;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31597_33853 = state_31547__$1;
(statearr_31597_33853[(1)] = (23));

} else {
var statearr_31598_33854 = state_31547__$1;
(statearr_31598_33854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (36))){
var inst_31486 = (state_31547[(12)]);
var inst_31457 = inst_31486;
var state_31547__$1 = (function (){var statearr_31599 = state_31547;
(statearr_31599[(7)] = inst_31457);

return statearr_31599;
})();
var statearr_31600_33855 = state_31547__$1;
(statearr_31600_33855[(2)] = null);

(statearr_31600_33855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (29))){
var inst_31517 = (state_31547[(11)]);
var state_31547__$1 = state_31547;
var statearr_31605_33856 = state_31547__$1;
(statearr_31605_33856[(2)] = inst_31517);

(statearr_31605_33856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (6))){
var state_31547__$1 = state_31547;
var statearr_31606_33857 = state_31547__$1;
(statearr_31606_33857[(2)] = false);

(statearr_31606_33857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (28))){
var inst_31512 = (state_31547[(2)]);
var inst_31514 = calc_state();
var inst_31457 = inst_31514;
var state_31547__$1 = (function (){var statearr_31608 = state_31547;
(statearr_31608[(15)] = inst_31512);

(statearr_31608[(7)] = inst_31457);

return statearr_31608;
})();
var statearr_31609_33858 = state_31547__$1;
(statearr_31609_33858[(2)] = null);

(statearr_31609_33858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (25))){
var inst_31542 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31611_33860 = state_31547__$1;
(statearr_31611_33860[(2)] = inst_31542);

(statearr_31611_33860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (34))){
var inst_31540 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31614_33861 = state_31547__$1;
(statearr_31614_33861[(2)] = inst_31540);

(statearr_31614_33861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (17))){
var state_31547__$1 = state_31547;
var statearr_31615_33862 = state_31547__$1;
(statearr_31615_33862[(2)] = false);

(statearr_31615_33862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (3))){
var state_31547__$1 = state_31547;
var statearr_31617_33863 = state_31547__$1;
(statearr_31617_33863[(2)] = false);

(statearr_31617_33863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (12))){
var inst_31544 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31547__$1,inst_31544);
} else {
if((state_val_31548 === (2))){
var inst_31429 = (state_31547[(8)]);
var inst_31436 = inst_31429.cljs$lang$protocol_mask$partition0$;
var inst_31437 = (inst_31436 & (64));
var inst_31439 = inst_31429.cljs$core$ISeq$;
var inst_31440 = (cljs.core.PROTOCOL_SENTINEL === inst_31439);
var inst_31441 = ((inst_31437) || (inst_31440));
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31441)){
var statearr_31621_33864 = state_31547__$1;
(statearr_31621_33864[(1)] = (5));

} else {
var statearr_31623_33865 = state_31547__$1;
(statearr_31623_33865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (23))){
var inst_31495 = (state_31547[(14)]);
var inst_31507 = (inst_31495 == null);
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31507)){
var statearr_31624_33870 = state_31547__$1;
(statearr_31624_33870[(1)] = (26));

} else {
var statearr_31633_33871 = state_31547__$1;
(statearr_31633_33871[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (35))){
var inst_31529 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31529)){
var statearr_31636_33874 = state_31547__$1;
(statearr_31636_33874[(1)] = (36));

} else {
var statearr_31637_33875 = state_31547__$1;
(statearr_31637_33875[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (19))){
var inst_31457 = (state_31547[(7)]);
var inst_31483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31457);
var state_31547__$1 = state_31547;
var statearr_31639_33878 = state_31547__$1;
(statearr_31639_33878[(2)] = inst_31483);

(statearr_31639_33878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (11))){
var inst_31457 = (state_31547[(7)]);
var inst_31464 = (inst_31457 == null);
var inst_31465 = cljs.core.not(inst_31464);
var state_31547__$1 = state_31547;
if(inst_31465){
var statearr_31644_33881 = state_31547__$1;
(statearr_31644_33881[(1)] = (13));

} else {
var statearr_31646_33883 = state_31547__$1;
(statearr_31646_33883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (9))){
var inst_31429 = (state_31547[(8)]);
var state_31547__$1 = state_31547;
var statearr_31651_33884 = state_31547__$1;
(statearr_31651_33884[(2)] = inst_31429);

(statearr_31651_33884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (5))){
var state_31547__$1 = state_31547;
var statearr_31652_33885 = state_31547__$1;
(statearr_31652_33885[(2)] = true);

(statearr_31652_33885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (14))){
var state_31547__$1 = state_31547;
var statearr_31654_33886 = state_31547__$1;
(statearr_31654_33886[(2)] = false);

(statearr_31654_33886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (26))){
var inst_31496 = (state_31547[(9)]);
var inst_31509 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31496);
var state_31547__$1 = state_31547;
var statearr_31655_33891 = state_31547__$1;
(statearr_31655_33891[(2)] = inst_31509);

(statearr_31655_33891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (16))){
var state_31547__$1 = state_31547;
var statearr_31656_33892 = state_31547__$1;
(statearr_31656_33892[(2)] = true);

(statearr_31656_33892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (38))){
var inst_31536 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31658_33893 = state_31547__$1;
(statearr_31658_33893[(2)] = inst_31536);

(statearr_31658_33893[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (30))){
var inst_31496 = (state_31547[(9)]);
var inst_31487 = (state_31547[(10)]);
var inst_31488 = (state_31547[(13)]);
var inst_31521 = cljs.core.empty_QMARK_(inst_31487);
var inst_31522 = (inst_31488.cljs$core$IFn$_invoke$arity$1 ? inst_31488.cljs$core$IFn$_invoke$arity$1(inst_31496) : inst_31488.call(null,inst_31496));
var inst_31523 = cljs.core.not(inst_31522);
var inst_31524 = ((inst_31521) && (inst_31523));
var state_31547__$1 = state_31547;
var statearr_31659_33895 = state_31547__$1;
(statearr_31659_33895[(2)] = inst_31524);

(statearr_31659_33895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (10))){
var inst_31429 = (state_31547[(8)]);
var inst_31453 = (state_31547[(2)]);
var inst_31454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31453,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31453,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31453,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31457 = inst_31429;
var state_31547__$1 = (function (){var statearr_31667 = state_31547;
(statearr_31667[(16)] = inst_31456);

(statearr_31667[(17)] = inst_31454);

(statearr_31667[(7)] = inst_31457);

(statearr_31667[(18)] = inst_31455);

return statearr_31667;
})();
var statearr_31669_33896 = state_31547__$1;
(statearr_31669_33896[(2)] = null);

(statearr_31669_33896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (18))){
var inst_31477 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31671_33897 = state_31547__$1;
(statearr_31671_33897[(2)] = inst_31477);

(statearr_31671_33897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (37))){
var state_31547__$1 = state_31547;
var statearr_31675_33898 = state_31547__$1;
(statearr_31675_33898[(2)] = null);

(statearr_31675_33898[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (8))){
var inst_31429 = (state_31547[(8)]);
var inst_31450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31429);
var state_31547__$1 = state_31547;
var statearr_31680_33899 = state_31547__$1;
(statearr_31680_33899[(2)] = inst_31450);

(statearr_31680_33899[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29368__auto__ = null;
var cljs$core$async$mix_$_state_machine__29368__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31685[(0)] = cljs$core$async$mix_$_state_machine__29368__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var cljs$core$async$mix_$_state_machine__29368__auto____1 = (function (state_31547){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_31547);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__29371__auto__ = e31689;
var statearr_31691_33911 = state_31547;
(statearr_31691_33911[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33916 = state_31547;
state_31547 = G__33916;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29368__auto__ = function(state_31547){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29368__auto____1.call(this,state_31547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29368__auto____0;
cljs$core$async$mix_$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29368__auto____1;
return cljs$core$async$mix_$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_31693 = f__29656__auto__();
(statearr_31693[(6)] = c__29655__auto___33820);

return statearr_31693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31728 = arguments.length;
switch (G__31728) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
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
var G__31766 = arguments.length;
switch (G__31766) {
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
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31759_SHARP_){
if(cljs.core.truth_((p1__31759_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31759_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31759_SHARP_.call(null,topic)))){
return p1__31759_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31759_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31786 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31787){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31787 = meta31787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31788,meta31787__$1){
var self__ = this;
var _31788__$1 = this;
return (new cljs.core.async.t_cljs$core$async31786(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31787__$1));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31788){
var self__ = this;
var _31788__$1 = this;
return self__.meta31787;
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31787","meta31787",-286894844,null)], null);
}));

(cljs.core.async.t_cljs$core$async31786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31786");

(cljs.core.async.t_cljs$core$async31786.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31786.
 */
cljs.core.async.__GT_t_cljs$core$async31786 = (function cljs$core$async$__GT_t_cljs$core$async31786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31787){
return (new cljs.core.async.t_cljs$core$async31786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31787));
});

}

return (new cljs.core.async.t_cljs$core$async31786(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29655__auto___33950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_31879){
var state_val_31880 = (state_31879[(1)]);
if((state_val_31880 === (7))){
var inst_31875 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31882_33951 = state_31879__$1;
(statearr_31882_33951[(2)] = inst_31875);

(statearr_31882_33951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (20))){
var state_31879__$1 = state_31879;
var statearr_31883_33954 = state_31879__$1;
(statearr_31883_33954[(2)] = null);

(statearr_31883_33954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (1))){
var state_31879__$1 = state_31879;
var statearr_31884_33956 = state_31879__$1;
(statearr_31884_33956[(2)] = null);

(statearr_31884_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (24))){
var inst_31858 = (state_31879[(7)]);
var inst_31867 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31858);
var state_31879__$1 = state_31879;
var statearr_31885_33957 = state_31879__$1;
(statearr_31885_33957[(2)] = inst_31867);

(statearr_31885_33957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (4))){
var inst_31806 = (state_31879[(8)]);
var inst_31806__$1 = (state_31879[(2)]);
var inst_31809 = (inst_31806__$1 == null);
var state_31879__$1 = (function (){var statearr_31886 = state_31879;
(statearr_31886[(8)] = inst_31806__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31809)){
var statearr_31887_33959 = state_31879__$1;
(statearr_31887_33959[(1)] = (5));

} else {
var statearr_31888_33960 = state_31879__$1;
(statearr_31888_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (15))){
var inst_31852 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31889_33961 = state_31879__$1;
(statearr_31889_33961[(2)] = inst_31852);

(statearr_31889_33961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (21))){
var inst_31872 = (state_31879[(2)]);
var state_31879__$1 = (function (){var statearr_31891 = state_31879;
(statearr_31891[(9)] = inst_31872);

return statearr_31891;
})();
var statearr_31892_33962 = state_31879__$1;
(statearr_31892_33962[(2)] = null);

(statearr_31892_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (13))){
var inst_31834 = (state_31879[(10)]);
var inst_31836 = cljs.core.chunked_seq_QMARK_(inst_31834);
var state_31879__$1 = state_31879;
if(inst_31836){
var statearr_31897_33963 = state_31879__$1;
(statearr_31897_33963[(1)] = (16));

} else {
var statearr_31898_33964 = state_31879__$1;
(statearr_31898_33964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (22))){
var inst_31864 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31864)){
var statearr_31899_33966 = state_31879__$1;
(statearr_31899_33966[(1)] = (23));

} else {
var statearr_31900_33967 = state_31879__$1;
(statearr_31900_33967[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (6))){
var inst_31860 = (state_31879[(11)]);
var inst_31806 = (state_31879[(8)]);
var inst_31858 = (state_31879[(7)]);
var inst_31858__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31806) : topic_fn.call(null,inst_31806));
var inst_31859 = cljs.core.deref(mults);
var inst_31860__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31859,inst_31858__$1);
var state_31879__$1 = (function (){var statearr_31904 = state_31879;
(statearr_31904[(11)] = inst_31860__$1);

(statearr_31904[(7)] = inst_31858__$1);

return statearr_31904;
})();
if(cljs.core.truth_(inst_31860__$1)){
var statearr_31905_33973 = state_31879__$1;
(statearr_31905_33973[(1)] = (19));

} else {
var statearr_31906_33974 = state_31879__$1;
(statearr_31906_33974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (25))){
var inst_31869 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31907_33975 = state_31879__$1;
(statearr_31907_33975[(2)] = inst_31869);

(statearr_31907_33975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (17))){
var inst_31834 = (state_31879[(10)]);
var inst_31843 = cljs.core.first(inst_31834);
var inst_31844 = cljs.core.async.muxch_STAR_(inst_31843);
var inst_31845 = cljs.core.async.close_BANG_(inst_31844);
var inst_31846 = cljs.core.next(inst_31834);
var inst_31818 = inst_31846;
var inst_31819 = null;
var inst_31820 = (0);
var inst_31821 = (0);
var state_31879__$1 = (function (){var statearr_31912 = state_31879;
(statearr_31912[(12)] = inst_31820);

(statearr_31912[(13)] = inst_31818);

(statearr_31912[(14)] = inst_31845);

(statearr_31912[(15)] = inst_31819);

(statearr_31912[(16)] = inst_31821);

return statearr_31912;
})();
var statearr_31915_33978 = state_31879__$1;
(statearr_31915_33978[(2)] = null);

(statearr_31915_33978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (3))){
var inst_31877 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31879__$1,inst_31877);
} else {
if((state_val_31880 === (12))){
var inst_31854 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31918_33981 = state_31879__$1;
(statearr_31918_33981[(2)] = inst_31854);

(statearr_31918_33981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (2))){
var state_31879__$1 = state_31879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31879__$1,(4),ch);
} else {
if((state_val_31880 === (23))){
var state_31879__$1 = state_31879;
var statearr_31923_33982 = state_31879__$1;
(statearr_31923_33982[(2)] = null);

(statearr_31923_33982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (19))){
var inst_31860 = (state_31879[(11)]);
var inst_31806 = (state_31879[(8)]);
var inst_31862 = cljs.core.async.muxch_STAR_(inst_31860);
var state_31879__$1 = state_31879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31879__$1,(22),inst_31862,inst_31806);
} else {
if((state_val_31880 === (11))){
var inst_31834 = (state_31879[(10)]);
var inst_31818 = (state_31879[(13)]);
var inst_31834__$1 = cljs.core.seq(inst_31818);
var state_31879__$1 = (function (){var statearr_31926 = state_31879;
(statearr_31926[(10)] = inst_31834__$1);

return statearr_31926;
})();
if(inst_31834__$1){
var statearr_31927_33991 = state_31879__$1;
(statearr_31927_33991[(1)] = (13));

} else {
var statearr_31928_33992 = state_31879__$1;
(statearr_31928_33992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (9))){
var inst_31856 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31929_33996 = state_31879__$1;
(statearr_31929_33996[(2)] = inst_31856);

(statearr_31929_33996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (5))){
var inst_31815 = cljs.core.deref(mults);
var inst_31816 = cljs.core.vals(inst_31815);
var inst_31817 = cljs.core.seq(inst_31816);
var inst_31818 = inst_31817;
var inst_31819 = null;
var inst_31820 = (0);
var inst_31821 = (0);
var state_31879__$1 = (function (){var statearr_31930 = state_31879;
(statearr_31930[(12)] = inst_31820);

(statearr_31930[(13)] = inst_31818);

(statearr_31930[(15)] = inst_31819);

(statearr_31930[(16)] = inst_31821);

return statearr_31930;
})();
var statearr_31931_33998 = state_31879__$1;
(statearr_31931_33998[(2)] = null);

(statearr_31931_33998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (14))){
var state_31879__$1 = state_31879;
var statearr_31935_33999 = state_31879__$1;
(statearr_31935_33999[(2)] = null);

(statearr_31935_33999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (16))){
var inst_31834 = (state_31879[(10)]);
var inst_31838 = cljs.core.chunk_first(inst_31834);
var inst_31839 = cljs.core.chunk_rest(inst_31834);
var inst_31840 = cljs.core.count(inst_31838);
var inst_31818 = inst_31839;
var inst_31819 = inst_31838;
var inst_31820 = inst_31840;
var inst_31821 = (0);
var state_31879__$1 = (function (){var statearr_31939 = state_31879;
(statearr_31939[(12)] = inst_31820);

(statearr_31939[(13)] = inst_31818);

(statearr_31939[(15)] = inst_31819);

(statearr_31939[(16)] = inst_31821);

return statearr_31939;
})();
var statearr_31944_34001 = state_31879__$1;
(statearr_31944_34001[(2)] = null);

(statearr_31944_34001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (10))){
var inst_31820 = (state_31879[(12)]);
var inst_31818 = (state_31879[(13)]);
var inst_31819 = (state_31879[(15)]);
var inst_31821 = (state_31879[(16)]);
var inst_31828 = cljs.core._nth(inst_31819,inst_31821);
var inst_31829 = cljs.core.async.muxch_STAR_(inst_31828);
var inst_31830 = cljs.core.async.close_BANG_(inst_31829);
var inst_31831 = (inst_31821 + (1));
var tmp31932 = inst_31820;
var tmp31933 = inst_31818;
var tmp31934 = inst_31819;
var inst_31818__$1 = tmp31933;
var inst_31819__$1 = tmp31934;
var inst_31820__$1 = tmp31932;
var inst_31821__$1 = inst_31831;
var state_31879__$1 = (function (){var statearr_31947 = state_31879;
(statearr_31947[(12)] = inst_31820__$1);

(statearr_31947[(13)] = inst_31818__$1);

(statearr_31947[(15)] = inst_31819__$1);

(statearr_31947[(16)] = inst_31821__$1);

(statearr_31947[(17)] = inst_31830);

return statearr_31947;
})();
var statearr_31950_34010 = state_31879__$1;
(statearr_31950_34010[(2)] = null);

(statearr_31950_34010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (18))){
var inst_31849 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31951_34011 = state_31879__$1;
(statearr_31951_34011[(2)] = inst_31849);

(statearr_31951_34011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (8))){
var inst_31820 = (state_31879[(12)]);
var inst_31821 = (state_31879[(16)]);
var inst_31823 = (inst_31821 < inst_31820);
var inst_31824 = inst_31823;
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31824)){
var statearr_31959_34012 = state_31879__$1;
(statearr_31959_34012[(1)] = (10));

} else {
var statearr_31960_34013 = state_31879__$1;
(statearr_31960_34013[(1)] = (11));

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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31963[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_31879){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_31879);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__29371__auto__ = e31964;
var statearr_31967_34014 = state_31879;
(statearr_31967_34014[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34015 = state_31879;
state_31879 = G__34015;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_31879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_31879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_31978 = f__29656__auto__();
(statearr_31978[(6)] = c__29655__auto___33950);

return statearr_31978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var G__31992 = arguments.length;
switch (G__31992) {
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
var G__32011 = arguments.length;
switch (G__32011) {
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
var G__32025 = arguments.length;
switch (G__32025) {
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
var c__29655__auto___34026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32095){
var state_val_32096 = (state_32095[(1)]);
if((state_val_32096 === (7))){
var state_32095__$1 = state_32095;
var statearr_32097_34027 = state_32095__$1;
(statearr_32097_34027[(2)] = null);

(statearr_32097_34027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (1))){
var state_32095__$1 = state_32095;
var statearr_32100_34028 = state_32095__$1;
(statearr_32100_34028[(2)] = null);

(statearr_32100_34028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (4))){
var inst_32049 = (state_32095[(7)]);
var inst_32051 = (inst_32049 < cnt);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32051)){
var statearr_32104_34029 = state_32095__$1;
(statearr_32104_34029[(1)] = (6));

} else {
var statearr_32105_34030 = state_32095__$1;
(statearr_32105_34030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (15))){
var inst_32088 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32107_34032 = state_32095__$1;
(statearr_32107_34032[(2)] = inst_32088);

(statearr_32107_34032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (13))){
var inst_32081 = cljs.core.async.close_BANG_(out);
var state_32095__$1 = state_32095;
var statearr_32109_34033 = state_32095__$1;
(statearr_32109_34033[(2)] = inst_32081);

(statearr_32109_34033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (6))){
var state_32095__$1 = state_32095;
var statearr_32110_34034 = state_32095__$1;
(statearr_32110_34034[(2)] = null);

(statearr_32110_34034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (3))){
var inst_32090 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32095__$1,inst_32090);
} else {
if((state_val_32096 === (12))){
var inst_32078 = (state_32095[(8)]);
var inst_32078__$1 = (state_32095[(2)]);
var inst_32079 = cljs.core.some(cljs.core.nil_QMARK_,inst_32078__$1);
var state_32095__$1 = (function (){var statearr_32118 = state_32095;
(statearr_32118[(8)] = inst_32078__$1);

return statearr_32118;
})();
if(cljs.core.truth_(inst_32079)){
var statearr_32124_34035 = state_32095__$1;
(statearr_32124_34035[(1)] = (13));

} else {
var statearr_32125_34036 = state_32095__$1;
(statearr_32125_34036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (2))){
var inst_32045 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32049 = (0);
var state_32095__$1 = (function (){var statearr_32127 = state_32095;
(statearr_32127[(7)] = inst_32049);

(statearr_32127[(9)] = inst_32045);

return statearr_32127;
})();
var statearr_32132_34037 = state_32095__$1;
(statearr_32132_34037[(2)] = null);

(statearr_32132_34037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (11))){
var inst_32049 = (state_32095[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32095,(10),Object,null,(9));
var inst_32062 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32049) : chs__$1.call(null,inst_32049));
var inst_32063 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32049) : done.call(null,inst_32049));
var inst_32064 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32062,inst_32063);
var state_32095__$1 = state_32095;
var statearr_32138_34040 = state_32095__$1;
(statearr_32138_34040[(2)] = inst_32064);


cljs.core.async.impl.ioc_helpers.process_exception(state_32095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (9))){
var inst_32049 = (state_32095[(7)]);
var inst_32069 = (state_32095[(2)]);
var inst_32070 = (inst_32049 + (1));
var inst_32049__$1 = inst_32070;
var state_32095__$1 = (function (){var statearr_32140 = state_32095;
(statearr_32140[(7)] = inst_32049__$1);

(statearr_32140[(10)] = inst_32069);

return statearr_32140;
})();
var statearr_32142_34041 = state_32095__$1;
(statearr_32142_34041[(2)] = null);

(statearr_32142_34041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (5))){
var inst_32076 = (state_32095[(2)]);
var state_32095__$1 = (function (){var statearr_32147 = state_32095;
(statearr_32147[(11)] = inst_32076);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32095__$1,(12),dchan);
} else {
if((state_val_32096 === (14))){
var inst_32078 = (state_32095[(8)]);
var inst_32083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32078);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32095__$1,(16),out,inst_32083);
} else {
if((state_val_32096 === (16))){
var inst_32085 = (state_32095[(2)]);
var state_32095__$1 = (function (){var statearr_32148 = state_32095;
(statearr_32148[(12)] = inst_32085);

return statearr_32148;
})();
var statearr_32149_34042 = state_32095__$1;
(statearr_32149_34042[(2)] = null);

(statearr_32149_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (10))){
var inst_32057 = (state_32095[(2)]);
var inst_32058 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32095__$1 = (function (){var statearr_32150 = state_32095;
(statearr_32150[(13)] = inst_32057);

return statearr_32150;
})();
var statearr_32151_34043 = state_32095__$1;
(statearr_32151_34043[(2)] = inst_32058);


cljs.core.async.impl.ioc_helpers.process_exception(state_32095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (8))){
var inst_32074 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32152_34044 = state_32095__$1;
(statearr_32152_34044[(2)] = inst_32074);

(statearr_32152_34044[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32153[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32153[(1)] = (1));

return statearr_32153;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32095){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32095);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32155){if((e32155 instanceof Object)){
var ex__29371__auto__ = e32155;
var statearr_32156_34050 = state_32095;
(statearr_32156_34050[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34051 = state_32095;
state_32095 = G__34051;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32157 = f__29656__auto__();
(statearr_32157[(6)] = c__29655__auto___34026);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var G__32162 = arguments.length;
switch (G__32162) {
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
var c__29655__auto___34054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32204){
var state_val_32205 = (state_32204[(1)]);
if((state_val_32205 === (7))){
var inst_32181 = (state_32204[(7)]);
var inst_32182 = (state_32204[(8)]);
var inst_32181__$1 = (state_32204[(2)]);
var inst_32182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32181__$1,(0),null);
var inst_32183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32181__$1,(1),null);
var inst_32184 = (inst_32182__$1 == null);
var state_32204__$1 = (function (){var statearr_32206 = state_32204;
(statearr_32206[(7)] = inst_32181__$1);

(statearr_32206[(8)] = inst_32182__$1);

(statearr_32206[(9)] = inst_32183);

return statearr_32206;
})();
if(cljs.core.truth_(inst_32184)){
var statearr_32207_34056 = state_32204__$1;
(statearr_32207_34056[(1)] = (8));

} else {
var statearr_32208_34057 = state_32204__$1;
(statearr_32208_34057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (1))){
var inst_32166 = cljs.core.vec(chs);
var inst_32167 = inst_32166;
var state_32204__$1 = (function (){var statearr_32211 = state_32204;
(statearr_32211[(10)] = inst_32167);

return statearr_32211;
})();
var statearr_32214_34063 = state_32204__$1;
(statearr_32214_34063[(2)] = null);

(statearr_32214_34063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (4))){
var inst_32167 = (state_32204[(10)]);
var state_32204__$1 = state_32204;
return cljs.core.async.ioc_alts_BANG_(state_32204__$1,(7),inst_32167);
} else {
if((state_val_32205 === (6))){
var inst_32199 = (state_32204[(2)]);
var state_32204__$1 = state_32204;
var statearr_32220_34064 = state_32204__$1;
(statearr_32220_34064[(2)] = inst_32199);

(statearr_32220_34064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (3))){
var inst_32202 = (state_32204[(2)]);
var state_32204__$1 = state_32204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32204__$1,inst_32202);
} else {
if((state_val_32205 === (2))){
var inst_32167 = (state_32204[(10)]);
var inst_32174 = cljs.core.count(inst_32167);
var inst_32175 = (inst_32174 > (0));
var state_32204__$1 = state_32204;
if(cljs.core.truth_(inst_32175)){
var statearr_32233_34065 = state_32204__$1;
(statearr_32233_34065[(1)] = (4));

} else {
var statearr_32235_34066 = state_32204__$1;
(statearr_32235_34066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (11))){
var inst_32167 = (state_32204[(10)]);
var inst_32192 = (state_32204[(2)]);
var tmp32221 = inst_32167;
var inst_32167__$1 = tmp32221;
var state_32204__$1 = (function (){var statearr_32240 = state_32204;
(statearr_32240[(11)] = inst_32192);

(statearr_32240[(10)] = inst_32167__$1);

return statearr_32240;
})();
var statearr_32241_34067 = state_32204__$1;
(statearr_32241_34067[(2)] = null);

(statearr_32241_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (9))){
var inst_32182 = (state_32204[(8)]);
var state_32204__$1 = state_32204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32204__$1,(11),out,inst_32182);
} else {
if((state_val_32205 === (5))){
var inst_32197 = cljs.core.async.close_BANG_(out);
var state_32204__$1 = state_32204;
var statearr_32242_34068 = state_32204__$1;
(statearr_32242_34068[(2)] = inst_32197);

(statearr_32242_34068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (10))){
var inst_32195 = (state_32204[(2)]);
var state_32204__$1 = state_32204;
var statearr_32243_34069 = state_32204__$1;
(statearr_32243_34069[(2)] = inst_32195);

(statearr_32243_34069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32205 === (8))){
var inst_32181 = (state_32204[(7)]);
var inst_32182 = (state_32204[(8)]);
var inst_32183 = (state_32204[(9)]);
var inst_32167 = (state_32204[(10)]);
var inst_32187 = (function (){var cs = inst_32167;
var vec__32177 = inst_32181;
var v = inst_32182;
var c = inst_32183;
return (function (p1__32159_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32159_SHARP_);
});
})();
var inst_32188 = cljs.core.filterv(inst_32187,inst_32167);
var inst_32167__$1 = inst_32188;
var state_32204__$1 = (function (){var statearr_32244 = state_32204;
(statearr_32244[(10)] = inst_32167__$1);

return statearr_32244;
})();
var statearr_32245_34070 = state_32204__$1;
(statearr_32245_34070[(2)] = null);

(statearr_32245_34070[(1)] = (2));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32246 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32246[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32246[(1)] = (1));

return statearr_32246;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32204){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32204);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32247){if((e32247 instanceof Object)){
var ex__29371__auto__ = e32247;
var statearr_32248_34071 = state_32204;
(statearr_32248_34071[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34074 = state_32204;
state_32204 = G__34074;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32249 = f__29656__auto__();
(statearr_32249[(6)] = c__29655__auto___34054);

return statearr_32249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
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
var G__32251 = arguments.length;
switch (G__32251) {
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
var c__29655__auto___34076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32278){
var state_val_32279 = (state_32278[(1)]);
if((state_val_32279 === (7))){
var inst_32258 = (state_32278[(7)]);
var inst_32258__$1 = (state_32278[(2)]);
var inst_32259 = (inst_32258__$1 == null);
var inst_32260 = cljs.core.not(inst_32259);
var state_32278__$1 = (function (){var statearr_32280 = state_32278;
(statearr_32280[(7)] = inst_32258__$1);

return statearr_32280;
})();
if(inst_32260){
var statearr_32281_34080 = state_32278__$1;
(statearr_32281_34080[(1)] = (8));

} else {
var statearr_32282_34081 = state_32278__$1;
(statearr_32282_34081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (1))){
var inst_32253 = (0);
var state_32278__$1 = (function (){var statearr_32283 = state_32278;
(statearr_32283[(8)] = inst_32253);

return statearr_32283;
})();
var statearr_32284_34082 = state_32278__$1;
(statearr_32284_34082[(2)] = null);

(statearr_32284_34082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (4))){
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32278__$1,(7),ch);
} else {
if((state_val_32279 === (6))){
var inst_32272 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32289_34083 = state_32278__$1;
(statearr_32289_34083[(2)] = inst_32272);

(statearr_32289_34083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (3))){
var inst_32275 = (state_32278[(2)]);
var inst_32276 = cljs.core.async.close_BANG_(out);
var state_32278__$1 = (function (){var statearr_32291 = state_32278;
(statearr_32291[(9)] = inst_32275);

return statearr_32291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32278__$1,inst_32276);
} else {
if((state_val_32279 === (2))){
var inst_32253 = (state_32278[(8)]);
var inst_32255 = (inst_32253 < n);
var state_32278__$1 = state_32278;
if(cljs.core.truth_(inst_32255)){
var statearr_32292_34085 = state_32278__$1;
(statearr_32292_34085[(1)] = (4));

} else {
var statearr_32294_34086 = state_32278__$1;
(statearr_32294_34086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (11))){
var inst_32253 = (state_32278[(8)]);
var inst_32264 = (state_32278[(2)]);
var inst_32265 = (inst_32253 + (1));
var inst_32253__$1 = inst_32265;
var state_32278__$1 = (function (){var statearr_32295 = state_32278;
(statearr_32295[(8)] = inst_32253__$1);

(statearr_32295[(10)] = inst_32264);

return statearr_32295;
})();
var statearr_32296_34087 = state_32278__$1;
(statearr_32296_34087[(2)] = null);

(statearr_32296_34087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (9))){
var state_32278__$1 = state_32278;
var statearr_32297_34088 = state_32278__$1;
(statearr_32297_34088[(2)] = null);

(statearr_32297_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (5))){
var state_32278__$1 = state_32278;
var statearr_32298_34089 = state_32278__$1;
(statearr_32298_34089[(2)] = null);

(statearr_32298_34089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (10))){
var inst_32269 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32299_34090 = state_32278__$1;
(statearr_32299_34090[(2)] = inst_32269);

(statearr_32299_34090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (8))){
var inst_32258 = (state_32278[(7)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32278__$1,(11),out,inst_32258);
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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32300[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32300[(1)] = (1));

return statearr_32300;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32278){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32278);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32305){if((e32305 instanceof Object)){
var ex__29371__auto__ = e32305;
var statearr_32306_34094 = state_32278;
(statearr_32306_34094[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_32278;
state_32278 = G__34095;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32307 = f__29656__auto__();
(statearr_32307[(6)] = c__29655__auto___34076);

return statearr_32307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32314 = (function (f,ch,meta32315){
this.f = f;
this.ch = ch;
this.meta32315 = meta32315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32316,meta32315__$1){
var self__ = this;
var _32316__$1 = this;
return (new cljs.core.async.t_cljs$core$async32314(self__.f,self__.ch,meta32315__$1));
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32316){
var self__ = this;
var _32316__$1 = this;
return self__.meta32315;
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32331 = (function (f,ch,meta32315,_,fn1,meta32332){
this.f = f;
this.ch = ch;
this.meta32315 = meta32315;
this._ = _;
this.fn1 = fn1;
this.meta32332 = meta32332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32333,meta32332__$1){
var self__ = this;
var _32333__$1 = this;
return (new cljs.core.async.t_cljs$core$async32331(self__.f,self__.ch,self__.meta32315,self__._,self__.fn1,meta32332__$1));
}));

(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32333){
var self__ = this;
var _32333__$1 = this;
return self__.meta32332;
}));

(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32311_SHARP_){
var G__32341 = (((p1__32311_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32311_SHARP_) : self__.f.call(null,p1__32311_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32341) : f1.call(null,G__32341));
});
}));

(cljs.core.async.t_cljs$core$async32331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32315","meta32315",-569230593,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32314","cljs.core.async/t_cljs$core$async32314",-1444816657,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32332","meta32332",1136831492,null)], null);
}));

(cljs.core.async.t_cljs$core$async32331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32331");

(cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32331.
 */
cljs.core.async.__GT_t_cljs$core$async32331 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32331(f__$1,ch__$1,meta32315__$1,___$2,fn1__$1,meta32332){
return (new cljs.core.async.t_cljs$core$async32331(f__$1,ch__$1,meta32315__$1,___$2,fn1__$1,meta32332));
});

}

return (new cljs.core.async.t_cljs$core$async32331(self__.f,self__.ch,self__.meta32315,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32344 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32344) : self__.f.call(null,G__32344));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32315","meta32315",-569230593,null)], null);
}));

(cljs.core.async.t_cljs$core$async32314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32314");

(cljs.core.async.t_cljs$core$async32314.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32314.
 */
cljs.core.async.__GT_t_cljs$core$async32314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32314(f__$1,ch__$1,meta32315){
return (new cljs.core.async.t_cljs$core$async32314(f__$1,ch__$1,meta32315));
});

}

return (new cljs.core.async.t_cljs$core$async32314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32353 = (function (f,ch,meta32354){
this.f = f;
this.ch = ch;
this.meta32354 = meta32354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32355,meta32354__$1){
var self__ = this;
var _32355__$1 = this;
return (new cljs.core.async.t_cljs$core$async32353(self__.f,self__.ch,meta32354__$1));
}));

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32355){
var self__ = this;
var _32355__$1 = this;
return self__.meta32354;
}));

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32354","meta32354",1616107140,null)], null);
}));

(cljs.core.async.t_cljs$core$async32353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32353");

(cljs.core.async.t_cljs$core$async32353.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32353.
 */
cljs.core.async.__GT_t_cljs$core$async32353 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32353(f__$1,ch__$1,meta32354){
return (new cljs.core.async.t_cljs$core$async32353(f__$1,ch__$1,meta32354));
});

}

return (new cljs.core.async.t_cljs$core$async32353(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32362 = (function (p,ch,meta32363){
this.p = p;
this.ch = ch;
this.meta32363 = meta32363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32364,meta32363__$1){
var self__ = this;
var _32364__$1 = this;
return (new cljs.core.async.t_cljs$core$async32362(self__.p,self__.ch,meta32363__$1));
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32364){
var self__ = this;
var _32364__$1 = this;
return self__.meta32363;
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32363","meta32363",1833960029,null)], null);
}));

(cljs.core.async.t_cljs$core$async32362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32362");

(cljs.core.async.t_cljs$core$async32362.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32362.
 */
cljs.core.async.__GT_t_cljs$core$async32362 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32362(p__$1,ch__$1,meta32363){
return (new cljs.core.async.t_cljs$core$async32362(p__$1,ch__$1,meta32363));
});

}

return (new cljs.core.async.t_cljs$core$async32362(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32383 = arguments.length;
switch (G__32383) {
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
var c__29655__auto___34124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32422_34127 = state_32414__$1;
(statearr_32422_34127[(2)] = inst_32410);

(statearr_32422_34127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32427_34129 = state_32414__$1;
(statearr_32427_34129[(2)] = null);

(statearr_32427_34129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (4))){
var inst_32393 = (state_32414[(7)]);
var inst_32393__$1 = (state_32414[(2)]);
var inst_32397 = (inst_32393__$1 == null);
var state_32414__$1 = (function (){var statearr_32428 = state_32414;
(statearr_32428[(7)] = inst_32393__$1);

return statearr_32428;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32429_34130 = state_32414__$1;
(statearr_32429_34130[(1)] = (5));

} else {
var statearr_32430_34131 = state_32414__$1;
(statearr_32430_34131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var inst_32393 = (state_32414[(7)]);
var inst_32401 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32393) : p.call(null,inst_32393));
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32401)){
var statearr_32434_34132 = state_32414__$1;
(statearr_32434_34132[(1)] = (8));

} else {
var statearr_32435_34133 = state_32414__$1;
(statearr_32435_34133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32414__$1,(4),ch);
} else {
if((state_val_32415 === (11))){
var inst_32404 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32439_34136 = state_32414__$1;
(statearr_32439_34136[(2)] = inst_32404);

(statearr_32439_34136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (9))){
var state_32414__$1 = state_32414;
var statearr_32442_34138 = state_32414__$1;
(statearr_32442_34138[(2)] = null);

(statearr_32442_34138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32399 = cljs.core.async.close_BANG_(out);
var state_32414__$1 = state_32414;
var statearr_32443_34141 = state_32414__$1;
(statearr_32443_34141[(2)] = inst_32399);

(statearr_32443_34141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (10))){
var inst_32407 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32444 = state_32414;
(statearr_32444[(8)] = inst_32407);

return statearr_32444;
})();
var statearr_32446_34142 = state_32414__$1;
(statearr_32446_34142[(2)] = null);

(statearr_32446_34142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32393 = (state_32414[(7)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32414__$1,(11),out,inst_32393);
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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32454 = [null,null,null,null,null,null,null,null,null];
(statearr_32454[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32454[(1)] = (1));

return statearr_32454;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32414){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32414);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32460){if((e32460 instanceof Object)){
var ex__29371__auto__ = e32460;
var statearr_32461_34144 = state_32414;
(statearr_32461_34144[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34145 = state_32414;
state_32414 = G__34145;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32462 = f__29656__auto__();
(statearr_32462[(6)] = c__29655__auto___34124);

return statearr_32462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32467 = arguments.length;
switch (G__32467) {
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
var c__29655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (7))){
var inst_32533 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32546_34155 = state_32538__$1;
(statearr_32546_34155[(2)] = inst_32533);

(statearr_32546_34155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (20))){
var inst_32503 = (state_32538[(7)]);
var inst_32514 = (state_32538[(2)]);
var inst_32515 = cljs.core.next(inst_32503);
var inst_32487 = inst_32515;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32538__$1 = (function (){var statearr_32549 = state_32538;
(statearr_32549[(8)] = inst_32488);

(statearr_32549[(9)] = inst_32487);

(statearr_32549[(10)] = inst_32514);

(statearr_32549[(11)] = inst_32489);

(statearr_32549[(12)] = inst_32490);

return statearr_32549;
})();
var statearr_32550_34164 = state_32538__$1;
(statearr_32550_34164[(2)] = null);

(statearr_32550_34164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (1))){
var state_32538__$1 = state_32538;
var statearr_32553_34165 = state_32538__$1;
(statearr_32553_34165[(2)] = null);

(statearr_32553_34165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (4))){
var inst_32476 = (state_32538[(13)]);
var inst_32476__$1 = (state_32538[(2)]);
var inst_32477 = (inst_32476__$1 == null);
var state_32538__$1 = (function (){var statearr_32554 = state_32538;
(statearr_32554[(13)] = inst_32476__$1);

return statearr_32554;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32555_34169 = state_32538__$1;
(statearr_32555_34169[(1)] = (5));

} else {
var statearr_32556_34170 = state_32538__$1;
(statearr_32556_34170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (15))){
var state_32538__$1 = state_32538;
var statearr_32565_34175 = state_32538__$1;
(statearr_32565_34175[(2)] = null);

(statearr_32565_34175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (21))){
var state_32538__$1 = state_32538;
var statearr_32571_34176 = state_32538__$1;
(statearr_32571_34176[(2)] = null);

(statearr_32571_34176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (13))){
var inst_32488 = (state_32538[(8)]);
var inst_32487 = (state_32538[(9)]);
var inst_32489 = (state_32538[(11)]);
var inst_32490 = (state_32538[(12)]);
var inst_32497 = (state_32538[(2)]);
var inst_32499 = (inst_32490 + (1));
var tmp32558 = inst_32488;
var tmp32559 = inst_32487;
var tmp32560 = inst_32489;
var inst_32487__$1 = tmp32559;
var inst_32488__$1 = tmp32558;
var inst_32489__$1 = tmp32560;
var inst_32490__$1 = inst_32499;
var state_32538__$1 = (function (){var statearr_32586 = state_32538;
(statearr_32586[(8)] = inst_32488__$1);

(statearr_32586[(9)] = inst_32487__$1);

(statearr_32586[(11)] = inst_32489__$1);

(statearr_32586[(14)] = inst_32497);

(statearr_32586[(12)] = inst_32490__$1);

return statearr_32586;
})();
var statearr_32591_34180 = state_32538__$1;
(statearr_32591_34180[(2)] = null);

(statearr_32591_34180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (22))){
var state_32538__$1 = state_32538;
var statearr_32596_34184 = state_32538__$1;
(statearr_32596_34184[(2)] = null);

(statearr_32596_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (6))){
var inst_32476 = (state_32538[(13)]);
var inst_32485 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32476) : f.call(null,inst_32476));
var inst_32486 = cljs.core.seq(inst_32485);
var inst_32487 = inst_32486;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32538__$1 = (function (){var statearr_32603 = state_32538;
(statearr_32603[(8)] = inst_32488);

(statearr_32603[(9)] = inst_32487);

(statearr_32603[(11)] = inst_32489);

(statearr_32603[(12)] = inst_32490);

return statearr_32603;
})();
var statearr_32604_34185 = state_32538__$1;
(statearr_32604_34185[(2)] = null);

(statearr_32604_34185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (17))){
var inst_32503 = (state_32538[(7)]);
var inst_32507 = cljs.core.chunk_first(inst_32503);
var inst_32508 = cljs.core.chunk_rest(inst_32503);
var inst_32509 = cljs.core.count(inst_32507);
var inst_32487 = inst_32508;
var inst_32488 = inst_32507;
var inst_32489 = inst_32509;
var inst_32490 = (0);
var state_32538__$1 = (function (){var statearr_32608 = state_32538;
(statearr_32608[(8)] = inst_32488);

(statearr_32608[(9)] = inst_32487);

(statearr_32608[(11)] = inst_32489);

(statearr_32608[(12)] = inst_32490);

return statearr_32608;
})();
var statearr_32610_34187 = state_32538__$1;
(statearr_32610_34187[(2)] = null);

(statearr_32610_34187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (3))){
var inst_32535 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32538__$1,inst_32535);
} else {
if((state_val_32539 === (12))){
var inst_32523 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32614_34191 = state_32538__$1;
(statearr_32614_34191[(2)] = inst_32523);

(statearr_32614_34191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (2))){
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32538__$1,(4),in$);
} else {
if((state_val_32539 === (23))){
var inst_32531 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32620_34198 = state_32538__$1;
(statearr_32620_34198[(2)] = inst_32531);

(statearr_32620_34198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (19))){
var inst_32518 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32621_34199 = state_32538__$1;
(statearr_32621_34199[(2)] = inst_32518);

(statearr_32621_34199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (11))){
var inst_32487 = (state_32538[(9)]);
var inst_32503 = (state_32538[(7)]);
var inst_32503__$1 = cljs.core.seq(inst_32487);
var state_32538__$1 = (function (){var statearr_32622 = state_32538;
(statearr_32622[(7)] = inst_32503__$1);

return statearr_32622;
})();
if(inst_32503__$1){
var statearr_32623_34206 = state_32538__$1;
(statearr_32623_34206[(1)] = (14));

} else {
var statearr_32624_34210 = state_32538__$1;
(statearr_32624_34210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (9))){
var inst_32525 = (state_32538[(2)]);
var inst_32526 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32538__$1 = (function (){var statearr_32627 = state_32538;
(statearr_32627[(15)] = inst_32525);

return statearr_32627;
})();
if(cljs.core.truth_(inst_32526)){
var statearr_32630_34213 = state_32538__$1;
(statearr_32630_34213[(1)] = (21));

} else {
var statearr_32634_34217 = state_32538__$1;
(statearr_32634_34217[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (5))){
var inst_32479 = cljs.core.async.close_BANG_(out);
var state_32538__$1 = state_32538;
var statearr_32635_34220 = state_32538__$1;
(statearr_32635_34220[(2)] = inst_32479);

(statearr_32635_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (14))){
var inst_32503 = (state_32538[(7)]);
var inst_32505 = cljs.core.chunked_seq_QMARK_(inst_32503);
var state_32538__$1 = state_32538;
if(inst_32505){
var statearr_32636_34221 = state_32538__$1;
(statearr_32636_34221[(1)] = (17));

} else {
var statearr_32637_34222 = state_32538__$1;
(statearr_32637_34222[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (16))){
var inst_32521 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32639_34224 = state_32538__$1;
(statearr_32639_34224[(2)] = inst_32521);

(statearr_32639_34224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (10))){
var inst_32488 = (state_32538[(8)]);
var inst_32490 = (state_32538[(12)]);
var inst_32495 = cljs.core._nth(inst_32488,inst_32490);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32538__$1,(13),out,inst_32495);
} else {
if((state_val_32539 === (18))){
var inst_32503 = (state_32538[(7)]);
var inst_32512 = cljs.core.first(inst_32503);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32538__$1,(20),out,inst_32512);
} else {
if((state_val_32539 === (8))){
var inst_32489 = (state_32538[(11)]);
var inst_32490 = (state_32538[(12)]);
var inst_32492 = (inst_32490 < inst_32489);
var inst_32493 = inst_32492;
var state_32538__$1 = state_32538;
if(cljs.core.truth_(inst_32493)){
var statearr_32645_34235 = state_32538__$1;
(statearr_32645_34235[(1)] = (10));

} else {
var statearr_32649_34236 = state_32538__$1;
(statearr_32649_34236[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32654[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____1 = (function (state_32538){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32538);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32663){if((e32663 instanceof Object)){
var ex__29371__auto__ = e32663;
var statearr_32664_34241 = state_32538;
(statearr_32664_34241[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_32538;
state_32538 = G__34242;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29368__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32666 = f__29656__auto__();
(statearr_32666[(6)] = c__29655__auto__);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));

return c__29655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32668 = arguments.length;
switch (G__32668) {
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
var G__32693 = arguments.length;
switch (G__32693) {
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
var G__32699 = arguments.length;
switch (G__32699) {
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
var c__29655__auto___34255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32732){
var state_val_32733 = (state_32732[(1)]);
if((state_val_32733 === (7))){
var inst_32726 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32734_34256 = state_32732__$1;
(statearr_32734_34256[(2)] = inst_32726);

(statearr_32734_34256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (1))){
var inst_32707 = null;
var state_32732__$1 = (function (){var statearr_32735 = state_32732;
(statearr_32735[(7)] = inst_32707);

return statearr_32735;
})();
var statearr_32736_34257 = state_32732__$1;
(statearr_32736_34257[(2)] = null);

(statearr_32736_34257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (4))){
var inst_32710 = (state_32732[(8)]);
var inst_32710__$1 = (state_32732[(2)]);
var inst_32712 = (inst_32710__$1 == null);
var inst_32713 = cljs.core.not(inst_32712);
var state_32732__$1 = (function (){var statearr_32739 = state_32732;
(statearr_32739[(8)] = inst_32710__$1);

return statearr_32739;
})();
if(inst_32713){
var statearr_32740_34259 = state_32732__$1;
(statearr_32740_34259[(1)] = (5));

} else {
var statearr_32741_34260 = state_32732__$1;
(statearr_32741_34260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (6))){
var state_32732__$1 = state_32732;
var statearr_32742_34261 = state_32732__$1;
(statearr_32742_34261[(2)] = null);

(statearr_32742_34261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (3))){
var inst_32728 = (state_32732[(2)]);
var inst_32729 = cljs.core.async.close_BANG_(out);
var state_32732__$1 = (function (){var statearr_32749 = state_32732;
(statearr_32749[(9)] = inst_32728);

return statearr_32749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32732__$1,inst_32729);
} else {
if((state_val_32733 === (2))){
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32732__$1,(4),ch);
} else {
if((state_val_32733 === (11))){
var inst_32710 = (state_32732[(8)]);
var inst_32720 = (state_32732[(2)]);
var inst_32707 = inst_32710;
var state_32732__$1 = (function (){var statearr_32751 = state_32732;
(statearr_32751[(7)] = inst_32707);

(statearr_32751[(10)] = inst_32720);

return statearr_32751;
})();
var statearr_32752_34268 = state_32732__$1;
(statearr_32752_34268[(2)] = null);

(statearr_32752_34268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (9))){
var inst_32710 = (state_32732[(8)]);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32732__$1,(11),out,inst_32710);
} else {
if((state_val_32733 === (5))){
var inst_32707 = (state_32732[(7)]);
var inst_32710 = (state_32732[(8)]);
var inst_32715 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32710,inst_32707);
var state_32732__$1 = state_32732;
if(inst_32715){
var statearr_32754_34269 = state_32732__$1;
(statearr_32754_34269[(1)] = (8));

} else {
var statearr_32760_34270 = state_32732__$1;
(statearr_32760_34270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (10))){
var inst_32723 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32767_34271 = state_32732__$1;
(statearr_32767_34271[(2)] = inst_32723);

(statearr_32767_34271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (8))){
var inst_32707 = (state_32732[(7)]);
var tmp32753 = inst_32707;
var inst_32707__$1 = tmp32753;
var state_32732__$1 = (function (){var statearr_32769 = state_32732;
(statearr_32769[(7)] = inst_32707__$1);

return statearr_32769;
})();
var statearr_32770_34280 = state_32732__$1;
(statearr_32770_34280[(2)] = null);

(statearr_32770_34280[(1)] = (2));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32775[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32775[(1)] = (1));

return statearr_32775;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32732){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32732);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32777){if((e32777 instanceof Object)){
var ex__29371__auto__ = e32777;
var statearr_32785_34285 = state_32732;
(statearr_32785_34285[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_32732;
state_32732 = G__34287;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32802 = f__29656__auto__();
(statearr_32802[(6)] = c__29655__auto___34255);

return statearr_32802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
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
var c__29655__auto___34301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32866_34302 = state_32860__$1;
(statearr_32866_34302[(2)] = inst_32856);

(statearr_32866_34302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var inst_32821 = (new Array(n));
var inst_32822 = inst_32821;
var inst_32823 = (0);
var state_32860__$1 = (function (){var statearr_32871 = state_32860;
(statearr_32871[(7)] = inst_32823);

(statearr_32871[(8)] = inst_32822);

return statearr_32871;
})();
var statearr_32872_34306 = state_32860__$1;
(statearr_32872_34306[(2)] = null);

(statearr_32872_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32828 = (state_32860[(9)]);
var inst_32828__$1 = (state_32860[(2)]);
var inst_32829 = (inst_32828__$1 == null);
var inst_32830 = cljs.core.not(inst_32829);
var state_32860__$1 = (function (){var statearr_32877 = state_32860;
(statearr_32877[(9)] = inst_32828__$1);

return statearr_32877;
})();
if(inst_32830){
var statearr_32878_34309 = state_32860__$1;
(statearr_32878_34309[(1)] = (5));

} else {
var statearr_32879_34310 = state_32860__$1;
(statearr_32879_34310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (15))){
var inst_32850 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32880_34314 = state_32860__$1;
(statearr_32880_34314[(2)] = inst_32850);

(statearr_32880_34314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (13))){
var state_32860__$1 = state_32860;
var statearr_32881_34315 = state_32860__$1;
(statearr_32881_34315[(2)] = null);

(statearr_32881_34315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var inst_32823 = (state_32860[(7)]);
var inst_32846 = (inst_32823 > (0));
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32846)){
var statearr_32885_34316 = state_32860__$1;
(statearr_32885_34316[(1)] = (12));

} else {
var statearr_32890_34317 = state_32860__$1;
(statearr_32890_34317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (12))){
var inst_32822 = (state_32860[(8)]);
var inst_32848 = cljs.core.vec(inst_32822);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32860__$1,(15),out,inst_32848);
} else {
if((state_val_32861 === (2))){
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32860__$1,(4),ch);
} else {
if((state_val_32861 === (11))){
var inst_32840 = (state_32860[(2)]);
var inst_32841 = (new Array(n));
var inst_32822 = inst_32841;
var inst_32823 = (0);
var state_32860__$1 = (function (){var statearr_32897 = state_32860;
(statearr_32897[(10)] = inst_32840);

(statearr_32897[(7)] = inst_32823);

(statearr_32897[(8)] = inst_32822);

return statearr_32897;
})();
var statearr_32901_34321 = state_32860__$1;
(statearr_32901_34321[(2)] = null);

(statearr_32901_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var inst_32822 = (state_32860[(8)]);
var inst_32838 = cljs.core.vec(inst_32822);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32860__$1,(11),out,inst_32838);
} else {
if((state_val_32861 === (5))){
var inst_32833 = (state_32860[(11)]);
var inst_32823 = (state_32860[(7)]);
var inst_32828 = (state_32860[(9)]);
var inst_32822 = (state_32860[(8)]);
var inst_32832 = (inst_32822[inst_32823] = inst_32828);
var inst_32833__$1 = (inst_32823 + (1));
var inst_32834 = (inst_32833__$1 < n);
var state_32860__$1 = (function (){var statearr_32905 = state_32860;
(statearr_32905[(12)] = inst_32832);

(statearr_32905[(11)] = inst_32833__$1);

return statearr_32905;
})();
if(cljs.core.truth_(inst_32834)){
var statearr_32906_34325 = state_32860__$1;
(statearr_32906_34325[(1)] = (8));

} else {
var statearr_32907_34326 = state_32860__$1;
(statearr_32907_34326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (14))){
var inst_32853 = (state_32860[(2)]);
var inst_32854 = cljs.core.async.close_BANG_(out);
var state_32860__$1 = (function (){var statearr_32909 = state_32860;
(statearr_32909[(13)] = inst_32853);

return statearr_32909;
})();
var statearr_32910_34332 = state_32860__$1;
(statearr_32910_34332[(2)] = inst_32854);

(statearr_32910_34332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32844 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32911_34333 = state_32860__$1;
(statearr_32911_34333[(2)] = inst_32844);

(statearr_32911_34333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32833 = (state_32860[(11)]);
var inst_32822 = (state_32860[(8)]);
var tmp32908 = inst_32822;
var inst_32822__$1 = tmp32908;
var inst_32823 = inst_32833;
var state_32860__$1 = (function (){var statearr_32918 = state_32860;
(statearr_32918[(7)] = inst_32823);

(statearr_32918[(8)] = inst_32822__$1);

return statearr_32918;
})();
var statearr_32919_34334 = state_32860__$1;
(statearr_32919_34334[(2)] = null);

(statearr_32919_34334[(1)] = (2));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_32928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32928[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_32928[(1)] = (1));

return statearr_32928;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32860){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32860);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e32931){if((e32931 instanceof Object)){
var ex__29371__auto__ = e32931;
var statearr_32932_34335 = state_32860;
(statearr_32932_34335[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34336 = state_32860;
state_32860 = G__34336;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_32938 = f__29656__auto__();
(statearr_32938[(6)] = c__29655__auto___34301);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32943 = arguments.length;
switch (G__32943) {
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
var c__29655__auto___34349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29656__auto__ = (function (){var switch__29367__auto__ = (function (state_32994){
var state_val_32995 = (state_32994[(1)]);
if((state_val_32995 === (7))){
var inst_32990 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33005_34350 = state_32994__$1;
(statearr_33005_34350[(2)] = inst_32990);

(statearr_33005_34350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (1))){
var inst_32949 = [];
var inst_32950 = inst_32949;
var inst_32951 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32994__$1 = (function (){var statearr_33006 = state_32994;
(statearr_33006[(7)] = inst_32951);

(statearr_33006[(8)] = inst_32950);

return statearr_33006;
})();
var statearr_33007_34351 = state_32994__$1;
(statearr_33007_34351[(2)] = null);

(statearr_33007_34351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (4))){
var inst_32954 = (state_32994[(9)]);
var inst_32954__$1 = (state_32994[(2)]);
var inst_32955 = (inst_32954__$1 == null);
var inst_32956 = cljs.core.not(inst_32955);
var state_32994__$1 = (function (){var statearr_33008 = state_32994;
(statearr_33008[(9)] = inst_32954__$1);

return statearr_33008;
})();
if(inst_32956){
var statearr_33009_34352 = state_32994__$1;
(statearr_33009_34352[(1)] = (5));

} else {
var statearr_33010_34353 = state_32994__$1;
(statearr_33010_34353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (15))){
var inst_32984 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33011_34354 = state_32994__$1;
(statearr_33011_34354[(2)] = inst_32984);

(statearr_33011_34354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (13))){
var state_32994__$1 = state_32994;
var statearr_33016_34355 = state_32994__$1;
(statearr_33016_34355[(2)] = null);

(statearr_33016_34355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (6))){
var inst_32950 = (state_32994[(8)]);
var inst_32979 = inst_32950.length;
var inst_32980 = (inst_32979 > (0));
var state_32994__$1 = state_32994;
if(cljs.core.truth_(inst_32980)){
var statearr_33021_34356 = state_32994__$1;
(statearr_33021_34356[(1)] = (12));

} else {
var statearr_33022_34357 = state_32994__$1;
(statearr_33022_34357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (3))){
var inst_32992 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32994__$1,inst_32992);
} else {
if((state_val_32995 === (12))){
var inst_32950 = (state_32994[(8)]);
var inst_32982 = cljs.core.vec(inst_32950);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32994__$1,(15),out,inst_32982);
} else {
if((state_val_32995 === (2))){
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32994__$1,(4),ch);
} else {
if((state_val_32995 === (11))){
var inst_32958 = (state_32994[(10)]);
var inst_32954 = (state_32994[(9)]);
var inst_32969 = (state_32994[(2)]);
var inst_32973 = [];
var inst_32974 = inst_32973.push(inst_32954);
var inst_32950 = inst_32973;
var inst_32951 = inst_32958;
var state_32994__$1 = (function (){var statearr_33027 = state_32994;
(statearr_33027[(11)] = inst_32969);

(statearr_33027[(7)] = inst_32951);

(statearr_33027[(12)] = inst_32974);

(statearr_33027[(8)] = inst_32950);

return statearr_33027;
})();
var statearr_33028_34364 = state_32994__$1;
(statearr_33028_34364[(2)] = null);

(statearr_33028_34364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (9))){
var inst_32950 = (state_32994[(8)]);
var inst_32967 = cljs.core.vec(inst_32950);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32994__$1,(11),out,inst_32967);
} else {
if((state_val_32995 === (5))){
var inst_32951 = (state_32994[(7)]);
var inst_32958 = (state_32994[(10)]);
var inst_32954 = (state_32994[(9)]);
var inst_32958__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32954) : f.call(null,inst_32954));
var inst_32959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32958__$1,inst_32951);
var inst_32960 = cljs.core.keyword_identical_QMARK_(inst_32951,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32961 = ((inst_32959) || (inst_32960));
var state_32994__$1 = (function (){var statearr_33031 = state_32994;
(statearr_33031[(10)] = inst_32958__$1);

return statearr_33031;
})();
if(cljs.core.truth_(inst_32961)){
var statearr_33032_34365 = state_32994__$1;
(statearr_33032_34365[(1)] = (8));

} else {
var statearr_33033_34366 = state_32994__$1;
(statearr_33033_34366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (14))){
var inst_32987 = (state_32994[(2)]);
var inst_32988 = cljs.core.async.close_BANG_(out);
var state_32994__$1 = (function (){var statearr_33036 = state_32994;
(statearr_33036[(13)] = inst_32987);

return statearr_33036;
})();
var statearr_33037_34367 = state_32994__$1;
(statearr_33037_34367[(2)] = inst_32988);

(statearr_33037_34367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (10))){
var inst_32977 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33039_34368 = state_32994__$1;
(statearr_33039_34368[(2)] = inst_32977);

(statearr_33039_34368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (8))){
var inst_32958 = (state_32994[(10)]);
var inst_32954 = (state_32994[(9)]);
var inst_32950 = (state_32994[(8)]);
var inst_32963 = inst_32950.push(inst_32954);
var tmp33034 = inst_32950;
var inst_32950__$1 = tmp33034;
var inst_32951 = inst_32958;
var state_32994__$1 = (function (){var statearr_33040 = state_32994;
(statearr_33040[(14)] = inst_32963);

(statearr_33040[(7)] = inst_32951);

(statearr_33040[(8)] = inst_32950__$1);

return statearr_33040;
})();
var statearr_33041_34370 = state_32994__$1;
(statearr_33041_34370[(2)] = null);

(statearr_33041_34370[(1)] = (2));


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
var cljs$core$async$state_machine__29368__auto__ = null;
var cljs$core$async$state_machine__29368__auto____0 = (function (){
var statearr_33044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33044[(0)] = cljs$core$async$state_machine__29368__auto__);

(statearr_33044[(1)] = (1));

return statearr_33044;
});
var cljs$core$async$state_machine__29368__auto____1 = (function (state_32994){
while(true){
var ret_value__29369__auto__ = (function (){try{while(true){
var result__29370__auto__ = switch__29367__auto__(state_32994);
if(cljs.core.keyword_identical_QMARK_(result__29370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29370__auto__;
}
break;
}
}catch (e33045){if((e33045 instanceof Object)){
var ex__29371__auto__ = e33045;
var statearr_33046_34374 = state_32994;
(statearr_33046_34374[(5)] = ex__29371__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34375 = state_32994;
state_32994 = G__34375;
continue;
} else {
return ret_value__29369__auto__;
}
break;
}
});
cljs$core$async$state_machine__29368__auto__ = function(state_32994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29368__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29368__auto____1.call(this,state_32994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29368__auto____0;
cljs$core$async$state_machine__29368__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29368__auto____1;
return cljs$core$async$state_machine__29368__auto__;
})()
})();
var state__29657__auto__ = (function (){var statearr_33047 = f__29656__auto__();
(statearr_33047[(6)] = c__29655__auto___34349);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29657__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
