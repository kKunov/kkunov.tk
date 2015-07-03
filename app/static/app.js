$(document).ready(function() {
    $("#content").load("/static/home.html");
    var homeBtn = $("#home");
    homeBtn.click(function () {
        $("#content").load("/static/home.html");
    });
    var sitesBtn = $("#sites");
    sitesBtn.click(function () {
        $("#content").load("/static/sites.html");
    });
    var sitesBtn2 = $("#sites2");
    sitesBtn2.click(function () {
        $('#sites').trigger('click');
    });
});
