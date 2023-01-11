class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    area() {
        let s = this.a * this.b;
        document.writeln("Dien tich hinh chu nhat la: " + s);
        document.writeln("<br>");
    }

    perimeter() {
        let c = (this.a + this.b) * 2;
        document.writeln("Chu vi hinh chu nhat la: " + c);
        document.writeln("<br>");
    }

    canvas() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#00FFFF";
        ctx.fillRect(25,25,this.a,this.b);
    }
}

let recA = new Rectangle(parseInt(prompt("Nhap do dai canh a < 400")),parseInt(prompt("Nhap do dai canh b < 400")));
console.log(recA);

recA.area();
recA.perimeter();
recA.canvas()