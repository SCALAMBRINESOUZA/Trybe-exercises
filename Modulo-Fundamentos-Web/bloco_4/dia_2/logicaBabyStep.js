// ultilizar este array para realizar os exercicios:
let numbers = [5, 2, 4, 18, 700, 8, 100, 122, 350, 28, 1];

// 1 exercicio

// 1.1 percorra o array
// for(let index = 0; index < numbers.length; index += 1) {}

//imprimindo todos os valores nele contidos com a função console.log()
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// 2 exercicio

// 2.1 criar uma variavel para armazenar a soma
// let sum = 0;

// 2.2 some todos os valores contidos no array
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
// }

// 2.3 imprima o resultado
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
// }
//console.log(sum)

// 3 exercicio

// 3.1 criar a variavel para armazenar a media
//  let average = 0;

// 3.2 criar a variavel para somar
//  let sum = 0;

// 3.3 calcule a média aritmética dos valores contidos no array
// for (let index = 0; index < numbers.length; index += 1) {
//    sum += numbers[index]
//    average = sum / numbers.length;
// }

// 3.4 imprima
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
//     average = sum / numbers.length;
// }
// console.log(average)

// 4 exercicio

// 4.1 Com o mesmo código do exercício anterior
// for(let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
//     average = sum / numbers.length;
// }

// 4.2 caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20"
// if(average > 20) {
//     console.log("valor maior que 20")
// }

// 4.3 Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// if (average > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

// 5 exercicio

// 5.1 Utilizando for
// for(let index = 0; index < numbers.length; index += 1) {}

// 5.2 criar uma variavel para armazenar o maior valor
// let maxNumber = 0;

// 5.3 descubra qual o maior valor contido no array e imprima - o
// for (let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] > maxNumber ) {
//         maxNumber = numbers[index]
//     }
// }
// console.log(maxNumber)

// 6 exercicio

// 6.1 criar a variavel para armazenar a quantidade de numeros impares
// let numbersOdd = 0;

// 6.2 Descubra quantos valores ímpares existem no array
// for(let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 !== 0) {
//         numbersOdd += 1
//     }
// }

// 6.3 Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// if (numbersOdd == 0) {
//     console.log("nenhum valor ímpar encontrado")
// }

// console.log(`A quantidade de numeros impares foi: ${numbersOdd}`)

// 7 exercicio

// 7.1 Utilizando for
// for(let index = 0; index < numbers.length; index += 1) {}

// 7.2 criar a variavel para armazenar o menor valor no array
// let minimumValue = 700

// 7.3 descubra qual o menor valor contido no array
// for (let index = 0; index < numbers.length; index += 1) { 
//     if(numbers[index] < minimumValue) {
//         minimumValue = numbers[index]
//     }
// }

// 7.4 imprima - o
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < minimumValue) {
//         minimumValue = numbers[index]
//     }
// }
// console.log(minimumValue)

// 8 exercicio

// 8.1 Utilizando for
// for(let index = 1; index < 26; index += 1) {}

// 8.2 criar uma variavel com array vazio para armazenar o novo array
let newArray = [];

// 8.3 crie um array que vá de 1 até 25 
// for (let index = 1; index < 26; index += 1) { 
//     newArray.push(index)
// }

// 8.4 imprima o resultado;
for (let index = 1; index < 26; index += 1) {
    newArray.push(index)
}
// console.log(newArray)

// 9 exercicio

// 9.1 Utilizando o array criado no exercício 
// for(let index = 0; index < newArray.length; index += 1) {
//     newArray[index]
// }
// 9.2 imprima o resultado da divisão de cada um dos elementos por 2
for (let index = 0; index < newArray.length; index += 1) {
    console.log(newArray[index] / 2);
}


