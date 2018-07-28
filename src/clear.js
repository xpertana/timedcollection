const debug = require("debug")("zeitding:clear");

function clear() {
    this.collection = {};
    debug("collection cleared")
}

module.exports = clear;
