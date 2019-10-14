function differentSymbolsNaive(s){
    let setSymbol = new Set([...s]);
    
    return setSymbol.size;
}

console.log(differentSymbolsNaive('cabca'))
