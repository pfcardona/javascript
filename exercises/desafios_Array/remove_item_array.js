/** 
 *todo En este desafío tienes un array de números y tienes que eliminar un elemento de ese array en una posición específica ¿Sencillo? 
 *!Pero debes tener en cuenta que no puedes cambiar el array original.
 *

Un ejemplo sería enviar el array [1, 2, 3] y queremos eliminar la posición 0, esto me debería retornar [2, 3] pero el 
array enviadá no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3]

Para solucionarlo vas a encontrar una función llamada removeFromArray que tiene dos parámetros de entrada:

array: Un array de números.
index: La posición que se quiere eliminar.
Dentro del cuerpo de la función removeFromArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], 0
Output: [2, 3]

Ejemplo 2:

Input: ["A", "B", "C"], 1
Output: ["A", "C"]

*/

function removeFromArray(array,index) {
    modifiedArray = array.filter((element,i) => i !==index)
    console.log(`Array Original: ${array}`);
    console.log(`modified Array: ${modifiedArray}`);
}
removeFromArray([1, 2, 3], 0)
removeFromArray([1, 2, 3], 2)
removeFromArray(["A", "B", "C"], 1)
removeFromArray(["C", "D", "Z"], 2)
/**
 *Todo How can I remove a specific item from an array in JavaScript?
 * */

function removeItemOnce(arr, value) {
    let index = arr.indexOf(value)
    if(index > -1){
        arr.splice(index,1)
    }
    return arr;
}

function removeItemAll(arr,value) {
    let i = 0
    while(i < arr.length) {
        if(arr[i] == value ) {
        arr.splice(i,1)
        } else {
            i++
        }
    }
    return arr
}
// console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
// console.log(removeItemAll([2,5,9,1,5,8,5], 5))


