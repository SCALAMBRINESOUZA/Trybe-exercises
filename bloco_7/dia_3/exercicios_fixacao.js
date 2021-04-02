const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70

// const myfunction = () => {};
// const myconst = '';
    

// assert.strictEqual(typeof myfunction, 'function', 'error função não declarada');
// assert.strictEqual(typeof myconst, 'string', 'error const não declarada');


// function division(x, y) {
//     return x / y;
//   }
  
//   const expected = division(9, 3);
  
//   assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');
    // let result = 0;
    // const add = (num1, num2) => result =  num1 + num2;
    // result = add(2,4);
    
    // assert.strictEqual(result, 3, 'error 2 mais 4 é seis')
    
    
    // function add(a, b) {
    //   return a + b;
    // }
    
    // const expected = add(1, 2);
    
    // //assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
    // //assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
    // assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

    // let numbers = 0
    // const list1 = [1, 2, 3, 4, 5];
    // for(number = 0; number < list1.length; number += 1) {
    //     numbers = (list1[numbers])
    // }
    //     if(typeof numbers !== 'number') {
    //         throw new Error('Todos os parametros devem ser numeros')
    //     }              
    // assert.deepStrictEqual(typeof numbers, 'number' , 'Há outro tipo de dado na lista!!!');

    
// function division(x, y) {
//   if (y === 0) throw new Error('parameter y must not be 0');
//   return x / y;
// }

// assert.strictEqual(division(10, 2), 5, 'Resultado final não é esperado'); // OK
// assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

const myFunction = (name) => {
    return name;
}
assert.strictEqual(typeof myFunction, 'function');

const myNameIs = myFunction('CARLOS HENRIQUE SCALAMBRINE DE SOUZA');

assert.strictEqual(myNameIs.toLowerCase(), 'carlos henrique scalambrine de souza', 'Este não é meu nome')


//






