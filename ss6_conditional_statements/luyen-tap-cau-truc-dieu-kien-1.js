//--------------- bài 1 ----------------
function mycheck1(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let check1 = num1%num2 ==0;
    if (check1){
        document.getElementById("output1").innerHTML =" A chia hết cho B";
    }else{
        document.getElementById("output1").innerHTML =" A không chia hết cho B";
    }
}
//--------------- bài 2 ----------------

function mycheck2() {
    let b2num1 = parseInt(document.getElementById("b2num1").value);
    if (b2num1 < 15 ){
        document.getElementById("output2").innerHTML =" Không đủ điều kiện học lớp 10";
    }else{
        document.getElementById("output2").innerHTML =" Đủ điều kiện học lớp 10";
    }
}
//--------------- bài 3----------------

function mycheck3() {
    let b3num1 = parseInt(document.getElementById("b3num1").value);
    if (Number. isInteger(b3num1)){
        if(b3num1>0){
            document.getElementById("output3").innerHTML = " Số trên lớn hơn 0 "
        }else{
            document.getElementById("output3").innerHTML = " Số trên lớn nhỏ 0 "
        }
    }
}
//--------------- bài 4----------------

function mycheck4() {
    let b4num1 = parseInt(document.getElementById("b4num1").value);
    let b4num2 = parseInt(document.getElementById("b4num2").value);
    let b4num3 = parseInt(document.getElementById("b4num3").value);
    if(b4num1>b4num2 && b4num1<b4num3){
        document.getElementById("output4").innerHTML = " số thứ 3 là số lớn nhất ";
    }else if(b4num1<b4num2 && b4num1>b4num3){
        document.getElementById("output4").innerHTML = " số thứ 2 là số lớn nhất ";
    }else if(b4num1>b4num2 && b4num1>b4num3){
        document.getElementById("output4").innerHTML = " số thứ 1 là số lớn nhất ";
    }else if(b4num1<b4num2 && b4num1<b4num3){
        if(b4num2>b4num3){
            document.getElementById("output4").innerHTML = " số thứ 2 là số lớn nhất ";
        }else{
            document.getElementById("output4").innerHTML = " số thứ 3 là số lớn nhất ";
        }
    }
}
//--------------- bài 5----------------
function mycheck5() {
    let b5num1 = parseInt(document.getElementById("b5num1").value);
    let b5num2 = 2*parseInt(document.getElementById("b5num2").value);
    let b5num3 = 3*parseInt(document.getElementById("b5num3").value);
    let b5ave = (b5num1+b5num2+b5num3)/6;
        if(b5ave>8){
            document.getElementById("output5").innerHTML = " Học lực giỏi ";
        }else if(b5ave>6){
            document.getElementById("output5").innerHTML = " Học lực khá ";
        }else if(b5ave>4){
            document.getElementById("output5").innerHTML = " Học lực trung bình ";
        }else if(b5ave<=4){
            document.getElementById("output5").innerHTML = " Học lực yếu ";
        }
}
//--------------- bài 6----------------
function mycheck6() {
    let b6num1 = parseInt(document.getElementById("b6num1").value);
    let discount = null
    if(b6num1>10000000){
        discount = b6num1*0.03;
        document.getElementById("output6").value = +discount;
    }else if(b6num1>5000000){
        discount = b6num1*0.02;
        document.getElementById("output6").value = +discount;
    }else if(b6num1>1000000) {
        discount = b6num1*0.01;
        document.getElementById("output6").value = +discount;
    }else {
        document.getElementById("output6").value = 0;
    }
}
//--------------- bài 7----------------
function mycheck7(){
    let b7num1 = parseInt(document.getElementById("b7num1").value);
    if (b7num1<0){
        alert("nhập sai");
    }else if (b7num1<=50){
        let b7num2 = b7num1*600;
        document.getElementById("b7num2").value = b7num2;
        document.getElementById("b7num6").value = b7num2;
    }else if (b7num1>50 && b7num1<=200){
        let b7num2 = 50*600;
        let b7num3 = (b7num1-50)*400;
        document.getElementById("b7num2").value = b7num2;
        document.getElementById("b7num3").value = b7num3;
        document.getElementById("b7num6").value = (b7num2 + b7num3);
    }else if (b7num1>200) {
        let b7num2 = 50*600;
        let b7num3 = 50*400;
        let b7num4 = (b7num1-200)*200
        document.getElementById("b7num2").value = b7num2;
        document.getElementById("b7num3").value = b7num3;
        document.getElementById("b7num4").value = b7num4;
        document.getElementById("b7num6").value = (b7num2 + b7num3 + b7num4);
    }
}
