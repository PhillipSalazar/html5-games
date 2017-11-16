//var height = window.innerHeight;
//var width = window.innerWidth;

var game = new Phaser.Game(1200, 800, Phaser.CANVAS, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
 });
var player;
var ball;
var ping;
var groupz;
var cursors;
var button;
var pad1;
var color;
var score;

function preload() {
  game.load.image('paddle','assets/board.png');
  game.load.image('ball','assets/ball.png');
  game.load.image('ping','assets/ping.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    score = 0;
    var color = game.rnd.integerInRange(1, 4);
    if (color === 1)
    {
      game.stage.backgroundColor = '#3399ff';
  } else if (color === 2) {
      game.stage.backgroundColor = '#FF8C00';

  } else if (color === 3 ){

      game.stage.backgroundColor = '#99ff33';
  } else if (color === 4 ) {

    game.stage.backgroundColor = '#ff66cc';
  }





    player = game.add.sprite(500,700,'paddle');
    game.physics.arcade.enable(player);
  //  player.body.bounce.set(0.8);
    //player.body.immovable = true;
    //player.body.collideWorldBounds = true;
    player.body.immovable = true;

    ball = game.add.sprite(player.x + 100, player.y - 70, 'ball');
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1,1);
  //  ball.body.collideWorldBounds = true;
  groupz = game.add.group();
  groupz.enableBody = true;
  groupz.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i = 0; i < 5; i++) {
      for(var j = 0; j < 5; j++) {
    ping = groupz.create(120 * i + 270, 75 * j + 50, 'ping');
    //game.physics.arcade.enable(ping);
    }
  }
    game.input.enabled = true;
    button = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    button.onDown.add(function() {
      /*
      var speed = game.rnd.integer(1, 2, 3);
      if (speed === 1){
      //speedx = 400;
      //speedy = -200;
      ball.body.velocity.set(400, -100);
    } else if (speed === 2) {
      //speedx = 400;
      //speedy = -400;
      ball.body.velocity.set(400, -400);
    } else if (speed === 3 ){
    //  speedx = 400;
    //  speedy = -100
    ball.body.velocity.set(400, -100);;
    }
    */
      ball.body.velocity.set(-400, -200);
    }, this);    cursors = game.input.keyboard.createCursorKeys();

    game.input.gamepad.start();

// To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
pad1 = game.input.gamepad.pad1;
}

function update(){
  game.physics.arcade.collide(player, ball);
  game.physics.arcade.overlap(ball, groupz, hitz, null, this);

  if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected)
   {
    //   indicator.animations.frame = 0;
   }
   else
   {
       //indicator.animations.frame = 1;
   }



  player.body.velocity.x = 0;
   player.body.velocity.y = 0;

  if (cursors.left.isDown || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
      player.body.velocity.x = -300;
  }else if (cursors.right.isDown || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
    player.body.velocity.x = 300;
  }

  if (ball.body.velocity.y === 0 ){
    ball.x = player.x + 100;
  //  player.y - 70;
} else if (button.isDow) {}

if (ball.y > 720){
  ball.kill();
  game.state.restart();
  //console.log('hello');
}

if (pad1.justPressed(Phaser.Gamepad.XBOX360_B)) {
  ball.body.velocity.set(200,200);
}

if(score === 25) {
  game.state.restart();
}

}

function hitz(ball, ping) {
  //ball.body.bounce.set(1);
  ping.kill();
  score++;
//  console.log(score);
}

function render(){
  /*
  game.debug.spriteInfo(player,50,50);
  game.debug.spriteInfo(ball,500,50);
  game.debug.body(player);
  game.debug.body(ball);
*/
}
