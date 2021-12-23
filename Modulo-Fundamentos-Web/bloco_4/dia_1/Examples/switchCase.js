// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
let statePerson = 'em analise';

/*
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'
*/

switch(statePerson) {
    case 'aprovada': 
    console.log('Parabêns curta a aprovação')
    break;

    case 'lista':
    console.log('Aguarde, mas cuidado com a ansiedade')
    break;

    case 'reprovada':
    console.log('Não foi desta vez, estudo um pouco+')
    break;

    default:
    console.log('não se aplica');
}