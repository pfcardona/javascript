console.log("hola");

/**
 * área y perímetro del cuadrado
 * ====================================================
*/

  const perimSquare = (side) => side * 4

  // const areaSquare = (side) => side * side
    function areaSquare (side) {
    return side * side
    }
    console.log(perimSquare(5))
    console.log(areaSquare(8))

function calculatePerimSquare() {
    let inputSide = document.getElementById('inputSide')
    let value = Number (inputSide.value)


const result = ` El perímetro del cuadrado es: ${perimSquare(value)} cm`
document.getElementById('result').innerText = result

}

function calculateAreaSquare() {
    let inputSide = document.getElementById('inputSide')
    let value = Number (inputSide.value)


const result = ` El area del cuadrado es: ${areaSquare(value)} cm^2`
document.getElementById('result').innerText = result

}