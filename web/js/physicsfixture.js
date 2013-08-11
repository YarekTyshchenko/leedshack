var PhysicsFixture = function(){
    var body;
    return {
    	init: function() {
          	body = PhysicsWorld.createFixture(
                this.physicsX || this.x, this.physicsY || this.y,
                this.physicsWidth || this.spriteWidth || this.width,
                this.physicsHeight || this.spriteHeight || this.height
            );
    	}
    }
}();
