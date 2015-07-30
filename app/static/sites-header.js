 $(document).ready(function(){   
    var screen_width = $(window).width();

    var pap = Raphael("page-header", screen_width, 70);
    var text = pap.text(screen_width + 30, 35, "От тук можете да си поръчате сайт!");

    text.attr({
        "font-size": 40,
    });

    text.animate({
        x: screen_width / 2,
    }, 2000)

});

