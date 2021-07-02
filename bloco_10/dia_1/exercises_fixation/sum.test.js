const {sum, multiply, division, subtraction} = require('./MathematicalOperations')

describe('Check the matemathical operations', () => {
  
  it('Test if return on the sum is correct', () => {
    expect(sum(10, 10)).toEqual(20)
  });

  it('Test if return on the multiplication is correct', () => {
    expect(multiply(2, 25)).toEqual(50)
  });

  it('Test if return on the division is correct', () => {
    expect(division(10, 5)).toEqual(2)
  });

  it('Test if return on the subratction is correct', () => {
    expect(subtraction(50, 25)).toEqual(25)
  });    
})