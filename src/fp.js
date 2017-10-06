// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map

import {curry} from 'ramda';
const sumarCurry = curry(function (a,b) {
   //ola que ase
    console.log("ea", a + b);
    return a + b;
});
sumarCurry(1)(2);
sumarCurry(1, 2);

export function procesar(numeros) {
    var resultado = 0;
    return numeros
        .filter(not2(esPar))
        .map(combine(sumaNueva(10), cuadrado))
        .reduce(sumaNueva, resultado);
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
    if(numero2 !== undefined){
        return numero1 + numero2;
    }else {
        return function (actual) {
            return actual + numero1;
        }
    }
}

const cuadrado = n1 => n1*n1;
const combine = (f1, f2) => value => f2(f1(value));


const not = curry(function (a, b) {
    return !a(b);
});

function not2(predicado){
    return function(valor){
        return !predicado(valor);
    }
}
function esPar(valor){
    return (valor % 2) == 0;
}

// function sumaTodos(valorAnterior, valorActual){
//     return valorAnterior + valorActual;
// }
//
// function sumaDiezNumero(valor) {
//     return valor + 10;
// }