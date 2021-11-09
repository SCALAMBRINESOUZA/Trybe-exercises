import React, { Component } from 'react';
 import Father from './Father';

export default class Daughter extends Component {   
  
  render() {
       const { inheritance } = this.props
    return(
      <>
      <h4>Oi eu sou a neta</h4>
      <p>{` aqui é a herança da minha bisavó o que me sobrou ${ inheritance }` } </p>
      <Father />
      </>
    )
  }
}