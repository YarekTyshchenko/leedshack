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

Hand.draw = function(delta) {
    if (this.disabled) {
        return false;
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