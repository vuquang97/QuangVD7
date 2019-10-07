function countSolution(n, m) {
    for (let a = 0; a <= Math.sqrt(n); a++) {
        let b = n - a * a;
        if (Math.sqrt(m - a) == b) return 1;
    }
    return 0;
}
console.log(countSolution(102, 595));