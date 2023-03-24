exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        let control = { char: undefined, count: undefined };
        let result = "";
        for (let sym of str) {
            if (sym != control.char) {
                control.char = sym;
                control.count = 1;
                result += sym;
                continue;
            }
            if (control.count == amount) continue;
            control.count += 1;
            result += sym;
        }
        return result;
    },

    wordWrap: function (str, cols) {
        let words = str.split(" ");
        let result = words[0];
        let count = words[0].length;
        for (let i = 1; i < words.length; i++) {
            if (count + words[i].length + 1 > cols) {
                result += "\n" + words[i];
                count = words[i].length;
                continue;
            }
            result += " " + words[i];
            count += words[i].length + 1;
        }
        return result;
    },

    reverseString: function (str) {
        return Array.from(str).reverse().join("");
    },
};
