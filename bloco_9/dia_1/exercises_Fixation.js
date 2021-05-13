// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
//////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => console.log(list.push(number));

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);
// assert.deepStrictEqual(numbers, [1, 2, 3]);
///////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => (list.push(number));

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha
 ///////////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 4), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 4]), 3000);
////////////////////////////////////////////////////////////////////////////

// const firstName = 'Carlos';
// console.log(firstName)
// const lastName = 'Henrique'
// console.log(lastName)

// const fullName = (fn,ln) => `${fn} ${ln}`

// setTimeout(() => {
//     console.log(fullName(firstName, lastName))
// }, 3000);

 

// console.log(lastName);

            // conceitos de assincronicidade usando a função setTimeOut  //
//////////////////////////////////////////////////////////////////////////////////////////////////

     
  
// const myExpenses = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const myIncome = 1000;

//   const monthlyBudget = (myIncome, myExpenses, callback) => {

//     const totalExpenses = callback(myExpenses);
//     const totalAfterExpenses = myIncome - totalExpenses;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${myIncome},00
//       Gasto: R$${totalExpenses},00
//       Saldo: R$${totalAfterExpenses},00 `);
//   };


//   const handleExpenses = myExpenses => {
//     const eachValue = myExpenses.map((item) => Object.values(item)[0]);
//     const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
//     return totalExpense;
//   };
  
//   monthlyBudget(myIncome, myExpenses, handleExpenses);


//  const joinName = ((fullName) => {
//    console.log(fullName);
// })

// const FlName = (FirstName, lastName, callback) => { 
//   callback(`${FirstName} ${lastName}`);

// }

// FlName('carlos', 'henrique', joinName)
 
///////////////////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (otherFunct) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian",
//     };
//     return otherFunct(userToReturn);
// };

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser


//  const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
//  const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = callback => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian"
//     };
//     console.log(callback(user));
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, onError) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//       onError(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
               //     Exercicios trabalhando com callbacks de forma assincrona //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const wait = (miliseconds) => {
//   const now = new Date().getTime();
//   while (new Date().getTime() < now + miliseconds) {
//   };
// }

function despedida() {
  setTimeout(() => {
    console.log("Tchau");
  }, 5000)
}

function Ultima() {
setTimeout(() => {
    console.log("Ultima Função");
  },4000)
}


function func1(callback, callback1, callback2) {
  // wait(3000);
 setTimeout(() => {
  console.log('função Um')
  callback();
  callback1();
  callback2();
 },3000)
 
}


function func2() {
  setTimeout(() => {
    console.log('função Dois')
  },3000)
  
}


console.log("Código começou aqui")

//despedida()
func1(func2, Ultima, despedida);
// func2();

















