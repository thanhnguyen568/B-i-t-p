/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
    }
    console.log("Phan tu " + x + " xuat hien " + count + " lan");
}

let array = [7, 2, 6, 7, 4, 9, 8];

count_element_in_array(array, 7);
count_element_in_array(array, 4);
