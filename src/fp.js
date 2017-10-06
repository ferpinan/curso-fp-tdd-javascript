export function procesar(numeros) {
    var resultado = 0;
    resultado = numeros.filter(esImpar).map(sumaDiezNumero).reduce(sumaTodos, resultado);
    return resultado;
}

function esImpar(valor){
    return (valor % 2) == 1;
}

function sumaTodos(valorAnterior, valorActual){
    return valorAnterior + valorActual;
}

function sumaDiezNumero(valor) {
    return valor + 10;
}