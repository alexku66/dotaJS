define(['jquery'], function($) {
    var Base = function() {
        if (arguments.length === 1 && arguments[0] instanceof Object) {
            this.populate(arguments[0]);
        }
        return this;
    };

    Base.prototype = {
        constructor: Base,
        _propertyMap: null,

        clone: function() {
            var klone = new this.constructor();
            $.extend(true, klone, this);
            delete klone._propertyMap;
            return klone;
        },
        populate: function(data, propertyMap) {
            // If no propertyMap was passed use the map of the object
            if (propertyMap === undefined) propertyMap = this._propertyMap;

            var obj = this;
            $.each(propertyMap, function(property, mapping) {
                // Default callback function, just returns the value
                var callback = function(s) {
                    return s;
                };

                if (typeof (mapping) === 'object') {
                    // If a custom callback function is defined use it
                    if (mapping.callback) callback = mapping.callback;

                    // If the property consumes more than one key from
                    // the data source.
                    if (mapping.multiKey) {
                        var values = [];
                        $.each(mapping.properties, function(index, mapping) {
                            if (data.hasOwnProperty(mapping)) {
                                var value = callback.call(obj, data[mapping]);
                                if (value) values.push(value);
                            }
                        });
                        obj[property] = values;
                        return;
                    }
                    // If it is a "subobject" populate it through its
                    // own propertyMap.
                    // Calling Base.prototype.populate since subobjects
                    // that contain subobjects do not inherit from Base
                    // and therefore dont have a populate method
                    else if (!mapping.property) {
                        // Extending a copy of the "suboject" to assure
                        // that there are problems with references to objects
                        obj[property] = Base.prototype.populate
                                .call($.extend(true, {}, obj[property]), data,
                                      mapping);
                        return;
                    }
                    else {
                        mapping = mapping.property;
                    }
                }

                if (data.hasOwnProperty(mapping)) {
                    obj[property] = callback.call(obj, data[mapping]);
                }
                return;
            });
            return this;
        },
    };
    return Base;
});