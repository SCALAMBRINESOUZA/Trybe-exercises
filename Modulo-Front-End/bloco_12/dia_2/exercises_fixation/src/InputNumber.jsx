import { Component } from "react";

class InputNumber extends Component {
  constructor() {
    super()
    this.state = {
      age: 0
    }
  }

  handleOnAge = event => {
    this.setState({age: event.target.value})
  }

  render() {
    return(
      <>
      <label className='lblThird'>
        Digite sua Idade:
      </label>
        <input className='txtNumber' name='Numero' type='number' value={this.state.age} onChange={this.handleOnAge} />
     </>
    )
  }  
}

export default InputNumber