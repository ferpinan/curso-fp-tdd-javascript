import 'should';
import {asyncCallback, asyncPromise, asyncGet} from './async.js';

describe("Testear llamadas asíncronas", () => {
  it("con callbacks", (done) => {
    asyncCallback(33, v => {
      v.should.eql(33);
      done();
    })
  });

  it("con promises", () => {
    return asyncPromise(33).should.eventually.eql(33);
  });


  it("fetch", () => {
    let url = 'http://formacion.bunt.es/cursos.json';
    return asyncGet(url).should.eventually.deepEqual({a:33});
  })
});