import React from 'react'

class ButtonOne extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.alterColor = this.alterColor.bind(this)
        this.state = {
            numeroDeCliques: 0
            
        }
    
    }
        alterColor () {
          if(this.state.numeroDeCliques % 2 === 0) {
            console.log('green');
            document.querySelector('.btnOne').style.background = 'green'
          } else if(this.state.numeroDeCliques % 2 !== 0) {
            document.querySelector('.btnOne').style.background = 'white'
          }
        }
        
        handleClick () {
        this.setState((estadoAnterior, _props) => ({
           numeroDeCliques: estadoAnterior.numeroDeCliques + 1            
        }), 
        this.alterColor

        )}
    render() {
      return(
        <button className='btnOne' onClick={() => this.handleClick()}>{this.state.numeroDeCliques}</button>
      )
    }
}
export default ButtonOne  