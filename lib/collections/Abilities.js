define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Ability = require('../entities/Ability');
    var config = require('dotaJS/config');
    
    var abilities = {};
    require([config.files.data.abilities], function(data) {
        abilities = data.DOTAAbilities;
    });

    var Abilities = function() {
        var base = new Ability('ability_base', abilities.ability_base);
        Collector.call(this, abilities, base);
    };

    Abilities.prototype = Object.create(Collector.prototype);

    $.extend(true, Abilities.prototype, {
        constructor: Abilities,
        skiplist: ['Version', 'ability_base'],
    });

    return new Abilities();
});