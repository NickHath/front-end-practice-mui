import React, {Component} from 'react';

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      entries = []
    }
  }

  render() {
    return(
      <PokeEntry />
    );
  }
}

export default Pokedex;