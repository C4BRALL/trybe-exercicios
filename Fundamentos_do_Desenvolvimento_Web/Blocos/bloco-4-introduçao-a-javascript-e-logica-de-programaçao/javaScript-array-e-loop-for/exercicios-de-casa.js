
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers.length);

for(let number of numbers){
    console.log(number);
}

//  resoluçao achada https://www.delftstack.com/pt/howto/javascript/javascript-sum-of-array/

let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log("soma da array: " + soma);

soma = soma/numbers.length;
console.log("media aritimetica da array: " + soma);

if(soma > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

let greatNumber = 0;

for(let count = 0; count < numbers.length; count += 1){
    if(numbers[count] > greatNumber){
        greatNumber = numbers[count]; 
    }
}
console.log("numero maior da array: " + greatNumber);