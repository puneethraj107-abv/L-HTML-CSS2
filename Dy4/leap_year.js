function isLeap(year) {

    if (year % 400 === 0) {
        alert("It's a leap year");
    } else if (year % 100 === 0) {
        alert("Not a leap year");
    } else if (year % 4 === 0) {
        alert("It's a leap year");
    } else {
        alert("Not a leap year");
    }

}

isLeap(2000);