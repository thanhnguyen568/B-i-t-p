//--BÀI 1--
function bai_1() {

    for (i = 1; i <= 100; i++){
        document.write(i + ", ");
        if (i == 99){
        alert("Bài 1 hoàn thành!");
        break;
        }
    }
}

//--BÀI 2--
function bai_2() {
    let temperature = parseInt(prompt("Nhập nhiệt độ vào: "));
    while (temperature < 100 || temperature > 20){
        if (temperature > 100){
            alert("Giảm nhiệt độ xuống dưới 100!");
            temperature = prompt("Nhập nhiệt độ vào: ");
        }
        if (temperature < 20){
            alert("Tăng nhiệt độ lên trên 20!");
            temperature = prompt("Nhập nhiệt độ vào: ");
        }
        alert("Nhiệt độ phù hợp!");
        document.write("20 < " + temperature + " < 100");
        break;
    }
}
//--BÀI 3--
function bai_3() {
    let a=1,b=1,c, i=2;
    let number=prompt('So luong so fibonacci muon nhan la');
    let fibonacci='1-1';
    while (i<number) {
        c=a+b;
        fibonacci=fibonacci+'-'+c;
        a=b;
        b=c;
        i++;
    }
    document.write('Day so fibonacci nhan duoc la: <br>'+fibonacci);
}