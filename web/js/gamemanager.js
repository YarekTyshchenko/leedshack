/**
 * Game manager, stores entities, handles events, draws game
 */
var GameManager = {
    
    objects : {},
    particles: {},
    canvases: {}, 
    refreshCanvases: [],
    width: 750,
    height: 500,
    scaleRatio : 1,
    
    init: function(canvasIds, width, height) {
        this.setDimensions(width, height);
        this.initCanvases(canvasIds);
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

    setDimensions: function(width, height) {
        width = width;
        heigth = height ;
        var ratio = width/height;
        var desired = 16/9;
        var alt = 9/16;
        if (ratio > desired) {
            this.width = Math.floor(height * desired);
            this.height = Math.floor(height);
        } else {
            this.height = width * alt;
            this.width = width;
        }
        this.scaleRatio = this.width/1920;
    },

    initCanvases: function(canvases) {
        for (var canvas in canvases) {
            var context = document.getElementById(canvas).getContext('2d');
            context.canvas.width = this.width;
            context.canvas.height = this.height;
            this.canvases[canvas] = context;
            if (canvases[canvas]) {
                this.refreshCanvases.push(canvas);
            }
        }
    },

    getCanvas: function(name) {
        return this.canvases[name];
    },
        
    /**
     * Draw the current state of the game, 
     * delta is the time passed since the last frame
     */
    draw: function(delta) {
        this.clearCanvases();

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
    
    clearCanvases: function() {
        for (var i = 1; i < this.refreshCanvases.length -1; i++) {

            this.canvases[this.refreshCanvases[i]].clearRect(0, 0, this.width, this.height);
        }
    },
    addObject: function(gameObject) {
        if (! gameObject.id) {
            gameObject.id = gameObject.getId();
        }
        this.objects[gameObject.id] = gameObject;
    },
    
    addParticle: function(gameObject) {
        this.particles[gameObject.id] = gameObject;
    }, 
    
    bindEvents: function() {

    }
    
}
