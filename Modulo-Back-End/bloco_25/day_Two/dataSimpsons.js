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

// const simspsonFilter = async (he = []) => {
//   const simpsons = await fs.readFile('./simpsons.json', 'utf8')
//     .then((newArray) => JSON.parse(newArray))
//     he = simpsons.filter((simpson) => simpson.id != 10 && simpson.id!= 6)
//     console.log(he)  
// }
// simspsonFilter()

// const readSimpson = async () => {
//   const simpsons = await fs.readFile('./simpsons.json', 'utf8')
//    .then((newArray) => JSON.parse(newArray))
//    const simpsonNewFamily = simpsons.splice(0,4)
//    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonNewFamily))
// }

// readSimpson()

// const letsGoRead = async () => {
//   const simpsons = await fs.readFile('./simpsonFamily.json', 'utf8')
//   .then((newArray) => JSON.parse(newArray))
//   return simpsons
// }

// letsGoRead()
//   .then((data) => console.log(data))

// const addSimpson = async () => {
//   const simpsons = await fs.readFile('./simpsonFamily.json', 'utf8')
//     .then((newArray) => JSON.parse(newArray))
//           // simpsons.push({"id": "5", "name": "Nelson Muntz"})
//         // await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
//         console.log(simpsons)

//  }

// addSimpson()

const updataSimpson = async () => {
  return await fs.readFile('./simpsons.json', 'utf8')
   .then((newArray) => JSON.parse(newArray))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
      .then((alterSimpson) => alterSimpson.concat([{ id: '8', name: 'Maggie Simpson'}]))
        .then((alteredSimpson) => fs.writeFile('./simpsons.json', JSON.stringify(alteredSimpson)))
          
  }  
updataSimpson()
