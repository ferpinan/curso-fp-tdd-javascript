export function procesar(numeros) {
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    numeros[i] += 10;
    if (numeros[i] % 2 == 1)
      resultado += numeros[i];
  }
  return resultado;
}