//import React, { Component } from 'react';
// // import './App.css';
// // import './Image.css';
// // class Image extends Component {
// //   render() {
// //       return (
// //         <img className='myCat' src={this.props.source} alt={this.props.alternativeText} />  
// //       );
// //     }
// // }
// // export default Image;

// // arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
 }

 export default Image;