/* Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [2, 2, -4, -6] */

function multiplyElements(array) {
    // Tu código aquí 👈
    let arrays2 = array.map(arrays => arrays * 2)
    //console.log(arrays2);
 }
 multiplyElements([1,4,5,6])

 function addNewAttr(array) {
    return array.map((item) => {
        const copyItem = {...item}
        console.log(copyItem)
        copyItem.taxespablo = Math.trunc(copyItem.price * 0.19)
        return console.log(copyItem)
    });
}
addNewAttr([
{
name: "Product 1",
price: 1000,
stock: 10
},
{
name: "Product 2",
price: 2000,
stock: 20
}
])