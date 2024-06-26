/* https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_05_Arreglos/dia_05_arreglos.md


Declara un array vacío.
Declara un array com mas de 5 elementos.
Encuentra la longitud de tu array.
Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
Imprima el array usando console.log().
Imprima el número de empresas en el array.
Imprime la primer empresa , la intermedia y la última empresa
Imprime cada empresa.
Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
Filtre las empresas que tienen más de una 'o' sin el método filter()
Ordene el array usando el método sort()
Invierte la array usando el método reverse()
Cortar las primeras 3 empresas del array
Cortar las últimas 3 empresas del array
Cortar la empresa o empresas intermedias de TI del array
Eliminar la primera empresa de TI del array
Eliminar la empresa o empresas intermedias de TI del array
Elimine la última empresa de TI del array
Eliminar todas las empresas de TI 

*/
// Ejercicios: Nivel 1
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];


// 1. Declara un array vacío
let emptyArray = [];


// 2. Declara un array con más de 5 elementos
let multiElementArray = [1, 2, 3, 4, 5, 6, 7];

// 3. Encuentra la longitud de tu array
console.log("Longitud del array:", multiElementArray.length);

// 4. Obten el primer elemento, el elemento del medio y el último elemento de un array
console.log("Primer elemento:", multiElementArray[0]);
console.log("Elemento del medio:", multiElementArray[Math.floor(multiElementArray.length / 2)]);
console.log("Último elemento:", multiElementArray[multiElementArray.length - 1]);

// 5. Declara un array llamado mixedDataTypes con diferentes tipos de datos
let mixedDataTypes = [1, "texto", true, null, { nombre: "objeto" }, [1, 2, 3]];
console.log("Longitud de mixedDataTypes:", mixedDataTypes.length);

// 6. Declara un array llamado itCompanies
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Imprime el array usando console.log()
console.log("itCompanies:", itCompanies);

// 8. Imprime el número de empresas en el array
console.log("Número de empresas:", itCompanies.length);

// 9. Imprime la primera empresa, la intermedia y la última empresa
console.log("Primera empresa:", itCompanies[0]);
console.log("Empresa intermedia:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Última empresa:", itCompanies[itCompanies.length - 1]);

// 10. Imprime cada empresa
itCompanies.forEach(company => console.log(company));

// 11. Cambia el nombre de cada empresa a mayúsculas uno por uno e imprímelos
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Imprime el array como una oración
console.log(`${itCompanies.slice(0, -1).join(", ")} y ${itCompanies[itCompanies.length - 1]} son grandes empresas de TI.`);

// 13. Comprueba si existe una determinada empresa en el array itCompanies
function checkCompany(company) {
    return itCompanies.includes(company) ? company : "La empresa no existe";
}
console.log(checkCompany("Google"));
console.log(checkCompany("Facebook"));

// 14. Filtra las empresas que tienen más de una 'o' sin el método filter()
let multipleOCompanies = [];
for (let company of itCompanies) {
    if ((company.match(/o/gi) || []).length > 1) {
        multipleOCompanies.push(company);
    }
}
console.log("Empresas con más de una 'o':", multipleOCompanies);

// 15. Ordena el array usando el método sort()
console.log("Array ordenado:", itCompanies.sort());

// 16. Invierte el array usando el método reverse()
console.log("Array invertido:", itCompanies.reverse());

// 17. Corta las primeras 3 empresas del array
console.log("Primeras 3 empresas:", itCompanies.slice(0, 3));

// 18. Corta las últimas 3 empresas del array
console.log("Últimas 3 empresas:", itCompanies.slice(-3));

// 19. Corta la empresa o empresas intermedias de TI del array
let middleIndex = Math.floor(itCompanies.length / 2);
console.log("Empresas intermedias:", itCompanies.slice(middleIndex, middleIndex + 1));

// 20. Elimina la primera empresa de TI del array
console.log("Primera empresa eliminada:", itCompanies.shift());

// 21. Elimina la empresa o empresas intermedias de TI del array
middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log("Array después de eliminar empresa intermedia:", itCompanies);

// 22. Elimina la última empresa de TI del array
console.log("Última empresa eliminada:", itCompanies.pop());

// 23. Elimina todas las empresas de TI
itCompanies.length = 0;
console.log("Array después de eliminar todas las empresas:", itCompanies);