const debug = require("debug")("agewatch");

// instance methods
const add = require("./src/add");
const clear = require("./src/clear");
const exists = require("./src/exists");
const remove = require("./src/remove");
const timeOut = require("./src/timeout");
const touch = require("./src/touch");
const update = require("./src/update");
const checkForTimeout = require("./src/checkForTimeout");

class ZeitDing {
  constructor(options) {
    const OPTIONS = options ? options : {};
    const { collection, timeoutsecs, checkinterval, cb } = OPTIONS;

    this.collection = collection ? collection : {};
    this.timeoutsecs = timeoutsecs ? timeoutsecs : 120;
    this.checkinterval = checkinterval ? checkinterval : 60;
    this.timeoutCallback = cb ? cb : (k, o) => console.log(`timeout key ${k}`);
    this.numTimeouts = 0;
    this.numChecks = 0;

    // bind instance methods
    this.add = add.bind(this);
    this.clear = clear.bind(this);
    this.exists = exists.bind(this);
    this.remove = remove.bind(this);
    this.timeout = timeOut.bind(this);
    this.touch = touch.bind(this);
    this.update = update.bind(this);
    this.checkForTimeout = checkForTimeout.bind(this);

    // set up check
    setInterval(this.checkForTimeout, this.checkinterval * 1000);
  }
}

module.exports = ZeitDing;
