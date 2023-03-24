exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    },

    manipulateRemoteData: function (url) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => data.people.map((people) => people.name).sort());
    },
};
