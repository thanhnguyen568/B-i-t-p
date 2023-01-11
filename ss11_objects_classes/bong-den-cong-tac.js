let connect = false;

class SwitchButton {
    constructor(status) {
        this.status = status;
    }

    connectToLamp(ElectricLamp) {
        connect = true
        ElectricLamp.status = this.status
    }

    switchOff_switchOn() {
        this.status = !this.status;
    }
}

class ElectricLamp {
    constructor(button) {
        this.button = button;
    }


    turnOff_turnOn() {
        if (connect === true) {
            document.getElementById("lamp").src = "img/pic_bulb_on.gif";
        } else {
            document.getElementById("lamp").src = "img/pic_bulb_off.gif";
        }
    }
}

let switchButtonA = new SwitchButton(false);
let button1;
let lamp = new ElectricLamp(button1);

function turnOff_turnOn_lamp() {
    switchButtonA.switchOff_switchOn();
    lamp.turnOff_turnOn();

}