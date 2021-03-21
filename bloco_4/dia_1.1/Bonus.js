// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let i = 1; i < numbers.length; i += 1){
//   for(let j = 0; j < i; j += 1 ){
//     if(numbers[i] < numbers[j]){
//     let position = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = position;
//     }
    
//   }    
// }
// console.log(numbers);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let i = 1; i < numbers.length; i += 1){
//   for(let j = 0; j < i; j += 1 ){
//     if(numbers[i] > numbers[j]){
//     let position = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = position;
//     }
    
//   }    
// }
// console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for(let i = 0; i < numbers.length; i += 1){
   if(numbers[i + 1]){
      newArray.push(numbers[i] * numbers[i + 1])
   }else {
     newArray.push(numbers[i] * 2);
   }
  }
  console.log(newArray);