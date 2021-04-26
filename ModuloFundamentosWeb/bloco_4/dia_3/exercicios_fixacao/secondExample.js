// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   } 

//   for(let name in names){   
//     console.log(`Olá ${names[name]}`)
//   }

// const carro = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// }

// for(let carros in carro){
//     console.log(`${carros} -->> ${carro[carros]}`);
// }
                        // Objeto com metodos //

const sum = {
    number1: 15,
    number2: 25,
    soma: function() { 
     return this.number1 + this.number2
    }
};
    console.log(sum.soma());




