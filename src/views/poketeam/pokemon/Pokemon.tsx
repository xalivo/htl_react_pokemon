import React, {useState} from 'react';
import {IPokemon} from "../../../common/models/pokemon.model";

import "./Pokemon.styles.css"
import {CatchingPokemon, CircleOutlined} from "@mui/icons-material";

interface PokemonProps {
  pokemon: IPokemon;
  changeInTeamGlobal: (pokedexNr:number) => void;
  detailsChanged: (pokemon: IPokemon) => void;
}

const Pokemon: React.FC<PokemonProps> = ({pokemon, changeInTeamGlobal, detailsChanged}) => {

  //const [localPoke, setLocalPoke] = useState<IPokemon>(pokemon);
  //const refToGlobalPoke = pokemon;

  /*const changeIcon = () =>{
    console.log("Change Icon Click");
    let newVal = !localPoke.in_team;
    setLocalPoke( {...localPoke, in_team:newVal} )
  }*/

  return (<tr >
          <td>{pokemon.pokedexNr}</td>
          <td>{pokemon.name}</td>
          <td>{pokemon.type}</td>
          <td> <img src={pokemon.img_url} alt={pokemon.name} onClick={() => {detailsChanged(pokemon)}}/></td>
          <td onClick={() => changeInTeamGlobal(pokemon.pokedexNr)}>{pokemon.in_team ? <CatchingPokemon/> : <CircleOutlined/>}</td>
      </tr>
  );
};

export default Pokemon;