function myconvert(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;
    const a = 1
        if(from == "VND" && to == "USD"){
            result = parseInt(amount) * 0.000043;
        }else if (from == "VND" && to == "VND"){
            result = parseInt(amount) * a;
        }else if (from == "USD" && to == "VND"){
            result = parseInt(amount) * 23404.46;
        }else{
            result = parseInt(amount) * a;
        }
                    document.getElementById("result").value = result;
}