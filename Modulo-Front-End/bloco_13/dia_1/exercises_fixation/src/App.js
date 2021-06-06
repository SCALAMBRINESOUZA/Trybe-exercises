import { Component } from 'react';
import './App.css';
//import Counter from './components/Counter';
// import DadJoke from './components/DadJoke';
import MyJokeComponent from './components/MyJokeComponent';

class App extends Component {
  render() {
    return (
      <MyJokeComponent />
      // <DadJoke />
      // <Counter />
    )
  }
  
}
export default App;
