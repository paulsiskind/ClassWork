function diceRoll(dice, sides){
    array=[];
    for(var i=0; i<dice; i++){
        if (sides == null){
          array.push(Math.floor(Math.random() * 6+1))  
        }else{
          array.push(Math.floor(Math.random() * sides +1));
        }
    }return array;
};
var dice = prompt('Number of dice?');
var sides = prompt('Number of sides');
alert (diceRoll(dice, sides));




