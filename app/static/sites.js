$(document).ready(function () {
    var btnMid = $('.btn-mid');
    btnMid.click(function () {
        $("#countainer-mid").load('/static/midsite.html');
    });
})
