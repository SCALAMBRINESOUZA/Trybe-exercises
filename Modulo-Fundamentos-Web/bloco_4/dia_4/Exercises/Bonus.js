// //  Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// function convertAlgarism(number) {
//   const numbersRomans = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
//   };

//   number = number.toLowerCase();
//   const len = number.length;
//   let sum = numbersRomans[number[len - 1]];
//   let actual = numbersRomans[number[len - 1]];
//   for (let i = 2; i <= len; i += 1) {
//     const next = numbersRomans[number[len - i]];
//     if (actual <= next) {
//       sum += next;
//     } else {
//       sum -= next;
//     }
//     actual = next;
//   }
//   return sum;
// }

// console.log(convertAlgarism('X'))

// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//   const result = [];
//   for (let index = 0; index < vector.length; index += 1) {
//     const numbers = vector[index];
//     for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//       const current = numbers[indexSub];
//       if ((current % 2) === 0) {
//         result.push(current);
//       }
//     }
//   }
//   return result;
// }

// console.log(arrayOfNumbers(vector))


// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.Por exemplo, o array['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

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

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

// console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar }° andar, apartamento ${moradores.blocoDois[1].apartamento}.`)

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(`${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`)
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(`${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`)
}
