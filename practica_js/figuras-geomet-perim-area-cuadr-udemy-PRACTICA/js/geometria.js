
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
const perimTriangle = (side1, side2, base) => 
side1 + side2 + base;

const areaTriangle = (base, height) => (base * height) / 2;


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
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);

    const result = `El perímetro del Triángulo es: ${perimTriangle(side1,side2,side3)} cm`;
    valueResult.innerText = result;
}
    function calculateAreaTriangle(){
        let base = document.getElementById('inputBase');
        let height = document.getElementById('inputHeight');
        base = Number(base.value);
        height = Number(height.value);
        
    const result = `El área de Triangulo es: ${areaTriangle(base, height)} cm^2`;
        valueResult.innerText=result;
    
}

/* ==========================Círculo======================================== */


function calculateDiamCircle() {
}
function calculatePerimCircle() {
}
function calcularAreaCircle() {
}
