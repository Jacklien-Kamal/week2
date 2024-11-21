const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// Load tasks from localStorage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="complete-btn">${task.completed ? 'completed' : 'Complete'}</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(index));
        li.querySelector('.complete-btn').addEventListener('click', () => toggleTaskCompletion(index));
        li.querySelector('.edit-btn').addEventListener('click', () => editTask(index));

        taskList.appendChild(li);
    });
};

// Save tasks to localStorage
const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add new task
const addTask = () => {
    if (taskInput.value.trim() === '') return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskInput.value.trim(), completed: false });
    saveTasks(tasks);
    document.getElementById('alert').innerHTML='<p class="added-alert" >Added Successfully!</p>'

    setTimeout(()=>(
        document.getElementById('alert').innerHTML=''
    ),1500)
    taskInput.value = ''; 
    loadTasks();
};

// Toggle task completion
const toggleTaskCompletion = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    loadTasks();
};

// Delete task
const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); 
    saveTasks(tasks);
    loadTasks();
};

// Edit task
const editTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskToEdit = tasks[index];

    taskInput.value = taskToEdit.text;
    taskInput.focus();

    // addTaskBtn.innerText = '+';
    addTaskBtn.onclick = () => saveEditedTask(index);
};

// Save edited task
const saveEditedTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (taskInput.value.trim() === '') return;

    tasks[index].text = taskInput.value.trim();
    saveTasks(tasks);
    taskInput.value = '';
    addTaskBtn.onclick = addTask;
    loadTasks();
};

// Event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);


// Load tasks on page load
loadTasks();
