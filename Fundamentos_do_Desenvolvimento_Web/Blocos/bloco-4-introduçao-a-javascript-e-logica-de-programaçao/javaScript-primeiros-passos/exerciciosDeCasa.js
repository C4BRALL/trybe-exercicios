const a = 15;
const b = 13;
const c = -4;

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
