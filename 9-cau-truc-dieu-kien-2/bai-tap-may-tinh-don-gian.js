function cleanscreen() {
    document.getElementById("result").value = "";
}
function display() {
    document.getElementById("result").value = +value;
}
function calculate() {
    let a = document.getElementById("result").value;
    b = eval(a);
    document.getElementById("result").value = a
}