exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn(...arr);
    },

    speak: function (fn, obj) {
        fn = fn.bind(obj);
        return fn();
    },

    functionFunction: function (str) {
        return function (str2) {
            return str + ", " + str2;
        };
    },

    makeClosures: function (arr, fn) {
        return arr.map(
            (val) =>
                function () {
                    return fn(val);
                }
        );
    },

    partial: function (fn, str1, str2) {
        return fn.bind(null, str1, str2);
    },

    useArguments: function () {
        return Array.from(arguments).reduce((sum, val) => sum + val, 0);
    },

    callIt: function (fn, ...args) {
        return fn(...args);
    },

    partialUsingArguments: function (fn, ...args) {
        return function (...args2) {
            return fn(...args, ...args2);
        };
    },

    curryIt: function (fn) {
        let arg = [];
        function f(a) {
            arg = arg.concat(a);
            if (arg.length == fn.length) {
                let result = fn(...arg);
                arg = [];
                return result;
            }
            return f;
        }
        return f;
    },
};
