const { sum, multiply, division, subtraction } = require('./MathematicalOperations')

describe('Check the matemathical operations', () => {
  
  it('Test if return on the sum is correct', () => {
    expect(sum(10, 10)).toBe(20)
  });

  it('Test if return on the multiplication is correct', () => {
    expect(multiply(2, 25)).toBe(50)
  });

  it('Test if return on the division is correct', () => {
    expect(division(10, 5)).toBe(2)
  });

  it('Test if return on the subratction is correct', () => {
    expect(subtraction(50, 25)).toBe(25)
  });    
  
  it('Test if the sum of numbers it´s greater of number in the parameter', () => {
    expect(sum(30, 20)).toBeGreaterThan(49)
  });

  it('Test if the sum of numbers it´s greater than or equal of number in the parameter', () => {
    expect(sum(30, 20)).toBeGreaterThanOrEqual(50)
  });

  it('Test if the sum of numbers it´s less of number in the parameter', () => {
    expect(sum(30, 20)).toBeLessThan(51)
  });

  it('Test if the sum of numbers it´s less than or equal of number in the parameter', () => {
    expect(sum(30, 20)).toBeLessThanOrEqual(50)
  });
});

describe('Working with arrays for tests' , () => {
  it('Test itens of array', () => {
  const numbers = [1, 3, 5, 6];
  const characteres = ['Lets go learn tests with javascript'];
  expect(numbers).toContain(1)
  expect(characteres).toContainEqual('Lets go learn tests with javascript')
  });
});