function numberZeroDigits(n) {
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
       count +=  parseInt(n / i);
    }
    return count;
}
console.log(numberZeroDigits(10));