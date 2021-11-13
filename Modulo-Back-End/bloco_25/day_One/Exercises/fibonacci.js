const readLine = require('readline-sync');

const validation = (number) => {
  if(number <= 0) {
   return console.log("the value should be greater than zero")
  }  
} 

const fibonnaci = (number)  => {
  let a = 1;
  let b = 1;

  for (; number >= 0; number--) {
    if(b) console.log(b);
    const temp = a;
    a = a + b;
    b = temp;    
  }
    console.log(b);
    return b;
}  

const resultFibonacci = () => {
  const number = readLine.questionInt('Type here the value of number: ');
  console.log('-------------------------------------------------------------------------');
  if(number <= 0) {
    return validation(number)
  }
   fibonnaci(number - 2);
}

resultFibonacci();

module.exports = resultFibonacci;