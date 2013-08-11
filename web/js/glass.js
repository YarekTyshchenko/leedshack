var Glass = _.extend({}, GameObject, Sprite);

Glass.imageSrc = 'images/pint.png';
Glass.spriteWidth = 50;
Glass.spriteHeight = 100;
Glass.x = 1600;
Glass.y = 600;
Glass.type = 'Glass';
Glass.state = 'free';

Glass.draw = function(delta) {
    if (this.disabled) {
        return true;
    }
    this.updatePosition(delta);
    this.drawSprite();

    return true;
};

var oldInit = Glass.init;

Glass.init = function() {
    oldInit();
    EventManager.on('controller:update', _.bind(Glass.onUpdate, this));
    EventManager.on('hand:grabbed-glass', _.bind(Glass.onGrabbed, this));
    EventManager.on('hand:release', _.bind(Glass.onRelease, this));
};

var previousPoint = {x: this.x, y: this.y};

Glass.onRelease = function(x, y) {
    this.disable(false);
    this.jumpTo(x, y);
    this.applyImpulse(x - previousPoint.x, y - previousPoint.y);
    this.state = 'free';
}

Glass.onUpdate = function(point) {
    if (this.state == 'held') {
        this.x = point.x / GameManager.scaleRatio;
        this.y = point.y / GameManager.scaleRatio;
    }
    previousPoint = {x: this.x, y: this.y};
};

Glass.onGrabbed = function(point) {
    this.state = 'held';
}

Glass.disable = function(bool) {
	this.disabled = bool;
}