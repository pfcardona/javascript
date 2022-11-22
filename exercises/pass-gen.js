/**
 * todo Generador de Contraseñas | Ejercicio práctico JavaScript
*/ 

const alph = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijqlmnopqrstuvwxyz0123456789!#$%&/()=?¡"

function passGenerate(length = 10) {
    let result = ""
    for(let i = 0; i<=length; i++){
        result += alph.charAt(Math.floor(Math.random() * alph.length))
    }
    return result
}
const pass = passGenerate(30)
console.log(passGenerate());
console.log(pass);