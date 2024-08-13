document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        // Create a new list item
        const newTask = document.createElement('li');
        newTask.className = 'list-group-item';

        // Add task text
        newTask.innerHTML = `${taskText} <button class="delete-task">×</button>`;

        // Append the new task to the list
        taskList.appendChild(newTask);

        // Clear the input
        taskInput.value = '';

        // Add delete functionality
        newTask.querySelector('.delete-task').addEventListener('click', function () {
            taskList.removeChild(newTask);
        });
    }
}

// Allow pressing Enter to add a task
document.getElementById('new-task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
