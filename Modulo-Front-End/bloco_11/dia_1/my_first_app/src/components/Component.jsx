 import React from  'react';

 class Component extends React.Component {
     render() {
         return (
            <main>
                <h1>{this.props.name}</h1>
                <p>{this.props.paragraph}</p>
                <img className='img' src={this.props.img} alt='Choice an img your' />
            </main>
         )
     }
 }




export default Component;