//--BÀI 1--//
function bai_1() {
    let result

    for (i = 1; i <= 100; i++){
        result = result +"," +i
        if (i == 99){
            alert(result);
            alert("Bài 1 hoàn thành!");
            break;
        }
    }
}

//--BÀI 2--//
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
        alert("Nhiệt độ nhập vào phù hợp điều kiện ! 20 < " + temperature + " < 100");
        break;
    }
}

//--BÀI 3--//
function bai_3() {
    let F1 = 1, F2 = 1, Fi, i=2;
    let number = prompt('Số lượng trong dãy fibonaci cần in ra: ');
    let result_fibonaci = "1; 1";

    while (i < number) {
        Fi = F1 + F2;
        result_fibonaci = result_fibonaci +', '+Fi;
        F1 = F2;
        F2 = Fi;
        i++;
    }
    alert("Dãy số fibonaci: " +result_fibonaci);
}

//--BÀI 4--//
function bai_4() {
    //so dau tien
    let F1 = 1;
    //so thu 2
    let F2 = 1;
    //tong 2 so lien tiep cuoi cung
    let F
    //bien tang
    let i = 2;

    while (i > 0){
        F = F1 +F2;
        F1 = F2;
        F2 = F;
        i++;
        if (F % 5 == 0){
            alert("Số chia hết cho 5 đầu tiên trong dãy Fibonaci là: " +F);
            break;
        }
    }
}

//--BÀI 5--//
function bai_5() {
    //so dau tien
    let F1 = 1;
    //so thu 2
    let F2 = 1;
    //tong 2 so lien tiep cuoi cung
    let F
    //bien tang
    let i = 2;
    //bien tinh tong
    let sum_fibonaci =0;

    while (i <= 20){
        F = F1 + F2;
        sum_fibonaci = F1 + F2 + F;
        F1 = F2;
        F2 = F;
        i++;
    }
    alert(sum_fibonaci);
}