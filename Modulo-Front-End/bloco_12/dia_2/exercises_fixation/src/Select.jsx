import React, { Component } from 'react';
import './App.css';

class Select extends Component {
  
     render() {
     const { value, handleOnChange } = this.props
     if( value !== 'São Paulo' && value !== "Santos" && value !== 'Palmeiras' && value !== "Corinthians" ) {alert('Time não localizado')}
     while(value !== 'São Paulo') {
      alert('Escolha o time tri campeão do mundo!!! ')   
      break;
     }
     return(
      <>
      <label className='lblFirst'>
        Qual é o seu time de futebol:
      </label>
      <select name='selectSoccer' value={ value } onChange={ handleOnChange }>
        <option value='Santos'>Santos</option>
        <option value='São Paulo'>São Paulo</option>
        <option value='Corinthians'>Corinthians</option>
        <option value='Palmeiras'>Palmeiras</option>
      </select>
    </>
    )
  }
}

export default Select;