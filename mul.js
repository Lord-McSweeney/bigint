var add = require("./add.js");
var cmp = require("./cmp.js");

function multmINT(strng1, strng2) {
    var res = "0";
    var count = strng2;
    var curcount = "0";
    var i = 0;
    while (cmp(count, curcount) === "0") {
        res = add(res, strng1);
        curcount = add(curcount, "1");
    }
    return res;
}

module.exports = multmINT;

