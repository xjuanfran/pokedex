const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const inputPokemon = document.getElementById('pokemon');
const btn = document.getElementById('btn');
const info = document.getElementById('info');

const insertPokemon = async () => {

  loader.style.display = 'block';

  //Implementing with AJAX
  xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert("That pokemon isn't available. Try againt with another one!");
      location.reload();
    } else {
      const pokemonData = JSON.parse(xhr.response);
      pokemonName.textContent = pokemonData.name;
      pokemonImage.src = pokemonData.sprites.front_default;
      pokemonImage.alt = pokemonData.name;

      //Clean the info before insert the new one
      pokemonType.textContent = "";
      pokemonAbilities.textContent = "";

      pokemonData.types.forEach(type => {
        const typeElement = document.createElement('li');
        typeElement.textContent = type.type.name;
        pokemonType.appendChild(typeElement);
      }
      );

      pokemonData.abilities.forEach(ability => {
        const abilityElement = document.createElement('li');
        abilityElement.textContent = ability.ability.name;
        pokemonAbilities.appendChild(abilityElement);
      }
      );
      loader.style.display = 'none';
    }

    //Implementing the same with fetch :)
    /**
     * try{
    const res = await fetch(`${baseUrl}${pokemon.value.toLowerCase()}`)
    const pokemonDataJSON = await res.json()

    const pokemonData = {
      name: pokemonDataJSON.name,
      img: pokemonDataJSON.sprites.front_default,
      type: pokemonDataJSON.types,
      abilities: pokemonDataJSON.abilities
    }

    //update de DOM with the pokemon data
    pokemonName.textContent = pokemonData.name;
    pokemonImage.src = pokemonData.img;
    pokemonImage.alt = pokemonData.name;
    pokemonType.textContent = pokemonData.type.map(type => type.type.name).join(', ');
    pokemonAbilities.textContent = pokemonData.abilities.map(ability => ability.ability.name).join(', ');
    catch(err){
      alert("That pokemon isn't available. Try againt with another one!");
    }
    **/
  }
  xhr.open('GET', `${baseUrl}${inputPokemon.value.toLowerCase()}`);
  xhr.send();
}

btn.addEventListener('click', insertPokemon);
