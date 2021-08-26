//the main variables
let input = document.querySelector(".add-task input"),
    button = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".tasks-content"),
    noTaskMsg = document.querySelector(".no-task-msg"),
    tasksCount = document.querySelector(".tasks-count span"),
    tasksCompleted = document.querySelector(".tasks-completed span");

  let add = true;

window.onload = () => {
  input.focus();
}

button.onclick = () => {
  
  if (input.value === '') {
    console.log("Empty Task");
    //try the sweet alert
  } else {
    add = true;
    //check if it already exist
    let taskBox = document.querySelectorAll(".task-box");
    for (let i = 0; i < taskBox.length; i++) {
      if (taskBox[i].firstChild.nodeValue === input.value) {
        console.log("Can't Add The Same Task Again...!");
        add = false;
        input.value = "";
        input.focus();
        break;
      }
    };
    
    if (add) {
      noTaskMsg.remove();

      //create the new task
      let newTask = document.createElement("span"),
        deleteButton = document.createElement("span");
      
      newTask.className = "task-box";
      deleteButton.className = "delete";

      //add it to the tree
      newTask.appendChild(document.createTextNode(input.value));
      deleteButton.appendChild(document.createTextNode("Delete"));

      newTask.appendChild(deleteButton);
      tasksContainer.appendChild(newTask);

      input.value = "";
      input.focus();

      caclculateTasks();
    }
  }
}

document.addEventListener('click', (e) => {

  if (e.target.className === "delete") {
    
    e.target.parentNode.remove();
    
    caclculateTasks();
  
    if (document.querySelectorAll(".task-box").length === 0) {
      tasksContainer.appendChild(noTaskMsg);
    }
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");

    caclculateTasks();
  }
})

function caclculateTasks() {

  tasksCount.innerText = document.querySelectorAll(".task-box").length;
  tasksCompleted.innerText = document.querySelectorAll(".finished").length;

}