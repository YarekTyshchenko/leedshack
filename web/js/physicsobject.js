var PhysicsObject = {
    updatePosition: function(delta) {
        this.x += this.vector.x * delta * this.speed * 0.02;
        this.y += this.vector.y * delta * this.speed * 0.02;
    }
}