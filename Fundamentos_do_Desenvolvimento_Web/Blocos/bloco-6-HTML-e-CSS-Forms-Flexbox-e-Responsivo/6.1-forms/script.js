const stateContainer = document.querySelector('#state');
let states = ['Ceara', 'Rio de Janeiro', 'Sao Paulo'];
function createOption () {
    for (i of states) {
        const newOption = document.createElement('option');
        newOption.innerText = [i];
        newOption.value = [i];
        stateContainer.appendChild(newOption);
    }
}
createOption();

// Criar uma function para pegar a abreviaçao do nome dos estados e por como value nesta function.