today = new Date();

var xmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth()==11 && today.getDate()>25)
{
  xmas.setFullYear(xmas.getFullYear()+1);
}

var oneDay = 1000*60*60*24;

console.log(Math.ceil((xmas.getTime()-today.getTime())/(oneDay)) +
" days left until Christmas!");
