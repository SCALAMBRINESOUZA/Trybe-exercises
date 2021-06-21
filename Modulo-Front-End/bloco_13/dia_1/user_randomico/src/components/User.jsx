import React, { Component } from 'react';
import '../components/User.css'
import MainTwo from './MainTwo';
// import Aside from './Aside';
// import Footer from './Footer';
// import MainTwo from './MainTwo';

export default class User extends Component {
  constructor() {
    super()
    this.state = {
      name: [],
    }
    this.fetchApi = this.fetchApi.bind(this);

  }

  componentDidMount() {
    this.fetchApi();
  }
  
 async fetchApi() {
    const endPoint = await fetch('https://api.randomuser.me')
    const response = await endPoint.json()
    this.setState({name: response.results[0].name.first})
  }

  render() {
    const { name } = this.state
    
    return (
      // <h1>{name}</h1>
      <MainTwo dates={name}/>
    //    <>
    // {/* //   <header className='cabecalho'>
    // //     <h1 style={{ color: 'white', textAlign: 'center'}} >BUSCA DE API Random User </h1>
    // //   </header>
    // //   <main> <MainTwo /> </main>
    // //   <section> <Aside /> </section>
    // //   <footer> <Footer /></footer>
    //   </> 
    // <>
    // </>
    
    )
  }
}

