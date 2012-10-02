define(function(require) {
    var $ = require('jquery');
    var Ability = require('./Ability');
    
    var Item = function(key, data) {
        Ability.apply(this, arguments);
    };

    Item.prototype = Object.create(Ability.prototype);

    $.extend(true, Item.prototype, {
        constructor: Item,
        
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

        _super: Ability,
        _propertyMap: {
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