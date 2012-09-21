define(['jquery', './lib/collections/Heroes', './lib/collections/Units'], function ($, Heroes, Units){
	/**
	var data = require('abilities');
	var baseAbility = new Ability(data.DOTAAbilities.ability_base);
	var defaultAttack = baseAbility.clone();
	defaultAttack.populate(data.DOTAAbilities.default_attack);
	print(JSON.stringify(defaultAttack));
	
	print("----------------------------------------------------------");
	
	/**
	
	var data = require('units');
	var baseUnit = new Unit(data.DOTAUnits.npc_dota_units_base);
	var npc_dota_lone_druid_bear4 = baseUnit.clone();
	npc_dota_lone_druid_bear4.populate(data.DOTAUnits.npc_dota_lone_druid_bear4);
	print(JSON.stringify(npc_dota_lone_druid_bear4, null, 4));
	
	/**/
	//print(Heroes);
	$.each(Heroes.collection, function(name, details) {
	    print(name);
	});
	
    /**/
	return '';
});