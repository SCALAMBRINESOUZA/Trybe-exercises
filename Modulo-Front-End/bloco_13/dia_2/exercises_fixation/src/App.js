import './App.css';
import React, { Component } from 'react';
import ComponentePai from './components/ComponentePai';

class App extends Component {
  render() {
    return (
      <div>
        <ComponentePai>
          <p>Supimpa</p>
          <h1>Bacana</h1>
          <span>Incrivel</span>
        </ComponentePai>
      </div>
    );
  }
}
export default App;
