function isPrime(number) {
    let flag = true;

    if (number < 2) {
        flag = false;
    } else if (number === 2) {
        flag = true;
    } else if (number % 2 === 0) {
        flag = false;
    } else {
        for (let i = 3; i < number; i += 2) {
            if (number % i === 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag === true) {
        document.writeln(number + " la so nguyen to" + "<br>");
    } else {
        document.writeln(number + " khong phai so nguyen to" + "<br>");
    }
}
isPrime(2)
isPrime(numbers = prompt("Nhap so can kiem tra: "));