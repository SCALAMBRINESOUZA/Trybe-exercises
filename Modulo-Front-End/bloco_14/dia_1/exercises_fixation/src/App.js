// import logo from './logo.svg';
import React from 'react'
// import Teste from './Teste'
import './App.css';

// Todas as linhas comentadas se referem a estudos de passagem de props e states vinculado com arquivo Teste.js //

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     n1: ''
  //   }
  //   this.vamosLa = this.vamosLa.bind(this)
  //   this.somar = this.somar.bind(this)

  // }

  // somar(n, m) {
  //   return `A soma de ${n} + ${m} = ${parseInt(n) + parseInt(m)}`
  // }

  // componentDidMount() {this.vamosLa()}
  // vamosLa() {
  //   this.setState({
  //     n1: '25'
  //   })
  // }

  render() { 
    // const { n1 } = this.state
    return (
      <div className="App">
      <p>Learn React</p>
      {/* <Teste n2= '25' n1={ n1 } somar={ this.somar }  /> */}
      <label>
      E-mail
        <input type="email" />
        <input style={{marginTop: '30px', position: 'absolute', width: '70px'}} 
        id="btn-send" 
        type="button" 
        value="Enviar" />
      </label>
      <button 
      data-testid='testinho' 
      value='btnEnviar'
      >
        Adicionar
      </button>

     </div>
  );
}
}

export default App;
