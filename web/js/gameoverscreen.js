var GameOverScreen = _.extend({}, GameObject);

GameOverScreen.drawCanvas = 'effects';
GameOverScreen.x = 30;
GameOverScreen.y = 60;
GameOverScreen.fontSize = 170;

GameOverScreen.type = 'GameOverScreen';
GameOverScreen.draw = function(delta) {
    context = GameManager.getCanvas(this.drawCanvas);
    context.fillStyle = '#FFFFFF';
    context.textAlign = "center";
    var size = Math.floor(this.fontSize * GameManager.scaleRatio);
    context.font = "bold " + size + "px sans-serif";
    
    context.fillText(
        'Game Over', GameManager.width/2, GameManager.height-100
    );
    context.font = "bold " + size * 0.5 + "px sans-serif";
    context.fillText(
        'Click to try again', GameManager.width/2, GameManager.height-50
    );

    return true; 

};

GameOverScreen.getId = function() {
    return 'game-over';
};