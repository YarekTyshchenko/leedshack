$(document).ready(function() {
    var canvas = document.getElementById('gamearea');
    var context = canvas.getContext('2d');
    ControllerLeap.init();
    GameManager.init(canvas, context);
    GameManager.addController(ControllerLeap);
    var hand = _.extend({}, Hand);
    GameManager.addHand(hand);
    GameManager.addObject(hand);
    gameloop();
});