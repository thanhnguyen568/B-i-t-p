//Yeu cau 1
//Bai 1
function case1() {

    let draw = "";
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 5; j++) {
            if (i === 1 || i === 4 || j === 1 || j === 5) {
                draw += "*";
            } else {
                draw += "&nbsp&nbsp";
            }
        }
        draw += "<br>";
    }
    document.getElementById("1").innerHTML = draw;
}

//Bai 2
function case2() {

    let draw = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            if (i === 3 && j === 2 || i === 4 && j === 2 || i === 4 && j === 3) {
                draw += "&nbsp&nbsp";
            } else {
                draw += "*";
            }
        }
        draw += "<br>";
    }
    document.getElementById("1").innerHTML = draw;
}

//Bai 3
function case3() {

    let draw = "";
    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 2 * 6 - 1; j++) {
            if (j < (6 - 1 + i) && j > (6 - 1 - i)) {
                draw += "*";
            } else {
                draw += "&nbsp&nbsp";
            }
        }
        draw += "<br>";
    }
    document.getElementById("1").innerHTML = draw;
}

//Bai 4
function case4() {

    let draw = "";
    let m = 6;
    let n = 6;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 2 * 6 - 1; j++) {
            if (j === m || j === n || i === 6) {
                draw += "*";
            } else {
                draw += "&nbsp&nbsp";
            }
        }
        m--;
        n++;
        draw += "<br>";
    }
    document.getElementById("1").innerHTML = draw;
}

//Yeu cau 2
//Bai 1
function case5() {

    let n = prompt("Nhap luong nhan vien chua the: ");
    console.log(n);
    let salary = 0;
    let tax = 0;

    if (n >= 15000) {
        tax = n * 0.2;
    } else if (15000 > n && n >= 7000) {
        tax = n * 0.1;
    } else {
        tax = n * 0.05;
    }
    salary = n - tax;
    // document.writeln("Luong thuc nhan la: " + salary + "<br>" + "Thue: " + tax);
    document.getElementById("2").innerHTML = "Luong thuc nhan la: " + salary + "<br>" + "Thue: " + tax;
}

//Bai 2
function case6() {


    let t;
    do {
        t = prompt("Nhap ky tu bat ky: ");
    } while (!isNaN(t));

    console.log(t);

    switch (t) {
        case "o":
        case "u":
        case "i":
        case "a":
        case "e":
        case "O":
        case "U":
        case "I":
        case "A":
        case "E":
            // document.writeln("Ky tu " + t + " la nguyen am");
            document.getElementById("2").innerHTML = "Ky tu: " + t + " la nguyen am";
            break;
        default:
            // document.writeln("Ky tu " + t + " la phu am");
            document.getElementById("2").innerHTML = "Ky tu: " + t + " khong phai la nguyen am";
            break;
    }
}

//Yeu cau 3
//Bai 1
function case7() {

    let n = parseInt(prompt("Nhap do dai của mang"));
    let a = [];
    let b = [];
    let prefix = 0;

    for (let i = 0; i < n; i++) {
        a[i] = parseInt(prompt("Nhap pt mang a"));
    }

    for (let i = 0; i < a.length; i++) {
        prefix += a[i];
        b.push(prefix);
    }
    document.getElementById("3").innerHTML = "Mang a: " + a + "<br>" + "Mang b: " + b;
}

//Bai 2
function case8() {

    let arrA = [7, 2, 5, 3, 5, 3];
    let arrB = [7, 2, 5, 4, 6, 3, 5, 3];
    let arrC = [];
    let index = 0;

    for (let i = 0; i < arrB.length; i++) {
        if (arrA.indexOf(arrB[i]) === -1) {
            index = i;
            arrC.push(arrB[i]);
        }
    }

    console.log(arrC);
    document.getElementById("3").innerHTML = "Phan tu mang B khong nam trong mang A la: " + arrC;

}

//Bai 3
function case9() {

    let numerators = [5, 2, 5];
    let denominators = [6, 3, 4];
    let temp1;
    let temp2;

    for (let i = 0; i < numerators.length; i++) {
        if (numerators[i] / denominators[i] > numerators[i + 1] / denominators[i + 1]) {
            temp1 = numerators[i];
            temp2 = denominators[i];
            numerators[i] = numerators[i + 1];
            denominators[i] = denominators[i + 1];
            numerators[i + 1] = temp1;
            denominators[i + 1] = temp2;
        }
    }
    console.log(numerators);
    console.log(denominators);
    document.getElementById("3").innerHTML = "Phan so lon nhat la: " + numerators[numerators.length - 1] + "/" + denominators[denominators.length - 1] +
        "<br>" + "Co chi so la: " + [numerators.length - 1];

}

//Bai 4
function case10() {


    let n;

    do {
        n = prompt("Nhap day so 1234");
    } while (isNaN(n));

    // let arr1 = Array.from(n);
    let arr1 = n.split("");

    console.log(arr1);

    let array;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "1") {
            array = "Một ";
        } else if (arr1[i] === "2") {
            array = "Hai "
        } else if (arr1[i] === "3") {
            array = "Ba "
        } else if (arr1[i] === "4") {
            array = "Bốn "
        }
        document.getElementById("<br>");
        document.getElementById("3").innerText += array;
    }
}

