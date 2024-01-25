
    const tasks = [];
    let time = 0;
    let timer = null;
    let timerBreak = null;
    let current = null;
    let statusApp = "stop";

    const bAdd = document.querySelector("#bAdd");
    const itTask = document.querySelector("#itTask");
    const form = document.querySelector("#form");

    renderTasks();
    renderTime();

    form.addEventListener("submit", (e) => {
    e.preventDefault();
        if (itTask.value !== "") {
        createTask(itTask.value);
        itTask.value = "";
        renderTasks();
        }
    });

    function createTask(value) {
    const newTask = {
    id: (Math.random() * 100).toString(36).slice(2),
    title: value,
    completed: false,
    };

    tasks.unshift(newTask);
    }

    function renderTasks() {
    const html = tasks.map((task) => {
    return `
        <div class="task">
            <div class="completed">${
                task.completed
                ? "<span class='done'>Done</span>"
                : `<button class="start-button" data-id="${task.id}">Start</button></div>`
            }
                <div class="title">${task.title}</div>
            </div>`;
    });
    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join("");

    const startButtons = document.querySelectorAll(".task .start-button");
    startButtons.forEach((startButton) => {
    startButton.addEventListener("click", () => {
        if (!timer) {
        startButtonHandler(startButton.getAttribute("data-id"));
        startButton.textContent = "In progress...";
        }
    });
    });
    }

    function startButtonHandler(id) {
    time = 0.5 * 60;
    current = id;
    const taskId = tasks.findIndex((task) => task.id === id);
    document.querySelector("#time #taskName").textContent = tasks[taskId].title;
    timer = setInterval(() => {
    timerHandler(id);
    }, 1000);
    }

    function timerHandler(id = null) {
    time--;
    renderTime();
    if (time === 0) {
    markComplete(id);
    clearInterval(timer);
    renderTasks();
    startBreak();
    }
    }

    function markComplete(id) {
    const taskId = tasks.findIndex((task) => task.id === id);
    tasks[taskId].completed = true;
    }

    function startBreak() {
    time = 1 * 60;
    document.querySelector("#time #taskName").textContent = "Break";
    timerBreak = setInterval(timerBreakHandler, 1000);
    }

    function timerBreakHandler() {
    time--;
    renderTime();
    if (time === 0) {
    clearInterval(timerBreak);
    current = null;
    document.querySelector("#time #taskName").textContent = "";
    renderTime();
    }
    }

    function renderTime() {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
    }${seconds}`;
    }

/*
    // Declaración de variables
let pomodoroTime = 1; // Duración del tiempo de trabajo (en minutos)
let shortBreakTime = 1; // Duración del tiempo de descanso corto (en minutos)
let longBreakTime = 15; // Duración del tiempo de descanso largo (en minutos)
let currentTask = 'Work'; // Tarea actual (por defecto, trabajo)
let timerInterval; // Variable para almacenar el ID del intervalo de tiempo

// Referencias a elementos HTML
const timerDisplay = document.querySelector('#timerDisplay');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');

// Función para iniciar el temporizador
function startTimer(duration) {
  const startTime = new Date().getTime(); // Obtiene la hora actual
  const endTime = startTime + (duration * 60 * 1000); // Calcula la hora de finalización

    timerInterval = setInterval(function() {
    const currentTime = new Date().getTime(); // Obtiene la hora actual
    const remainingTime = endTime - currentTime; // Calcula el tiempo restante
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // Calcula los minutos restantes
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // Calcula los segundos restantes
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`; // Actualiza la pantalla del temporizador
    if (remainingTime < 0) { // Si el tiempo restante es menor a cero, se detiene el temporizador
        clearInterval(timerInterval);
        if (currentTask === 'Work') { // Si la tarea actual es trabajo, inicia un descanso corto
        startTimer(shortBreakTime);
        currentTask = 'Short Break'; // Actualiza la tarea actual
        } else if (currentTask === 'Short Break') { // Si la tarea actual es descanso corto, inicia otro ciclo de trabajo
        startTimer(pomodoroTime);
        currentTask = 'Work'; // Actualiza la tarea actual
        } else { // Si la tarea actual es descanso largo, inicia otro ciclo de trabajo
        startTimer(pomodoroTime);
        currentTask = 'Work'; // Actualiza la tarea actual
        }
    }
  }, 1000); // Actualiza el temporizador cada segundo
}

// Función para iniciar un nuevo ciclo de Pomodoro
function startPomodoro() {
    startTimer(pomodoroTime);
    currentTask = 'Work'; // Actualiza la tarea actual
}

// Evento de clic para el botón de inicio
startButton.addEventListener('click', startPomodoro);

// Evento de clic para el botón de reinicio
resetButton.addEventListener('click', function() {
  clearInterval(timerInterval); // Detiene el temporizador
  timerDisplay.textContent = `${pomodoroTime}:00`; // Reinicia la pantalla del temporizador
  currentTask = 'Work'; // Reinicia la tarea actual
});

// Inicialización de la pantalla del temporizador
timerDisplay.textContent = `${pomodoroTime}:00`; */