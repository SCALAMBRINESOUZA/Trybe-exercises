const myRemove = require('./verifyArray');

describe('Check if return is the expected', () => {
  const removeIndex = ([1 ,2 ,3 ,4]);
  it('verify if the call return the array expected', () => {
    expect([1, 2, 4]).toEqual(myRemove(removeIndex, 3))
  });
})