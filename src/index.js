import validator from './validator.js';
// Responsabilidad del archivo: acceder al dom

// acceso al dom
const creditCardNumber = document.getElementById("cardNumber") 
const validar= document.getElementById("validar")

validar.addEventListener("click",function(){

    validator.isValid(creditCardNumber.value)// invocamos la funcion
    
    if (validator.isValid(creditCardNumber.value) == true){
        alert ("Valida")
       }else {
        alert ("No valida")
       }
       let final=validator.maskify(creditCardNumber.value)//invocamos la funcion
       creditCardNumber.value=final
})

