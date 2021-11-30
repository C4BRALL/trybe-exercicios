exercicios/4.3
const a = 60;
const a = 60;
master
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

const movimento = "Rei";
switch(movimento.toLowerCase()){
    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.");
        break;
    

    case "dama":
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    
    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;

exercicios/4.3
    case "bispo":
        console.log

master


    default:
        console.log("nao existe esta peça no xadrez")
        break;

exercicios/4.3

    
master
}