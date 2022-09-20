//Yeu cau 1
//Bai 1
function case1() {

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 5; j++) {
            if (i === 1 || i === 4 || j === 1 || j === 5) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp&nbsp");
            }
        }
        document.writeln("<br>");
    }
}

//Bai 2
function case2() {

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            if (i === 3 && j === 2 || i === 4 && j === 2 || i === 4 && j === 3) {
                document.writeln("&nbsp&nbsp");
            } else {
                document.writeln("*");
            }
        }
        document.writeln("<br>");
    }
}

//Bai 3
function case3() {

    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 2 * 6 - 1; j++) {
            if (j < (6 - 1 + i) && j > (6 - 1 - i)) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp&nbsp");
            }
        }
        document.writeln("<br>");
    }
}

//Bai 4
function case4() {

    let m = 6;
    let n = 6;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 2 * 6 - 1; j++) {
            if (j === m || j === n || i === 6) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp&nbsp");
            }
        }
        m--;
        n++;
        document.writeln("<br>");
    }
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
        document.getElementById("3").innerText += array;
    }
}

//Bai 5
function case11() {

    let num = [1, 2, 3, 4, 5, 6, 7];
    let list = ["cafe", "Cam vat", "Nuoc ep ca rot", "Nuoc ep ca chua", "Nuoc loc", "Nuoc dua", "Thoat goi mon"];
    let menu;
    let bill = []; //1,3,5
    let index;

    do {
        menu = parseInt(prompt("Nhap so tren menu: "));
        bill.push(menu);
    }
    while (menu !== 7) ;

    bill.pop();
    console.log(bill);

    for (let i = 0; i <bill.length ; i++) {
        if (num.indexOf(bill[i]) === 1){
            console.log(list[1]);
        }
    }
}



