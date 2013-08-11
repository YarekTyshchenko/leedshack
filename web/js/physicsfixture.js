var body;
var PhysicsFixture = {
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
    //body = PhysicsWorld.createFixture(this.x, this.y, this.width, this.height);
  	body = PhysicsWorld.createFixture(
        this.physicsX || this.x, this.physicsY || this.y,
        this.physicsWidth || this.spriteWidth || this.width,
        this.physicsHeight || this.spriteHeight || this.height
    );

    //console.log(this.width);
	}
}