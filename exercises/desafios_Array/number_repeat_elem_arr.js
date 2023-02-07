/**
 *todo Contar numero de veces que se repite un elemento en un arreglo
 * */
const arreglo = [6, 9, 2, 10, 1, 9,  2, 1, 9, 6].sort()

var aleatorio = []
for(let i= 0; i<10; i++) {
    aleatorio.push(Math.floor(Math.random() *10))
}
// lista números del 1 al 10
console.log(arreglo);
// se crea la función para ordenarlo por medio de Sort
let final = aleatorio.sort((a,b) => a - b)
//ejecuto el sort para realizar el ordenamiento

let unicosElementos = []
let almacenadorDeVecesRepetidas = []
let contador = 1

for(let i=0; i< arreglo.length; i++) {
        if(arreglo[i+1] == arreglo[i]){
    // console.log("se repite el numero de " + arreglo[i] );
        contador++;
        }else {
            unicosElementos.push(arreglo[i])
            console.log(unicosElementos);
            almacenadorDeVecesRepetidas.push(contador)
            contador = 1
            console.log('repetidos'+ almacenadorDeVecesRepetidas);
        }
}
for(let j=0; j<unicosElementos.length; j++)
    console.log("El valor " + unicosElementos[j] + " se repite el numero de " + almacenadorDeVecesRepetidas[j] );

