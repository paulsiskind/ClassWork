function diceRoll(dice, sides){
    array=[];
    for(var i=0; i<dice; i++){
        array.push(Math.floor(Math.random() * sides+1));
    }return array;
};
diceRoll(2,32);



