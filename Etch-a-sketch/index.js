const container = document.getElementById("container");
const gridItem = document.querySelectorAll('div');
const body = document.querySelector('body');
const btn = document.createElement('button');

var rows = 16;
var cols = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
 body.appendChild(btn);
};

makeRows(rows, cols);

for( var i = 0; i < gridItem.length; i++){
    gridItem[0].addEventListener("mouseover", function( event ){
        event.target.style.backgroundColor = "black";
       }, false);
}

function newSize(){
    var newGrid = prompt("Grid Size?");
    rows = newGrid;
    cols = newGrid;
    makeRows(rows, cols);
 }

btn.textContent = 'Clear';
btn.id = "clear";

document.getElementById("clear").addEventListener("click", function(rows, cols) {
    let cell = document.getElementsByClassName('grid-item');

    while (cell.length) {
        // cell[0].style.removeProperty('background');
        container.removeChild(cell[0]);
    }
    
    newSize();

        
 });


 