 $(document).ready(function(){   
    var screen_width = $(window).width();

    var pap = Raphael("page-header", screen_width, 70);
    var text = pap.text(screen_width + 30, 35, "Добре дошли");

    text.attr({
        "font-size": 50,
    });

    text.animate({
        x: screen_width / 2,
    }, 1000)

});
