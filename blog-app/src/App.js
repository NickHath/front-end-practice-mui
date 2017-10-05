import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

// components
import Pokedex from './components/pokedex';
import NavBar from './components/NavBar'


const App = () => (
  <MuiThemeProvider>
  <div>
  <NavBar />
  </div>
  
  <div>
    <Pokedex />
  </div>
  </MuiThemeProvider>
);

export default App;