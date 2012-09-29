define(function(require) {
    var $ = require('jquery');
    var dotaJS = function(config) {};
    config.language = "de";
    
    // var data = require('abilities'); var baseAbility = new
    // Ability(data.DOTAAbilities.ability_base);
    // var defaultAttack = baseAbility.clone();
    // defaultAttack.populate(data.DOTAAbilities.default_attack);
    // print(JSON.stringify(defaultAttack));

    // print("----------------------------------------------------------");

    // var data = require('units'); var baseUnit = new
    // Unit(data.DOTAUnits.npc_dota_units_base);
    // var npc_dota_lone_druid_bear4 = baseUnit.clone();
    // npc_dota_lone_druid_bear4.populate(data.DOTAUnits.npc_dota_lone_druid_bear4);
    // print(JSON.stringify(npc_dota_lone_druid_bear4, null, 4));
    
    //var Items = require('./lib/collections/Items');

    //$.each(Items.collection, function(name, details) {
    //    print(name);
    //});
    //while (Items == undefined){print('sleep');}
    //print(Items, $);

    
    var language = require('./lib/language');
    return dotaJS;
});