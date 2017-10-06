//to search at google: code kata catalog

import {curry, pipe, tap} from 'ramda';

const EMPTY_RESULT = 0;
const SEPARATOR = ",";
const SEPARATOR_N = "\n";

function normalizarTexto(s) {
    var innerSeparator = SEPARATOR;
    var text = s;
    if (text.indexOf("//") === 0) {
        innerSeparator = text.charAt(2);
        console.log("Si");
        var startString = "//" + innerSeparator + "\n";
        text = replaceAll(startString, "", text);
    }

    text = replaceAll(innerSeparator, SEPARATOR, text);
    text = replaceAll(SEPARATOR_N, innerSeparator, text);
    return text;
}

export default (s) => {
    var text = normalizarTexto(s);
    if (isEmpty(text)) {
        return EMPTY_RESULT;
    }
    var sArray = text.split(SEPARATOR);
    sArray = sArray.map(parte => parseInt(parte));
    sArray = sArray.filter(menorQue(1000));

    var negativos = sArray.filter(menorQue(0));
    if(negativos.length>0){
        throw new Error("No se admiten numeros negativos. Los numero negativos son los siguientes: " + negativos.join(", "));
    }

    return sArray.reduce(suma, 0);
}

function isEmpty(s){
    return s.trim().length==0;
}

function suma(a, b){
    return a +b;
}

const replaceAll = (search, replacement, text) => {
    return text.replace(new RegExp(search, "g"), replacement);
};

const menorQue = curry((b, a) => {
    return a < b;
});