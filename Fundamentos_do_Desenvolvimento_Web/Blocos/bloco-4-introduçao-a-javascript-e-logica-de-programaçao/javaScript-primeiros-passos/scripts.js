const myName = "Cabral";
const birthCity = "Fortaleza";
let birthYear = "1999";

console.log(myName);
console.log(birthCity);
console.log(birthYear);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

patientId = "50";

console.log(typeof patientId);
console.log(typeof isEnrolled);

const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2*base+2*height;

console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);

const nota = 70;

if (nota >=80){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 17;
let message = "";

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
} 
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
} 
else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!" ;
}
else if(currentHour >= 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
}
else{
    message = "syntax error";
}
console.log(message);


let weekDay = "quarta-feira"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}

let situation = "aprovado";

switch (situation){

    case "aprovado":
        console.log("Aprovado");
        break;

    case "lista":
        console.log("Na lista de espera");
        break;

    case "reprovado":
        console.log("Reprovado");
        break;

    default:
        console.log("não se aplica");
}