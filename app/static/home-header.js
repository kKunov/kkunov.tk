var screen_width = $(window).width();

var stage = new Kinetic.Stage({
    container: "page-header",
    width: screen_width,
    height: 70,
});

var layer = new Kinetic.Layer();
var text = new Kinetic.Text({
    x: stage.width,
    y:20,
    height: 60,
    width: 230,
    fontSize: 36,
    fill: "black",
    text: "Добре дошли",
});

layer.add(text);
stage.add(layer);

var amplitude = 3 * (screen_width / 3);
var period = 3000;
var anim = new Kinetic.Animation(function(frame){
    text.setX(amplitude * Math.sin(frame.time*2*Math.PI/period) + (screen_width - 20));
    if (text.getX() <= screen_width / 2 - 230 /2){
        this.stop();
    }
}, layer);

anim.start();
