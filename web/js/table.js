var Table = _.extend({}, GameObject, PhysicsFixture, Sprite);

Table.imageSrc = 'images/bar_layer.png';
Table.spriteWidth = 2072;
Table.spriteHeight = 508;
Table.drawCanvas = 'bar';
Table.x = -20;
Table.y = 600;
//Table.physicsX = 130;
Table.physicsY = 626;
Table.type = 'Table';
Table.draw = function(delta) {
    this.updatePosition(delta);
    this.drawSprite();  
    return true; 

};
