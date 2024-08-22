// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTasks = (task) => {
    const nweTask = {
        id: Date.now(),
        text: task,
        completed: false
    };
    task.push(nweTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tarea
export const getTasks = () => tasks;