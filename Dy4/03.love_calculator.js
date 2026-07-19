// Love calculator
a = prompt("Tell me your name?");
b = prompt("Tell me your significant others name");
var n = Math.random();
n = n * 100;
n = Math.floor(n)+1;

if (n > 70) {
    alert("Your love score is "+n+" You love your self like kanye loves kanye");
}
if (n<70 && n>30) {
    alert("Your love score is "+n+" you don't love her its just attraction");
}
if (n<=30) {
    alert("Your love score is "+n+" you love your dog more than her");
}