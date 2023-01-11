//Bai 1
function ex1() {


    function isPrime(n) {
        let flag = true;

        if (n < 2) {
            flag = false;
        } else if (n === 2) {
            flag = true;
        } else if (n % 2 === 0) {
            flag = false;
        } else {
            for (let i = 3; i < Math.sqrt(n); i += 2) {
                if (n % i === 0) {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }

    function createArray(...array) {

        for (let i = 0; i < 4; i++) {
            array[i] = prompt("Nhap phan tu: " + (i));
        }

        return array;
    }

    function display(array) {

        let displayIsPrime = []
        for (let i = 0; i < array.length; i++) {
            if (isPrime(array[i]) === true) {
                displayIsPrime.push(array[i]);
            }
        }
        return displayIsPrime;
    }

    let arrayA = createArray();
    let displayA = display(arrayA)
    document.getElementById("1").innerHTML = "Mang nhap vao: " + arrayA
        + "<br>"
        + "Mang chua so nguyen to: " + displayA;

}

//Bai 2
function ex2() {


    function createNewArray(numeratorA, denominatorA, numeratorB, denominatorB) {

        let flag = false;

        flag = numeratorA * denominatorB === denominatorA * numeratorB;

        return flag;
    }

    document.getElementById("1").innerHTML = createNewArray(parseInt(prompt("tu so thu 1")), parseInt(prompt("mau so thu 1")), parseInt(prompt("tu so thu 2")), parseInt(prompt("mau so thu 2")),);
}

//Bai 3

class SoTietKiem {
    constructor(numbers, types, name, idCard, dateClass, amount) {
        this.numbers = numbers;
        this.types = types;
        this.name = name;
        this.idCard = idCard;
        this.dateClass = dateClass;
        this.amount = amount;

    }

    getNumbers() {
        return this.numbers;
    }

    getTypes() {
        return this.types;
    }

    getNames() {
        return this.name;
    }

    getIDCard() {
        return this.idCard;
    }

    getDateClass() {
        return this.dateClass;
    }

    getAmount() {
        return this.amount;
    }
}

let personA = new SoTietKiem("00001", "six month", "Thanh", "01", 3, 100000);
let personB = new SoTietKiem("00002", "six month", "Khanh", "02", 3, 100000);
let personC = new SoTietKiem("00003", "six month", "Duc", "03", 3, 100000);
let arr = [personA, personB, personC];

function display() {
    let str = '<table border="1px">\n' +
        '<tr>\n' +
            '<th>Mã số</th>\n' +
            '<th>Loại tiết kiệm</th>\n' +
            '<th>Họ tên</th>\n' +
            '<th>CMND</th>\n' +
            '<th>Ngày mở sổ</th>\n' +
            '<th>Số tiền gửi</th>\n' +
        '</tr>\n'

    for (let i = 0; i < arr.length; i++) {
        str +=
            '<tr>\n' +
                '<td>' + arr[i].getNumbers() + '</td>\n' +
                '<td>' + arr[i].getTypes() + '</td>\n' +
                '<td>' + arr[i].getNames() + '</td>\n' +
                '<td>' + arr[i].getIDCard() + '</td>\n' +
                '<td>' + arr[i].getDateClass() + '</td>\n' +
                '<td>' + arr[i].getAmount() + '</td>\n' +
                '<td>' + '<button onclick="remove( ' + i + ')">Remove</button>' + '</td>\n' +
            '</tr>\n'
    }
    str += '</table>'

    document.getElementById('2').innerHTML = str;
}

display();


function NewSubmit() {

    let createNumbers = prompt('Nhập mã số :');
    let createTypes = prompt('Nhập loại :');
    let createName = prompt('Nhập tên :');
    let createIdCard = prompt('Nhập CMND :');
    let createDateClass = prompt('Nhập ngày :');
    let createAmount = prompt('Nhập số tiền gửi :');

    let SoMoi = new SoTietKiem(createNumbers, createTypes, createName, createIdCard, createDateClass, createAmount);
    arr.push(SoMoi);
    alert("Da them moi thanh cong");
    display();
}


function remove() {

    let value = prompt('Nhập mã số xóa :');
    if (confirm('Bạn muốn xóa sản phầm này')) {
        arr.splice(value, 1);
    }
    display();
}

