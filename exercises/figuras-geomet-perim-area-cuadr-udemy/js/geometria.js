
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
const perimTriangle = ( side1, side2, side3) => side1 + side2 + side3;
const areaTriangle = (base, altura) => (base * altura) / 2;
// console.log(perimTriangle(4,4,2))

/**
 * área y perímetro del circulo
 * ====================================================
*/
const diamCircle = (radio) => radio * 2
const perimCircle = (radio) => diamCircle(radio) * Math.PI 
const areaCircle = (radio) => (radio * radio) * Math.PI 
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
function calculateAreaTriangle() {
    let base = document.getElementById('inputBase')
    let altura = document.getElementById('inputHeight')

    base = Number(base.value)
    altura = Number(altura.value)
    const result = `El Area del Triángulo es: ${areaTriangle(base,altura)} cm`;
    valueResult.innerText = result;
}

/* ==========================Círculo======================================== */


function calculateDiamCircle() {
    let radio = document.getElementById('inputRadio')

    radio = Number(radio.value)
    const result = `El Diámetro del Circulo es: ${diamCircle(radio)} cm`
    valueResult.innerText = result
}
function calculatePerimCircle() {
    let radio = document.getElementById('inputRadio')
    radio = Number(radio.value)
    const result = `El Perímetro del Circulo es: ${perimCircle(radio)} cm`
    valueResult.innerText = result
}
function calcularAreaCircle() {
    let radio = document.getElementById('inputRadio')
    radio = Number(radio.value)
    const result = `El Área del Circulo es: ${areaCircle(radio)} cm`
    valueResult.innerText = result
}
