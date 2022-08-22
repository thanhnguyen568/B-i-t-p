    document.writeln("<b>Bài 1</b>");
let diemvatly = prompt("Nhập điểm vật lý" );
let diemhoahoc = prompt("Nhập điểm hóa học" );
let diemsinhhoc = prompt("Nhập điểm sinh hoc" );
let vatly = parseInt(diemvatly);
let hoahoc = parseInt(diemhoahoc);
let sinhhoc = parseInt(diemsinhhoc);
let ave = (vatly + hoahoc + sinhhoc)/3;
let sum = (vatly + hoahoc + sinhhoc);
    document.writeln("<br/>Điểm trung bình cộng của sinh viên là: " + ave);
    document.writeln("<br/>Điểm tổng của sinh viên là: " + sum);
    document.writeln("<br/><b>Bài 2</b>");
let C = prompt("Nhập một giá trị độ C");
let F = ((C*9)/5)+32;
    document.writeln("<br/>Độ C đã nhập " + C);
    document.writeln("<br/>Độ F quy đổi là "+ F);
    document.writeln("<br/><b>Bài 3</b>");
let bankinh = prompt("Nhập bán kính hình tròn " );
let R = parseInt(bankinh);
const Pi = 3.14159;
let S = R * R * Pi;
    document.writeln("<br/>Bán kính dã nhập " + R);
    document.writeln("<br/>Diện thích hình tròn " + S);
    document.writeln("<br/><b>Bài 4</b>");
let CV = R * 2 * Pi
    document.writeln("<br/>Chu vi bằng " + CV )