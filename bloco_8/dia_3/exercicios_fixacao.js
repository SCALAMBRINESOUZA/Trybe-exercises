// //const numbers = [10, 20, 30, 40];

// // const biggestNumbers = numbers.filter((number) => number >= 20)
// // console.log(biggestNumbers);

// // const verifyEven = (number) => number % 2 === 0;

// // const isEven = numbers.filter(verifyEven);

// // console.log(isEven); // [ 30, 22 ]

// // // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// // const isEven2 = numbers.filter((number) => number % 2 === 0);

// // console.log(isEven2); // [ 30, 22 ]
// /////////////////////////////////////////////////////////////////////////////////

// // const objPeople = [
// //     { name: 'José', age: 21 },
// //     { name: 'Lucas', age: 19 },
// //     { name: 'Maria', age: 16 },
// //     { name: 'Gilberto', age: 18 },
// //     { name: 'Vitor', age: 15 },
// //   ];
  
// //   const verifyAgeDrive = (arrayOfPeople) => (
// //     arrayOfPeople.filter((people) => (people.age < 18))
// //   );
  
// //   console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// // const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// // const removeStudentByName = (name, listStudents) =>
// //    listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// // const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// // console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
// //////////////////////////////////////////////////////////////////////////////

// // const persons = [
// //     { firstName: 'Maria', lastName: 'Ferreira' },
// //     { firstName: 'João', lastName: 'Silva' },
// //     { firstName: 'Antonio', lastName: 'Cabral' },
// //   ];
  
// //   const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
// //   console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
// ////////////////////////////////////////////////////////////////////////////////////////////

// // const numbers = [1, 2, 3, 4, -5];

// // const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// // console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// // console.log(numbers); // [ 1, 2, 3, 4, -5 ]
// ////////////////////////////////////////////////////////////////////////////////////////////////////


// // const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

// // const prices = [2.99, 3.99, 1.5, 2];

// // const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
// //     { [product]: listPrices[index] }
// //   ));

// // const listProducts = updateProducts(products, prices);
// // console.log(listProducts);
// // => [
// //   { Arroz: 2.99 },
// //   { Feijao: 3.99 },
// //   { Alface: 1.5 },
// //   { Tomate: 2 },
// // ]
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// // const numeros = [1, 2, 3, 4, 5, 6];
// // console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

// // const paresMenoresQueCinco = [];
// // numeros.forEach((numero) => {
// //   if (numero < 5 && numero % 2 === 0) {
// //     paresMenoresQueCinco.push(numero);
// //   }
// // });
// //console.log(paresMenoresQueCinco); // Retorno: [2, 4]
// /////////////////////////////////////////////////////////////////////////////////////////////

// // const estudantes = [
// //     {
// //       nome: 'Jorge',
// //       sobrenome: 'Silva',
// //       idade: 14,
// //       turno: 'Manhã',
// //       materias: [
// //         { name: 'Matemática', nota: 67 },
// //         { name: 'Português', nota: 79 },
// //         { name: 'Química', nota: 70 },
// //         { name: 'Biologia', nota: 65 },
// //       ],
// //     },
// //     {
// //       nome: 'Mario',
// //       sobrenome: 'Ferreira',
// //       idade: 15,
// //       turno: 'Tarde',
// //       materias: [
// //         { name: 'Matemática', nota: '59' },
// //         { name: 'Português', nota: '80' },
// //         { name: 'Química', nota: '78' },
// //         { name: 'Biologia', nota: '92' },
// //       ],
// //     },
// //     {
// //       nome: 'Jorge',
// //       sobrenome: 'Santos',
// //       idade: 15,
// //       turno: 'Manhã',
// //       materias: [
// //         { name: 'Matemática', nota: '76' },
// //         { name: 'Português', nota: '90' },
// //         { name: 'Química', nota: '70' },
// //         { name: 'Biologia', nota: '80' },
// //       ],
// //     },
// //     {
// //       nome: 'Maria',
// //       sobrenome: 'Silveira',
// //       idade: 14,
// //       turno: 'Manhã',
// //       materias: [
// //         { name: 'Matemática', nota: '91' },
// //         { name: 'Português', nota: '85' },
// //         { name: 'Química', nota: '92' },
// //         { name: 'Biologia', nota: '90' },
// //       ],
// //     },
// //     {
// //       nome: 'Natalia',
// //       sobrenome: 'Castro',
// //       idade: 14,
// //       turno: 'Manhã',
// //       materias: [
// //         { name: 'Matemática', nota: '70' },
// //         { name: 'Português', nota: '70' },
// //         { name: 'Química', nota: '60' },
// //         { name: 'Biologia', nota: '50' },
// //       ],
// //     },
// //     {
// //       nome: 'Wilson',
// //       sobrenome: 'Martins',
// //       idade: 14,
// //       turno: 'Manhã',
// //       materias: [
// //         { name: 'Matemática', nota: '80' },
// //         { name: 'Português', nota: '82' },
// //         { name: 'Química', nota: '79' },
// //         { name: 'Biologia', nota: '75' },
// //       ],
// //     },
// //   ];

//   // buscar um estudante //

// //   const allNameStudents = estudantes.filter((estudante) => (
// //     estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
// //   console.log(allNameStudents);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// // encontrar um estudante
  
// // const reportStatus = (name, students) => {
// //     const studentInfo = students.find((student) => student.nome === name);
// //     return studentInfo.materias.map((materia) => (
// //       `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
// //     ));
// //   };
  
// //   console.log(reportStatus('Natalia', estudantes));
// ///////////////////////////////////////////////////////////////////////////////////

// const numbers = [10, 20, 30, 40];

// const sum = numbers.map((number) => number * 2 );
// console.log(sum);
// console.log(numbers);
















































