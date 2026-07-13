function BMIcalculator(weight,height){
    var BMI = Math.ceil(weight/(height*height));
    console.log("your BMI is "+BMI);
}

BMIcalculator(54,1.73);