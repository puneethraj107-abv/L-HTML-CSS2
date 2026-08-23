let numberofbuttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    let buttonhtml = this.innerHTML;
    makeSound(buttonhtml);
    buttonAnimation(buttonhtml);
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
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
    activebutton.classList.add("pressed");
    setTimeout(function (){
        activebutton.classList.remove("pressed")
    },100)
}

//In JavaScript, this is a special keyword that refers to the object/context that is currently calling the function.