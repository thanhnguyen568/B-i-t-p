function Bai_1() {

    let F0 = 1;
    let F1 = 1;
    let F;
    let result = F0 + "-" + F1;

    for (let i = 2; i < 20; i++) {
        F = F0 + F1;
        result = result + "-" + F;
        F0 = F1;
        F1 = F;
    }
    document.writeln(result);
}

function Bai_2() {

    let N = parseInt(prompt("Nhập vào sô nguyên dương cần tính giai thừa: "));
    let result = 1

    for (let i = 0; i <= N; i++) {
        result *= i;
    }
    alert(result);
}

function Bai_3() {

    //tam giac 1
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }

    document.writeln("<br>");

    //tam giac 2 - cach 1
    for (let i = 0; i < 5; i++) {
        for (let j = 4; j >= i; j--) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }

    document.writeln("<br>");

    //tam giac 2 - cach 2
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5 - i; j++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }

    document.writeln("<br>");

    //tam giac 3
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (j < 5 - i) {
                document.writeln("&nbsp&nbsp");
            } else {
                document.writeln(" *")
            }
        }
        document.writeln("<br>");
    }

    document.writeln("<br>");

    //tam giac 4
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (j <= i) {
                document.writeln("&nbsp&nbsp");
            } else {
                document.writeln(" *");
            }
        }
        document.writeln("<br>");
    }
}

function Bai_4() {

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 20; j++) {
            if (i === 1 || i === 10 || j === 1 || j === 20) {
                document.writeln("*")
            } else {
                document.writeln("&nbsp&nbsp");
            }
        }
        document.writeln("<br>");
    }
}

function Bai_5() {

    let m = parseInt(prompt("Nhap so tien goc ban dau: "));
    let r = parseInt(prompt("Nhap lai suat ngan hang: "))/100;
    let n = parseInt(prompt("Nhap so thang gui: "));

    for (let i = 0; i < n; i++) {
        m += m*r;
    }
    document.writeln(m);
}
