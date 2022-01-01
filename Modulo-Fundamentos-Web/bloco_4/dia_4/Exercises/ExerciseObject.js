// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // imprima no console uma mensagem de boas - vindas para a personagem acima, incluindo seu nome.Valor esperado no console:

// // console.log(`Bem-vinda, ${info.personagem}`);

// // Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.Valor esperado no console:

//  info['recorrente'] = 'Sim';

// // console.log(info);

// // Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// // for (let infos in info) {
// //   console.log(infos);
// // };

// // Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// // for (let infos in info) {
// //   console.log(info[infos]);
// // };

// // Agora, defina um segundo objeto com a mesma estrutura(as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let infoII = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// function verification() {
//   if (info.recorrente === 'Sim' && infoII.recorrente === 'Sim') {
//     return 'Ambos recorrentes'
//   }
// }

// console.log(`${info.personagem} e ${infoII.personagem} ${info.origem} e ${infoII.origem} ${info.nota} e ${infoII.nota}`, verification())
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".



console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo} `)













