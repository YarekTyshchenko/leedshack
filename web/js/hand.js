var Hand = _.extend({}, GameObject, PhysicsObject, Sprite);

Hand.imageSrc = 'images/armbottom.png';
Hand.spriteWidth = 312;
Hand.spriteHeight = 200;
Hand.type = 'Hand';
Hand.draw = function(delta) {
    if (this.disabled) {
        return false;
    }

    this.updatePosition(delta);
    this.drawSprite();

    return true;
};