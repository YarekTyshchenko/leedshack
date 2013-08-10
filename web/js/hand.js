var Hand = _.extend({}, GameObject, PhysicsObject);

Hand.speed = 0;

Hand.sprite = null;
Hand.type = 'Hand';
Hand.draw = function(delta) {
    if (this.disabled) {
        return false;
    }

    this.updatePosition(delta);
    context = GameManager.getCanvas('glass');
    context.fillStyle="#183a0d";
    context.fillRect(this.x, this.y, 10, 10);

    return true;
};