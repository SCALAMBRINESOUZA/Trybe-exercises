const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  




//   const includeMorning = (obj, key, value) => {
//     let keynew = key;
//     key = value;
//     obj[keynew] = key;
//     return obj;
//   }
//     includeMorning(lesson2, 'turno', 'manha');
//   console.log(lesson2)
////////////////////////////////////////////////////////////////////////

// const keys = (obj) => {
//     for(let ob in obj) {
//         console.log(ob)
//     }
// } 
//     keys(lesson3);
////////////////////////////////////////////////////////////////////////

//   const sizeObj = (obj) => Object.keys(obj);
//   console.log(sizeObj(lesson1));
////////////////////////////////////////////////////////////////////////

// const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson3));
////////////////////////////////////////////////////////////////////////

// criando um objeto para agrupar os tres objetos lessons usando metodo assign // 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//   console.log(allLessons);
/////////////////////////////////////////////////////////////////////////

// Com objeto allLessons retornamos a quantidade do numero da soma de valores s de quantidade de alunos //

// const allStudents = (obj) => {
//     let total = 0;
//     const array = Object.keys(obj);
//     for(ob in array){
//         total += obj[array[ob]].numeroEstudantes;
//     }
//        return total;
// }
// console.log(allStudents(allLessons));
///////////////////////////////////////////////////////////////////////////


// Obtendo o valor da chave de acordo com a sua posicao no objeto //

// const valueObj = (obj, number) => Object.values(obj)[number];
// console.log(valueObj(lesson2, 1));
///////////////////////////////////////////////////////////////////////////

// verificando objetos  com o metodo entries se um par chave/valor existe //


// const verifyPair = (obj, key, value) => {
//     const arr = Object.entries(obj);
//     let isEqual = false;
//     for (let index in arr) {
//       if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//     }
//     return isEqual;
//   };
//   console.log(verifyPair(lesson2,'professor','Carlos'));
//////////////////////////////////////////////////////////////////////////////

// const getNumberOfStudentsMath = (obj) => {
//     let total = 0;
//     const array = Object.keys(obj);
//     for (index in array) {
//       if(obj[array[index]].materia === 'Matemática'){
//       total += obj[array[index]].numeroEstudantes;
//       }
//     }
//     return total;
//   }
//   console.log(getNumberOfStudentsMath(allLessons)); 
/////////////////////////////////////////////////////////////////////////////////

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.table(createReport(allLessons, 'Carlos'));

