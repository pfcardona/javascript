/**
     *todo 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
     **pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]
*/
const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números ");
    if(!(arr instanceof Array)) return console.error(`El valor "${arr}" ingresado, NO es un arreglo`);
    if(arr.length === 0) return console.error("El arreglo esta vacío");
    if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos");

return console.info({
original:arr,
// método filter => (method) Array<any>.filter((value: any, index: number, array: any[])
// elemento en cuestion 2. posicion 3. self = al mismo arreglo
// INDEXOF  buscar elementos  es comparar el valor contra la posición que estoy evaluando
// vamos a ir comparando si hay algun elemento duplicado
// filter genera otro arreglo, esta comparando el arreglo que esta recibiendo con el
// arreglo original contra los valores que va formando  el propio arreglo generado por filter

sinDuplicados:arr.filter((value,index,self) => self.indexOf(value)== index)

});

// Otra solución

/* return console.info({
original:arr,
sinDuplicados: [...new Set(arr)]
}) */
}

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados([2]);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])


// Ejercicio 1021: Eliminar los elementos duplicados de un arreglo usando la función reduce().

let numeros = [5, 11, 7, 19, 23, 5, 5, 11, 11, 11, 7, 2, 3, 5];
console.log(numeros);
console.log(numeros.length);

console.log();

let resultado = numeros.reduce((a, e) => {
    if (!a.find(d => d == e)) { // por cada iteracion implicita en el reduce preguntamos si el  elemento e se ecuentra en el arreglo a
        a.push(e)
    }
    return a;
}, []);

console.log(resultado);
console.log(resultado.length);

