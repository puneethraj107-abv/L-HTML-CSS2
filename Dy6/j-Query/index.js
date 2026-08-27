// $("h1").css("color","red");// for setting the value
// console.log($("button").css("color"));// for getting the value

// $(document).keypress(function (event){
//     $("h1").text(event.key);
// });                                  -- depricated code

$(document).keydown(function (event) {
    $("h1").text(event.key);
});