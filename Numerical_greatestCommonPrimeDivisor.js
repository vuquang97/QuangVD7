function checkPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function greatestCommonPrimeDivisor(a, b) {
    let numMin = a > b ? b : a;
    let numMax = a > b ? a : b;
    let arrDivisor = [];

    for (let i = 2; i <= numMin / 2; i++) {
        if (numMin % i == 0 && numMax % i == 0) arrDivisor.push(i);
    }

    if (arrDivisor.length < 1) return -1;

    let commonPrime = arrDivisor.filter(num => {
        return checkPrime(num);
    });


    return commonPrime.length > 0 ? Math.max(...commonPrime) : -1;
}