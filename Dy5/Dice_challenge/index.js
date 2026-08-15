//creating 1st random number
let random_number1=Math.floor(Math.random()*6)+1;

let randomdiceimg="images/dice"+random_number1+".png";

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceimg);

//creating 2nd random number
let random_number2=Math.floor(Math.random()*6)+1;

let randomdiceimg2="images/dice"+random_number2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimg2);

//the logic to determine winner
if (random_number1>random_number2) {
    document.querySelector("h1").innerHTML="Player 1 wins sukker!";
}
else if(random_number2>random_number1) {
    document.querySelector("h1").innerHTML="Player 2 wins asshole!";
} else {
    document.querySelector("h1").innerHTML="its a Draw";
}