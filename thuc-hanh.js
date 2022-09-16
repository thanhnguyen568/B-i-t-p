function person(firstName, lastName, age, eyeColor) {
    this.firsName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.changeName = function (name) {
        this.lastName = name;
    };
}

let myFather = new person("John", "Dor", 50, "blue");
// document.writeln(myFather.firsName + " " + myFather.lastName + " " + myFather.age + " " + myFather.eyeColor);
//
// myFather.changeName("Ray");
// document.writeln("<br>" + myFather.firsName + " " + myFather.lastName + " " + myFather.age + " " + myFather.eyeColor);
for (let i = 0; i <myFather.length ; i++) {
    txt += myFather[i];
}
document.writeln(txt);