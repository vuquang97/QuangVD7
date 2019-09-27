function formatString(input){
    let regex = /\b\w+/g;
    return input.match(regex).join(' ');
}

console.log(formatString('abc   a aa  a        a abcd'));