import { Component } from "react";

class InputText extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  handleOnName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    return(
      <>
      <label className='lblSecond'>
        Digite seu nome:  
      </label>  
        <input className='txtName' name='texto' type='text' value={this.state.name} onChange={this.handleOnName} />
      </>
    )
  }  
}

export default InputText