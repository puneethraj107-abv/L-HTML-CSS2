let numberofbuttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);//adding event listener // and don't use () for functions in eventlisteners
//                                                                                                                         it triggers directly when the page loads
//                                                                                              //can be written as anonymous function
}

// detecting button press
function handleClick() {
    let buttonhtml = this.innerHTML;
    makeSound(buttonhtml);
    buttonAnimation(buttonhtml);
}

// detecting keyboard press
document.addEventListener("keydown", function(event) {//adding event listener to keys
    makeSound(event.key);//"event" in a function tells us about the keyboardevent that triggered it // name we give to the input does not matter
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");//creating a new Audio variable
            tom1.play();//using play function to play the audio pointed to by the src
            break;

        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
    }

}

function buttonAnimation(currentkey){
    let activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");// accessing and adding new class to element
    setTimeout(function (){// setting timer for the animation
        activebutton.classList.remove("pressed")// removing the class from the element
    },100)
}

//In JavaScript, "this" is a special keyword that refers to the object/context that is currently calling the function.
//Method is a function that is associated with an object
//Housekeeper1.clean(); -- calling a method