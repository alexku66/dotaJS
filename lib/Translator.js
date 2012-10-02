define(function(require, exports, module) {
    var config = require('../config');

    var stringmap = {};
    require([config.files.stringmap], function(map) {
        stringmap = map;
    });
    
    var translations = {};

    function getKey(translation, key) {
        if (stringmap.hasOwnProperty(key)) key = stringmap[key];
        if (translation.hasOwnProperty(key))
            return translation[key];
        else if (translation.hasOwnProperty('[english]' + key))
            return translation['[english]' + key];
        else
            return 'Missing translation';
    }

    return function(key, language) {
        if (!language) language = config.language;

        if (!translations.hasOwnProperty(language)) {
            if (!config.files.translations[language])
                throw new Error('Missing translation for language ' + language);

            require([config.files.translations[language]], function(file) {
                translations[language] = file.lang.Tokens;
            });
        }

        return getKey(translations[language], key);
    };
});