import React from 'react'

class ButtonThree extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.alterColor = this.alterColor.bind(this)
        this.state = {
            numberClicked: 0
        }
    }

        alterColor () {
            if(this.state.numberClicked % 2 === 0) {
                console.log('red')
                    document.querySelector('.btnThree').style.background = 'red'
            }
        }

        handleClick() {
            this.setState((previousState) => ({
                numberClicked: previousState.numberClicked + 1
            }),
            this.alterColor
        )}
    render() {
        return(
            <button className='btnThree' onClick={this.handleClick}>{this.state.numberClicked}</button>
        )
    }
}

export default ButtonThree