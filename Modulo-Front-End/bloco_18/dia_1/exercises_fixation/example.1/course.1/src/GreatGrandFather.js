import React, { Component } from 'react';
import GrandMother from './Grandmother';

export default class GreatGrandFather extends Component {
  constructor() {
    super()
    this.state = {
      inheritance: 1000000,
    }
  }
  render() {
    return(
      <>
      <h1>Oi eu sou a bisavó</h1>
      <p>{`Este é o valor de herança que deixarei aos meus familiares ${ this.state.inheritance }`}</p>
      <GrandMother inheritance={this.state.inheritance} />
      </>
    )
  }
}