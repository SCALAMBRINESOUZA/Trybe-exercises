// Faça cinco programas, um para cada operação aritmética básica.Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.Faça programas para: 

// Adição(a + b)
// Subtração(a - b)
// Multiplicação(a * b)
// Divisão(a / b)
// Módulo(a % b)

// observação programas refatoradas para usar funções

function sum(a, b) {
  return a + b
};

function sub(a, b) {
  return a - b
};

function multiply(a, b) {
  return a * b
};

function div(a, b) {
  return a / b
};

function mod(a, b) {
  return a % b
};


console.log(sum(10,20));
console.log(sub(100, 20));
console.log(multiply(10, 20));
console.log(div(30, 20));
console.log(mod(20, 10));

// Faça um programa que retorne o maior de dois números.Defina no começo do programa duas constantes com os valores que serão comparados, observação programas refatoradas para usar funções

function biggestNumber(number1, number2) {
  if (number1 > number2) {
    return `${number1} é maior`
  } else if (number2 > number1) {
    return `${number2} é maior`
  } else {
    return `${number1} e ${number2} são iguais`
  }
}

console.log(biggestNumber(30, 30))