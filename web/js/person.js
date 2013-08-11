var Person = _.extend({}, GameObject, Sprite);

Person.imageSrc = 'images/man1.png';
Person.spriteWidth = 370;
Person.spriteHeight = 700;
Person.x = 1600;
Person.y = 600;
Person.type = 'Person';
Person.drawCanvas = 'people';
Person.state = 'stopped';
Person.time = 100;
Person.speed = 1;
Person.active = false;
Person.vector = {x: 0, y:1};
Person.draw = function(delta) {
    if (this.disabled) {
        return true;
    }
    if (this.y >= 260) {
        this.vector.y = -1;
    }
    if (this.y <= 200) {
        this.vector.y = 1;
    }

    this.updatePosition(delta);
    this.drawSprite();

    return true;
};

Person.setActive = function(active) {
    this.active = active;
};