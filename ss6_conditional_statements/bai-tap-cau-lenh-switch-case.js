function tinhsongay(){
    let num = parseInt(document.getElementById("number").value);
    let day31 = "Tháng này có 31 ngày"
    let day30 = "Tháng này có 30 ngày"
    let day2 = "Tháng này có 28 hoặc 29 ngày"
    switch (num) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("output").innerText = day31;
            break;
        case 2:
            document.getElementById("output").innerText = day2;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("output").innerText = day30;
            break;
        default:
            document.getElementById("output").innerText = "Số bạn nhập không đúng"
    }
}