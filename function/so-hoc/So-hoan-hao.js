function find_perfect_num(n) {
    // flag = 1 => số hoàn hảo
    // flag = 0 => không phải số hoàn hảo

    let flag = 0, total = 0;

    //Tìm tổng ước số
    for (let i = 1; i < n; i++) {
        if (n % i === 0) total += i;//Nếu là ước số thì cộng vào tổng
    }
    //So sánh tổng ước số với số đã cho để tìm ra số hoàn hảo
    if (total === n && n !== 0) flag = 1;

    return flag;
}


let n = prompt(" nhap mot so tu nhien: ");
let check = find_perfect_num(n);
if (check === 1) console.log(n + " la so hoan hao");
else console.log(n + " khong phai la so hoan hao");
