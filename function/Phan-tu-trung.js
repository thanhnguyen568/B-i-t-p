/*Tạo hàm kiểm tra phần tử trùng trong mảng JavaScript*/
function array_is_unique( array, size){
    //flag =  1 =>  tồn tại phần tử trùng nhau
    //flag =  0 =>  không tồn tại phần tử trùng nhau
    let flag = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i] === array[j]) {
                /*Tìm thấy 1 phần tử trùng là đủ và dừng vòng lặp*/
                flag = 1;
                break;
            }
        }
    }

    return flag;
}


//Khởi tạo mảng cần kiểm tra phần tử trùng nhau
let array1 = [1,2,3,3,2,5]; //Mảng chứa phần tử trùng nhau
let array2 = [1,2,3,4,5,6,7]; //Mảng không chứa phần tử trùng nhau


//Kiểm tra phần tử trùng nhau
let check1 = array_is_unique(array1,array1.length);
if (check1 === 1) console.log( "ton tai phan tu trung nhau");
else console.log( "khong ton tai phan tu trung nhau");


//Kiểm tra phần tử trùng nhau
let check2 = array_is_unique(array2,array2.length);
if (check2 === 1) console.log( "ton tai phan tu trung nhau");
else console.log( "khong ton tai phan tu trung nhau");
