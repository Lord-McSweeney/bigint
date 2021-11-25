function cmpmINT(strng1, strng2) {
    if (strng1.length > strng2.length) {
        return "0";
    } else if (strng2.length > strng1.length) {
        return "2";
    } else {
        for (var i = 0; i < strng1.length; i ++) {
            if (parseInt(strng1[i]) > parseInt(strng2[i])) {
                return "0";
            }
            if (parseInt(strng1[i]) < parseInt(strng2[i])) {
                return "2";
            }
        }
        return "1";
    }
}

module.exports = cmpmINT;

