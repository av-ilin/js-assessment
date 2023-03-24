exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        let bitPosition = bit - 1;
        return (num >> bitPosition) & 1;
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        let bits = [];
        for (let i = 7; i >= 0; i--) bits.push((num >> i) & 1);
        return bits.join("");
    },

    multiply: function (a, b) {
        let c1 = Math.pow(10, Math.floor(Math.log(a) * -1));
        let c2 = Math.pow(10, Math.floor(Math.log(b) * -1));
        a *= c1;
        b *= c2;
        return (a * b) / (c1 * c2);
    },
};
