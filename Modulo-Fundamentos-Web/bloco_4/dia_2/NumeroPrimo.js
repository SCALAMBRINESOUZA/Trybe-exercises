// const primo = number => number % 2 !== 0 ? console.log(`Sim ${number} é primo`) 
// : console.log(`${number} não é primo`);
// primo(38); 

        // mesmo exercicio sem o console log tornando mais curta a expressao //
 
 const primo = number => number % 2 === 0 ? `${number} não é primo` : `${number} sim é primo`;       
 console.log(primo(40)); 