exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        let counter = {
            id: undefined,
            start: start,
            end: end,
            go() {
                console.log(this.start);
                let cur = start + 1;
                this.id = setInterval(() => {
                    console.log(cur);
                    cur++;
                    if (cur > this.end) clearInterval(this.id);
                }, 100);
            },
            cancel() {
                clearInterval(this.id);
            },
        };
        counter.go();
        return counter;
    },
};
