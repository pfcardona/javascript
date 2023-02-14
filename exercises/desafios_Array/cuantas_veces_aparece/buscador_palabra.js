
/**
*todo Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda
*/

/*
Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

array: Un array de strigs con palabras
term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.
Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]
*/

function filterByTerm (array,term){

    resultado = array.filter((word) => {
        return word.includes(term)
    })
    console.log(resultado);
}

filterByTerm(["ana", "santi", "nico", "anastasia","anamaria"],"ana")
filterByTerm(["ana", "santi", "nico", "anastasia"],"xyz")






