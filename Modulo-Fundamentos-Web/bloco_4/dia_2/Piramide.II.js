let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for(let line = 1; line <= middle; line =+ 1){
    let outputline = '';
    for(let col = 1; col <= n; col =+ 1){
        if(col == controlLeft || col == controlRight || line == middle){
            outputline += symbol;
        } else {
            outputline += ' ';
        }
    }

    controlLeft -= 1;
    controlRight += 1;
    console.log(outputline);
}