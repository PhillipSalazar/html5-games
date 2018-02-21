// the game object
gameObject.Menu = function(game) {

};

// game prototype
gameObject.Menu.prototype = {
	// preload function
	preload: function() {

	},
	// create function
	create: function() {
		background = game.add.image(0,0,'background');
console.log("menu");
button = game.add.button(game.world.centerX - 95, 400, 'button', this.listener, this, 2, 1, 0);
	},
	// update function
	update: function() {


	},
	// start the next state
	listener: function() {
		console.log('status');
		this.state.start('Game');
	},
	listener: function() {
		console.log('menu');
		this.state.start('Game');
	}

}
