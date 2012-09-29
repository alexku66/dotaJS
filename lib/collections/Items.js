//define(['jquery', './Collector', '../entities/Item', '../../bin/data/items', '../../bin/data/npc_abilities'],
//       function($, Collector, Item, items, abilities) {
define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Item = require('../entities/Item');
    var items = require('../../bin/data/items');
    var abilities = require('../../bin/data/npc_abilities');
    
    items = items.DOTAAbilities;
    abilities = abilities.DOTAAbilities;

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