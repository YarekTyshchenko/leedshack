/**
 * Sound manager, stores sounds, plays them and that
 */
var SoundManager = {
	sounds : {},

	init: function(soundPath, sounds) {
		for (i=0;i<sounds.length;i++) {
			var s = sounds[i];
			var chunks = s.split('.');
			var extension = chunks[chunks.length];
			chunks.pop();
			var name = chunks.join('.');
			this.sounds[name] = { 
				audio: new Audio(soundPath + '/' + s),
				looped: false,
				playing: false
			};
		}
	},

	playSound: function(name, loop) {
		if (this.sounds[name] == undefined) {
			return;
		} 
		this.sounds[name].audio.loop = 
			this.sounds[name].looped = loop || false;
		this.sounds[name].audio.play();
		this.sounds[name].playing = true;
	},

	stopSound: function(name) {
		this.sounds[name].audio.pause();
		this.sounds[name].playing = false;
	}
}