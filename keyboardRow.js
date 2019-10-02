function keyboardRow(words){

    return words.filter(el => checkWord(el));
}

function checkWord(word) {
    let checkRow1 = /[asdfghjklzxcvbnm]/i.test(word);
    let checkRow2 = /[qwertyuiopzxcvbnm]/i.test(word);
    let checkRow3 = /[qwertyuiopasdfghjkl]/i.test(word);

    return checkRow1 && checkRow2 && checkRow3 ? false : true;
}

console.log(keyboardRow(["Hello", "Alaska", "Dad", "Peace"]));

// console.log(/[qwertyuiopzxcvbnm]/i.test("Alaska"))
