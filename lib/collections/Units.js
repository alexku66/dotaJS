//define(['jquery', './Collector', '../entities/Unit', '../../bin/data/npc_units'],
//       function($, Collector, Unit, units) {
define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Unit = require('../entities/Unit');
    var units = require('../../bin/data/npc_units');
    units = units.DOTAUnits;

    var Units = function() {
        var base = new Unit('npc_dota_units_base', units.npc_dota_units_base);
        Collector.call(this, units, base);
    };

    Units.prototype = Object.create(Collector.prototype);

    $.extend(true, Units.prototype, {
        constructor: Units,
        skiplist: ['Version', 'npc_dota_units_base'],
    });

    return new Units();
});