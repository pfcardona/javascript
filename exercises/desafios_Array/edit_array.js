/**
*todo Tienes un array de números y tienes que modificar un valor de ese array en una posición específica ¿Sencillo?
*!Pero debes tener en cuenta que no puedes cambiar el array original.


Un ejemplo sería enviar el array [1, 2, 3] y queremos modificar la posición 0 con el valor 'change',
esto me debería retornar ['change', 2, 3] pero el array enviando no debe ser modificado, es decir debe
mantenerse con su estado original de [1, 2, 3],

Para solucionarlo vas a encontrar una función llamada updateArray que tiene dos parámetros de entrada:

array: Un array de números.
index: La posición que se quiere modificar.
newValue: El nuevo valor
Dentro del cuerpo de la función updateArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], 0, "change"
Output: ["change", 2, 3]

Ejemplo 1:

Input: ["A", "B", "C"], 1, 1
Output: ["A", 1, "C"]

*/
function updateArray(array,index,newValue) {

// Optión 1
    //console.log(array,index,newValue);
   /*  return console.log(array.map((el,i)=>{
    if(i === index){
        console.log(i);
        return newValue
    }else {
        return el
    }
})) */
// Option 2
    let resultado = array.map((item,i) => {
        return i === index ? newValue : item
    })
    // console.log(`El resultado es: ${resultado}`);
}
updateArray([1, 2, 3], 0, "change")


/**
 *todo Ejercicio 370: Aplicar una función a cada elemento de un arreglo con forEach().
 * */

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
//console.log(colores);

colores.forEach((color, indice, colores) => {
    if (color == 'Negro'){
        colores[indice] = '##';
    }
});

//console.log(colores);

// Ejercicio 372: Sustituir elementos de un arreglo sin modificar el arreglo original.

let colores2 = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

let resultado = colores2.map((color, indice, colores) => {
    return color == 'Negro' ? '##' : color;
});

console.log(colores2);
console.log(resultado);
console.log(colores2 === resultado);

/*
function updateArray(array, index, newValue) {
    console.log(array)
  return console.log(array.map((item, i) => {
    if (i === index) {
       return newValue
    }else{
    return  item;
    }
  }));
}
updateArray([1, 2, 3], 0, "change")
*/