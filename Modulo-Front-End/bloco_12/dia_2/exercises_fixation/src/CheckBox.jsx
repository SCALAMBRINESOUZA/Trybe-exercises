import { Component } from "react";

class CheckBox extends Component {
	render() {
		const { value, handleOnChange } = this.props
		return(
			<>
				<label className='lblFive'>
						Voce esta feliz com seu time se sim marque o quadrado abaixo:
					</label>
					<input name='chkChoice' type='checkBox' className='checkBox' 
					onChange={ handleOnChange } value={ value }
					/>
			</>
		)
	}
}

export default CheckBox;