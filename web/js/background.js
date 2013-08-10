/**
 * Sprite Base Object
 */
var Background = {  
    imageSrc: 'images/background.jpg',
    image: null,
    canvas: null,
    
    init: function() {
        _.bindAll(this, 'draw');
        this.image = new Image();
        this.canvas = GameManager.getCanvas('background');
        this.image.onload = this.draw;
        this.image.src = this.imageSrc;
    },
    
    draw: function() {
        this.canvas.drawImage(
            this.image, 0, 0, GameManager.width, GameManager.height);
    }
}
