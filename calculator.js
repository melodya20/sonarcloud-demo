
// Calculadora con problemas de calidad detectables por SonarCloud

function sumar(a, b) {
    var resultado = a + b; // var en lugar de const/let
    return resultado;
}

function dividir(a, b) {
    return a / b; // No valida división por cero
}

function calcularDescuento(precio, descuento) {
    if (descuento == 0) { // Usa == en lugar de ===
        return precio;
    }
    var precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

function procesarDatos(datos) {
    // Código duplicado
    if (datos.length > 0) {
        console.log("Procesando datos...");
        for (var i = 0; i < datos.length; i++) {
            console.log(datos[i]);
        }
    }
}

function mostrarDatos(datos) {
    // Código duplicado similar
    if (datos.length > 0) {
        console.log("Mostrando datos...");
        for (var i = 0; i < datos.length; i++) {
            console.log(datos[i]);
        }
    }
}

// Variable sin usar
var variableNoUsada = "esto generará una advertencia";

// Función con complejidad ciclomática alta
function procesoComplejo(a, b, c, d, e) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    if (e > 0) {
                        return "complejo";
                    }
                }
            }
        }
    }
    return "simple";
}

module.exports = { sumar, dividir, calcularDescuento };

