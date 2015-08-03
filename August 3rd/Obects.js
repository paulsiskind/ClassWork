function House(windows, color){
    this.color = color || 'yellow';
    this.windows = windows;
    this.paintHouse = function(newColor){
         this.color = newColor;
    };
}

var paintHouse = function(newColor){
         this.color = newColor;
    };
var vampHouse = new House(false, 'green');
paintHouse.apply(vampHouse, ['blurple'])

var spiderHouse = new House( true, 'black');
spiderHouse.paintHouse('neon yellow');
console.log(spiderHouse);

var monkeyHouse = new House(false, 'brown');

console.log(monkeyHouse);
console.log(vampHouse);
