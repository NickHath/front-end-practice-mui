import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

// components
import Pokedex from './components/pokedex';


const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
    <Pokedex />
  </MuiThemeProvider>
);

export default App;