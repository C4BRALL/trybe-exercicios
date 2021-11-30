/* Agora inverta o lado do triângulo. */

let n = 20;
let symbol = "*";
let linha = "";
let position = n;

for(let rowIndex = 0; rowIndex < n; rowIndex += 1){
    for(let columnIndex = 0; columnIndex < 2 ; columnIndex += 1){
        if(columnIndex < position){
            linha = linha + " ";
        }else{
            linha = linha + symbol;
        }
        position -= 1;
        console.log(linha);
        
    }
}
''