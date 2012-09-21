define(['jquery', './Collector', '../Ability', '../../bin/data/npc_abilities'],
       function($, Collector, Ability, abilities) {
           abilities = abilities.DOTAAbilities;

           var Abilities = function() {
               var base = new Ability(abilities.ability_base);
               Collector.call(this, abilities, base);
           };

           Abilities.prototype = Object.create(Collector.prototype);

           $.extend(true, Abilities.prototype, {
               constructor: Abilities,
               skiplist: ['Version', 'ability_base'],
           });

           return new Abilities();
       });