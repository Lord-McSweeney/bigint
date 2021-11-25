var cmp = require("./cmp.js");

function submINT(strng1, strng2) {
    if (cmp(strng1, strng2) === "2") {
        return "ERR";
    }
    if (cmp(strng1, strng2) === "1") {
        return "0";
    }
    var longestString;
    var shortestString;
    if (strng1.length > strng2.length) {
        longestString = strng1;
        shortestString = strng2;
    } else {
        longestString = strng2;
        shortestString = strng1;
    }
    while (shortestString.length < 4096) {
        shortestString = "0" + shortestString;
    }
    while (longestString.length < 4096) {
        longestString = "0" + longestString;
    }
    if (strng1.length > strng2.length) {
        strng1 = longestString;
        strng2 = shortestString;
    } else {
        strng2 = longestString;
        strng1 = shortestString;
    }
    var carry = 0;
    var a;
    var b;
    var c;
    var d;
    var e;
    var strng3 = '----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'.split("");
    for (var i = longestString.length - 1; i >= 0; i --) {
        if (carry) {
            carry = 0;
            a = strng1[i] - 1;
            b = strng2[i];
            if (b > a) {
                carry = 1;
                strng3[i] = ((parseInt(a) + 10) - parseInt(b)).toString();
            } else {
                strng3[i] = (parseInt(a) - parseInt(b)).toString();
            }
        } else {
            a = strng1[i];
            b = strng2[i];
            if (b > a) {
                carry = 1;
                strng3[i] = ((parseInt(a) + 10) - parseInt(b)).toString();
            } else {
                strng3[i] = (parseInt(a) - parseInt(b)).toString();
            }
        }
    }
    d = strng3.join("").split("-")[0];
    e = d.replace(/^0+/g, '');
    return e === "" ? "0" : e;
}

module.exports = submINT;

