const fs = require('fs').promises;

// fs.readFile('./simpsons.json' , 'utf8')
//   .then((data) => {
//     return JSON.parse(data)
// })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`)
//   })
//   .then((strings) => {
//     strings.forEach((string) => console.log(string));
//   })
//   .catch((err) => console.log(err))

// const getSimpsonsById = async (id) => {
//    const simpsons = await fs.readFile('./simpsons.json', 'utf8')
//     .then((data) =>  JSON.parse(data))
//     const chosenSimpson = simpsons.find((simpson) => simpson.id == id )
//     if (!chosenSimpson) {
//       throw new Error('id não encontrado')
//     }
//       return chosenSimpson
//   }
    
// getSimpsonsById(10)
//   .then(data => console.log(data))
//    .catch(err => console.log(err.message)) 

const teste = async (he = []) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((newArray) => JSON.parse(newArray))
    he = simpsons.filter((simpson) => simpson.id != 10 && simpson.id!= 6)
    console.log(he)
    
  
}
teste()