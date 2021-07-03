const human = require('./human');

describe('Check the data of the respective human object', () => {
  
  it('Test if name is the expect for code', () => {
    expect(human.name).toEqual('Carlos')
  });
  
  it('Test the age of human object', () => {
    expect(human.age).toEqual(34)
  });

  it('Test how many sons human object has', () => {
    expect(human.children.boys).toEqual(2)
  });

  it('Test how many girls human object has', () => {
    expect(human.children.girls).toEqual(2)    
  });

  it('Test if human object is married', () => {
    expect(human.isMarried).toEqual(true)
  });
  
  it('Test the veracity of the elements', () => {
    const isBusy = undefined;
    expect(isBusy).toBeFalsy()
  })
});