//Bai 5
function case11() {

    let cost = [0, 11, 12, 13, 14, 15, 16];
    let list = [0, "cafe", "Cam vat", "Nuoc ep ca rot", "Nuoc ep ca chua", "Nuoc loc", "Nuoc dua", "Thoat goi mon"];
    let menu;
    let quantity;
    let bill = [];
    let amount = 0;

    do {
        menu = parseInt(prompt("Nhap so tren menu: "));
        if (menu > 0 && menu < 7) {
            quantity = parseInt(prompt(list[menu] + " co gia la: " + cost[menu] + " nghin dong ! - " + "Nhap so luong mua: "));
            bill.push(quantity * cost[menu]);
            console.log(bill);
        } else if (menu === 7) {
            alert("Thoat chon mon !");
        }
    }
    while (menu !== 7);

    for (let i = 0; i < bill.length; i++) {
        amount += bill[i];
    }
    document.getElementById("3").innerHTML = amount + " nghin dong";
}

//Yeu cau 4
//Bai 1
function main() {

    function standardized(str) {

        let changeToArr = str.split(" ");
        let newArray = [];

        for (let i = 0; i < changeToArr.length; i++) {
            changeToArr[i] = changeToArr[i].toLowerCase()
            if (changeToArr[i] !== "") {
                newArray.push(changeToArr[i]);
            }
        }

        let standardizedArray = [];
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
            standardizedArray.push(newArray[i]);
        }
        return standardizedArray.join(" ");
    }

    function findStringMax(standardizedStr) {

        let lengthChar;
        let lengthOfArray = [];
        for (let i = 0; i < standardizedStr.length; i++) {
            lengthChar = standardizedStr[i].length;
            lengthOfArray.push(lengthChar);
        }

        for (let i = 0; i < lengthOfArray.length; i++) {
            if (lengthOfArray[i] < lengthOfArray [i + 1]) {
                let temp1 = lengthOfArray[i];
                lengthOfArray[i] = lengthOfArray[i + 1];
                lengthOfArray[i + 1] = temp1;
                let temp2 = standardizedStr[i];
                standardizedStr[i] = standardizedStr[i + 1];
                standardizedStr[i + 1] = temp2;
            }
        }
        return standardizedStr[0];
    }

    let str = prompt("Nhap ten can chuan hoa:");
    let standardString = standardized(str);
    let standardArray = standardString.split(" ");

    console.log(str);
    console.log(standardized(str));                                     // Nguyen Van Thanh
    console.log(findStringMax(standardArray));

    document.getElementById("4").innerHTML = "Chuoi ban dau: " + str + "<br>"
        + "Chuoi sau chuan hoa la: " + standardized(str) + "<br>"
        + "Ky tu dai nhat trong chuoi la: " + findStringMax(standardArray) + "<br>"
}

//Bai 2
function case12() {
    let s = "acbac";
    let arrayS = s.split("");
    let sortArrayS = arrayS.sort();     //a,a,b,c,c
    let count = 0;
    let result = "";

    for (let i = 0; i < sortArrayS.length; i++) {
        if (sortArrayS[i] !== sortArrayS [i + 1]) {
            result += sortArrayS[i] + " ";
            count++;
        }
    }
    document.getElementById("4").innerHTML = "Co " + count + " ki tu khac nhau la: " + result;
}

//Bai 3
// let s1 = "aabcc"
// let s2 = "adcaa"
// let s3 = s1.concat(s2);
// let array = s3.split("").sort()     //aaaaabcccd
//
//
// function removeDuplicate(arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (array.indexOf(arr[i]) === -1) {
//             array.push(arr[i]);
//         }
//     }
//     return array;           //a b c d
// }
// console.log(removeDuplicate(array));
// function cont() {
//
// }

//Bai 1
function case14() {

    function sumEvenNumber(array) {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j <= array.length; j++) {
                if (array[i][j] % 2 === 0) {
                    // console.log(array[i][j]);
                    sum += array[i][j];
                }
            }
        }
        return sum;
    }

    function array2D() {
        let numberM = parseInt(prompt("Nhap do dai hang m: "));
        let m = [];
        for (let i = 0; i < numberM; i++) {
            m[i] = parseInt(prompt("Nhap phan tu vi tri: " + i + " hang m"));
        }
        let numberN = parseInt(prompt("Nhap do dai hang n: "));
        let n = [];
        for (let i = 0; i < numberN; i++) {
            n[i] = parseInt(prompt("Nhap phan tu vi tri: " + i + " cot n"));
        }
        let arr = [];
        arr.push(m);
        arr.push(n);
        return arr;
    }

    let result = sumEvenNumber(array2D());
    document.getElementById("5").innerHTML = "Tong so chan mang 2 chieu da nhap la: " + result;
}
