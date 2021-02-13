const container = document.getElementById("container");
const gridItem = document.querySelectorAll('div');
const body = document.querySelector('body');
const btn = document.createElement('button');

var rows = 16;
var cal = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
 body.appendChild(btn);
};

makeRows(16, 16);

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

document.getElementById("clear").addEventListener("click", function() {
    let cell = document.getElementsByClassName('grid-item');
    // console.log("before" + container);
    console.log("before" + cell.length);
    for (let i = 0; i < cell.length; i++) {
        // cell[i].style.removeProperty('background');
        // container.removeChild(cell[i]);
        container.removeChild(cell[i]).className = "grid-item";
        console.log("hit");
        console.log(cell.length);
    }
    
    newSize();
        
 });


 