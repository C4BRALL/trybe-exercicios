const a = 60;
const b = 40;
const c = 80;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if (a > b){
    console.log(a);
}else {
    console.log(b);
}

if(a > b && a > c){
    console.log(a);
}else if(b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}

if(c > 0){
    console.log("Positivo");
}else{
    console.log("Negativo");
}

if(a + b + c === 180){
    console.log("True");
}else{
    console.log("false");
}

