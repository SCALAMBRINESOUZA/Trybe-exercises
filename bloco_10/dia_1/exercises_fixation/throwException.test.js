const multiplyByTwo = require('./throwException');

describe('Check the execution of throw exceptions', () => {
  it('Test the value of return the multiplication', () => {
    expect(multiplyByTwo(4)).toBe(8)
  });

  it('Test if throw an err when number is undefined', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  
  it('Test if the message the error is number it´s undefined', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'))
  });
});