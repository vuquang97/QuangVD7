function maxFraction(numerators, denominators){
    let index = 0;
    let maxFraction = numerators[0] / denominators[0];
    for(let i = 0; i < numerators.length; i++) {
        let fraction = numerators[i] / denominators[i];
        if(fraction > maxFraction) {
             maxFraction = fraction;
             index = i;
        }
    }

    return index;
}
