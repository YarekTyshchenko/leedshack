/**
 * Game manager, stores entities, handles events, draws game
 */
var GameManager = {
    
    objects : {},
    particles: {},
    canvas: null, 
    context: null,
    width: 750,
    height: 500,
    
    init : function(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    },

    addController: function(controller) {
        this.controller = controller;
    },

    addHand: function(hand) {
        this.hand = hand;
        this.controller.on('update', function(point) {
            hand.x = point.x;
            hand.y = point.y;
        });
    },
    /**
     * Draw the current state of the game, 
     * delta is the time passed since the last frame
     */
    draw: function(delta) {
        this.context.clearRect(0, 0, this.width, this.height);
        for (i in this.objects) {
            if (!this.objects[i].draw(delta)) {
                delete(this.objects[i]);
            }
        }
        for (i in this.particles) {
            if (!this.particles[i].draw(delta)) {
                delete(this.particles[i]);
            }
        }
    },
    
    addObject: function(gameObject) {
        this.objects[gameObject.id] = gameObject;
        
    },
    
    addParticle: function(gameObject) {
        this.particles[gameObject.id] = gameObject;
    }, 
    
    bindEvents: function() {

    }
    
}