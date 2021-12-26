// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const sideA = 40;
const sideB = 40;
const sideC = 100;
let triangle = (sideA + sideB) + sideC;

if(triangle == 180){
    triangle = true;
    console.log(triangle);
} else if (triangle != 180 ) {
    triangle = false;
    console.log(triangle);
} if (sideA < 0 || sideB < 0 || sideC < 0) {
    console.log('Erro um dos lados do triangulo é negativo');
}