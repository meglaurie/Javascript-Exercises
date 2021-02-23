// Mobile menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  // The Date
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var monthsYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for(var i = 0; i < monthsYear.length; i++){
    if(month == i){
      month = monthsYear[i];
    }
  }
  document.getElementById('date').innerHTML = month + " " + day + ", " + year;
  
  // Get image from user
  function uploadImg(input) {
    console.log(input.files);
          if (input.files && input.files[0]) {
              var reader = new FileReader();
  
              reader.onload = function (e) {
                 document.getElementById("img").src = e.target.result;
                 console.log(this.result);
                 console.log(this);
              };
              console.log(input.files[0]);
              reader.readAsDataURL(input.files[0]);
          }
      }
  
  // Get text from user and clear input feild
  function getInputValue(){
      var inputVal = document.getElementById("txt-input").value;
      document.getElementById('card-txt').innerHTML = inputVal;
      document.getElementById("txt-input").value = " ";
  
  }
  
  console.log(document.getElementById('imgTxt-input').files);
  
  const submit = document.getElementById('imgTxtSubmit');
  const img = document.getElementById('imgTxt-input')
  
  
  
  function uploadImgTxt(){
  uploadImg(img);
  var inputVal = document.getElementById("txtImg-input").value;
  document.getElementById('card-txt').innerHTML = inputVal;
  document.getElementById('txtImg-input').value = " ";
   
    console.log("clicked");
  }