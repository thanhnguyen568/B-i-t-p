function calculate() {
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let bmi = weight/(height*height)

        if (bmi < 18){
            document.write("Underweight");
        }else if (bmi < 25.0){
            document.write("Normal");
        }else if (bmi < 30.0){
            document.write("Overweight");
        }else{
            document.write("Obese");
        }
}