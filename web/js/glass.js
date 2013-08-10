var Glass = _.extend({}, GameObject, PhysicsObject, Sprite);

Glass.imageSrc = 'images/pint.png';
Glass.spriteWidth = 50;
Glass.spriteHeight = 100;
Glass.x = 1600;
Glass.y = 600;
Glass.type = 'Glass';
Glass.draw = function(delta) {
    if (this.disabled) {
        return true;
    }
    this.updatePosition(delta);
    this.drawSprite();

    return true;
};

Glass.disable = function(bool) {
	console.log('Call disable: ' + bool);
	this.disabled = bool;
}