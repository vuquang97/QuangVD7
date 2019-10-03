function nearestPrime(n) {

    function isPrime(n) {
        if (n == 0) { return false; }
        else if (n == 1 || n == 2) {
            return true;
        } else if (n > 1) {
            for (var i = 2; i < n; i++) {
                if (n % i == 0) { return false; }
            }


        }
        return true;
    }

    if (isPrime(n)) { return n }
    let a = n + 1;
    let b = n - 1;
    let firstprime;
    let secondprime;
    while (a > n) {
        if (isPrime(a)) {
            firstprime = a;
            break;
        }
        a++;
    }
    while (b < n) {
        if (isPrime(b)) {
            secondprime = b;
            break;
        }
        b--;
    }
    if (Math.abs(firstprime - n) == Math.abs(secondprime - n)) return secondprime;
    return Math.abs(firstprime - n) > Math.abs(secondprime - n) ? secondprime : firstprime;


}
