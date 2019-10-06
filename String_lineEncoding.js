function lineEncoding(s){
    let str = s[0];
    let strNew = '';

    for(let i = 1; i< s.length; i++) {
        if (s[i] == str[0]) {
            str += s[i];
            
            if(i == s.length -1) {
                strNew += `${ str.length > 1 ? str.length : '' }${str[0]}`;
            }
        } else {
            strNew += `${ str.length > 1 ? str.length : '' }${str[0]}`;
            str = s[i];

            if(i == s.length -1) {
                strNew += s[i];
            }
        }
    }

    return strNew;
}

console.log(lineEncoding('abbcabb'));
