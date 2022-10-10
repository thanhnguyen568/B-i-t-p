// Hai biến lưu min và max
let min = null;
let max = null;

// Biến lưu giá trị người dùng nhập vào
let value = '';

// trong khi người dùng chưa nhấn Hủy
// vì người dùng nhấn hủy tức là value = null,
// thì sẽ dừng vòng lặp
while (value != null) {
    // Lấy giá trị
    value = prompt("Nhập số, nếu muốn dừng thì không nhập gì");

    // Nếu người dùng nhấn hủy thì không thực thi những đoạn code bên trong
    if (value != null) {
        // Nếu nhập lần đầu thì gán cả hai min và max bằng value
        if (min == null) {
            min = value;
            max = value;
        } else {
            // ngược lại sẽ kiểm tra gán min và max
            if (min > value) {
                min = value;
            }
            if (max < value) {
                max = value;
            }
        }
    }
}

// In ra trình duyệt
document.write("Min là " + min + ", Max là " + max);

// ---------------------------------------------------------------------------

let array = [5, 4, 7, 2, 8, 12, 7, 3];

/*Sắp xếp mảng theo thứ tự giảm dần*/
array.sort(function (a, b) {
    return b - a;
});

console.log("max= ", array[0]);
console.log("min= ", array[array.length - 1]);
