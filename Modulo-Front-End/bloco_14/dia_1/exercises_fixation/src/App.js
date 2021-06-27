// import logo from './logo.svg';
import React from 'react'
import ValidEmail from './components/ValidEmail'
// import Teste from './Teste'
import './App.css';

// Todas as linhas comentadas se referem a estudos de passagem de props e states vinculado com arquivo Teste.js //

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      newEmail: '',
  //     n1: ''
     }
       this.update = this.update.bind(this)
       this.saveChanges = this.saveChanges.bind(this)
  //   this.vamosLa = this.vamosLa.bind(this)
  //   this.somar = this.somar.bind(this)
   
   

  // somar(n, m) {
  //   return `A soma de ${n} + ${m} = ${parseInt(n) + parseInt(m)}`
  // }

  // componentDidMount() {this.vamosLa()}
  // vamosLa() {
  //   this.setState({
  //     n1: '25'
  //   })
   }

   update(event) {
     const { target } = event
      this.setState({
        email: target.value
      })
   }

   saveChanges(value) {
      this.setState({
        newEmail: value, email: ''
      })
   }

  render() { 
    const { email, newEmail } = this.state
    // const { n1 } = this.state
    return (
      <div className="App">
      <p>Learn React</p>
      {/* <Teste n2= '25' n1={ n1 } somar={ this.somar }  /> */}
      <label>
      E-mail
       <input 
        id='id-email'
        onChange={(e) => this.update(e)}
        value={email} 
        type="email" 
        />
        <input style={{marginTop: '30px', position: 'absolute', width: '70px'}} 
        data-testid="btn-send" 
        type="button" 
        value="Enviar" 
        onClick={() => this.saveChanges(email)}  
        />
        </label>
      <button 
      data-testid='testinho' 
      value='btnEnviar'
      >
        Adicionar
      </button>
        {/* <h2 style={{marginTop: '30px'}} data-testid='id-email-user'>{`Valor: ${newEmail}`}</h2> */}
        <ValidEmail email={newEmail} />
     </div>
  );
}
}

export default App;
