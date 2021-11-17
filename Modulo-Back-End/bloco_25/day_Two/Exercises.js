//  const returnPromisse = (num1, num2, num3) => {
//   return new Promise((resolve, reject) => {
//     if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") {
//       return reject(new Error('Informe apenas números'))
//     }
//     const result = (num1 + num2) * num3;

//     if(result < 50) {
//       return reject(new Error('Valor muito baixo'))
//     }
//       resolve(result);

//   });


// returnPromisse(2,3,'d')
//     .then(data => console.log(`Resultado do calculo ${data}`))
//     .catch(err => console.log(` Erro: ${err.message}`))

