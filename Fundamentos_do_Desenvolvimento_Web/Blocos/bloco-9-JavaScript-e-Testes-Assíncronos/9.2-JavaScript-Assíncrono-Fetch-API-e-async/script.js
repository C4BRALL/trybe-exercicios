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

function extract(data) {
  return {
    name: data.name,
    imageUrl: data.sprites.front_default,
  }
}

function fetchPokemonAPI(poke) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response) => response.json())
  //   .then((data) => {
  //     const pokemon = extract(data);
  //     append(pokemon);
  //   })
  // .catch( (error) => console.log('error') )
}

// function requestPokemon() {
  
// }

async function fetchAsyncAwait() {
  try {
    const pokeDataList = await Promise.all([
      fetchPokemonAPI('pikachu'),
      fetchPokemonAPI('ditto'),
      fetchPokemonAPI('charmander'),
      fetchPokemonAPI('bulbasaur'),
      fetchPokemonAPI('squirtle')
    ])
  
    const pokeList = pokeDataList.map((pokeData) => {
      return extract(pokeData);
    })
  
    pokeList.forEach((pokemon) => {
      append(pokemon);
    }) 
  } catch(error) {
    console.log('error');
  }

  // .then((dataList) => {
  //   const pokes = dataList.map((pokeData) => extract(pokeData))
  //   pokes.forEach((pokemon) => {
  //     append(pokemon)
  //   })
  // })

  // .then((dataList) => dataList.map((pokeData) => {
  //   return extract(pokeData);
  // }))
  // .then((pokeList) => pokeList.forEach((pokemon) => {
  //   append(pokemon)
  // }))

  // .catch((error) => console.log('error'))
}

window.onload = fetchAsyncAwait;