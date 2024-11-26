function realizarOperacion() {
    let operacion = ""; // Inicializamos operacion con un valor vacío
    let continuar = "sí"; // Iniciamos con la suposición de que el usuario quiere continuar

    while (continuar.toLowerCase() != "no") { //toLowerCase: transformar a minúsculas
        let num1, num2;

        // Solicitar el primer número y validar que sea un número entero
        while (true) {
            num1 = parseInt(prompt("Escribe el primer número para trabajar: "));
            if (!isNaN(num1)) { //isNaN valida si es un numero
                break; // Sale del bucle si num1 es un número válido
            }
            console.log("\n***********************************************");
            console.log("* Por favor, escribe un número entero válido. *");
            console.log("***********************************************\n");
        }

        // Solicitar el segundo número y validar que sea un número entero
        while (true) {
            num2 = parseInt(prompt("\nEscribe el segundo número para trabajar: "));
            if (!isNaN(num2)) {
                break; // Sale del bucle si num2 es un número válido
            }
            console.log("\n***********************************************");
            console.log("* Por favor, escribe un número entero válido. *");
            console.log("***********************************************\n");
        }

        // Solicitar la operación que se quiere realizar
        operacion = prompt("\nOkey, ahora escribe el tipo de operación que quieres trabajar tus dos números (suma, resta, multiplicacion, division): ").toLowerCase();

        if (operacion == "suma") {
            console.log("\nResultado: " + (num1 + num2));
        } else if (operacion == "resta") {
            console.log("\nResultado: " + (num1 - num2));
        } else if (operacion == "multiplicacion") {
            console.log("\nResultado: " + (num1 * num2));
        } else if (operacion == "division") {
            if (num2 === 0) {
                console.log("Error: No se puede dividir entre 0.\n");
            } else {
                console.log("\nResultado: " + (num1 / num2));
            }
        } else {
            console.log("\nOperación no reconocida.");
        }

        // Preguntar si desea realizar otra operación
        continuar = prompt("\n¿Deseas realizar otra operación? (si/no): ");
    }

    console.log("¡Hasta luego!"); //Llamada facherita
}

realizarOperacion(); //Llamada de la función