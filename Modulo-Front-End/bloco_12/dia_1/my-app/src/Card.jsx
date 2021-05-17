import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div>
              <img src={this.props.imgSrc} alt={this.props.altImg}/>
              <h1>{this.props.description}</h1>
              <p>{this.props.meme}</p>      
               
            </div>
        )
    }
}

export default Card