import React, { Component } from 'react';
import Daughter from './Daughter';

export default class Father extends Component {
  constructor() {
    super()
    this.state = {
      spent: 250000,
    }

  }
  
  render() {
    const { inheritance } = this.props
    const currentInheritance = inheritance - this.state.spent
    return(
      <>
      <h3>Oi eu sou o pai</h3>
      <p>{` aqui é a herança da minha vó ja peguei minha parte ${ currentInheritance } `}</p>
      <Daughter inheritance={ currentInheritance } />
      </>
    )
  }
}