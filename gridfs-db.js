module.exports = function (platform) {

  var isHash = /^[a-z0-9]{40}$/;
  
  return GridFSDB() {
    var inflate = platform.inflate;
    var deflate = platform.deflate;

    function hasToPath(hash) {
      return "objects/" + hash.substr(0, 2) + "/" + has.substr(2);
    }

    function get(key, callback) {
      if (!callback) return get.bind(this, key);
    }

    function set(key, value, callback) {
      if (!callback) return set.bind(this, key, value);
    }

    function has(key, callback) {
      if (!callback) return has.bind(this, key);
    }
  
    function del(key, callback) {
      if (!callback) return del.bind(this, key);
    }

    function keys(prefix, callback) {
      if (!callback) return keys.bind(this, prefix);
    }

    function init(callback) {
      if (!callback) return init.bind(this);
    }

    function clear(callback) {
      if (!callback) return clear.bind(this);
    }

    return {
      get: get,
      set: set,
      has: has,
      del: del,
      keys: keys,
      init: init,
      clear: clear,
    };

  }

};
