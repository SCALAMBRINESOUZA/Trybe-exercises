const readLine = require('readline-sync');
const newGame = 's'

const prizeDraw = () => {
  
  const result = Math.floor(10 * Math.random());
  const kick = readLine.question('Choose a number between 0 and 10: ');
  console.log('-------------------------------------------------------------------------');

  if (result == kick) {
    console.log("congratulations, correct number!.");
    console.log('-------------------------------------------------------------------------');
    questionContinuePlay()
  
  } else {
    
    console.log(`Oops, it wasn't this time. the number was ${result}`)
    console.log('-------------------------------------------------------------------------');
    questionContinuePlay()
  }
}

const questionContinuePlay = () => {
  while (newGame === readLine.question(`Want to play again ? if yes type 's' and to exit press any key
  `)) {
    console.log('-------------------------------------------------------------------------');
    return prizeDraw();
  }
}

prizeDraw();

module.exports = prizeDraw;