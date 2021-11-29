
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers){
    console.log(number);
}

//  resoluçao achada https://www.delftstack.com/pt/howto/javascript/javascript-sum-of-array/

let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log("soma da array: " + soma);