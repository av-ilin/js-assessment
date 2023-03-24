exports = typeof window === "undefined" ? global : window;
exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        let files = [];

        if (data.dir == dirName) dirName = undefined;

        for (let file of data.files) {
            if (typeof file == "object")
                files.push(...this.listFiles(file, dirName));
            else if (dirName == undefined) files.push(file);
        }

        return files;
    },

    permute: function (arr) {
        let permutation = [];

        function perm(arr, pos) {
            if (pos >= arr.length) {
                permutation.push([...arr]);
                return;
            } else
                for (let i = pos; i < arr.length; i++) {
                    arr[i] = [arr[pos], (arr[pos] = arr[i])][0];
                    perm(arr, pos + 1);
                    arr[i] = [arr[pos], (arr[pos] = arr[i])][0];
                }
        }

        perm(arr, 0);
        return permutation;
    },

    fibonacci: function (n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },

    validParentheses: function (n) {
        let parentheses = [];

        function getParentheses(cur, left, right) {
            if (right == 0) {
                parentheses.push(cur);
                return;
            }
            if (left > 0) getParentheses(cur + "(", left - 1, right);
            if (right > 0 && right > left)
                getParentheses(cur + ")", left, right - 1);
        }

        getParentheses("", n, n);
        return parentheses;
    },
};
