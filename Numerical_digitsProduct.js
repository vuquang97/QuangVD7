function digitsProduct(product) {
    let listResult = [];
    let divide = product;
    var i = 9;
    if(product == 0) {
        return 10;
    }
    while(i >= 1) {
        if(divide < 10) {
            listResult.unshift(divide);
            break;
        }

        if(divide % i == 0) {
            divide = divide / i;
            listResult.unshift(i);
            i = 9;
            continue;
        }

        
        i --;
    }

    return listResult.length < 1 ? -1 : Number(listResult.join(''));
}

console.log(digitsProduct(450));



// function digitsProduct(product) {
//     let listResult = [];
//     let divide = product;
//     var i = divide > 9 ? 9 : divide - 1;
//     if(product == 0) {
//         return 10;
//     }
//     while(i > 1) {
//         if(divide % i == 0) {
//             divide = divide / i;
//             listResult.unshift(i);
//             i = 9;
//             continue;
//         }
//         i --;
//     }
//     return listResult.length < 1 ? -1 : Number(listResult.join(''));
// }
