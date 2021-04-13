// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];

//   students.forEach((student) => student.grade >= 60 ? student.approved = 'Aprovado' : student.approved = 'Recuperação');

//   console.log(students);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const nFive = numbers.find((number) => number % 5 === 0)

console.log(nFive);