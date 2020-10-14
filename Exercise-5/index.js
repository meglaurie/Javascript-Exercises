function fizzBuzz(){
  // for(let i = 1; i <= 100; i++){
  //   var result = " ";
  //   if(i % 3 === 0) {
  //     return result += "Fizz";
  //   } if (i % 5 === 0 ) {
  //     return result += "Buzz";
  //   } else{
  //     return result;
  //   }
  for (let i = 1; i <= 100; i++) {
    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    console.log(result || i);
    console.log(result);

    document.getElementById('root').innerHTML = result;
  }
}

fizzBuzz();
