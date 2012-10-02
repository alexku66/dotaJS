define(function(require, exports, module) {
    var $ = require('jquery');
    var Mustache = require('mustache');
    var Translator = require('./lib/Translator');
    var Heroes = require('./lib/collections/Units');
    //var Items = require('./lib/collections/Items');
    //var Abilities = require('./lib/collections/Abilities');
    
    // Load config file and set user-defined values
    var config = require('./config');
    $.extend(true, config, module.config());
        
    print(JSON.stringify(Heroes.collection, null, 4));
    return;
    require([
             'text!./bin/templates/joinDota/test.mustache'
             ], function(html) {
        var view = {
            heroes: Heroes.collection,
            image: $.noop,
            name: function() {return Translator(this.key);},
            attribute: function() {return Translator(this.attributes.primary);},
            role: function() {
                return $.map(this.roles.role, function(value) {
                     return Translator(value);
                }).join(', ');
            },
        };
        var out = Mustache.render(html, view);
        print(out);
    });
});