const debug = require("debug")("zeitding:touch");

function touch(key) {
  // just updates the updatedAt time
  this.collection[key].updatedAt = new Date();
  debug(`touched key ${key}`);
}

module.exports = touch;
