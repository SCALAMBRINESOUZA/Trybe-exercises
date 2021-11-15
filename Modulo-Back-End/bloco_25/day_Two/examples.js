const fs = require('fs');
const rl = require('readline-sync');

             /*    Example using callback node-style
const nameOfFile = rl.question('Qual o nome do arquivo a ser lido ? ') ;
fs.readFile(nameOfFile, (err, content) => {
  if(err) {
    console.log(`Erro ao ler arquivo: ${err.message} `);
    return;
  }
  console.log(`Arquivo lido com sucesso. conteúdo: ${content.toString('utf8')}`);
});
------------------------------------------------------------------------------------------
fs.readFile('./file1.txt', (err, filecontent1) => {
  if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);
  console.log(`Lido file1.txt com ${filecontent1.byteLength} bytes`);

  fs.readFile('./file2.txt', (err, filecontent2) => {
    if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);
    console.log(`Lido file2.txt com ${filecontent2.byteLength} bytes`);

    fs.readFile('./file3.txt', (err, filecontent3) => {
      if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);
      console.log(`Lido file3.txt com ${filecontent3.byteLength} bytes`);
    });
  });
});

*/

                       /* Example without Promisses

const divisivel = (num1, num2) => {
  if (num2 == 0) 
    throw new Error('Numero não pode ser dividido por zero')
    const resultado = num1 / num2;
    return resultado
};
try {
  const res = divisivel(10, 2)
  console.log(res);
} catch (error) {
  console.log(`Erro: ${error.message}`)
}

*/

                        /* Example using Promisses


const divisivel = (num1, num2) => {
  const promisse = new Promise((resolve, reject) => {
    if(num2 == 0)  
      reject(new Error('Numero não pode ser dividido por zero'));
    const res = num1 / num2;
      resolve(res)
  })
    return promisse;
}

divisivel(50, 0)
  .then((res) => { console.log(res) })
  .catch((err) => console.log(`Erro: ${err.message}`))
 
*/
const readFile = () => {
  const p = new Promise((resolve, reject) => {
    const nameFile = rl.question('Digite o nome do arquivo a ser lido: ')
    fs.readFile(nameFile, (err, content) => {
      if(err) return reject(`Arquivo não encontrado`);
      resolve(content.toString('utf8'));
    })
  })  
  return p;
}
readFile()
  .then((content) => { 
    console.log(content)
    return readFile()
  })
   .then((content) => {
      console.log(content)
      return readFile()
      })
      .then((content) => {
        console.log(content)
         return readFile()
          })
          .then((content) => {
            console.log(content)
                })
          .catch((err) => console.log(`Erro: ${err}`));