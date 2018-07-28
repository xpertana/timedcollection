const debug = require("debug")("zeitding:remove");
const { unset } = require("lodash"); 

function remove(key) {
    const collection = this.collection;
    unset(collection[key]);
    debug(collection);
    this.collection = collection;
    debug(`removed object at key ${key}`);
}

module.exports = remove;
