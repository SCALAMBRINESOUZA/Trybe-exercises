//                     // Arrow Function soma // 
// const sum = (number1 , number2) => number1 + number2;
// console.log(sum(10 , 10));

//                     // Arrow Function subtração //

// const sub = (number1, number2) => number1 - number2;
// console.log(sub(15 , 10));                    

//                     // Arrow Function multiplicação //

// const mult = (number1, number2) => number1 * number2;
// console.log(mult(2, 10));

//                     // Arrow Function divisão //

// const div = (number1, number2) => number1 / number2;
// console.log(div(12, 6));

//                     // Arrow Function resto da divisão //

// const mod = (number1, number2) => number1 % number2;
// console.log(mod(10, 3));

// Comparando dois valores e retornando o maior //

// const compare = (number1 , number2) => number1 > number2 ? number1 : number2;
// console.log(compare(58,51))

// Comparando tres valores e retornando o maior //

// const compareThree = (number1 , number2 , number3) => {
//     if (number1 > number2 && number1 > number3){
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2)
//     } else {
//         console.log(number3);
//     }
// }
// compareThree(68, 61, 69)

// Retornando valor positivo ou negativo //

// const comparePosNeg = number => {
//     if (number < - 0){
//         console.log(`${number} é negativo`);
//     } else if (number > 0) {
//         console.log(`${number} é positivo`)
//     } else {
//         console.log(`${number} é zero`);
//     }
// }
//     comparePosNeg(10)


// Angulos de um triangulo //

// const triangle = (leftSide, rightSide, bottonSide, triangle) => {
//   if (leftSide < 0 || rightSide < 0 || bottonSide < 0 ) {
//       console.log('Angulo inválido')
//       return null;
//   } else if (leftSide + rightSide + bottonSide === 180) {
//       triangle = true;
//       console.log(triangle);
//       return triangle;
//   } else {
//       triangle = false;
//       console.log(triangle);
//       return triangle;
//   };
// };
//   triangle(80, 40, 60);

// Peça de xadrez e seus respectivos movimentos //


// const chess = peca => {
//   switch (peca.toLowerCase()) {
//     case 'rei':
//       console.log('Rei-> Uma casa apenas para qualquer direção.');
//       break;
//     case 'bispo':
//       console.log('Bispo-> Diagonal.');
//       break;
//     case 'rainha':
//       console.log('Rainha-> Diagonal, horizontal e vertical.');
//       break;
//     case 'cavalo':
//       console.log('Cavalo -> "L" pode pular sobre as peças.');
//       break;
//     case 'torre':
//       console.log('Torre -> Horizontal e vertical.');
//       break;
//     case 'peão':
//       console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//       break;
//     default:
//       console.log('Erro, peça inválida!');
//       break;
//   };
// }                      
//   chess('RaiNHA')


                              // Conversão de notas //

// const convertor = note => {
//   if (note < 0 || note > 100) {
//     console.log("Nota invalida programa encerrado");
//   }
//   else if (note >= 90) {
//     note = 'A';
//     console.log(`Conceito => ${note}`);
//   }

//   else if (note >= 80) {
//     note = 'B';
//     console.log(`Conceito => ${note}`);
//   }

//   else if (note >= 70) {
//     note = 'C';
//     console.log(`Conceito => ${note}`);
//   }

//   else if (note >= 60) {
//     note = 'D';
//     console.log(`Conceito => ${note}`);
//   }

//   else if (note >= 50) {
//     note = 'E';
//     console.log(`Conceito => ${note}`);
//   }

//   else {
//     note = 'F';
//     console.log(`Conceito => ${note}`);
//   }
// }

//   convertor(50);

                                  // Even Number //

// const isEvenNumber = (numberOne, numberTwo, numberThree) => numberOne % 2 === 0 || numberTwo % 2 === 0
//  || numberThree % 2 === 0 ? true : false;
//  console.log(isEvenNumber(1,9,7));

                                 // Odd Number //

// const isOddNumber = (numberOne, numberTwo, numberThree) => numberOne % 2 !== 0 || numberTwo % 2 !== 0
//  || numberThree % 2 !== 0 ? true : false;
//  console.log(isOddNumber(2,8,6));                                

                              // Lucro sobre um Produto //

// const profit = (costOfProduct, sellvalue) => {
//   if (costOfProduct < 0 || sellvalue < 0) {
//     console.log("Erro valores de entrada menor que zero");
//   } else {
//   let costOfProductsWithTaxes = costOfProduct * 1.2;
//   let profit = (sellvalue - costOfProductsWithTaxes) * 1000;
  
//   console.log(profit);
//   }
// }                              
//   profit(2, 5);

                  // Desconto inss e Imposto de Renda //

const taxesSalary = (grossSalary) => {
  let taxesInss, taxesIr;

  if (grossSalary <= 1556.94) {
      taxesInss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
      taxesInss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
      taxesInss = grossSalary * 0.11;
    } else {
      taxesInss = 570.88
    } 
    
    let baseSalary = grossSalary - taxesInss;
    
    if (baseSalary <= 1903.98) {
      taxesIr = 0;
    } else if (baseSalary <= 2826.65) {
      taxesIr = (baseSalary * 0.075) - 142.80;
    } else if (baseSalary <= 3751.05) {
      taxesIr = (baseSalary * 0.15) - 354.80;
    } else if (baseSalary <= 4664.68) {
      taxesIr = (baseSalary * 0.225) - 636.13;
    } else {
      taxesIr = (baseSalary * 0.275) - 869.36;
    }
     // console.log("Salario: " + (baseSalary - taxesIr));
      console.log(`Salario a receber ${baseSalary - taxesIr}`)
} 
  taxesSalary(3500)


















