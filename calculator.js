function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    return a + b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir entre cero');
    }
    return a / b;
}

function calcularDescuento(precio, descuento) {
    if (typeof precio !== 'number' || typeof descuento !== 'number') {
        throw new Error('Datos inválidos');
    }
    return precio - (precio * descuento / 100);
}
