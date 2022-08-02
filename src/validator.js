// responsabilidad: tener toda la logica

const validator = { //objeto
  // ...
  isValid: function (numbers) { // declaracion de isvalid

    const inverse = numbers.split("").reverse().map(Number);
    let plus = 0

    for (let i = 0; i < inverse.length; i++) {
      if (i % 2 !== 0) {//posiciones pares el indice comienza en 1  
        let multiply = inverse[i] * 2
        console.log(multiply)
        //entonces multiplicar numeros en posiciones que cumplieron con la condicion
        if (multiply >= 10) {
          let oneNumber = multiply - 9
          console.log(oneNumber)
          plus+=oneNumber
        } else {
          plus+=multiply
        }
      }
      if (i%2===1) {
        //console.log (inverse [i],i)
        plus+=inverse[i]
      } 
    } 
    console.log(plus)  
    let valid= plus%10===0
    console.log(valid)

  }
}



export default validator;
//1. Split divide datos en un array de tipo string 2. Reverse voltea de fin a principio 3.map convierte datos a valor numerico    
    /* segundo paso buscar posiciones impares por que se comienza desde cero (algoritmo luhn pide posiciones pares) 
    El bucle FOR se utiliza para repetir una o más instrucciones,for (inicialización; condición; actualización) {
     sentencias a ejecutar en cada iteración}*/