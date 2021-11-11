const readLine = require('readline-sync');

const imc = (peso, altura) => {
  const namePeople = readLine.question("Type your name? ");
  peso = readLine.questionFloat('Type here your weight? ');
  altura = readLine.questionFloat('Type here your height? ');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(1);
  
  if (imc < 18.5) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} under weight
    (thinness)`)
    } else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} default weight`)
    } else if (imc >= 25.0 && imc < 29.9) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} over weight
    (overweight)`)
    } else if (imc >= 30.0 && imc < 34.9) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} obesity grade I` )
    } else if (imc >= 35.0 && imc < 39.9) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} obesity grade II `)
    } else if (imc >= 40) {
    console.log(`Hello ${namePeople} your body mass index is in ${imc} obesity grades III e IV `)
  }
}
imc()

module.exports = imc;