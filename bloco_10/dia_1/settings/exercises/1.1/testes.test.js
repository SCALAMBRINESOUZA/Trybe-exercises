const sum1 = require('./testes');

describe('retorna o valor da soma de a com b respectivamente ', () => {
    it('return the value of sum', () => {
        expect(sum1(4, 5)).toBe(9);
    });

    it('return sum a + b respectively 0 + 0 return 0', () => {
        expect(sum1(0, 0)).toBe(0);
    }); 

    it('return exception', () => {
        expect(() => {sum1() }).toThrow();
    });

    it('return exception with message',() => {
        expect(() => {sum1() }).toThrowError(new Error('parameters must be numbers'));
    });
});