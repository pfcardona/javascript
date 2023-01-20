
const inputPrice = document.querySelector('#price')
// const inputDiscount = document.querySelector('#discount')
const inputCoupon= document.querySelector("#coupon");
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click',calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value)
    // const discount = Number(inputDiscount.value)
    const coupon = inputCoupon.value

    if(!price || !coupon) {
        pResult.innerText = "LLenar el formulario"
        return;
    }
    let discount;
    switch (coupon) {
        case 'JuanDC_es_Batman':
        discount = 30;
        break;
        case 'no_le_digas_a_nadie':
        discount = 25;
        break;
        default:
        pResult.innerText = 'El cupón no es válido';
        return;
    }
    /* if(coupon == 'Juan') {
        discount = 30
    }else if (coupon == 'no'){
        discount = 25
    }else{
        pResult.innerHTML = 'El cupón no es válido'
        return
    }
    */
    /* if(discount > 100) {
        pResult.innerHTML ="NO permitido"
        return
    } */
    const newPrice = (price * (100 - discount)) / 100
    pResult.innerText = "El nuevo precio con descuento es " + newPrice;
}