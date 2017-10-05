import React, {Component} from 'react';

import PokeEntry from './pokeEntry'
import Pokemon from '../models/Pokemon'

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      entries: [new Pokemon("Bulbasaur", 1, "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKeMON."), new Pokemon("Venasaur", 4, ""), new Pokemon("Charmander", 7, "")]
    }
  }

  /* this.state.entries.map((entry) => {
          <PokeEntry name={entry.name} id={entry.id} description={entry.description} />
        }) */

  render() {
    let pokeEntries = this.state.entries.map((pokemon, index) => {
      return <PokeEntry key={index} name={pokemon.name} id={pokemon.id} description={pokemon.description} />
    })
    return(
      <div className="pokedex">
        {
          pokeEntries
        }
      </div>
    );
  }
}

export default Pokedex;