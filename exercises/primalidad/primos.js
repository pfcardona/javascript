/**
         *todo Practica 02: Primalidad
        ** Crear un sistema que detecte si un numero es primo o no
        ** Para solucionar este problema se requiere que el usuario ingrese un numero por teclado
        ** y el sistema detecte si es primo o no.
        ** Un numero primo es aquel que se puede dividir solo dos veces por 1 y por sí misma.
        ** Teniendo en cuenta que los números primos entre 1 y 100 son :
        ** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
        */
        const esPrimo = (numero) => {
        contador = 0;
        let numeros = [];
        for(let i=0; i<= numero; i++ ) {
        numeros.push(i);
        }
        for (let n of numeros){
                if(n === 1 || n === numero){
                continue;
                }
                if(numero % n === 0){
                contador ++;
                }
        }
        // si contador es = a cero, quiere decir que el número es primo ya que el contador no ha incrementado
        return contador === 0;
        }
        console.log(esPrimo(5))
        console.log(esPrimo(7))
        console.log(esPrimo(9))
        let numero = Number(prompt("Ingrese un número"));
        if(esPrimo(numero)) {
            console.log('Es primo')
            document.write('Es primo');
        }else{
                console.log('No Es primo')
                document.write('No Es primo');
            }
