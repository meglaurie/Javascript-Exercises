today = new Date();

var xmas = new Date(today.getFullYear(), 9, 31);

if(today.getMonth()==9 && today.getDate()>31)
{
  xmas.setFullYear(xmas.getFullYear()+1);
}

// 1000 Milliseconds in 1 second. 60 Seconds in a minutes.
// 60 minutes in 1 Hour. 24 hours in one day
var oneDay = 1000*60*60;
/* Date object will return info for days in miliseconds,
so the number returned needs to be diveded by the number of miliseconds in a day*/

// 1000*60*60*24 = 86400000   2100129379

var foo = Math.ceil((xmas.getTime()-today.getTime())/(oneDay));

console.log(foo +
" days left until Halloween!");

document.getElementById('root').innerHTML = foo + " hours left until Halloween!";
