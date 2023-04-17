import React from 'react';
import {IPokemon} from "../../common/models/pokemon.model";

interface PokemonDetailsProps {
    pokemon: IPokemon;
}

const PokemonDetails:React.FC<PokemonDetailsProps> = ({pokemon}) => {
    return (
        <div>
            {pokemon.name}
            <img src={pokemon.img_url} alt={pokemon.name}/>
        </div>
    )
};

export default PokemonDetails;