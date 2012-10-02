define(function(require) {
    var Base = require('../entities/Base');
    
    var Collector = function(data, base) {
        if (!base instanceof Base) return;
        var collection = [];
        var i = 0;
        for (var d in data) {
            if (this.skiplist.indexOf(d) >= 0) continue;
            
            var item = base.clone();
            item.key = d;
            item.position = i++;
            item.populate(data[d]);
            collection.push(item);
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