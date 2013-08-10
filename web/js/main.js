$(document).ready(function() {
    var canvases = {
        'background' : false,
        'people' : true,
        'bar': false,
        'glass' : true,
        'effects' : true
    };

    var width  = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    ControllerMouse.init(window);
    GameManager.init(canvases, width, height);
    GameManager.addController(ControllerMouse);
    var hand = _.extend({}, Hand);
    GameManager.addHand(hand);
    GameManager.addObject(hand);
    gameloop();
});