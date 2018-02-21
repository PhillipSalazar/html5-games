
 var Startz = {
   preload: function() {
     prePaddlez   =  game.load.image('paddle', 'assets/paddle.png');
     preBallz  =   game.load.image('ball', 'assets/ball.png');
     preScorebarz  =  game.load.image('scorebar', 'assets/scorebar.png');
   },
   create: function() {
     var title = game.add.text(game.world.centerX- 100, game.world.centerY -200, "Pong'z", {
       font: '64px Arial',
       fill: 'white'
     });
     var playz = game.add.text(game.world.centerX-120, game.world.centerY, "Click to play", {
       font: '42px Arial',
       fill: 'white'
     });
     playz.inputEnabled = true;
     playz.events.onInputDown.add(this.nextz, this);
   },
   update: function() {

   },
   nextz: function() {
     game.state.start('menuz');
   }
 }
