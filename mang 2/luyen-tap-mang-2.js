//Bai 1
function ex1() {

    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        console.log("row " + i);
        for (let j = 0; j < a[i].length; j++) {
            console.log("" + a[i][j]);
        }
    }
}

//Bai 2
function ex2() {

    let b = ['c', 's', 'c', '2', '6', '1']
    console.log(b.reverse().join(""));
}

//Bai 3
function ex3() {

    let c = ["a", "b", "c", "d", "e", "f"];
    console.log(c.length);
}

//Bai 4
function ex4() {

    let count = 0;
    let k = ["3", "2", "4", "a"]
    for (let i = 0; i < k.length; i++) {
        if (!isNaN(k[i])) {
            count++;
        }
    }
    console.log(count);
}

//Bai 5
function ex5() {

    let d = Array(5);
    for (let i = 0; i < d.length; i++) {
        d[i] = prompt("Nhap phan tu thu " + i + "chuoi thu 1");
    }

    let e = Array(5);
    for (let i = 0; i < e.length; i++) {
        e[i] = prompt("Nhap phan tu thu " + i + "chuoi thu 2");
    }

    let f = d.join("");
    let g = e.join("");
    console.log(f);
    console.log(g);

    if (f === g) {
        alert("2 mang giong nhau")
    } else {
        alert("2 mang khac nhau")
    }
}

//Bai 6
function ex6() {

    let l = Array(5);
    for (let i = 0; i < l.length; i++) {
        l[i] = prompt("Nhap phan tu vao mang")
    }
    console.log(l);

    for (let i = 0; i < l.length; i++) {
        if (l[i] === "-"){
            l[i] = "_";
        }
    }
    console.log(l);
}
