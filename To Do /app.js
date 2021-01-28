//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter')

//Event Lsitener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);
document.addEventListener('DOMContentLoaded', getToDOs);

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
  //ADD to local localStorage
  saveLocalToDos(todoInput.value);
  console.log("saved");
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
    removeLocalToDos(todo);
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

function filterToDo(e){
  const todos = todoList.childNodes;
  for(let i = 1; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completed')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completed')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}

//Save to local storage
function saveLocalToDos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
      todos = [];
    }else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//get from localStorage
function getToDOs(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    // To DO div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todo;
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
  })
}

//delete from localStorage
function removeLocalToDos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
