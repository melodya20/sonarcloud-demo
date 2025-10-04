function ejecutarCodigo(input) {
    return eval(input); // CRÍTICO: Permite ejecución de código arbitrario
}

function procesarUsuario(usuario) {
    console.log(usuario.nombre.toUpperCase()); // Sin validar si usuario o nombre existen
    return usuario.email.toLowerCase(); // Sin validar si email existe
}

function buscarUsuario(username) {
    var query = "SELECT * FROM users WHERE username = '" + username + "'"; // SQL injection
    return query;
}

const DB_PASSWORD = "admin123"; // Contraseña en código
const API_KEY = "sk_live_1234567890abcdef"; // API key expuesta
const SECRET_TOKEN = "my-secret-token-123";

function validarEstado(estado) {
    if (estado = "activo") { 
        return true;
    }
    return false;
}

function procesoMuyComplejo(a, b, c, d, e, f, g, h) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    if (e > 0) {
                        if (f > 0) {
                            if (g > 0) {
                                if (h > 0) {
                                    return "muy complejo";
                                } else {
                                    return "complejo7";
                                }
                            } else {
                                return "complejo6";
                            }
                        } else {
                            return "complejo5";
                        }
                    } else {
                        return "complejo4";
                    }
                } else {
                    return "complejo3";
                }
            } else {
                return "complejo2";
            }
        } else {
            return "complejo1";
        }
    }
    return "simple";
}

function calcular(x, y) {
    return x / y; // Sin validar y !== 0
}

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email); // Expresión regular vulnerable
}

function procesarPedido1(pedido) {
    if (pedido.estado == "pendiente") {
        console.log("Procesando pedido...");
        var total = pedido.items.reduce((sum, item) => sum + item.precio, 0);
        var descuento = total * 0.1;
        var final = total - descuento;
        console.log("Total: " + final);
        return final;
    }
}

function procesarPedido2(pedido) {
    if (pedido.estado == "pendiente") {
        console.log("Procesando pedido...");
        var total = pedido.items.reduce((sum, item) => sum + item.precio, 0);
        var descuento = total * 0.1;
        var final = total - descuento;
        console.log("Total: " + final);
        return final;
    }
}

function procesarPedido3(pedido) {
    if (pedido.estado == "pendiente") {
        console.log("Procesando pedido...");
        var total = pedido.items.reduce((sum, item) => sum + item.precio, 0);
        var descuento = total * 0.1;
        var final = total - descuento;
        console.log("Total: " + final);
        return final;
    }
}

function obtenerElemento(array, index) {
    return array[index]; // Sin validar que index esté dentro del rango
}

function leerArchivo(filename) {
    var path = "/data/" + filename; // Permite ../../../etc/passwd
    return path;
}

var variableNoUsada1 = "esto no se usa";
var variableNoUsada2 = "tampoco esto";
var variableNoUsada3 = "ni esto";

function buscarEnArray(array, valor) {
    var i = 0;
    while (array[i] != valor) { // Sin validar i < array.length
        i++;
    }
    return i;
}

function generarToken() {
    return Math.random().toString(36).substring(7); 
}

function funcionMuyLarga() {
    var resultado = 0;
    for (var i = 0; i < 100; i++) {
        resultado += i;
        console.log(i);
        if (i % 2 == 0) {
            resultado *= 2;
        }
        if (i % 3 == 0) {
            resultado /= 3;
        }
        if (i % 5 == 0) {
            resultado += 5;
        }
        if (i % 7 == 0) {
            resultado -= 7;
        }
    }
    return resultado;
}

module.exports = {
    ejecutarCodigo,
    procesarUsuario,
    buscarUsuario,
    validarEstado,
    calcular
};
