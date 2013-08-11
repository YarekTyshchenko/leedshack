var ControllerLeap = function(){
	/**
	 * LEAP Controller
	 * @type {[type]}
	 */
	var controller = null;

	/**
	 * Grabbed State
	 * @type {[type]}
	 */
	var grabbed = null;

	/**
	 * Scale factor multiplier
	 * @type {[type]}
	 */
	var scaleFactor = null;

	/**
	 * Width addition to the points
	 * @type {[type]}
	 */
	var aWidth = null;

	/**
	 * Height addition ot the points
	 * @type {[type]}
	 */
	var aHeight = null;

	/**
	 * Construct paramaters 
	 * @type {[type]}
	 */
	var constructParams = null;

	/**
	 * Gets frame, sends the events up the backbone. 
	 * 
	 * @return {[type]} [description]
	 */
	var frameEvent = function(frame) {
		var ib = frame.interactionBox;
		var hand = frame.hands[0];
		if (!hand) {
			return;
		}
		// Cache the calculations for performance enhancement
		if (scaleFactor == null) {
			scaleFactor = {
				x: (constructParams.width / ib.width),
				y: (constructParams.height / ib.height)
			};
		}
		if (aWidth == null) {
			aWidth = ib.width / 2;
			aHeight = ib.height / 2;
		}
		// This inverses the up and down, adds the scale and addtion factors. 
		var pointer = { 
			x: (hand.palmPosition[0] + aWidth) * scaleFactor.x, 
			y: ((ib.height - hand.palmPosition[1]) + aHeight) * scaleFactor.y
		};
		if ((hand.fingers.length <= 2) != grabbed) {
			if (hand.fingers.length <= 2) {
				EventManager.trigger("controller:grab", pointer);

			} else {
				EventManager.trigger("controller:release", pointer);
			}
			grabbed = (hand.fingers.length <= 2);
		} else {
			EventManager.trigger("controller:update", pointer);
		}
	};

	var leap = {
		/**
		 * Initialise 
		 * Initialises the LEAP Controller and sets up the params.
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
        init: function(element) {   
			controller = new Leap.Controller({enableGestures: true});
			controller.connect();
			constructParams = element;		
		},
		/**
		 * Poll the controller input data
		 * 
		 * @return {[type]} [description]
		 */
    	poll: function() {
    		frameEvent(controller.frame());
    	}

    };
    return leap;
}();