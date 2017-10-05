import React, {Component} from 'react';
import reset from '../reset.css'
import index from '../index.css'
class NavBar extends Component {
render(){
return(
    
    <div class="navbar">
    <h1 class="navbartext">Welcome to our Pokedex! This project was made in one afternoon with the power of React and material-ui!
    </h1>
    <p class="navbarfooter">Created by: </p>
    <p class="navbarfooter">Nick Hathaway and Kevin Pett</p>
    </div>
)

}
}

export default NavBar;