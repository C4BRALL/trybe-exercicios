/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */

let n = 5;
let symbol = "*";
let linha = "";

for(let rowIndex = 0; rowIndex < n; rowIndex += 1){
    linha = linha + symbol;
    for(let columnIndex = 0; columnIndex <1 ; columnIndex +=1){
        console.log(linha);
    }
}