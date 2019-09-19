function subtractNumber(a, b){
    let greaterNum = a > b ? a : b;
    let lessNum = a > b ? b : a;

    let count = 0;
    while(greaterNum != 0 && lessNum != 0) {
        let midNUm = greaterNum;
        greaterNum = greaterNum - lessNum;
        greaterNum = greaterNum > lessNum ? greaterNum : lessNum;
        lessNum = greaterNum < lessNum ? midNUm - lessNum : lessNum;

        count ++;

    }

    return count++;
}

console.log(subtractNumber(7, 5))
