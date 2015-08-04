function DiceRoller(sides){
  this.hand = [];
  this.roll = function(dice){
    for(var i=0; i<dice; i++){
        if (sides == null){
          this.hand.push(Math.floor(Math.random() * 6+1))  
        }else{
          this.hand.push(Math.floor(Math.random() * sides +1));
        }
    }
    }

  }

  var game = new DiceRoller(99);
  console.log(game.hand);
  console.log(game.roll(3));
  console.log(game.hand);
