var Hand = _.extend({}, GameObject, Sprite);

Hand.imageSrc = 'images/hands.png';
Hand.spriteWidth = 312;
Hand.spriteHeight = 200;
Hand.sheetHeight =  560;
Hand.sheetWidth = 940;
Hand.speed = 0;
Hand.type = 'Hand';

Hand.spriteStates = {
    open : 0,
    closed : 2,
    holding : 1 
};
// States
// - Open
// - Closed
// - Holding
Hand.state = 'open';

Hand.oldInit = Hand.init;

Hand.init = function() {
    this.oldInit.apply(this);
    EventManager.on('controller:update', _.bind(Hand.onUpdate, this));
    EventManager.on('controller:grab', _.bind(Hand.onGrab, this));
    EventManager.on('controller:release', _.bind(Hand.onRelease, this));
};

Hand.onRelease = function(point) {
    if (this.state == 'open') {
        return;
    }
    if (this.state == 'holding') {
        EventManager.trigger('hand:release', this.x, this.y);
    }
    this.state = 'open';
};

Hand.onGrab = function(point) {
    if (this.state == 'closed') {
        return;
    }
    this.setPosition(point);
    glass = GameManager.glass;
    if (this.x <  ((glass.x + 70))
        && (this.x >= (glass.x - 60)) 
        && (this.y >= (glass.y - 120))
        && (this.y <  ((glass.y) + 120))
    ) {
        this.state = 'holding';
        EventManager.trigger('hand:grabbed-glass', point);
        return;
    }
    this.state = 'closed';
};

Hand.onUpdate = function(point) {
    this.setPosition(point);
    if (this.x < 1300 && this.state == 'holding') {
        EventManager.trigger('hand:hit-bounds', {x: this.x, y:this.y});
    }
};

Hand.setPosition = function(point) {
    this.x = point.x / GameManager.scaleRatio;
    this.y = point.y / GameManager.scaleRatio;
};

Hand.draw = function(delta) {
    if (this.disabled) {
        return true;
    }
    this.updatePosition(delta);
    this.drawSprite();

    return true;
};

Hand.drawSprite = function(delta) {
    if (this.image == null) {
        this.initSprite();
    }

    var context = GameManager.getCanvas(this.drawCanvas);

    context.drawImage(
            this.image, 0, Hand.spriteStates[this.state] * this.sheetHeight,
            this.sheetWidth, this.sheetHeight,
            this.x * GameManager.scaleRatio, this.y * GameManager.scaleRatio,
            this.scaledWidth, this.scaledHeight);
};
