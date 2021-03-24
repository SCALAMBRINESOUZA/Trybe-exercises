// const oddsAndEvens = [13, 3, 4, 10, 7, 2]
// 	oddsAndEvens.sort(function(a,b){
// 		if(a > b)return 1;
// 		if(a < b)return -1;
// 			return 0;
// 		}
// 	);
// 		console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);


const oddsAndEvens = [13, 3, 4, 10, 7, 2]
console.log(`Os números ${oddsAndEvens.sort((a,b) => a + b)} se encontram ordenados de forma crescente !`)