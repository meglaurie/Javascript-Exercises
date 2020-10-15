function largestInt (x, y, z){
  var lrgInt;
  if(x > y ){
    lrgInt = x;
  } else {
    lrgInt = y;
  }if (z > lrgInt){
    lrgInt = z;
  }
  return lrgInt;
}

console.log(largestInt(123, 678, 244));
console.log(largestInt(87326438, 83264812, 98347912));
