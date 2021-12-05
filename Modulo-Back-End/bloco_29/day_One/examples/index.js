/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
  1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade),
});

const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  school,
  disciplines: disciplines.map(getLetterGrades),
});

const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

// const students = [
//   {
//     name: 'Lee',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.6 },
//     ],
//   },
//   {
//     name: 'Clementine',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
// ];
  
function setApproved(students) {
  students
  
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

// setApproved(students);

module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};