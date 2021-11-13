const readLine = require('readline-sync');

const factorial = (x) => {
  return x <= 0 ? 1 : x * factorial(x - 1)
}

const resultFactorial = () => {
  const number = readLine.questionInt('Type here the number to calculate the factorial: ')
  if(number <= 0 ) {
  console.log('-------------------------------------------------------------------------');
      return console.log("The number should be greater than zero") 
    } 
  console.log('-------------------------------------------------------------------------');
     const result = factorial(number).toLocaleString(11.111)
     console.log(result);
}
resultFactorial(8)

module.exports = resultFactorial;

// var fatorial = function fac(n = readLine.questionInt('Type here the number to calculate the factorial: ')) { return n <= 0 ? 1 : n * fac(n - 1) };

// console.log(fatorial())
