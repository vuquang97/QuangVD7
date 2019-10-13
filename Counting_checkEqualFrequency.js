function checkEqualFrequency(inputArray) {
    let listSet = new Set(inputArray);
    let count1 = 0;
    let listSet2 = new Set();
    for (let i of listSet) {
        for (let j = 0; j < inputArray.length; j++) {
            if (i == inputArray[j]) {
                count1++
            }
        }
        listSet2.add(count1);
        count1 = 0;
    }

    if (listSet2.size != 1) return false

    return true;
}

console.log(checkEqualFrequency([1, 2, 2, 3, 1, 3, 2, 1, 3]));

