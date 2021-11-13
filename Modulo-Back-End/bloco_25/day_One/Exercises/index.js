const readLine = require('readline-sync');

const selectScript = () => {

  console.log('Choose the script to be run');
  console.log('1. BMI');
  console.log('2. average Velocity');
  console.log('3. prize Draw');
  console.log('4. factorial');
  console.log('5. fibonnaci')
  console.log('-------------------------------------------------------------------------');
  const scriptSelected = readLine.questionInt('Which script will run? ');
  console.log('-------------------------------------------------------------------------');

  if (scriptSelected == 1) {
    const imc = require('./imc');
    return imc();

  } else if (scriptSelected == 2) {
    const averageVelocity = require('./averageVelocity')
    return averageVelocity;
  
  } else if (scriptSelected == 3) {
    const prizeDraw = require('./prizeDraw')
    return prizeDraw;
  
  } else if (scriptSelected == 4) {
    const resultFactorial = require('./factorial')
    return resultFactorial;     
  
  } else if (scriptSelected == 5) {
    const resultFibonacci = require('./fibonacci')
    return resultFibonacci;
  }

} 

selectScript()