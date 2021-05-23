import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { value, handleOnChange } = this.props
    let error = undefined;
    if(value.length > 100) {
      error = document.querySelector('.txtArea').style.background = 'red'
    }

    if(value.length > 100) {
      error = 'Texto Muito Grande'
    }
    

    return(
      <>
        <label className='lblFour'>
          Conte-nos como se sentiu no ultimo titulo do seu time:
        </label>
        <textarea className='txtArea' name='descrUser' value={ value } 
        onChange={ handleOnChange }
        />
        {error ? error : ''}
                          
      </>
    )
  }  
}

export default TextArea;