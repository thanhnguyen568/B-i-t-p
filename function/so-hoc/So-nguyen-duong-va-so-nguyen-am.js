// So nguyen %1 === 0

function isInteger(value) {
    return (Number.isInteger(value) && value > 0);
}

document.writeln(isInteger(365)); //true