function charactersRearrangement(string1, string2){

    let sum1 = sum2 = 0;
    if(string1.length != string2.length) {
        return false;
    }

    for(let i = 0; i < string1.length; i++) {
        sum1 += string1.charCodeAt(i);
        sum2 += string2.charCodeAt(i);
    }
    
    return sum1 == sum2 ? true : false;
}

console.log(charactersRearrangement('abcd', 'abcv'))
