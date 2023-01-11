//----------bài 1-------
function myconvert1() {
    let C = parseInt(document.getElementById("1num1").value);
    let F = C*9/5+32;
        document.getElementById("1num2").value = F;
}
//----------bài 2-------
function myconvert2() {
    let Met = parseInt(document.getElementById("2num1").value);
    if(Met>0){
        let Feet = Met*3.2808;
        document.getElementById("2num2").value = Feet;
    }else {
        document.getElementById("2num2").innerHTML = "Nhập vào số lớn hơn 0";
    }
}
//----------bài 3-------
function myconvert3() {
    let canha = parseInt(document.getElementById("3num1").value);
    let S = canha*canha;
    document.getElementById("3num2").value = S;
}
//----------bài 4-------
function myconvert4() {
    let canh4a = parseInt(document.getElementById("4num1").value);
    let canh4b = parseInt(document.getElementById("4num2").value);
    let Sab = canh4a*canh4b;
    document.getElementById("4num3").value = Sab;
}
//----------bài 5-------
function myconvert5() {
    let canh5a = parseInt(document.getElementById("5num1").value);
    let canh5b = parseInt(document.getElementById("5num2").value);
    let S5ab = canh5a*canh5b/2;
    document.getElementById("5num3").value = S5ab;
}
//----------bài 6-------
function myconvert6(){
    let soa = parseInt(document.getElementById("6num1").value);
    let sob = parseInt(document.getElementById("6num2").value);
    if(sob != 0){
        if(soa == 0){
            document.getElementById("6num3").value = "Phương trình vô nghiệm";
        }else{
            document.getElementById("6num3").value = -sob/soa;
        }
    }else{
        document.getElementById("6num3").value = "P trình có vô số nghiệm";
    }
}
//----------bài 7-------
function myconvert7(){
    let so7a = parseInt(document.getElementById("7num1").value);
    let so7b = parseInt(document.getElementById("7num2").value);
    let so7c = parseInt(document.getElementById("7num3").value);
    let delta = so7b*so7b - (4*so7a*so7c);
    if (delta == 0) {
        document.getElementById("7num4").value = -so7b/(2*so7a);
        document.getElementById("7num5").value = -so7b/(2*so7a);
    }else if(delta>0 ){
        let result1 = parseInt((-so7b-delta)/(2*so7a));
        let result2 = parseInt((-so7b+delta)/(2*so7a));
        document.getElementById("7num4").value = result1;
        document.getElementById("7num5").value = result2;
    }else {
        document.getElementById("7num4").value = "P trình vô nghiệm";
        document.getElementById("7num5").value = "P trình vô nghiệm";
    }
}
//----------bài 8-------
function myconvert8(){
    let tuoi = parseInt(document.getElementById("8num1").value);
    if (tuoi>0 && tuoi<120) {
        document.getElementById("8num2").value = "là tuổi 1 người";
    }else {
        document.getElementById("8num2").value = "ko là tuổi 1 người";
    }
}
//----------bài 9-------
function myconvert9(){
    let canha = parseInt(document.getElementById("9num1").value);
    let canhb = parseInt(document.getElementById("9num2").value);
    let canhc = parseInt(document.getElementById("9num3").value);
    if (canha>0 && canhb>0 && canhc>0){
        if (canha+canhb>canhc || canhc+canhb>canha || canha+canhc>canhb){
        document.getElementById("9num4").value = "là cạnh tam giác";
        }
    }else {
        document.getElementById("9num4").value = "không là cạnh tam giác"
    }
}
//----------bài 10-------
function mycheck10(){
    let b7num1 = parseInt(document.getElementById("b10num1").value);
    if (b7num1<0){
        alert("nhập sai")
    }else if(b7num1<=50){
        let b7num2 = b7num1*1678;
        document.getElementById("b10num2").value = b7num2;
        document.getElementById("b10num6").value = b7num2;
    }else if(b7num1>50 && b7num1<=100){
        let b7num2 = 50*1678;
        let b7num3 = (b7num1-50)*1734;
        document.getElementById("b10num2").value = b7num2;
        document.getElementById("b10num3").value = b7num3;
        document.getElementById("b10num6").value = (b7num2 + b7num3);
    }else if(b7num1>100 && b7num1<=200){
        let b7num2 = 50*1678;
        let b7num3 = 50*1734;
        let b7num4 = (b7num1-100)*2014;
        document.getElementById("b10num2").value = b7num2;
        document.getElementById("b10num3").value = b7num3;
        document.getElementById("b10num4").value = b7num4;
        document.getElementById("b10num6").value = (b7num2 + b7num3 + b7num4);
    }else if (b7num1>200) {
        let b7num2 = 50*1678;
        let b7num3 = 50*1734;
        let b7num4 = 100*2014;
        let b7num5 = (b7num1-200)*2536;
        document.getElementById("b10num2").value = b7num2;
        document.getElementById("b10num3").value = b7num3;
        document.getElementById("b10num4").value = b7num4;
        document.getElementById("b10num5").value = b7num5;
        document.getElementById("b10um6").value = (b7num2 + b7num3 + b7num4 + b7num5);
    }
}
//----------bài 11-------
function mycheck11(){
    let b11num1 = parseInt(document.getElementById("b11num1").value);
    if (b11num1<0){
        alert("không tính")
    }else if (b11num1<=5000000){
        let b11num2 = b11num1*0.05;
        document.getElementById("b11num2").value = b11num2;
        document.getElementById("b11num6").value = b11num2;
    }else if(b11num1>5000000 && b11num1<=10000000){
        let b11num2 = 0;
        let b11num3 = b11num1*0.1-250000;
        document.getElementById("b11num2").value = b11num2;
        document.getElementById("b11num3").value = b11num3;
        document.getElementById("b11num6").value = (b11num2 + b11num3);
    }else {
        let b11num2 = 0;
        let b11num3 = 0;
        let b11num4 = (b11num1*0.15)-750000;
        document.getElementById("b11num2").value = b11num2;
        document.getElementById("b11num3").value = b11num3;
        document.getElementById("b11num4").value = b11num4;
        document.getElementById("b11num6").value = (b11num2 + b11num3 + b11num4);
    }
}
//----------bài 12-------
function mycheck12(){
    let P = parseInt(document.getElementById("b12num1").value);
    let i = parseInt(document.getElementById("b12num2").value);
    let m = parseInt(document.getElementById("b12num4").value);
    let n = parseInt(document.getElementById("b12num3").value);
    let F = Math.pow((1+i/m),n*m)
    if (m>0){
        document.getElementById("b12num5").value = F*P;
    }else {
        alert("nhập sai")
    }
}