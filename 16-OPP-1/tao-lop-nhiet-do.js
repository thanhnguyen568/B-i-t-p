class temperature {
    constructor(c) {
        this.c = c;
    }

    changeF() {
        let f = this.c * 33.8;
        document.writeln("25 do C bang " + f + " do f")
        document.writeln("<br>")
    }
    changeK(){
        let k = this.c+303.15;
        document.writeln("25 do C bang " + k + " do k")
        document.writeln("<br>")
    }
}
let temp = new temperature(25);
console.log(temp);
temp.changeF();
temp.changeK();