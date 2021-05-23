import { Component } from "react";

class InputText extends Component {
  render() {
		const { value, handleOnChange } = this.props
    return(
      
      <>   
        	<label className='lblSecond'>
        		Digite seu nome:  
      		</label>  
        	<input className='txtName' name='nameUser' type='text' value={ value } onChange={handleOnChange} />
      </>
    )
  }  
}

export default InputText