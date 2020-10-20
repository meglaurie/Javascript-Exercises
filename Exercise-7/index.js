function reverseString(str){

  document.getElementById('root').innerHTML = str.split("").reverse().join("");

}

console.log(reverseString("Hello World"));
