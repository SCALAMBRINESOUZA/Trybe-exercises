import React from 'react'

class ButtonTwo extends React.Component {
        constructor() {
            super()
            this.handleClick = this.handleClick.bind(this)
            this.alterColor = this.alterColor.bind(this)
            this.state = {
                myClicks: 0
            }
        }

            alterColor () {
                if(this.state.myClicks % 2 === 0) {
                    console.log('blue');
                        document.querySelector('.btnTwo').style.background = 'blue'
                }
            }

            handleClick () {
                this.setState((previousState, _props) => ({
                    myClicks: previousState.myClicks + 1
                }), 
                this.alterColor
            )}
        
    render() {
        return(
            <button className="btnTwo" onClick={this.handleClick}>{this.state.myClicks}</button>
        )
    }
}

export default ButtonTwo