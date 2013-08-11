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
    hand: null, 
    glass: null,
    table: null,
    coaster: null,
    people: [],
    lives: 3,
    score: 0,
    
    init: function(canvasIds, width, height) {
        this.setDimensions(width, height);
        this.initCanvases(canvasIds);
        this.addHand(_.extend({}, Hand));
        this.addGlass(_.extend({}, Glass));
        this.addTable(_.extend({}, Table));
        this.addPeople();
        this.addCoaster(_.extend({}, Coaster));
        this.initHud();
    },

    initHud: function() {
        var score = _.extend({}, Score);
        this.addObject(score);
        var lives = _.extend({}, Lives);
        this.addObject(lives);
    },

    addPeople: function() {
        var y = 230;
        var people = [
            _.extend({}, Person, {
                imageSrc : 'images/man1.png',
                x : 100, 
                y: y,
                speed: 5
            }),
            _.extend({}, Person, {
                imageSrc : 'images/woman1.png',
                x : 350, 
                y: y,
                speed:10
            }),
            _.extend({}, Person, {
                imageSrc : 'images/man2.png',
                x : 650, 
                y: y,
                speed: 0
            }),
            _.extend({}, Person, {
                imageSrc : 'images/woman2.png',
                x : 900, 
                y: y,
                speed: 12
            })
        ];
        for (var i = 0; i <= people.length -1; i++) {
            this.people.push(people[i]);
            this.addObject(people[i]);
        }
    },

    addController: function(controller) {
        this.controller = controller;
    },

    addHand: function(hand) {
        this.hand = hand;
        this.addObject(hand);
    },

    addCoaster: function(coaster) {
        this.coaster = coaster;
        this.addObject(coaster);
    },

    addGlass: function(glass) {
        this.glass = glass;
        this.addObject(glass);
    },

    addTable: function(table) {
        this.table = table;
        this.addObject(table);
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

    newTurn: function() {
        var glass = _.extend({}, Glass);
        var coaster = _.extend({}, Coaster);

        this.addGlass(glass);
        this.addCoaster(coaster);
    },
        
    /**
     * Draw the current state of the game, 
     * delta is the time passed since the last frame
     */
    draw: function(delta) {
        this.clearCanvases();

        for (var i in this.objects) {
            if (!this.objects[i].draw(delta)) {
                delete(this.objects[i]);
            }
        }
        for (var i in this.particles) {
            if (!this.particles[i].draw(delta)) {
                delete(this.particles[i]);
            }
        }
    },
    
    clearCanvases: function() {
        for (var i = 0; i <= this.refreshCanvases.length -1; i++) {
            this.canvases[this.refreshCanvases[i]].clearRect(0, 0, this.width, this.height);
        }
    },
    addObject: function(gameObject) {
        if (! gameObject.id) {
            gameObject.id = gameObject.getId();
        }
        this.objects[gameObject.id] = gameObject;
        gameObject.init();
    },
    
    addParticle: function(gameObject) {
        this.particles[gameObject.id] = gameObject;
    }
    
}
