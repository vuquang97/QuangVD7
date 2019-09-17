function lastDigitDiffZero(n){
    let factorial = 1;

    for(let i = 1; i <= n; i++) {
        factorial *= i;
        while(factorial % 10 == 0) {
            factorial /= 10;
        }
        while(factorial > 1000) {
            factorial = factorial % 1000;
        }
    }
    console.log(factorial)

    return factorial % 10;
}

console.log(lastDigitDiffZero(55));
