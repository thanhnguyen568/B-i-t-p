function mycalculate(value) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = 0
        if(value === "Addition(+)"){
            result = parseInt(num1) + parseInt(num2);
        }else if(value === "Subtraction(-)"){
            result = parseInt(num1) - parseInt(num2);
        }else if(value === "Multiplication(x)"){
            result = parseInt(num1) * parseInt(num2);
        }else if (value === "Division(/)"){
            result = parseInt(num1) / parseInt(num2);
        }
    document.getElementById("result").value = result;
}