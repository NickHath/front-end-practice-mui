import React, { Component } from 'react';


class PokeEntry extends Component {
    constructor(){
        super();
        
    this.state = {
        name: "Bulbasaur",
        id: 2,
        description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKeMON."
        }
    }
}
// "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKMON."
// "Bulbasaur"
// "2"

export default PokeEntry;