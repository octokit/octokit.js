var AbstractApi = exports.AbstractApi = function(api) {
    this.$api = api;
};

(function() {

    this.$createListener = function(callback, key) {
        return function(err, response) {
            if (err) {
                callback & callback(err);
                return;
            }
//            var sys = require("sys");
//            sys.debug("FOOO " + key + sys.inspect(response));

            callback(err, key ? response[key] : undefined);
        };
    };

}).call(AbstractApi.prototype);