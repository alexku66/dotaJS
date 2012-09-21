define(['jquery', './Collector', './../Hero', '../../bin/data/npc_heroes'],
       function($, Collector, Hero, heroes) {
           heroes = heroes.DOTAHeroes;

           var Heroes = function() {
               var base = new Hero(heroes.npc_dota_hero_base);
               Collector.call(this, heroes, base);
           };

           Heroes.prototype = Object.create(Collector.prototype);

           $.extend(true, Heroes.prototype, {
               constructor: Heroes,
               skiplist: ['Version', 'npc_dota_hero_base'],
           });

           return new Heroes();
});