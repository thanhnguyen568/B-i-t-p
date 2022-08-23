function lasonguyento(n){
    let flag = 1;

    if (n <2){
        return flag = 0;
    }

    let i = 2;
    while(i < n){
        if(n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}

let n = prompt(" nhap mot so n: ");
let i = 0, check = 0, result = "";
while (i < n){
    check = lasonguyento(i);
    if( check == 1 ){
        result += i + ", ";
    }
    ++i;
}
console.log(result);
document.write(result);