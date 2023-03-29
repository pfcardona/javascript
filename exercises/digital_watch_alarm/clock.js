/* const d = document;

function digitalClock(clock,btnPlay,btnStop) {
    d.addEventListener("click", e =>{
        if(e.target.matches(btnPlay)) {
            setInterval(() => {
                let clockHour = new Date().toLocaleTimeString()
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }
            ,1000)

            e.target.disabled = true
        }
        if(e.target.matches(btnStop)){

        }
    })
}

 */
// export function alarm() {}

/*
// Referencia al elemento HTML que mostrará la hora
const clockDisplay = document.querySelector('#clockDisplay');

// Función para actualizar el reloj
function updateClock() {
  const currentTime = new Date(); // Obtiene la hora actual en formato fecha
  const options = { hour12: true }; // Opciones para el formato de la hora
  const formattedTime = currentTime.toLocaleTimeString([], options); // Obtiene la hora en formato local

  clockDisplay.textContent = formattedTime; // Actualiza el contenido del elemento HTML con la hora
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);
 */

/*
// Referencias a los elementos HTML necesarios
const clockDisplay = document.querySelector('#clockDisplay');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

// Variables para controlar el intervalo de tiempo y el estado del reloj
let intervalId;
let isRunning = false;

// Función para actualizar el reloj
function updateClock() {
  const currentTime = new Date(); // Obtiene la hora actual en formato fecha
  const options = { hour12: true }; // Opciones para el formato de la hora
  const formattedTime = currentTime.toLocaleTimeString([], options); // Obtiene la hora en formato local

  clockDisplay.textContent = formattedTime; // Actualiza el contenido del elemento HTML con la hora
}

// Función para iniciar el reloj
function startClock() {
  updateClock(); // Actualiza el reloj
  intervalId = setInterval(updateClock, 1000); // Actualiza el reloj cada segundo
  isRunning = true; // Indica que el reloj está corriendo
}

// Función para detener el reloj
function stopClock() {
  clearInterval(intervalId); // Detiene la actualización del reloj
  isRunning = false; // Indica que el reloj está detenido
}

// Evento al hacer clic en el botón de iniciar
startButton.addEventListener('click', () => {
  if (!isRunning) { // Si el reloj no está corriendo
    startClock(); // Inicia el reloj
  }
});

// Evento al hacer clic en el botón de detener
stopButton.addEventListener('click', () => {
  if (isRunning) { // Si el reloj está corriendo
    stopClock(); // Detiene el reloj
  }
});
 */

// Referencias a los elementos HTML necesarios
const clockDisplay = document.querySelector('#clockDisplay');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

// Variables para controlar el intervalo de tiempo y el estado del reloj
let intervalId;
let isRunning = false;

// Función para actualizar el reloj
function updateClock() {
  const currentTime = new Date(); // Obtiene la hora actual en formato fecha
  const options = { hour12: true }; // Opciones para el formato de la hora
  const formattedTime = currentTime.toLocaleTimeString([], options); // Obtiene la hora en formato local

  clockDisplay.textContent = formattedTime; // Actualiza el contenido del elemento HTML con la hora
}

// Función para iniciar el reloj
function startClock() {
  updateClock(); // Actualiza el reloj
  intervalId = setInterval(updateClock, 1000); // Actualiza el reloj cada segundo
  isRunning = true; // Indica que el reloj está corriendo

  startButton.disabled = true; // Deshabilita el botón de inicio
  stopButton.disabled = false; // Habilita el botón de detener
}

// Función para detener el reloj
function stopClock() {
  clearInterval(intervalId); // Detiene la actualización del reloj
  isRunning = false; // Indica que el reloj está detenido

  startButton.disabled = false; // Habilita el botón de inicio
  stopButton.disabled = true; // Deshabilita el botón de detener
}

