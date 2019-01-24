// JavaScript File


// 1 and 2
//var watchList = ["Rising of the Shield Hero, ", "FRIENDS, ", "One Punch Man, ", "Halo TV Show."];

//$('.button').click(function() {
// watchList.forEach(function(one){
//     $(".watchList").append("<li>I Want to watch" + " " + one + "</li>");
// });
//});


var songList = ["test"];
('button').click(function() {
songList.forEach(function(test){
    (".songList").append(test);
});
});

/*global $*/
var songList = [];


$('.add').click(function() {
    var userInput = $(".song").val();

    songList.push(userInput);

    $(".songs").append("<p>" + userInput + "<p>");
});