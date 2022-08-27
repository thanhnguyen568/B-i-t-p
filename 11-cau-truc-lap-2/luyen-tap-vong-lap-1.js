//--BÀI 1--//
function bai_1() {

    for (let i = 1; i <= 100; i++) {
        if (i === 99) {
            alert("Bài 1 hoàn thành!");
            break;
        }
        document.writeln(i + "<br>");
    }
}

//--BÀI 2--//
function bai_2() {

    let nhietdo = parseInt(prompt("nhap nhiet do: "));
    while (nhietdo >= 20 || nhietdo <= 100) {
        if (nhietdo < 20) {
            alert("tang nhiet do len !");
        } else if (nhietdo > 100) {
            alert("giam nhiet do xuong !");
        } else {
            alert("ok");
            break;
        }
        nhietdo = parseInt(prompt("nhap nhiet do: "));
    }
}


//--BÀI 3--//

function bai_3() {

    let F0 = 1;
    let F1 = 1;
    let F = 0;


    for (let i = 0; i < 20; i++) {
        F = F0 + F1;
        F0 = F1;
        F1 = F;
        document.writeln(F + "<br>");
    }

}

//--BÀI 4--//
function bai_4() {

    let F0 = 1;
    let F1 = 1;
    let F = 0;

    for (let i = 2; i > 0; i++) {
        F = F0 + F1;
        F0 = F1;
        F1 = F;
        if (F % 5 === 0) {
            alert("Số chia hết cho 5 đầu tiên trong dãy Fibonaci là: " + F);
            break;
        }
    }
}

//--BÀI 5--//

function bai_5() {

    let F1 = 1;
    let F2 = 1;
    let F = 0;
    let sum = 0;

    for (let i = 0; i < 20; i++) {
        F = F1 + F2;
        F1 = F2;
        F2 = F;
        sum += F;
    }
    document.writeln("Tong 20 so fibonaci dau tien la: " +sum);
}

//--BÀI 6--//
function bai_6() {

    let N;
    let sum = 0;

    for (let i = 0; i <= 30; i++) {
        N = i * 7;
        sum += N;
    }
    alert(sum);
}

//--BÀI 7--//

function bai_7() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.writeln("Fizz Buzz");
        } else if (i % 3 === 0) {
            document.writeln("Fizz");
        } else if (i % 5 === 0) {
            document.writeln("Buzz");
        } else {
            document.writeln(i);
        }
    }
}

//--BÀI 8--//

function bai_8() {

    let num1 = parseInt(prompt("Nhập só đầu trong khoảng:"));
    let num2 = parseInt(prompt("Nhập só cuối trong khoảng:"));
    let i;
    while (i >= num1 && i <= num2) {

    }
}