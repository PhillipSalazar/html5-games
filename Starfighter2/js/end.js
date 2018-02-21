
gameObject.End = function(game) {

};

gameObject.End.prototype = {
	// preload function
	preload: function() {

	},
	// create function
	create: function() {
background = game.add.image(0,0,'background');
	},
	// update function
	update: function() {

	},
	// start the next state
	listener: function() {
		console.log('status');
		this.state.start('Menu');
	}
	// end of the object If to put more stuff remove this comment
}
