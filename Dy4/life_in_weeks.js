function lifeInWeeks(age) {

    /************Don't change the code above************/
    // this is a program to find total number of days weeks and months left assuming you live till 90 years

    //Write your code here.
    var yearsLeft = 90 - age;
    var daysLeft = yearsLeft * 365;
    var weeksLeft = yearsLeft * 52;
    var monthsLeft = yearsLeft * 12;

    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");


    /*************Don't change the code below**********/
}

lifeInWeeks(26);