var ControllerLeap = function(){
	var leap = {
        init: function(element) {   
			var controller = new Leap.Controller({enableGestures: true});
			var grabbed = null;
			var log = true;
			var scaleFactor = null;
			var aWidth = null;
			var aHeight = null;
			var cache = false;
			var frameCount = 0;
			controller.on('deviceFrame', function(frame){
				if ((++frameCount % 10) == false) return;

				// Scale Factors
				var ib = frame.interactionBox;
				if (scaleFactor == null) {
					scaleFactor = {
						x: (element.width / ib.width),
						y: (element.height / ib.height)
					};
				}

				var hand = frame.hands[0];
				if (!hand) {
					return;
				}

				if (aWidth == null) {
					aWidth = ib.width / 2;
					aHeight = ib.height / 2;
				}

				var pointer = { 
					x: (hand.palmPosition[0] + aWidth) * scaleFactor.x, 
					y: ((ib.height - hand.palmPosition[1]) + aHeight) * scaleFactor.y
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