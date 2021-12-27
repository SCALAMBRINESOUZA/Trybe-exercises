let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let number of numbers) {
    console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    average = sum / numbers.length;
}
console.log(average);
