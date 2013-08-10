var ControllerLeap = function(){
	var leap = {
        init: function(element) {   
			var controller = new Leap.Controller({enableGestures: true});
			var grabbed = null;
			controller.on('deviceFrame', function(frame){
				var hand = frame.hands[0];
				if (!hand) {
					return;
				}

				var pointer = { 
					x: hand.palmPosition[0], 
					y: hand.palmPosition[1] 
				};

				if ((hand.fingers.length <= 2) != grabbed) {
					if (hand.fingers.length <= 2) {
						leap.trigger("grab", pointer);

					} else {
						leap.trigger("release", pointer);
					}
					grabbed = (hand.fingers.length <= 2);
				} else {
					leap.trigger("update", pointer);
				}
			});



			controller.connect();

        	}
    	};
    _.extend(leap, Backbone.Events);
    return leap;
}();