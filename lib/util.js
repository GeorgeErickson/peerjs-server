
var util = {
  debug: false,
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend: function(dest, source) {
    for(var key in source) {
      if(source.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
    return dest;
  },
  randomId: function () {
    return Math.random().toString(36).substr(2);
  },
  prettyError: function (msg) {
    if (util.debug) {
      console.log('ERROR PeerServer: ', msg);
    }
  },
  log: function() {
    if (util.debug) {
      var copy = [];
      for (var i = 0; i < arguments.length; i += 1) {
        copy[i] = arguments[i];
      }
      console.log.apply(console, copy);
    }
  },
  allowCrossDomain: function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', "http://localhost:9001");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    next();
  }
};

// if node
module.exports = util;
// end node
