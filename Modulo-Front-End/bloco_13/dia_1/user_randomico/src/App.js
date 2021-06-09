import { Component } from 'react';
import './App.css';
import Alternative from './pages/Alternative';
import Home from './pages/Home';
import Main from './pages/Main';
import { Link, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <header className='header'>
      <span>
        <Link className='menus' to='Home.jsx'>Home </Link>
      </span>
      
      <span> 
        <Link className='menus' to='Main.jsx'> Main </Link>
      </span>
      
      <span>
        <Link className='menus' to='Alternative.jsx'> Alternative </Link>
      </span>

        <div className='div'>
          <Switch>
            <Route path='/home.jsx' component={Home} />
            <Route path='/main.jsx' component={Main} />
            <Route path='/alternative.jsx' component={Alternative} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          </Switch>
        </div>

      </header>
    )
  }
}

export default App;
