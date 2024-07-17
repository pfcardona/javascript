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
        //console.log(copyItem)
        copyItem.taxespablo = Math.trunc(copyItem.price * 0.19)
        // return console.log(copyItem)
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

//-------------------------------------------------------------//

function filterOrders(arrays) {
    filtro = arrays.filter((item) => 
        item?.total >=100 && item?.delivered)

    //return console.log(filtro);
    
}
filterOrders(
    [
        {
          customerName: "Nicolas",
          total: 100,
          delivered: true,
        },
        {
          customerName: "Zulema",
          total: 120,
          delivered: false,
        },
        {
          customerName: "Santiago",
          total: 300,
          delivered: true,
        }
      ]
)

//-----------------------------------------------------------------------//

function checkInString(text,term) {
  search = text.toUpperCase().includes(term.toUpperCase()) ? 'true' : 'false' 
  return console.log(search)
}

checkInString("Ana lava la tina", "ana")

//------------------------

function calcTotal(orders) {
  let result = orders
       .map((item) => item.total)
         .reduce((count,item)=> count + item, 0)
         
         return console.log("el resultado es "+ result) 
 }

 calcTotal ([
 {
   customerName: "Nicolas",
   total: 120,
   delivered: true,
 },
 {
   customerName: "Zulema",
   total: 140,
   delivered: false,
 },
 {
   customerName: "Santiago",
   total: 20,
   delivered: false,
 }
])

