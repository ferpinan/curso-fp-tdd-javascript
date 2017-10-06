// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map



export function procesar(numeros) {
    var resultado = 0;
    resultado = numeros.filter(esImpar).map(sumaNueva(10)).reduce(sumaNueva, resultado);
    return resultado;
}

function suma(numero){
    return function(actual){
        return actual + numero;
    }
}
// var sumarDoce = suma(12);
// sumarDoce(1); //13
// sumarDoce(2); //14
// sumarDoce(3); //15
// sumarDoce(4); //16
//const suma = a => b => a + b;


function sumaNueva(numero1, numero2){
    console.log("argument length", arguments.length);
    if(numero2!=null){
        return numero1 + numero2;
    }else {
        return function (actual) {
            return actual + numero1;
        }
    }
}


function esImpar(valor){
    return (valor % 2) == 1;
}

// function sumaTodos(valorAnterior, valorActual){
//     return valorAnterior + valorActual;
// }
//
// function sumaDiezNumero(valor) {
//     return valor + 10;
// }