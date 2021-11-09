// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
//   console.log(Object.keys(customer)[0])

//   const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
//   };
//   console.log(Object.values(customer)[1])

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);
  
// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

// const objeto = {
//     name: 'carlos',
//     age: 34,
//     city: 'sp'
// };
    
// const person = (objeto, key, value) => {
//     let newKey = key;
//     key = value;
//     objeto[newKey] = key;        
//     return objeto
// }
//     console.log(person(objeto, 'cor', 'negro'))
    

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
    
//  const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for(index in arrayOfSkills){
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };

//   console.log('Estudante 1');
//   listSkills(student1)
//   console.log("")
//   console.log('Estudante 2');
//   listSkills(student2)


// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };
  
//   const listSkillsWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
//   const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  //console.log(listSkillsWithFor(student));
  
  // Com Object.values
//  console.log(listSkillsWithValues(student));

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('Pais:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)

// const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone);
//   console.log(person); 

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Modificando apenas o objeto clone //


// const person = {
//     name:'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);







