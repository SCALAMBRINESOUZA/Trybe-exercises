                // Exercicio 1 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers){
    console.log(number);
}
                // Exercicio 2 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let number = 0; number < numbers.length; number += 1){
    sum += numbers[number];
 }
 console.log(sum);
                // Exercicio 3 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;

for(let number = 0; number < numbers.length; number += 1){
    sum += numbers[number];
    average = sum / 10;
}
    console.log(average);

                // Exercicio 4 //

let numbers = [5, 9, 3,  8, 2 ];
let sum = 0;
let average = 0;

for(let number = 0; number < numbers.length; number += 1){
    sum += numbers[number];
    average = sum / 5;
}

if(average > 20){
  console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
