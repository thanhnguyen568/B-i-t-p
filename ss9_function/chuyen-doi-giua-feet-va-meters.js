function footToMeter(foot){
    let meter = 0.305 * foot
    document.getElementById("meters").value = +meter;
    document.getElementById("feet").value = +foot;
}
    footToMeter(foot = prompt("Nhap so feet can doi: "));

function meterToFoot(meter){
    let foot = 3.279 * meter
    document.getElementById("meters2").value = +meter;
    document.getElementById("feet2").value = +foot;
}
    meterToFoot(meter = prompt("Nhap so met can doi"));