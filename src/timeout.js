const debug = require("debug")("zeitding:timeout");

function timeout(key) {
    this.timeoutCallback(this.collection[key].object);
    debug(`timed out and removed object key ${key}`);
    this.remove(key);
    this.numTimeouts++;
}

module.exports = timeout;