import React, { Component } from 'react';
import Father from './Father';

export default class GrandMother extends Component {
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
      <h2>Oi eu sou a avó</h2>
      <p>{` aqui é a herança da minha mae ja peguei minha parte ${currentInheritance} `}</p>
      <Father inheritance={ currentInheritance}/>
      </>
    )
  }
}