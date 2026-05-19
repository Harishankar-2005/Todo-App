let todoList = [
//   {
//   item :`JavaScript`,
//   dueDate :`13/10/2005`
// },
//   {item:`Python`,
//     dueDate :`13/10/2005`
//   }
];


let taskStr=localStorage.getItem(`task`)
  if (taskStr!==null){
    todoList=JSON.parse(taskStr);
  }

displayTask()
function addElement() {
  let todoElement = document.querySelector(`.input-task`);
  let taskDate = document.querySelector(`.input-date`);
  let todoTask = todoElement.value;
  let todoDate = taskDate.value;
  if (todoTask == false && todoDate == false){
    alert(`Please Enter valid Task!`);
  }
  else if(todoTask == false){
    alert(`Task is missing!`);
  }
  else if(todoDate == false){
    alert(`Date is missing!`);
  } else {
    todoList.push({item : todoTask,dueDate: todoDate});
    todoElement.value = ``;
    taskDate.value = ``;
    displayTask();
    localStorage.setItem(`task`,JSON.stringify(todoList))
  }
}

function displayTask() {
  let newHTML = ``;
  todoHTML = document.querySelector(`.todo-container`)
  todoHTML.innerHTML = ``;
  for (i=0;i<todoList.length;i++) {
    let {item,dueDate} = todoList[i];
    newHTML = `
    <span class="name">${item}</span>
    <span class="date">${dueDate}</span>
    <button onclick="deleteTodo(${i})" class="deleteBtn" >Delete</button>
    `;
    todoHTML.innerHTML += newHTML;
  }
  
}

function deleteTodo(i) {
  todoList.splice(i,1)
  localStorage.setItem(`task`,JSON.stringify(todoList))
  displayTask()

}