const readLine = require('readline-sync');

const averageVelocity = (distance, time) => {
  distance = readLine.questionInt('Type the distance traveled? ');
  time = readLine.questionInt('Type the time spent? ')
  const averageResult =  (distance / time).toFixed(1) ;
  console.log(`the average speed of ${ distance } 'm' for ${ time } 's' resulted in ${ averageResult } `)
}
averageVelocity();

