import React, {ReactNode, useState} from 'react';
import './App.css';
import {IPokemon} from "./common/models/pokemon.model";
import {pokemon_mock} from "./common/mock-data";
import Poketeam from "./views/poketeam/Poketeam";

import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from "./views/app-header/AppHeader";
import PokemonForm from "./views/pokemon-form/PokemonForm";
import PokemonDetails from "./views/pokemon-details/PokemonDetails";

export enum AppViews {
  PokemonTeams = 1,
  PokemonForm = 2,
  PokemonDetails = 3
}

function App() {

  const [pokemons, setPokemons] = useState<IPokemon[]>(pokemon_mock);
  const [selectedView, setSelectedView] = useState<AppViews>(AppViews.PokemonTeams);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>(pokemons[0]);

  const detailsClicked = (pokemon :IPokemon) => {
    setSelectedPokemon(pokemon);
    setSelectedView(AppViews.PokemonDetails);
  }

  const addNewPokemon = (pokemon: IPokemon) => {
    const newArray = [...pokemons, pokemon];
    setPokemons(newArray);
    setSelectedView(AppViews.PokemonTeams);
  }

  const changeInTeamGlobal = (pokedexNr:number) => {
    console.log("Global Change")

    const newPokemons = pokemons.map( p =>
        {
          if( p.pokedexNr === pokedexNr) {
            let new_val:boolean = !p.in_team;
            return {...p, in_team:new_val}
          }
          else
            return p;
        }
    )
    setPokemons(newPokemons);
  }


  const onShowForm = () =>{
    console.log("On Show Form clicked");
    setSelectedView(AppViews.PokemonForm);
  }

  const renderSelectedView = ():ReactNode => {
    switch(selectedView){
      case AppViews.PokemonTeams:
        return (
            <div><Poketeam pokemons={pokemons} changeInTeamGlobal={changeInTeamGlobal} detailsChanged={detailsClicked}/>
              <Poketeam pokemons={pokemons} changeInTeamGlobal={changeInTeamGlobal} detailsChanged={detailsClicked}/></div>

        )
      case AppViews.PokemonForm:
        return (
            <PokemonForm addNewPokemon={addNewPokemon}/>
        )
      case AppViews.PokemonDetails:
        return (
            <PokemonDetails pokemon={selectedPokemon}/>
        )
    }
  }

  return (
    <div className="App container">

      <AppHeader onShowForm={onShowForm} />
      {renderSelectedView()}

    </div>
  );
}

export default App;
