
describe('Hooks', () => {
    before(() => console.log("before all - se ejecuta al inicio una vez"));
    after(() => console.log("after all - se ejecuta al final de todas las pruebas it"));
    beforeEach(() => console.log("ejecutando antes de todos los it"));
    afterEach(() => console.log("ejecutando despues de todos los it"));
    it('Prueba 1', () => console.log("test1"));
    it('Prueba 2', () => console.log("test2"));

});