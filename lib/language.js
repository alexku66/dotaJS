define(function(require) {
    var language = require('../bin/translations/dota_english');
    language = language.lang.Tokens;
    return function(key) {
        if (language.hasOwnProperty(key)) return language[key];
        else return "Missing translation";
    };
});