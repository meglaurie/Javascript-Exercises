//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter')


//Event Lsitener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);


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
      todo.remove();
    });
  }

  const cactus = document.getElementById('cactus1');
  let num = document.querySelectorAll('.completed').length;
 
  // Checkmark
  if(item.classList[0] === "complete-button"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    console.log(num);
  }
  if(num === 0){
    cactus.style.transform = 'scale(0.1)';
    cactus.style.opacity = 1;
  }
  console.log(cactus.style)
  if(num === 1){
    cactus.style.transform = 'scale(0.2)';
  }
  if(num === 2){
    cactus.style.transform = 'scale(0.4)';
  }
  if(num === 3){
    cactus.style.transform = 'scale(0.6)';
  }
  if(num === 4){
    cactus.style.transform = 'scale(0.8)';
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


//SVG functions
document.addEventListener('DOMContentLoaded', getToDOs);
const plants = document.querySelectorAll('svg');

const cactus = document.getElementById('cactus');
const grow = document.getElementById('container');

// console.log(cactus.dataset)

function growPlant(){
  let todos = todoList.childNodes;

  if (saveLocalToDos())
  if(todos == 0){
      
  }
  if(todos == 1){
      
  }
}

// console.log(todoList.childNodes);


