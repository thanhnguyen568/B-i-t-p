//Bai 1
function calSquare(a) {

    let number1 = a * a;
    document.getElementById("1").value = +number1;
}

//Bai 2
function calArea(r) {

    const pi = 3.14159;
    let S = pi * r * r;
    let C = pi * r * 2;
    document.getElementById("2.1").value = +S;
    document.getElementById("2.2").value = +C;
}

//Bai 3
function calFact(n) {

    let result = n;
    if (n === 0 || n === 1) {
        result = 1;
    }
    while (n > 1) {
        n--;
        result *= n;
    }
    // for (n; n > 1; n--){
    //     result *=n;
    // }
    document.getElementById("3").value = result;
}

//Bai 4
function checkNumber(a) {

    let check;
    if (isNaN(a)) {
        check = false;
    } else
        check = true;
    document.getElementById("4").value = check;
}

//Bai 5
function findSmallest(...array5) {

    for (let i = 0; i < 3; i++) {
        array5[i] = prompt("Nhap phan tu thu: " + (i + 1));
    }

    let temp;
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 3; j++) {
            if (array5[i] < array5 [j]) {
                temp = array5[i];
                array5[i] = array5[j];
                array5[j] = temp;
            }
        }
    }
    console.log(array5);
    alert("So nho nhat la: " + array5[2]);
}

//Bai 6
function checkPositive(check) {

    let n = prompt("Nhap vao so nguyen: ");

    if (n > 0 && n % 1 === 0) {
        check = true;
    } else
        check = false;
    console.log(check);
}

//Bai 7
function swapNumber(a, b) {
    let array7 = [];
    a = prompt("Nhap so a: ");
    array7.push(a);
    b = prompt("Nhap so b: ");
    array7.push(b);
    console.log(array7);
    array7.reverse();
    console.log(array7);
}

//Bai 8
function swapArray(...array8) {

    let n = prompt("Nhap do dai cua mang")

    for (let i = 0; i < n; i++) {
        array8[i] = prompt("Nhap so thu " + i);

    }
    array8.reverse();
    console.log(array8);
}

//Bai 9
function checkString(...array9) {

    let str = prompt("Nhap do dai cua mang")
    for (let i = 0; i < str; i++) {
        array9[i] = prompt("Nhap ky tu vao mang")
    }

    let a = prompt("nhap ky can kiem tra")
    let count = 0;
    for (let i = 0; i < array9.length; i++) {
        if (a === array9[i]){
            count++;
            document.writeln(array9[i] + "<br>");
        }
        else {
            count = -1;
        }
    }
    document.writeln("so lan " + a + " xuat hien trong mang: " + count);
}