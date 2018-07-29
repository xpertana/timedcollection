const debug = require("debug")("zeitding:remove");
const { unset } = require("lodash"); 

function remove(key) {
    unset(this.collection,key);
    debug(`removed object at key ${key}`);
}

module.exports = remove;
