var PhysicsWorld = function() {
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
            ,  b2AABB = Box2D.Collision.b2AABB
            ,   b2BodyDef = Box2D.Dynamics.b2BodyDef
            ,   b2Body = Box2D.Dynamics.b2Body
            ,   b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            ,   b2Fixture = Box2D.Dynamics.b2Fixture
            ,   b2World = Box2D.Dynamics.b2World
            ,   b2MassData = Box2D.Collision.Shapes.b2MassData
            ,   b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
            ,   b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
            ,   b2DebugDraw = Box2D.Dynamics.b2DebugDraw
            ,  b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
            ;

    // Init the physics engine
    var world = new Box2D.Dynamics.b2World(
        new Box2D.Common.Math.b2Vec2(0, 9.8),
        // new Box2D.Common.Math.b2Vec2(0, 0),
        true
    );

    var fixDef = new Box2D.Dynamics.b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;
    fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;

    var bodyDef = new Box2D.Dynamics.b2BodyDef;
    bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;

    var _init = function() {
        //setup debug draw
        var debugDraw = new Box2D.Dynamics.b2DebugDraw();
        debugDraw.SetSprite(document.getElementById("physics").getContext("2d"));
        debugDraw.SetDrawScale(30.0);
        debugDraw.SetFillAlpha(0.5);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit | Box2D.Dynamics.b2DebugDraw.e_jointBit);
        world.SetDebugDraw(debugDraw);

        bodyDef.type = b2Body.b2_staticBody;
        fixDef.shape = new b2PolygonShape;
        fixDef.shape.SetAsBox(20, 2);
        bodyDef.position.Set(10, 400 / 30 + 1.8);
        world.CreateBody(bodyDef).CreateFixture(fixDef);
        bodyDef.position.Set(10, -1.8);
        world.CreateBody(bodyDef).CreateFixture(fixDef);
        fixDef.shape.SetAsBox(2, 14);
        bodyDef.position.Set(-1.8, 13);
        world.CreateBody(bodyDef).CreateFixture(fixDef);
        bodyDef.position.Set(21.8, 13);
        world.CreateBody(bodyDef).CreateFixture(fixDef);
    }
    var _s = function(unit) {
        return unit/93;
    }
    return {
        init: _init,
        step: function(delta) {
            world.Step(
                1 / 60,   //frame-rate
                10,       //velocity iterations
                10        //position iterations
            );
            world.DrawDebugData();
        },
        scale: _s,
        upScale: function(unit) {
            return unit * 93;
        },
        createBox: function(x, y, width, height, angle) {
            var boxFixDef = new b2FixtureDef;
            boxFixDef.density = 1.0;
            boxFixDef.friction = 0.5;
            boxFixDef.restitution = 0.01;
            var boxDef = new b2BodyDef;
            boxDef.fixedRotation = true;
         
            boxDef.type = b2Body.b2_dynamicBody;
            boxFixDef.shape = new b2PolygonShape;
            boxDef.position.Set(_s(x), _s(y));
            //boxDef.angle = angle * (Math.PI / 180) || 0;
            boxFixDef.shape.SetAsBox(_s(width)/2, _s(height)/2);
            return world.CreateBody(boxDef).CreateFixture(boxFixDef);
        },
        createFixture: function(x, y, width, height) {
            var boxFixDef = new b2FixtureDef;
            boxFixDef.density = 1.0;
            boxFixDef.friction = 0.5;
            boxFixDef.restitution = 0.2;
            var boxDef = new b2BodyDef;
         
            boxDef.type = b2Body.b2_staticBody;
            boxFixDef.shape = new b2PolygonShape;
            boxDef.position.Set(_s(x)+(_s(width)/2), _s(y)+(_s(height)/2));
            //boxDef.angle = angle * (Math.PI / 180) || 0;
            boxFixDef.shape.SetAsBox(_s(width)/2, _s(height)/2);
            return world.CreateBody(boxDef).CreateFixture(boxFixDef);
        },
        addObject: function(object) {
            //_bodies.push(object);
        }
    };
}();