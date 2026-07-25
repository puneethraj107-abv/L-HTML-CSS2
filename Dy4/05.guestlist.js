var guestlist = ["angela","puneeth","jack","geetha","rajashekar"];

var guestname = prompt("what is your name? ");
if (guestlist.includes(guestname)) {
    console.log("welcome");
} else {
    console.log("sorry you are not on the guest list. be good to your friends next time");
}