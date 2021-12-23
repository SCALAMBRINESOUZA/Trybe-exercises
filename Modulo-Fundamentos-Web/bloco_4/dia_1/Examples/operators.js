// // Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// const nota = 80;

// /* Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// */
// if(nota >= 80) {
//   console.log('Parabéns, você foi aprovada(o)!');
// } else if(nota < 80 && nota >= 60) {
//   console.log('Você está na nossa lista de espera');
// } else {
//   console.log('Você foi reprovada(o)');
// }

// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const currentHour = 4;

// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
let message = ''; 

/*
Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
*/

if(currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if(currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar';
} else if(currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if(currentHour >= 11 && currentHour <= 14) {
  message = 'Hora do almoço!!!';
} else if(currentHour >= 4 && currentHour <= 11) {
  message = 'Hmmm, cheiro de café recém passado'
}

console.log(message);
