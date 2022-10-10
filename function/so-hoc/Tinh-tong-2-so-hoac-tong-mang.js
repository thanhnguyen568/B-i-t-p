//  Tong hai so -------------

function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Vui long nhap vao 2 so");
        return false;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ban phai nhap vao 2 so");
        return false;
    }

    document.getElementById('result').innerHTML = parseInt(num1) + num2;
}


//  Tong mang 1 chieu -------------

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

let array = [1, 5, 9, 10];
console.log(sumArray(array)); // 25

//  Tong Object -------------

// let numbers = {
//     number1 : 20,
//     number2 : 30
// };
//
// let sum = numbers.number1 + numbers.number2; // 50