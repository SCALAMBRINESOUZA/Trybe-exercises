import './App.css';
import React, { Component } from 'react';
// import ComponentePai, {ComponentePai1} from './components/ComponentePai';
import { BrowserRouter } from 'react-router-dom';
import TrybeSite from './components/TrybeSite';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <TrybeSite />
      </BrowserRouter>
        {/* <ComponentePai>
          <p>Supimpa</p>
          <h1>Bacana</h1>
          <p>Incrivel</p>
        </ComponentePai>
        <ComponentePai1>
          <img src='https://img.freepik.com/vetores-gratis/avatares-de-pessoas-felizes_52683-34515.jpg?size=626&ext=jpg' alt='Carlos'/>
        </ComponentePai1>  */}
      </div>
    );
  }
}
export default App;
