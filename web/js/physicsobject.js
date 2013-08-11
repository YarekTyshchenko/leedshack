var PhysicsObject = function() {
	var body;
	return {
		init: function() {
			// var fixDef = PhysicsWorld.getFixtureDef();

	  //       var bodyDef = PhysicsWorld.getBodyDef();
	  //       bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
	  //       fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape(
	  //           0.15 //radius
	  //       );
	         
	  //       bodyDef.position.x = (Math.random() * 3 - 1.5);
	  //       bodyDef.position.y = (Math.random() * 3 - 1.5);
	  //       this.body = world.CreateBody(bodyDef);
	  //       this.body.CreateFixture(fixDef);
		  	body = PhysicsWorld.createBox(
		  		this.physicsX || this.x, this.physicsY || this.y,
		     	this.physicsWidth || this.spriteWidth || this.width,
		     	this.physicsHeight || this.spriteHeight || this.height
			);
			//body.GetBody().SetMassData(this.mass || 1);
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
	    	body.GetBody().ApplyImpulse(new Box2D.Common.Math.b2Vec2(x/2, y/2), body.GetBody().GetWorldCenter());
	    }
	}
}();