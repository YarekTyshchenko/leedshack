$(document).ready(function() {
    var canvases = {
        'background' : false,
        'people' : true,
        'bar': true,
        'glass' : true,
        'effects' : true,
        'physics': false
    };

    var width  = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    GameManager.init(canvases, width, height);
    
    SoundManager.init('mp3s',[
    	'yelling.mp3',
    	'clint.mp3',
    	'glass_move.mp3',
    	'glass_smash.mp3',
    	'noise1.mp3',
    	'noise2.mp3'
    ]);
    SoundManager.playSound('clint', true);

    ControllerMouse.init(document.getElementById('effects'));
    ControllerLeap.init({ width: GameManager.width, height: GameManager.height});
    GameManager.addController(ControllerLeap);
    GameManager.addController(ControllerMouse);
    Background.init();

    PhysicsWorld.init();
    GameManager.start();
});

function reflect(object) {
    for (i in object) {
        console.log(i);
    }
}
