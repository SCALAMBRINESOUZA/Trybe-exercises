import { Component } from "react";

class InputFile extends Component {
	render() {
	//	const { value, handleOnChange } = this.props
		return(
			<>
				 <label className='lblSixth'>
          	Escolha um arquivo que comprove que voce torça para o respectivo time:
       	 </label>
        	<input className='inputFile' type='file'/>       
			</>
		)
	}
}

export default InputFile;