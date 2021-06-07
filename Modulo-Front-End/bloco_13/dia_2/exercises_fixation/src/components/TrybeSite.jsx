import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Sobre from '../Sobre'
import Contato from '../Contato'
import Aulas from '../Aulas'
import Home from '../Home'


class TrybeSite extends Component {
  render() {
    return (
      <>
      <header className='header-site'>
      <nav>
      <span className='logo-site '>
      <Link to="/home">Home</Link>
      </span>
      <span className='link-site'>
        <Link to="/sobre">Sobre</Link>
      </span>
      <span className='link-site'>
        <Link to="/aulas">Aulas</Link>
      </span>
      <span className='link-site'>
        <Link to="/contato">Contato</Link>
      </span>
      </nav>
      </header>

      <div className='content-site'>        
        <Switch>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/aulas" component={Aulas}/>
          <Route path="/contato" render={() => <Contato ele='hello'  />}/>
          <Route exact path="/home"> <Home /></Route>
        </Switch>
        </div>
      </>
    )
  }
    
}

export default TrybeSite