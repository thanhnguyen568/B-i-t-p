let ages = [3, 10, 19, 20];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    let age = ages.find(checkAdult);
}

// let ages = [3, 10, 19, 20];
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// function myFunction() {
//     let age = ages.find(checkAdult);
// }
// Kết quả sẽ trả về là 2, tại vì phần tử có chỉ mục 2 có giá trị lớn hơn 18.