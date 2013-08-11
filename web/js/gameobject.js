/**
 * Base game object class
 */
var GameObject = {
    id: null,
    x: 0,
    y: 0,
    speed: 0,
    type: 'GameObject',
    vector: {
        x: 0, 
        y: 0
    },
    disabled: false,
    
    drawer: null,
    
    init: function() {
        
    },
    
    draw : function(delta) {
    
    },

    updatePosition: function(delta) {
        this.x += this.vector.x * delta * this.speed * 0.02;
        this.y += this.vector.y * delta * this.speed * 0.02;
    },

    getId: function() {
        return this.type + '-' + Math.random();
    }
}

_.extend(GameObject, Backbone.Events);
