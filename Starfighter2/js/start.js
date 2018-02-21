var gameObject = {};

gameObject.Start = function(game) {

};

var background;
var button;
var text;
gameObject.Start.prototype = {
	// preload function
	preload: function() {
		game.load.spritesheet('button', 'assets/images/void.png',33, 0);
    game.load.image('background','assets/images/space1.png');
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

	},
	// create function
	create: function() {
		background = game.add.image(0,0,'background');

		text = game.add.text(game.world.centerX-20, game.world.centerY -100, "Star Fighter 2", {fill: "#ff0044"});
     text.anchor.setTo(0.5);
     text.font = 'Orbitron';
     text.fontSize = 80;


		button = game.add.text(game.world.centerX-50, game.world.centerY + 20, "Start", {fill: "#ff0044"});
		text.fontSize = 30
		button.inputEnabled = true;
    button.events.onInputDown.add(this.listener, this);
	},
	// update function
	update: function() {

	},
	// starts the next state
	listener: function() {
		console.log('status');
		this.state.start('Menu');
	}
	// end of the object If to put more stuff remove this comment
}
