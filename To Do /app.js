//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');

//Event Lsitener
todoButton.addEventListener('click', addToDo);

//Functions
function addToDo(event){
  // Prevent form from submitting
  event.preventDefault();
  // To DO div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create LI
  const newToDo = document.createElement('li');
  newToDo.innerText = "hey";
  newToDo.classList.add('todo-item');
  // add LI to DIV
  todoDiv.appendChild(newToDo);
  //Check todoButton
  const completeButton = document.createElement('button');
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  completeButton.classList.add("complete-button");
  todoDiv.appendChild(completeButton);

  //Check trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("complete-button");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);
}
