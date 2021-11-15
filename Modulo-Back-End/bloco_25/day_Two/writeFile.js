const fs = require('fs').promises;
const rl = require('readline-sync');

// const nameFile = rl.question('Type name of file here : ');
// const contentFile = rl.question('Type the content of file here : ');
// fs.writeFile(nameFile, contentFile, {flag: 'wx'})
//   .then(() => {
//     console.log(`content typed now in the file`)
//   })
//   .catch((err) => {
//     console.log(`Not was possible save content in the file ${err}`)
//   })

                        // Using async / await //

const writeFile = async (nameFile, contentFile) => {
  nameFile = rl.question('Type name of file here : ')
  contentFile = rl.question('Type the content of file here : ');
  try {
    await fs.writeFile(nameFile, contentFile, {flag: 'wx'})
    console.log('content typed now in the file')
  } catch (err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`)
  }
}                        
writeFile()

                      // Using Promisse.all //

// Promise.all([
//   fs.readFile('file1.txt'),
//   fs.readFile('file2.txt'),
//   fs.readFile('file3.txt'),
// ])
//   .then(([file1, file2, file3]) => {
//     const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength
//     console.log(fileSizeSum);
//   })                      
//   .catch((err) => {
//     console.log(`Some of the promises are wrong. ${err.message}`)
//   })