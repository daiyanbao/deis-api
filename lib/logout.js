var request = require('request-json');
var format = require('util').format;

module.exports = function(deis) {
  return function(callback) {
    callback = callback || noop;

    deis.client = request.newClient(format('%s://%s', deis.protocol, deis.controller), {
      rejectUnauthorized: false
    });

    deis.token = null;

    callback(null);
  }
};