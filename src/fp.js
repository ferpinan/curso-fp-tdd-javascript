export function procesar(numeros) {
    var resultado = 0;
    numeros.forEach(function(numero, index) {
        console.log("index", index);
        numero += 10;
        if (numero % 2 == 1) {
            resultado += numero;
        }
    });
    return resultado;
}