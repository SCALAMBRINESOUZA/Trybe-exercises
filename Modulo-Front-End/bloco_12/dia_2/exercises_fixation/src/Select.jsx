import React, { Component } from 'react';
import './App.css';

class Select extends Component {
  constructor() {
    super()
    // this.handleOnSelect = this.handleOnSelect.bind(this)
    this.state = {
      sel: '',
    }
  }

  handleOnSelect = event => {
    this.setState({sel: event.target.value})
  }

   render() {
     return(
      <>
      <label className='lblFirst'>
        Qual é o seu time de futebol:
      </label>
      <select value={this.state.sel} onChange={this.handleOnSelect}>
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