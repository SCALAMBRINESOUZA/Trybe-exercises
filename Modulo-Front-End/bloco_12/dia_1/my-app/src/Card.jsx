import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div>
              <h1>{this.props.title}</h1>  
              <img src={this.props.imgSrc} alt={this.props.altImg}/>
              <h2>{this.props.description}</h2>
              <p>{this.props.meme}</p>      
               
            </div>
        )
    }
}

export default Card