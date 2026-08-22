let numberofbuttons=document.querySelectorAll(".drum").length;//".____" use it to select class

for (let i=0;i<=numberofbuttons;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);//don't add () to the function in event listeners

}

function handleClick() {//can use anonymous function but prefer named func.
    let buttonhtml=this.innerHTML;
    switch (buttonhtml){
        case 'w':
        let tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case 'a':
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            let kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        default:
            console.log(buttonhtml);

    }
}




//In JavaScript, this is a special keyword that refers to the object/context that is currently calling the function.