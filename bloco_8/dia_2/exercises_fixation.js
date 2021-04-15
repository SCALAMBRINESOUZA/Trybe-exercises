// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];

//   students.forEach((student) => student.grade >= 60 ? student.approved = 'Aprovado' : student.approved = 'Recuperação');

//   console.log(students);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// const nFive = numbers.find((number) => number % 5 === 0)

// console.log(nFive);
//////////////////////////////////////////////////////////////////

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach((email) => showEmailList(email))

//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);


// const multipliesForNumber = ((element) => {
//     const number = 5;
//     console.log(`${element} * ${number}: ${element * number}`);
// })

// numbers.forEach(multipliesForNumber)
///////////////////////////////////////////////////////////////////////

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//    names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const family = [
    
//         {name: 'vô'},
//         {name: 'pai'},
//         {name: 'filho'}
// ];


// const hasFamily = family.find((member) => member.name === 'filho');

// console.log(hasFamily);

// const listNumbers = [10, 20, 30, 40];

// const numberBigger = listNumbers.find((number) => number > 20);

// console.log(numberBigger);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30
////////////////////////////////////////////////////////////////////////////////////////////

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//     historia: 'Aprovado',
//     historia: 'Aprovado',
//     historia: 'Aprovado',
//   };
  
//   const verifyGrades = (studentGrades) => (
//     Object.values(studentGrades).every((grade) => grade === 'Aprovado')
//   );
  
//   console.log(verifyGrades(grades));

// const verifySubjects = ((subject) => {
//     Object.keys(subject).every((_,key) => key === 'historia')
// })

// console.log(verifySubjects(grades));

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
















