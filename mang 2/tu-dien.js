let inputE = prompt("Nhap tu can tiem kiem: ");
let arr1 = ["English", "Japanese", "German"];
let arr2 = ["Tiếng Anh", "Tiếng Nhật", "Tiếng Đức"];

for (let i = 0; i < arr1.length; i++) {
    if (inputE === arr1 [i]) {
        alert(arr2[i]);
    }
}