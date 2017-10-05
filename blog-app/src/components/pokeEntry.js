import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class PokeEntry extends Component {
    constructor(props){
        super(props);
        
    this.state = {
        name: props.name,
        id: props.id,
        description: props.description
        }
    }

    render() {
      console.log(this.state);
      return(
        <div className="entry">
          <AppBar title={this.state.name} 
                  iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        </div>
      )
    }
}

export default PokeEntry;