var Menuz = {
  preload: function() {

  },
  create: function() {
    var b0 = game.add.text(game.world.centerX- 64, game.world.centerY -200, "Vs AI", {
      font: '42px Arial',
      fill: 'white'
    });
    var b1 = game.add.text(game.world.centerX-42, game.world.centerY, "Vs", {
      font: '42px Arial',
      fill: 'white'
    });

    var b2 = game.add.text(game.world.centerX-120, game.world.centerY + 200, "Challenges!", {
      font: '42px Arial',
      fill: 'white'
    });


    b0.inputEnabled = true;
    b0.events.onInputDown.add(this.nextz0, this);

    b1.inputEnabled = true;
    b1.events.onInputDown.add(this.nextz1, this);

    b2.inputEnabled = true;
    b2.events.onInputDown.add(this.nextz2, this);
  },
  update: function() {

  },
  nextz0: function() {
    game.state.start('aiz');
  },
  nextz1: function() {
    game.state.start('vsz');
  },
  nextz2: function() {
    game.state.start('lvl1');
  },
}
