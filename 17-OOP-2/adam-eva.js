class Apple {
    constructor() {
        this.weight = 10;
        document.writeln("<br>");
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        document.writeln("Qua tao bi an het");
        document.writeln("<br>");
    }

    getWeight() {
        document.writeln("Trong luong qua tao bay gio la " + this.weight);
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if (this.gender === "male") {
            document.writeln("Adam is male");
            document.writeln("<br>");
        } else {
            document.writeln("Eva is not male");
            document.writeln("<br>");
        }
        document.writeln("<br>");
    }


    say(string) {
        console.log(string);
    }

    eat() {
        this.weight++
        document.writeln(this.name + " an tao nen trong luong bay gio la :" + this.weight);
        document.writeln("<br>");
    }


}

let apple = new Apple();
let adam = new Human("Adam", "male", 70);
let eva = new Human("Eva", "female", 50);
console.log(apple);
console.log(adam);
console.log(eva);


function checkMale() {
    adam.isMale();
    eva.isMale();
}

function said() {
    adam.say("Adam say hello");
    eva.say("Eva say hi");
}

function checkA() {
    apple.getWeight();
}

function eatApple() {


    adam.eat()
    apple.decrease();

    eva.eat()
    apple.decrease();

    apple.getWeight();

}



