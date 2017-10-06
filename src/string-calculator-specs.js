import 'should';
import sc from './string-calculator.js';

describe("String calculator", () => {
    it("puede sumar una cadena vacía", () => {
        sc("").should.eql(0);
    });
    it("si recibe un parametro devuelve el mismo parametro", () => {
        sc("1").should.eql(1);
        sc("2").should.eql(2);
        sc("3").should.eql(3);
    });
    it("si recibe dos parametros devuelve la suma de los mismos parametros", () => {
        sc("1,1").should.eql(2);
        sc("2,5").should.eql(7);
        sc("3,8").should.eql(11);
    });
    it("si recibe n parametros devuelve la suma de todos los parametros", () => {
        sc("1,1,2").should.eql(4);
        sc("2,5,4,5").should.eql(16);
        sc("3,8,9,1").should.eql(21);
    });
    it("si recibe n parametros separado con coma o \n devuelve la suma de todos los parametros", () => {
        sc("1,1,2").should.eql(4);
        sc("2,5\n4,5").should.eql(16);
        sc("3,8\n9").should.eql(20);
    });
    it("si recibe numero mayores de mil no se tienen en cuenta", () => {
        sc("111111,1,2").should.eql(3);
        sc("21111,5\n4,5").should.eql(14);
        sc("311111,81111\n91111").should.eql(0);
    });
    it("Se puede definir un separador distinto usando el patrón: \"//[delimitador]\\n[números]\"", () => {
        sc("//;\n111111;1;2").should.eql(3);
    });
    it("No se admiten numeros negativos", () => {
        (() => sc("-1,-2,-5,6")).should.throw(/-1/);
        (() => sc("-1,-2,-5,6")).should.throw(/-2/);
        (() => sc("-1,-2,-5,6")).should.throw(/-5/);
    });
});
