/*Hàm tìm số đảo ngược trong JavaScript*/
function reverse_num(n) {
    n = n.toString()
    return n.split("").reverse().join("");
}

/*Ứng dụng Hàm tìm số đảo ngược để tạo Hàm kiểm tra số đối xứng trong JavaScript*/
function symmetrical_num(n) {
    // flag = 1 => số đối xứng
    // flag = 0 => không phải số đối xứng

    let flag = 0;
    if (reverse_num(n) === n) flag = 1;
    return flag;
}
