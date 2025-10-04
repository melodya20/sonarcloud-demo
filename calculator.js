
function ejecutarCodigo(input) {
    return eval(input); // Uso crítico detectado
}

function obtenerUsuario(nombre) {
    var query = "SELECT * FROM users WHERE name = '" + nombre + "'"; // SQL injection
    return query;
}

function validarEstado(estado) {
    if (estado = "activo") { // Asignación en lugar de comparación
        return true;
    }
    return false;
}

// Variable sin usar
var token = "abc123";

module.exports = { sumar, dividir, calcularDescuento, ejecutarCodigo, obtenerUsuario, validarEstado };
