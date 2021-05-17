import React from 'react'

class butonOne extends React.Component {
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
          }
        }
        
        handleClick () {
        this.setState((estadoAnterior, _props) => ({
           numeroDeCliques: estadoAnterior.numeroDeCliques + 1            
        }), 
        this.alterColor

        // () => {
        //   if (this.state.numeroDeCliques % 2 === 0) {
        //     console.log('green');
        //     document.querySelector('.btnOne').style.background = "green";
        //   }
        // } 
      
        )}
    render() {
      return(
        <button className='btnOne' onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      )
    }
}
export default butonOne  