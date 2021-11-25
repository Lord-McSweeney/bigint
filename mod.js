var add = require("./add.js");
var cmp = require("./cmp.js");
var sub = require("./sub.js");

function modmINT(strng1, strng2) {
    var res = strng1;
    var count = strng2;
    var curcount = "0";
    var i = 0;
    var a;
    while (i < 65536) {
        a = res;
        res = submINT(res, strng2);
        if (res === "ERR") {
            return a;
        }
        if (cmpmINT(res, "0") === "1") {
            return "0";
        }
        curcount = addmINT(curcount, "1");
        i ++;
    }
    return "ERR";
}

module.exports = modmINT;

