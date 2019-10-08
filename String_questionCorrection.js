function questionCorrection(s) {
    let regex = /[^a-zA-Z0-9,\s?]/g;
    var newStr = s.replace(regex, ' '); // thay thế ký tự không hợp lệ bằng khoảng trắng
    newStr = newStr.replace(/\?+/g, ''); // loại tất cả dấu hỏi
    newStr = newStr.replace(/[\s\s]+/g, ' '); // chuyển nhiều hơn 2 khoảng trắng về 1 khoảng trắng
    newStr = newStr.replace(/\s,+/g, ','); // loại bỏ khoảng trắng trước dấu ,
    newStr = newStr.replace(/,,+/g, ','); // chuyển nhiều hơn 2 dấu , thành 1 dấu ,
    newStr = newStr.replace(/,[^\s]/g, k => `${k[0]} ${k[1]}`); // sau dấu phẩy phải là 1 khoảng trắng
    newStr = newStr.toLowerCase(); // chuyển tất cả ký tự thành ký tự thường
    newStr = newStr.trim(); // loại bỏ khoảng trắng đầu cuối chuỗi
    newStr = newStr.replace(/^[a-z]/g, (k) => k.toUpperCase()); // ký tự đầu chuỗi viết hoa
    newStr += '?'; // thêm dấu hỏi cuối chuỗi
    newStr = newStr.replace(/[^a-zA-Z]\?/g, '?'); // trước dấu ? phải là 1 ký tự
    return newStr;
}

console.log(questionCorrection(' this  is nO?t . 34 3  ? / ,  relevant,question , is it,???. '))
