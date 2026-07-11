var tweet = prompt("compose your tweet");
var tweetcount = tweet.length;
console.log("you have written " + tweetcount + " you have " + (240 - tweetcount)+ " characters left");

// tweet.slice( , );
var tweet = prompt("compose your tweet");
var tweetunder140 = tweet.slice(0,140);
alert(tweetunder140);

// name.touppercase() name.tolowercase()
var name = prompt("what is your name?").toLowerCase();
var firstname = name.slice(0,1).toUpperCase();
alert("Hello "+ firstname + name.slice(1,name.length));