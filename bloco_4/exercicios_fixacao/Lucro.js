let costProduct = 100;
let saleValue = -150;
let taxesProduct = costProduct * 1.2;
let profit = (saleValue - taxesProduct) * 1000;

if(costProduct < 0 || saleValue < 0){
    console.log("Entrada de dados com erros valores menor que zero");
}else{
    console.log(profit);
}

