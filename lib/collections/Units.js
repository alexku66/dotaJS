define(function(require) {
    var $ = require('jquery');
    var Collector = require('./Collector');
    var Unit = require('../entities/Unit');
    var config = require('dotaJS/config');
    
    var units = {};
    require([config.files.data.units], function(data) {
        units = data.DOTAUnits;
    });

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