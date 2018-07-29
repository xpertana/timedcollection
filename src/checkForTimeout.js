const { each } = require("lodash");
const { isAfter, addSeconds } = require("date-fns");
const debug = require("debug")("zeitding:checkForTimeout");

function checkForTimeout() {
    this.numChecks++;
    debug(`check ${this.numChecks} - ${this.numTimeouts} timeouts`);
    let now = new Date();
    each(this.collection, (item, k) => {
        let timedOutTime = addSeconds(item.updatedAt, this.timeoutsecs);
        if (isAfter(now,timedOutTime)) this.timeout(k);
    })

}

module.exports = checkForTimeout;
