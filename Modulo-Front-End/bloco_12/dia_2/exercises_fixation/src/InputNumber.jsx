import { Component } from "react";

class InputNumber extends Component {
  render() {
      const { value, handleOnChange } = this.props
    return(
      <>
      <label className='lblThird'>
        Digite sua Idade:
      </label>
        <input className='txtNumber' name='ageUser' type='number' value={ value } onChange={ handleOnChange } />
     </>
    )
  }  
}

export default InputNumber