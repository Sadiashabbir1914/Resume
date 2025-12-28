const addTasks = document.getElementById("addTask");
const tasksList = document.getElementById("taskList");

function addTaskList() {

    if (addTasks.value.trim() === "") {
        alert("Please first enter a task!");
        return;
    }

    const Li = document.createElement("li");
    Li.innerHTML = addTasks.value;
    addTasks.value = "";

    const addEditbtn = document.createElement("button");
    addEditbtn.innerText = "Edit";
    addEditbtn.classList.add("btn1");

    const addDeletebtn = document.createElement("button");
    addDeletebtn.innerText = "Delete";
    addDeletebtn.classList.add("btn2");

    Li.appendChild(addEditbtn);
    Li.appendChild(addDeletebtn);

    tasksList.appendChild(Li);

    addEditbtn.onclick = function () {
        const newInput = prompt("Edit your task!");
        Li.innerText = newInput;
        if (newInput == "") {
            alert("task not edited yet!");
            Li.remove();
        }
        Li.appendChild(addEditbtn);
        Li.appendChild(addDeletebtn);

    }

    addDeletebtn.onclick = function () {
        Li.remove();
    }

    Li.onclick = function () {
        Li.classList.toggle("markcomp");
    }
}

function clearAll() {
    tasksList.innerHTML = "";
}

function remComp() {
    const compTasks = document.querySelectorAll(".markcomp");
    for (const task of compTasks) {
        task.remove();
    }
}
