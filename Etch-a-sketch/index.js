const container = document.getElementById("container");
const gridItem = document.querySelectorAll('div');
let clearBtn = document.createElement('button');

container.appendChild(clearBtn);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

for( var i = 0; i < gridItem.length; i++){
    gridItem[0].addEventListener("mouseover", function( event ){
        // highlight the mouseenter target
        event.target.style.background = "black";
       
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.background = "";
        }, 1000);
       }, false);

}

