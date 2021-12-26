// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário

const number = 0;

if(number < 0) {
    console.log('negative');
} else if(number > 0) {
    console.log('positive');
} else if(number == 0) {
    console.log('zero');
}