define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Hero = require('../entities/Hero');
    var config = require('dotaJS/config');
    
    var heroes = {};
    require([config.files.data.heroes], function(data) {
        heroes = data.DOTAHeroes;
    });

    var Heroes = function() {
        var base = new Hero('npc_dota_hero_base', heroes.npc_dota_hero_base);
        Collector.call(this, heroes, base);
    };

    Heroes.prototype = Object.create(Collector.prototype);

    $.extend(true, Heroes.prototype, {
        constructor: Heroes,
        skiplist: ['Version', 'npc_dota_hero_base'],
    });

    return new Heroes();
});