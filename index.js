const debug = require("debug")("agewatch");

// instance methods
const add = require("./src/add");
const clear= require("./src/clear");
const remove = require("./src/remove");
const timeOut = require("./src/timeout");
const update = require("./src/update");
const checkForTimeout = require("./src/checkForTimeout");

class ZeitDing {
    constructor(options) {
        const OPTIONS = options ? options : {};
        const { collection, timeout, checkinterval, cb} = OPTIONS;

        this.collection = collection ? collection : {};
        this.timeout = timeout ? timeout : 120;
        this.checkinterval = checkinterval ? checkinterval : 60;
        this.timeoutCallback = cb ? cb : (k,o) => console.log(`timeout key ${k}`);



        // bind instance methods
        this.add = add;
        this.clear = clear;
        this.remove = remove;
        this.timeout = timeOut;
        this.update = update;
        this.checkForTimeout = checkForTimeout;

        // set up check
        setInterval(this.checkForTimeout, this.checkinterval * 1000);

    }
}

module.exports = ZeitDing;