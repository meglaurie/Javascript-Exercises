/* Convert temperatures to and from celsius, fahrenheit */

function cTF(celsius){
  var cels = celsius;
  var cToFar = cels * (9/5) + 32;
  var message = cels + " \xB0C is " + cToFar + " \xB0F.";
  console.log(message);
}

function fTC(fahrenheit){
  var fer = fahrenheit;
  var fToCels = (5/9) * (fer - 32);
  var message = fer + " \xB0F is " + fToCels + "\xB0C.";
  console.log(message);
}

cTF(27);
fTC(200);
