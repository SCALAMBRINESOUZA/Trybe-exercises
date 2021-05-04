import './App.css';
import React, {Component} from 'react';
import Props from './Props';

class App extends Component {
  render() {
    return (
      <section>
        <Props name='carlos' lastName='Henrique' />
      </section>
   );
  }
}

export default App;
