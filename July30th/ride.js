function bigNuff(child, ride){
  if ((child.height > ride.minHeight) && (child.height < ride.maxHeight)){ 
    return true;
  }else{
    return false;
  }
}

var child = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};


bigNuff(child, ride);

var child = {
  height: 3,
  name: "Julian",
  age: 3
};


var ride2 = {
  minHeight: 4,
  maxHeight: 7
};