import { Component } from 'react';
import './App.css';
import Alternative from './pages/Alternative';
import Home from './pages/Home';
import Main from './pages/Main';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <header className='header'>
        <Link className='menus' to='Home.jsx'>Home </Link>
        <Route path='/home.jsx' component={Home} />
        <Link className='menus' to='Main.jsx'> Main </Link>
        <Route path='/main.jsx' component={Main} />
        <Link className='menus' to='Alternative.jsx'> Alternative </Link>
        <Route path='/alternative.jsx' component={Alternative} />
      </header>
    )
  }
}

export default App;
