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
    GameManager.init(canvases, width, height);    
    ControllerLeap.init({ width: GameManager.width, height: GameManager.height });
    GameManager.addController(ControllerLeap);
    var hand = _.extend({}, Hand);
    GameManager.addHand(hand);
    GameManager.addObject(hand);
    gameloop();
});