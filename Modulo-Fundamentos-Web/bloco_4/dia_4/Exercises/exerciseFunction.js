// function checkPalindrom(phrase) {
//   let char = phrase.split(''),
//   firstLetter = char.shift(),
//   lastLetter = char.pop();
//   if (firstLetter !== lastLetter ) {
//     return false;
//   }
//   if (char.length < 2) {
//     return true;
//   }

//   return checkPalindrom(char.join(''));
// }

// console.log(checkPalindrom('ana'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function biggestValue(testArray) {
//   let largerIndex = 0;
//   for(let index in testArray) {
//       if (testArray[largerIndex] < testArray[index]) {
//         largerIndex = index
//       }
//     }
//     return largerIndex;
//   }

// console.log(biggestValue([2, 13, 6, 7, 10, 11]))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function smallerValue(testArray) {
//   let largerIndex = 0;
//   for (let index in testArray) {
//     if (testArray[largerIndex] > testArray[index]) {
//       largerIndex = index
//     }
//   }
//   return largerIndex;
// }
// console.log(smallerValue([2, 4, 6, 7, 10, 0, -3]))

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

// function biggestName(testArray) {
//   let maxCount = testArray[0];
//   for (let char of testArray) {
//       if(maxCount.length < char.length) {
//         maxCount = char
//       }
//     }
//       console.log(maxCount)
//     }

// biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function numberRepeat(testArray) {
//     let countRepeat = testArray[0];
//     for (let number of testArray) {
//       if (countRepeat == number) {
//         countRepeat = number
//       }
//     }
//     console.log(countRepeat);
//   }


// numberRepeat([2, 3, 2, 5, 8, 2, 3])

// Exemplo abaixo copiado do course

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

// console.log(maisRepetido([2, 3, 3, 5, 8, 2, 3])); //2

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// function sumNumber(number) {
//     let sum = 0;
//       for(let i = 1; i <= number; i += 1) {
//         sum = sum + i;
//       }
//       return sum
//     }
// console.log(sumNumber(5))

// Crie uma função que receba uma string word e outra string ending.Verifique se a string ending é o final da string word.Considere que a string ending sempre será menor que a string word.

function compareWord(stringA, stringB) {
 stringA = stringA.split('');
 stringB = stringB.split('');
 let control = true;

 for(let i = 0; i < stringB.length; i += 1) {
   if (stringA[stringA.length - stringB.length + i] != stringB[i]) {
     control = false
   }
 }
 return control
}

console.log(compareWord('carlos', 'car'))