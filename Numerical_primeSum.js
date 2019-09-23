function primeSum(n){
    let prime = 2;
    let listPrime = [];
    for(let i = 2; i <= n; i++) {
        if(i % prime != 0 || i == prime) {
            listPrime.push(i);
        };
    }
    

    for(let i = 1; i < listPrime.length; i++) {
        let j = 0;
        while(j < listPrime.length) {
            if(listPrime[j] % listPrime[i] == 0 && j != i) {
                listPrime.splice(j, 1);
            }
            j++;
        }
    }
    
    return listPrime.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(primeSum(100));
