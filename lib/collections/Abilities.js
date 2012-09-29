//define(['jquery', './Collector', '../entities/Ability', '../../bin/data/npc_abilities'],
//       function($, Collector, Ability, abilities) {
define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Ability = require('../entities/Ability');
    var abilities = require('../../bin/data/npc_abilities');

    abilities = abilities.DOTAAbilities;

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