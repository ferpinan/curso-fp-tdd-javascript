import 'should';
import {procesar} from './fp.js';

describe("Programación Funcional", () => {
  it("Procesando arrays", () => {
    procesar([0,1,2,3,4,5]).should.eql(515);
  });
});