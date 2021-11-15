// const fs = require('fs');
const rl = require('readline-sync');

const nameFile = rl.question('Type name of file here only : ');

// fs.readFile(nameFile, 'utf8', (err, data) => {
//   if(err) {
//     console.log(`Erro ao ler arquivo ${err.path}`)
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`)
// });

                    // working with asynchronous read //

const fs = require('fs').promises;

fs.readFile(nameFile, 'utf8')
  .then((data) => {
    console.log(`The content of file read it´s => ${data}`)
  })  
  .catch((err) => {
    console.log(`Erro ao ler o arquivo ${err}`)
    process.exit(1);
  })