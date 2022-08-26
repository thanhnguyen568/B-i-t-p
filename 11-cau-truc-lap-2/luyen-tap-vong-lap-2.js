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

    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    alert(result);
}

function Bai_3() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }

    document.writeln("<br>");

    for (let i = 0; i < 5; i++) {
        for (let j = 4; j >= i; j--) {
            document.writeln("*");
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


// // for (let i = 1; i <=10 ; i++) {
// //     for (let j = 1; j <= 20 ; j++) {
// //         if(i=== 1 || j === 1 || i === 10|| j ===20){
// //             document.write("*")
// //         }else {
// //             document.write("&nbsp&nbsp")
// //         }
// //     }
// //     document.write("<br>")
// // }
// ​
// // let number = +prompt("Nhap so can kiem tra");
// // let count = 0;
// // if(number < 2){
// //     alert("k p snt")
// // }else {
// //     //number = 2
// //     for (let i = 2; i <= Math.sqrt(number) ; i++) {
// //         if(number % i === 0) {
// //             count++;
// //             break;
// //         }
// //     }
// //     if(count !== 0){
// //         alert("kp snt");
// //     }else {
// //         alert("snt");
// //     }
// // }
// ​
// ​
// ​
// // let startNumber = 2;
// // let count2 = 0;
// // while(count2 < 20){
// //     let count = 0;
// //     for (let i = 2; i <= Math.sqrt(startNumber) ; i++) {
// //         if(startNumber % i === 0) {
// //             count++;
// //             break;
// //         }
// //     }
// //     if(count === 0){
// //         document.write(startNumber + "<br>");
// //         count2++;
// //     }
// //     startNumber++;
// // }
// ​
//     let a = 5;
// let b = a++ ;
// alert(a);
// let c = b++ + a++ + ++a - --b ;
// ​
// //5 + 6 + 8 -5
// //Minh Hoang 13
// // Van 12
// //10
// // alert(c);
// ​
// ​
// ​
// </script>
// </html>