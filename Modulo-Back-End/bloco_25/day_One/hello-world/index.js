const readLine = require('readline-sync');

const name = readLine.question(" Qual é o seu nome? ");
const age = readLine.questionInt(" Qual é a sua idade? ")

console.log(`hello ${name} welcome the world Nodejs do you have ${age } is staying old he he ! `);

//testando pra subir sem o node_modules