let digits = ["khong", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin"];

function numberToString(a) {
    let result = "";
    if (a >= 1000000) {
        result += readMillion(a);
    } else if (a >= 1000) {
        result += readThousand(a);
    } else {
        result += readThree(a);
    }
    return result;
}

function readMillion(a) {
    let result = "";
    if (a >= 1000000) {
        let numDigit = a.toString().length;
        let millionsOf = Math.floor(a / 1000000);
        let thousandsOf = a % 1000000;
        if (numDigit <= 9) {
            result += readThousand(millionsOf) + " " + "trieu";
            switch (thousandsOf) {
                case 0:
                    break;
                default:
                    result += " " + readThousand(thousandsOf);
                    break;
            }
        }
    } else {
        result += readThousand(a);
    }
    return result;
}

function readThousand(a) {
    let result = "";
    if (a >= 1000) {
        let numDigit = a.toString().length;
        let thousandsOf = Math.floor(a / 1000);
        let hundredsOf = a % 1000;
        if (numDigit <= 6) {
            result += readThree(thousandsOf) + " " + "nghin";
            switch (hundredsOf) {
                case 0:
                    break;
                default:
                    result += " " + readThree(hundredsOf);
                    break;
            }
        }
    } else {
        result += readThree(a);
    }
    return result;
}

function readThree(a) {
    let numDigit = a.toString().length;
    let hundredsOf = Math.floor(a / 100);
    let tenthOf = a % 100;
    let result = "";
    if (numDigit == 3) {
        result += digits[hundredsOf] + " " + "tram";
        if (tenthOf < 10 && tenthOf > 0) {
            result += " " + "linh" + " " + readTwo(tenthOf);
        } else {
            switch (tenthOf) {
                case 0:
                    break;
                default:
                    result += " " + readTwo(tenthOf);
                    break;
            }
        }
    } else {
        result += readTwo(a);
    }
    return result;
}

function readTwo(a) {
    let numDigit = a.toString().length;
    let tenthOf = Math.floor(a / 10);
    let unit = a % 10;
    let result = "";
    if (numDigit == 2) {
        if (tenthOf == 1) {
            result += "muoi";
            switch (unit) {
                case 0:
                    break;
                case 5:
                    result += " " + "lam";
                    break;
                default:
                    result += " " + digits[unit];
                    break;
            }
        } else {
            result += digits[tenthOf] + " " + "muoi";
            switch (unit) {
                case 0:
                    break;
                case 4:
                    result += " " + "tu";
                    break;
                case 5:
                    result += " " + "lam";
                    break;
                default:
                    result += " " + digits[unit];
                    break;
            }
        }
    } else {
        result = digits[a];
    }
    return result;
}
