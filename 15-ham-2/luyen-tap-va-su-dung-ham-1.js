//Bai 1
function alertMessage() {
    alert("Xin chao");
}

//Bai 2
function increaseNumber(number2) {
    result = (number2 + 1);
    document.getElementById("Bai_2").value = result;
}

//Bai 3
function sum(a, b) {
    if (a > b) {
        alert("so a lon hon b, vui long nhap lai");
    } else {
        let c = a + b
        document.getElementById("Bai_3").value = +c;
    }
}

//Bai 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
    console.log(result);
}

result = 0;
alert("bai 4" + result);
result = addNumbers();
alert("bai 4" + result);


//Bai 5

function findConstellation(findStar) {

    let arrStar = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arrConstellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "UrsaMajor", "Leo"];
    let index = -1;
    for (let i = 0; i < arrStar.length; i++) {
        if (findStar === arrStar[i]) {
            index = i;
            break;
        }
    }
    if (index === -1){
        alert("khong co ngoi sao");
    }else {
        document.writeln(arrConstellation[index]);
    }
}