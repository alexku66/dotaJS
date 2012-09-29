//define(['../entities/Base'], function(Base) {
define(function(require) {
    var Base = require('../entities/Base');
    
    var Collector = function(data, base) {
        if (!base instanceof Base) return;
        var collection = {};
        for ( var d in data) {
            if (this.skiplist.indexOf(d) >= 0) continue;
            var item = base.clone();
            item.populate(d, data[d]);
            collection[d] = item;
        }
        this.collection = collection;
    };

    Collector.prototype = {
        constructor: Collector,
        skiplist: null,
        collection: null,
    };
    return Collector;
});