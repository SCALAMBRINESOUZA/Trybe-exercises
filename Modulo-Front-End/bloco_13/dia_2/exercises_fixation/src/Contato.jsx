import React, { Component } from 'react';

class Contato extends Component {
  render() {
    return (
        <>
      <h1>Pagina de Contato</h1>
      {this.props.ele}
      </>
    );
  }

}
export default Contato;