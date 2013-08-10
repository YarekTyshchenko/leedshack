$(document).ready(function() {
    var canvas = document.getElementById('gamearea');
    var context = canvas.getContext('2d');
    ControllerMouse.init(canvas);
    GameManager.init(canvas, context);
    GameManager.addController(ControllerMouse);
    var hand = _.extend({}, Hand);
    GameManager.addHand(hand);
    GameManager.addObject(hand);
    gameloop();
});