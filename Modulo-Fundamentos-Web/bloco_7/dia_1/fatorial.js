const factoring = number => number > 1 ? number * factoring(number - 1) : 1;
console.log(factoring(6)); 

