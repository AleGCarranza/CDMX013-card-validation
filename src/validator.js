// responsabilidad: tener toda la logica

const validator = { //objeto
  // ...
  isValid: function (numbers) { // declaracion de isvalid

    const inverse = numbers.split("").reverse().map(Number);
    let plus = 0;

    for (let i = 0; i < inverse.length; i++) {
      if (i % 2 === 1) {//posiciones pares el indice comienza en 1  
        let multiply = inverse[i] * 2
        //console.log(multiply)
        //entonces multiplicar numeros en posiciones que cumplieron con la condicion
        if (multiply >=10) {
          let oneNumber = multiply - 9
          //console.log(oneNumber)
          plus+=oneNumber;
        } else {
          //console.log(multiply)
          plus+=multiply;
        
        }
      } 
      else {
        plus+= inverse [i]
        
      }
      //console.log(plus)    
    }
    
    if(plus%10==0){
      
      document.getElementById("showValid").style.display= "block"
      //alert ("Es válida")
      //console.log("es valida")
    } else {
      
      alert ("Intenta de nuevo")
      //console.log ("intenta de nuevo")
    }

    //console.log(valid)
},
  maskify: function (numbersCard){
   let gato=""
   for (let a=0; a<numbersCard.length; a++){
    if (a<numbersCard.length-4) {
      gato= gato+"#";
    
    } else {
      gato= gato+numbersCard[a];

    }
    
   console.log(gato)
   }
   return gato;
   
    // Recibir 16 numeros en numbersCard 
    // usar los ultimo 4 digitos
     // return(numbersCard.slice(-4));
    // Esconder los 12 numeros que no retorna slice
 


    /*else {
      let
      numbersCard.slice(-4)
    }
    */
  }
}



export default validator;
//1. Split divide datos en un array de tipo string 2. Reverse voltea de fin a principio 3.map convierte datos a valor numerico    
    /* segundo paso buscar posiciones impares por que se comienza desde cero (algoritmo luhn pide posiciones pares) 
    El bucle FOR se utiliza para repetir una o más instrucciones,for (inicialización; condición; actualización) {
     sentencias a ejecutar en cada iteración}*/