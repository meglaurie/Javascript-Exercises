const container = document.getElementById("container");
const gridItem = document.querySelectorAll('div');
const body = document.querySelector('body');
const btn = document.createElement('button');


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


btn.textContent = 'Clear';
btn.id = "clear";



document.getElementById("clear").addEventListener("click", function() {
    let cell = container.childNodes;
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.removeProperty('background');
        
    }
    var newGrid = prompt("Grid Size?");
    var rows = newGrid;
    var cols = newGrid;
    makeRows(rows, cols);
        
 });
