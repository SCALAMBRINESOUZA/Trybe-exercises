import React from 'react';
import './App.css';
import Component from './components/Component'
import myPhoto from './images/myPhoto.jpg'
import Noix from './images/Noix.jpg'


// const commitments = ['Estudar', 'Entender', 'Trabalhar', 'Aplicar']
// const task = () => { ( <ul> {commitments.map((commitment => <li>{commitment}</li>))} </ul>)};

class App extends React.Component {
  render() {
    return (
      // <nav>{console.log(task())}</nav> 
       <section>
       <Component 
       img={myPhoto}
       name='Carlos Henrique Scalambrine de Souza'
       paragraph='Dedicação e comprometimento estruturam meus pilares'
      />

       <div className='div'> 
       <Component 
       img={Noix}
       name='Minha familia as pessoas que eu amo'
       paragraph='As vezes brigamos mas sempre acabamos nos entendendo'
      />
      </div>
      </section>
    )  
      
      
    
  }
      
}

export default App;
