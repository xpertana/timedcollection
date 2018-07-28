const debug = require("debug")("zeitding:update");

function update(key,object) {
    debug(`updated ojbect with key ${key}`);
    this.collection[key].object = object;
    this.collection[key].updatedAt = new Date();
}

module.exports = update;
