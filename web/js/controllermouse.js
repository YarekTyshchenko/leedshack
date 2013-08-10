var ControllerMouse = function(){

    var mouse = {
        init: function(element) {
            $(element).mousemove(function(e){
                var point = {x: e.offsetX, y: e.offsetY};
                mouse.trigger('update', point);
            });
            $(element).mousedown(function(e){
                var point = {x: e.offsetX, y: e.offsetY};
                mouse.trigger('grab', point);
            });
            $(window).mouseup(function(e) {
                var point = {x: e.offsetX, y: e.offsetY};
                mouse.trigger('release', point);
            });
        }
    };
    _.extend(mouse, Backbone.Events);
    return mouse;
}();