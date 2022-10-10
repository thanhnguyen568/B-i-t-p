/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
function array_unique(array) {
    array.sort();

    let max = [0, 0];

    let count = 1;
    for (let i = array.length - 1; i > 0; --i) {
        if (array[i] === array[i - 1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else {
            //So sánh số lần xuất hiện với max[1]
            if (max[1] < count) {
                //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                //Và gán số lần xuất hiện vào max[1]
                max[0] = array[i];
                max[1] = count;
            }
            count = 1;
        }
    }
    console.log("Phần tử " + max[0] + " xuất hiện nhiều nhất với " + max[1] + " lần");
}


let array = [7, 2, 6, 7, 4, 9, 8];


//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
array_unique(array);
