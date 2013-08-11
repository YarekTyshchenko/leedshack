var Table = _.extend({}, GameObject, PhysicsFixture, Sprite);

Table.imageSrc = 'images/bar_layer.png';
Table.spriteWidth = 2072;
Table.spriteHeight = 508;
Table.drawCanvas = 'bar';
Table.x = -20;
Table.y = 600;
Table.type = 'Table';
Table.drawn = 0;
Table.draw = function(delta) {
    if (this.disabled || this.drawn > 5) {
        return false;
    }
    this.updatePosition(delta);
    this.drawSprite();
    this.drawn++; //HACK   
    return true; 

};