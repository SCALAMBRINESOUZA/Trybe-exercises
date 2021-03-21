let n = 5;
let symbol = "*";
let inputline = '';

if(n <= 0){
    console.log("Valor de entrada invalido")
}else{
    for(let lineIndex = 0; lineIndex < n; lineIndex += 1){
        inputline = inputline + symbol;
    };
    for(let lineIndex = 0; lineIndex < n; lineIndex += 1){
        console.log(inputline);
    }
}