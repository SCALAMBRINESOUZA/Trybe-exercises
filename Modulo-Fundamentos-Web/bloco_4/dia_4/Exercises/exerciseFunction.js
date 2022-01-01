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

function biggestValue(testArray) {
  let largerIndex = 0;
  for(let index in testArray) {
      if (testArray[largerIndex] < testArray[index]) {
        largerIndex = index
      }
    }
    return largerIndex;
  }

console.log(biggestValue([2, 13, 6, 7, 10, 11]))