var Glass = _.extend({}, GameObject, PhysicsObject, Sprite);

Glass.imageSrc = 'images/pint.png';
Glass.spriteWidth = 60;
Glass.spriteHeight = 150;
Glass.x = 1600;
Glass.y = 600;
Glass.type = 'Glass';
Glass.state = 'rest';
Glass._released = false;

Glass.draw = function(delta) {
    if (this.disabled) {
        return true;
    }

    //Check if the glass has stopped moving after a throw
    var previousPosition = {x: this.x, y: this.y};
    this.updatePosition(delta);
    if (this.x == previousPosition.x && this.y == previousPosition.y) {
        if (this.state == 'free' && this._released && (!this.isAwake())) {
            this.state = 'rest';
            EventManager.trigger('glass:stop', previousPosition);
        }
    }

    if (this.y > 1080) {
        EventManager.trigger('glass:fall');
    }
    this.drawSprite();

    return true;
};

Glass.oldInit = Glass.init;

Glass.init = function() {
    this.oldInit.apply(this);
    EventManager.on('controller:update', _.bind(Glass.onUpdate, this));
    EventManager.on('hand:grabbed-glass', _.bind(Glass.onGrabbed, this));
    EventManager.on('hand:release', _.bind(Glass.onRelease, this));
};

Glass.previousPoints = [];
Glass.counter = 0;

Glass.setPreviousPoint = function(x, y) {
    this.previousPoints[this.counter%5] = {x: x, y: y};
    this.counter++;
};

Glass.getVector = function(x, y) {
    var length = this.previousPoints.length;
    var tot_x = this.previousPoints[this.counter % length].x;
    var tot_y = this.previousPoints[this.counter % length].y;
    for (var i = 1; i <= length - 1; i++) {
        var point = this.previousPoints[(this.counter + i) % length];
        tot_x += point.x ;
        tot_y += point.y ;
    }
    return {x: (x - tot_x/length), y: (y - tot_y/length)};
}

Glass.onRelease = function(x, y) {
    this.disable(false);
    this.jumpTo(x, y);
    var vector = this.getVector(x, y);
    this.applyImpulse(vector.x, vector.y);
    this.state = 'free';
    this._released = true;
}

Glass.onUpdate = function(point) {
    if (this.state == 'held') {
        this.x = point.x / GameManager.scaleRatio;
        this.y = point.y / GameManager.scaleRatio;
    }
    this.setPreviousPoint(this.x, this.y);
};

Glass.onGrabbed = function(point) {
    this.state = 'held';
    this.disable(true);
}

Glass.disable = function(bool) {
	this.disabled = bool;
}

Hand.getId = function() {
    return "glass";
}
