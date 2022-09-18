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
            document.getElementById("2").innerHTML = "Ky tu " + t + " la nguyen am";
            break;
        default:
            // document.writeln("Ky tu " + t + " la phu am");
            document.getElementById("2").innerHTML = "Ky tu " + t + " la phu am";
            break;
    }
}

//Yeu cau 3
//Bai 1
function case7() {
    let n = parseInt(prompt("Nhap do giai của mang"));
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

    document.getElementById("3").innerHTML = "Mang a " + a + "<br>" + "Mang b " + b;
}

//Bai 2
function case8() {

}

//Bai 3
function case9() {
    
}
