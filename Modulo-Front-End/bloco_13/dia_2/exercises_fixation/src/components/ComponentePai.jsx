import React, { Component } from 'react'

class ComponentePai extends Component {
  render() {
    return (
      <> {this.props.children}</>
    )
  }
}

export const ComponentePai1 = (props) => {
  return ( <> {props.children} </> )
}
export default ComponentePai;