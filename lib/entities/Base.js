define(['jquery'], function($) {
    var Base = function(key, data) {
        if (typeof key === 'string') this.key = key;
        if (typeof data === 'object') this.populate(data);
    };

    Base.prototype = {
        constructor: Base,
        key: '',
        position: 0,
        _super: null,
        _propertyMap: null,

        clone: function() {
            var klone = new this.constructor(this.key);
            $.extend(true, klone, this);
            delete klone._propertyMap, klone._super;
            return klone;
        },

        populate: function(data, propertyMap) {
            // If no propertyMap was passed use the map of the object
            if (propertyMap === undefined) propertyMap = this._propertyMap;

            // Build full property map including maps of parent elements
            if (this.prototype) {
                var parent = this._super || false;
                while (parent) {
                    if (parent._propertyMap)
                        // Having to merge into an empty array to make sure that
                        // later mappings are not overwritten by earlier mappings
                        propertyMap = $.merge([], parent._propertyMap, propertyMap);

                    parent = parent._super;
                }
            }

            // Storing this in obj to allow acces to it in the each loop
            var obj = this;
            $.each(propertyMap, function(property, mapping) {
                // Default callback function, just returns the value
                var callback = function(s) {
                    return s;
                };

                if (typeof mapping === 'object') {
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
                        // that there are no problems with references to objects
                        var subobject = $.extend(true, {}, obj[property]);
                        obj[property] = Base.prototype.populate.call(subobject,
                                                                     data,
                                                                     mapping);
                        return;
                    }
                    // Simple mapping only with a custom callback function
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