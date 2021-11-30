/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */ 

let n = 5;
let symbol = "*";
let linha = "";

for(let rowIndex = 0; rowIndex < n; rowIndex += 1){
    linha = linha + symbol;
}

for(let columnIndex = 0; columnIndex <n; columnIndex +=1){
    console.log(linha);
}



