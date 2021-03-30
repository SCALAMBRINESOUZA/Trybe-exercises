// const longestWord = phrase => {
//     let wordArray = phrase.split(' ');
//     let maxLength = 0;
//     let biggestword = '';
//     for(const word of wordArray){
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             biggestword = word;
//         }

//     } 
//     return biggestword;

// }
//     console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


   const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

   console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))