$(document).ready(function() {
    var canvases = {
        'background' : false,
        'people' : true,
        'bar': false,
        'glass' : true,
        'effects' : true,
        'physics': false
    };

    var width  = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    GameManager.init(canvases, width, height);    
    ControllerMouse.init(document.getElementById('effects'));
    ControllerLeap.init({ width: GameManager.width, height: GameManager.height});
    //GameManager.addController(ControllerLeap);
    GameManager.addController(ControllerMouse);
    Background.init();

    PhysicsWorld.init();
    gameloop();
});

function reflect(object) {
    for (i in object) {
        console.log(i);
    }
}
