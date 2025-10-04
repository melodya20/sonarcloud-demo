const { sumar, dividir, calcularDescuento } = require('./calculator');

test('sumar debe sumar dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('dividir debe dividir correctamente', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('calcularDescuento debe calcular correctamente', () => {
  expect(calcularDescuento(100, 10)).toBe(90);
});
