//define(['jquery', './Base'], function($, Base) {
define(function(require) {
    var $ = require('jquery');
    var Base = require('./Base');
    
    var Item = function(data) {
        Base.apply(this, arguments);
    };

    Item.prototype = Object.create(Base.prototype);

    $.extend(true, Item.prototype, {
        constructor: Item,

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
        cost: 0,
        charges: 0,
        cobinable: true,
        permanent: true,
        stackable: false,
        recipe: false,
        droppable: true,
        purchasable: true,
        sellable: true,
        requiresCharges: false,
        killable: true,
        disassemblable: false,
        shareability: [],

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
            cost: {
                property: "ItemCost",
                callback: function(s) {
                    return new Number(s);
                }
            },
            charges: {
                property: "ItemInitialCharges",
                callback: function(s) {
                    return (s === '1');
                }
            },
            cobinable: {
                property: "ItemCombinable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            permanent: {
                property: "ItemPermanent",
                callback: function(s) {
                    return (s === '1');
                }
            },
            stackable: {
                property: "ItemStackable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            recipe: {
                property:"ItemRecipe",
                callback: function(s) {
                    return (s === '1');
                }
            },
            droppable: {
                property: "ItemDroppable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            purchasable: {
                property: "ItemPurchasable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            sellable: {
                property:"ItemSellable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            requiresCharges: {
                property: "ItemRequiresCharges",
                callback: function(s) {
                    return (s === '1');
                }
            },
            killable: {
                property: "ItemKillable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            disassemblable: {
                property: "ItemDisassemblable",
                callback: function(s) {
                    return (s === '1');
                }
            },
            shareability: "ItemShareability",
        }
    });
    return Item;
});