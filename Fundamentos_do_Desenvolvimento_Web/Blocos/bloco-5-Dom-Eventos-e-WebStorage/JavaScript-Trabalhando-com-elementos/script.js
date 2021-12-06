console.log(document.getElementById('primeiroFilhoDoFilho').parentElement);

console.log(document.querySelector('#elementoOndeVoceEsta').parentElement);

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').parentElement.nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').parentElement.lastElementChild.previousElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

let irmao = document.querySelector('#pai');

let irmaoElement = document.createElement('section');

irmaoElement.className = 'brother';

irmao.appendChild(irmaoElement);

console.log(irmaoElement);

let container = document.querySelector('#pai');

function creatDivAndClass(classNames){
    let newDiv = document.createElement('div');
    newDiv.className = classNames;
    console.log(newDiv);
    return newDiv;
}
container.appendChild(creatDivAndClass('nova div element'));

let newsection = document.querySelector('#elementoOndeVoceEsta')

function creatSectionAndClass(classSection){
    let newSection = document.createElement('section');
    newSection.className = classSection;
    console.log(newSection);
    return newSection;
}
newsection.appendChild(creatSectionAndClass('nova section element'));

function addElementAsChild(local, elemento) {
    local.appendChild(elemento);
}


let features = ['nova', 'nova2', 'nova3', 'nova4'];

for (feature of features) {
    let element = creatSectionAndClass(feature);
    addElementAsChild(container, element);
}
