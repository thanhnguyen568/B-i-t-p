//số lượng cần in ra
let numbers = prompt("Nhap so luong so nguyen to can in ra: ");

//biến đếm số nguyên tố
let count = 0;

//biến nhận giá trị sô nguyên tố tăng
let n = 2;

let prime = "";

while (count < numbers){
    let check = true;

        for (let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) {
                check = false;
            }
        }
        if(check == true){
            count++;
            prime = prime + n + " ";
        }
        n++;
}
    alert(prime);