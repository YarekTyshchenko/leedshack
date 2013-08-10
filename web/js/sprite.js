/**
 * Sprite Base Object
 */
var Sprite = {  
    imageSrc: '',
    image: null,
    spriteWidth: 40,
    spriteHeight: 40,
    scaledWidth: 40,
    scaledHeight: 40,
    drawCanvas : 'glass',
    
    initSprite: function() {
        this.image = new Image();
        this.image.src = this.imageSrc;
        this.scaleSprite();
    },

    scaleSprite: function() {
        this.scaledWidth = this.spriteWidth * GameManager.scaleRatio;
        this.scaledHeight = this.spriteHeight * GameManager.scaleRatio;
    },
    
    
    drawSprite: function(delta) {
        if (this.image == null) {
            this.initSprite();
        }
        
        var context = GameManager.getCanvas(this.drawCanvas);

        context.drawImage(
            this.image, this.x * GameManager.scaleRatio, this.y * GameManager.scaleRatio,
            this.scaledWidth, this.scaledHeight
        );
    }

}
