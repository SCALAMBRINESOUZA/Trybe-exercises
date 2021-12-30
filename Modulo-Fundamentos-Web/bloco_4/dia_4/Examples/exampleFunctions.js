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

// Faça um programa que retorne o maior de três números.Defina no começo do programa três constantes com os valores que serão comparados, observação programas refatoradas para usar funções

function biggestNumberWithThree(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return `${number1} é maior`
  } else if (number2 > number1 && number2 > number3) {
    return `${number2} é maior`
  } else if (number3 > number1 && number3 > number2) {
    return `${number3} é maior`
  } else {
    return `${number1} , ${number2} e ${number3} são iguais`
  }
}
console.log(biggestNumberWithThree(10,10,10))

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário, observação programas refatoradas para usar funções

function positiveOrFalse(n) {
  if(n > 0) {
    return 'positive'
  } else if(n < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}
console.log(positiveOrFalse(0))

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido o programa deve retornar uma mensagem de erro, observação programas refatoradas para usar funções

function triangle(sideA, sideB, sideC) {
  
  let resTriangle = (sideA + sideB) + sideC;
  
  if (sideA < 0 || sideB < 0 || sideC < 0) {
    return 'Erro um dos lados do triangulo é negativo'
  }
  
  if (resTriangle == 180) {
    return true;
  
  } else if (resTriangle != 180) {
    return false;
  } 
}
console.log(triangle(-40, 40, 100))