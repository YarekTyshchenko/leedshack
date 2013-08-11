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
<<<<<<< HEAD
    ControllerLeap.init({ width: GameManager.width, height: GameManager.height});
    GameManager.addController(ControllerLeap);
    //GameManager.addController(ControllerMouse);
    Background.init();

    var table = _.extend({}, GameObject, PhysicsObject, {
        width: 100,
        height: 10,
        x: 50,
        y: 50,
        draw: function(delta) {
            if (this.disabled) {
                return false;
            }

            this.updatePosition(delta);
            context = GameManager.getCanvas('glass');
            context.fillStyle="#183a0d";
            context.fillRect(this.x, this.y, this.width, this.height);

            return true;
        },
        updatePosition: function(delta) {
            this.x += this.vector.x * delta * this.speed * 0.07;
            this.y += this.vector.y * delta * this.speed * 0.02;
        }
    });
    GameManager.addObject(table);
=======
    GameManager.addController(ControllerMouse);
    //Background.init();
    PhysicsWorld.init();
>>>>>>> 5f43da3... Fix physics, debug mode is still on
    gameloop();
});

function reflect(object) {
    for (i in object) {
        console.log(i);
    }
}
