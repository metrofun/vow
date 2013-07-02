var Vow = require('../..');

module.exports = {
    fulfilled : function(val) {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });
        resolver.fulfill(val);
        return promise;
    },

    rejected : function(reason) {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });
        resolver.reject(reason);
        return promise;  
    },

    pending : function() {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });
        return {
            promise : promise,
            
            fulfill : function(val) {
                resolver.fulfill(val);
            },

            reject : function(reason) {
                resolver.reject(reason);
            }
        };
    }
};