
function palidromo(a, word, wordReversed){
    word = a;
    wordReversed = a.split('').reverse().join('');
    

    console.log(word);
    console.log(wordReversed);

    if(word === wordReversed){
        return true;
    }else{
        return false;
    }

}

console.log(palidromo('arara'));

function array(b){
    let myArray = [];
    myArray.push(1,2,43,23,23,3,8);
    console.log(myArray);

    for(key of myArray){
        console.log();
    }
}
console.log(array());