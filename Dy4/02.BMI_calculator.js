function BMIcalculator(weight,height){
    var BMI = Math.ceil(weight/(height*height));
    if (BMI<18.5) {
        console.log("Your BMI is "+BMI+", so you are underweight.");
    } if(BMI>=18.5 && BMI <= 24.9) {
        console.log("Your BMI is "+BMI+", so you have normal weight.");
    } if (BMI >24.9) {
        console.log("Your BMI is "+BMI+", so you are overweight.");
    }
}

BMIcalculator(54,1.73);