
var Aiz = {

  preload: function() {
  //  game.load.image('paddle', 'paddle.png');
//    game.load.image('ball', 'ball.png');
//    game.load.image('scorebar', 'scorebar.png');
  },
  create: function() {
    score1 = 0;
    score2 = 0;
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(20,game.world.centerY - 100, 'paddle');
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.bodyEnabled = true;
    player.body.bounce.set(1);
    player.body.collideWorldBounds = true;
    player.body.immovable = true;

    ai = game.add.sprite(1150, game.world.centerY - 100, 'paddle');
    game.physics.enable(ai, Phaser.Physics.ARCADE);
    ai.bodyEnabled = true;
    ai.body.bounce.set(1);
    ai.body.immovable = true;
    ai.body.collideWorldBounds = true;
    ai.anchor.setTo(0.5,0.5);

    linez = new Phaser.Rectangle(game.world.centerX, 0, 10, 800);

    goal1 = game.add.sprite(0, 0, 'scorebar');
    game.physics.enable(goal1, Phaser.Physics.ARCADE);
    goal1.bodyEnabled = true;
    goal1.body.immovable = true;

    goal2 = game.add.sprite(1190, 0, 'scorebar');
    game.physics.enable(goal2, Phaser.Physics.ARCADE);
    goal2.bodyEnabled = true;
    goal2.body.immovable = true;



    ballz = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
    //ballz.scale.set(2,2);
    game.physics.enable(ballz, Phaser.Physics.ARCADE);
    ballz.bodyEnabled = true;
    ballz.body.bounce.set(1);
    ballz.body.collideWorldBounds = true;

    score_for_player = game.add.text(150,50, score1, {
      font: '64px Arial',
      fill: '#FFFAF0'
    });

    score_for_ai = game.add.text(1050, 50, score2, {
      font: '64px Arial',
      fill: '#FFFAF0'
    });

  cursors = game.input.keyboard.createCursorKeys();
  ballButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  var playz = game.add.text(20, 760, "Menu", {
    font: '21px Arial',
    fill: 'white'
  });
  playz.inputEnabled = true;
  playz.events.onInputDown.add(this.nextz, this);



  },
  update: function() {
    game.physics.arcade.collide(player,ballz);
    game.physics.arcade.collide(ai,ballz);
    game.physics.arcade.collide(ballz, goal1, this.scoring2, null, this);
    game.physics.arcade.collide(ballz, goal2, this.scoring1, null, this);
    if (cursors.up.isDown){
      player.y -= 7;

    }
    else if (cursors.down.isDown) {
      player.y += 7;
    }

    if (ballButton.isDown) {
      this.shoot();
    }



  if (ballz.x > 610 && ballz.y < 200) {

    game.physics.arcade.moveToXY(ai, ai.x, 0, 500, 500);
  }
  else if (ballz.x > 610 && ballz.y < 400 && ballz.y > 200 ){

    game.physics.arcade.moveToXY(ai, ai.x ,300, 500, 500);
  }
 else if (ballz.x > 610 && ballz.y > 400 && ballz.y < 600){

    game.physics.arcade.moveToXY(ai, ai.x ,500, 500, 500);

} else if (ballz.x > 610 && ballz.y > 600){
  game.physics.arcade.moveToXY(ai, ai.x ,700, 500, 500);

  } else if (ballz.x > 610 && ballz.y < 800){
    game.physics.arcade.moveToXY(ai, ai.x , 800, 500, 500);

  } else if (ballz.x > 610 && ballz.y > 0){
    game.physics.arcade.moveToXY(ai, ai.x, 600, 500, 500);
  }
//    ai.body.velocity.y = game.physics.arcade.moveToPointer(ai, 60, ballz, 500);


  },
  render: function() {
//     game.debug.geom(player,'#FFFAF0');
  //   game.debug.geom(ai,'#FFFAF0');
     game.debug.geom(linez,'#FFFAF0');

    // game.debug.geom(goal1,'#8B008B');
    // game.debug.geom(goal2,'#8B008B');

  },

  shoot: function() {
   rnd = game.rnd.realInRange(-5,5);
  // ran = game.rnd.realInRange(-2,2);
  /*  if (rnd === 1) {
      ballz.body.velocity.y = 40;
      console.log('wa');
    }
    else if (rnd === 2) {
      ballz.body.velocity.y = -40;
      console.log('la');
    }else if (rnd === 3){
      ballz.body.velocity.y = -100;
      console.log('za');
    }
    */
    ballz.body.velocity.y = 20 * rnd;
    ballz.body.velocity.x = -400;
//    console.log(rnd);
//    ballz.body.velocity.y = 40;
//    ballz.
  },
  scoring1: function() {
    score1 += 1;
    console.log(score1);
    score_for_player.text = score1;
    //   rnd = Math.random() * 3;
    ballz.kill();

    ballz.reset(game.world.centerX, game.world.centerY);
  },
  scoring2: function() {
    score2 += 1;
    console.log(score2);
    score_for_ai.text = score2;
  //     rnd = game.rnd.realInRange(1,3);
    ballz.kill();
    ballz.reset(game.world.centerX, game.world.centerY);
  },
  nextz: function() {
    game.state.start('menuz');
  }



}
