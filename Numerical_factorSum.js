function factorSum(n) {
    if (n == 4) {
        return n;
    }

    if (checkPrime(n)) {
        return n;
    }

    let sum = 0;
    let num = n;
    let i = 2;
    while (num > 1) {
        if (num % i == 0) {
            num /= i;
            sum += i;
            i = 2;
            continue;
        }
        i++;
    }

    if (checkPrime(sum)) return sum;
    else return factorSum(sum);
}

function checkPrime(num) { // kiểm tra số nguyên tố
    if (num == 0) return false;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) return false;
    }
    return true;
}