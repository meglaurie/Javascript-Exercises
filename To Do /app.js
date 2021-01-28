//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');

//Event Lsitener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addToDo(event){
  // Prevent form from submitting
  event.preventDefault();
  // To DO div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create LI
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
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
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //clear value
  todoInput.value = "";
}

function deleteCheck(event){
  const item = event.target;
  //deleteCheck
  if(item.classList[0] === 'trash-button'){
    const todo = item.parentElement;
  //Animation
    todo.classList.add("fall");
    console.log("fall");
    todo.addEventListener('transitionend', function(){
      console.log("removed");
      todo.remove();

    });
  }

  // Checkmark
  if(item.classList[0] === "complete-button"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }

}
