import React, { Component } from 'react';
import './App.css';
import IssLocation from './IssLocation';
import IssProvider from './IssProvider';

class App extends Component {
  
  render() {

    return (
      <IssProvider>
        <IssLocation />
      </IssProvider>
    );
  }
}

export default App;
