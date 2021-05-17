import React from 'react';
import './App.css';
import ButonOne from '../components/ButonOne';
import ButtonThree from '../components/ButonThree';
import ButtonTwo from '../components/ButonTwo';

class App extends React.Component {
  render() {
    return (
      <span>
      <ButonOne />
      <ButtonTwo />
      <ButtonThree />
      </span>
    );
  }
}

export default App;
