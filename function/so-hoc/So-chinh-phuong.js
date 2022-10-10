/*Hàm kiểm tra một số có phải là số nguyên hay không*/
function check_real_leteger_number(n) {
    //flag = 1 => số nguyên
    //flag = 0 => số thực

    let flag = 1;
    if (Math.ceil(n) !== Math.floor(n)) flag = 0;
    return flag;
}

/*Hàm kiểm tra một số có phải là số chính phương hay không*/
function find_square_number(n) {
    //flag = 1 => số chính phương
    //flag = 0 => không phải số chính phương

    let flag = 0;
    //Kiểm tra căn bậc 2 của số đó có phải là số nguyên hay không
    if (check_real_leteger_number(Math.sqrt(n))) flag = 1;
    return flag;
} 
