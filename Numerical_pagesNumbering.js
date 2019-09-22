function pagesNumbering(n) {
    if (n < 10) return n;

    let num = n;
    let i = 10;
    let sum = 0;

    while (num >= 10) {
        if (num < i) {
            i /= 10;
            let str = num.toString().split('');
            let numchild = num - i + 1; //số các số có độ dài lớn nhất
            sum += (num - i + 1) * str.length;
            num = num - numchild;
            if (num < 10) {
                sum += num;
                break;
            }

            i = 10;
            continue;
        }
        i *= 10;
    }
    return sum;
}

console.log(pagesNumbering(1111));