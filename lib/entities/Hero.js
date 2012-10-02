define(function(require) {
    var $ = require('jquery');
    var UnitBase = require('./UnitBase');
    
    var Hero = function(key, data) {
        UnitBase.apply(this, arguments);
    };

    Hero.prototype = Object.create(UnitBase.prototype);

    $.extend(true, Hero.prototype, {
        constructor: Hero,
        
        id: 0,
        enabled: false,
        level: 0,
        alias: '',
        url: '',
        roles: {
            role: [],
            level: [],
        },


        _super: UnitBase,
        _propertyMap: {
            id: 'HeroID',
            enabled: {
                property: 'Enabled',
                callback: function(s) {
                    return (s === '1');
                },
            },
            level: 'Level',
            alias: {
                property: 'NameAliases',
                callback: function(s) {
                    return $.map(s.split(';'), function(value) {
                        return $.trim(value);
                    });
                }
            },
            team: 'Team',
            url: 'url',
            roles: {
                role: {
                    property: 'Role',
                    callback: function(s) {
                        return s.split(',');
                    }
                },
                level: {
                    property: 'Rolelevels',
                    callback: function(s) {
                        return $.map(s.split(','), function(value) {
                            return new Number(value);
                        });
                    }
                }
            },
            abilities: {
                multiKey: true,
                properties: ['Ability1', 'Ability2', 'Ability3',
                             'Ability4', 'Ability5', 'Ability6',
                             'Ability7', 'Ability8', 'Ability9',
                             'Ability10', 'Ability11', 'Ability12',
                             'Ability13', 'Ability14', 'Ability15',
                             'Ability16']
            },
        }
    });
    return Hero;
});