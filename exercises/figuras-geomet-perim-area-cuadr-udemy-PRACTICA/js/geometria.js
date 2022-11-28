
const valueResult = document.getElementById('result');

/**
 * área y perímetro del cuadrado
 * ====================================================
*/
const perimSquare = (side) => side *4;
const areaSquare = (side) => side * side;
// console.log(perimSquare(4))
// console.log(areaSquare(20))
/**
 * área y perímetro de triangulo 
 * ====================================================
*/

// console.log(perimTriangle(4,4,2))

/**
 * área y perímetro del circulo
 * ====================================================
*/
// console.log(perimCircle(4));
// console.log(areaCircle(4));

/* =====================Cuadrado============================================= */

function calculatePerimSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El perímetro del cuadrado es: ${perimSquare(value)} cm`;
    valueResult.innerText = result;
}

function calcularAreaSquare(){

    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El area del cuadrado es: ${areaSquare(value)} cm^2` ;
    valueResult.innerText = result;
}

/* ========================Triangulo========================================== */
function calculatePerimTriangle() {
    
}   
function calculateAreaTriangle() {
    
}

/* ==========================Círculo======================================== */


function calculateDiamCircle() {
}
function calculatePerimCircle() {
}
function calcularAreaCircle() {
}
