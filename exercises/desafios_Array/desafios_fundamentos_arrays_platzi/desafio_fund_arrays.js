/**
*todo: Tienes un array de objetos que representan datos de productos con los siguientes atributos:

    name
    price
    stock
*todo Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19%
*todo con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

*? Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190,
*? o para un producto con precio de $656 el resultado de los "taxes" será $124.
*? Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
*! Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

*/
/* Input:

[
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
]

Output:
[
    {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
    },
    {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
    }
]
*/
array = [
    {
    name: "Product 1",
    price: 1000,
    stock: 10
    },
    {
    name: "Product 2",
    price: 2000,
    stock: 20
    },
    {
    name: "Product 3",
    price: 656,
    stock: 30
    }
]

function addNewAttr(array) {
 // Utilizamos el método map para crear un nuevo array con la propiedad "taxes" calculada
    return array.map((item) => {
        // Agregamos la nueva propiedad "taxes" al objeto a través del operador de propagación
        const copyItem = { ...item };
        // Calculamos los impuestos (19% del precio base)
        copyItem.taxes = Math.trunc(copyItem.price * 0.19)
        copyItem.pablo =  copyItem.taxes + 1
        console.log(copyItem);
    });
    }

addNewAttr(array)
