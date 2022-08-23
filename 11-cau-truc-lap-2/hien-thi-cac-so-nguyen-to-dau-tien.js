//số lượng cần in ra
let numbers = prompt("Nhap so luong so nguyen to can in ra: ");

//biến đếm số nguyên tố
let count = 0;

//biến tăng nhận giá trị sô nguyên tố
let n = 2;

let prime = "";

while (count < numbers){
    let flag = true;

        for (let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) {
                flag = false;
            }
        }
        if(flag == true){
            count++;
            prime = prime + n + " ";
        }
        n++;
}
    alert(prime);