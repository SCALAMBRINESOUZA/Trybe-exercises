import './App.css';
import React, {Component} from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';


class App extends Component {
  render() {
    return (
      <section>
        <section className="App">
          <h1> Pokedex </h1>
          <Pokedex pokemons={pokemons} />
        </section>
      </section>
   );
  }
}

export default App;
