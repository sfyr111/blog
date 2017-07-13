/*throttle
创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
默认情况下，throttle将在你调用的第一时间尽快执行这个function，并且，如果你在wait周期内调用任意次数的函数，都将尽快的被覆盖。
如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。*/

var throttle = function (func, wait, options) {

    var timeout, context, args, result;
    // 最近一次func被调用的时间点
    var previous = 0;
    if (!options) options = {};

    // 创建一个延后执行的函数包裹住func的执行过程
    var later = function () {
        // 执行时，刷新最近一次调用时间
        previous = options.leading === false ? 0 : new Date();
        // 清空定时器
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    // 返回一个throttled的函数
    var throttled = function () {
        // ----- 节流函数开始执行----
        // 我们尝试调用func时，会首先记录当前时间戳
        var now = new Date();
        // 是否是第一次调用
        if (!previous && options.leading === false) previous = now;
        // func还要等待多久才能被调用 =  预设的最小等待期-（当前时间-上一次调用的时间）
        // 显然，如果第一次调用，且未设置options.leading = false，那么remaing=0，func会被立即执行
        var remaining = wait - (now - previous);
        // 记录之后执行时需要的上下文和参数
        context = this;
        args = arguments;

        // 如果计算后能被立即执行
        if (remaining <= 0 || remaining > wait) {
            // 清除之前的“最新调用”
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            // 刷新最近一次func调用的时间点
            previous = now;
            // 执行func调用
            result = func.apply(context, args);
            // 如果timeout被清空了，
            if (!timeout) context = args = null;

        } else if (!timeout && options.trailing !== false) {
            // 如果设置了trailing edge，那么暂缓此次调用尝试的执行
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    // 可以取消函数的节流化
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
};