function fizzBuzz(){
  var result = "", x,y,z;
  for(var z = 1; z <= 100; z++){
    x = z%3 == 0;
    y = z%5 == 0;
    if( x ) {
      result += "Fizz";
    } if ( y ) {
      result += "Buzz";
    } if (!(x||y)){
      result +=z;
    }
    result +='\n';
    console.log(result);
  }
  document.getElementById('root').innerHTML = result;
}

fizzBuzz();
