var Person = _.extend({}, GameObject, Sprite);

Person.imageSrc = 'images/man1.png';
Person.spriteWidth = 370;
Person.spriteHeight = 700;
Person.x = 1600;
Person.y = 600;
Person.type = 'Person';
Person.drawCanvas = 'people';
Person.active = false;
Person.draw = function(delta) {
    if (this.disabled) {
        return true;
    }
    this.updatePosition(delta);
    this.drawSprite();

    return true;
};

Person.setActive = function(active) {
    this.active = active;
};