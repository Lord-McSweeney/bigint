function addmINT(strng1, strng2) {
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
            a = strng1[i];
            b = strng2[i];
            c = parseInt(a) + parseInt(b) + 1;
            if (c >= 10) {
                carry = 1;
                strng3[i] = c.toString()[1];
            } else {
                strng3[i] = c.toString()[0];
            }
        } else {
            a = strng1[i];
            b = strng2[i];
            c = parseInt(a) + parseInt(b);
            if (c >= 10) {
                carry = 1;
                strng3[i] = c.toString()[1];
            } else {
                strng3[i] = c.toString()[0];
            }
        }
    }
    d = strng3.join("").split("-")[0];
    return d.replace(/^0+/g, '');
}

module.exports = addmINT;

