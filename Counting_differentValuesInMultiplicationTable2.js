function differentValuesInMultiplicationTable2(n, m){
    let setNum = new Set();
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            setNum.add(i * j);
        }
    }

    return setNum.size;
}

console.log(differentValuesInMultiplicationTable2(3, 2));
