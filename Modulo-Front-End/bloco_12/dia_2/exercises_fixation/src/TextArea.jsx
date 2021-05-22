import React, { Component } from 'react';

class TextArea extends Component {
  constructor() {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      Area: '',
    }

  }

  handleOnChange(event) {
    this.setState({Area: event.target.value }) 
  }

  render() {
    return(
      <>
      <label className='lblFour'>
        Conte-nos como se sentiu no ultimo titulo do seu time:
      </label>
        <textarea className='txtArea' value={this.state.Area} onChange={this.handleOnChange}/>
      </>
    )
  }  
}

export default TextArea;