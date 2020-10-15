function fizzBuzz(){
  var result = "";
  var x;
  var y;
  for(var i = 1; i <= 100; i++){
    x = i%3 == 0;
    y = i%5 == 0;
    if( x ) {
      result += "Fizz";
    } if ( y ) {
      result += "Buzz";
    } if (!(x||y)){
      result += i;
    }
    result +='\n';
    console.log(result);
  }
  document.getElementById('root').innerHTML = result;
}

fizzBuzz();
