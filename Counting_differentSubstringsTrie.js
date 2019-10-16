function differentSubstringsTrie(inputString) {
    let arrStr = [ ...inputString ];
    let list = [];
    for(let i = 0; i< arrStr.length; i++) {
        list.push(arrStr[i]);
        let str = arrStr[i];
        for(let j = i+1; j<arrStr.length; j++) {
            str += arrStr[j];
            list.push(str);
        }
        str = 0;
    }
    return new Set(list).size;
}

console.log(differentSubstringsTrie('abac'))