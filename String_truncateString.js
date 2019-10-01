function truncateString(s){
    let len = s.length;

    if(len < 1) {
        return s;
    }

    if(s[0] % 3 == 0) {
        s = truncateString(s.slice(1));
    } else if(s[len - 1] % 3 == 0) {
        s = truncateString(s.slice(0, len - 1));
    } else if(( Number(s[0]) + Number(s[len - 1]) ) % 3 == 0) {
        s = truncateString(s.slice(1, len - 1));
    } else {
        s = s;
    }

    return s;
}

console.log(truncateString('57439552816'));