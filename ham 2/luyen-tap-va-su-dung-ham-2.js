//Bai 1
function square(a) {

    let number1 = a * a;
    document.getElementById("1").value = +number1;
}

//Bai 2
function area(r) {

    const pi = 3.14159;
    let S = pi * r * r;
    let C = pi * r * 2;
    document.getElementById("2.1").value = +S;
    document.getElementById("2.2").value = +C;
}

//Bai 3
function calFact(n) {

    let result = n;
    if (n === 0 || n === 1) {
        result = 1;
    }
    while (n > 1) {
        n--;
        result *= n;
    }
    // for (n; n > 1; n--){
    //     result *=n;
    // }
    document.getElementById("3").value = result;
}

//Bai 4
function checkNumber(a) {

    let check;
    if ( isNaN(a)){
        check = false;
    }else
        check = true;
    document.getElementById("4").value = check;
}

//Bai 5
function smallest(...array) {

    console.log(array)

}
