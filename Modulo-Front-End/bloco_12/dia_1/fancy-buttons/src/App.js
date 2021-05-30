import React from 'react';
import './App.css';
import ButonOne from './components/ButtonOne';
import ButtonThree from './components/ButtonThree';
import ButtonTwo from './components/ButtonTwo';

class App extends React.Component {
  // constructor(){
  //     super()
  //     // this.handlao = this.handlao.bind(this)
  //     this.handleClick = this.handleClick.bind(this)
  //     this.handleClick1 = this.handleClick1.bind(this)
  //     // this.handleClick2 = this.handleClick2.bind(this)
  //     this.state = {
  //       content: 'Estado Inicial',
  //       valor: 0
                
  //     }
  // }    

  // handleUpdate = () => {
  //   this.setState((statePrevious, _props) => ({
  //     valor: statePrevious.valor + 1
  //   }))
  // }
    
  // handleClick() {
  //   alert('Botão clicado')
  //   const btn = document.querySelector('.btn')
  //   btn.style.background = 'blue'      
  //   this.handlao()
  // }

  // handleClick1() {
  //   alert('saiu de mim')
  //   const btn1 = document.querySelector('.btn1')
  //   btn1.style.background = 'yellow'      
  //   this.handlao()      
  // }

  // handleClick2 = (color) => {
  //   alert('ponteiro em mim')
  //   const gerlane = document.querySelector('.gerlane')
  //   gerlane.style.background = color      
  //   this.handlao()      
  // }

  // handlao = () => {
  //   this.setState({
  //     content: 'Estado Alterado'
  //   })
  // }

 
  render() {
   // alert(this.state.content)
    return (
      <span>
      {/* <button className="gerlane" onMouseOver={() => this.handleClick2('green')}>
      Coloque o ponteiro em Mim!!!
      </button>
      <button className='btn' onClick={this.handleClick}>
      Clique em Mim!!!
      </button>  
      <button className='btn1' onMouseLeave={this.handleClick1}>
      Saia com o ponteiro de Mim!!!
      </button>  
      <button onClick={this.handleUpdate}>
        {this.state.valor}  
      </button> */}
        
       <ButonOne />
       <ButtonTwo />
       <ButtonThree /> 

      </span>
    );
  }
}

export default App;
