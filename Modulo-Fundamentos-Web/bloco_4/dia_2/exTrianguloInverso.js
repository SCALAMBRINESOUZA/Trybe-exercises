let n = 5;
let esp = "  "
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1){
    for(let columnIndex = 0; columnIndex <= n; columnIndex += 1){
        if (columnIndex < inputPosition){
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    
    console.log(esp + inputLine );
    inputLine = '';
    inputPosition -= 1;
};