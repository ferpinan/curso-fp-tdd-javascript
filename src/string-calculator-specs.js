import 'should';
import sc from './string-calculator.js';

describe("String calculator", () => {
  it("puede sumar una cadena vacía", () => {
    sc("").should.eql(0);
  });
});
