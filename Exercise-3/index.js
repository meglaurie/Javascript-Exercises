today = new Date();

var xmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth()==11 && today.getDate()>25)
{
  xmas.setFullYear(xmas.getFullYear()+1);
}

var oneDay = 1000*60*60*24;

var foo = Math.ceil((xmas.getTime()-today.getTime())/(oneDay));

console.log(foo +
" days left until Christmas!");

document.getElementById('root').innerHTML = foo + " days left until Christmas!";
