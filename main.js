// Función 
function conversorDeMonedas() {
// Nombre del usuario
    let nombre = prompt("Hola, ¿cuál es tu nombre?");
  
    if (nombre === null || nombre === "") {
      alert("Debés ingresar tu nombre.");
      return;
    }
  
    let deseaConvertir = true;
  
    while (deseaConvertir) {
      //Cuántos pesos tiene el usuario
      let cantidadPesos = parseFloat(prompt("Hola, " + nombre + ". ¿Cuántos pesos querés converitr?"));
  
      if (isNaN(cantidadPesos)) {
        alert("Por favor, ingresá un número.");
        continue;
      }
  

      // Equivalencia  al viernes 13/10
      let dolarOficial = cantidadPesos / 365;
      let dolarBlue = cantidadPesos / 980;
      let dolarMep = cantidadPesos / 870.43;
      let dolarTurista = cantidadPesos / 731;
  


      //alerta con mensaje
      alert( 
        "Hola, " + nombre + ". En pesos argentinos tenés " + cantidadPesos + "\n\n" + //"n" para separar lineas
        "Equivalente en dólares:\n" +
        "Dólar Oficial: $" + dolarOficial.toFixed(2) + "\n" +  //toFixed para acortar los decimales
        "Dólar Blue: $" + dolarBlue.toFixed(2) + "\n" +
        "Dólar MEP: $" + dolarMep.toFixed(2) + "\n" +
        "Dólar Turista: $" + dolarTurista.toFixed(2)
      );
  


      //Pregunta si quiere hacer otra conversión
      let respuesta = prompt("¿Querés hacer otra conversión? (SI/NO)").toUpperCase();  //toupercase para hacer que minuscula pase a mayuscula
      if (respuesta !== "SI" && respuesta !== "SÍ") {  //!== oara comprobar que los dos valores son iguales
        deseaConvertir = false;
      }
    }
  

    
    // Despedida
    alert("Gracias, " + nombre + ". ¡Vuelva pronto!");

  }
  




  // Llamado a la función principal
  conversorDeMonedas();
  