//define(['jquery', './Base'], function($, Base) {
define(function(require) {
    var $ = require('jquery');
    var Base = require('./Base');

    var Ability = function(data) {
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
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
                },
            },
            channeltime: {
                property: 'AbilityChannelTime',
                callback: function(s) {
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
                },
            },
            cooldown: {
                property: 'AbilityCooldown',
                callback: function(s) {
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
                },
            },
            duration: {
                property: 'AbilityDuration',
                callback: function(s) {
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
                },
            },
            damage: {
                property: 'AbilityDamage',
                callback: function(s) {
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
                },
            },
            manacost: {
                property: 'AbilityManaCost',
                callback: function(s) {
                    var result = [];
                    $.each(s.split(' '), function(index, value) {
                        result[index] = new Number(value);
                    });
                    return result;
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