var Coaster = _.extend({}, GameObject, Sprite);

Coaster.imageSrc = 'images/coaster.png';
Coaster.spriteWidth = 105;
Coaster.spriteHeight = 70;
Coaster.drawCanvas = 'bar';
Coaster.x = 200;
Coaster.y = 650;

Coaster.type = 'Coaster';
Coaster.drawn = 0;
Coaster.draw = function(delta) {
    this.updatePosition(delta);
    this.drawSprite();
    return true; 

};
