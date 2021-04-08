// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// //const greaterThan10 = greaterThan(10);
// console.log(greaterThan(15)(16));
// // true
//////////////////////////////////////////////////////////////////////////////////////////////

const wakeUp = () => console.log('acordando');


const breakFast = () => console.log('Bora tomar café!!');

const goSleep = () => console.log('Partiu dormir!!');

const doingThings = ((tasks) => {
  tasks = wakeUp();
  tasks = breakFast();
  tasks = goSleep();
  
});

doingThings(wakeUp);
