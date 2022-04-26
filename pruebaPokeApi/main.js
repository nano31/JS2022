const pokemonContainer = document.getElementById('pokemon-container');

function fetchPokemon(id){ //se puede pasar el nombre o el if
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json()) //convierte lo obtenido a un objeto json
    .then(data =>{
        //console.log(data);
        createPokemon(data);
    }) //muestra en la consola 
}

function fetchPokemons(number){
    //nos permite obtener la cantidad de pokemons deseada, el valor se pasa por parámetro
    //el indice arranca desde el 1, ya que así nos permite traer desde el pokemon 1, que en 
    //este caso es Bulbasaur.
    for(let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}


function createPokemon(pokemon){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  cardContainer.appendChild(card);
  pokemonContainer.appendChild(cardContainer);
}

fetchPokemons(9); //muestra los primeros 9 pokemons en la consola

