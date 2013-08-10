$(document).ready(function() {
    var canvas = document.getElementById('gamearea');
    var context = canvas.getContext('2d');
    GameManager.init(canvas, context);
    GameManager.addObject(_.extend({}, Hand));
    gameloop();
});