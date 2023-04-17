import {IPokemon} from "./models/pokemon.model";


export const pokemon_mock:IPokemon[] = [
  {
    pokedexNr: 1,
    name: "Bulbasaur",
    type: "Grass",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    in_team: false
  },
  {
    pokedexNr: 2,
    name: "Ivysaur",
    type: "Grass",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    in_team: false
  },
  {
    pokedexNr: 3,
    name: "Venusaur",
    type: "Grass",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    in_team: true
  }
]
