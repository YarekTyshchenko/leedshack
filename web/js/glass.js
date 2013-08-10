var Glass = _.extend({}, GameObject, PhysicsObject, Sprite);

Glass.imageSrc = 'images/pint.png';
Glass.spriteWidth = 50;
Glass.spriteHeight = 100;
Glass.x = 300;
Glass.y = 300;
Glass.type = 'Glass';
Glass.draw = function(delta) {
    if (this.disabled) {
        return false;
    }
    this.updatePosition(delta);
    this.drawSprite();

    return true;
};