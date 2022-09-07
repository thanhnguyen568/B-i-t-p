// Bai 1 tinh va hien thi so nguyen lon hon 10
function array1() {
    let arr_b1 = [12, 13, 1, 67, -123, 76, 24, 56, 2, 5];
    console.log(arr_b1);
    let result = "";

    for (let i = 0; i < arr_b1.length; i++) {
        if (arr_b1[i] >= 10) {
            result = arr_b1[i];
        } else {
            result = "";
        }
        document.writeln(result);
    }
}


// Bai 2 hien thi phan tu lon nhat trong mang
function array2() {
    let arr_b2 = [23, 1, 54, 78, 15, -65, 32, 21, 85, 30];
    let max = "";
    let index = "";

    for (let i = 0; i < arr_b2.length; i++) {
        if (arr_b2[i] > arr_b2[i - 1]) {
            max = arr_b2[i];
            index = i;
        } else {
            max = arr_b2[i - 1];
            index = (i - 1);
        }
    }
    alert("Phan tu lon nhat la: " + max);
    alert("Vi tri cua phan tu la: " + index);
}

// Bai 5 diem so nguyen am trong 1 chuoi
function array5() {
    let array_b5 = [23, 1, 54, -78, 15, -65, 32, 21, 85, -30];
    console.log(array_b5);
    let count = 0;

    for (let i = 0; i < array_b5.length; i++) {
        if (array_b5[i] < 0) {
            count++;
        }
    }
    alert("Co " + count + " so nguyen am trong mang");
}

// Bai 6
function array6() {
    let arr_b6 = [23, 65, 45, 87, 26, 25, 78, 96, 5, 47];
    console.log(arr_b6);
    let num_v = parseInt(prompt("Nhap vao so V bat ky: "));
    let check = false

    for (let i = 0; i < arr_b6.length; i++) {
        if (num_v === arr_b6[i]) {
            check = true;
            document.writeln("V is in the array");
        }
    }
    if (check === false) {
        document.writeln("V is not in the array")
    }
}

//Bai 7
function array7() {
    let n = prompt(" Nhap so phan tu cua mang :");
    let arr_b7 = [];
    for (let i = 0; i < n; i++) {
        arr_b7[i] = prompt("phan tu thu: " + (i + 1))
    }

    let v = prompt("Nhap phan tu can xoa: ");
    for (let i = 0; i < arr_b7.length; i++) {
        if (v === arr_b7[i]) {
            for (let j = i; j < arr_b7.length; j++) {
                arr_b7[j] = arr_b7[j + 1];
            }
        }
    }
    arr_b7[n - 1] = 0;
    console.log(arr_b7);
}

//Bai 8
function array8() {

    let n = prompt("Nhap vao so phan tu cua mang: ");
    let array8 = [];
    for (let i = 0; i < n; i++) {
        array8[i] = prompt("Nhap phan tu thu: " + (i + 1));
    }

    
}