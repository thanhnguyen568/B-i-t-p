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
    document.getElementById("1").innerHTML = "Luong thuc nhan la: " + salary + "<br>" + "Thue: " + tax;
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
            document.getElementById("1").innerHTML = "Ky tu: " + t + " la nguyen am";
            break;
        default:
            // document.writeln("Ky tu " + t + " la phu am");
            document.getElementById("1").innerHTML = "Ky tu: " + t + " khong phai la nguyen am";
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
    document.getElementById("1").innerHTML = "Mang a: " + a + "<br>" + "Mang b: " + b;
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
    document.getElementById("1").innerHTML = "Phan tu mang B khong nam trong mang A la: " + arrC;

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
    document.getElementById("1").innerHTML = "Phan so lon nhat la: " + numerators[numerators.length - 1] + "/" + denominators[denominators.length - 1] +
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
        document.getElementById("1").innerText += array;
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
    document.getElementById("1").innerHTML = amount + " nghin dong";
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

    document.getElementById("1").innerHTML = "Chuoi ban dau: " + str + "<br>"
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
    document.getElementById("1").innerHTML = "Co " + count + " ki tu khac nhau la: " + result;
}

//Bai 3
function case13() {

    let s1 = "aabcc"
    let s2 = "adcaa"
    let arr = removeDuplicate(s1);
    console.log(arr);

    function removeDuplicate(str) {
        let newStr = str.split(" ").sort();
        let newArray = [];
        let element;
        newArray.push(newStr[0]);
        for (let i = 0; i < str.length; i++) {
            if (newStr[i] !== newStr[i + 1]) {
                element = newStr[i + 1];
                newArray.push(element);
            }
        }
        return newArray;
    }


}

//Yeu Cau 5
//Bai 1
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
    console.log(arr);
    return arr;
}

function case14() {
    let result = sumEvenNumber(array2D());
    document.getElementById("1").innerHTML = "Tong so chan mang 2 chieu da nhap la: " + result;
}

//Bai 2
function isPrime(number) {

    let flag = false;
    if (number === 2) {
        flag = true;
    } else if (number < 2) {
        flag = false;
    } else {
        for (let i = 0; i < number; i++) {
            flag = number % 2 !== 0;
        }
    }
    return flag;
}

function sumIsPrime(array) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (isPrime(array[i][j]) === true) {
                sum += array[i][j];
            }
        }
    }
    return sum;
}

function displayIsPrime(result) {

    let display = "";
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (isPrime(result[i][j]) === true) {
                display += result[i][j] + " ";
            }
        }
    }
    return display;
}

function case15() {
    let arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
    ];
    let sum = sumIsPrime(arr);
    let display = displayIsPrime(arr);
    document.getElementById("1").innerHTML = "Cac so nguyen to la: " + display
        + "<br>"
        + "Tong cac so nguyen to la: " + sum;
}

//Bai 3
function isMax(array2d) {

    let array = [];
    for (let i = 0; i < array2d.length; i++) {
        for (let j = 0; j < array2d[i].length; j++) {
            array.push(array2d[i][j]);
        }
    }
    let newArray = array.sort(function (a, b) {
        return a - b;
    })

    console.log(newArray);
    document.getElementById("1").innerHTML = "So nho nhat trong mang: " + newArray[0]
        + "<br>"
        + "So lon nhat trong mang: " + (newArray[newArray.length - 1]);

}

function case16() {
    let arr = [[1, 2, 3, 11, 5], [6, 12, 8, 1, 5, 10]];
    isMax(arr);
}

//Yeu cau 6
//OOP

class Students {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    setName(newName) {
        this.name = newName;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }
}

let studentA = new Students('Cong', 50, 'cong@codegym.vn');
let studentB = new Students('Trung', 40, 'trung@codegym.vn');

let arr = [studentA, studentB];

function add() {
    let studentC = new Students(prompt("name"),prompt("age"),prompt("email"));
    arr.push(studentC);
    return arr;
}

function display() {
    str = '<table border="1px">\n' +
        '<tr>\n' +
            '<th>Name</th>\n' +
            '<th>Age</th>\n' +
            '<th>Email</th>\n' +
            '<th>More</th>\n' +

        '</tr>\n'

    for (let i = 0; i < arr.length; i++) {
        str +=
            '<tr>\n' +
            '<td>' + arr[i].getName() + '</td>\n' +
            '<td>' + arr[i].getAge() + '</td>\n' +
            '<td>' + arr[i].getEmail() + '</td>\n' +
            '<td>' +
            '<button onclick="edit( ' + i + ' )">Edit</button>' +
            '<button onclick="remove( ' + i + ')">Remove</button>' +
            '</td>\n' +
            '</tr>\n'
    }
    str += '</table>'


    document.getElementById('1').innerHTML = str;
}

display();


function edit(index) {
    alert(index);
    let newName = prompt('enter the name');
    let newAge = prompt('enter the age');
    let newEmail = prompt('enter the email');


    arr[index].setName(newName);
    arr[index].setAge(newAge);
    arr[index].setEmail(newEmail);
    display();
}

function remove(value) {
    if (confirm('do you wanna remove it')) {
        arr.splice(value, 1);
    }
    display();
}
