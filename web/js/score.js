var Score = _.extend({}, GameObject);

Score.drawCanvas = 'effects';
Score.x = 30;
Score.y = 60;
Score.fontSize = 50;

Score.type = 'Score';
Score.draw = function(delta) {
    context = GameManager.getCanvas(this.drawCanvas);
    context.fillStyle = '#FFFFFF';
    context.textAlign = "left";
    var size = Math.floor(this.fontSize * GameManager.scaleRatio);
    context.font = "bold " + size + "px sans-serif";
    
    context.fillText(
        'Score: ' + GameManager.score, this.x * GameManager.scaleRatio, this.y * GameManager.scaleRatio
    );
    return true; 

};
