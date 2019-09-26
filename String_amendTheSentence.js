function amendTheSentence(s){
    let regex = /[a-z]+|[A-Z][a-z]+|[A-Z]/g;
    return s.match(regex).join(' ');
}

console.log(amendTheSentence('AvvSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG'));