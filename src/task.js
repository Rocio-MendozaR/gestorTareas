// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTask = (task) => {
    const nweTask = {
        id: Date.now(),
        text: task,
        completed: false
    };
    tasks.push(nweTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tarea
export const getTasks = () => tasks;

// Función para eliminar una tarea de la lista
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Función para actualizar una tarea
export const updateTask = (id) => {
    tasks = tasks.map((tasks) => {
        if(tasks.id === parseInt(id)){
            tasks.completed = !tasks.completed;
        }
        return tasks;
});
localStorage.setItem('tasks' , JSON.stringify(tasks));
};