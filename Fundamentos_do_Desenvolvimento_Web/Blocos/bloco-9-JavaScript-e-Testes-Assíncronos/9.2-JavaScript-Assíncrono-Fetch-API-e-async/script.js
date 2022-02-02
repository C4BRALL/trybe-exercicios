function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divName = document.createElement('div');
  const divImg = document.createElement('div');
  const img = document.createElement('img');

  divName.innerHTML = data.name;
  img.src = data.imageUrl;
  divImg.appendChild(img);

  li.appendChild(divName);
  li.appendChild(divImg);

  ul.appendChild(li);
}

function fetchPokemon() {
  const promise = (fetch('https://pokeapi.co/api/v2/pokemon/ditto'));

  promise.then((response) => {
    console.log(response);
  });
}

window.onload = fetchPokemon;