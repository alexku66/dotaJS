define(function(require) {
    var $ = require('jquery');
    var UnitBase = require('./UnitBase');

    var Unit = function(key, data) {
        UnitBase.apply(this, arguments);
    };

    Unit.prototype = Object.create(UnitBase.prototype);

    $.extend(true, Unit.prototype, {
        constructor: Unit,

        level: 0,
        ancient: false,
        neutral: false,

        _super: UnitBase,
        _propertyMap: {
            level: 'Level',
            ancient: {
                property: 'IsAncient',
                callback: function(s) {
                    return (s === '1');
                },
            },
            neutral: {
                property: 'IsNeutralUnitType',
                callback: function(s) {
                    return (s === '1');
                },
            },
            team: 'TeamName',
        }
    });
    return Unit;
});