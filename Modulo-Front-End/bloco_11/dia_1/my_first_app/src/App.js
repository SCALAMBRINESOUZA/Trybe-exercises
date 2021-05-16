import React from 'react';
import './App.css';
 import Component from './components/Component'

// const commitments = ['Estudar', 'Entender', 'Trabalhar', 'Aplicar']
// const task = () => { ( <ul> {commitments.map((commitment => <li>{commitment}</li>))} </ul>)};

class App extends React.Component {
  render() {
    return (
      // <nav>{console.log(task())}</nav> 
       <Component />
    )  
      
      
    
  }
      
}

export default App;
