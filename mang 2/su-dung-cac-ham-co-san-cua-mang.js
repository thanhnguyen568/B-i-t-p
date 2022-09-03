//bai 1
let mycolor = ["Red", "Green", "White", "Black"];
let arr1 = mycolor.toString();
console.log(arr1);

//bai 2
let num2 = prompt("Hãy nhập chuổi số: ");
let str2 = num2.toString();
let arr2 = [str2[0]];
for (let i = 1; i < str2.length; i++) {
    if (str2[i - 1] % 2 === 0 && str2[i] % 2 === 0){
        arr2.push("-",str2[i]);
    }
    else {
        arr2.push(str2[i]);
    }
}
console.log(arr2.join(""));

//bai 3 (so sanh vi tri tung phan tu trong chuoi co nam trong day index upper va loewer)

let str3 = "The Quick Brown Fox";
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for (let i = 0; i < str3.length; i++) {
    if (UPPER.indexOf(str3[i]) !== -1) {
        result.push(str3[i].toLowerCase());
    } else if (LOWER.indexOf(str3[i]) !== -1) {
        result.push(str3[i].toUpperCase());
    } else {
        result.push(str3[i]);
    }
}
console.log(result.join(""));

