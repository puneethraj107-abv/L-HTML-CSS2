let output=[];

function fibonaci_generator(numbers){
    for(let n=0;n<numbers;n++) {
        if(n===0){
            output.push(0)
        }
        else if(n===1){
            output.push(1)
        }
        else {
            output.push((output[output.length-1])+output[output.length-2]);
        }

    }

}

fibonaci_generator(10);
console.log(output);
