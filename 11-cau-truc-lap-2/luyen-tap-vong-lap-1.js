//--BÀI 1--//
function bai_1() {
    let result = 0;

    for (i = 1; i < 100; i++) {
        result = result + "" + i;
        if (i == 99) {
            alert(result);
            alert("Bài 1 hoàn thành!");
            break;
        }
    }
}

//--BÀI 2--//
function bai_2() {

    let nhietdo;

    nhietdo = parseInt(prompt("Nhập nhiệt độ: "));
    while (nhietdo < 20 || nhietdo > 100) {
        if (nhietdo < 20) {
            alert("tăng nhiệt độ");
        } else {
            alert("Giảm nhiệt độ");
        }
        nhietdo = parseInt(prompt("Nhập nhiệt độ: "));
    }
    alert("Nhiệt độ ok!");
}


//--BÀI 3--//
function bai_3() {

    let F1 = 1;
    let F2 = 1;
    let Fi;
    let i = 2;
    let number = prompt('Số lượng trong dãy fibonaci cần in ra: ');
    let result_fibonaci = "1-1";

    while (i < number) {
        if (number < 2) {
        } else {
            Fi = F1 + F2;
            result_fibonaci = result_fibonaci + '-' + Fi;
            F1 = F2;
            F2 = Fi;
            i++;
        }
    }
    alert("Dãy số fibonaci: " + result_fibonaci);
}

//--BÀI 4--//
function bai_4() {

    let F1 = 1;
    let F2 = 1;
    let F = 0;

    for (i = 2; i > 0; i++) {
        F = F1 + F2;
        F1 = F2;
        F2 = F;
        if (F % 5 == 0) {
            alert("Số chia hết cho 5 đầu tiên trong dãy Fibonaci là: " + F);
            break;
        }
    }
}

//--BÀI 5--//
function bai_5() {

    let F0 = 1;
    let F1 = 1;
    let F = 0;
    let sum_fibonaci = 2;

    for (i = 2; i < 20; i++) {
        F = F0 + F1;
        sum_fibonaci += F;
        F0 = F1;
        F1 = F;
    }
    alert(sum_fibonaci);
}

//--BÀI 6--//
function bai_6() {

    let N;
    let sum = 0;

    for (i = 0; i < 30; i++) {
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