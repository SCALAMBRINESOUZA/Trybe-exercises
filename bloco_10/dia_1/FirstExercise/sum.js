const sum = (a, b) => {
  if(typeof (b) !== 'number') {
    throw new Error('parameters must be numbers')
  }
  return a + b;    
}


module.exports = sum; 