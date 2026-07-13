function getMilk(money,costPerBottle) {
    var bottles = parseInt(money / costPerBottle) ;
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy "+calcbottles(money, costPerBottle)+" bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcchange(money,costPerBottle);
}

function calcbottles(startingmoney , costperbottle) {
    var numberofbottles = Math.floor(startingmoney/costperbottle);
    return numberofbottles;
}

function calcchange(startingamount, costperbottle) {
    var change = startingamount%costperbottle;
    return change;
}

console.log("Hi master here is your change "+getMilk(5,1.5));