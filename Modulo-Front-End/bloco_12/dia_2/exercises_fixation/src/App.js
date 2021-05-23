import { Component } from 'react';
import './App.css';
import CheckBox from './CheckBox';
import InputFile from './InputFile';
import InputNumber from './InputNumber';
import InputText from './InputText';
import Select from './Select'
import TextArea from './TextArea'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nameUser: '',
      selectSoccer: 'São Paulo',
      ageUser: 0,
      descrUser: '',
      chkChoice: false,
      formularioComErros: true,

    }
  }

  handleOnChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[ name ]: value, });
  } 

  render() {
    return (
      <form>
        <Select value={this.state.selectSoccer} handleOnChange={ this.handleOnChange } />
        <fieldset className='fdlFirst'>  
        <legend>Dados pessoais</legend>
          <InputText value={this.state.nameUser} handleOnChange={ this.handleOnChange } />
          <InputNumber value={this.state.ageUser} handleOnChange={ this.handleOnChange } />     
        </fieldset> 
        <TextArea value={ this.state.descrUser } handleOnChange={ this.handleOnChange } />
        
        <fieldset className='fdlSecond'>
        <legend>Preencha com sinceridade</legend>
        <CheckBox value={ this.state.chkChoice } handleOnChange={ this.handleOnChange } />
        <InputFile />
        </fieldset>


      </form>
    );
  }
}




export default App;
