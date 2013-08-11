var PhysicsObject = function() {
	var body;
	return {
		init: function() {
		  	body = PhysicsWorld.createBox(
		  		this.physicsX || this.x, this.physicsY || this.y,
		     	this.physicsWidth || this.spriteWidth || this.width,
		     	this.physicsHeight || this.spriteHeight || this.height
			);
			//body.GetBody().SetMassData(this.mass || 1);
			//console.log(body.GetBody().GetMassData());
	  	},
	    updatePosition: function(delta) {
	    	var vector = body.GetBody().GetPosition();
	        this.x = PhysicsWorld.upScale(vector.x);
	        this.y = PhysicsWorld.upScale(vector.y);
	    },
	    jumpTo: function(x, y) {
	    	body.GetBody().SetPosition(
	    		new Box2D.Common.Math.b2Vec2(PhysicsWorld.scale(x), PhysicsWorld.scale(y))
	    	);
	    },
	    applyImpulse: function(x, y) {
	    	if (x > 10) x = 10;
	    	if (y > 10) y = 10;
	    	//body.GetBody().ApplyImpulse(new Box2D.Common.Math.b2Vec2(x/2, y/2), body.GetBody().GetWorldCenter());
	    }
	}
}();