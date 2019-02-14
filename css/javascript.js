// JavaScript File
 
/* global $ */

var songs = [
    "Rise",
    "Bye Bye YESTERDAY",
    "Ievan Polkka", 
    "World is Mine"
];

var artists = [
    "MADKID",
    "3-nen E-gumi Utatan",
    "Hatsune Miku", 
    "Hatsune Miku"
];

var images = [
    "https://i.ytimg.com/an_webp/RhWKMHA7YWc/mqdefault_6s.webp?du=3000&sqp=COqaluMF&rs=AOn4CLAuOjkuMD8sEFKjwg-BPXT84E5nOg",
    "https://i.ytimg.com/vi/FyS928U69No/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCWlqvQpQkjyNtCN179AEg_sz_a1A",
    "https://i.ytimg.com/an_webp/ZjDZrReZ4EI/mqdefault_6s.webp?du=3000&sqp=CK7rleMF&rs=AOn4CLCi_eh98tFl1UYkiEWOqzPcdMnppA",
    "https://i.ytimg.com/vi/NY__VTIUsiU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCCdxYL5ahpJbUVEoSdGH69ok1QMQ"
];

var links = [
    "https://www.youtube.com/watch?v=RhWKMHA7YWc&t=23s",
    "https://www.youtube.com/watch?v=FyS928U69No",
    "https://www.youtube.com/watch?v=ZjDZrReZ4EI",
    "https://www.youtube.com/watch?v=NY__VTIUsiU"
];

var lengths = [
    "3:36",
    "4:09",
    "2:30",
    "4:16"
];

function displaySongInfo(){

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });
    
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
    
    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#links").empty();
    $("#lengths").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var artistName = $("#artist").val();
    var imageUrl = $("#image").val();
    var link = $("#links").val();
    var songLength = $("#length").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    links.push(link);
    lengths.push(songLength);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();