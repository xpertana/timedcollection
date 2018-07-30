const debug = require("debug")("zeitding:update");

function update(key,object) {
    // this either updates if found or adds the record if not found
    if (key in this.collection) {
        this.collection[key].object = object;
        this.collection[key].updatedAt = new Date();
        debug(`updated ojbect with key ${key}`);
    } else {
        this.add(key,object);
    }
}

module.exports = update;
