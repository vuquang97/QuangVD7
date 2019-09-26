function checkPalindrome(inputString){
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] != inputString[inputString.length - i - 1]) {
            return false;
        } else if(i >= inputString.length - i - 1) {
            return true;
        }
    }
}

console.log(checkPalindrome("abba"))
