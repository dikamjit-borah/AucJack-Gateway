const moment = require("moment");
const constants = require("./constants");

module.exports = {
    simpleStringify: function (object) {
        var simpleObject = {};
        for (var prop in object) {
            if (!object.hasOwnProperty(prop)) {
                continue;
            }
            if (typeof (object[prop]) == 'object') {
                continue;
            }
            if (typeof (object[prop]) == 'function') {
                continue;
            }
            simpleObject[prop] = object[prop];
        }
        return JSON.stringify(simpleObject); // returns cleaned up JSON
    },
    logDatetime: function(){
        return moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    },
    logger: function(TAG, message){
        console.log(`[${this.logDatetime()}][${TAG}] ${message}`);
    },
    
}
