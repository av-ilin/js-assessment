exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce((sum, item) => sum + item, 0);
    },

    remove: function (arr, item) {
        let index = arr.indexOf(item);
        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }
        return arr;
    },

    removeWithoutCopy: function (arr, item) {
        return this.remove(arr, item);
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        return arr.filter((elem) => item == elem).length;
    },

    duplicates: function (arr) {
        return [
            ...new Set(arr.filter((item, i) => arr.indexOf(item, i + 1) != -1)),
        ];
    },

    square: function (arr) {
        return arr.map((item) => Math.pow(item, 2));
    },

    findAllOccurrences: function (arr, target) {
        let indeces = [];
        let index = arr.indexOf(target);
        while (index > -1) {
            indeces.push(index);
            index = arr.indexOf(target, index + 1);
        }
        return indeces;
    },
};
