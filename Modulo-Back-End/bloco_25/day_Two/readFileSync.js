const fs = require('fs');
const readLine = require('readline-sync')

try {
  const nameFile = readLine.question('Type name of file here: ');
  const data = fs.readFileSync(nameFile, 'utf8');
  console.log(data);
} catch (err) {
  console.log(`Erro ao ler arquivo ${err.path}`);
  console.log(err);
};

