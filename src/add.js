const debug = require("debug")("zeitding:add");

function add(key, object) {
    this.collection[key] = {
        createdAt: new Date(),
        updatedAt: new Date(),
        object
    }
    debug(`added object at key ${key}`);
}

module.exports = add;
