var ControllerMouse = function(){

    var mouse = {
        init: function(element) {
            $(element).mousemove(function(e){
                var point = {x: e.offsetX, y: e.offsetY};
                EventManager.trigger('controller:update', point);
            });
            $(element).mousedown(function(e){
                var point = {x: e.offsetX, y: e.offsetY};
                EventManager.trigger('controller:grab', point);
            });
            $(window).mouseup(function(e) {
                var point = {x: e.offsetX, y: e.offsetY};
                EventManager.trigger('controller:release', point);
            });
        }
    };
    return mouse;
}();