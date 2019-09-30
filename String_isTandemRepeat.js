function isTandemRepeat(inputString) {
    let stringLen = inputString.length;

    if (stringLen % 2 != 0) return false;

    for (let i = 0; i < stringLen / 2; i++) {
        if (inputString[i] != inputString[stringLen / 2 + i]) return false;
    }
    return true;
}

console.log(isTandemRepeat('ppp'));
