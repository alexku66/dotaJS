define(function(require) {
    var $ = require('jquery');
    var Base = require('./Base');

    var Ability = function(key, data) {
        Base.apply(this, arguments);
    };

    Ability.prototype = Object.create(Base.prototype);

    $.extend(true, Ability.prototype, {
        constructor: Ability,

        id: 0,
        name: '',
        type: '',
        behavior: [],
        castrange: [],
        channeltime: [],
        cooldown: [],
        duration: [],
        damage: [],
        manacost: [],
        special: [],

        _super: Base,
        _propertyMap: {
            id: 'ID',
            name: 'AbilityName',
            type: 'AbilityType',
            behavior: {
                property: 'AbilityBehavior',
                callback: function(s) {
                    return s.split(' | ');
                },
            },
            castrange: {
                property: 'AbilityCastRange',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            channeltime: {
                property: 'AbilityChannelTime',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            cooldown: {
                property: 'AbilityCooldown',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            duration: {
                property: 'AbilityDuration',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            damage: {
                property: 'AbilityDamage',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            manacost: {
                property: 'AbilityManaCost',
                callback: function(s) {
                    return $.map(s.split(' '), function(value) {
                        return new Number(value);
                    });
                },
            },
            special: {
                property: 'AbilitySpecial',
                callback: function(s) {
                    var result = [];
                    $.each(s, function(index, value) {
                        result[new Number(index) - 1] = value;
                    });
                    return result;
                }
            },
        },
    });
    return Ability;
});