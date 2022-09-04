// Bai 1 tinh va hien thi so nguyen lon hon 10
function array1() {
    let arrb1 = [12, 13, 1, 67, -123, 76, 24, 56, 2, 5];
    console.log(arrb1);
    let result = "";

    for (let i = 0; i < arrb1.length; i++) {
        if (arrb1[i] >= 10) {
            result = arrb1[i];
        } else {
            result = "";
        }
        document.writeln(result);
    }
}


// Bai 2 hien thi phan tu lon nhat trong mang
function array2() {
    let arrb2 = [23, 1, 54, 78, 15, -65, 32, 21, 85, 30];
    let max = "";
    let index = "";

    for (let i = 0; i < arrb2.length; i++) {
        if (arrb2[i] > arrb2[i - 1]) {
            max = arrb2[i];
            index = i;
        } else {
            max = arrb2[i - 1];
            index = (i - 1);
        }
    }
    alert("Phan tu lon nhat la: " + max);
    alert("Vi tri cua phan tuy la: " + index);
}