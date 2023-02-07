// Ejercicio 1235: Encontrar los elementos duplicados de un arreglo por medio de una función.
// https://www.youtube.com/watch?v=ZhyWYpU-U98

function encontrarDuplicados(datos) {
    let duplicados = [];

    for (let i = 0; i < datos.length; ++i) {
        // console.log(datos.slice(i + 1));
        if (i + 1 < datos.length && datos.slice(i + 1).indexOf(datos[i]) != -1 && duplicados.indexOf(datos[i]) == -1) {
            duplicados.push(datos[i]);
        }
    }

    return duplicados;
}

let numeros = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7];
// console.log(numeros);
// console.log(numeros.length);

// console.log();

let resultado = encontrarDuplicados(numeros);
console.log(resultado);



/**
 *todo  JavaScript Ejercicio: 1027 Definir una Función para Encontrar los Elementos Duplicados en un Arreglo
*/
// let numeros = [3, 5, 2, 7, 11, 3, 5, 13, 5, 17, 19, 7];
function encontrarDatosDuplicados(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    let duplicados = [];

    for(let i = 0; i < datos.length; ++i) {
        let dato = datos[i];

        if (!duplicados.find(d => d == dato) && datos.slice(i + 1).find(d => d == dato)) {
            duplicados.push(dato);
        }
    }

    return duplicados;
}



/* try {
    console.log(encontrarDatosDuplicados(numeros)); // [3, 5, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarDatosDuplicados(100)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarDatosDuplicados([])); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
} */