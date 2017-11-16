class SimpleGame {
/*  var player;
   var ball;
   var ping;
   var cursors;
   var button;
*/

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
          preload: this.preload,
          create: this.create,
          update: this.update});
    }

    game: Phaser.Game;



    preload() {
      //  this.game.load.image('logo', 'phaser2.png');
      this.game.load.image('paddle','assets/board.png');
      this.game.load.image('ball','assets/ball.png');
      this.game.load.image('ping','assets/ping.png');
    }

    create() {
        //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
      //  logo.anchor.setTo(0.5, 0.5);
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.stage.backgroundColor = '#FF8C00';

      var player = this.game.add.sprite(500,700,'paddle');
      this.game.physics.arcade.enable(player);
    //  player.body.bounce.set(0.8);
      //player.body.immovable = true;
      //player.body.collideWorldBounds = true;
      player.body.immovable = true;

      var ball = this.game.add.sprite(player.x + 100, player.y - 70, 'ball');
      this.game.physics.arcade.enable(ball);
      ball.body.collideWorldBounds = true;
      ball.body.bounce.set(1,1);
    //  ball.body.collideWorldBounds = true;

      var ping = this.game.add.sprite(50, 50, 'ping');
      this.game.physics.arcade.enable(ping);

      this.game.input.enabled = true;
      var button = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      button.onDown.add(function() {
        ball.body.velocity.set(200,200);
      }, this);
      var cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {

    }

}

window.onload = () => {

    var game = new SimpleGame();

};
