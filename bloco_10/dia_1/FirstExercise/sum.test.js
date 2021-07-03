const sum = require('./sum');

describe('Check the returns of sum in the parameters', () => {
  it('Test if sum of number a with number b is equal the nine', () => {
    expect(sum(4, 5)).toBe(9)
  });

  it('Test if sum of number a with number b is equal the zero', () => {
    expect(sum(0, 0)).toBe(0)
  });

  it('Test if function throw an error when one of parameters is different of number', () => {
    expect(() => { sum(4, '5') }).toThrow()
  })

  it('Test if message of error is "parameters must be numbers" ', () => {
    expect(() => { sum(4, '5' ) }).toThrowError(new Error('parameters must be numbers'))
  })
});