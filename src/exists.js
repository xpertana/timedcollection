const debug = require("debug")("zeitding:exists");

function exists(key) {
  return key in this.collection;
}

module.exports = exists;
