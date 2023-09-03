const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const inputPokemon = document.getElementById('pokemon');
const btn = document.getElementById('btn');
const info = document.getElementById('info');

const insertPokemon = async() =>{

	try {
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

	} catch (error) {
		alert("That pokemon isn't available. Try againt with another one!");
	}
}

btn.addEventListener('click', insertPokemon);
