            // Verifica se a frase é um palindromo duas formas //
// const verificarPalindrome = (phrase) => {
// let isPalindrome = true;
// let arrayletras = phrase.split('');
//     for(let i in arrayletras ){
//         if (arrayletras[i] !== phrase[(phrase.length - 1) - i]) {
//             isPalindrome = false;
//         }
//     }
//     return isPalindrome;
// }
// console.log(verificarPalindrome('arara'))

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }   

// console.log(verificaPalindrome('desenvolvimento'));

                    // Retorne o maior indice de um array //

// const biggestIndex = (vector) => {
//     let acumulador = 0;
//     for (let index in vector) {
//         if (vector[acumulador] < vector[index]){
//             acumulador = index;
//         }
//     }
//         return acumulador;

// } 
// console.log(biggestIndex([2, 3, 6, 7, 10, 1]));


                    // Retorne o menor indice de um array //

// const smallestIndex = (vector) => {
//     let acumulador = 0;
//     for (let index in vector) {
//         if (vector[index] < vector[acumulador]) {
//             acumulador = index;
//         }
//     }

//     return acumulador;
// }
//     console.log(smallestIndex([2, 4, 6, 7, 10, 0, -3]))



                 // Retorno frase com maior quantidade de letras //


// const countCaracteres = (phrase) => {
//     let count = phrase[0];
//     for(let phr in phrase){
//         if (count.length < phrase[phr].length) {
//             count = phrase[phr]
//         }
//     }    
//     return count
// } 
//     console.log(countCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

                        // Retorne o numero que mais se repete //

// function maisRepetido(numeros) {
//   let num = {};

//   for (let index = 0; index < numeros.length; index += 1) {
//     let valor = numeros[index];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));


                // Retorno soma dos numeros //

// const sum = (number) => {
//     let soma = 0;
//     for (let n = 1; n <= number; n += 1){
//         soma += + n;
        
//     }
//     return soma;
// }      
//     console.log(sum([6]))          


                    // Comparar fim da string //

// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');

//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
//     console.log(verificaFimPalavra('carlos', 'los'));                    

                    //    Bonus //
// function Romanos(roma) {
//   let romanos = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let arrayNumbers = [];
//   let result = 0;

//   for (let indice in roma) {
//     arrayNumbers[indice] = romanos[roma[indice]];
//   }

//   for (let indice in arrayNumbers) {
//     if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
//       arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
//     } else {
//       result += arrayNumbers[indice];
//     }
//   }

//   return result;
// }

// console.log(Romanos('M'));


// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// const result = {};

// for (let index = 0; index < basket.length; index += 1) {
//   const fruit = basket[index];
//   if (!result[fruit]) result[fruit] = 0;
//   result[fruit] += 1;
// }

// const summaries = [];
// for (fruit in result) {
//   let message = `${result[fruit]} ${fruit}`;
//   if (result[fruit] > 1) message += 's';
//   summaries.push(message);
// }

// console.log(`Sua cesta possui: ${summaries.join(', ')}.`);
