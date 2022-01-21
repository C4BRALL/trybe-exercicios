const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

//Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
//Tente criar uma usando reduce e filter , e outra apenas usando reduce .

const numbers1 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = (numbers1) => numbers1 %2 === 0;
const sumPares = (cccValue, number) => cccValue + number;

const sumNumbers = (arr) => arr.filter(pares).reduce(sumPares);
console.log(sumNumbers(numbers1)); //152

//Solução usando apenas reduce :

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152