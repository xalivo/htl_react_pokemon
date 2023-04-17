import React, {FormEvent} from 'react';
import {IPokemon} from "../../common/models/pokemon.model";

interface PokemonFormProps {
    addNewPokemon: (pokemon : IPokemon) => void;

}

const PokemonForm:React.FC<PokemonFormProps> = ({addNewPokemon}) => {

  const addPokemonSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newPokemon :IPokemon = {
          pokedexNr: e.currentTarget.tfPokedex.value,
          name: e.currentTarget.tfName.value,
          img_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
          in_team: false,
          type: ''
      }

      addNewPokemon(newPokemon);
  }
  return (
      <div>
        <h1>In Form</h1>
        <form onSubmit={addPokemonSubmit}>
            <label htmlFor="tfPokedex">Pokedex Nr:</label>
            <input type="text" id="tfPokedex"/>

            <label htmlFor="tfName">Name:</label>
            <input type="text" id="tfName"/>

            <button type="submit">Add Pokemon</button>

        </form>
      </div>
  );
};

export default PokemonForm;