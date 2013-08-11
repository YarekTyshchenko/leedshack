var GameOverScreen = _.extend({}, GameObject, Sprite);

GameOverScreen.imageSrc = '/images/clint.png';
GameOverScreen.drawCanvas = 'effects';
GameOverScreen.spriteWidth = 386;
GameOverScreen.spriteHeight = 512;
GameOverScreen.x = 0;
GameOverScreen.y = 600;
GameOverScreen.fontSize = 170;

GameOverScreen.type = 'GameOverScreen';
GameOverScreen.draw = function(delta) {
    this.drawSprite();
    context = GameManager.getCanvas(this.drawCanvas);
    context.fillStyle = '#FFFFFF';
    context.textAlign = "center";
    var size = Math.floor(this.fontSize * GameManager.scaleRatio);
    context.font = "bold " + size + "px sans-serif";
    
    context.fillText(
        'Game Over', GameManager.width/2, GameManager.height - 100
    );
    context.font = "bold " + size * 0.5 + "px sans-serif";
    context.fillText(
        'Click to try again', GameManager.width/2, GameManager.height - 50
    );

    return true; 

};

GameOverScreen.getId = function() {
    return 'game-over';
};