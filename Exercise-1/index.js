// Exercise 1 Write a JavaScript program to display the current day and time in the following format.
// Today is : *day Current time: *time

// Create date object
var date = new Date();
// Parse the day from the date object
var day = date.getDay();
// Days of the week array
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + dayList[day] + ".");
// Comment
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
// Sets am or pm with ternary if statement
var prepand = (hour >= 12)? " PM " : " AM ";

// Sets 12 hour clock from 24
hour = (hour>=12)? hour - 12 : hour;

if(hour === 0 && second === 0){
  if (minutes === 0 && seconds ===0 ){
    hour = 12;
    prepand = ' Noon';
  }else{
    hour = 12;
    prepand = ' PM';
  }
}

if (hour === 0 && prepand === ' AM'){
  if(minutes === 0 && seconds === 0){
    hour = 12;
    prepand = ' Midnight';
  }else{
    hour = 12;
    prepand = ' AM';
  }
}

if (minutes < 10){
  minutes = "0" + minutes;
}



console.log("Current time : "+ hour + " : " + minutes + " : " + seconds + prepand);
