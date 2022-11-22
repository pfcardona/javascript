    //  ! El número 7 al final es una bomba 💣💣💣

    const arr1 = [1,7,2,6,10,15,17,27,25,125,467,1070];

    const arr2 = [0,23,40,55,62,44,18,101,405,1080];

    // * Crear detectar bombas

    // console.log(arr1);

    function bombDetector(arr) {
        // ** crear un nuevo array que va a contener los numeros
        const newArray = []
        arr.map((num) => {
            // toString ->transforma cada numero a un string, y queda todos los números separados en una cifra
            const numToStr = num.toString()
            console.log(numToStr);
            for( let i= 0; i < numToStr.length; i++){
                // volvemos a transformar el string en numero  con + (Number)
                // llamamos un metodo de string NO de number
                //char at separa todos los numeros a una cifra y los almacena en un array
                newArray.push(+numToStr.charAt(i))
        }
        })
        console.log(newArray);

        //const contain = newArray.includes(7)
        const contain2 = newArray.filter((seven) => seven === 7)
        /* if(contain){
            console.log(' Tiene bomba');
        }else{
            console.log('No tiene bomba');
        } */
        if(contain2.length > 0){
            console.log(' Tiene bomba');
        }else{
            console.log('No tiene bomba');
        }
    }
    bombDetector(arr1)

    // bombDetector(arr2)