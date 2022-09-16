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
        document.writeln("<br>")
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
    document.writeln("Luong thuc nhan la: " + salary + "<br>" + "Thue: " + tax);
}

//Bai 2
function case6() {

    let t = prompt("Nhap ky tu bat ky: ");

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
            break;
            document.writeln("Ky tu " + t + " la nguyen am");
        default:
            break;
            document.writeln("Ky tu " + t + " la phu am");
    }

}