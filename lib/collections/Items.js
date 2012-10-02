define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Item = require('../entities/Item');
    var config = require('dotaJS/config');

    var items = {};
    var abilities = {};
    require([config.files.data.abilities, config.files.data.items], function(data, data2) {
        abilities = data.DOTAAbilities;
        items     = data2.DOTAAbilities;
    });

    var Items = function() {
        var base = new Item('ability_base', abilities.ability_base);
        Collector.call(this, items, base);
    };

    Items.prototype = Object.create(Collector.prototype);

    $.extend(true, Items.prototype, {
        constructor: Items,
        skiplist: ['Version'],
    });

    return new Items();
});