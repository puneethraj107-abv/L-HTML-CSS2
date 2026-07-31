let bottles=99;
let bottleWord=""
let count=99;
while (count!==0) {
    if (bottles>1) {
        bottleWord="bottles";
    } else {
        bottleWord="bottle"
    }
    console.log("\n"+bottles + " " + bottleWord + " of beer on the wall");
    console.log(bottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    bottles--;
    console.log("now it is "+bottles+" of beer.")
    count--;
}
