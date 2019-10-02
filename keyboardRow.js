function keyboardRow(words){

    return words.filter(el => checkWord(el));
}

function checkWord(word) {
    let checkRow1 = /[asdfghjklzxcvbnm]/i;
    let checkRow2 = /[qwertyuiopzxcvbnm]/i;
    let checkRow3 = /[qwertyuiopasdfghjkl]/i;

    return checkRow1.test(word) && checkRow2.test(word) && checkRow3.test(word) ? false : true;
}

console.log(keyboardRow(["Hello", "Alaska", "Dad", "Peace"]));

// console.log(/[qwertyuiopzxcvbnm]/i.test("Alaska"))
