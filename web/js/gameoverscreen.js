var GameOverScreen = _.extend({}, GameObject, Sprite);

GameOverScreen.imageSrc = '/images/clint.png';
GameOverScreen.drawCanvas = 'effects';
GameOverScreen.spriteWidth = 386;
GameOverScreen.spriteHeight = 512;
GameOverScreen.x = 0;
GameOverScreen.y = 600;
GameOverScreen.fontSize = 170;
GameOverScreen.fadeCounter = 0;

GameOverScreen.type = 'GameOverScreen';
GameOverScreen.draw = function(delta) {
    context = GameManager.getCanvas(this.drawCanvas);

    context.fillStyle = "rgba(0,0,0," + this.fadeCounter + ")";
    context.fillRect (0, 0, GameManager.width, GameManager.height);
    if (this.fadeCounter >= 1) {
        this.fadeCounter = 1;
        this.drawSprite();
    } else {
        this.fadeCounter += delta/1500;
    }

    context.fillStyle = '#FFFFFF';
    context.textAlign = "center";
    var size = Math.floor(this.fontSize * GameManager.scaleRatio);
    context.font = "bold " + size + "px sans-serif";
    
    context.fillText(
        'Game Over', GameManager.width/2, GameManager.height/2
    );
    context.font = "bold " + size * 0.5 + "px sans-serif";
    context.fillText(
        'Click to try again', GameManager.width/2, GameManager.height/2 + 50
    );

    return true; 

};

GameOverScreen.getId = function() {
    return 'game-over';
};