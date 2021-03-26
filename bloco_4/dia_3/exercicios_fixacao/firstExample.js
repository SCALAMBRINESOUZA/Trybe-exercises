const player = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medals: { golden: 2, silver: 3 }
};

player['fullName'] = player.name + " " + player.lastName;
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log(`A jogadora ${player.fullName} tem ${player.age} anos de idade`);
// console.table(`A jogadora ${player.fullName} foi eleita a melhor do mundo nos anos de ${player.bestInTheWorld}`)
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata `)