var add = require("./add.js");
var cmp = require("./cmp.js");
var sub = require("./sub.js");

function divmINT(strng1, strng2) {
    var res = strng1;
    var count = strng2;
    var curcount = "0";
    var i = 0;
    while (i < 65536) {
        res = submINT(res, strng2);
        if (cmpmINT(res, "0") === "1") {
            return addmINT(curcount, "1");
        }
        if (res === "ERR") {
            return curcount;
        }
        curcount = addmINT(curcount, "1");
        i ++;
    }
    return "ERR";
}

module.exports = divmINT;

