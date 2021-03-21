// Exercicio 1 //
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     console.log(number);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let number = 0; number < numbers.length; number += 1){
    sum += numbers[number];
 }
 console.log(sum);
