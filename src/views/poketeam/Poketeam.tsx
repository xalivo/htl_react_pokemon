import React from 'react';
import {IPokemon} from "../../common/models/pokemon.model";
import Pokemon from "./pokemon/Pokemon";

import 'bootstrap/dist/css/bootstrap.css';

interface PoketeamProps {
  pokemons: IPokemon[];
  changeInTeamGlobal: (pokedexNr:number) => void;
  detailsChanged: (pokemon: IPokemon) => void;
}

const Poketeam: React.FC<PoketeamProps> = ({pokemons, changeInTeamGlobal, detailsChanged}) => {


  return (
      <div>
        <h1>Pokemon Team</h1>
        <table className="table table-striped table-hover table-dark">
          <thead>
          <tr>
            <th scope="col">Pokedex Nr</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Image</th>
            <th scope="col">In Team</th>
          </tr>
          </thead>
          <tbody>
        {
          pokemons.map( (p) => {
            return (
              <Pokemon key={p.pokedexNr} pokemon={p} changeInTeamGlobal={changeInTeamGlobal} detailsChanged={detailsChanged}/>
            )
          })
        }
          </tbody>
        </table>
        
      </div>
  );
};

export default Poketeam;