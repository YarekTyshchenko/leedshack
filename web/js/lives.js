var Lives = _.extend({}, GameObject);

Lives.drawCanvas = 'effects';
Lives.x = 1700;
Lives.y = 60;
Lives.fontSize = 50;

Lives.type = 'Lives';
Lives.draw = function(delta) {
    context = GameManager.getCanvas(this.drawCanvas);
    context.fillStyle = '#FFFFFF';
    context.textAlign = "left";
    var size = Math.floor(this.fontSize * GameManager.scaleRatio);
    context.font = "bold " + size + "px sans-serif";
    
    context.fillText(
        'Lives: ' + GameManager.lives, this.x * GameManager.scaleRatio, this.y * GameManager.scaleRatio
    );
    return true; 

};
