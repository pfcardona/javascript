// variable Global 
// vamos a guardar una variable para almacenar todos los ataques jugador

let ataqueJugador
let ataqueEnemigo


/*  El método addEventlistener, es un escuchador que indica al navegador que este atento a 
    la interacción del usuario. La ventaja es que se escribe totalmente en el JS, sin necesidad 
    de tocar el HTML. */
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua  = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra= document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if(mascotaAleatorio == 1 ) {
        //Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatorio == 2) {
        //capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else {
        //ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
   
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
   
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    }else {
    ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate() {
   /*  if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANO")
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANO")
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANO")
    }else {
        crearMensaje("PERDISTE")
    } */
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE");
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || 
            ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"  || 
            ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE");
    }else{
        crearMensaje("PERDISTE");
    }
    
}
// le paso un parámetro llamado resultado
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Tu mascota atacó  ${ataqueJugador}, 
    las mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado} `
    // insertamos el parrafo a la sección
    sectionMensajes.appendChild(parrafo)
}

function seleccionarMascotaJugador() {
    //  Get the HTML content of an element with id
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'    
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()      
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max -min + 1) + min)
}

window.addEventListener('load', iniciarJuego)