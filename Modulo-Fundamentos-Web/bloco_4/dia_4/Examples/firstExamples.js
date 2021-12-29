// Acessando propriedades de um objeto com chaves com numeros

// let diasDaSemana = {
//   1: 'Domingo',
//   2: 'Segunda',
//   3: 'Terça',
//   4: 'Quarta',
//   5: 'Quinta',
//   6: 'Sexta',
//   7: 'Sabado',
// }

// console.log(diasDaSemana[1]);

// Acessando as propriedades de um objeto que esta dentro de um array

let moradores = [
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
];

console.log(moradores[3].nome, moradores[3]['sobrenome'])