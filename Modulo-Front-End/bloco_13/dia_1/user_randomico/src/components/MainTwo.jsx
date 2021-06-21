import React, { Component } from 'react';
import '../components/MainTwo.css'

export default class MainTwo extends Component {
  render() {
      const { dates } = this.props
    return (
    //   <img className ='img'src="https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/boa-noite-para-rir-muito.jpg?resize=513%2C490&ssl=1" alt='imagem renderizada'/>
    <h1>{dates}</h1>
    )
  }
}