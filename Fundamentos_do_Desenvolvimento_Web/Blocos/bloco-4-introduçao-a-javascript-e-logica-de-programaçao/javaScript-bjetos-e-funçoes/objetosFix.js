let player = {
    name:'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

player['fullName'] = player.name +' '+ player.lastName;

console.log("A jogadora "+ player.fullName +" tem "+ player.age +" anos de idade");

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log("A jogadora "+ player.fullName +" foi eleita a melhor do mundo em "+ player.bestInTheWorld +" por "+ player['bestInTheWorld']['length'] +" vezes");

console.log("A jogadora possui "+ player['medals']['golden'] +" medalhas de ouro e "+ player['medals']['silver'] +" medalhas de prata");