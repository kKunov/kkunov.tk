function load_home() {
    $("#content").append("/templates/home.html") // tva e taka
}

function load_about_me () {
    innerHTML = '<object type="text/html" data="aboutMe.html">'
    document.getElementById("content").innerHTML; //tva ne e napravi go kato gornoto
}

$(document).ready(function() {
    $("#content").load("home.html")
/*    var homeBtn = $("#home");
    homeBtn.click(load_home);
    var meBtn = $("#about-me");
    meBtn.click(load_about_me);*/
});
