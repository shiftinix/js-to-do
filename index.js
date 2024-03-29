const tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value;
    if (value === "") {
        alert("Please input a task!");
        return;
    }
    if (value.length > 255) {
        alert("That seems a little too long!");
        return;
    }
    if (tasks.includes(value)) {
        alert("You've already added that task :)");
        return;
    }
    
    tasks.push(value);
    input.value = "";
    renderTasks();
}

function renderTasks() {
    const tasksElement = document.getElementById("tasks");
    tasksElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        })

        li.appendChild(deleteButton);
        tasksElement.appendChild(li);
    });
}