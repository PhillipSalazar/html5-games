var game = new Phaser.Game(600, 800, Phaser.AUTO, 'phaser-example',
{ preload: preload, create: create, update: update, render: render });

var floor;
var box;
var cursor;
var mouseInput;
//var lbar;
//var sbar;
var buttonz;
var title;
var things;
var thing;
var counter;
var bool = false;
var speed = 100;
function preload() {
game.load.image('floor', 'game/assets/floor.png');
game.load.image('smallbar', 'game/assets/sbar.png');
game.load.image('longbar', 'game/assets/lbar.png');
game.load.image('box','game/assets/box.png');
game.load.image('playbutton','game/assets/playButton.png');
game.load.image('restartbutton','game/assets/replay1.png')
}

function create() {
// game components
game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
//	game.scale.pageAlignHorizontally = true;
//	game.scale.pageAlignVertically = true;
game.stage.backgroundColor = '#444444';
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.gravity.y = 200;
//game.add.image(-100,-200,'backdrop');
counter = 60;
//sprites
//floor sprite
floor = game.add.sprite(0, 750, 'floor');
//floor.body.enable = true;
game.physics.enable(floor, Phaser.Physics.ARCADE);
floor.body.allowGravity = false;
floor.body.immovable = true;
//box sprite
box = game.add.sprite(250, 600, 'box');
game.physics.enable(box, Phaser.Physics.arcade);
box.body.collideWorldBounds = true;

if (bool === false){
title = game.add.text(game.world.width/2, game.world.width/2, "Collapse!", { font: "64px Arial", fill: "#ffffff", align: "center" });
title.anchor.setTo(0.5, 0.5);
button = game.add.button(game.world.width/2, game.world.height/2 + 50, 'playbutton', playGame, this, 2, 1 ,0);
button.anchor.setTo(0.5,0.5);

game.paused = true;
}
//game.stage.backgroundColor = '#6688ee';

text = game.add.text(64, 52, 'Time: ' + counter, { font: "32px Arial", fill: "#ffffff", align: "center" });
text.anchor.setTo(0.5, 0.5);

things = game.add.group();
things.enableBody = true;
things.physicsBodyType = Phaser.Physics.ARCADE;
for (var i = 0; i < 150; i++){

		var num = game.rnd.between(1,2);
		var thingy;
		if (num === 1){
			var thing = things.create(game.rnd.between(20,500), 0 - i * 100, "smallbar");

		} else if (num === 2){
			var thing = things.create(game.rnd.between(20,500), 0 - i * 100, "longbar");

		}
		var anglez = game.rnd.between(-30,30);

		//sbar = game.add.sprite(200, 0, 'smallbar');
		//game.physics.enable(sbar, Phaser.Physics.arcade);
		thing.anchor.setTo(0.5,0.5);
		thing.angle = anglez;
		thing.body.allowRotation = true;
		thing.body.rotation = anglez;
		thing.body.allowGravity = false;
		thing.body.velocity.y = 200;
}



cursor = game.input.keyboard.createCursorKeys();
box.inputEnabled = true;
box.input.enableDrag();
/*
Loops in game
*/
game.time.events.loop(Phaser.Timer.SECOND, function() {
	if ( counter !== 0 ){
		counter--;
		text.setText('Time: ' + counter);
	} else if ( counter === 0 ) {
		counter = 0;
		  title.text = "You Survived!";
			button = game.add.button(game.world.width/2, game.world.height/2 + 50, 'restartbutton', restartGame, this, 2, 1 ,0);
			button.anchor.setTo(0.5,0.5);
		//return counter;
	}
}, this);
//game.time.events.add(Phaser.Timer.SECOND * 4, initGame, this);
//game.time.events.loop(Phaser.Timer.SECOND, initGame, this);

}

function update() {
game.physics.arcade.collide(box, floor);
//temp
game.physics.arcade.collide(things, floor, collisionHandler, null, this );
//game.physics.arcade.overlap(lbar, floor, collisionHandler, null, this );
game.physics.arcade.overlap(things, box, hitPlayer, null, this );
//game.physics.arcade.overlap(lbar, box, hitPlayer, null, this );


	box.body.velocity.x = 0;
	if (cursor.left.isDown){
    box.body.velocity.x = -300;
	} else if (cursor.right.isDown){
  box.body.velocity.x = 300;
	}
box.x = game.input.x;
/*
	 if (counter === 60 ){
		thing.body.velocity.y = 100;
		//console.log(things.body.velocity.y);
	} else if (counter === 40 ){
		speed = 600;
		//console.log(things.body.velocity.y);
	} else if (counter === 30) {
		speed = 900;
		console.log(things.body.velocity.y);
	}
*/
// end of update
}

/*
Collsion for the game!
collisionHandler = objects vs floor;
hitPlayer = objects vs player;
*/
//collisionHandler
function collisionHandler(floor, thing) {
  thing.destroy();
	console.log("lolz");
}

function hitPlayer(player, thing) {
player.kill();
title.text = "You Died!";
button = game.add.button(game.world.width/2, game.world.height/2 + 50, 'restartbutton', restartGame, this, 2, 1 ,0);
button.anchor.setTo(0.5,0.5);
console.log("Hit");
}

/*
function updateCounter() {
    text.setText('Time: ' + counter);

    if (counter === 0){
      title.text = "You Survived!";
			counter = 0;
		}

}
*/

function restartGame() {
bool = true;
game.state.restart();
//return bool;
}

function playGame() {
	//counter = 5;
	title.text = "";
	button.destroy();
	game.paused = false;
	console.log("play game");
}


function initGame() {
  //temp
//  game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
sbar = game.add.sprite(200, 0, 'smallbar');
	game.physics.enable(sbar, Phaser.Physics.arcade);
	//sbar.body.bounce.y = 0.9;
  //sbar.body.collideWorldBounds = true;
	//sbar.body.enable = true;
	//sbar.body.allowGravity = false;
	game.physics.arcade.overlap(things, box, hitPlayer, null, this );
	game.physics.arcade.overlap(things, floor, collisionHandler, null, this );
  lbar = game.add.sprite(400, 0, 'longbar');
  game.physics.enable(lbar);


}

function render(){
	//game.debug.body(box);
	//game.debug.physicsGroup(things);
	//game.debug.body(floor);
	//things.forEachAlive(renderGroup, this);
}

function renderGroup(member) {
	game.debug.body(member);
}
