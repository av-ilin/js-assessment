exports = typeof window === "undefined" ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        switch (true) {
            case num % 3 == 0 && num % 5 == 0:
                return "fizzbuzz";
            case num % 3 == 0:
                return "fizz";
            case num % 5 == 0:
                return "buzz";
            default:
                return typeof num == "number" ? num : false;
        }
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number
    },
};
